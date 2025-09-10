export interface User {
  id: string
  email: string
  phone_number?: string
  full_name?: string
  role: 'author' | 'reviewer' | 'editor' | 'admin'
  affiliation?: string
  orcid?: string
  bio?: string
  email_verified: boolean
  phone_verified: boolean
  created_at: string
  updated_at: string
}

export interface AuthState {
  user: User | null
  session: any | null
  loading: boolean
  error: string | null
}

export interface LoginCredentials {
  identifier: string // email or phone number
  password: string
}

export interface SignupCredentials {
  email: string
  password: string
  fullName?: string
  phoneNumber?: string
  affiliation?: string
  role?: 'author' | 'reviewer' | 'editor' | 'admin'
}

export interface AuthResponse {
  user: User | null
  session: any | null
  error: any | null
}

export interface UserProfile {
  id: string
  email: string
  phone_number?: string
  full_name?: string
  role: string
  affiliation?: string
  orcid?: string
  bio?: string
  email_verified: boolean
  phone_verified: boolean
  created_at: string
  updated_at: string
}

export interface UserStats {
  total_papers: number
  published_papers: number
  pending_reviews: number
  completed_reviews: number
}

export interface VerificationStatus {
  is_valid: boolean
  user_id?: string
  email?: string
  phone_number?: string
  requires_verification: boolean
}