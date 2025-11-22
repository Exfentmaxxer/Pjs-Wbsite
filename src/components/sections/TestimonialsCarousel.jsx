import { Star, Quote } from 'lucide-react'
import Carousel from '../ui/Carousel'
import Card from '../common/Card'

const TestimonialsCarousel = ({ testimonials, title }) => {
  const renderTestimonial = (testimonial) => (
    <div className="px-4 py-8">
      <Card variant="elevated" className="max-w-4xl mx-auto">
        <div className="text-center">
          <Quote className="w-12 h-12 text-accent-500 mx-auto mb-4 opacity-50" />

          {/* Rating Stars */}
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent-500 text-accent-500" />
            ))}
          </div>

          {/* Review Text */}
          <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
            "{testimonial.text}"
          </p>

          {/* Author */}
          <div className="border-t pt-4">
            <p className="font-bold text-gray-900">{testimonial.name}</p>
            <p className="text-sm text-gray-600">{testimonial.service}</p>
            {testimonial.verified && (
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Verified {testimonial.source} Review
                </span>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  )

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-accent-500 text-accent-500" />
                ))}
              </div>
              <span className="text-xl font-semibold text-gray-700">
                4.8 out of 5 stars
              </span>
              <span className="text-gray-500">(468+ reviews)</span>
            </div>
          </div>
        )}

        <Carousel
          items={testimonials}
          renderItem={renderTestimonial}
          autoPlay={true}
          interval={7000}
          showControls={true}
          showIndicators={true}
        />
      </div>
    </section>
  )
}

export default TestimonialsCarousel
