import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

export const UserMenu: React.FC = () => {
  const { user, signOut } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSignOut = async () => {
    setLoading(true)
    try {
      await signOut()
      setIsOpen(false)
    } catch (error) {
      console.error('Error signing out:', error)
    } finally {
      setLoading(false)
    }
  }

  if (!user) return null

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
      >
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
          {user.user_metadata?.full_name?.charAt(0)?.toUpperCase() || 
           user.email?.charAt(0)?.toUpperCase() || 'U'}
        </div>
        <span className="hidden md:block text-sm font-medium">
          {user.user_metadata?.full_name || user.email}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-200">
            <div className="px-4 py-2 border-b border-gray-100">
              <p className="text-sm font-medium text-gray-900">
                {user.user_metadata?.full_name || 'User'}
              </p>
              <p className="text-xs text-gray-500">{user.email}</p>
              {user.user_metadata?.phone_number && (
                <p className="text-xs text-gray-500">{user.user_metadata.phone_number}</p>
              )}
            </div>
            
            <div className="px-4 py-2">
              <p className="text-xs text-gray-500">
                Role: <span className="font-medium capitalize">
                  {user.user_metadata?.role || 'author'}
                </span>
              </p>
              {user.user_metadata?.affiliation && (
                <p className="text-xs text-gray-500 mt-1">
                  {user.user_metadata.affiliation}
                </p>
              )}
            </div>

            <div className="border-t border-gray-100">
              <button
                onClick={() => {
                  // Navigate to profile page
                  setIsOpen(false)
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile Settings
              </button>
              
              <button
                onClick={handleSignOut}
                disabled={loading}
                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 disabled:opacity-50"
              >
                {loading ? 'Signing out...' : 'Sign Out'}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}