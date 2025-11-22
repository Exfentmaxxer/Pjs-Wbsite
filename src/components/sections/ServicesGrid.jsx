import { Link } from 'react-router-dom'
import Card from '../common/Card'
import Button from '../common/Button'
import * as LucideIcons from 'lucide-react'

const ServicesGrid = ({ services, title, showViewAll = true }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = LucideIcons[service.icon] || LucideIcons.Wrench

            return (
              <Card key={service.id} variant="elevated" hoverable>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.name}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>

                  {service.price && (
                    <p className="text-accent-600 font-bold text-lg mb-2">
                      {service.price}
                    </p>
                  )}

                  {service.time && (
                    <p className="text-sm text-gray-500 mb-4">
                      Typical time: {service.time}
                    </p>
                  )}

                  <Link to="/schedule">
                    <Button variant="outline" size="sm" fullWidth>
                      Schedule Service
                    </Button>
                  </Link>
                </div>
              </Card>
            )
          })}
        </div>

        {showViewAll && (
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="primary" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default ServicesGrid
