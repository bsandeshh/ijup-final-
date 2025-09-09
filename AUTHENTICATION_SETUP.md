# Login/Logout Backend with Supabase

This project implements a complete authentication system with email and phone number support using Supabase.

## Features

- ✅ Email-based authentication
- ✅ Phone number-based authentication  
- ✅ Automatic input type detection
- ✅ Form validation
- ✅ Password reset functionality
- ✅ User profile management
- ✅ Row Level Security (RLS)
- ✅ Session management
- ✅ TypeScript support

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 2. Database Setup

Run the SQL migrations to set up the database schema:

```bash
# Apply migrations
supabase db push

# Or for local development
supabase migration up
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

### 5. Test Authentication

Visit `http://localhost:5173/auth-demo` to test the authentication system.

## Database Schema

The system uses the following main tables:

- `auth.users` - Supabase built-in authentication table
- `public.users` - Extended user profiles with phone support
- `public.papers` - Research papers
- `public.reviews` - Paper reviews
- `public.paper_assignments` - Editor assignments

## SQL Queries

All SQL queries are documented in `SQL_QUERIES.md`. Key queries include:

- User creation with phone/email support
- Authentication verification
- Profile management
- Admin queries
- Security policies

## Components

### Auth Components

- `LoginForm` - Login with email or phone
- `SignupForm` - Registration with email or phone
- `AuthModal` - Modal wrapper for auth forms
- `AuthButton` - Smart button that shows login/logout
- `AuthStatus` - Display current auth status

### Usage Example

```tsx
import { AuthButton, useAuthState } from './components/Auth'

function MyComponent() {
  const { isAuthenticated, user } = useAuthState()
  
  return (
    <div>
      {isAuthenticated ? (
        <p>Welcome, {user?.email || user?.phone}!</p>
      ) : (
        <p>Please sign in</p>
      )}
      <AuthButton />
    </div>
  )
}
```

## API Methods

### Authentication Context Methods

```typescript
const {
  signUp,              // Email signup
  signUpWithPhone,     // Phone signup
  signIn,              // Email signin
  signInWithPhone,     // Phone signin
  signInWithIdentifier, // Auto-detect email/phone
  signOut,             // Logout
  resetPassword,       // Email password reset
  resetPasswordWithPhone, // Phone password reset
  updateProfile,       // Update user profile
  verifyPhone,         // Verify phone number
  user,                // Current user
  session,             // Current session
  loading              // Loading state
} = useAuth()
```

## Validation Utilities

```typescript
import { 
  validateEmail, 
  validatePhoneNumber, 
  isEmailOrPhone, 
  normalizeIdentifier 
} from './utils/authValidation'

// Validate email
validateEmail('user@example.com') // true

// Validate phone
validatePhoneNumber('+1234567890') // true

// Detect input type
isEmailOrPhone('user@example.com') // 'email'
isEmailOrPhone('+1234567890') // 'phone'

// Normalize identifier
normalizeIdentifier('user@example.com') // 'user@example.com'
normalizeIdentifier('1234567890') // '+11234567890'
```

## Security Features

- Row Level Security (RLS) policies
- JWT token authentication
- Automatic session management
- Password strength validation
- Input sanitization
- CSRF protection via Supabase

## File Structure

```
src/
├── components/
│   └── Auth/
│       ├── LoginForm.tsx      # Login component
│       ├── SignupForm.tsx     # Signup component
│       ├── AuthModal.tsx      # Modal wrapper
│       └── index.ts          # Exports
├── context/
│   └── AuthContext.tsx       # Authentication context
├── utils/
│   └── authValidation.ts     # Validation utilities
├── pages/
│   └── AuthExamplePage.tsx   # Demo page
└── lib/
    └── supabase.ts           # Supabase client
```

## Testing

1. Start the development server
2. Navigate to `/auth-demo`
3. Test both email and phone number authentication
4. Verify user profiles are created correctly
5. Test logout functionality

## Troubleshooting

### Common Issues

1. **Environment variables not loaded**
   - Ensure `.env.local` file exists
   - Restart the development server

2. **Database connection errors**
   - Verify Supabase URL and key
   - Check if migrations are applied

3. **Authentication not working**
   - Check browser console for errors
   - Verify RLS policies are enabled
   - Ensure user profiles are being created

### Debug Mode

Enable debug logging by adding to your environment:

```env
VITE_SUPABASE_DEBUG=true
```

## Production Deployment

1. Set up production Supabase project
2. Update environment variables
3. Run migrations on production database
4. Deploy application
5. Test authentication flow

## Support

For issues or questions:
1. Check the SQL_QUERIES.md file
2. Review Supabase documentation
3. Check browser console for errors
4. Verify database schema matches migrations