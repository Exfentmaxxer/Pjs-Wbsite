import { useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const Lightbox = ({ images, initialIndex = 0, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return

      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, currentIndex])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (!isOpen || !images.length) return null

  const currentImage = images[currentIndex]

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-white hover:bg-white hover:bg-opacity-10 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Close lightbox"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Previous Button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            goToPrevious()
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white hover:bg-white hover:bg-opacity-10 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
      )}

      {/* Image */}
      <div
        className="max-w-7xl max-h-[90vh] px-16"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.src}
          alt={currentImage.alt || `Image ${currentIndex + 1}`}
          className="max-w-full max-h-[90vh] object-contain"
        />
        {currentImage.caption && (
          <p className="text-white text-center mt-4 text-lg">
            {currentImage.caption}
          </p>
        )}
      </div>

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            goToNext()
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:bg-white hover:bg-opacity-10 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Next image"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      )}

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}

export default Lightbox
