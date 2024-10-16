import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Gallery1 from '../../../../resources/LOGOGSR.jpg'
import Gallery2 from '.././../../../resources/LOGODIAMANTE.jpeg'
import Gallery3 from '.././../../../resources/Asset-3.webp'
import Gallery4 from '.././../../../resources/LOGO4.jpeg'
import Gallery5 from '.././../../../resources/LOGO5.png'

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
