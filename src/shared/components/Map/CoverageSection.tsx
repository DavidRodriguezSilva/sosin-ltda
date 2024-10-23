import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la redirección
import MapImage from '../../../resources/MapaColombia.svg'; // Usa el mapa que has subido

const CoverageSection: React.FC = () => {
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleNavigate = () => {
    navigate('/our-work'); // Cambia la ruta a la página de Cobertura
  };

  return (
    <div id="coverage" className="coverage-section">
      <div className="container">
        <div className="row">
          {/* Imagen del mapa */}
          <div className="col-md-6">
            <img src={MapImage} alt="Cobertura Nacional" className="map-image" />
          </div>
          {/* Texto y descripción */}
          <div className="col-md-6 text-column map-image">
            <h3 className='subtitulo-seccion'>Cobertura nacional con sede principal en Sogamoso, Boyacá</h3>
            <p className='texto-seccion'>
              Contamos con todos los recursos físicos, técnicos, tecnológicos y logísticos para operar a
              nivel nacional, en todas las condiciones del servicio como la superintendencia de vigilancia y seguridad privada.
            </p>
            <button
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
