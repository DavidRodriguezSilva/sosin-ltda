import { Home } from "./pages/Home/index.page"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
