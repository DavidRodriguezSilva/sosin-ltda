import CoverageSection from '../Map/CoverageSection';
import { Certificaciones } from './components/Certificaciones';
import { Cifras } from './components/Cifras';
import ClientesCarrusel from './components/Clientes';

const Feature = () => {
  return (
    <div id='our-work' className='section work'>
      <div className='container'>
      <h2 className='section-title'>NUESTRO TRABAJO</h2>
        <CoverageSection />
        <Certificaciones />
        <Cifras />
        <ClientesCarrusel />
      </div>
    </div>
  );
};


export default Feature;

