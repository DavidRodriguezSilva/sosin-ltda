import LogoIg from './../../../resources/logo-ig.svg'
import LogoFb from './../../../resources/logo-fb.svg'
import LogoX from './../../../resources/logo-x.svg'
import LogoLink from './../../../resources/logo-linkeid.svg'

export const Contacto = () => {
  return (
    <div className="container contacto">
      <h2 className="titulo-seccion">Cómo nos encuentras</h2>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <div className="icon-container">
            <img src={LogoFb} alt="Facebook" />
            <span>@SosinLtda</span>
          </div>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <div className="icon-container">
            <img src={LogoIg} alt="Instagram" />
            <span>@SosinLtda</span>
          </div>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <div className="icon-container">
            <img src={LogoX} alt="Twitter" />
            <span>@SosinLtda</span>
          </div>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <div className="icon-container">
            <img src={LogoLink} alt="LinkedIn" />
            <span>@SosinLtda</span>
          </div>
        </a>
      </div>
      <iframe
        title='Mapa'
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d834.5977791416225!2d-72.94044928253982!3d5.707582157758611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a45ba0782dd81%3A0xa93e1f2505340f99!2sSOSIN%20PRIVATE%20SECURITY%20LTDA!5e0!3m2!1ses!2sco!4v1728584352031!5m2!1ses!2sco"
        width="100%"
        height="450"
        style={{ border: 0, borderRadius: 20 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  )
}
