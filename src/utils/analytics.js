// Google Analytics 4 utilities

// Initialize GA4 (placeholder - replace with actual GA4 tracking ID)
export const GA_TRACKING_ID = 'G-XXXXXXXXXX' // Replace with actual ID

export const pageview = url => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Predefined event tracking functions
export const trackFormSubmission = formName => {
  event({
    action: 'form_submission',
    category: 'Forms',
    label: formName,
  })
}

export const trackPhoneClick = phoneNumber => {
  event({
    action: 'phone_click',
    category: 'Contact',
    label: phoneNumber,
  })
}

export const trackEmailClick = email => {
  event({
    action: 'email_click',
    category: 'Contact',
    label: email,
  })
}

export const trackCTAClick = (ctaName, location) => {
  event({
    action: 'cta_click',
    category: 'CTA',
    label: `${ctaName} - ${location}`,
  })
}

export const trackServiceView = serviceName => {
  event({
    action: 'service_view',
    category: 'Services',
    label: serviceName,
  })
}

export const trackCouponView = couponName => {
  event({
    action: 'coupon_view',
    category: 'Coupons',
    label: couponName,
  })
}

export const trackCouponDownload = couponName => {
  event({
    action: 'coupon_download',
    category: 'Coupons',
    label: couponName,
  })
}

export const trackDirectionsClick = () => {
  event({
    action: 'directions_click',
    category: 'Contact',
    label: 'Google Maps',
  })
}

export const trackSocialClick = platform => {
  event({
    action: 'social_click',
    category: 'Social',
    label: platform,
  })
}

export const trackReviewClick = platform => {
  event({
    action: 'review_click',
    category: 'Reviews',
    label: platform,
  })
}

export default {
  pageview,
  event,
  trackFormSubmission,
  trackPhoneClick,
  trackEmailClick,
  trackCTAClick,
  trackServiceView,
  trackCouponView,
  trackCouponDownload,
  trackDirectionsClick,
  trackSocialClick,
  trackReviewClick,
}
