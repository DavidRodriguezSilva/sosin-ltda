import Gallery1 from '../../../resources/foto1.jpeg'
import Gallery2 from '../../../resources/foto2.jpeg'
import Gallery3 from '../../../resources/foto3.jpg'
import Gallery4 from '../../../resources/foto4.jpg'

const TeamSection = () => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>NUESTRO EQUIPO</h2>
          <p>
            Nuestro equipo de trabajo está conformado por profesionales
            altamente capacitados y comprometidos con la excelencia
          </p>
        </div>

        {/* Fila para las fotos del equipo */}
        <div className='row'>
          <div className='col-md-3 col-sm-6 team-member'>
            <div className='thumbnail'>
              <img
                src={Gallery1}
                alt='Maelene Silva'
                className='team-img'
              />
              <div className='caption'>
                <h4>Maelene Silva</h4>
                <p>Gerente</p>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-sm-6 team-member'>
            <div className='thumbnail'>
              <img
                src={Gallery2}
                alt='Cristian Arrollo'
                className='team-img'
              />
              <div className='caption'>
                <h4>Cristian Arrollo</h4>
                <p>Director de Operaciones</p>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-sm-6 team-member'>
            <div className='thumbnail'>
              <img
                src={Gallery3}
                alt='Shearly Joya'
                className='team-img'
              />
              <div className='caption'>
                <h4>Shearly Joya</h4>
                <p>Recursos Humanos</p>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-sm-6 team-member'>
            <div className='thumbnail'>
              <img
                src={Gallery4}
                alt='Stiven Riveros'
                className='team-img'
              />
              <div className='caption'>
                <h4>Stiven Riveros</h4>
                <p>Técnico</p>
              </div>
            </div>
          </div>
        </div> {/* Cierre de la fila */}
      </div>
    </div>
  );
};

export default TeamSection;
