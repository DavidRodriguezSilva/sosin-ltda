import { useEffect } from 'react'

const Feature = () => {
  useEffect(() => {
    // Lógica para los contadores
    const counters = document.querySelectorAll('.count')
    const speed = 1400 // Ajusta la velocidad si lo necesitas

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-count')!
        const count = +counter.textContent!

        const increment = target / speed

        if (count < target) {
          counter.textContent = Math.ceil(count + increment).toString()
          setTimeout(updateCount, 1)
        } else {
          counter.textContent = target.toString()
        }
      }

      updateCount()
    })
  }, []) // Efecto que se ejecutará una sola vez al montar el componente

  return (
    <div>
      <h2 style={{ fontWeight: 800, paddingBottom: '2rem' }}>
        NUESTRO SERVICIO
      </h2>
      <Cualidades />
      Certificaciones
      Cifras
      Clientes (Carrusel)
      {/* Sección de "¿En qué nos caracterizamos?" */}
      <div id='features' className='text-center'>
        <div className='container'>
          <div className='col-md-10 col-md-offset-1 section-title'>
            <h2>¿En qué nos caracterizamos?</h2>
          </div>
          <div className='row'>
            <div className='col-xs-6 col-md-3'>
              <i className='fa fa-comments-o'></i>
              <h3>Seguridad Integral</h3>
              <p>
                Ofrecemos soluciones completas de seguridad adaptadas a las
                necesidades específicas de cada cliente, garantizando protección
                en todo momento.
              </p>
            </div>
            <div className='col-xs-6 col-md-3'>
              <i className='fa fa-bullhorn'></i>
              <h3>Cumplimiento Normativo</h3>
              <p>
                Nuestro servicio está respaldado por el cumplimiento estricto de
                las normativas legales vigentes, asegurando tranquilidad y
                confianza para nuestros clientes.
              </p>
            </div>
            <div className='col-xs-6 col-md-3'>
              <i className='fa fa-group'></i>
              <h3>Capacitación Continua</h3>
              <p>
                Contamos con personal altamente capacitado, preparado para
                enfrentar cualquier situación de riesgo, brindando un servicio
                de máxima calidad.
              </p>
            </div>
            <div className='col-xs-6 col-md-3'>
              <i className='fa fa-magic'></i>
              <h3>Tecnología Avanzada</h3>
              <p>
                Incorporamos las últimas innovaciones tecnológicas en seguridad,
                utilizando sistemas inteligentes para la prevención y el
                monitoreo de riesgos.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Sección de estadísticas con animación */}
      <div id='stats' className='text-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <i className='fa fa-heart'></i>
              <h3>
                <span className='count' data-count='253'>
                  0
                </span>
              </h3>
              <p>PROJECTS LIKE</p>
            </div>
            <div className='col-md-3'>
              <i className='fa fa-smile-o'></i>
              <h3>
                <span className='count' data-count='252'>
                  0
                </span>
              </h3>
              <p>HAPPY CLIENTS</p>
            </div>
            <div className='col-md-3'>
              <i className='fa fa-anchor'></i>
              <h3>
                <span className='count' data-count='1252'>
                  0
                </span>
              </h3>
              <p>PROJECTS COMPLETED</p>
            </div>
            <div className='col-md-3'>
              <i className='fa fa-user'></i>
              <h3>
                <span className='count' data-count='52'>
                  0
                </span>
              </h3>
              <p>EMPLOYEES</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Cualidades = () => {
  return <></>
}

export default Feature
