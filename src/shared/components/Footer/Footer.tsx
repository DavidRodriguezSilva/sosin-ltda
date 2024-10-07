import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si'; // Icono de TikTok de Simple Icons
import Gallery1 from "../../../resources/logoNegro.png";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-content">
        <div className="footer-left">
          {/* Logo en el lado izquierdo */}
          <img src={Gallery1} alt="Logo" className="footer-logo" />
          <div className="footer-text">
            <p>&copy; 2024 Interact. Design by 
              <a href="http://www.RETDR.com" rel="nofollow"> Daniel Rodriguez</a>
            </p>
            <div className="footer-links">
              <a href="#">Privacy Notice</a> | 
              <a href="#">Cookie Policy</a> | 
              <a href="#">Security Policy</a>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <a href="https://www.facebook.com"><FaFacebook /></a>
          <a href="https://www.instagram.com/sosin.seguridad/"><FaInstagram /></a>
          <a href="https://www.tiktok.com"><SiTiktok /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
