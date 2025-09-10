import React from 'react'
import { useAuth } from '../../hooks/useAuth'

interface AuthGuardProps {
  children: React.ReactNode
  requireAuth?: boolean
  requireRole?: 'author' | 'reviewer' | 'editor' | 'admin'
  redirectTo?: string
}

export const AuthGuard: React.FC<AuthGuardProps> = ({
  children,
  requireAuth = true,
  requireRole,
  redirectTo = '/auth'
}) => {
  const { user, loading } = useAuth()

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Check authentication requirement
  if (requireAuth && !user) {
    // Redirect to auth page
    if (typeof window !== 'undefined') {
      window.location.href = redirectTo
    }
    return null
  }

  // Check role requirement
  if (requireRole && user) {
    const userRole = user.user_metadata?.role || 'author'
    const roleHierarchy = {
      'author': 1,
      'reviewer': 2,
      'editor': 3,
      'admin': 4
    }

    const userRoleLevel = roleHierarchy[userRole as keyof typeof roleHierarchy] || 1
    const requiredRoleLevel = roleHierarchy[requireRole]

    if (userRoleLevel < requiredRoleLevel) {
      // Redirect to unauthorized page
      if (typeof window !== 'undefined') {
        window.location.href = '/unauthorized'
      }
      return null
    }
  }

  return <>{children}</>
}

// Higher-order component for protecting routes
export const withAuth = <P extends object>(
  Component: React.ComponentType<P>,
  options: Omit<AuthGuardProps, 'children'> = {}
) => {
  return (props: P) => (
    <AuthGuard {...options}>
      <Component {...props} />
    </AuthGuard>
  )
}

// Hook for checking authentication status
export const useAuthStatus = () => {
  const { user, loading } = useAuth()

  return {
    isAuthenticated: !!user,
    isLoading: loading,
    user,
    hasRole: (role: 'author' | 'reviewer' | 'editor' | 'admin') => {
      if (!user) return false
      const userRole = user.user_metadata?.role || 'author'
      const roleHierarchy = {
        'author': 1,
        'reviewer': 2,
        'editor': 3,
        'admin': 4
      }
      const userRoleLevel = roleHierarchy[userRole as keyof typeof roleHierarchy] || 1
      const requiredRoleLevel = roleHierarchy[role]
      return userRoleLevel >= requiredRoleLevel
    },
    isAdmin: () => {
      if (!user) return false
      return user.user_metadata?.role === 'admin'
    },
    isEditor: () => {
      if (!user) return false
      const userRole = user.user_metadata?.role || 'author'
      return ['editor', 'admin'].includes(userRole)
    },
    isReviewer: () => {
      if (!user) return false
      const userRole = user.user_metadata?.role || 'author'
      return ['reviewer', 'editor', 'admin'].includes(userRole)
    }
  }
}