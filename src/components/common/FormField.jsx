const FormField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  touched,
  placeholder,
  required = false,
  disabled = false,
  rows = 4,
  options = [],
  className = '',
  helpText,
  ...props
}) => {
  const hasError = touched && error

  const baseInputStyles = 'w-full px-4 py-2.5 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 disabled:bg-gray-100 disabled:cursor-not-allowed'
  const normalStyles = 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
  const errorStyles = 'border-red-500 focus:border-red-500 focus:ring-red-500'

  const inputClasses = `${baseInputStyles} ${hasError ? errorStyles : normalStyles}`

  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            rows={rows}
            className={inputClasses}
            {...props}
          />
        )

      case 'select':
        return (
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            required={required}
            disabled={disabled}
            className={inputClasses}
            {...props}
          >
            <option value="">Select...</option>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )

      default:
        return (
          <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            className={inputClasses}
            {...props}
          />
        )
    }
  }

  return (
    <div className={`form-field ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1.5">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {renderInput()}

      {helpText && !hasError && (
        <p className="mt-1.5 text-sm text-gray-500">{helpText}</p>
      )}

      {hasError && (
        <p className="mt-1.5 text-sm text-red-600 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  )
}

export default FormField
