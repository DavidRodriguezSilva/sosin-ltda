import ContacImage from '../../../resources/imagenCotizacion.png'

export const Cotizacion = () => {
  return (
    <div id='contact'>
      <div className='container contact-container'>
        <div className='contact-form'>
          <h2 className='section-title'>¡Pongámonos en contacto!</h2>
          <p>Registre sus datos y en unos minutos un experto comercial lo contactará para asesorarlo.</p>
          <form name='sentMessage' id='contactForm' noValidate>
            <div className='form-row'>
            <div className='form-group'>
              <input
                type='text'
                  id='firstName'
                className='form-control'
                  placeholder='Nombre *'
                required
              />
            </div>
            <div className='form-group'>
              <input
                  type='text'
                  id='lastName'
                className='form-control'
                  placeholder='Apellido *'
                required
              />
            </div>
            </div>
            <div className='form-row'>
            <div className='form-group'>
              <input
                  type='email'
                  id='email'
                className='form-control'
                  placeholder='Correo electrónico *'
                required
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                  id='phone'
                className='form-control'
                  placeholder='Teléfono *'
                required
              />
            </div>
            </div>
            <div className='form-group'>
              <input
                type='text'
                id='company'
                className='form-control'
                placeholder='Compañía *'
                required
              />
            </div>
            <div className='form-group'>
              <select id='service' className='form-control' required>
                <option>Servicio de interés *</option>
                <option value='1'>Servicio 1</option>
                <option value='2'>Servicio 2</option>
              </select>
            </div>
            <div className='form-group'>
              <textarea
                id='comments'
                className='form-control'
                rows={4}
                placeholder='Comentarios'
              ></textarea>
            </div>
            <button type='submit' className='custom-button btn btn-primary'>
              Enviar
            </button>
          </form>
        </div>
        <div className='contact-image'>
          <img src={ContacImage} alt='Contactimage' />
        </div>
      </div>
    </div>

  )
}
