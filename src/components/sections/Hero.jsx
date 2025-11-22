import { Link } from 'react-router-dom'
import Button from '../common/Button'
import { ArrowRight } from 'lucide-react'

const Hero = ({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  overlay = true,
  height = 'large'
}) => {
  const heights = {
    small: 'h-64 md:h-80',
    medium: 'h-80 md:h-96',
    large: 'h-96 md:h-[600px]'
  }

  return (
    <section className={`relative ${heights[height]} flex items-center justify-center overflow-hidden`}>
      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {overlay && <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/80" />}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {subtitle && (
          <p className="text-accent-400 font-semibold text-lg mb-4 animate-fadeInUp">
            {subtitle}
          </p>
        )}

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeInUp animation-delay-100">
          {title}
        </h1>

        {description && (
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            {description}
          </p>
        )}

        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-300">
            {primaryCTA && (
              <Link to={primaryCTA.to}>
                <Button variant="accent" size="lg">
                  {primaryCTA.text}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            )}

            {secondaryCTA && (
              <Link to={secondaryCTA.to}>
                <Button variant="outline" size="lg" className="bg-white bg-opacity-10 text-white border-white hover:bg-white hover:text-primary-900">
                  {secondaryCTA.text}
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero
