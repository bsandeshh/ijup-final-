# Authentication System Setup Guide

This guide explains how to set up and use the comprehensive authentication system that supports both email and phone number login with Supabase.

## Features

- ✅ Email and Phone Number Authentication
- ✅ Secure Password Management
- ✅ User Profile Management
- ✅ Role-based Access Control (Author, Reviewer, Editor, Admin)
- ✅ Session Management
- ✅ Password Reset Functionality
- ✅ Protected Routes
- ✅ Authentication Guards

## Database Schema

The authentication system uses the following database structure:

### Users Table
```sql
CREATE TABLE public.users (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE,
  phone_number TEXT UNIQUE,
  full_name TEXT,
  role TEXT NOT NULL DEFAULT 'author' CHECK (role IN ('author', 'reviewer', 'editor', 'admin')),
  affiliation TEXT,
  orcid TEXT,
  bio TEXT,
  email_verified BOOLEAN DEFAULT FALSE,
  phone_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  CONSTRAINT check_email_or_phone CHECK (email IS NOT NULL OR phone_number IS NOT NULL)
);
```

### Key SQL Functions

1. **User Authentication by Email/Phone**
```sql
SELECT * FROM authenticate_user('user@example.com', 'password_hash');
SELECT * FROM authenticate_user('+1234567890', 'password_hash');
```

2. **Get User Profile**
```sql
SELECT * FROM get_user_profile('user@example.com');
SELECT * FROM get_user_profile('+1234567890');
```

3. **Check Identifier Exists**
```sql
SELECT check_identifier_exists('user@example.com');
SELECT check_identifier_exists('+1234567890');
```

4. **User Statistics**
```sql
SELECT * FROM get_user_stats('user-uuid');
```

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in your project root:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 2. Database Migration

Run the database migrations to set up the authentication tables:

```bash
# Apply the enhanced auth system migration
supabase migration up
```

### 3. Supabase Configuration

In your Supabase dashboard:

1. Enable Email Authentication
2. Enable Phone Authentication (optional)
3. Configure email templates
4. Set up RLS policies (already included in migrations)

## Usage Examples

### 1. Basic Authentication

```tsx
import { useAuth } from './hooks/useAuth'

function LoginComponent() {
  const { login, user, loading } = useAuth()

  const handleLogin = async () => {
    const { user, error } = await login({
      identifier: 'user@example.com', // or '+1234567890'
      password: 'password123'
    })

    if (error) {
      console.error('Login failed:', error.message)
    } else {
      console.log('Login successful:', user)
    }
  }

  if (loading) return <div>Loading...</div>
  if (user) return <div>Welcome, {user.email}!</div>

  return <button onClick={handleLogin}>Sign In</button>
}
```

### 2. User Registration

```tsx
import { useAuth } from './hooks/useAuth'

function SignupComponent() {
  const { signup } = useAuth()

  const handleSignup = async () => {
    const { user, error } = await signup({
      email: 'user@example.com',
      password: 'password123',
      fullName: 'John Doe',
      phoneNumber: '+1234567890',
      affiliation: 'University of Example',
      role: 'author'
    })

    if (error) {
      console.error('Signup failed:', error.message)
    } else {
      console.log('Signup successful:', user)
    }
  }

  return <button onClick={handleSignup}>Create Account</button>
}
```

### 3. Protected Routes

```tsx
import { ProtectedRoute } from './components/Auth/ProtectedRoute'

function App() {
  return (
    <div>
      <ProtectedRoute requiredRole="editor">
        <EditorDashboard />
      </ProtectedRoute>
      
      <ProtectedRoute requiredRole="admin">
        <AdminPanel />
      </ProtectedRoute>
    </div>
  )
}
```

### 4. Authentication Guards

```tsx
import { AuthGuard, withAuth } from './components/Auth/AuthGuard'

// Using AuthGuard component
function ProtectedPage() {
  return (
    <AuthGuard requireAuth requireRole="reviewer">
      <ReviewerDashboard />
    </AuthGuard>
  )
}

// Using HOC
const ProtectedComponent = withAuth(MyComponent, {
  requireAuth: true,
  requireRole: 'editor'
})
```

