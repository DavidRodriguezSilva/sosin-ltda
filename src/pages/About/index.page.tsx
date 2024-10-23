import AboutImage from "../../resources/IMG_9089.png";
import AboutImage1 from "../../resources/IMG_9040.png";
import AboutImage2 from "../../resources/IMG_8983.png";

import { LayoutPage } from "../../shared/Layout/Content/LayoutPage";
import "./style.css"

const About = () => {
  return (
    <LayoutPage>
      <section className="about-section"> {/* Nueva sección para Sobre Nosotros */}
        <div className="about-container">
          {/* Primer bloque: dos párrafos a la izquierda y una imagen a la derecha */}
          <div className="text-section">
            <h1 className="about-title">Sobre Nosotros</h1>
            <p className="about-paragraph">
              En <strong>SOSIN Private Security</strong>, nos especializamos en
              ofrecer soluciones de seguridad personalizadas para empresas y personas.
              Nuestro equipo altamente capacitado y la última tecnología en vigilancia
              garantizan la protección y tranquilidad de nuestros clientes.
            </p>
            <p className="about-paragraph">
              Con más de 10 años de experiencia en el sector, hemos desarrollado
              un enfoque que combina atención al cliente excepcional con una
              respuesta rápida ante situaciones de emergencia, lo que nos ha
              permitido construir relaciones de confianza con nuestros clientes.
            </p>
          </div>
          <div className="image-container">
            <img src={AboutImage} alt="Nuestro equipo de seguridad" className="about-image" />
          </div>
        </div>

        <div className="about-container">
          {/* Segundo bloque: imagen a la izquierda y dos párrafos a la derecha */}
          <div className="image-container">
            <img src={AboutImage1} alt="Nuestro equipo de seguridad" className="about-image" />
          </div>
          <div className="text-section">
            <h2 className="about-subtitle">Misión</h2>
            <p className="about-paragraph">
              Nuestra misión es proporcionar seguridad integral y confiable,
              asegurando la protección de los bienes y las personas bajo nuestra custodia.
              Utilizamos una combinación de personal profesional y sistemas de seguridad
              avanzados para prevenir riesgos y asegurar el bienestar de nuestros clientes.
            </p>

            <h2 className="about-subtitle">Visión</h2>
            <p className="about-paragraph">
              Ser reconocidos como la empresa de seguridad privada más confiable del país,
              destacándonos por nuestro enfoque en la calidad, tecnología y adaptación
              continua a los nuevos desafíos de la seguridad.
            </p>
          </div>
        </div>

        <div className="about-container">
          {/* Tercer bloque: dos párrafos a la izquierda y una imagen a la derecha */}
          <div className="text-section">
            <h2 className="about-subtitle">Valores</h2>
            <ul className="about-list">
              <li>Compromiso con la seguridad</li>
              <li>Ética profesional</li>
              <li>Innovación tecnológica</li>
              <li>Responsabilidad y confianza</li>
            </ul>
            <p className="about-paragraph">
              Nos esforzamos por mantener la integridad y la transparencia en todas nuestras operaciones.
              Creemos que la confianza es la base de cualquier relación, y trabajamos arduamente para
              merecerla día a día.
            </p>
          </div>
          <div className="image-container">
            <img src={AboutImage2} alt="Nuestro equipo de seguridad" className="about-image" />
          </div>
        </div>
      </section>

      {/* Nueva sección creativa para información de la empresa */}
      <section className="info-section">
        <h2 className="info-title">Información de la Empresa</h2>
        <div className="info-container">
          <div className="info-card">
            <h3 className="info-card-title">¿Quiénes Somos?</h3>
            <p className="info-card-text">
              Fundada en 2012, SOSIN Private Security ha crecido de una pequeña empresa a un líder en el sector de seguridad privada.
              Nuestro compromiso es proporcionar servicios de alta calidad y adaptarnos a las necesidades de cada cliente.
            </p>
          </div>
          <div className="info-card">
            <h3 className="info-card-title">Nuestros Servicios</h3>
            <p className="info-card-text">
              Ofrecemos una variedad de servicios de seguridad, incluyendo vigilancia física, sistemas de alarma, y consultoría en seguridad.
              Nuestros expertos están disponibles las 24 horas del día para garantizar su seguridad.
            </p>
          </div>
          <div className="info-card">
            <h3 className="info-card-title">Contáctanos</h3>
            <p className="info-card-text">
              Para más información sobre nuestros servicios, contáctanos al +57 123 456 789 o envíanos un correo a contacto@sosin.com.
              Estamos aquí para ayudarte a proteger lo que más valoras.
            </p>
            <a className="link-item" href="/contact#contact">Contacto</a> {/* Enlace al botón de contacto */}
          </div>
        </div>
      </section>
    </LayoutPage>
  );
};

export default About;
