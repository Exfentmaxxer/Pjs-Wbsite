import { useState, useCallback } from 'react'
import { validateForm } from '../utils/validation'

export const useForm = (initialValues = {}, validationRules = {}) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = useCallback(e => {
    const { name, value, type, checked } = e.target
    setValues(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }))
    }
  }, [errors])

  const handleBlur = useCallback(e => {
    const { name } = e.target
    setTouched(prev => ({
      ...prev,
      [name]: true,
    }))

    // Validate single field on blur
    if (validationRules[name]) {
      const fieldErrors = validateForm(values, { [name]: validationRules[name] })
      setErrors(prev => ({
        ...prev,
        ...fieldErrors,
      }))
    }
  }, [values, validationRules])

  const validate = useCallback(() => {
    const validationErrors = validateForm(values, validationRules)
    setErrors(validationErrors)
    return Object.keys(validationErrors).length === 0
  }, [values, validationRules])

  const handleSubmit = useCallback((onSubmit) => {
    return async e => {
      e.preventDefault()
      setIsSubmitting(true)

      const isValid = validate()
      if (!isValid) {
        setIsSubmitting(false)
        return
      }

      try {
        await onSubmit(values)
      } catch (error) {
        console.error('Form submission error:', error)
      } finally {
        setIsSubmitting(false)
      }
    }
  }, [values, validate])

  const reset = useCallback(() => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
    setIsSubmitting(false)
  }, [initialValues])

  const setFieldValue = useCallback((name, value) => {
    setValues(prev => ({
      ...prev,
      [name]: value,
    }))
  }, [])

  const setFieldError = useCallback((name, error) => {
    setErrors(prev => ({
      ...prev,
      [name]: error,
    }))
  }, [])

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setFieldValue,
    setFieldError,
    validate,
  }
}

export default useForm
