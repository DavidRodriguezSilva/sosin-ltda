import Gallery1 from "../../../resources/img/portfolio/01-large.jpg"
import Gallery10 from "../../../resources/img/portfolio/01-small.jpg"
import Gallery2 from "./../../../resources/img/portfolio/02-large.jpg"
import Gallery20 from "./../../../resources/img/portfolio/02-small.jpg"
import Gallery3 from "./../../../resources/img/portfolio/03-large.jpg"
import Gallery30 from "./../../../resources/img/portfolio/03-small.jpg"
import Gallery4 from "./../../../resources/img/portfolio/04-large.jpg"
import Gallery40 from "./../../../resources/img/portfolio/04-small.jpg"
import Gallery5 from "./../../../resources/img/portfolio/05-large.jpg"
import Gallery50 from "./../../../resources/img/portfolio/05-small.jpg"
import Gallery6 from "./../../../resources/img/portfolio/06-large.jpg"
import Gallery60 from "./../../../resources/img/portfolio/06-small.jpg"
import Gallery7 from "./../../../resources/img/portfolio/07-large.jpg"
import Gallery70 from "./../../../resources/img/portfolio/07-small.jpg"
import Gallery8 from "./../../../resources/img/portfolio/08-large.jpg"
import Gallery80 from "./../../../resources/img/portfolio/08-small.jpg"
import Gallery9 from "./../../../resources/img/portfolio/09-large.jpg"
import Gallery90 from "./../../../resources/img/portfolio/09-small.jpg"


const Gallery = () => {
    return (
      <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a
                    href={Gallery1}
                    title="Project Title"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Lorem Ipsum</h4>
                    </div>
                    <img
                      src={Gallery10}
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a
                    href={Gallery2}
                    title="Project Title"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Adipiscing Elit</h4>
                    </div>
                    <img
                      src={Gallery20}
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a
                    href={Gallery3}
                    title="Project Title"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Lorem Ipsum</h4>
                    </div>
                    <img
                      src={Gallery30}
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a
                    href={Gallery4}
                    title="Project Title"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Lorem Ipsum</h4>
                    </div>
                    <img
                      src={Gallery40}
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a
                    href={Gallery5}
                    title="Project Title"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Adipiscing Elit</h4>
                    </div>
                    <img
                      src={Gallery50}
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a
                    href={Gallery6}
                    title="Project Title"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Dolor Sit</h4>
                    </div>
                    <img
                      src={Gallery60}
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a
                    href={Gallery7}
                    title="Project Title"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Dolor Sit</h4>
                    </div>
                    <img
                      src={Gallery70}
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a
                    href={Gallery8}
                    title="Project Title"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Lorem Ipsum</h4>
                    </div>
                    <img
                      src={Gallery80}
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a
                    href={Gallery9}
                    title="Project Title"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Adipiscing Elit</h4>
                    </div>
                    <img
                      src={Gallery90}
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Gallery 