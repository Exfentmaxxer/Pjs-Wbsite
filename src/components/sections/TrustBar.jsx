import { Award, Star, ShieldCheck, Users } from 'lucide-react'
import businessInfo from '../../data/businessInfo'

const TrustBar = () => {
  const stats = [
    {
      icon: Award,
      value: `BBB ${businessInfo.stats.bbbRating}`,
      label: 'Rated Business',
      color: 'text-primary-600'
    },
    {
      icon: Star,
      value: businessInfo.stats.rating.toFixed(1),
      label: `${businessInfo.stats.reviewCount}+ Reviews`,
      color: 'text-accent-500'
    },
    {
      icon: ShieldCheck,
      value: `${businessInfo.stats.yearsInBusiness}+`,
      label: 'Years in Business',
      color: 'text-green-600'
    },
    {
      icon: Users,
      value: '1000s',
      label: 'Happy Customers',
      color: 'text-blue-600'
    }
  ]

  return (
    <section className="py-12 bg-gradient-to-r from-primary-50 to-accent-50 border-y border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon

            return (
              <div key={index} className="text-center">
                <Icon className={`w-10 h-10 mx-auto mb-2 ${stat.color}`} />
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <p className="text-center text-sm text-gray-600 mb-4 font-semibold">
            AUTHORIZED DEALER FOR
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {businessInfo.certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <img
                  src={cert.logo}
                  alt={cert.name}
                  className="h-12 object-contain"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustBar
