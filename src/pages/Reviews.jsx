import { useEffect, useState } from 'react'
import Hero from '../components/sections/Hero'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { Star, Filter } from 'lucide-react'
import { testimonials, reviewStats } from '../data/testimonials'
import { updateMetaTags } from '../utils/seo'
import businessInfo from '../data/businessInfo'

const Reviews = () => {
  const [filter, setFilter] = useState('all')
  const [visibleCount, setVisibleCount] = useState(9)

  useEffect(() => {
    updateMetaTags({
      title: `Customer Reviews - 4.8/5 Stars (468+ Reviews) - ${businessInfo.name}`,
      description: 'Read verified customer reviews from our 468+ satisfied customers. BBB A+ rated with 4.8/5 stars. See why Moore County trusts PJ\'s Auto Care.',
      keywords: 'reviews, customer testimonials, ratings, bbb rated, google reviews, southern pines auto repair'
    })
  }, [])

  const filteredReviews = filter === 'all'
    ? testimonials
    : testimonials.filter(r => r.source.toLowerCase() === filter.toLowerCase())

  const visibleReviews = filteredReviews.slice(0, visibleCount)

  const loadMore = () => {
    setVisibleCount(prev => prev + 6)
  }

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'fill-accent-500 text-accent-500' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <>
      <Hero
        title="Customer Reviews"
        subtitle="4.8 Out of 5 Stars"
        description="468+ verified reviews from satisfied customers"
        backgroundImage="https://placehold.co/1920x600/1E3A8A/FFFFFF?text=Reviews+Hero"
        height="medium"
      />

      {/* Rating Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card variant="elevated">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Overall Rating */}
                <div className="text-center">
                  <div className="text-6xl font-bold text-gray-900 mb-2">
                    {reviewStats.averageRating}
                  </div>
                  <div className="flex justify-center mb-2">
                    {renderStars(5)}
                  </div>
                  <p className="text-gray-600">
                    Based on {reviewStats.totalReviews} reviews
                  </p>
                </div>

                {/* Rating Breakdown */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Rating Distribution</h3>
                  {[5, 4, 3, 2, 1].map(rating => {
                    const count = reviewStats.ratingBreakdown[rating]
                    const percentage = (count / reviewStats.totalReviews) * 100

                    return (
                      <div key={rating} className="flex items-center mb-2">
                        <span className="text-sm text-gray-600 w-8">{rating} ★</span>
                        <div className="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-accent-500 h-2 rounded-full"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 w-12 text-right">
                          {count}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Review Sources */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4 text-center">
                  Review Sources
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {Object.entries(reviewStats.sources).map(([source, data]) => (
                    <div key={source} className="text-center">
                      <p className="font-semibold text-gray-900 capitalize">
                        {source}
                      </p>
                      <p className="text-sm text-gray-600">
                        {data.rating} ★ ({data.count})
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Filter */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Customer Reviews
            </h2>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <select
                value={filter}
                onChange={(e) => {
                  setFilter(e.target.value)
                  setVisibleCount(9)
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">All Sources</option>
                <option value="google">Google</option>
                <option value="carfax">CARFAX</option>
                <option value="yelp">Yelp</option>
                <option value="bbb">BBB</option>
                <option value="facebook">Facebook</option>
              </select>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleReviews.map((review) => (
              <Card key={review.id} variant="elevated">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex">{renderStars(review.rating)}</div>
                  {review.verified && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                      Verified
                    </span>
                  )}
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{review.text}"
                </p>

                <div className="border-t pt-3 mt-auto">
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.service}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-500">
                      {new Date(review.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    <span className="text-xs text-primary-600 font-medium">
                      {review.source}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          {visibleCount < filteredReviews.length && (
            <div className="text-center mt-8">
              <Button variant="primary" size="lg" onClick={loadMore}>
                Load More Reviews
              </Button>
            </div>
          )}

          {visibleReviews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No reviews found for this filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Share Your Experience
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            We'd love to hear from you! Share your experience with PJ's Auto Care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={businessInfo.social.google}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="accent" size="lg">
                Leave Google Review
              </Button>
            </a>
            <a
              href={businessInfo.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary-900">
                Leave Facebook Review
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Reviews
