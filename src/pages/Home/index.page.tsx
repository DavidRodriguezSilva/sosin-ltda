import Header from "../../shared/components/header/Header"
import Presentation from "./components/Presentation"
import Footer from "../../shared/components/Footer/Footer"
import Feature from "../../shared/components/Feature/Feature"
import About from "../../shared/components/About/About"
import ServiceSection from "../../shared/components/Service Section/ServiceSection"
import Gallery from "../../shared/components/Gallery/Gallery"

export const Home = () => {
  return (
    <>
      <Header />
      <Presentation />
      <Feature/>
      <About/>
      <ServiceSection/>
      <Gallery/>
      <Footer/>
    </>
  )
}
