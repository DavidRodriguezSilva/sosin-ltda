import React, { useState, useRef, useEffect } from 'react';
import Gallery1 from '../../../resources/foto1.jpeg';
import Gallery2 from '../../../resources/foto2.png';
import Gallery3 from '../../../resources/foto3.png';
import Gallery4 from '../../../resources/foto4.jpeg';
import Gallery5 from '../../../resources/foto1.jpeg'; // Nueva imagen
import Gallery6 from '../../../resources/foto2.png'; // Nueva imagen
import Gallery7 from '../../../resources/foto3.png'; // Nueva imagen
import Gallery8 from '../../../resources/foto4.jpeg'; // Nueva imagen

const TeamSection = () => {
  const [showMore, setShowMore] = useState(false);
  const [height, setHeight] = useState('0px');
  const ref = useRef<HTMLDivElement>(null);
  const mainTeamRef = useRef<HTMLDivElement>(null); // Referencia para las primeras 4 tarjetas
  const extraCardsRef = useRef<HTMLDivElement>(null); // Referencia para las tarjetas adicionales

  const toggleShowMore = () => {
    setShowMore(!showMore);
    if (ref.current) {
      setHeight(!showMore ? `${ref.current.scrollHeight}px` : '0px');
    }

    // Si abrimos las tarjetas adicionales (showMore será true), desplazamos a las nuevas tarjetas
    if (!showMore && extraCardsRef.current) {
      setTimeout(() => {
        extraCardsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300); // Agregamos un pequeño retraso para que la transición sea suave
    }

    // Si estamos cerrando las tarjetas, volvemos a las primeras 4
    if (showMore && mainTeamRef.current) {
      mainTeamRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  useEffect(() => {
    if (ref.current) {
      setHeight(showMore ? `${ref.current.scrollHeight}px` : '0px');
    }
  }, [showMore]);

  const teamMembers = [
    { src: Gallery1, name: 'Marlene Silva', position: 'Gerente' },
    { src: Gallery2, name: 'Cristian Morantes', position: 'Director de Operaciones' },
    { src: Gallery3, name: 'Shirley Joya', position: 'Recursos Humanos' },
    { src: Gallery4, name: 'Stiven Riveros', position: 'Técnico' },
    { src: Gallery5, name: 'Ana Torres', position: 'Diseñadora' },
    { src: Gallery6, name: 'Luis Pérez', position: 'Desarrollador' },
    { src: Gallery7, name: 'María Gómez', position: 'Analista' },
    { src: Gallery8, name: 'Jorge Martínez', position: 'Soporte' },
  ];

  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>NUESTRO EQUIPO</h2>
          <p>
            Nuestro equipo de trabajo está conformado por profesionales
            altamente capacitados y comprometidos con la excelencia.
          </p>
        </div>

        <div className='team-container'>
          <div ref={mainTeamRef} className='row'>
            {teamMembers.slice(0, 4).map((member, index) => (
              <div key={index} className='col-md-3 col-sm-6 team-member'>
                <div className='thumbnail'>
                  <img
                    src={member.src}
                    alt={member.name}
                    className='team-img'
                  />
                  <div className='caption'>
                    <h4>{member.name}</h4>
                    <p>{member.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            ref={ref}
            className={`row overflow-hidden transition-height`}
            style={{ height }}
          >
            {teamMembers.slice(4).map((member, index) => (
              <div key={index + 4} ref={extraCardsRef} className='col-md-3 col-sm-6 team-member'>
                <div className='thumbnail'>
                  <img
                    src={member.src}
                    alt={member.name}
                    className='team-img'
                  />
                  <div className='caption'>
                    <h4>{member.name}</h4>
                    <p>{member.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={toggleShowMore}
          className='btn btn-toggle'
        >
          {showMore ? 'Ocultar más' : 'Mostrar más'}
        </button>
      </div>
    </div>
  );
};

export default TeamSection;
