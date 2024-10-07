import React, { useState, useEffect } from 'react';

// Imágenes
import Gallery1 from "../../../resources/img/portfolio/01-large.jpg";
import Gallery10 from "../../../resources/img/portfolio/01-small.jpg";
import Gallery2 from "./../../../resources/img/portfolio/02-large.jpg";
import Gallery20 from "./../../../resources/img/portfolio/02-small.jpg";
import Gallery3 from "./../../../resources/img/portfolio/03-large.jpg";
import Gallery30 from "./../../../resources/img/portfolio/03-small.jpg";
import Gallery4 from "./../../../resources/img/portfolio/04-large.jpg";
import Gallery40 from "./../../../resources/img/portfolio/04-small.jpg";
import Gallery5 from "./../../../resources/img/portfolio/05-large.jpg";
import Gallery50 from "./../../../resources/img/portfolio/05-small.jpg";

const Gallery = () => {
  const images = [
    { large: Gallery1, small: Gallery10 },
    { large: Gallery2, small: Gallery20 },
    { large: Gallery3, small: Gallery30 },
    { large: Gallery4, small: Gallery40 },
    { large: Gallery5, small: Gallery50 }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false); // Estado del modal

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 7000); // Cambiar cada 7 segundos
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>En estas imagenes podras ver lo que hacemos, nuestro trabajo.</p>
        </div>
        <div className="carousel">
          <button className="button-left" onClick={prevImage}>&lt;</button>
          <div className="carousel-container">
            {/* Primera columna: Imagen pequeña izquierda */}
            <div className="small-image-container">
              <img src={images[(currentIndex - 1 + images.length) % images.length].small} alt="Small" className="small-image" />
            </div>
            {/* Segunda columna: Imagen grande central */}
            <div className="large-image-container" onClick={toggleModal}>
              <img src={images[currentIndex].large} alt="Large" className="large-image" />
            </div>
            {/* Tercera columna: Imagen pequeña derecha */}
            <div className="small-image-container">
              <img src={images[(currentIndex + 1) % images.length].small} alt="Small" className="small-image" />
            </div>
          </div>
          <button className="button-right" onClick={nextImage}>&gt;</button>
        </div>

        {/* Modal para imagen grande */}
        {isModalOpen && (
          <div className="modal">
            <span className="close-modal" onClick={toggleModal}>&times;</span>
            <img className="modal-content" src={images[currentIndex].large} alt="Modal Large" />
          </div>
        )}
      </div>
    </div>
  );
};


export default Gallery;
