import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home/index.page"
import { Home1 } from "./pages/Home copy/index.page"
import Pagina404 from "./pages/404/index.page"
import About from "./pages/About/index.page"
import ServiceSection from "./pages/ServiceSection/index.page"; 
import WellnessSection from "./pages/Bienestar/index.page"
import CoveragePage from './pages/Coverage/index.page';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Home1" element={<Home1 />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<ServiceSection />} />
      <Route path="bienestar" element={<WellnessSection />} />
      <Route path="/cobertura" element={<CoveragePage />} />
      <Route path="*" element={<Pagina404 />} />
    </Routes>
  )
}

export default App
