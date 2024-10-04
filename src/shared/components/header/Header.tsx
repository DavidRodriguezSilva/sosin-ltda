const Header = () => {
  return (
    <header id="header" className="header-top-fixed">
      <div className="full-screen-block">
        <div className="header-body header-body-fixed" id="header-body-fixed">
          <div id="container-fixed">
            <nav className="navbar navbar-default navbar-expand-md">
              <div className="navbar-header">
                <a className="header-logo">
                  <span></span>
                  <img src={require("./../../../resources/SOSIN 1.0.png")} alt="logo"
                  />
                </a>
                <button
                  type="button"
                  className="navbar-toggle"
                  data-bs-toggle="collapse"
                  data-bs-target="#bs-example-navbar-collapse-1"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div
                className="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
              >
                <ul className="nav navbar-nav navbar-right menu-item-5" id="navbar-full">
                  <li className="current home">
                    <span className="bg-icon">1</span>
                    <span className="rotated-title effect">Home</span>
                    <a className="link-item">Home</a>
                  </li>
                  <li className="about">
                    <span className="bg-icon">2</span>
                    <span className="rotated-title effect">About</span>
                    <a className="link-item">About</a>
                  </li>
                  <li className="service">
                    <span className="bg-icon">3</span>
                    <span className="rotated-title effect">Services</span>
                    <a className="link-item">Service</a>
                  </li>
                  <li className="work">
                    <span className="bg-icon">4</span>
                    <span className="rotated-title effect">Works</span>
                    <a className="link-item">Works</a>
                  </li>
                  <li className="contact">
                    <span className="bg-icon">5</span>
                    <span className="rotated-title effect">Contact</span>
                    <a className="link-item">Contact</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;