-- Add phone number support to users table
ALTER TABLE public.users 
ADD COLUMN phone_number TEXT UNIQUE,
ADD COLUMN phone_verified BOOLEAN DEFAULT FALSE,
ADD COLUMN email_verified BOOLEAN DEFAULT FALSE;

-- Create index for phone number lookups
CREATE INDEX idx_users_phone_number ON public.users(phone_number);

-- Update the users table to allow either email or phone number
-- Remove the NOT NULL constraint from email temporarily to allow phone-only users
ALTER TABLE public.users ALTER COLUMN email DROP NOT NULL;

-- Add a check constraint to ensure either email or phone is provided
ALTER TABLE public.users 
ADD CONSTRAINT check_email_or_phone 
CHECK (email IS NOT NULL OR phone_number IS NOT NULL);

-- Create a function to handle user creation with phone/email
CREATE OR REPLACE FUNCTION create_user_profile()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email, phone_number, email_verified, phone_verified)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'phone_number',
    NEW.email_confirmed_at IS NOT NULL,
    NEW.phone_confirmed_at IS NOT NULL
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to automatically create user profile
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION create_user_profile();

-- Update RLS policies to handle phone number authentication
CREATE POLICY "Users can view own profile by phone" ON public.users
  FOR SELECT USING (
    auth.uid() = id OR 
    (phone_number IS NOT NULL AND auth.jwt() ->> 'phone' = phone_number)
  );

-- Create function to get user by email or phone
CREATE OR REPLACE FUNCTION get_user_by_identifier(identifier TEXT)
RETURNS TABLE (
  id UUID,
  email TEXT,
  phone_number TEXT,
  full_name TEXT,
  role TEXT,
  affiliation TEXT,
  orcid TEXT,
  bio TEXT,
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
    u.created_at,
    u.updated_at
  FROM public.users u
  WHERE u.email = identifier OR u.phone_number = identifier;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission to authenticated users
GRANT EXECUTE ON FUNCTION get_user_by_identifier(TEXT) TO authenticated;
