import { supabase } from './supabase';

export interface PaperSubmission {
  corresponding_author_name: string;
  email: string;
  affiliation: string;
  co_authors?: string;
  title: string;
  abstract: string;
  keywords: string;
  category: string;
  manuscript_file: File;
}

export const submitPaper = async (submission: PaperSubmission) => {
  const { manuscript_file, ...submissionData } = submission;

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { data: null, error: { message: 'You must be logged in to submit a paper.' } };
  }

  // 1. Upload the manuscript file to Supabase storage

  // 1. Upload the manuscript file to Supabase storage
  const fileExt = manuscript_file.name.split('.').pop();
  const fileName = `${Date.now()}.${fileExt}`;
  const filePath = `manuscripts/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('submitted papers')
    .upload(filePath, manuscript_file);

  if (uploadError) {
    console.error('Error uploading file:', uploadError);
    return { data: null, error: uploadError };
  }

  // 2. Get the URL of the uploaded file
  const { data: urlData } = supabase.storage
    .from('submitted papers')
    .getPublicUrl(filePath);

  const manuscript_url = urlData.publicUrl;

  // 3. Insert the submission data into the 'paper_submissions' table
  const { data, error } = await supabase
    .from('paper_submissions')
    .insert([{ ...submissionData, manuscript_url, user_id: user.id }])
    .select();

  return { data, error };
};
