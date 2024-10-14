import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la redirección
import MapImage from '../../../resources/MapaColombia.svg'; // Usa el mapa que has subido

const CoverageSection: React.FC = () => {
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleNavigate = () => {
    navigate('/cobertura'); // Cambia la ruta a la página de Cobertura
  };

  return (
    <div id="coverage" className="coverage-section">
      <div className="container">
        <div className="row">
          {/* Imagen del mapa */}
          <div className="col-md-6 map-column">
            <img src={MapImage} alt="Cobertura Nacional" className="map-image" />
          </div>
          {/* Texto y descripción */}
          <div className="col-md-6 text-column">
            <h2>COBERTURA NACIONAL CON SEDE PRINCIPAL EN SOGAMOSO BOYACÁ</h2>
            <div className="title-underline"></div> {/* Línea dorada debajo del título */}
            <p style={{ textAlign: 'justify', fontSize: '1.6rem' }}>
              Contamos con todos los recursos físicos, técnicos, tecnológicos y logísticos para operar a
              nivel nacional, en todas las condiciones del servicio como la superintendencia de vigilancia y seguridad privada.
            </p>
            <button
              style={{ textAlign: 'justify', fontSize: '1.6rem' }}
              className="custom-button btn btn-primary"
              onClick={handleNavigate} // Redirige al hacer clic
            >
              Conoce más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverageSection;
