import LogoIg from './../../../resources/logo-ig.svg'
import LogoFb from './../../../resources/logo-fb.svg'
import LogoX from './../../../resources/logo-x.svg'
import LogoLink from './../../../resources/logo-linkeid.svg'

const Contact = () => {
  return (
    <div className="container contact">
      <h2 className="section-title">Cómo nos encuentras</h2>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={LogoFb} alt="Facebook" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={LogoIg} alt="Instagram" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={LogoX} alt="Twitter" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={LogoLink} alt="LinkedIn" />
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

export default Contact
