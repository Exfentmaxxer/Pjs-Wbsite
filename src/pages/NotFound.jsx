import { Link } from 'react-router-dom'
import Button from '../components/common/Button'
import { Home, Search, Phone } from 'lucide-react'
import businessInfo from '../data/businessInfo'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Graphic */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
          <div className="relative">
            <svg
              className="w-64 h-64 mx-auto text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Looks like this page took a wrong turn. Let's get you back on track!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/">
            <Button variant="primary" size="lg">
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Button>
          </Link>

          <Link to="/services">
            <Button variant="outline" size="lg">
              <Search className="w-5 h-5 mr-2" />
              Browse Services
            </Button>
          </Link>

          <a href={`tel:${businessInfo.contact.mainPhoneRaw}`}>
            <Button variant="accent" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Call Us
            </Button>
          </a>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="font-bold text-gray-900 mb-4">Popular Pages</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link
              to="/services"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium"
            >
              Services
            </Link>
            <Link
              to="/tires"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium"
            >
              Tires
            </Link>
            <Link
              to="/coupons"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium"
            >
              Coupons
            </Link>
            <Link
              to="/schedule"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium"
            >
              Schedule
            </Link>
            <Link
              to="/about"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium"
            >
              About Us
            </Link>
            <Link
              to="/reviews"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium"
            >
              Reviews
            </Link>
            <Link
              to="/coffee-amenities"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium"
            >
              Coffee Bar
            </Link>
            <Link
              to="/contact"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-gray-600">
          <p className="mb-2">Need help? We're here for you!</p>
          <p className="font-semibold">
            Call us at{' '}
            <a
              href={`tel:${businessInfo.contact.mainPhoneRaw}`}
              className="text-primary-600 hover:text-primary-700"
            >
              {businessInfo.contact.mainPhone}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFound
