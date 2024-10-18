import { Link } from 'react-router-dom';
import ImgBienestar from '../../../../resources/SobreNosotros.jpeg';

export const QuienesSomos = () => {
  return (
    <div className='quienes-somos'>
      <div className='content'>
        {/* Columna para el contenido textual */}
        <div className='text-content'>
          <h2>¿Quiénes Somos?</h2>
          <p>
            En <strong>SOSIN Private Security</strong>, nos especializamos en ofrecer soluciones integrales de seguridad privada.
            Nuestro equipo está conformado por profesionales altamente capacitados que trabajan con un fuerte compromiso hacia la
            protección y bienestar de nuestros clientes. Desde nuestra fundación, hemos priorizado la excelencia en el servicio,
            utilizando tecnologías de vanguardia y prácticas innovadoras para garantizar la tranquilidad y seguridad de las personas,
            empresas e instituciones que confían en nosotros. En SOSIN, creemos que la seguridad no es solo un servicio, sino una
            responsabilidad que asumimos con seriedad y dedicación.
          </p>
          <Link className="custom-button btn btn-primary" to={'/about'}>
            Saber más
          </Link>
        </div>

        {/* Columna para la imagen */}
        <div className='image-content'>
          <img src={ImgBienestar} alt='Quiénes Somos' />
        </div>
      </div>
    </div>
  );
};
