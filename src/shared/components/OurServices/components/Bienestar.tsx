import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la redirección
import ImgBienestar from '../../../../resources/GraficaCualidades.png';

export const Bienestar = () => {
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleNavigate = () => {
    navigate('/bienestar'); // Cambia la ruta a la página de Bienestar Organizacional
  };

  return (
    <div className='bienestar-organizacional mt-2 mb-2'>
      <div className='container'>
        <div className='row align-items-center'>
          {/* Columna para el contenido textual */}
          <div className='col-12 col-md-6 left section-title'>
            <h2>Bienestar organizacional</h2>
            <p style={{ textAlign: 'justify' }}>
              En SOSIN Private Security, entendemos que el bienestar de nuestros
              empleados es clave para el éxito de nuestra organización. Por eso,
              fomentamos un entorno laboral saludable y seguro, que promueve el
              crecimiento personal y profesional de nuestros colaboradores.
            </p>
            <button className='custom-button btn btn-primary' onClick={handleNavigate}>
              Saber más
            </button> {/* Redirige a la página de bienestar */}
          </div>

          {/* Columna para la imagen */}
          <div className='col-12 col-md-6 right'>
            <img src={ImgBienestar} alt='Bienestar' className='img-fluid' />
          </div>
        </div>
      </div>
    </div>
  );
};