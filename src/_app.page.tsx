import { Route, Routes } from "react-router-dom"
import Pagina404 from "./pages/404/index.page"
import ServiceSection from "./pages/ServiceSection/index.page";
import CoveragePage from './pages/Coverage/index.page';
import { Home } from "./pages/Home/index.page";
import About from "./pages/QuienesSomos/index.page";
import CoverageSection from "./pages/Coverage/index.page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about-us" element={<About />} />
      <Route path="our-work" element={<CoverageSection />} />
      <Route path="cobertura" element={<CoverageSection />} />
      <Route path="services" element={<ServiceSection />} />
      <Route path="contact" element={<CoveragePage />} />
      <Route path="*" element={<Pagina404 />} />
    </Routes>
  )
}

export default App
