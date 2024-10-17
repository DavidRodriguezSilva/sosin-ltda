import Header from "../../shared/components/Header/Header";
import Footer from "../../shared/components/Footer/Footer";
import AboutImage from "../../resources/logoBlanco1.png"; // Imagen relacionada con el equipo de seguridad
import WhatsAppButton from "../Home/components/WhatsAppButton";

const About = () => {
  return (
    <>
      <Header /> {/* Encabezado común en todas las páginas */}

      <section style={sectionStyle}> {/* Nueva sección para Sobre Nosotros */}
        <div style={containerStyle}>
          <div style={textSectionStyle}>
            <h1 style={titleStyle}>Sobre Nosotros</h1>
            <p style={paragraphStyle}>
              En <strong>SOSIN Private Security</strong>, nos especializamos en
              ofrecer soluciones de seguridad personalizadas para empresas y personas.
              Nuestro equipo altamente capacitado y la última tecnología en vigilancia
              garantizan la protección y tranquilidad de nuestros clientes.
            </p>

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

            <h2 style={subtitleStyle}>Valores</h2>
            <ul style={listStyle}>
              <li>Compromiso con la seguridad</li>
              <li>Ética profesional</li>
              <li>Innovación tecnológica</li>
              <li>Responsabilidad y confianza</li>
            </ul>
          </div>

          <div style={imageContainerStyle}>
            <img src={AboutImage} alt="Nuestro equipo de seguridad" style={imageStyle} />
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer /> {/* Pie de página común en todas las páginas */}
    </>
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

export default About;
