import { supabase } from './supabase'
import { AuthError, User, Session } from '@supabase/supabase-js'

export interface LoginCredentials {
  email?: string
  phone?: string
  password: string
}

export interface SignUpCredentials {
  email?: string
  phone?: string
  password: string
  name?: string
}

export interface AuthResponse {
  user: User | null
  session: Session | null
  error: AuthError | null
}

export interface AuthErrorResponse {
  error: AuthError | null
}

// Validation utilities
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePhone = (phone: string): boolean => {
  // Remove all non-digit characters
  const cleanPhone = phone.replace(/\D/g, '')
  // Check if it's a valid phone number (7-15 digits)
  return cleanPhone.length >= 7 && cleanPhone.length <= 15
}

export const validatePassword = (password: string): { isValid: boolean; message?: string } => {
  if (password.length < 6) {
    return { isValid: false, message: 'Password must be at least 6 characters long' }
  }
  return { isValid: true }
}

// Authentication service class
export class AuthService {
  // Sign up with email or phone
  static async signUp(credentials: SignUpCredentials): Promise<AuthResponse> {
    const { email, phone, password, name } = credentials

    // Validate input
    if (!email && !phone) {
      return {
        user: null,
        session: null,
        error: { message: 'Either email or phone number is required' } as AuthError
      }
    }

    if (email && !validateEmail(email)) {
      return {
        user: null,
        session: null,
        error: { message: 'Invalid email format' } as AuthError
      }
    }

    if (phone && !validatePhone(phone)) {
      return {
        user: null,
        session: null,
        error: { message: 'Invalid phone number format' } as AuthError
      }
    }

    const passwordValidation = validatePassword(password)
    if (!passwordValidation.isValid) {
      return {
        user: null,
        session: null,
        error: { message: passwordValidation.message || 'Invalid password' } as AuthError
      }
    }

    try {
      if (email) {
        // Sign up with email
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              name: name || '',
              phone: phone || '',
            }
          }
        })

        return {
          user: data.user,
          session: data.session,
          error
        }
      } else if (phone) {
        // For phone number signup, we'll use email field with a special format
        // This is a workaround since Supabase doesn't have direct phone signup
        const { data, error } = await supabase.auth.signUp({
          email: `phone_${phone}@temp.local`, // Temporary email format
          password,
          options: {
            data: {
              name: name || '',
              phone: phone,
              is_phone_signup: true
            }
          }
        })

        return {
          user: data.user,
          session: data.session,
          error
        }
      }

      return {
        user: null,
        session: null,
        error: { message: 'Invalid credentials' } as AuthError
      }
    } catch (error) {
      return {
        user: null,
        session: null,
        error: error as AuthError
      }
    }
  }

  // Sign in with email or phone
  static async signIn(credentials: LoginCredentials): Promise<AuthResponse> {
    const { email, phone, password } = credentials

    // Validate input
    if (!email && !phone) {
      return {
        user: null,
        session: null,
        error: { message: 'Either email or phone number is required' } as AuthError
      }
    }

    if (email && !validateEmail(email)) {
      return {
        user: null,
        session: null,
        error: { message: 'Invalid email format' } as AuthError
      }
    }

    if (phone && !validatePhone(phone)) {
      return {
        user: null,
        session: null,
        error: { message: 'Invalid phone number format' } as AuthError
      }
    }

    try {
      if (email) {
        // Sign in with email
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password
        })

        return {
          user: data.user,
          session: data.session,
          error
        }
      } else if (phone) {
        // For phone number signin, we need to find the user by phone first
        // This requires a custom approach since Supabase doesn't support phone login directly
        
        // First, try to find user by phone in our custom users table
        const { data: userData, error: userError } = await supabase
          .from('users')
          .select('email')
          .eq('phone', phone)
          .single()

        if (userError || !userData) {
          return {
            user: null,
            session: null,
            error: { message: 'No account found with this phone number' } as AuthError
          }
        }

        // Now sign in with the found email
        const { data, error } = await supabase.auth.signInWithPassword({
          email: userData.email,
          password
        })

        return {
          user: data.user,
          session: data.session,
          error
        }
      }

      return {
        user: null,
        session: null,
        error: { message: 'Invalid credentials' } as AuthError
      }
    } catch (error) {
      return {
        user: null,
        session: null,
        error: error as AuthError
      }
    }
  }

  // Sign out
  static async signOut(): Promise<AuthErrorResponse> {
    try {
      const { error } = await supabase.auth.signOut()
      return { error }
    } catch (error) {
      return { error: error as AuthError }
    }
  }

  // Reset password
  static async resetPassword(email: string): Promise<AuthErrorResponse> {
    if (!validateEmail(email)) {
      return { error: { message: 'Invalid email format' } as AuthError }
    }

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`
      })
      return { error }
    } catch (error) {
      return { error: error as AuthError }
    }
  }

  // Update user profile
  static async updateProfile(updates: {
    name?: string
    phone?: string
    email?: string
  }): Promise<AuthErrorResponse> {
    try {
      const { error } = await supabase.auth.updateUser({
        data: updates
      })
      return { error }
    } catch (error) {
      return { error: error as AuthError }
    }
  }

  // Get current user
  static async getCurrentUser(): Promise<{ user: User | null; error: AuthError | null }> {
    try {
      const { data: { user }, error } = await supabase.auth.getUser()
      return { user, error }
    } catch (error) {
      return { user: null, error: error as AuthError }
    }
  }

  // Get current session
  static async getCurrentSession(): Promise<{ session: Session | null; error: AuthError | null }> {
    try {
      const { data: { session }, error } = await supabase.auth.getSession()
      return { session, error }
    } catch (error) {
      return { session: null, error: error as AuthError }
    }
  }
}

// Helper function to check if input is email or phone
export const isEmail = (input: string): boolean => {
  return input.includes('@')
}

// Helper function to normalize phone number
export const normalizePhone = (phone: string): string => {
  return phone.replace(/\D/g, '')
}