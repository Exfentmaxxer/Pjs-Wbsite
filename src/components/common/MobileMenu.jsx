import { NavLink } from 'react-router-dom'
import { X, Phone, Calendar } from 'lucide-react'
import businessInfo from '../../data/businessInfo'
import Button from './Button'

const MobileMenu = ({ isOpen, onClose }) => {
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/tires', label: 'Tires' },
    { to: '/coffee-amenities', label: 'Coffee & Amenities' },
    { to: '/about', label: 'About' },
    { to: '/reviews', label: 'Reviews' },
    { to: '/coupons', label: 'Coupons' },
    { to: '/contact', label: 'Contact' }
  ]

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onClose}
      ></div>

      {/* Menu Panel */}
      <div className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 lg:hidden shadow-2xl animate-slideInRight">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={onClose}
                className={({ isActive }) =>
                  `block px-6 py-3 text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="p-4 border-t border-gray-200 space-y-3">
            <NavLink to="/schedule" onClick={onClose}>
              <Button variant="primary" size="md" fullWidth>
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Appointment
              </Button>
            </NavLink>

            <a href={`tel:${businessInfo.contact.mainPhoneRaw}`}>
              <Button variant="outline" size="md" fullWidth>
                <Phone className="w-5 h-5 mr-2" />
                {businessInfo.contact.mainPhone}
              </Button>
            </a>
          </div>

          {/* Business Hours */}
          <div className="p-4 bg-gray-50 text-sm text-gray-600">
            <p className="font-semibold mb-2">Hours</p>
            <p>{businessInfo.hoursFormatted.weekday}</p>
            <p>{businessInfo.hoursFormatted.saturday}</p>
            <p>{businessInfo.hoursFormatted.sunday}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileMenu
