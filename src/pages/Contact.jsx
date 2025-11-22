import { useEffect } from 'react'
import Hero from '../components/sections/Hero'
import Card from '../components/common/Card'
import ContactForm from '../components/forms/ContactForm'
import GoogleMap from '../components/sections/GoogleMap'
import Accordion from '../components/ui/Accordion'
import { Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react'
import businessInfo from '../data/businessInfo'
import { faqs } from '../data/faqs'
import { updateMetaTags } from '../utils/seo'

const Contact = () => {
  useEffect(() => {
    updateMetaTags({
      title: `Contact Us - ${businessInfo.name}`,
      description: `Contact PJ's Auto Care in Southern Pines, NC. Call ${businessInfo.contact.mainPhone}, email ${businessInfo.contact.email}, or visit us at ${businessInfo.address.full}`,
      keywords: 'contact, phone, email, address, location, hours, southern pines auto repair'
    })
  }, [])

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      primary: businessInfo.contact.mainPhone,
      secondary: `Service: ${businessInfo.contact.servicePhone}`,
      link: `tel:${businessInfo.contact.mainPhoneRaw}`,
      color: 'primary'
    },
    {
      icon: Mail,
      title: 'Email Us',
      primary: businessInfo.contact.email,
      secondary: 'We respond within 24 hours',
      link: `mailto:${businessInfo.contact.email}`,
      color: 'accent'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      primary: businessInfo.address.street,
      secondary: `${businessInfo.address.city}, ${businessInfo.address.state} ${businessInfo.address.zip}`,
      link: businessInfo.address.googleMapsLink,
      color: 'secondary'
    }
  ]

  const faqItems = faqs.slice(0, 10).map(faq => ({
    title: faq.question,
    content: faq.answer
  }))

  return (
    <>
      <Hero
        title="Get In Touch"
        subtitle="We're Here to Help"
        description="Questions? Need a quote? Ready to schedule? Contact us today!"
        backgroundImage="https://placehold.co/1920x600/1E3A8A/FFFFFF?text=Contact+Hero"
        height="medium"
      />

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <a
                  key={index}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <Card variant="outlined" hoverable>
                    <div className="text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${method.color}-100 mb-4`}>
                        <Icon className={`w-8 h-8 text-${method.color}-600`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {method.title}
                      </h3>
                      <p className="text-lg font-semibold text-gray-900">
                        {method.primary}
                      </p>
                      <p className="text-sm text-gray-600">
                        {method.secondary}
                      </p>
                    </div>
                  </Card>
                </a>
              )
            })}
          </div>

          {/* Contact Form and Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Business Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Business Information
              </h2>

              <Card variant="elevated" className="mb-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Hours of Operation</h3>
                      <p className="text-gray-700">{businessInfo.hoursFormatted.weekday}</p>
                      <p className="text-gray-700">{businessInfo.hoursFormatted.saturday}</p>
                      <p className="text-gray-500">{businessInfo.hoursFormatted.sunday}</p>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-start">
                      <Phone className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Phone Numbers</h3>
                        <p className="text-gray-700">
                          Main: <a href={`tel:${businessInfo.contact.mainPhoneRaw}`} className="hover:text-primary-600">{businessInfo.contact.mainPhone}</a>
                        </p>
                        <p className="text-gray-700">
                          Service: <a href={`tel:${businessInfo.contact.servicePhoneRaw}`} className="hover:text-primary-600">{businessInfo.contact.servicePhone}</a>
                        </p>
                        <p className="text-gray-700">
                          Fax: {businessInfo.contact.fax}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Address</h3>
                        <p className="text-gray-700">{businessInfo.address.full}</p>
                        <a
                          href={businessInfo.address.googleMapsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 text-sm mt-1 inline-block"
                        >
                          Get Directions →
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-bold text-gray-900 mb-3">Service Area</h3>
                    <div className="flex flex-wrap gap-2">
                      {businessInfo.serviceArea.map((area, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-bold text-gray-900 mb-3">Follow Us</h3>
                    <div className="flex space-x-3">
                      {businessInfo.social.facebook && (
                        <a
                          href={businessInfo.social.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-primary-100 hover:bg-primary-200 rounded-full transition-colors duration-200"
                        >
                          <Facebook className="w-6 h-6 text-primary-600" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Card>

              {/* Quick Stats */}
              <Card variant="outlined">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold text-primary-600">
                      {businessInfo.stats.yearsInBusiness}+
                    </p>
                    <p className="text-sm text-gray-600">Years in Business</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-accent-600">
                      {businessInfo.stats.rating}
                    </p>
                    <p className="text-sm text-gray-600">Average Rating</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary-600">
                      {businessInfo.stats.reviewCount}+
                    </p>
                    <p className="text-sm text-gray-600">Reviews</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-accent-600">
                      {businessInfo.stats.bbbRating}
                    </p>
                    <p className="text-sm text-gray-600">BBB Rating</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Us on the Map
            </h2>
            <p className="text-xl text-gray-600">
              Conveniently located in Southern Pines, NC
            </p>
          </div>
          <GoogleMap height="500px" showBorder={true} />
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Quick answers to common questions
              </p>
            </div>

            <Accordion items={faqItems} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
