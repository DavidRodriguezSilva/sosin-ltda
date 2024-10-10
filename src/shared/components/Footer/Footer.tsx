import Gallery1 from "../../../resources/logoBlanco.png";
import SuperLogo from "../../../resources/bloque2564.png"; // Logo de la Superintendencia

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container footer-content">
        <div className="row text-center text-md-start">
          {/* Columna 1: Logo de la empresa */}
          <div className="col-12 col-md-3 footer-logo">
            <img src={Gallery1} alt="Logo Empresa" className="footer-logo img-fluid" />
          </div>

          {/* Columna 2: Información de la empresa */}
          <div className="col-12 col-md-3 footer-column">
            <p><strong>SOSIN Seguridad S.A.S</strong></p>
            <p><strong>NIT:</strong> 123.456.789-0</p>
            <p><strong>Teléfono:</strong> (1) 234 5678</p>
            <p><strong>Correo:</strong> info@sosinseguridad.com</p>
          </div>

          {/* Columna 3: Información de la oficina principal */}
          <div className="col-12 col-md-3 footer-column">
            <p><strong>Oficina Principal</strong></p>
            <p><strong>Celular:</strong> +57 300 123 4567</p>
            <p><strong>Dirección:</strong> Calle Falsa 123, Bogotá, Colombia</p>
            <p><strong>PBX:</strong> (1) 765 4321</p>
          </div>

          {/* Columna 4: Logo de la Superintendencia */}
          <div className="col-12 col-md-3 footer-logo super">
            <img src={SuperLogo} alt="Superintendencia de Vigilancia" className="img-fluid" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
