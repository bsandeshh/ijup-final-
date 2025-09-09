import React, { createContext, useContext, useEffect, useState } from 'react'
import { User, Session, AuthError } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  signUp: (email: string, password: string, metadata?: any) => Promise<{ error: AuthError | null }>
  signUpWithPhone: (phone: string, password: string, metadata?: any) => Promise<{ error: AuthError | null }>
  signIn: (email: string, password: string) => Promise<{ error: AuthError | null }>
  signInWithPhone: (phone: string, password: string) => Promise<{ error: AuthError | null }>
  signInWithIdentifier: (identifier: string, password: string) => Promise<{ error: AuthError | null }>
  signOut: () => Promise<{ error: AuthError | null }>
  resetPassword: (email: string) => Promise<{ error: AuthError | null }>
  resetPasswordWithPhone: (phone: string) => Promise<{ error: AuthError | null }>
  updateProfile: (updates: any) => Promise<{ error: AuthError | null }>
  verifyPhone: (phone: string, token: string) => Promise<{ error: AuthError | null }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const signUp = async (email: string, password: string, metadata?: any) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: metadata,
      },
    })
    return { error }
  }

  const signUpWithPhone = async (phone: string, password: string, metadata?: any) => {
    const { error } = await supabase.auth.signUp({
      phone,
      password,
      options: {
        data: { ...metadata, phone_number: phone },
      },
    })
    return { error }
  }

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { error }
  }

  const signInWithPhone = async (phone: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      phone,
      password,
    })
    return { error }
  }

  const signInWithIdentifier = async (identifier: string, password: string) => {
    // Check if identifier is email or phone
    const isEmail = identifier.includes('@')
    
    if (isEmail) {
      return signIn(identifier, password)
    } else {
      return signInWithPhone(identifier, password)
    }
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    return { error }
  }

  const resetPassword = async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })
    return { error }
  }

  const resetPasswordWithPhone = async (phone: string) => {
    const { error } = await supabase.auth.resetPasswordForPhone(phone, {
      redirectTo: `${window.location.origin}/reset-password`,
    })
    return { error }
  }

  const updateProfile = async (updates: any) => {
    const { error } = await supabase.auth.updateUser(updates)
    return { error }
  }

  const verifyPhone = async (phone: string, token: string) => {
    const { error } = await supabase.auth.verifyOtp({
      phone,
      token,
      type: 'sms',
    })
    return { error }
  }

  const value = {
    user,
    session,
    loading,
    signUp,
    signUpWithPhone,
    signIn,
    signInWithPhone,
    signInWithIdentifier,
    signOut,
    resetPassword,
    resetPasswordWithPhone,
    updateProfile,
    verifyPhone,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}