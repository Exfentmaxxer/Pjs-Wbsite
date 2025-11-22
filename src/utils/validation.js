// Form validation utilities

export const validateEmail = email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePhone = phone => {
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  return phoneRegex.test(phone)
}

export const validateRequired = value => {
  if (typeof value === 'string') {
    return value.trim().length > 0
  }
  return value !== null && value !== undefined && value !== ''
}

export const validateMinLength = (value, minLength) => {
  return value && value.length >= minLength
}

export const validateMaxLength = (value, maxLength) => {
  return !value || value.length <= maxLength
}

export const validateVIN = vin => {
  if (!vin) return true // Optional field
  const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/
  return vinRegex.test(vin.toUpperCase())
}

export const validateZipCode = zip => {
  const zipRegex = /^\d{5}(-\d{4})?$/
  return zipRegex.test(zip)
}

export const formatPhoneNumber = phone => {
  const cleaned = ('' + phone).replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  }
  return phone
}

export const validateForm = (values, rules) => {
  const errors = {}

  Object.keys(rules).forEach(field => {
    const fieldRules = rules[field]
    const value = values[field]

    if (fieldRules.required && !validateRequired(value)) {
      errors[field] = fieldRules.requiredMessage || 'This field is required'
      return
    }

    if (fieldRules.email && value && !validateEmail(value)) {
      errors[field] = fieldRules.emailMessage || 'Please enter a valid email address'
      return
    }

    if (fieldRules.phone && value && !validatePhone(value)) {
      errors[field] = fieldRules.phoneMessage || 'Please enter a valid phone number'
      return
    }

    if (fieldRules.minLength && value && !validateMinLength(value, fieldRules.minLength)) {
      errors[field] = fieldRules.minLengthMessage || `Must be at least ${fieldRules.minLength} characters`
      return
    }

    if (fieldRules.maxLength && value && !validateMaxLength(value, fieldRules.maxLength)) {
      errors[field] = fieldRules.maxLengthMessage || `Must be no more than ${fieldRules.maxLength} characters`
      return
    }

    if (fieldRules.vin && value && !validateVIN(value)) {
      errors[field] = fieldRules.vinMessage || 'Please enter a valid 17-character VIN'
      return
    }

    if (fieldRules.custom && !fieldRules.custom(value, values)) {
      errors[field] = fieldRules.customMessage || 'Invalid value'
    }
  })

  return errors
}

export default {
  validateEmail,
  validatePhone,
  validateRequired,
  validateMinLength,
  validateMaxLength,
  validateVIN,
  validateZipCode,
  formatPhoneNumber,
  validateForm
}
