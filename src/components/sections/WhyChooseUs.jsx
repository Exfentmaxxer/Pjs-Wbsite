import * as LucideIcons from 'lucide-react'
import Card from '../common/Card'
import businessInfo from '../../data/businessInfo'

const WhyChooseUs = ({ title = 'Why Choose PJ\'s Auto Care?' }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference that sets us apart from other auto shops in Moore County
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessInfo.whyChooseUs.map((reason, index) => {
            const Icon = LucideIcons[reason.icon] || LucideIcons.Star

            return (
              <Card key={index} variant="outlined" hoverable>
                <div className="flex flex-col items-center text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 mb-4">
                    <Icon className="w-8 h-8 text-accent-600" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {reason.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
