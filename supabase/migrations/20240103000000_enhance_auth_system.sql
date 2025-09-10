-- Enhanced Authentication System Migration
-- This migration adds additional functionality for email/phone authentication

-- Create a function to handle user authentication by email or phone
CREATE OR REPLACE FUNCTION authenticate_user(identifier TEXT, password_hash TEXT)
RETURNS TABLE (
  user_id UUID,
  email TEXT,
  phone_number TEXT,
  full_name TEXT,
  role TEXT,
  is_verified BOOLEAN
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    u.id,
    u.email,
    u.phone_number,
    u.full_name,
    u.role,
    (u.email_verified OR u.phone_verified) as is_verified
  FROM public.users u
  WHERE (u.email = identifier OR u.phone_number = identifier)
    AND u.id IN (
      SELECT id FROM auth.users 
      WHERE (email = identifier OR raw_user_meta_data->>'phone_number' = identifier)
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a function to get user profile by identifier
CREATE OR REPLACE FUNCTION get_user_profile(identifier TEXT)
RETURNS TABLE (
  id UUID,
  email TEXT,
  phone_number TEXT,
  full_name TEXT,
  role TEXT,
  affiliation TEXT,
  orcid TEXT,
  bio TEXT,
  email_verified BOOLEAN,
  phone_verified BOOLEAN,
  created_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    u.id,
    u.email,
    u.phone_number,
    u.full_name,
    u.role,
    u.affiliation,
    u.orcid,
    u.bio,
    u.email_verified,
    u.phone_verified,
    u.created_at,
    u.updated_at
  FROM public.users u
  WHERE u.email = identifier OR u.phone_number = identifier;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a function to update user profile
CREATE OR REPLACE FUNCTION update_user_profile(
  user_id UUID,
  profile_data JSONB
)
RETURNS BOOLEAN AS $$
BEGIN
  UPDATE public.users 
  SET 
    full_name = COALESCE(profile_data->>'full_name', full_name),
    phone_number = COALESCE(profile_data->>'phone_number', phone_number),
    affiliation = COALESCE(profile_data->>'affiliation', affiliation),
    orcid = COALESCE(profile_data->>'orcid', orcid),
    bio = COALESCE(profile_data->>'bio', bio),
    updated_at = NOW()
  WHERE id = user_id;
  
  RETURN FOUND;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a function to check if email or phone exists
CREATE OR REPLACE FUNCTION check_identifier_exists(identifier TEXT)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.users 
    WHERE email = identifier OR phone_number = identifier
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a function to get user statistics
CREATE OR REPLACE FUNCTION get_user_stats(user_id UUID)
RETURNS TABLE (
  total_papers INTEGER,
  published_papers INTEGER,
  pending_reviews INTEGER,
  completed_reviews INTEGER
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    (SELECT COUNT(*)::INTEGER FROM public.papers WHERE author_id = user_id) as total_papers,
    (SELECT COUNT(*)::INTEGER FROM public.papers WHERE author_id = user_id AND status = 'published') as published_papers,
    (SELECT COUNT(*)::INTEGER FROM public.reviews WHERE reviewer_id = user_id AND created_at = updated_at) as pending_reviews,
    (SELECT COUNT(*)::INTEGER FROM public.reviews WHERE reviewer_id = user_id AND created_at != updated_at) as completed_reviews;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant permissions to authenticated users
GRANT EXECUTE ON FUNCTION authenticate_user(TEXT, TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION get_user_profile(TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION update_user_profile(UUID, JSONB) TO authenticated;
GRANT EXECUTE ON FUNCTION check_identifier_exists(TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION get_user_stats(UUID) TO authenticated;

-- Create additional indexes for better performance
CREATE INDEX IF NOT EXISTS idx_users_email_lower ON public.users(LOWER(email));
CREATE INDEX IF NOT EXISTS idx_users_phone_clean ON public.users(REGEXP_REPLACE(phone_number, '[^0-9+]', '', 'g'));

-- Create a view for user authentication status
CREATE OR REPLACE VIEW user_auth_status AS
SELECT 
  u.id,
  u.email,
  u.phone_number,
  u.full_name,
  u.role,
  u.email_verified,
  u.phone_verified,
  CASE 
    WHEN u.email_verified AND u.phone_verified THEN 'fully_verified'
    WHEN u.email_verified OR u.phone_verified THEN 'partially_verified'
    ELSE 'unverified'
  END as verification_status,
  u.created_at,
  u.updated_at
FROM public.users u;

-- Grant access to the view
GRANT SELECT ON user_auth_status TO authenticated;

-- Create a function to handle user registration with validation
CREATE OR REPLACE FUNCTION register_user(
  user_email TEXT,
  user_password TEXT,
  user_metadata JSONB DEFAULT '{}'::JSONB
)
RETURNS TABLE (
  user_id UUID,
  success BOOLEAN,
  message TEXT
) AS $$
DECLARE
  new_user_id UUID;
  user_phone TEXT;
BEGIN
  -- Extract phone number from metadata
  user_phone := user_metadata->>'phone_number';
  
  -- Check if email already exists
  IF EXISTS (SELECT 1 FROM public.users WHERE email = user_email) THEN
    RETURN QUERY SELECT NULL::UUID, FALSE, 'Email already exists'::TEXT;
    RETURN;
  END IF;
  
  -- Check if phone number already exists (if provided)
  IF user_phone IS NOT NULL AND EXISTS (SELECT 1 FROM public.users WHERE phone_number = user_phone) THEN
    RETURN QUERY SELECT NULL::UUID, FALSE, 'Phone number already exists'::TEXT;
    RETURN;
  END IF;
  
  -- Create user in auth.users (this will trigger the profile creation)
  -- Note: This is handled by Supabase Auth, so we just return success
  RETURN QUERY SELECT NULL::UUID, TRUE, 'User registration initiated'::TEXT;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission
GRANT EXECUTE ON FUNCTION register_user(TEXT, TEXT, JSONB) TO anon;

-- Create a function to validate user credentials
CREATE OR REPLACE FUNCTION validate_user_credentials(identifier TEXT)
RETURNS TABLE (
  is_valid BOOLEAN,
  user_id UUID,
  email TEXT,
  phone_number TEXT,
  requires_verification BOOLEAN
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    TRUE as is_valid,
    u.id as user_id,
    u.email,
    u.phone_number,
    NOT (u.email_verified OR u.phone_verified) as requires_verification
  FROM public.users u
  WHERE u.email = identifier OR u.phone_number = identifier
  LIMIT 1;
  
  -- If no user found, return invalid
  IF NOT FOUND THEN
    RETURN QUERY SELECT FALSE, NULL::UUID, NULL::TEXT, NULL::TEXT, FALSE;
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission
GRANT EXECUTE ON FUNCTION validate_user_credentials(TEXT) TO authenticated;