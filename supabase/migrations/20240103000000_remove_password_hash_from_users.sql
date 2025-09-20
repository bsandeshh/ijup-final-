-- Remove password_hash column from users table since Supabase Auth handles passwords
ALTER TABLE public.users DROP COLUMN IF EXISTS password_hash;
