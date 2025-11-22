// General utility helper functions

export const formatDate = (dateString, options = {}) => {
  const date = new Date(dateString)
  const defaultOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString('en-US', { ...defaultOptions, ...options })
}

export const formatPhoneNumber = phone => {
  const cleaned = ('' + phone).replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  }
  return phone
}

export const formatCurrency = amount => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

export const slugify = text => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

export const truncate = (str, length = 100, ending = '...') => {
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending
  }
  return str
}

export const debounce = (func, wait = 300) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export const throttle = (func, limit = 200) => {
  let inThrottle
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

export const scrollToTop = (smooth = true) => {
  window.scrollTo({
    top: 0,
    behavior: smooth ? 'smooth' : 'auto',
  })
}

export const scrollToElement = (elementId, offset = 0) => {
  const element = document.getElementById(elementId)
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

export const isElementInViewport = el => {
  const rect = el.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

export const generateUniqueId = (prefix = 'id') => {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

export const getYearsInBusiness = establishedYear => {
  return new Date().getFullYear() - establishedYear
}

export const isBusinessOpen = (currentDay, hours) => {
  const daysMap = {
    0: 'sunday',
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday',
  }

  const dayName = daysMap[currentDay]
  return hours[dayName]?.isOpen || false
}

export const getCurrentDay = () => {
  return new Date().getDay()
}

export const getTodaysHours = hours => {
  const daysMap = {
    0: 'sunday',
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday',
  }

  const today = new Date().getDay()
  const dayName = daysMap[today]
  return hours[dayName] || { open: 'Closed', close: 'Closed', isOpen: false }
}

export const calculateRatingPercentage = (rating, maxRating = 5) => {
  return (rating / maxRating) * 100
}

export const groupBy = (array, key) => {
  return array.reduce((result, item) => {
    const groupKey = typeof key === 'function' ? key(item) : item[key]
    if (!result[groupKey]) {
      result[groupKey] = []
    }
    result[groupKey].push(item)
    return result
  }, {})
}

export const sortBy = (array, key, order = 'asc') => {
  return [...array].sort((a, b) => {
    const aVal = typeof key === 'function' ? key(a) : a[key]
    const bVal = typeof key === 'function' ? key(b) : b[key]

    if (aVal < bVal) return order === 'asc' ? -1 : 1
    if (aVal > bVal) return order === 'asc' ? 1 : -1
    return 0
  })
}

export const filterBy = (array, predicate) => {
  return array.filter(predicate)
}

export default {
  formatDate,
  formatPhoneNumber,
  formatCurrency,
  slugify,
  truncate,
  debounce,
  throttle,
  scrollToTop,
  scrollToElement,
  isElementInViewport,
  generateUniqueId,
  cn,
  getYearsInBusiness,
  isBusinessOpen,
  getCurrentDay,
  getTodaysHours,
  calculateRatingPercentage,
  groupBy,
  sortBy,
  filterBy,
}
