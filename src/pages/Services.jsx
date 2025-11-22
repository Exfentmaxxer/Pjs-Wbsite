import { useEffect } from 'react'
import Hero from '../components/sections/Hero'
import Accordion from '../components/ui/Accordion'
import CTASection from '../components/sections/CTASection'
import Card from '../components/common/Card'
import * as LucideIcons from 'lucide-react'
import { serviceCategories } from '../data/services'
import { updateMetaTags } from '../utils/seo'
import businessInfo from '../data/businessInfo'

const Services = () => {
  useEffect(() => {
    updateMetaTags({
      title: `Auto Repair Services - ${businessInfo.name}`,
      description: 'Complete auto repair and maintenance services in Southern Pines, NC. Oil changes, brakes, tires, diagnostics, AC repair, and more. BBB A+ rated with 21+ years of experience.',
      keywords: 'auto repair, car service, oil change, brake service, tire service, engine diagnostics, southern pines nc'
    })
  }, [])

  return (
    <>
      <Hero
        title="Professional Auto Services"
        subtitle="Complete Auto Care Solutions"
        description="From routine maintenance to complex repairs, we handle it all with expertise and integrity."
        primaryCTA={{ text: 'Schedule Service', to: '/schedule' }}
        backgroundImage="https://placehold.co/1920x600/1E3A8A/FFFFFF?text=Services+Hero"
        height="medium"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Categories
            </h2>
            <p className="text-xl text-gray-600">
              Expert automotive care for all makes and models
            </p>
          </div>

          {/* Service Categories */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {serviceCategories.map((category) => {
              const Icon = LucideIcons[category.icon] || LucideIcons.Wrench

              return (
                <Card key={category.id} variant="elevated">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary-100">
                        <Icon className="w-7 h-7 text-primary-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {category.name}
                      </h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>

                  {/* Services List */}
                  <div className="mt-6">
                    <Accordion
                      items={category.services.map(service => ({
                        title: service.name,
                        content: (
                          <div>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                            <div className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                                {service.benefits.map((benefit, idx) => (
                                  <li key={idx}>{benefit}</li>
                                ))}
                              </ul>
                              {service.estimatedTime && (
                                <p className="mt-3 text-sm text-gray-500">
                                  <strong>Estimated Time:</strong> {service.estimatedTime}
                                </p>
                              )}
                            </div>
                          </div>
                        )
                      }))}
                    />
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Service Guarantees */}
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Our Service Guarantees
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <LucideIcons.ShieldCheck className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Quality Parts</h4>
                <p className="text-sm text-gray-600">
                  We use only high-quality OEM and premium aftermarket parts
                </p>
              </div>
              <div className="text-center">
                <LucideIcons.Award className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Expert Technicians</h4>
                <p className="text-sm text-gray-600">
                  Certified technicians with years of experience
                </p>
              </div>
              <div className="text-center">
                <LucideIcons.ThumbsUp className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Customer Satisfaction</h4>
                <p className="text-sm text-gray-600">
                  4.8/5 stars from 468+ happy customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="primary" />
    </>
  )
}

export default Services
