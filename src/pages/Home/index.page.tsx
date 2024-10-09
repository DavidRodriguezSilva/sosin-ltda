import Header from '../../shared/components/header/Header'
import Presentation from './components/Presentation'
import Footer from '../../shared/components/Footer/Footer'
import Feature from '../../shared/components/Feature/Feature'
import About from '../../shared/components/About/About'
import ServiceSection from '../../shared/components/Service Section/ServiceSection'
import Gallery from '../../shared/components/Gallery/Gallery'
import Testimonials from '../../shared/components/Testimonials/Testimonials'
import TeamSection from '../../shared/components/Team Section/TeamSection'
import Contact from '../../shared/components/Contact/Contact'
import Quotation from '../../shared/components/Quotation/Quotation'

export const Home = () => {
  return (
    <>
      <Header />
      <Presentation />
      <About />
      <Feature />
      <Quotation />
      <ServiceSection />
      <Gallery />
      <Testimonials />
      <TeamSection />
      <Contact />
      <Footer />
    </>
  )
}
