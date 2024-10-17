import Header from "../../shared/components/Header/Header";
import Footer from "../../shared/components/Footer/Footer";
import MapImage from "../../resources/SobreNosotros.jpeg";  // Asegúrate de que esta ruta sea correcta
import WhatsAppButton from "../Home/components/WhatsAppButton";

const CoverageSection = () => {
  return (
    <>
      <Header /> {/* Encabezado común en todas las páginas */}

      <section style={sectionStyle}> {/* Sección para Cobertura Nacional */}
        <div style={containerStyle}>
          <div style={textSectionStyle}>
            <h1 style={titleStyle}>Cobertura Nacional</h1>
            <p style={paragraphStyle}>
              En <strong>SOSIN Private Security</strong>, contamos con todos los recursos físicos, técnicos,
              tecnológicos y logísticos para operar a nivel nacional. Nuestra sede principal se encuentra
              en Sogamoso, Boyacá, y garantizamos un servicio de calidad en todas las regiones del país.
            </p>

            <h2 style={subtitleStyle}>Áreas de Cobertura</h2>
            <ul style={listStyle}>
              <li>Zona Andina</li>
              <li>Región Caribe</li>
              <li>Región Pacífica</li>
              <li>Región Llanos</li>
              <li>Región Amazónica</li>
            </ul>

            <h2 style={subtitleStyle}>Nuestra Promesa</h2>
            <p style={paragraphStyle}>
              Nos comprometemos a ofrecer servicios de seguridad adaptados a las necesidades específicas
              de cada cliente, utilizando tecnología avanzada y un enfoque proactivo para garantizar su
              bienestar y tranquilidad.
            </p>
          </div>

          <div style={imageContainerStyle}>
            <img src={MapImage} alt="Cobertura Nacional" style={imageStyle} />
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
  backgroundColor: "#f0f4f7", // Fondo claro para la sección
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

export default CoverageSection;
