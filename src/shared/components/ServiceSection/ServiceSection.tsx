import React, { useState, useRef, useEffect } from 'react';
import Gallery1 from "../../../resources/Guarda2.png";

const ServiceSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const toggleSection = () => {
    setIsExpanded(prev => !prev);
  };

  useEffect(() => {
    if (contentRef.current) {
      // Ajusta el max-height para la animación de apertura/cierre
      contentRef.current.style.maxHeight = isExpanded
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [isExpanded]);

  return (
    <div id="services" className="text-center" style={{ padding: "10rem" }}>
      <div className="container">
        <div className="section-title">
          <h2>NUESTROS SERVICIOS</h2>
        </div>
        <div className="row">
          {/* Columna de servicios a la izquierda */}
          <div className="col-12 col-md-4">
            <div className="service-column">
              <div className="service-desc">
                <i className="fa fa-wordpress"></i>
                <h3>Seguridad Física</h3>
                <p>
                  Proveemos personal de seguridad altamente capacitado para proteger instalaciones y personas, cumpliendo con estrictos estándares de seguridad y protección.
                </p>
              </div>
              <div className="service-desc">
                <i className="fa fa-cart-arrow-down"></i>
                <h3>Monitoreo y Vigilancia 24/7</h3>
                <p>
                  Nuestro sistema avanzado de monitoreo ofrece vigilancia continua, asegurando la detección temprana de riesgos y respuestas inmediatas ante cualquier incidente.
                </p>
              </div>
              <div className="service-desc">
                <i className="fa fa-cloud-download"></i>
                <h3>Análisis de Riesgos</h3>
                <p>
                  Realizamos evaluaciones exhaustivas de riesgos para identificar vulnerabilidades y establecer estrategias efectivas que minimicen cualquier amenaza.
                </p>
              </div>
            </div>
          </div>

          {/* Columna de imagen en el centro */}
          <div className="col-12 col-md-4">
            <div className="image-column">
              <img
                src={Gallery1}
                alt="Servicios"
                className="service-image img-fluid"
                style={{
                  width: '100%'
                }}
              />
            </div>
          </div>

          {/* Columna de servicios a la derecha */}
          <div className="col-12 col-md-4">
            <div className="service-column">
              <div className="service-desc">
                <i className="fa fa-language"></i>
                <h3>Gestión de Emergencias</h3>
                <p>
                  Implementamos planes de emergencia personalizados, diseñados para reaccionar rápidamente ante situaciones críticas, garantizando la seguridad de nuestros clientes.
                </p>
              </div>
              <div className="service-desc">
                <i className="fa fa-plane"></i>
                <h3>Seguridad Electrónica</h3>
                <p>
                  Contamos con sistemas de control de acceso, CCTV y alarmas de última generación para maximizar la seguridad en cualquier entorno.
                </p>
              </div>
              <div className="service-desc">
                <i className="fa fa-pie-chart"></i>
                <h3>Capacitación en Seguridad</h3>
                <p>
                  Ofrecemos programas de formación continua para nuestro personal y clientes, asegurando que todos estén preparados para manejar cualquier situación de seguridad.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contenido adicional */}
        <div
          ref={contentRef}
          className="row additional-services"
          style={{
            maxHeight: "0px",
            overflow: 'hidden',
            transition: "max-height 0.5s ease-in-out, opacity 0.5s ease-in-out",
            opacity: isExpanded ? 1 : 0,
          }}
        >
          <div className="col-12 col-md-6">
            <div className="service-column">
              <div className="service-desc">
                <i className="fa fa-shield"></i>
                <h3>Servicio Adicional 1</h3>
                <p>Descripción del servicio adicional 1.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="service-column">
              <div className="service-desc">
                <i className="fa fa-rocket"></i>
                <h3>Servicio Adicional 2</h3>
                <p>Descripción del servicio adicional 2.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="service-column">
              <div className="service-desc">
                <i className="fa fa-shield"></i>
                <h3>Servicio Adicional 3</h3>
                <p>Descripción del servicio adicional 3.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="service-column">
              <div className="service-desc">
                <i className="fa fa-rocket"></i>
                <h3>Servicio Adicional 4</h3>
                <p>Descripción del servicio adicional 4.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="service-column">
              <div className="service-desc">
                <i className="fa fa-shield"></i>
                <h3>Servicio Adicional 5</h3>
                <p>Descripción del servicio adicional 5.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="service-column">
              <div className="service-desc">
                <i className="fa fa-rocket"></i>
                <h3>Servicio Adicional 6</h3>
                <p>Descripción del servicio adicional 6.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="button-container">
          <button
            style={{ textAlign: 'justify', fontSize: '1.6rem' }}
            className="service-button"
            onClick={toggleSection}
          >
            {isExpanded ? 'Ver menos' : 'Ver más'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
