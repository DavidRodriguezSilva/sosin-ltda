import AboutLogo from "../../../resources/about.jpg";

const About = () => {
  return (
    <div id="about" style={{ padding: "10rem" }}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6" style={{ height: "400px" }}>
            <img src={AboutLogo} className="img-responsive" alt="" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Sobre Nosotros</h2>
              <p>
                En SOSIN Private Security, somos líderes en soluciones de
                seguridad privada, comprometidos con la protección y el
                bienestar de nuestros clientes. Contamos con un robusto Sistema
                de Gestión de Seguridad y Salud en el Trabajo (SG-SST) que
                cumple estrictamente con todas las normativas legales vigentes,
                asegurando un entorno seguro y eficiente tanto para nuestros
                colaboradores como para nuestros clientes. Nuestro enfoque
                integral incluye programas de medicina laboral, higiene
                industrial y seguridad, diseñados y ejecutados con precisión
                para minimizar riesgos y garantizar la tranquilidad en todas las
                áreas donde operamos.
              </p>
              <h3>¿Por qué elegirnos?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Vigilancia física</li>
                    <li>Vigilancia electrónica</li>
                    <li>Monitoreo de cámaras</li>
                    <li>Vigilantes fijos o móviles</li>
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Escolta</li>
                    <li>Compromiso con la excelencia</li>
                    <li>Personal altamente capacitado</li>
                    <li>Soluciones tecnológicas avanzadas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
