import ImgBienestar from '../../../../resources/GraficaCualidades.png';

export const Bienestar = () => {
  return (
    <div className='bienestar-organizacional mt-2 mb-2'>
      <div className='left section-title'>
        <h2>Bienestar organizacional</h2>
        <p style={{ textAlign: 'justify' }}>
          En SOSIN Private Security, entendemos que el bienestar de nuestros
          empleados es clave para el éxito de nuestra organización. Por eso,
          fomentamos un entorno laboral saludable y seguro, que promueve el
          crecimiento personal y profesional de nuestros colaboradores.
        </p>
        <button className='custom-button btn btn-primary'>Saber más</button>
      </div>
      <div className='right'>
        <img src={ImgBienestar} alt='Bienestar' />
      </div>
    </div>
  )
}