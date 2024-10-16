import { useState, useEffect } from "react";
import WhatsAppIcon from '../../../resources/WhatsApp.png'; // Asegúrate de tener un ícono de WhatsApp en esta ruta

const WhatsAppButton = () => {
  const [showMessage, setShowMessage] = useState(false);  // Sólo deja el estado necesario

  // Alternar la visibilidad del mensaje cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setShowMessage(prev => !prev);  // Cambia el estado cada 10 segundos
    }, 10000);

    return () => clearInterval(interval);  // Limpia el intervalo cuando el componente se desmonta
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/1234567890', '_blank'); // Reemplaza '1234567890' con el número de WhatsApp de la empresa
  };

  return (
    <div>
      <button
        onClick={openWhatsApp}
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: 'transparent',
          zIndex: 1000,
        }}
      >
        <img src={WhatsAppIcon} alt="WhatsApp" style={{ width: '60px', height: '60px' }} />
      </button>

      {showMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: '90px',
            left: '20px',
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
    </div>
  );
};

export default WhatsAppButton;
