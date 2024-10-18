import Header from '../../shared/components/Header/Header'
import Presentation from './components/Presentation'
import Footer from '../../shared/components/Footer/Footer'
import Feature from '../../shared/components/OurServices/OurServices'
import About from '../../shared/components/About/About'
import ServiceSection from '../../shared/components/ServiceSection/ServiceSection'
import TeamSection from '../../shared/components/TeamSection/TeamSection'
import Contact from '../../shared/components/Contact/Contact'
import Quotation from '../../shared/components/Quotation/Quotation'
import ScrollToTopButton from './components/ScrollToTopButton'
import WhatsAppButton from './components/WhatsAppButton'

export const Home1 = () => {
  return (
    <>
      <Header />
      <Presentation />
      <About />
      <Feature />
      <ServiceSection />
      <TeamSection />
      <Quotation />
      <Contact />
      <ScrollToTopButton />
      <WhatsAppButton />
      <Footer />
    </>
  )
}

export default Home1