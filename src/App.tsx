import BlogSection from './components/BlogSection'
import ClientSection from './components/ClientSection'
import ContactSection from './components/ContactSection'
import FnQSection from './components/FnQSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import ReviewSection from './components/ReviewSection'
import StatsSection from './components/StatsSection'
import WorkSection from './components/WorkSection'

function App() {

  return (
    <div className=''>
      <HeroSection />
      <WorkSection />
      <StatsSection />
      <ClientSection />
      <ReviewSection />
      <FnQSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App