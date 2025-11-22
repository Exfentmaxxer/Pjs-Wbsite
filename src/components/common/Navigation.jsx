import { NavLink } from 'react-router-dom'

const Navigation = ({ className = '' }) => {
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

  return (
    <nav className={`flex items-center space-x-1 ${className}`}>
      {navLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              isActive
                ? 'bg-primary-700 text-white'
                : 'text-gray-100 hover:bg-primary-700 hover:text-white'
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navigation
