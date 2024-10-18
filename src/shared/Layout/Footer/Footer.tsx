import Gallery1 from "../../../resources/logoBlanco.png"
import SuperLogo from "../../../resources/bloque2564.png"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row text-center text-md-start" style={{ display: 'flex', alignItems: 'center' }}>
          <div className="col-12 col-md-4 footer-logo">
            <img src={Gallery1} alt="Logo Empresa" className="footer-logo img-fluid" />
          </div>
          <div className="col-12 col-md-4 footer-column text-center">
            <p><strong>SOSIN PRIVATE SECURITY LTDA</strong></p>
            <p><strong>NIT.</strong> 901568575 - 1</p>
            <p><strong>Teléfono</strong> (1) 234 5678</p>
            <p><strong>Correo</strong> info@sosinseguridad.com</p>
          </div>
          <div className="col-12 col-md-4 footer-logo super">
            <img src={SuperLogo} alt="Superintendencia de Vigilancia" className="img-fluid" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
