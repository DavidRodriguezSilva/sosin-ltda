import { Presentacion } from './components/Presentacion'
import { LayoutPage } from '../../shared/Layout/Content/LayoutPage'
import { NuestroEquipo } from './components/NuestroEquipo'
import { Servicios } from './components/Servicios'
import { Contacto } from './components/Contacto'
import { Cotizacion } from './components/Cotizacion'
import { SobreNosotros } from './components/SobreNosotros'
import Feature from '../../shared/components/OurServices/OurServices'

export const Home = () => {
  return (
    <LayoutPage>
      <Presentacion />
      <SobreNosotros />
      <Feature />
      <Servicios />
      <NuestroEquipo />
      <Cotizacion />
      <Contacto />
    </LayoutPage>
  )
}