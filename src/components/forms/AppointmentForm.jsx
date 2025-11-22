import { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import FormField from '../common/FormField'
import Button from '../common/Button'
import Toast from '../ui/Toast'
import { serviceCategories } from '../../data/services'

const AppointmentForm = () => {
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastType, setToastType] = useState('success')

  const validationRules = {
    name: { required: true, minLength: 2 },
    email: { required: true, email: true },
    phone: { required: true, phone: true },
    vehicle: { required: true },
    category: { required: true },
    service: { required: true },
    preferredDate: { required: true },
    preferredTime: { required: true },
    comments: { required: false }
  }

  const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit, reset } = useForm(
    {
      name: '',
      email: '',
      phone: '',
      vehicle: '',
      category: '',
      service: '',
      preferredDate: '',
      preferredTime: '',
      comments: ''
    },
    validationRules
  )

  const onSubmit = async (formData) => {
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'appointment',
          ...formData
        }).toString()
      })

      if (response.ok) {
        setToastType('success')
        setToastMessage('Appointment request received! We\'ll call you to confirm shortly.')
        setShowToast(true)
        reset()
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      setToastType('error')
      setToastMessage('Unable to schedule appointment. Please call (910) 692-3944.')
      setShowToast(true)
    }
  }

  const selectedCategory = serviceCategories.find(cat => cat.id === values.category)
  const availableServices = selectedCategory ? selectedCategory.services : []

  const timeSlots = [
    '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM',
    '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM'
  ]

  return (
    <>
      <form
        name="appointment"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <input type="hidden" name="form-name" value="appointment" />

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
            label="Vehicle (Year, Make, Model)"
            name="vehicle"
            type="text"
            value={values.vehicle}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.vehicle}
            touched={touched.vehicle}
            placeholder="2020 Toyota Camry"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            label="Service Category"
            name="category"
            type="select"
            value={values.category}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.category}
            touched={touched.category}
            required
            options={serviceCategories.map(cat => ({
              value: cat.id,
              label: cat.name
            }))}
          />

          <FormField
            label="Specific Service"
            name="service"
            type="select"
            value={values.service}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.service}
            touched={touched.service}
            required
            disabled={!values.category}
            options={availableServices.map(service => ({
              value: service.id,
              label: service.name
            }))}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
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
            label="Preferred Time"
            name="preferredTime"
            type="select"
            value={values.preferredTime}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.preferredTime}
            touched={touched.preferredTime}
            required
            options={timeSlots.map(time => ({
              value: time,
              label: time
            }))}
          />
        </div>

        <FormField
          label="Additional Comments"
          name="comments"
          type="textarea"
          value={values.comments}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.comments}
          touched={touched.comments}
          placeholder="Any specific concerns or requests?"
          rows={4}
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          loading={isSubmitting}
        >
          Schedule Appointment
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

export default AppointmentForm
