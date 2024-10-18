import CoverageSection from '../Map/CoverageSection';
import { QuienesSomos } from './components/QuienesSomos';
import { Certificaciones } from './components/Certificaciones';
import { Cifras } from './components/Cifras';
import ClientesCarrusel from './components/Clientes';

const Feature = () => {
  return (
    <div id='work' className='section work'>
      <h2 className='section-title text-center margin-bottom: 2rem;'>SOMOS SOSIN</h2>
      {/* QuienesSomos fuera del contenedor para ocupar todo el ancho */}
      <QuienesSomos />
      <div className='container'>

        <Certificaciones />
        <CoverageSection />
        <Cifras />
        <ClientesCarrusel />
      </div>
    </div>
  );
};


export default Feature;
