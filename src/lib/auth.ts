import { supabase } from './supabase'
import { AuthError, User, Session } from '@supabase/supabase-js'

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
  session: Session | null
  error: AuthError | null
}

export class AuthService {
  /**
   * Sign in with email or phone number
   */
  static async signIn(credentials: LoginCredentials): Promise<AuthResponse> {
    const { identifier, password } = credentials
    
    // Check if identifier is email or phone number
    const isEmail = identifier.includes('@')
    
    if (isEmail) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: identifier,
        password,
      })
      return { user: data.user, session: data.session, error }
    } else {
      // For phone number authentication
      return await this.signInWithPhone(identifier, password)
    }
  }

  /**
   * Sign in with phone number
   */
  static async signInWithPhone(phone: string, password: string): Promise<AuthResponse> {
    try {
      // First, find user by phone number
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('email')
        .eq('phone_number', phone)
        .single()

      if (userError || !userData?.email) {
        return { 
          user: null, 
          session: null, 
          error: { message: 'User not found with this phone number' } as AuthError 
        }
      }

      // Sign in with the associated email
      const { data, error } = await supabase.auth.signInWithPassword({
        email: userData.email,
        password,
      })
      return { user: data.user, session: data.session, error }
    } catch (error) {
      return { 
        user: null, 
        session: null, 
        error: error as AuthError 
      }
    }
  }

  /**
   * Sign up new user
   */
  static async signUp(credentials: SignupCredentials): Promise<AuthResponse> {
    const { email, password, fullName, phoneNumber, affiliation, role = 'author' } = credentials

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          phone_number: phoneNumber,
          affiliation,
          role,
        },
      },
    })

    return { user: data.user, session: data.session, error }
  }

  /**
   * Sign out current user
   */
  static async signOut(): Promise<{ error: AuthError | null }> {
    const { error } = await supabase.auth.signOut()
    return { error }
  }

  /**
   * Reset password with email
   */
  static async resetPassword(email: string): Promise<{ error: AuthError | null }> {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })
    return { error }
  }

  /**
   * Reset password with phone number
   */
  static async resetPasswordWithPhone(phone: string): Promise<{ error: AuthError | null }> {
    try {
      // Find user by phone number
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('email')
        .eq('phone_number', phone)
        .single()

      if (userError || !userData?.email) {
        return { error: { message: 'User not found with this phone number' } as AuthError }
      }

      // Reset password using the associated email
      const { error } = await supabase.auth.resetPasswordForEmail(userData.email, {
        redirectTo: `${window.location.origin}/reset-password`,
      })
      return { error }
    } catch (error) {
      return { error: error as AuthError }
    }
  }

  /**
   * Get current user
   */
  static async getCurrentUser(): Promise<{ user: User | null; error: AuthError | null }> {
    const { data: { user }, error } = await supabase.auth.getUser()
    return { user, error }
  }

  /**
   * Get current session
   */
  static async getCurrentSession(): Promise<{ session: Session | null; error: AuthError | null }> {
    const { data: { session }, error } = await supabase.auth.getSession()
    return { session, error }
  }

  /**
   * Update user profile
   */
  static async updateProfile(updates: {
    fullName?: string
    phoneNumber?: string
    affiliation?: string
    bio?: string
    orcid?: string
  }): Promise<{ error: AuthError | null }> {
    const { error } = await supabase.auth.updateUser({
      data: updates
    })
    return { error }
  }

  /**
   * Check if identifier is email or phone
   */
  static isEmail(identifier: string): boolean {
    return identifier.includes('@')
  }

  /**
   * Validate email format
   */
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  /**
   * Validate phone number format (basic validation)
   */
  static isValidPhone(phone: string): boolean {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
    return phoneRegex.test(phone.replace(/\s/g, ''))
  }
}