import Iso14001 from '../../../../resources/iso1.png';
import Iso9001 from '../../../../resources/iso2.png';
import Iso28000 from '../../../../resources/iso3.png';
import Iso18788 from '../../../../resources/iso4.png';

export const Certificaciones = () => {
  return (
    <div className='certificaciones section-title' id='certificaciones'>
      <h3 className='subtitulo-seccion'>Certificaciones que nos respaldan</h3>
      <div className='certificaciones-grid'>
        <div className='certificacion' data-bs-toggle='tooltip' title='Certificación ISO 14001: Sistema de Gestión Ambiental'>
          <img src={Iso14001} alt='ISO 14001' />
          <p>SP-CERT-000000</p>
        </div>
        <div className='certificacion' data-bs-toggle='tooltip' title='Certificación ISO 9001: Sistema de Gestión de Calidad'>
          <img src={Iso9001} alt='ISO 9001' />
          <p>SP-CERT-000000</p>
        </div>
        <div className='certificacion' data-bs-toggle='tooltip' title='Certificación ISO 28000: Gestión de Seguridad para la Cadena de Suministro'>
          <img src={Iso28000} alt='ISO 28000' />
          <p>SP-CERT-000000</p>
        </div>
        <div className='certificacion' data-bs-toggle='tooltip' title='Certificación ISO 18788: Gestión para Operaciones de Seguridad Privada'>
          <img src={Iso18788} alt='ISO 18788' />
          <p>SP-CERT-000000</p>
        </div>
      </div>
    </div>
  )
}