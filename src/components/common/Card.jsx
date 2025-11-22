const Card = ({
  children,
  variant = 'elevated',
  padding = 'md',
  className = '',
  onClick,
  hoverable = false,
  ...props
}) => {
  const baseStyles = 'rounded-lg bg-white transition-all duration-200'

  const variants = {
    elevated: 'shadow-md hover:shadow-lg',
    outlined: 'border-2 border-gray-200 hover:border-primary-300',
    flat: 'border border-gray-100'
  }

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  const hoverClass = hoverable ? 'cursor-pointer transform hover:-translate-y-1' : ''

  const cardClasses = `${baseStyles} ${variants[variant]} ${paddings[padding]} ${hoverClass} ${className}`

  return (
    <div className={cardClasses} onClick={onClick} {...props}>
      {children}
    </div>
  )
}

export default Card
