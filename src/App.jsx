import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './router'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
