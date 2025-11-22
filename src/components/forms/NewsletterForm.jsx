import { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import FormField from '../common/FormField'
import Button from '../common/Button'
import Toast from '../ui/Toast'
import { Mail } from 'lucide-react'

const NewsletterForm = ({ inline = false }) => {
  const [showToast, setShowToast] = useState(false)

  const validationRules = {
    email: { required: true, email: true }
  }

  const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit, reset } = useForm(
    { email: '' },
    validationRules
  )

  const onSubmit = async (formData) => {
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'newsletter',
          ...formData
        }).toString()
      })

      if (response.ok) {
        setShowToast(true)
        reset()
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Newsletter signup error:', error)
    }
  }

  if (inline) {
    return (
      <>
        <form
          name="newsletter"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col sm:flex-row gap-3"
        >
          <input type="hidden" name="form-name" value="newsletter" />

          <div className="flex-1">
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your email"
              className={`w-full px-4 py-2.5 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 ${
                touched.email && errors.email
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
              }`}
            />
          </div>

          <Button
            type="submit"
            variant="accent"
            size="md"
            loading={isSubmitting}
          >
            <Mail className="w-4 h-4 mr-2" />
            Subscribe
          </Button>
        </form>

        {showToast && (
          <Toast
            message="Thanks for subscribing! Check your email for exclusive offers."
            type="success"
            onClose={() => setShowToast(false)}
            position="top-right"
          />
        )}
      </>
    )
  }

  return (
    <>
      <form
        name="newsletter"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <input type="hidden" name="form-name" value="newsletter" />

        <FormField
          label="Email Address"
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

        <Button
          type="submit"
          variant="accent"
          size="lg"
          fullWidth
          loading={isSubmitting}
        >
          <Mail className="w-5 h-5 mr-2" />
          Subscribe to Newsletter
        </Button>

        <p className="text-xs text-gray-500 text-center">
          Get exclusive coupons, maintenance tips, and special offers delivered to your inbox.
        </p>
      </form>

      {showToast && (
        <Toast
          message="Thanks for subscribing! Check your email for exclusive offers."
          type="success"
          onClose={() => setShowToast(false)}
          position="top-right"
        />
      )}
    </>
  )
}

export default NewsletterForm
