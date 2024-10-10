import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Gallery1 from '../../../../resources/img/portfolio/01-large.jpg'
import Gallery2 from '.././../../../resources/img/portfolio/02-large.jpg'
import Gallery3 from '.././../../../resources/img/portfolio/03-large.jpg'
import Gallery4 from '.././../../../resources/img/portfolio/04-large.jpg'
import Gallery5 from '.././../../../resources/img/portfolio/05-large.jpg'

const ClientesCarrusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const clients = [
    { id: 1, name: "Bienestar Familiar", logo: Gallery1 },
    { id: 2, name: "Carrao Energy", logo: Gallery2 },
    { id: 3, name: "ONGC Videsh", logo: Gallery3 },
    { id: 3, name: "ONGC Videsh", logo: Gallery4 },
    { id: 4, name: "Petrolco", logo: Gallery5 },
  ];

  return (
    <div className="clientes-section section-title">
      <h2>Clientes que confían en nosotros</h2>
      <Slider {...settings}>
        {clients.map(client => (
          <div key={client.id} className="client-logo">
            <img src={client.logo} alt={client.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ClientesCarrusel;
