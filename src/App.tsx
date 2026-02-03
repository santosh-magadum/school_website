import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SchoolSections from './components/SchoolSections'
import NewsEvents from './components/NewsEvents'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <SchoolSections />
      <NewsEvents />
      <Gallery />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
