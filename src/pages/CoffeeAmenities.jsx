import { useEffect, useState } from 'react'
import Hero from '../components/sections/Hero'
import Card from '../components/common/Card'
import Lightbox from '../components/ui/Lightbox'
import CTASection from '../components/sections/CTASection'
import * as LucideIcons from 'lucide-react'
import businessInfo from '../data/businessInfo'
import { updateMetaTags } from '../utils/seo'

const CoffeeAmenities = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  useEffect(() => {
    updateMetaTags({
      title: `Gourmet Coffee Bar & Premium Amenities - ${businessInfo.name}`,
      description: 'The ONLY auto shop in Moore County with a gourmet coffee bar! Enjoy premium coffee, comfortable recliners, free WiFi, outdoor seating, and more while we service your vehicle.',
      keywords: 'coffee bar, waiting lounge, auto shop amenities, comfortable waiting area, free wifi, southern pines'
    })
  }, [])

  const galleryImages = [
    {
      src: 'https://placehold.co/800x600/78350F/FFFFFF?text=Gourmet+Coffee+Bar',
      alt: 'Gourmet Coffee Bar',
      caption: 'Premium coffee better than Starbucks'
    },
    {
      src: 'https://placehold.co/800x600/78350F/FFFFFF?text=Comfortable+Lounge',
      alt: 'Comfortable Waiting Lounge',
      caption: 'Relax in our comfortable recliners'
    },
    {
      src: 'https://placehold.co/800x600/78350F/FFFFFF?text=Outdoor+Seating',
      alt: 'Outdoor Seating Area',
      caption: 'Enjoy fresh air at our bistro tables'
    },
    {
      src: 'https://placehold.co/800x600/78350F/FFFFFF?text=Interior+1',
      alt: 'Shop Interior',
      caption: 'Clean, modern facility'
    },
    {
      src: 'https://placehold.co/800x600/78350F/FFFFFF?text=Interior+2',
      alt: 'Waiting Area',
      caption: 'Your comfort is our priority'
    },
    {
      src: 'https://placehold.co/800x600/78350F/FFFFFF?text=Facility',
      alt: 'Modern Facility',
      caption: 'State-of-the-art service bays'
    }
  ]

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <>
      <Hero
        title="Coffee Bar & Premium Amenities"
        subtitle="The Auto Service Experience, Redefined"
        description="The ONLY auto shop in Moore County where you can enjoy gourmet coffee in a comfortable lounge"
        primaryCTA={{ text: 'Schedule Visit', to: '/schedule' }}
        backgroundImage="https://placehold.co/1920x600/78350F/FFFFFF?text=Coffee+Hero"
        height="medium"
      />

      {/* Main Amenities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Wait in a Boring Waiting Room?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've completely reimagined what an auto service experience should be.
              Enjoy premium amenities that make waiting actually enjoyable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {businessInfo.amenities.map((amenity, index) => {
              const Icon = LucideIcons[amenity.icon] || LucideIcons.Star
              return (
                <Card key={index} variant="outlined" hoverable>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 mb-4">
                      <Icon className="w-8 h-8 text-accent-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {amenity.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {amenity.description}
                    </p>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Featured Highlight */}
          <div className="bg-gradient-to-r from-secondary-900 to-secondary-800 rounded-lg p-8 text-white text-center">
            <LucideIcons.Coffee className="w-16 h-16 mx-auto mb-4 text-accent-400" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Premium Gourmet Coffee Bar
            </h3>
            <p className="text-xl text-gray-200 mb-6 max-w-2xl mx-auto">
              We're not exaggerating when we say our coffee rivals the best coffee shops.
              Enjoy freshly brewed gourmet coffee, espresso drinks, and more - all complimentary while you wait.
            </p>
            <p className="text-lg text-accent-300 font-semibold">
              "Better than Starbucks!" - Multiple Customer Reviews
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See For Yourself
            </h2>
            <p className="text-xl text-gray-600">
              Take a virtual tour of our facility
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-200 flex items-center justify-center">
                  <LucideIcons.Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* What Customers Say */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Customers Say About Our Amenities
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card variant="elevated">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <LucideIcons.Star key={i} className="w-5 h-5 fill-accent-500 text-accent-500" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "The coffee bar is absolutely amazing! I actually look forward to getting my oil changed now.
                The lounge is nicer than my living room!"
              </p>
              <p className="font-semibold text-gray-900">- Sarah M.</p>
            </Card>

            <Card variant="elevated">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <LucideIcons.Star key={i} className="w-5 h-5 fill-accent-500 text-accent-500" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "This is NOT your typical auto shop. The recliners, WiFi, and outdoor seating make waiting
                a pleasure. And yes, the coffee really is better than Starbucks!"
              </p>
              <p className="font-semibold text-gray-900">- Michael T.</p>
            </Card>

            <Card variant="elevated">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <LucideIcons.Star key={i} className="w-5 h-5 fill-accent-500 text-accent-500" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "Cleanest auto shop I've ever seen. The restrooms are immaculate, and the whole facility
                feels more like a modern coffee shop than a mechanic."
              </p>
              <p className="font-semibold text-gray-900">- Jennifer R.</p>
            </Card>
          </div>
        </div>
      </section>

      <CTASection
        variant="secondary"
        title="Experience the Difference"
        description="See why customers drive from across Moore County for our unique combination of expert service and premium amenities."
      />

      <Lightbox
        images={galleryImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  )
}

export default CoffeeAmenities
