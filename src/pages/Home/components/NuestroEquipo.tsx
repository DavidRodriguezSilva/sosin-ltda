import { useState, useRef, useEffect } from 'react'
import Gallery1 from '../../../resources/foto1.jpeg'
import Gallery2 from '../../../resources/foto2.png'
import Gallery3 from '../../../resources/foto3.png'
import Gallery4 from '../../../resources/foto4.jpeg'
import Gallery5 from '../../../resources/foto1.jpeg'
import Gallery6 from '../../../resources/foto2.png'
import Gallery7 from '../../../resources/foto3.png'
import Gallery8 from '../../../resources/foto4.jpeg'

export const NuestroEquipo = () => {
  const [showMore, setShowMore] = useState(false)
  const [height, setHeight] = useState('0px')
  const ref = useRef<HTMLDivElement>(null)
  const mainTeamRef = useRef<HTMLDivElement>(null)
  const extraCardsRef = useRef<HTMLDivElement>(null)

  const toggleShowMore = () => {
    setShowMore(!showMore)
    if (ref.current) {
      setHeight(!showMore ? `${ref.current.scrollHeight}px` : '0px')
    }
    if (!showMore && extraCardsRef.current) {
      setTimeout(() => {
        extraCardsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 300)
    }

    if (showMore && mainTeamRef.current) {
      mainTeamRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  useEffect(() => {
    if (ref.current) {
      setHeight(showMore ? `${ref.current.scrollHeight}px` : '0px')
    }
  }, [showMore])

  const teamMembers = [
    { src: Gallery1, name: 'Marlene Silva', position: 'Gerente' },
    { src: Gallery2, name: 'Cristian Morantes', position: 'Director de Operaciones' },
    { src: Gallery3, name: 'Shirley Joya', position: 'Recursos Humanos' },
    { src: Gallery4, name: 'Stiven Riveros', position: 'Técnico' },
    { src: Gallery5, name: 'Ana Torres', position: 'Abogado' },
    { src: Gallery6, name: 'Luis Pérez', position: 'Contadora' },
    { src: Gallery7, name: 'María Gómez', position: 'Contadora' },
    { src: Gallery8, name: 'Jorge Martínez', position: 'Soporte' },
  ]

  return (
    <div id='equipo-profesional' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2'>
          <h2 className='titulo-seccion'>EQUIPO DE PROFESIONALES</h2>
          <p className='texto-seccion'>
            Nuestro talentoso equipo está formado por profesionales comprometidos con la calidad y el éxito en todas nuestras iniciativas.
          </p>
        </div>
        <div className='contenedor-equipo'>
          <div ref={mainTeamRef} className='row'>
            {teamMembers.slice(0, 4).map((member, index) => (
              <div key={index} className='col-md-3 col-sm-6 miembro-equipo'>
                <div className='thumbnail-miembro'>
                  <img
                    src={member.src}
                    alt={member.name}
                    className='imagen-miembro'
                  />
                  <div className='descripcion-miembro'>
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
              <div key={index + 4} ref={extraCardsRef} className='col-md-3 col-sm-6 miembro-equipo'>
                <div className='thumbnail-miembro'>
                  <img
                    src={member.src}
                    alt={member.name}
                    className='imagen-miembro'
                  />
                  <div className='descripcion-miembro'>
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
          className='custom-button btn btn-primary'
        >
          {showMore ? 'Ocultar más' : 'Mostrar más'}
        </button>
      </div>
    </div>
  )
}

