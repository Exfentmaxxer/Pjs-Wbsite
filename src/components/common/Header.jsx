import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Phone, Calendar } from 'lucide-react'
import Navigation from './Navigation'
import MobileMenu from './MobileMenu'
import Button from './Button'
import businessInfo from '../../data/businessInfo'
import { useScrollPosition } from '../../hooks/useScrollPosition'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const scrollPosition = useScrollPosition()
  const isScrolled = scrollPosition > 50

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-900 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <a
                href={`tel:${businessInfo.contact.mainPhoneRaw}`}
                className="hover:text-accent-400 transition-colors duration-200"
              >
                <Phone className="inline w-4 h-4 mr-1" />
                {businessInfo.contact.mainPhone}
              </a>
              <span className="text-gray-400">|</span>
              <span>{businessInfo.hoursFormatted.weekday}</span>
            </div>
            <div className="flex items-center space-x-4">
              {businessInfo.social.facebook && (
                <a
                  href={businessInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-400 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  Facebook
                </a>
              )}
              {businessInfo.social.google && (
                <a
                  href={businessInfo.social.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-400 transition-colors duration-200"
                  aria-label="Google"
                >
                  Google
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-primary-600 shadow-lg'
            : 'bg-primary-600'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12 bg-accent-500 rounded-lg">
                <span className="text-2xl font-bold text-white">PJ</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-tight">
                  PJ's Auto Care
                </span>
                <span className="text-xs text-accent-300">
                  & Gourmet Coffee
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <Navigation />
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link to="/schedule">
                <Button variant="accent" size="md">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-white hover:bg-primary-700 rounded-md transition-colors duration-200"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
}

export default Header
