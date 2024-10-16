import Gallery1 from '../../../resources/foto1.jpeg';
import Gallery2 from '../../../resources/foto2.png';
import Gallery3 from '../../../resources/foto3.png';
import Gallery4 from '../../../resources/foto4.jpeg';

const TeamSection = () => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>NUESTRO EQUIPO</h2>
          <p>
            Nuestro equipo de trabajo está conformado por profesionales
            altamente capacitados y comprometidos con la excelencia.
          </p>
        </div>

        {/* Fila para las fotos del equipo */}
        <div className='row'>
          {[
            { src: Gallery1, name: 'Marlene Silva', position: 'Gerente' },
            { src: Gallery2, name: 'Cristian Arrollo', position: 'Director de Operaciones' },
            { src: Gallery3, name: 'Shearly Joya', position: 'Recursos Humanos' },
            { src: Gallery4, name: 'Stiven Riveros', position: 'Técnico' },
          ].map((member, index) => (
            <div key={index} className='col-md-3 col-sm-6 team-member'>
              <div className='thumbnail'>
                <img
                  src={member.src}
                  alt={member.name}
                  className='team-img'
                />
                <div className='caption'>
                  <h4>{member.name}</h4>
                  <p>{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div> {/* Cierre de la fila */}
      </div>
    </div>
  );
};

export default TeamSection;
