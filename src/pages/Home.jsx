import { useEffect } from 'react'
import Hero from '../components/sections/Hero'
import ServicesGrid from '../components/sections/ServicesGrid'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import TestimonialsCarousel from '../components/sections/TestimonialsCarousel'
import CoffeeShowcase from '../components/sections/CoffeeShowcase'
import TrustBar from '../components/sections/TrustBar'
import GoogleMap from '../components/sections/GoogleMap'
import CTASection from '../components/sections/CTASection'
import ServiceRequestForm from '../components/forms/ServiceRequestForm'
import { featuredServices } from '../data/services'
import { testimonials } from '../data/testimonials'
import { updateMetaTags, injectStructuredData } from '../utils/seo'
import businessInfo from '../data/businessInfo'

const Home = () => {
  useEffect(() => {
    updateMetaTags({
      title: `${businessInfo.name} - ${businessInfo.tagline}`,
      description: businessInfo.seo.description,
      keywords: businessInfo.seo.keywords.join(', ')
    })

    injectStructuredData({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: businessInfo.name,
      image: 'https://placehold.co/1200x630/1E3A8A/FFFFFF?text=PJs+Auto+Care',
      '@id': businessInfo.contact.website,
      url: businessInfo.contact.website,
      telephone: businessInfo.contact.mainPhone,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: businessInfo.address.street,
        addressLocality: businessInfo.address.city,
        addressRegion: businessInfo.address.state,
        postalCode: businessInfo.address.zip,
        addressCountry: 'US'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 35.1738,
        longitude: -79.3928
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '07:30',
          closes: '17:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '07:30',
          closes: '16:00'
        }
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: businessInfo.stats.rating,
        reviewCount: businessInfo.stats.reviewCount
      }
    })
  }, [])

  const featuredTestimonials = testimonials.filter(t => t.featured)

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Where Quality Auto Care Meets Premium Coffee"
        subtitle="Moore County's Most Trusted Auto Service"
        description="Experience the ONLY auto shop in the area with a gourmet coffee bar. BBB A+ rated with 21+ years of honest service."
        primaryCTA={{ text: 'Schedule Appointment', to: '/schedule' }}
        secondaryCTA={{ text: 'View Services', to: '/services' }}
        backgroundImage="https://placehold.co/1920x1080/1E3A8A/FFFFFF?text=Auto+Shop+Hero"
        height="large"
      />

      {/* Trust Bar */}
      <TrustBar />

      {/* Featured Services */}
      <div className="relative">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Services Grid - 2 columns */}
            <div className="lg:col-span-2">
              <ServicesGrid
                services={featuredServices}
                title="Our Popular Services"
                showViewAll={true}
              />
            </div>

            {/* Sticky Service Request Form */}
            <div className="lg:col-span-1">
              <ServiceRequestForm isSticky={true} />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Coffee Showcase */}
      <CoffeeShowcase />

      {/* Testimonials */}
      <TestimonialsCarousel
        testimonials={featuredTestimonials}
        title="What Our Customers Say"
      />

      {/* Location Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Us Today
            </h2>
            <p className="text-xl text-gray-600">
              Conveniently located in Southern Pines, NC
            </p>
          </div>
          <GoogleMap height="450px" showBorder={true} />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection variant="primary" />
    </>
  )
}

export default Home
