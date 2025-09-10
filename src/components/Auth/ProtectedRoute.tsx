import React from 'react'
import { useAuth } from '../../hooks/useAuth'

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: 'author' | 'reviewer' | 'editor' | 'admin'
  fallback?: React.ReactNode
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requiredRole,
  fallback 
}) => {
  const { user, loading } = useAuth()

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

  if (!user) {
    return fallback || (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Authentication Required
            </h2>
            <p className="text-gray-600 mb-6">
              You need to sign in to access this page.
            </p>
            <button
              onClick={() => {
                // This would typically redirect to login or open auth modal
                window.location.href = '/auth'
              }}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Check role-based access
  if (requiredRole) {
    const userRole = user.user_metadata?.role || 'author'
    const roleHierarchy = {
      'author': 1,
      'reviewer': 2,
      'editor': 3,
      'admin': 4
    }

    const userRoleLevel = roleHierarchy[userRole as keyof typeof roleHierarchy] || 1
    const requiredRoleLevel = roleHierarchy[requiredRole]

    if (userRoleLevel < requiredRoleLevel) {
      return fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Access Denied
              </h2>
              <p className="text-gray-600 mb-6">
                You don't have the required permissions to access this page.
                Required role: {requiredRole}
              </p>
              <p className="text-sm text-gray-500">
                Your current role: {userRole}
              </p>
            </div>
          </div>
        </div>
      )
    }
  }

  return <>{children}</>
}