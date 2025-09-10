# Authentication Setup Guide

This guide explains how to set up and use the authentication system with Supabase that supports both email and phone number login.

## Features

- ✅ Email and phone number login/signup
- ✅ Password validation
- ✅ User session management
- ✅ Logout functionality
- ✅ User profile management
- ✅ Input validation
- ✅ Error handling
- ✅ Responsive UI components

## Database Schema

The authentication system uses the following tables:

### Users Table
```sql
CREATE TABLE public.users (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  email text UNIQUE,
  phone text UNIQUE,
  password_hash text NOT NULL,
  name text,
  is_active boolean NOT NULL DEFAULT true,
  email_verified boolean NOT NULL DEFAULT false,
  phone_verified boolean NOT NULL DEFAULT false,
  last_login timestamp with time zone,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT users_pkey PRIMARY KEY (id),
  CONSTRAINT users_email_or_phone CHECK (email IS NOT NULL OR phone IS NOT NULL)
);
```

### Additional Tables
- `user_sessions` - For tracking active sessions
- `password_reset_tokens` - For password reset functionality
- `email_verification_tokens` - For email verification
- `phone_verification_tokens` - For phone verification

## Setup Instructions

### 1. Environment Variables

Create a `.env` file in your project root with your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 2. Database Setup

Run the SQL schema from `database_schema.sql` in your Supabase SQL editor:

1. Go to your Supabase dashboard
2. Navigate to SQL Editor
3. Copy and paste the contents of `database_schema.sql`
4. Execute the script

### 3. Supabase Configuration

Make sure your Supabase project has the following settings:

1. **Authentication Settings:**
   - Enable email authentication
   - Set up email templates for confirmation and password reset
   - Configure redirect URLs

2. **Row Level Security (RLS):**
   - The schema includes RLS policies for data security
   - Users can only access their own data

## Usage

### 1. Import Components

```tsx
import { AuthModal } from './components/Auth/AuthModal'
import { UserProfile } from './components/Auth/UserProfile'
import { useAuth } from './context/AuthContext'
```

### 2. Using the Auth Context

```tsx
import { useAuth } from './context/AuthContext'

function MyComponent() {
  const { user, signIn, signOut, loading } = useAuth()

  const handleLogin = async () => {
    const { user, session, error } = await signIn({
      email: 'user@example.com', // or phone: '+1234567890'
      password: 'password123'
    })
    
    if (error) {
      console.error('Login failed:', error.message)
    } else {
      console.log('Login successful:', user)
    }
  }

  const handleLogout = async () => {
    const { error } = await signOut()
    if (error) {
      console.error('Logout failed:', error.message)
    }
  }

  if (loading) return <div>Loading...</div>

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.user_metadata?.name || user.email}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  )
}
```

### 3. Using the Auth Modal

```tsx
import { useState } from 'react'
import { AuthModal } from './components/Auth/AuthModal'

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false)

  return (
    <div>
      <button onClick={() => setShowAuthModal(true)}>
        Login / Sign Up
      </button>
      
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={() => {
          console.log('Authentication successful!')
          setShowAuthModal(false)
        }}
        initialMode="login" // or "signup"
      />
    </div>
  )
}
```

### 4. Using the User Profile Component

```tsx
import { UserProfile } from './components/Auth/UserProfile'

function Header() {
  return (
    <header>
      <div className="flex items-center justify-between">
        <h1>My App</h1>
        <UserProfile onLogout={() => console.log('User logged out')} />
      </div>
    </header>
  )
}
```

## API Reference

### AuthService Methods

#### `signUp(credentials: SignUpCredentials)`
Creates a new user account.

```tsx
const { user, session, error } = await AuthService.signUp({
  email: 'user@example.com', // or phone: '+1234567890'
  password: 'password123',
  name: 'John Doe'
})
```

#### `signIn(credentials: LoginCredentials)`
Authenticates a user.

```tsx
const { user, session, error } = await AuthService.signIn({
  email: 'user@example.com', // or phone: '+1234567890'
  password: 'password123'
})
```

#### `signOut()`
Signs out the current user.

```tsx
const { error } = await AuthService.signOut()
```

#### `resetPassword(email: string)`
Sends a password reset email.

```tsx
const { error } = await AuthService.resetPassword('user@example.com')
```

#### `updateProfile(updates)`
Updates user profile information.

```tsx
const { error } = await AuthService.updateProfile({
  name: 'New Name',
  phone: '+1234567890'
})
```

## Validation Rules

### Email Validation
- Must contain @ symbol
- Must have valid domain format

### Phone Validation
- 7-15 digits (non-digit characters are stripped)
- International format supported

### Password Validation
- Minimum 6 characters
- No maximum length limit

## Error Handling

All authentication methods return an error object on failure:

```tsx
const { user, session, error } = await signIn(credentials)

if (error) {
  switch (error.message) {
    case 'Invalid email format':
      // Handle invalid email
      break
    case 'Invalid phone number format':
      // Handle invalid phone
      break
    case 'Password must be at least 6 characters long':
      // Handle weak password
      break
    default:
      // Handle other errors
      console.error('Authentication error:', error.message)
  }
}
```

## Security Features

1. **Password Hashing**: Passwords are hashed using Supabase's built-in security
2. **Row Level Security**: Database policies ensure users can only access their own data
3. **Session Management**: Secure session tokens with expiration
4. **Input Validation**: Client-side validation prevents malicious input
5. **CSRF Protection**: Supabase handles CSRF protection automatically

## Troubleshooting

### Common Issues

1. **"Missing Supabase environment variables"**
   - Ensure `.env` file exists with correct variables
   - Restart your development server after adding environment variables

2. **"Invalid email format"**
   - Check email validation regex
   - Ensure email contains @ symbol and valid domain

3. **"No account found with this phone number"**
   - User must sign up with phone number first
   - Check if phone number is correctly formatted

4. **Database connection issues**
   - Verify Supabase URL and API key
   - Check if database schema is properly set up
   - Ensure RLS policies are correctly configured

### Testing

To test the authentication flow:

1. Start your development server: `npm run dev`
2. Open the application in your browser
3. Try signing up with both email and phone number
4. Test login with both credentials
5. Verify logout functionality
6. Check user profile display

## Next Steps

1. Add email verification flow
2. Implement phone number verification
3. Add password reset functionality
4. Create admin user management
5. Add social login (Google, Facebook, etc.)
6. Implement two-factor authentication