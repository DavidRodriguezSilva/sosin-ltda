import { useState, useEffect } from "react"
import WhatsAppIcon from '../../resources/WhatsApp.webp'

const WhatsAppButton = () => {
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMessage(prev => !prev)
    }, 5000)
    return () => clearInterval(interval)
  }, []);

  const openWhatsApp = () => {
    const phone = '573132657375'
    const message = 'Hola, estoy interesado en obtener más información sobre sus servicios de seguridad. ¿Podrían ayudarme?'
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank')
  }

  return (
    <div style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 1000 }}>
      <button
        onClick={openWhatsApp}
        style={{
          border: 'none',
          cursor: 'pointer',
          backgroundColor: 'transparent',
        }}
      >
        <img src={WhatsAppIcon} alt="WhatsApp" style={{ width: '60px', height: '60px' }} />
      </button>
      {showMessage && (
        <div className={`message-container fade-in`}>
          Contáctanos, estamos para ayudarte.
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;
