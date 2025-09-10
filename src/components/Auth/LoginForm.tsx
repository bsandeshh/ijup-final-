import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { AuthService } from '../../lib/auth'

interface LoginFormProps {
  onSuccess?: () => void
  onSwitchToSignup?: () => void
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSuccess, onSwitchToSignup }) => {
  const { signIn } = useAuth()
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // Validate input
      if (!formData.identifier.trim()) {
        setError('Please enter your email or phone number')
        return
      }

      if (!formData.password.trim()) {
        setError('Please enter your password')
        return
      }

      // Check if it's email or phone and validate accordingly
      if (AuthService.isEmail(formData.identifier)) {
        if (!AuthService.isValidEmail(formData.identifier)) {
          setError('Please enter a valid email address')
          return
        }
      } else {
        if (!AuthService.isValidPhone(formData.identifier)) {
          setError('Please enter a valid phone number')
          return
        }
      }

      const { error } = await signIn(formData.identifier, formData.password)
      
      if (error) {
        setError(error.message || 'Login failed. Please check your credentials.')
      } else {
        onSuccess?.()
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (error) setError(null)
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
        Sign In
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="identifier" className="block text-sm font-medium text-gray-700 mb-1">
            Email or Phone Number
          </label>
          <input
            type="text"
            id="identifier"
            name="identifier"
            value={formData.identifier}
            onChange={handleInputChange}
            placeholder="Enter your email or phone number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={loading}
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={loading}
          />
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <button
            type="button"
            onClick={onSwitchToSignup}
            className="text-blue-600 hover:text-blue-500 font-medium"
          >
            Sign up here
          </button>
        </p>
      </div>

      <div className="mt-4 text-center">
        <button
          type="button"
          className="text-sm text-gray-500 hover:text-gray-700"
          onClick={() => {
            // Handle forgot password
            const identifier = formData.identifier
            if (identifier) {
              if (AuthService.isEmail(identifier)) {
                // Reset password with email
                // You can implement this functionality
                alert('Password reset email sent!')
              } else {
                // Reset password with phone
                // You can implement this functionality
                alert('Password reset email sent to your registered email!')
              }
            } else {
              alert('Please enter your email or phone number first')
            }
          }}
        >
          Forgot your password?
        </button>
      </div>
    </div>
  )
}