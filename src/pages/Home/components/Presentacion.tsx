import { useEffect } from "react"
import ImgPresentacion from '../../../resources/img_1.webp'

export const Presentacion = () => {
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
      const textElement = document.getElementById('dynamic-presentation-text')
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
    <div id='presentacion' className='presentation-container'>
      <div className='presentation-content'>
        <div className='presentation-media '>
          <img
            src={ImgPresentacion}
            alt='Cámaras de vigilancia'
            className='video-section'
          />
          <div>
            <h1 className='presentation-text'>
              <span className='static-text'>SOMOS</span>
              <br />
              <span id='dynamic-presentation-text'></span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}