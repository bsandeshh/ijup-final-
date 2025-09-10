import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { AuthModal } from '../components/Auth/AuthModal'
import { UserProfile } from '../components/Auth/UserProfile'

const AuthTestPage: React.FC = () => {
  const { user, loading } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Authentication Test Page
          </h1>

          {user ? (
            <div className="text-center">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">
                  Welcome! You are logged in.
                </h2>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-green-800 mb-2">User Information:</h3>
                  <div className="text-left space-y-2">
                    <p><strong>Name:</strong> {user.user_metadata?.name || 'Not provided'}</p>
                    <p><strong>Email:</strong> {user.email || 'Not provided'}</p>
                    <p><strong>Phone:</strong> {user.user_metadata?.phone || 'Not provided'}</p>
                    <p><strong>User ID:</strong> {user.id}</p>
                    <p><strong>Email Verified:</strong> {user.email_confirmed_at ? 'Yes' : 'No'}</p>
                    <p><strong>Created At:</strong> {new Date(user.created_at).toLocaleString()}</p>
                    <p><strong>Last Sign In:</strong> {user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleString() : 'Never'}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <UserProfile onLogout={() => console.log('User logged out')} />
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-600 mb-6">
                You are not logged in.
              </h2>
              <p className="text-gray-500 mb-8">
                Click the button below to test the authentication system.
              </p>
              <button
                onClick={() => setShowAuthModal(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
              >
                Open Authentication Modal
              </button>
            </div>
          )}

          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Features Tested:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-700">Authentication Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✅ Email and phone number login</li>
                  <li>✅ User registration</li>
                  <li>✅ Password validation</li>
                  <li>✅ Session management</li>
                  <li>✅ Logout functionality</li>
                  <li>✅ User profile display</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-700">UI Components:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✅ Login form with validation</li>
                  <li>✅ Signup form with validation</li>
                  <li>✅ Modal interface</li>
                  <li>✅ User profile dropdown</li>
                  <li>✅ Responsive design</li>
                  <li>✅ Error handling</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">Test Instructions:</h4>
            <ol className="text-sm text-blue-700 space-y-1 list-decimal list-inside">
              <li>Try signing up with both email and phone number</li>
              <li>Test login with both credential types</li>
              <li>Verify password validation (minimum 6 characters)</li>
              <li>Test the logout functionality</li>
              <li>Check that user information is displayed correctly</li>
              <li>Test form validation and error messages</li>
            </ol>
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={() => {
          console.log('Authentication successful!')
          setShowAuthModal(false)
        }}
        initialMode="login"
      />
    </div>
  )
}

export default AuthTestPage