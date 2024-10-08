import Gallery1 from "../../../resources/logoBlanco.png";
import SuperLogo from "../../../resources/bloque2564.png"; // Logo de la Superintendencia

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-content">
        {/* Columna 1: Logo de la empresa */}
        <div className="footer-column">
          <img src={Gallery1} alt="Logo Empresa" className="footer-logo" />
        </div>

        {/* Columna 2: Información de la empresa */}
        <div className="footer-column">
          <p><strong>Razón Social:</strong> SOSIN Seguridad S.A.S</p>
          <p><strong>NIT:</strong> 123.456.789-0</p>
          <p><strong>Teléfono:</strong> (1) 234 5678</p>
          <p><strong>Correo:</strong> info@sosinseguridad.com</p>
        </div>

        {/* Columna 3: Información de la oficina principal */}
        <div className="footer-column">
          <p><strong>Oficina Principal</strong></p>
          <p><strong>Celular:</strong> +57 300 123 4567</p>
          <p><strong>Dirección:</strong> Calle Falsa 123, Bogotá, Colombia</p>
          <p><strong>PBX:</strong> (1) 765 4321</p>
        </div>

        {/* Columna 4: Logo de la Superintendencia */}
        <div className="footer-column">
          <img src={SuperLogo} alt="Superintendencia de Vigilancia" className="super-logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
