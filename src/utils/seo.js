// SEO utilities for meta tags and structured data

export const updateMetaTags = ({ title, description, keywords, ogImage, canonical }) => {
  if (title) {
    document.title = title
    updateMetaTag('og:title', title)
    updateMetaTag('twitter:title', title)
  }

  if (description) {
    updateMetaTag('description', description)
    updateMetaTag('og:description', description)
    updateMetaTag('twitter:description', description)
  }

  if (keywords) {
    updateMetaTag('keywords', keywords)
  }

  if (ogImage) {
    updateMetaTag('og:image', ogImage)
    updateMetaTag('twitter:image', ogImage)
  }

  if (canonical) {
    updateCanonicalLink(canonical)
  }

  const currentUrl = window.location.href
  updateMetaTag('og:url', currentUrl)
  updateMetaTag('twitter:url', currentUrl)
}

const updateMetaTag = (name, content) => {
  let element = document.querySelector(`meta[name="${name}"]`) ||
                document.querySelector(`meta[property="${name}"]`)

  if (!element) {
    element = document.createElement('meta')
    if (name.startsWith('og:') || name.startsWith('twitter:')) {
      element.setAttribute('property', name)
    } else {
      element.setAttribute('name', name)
    }
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

const updateCanonicalLink = url => {
  let link = document.querySelector('link[rel="canonical"]')

  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }

  link.setAttribute('href', url)
}

export const generateLocalBusinessSchema = businessInfo => {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    name: businessInfo.name,
    image: 'https://www.pjsautocare.net/og-image.jpg',
    '@id': 'https://www.pjsautocare.net',
    url: 'https://www.pjsautocare.net',
    telephone: businessInfo.contact.mainPhone,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessInfo.address.street,
      addressLocality: businessInfo.address.city,
      addressRegion: businessInfo.address.state,
      postalCode: businessInfo.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.1738,
      longitude: -79.3928,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:30',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '07:30',
        closes: '16:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: businessInfo.stats.rating.toString(),
      reviewCount: businessInfo.stats.reviewCount.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      businessInfo.social.facebook,
      businessInfo.social.google,
      businessInfo.social.yelp,
      businessInfo.social.carfax,
    ],
  }
}

export const generateServiceSchema = service => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'AutomotiveBusiness',
      name: "PJ's Auto Care & Gourmet Coffee",
    },
    areaServed: {
      '@type': 'City',
      name: 'Southern Pines',
      addressRegion: 'NC',
    },
    description: service.description,
  }
}

export const generateBreadcrumbSchema = breadcrumbs => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  }
}

export const injectStructuredData = schemaObject => {
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(schemaObject)

  // Remove existing schema scripts with same @type
  const existing = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
  existing.forEach(el => {
    try {
      const data = JSON.parse(el.textContent)
      if (data['@type'] === schemaObject['@type']) {
        el.remove()
      }
    } catch (e) {
      // Invalid JSON, remove it
      el.remove()
    }
  })

  document.head.appendChild(script)
}

export default {
  updateMetaTags,
  generateLocalBusinessSchema,
  generateServiceSchema,
  generateBreadcrumbSchema,
  injectStructuredData,
}
