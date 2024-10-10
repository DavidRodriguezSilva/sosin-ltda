import { useState, useEffect, useCallback } from 'react';
import Gallery6 from '../../../resources/GraficaCualidades.png';
import Gallery7 from '../../../resources/iso1.png';
import Gallery8 from '../../../resources/iso2.png';
import Gallery9 from '../../../resources/iso3.png';
import Gallery100 from '../../../resources/iso4.png';
import Gallery1 from '../../../resources/img/portfolio/01-large.jpg';
import Gallery10 from '../../../resources/img/portfolio/01-small.jpg';
import Gallery2 from './../../../resources/img/portfolio/02-large.jpg';
import Gallery20 from './../../../resources/img/portfolio/02-small.jpg';
import Gallery3 from './../../../resources/img/portfolio/03-large.jpg';
import Gallery30 from './../../../resources/img/portfolio/03-small.jpg';
import Gallery4 from './../../../resources/img/portfolio/04-large.jpg';
import Gallery40 from './../../../resources/img/portfolio/04-small.jpg';
import Gallery5 from './../../../resources/img/portfolio/05-large.jpg';
import Gallery50 from './../../../resources/img/portfolio/05-small.jpg';

const Feature = () => {
  useEffect(() => {
    // Lógica para los contadores
    const counters = document.querySelectorAll('.count');
    const speed = 100; 

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-count')!;
        const count = +counter.textContent!;

        const increment = target / speed;

        if (count < target) {
          counter.textContent = Math.ceil(count + increment).toString();
          setTimeout(updateCount, 1);
        } else {
          counter.textContent = target.toString();
        }
      };

      updateCount();
    });
  }, []); 

  const images = [
    { large: Gallery1, small: Gallery10 },
    { large: Gallery2, small: Gallery20 },
    { large: Gallery3, small: Gallery30 },
    { large: Gallery4, small: Gallery40 },
    { large: Gallery5, small: Gallery50 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false); 

  const nextImage = useCallback(() => {
    setCurrentIndex((currentIndex + 1) % images.length);
  }, [currentIndex, images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length]);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 7000); 
    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <div>
      <h2 className='section-title'>NUESTRO SERVICIO</h2>
      <div className='bienestar-organizacional' id='bienestar-organizacional'>
        <div className='left'>
          <h2 className='section-title'>BIENESTAR ORGANIZACIONAL</h2>
          <p>
            En SOSIN Private Security, entendemos que el bienestar de nuestros
            empleados es clave para el éxito de nuestra organización. Por eso,
            fomentamos un entorno laboral saludable y seguro, que promueve el
            crecimiento personal y profesional de nuestros colaboradores.
          </p>
          <button className='btn'>Saber más</button>
        </div>
        <div className='right'>
          <img src={Gallery6} alt='Bienestar' />
        </div>
      </div>

      <div className='certificaciones' id='certificaciones'>
        <h2 className='section-title'>CERTIFICACIONES</h2>
        <hr />
        <div className='certificaciones-grid'>
          <img src={Gallery7} alt='Certificación 1' />
          <img src={Gallery8} alt='Certificación 2' />
          <img src={Gallery9} alt='Certificación 3' />
          <img src={Gallery100} alt='Certificación 4' />
        </div>
      </div>

      <div id='clientes-carousel' className='text-center'>
        <div className='container'>
          <div className='section-title'>
            <h2 className='section-title'>CLIENTES</h2>
            <hr />
          </div>
          <div className='carousel'>
            <button className='button-left' onClick={prevImage}>
              &lt;
            </button>
            <div className='carousel-container'>
              <div className='small-image-container'>
                <img
                  src={
                    images[(currentIndex - 1 + images.length) % images.length]
                      .small
                  }
                  alt='Small'
                  className='small-image'
                />
              </div>
              <div className='large-image-container' onClick={toggleModal}>
                <img
                  src={images[currentIndex].large}
                  alt='Large'
                  className='large-image'
                />
              </div>
              <div className='small-image-container'>
                <img
                  src={images[(currentIndex + 1) % images.length].small}
                  alt='Small'
                  className='small-image'
                />
              </div>
            </div>
            <button className='button-right' onClick={nextImage}>
              &gt;
            </button>
          </div>

          {isModalOpen && (
            <div className='modal'>
              <span className='close-modal' onClick={toggleModal}>
                &times;
              </span>
              <img
                className='modal-content'
                src={images[currentIndex].large}
                alt='Modal Large'
              />
            </div>
          )}
        </div>
      </div>

      <div id='stats' className='text-center'>
        <div className='container'>
          <div className='section-title'>
            <h2 className='section-title'>DATOS</h2>
            <hr />
          </div>
          <div className='row'>
            <div className='col-md-3'>
              <i className='fa fa-heart'></i>
              <h3>
                <span className='count' data-count='70'>
                  0
                </span>
              </h3>
              <p>PERSONAL CALIFICADO</p>
            </div>
            <div className='col-md-3'>
              <i className='fa fa-smile-o'></i>
              <h3>
                <span className='count' data-count='3'>
                  0
                </span>
              </h3>
              <p>AÑOS DE SERVICIO</p>
            </div>
            <div className='col-md-3'>
              <i className='fa fa-anchor'></i>
              <h3>
                <span className='count' data-count='20'>
                  0
                </span>
              </h3>
              <p>CLIENTES SATISFECHOS</p>
            </div>
            <div className='col-md-3'>
              <i className='fa fa-user'></i>
              <h3>
                <span className='count' data-count='3'>
                  0
                </span>
              </h3>
              <p>COBERTURA NACIONAL EN DEPARTAMENTOS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
