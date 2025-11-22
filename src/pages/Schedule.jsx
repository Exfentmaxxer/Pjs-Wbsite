import { useEffect } from 'react'
import Hero from '../components/sections/Hero'
import Card from '../components/common/Card'
import AppointmentForm from '../components/forms/AppointmentForm'
import { Calendar, Clock, CheckCircle, Phone } from 'lucide-react'
import businessInfo from '../data/businessInfo'
import { updateMetaTags } from '../utils/seo'

const Schedule = () => {
  useEffect(() => {
    updateMetaTags({
      title: `Schedule Appointment - ${businessInfo.name}`,
      description: 'Schedule your auto service appointment online or call us. Fast, convenient appointment scheduling for all your auto care needs in Southern Pines, NC.',
      keywords: 'schedule appointment, book service, online scheduling, auto service appointment'
    })
  }, [])

  const benefits = [
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Choose a date and time that works for your schedule'
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Most services completed same day'
    },
    {
      icon: CheckCircle,
      title: 'Confirmation',
      description: 'Receive appointment confirmation via phone or email'
    },
    {
      icon: Phone,
      title: 'Easy Communication',
      description: 'We\'ll update you throughout the service process'
    }
  ]

  const preparationTips = [
    'Have your vehicle information ready (year, make, model)',
    'Note any specific concerns or symptoms',
    'Check your service history if available',
    'Bring any relevant coupons or service reminders',
    'Remove personal items from your vehicle'
  ]

  return (
    <>
      <Hero
        title="Schedule Your Appointment"
        subtitle="Convenient Online Booking"
        description="Choose your service, pick a time, and we'll take care of the rest"
        backgroundImage="https://placehold.co/1920x600/1E3A8A/FFFFFF?text=Schedule+Hero"
        height="medium"
      />

      {/* Quick Contact */}
      <section className="py-8 bg-accent-500 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <Phone className="w-8 h-8" />
            <div>
              <p className="text-lg font-semibold">Prefer to call?</p>
              <p className="text-sm">We're here to help Monday-Saturday</p>
            </div>
            <a
              href={`tel:${businessInfo.contact.mainPhoneRaw}`}
              className="text-2xl font-bold hover:underline"
            >
              {businessInfo.contact.mainPhone}
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Appointment Form */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Request an Appointment
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll contact you to confirm your appointment.
                For immediate scheduling, please call us at {businessInfo.contact.mainPhone}.
              </p>

              <Card variant="elevated">
                <AppointmentForm />
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Benefits */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Schedule With Us?
              </h3>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100">
                          <Icon className="w-6 h-6 text-primary-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-gray-900 mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Hours */}
              <Card variant="outlined" className="mb-8">
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Business Hours</h4>
                    <div className="text-sm text-gray-700 space-y-1">
                      <p>{businessInfo.hoursFormatted.weekday}</p>
                      <p>{businessInfo.hoursFormatted.saturday}</p>
                      <p className="text-gray-500">{businessInfo.hoursFormatted.sunday}</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Preparation Tips */}
              <Card variant="outlined">
                <h4 className="font-bold text-gray-900 mb-3">
                  Appointment Preparation
                </h4>
                <ul className="space-y-2">
                  {preparationTips.map((tip, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What to Expect
              </h2>
              <p className="text-xl text-gray-600">
                Your appointment process, step by step
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-600 text-white font-bold text-2xl mb-4">
                  1
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Submit Request</h3>
                <p className="text-sm text-gray-600">
                  Fill out the appointment form with your information and service needs
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-600 text-white font-bold text-2xl mb-4">
                  2
                </div>
                <h3 className="font-bold text-gray-900 mb-2">We Confirm</h3>
                <p className="text-sm text-gray-600">
                  Our team will call you to confirm your appointment and answer questions
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-600 text-white font-bold text-2xl mb-4">
                  3
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Drop Off</h3>
                <p className="text-sm text-gray-600">
                  Bring your vehicle at your scheduled time and enjoy our coffee lounge
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-600 text-white font-bold text-2xl mb-4">
                  4
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Pick Up</h3>
                <p className="text-sm text-gray-600">
                  We'll call when ready. Pick up your serviced vehicle with complimentary car wash
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Emergency Service?
          </h2>
          <p className="text-xl text-gray-100 mb-6 max-w-2xl mx-auto">
            If you're experiencing a vehicle emergency or breakdown, call us immediately.
            We'll do our best to accommodate urgent situations.
          </p>
          <a
            href={`tel:${businessInfo.contact.mainPhoneRaw}`}
            className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <Phone className="inline w-6 h-6 mr-2" />
            Call Now: {businessInfo.contact.mainPhone}
          </a>
        </div>
      </section>
    </>
  )
}

export default Schedule
