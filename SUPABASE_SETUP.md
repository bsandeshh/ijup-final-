# Supabase Backend Setup

This project is now configured with Supabase as the backend. Follow these steps to complete the setup:

## 1. Environment Variables

1. Copy the environment template:
   ```bash
   cp .env.example .env
   ```

2. Fill in your Supabase project details in `.env`:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

## 2. Supabase Project Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key from the project settings
3. Update the `.env` file with your credentials

## 3. Database Setup

### Option A: Using Remote Database (Recommended for production)

1. Link your project:
   ```bash
   npm run supabase:link
   ```
   Replace `YOUR_PROJECT_REF` with your actual project reference.

2. Push the schema to your remote database:
   ```bash
   npm run supabase:db-push
   ```

3. Generate TypeScript types:
   ```bash
   npm run supabase:gen-types-remote
   ```
   Replace `YOUR_PROJECT_ID` with your actual project ID.

### Option B: Using Local Development

1. Start local Supabase:
   ```bash
   npm run supabase:start
   ```

2. Apply migrations:
   ```bash
   npm run supabase:migration-up
   ```

3. Generate TypeScript types:
   ```bash
   npm run supabase:gen-types
   ```

## 4. Available Scripts

- `npm run supabase:start` - Start local Supabase development environment
- `npm run supabase:stop` - Stop local Supabase
- `npm run supabase:status` - Check Supabase status
- `npm run supabase:reset` - Reset local database
- `npm run supabase:gen-types` - Generate TypeScript types from local database
- `npm run supabase:gen-types-remote` - Generate TypeScript types from remote database
- `npm run supabase:db-push` - Push local changes to remote database
- `npm run supabase:db-pull` - Pull remote changes to local database
- `npm run supabase:migration-new` - Create a new migration
- `npm run supabase:migration-up` - Apply pending migrations
- `npm run supabase:link` - Link to remote Supabase project

## 5. Database Schema

The database includes the following tables:

- **users** - Extended user profiles (extends Supabase auth.users)
- **papers** - Research papers with metadata
- **reviews** - Paper reviews by reviewers
- **paper_assignments** - Editor assignments for papers

## 6. Authentication

The app now includes:
- User authentication via Supabase Auth
- Role-based access control (author, reviewer, editor, admin)
- Row Level Security (RLS) policies for data protection

## 7. Usage in Components

### Authentication
```tsx
import { useAuth } from '../context/AuthContext';

function MyComponent() {
  const { user, signIn, signOut, loading } = useAuth();
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.email}!</p>
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <button onClick={() => signIn('email@example.com', 'password')}>
          Sign In
        </button>
      )}
    </div>
  );
}
```

### Database Operations
```tsx
import { useAppContext } from '../context/AppContext';

function PapersComponent() {
  const { papers, fetchPapers, createPaper } = useAppContext();
  
  useEffect(() => {
    fetchPapers();
  }, []);
  
  const handleCreatePaper = async () => {
    await createPaper({
      title: 'New Paper',
      abstract: 'Abstract text',
      authors: ['Author Name'],
      keywords: ['keyword1', 'keyword2'],
      status: 'draft'
    });
  };
  
  return (
    <div>
      {papers.map(paper => (
        <div key={paper.id}>{paper.title}</div>
      ))}
    </div>
  );
}
```

## 8. Next Steps

1. Set up your Supabase project and update environment variables
2. Run the database setup commands
3. Test authentication and database operations
4. Customize the schema as needed for your specific requirements
5. Deploy your application with the Supabase backend

## 9. Security Notes

- All database operations are protected by Row Level Security (RLS)
- Users can only access their own data and published papers
- Editors and admins have additional permissions
- Always validate user input before database operations
- Use environment variables for sensitive configuration