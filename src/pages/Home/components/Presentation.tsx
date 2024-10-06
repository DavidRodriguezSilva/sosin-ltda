const Presentation = () => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row" style={{ height: "100vh" }}>
              <div className="intro-text presentation">
                <h1>SOSIN</h1>
                <p style={{ padding: 0 }}>
                Somos una empresa colombiana de seguridad
            privada que se compromete con la protección y promoción de la salud
            de todos los involucrados en sus operaciones,
                </p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  leer mas...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Presentation
