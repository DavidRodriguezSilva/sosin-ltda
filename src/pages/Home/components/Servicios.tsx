import { useNavigate } from 'react-router-dom';
import Gallery1 from "../../../resources/Guarda2.png";

export const Servicios = () => {
  const navigate = useNavigate();

  const navigateToServicesPage = () => {
    navigate('/services');
  };

  return (
    <div id="services">
      <div className="container text-center">
        <div>
          <h2 className='titulo-seccion'>NUESTROS SERVICIOS</h2>
        </div>
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="service-column">
              <div className="service-desc d-flex flex-column justify-content-center">
                <h3>Seguridad Física</h3>
                <p className='texto-seccion'>
                  Personal de seguridad capacitado para proteger instalaciones y personas, cumpliendo altos estándares de seguridad.
                </p>
              </div>
              <div className="service-desc d-flex flex-column justify-content-center">
                <h3>Monitoreo y Vigilancia 24/7</h3>
                <p className='texto-seccion'>
                  Sistema de monitoreo continuo que asegura detección temprana de riesgos y respuestas rápidas ante incidentes.
                </p>
              </div>
              <div className="service-desc d-flex flex-column justify-content-center">
                <h3>Análisis de Riesgos</h3>
                <p className='texto-seccion'>
                  Evaluaciones exhaustivas para identificar vulnerabilidades y establecer estrategias efectivas de mitigación.
                </p>
              </div>
            </div>
          </div>

          {/* Columna de imagen en el centro */}
          <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
            <div className="image-column">
              <img
                src={Gallery1}
                alt="Servicios"
                className="service-image"
              />
            </div>
          </div>

          {/* Columna de servicios a la derecha */}
          <div className="col-12 col-md-4">
            <div className="service-column">
              <div className="service-desc d-flex flex-column justify-content-center">
                <h3>Gestión de Emergencias</h3>
                <p className='texto-seccion'>
                  Planes de emergencia personalizados para reaccionar rápidamente en situaciones críticas y garantizar la seguridad.
                </p>
              </div>
              <div className="service-desc d-flex flex-column justify-content-center">
                <h3>Seguridad Electrónica</h3>
                <p className='texto-seccion'>
                  Sistemas de control de acceso y CCTV de última generación para maximizar la seguridad en cualquier entorno.
                </p>
              </div>
              <div className="service-desc d-flex flex-column justify-content-center">
                <h3>Capacitación en Seguridad</h3>
                <p className='texto-seccion'>
                  Programas de formación continua para personal y clientes, asegurando preparación ante situaciones de seguridad.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="button-container">
          <button
            className="custom-button btn btn-primary"
            onClick={navigateToServicesPage}
          >
            Ver todos los servicios
          </button>
        </div>
      </div>
    </div>
  );
};

