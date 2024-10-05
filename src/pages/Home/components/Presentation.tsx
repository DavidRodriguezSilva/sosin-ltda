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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sed commodo nibh ante
                  facilisis bibendum.
                </p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
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
