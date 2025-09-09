import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { validateEmail, validatePhoneNumber, isEmailOrPhone, normalizeIdentifier } from '../../utils/authValidation'

interface SignupFormProps {
  onSuccess?: () => void
  onSwitchToLogin?: () => void
}

export const SignupForm: React.FC<SignupFormProps> = ({ onSuccess, onSwitchToLogin }) => {
  const { signUp, signUpWithPhone, loading } = useAuth()
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    // Validate passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      setIsSubmitting(false)
      return
    }

    // Validate password strength
    if (password.length < 6) {
      setError('Password must be at least 6 characters long')
      setIsSubmitting(false)
      return
    }

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
      const metadata = {
        full_name: fullName,
        phone_number: identifierType === 'phone' ? normalizedIdentifier : undefined,
      }

      let result
      if (identifierType === 'email') {
        result = await signUp(normalizedIdentifier, password, metadata)
      } else {
        result = await signUpWithPhone(normalizedIdentifier, password, metadata)
      }

      if (result.error) {
        setError(result.error.message)
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
      <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
            disabled={isSubmitting}
          />
        </div>

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
            placeholder="Enter your password (min 6 characters)"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
            disabled={isSubmitting}
            minLength={6}
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
            disabled={isSubmitting}
            minLength={6}
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
          {isSubmitting ? 'Creating Account...' : 'Sign Up'}
        </button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <button
            onClick={onSwitchToLogin}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  )
}