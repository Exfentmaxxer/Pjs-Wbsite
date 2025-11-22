import { useEffect, useState, useRef } from 'react'

export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const targetRef = useRef(null)

  useEffect(() => {
    const target = targetRef.current
    if (!target) return

    const defaultOptions = {
      threshold: 0.1,
      rootMargin: '0px',
      triggerOnce: false,
      ...options,
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)

      if (entry.isIntersecting && !hasIntersected) {
        setHasIntersected(true)
      }

      if (defaultOptions.triggerOnce && entry.isIntersecting) {
        observer.unobserve(target)
      }
    }, defaultOptions)

    observer.observe(target)

    return () => {
      if (target) {
        observer.unobserve(target)
      }
    }
  }, [options, hasIntersected])

  return { targetRef, isIntersecting, hasIntersected }
}

export default useIntersectionObserver
