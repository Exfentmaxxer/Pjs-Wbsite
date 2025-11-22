import { useEffect } from 'react'
import Hero from '../components/sections/Hero'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import NewsletterForm from '../components/forms/NewsletterForm'
import { Scissors, Mail, Printer } from 'lucide-react'
import { coupons, loyaltyProgram } from '../data/coupons'
import { updateMetaTags } from '../utils/seo'
import businessInfo from '../data/businessInfo'

const Coupons = () => {
  useEffect(() => {
    updateMetaTags({
      title: `Coupons & Special Offers - ${businessInfo.name}`,
      description: 'Save on auto service with our current coupons and special offers. Oil change discounts, tire deals, brake specials, and more. Sign up for exclusive newsletter offers.',
      keywords: 'coupons, discounts, specials, oil change coupon, tire deals, auto repair savings'
    })
  }, [])

  const handlePrint = (coupon) => {
    window.print()
  }

  const featuredCoupons = coupons.filter(c => c.featured)
  const otherCoupons = coupons.filter(c => !c.featured)

  return (
    <>
      <Hero
        title="Save on Quality Auto Service"
        subtitle="Current Coupons & Special Offers"
        description="Check out our latest deals and exclusive offers"
        primaryCTA={{ text: 'Schedule Appointment', to: '/schedule' }}
        backgroundImage="https://placehold.co/1920x600/F59E0B/FFFFFF?text=Coupons+Hero"
        height="medium"
      />

      {/* Newsletter Signup */}
      <section className="py-12 bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Mail className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Get Exclusive Coupons in Your Inbox
            </h2>
            <p className="text-lg mb-6">
              Sign up for our newsletter and receive special offers delivered straight to you
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm inline />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Coupons */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Offers
            </h2>
            <p className="text-xl text-gray-600">
              Our most popular savings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCoupons.map((coupon) => (
              <Card key={coupon.id} variant="elevated" hoverable>
                <div className="relative">
                  {/* Coupon Badge */}
                  <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 rounded-bl-lg font-bold text-sm">
                    {coupon.discount}
                  </div>

                  {/* Coupon Image */}
                  <img
                    src={coupon.image}
                    alt={coupon.title}
                    className="w-full h-40 object-cover rounded-t-lg mb-4"
                    loading="lazy"
                  />

                  {/* Coupon Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {coupon.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {coupon.description}
                  </p>

                  {/* Coupon Code */}
                  <div className="bg-gray-100 rounded-lg p-3 mb-4">
                    <p className="text-xs text-gray-600 mb-1">Coupon Code:</p>
                    <p className="font-mono font-bold text-primary-600">
                      {coupon.code}
                    </p>
                  </div>

                  {/* Valid Until */}
                  <p className="text-xs text-gray-500 mb-4">
                    Valid until: {new Date(coupon.validUntil).toLocaleDateString()}
                  </p>

                  {/* Terms */}
                  <details className="text-xs text-gray-600 mb-4">
                    <summary className="cursor-pointer font-semibold hover:text-primary-600">
                      Terms & Conditions
                    </summary>
                    <ul className="mt-2 space-y-1 pl-4">
                      {coupon.terms.map((term, idx) => (
                        <li key={idx}>• {term}</li>
                      ))}
                    </ul>
                  </details>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button
                      variant="primary"
                      size="sm"
                      fullWidth
                      onClick={() => handlePrint(coupon)}
                    >
                      <Printer className="w-4 h-4 mr-1" />
                      Print
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.location.href = '/schedule'}
                    >
                      <Scissors className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Coupons */}
      {otherCoupons.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                More Ways to Save
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherCoupons.map((coupon) => (
                <Card key={coupon.id} variant="outlined" hoverable>
                  <div className="relative">
                    <div className="absolute top-0 right-0 bg-accent-500 text-white px-3 py-1 rounded-bl-lg font-bold text-sm">
                      {coupon.discount}
                    </div>

                    <img
                      src={coupon.image}
                      alt={coupon.title}
                      className="w-full h-40 object-cover rounded-t-lg mb-4"
                      loading="lazy"
                    />

                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {coupon.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {coupon.description}
                    </p>

                    <div className="bg-gray-100 rounded-lg p-2 mb-3">
                      <p className="text-xs text-gray-600">Code:</p>
                      <p className="font-mono font-bold text-primary-600 text-sm">
                        {coupon.code}
                      </p>
                    </div>

                    <p className="text-xs text-gray-500 mb-3">
                      Valid until: {new Date(coupon.validUntil).toLocaleDateString()}
                    </p>

                    <Button
                      variant="primary"
                      size="sm"
                      fullWidth
                      onClick={() => handlePrint(coupon)}
                    >
                      <Printer className="w-4 h-4 mr-1" />
                      Print Coupon
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Loyalty Program */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card variant="elevated">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 mb-4">
                  <Scissors className="w-8 h-8 text-accent-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {loyaltyProgram.name}
                </h2>
                <p className="text-xl text-gray-600">
                  {loyaltyProgram.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {loyaltyProgram.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start">
                    <Scissors className="w-5 h-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-accent-50 rounded-lg p-6 text-center">
                <p className="font-semibold text-gray-900 mb-3">
                  How to Join:
                </p>
                <p className="text-gray-700 mb-4">
                  {loyaltyProgram.howToJoin}
                </p>
                <Button variant="accent" size="lg">
                  Sign Up for Newsletter
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Redeem */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How to Redeem Your Coupon
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-xl mb-3">
                  1
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Print or Save</h3>
                <p className="text-sm text-gray-600">
                  Print your coupon or save the code on your phone
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-xl mb-3">
                  2
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Schedule Service</h3>
                <p className="text-sm text-gray-600">
                  Book your appointment online or call us
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-xl mb-3">
                  3
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Present Coupon</h3>
                <p className="text-sm text-gray-600">
                  Show your coupon when you arrive or mention the code
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Coupons
