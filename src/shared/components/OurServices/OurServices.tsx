import CoverageSection from '../Map/CoverageSection';
import { Bienestar } from './components/Bienestar';
import { Certificaciones } from './components/Certificaciones';
import { Cifras } from './components/Cifras';
import ClientesCarrusel from './components/Clientes';

const Feature = () => {


  return (
    <div id='work' className='section work'>
      <div className='container'>
        <h2 className='section-title'>NUESTRO SERVICIO</h2>
        <Bienestar />
        <Certificaciones />
        <CoverageSection />
        <Cifras />
        <ClientesCarrusel />
      </div>
    </div>
  );
};

export default Feature;
