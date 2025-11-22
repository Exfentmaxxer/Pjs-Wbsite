import { useEffect, useState } from 'react'
import Hero from '../components/sections/Hero'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import Tabs from '../components/ui/Tabs'
import CTASection from '../components/sections/CTASection'
import * as LucideIcons from 'lucide-react'
import { tireBrands, tiresByVehicle, seasonalRecommendations, tireServices } from '../data/tires'
import { updateMetaTags } from '../utils/seo'
import businessInfo from '../data/businessInfo'

const Tires = () => {
  const [selectedVehicle, setSelectedVehicle] = useState('Sedan')

  useEffect(() => {
    updateMetaTags({
      title: `Tire Sales & Service - Michelin, BFGoodrich, Uniroyal - ${businessInfo.name}`,
      description: 'Authorized Michelin, BFGoodrich, and Uniroyal tire dealer in Southern Pines, NC. Premium tire sales, installation, rotation, alignment, and repair services.',
      keywords: 'tires, michelin tires, bfgoodrich tires, tire installation, wheel alignment, tire rotation, southern pines nc'
    })
  }, [])

  return (
    <>
      <Hero
        title="Premium Tire Sales & Service"
        subtitle="Authorized Dealer"
        description="Michelin®, BFGoodrich®, and Uniroyal® - Expert installation and service"
        primaryCTA={{ text: 'Schedule Service', to: '/schedule' }}
        backgroundImage="https://placehold.co/1920x600/1E3A8A/FFFFFF?text=Tires+Hero"
        height="medium"
      />

      {/* Tire Brands */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Authorized Tire Brands
            </h2>
            <p className="text-xl text-gray-600">
              We carry premium tires from the world's most trusted manufacturers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tireBrands.map((brand) => (
              <Card key={brand.id} variant="elevated" hoverable>
                <div className="text-center">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-20 object-contain mx-auto mb-4"
                    loading="lazy"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {brand.name}
                  </h3>
                  {brand.authorized && (
                    <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-4">
                      Authorized Dealer
                    </span>
                  )}
                  <p className="text-gray-600 mb-4">{brand.description}</p>
                  <ul className="text-left space-y-2 mb-4">
                    {brand.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <LucideIcons.Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t pt-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Popular Models:</p>
                    <p className="text-xs text-gray-500">{brand.popular.join(', ')}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tires by Vehicle Type */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Tires for Your Vehicle
            </h2>
            <p className="text-xl text-gray-600">
              Select your vehicle type to see our recommendations
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {tiresByVehicle.map((vehicle) => {
              const Icon = LucideIcons[vehicle.icon] || LucideIcons.Car
              return (
                <button
                  key={vehicle.type}
                  onClick={() => setSelectedVehicle(vehicle.type)}
                  className={`p-6 rounded-lg border-2 transition-all duration-200 ${
                    selectedVehicle === vehicle.type
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 bg-white hover:border-primary-300'
                  }`}
                >
                  <Icon className={`w-12 h-12 mx-auto mb-3 ${
                    selectedVehicle === vehicle.type ? 'text-primary-600' : 'text-gray-400'
                  }`} />
                  <p className="font-bold text-gray-900">{vehicle.type}</p>
                </button>
              )
            })}
          </div>

          {tiresByVehicle
            .filter((v) => v.type === selectedVehicle)
            .map((vehicle) => (
              <Card key={vehicle.type} variant="elevated">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {vehicle.type} Tires
                </h3>
                <p className="text-gray-600 mb-6">{vehicle.description}</p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Recommended Tires:</h4>
                    <ul className="space-y-2">
                      {vehicle.recommended.map((tire, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <LucideIcons.CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          {tire}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {vehicle.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <LucideIcons.Star className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
        </div>
      </section>

      {/* Seasonal Recommendations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seasonal Tire Recommendations
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {seasonalRecommendations.map((rec) => {
              const Icon = LucideIcons[rec.icon] || LucideIcons.Calendar
              return (
                <Card key={rec.season} variant="outlined" hoverable>
                  <div className="text-center">
                    <Icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {rec.season}
                    </h3>
                    <p className="text-gray-600 mb-4">{rec.description}</p>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900 mb-2">Best For:</p>
                      <ul className="space-y-1 mb-4">
                        {rec.bestFor.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-600">• {item}</li>
                        ))}
                      </ul>
                      <p className="font-semibold text-gray-900 mb-2">Top Picks:</p>
                      <ul className="space-y-1">
                        {rec.topPicks.map((tire, idx) => (
                          <li key={idx} className="text-sm text-gray-600">• {tire}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tire Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Tire Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tireServices.map((service) => (
              <Card key={service.id} variant="elevated">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-1 mb-4">
                  {service.included.map((item, idx) => (
                    <li key={idx} className="text-xs text-gray-500 flex items-start">
                      <span className="text-primary-600 mr-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-semibold text-primary-600">
                  Time: {service.time}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        variant="primary"
        title="Need New Tires?"
        description="Our tire experts will help you find the perfect tires for your vehicle and budget."
      />
    </>
  )
}

export default Tires
