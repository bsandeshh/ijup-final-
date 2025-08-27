export interface Paper {
  id: string;
  title: string;
  abstract: string;
  authors: Author[];
  keywords: string[];
  publicationDate: string;
  doi: string;
  status: 'published' | 'in-review' | 'rejected';
  pdfUrl?: string;
  journalVolume: string;
  journalIssue: string;
  pageRange: string;
}

export interface Author {
  id: string;
  name: string;
  affiliation: string;
  email?: string;
  isCorresponding: boolean;
}

export interface EditorialMember {
  id: string;
  name: string;
  title: string;
  affiliation: string;
  role: string;
  bio: string;
  photoUrl: string;
  email?: string;
}

export interface JournalInfo {
  title: string;
  issn: string;
  description: string;
  aims: string[];
  scope: string[];
  indexing: string[];
}