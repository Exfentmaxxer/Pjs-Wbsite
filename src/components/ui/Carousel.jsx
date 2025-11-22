import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Carousel = ({
  items,
  renderItem,
  autoPlay = true,
  interval = 5000,
  showControls = true,
  showIndicators = true,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % items.length)
  }, [items.length])

  const goToPrevious = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + items.length) % items.length)
  }, [items.length])

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index)
  }, [])

  useEffect(() => {
    if (autoPlay && !isHovered && items.length > 1) {
      const timer = setInterval(goToNext, interval)
      return () => clearInterval(timer)
    }
  }, [autoPlay, interval, isHovered, goToNext, items.length])

  if (items.length === 0) return null

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel Content */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      {/* Previous/Next Controls */}
      {showControls && items.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && items.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-primary-600 w-8'
                  : 'bg-white bg-opacity-60 hover:bg-opacity-80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Carousel
