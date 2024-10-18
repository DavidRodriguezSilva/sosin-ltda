import { useEffect, useState } from "react";
import RowUp from '../../../resources/up-row.svg'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Desplazamiento suave
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            zIndex: 1000,
            mixBlendMode: 'multiply'
          }}
        >
          <img src={RowUp} alt="arriba" style={{ width: '50px', height: '50px' }} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
