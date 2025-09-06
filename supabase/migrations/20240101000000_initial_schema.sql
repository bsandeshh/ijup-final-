-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create users table (extends Supabase auth.users)
CREATE TABLE public.users (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  role TEXT NOT NULL DEFAULT 'author' CHECK (role IN ('author', 'reviewer', 'editor', 'admin')),
  affiliation TEXT,
  orcid TEXT,
  bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create papers table
CREATE TABLE public.papers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  abstract TEXT NOT NULL,
  authors TEXT[] NOT NULL,
  keywords TEXT[] NOT NULL,
  doi TEXT,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'under_review', 'accepted', 'rejected', 'published')),
  volume INTEGER,
  issue INTEGER,
  pages TEXT,
  pdf_url TEXT,
  author_id UUID REFERENCES public.users(id) ON DELETE SET NULL
);

-- Create reviews table
CREATE TABLE public.reviews (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  paper_id UUID REFERENCES public.papers(id) ON DELETE CASCADE NOT NULL,
  reviewer_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comments TEXT NOT NULL,
  recommendation TEXT NOT NULL CHECK (recommendation IN ('accept', 'reject', 'revise')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(paper_id, reviewer_id)
);

-- Create paper_assignments table for editor assignments
CREATE TABLE public.paper_assignments (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  paper_id UUID REFERENCES public.papers(id) ON DELETE CASCADE NOT NULL,
  editor_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  assigned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(paper_id, editor_id)
);

-- Create RLS policies
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.papers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.paper_assignments ENABLE ROW LEVEL SECURITY;

-- Users can read their own profile and update it
CREATE POLICY "Users can view own profile" ON public.users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.users
  FOR UPDATE USING (auth.uid() = id);

-- Users can insert their own profile
CREATE POLICY "Users can insert own profile" ON public.users
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Papers policies
CREATE POLICY "Anyone can view published papers" ON public.papers
  FOR SELECT USING (status = 'published');

CREATE POLICY "Authors can view their own papers" ON public.papers
  FOR SELECT USING (auth.uid() = author_id);

CREATE POLICY "Authors can insert their own papers" ON public.papers
  FOR INSERT WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Authors can update their own papers" ON public.papers
  FOR UPDATE USING (auth.uid() = author_id);

CREATE POLICY "Editors can view all papers" ON public.papers
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.users 
      WHERE id = auth.uid() AND role IN ('editor', 'admin')
    )
  );

-- Reviews policies
CREATE POLICY "Reviewers can view assigned reviews" ON public.reviews
  FOR SELECT USING (auth.uid() = reviewer_id);

CREATE POLICY "Reviewers can insert reviews for assigned papers" ON public.reviews
  FOR INSERT WITH CHECK (
    auth.uid() = reviewer_id AND
    EXISTS (
      SELECT 1 FROM public.paper_assignments 
      WHERE paper_id = reviews.paper_id AND editor_id = auth.uid()
    )
  );

CREATE POLICY "Reviewers can update their own reviews" ON public.reviews
  FOR UPDATE USING (auth.uid() = reviewer_id);

-- Paper assignments policies
CREATE POLICY "Editors can view assignments" ON public.paper_assignments
  FOR SELECT USING (auth.uid() = editor_id);

CREATE POLICY "Admins can manage assignments" ON public.paper_assignments
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Create functions for updated_at timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON public.users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_papers_updated_at BEFORE UPDATE ON public.papers
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_reviews_updated_at BEFORE UPDATE ON public.reviews
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_papers_status ON public.papers(status);
CREATE INDEX idx_papers_author_id ON public.papers(author_id);
CREATE INDEX idx_papers_published_at ON public.papers(published_at);
CREATE INDEX idx_reviews_paper_id ON public.reviews(paper_id);
CREATE INDEX idx_reviews_reviewer_id ON public.reviews(reviewer_id);
CREATE INDEX idx_paper_assignments_paper_id ON public.paper_assignments(paper_id);
CREATE INDEX idx_paper_assignments_editor_id ON public.paper_assignments(editor_id);