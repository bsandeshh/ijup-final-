# SQL Queries for Login/Logout Backend with Supabase

This document contains all the SQL queries needed for the login/logout functionality with email and phone number support.

## 1. Database Schema Updates

### Add Phone Number Support to Users Table
```sql
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
```

### Create User Profile Function
```sql
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
```

## 2. Row Level Security (RLS) Policies

### Update RLS Policies for Phone Authentication
```sql
-- Update RLS policies to handle phone number authentication
CREATE POLICY "Users can view own profile by phone" ON public.users
  FOR SELECT USING (
    auth.uid() = id OR 
    (phone_number IS NOT NULL AND auth.jwt() ->> 'phone' = phone_number)
  );
```

## 3. Utility Functions

### Get User by Email or Phone
```sql
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
```

## 4. Authentication Queries

### Check if User Exists by Email
```sql
SELECT EXISTS(
  SELECT 1 FROM public.users 
  WHERE email = 'user@example.com'
) as user_exists;
```

### Check if User Exists by Phone
```sql
SELECT EXISTS(
  SELECT 1 FROM public.users 
  WHERE phone_number = '+1234567890'
) as user_exists;
```

### Get User Profile by Email or Phone
```sql
-- Using the utility function
SELECT * FROM get_user_by_identifier('user@example.com');
-- or
SELECT * FROM get_user_by_identifier('+1234567890');
```

### Update User Profile
```sql
-- Update user profile (only their own)
UPDATE public.users 
SET 
  full_name = 'John Doe',
  affiliation = 'University of Example',
  updated_at = NOW()
WHERE id = auth.uid();
```

### Check User Verification Status
```sql
SELECT 
  email,
  phone_number,
  email_verified,
  phone_verified,
  CASE 
    WHEN email IS NOT NULL AND email_verified THEN 'email_verified'
    WHEN phone_number IS NOT NULL AND phone_verified THEN 'phone_verified'
    ELSE 'not_verified'
  END as verification_status
FROM public.users 
WHERE id = auth.uid();
```

## 5. Admin Queries

### Get All Users (Admin Only)
```sql
SELECT 
  u.id,
  u.email,
  u.phone_number,
  u.full_name,
  u.role,
  u.email_verified,
  u.phone_verified,
  u.created_at,
  u.updated_at
FROM public.users u
ORDER BY u.created_at DESC;
```

### Get User Statistics
```sql
SELECT 
  COUNT(*) as total_users,
  COUNT(CASE WHEN email IS NOT NULL THEN 1 END) as email_users,
  COUNT(CASE WHEN phone_number IS NOT NULL THEN 1 END) as phone_users,
  COUNT(CASE WHEN email_verified = true THEN 1 END) as verified_email_users,
  COUNT(CASE WHEN phone_verified = true THEN 1 END) as verified_phone_users
FROM public.users;
```

### Search Users by Email or Phone
```sql
SELECT 
  id,
  email,
  phone_number,
  full_name,
  role,
  created_at
FROM public.users 
WHERE 
  email ILIKE '%search_term%' OR 
  phone_number ILIKE '%search_term%' OR 
  full_name ILIKE '%search_term%'
ORDER BY created_at DESC;
```

## 6. Security Queries

### Check User Permissions
```sql
-- Check if current user is admin
SELECT EXISTS(
  SELECT 1 FROM public.users 
  WHERE id = auth.uid() AND role = 'admin'
) as is_admin;

-- Check if current user is editor
SELECT EXISTS(
  SELECT 1 FROM public.users 
  WHERE id = auth.uid() AND role IN ('editor', 'admin')
) as is_editor;
```

### Get User Session Info
```sql
SELECT 
  u.id,
  u.email,
  u.phone_number,
  u.full_name,
  u.role,
  u.created_at,
  s.created_at as session_created_at
FROM public.users u
LEFT JOIN auth.sessions s ON s.user_id = u.id
WHERE u.id = auth.uid();
```

## 7. Migration Commands

To apply these changes to your Supabase database:

```bash
# Apply the migration
supabase db push

# Or if using local development
supabase migration up

# Generate TypeScript types
supabase gen types typescript --local > src/types/database.ts
```

## 8. Environment Variables

Make sure you have these environment variables set:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 9. Usage Examples

### Frontend Authentication Flow

1. **Sign Up with Email:**
   ```typescript
   const { error } = await signUp('user@example.com', 'password123', {
     full_name: 'John Doe'
   });
   ```

2. **Sign Up with Phone:**
   ```typescript
   const { error } = await signUpWithPhone('+1234567890', 'password123', {
     full_name: 'John Doe'
   });
   ```

3. **Sign In with Email or Phone:**
   ```typescript
   const { error } = await signInWithIdentifier('user@example.com', 'password123');
   // or
   const { error } = await signInWithIdentifier('+1234567890', 'password123');
   ```

4. **Sign Out:**
   ```typescript
   const { error } = await signOut();
   ```

This setup provides a complete authentication system that supports both email and phone number login/logout with proper data validation and security policies.