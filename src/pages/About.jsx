import { useEffect } from 'react'
import Hero from '../components/sections/Hero'
import Card from '../components/common/Card'
import CTASection from '../components/sections/CTASection'
import { Award, Users, Heart, Shield } from 'lucide-react'
import businessInfo from '../data/businessInfo'
import { updateMetaTags } from '../utils/seo'

const About = () => {
  useEffect(() => {
    updateMetaTags({
      title: `About Us - Family-Owned Since 2003 - ${businessInfo.name}`,
      description: 'Family-owned and operated since 2003. Meet Jerry and Paula Ullman, the team behind Moore County\'s most trusted auto care provider. BBB A+ rated with 21+ years of honest service.',
      keywords: 'about us, family owned, jerry ullman, paula ullman, auto repair southern pines, bbb rated'
    })
  }, [])

  const timeline = [
    {
      year: '2003',
      title: 'PJ\'s Auto Care Founded',
      description: 'Jerry and Paula Ullman opened the doors on November 19, 2003, with a vision of honest, quality auto service.'
    },
    {
      year: '2008',
      title: 'BBB Accreditation',
      description: 'Achieved BBB A+ rating, a testament to our commitment to customer satisfaction and ethical business practices.'
    },
    {
      year: '2015',
      title: 'Facility Expansion',
      description: 'Expanded our facility to better serve our growing customer base with state-of-the-art equipment.'
    },
    {
      year: '2018',
      title: 'Coffee Bar Addition',
      description: 'Introduced our signature gourmet coffee bar and premium waiting lounge - the first of its kind in Moore County.'
    },
    {
      year: '2024',
      title: '21 Years Strong',
      description: 'Celebrating over two decades of serving the community with 468+ 5-star reviews and counting!'
    }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Every decision we make puts customer satisfaction and safety first. You\'re not just a transaction - you\'re part of our family.'
    },
    {
      icon: Shield,
      title: 'Integrity Always',
      description: 'We only recommend services your vehicle actually needs. No pressure tactics, no unnecessary upsells - just honest advice.'
    },
    {
      icon: Award,
      title: 'Excellence in Service',
      description: 'From our certified technicians to our premium amenities, we strive for excellence in every aspect of your experience.'
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'As a local family business, we\'re invested in our community. Your success is our success.'
    }
  ]

  return (
    <>
      <Hero
        title="Our Story"
        subtitle="Family-Owned Since 2003"
        description="Building trust one vehicle at a time for over 21 years"
        backgroundImage="https://placehold.co/1920x600/1E3A8A/FFFFFF?text=About+Us+Hero"
        height="medium"
      />

      {/* Owners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-600">
              The family behind PJ's Auto Care
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card variant="elevated">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-primary-100 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary-600">JU</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {businessInfo.owners.president.name}
                </h3>
                <p className="text-accent-600 font-semibold mb-4">
                  {businessInfo.owners.president.title}
                </p>
                <p className="text-gray-600">
                  {businessInfo.owners.president.bio}
                </p>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-accent-100 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-accent-600">PU</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {businessInfo.owners.secretary.name}
                </h3>
                <p className="text-accent-600 font-semibold mb-4">
                  {businessInfo.owners.secretary.title}
                </p>
                <p className="text-gray-600">
                  {businessInfo.owners.secretary.bio}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} variant="outlined" hoverable>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4">
                      <Icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              21+ years of growth, innovation, and service
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex mb-8 last:mb-0">
                <div className="flex flex-col items-center mr-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent-500 text-white font-bold text-sm">
                    {item.year}
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-300 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Partnerships
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {businessInfo.certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-75 transition-opacity duration-200"
                >
                  <img
                    src={cert.logo}
                    alt={cert.name}
                    className="h-24 object-contain mx-auto mb-3"
                    loading="lazy"
                  />
                  <p className="text-sm font-semibold text-gray-700">{cert.name}</p>
                  {cert.rating && (
                    <p className="text-xs text-gray-500">Rating: {cert.rating}</p>
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        variant="primary"
        title="Experience Family-Owned Service"
        description="Join the hundreds of customers who trust us with their vehicles. Experience the PJ's difference today."
      />
    </>
  )
}

export default About
