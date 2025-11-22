import { useEffect } from 'react'
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react'

const Toast = ({
  message,
  type = 'info',
  duration = 5000,
  onClose,
  position = 'top-right'
}) => {
  useEffect(() => {
    if (duration && onClose) {
      const timer = setTimeout(onClose, duration)
      return () => clearTimeout(timer)
    }
  }, [duration, onClose])

  const types = {
    success: {
      icon: CheckCircle,
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      iconColor: 'text-green-600',
      textColor: 'text-green-800'
    },
    error: {
      icon: AlertCircle,
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      iconColor: 'text-red-600',
      textColor: 'text-red-800'
    },
    warning: {
      icon: AlertTriangle,
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      iconColor: 'text-yellow-600',
      textColor: 'text-yellow-800'
    },
    info: {
      icon: Info,
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      iconColor: 'text-blue-600',
      textColor: 'text-blue-800'
    }
  }

  const positions = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-center': 'top-4 left-1/2 -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2'
  }

  const config = types[type]
  const Icon = config.icon

  return (
    <div
      className={`fixed ${positions[position]} z-50 animate-slideIn max-w-md`}
      role="alert"
    >
      <div className={`flex items-start p-4 rounded-lg shadow-lg border ${config.bgColor} ${config.borderColor}`}>
        <Icon className={`w-5 h-5 ${config.iconColor} mt-0.5 flex-shrink-0`} />
        <p className={`ml-3 text-sm font-medium ${config.textColor} flex-1`}>{message}</p>
        {onClose && (
          <button
            onClick={onClose}
            className={`ml-3 flex-shrink-0 inline-flex rounded-md focus:outline-none focus:ring-2 ${config.iconColor} hover:opacity-75`}
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  )
}

export default Toast
