import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Calendar } from 'lucide-react'
import { useScrollPosition } from '../../hooks/useScrollPosition'

const StickyScheduleButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const scrollPosition = useScrollPosition()

  useEffect(() => {
    // Show button after scrolling down 300px
    setIsVisible(scrollPosition > 300)
  }, [scrollPosition])

  if (!isVisible) return null

  return (
    <Link
      to="/schedule"
      className="fixed bottom-8 right-8 z-30 animate-slideInRight"
    >
      <button className="flex items-center justify-center bg-accent-500 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-accent-600 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent-300">
        <Calendar className="w-5 h-5 mr-2" />
        <span className="font-semibold hidden sm:inline">Schedule Now</span>
        <span className="font-semibold sm:hidden">Schedule</span>
      </button>
    </Link>
  )
}

export default StickyScheduleButton
