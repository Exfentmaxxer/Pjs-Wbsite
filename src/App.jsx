import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './router'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import StickyScheduleButton from './components/common/StickyScheduleButton'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
        <StickyScheduleButton />
      </div>
    </Router>
  )
}

export default App
