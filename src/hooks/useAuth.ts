import { useAuth as useAuthContext } from '../context/AuthContext'
import { AuthService } from '../lib/auth'
import { LoginCredentials, SignupCredentials, UserProfile, UserStats } from '../types/auth'

export const useAuth = () => {
  const authContext = useAuthContext()

  const login = async (credentials: LoginCredentials) => {
    return await AuthService.signIn(credentials)
  }

  const loginWithPhone = async (phone: string, password: string) => {
    return await AuthService.signInWithPhone(phone, password)
  }

  const signup = async (credentials: SignupCredentials) => {
    return await AuthService.signUp(credentials)
  }

  const logout = async () => {
    return await AuthService.signOut()
  }

  const resetPassword = async (email: string) => {
    return await AuthService.resetPassword(email)
  }

  const resetPasswordWithPhone = async (phone: string) => {
    return await AuthService.resetPasswordWithPhone(phone)
  }

  const updateProfile = async (updates: Partial<UserProfile>) => {
    return await AuthService.updateProfile(updates)
  }

  const getUserProfile = async (identifier: string): Promise<{ data: UserProfile | null; error: any }> => {
    try {
      const { data, error } = await authContext.supabase
        .rpc('get_user_profile', { identifier })
        .single()
      
      return { data, error }
    } catch (error) {
      return { data: null, error }
    }
  }

  const getUserStats = async (userId: string): Promise<{ data: UserStats | null; error: any }> => {
    try {
      const { data, error } = await authContext.supabase
        .rpc('get_user_stats', { user_id: userId })
        .single()
      
      return { data, error }
    } catch (error) {
      return { data: null, error }
    }
  }

  const checkIdentifierExists = async (identifier: string): Promise<{ exists: boolean; error: any }> => {
    try {
      const { data, error } = await authContext.supabase
        .rpc('check_identifier_exists', { identifier })
      
      return { exists: data || false, error }
    } catch (error) {
      return { exists: false, error }
    }
  }

  const validateCredentials = async (identifier: string): Promise<{ data: any; error: any }> => {
    try {
      const { data, error } = await authContext.supabase
        .rpc('validate_user_credentials', { identifier })
        .single()
      
      return { data, error }
    } catch (error) {
      return { data: null, error }
    }
  }

  return {
    // Context values
    user: authContext.user,
    session: authContext.session,
    loading: authContext.loading,
    
    // Auth methods
    login,
    loginWithPhone,
    signup,
    logout,
    resetPassword,
    resetPasswordWithPhone,
    updateProfile,
    
    // User profile methods
    getUserProfile,
    getUserStats,
    checkIdentifierExists,
    validateCredentials,
    
    // Utility methods
    isEmail: AuthService.isEmail,
    isValidEmail: AuthService.isValidEmail,
    isValidPhone: AuthService.isValidPhone,
  }
}