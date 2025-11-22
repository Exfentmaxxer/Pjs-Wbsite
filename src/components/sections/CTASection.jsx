import { Link } from 'react-router-dom'
import Button from '../common/Button'
import { Phone, Calendar } from 'lucide-react'
import businessInfo from '../../data/businessInfo'

const CTASection = ({
  title = 'Ready to Experience the PJ\'s Difference?',
  description = 'Schedule your appointment today and discover why we\'re Moore County\'s most trusted auto care provider.',
  variant = 'primary',
  showPhone = true,
  showSchedule = true
}) => {
  const variants = {
    primary: 'bg-gradient-to-r from-primary-600 to-primary-700',
    accent: 'bg-gradient-to-r from-accent-500 to-accent-600',
    secondary: 'bg-gradient-to-r from-secondary-700 to-secondary-800'
  }

  return (
    <section className={`py-16 ${variants[variant]} text-white`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>

          <p className="text-xl text-gray-100 mb-8">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {showSchedule && (
              <Link to="/schedule">
                <Button variant="accent" size="lg" className="bg-white text-primary-900 hover:bg-gray-100">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Appointment
                </Button>
              </Link>
            )}

            {showPhone && (
              <a href={`tel:${businessInfo.contact.mainPhoneRaw}`}>
                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary-900">
                  <Phone className="w-5 h-5 mr-2" />
                  {businessInfo.contact.mainPhone}
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
