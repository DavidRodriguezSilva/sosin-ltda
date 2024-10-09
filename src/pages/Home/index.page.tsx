import Header from '../../shared/components/header/Header'
import Presentation from './components/Presentation'
import Footer from '../../shared/components/Footer/Footer'
import Feature from '../../shared/components/OurServices/OurServices'
import About from '../../shared/components/About/About'
import ServiceSection from '../../shared/components/Service Section/ServiceSection'
import TeamSection from '../../shared/components/Team Section/TeamSection'
import Contact from '../../shared/components/Contact/Contact'
import Quotation from '../../shared/components/Quotation/Quotation'
import CoverageSection from '../../shared/components/Map/CoverageSection'

export const Home = () => {
  return (
    <>
      <Header />
      <Presentation />
      <About />
      <Feature />
      <ServiceSection />
      <TeamSection />
      <Quotation />
      <CoverageSection/>
      <Contact />
      <Footer />
    </>
  )
}
