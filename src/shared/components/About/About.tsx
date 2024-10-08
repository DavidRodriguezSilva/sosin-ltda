import AboutLogo from '../../../resources/about.jpg'

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
                <br />
                Nuestro sólido Sistema de Gestión de Seguridad y Salud en el
                Trabajo (SG-SST) cumple rigurosamente con las normativas legales
                vigentes, asegurando un entorno seguro y eficiente tanto para
                nuestros colaboradores como para quienes confían en nosotros.
                Con un equipo de profesionales altamente capacitados,
                garantizamos tranquilidad y protección en todo momento. Confía
                en nosotros para salvaguardar lo que más valoras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
