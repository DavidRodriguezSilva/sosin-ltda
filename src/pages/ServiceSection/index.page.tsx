import Header from "../../shared/components/Header/Header";
import Footer from "../../shared/components/Footer/Footer";
import Image1 from "../../resources/Guarda1.png";
import Image2 from "../../resources/Guarda1.png";
import Image3 from "../../resources/Guarda1.png";
import Image4 from "../../resources/Guarda1.png";
import Image5 from "../../resources/Guarda1.png";
import Image6 from "../../resources/Guarda1.png";

const ServiceSection = () => {
  return (
    <>
      <Header /> {/* Encabezado común en todas las páginas */}

      <div style={{ padding: "2rem" }}>
        <h1>Nuestros Servicios</h1>
        <p>Aquí van los servicios que tenemos</p>

        {/* Contenedor de tarjetas */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "space-between" }}>

          {/* Tarjeta 1 */}
          <div style={cardStyle}>
            <img src={Image1} alt="Servicio 1" style={imageStyle} />
            <h3>Servicio 1</h3>
            <p>Descripción del servicio 1.</p>
          </div>

          {/* Tarjeta 2 */}
          <div style={cardStyle}>
            <img src={Image2} alt="Servicio 2" style={imageStyle} />
            <h3>Servicio 2</h3>
            <p>Descripción del servicio 2.</p>
          </div>

          {/* Tarjeta 3 */}
          <div style={cardStyle}>
            <img src={Image3} alt="Servicio 3" style={imageStyle} />
            <h3>Servicio 3</h3>
            <p>Descripción del servicio 3.</p>
          </div>

          {/* Tarjeta 4 */}
          <div style={cardStyle}>
            <img src={Image4} alt="Servicio 4" style={imageStyle} />
            <h3>Servicio 4</h3>
            <p>Descripción del servicio 4.</p>
          </div>

          {/* Tarjeta 5 */}
          <div style={cardStyle}>
            <img src={Image5} alt="Servicio 5" style={imageStyle} />
            <h3>Servicio 5</h3>
            <p>Descripción del servicio 5.</p>
          </div>

          {/* Tarjeta 6 */}
          <div style={cardStyle}>
            <img src={Image6} alt="Servicio 6" style={imageStyle} />
            <h3>Servicio 6</h3>
            <p>Descripción del servicio 6.</p>
          </div>

        </div>
      </div>

      <Footer /> {/* Pie de página común en todas las páginas */}
    </>
  );
};

// Estilos para la tarjeta
const cardStyle: React.CSSProperties = {
  width: "30%", // Ancho de cada tarjeta
  padding: "1rem",
  border: "1px solid #ccc",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  textAlign: "center" as "center", // Especificar que es de tipo TextAlign
  backgroundColor: "#fff"
};

// Estilos para la imagen dentro de la tarjeta
const imageStyle: React.CSSProperties = {
  width: "100%", // Asegura que la imagen ocupe todo el ancho disponible
  height: "auto",
  borderRadius: "8px 8px 0 0"
};

export default ServiceSection;
