import { Route, Routes } from "react-router-dom"
import Pagina404 from "./pages/404/index.page"
import ServiceSection from "./pages/Service/index.page";
import CoveragePage from './pages/OurWork/index.page';
import { Home } from "./pages/Home/index.page";
import About from "./pages/About/index.page";
import Contact from "./pages/Contact/index.page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about-us" element={<About />} />
      <Route path="our-work" element={<CoveragePage />} />
      <Route path="services" element={<ServiceSection />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<Pagina404 />} />
    </Routes>
  )
}

export default App
