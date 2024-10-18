import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from '../../../resources/logo.png'

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
        const offset = 100;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    } else {
      if (sectionId === 'presentacion') {
        sectionId = ""
      }
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
        <div className='header-body'>
          <div id='container-fixed'>
            <nav className='navbar navbar-default'>
              <div className='navbar-header'>
                <Link className='header-logo' to={'/'} onClick={(event) => handleScroll(event, 'presentacion')}>
                  <img
                    src={Logo}
                    alt='logo'
                  />
                </Link>
              </div>
              <ul
                className='nav navbar-nav menu-item-5'>
                <li>
                  <Link className='link-item' to='#about-us' onClick={(event) => handleScroll(event, 'about-us')}>
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link className='link-item' to='#our-work' onClick={(event) => handleScroll(event, 'our-work')}>
                    Nuestro Trabajo
                  </Link>
                </li>
                <li>
                  <Link className='link-item' to='#services' onClick={(event) => handleScroll(event, 'services')}>
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link className='link-item' to='#contact' onClick={(event) => handleScroll(event, 'contact')}>
                    Contacto
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
