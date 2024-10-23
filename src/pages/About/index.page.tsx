import AboutImg1 from "../../resources/IMG_9089.png";
import AboutImg2 from "../../resources/IMG_9040.png";
import AboutImg3 from "../../resources/IMG_8983.png";

import { LayoutPage } from "../../shared/Layout/Content/LayoutPage";
import "./style.css"

const AboutPage = () => {
  return (
    <LayoutPage>
      <section className="company-info-section">
        <div className="company-info-container">
          <div className="company-text-section">
            <h1 className="company-title">Sobre Nosotros</h1>
            <p className="company-paragraph">
              En <strong>SOSIN Private Security</strong>, nos especializamos en
              ofrecer soluciones de seguridad personalizadas para empresas y personas.
              Nuestro equipo altamente capacitado y la última tecnología en vigilancia
              garantizan la protección y tranquilidad de nuestros clientes.
            </p>
            <p className="company-paragraph">
              Con más de 10 años de experiencia en el sector, hemos desarrollado
              un enfoque que combina atención al cliente excepcional con una
              respuesta rápida ante situaciones de emergencia, lo que nos ha
              permitido construir relaciones de confianza con nuestros clientes.
            </p>
          </div>
          <div className="company-image-section">
            <img src={AboutImg1} alt="Nuestro equipo de seguridad" className="company-image" />
          </div>
        </div>

        <div className="company-info-container reverse-layout">
          <div className="company-image-section">
            <img src={AboutImg2} alt="Nuestro equipo de seguridad" className="company-image" />
          </div>
          <div className="company-text-section">
            <h2 className="company-subtitle">Misión</h2>
            <p className="company-paragraph">
              Nuestra misión es proporcionar seguridad integral y confiable,
              asegurando la protección de los bienes y las personas bajo nuestra custodia.
              Utilizamos una combinación de personal profesional y sistemas de seguridad
              avanzados para prevenir riesgos y asegurar el bienestar de nuestros clientes.
            </p>

            <h2 className="company-subtitle">Visión</h2>
            <p className="company-paragraph">
              Ser reconocidos como la empresa de seguridad privada más confiable del país,
              destacándonos por nuestro enfoque en la calidad, tecnología y adaptación
              continua a los nuevos desafíos de la seguridad.
            </p>
          </div>
        </div>

        <div className="company-info-container">
          <div className="company-text-section">
            <h2 className="company-subtitle">Valores</h2>
            <ul className="company-list">
              <li>Compromiso con la seguridad</li>
              <li>Ética profesional</li>
              <li>Innovación tecnológica</li>
              <li>Responsabilidad y confianza</li>
            </ul>
            <p className="company-paragraph">
              Nos esforzamos por mantener la integridad y la transparencia en todas nuestras operaciones.
              Creemos que la confianza es la base de cualquier relación, y trabajamos arduamente para
              merecerla día a día.
            </p>
          </div>
          <div className="company-image-section">
            <img src={AboutImg3} alt="Nuestro equipo de seguridad" className="company-image" />
          </div>
        </div>
      </section>

      <section className="company-details-section">
        <h2 className="details-title">Información de la Empresa</h2>
        <div className="details-container">
          <div className="details-card">
            <h3 className="details-card-title">¿Quiénes Somos?</h3>
            <p className="details-card-text">
              Fundada en 2012, SOSIN Private Security ha crecido de una pequeña empresa a un líder en el sector de seguridad privada.
              Nuestro compromiso es proporcionar servicios de alta calidad y adaptarnos a las necesidades de cada cliente.
            </p>
          </div>
          <div className="details-card">
            <h3 className="details-card-title">Nuestros Servicios</h3>
            <p className="details-card-text">
              Ofrecemos una variedad de servicios de seguridad, incluyendo vigilancia física, sistemas de alarma, y consultoría en seguridad.
              Nuestros expertos están disponibles las 24 horas del día para garantizar su seguridad.
            </p>
          </div>
          <div className="details-card">
            <h3 className="details-card-title">Contáctanos</h3>
            <p className="details-card-text">
              Para más información sobre nuestros servicios, contáctanos al +57 123 456 789 o envíanos un correo a contacto@sosin.com.
              Estamos aquí para ayudarte a proteger lo que más valoras.
            </p>
            <a className="contact-link" href="/contact#contact">Contacto</a>
          </div>
        </div>
      </section>
    </LayoutPage>
  );
};

export default AboutPage;