### 5. User Profile Management

```tsx
import { useAuth } from './hooks/useAuth'

function ProfileComponent() {
  const { user, updateProfile, getUserStats } = useAuth()

  const handleUpdateProfile = async () => {
    const { error } = await updateProfile({
      fullName: 'Updated Name',
      affiliation: 'New University',
      bio: 'Updated bio'
    })

    if (error) {
      console.error('Update failed:', error.message)
    }
  }

  const loadUserStats = async () => {
    if (user) {
      const { data: stats } = await getUserStats(user.id)
      console.log('User stats:', stats)
    }
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user?.user_metadata?.full_name}</p>
      <p>Email: {user?.email}</p>
      <p>Role: {user?.user_metadata?.role}</p>
      <button onClick={handleUpdateProfile}>Update Profile</button>
      <button onClick={loadUserStats}>Load Stats</button>
    </div>
  )
}
```

### 6. Password Reset

```tsx
import { useAuth } from './hooks/useAuth'

function PasswordResetComponent() {
  const { resetPassword, resetPasswordWithPhone } = useAuth()

  const handleEmailReset = async () => {
    const { error } = await resetPassword('user@example.com')
    if (error) {
      console.error('Reset failed:', error.message)
    } else {
      console.log('Reset email sent')
    }
  }

  const handlePhoneReset = async () => {
    const { error } = await resetPasswordWithPhone('+1234567890')
    if (error) {
      console.error('Reset failed:', error.message)
    } else {
      console.log('Reset email sent to registered email')
    }
  }

  return (
    <div>
      <button onClick={handleEmailReset}>Reset with Email</button>
      <button onClick={handlePhoneReset}>Reset with Phone</button>
    </div>
  )
}
```

## API Reference

### AuthService Methods

- `signIn(credentials: LoginCredentials)` - Sign in with email or phone
- `signInWithPhone(phone: string, password: string)` - Sign in with phone number
- `signUp(credentials: SignupCredentials)` - Create new user account
- `signOut()` - Sign out current user
- `resetPassword(email: string)` - Reset password with email
- `resetPasswordWithPhone(phone: string)` - Reset password with phone
- `updateProfile(updates: Partial<UserProfile>)` - Update user profile
- `isEmail(identifier: string)` - Check if identifier is email
- `isValidEmail(email: string)` - Validate email format
- `isValidPhone(phone: string)` - Validate phone format

### Database Functions

- `authenticate_user(identifier, password_hash)` - Authenticate user
- `get_user_profile(identifier)` - Get user profile by email/phone
- `update_user_profile(user_id, profile_data)` - Update user profile
- `check_identifier_exists(identifier)` - Check if email/phone exists
- `get_user_stats(user_id)` - Get user statistics
- `validate_user_credentials(identifier)` - Validate user credentials

## Security Features

1. **Row Level Security (RLS)** - All tables have RLS policies
2. **Password Hashing** - Handled by Supabase Auth
3. **Session Management** - Automatic token refresh
4. **Input Validation** - Email and phone format validation
5. **Role-based Access** - Hierarchical permission system

## Troubleshooting

### Common Issues

1. **"User not found with this phone number"**
   - Ensure the phone number is registered in the users table
   - Check if the phone number format is correct

2. **"Email already exists"**
   - The email is already registered
   - Use a different email or try signing in

3. **"Invalid email format"**
   - Check the email format (must contain @ and domain)

4. **"Invalid phone format"**
   - Phone number should contain only digits and optional + prefix

### Database Connection Issues

1. Check your Supabase URL and API key
2. Ensure the database migrations have been applied
3. Verify RLS policies are correctly set up

## Testing

You can test the authentication system using the provided components:

1. `AuthPage` - Complete authentication demo page
2. `LoginForm` - Email/phone login form
3. `SignupForm` - User registration form
4. `UserMenu` - User profile and logout menu

## Support

For issues or questions:
1. Check the Supabase documentation
2. Review the database migrations
3. Verify environment variables
4. Check browser console for errors