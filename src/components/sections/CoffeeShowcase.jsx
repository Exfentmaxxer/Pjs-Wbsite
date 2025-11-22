import { Coffee, Wifi, Armchair, TreeDeciduous } from 'lucide-react'
import Button from '../common/Button'
import { Link } from 'react-router-dom'

const CoffeeShowcase = () => {
  const highlights = [
    {
      icon: Coffee,
      title: 'Gourmet Coffee Bar',
      description: 'Better than Starbucks - crafted fresh daily'
    },
    {
      icon: Armchair,
      title: 'Comfortable Lounge',
      description: 'Relax in our recliners while we work'
    },
    {
      icon: Wifi,
      title: 'Free WiFi',
      description: 'Stay connected and productive'
    },
    {
      icon: TreeDeciduous,
      title: 'Outdoor Seating',
      description: 'Enjoy fresh air at our bistro tables'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-secondary-900 to-secondary-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://placehold.co/400x300/78350F/FFFFFF?text=Coffee+Bar"
                alt="Gourmet Coffee Bar"
                className="rounded-lg shadow-xl w-full h-64 object-cover"
                loading="lazy"
              />
              <img
                src="https://placehold.co/400x300/78350F/FFFFFF?text=Lounge+Area"
                alt="Comfortable Waiting Lounge"
                className="rounded-lg shadow-xl w-full h-64 object-cover mt-8"
                loading="lazy"
              />
              <img
                src="https://placehold.co/400x300/78350F/FFFFFF?text=Outdoor+Seating"
                alt="Outdoor Seating Area"
                className="rounded-lg shadow-xl w-full h-64 object-cover -mt-8"
                loading="lazy"
              />
              <img
                src="https://placehold.co/400x300/78350F/FFFFFF?text=Interior"
                alt="Shop Interior"
                className="rounded-lg shadow-xl w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-2 bg-accent-500 text-white rounded-full text-sm font-semibold mb-4">
              UNIQUE EXPERIENCE
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The ONLY Auto Shop in Moore County with a Gourmet Coffee Bar
            </h2>

            <p className="text-xl text-gray-200 mb-8">
              Why sit in a boring waiting room when you can enjoy premium coffee in a comfortable lounge?
              We've reimagined the auto service experience.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon

                return (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent-500 bg-opacity-20">
                        <Icon className="w-6 h-6 text-accent-400" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-lg mb-1">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <Link to="/coffee-amenities">
              <Button variant="accent" size="lg">
                Explore Our Amenities
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoffeeShowcase
