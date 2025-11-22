import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Loading from './components/common/Loading'

// Lazy load all pages
const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const Tires = lazy(() => import('./pages/Tires'))
const CoffeeAmenities = lazy(() => import('./pages/CoffeeAmenities'))
const About = lazy(() => import('./pages/About'))
const Reviews = lazy(() => import('./pages/Reviews'))
const Coupons = lazy(() => import('./pages/Coupons'))
const Contact = lazy(() => import('./pages/Contact'))
const Schedule = lazy(() => import('./pages/Schedule'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })
  }, [pathname])

  return null
}

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<Loading fullScreen size="lg" text="Loading page..." />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tires" element={<Tires />} />
          <Route path="/coffee-amenities" element={<CoffeeAmenities />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/coupons" element={<Coupons />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default AppRoutes
