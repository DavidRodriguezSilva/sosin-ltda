import { Link } from 'react-router-dom'
import AboutLogo from '../../../resources/SobreNosotros.jpg'

const About = () => {
  return (
    <div id='about' style={{ padding: '10rem' }}>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6' style={{ height: '400px' }}>
            <img src={AboutLogo} className='img-responsive' alt='' />
          </div>
          <div className='col-xs-12 col-md-6 h-100'>
            <div className='about-text'>
              <h2 style={{ fontWeight: 800, paddingBottom: '2rem' }}>
                SOBRE NOSOTROS
              </h2>
              <p style={{ textAlign: 'justify', fontSize: '1.6rem' }}>
                En SOSIN Private Security, somos líderes en soluciones de
                seguridad privada, comprometidos con el bienestar de nuestros
                clientes. Ofrecemos un enfoque integral que combina protección
                presencial con tecnología electrónica avanzada, adaptándonos a
                las necesidades específicas de cada cliente.
              </p>
              <Link style={{ textAlign: 'justify', fontSize: '1.6rem' }} className="custom-button btn btn-primary" to={'about'} >Leer más</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
