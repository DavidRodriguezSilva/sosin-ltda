import Gallery1 from "../../../resources/logoBlanco1.png";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact-container">
        <div className="contact-form">
          <h2>¡Pongámonos en contacto!</h2>
          <p>
            Registre sus datos y en unos minutos un experto comercial lo contactará para asesorarlo.
          </p>
          <form name="sentMessage" id="contactForm" noValidate>
            <div className="form-group">
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Nombre completo *"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Correo electrónico *"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="phone"
                className="form-control"
                placeholder="Teléfono de contacto *"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="city"
                className="form-control"
                placeholder="Ciudad *"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="company"
                className="form-control"
                placeholder="Compañía *"
                required
              />
            </div>
            <div className="form-group">
              <select id="service" className="form-control" required>
                <option>Servicio de interés *</option>
                <option value="1">Servicio 1</option>
                <option value="2">Servicio 2</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                id="comments"
                className="form-control"
                rows={4}
                placeholder="Comentarios"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-custom">
              Enviar
            </button>
          </form>
        </div>
        <div className="contact-image">
          <img src={Gallery1} alt="Contact image" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
