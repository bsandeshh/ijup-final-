import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { validateEmail, validatePhoneNumber, isEmailOrPhone, normalizeIdentifier } from '../utils/authValidation'

interface LoginFormProps {
  onSuccess?: () => void
  onSwitchToSignup?: () => void
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSuccess, onSwitchToSignup }) => {
  const { signInWithIdentifier, loading } = useAuth()
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    // Validate identifier
    const identifierType = isEmailOrPhone(identifier)
    if (identifierType === 'invalid') {
      setError('Please enter a valid email address or phone number')
      setIsSubmitting(false)
      return
    }

    // Normalize identifier
    const normalizedIdentifier = normalizeIdentifier(identifier)

    try {
      const { error } = await signInWithIdentifier(normalizedIdentifier, password)
      
      if (error) {
        setError(error.message)
      } else {
        onSuccess?.()
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getPlaceholder = () => {
    if (identifier.includes('@')) {
      return 'Enter your email address'
    } else if (identifier.match(/\d/)) {
      return 'Enter your phone number'
    }
    return 'Enter email or phone number'
  }

  const getInputType = () => {
    if (identifier.includes('@')) {
      return 'email'
    }
    return 'tel'
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="identifier" className="block text-sm font-medium text-gray-700 mb-1">
            Email or Phone Number
          </label>
          <input
            id="identifier"
            type={getInputType()}
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder={getPlaceholder()}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
            disabled={isSubmitting}
          />
        </div>

        {error && (
          <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting || loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Signing In...' : 'Sign In'}
        </button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <button
            onClick={onSwitchToSignup}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  )
}

interface LogoutButtonProps {
  className?: string
}

export const LogoutButton: React.FC<LogoutButtonProps> = ({ className = '' }) => {
  const { signOut, loading } = useAuth()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogout = async () => {
    setIsLoggingOut(true)
    try {
      await signOut()
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      setIsLoggingOut(false)
    }
  }

  return (
    <button
      onClick={handleLogout}
      disabled={isLoggingOut || loading}
      className={`bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {isLoggingOut ? 'Signing Out...' : 'Sign Out'}
    </button>
  )
}

interface AuthStatusProps {
  className?: string
}

export const AuthStatus: React.FC<AuthStatusProps> = ({ className = '' }) => {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className={`text-gray-600 ${className}`}>
        Loading...
      </div>
    )
  }

  if (user) {
    return (
      <div className={`text-green-600 ${className}`}>
        Welcome, {user.email || user.phone || 'User'}!
      </div>
    )
  }

  return (
    <div className={`text-gray-600 ${className}`}>
      Not signed in
    </div>
  )
}