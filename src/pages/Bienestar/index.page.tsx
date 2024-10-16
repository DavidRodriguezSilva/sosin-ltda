import Header from "../../shared/components/Header/Header";
import Footer from "../../shared/components/Footer/Footer";
import WellnessImage from "../../resources/SobreNosotros.jpeg"; // Imagen relacionada con el bienestar organizacional

const WellnessSection = () => {
  return (
    <>
      <Header /> {/* Encabezado común en todas las páginas */}

      <section style={sectionStyle}> {/* Sección para Bienestar Organizacional */}
        <div style={containerStyle}>
          <div style={textSectionStyle}>
            <h1 style={titleStyle}>Bienestar Organizacional</h1>
            <p style={paragraphStyle}>
              En <strong>SOSIN Private Security</strong>, creemos que el bienestar de nuestro equipo es esencial para el éxito de nuestras operaciones.
              Promovemos una cultura de respeto, salud y motivación que garantiza que nuestros empleados puedan dar lo mejor de sí mismos en todo momento.
            </p>

            <h2 style={subtitleStyle}>Importancia del Bienestar</h2>
            <p style={paragraphStyle}>
              El bienestar organizacional no solo mejora la calidad de vida de nuestros empleados, sino que también potencia su desempeño en la protección de nuestros clientes.
              Contamos con programas integrales que fomentan la salud física y mental, el desarrollo profesional y un entorno laboral positivo.
            </p>

            <h2 style={subtitleStyle}>Nuestras Iniciativas</h2>
            <ul style={listStyle}>
              <li>Programas de salud y ejercicio físico</li>
              <li>Talleres de gestión del estrés</li>
              <li>Apoyo psicológico y emocional</li>
              <li>Capacitaciones continuas para el desarrollo profesional</li>
              <li>Ambiente laboral inclusivo y seguro</li>
            </ul>

            <h2 style={subtitleStyle}>Resultados</h2>
            <p style={paragraphStyle}>
              Gracias a estas iniciativas, hemos visto una mejora significativa en la satisfacción laboral, lo que se traduce en una mayor efectividad operativa y en la fidelización de nuestros clientes.
              Creemos que un equipo que se siente valorado y apoyado puede ofrecer un servicio de seguridad de primer nivel.
            </p>
          </div>

          <div style={imageContainerStyle}>
            <img src={WellnessImage} alt="Programa de bienestar" style={imageStyle} />
          </div>
        </div>
      </section>

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

export default WellnessSection;
