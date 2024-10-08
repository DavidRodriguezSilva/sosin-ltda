import React, { useEffect } from 'react'
import CamarasGif from '../../../resources/Camaras de vigilancia.gif' // Importamos el GIF correctamente

const Presentation: React.FC = () => {
  useEffect(() => {
    const words = [
      'SOSIN',
      'SEGURIDAD',
      'TRANSPARENCIA',
      'CONFIANZA',
      'PROTECCIÓN',
      'INNOVACIÓN',
      'COMPROMISO',
      'EFICIENCIA',
      'RESPALDO',
      'VIGILANCIA',
      'EXCELENCIA',
      'TRANQUILIDAD',
      'PROFESIONALISMO',
      'SEGURIDAD TOTAL',
      'REACTIVIDAD',
    ]

    let index = 0

    const changeText = () => {
      const textElement = document.getElementById('changing-text')
      if (textElement) {
        textElement.style.opacity = '0'
        setTimeout(() => {
          textElement.textContent = words[index]
          textElement.style.opacity = '1'
          index = (index + 1) % words.length
        }, 800)
      }
    }

    const intervalId = setInterval(changeText, 2500)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <header id='header' className='header-container'>
      <div className='intro'>
        <div className='text-on-gif'>
          <img
            src={CamarasGif}
            alt='Cámaras de vigilancia'
            className='video-section'
          />
          <div className='text-section'>
            <h1>
              <span className='static-text'>SOMOS</span>
              <br />
              <span id='changing-text' className='changing-text'></span>
            </h1>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Presentation
