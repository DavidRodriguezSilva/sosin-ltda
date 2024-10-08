import React, { useEffect } from 'react';
import CamarasGif from '../../../resources/Camaras de vigilancia.gif'; // Importamos el GIF correctamente

const Presentation: React.FC = () => {
  useEffect(() => {
    const words = ["SOSIN", "SEGURIDAD", "TRANSPARENCIA"];
    let index = 0;

    const changeText = () => {
      const textElement = document.getElementById("changing-text");
      if (textElement) {
        textElement.style.opacity = "0";
        setTimeout(() => {
          textElement.textContent = words[index];
          textElement.style.opacity = "1";
          index = (index + 1) % words.length;
        }, 500); // Delay antes de cambiar la palabra
      }
    };

    const intervalId = setInterval(changeText, 3000); // Cada 3 segundos
    return () => clearInterval(intervalId); // Limpiamos el intervalo al desmontar el componente
  }, []);

  return (
    <header id="header" className="header-container">
      <div className="intro">
        {/* Sección de las palabras (izquierda) */}
        <div className="left">
          <div className="text-section">
            <h1>
              <span className="static-text">SOMOS</span> {/* Texto estático */}
              <br />
              <span id="changing-text" className="changing-text">SOSIN</span> {/* Texto que cambia */}
            </h1>
          </div>
        </div>

        {/* Sección del GIF (derecha) */}
        <div className="right">
          <img src={CamarasGif} alt="Cámaras de vigilancia" className="video-section" />
        </div>
      </div>
    </header>
  );
};

export default Presentation;
