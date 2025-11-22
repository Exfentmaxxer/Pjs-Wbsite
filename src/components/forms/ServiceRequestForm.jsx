import { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import FormField from '../common/FormField'
import Button from '../common/Button'
import Toast from '../ui/Toast'
import { featuredServices } from '../../data/services'

const ServiceRequestForm = ({ isSticky = false }) => {
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastType, setToastType] = useState('success')

  const validationRules = {
    name: { required: true, minLength: 2 },
    email: { required: true, email: true },
    phone: { required: true, phone: true },
    service: { required: true },
    preferredDate: { required: true },
    details: { required: false }
  }

  const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit, reset } = useForm(
    {
      name: '',
      email: '',
      phone: '',
      service: '',
      preferredDate: '',
      details: ''
    },
    validationRules
  )

  const onSubmit = async (formData) => {
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'service-request',
          ...formData
        }).toString()
      })

      if (response.ok) {
        setToastType('success')
        setToastMessage('Service request submitted! We\'ll contact you to confirm your appointment.')
        setShowToast(true)
        reset()
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      setToastType('error')
      setToastMessage('Unable to submit request. Please call us at (910) 692-3944.')
      setShowToast(true)
    }
  }

  const containerClass = isSticky
    ? 'bg-white p-6 rounded-lg shadow-lg sticky top-24'
    : 'bg-white p-6 rounded-lg shadow-md'

  return (
    <>
      <div className={containerClass}>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Request Service</h3>

        <form
          name="service-request"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <input type="hidden" name="form-name" value="service-request" />

          <FormField
            label="Name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name}
            touched={touched.name}
            placeholder="Your name"
            required
          />

          <FormField
            label="Email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
            touched={touched.email}
            placeholder="your@email.com"
            required
          />

          <FormField
            label="Phone"
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
            label="Service Needed"
            name="service"
            type="select"
            value={values.service}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.service}
            touched={touched.service}
            required
            options={featuredServices.map(service => ({
              value: service.id,
              label: service.name
            }))}
          />

          <FormField
            label="Preferred Date"
            name="preferredDate"
            type="date"
            value={values.preferredDate}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.preferredDate}
            touched={touched.preferredDate}
            required
            min={new Date().toISOString().split('T')[0]}
          />

          <FormField
            label="Additional Details"
            name="details"
            type="textarea"
            value={values.details}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.details}
            touched={touched.details}
            placeholder="Any specific concerns or requests?"
            rows={3}
          />

          <Button
            type="submit"
            variant="primary"
            size="md"
            fullWidth
            loading={isSubmitting}
          >
            Submit Request
          </Button>
        </form>
      </div>

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

export default ServiceRequestForm
