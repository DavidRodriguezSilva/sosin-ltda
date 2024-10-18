import { Link } from "react-router-dom";
import { LayoutPage } from "../../shared/Layout/Content/LayoutPage";

const Pagina404 = () => {
  return (
    <LayoutPage>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="bg-light p-5 rounded">
          <h1 className="display-1" style={{ fontWeight: 800, fontSize: '5em' }}>404</h1>
          <h2>Página No Encontrada</h2>
          <p className="lead">Lo sentimos, la página que buscas no existe.</p>
          <Link to="/" className="custom-button btn btn-primary">
            Volver a la Página Principal
          </Link>
        </div>
      </div>
    </LayoutPage>
  );
};

export default Pagina404;
