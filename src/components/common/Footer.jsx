import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react'
import NewsletterForm from '../forms/NewsletterForm'
import businessInfo from '../../data/businessInfo'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { to: '/services', label: 'Our Services' },
    { to: '/tires', label: 'Tires' },
    { to: '/coffee-amenities', label: 'Coffee & Amenities' },
    { to: '/about', label: 'About Us' },
    { to: '/reviews', label: 'Reviews' },
    { to: '/coupons', label: 'Coupons' },
    { to: '/contact', label: 'Contact' },
    { to: '/schedule', label: 'Schedule Appointment' }
  ]

  const services = [
    'Oil Changes',
    'NC State Inspections',
    'Brake Service',
    'Tire Sales & Service',
    'Engine Diagnostics',
    'AC Repair',
    'Transmission Service',
    'Wheel Alignment'
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-accent-500 rounded-lg">
                <span className="text-2xl font-bold text-white">PJ</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight">
                  PJ's Auto Care
                </span>
                <span className="text-xs text-accent-400">
                  & Gourmet Coffee
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-400 mb-4">
              {businessInfo.tagline}
            </p>

            <p className="text-sm text-gray-400 mb-4">
              BBB {businessInfo.stats.bbbRating} Rated • {businessInfo.stats.rating}/5 Stars • {businessInfo.stats.yearsInBusiness}+ Years
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {businessInfo.social.facebook && (
                <a
                  href={businessInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-accent-500 rounded-full transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm hover:text-accent-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 mb-6">
              <a
                href={`tel:${businessInfo.contact.mainPhoneRaw}`}
                className="flex items-start text-sm hover:text-accent-400 transition-colors duration-200"
              >
                <Phone className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>{businessInfo.contact.mainPhone}</span>
              </a>

              <a
                href={`mailto:${businessInfo.contact.email}`}
                className="flex items-start text-sm hover:text-accent-400 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>{businessInfo.contact.email}</span>
              </a>

              <a
                href={businessInfo.address.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start text-sm hover:text-accent-400 transition-colors duration-200"
              >
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>{businessInfo.address.full}</span>
              </a>

              <div className="flex items-start text-sm">
                <Clock className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p>{businessInfo.hoursFormatted.weekday}</p>
                  <p>{businessInfo.hoursFormatted.saturday}</p>
                  <p className="text-gray-500">{businessInfo.hoursFormatted.sunday}</p>
                </div>
              </div>
            </div>

            <h4 className="text-white font-semibold text-sm mb-3">Newsletter</h4>
            <NewsletterForm inline />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
            <p>
              &copy; {currentYear} {businessInfo.name}. All rights reserved.
            </p>
            <p className="mt-2 md:mt-0">
              Proudly serving {businessInfo.serviceArea.join(', ')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
