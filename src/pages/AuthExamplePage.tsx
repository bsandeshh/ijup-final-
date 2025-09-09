import React from 'react'
import { AuthButton, useAuthState } from '../components/Auth'

export const AuthExamplePage: React.FC = () => {
  const { isAuthenticated, user, loading } = useAuthState()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading authentication...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Authentication System Demo
          </h1>
          <p className="text-lg text-gray-600">
            This page demonstrates the login/logout functionality with email and phone number support.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Authentication Status</h2>
          
          {isAuthenticated ? (
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-md p-4">
                <h3 className="text-green-800 font-medium">✅ Authenticated</h3>
                <div className="mt-2 text-green-700">
                  <p><strong>User ID:</strong> {user?.id}</p>
                  <p><strong>Email:</strong> {user?.email || 'Not provided'}</p>
                  <p><strong>Phone:</strong> {user?.phone || 'Not provided'}</p>
                  <p><strong>Created:</strong> {user?.created_at ? new Date(user.created_at).toLocaleString() : 'Unknown'}</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <AuthButton />
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                <h3 className="text-yellow-800 font-medium">⚠️ Not Authenticated</h3>
                <p className="text-yellow-700 mt-2">
                  Please sign in to access your account.
                </p>
              </div>
              
              <div className="flex justify-center">
                <AuthButton />
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Login Options</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Email address + password</li>
                <li>• Phone number + password</li>
                <li>• Automatic detection of input type</li>
                <li>• Form validation</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Signup Options</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Email address + password</li>
                <li>• Phone number + password</li>
                <li>• Full name collection</li>
                <li>• Password confirmation</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Security Features</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Row Level Security (RLS)</li>
                <li>• JWT token authentication</li>
                <li>• Session management</li>
                <li>• Password reset support</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Database Features</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Supabase integration</li>
                <li>• Automatic user profile creation</li>
                <li>• Email/phone verification tracking</li>
                <li>• User role management</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-md p-4">
          <h3 className="text-blue-800 font-medium mb-2">How to Use</h3>
          <div className="text-blue-700 space-y-2">
            <p>1. Click "Sign In" to open the authentication modal</p>
            <p>2. Enter either your email address or phone number</p>
            <p>3. Enter your password</p>
            <p>4. The system will automatically detect if you're using email or phone</p>
            <p>5. Use "Sign up" if you don't have an account yet</p>
          </div>
        </div>
      </div>
    </div>
  )
}