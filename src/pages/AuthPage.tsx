import React, { useState } from 'react'
import { AuthModal } from '../components/Auth/AuthModal'
import { UserMenu } from '../components/Auth/UserMenu'
import { useAuth } from '../hooks/useAuth'

export const AuthPage: React.FC = () => {
  const { user, loading } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')

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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                Authentication System
              </h1>
              {user ? (
                <UserMenu />
              ) : (
                <div className="space-x-4">
                  <button
                    onClick={() => {
                      setAuthMode('login')
                      setShowAuthModal(true)
                    }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      setAuthMode('signup')
                      setShowAuthModal(true)
                    }}
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>

            {user ? (
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-md p-4">
                  <h2 className="text-lg font-medium text-green-800 mb-2">
                    Welcome, {user.user_metadata?.full_name || user.email}!
                  </h2>
                  <p className="text-green-700">
                    You are successfully authenticated and can access all features.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      User Information
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">Email:</span> {user.email}</p>
                      {user.user_metadata?.phone_number && (
                        <p><span className="font-medium">Phone:</span> {user.user_metadata.phone_number}</p>
                      )}
                      <p><span className="font-medium">Role:</span> {user.user_metadata?.role || 'author'}</p>
                      {user.user_metadata?.affiliation && (
                        <p><span className="font-medium">Affiliation:</span> {user.user_metadata.affiliation}</p>
                      )}
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Account Status
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-medium">Email Verified:</span>{' '}
                        <span className={user.email_confirmed_at ? 'text-green-600' : 'text-red-600'}>
                          {user.email_confirmed_at ? 'Yes' : 'No'}
                        </span>
                      </p>
                      <p>
                        <span className="font-medium">Phone Verified:</span>{' '}
                        <span className={user.phone_confirmed_at ? 'text-green-600' : 'text-red-600'}>
                          {user.phone_confirmed_at ? 'Yes' : 'No'}
                        </span>
                      </p>
                      <p>
                        <span className="font-medium">Last Sign In:</span>{' '}
                        {user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleString() : 'N/A'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                  <h3 className="text-lg font-medium text-blue-800 mb-2">
                    Authentication Features
                  </h3>
                  <ul className="text-blue-700 space-y-1">
                    <li>✅ Email and Phone Number Login</li>
                    <li>✅ Secure Password Authentication</li>
                    <li>✅ User Profile Management</li>
                    <li>✅ Role-based Access Control</li>
                    <li>✅ Session Management</li>
                    <li>✅ Password Reset Functionality</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <h2 className="text-xl font-medium text-gray-900 mb-4">
                  Get Started with Authentication
                </h2>
                <p className="text-gray-600 mb-8">
                  Sign in with your email or phone number to access all features.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Sign In
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Use your email address or phone number to sign in.
                    </p>
                    <button
                      onClick={() => {
                        setAuthMode('login')
                        setShowAuthModal(true)
                      }}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Sign In
                    </button>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Create Account
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Register with email and optionally add a phone number.
                    </p>
                    <button
                      onClick={() => {
                        setAuthMode('signup')
                        setShowAuthModal(true)
                      }}
                      className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        defaultMode={authMode}
      />
    </div>
  )
}