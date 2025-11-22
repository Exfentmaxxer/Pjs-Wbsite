import { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import FormField from '../common/FormField'
import Button from '../common/Button'
import Toast from '../ui/Toast'

const ContactForm = () => {
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastType, setToastType] = useState('success')

  const validationRules = {
    name: { required: true, minLength: 2 },
    email: { required: true, email: true },
    phone: { required: true, phone: true },
    subject: { required: true },
    message: { required: true, minLength: 10 }
  }

  const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit, reset } = useForm(
    {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    },
    validationRules
  )

  const onSubmit = async (formData) => {
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      })

      if (response.ok) {
        setToastType('success')
        setToastMessage('Thank you for contacting us! We\'ll respond within 24 hours.')
        setShowToast(true)
        reset()
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      setToastType('error')
      setToastMessage('Something went wrong. Please try again or call us directly.')
      setShowToast(true)
    }
  }

  return (
    <>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            label="Full Name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name}
            touched={touched.name}
            placeholder="John Doe"
            required
          />

          <FormField
            label="Email Address"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
            touched={touched.email}
            placeholder="john@example.com"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            label="Phone Number"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.phone}
            touched={touched.phone}
            placeholder="(910) 555-1234"
            required
          />

          <FormField
            label="Subject"
            name="subject"
            type="select"
            value={values.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.subject}
            touched={touched.subject}
            required
            options={[
              { value: 'general', label: 'General Inquiry' },
              { value: 'service', label: 'Service Question' },
              { value: 'appointment', label: 'Schedule Appointment' },
              { value: 'quote', label: 'Request Quote' },
              { value: 'feedback', label: 'Feedback' }
            ]}
          />
        </div>

        <FormField
          label="Message"
          name="message"
          type="textarea"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.message}
          touched={touched.message}
          placeholder="How can we help you today?"
          rows={6}
          required
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          loading={isSubmitting}
        >
          Send Message
        </Button>
      </form>

      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setShowToast(false)}
          position="top-right"
        />
      )}
    </>
  )
}

export default ContactForm
