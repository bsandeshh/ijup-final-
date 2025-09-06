-- Insert initial categories
INSERT INTO categories (name, description) VALUES
  ('Mathematics & Mathematical Sciences', 'Research in pure and applied mathematics'),
  ('Electronic & Computer Science', 'Computer science, electronics, and related fields'),
  ('Chemistry & Industrial Chemistry', 'Chemical sciences and industrial applications'),
  ('Botany & Microbiology', 'Plant sciences and microbiological research'),
  ('Zoology & Fishery Sciences', 'Animal sciences and fisheries research'),
  ('Business & Management Sciences', 'Business administration and management studies'),
  ('Language & Communication Sciences', 'Linguistics and communication research'),
  ('History', 'Historical research and studies'),
  ('Science & Technology', 'General science and technology research');

-- Insert sample editorial board members
INSERT INTO editorial_board (user_id, position, name, affiliation, bio, order_index) VALUES
  (NULL, 'Editor-in-Chief', 'Dr. John Smith', 'University of Science', 'Leading researcher in computer science with over 20 years of experience.', 1),
  (NULL, 'Associate Editor', 'Dr. Jane Doe', 'Tech Institute', 'Expert in artificial intelligence and machine learning.', 2),
  (NULL, 'Associate Editor', 'Dr. Michael Johnson', 'Research University', 'Specialist in data science and analytics.', 3);

-- Insert sample papers (these will be created by users in the actual application)
-- For now, we'll just create the structure