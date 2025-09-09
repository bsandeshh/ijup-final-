// Validation utilities for authentication
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePhoneNumber = (phone: string): boolean => {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '')
  
  // Check if it's a valid phone number (10-15 digits)
  return cleaned.length >= 10 && cleaned.length <= 15
}

export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '')
  
  // Format as international number if it starts with country code
  if (cleaned.length > 10) {
    return `+${cleaned}`
  }
  
  // Format as US number if 10 digits
  if (cleaned.length === 10) {
    return `+1${cleaned}`
  }
  
  return phone
}

export const isEmailOrPhone = (identifier: string): 'email' | 'phone' | 'invalid' => {
  if (validateEmail(identifier)) {
    return 'email'
  }
  
  if (validatePhoneNumber(identifier)) {
    return 'phone'
  }
  
  return 'invalid'
}

export const normalizeIdentifier = (identifier: string): string => {
  const type = isEmailOrPhone(identifier)
  
  if (type === 'email') {
    return identifier.toLowerCase().trim()
  }
  
  if (type === 'phone') {
    return formatPhoneNumber(identifier)
  }
  
  return identifier
}