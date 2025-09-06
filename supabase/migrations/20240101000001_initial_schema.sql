-- Create papers table
CREATE TABLE IF NOT EXISTS papers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  abstract TEXT NOT NULL,
  authors TEXT[] NOT NULL,
  keywords TEXT[],
  doi TEXT UNIQUE,
  volume INTEGER,
  issue INTEGER,
  pages TEXT,
  published_date DATE,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'under_review', 'accepted', 'published', 'rejected')),
  submission_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  updated_by UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create paper_categories junction table
CREATE TABLE IF NOT EXISTS paper_categories (
  paper_id UUID REFERENCES papers(id) ON DELETE CASCADE,
  category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
  PRIMARY KEY (paper_id, category_id)
);

-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  paper_id UUID REFERENCES papers(id) ON DELETE CASCADE,
  reviewer_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comments TEXT,
  recommendation TEXT CHECK (recommendation IN ('accept', 'reject', 'minor_revision', 'major_revision')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create editorial_board table
CREATE TABLE IF NOT EXISTS editorial_board (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  position TEXT NOT NULL,
  name TEXT NOT NULL,
  affiliation TEXT,
  bio TEXT,
  photo_url TEXT,
  order_index INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user_profiles table
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  affiliation TEXT,
  bio TEXT,
  orcid TEXT,
  research_interests TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_papers_status ON papers(status);
CREATE INDEX IF NOT EXISTS idx_papers_published_date ON papers(published_date);
CREATE INDEX IF NOT EXISTS idx_papers_created_by ON papers(created_by);
CREATE INDEX IF NOT EXISTS idx_reviews_paper_id ON reviews(paper_id);
CREATE INDEX IF NOT EXISTS idx_reviews_reviewer_id ON reviews(reviewer_id);
CREATE INDEX IF NOT EXISTS idx_editorial_board_is_active ON editorial_board(is_active);

-- Enable Row Level Security (RLS)
ALTER TABLE papers ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE paper_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE editorial_board ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
-- Papers: Anyone can read published papers, authors can manage their own
CREATE POLICY "Anyone can read published papers" ON papers
  FOR SELECT USING (status = 'published');

CREATE POLICY "Authors can manage their own papers" ON papers
  FOR ALL USING (auth.uid() = created_by);

-- Categories: Anyone can read
CREATE POLICY "Anyone can read categories" ON categories
  FOR SELECT USING (true);

-- Reviews: Reviewers can manage their own reviews
CREATE POLICY "Reviewers can manage their own reviews" ON reviews
  FOR ALL USING (auth.uid() = reviewer_id);

-- Editorial board: Anyone can read active members
CREATE POLICY "Anyone can read active editorial board" ON editorial_board
  FOR SELECT USING (is_active = true);

-- User profiles: Users can manage their own profile
CREATE POLICY "Users can manage their own profile" ON user_profiles
  FOR ALL USING (auth.uid() = id);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Add updated_at triggers
CREATE TRIGGER update_papers_updated_at BEFORE UPDATE ON papers
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_reviews_updated_at BEFORE UPDATE ON reviews
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_editorial_board_updated_at BEFORE UPDATE ON editorial_board
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_profiles_updated_at BEFORE UPDATE ON user_profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();