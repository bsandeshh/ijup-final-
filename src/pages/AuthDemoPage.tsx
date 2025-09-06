import React from 'react'
import { useAuth } from '../context/AuthContext'
import LoginForm from '../components/Auth/LoginForm'
import UserProfile from '../components/Auth/UserProfile'

const AuthDemoPage: React.FC = () => {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Supabase Authentication Demo</h1>
          <p className="mt-2 text-gray-600">
            This page demonstrates the Supabase authentication integration
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Authentication</h2>
            {user ? <UserProfile /> : <LoginForm />}
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Features</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  User registration and login
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Password reset functionality
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Session management
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Row Level Security (RLS)
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  TypeScript integration
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Database schema for journal management
                </li>
              </ul>
            </div>

            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-900">Next Steps</h3>
              <ul className="mt-2 text-sm text-blue-800 space-y-1">
                <li>• Configure your Supabase project URL and keys</li>
                <li>• Start local development: <code className="bg-blue-100 px-1 rounded">npm run supabase:start</code></li>
                <li>• Access Supabase Studio: <code className="bg-blue-100 px-1 rounded">http://localhost:54323</code></li>
                <li>• Customize the database schema as needed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthDemoPage