import { Bienestar } from './components/Bienestar';
import { Certificaciones } from './components/Certificaciones';
import { Cifras } from './components/Cifras';
import ClientesCarrusel from './components/Clientes';

const Feature = () => {


  return (
    <div id='bienestar-organizacional' className='section'>
      <div className='container'>
        <h2 className='section-title'>NUESTRO SERVICIO</h2>
        <Bienestar />
        <Certificaciones />
        <Cifras />
        <ClientesCarrusel />
      </div>
    </div>
  );
};

export default Feature;
