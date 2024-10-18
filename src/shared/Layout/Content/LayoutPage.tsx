import { FC, ReactNode } from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import ScrollToTopButton from "../../components/ScrollToTopButton"
import WhatsAppButton from "../../components/WhatsAppButton"

interface PropsContent {
  children?: ReactNode
}

export const LayoutPage: FC<PropsContent> = ({ children }) => {
  return (
    <div style={{ minHeight: '100vhvh' }}>
      <Header />
      {children}
      <ScrollToTopButton />
      <WhatsAppButton />
      <Footer />
    </div>
  )
}