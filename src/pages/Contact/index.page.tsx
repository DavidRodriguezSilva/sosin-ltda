import React from 'react';
import { LayoutPage } from '../../shared/Layout/Content/LayoutPage';
import ContactImage from '../../resources/foto1.jpeg'; // Imagen relacionada con contacto
import ContacImage from '../../resources/Guarda2.png'; // Imagen para la sección de cotización
import './style.css'; // Importar el archivo CSS

const Contact: React.FC = () => {

  return (
    <LayoutPage>
      <section className="contact-section">
        <div className="contact-container">
          <div className="text-section">
            <h1 className="contact-title">Contáctanos</h1>
            <p className="contact-paragraph">
              En <strong>SOSIN Private Security</strong>, estamos comprometidos a proporcionarte
              la mejor atención. Si tienes alguna pregunta sobre nuestros servicios o deseas
              solicitar una cotización, no dudes en comunicarte con nosotros.
            </p>

            <h2 className="contact-subtitle">Contacto</h2>
            <ul className="contact-list">
              <li>Teléfono: +57 123 456 789</li>
              <li>Email: contacto@sosin.com</li>
              <li>Dirección: Calle 123, Sogamoso, Boyacá</li>
            </ul>

            <h2 className="contact-subtitle">Horario de Atención</h2>
            <div className="calendar">
              {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map((day, index) => (
                <div className={`day ${day === "Dom" ? "off-day" : ""}`} key={index}>
                  <strong>{day}</strong>
                  {day === "Dom" ? <p>No hay servicio</p> : <p>8:00 AM - 6:00 PM</p>}
                </div>
              ))}
            </div>
          </div>

          <div className="image-container">
            <img src={ContactImage} alt="Formas de contacto" className="contact-image" />
          </div>
        </div>
      </section>

      {/* Nueva sección Cotización */}
      <section className="cotizacion-section">
        <div className="contact-container">
          {/* Imagen a la izquierda */}
          <div className="image-container">
            <img src={ContacImage} alt="Formas de contacto" className="contact-image1" />
          </div>

          {/* Formulario a la derecha */}
          <div className="contact-form">
            <h2 className="section-title">¡Pongámonos en contacto!</h2>
            <p>Registre sus datos y en unos minutos un experto comercial lo contactará para asesorarlo.</p>
            <form name="sentMessage" id="contactForm" noValidate>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    id="firstName"
                    className="form-control"
                    placeholder="Nombre *"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="lastName"
                    className="form-control"
                    placeholder="Apellido *"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
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
                    placeholder="Teléfono *"
                    required
                  />
                </div>
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
                ></textarea>
              </div>
              <button type="submit" className="custom-button btn btn-primary">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
    </LayoutPage>
  );
};

export default Contact;
