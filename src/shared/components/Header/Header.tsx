import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string
  ) => {
    event.preventDefault();

    // Si la ruta actual es "/", hacemos scroll; si no, redirigimos
    if (location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        const offset = 50;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    } else {
      navigate(`/${sectionId}`);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }
  return (
    <header id='header' className='header-top-fixed'>
      <div className='full-screen-block'>
        <div className='header-body header-body-fixed' id='header-body-fixed'>
          <div id='container-fixed'>
            <nav className='navbar navbar-default navbar-expand-md'>
              <div className='navbar-header'>
                <a className='header-logo' href='/'>
                  <img
                    src={require('./../../../resources/logo.png')}
                    alt='logo'
                    style={{
                      width: '13vw',
                      height: '6vh',
                      objectFit: 'contain',
                      objectPosition: 'center',
                    }}
                  />
                </a>
                <button
                  type='button'
                  className='navbar-toggle'
                  data-bs-toggle='collapse'
                  data-bs-target='#bs-example-navbar-collapse-1'
                  aria-controls='navbarNav'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <span className='icon-bar'></span>
                  <span className='icon-bar'></span>
                  <span className='icon-bar'></span>
                  <span className='icon-bar'></span>
                </button>
              </div>
              <div
                className='collapse navbar-collapse'
                id='bs-example-navbar-collapse-1'
              >
                <ul
                  className='nav navbar-nav navbar-right menu-item-5'
                  id='navbar-full'
                >
                  <li className='about'>
                    <span className='rotated-title effect'>Sobre Nosotros</span>
                    <a
                      className='link-item'
                      href='#about'
                      onClick={(event) => handleScroll(event, 'about')}
                    >
                      Sobre Nosotros
                    </a>
                  </li>
                  <li className='work'>
                    <span className='rotated-title effect'>
                      Nuestro Trabajo
                    </span>
                    <a
                      className='link-item'
                      href='#testimonials'
                      onClick={(event) => handleScroll(event, 'work')}
                    >
                      Nuestro Trabajo
                    </a>
                  </li>
                  <li className='service'>
                    <span className='rotated-title effect'>Servicios</span>
                    <a
                      className='link-item'
                      href='#services'
                      onClick={(event) => handleScroll(event, 'services')}
                    >
                      Servicios
                    </a>
                  </li>
                  <li className='contact'>
                    <span className='rotated-title effect'>Cotización</span>
                    <a
                      className='link-item'
                      href='#contact'
                      onClick={(event) => handleScroll(event, 'contact')}
                    >
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
