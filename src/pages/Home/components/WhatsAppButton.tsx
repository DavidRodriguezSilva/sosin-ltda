import { useState, useEffect } from "react";
import WhatsAppIcon from '../../../resources/WhatsApp.webp'

const WhatsAppButton = () => {
  const [showMessage, setShowMessage] = useState(false)

  // Alternar la visibilidad del mensaje cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setShowMessage(prev => !prev)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  const openWhatsApp = () => {
    window.open('https://wa.me/573132658385', '_blank')
  }

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
