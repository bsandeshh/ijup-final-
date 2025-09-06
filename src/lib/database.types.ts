export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      // Add your table types here as you create them
      // Example:
      // papers: {
      //   Row: {
      //     id: string
      //     title: string
      //     abstract: string
      //     created_at: string
      //     updated_at: string
      //   }
      //   Insert: {
      //     id?: string
      //     title: string
      //     abstract: string
      //     created_at?: string
      //     updated_at?: string
      //   }
      //   Update: {
      //     id?: string
      //     title?: string
      //     abstract?: string
      //     created_at?: string
      //     updated_at?: string
      //   }
      // }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

// This will be automatically generated when you run: npm run supabase:gen-types
// For now, we'll use a basic structure