import React, { useState } from 'react'
import { LoginForm, AuthStatus, LogoutButton } from './LoginForm'
import { SignupForm } from './SignupForm'
import { useAuth } from '../../context/AuthContext'

type AuthMode = 'login' | 'signup'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  initialMode?: AuthMode
}

export const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  onClose, 
  initialMode = 'login' 
}) => {
  const [mode, setMode] = useState<AuthMode>(initialMode)

  if (!isOpen) return null

  const handleSuccess = () => {
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
        >
          ×
        </button>
        
        {mode === 'login' ? (
          <LoginForm 
            onSuccess={handleSuccess}
            onSwitchToSignup={() => setMode('signup')}
          />
        ) : (
          <SignupForm 
            onSuccess={handleSuccess}
            onSwitchToLogin={() => setMode('login')}
          />
        )}
      </div>
    </div>
  )
}

interface AuthButtonProps {
  className?: string
}

export const AuthButton: React.FC<AuthButtonProps> = ({ className = '' }) => {
  const { user, loading } = useAuth()
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (loading) {
    return (
      <div className={`text-gray-600 ${className}`}>
        Loading...
      </div>
    )
  }

  if (user) {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        <AuthStatus />
        <LogoutButton />
      </div>
    )
  }

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
      >
        Sign In
      </button>
      
      <AuthModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialMode="login"
      />
    </>
  )
}

// Hook to use authentication state
export const useAuthState = () => {
  const { user, session, loading } = useAuth()
  
  return {
    isAuthenticated: !!user,
    user,
    session,
    loading,
  }
}