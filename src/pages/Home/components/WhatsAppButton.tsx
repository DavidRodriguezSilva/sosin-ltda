import { useEffect, useState } from "react";
import WhatsAppIcon from '../../../resources/WhatsApp.png'; // Asegúrate de tener un ícono de WhatsApp en esta ruta

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true);  // Visibilidad del botón
  const [showMessage, setShowMessage] = useState(false);  // Visibilidad del mensaje

  // Alternar la visibilidad del mensaje cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setShowMessage(prev => !prev);  // Cambia el estado cada 10 segundos
    }, 5000);  // 10 segundos

    return () => clearInterval(interval);  // Limpia el intervalo cuando el componente se desmonta
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/3132657375', '_blank'); // Reemplaza '1234567890' con el número de WhatsApp de la empresa
  };

  return (
    <div>
      {isVisible && (
        <>
          <button
            onClick={openWhatsApp}
            style={{
              position: 'fixed',
              bottom: '20px',  // Ajusta la posición más cerca del borde inferior
              left: '20px',   // Mantiene el botón en el lado izquierdo
              border: 'none',
              cursor: 'pointer',
              backgroundColor: 'transparent',
              zIndex: 1000,
            }}
          >
            <img src={WhatsAppIcon} alt="WhatsApp" style={{ width: '60px', height: '60px' }} />
          </button>

          {showMessage && (  // Mostrar el mensaje si `showMessage` es true
            <div
              style={{
                position: 'fixed',
                bottom: '90px',  // Ajusta la posición del mensaje encima del botón
                left: '20px',   // Mismo valor de left para que esté alineado con el botón
                backgroundColor: 'green',
                color: 'white',
                padding: '10px',
                borderRadius: '5px',
                zIndex: 1000,
                fontSize: '14px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              ¡Cotiza ya!
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default WhatsAppButton;
