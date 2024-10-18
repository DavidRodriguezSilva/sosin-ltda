import { Link } from 'react-router-dom'
import ImgBienestar from '../../../resources/SobreNosotros.jpeg';

export const SobreNosotros = () => {
  return (
    <div id='about-us' className='quienes-somos'>
      <div className='content'>
        <div className='text-content'>
          <h2 className='titulo-seccion'>¿Quiénes Somos?</h2>
          <p className='texto-seccion' style={{ textAlign: 'justify' }}>
            En <strong>SOSIN Private Security</strong>, nos especializamos en ofrecer soluciones integrales de seguridad privada.
            Nuestro equipo está conformado por profesionales altamente capacitados que trabajan con un fuerte compromiso hacia la
            protección y bienestar de nuestros clientes. Desde nuestra fundación, hemos priorizado la excelencia en el servicio,
            utilizando tecnologías de vanguardia y prácticas innovadoras para garantizar la tranquilidad y seguridad de las personas,
            empresas e instituciones que confían en nosotros.
            <br />
            En SOSIN, creemos que la seguridad no es solo un servicio, sino una
            responsabilidad que asumimos con seriedad y dedicación.
          </p>
          <div>
            <Link className="custom-button btn btn-primary" to={'/about-us'}>
              Saber más
            </Link>
          </div>
        </div>
        <div className='image-content'>
          <img src={ImgBienestar} alt='Quiénes Somos' />
        </div>
      </div>
    </div>
  )
}