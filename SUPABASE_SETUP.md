# Supabase Backend Setup

This project is now configured with Supabase as the backend. Follow these steps to get started:

## Prerequisites

1. Node.js (v18 or higher)
2. Supabase CLI (already configured to use npx)

## Setup Instructions

### 1. Environment Variables

Copy the environment template and fill in your Supabase project details:

```bash
cp .env.example .env
```

Edit `.env` and add your Supabase project URL and anon key:
```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 2. Local Development

Start the local Supabase development environment:

```bash
npm run supabase:start
```

This will:
- Start a local PostgreSQL database
- Start the Supabase API server
- Start the Supabase Studio (web interface)
- Apply all migrations and seed data

### 3. Access Supabase Studio

Open your browser and go to: http://localhost:54323

This gives you a web interface to:
- View and manage your database
- Test authentication
- View logs
- Manage storage

### 4. Available Scripts

- `npm run supabase:start` - Start local Supabase services
- `npm run supabase:stop` - Stop local Supabase services
- `npm run supabase:status` - Check status of local services
- `npm run supabase:reset` - Reset database and reapply migrations
- `npm run supabase:gen-types` - Generate TypeScript types from database schema
- `npm run supabase:migrate` - Push migrations to remote database
- `npm run supabase:studio` - Open Supabase Studio

### 5. Database Schema

The initial schema includes:

- **papers** - Journal papers with metadata
- **categories** - Paper categories/subjects
- **paper_categories** - Many-to-many relationship
- **reviews** - Peer review system
- **editorial_board** - Editorial team members
- **user_profiles** - Extended user information

### 6. Authentication

The project includes:
- User registration and login
- Password reset functionality
- Row Level Security (RLS) policies
- User profile management

### 7. Production Deployment

When ready for production:

1. Create a Supabase project at https://supabase.com
2. Get your project URL and anon key
3. Update your `.env` file with production values
4. Run migrations: `npm run supabase:migrate`

### 8. Type Generation

After making database changes, regenerate TypeScript types:

```bash
npm run supabase:gen-types
```

This will update `src/lib/database.types.ts` with the latest schema.

## Features Included

- ✅ Supabase client configuration
- ✅ Authentication context and hooks
- ✅ Database schema for journal management
- ✅ Row Level Security policies
- ✅ TypeScript type generation
- ✅ Local development environment
- ✅ Migration system
- ✅ Seed data

## Next Steps

1. Fill in your environment variables
2. Start the local development environment
3. Begin building your journal features using the Supabase client
4. Customize the database schema as needed
5. Deploy to production when ready