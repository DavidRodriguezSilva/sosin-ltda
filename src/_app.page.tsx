import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home/index.page"
import Pagina404 from "./pages/404/index.page"
import { About } from "./pages/About/index.page"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<Pagina404 />} />
    </Routes>
  )
}

export default App
