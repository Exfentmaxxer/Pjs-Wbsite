import { useState, useEffect } from 'react'
import { throttle } from '../utils/helpers'

export const useScrollPosition = (throttleMs = 100) => {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0,
  })

  const [scrollDirection, setScrollDirection] = useState('down')
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop

      setScrollPosition({
        x: window.pageXOffset || document.documentElement.scrollLeft,
        y: currentScrollY,
      })

      if (currentScrollY > lastScrollY) {
        setScrollDirection('down')
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up')
      }

      setLastScrollY(currentScrollY)
    }, throttleMs)

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [throttleMs, lastScrollY])

  return {
    scrollPosition,
    scrollDirection,
    isScrolled: scrollPosition.y > 0,
    isScrolledPast: (threshold) => scrollPosition.y > threshold,
  }
}

export default useScrollPosition
