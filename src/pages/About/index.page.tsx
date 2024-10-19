import AboutImage from "../../resources/logoBlanco1.png"; // Imagen relacionada con el equipo de seguridad
import { LayoutPage } from "../../shared/Layout/Content/LayoutPage";

const About = () => {
  return (
    <LayoutPage>
      <section style={sectionStyle}> {/* Nueva sección para Sobre Nosotros */}
        <div style={containerStyle}>
          {/* Primer bloque: dos párrafos a la izquierda y una imagen a la derecha */}
          <div style={textSectionStyle}>
            <h1 style={titleStyle}>Sobre Nosotros</h1>
            <p style={paragraphStyle}>
              En <strong>SOSIN Private Security</strong>, nos especializamos en
              ofrecer soluciones de seguridad personalizadas para empresas y personas.
              Nuestro equipo altamente capacitado y la última tecnología en vigilancia
              garantizan la protección y tranquilidad de nuestros clientes.
            </p>
            <p style={paragraphStyle}>
              Con más de 10 años de experiencia en el sector, hemos desarrollado
              un enfoque que combina atención al cliente excepcional con una
              respuesta rápida ante situaciones de emergencia, lo que nos ha
              permitido construir relaciones de confianza con nuestros clientes.
            </p>
          </div>
          <div style={imageContainerStyle}>
            <img src={AboutImage} alt="Nuestro equipo de seguridad" style={imageStyle} />
          </div>
        </div>

        <div style={containerStyle}>
          {/* Segundo bloque: imagen a la izquierda y dos párrafos a la derecha */}
          <div style={imageContainerStyle}>
            <img src={AboutImage} alt="Nuestro equipo de seguridad" style={imageStyle} />
          </div>
          <div style={textSectionStyle}>
            <h2 style={subtitleStyle}>Misión</h2>
            <p style={paragraphStyle}>
              Nuestra misión es proporcionar seguridad integral y confiable,
              asegurando la protección de los bienes y las personas bajo nuestra custodia.
              Utilizamos una combinación de personal profesional y sistemas de seguridad
              avanzados para prevenir riesgos y asegurar el bienestar de nuestros clientes.
            </p>

            <h2 style={subtitleStyle}>Visión</h2>
            <p style={paragraphStyle}>
              Ser reconocidos como la empresa de seguridad privada más confiable del país,
              destacándonos por nuestro enfoque en la calidad, tecnología y adaptación
              continua a los nuevos desafíos de la seguridad.
            </p>
          </div>
        </div>

        <div style={containerStyle}>
          {/* Tercer bloque: dos párrafos a la izquierda y una imagen a la derecha */}
          <div style={textSectionStyle}>
            <h2 style={subtitleStyle}>Valores</h2>
            <ul style={listStyle}>
              <li>Compromiso con la seguridad</li>
              <li>Ética profesional</li>
              <li>Innovación tecnológica</li>
              <li>Responsabilidad y confianza</li>
            </ul>
            <p style={paragraphStyle}>
              Nos esforzamos por mantener la integridad y la transparencia en todas nuestras operaciones.
              Creemos que la confianza es la base de cualquier relación, y trabajamos arduamente para
              merecerla día a día.
            </p>
          </div>
          <div style={imageContainerStyle}>
            <img src={AboutImage} alt="Nuestro equipo de seguridad" style={imageStyle} />
          </div>
        </div>
      </section>

      {/* Nueva sección creativa para información de la empresa */}
      <section style={infoSectionStyle}>
        <h2 style={infoTitleStyle}>Información de la Empresa</h2>
        <div style={infoContainerStyle}>
          <div style={infoCardStyle}>
            <h3 style={infoCardTitleStyle}>¿Quiénes Somos?</h3>
            <p style={infoCardTextStyle}>
              Fundada en 2012, SOSIN Private Security ha crecido de una pequeña empresa a un líder en el sector de seguridad privada.
              Nuestro compromiso es proporcionar servicios de alta calidad y adaptarnos a las necesidades de cada cliente.
            </p>
          </div>
          <div style={infoCardStyle}>
            <h3 style={infoCardTitleStyle}>Nuestros Servicios</h3>
            <p style={infoCardTextStyle}>
              Ofrecemos una variedad de servicios de seguridad, incluyendo vigilancia física, sistemas de alarma, y consultoría en seguridad.
              Nuestros expertos están disponibles las 24 horas del día para garantizar su seguridad.
            </p>
          </div>
          <div style={infoCardStyle}>
            <h3 style={infoCardTitleStyle}>Contáctanos</h3>
            <p style={infoCardTextStyle}>
              Para más información sobre nuestros servicios, contáctanos al +57 123 456 789 o envíanos un correo a contacto@sosin.com.
              Estamos aquí para ayudarte a proteger lo que más valoras.
            </p>
          </div>
        </div>
      </section>
    </LayoutPage>
  );
};

// Estilos generales
const sectionStyle: React.CSSProperties = {
  padding: "4rem 2rem",
  backgroundColor: "#f8f9fa", // Fondo claro para la sección
  marginTop: "5rem", // Evitar superposición con el Header
};

const containerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "1200px",
  margin: "0 auto", // Centrar el contenido
  gap: "2rem", // Espacio entre el texto y la imagen
  flexWrap: "wrap", // Permitir que el contenido se ajuste en pantallas pequeñas
};

const textSectionStyle: React.CSSProperties = {
  flex: 1,
};

const imageContainerStyle: React.CSSProperties = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
};

const imageStyle: React.CSSProperties = {
  width: "100%", // Imagen ocupa todo el ancho disponible
  maxWidth: "500px", // Limitar el tamaño máximo
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const titleStyle: React.CSSProperties = {
  fontSize: "2.5rem",
  fontWeight: 800,
  marginBottom: "1rem",
};

const subtitleStyle: React.CSSProperties = {
  fontSize: "2rem",
  fontWeight: 700,
  marginTop: "2rem",
  marginBottom: "1rem",
};

const paragraphStyle: React.CSSProperties = {
  fontSize: "1.6rem",
  lineHeight: "1.8",
  textAlign: "justify",
};

const listStyle: React.CSSProperties = {
  fontSize: "1.6rem",
  listStyleType: "circle",
  paddingLeft: "1.5rem",
  lineHeight: "2",
};

// Nuevos estilos para la sección de información de la empresa
const infoSectionStyle: React.CSSProperties = {
  padding: "4rem 2rem",
  backgroundColor: "#e9ecef",
  marginTop: "3rem",
  borderRadius: "8px",
  textAlign: "center",
};

const infoTitleStyle: React.CSSProperties = {
  fontSize: "2.5rem",
  fontWeight: 800,
  marginBottom: "2rem",
};

const infoContainerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-around",
  maxWidth: "1200px",
  margin: "0 auto",
  flexWrap: "wrap",
};

const infoCardStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  borderRadius: "8px",
  padding: "2rem",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  flex: "1 0 30%", // Toma 30% del espacio disponible
  margin: "1rem",
};

const infoCardTitleStyle: React.CSSProperties = {
  fontSize: "1.8rem",
  fontWeight: 700,
  marginBottom: "1rem",
};

const infoCardTextStyle: React.CSSProperties = {
  fontSize: "1.4rem",
  lineHeight: "1.6",
  textAlign: "justify",
};

export default About;
