import { useEffect } from "react";

export const Cifras = () => {
  useEffect(() => {
    // Lógica para los contadores
    const counters = document.querySelectorAll('.count');
    const speed = 10000; // Mayor número para que el contador sea más lento

    const updateCount = (counter: Element) => {
      // Obtener el atributo data-count y el contenido de texto
      const targetAttr = counter.getAttribute('data-count');
      const textContent = counter.textContent;

      // Comprobar si targetAttr y textContent no son nulos
      if (targetAttr !== null && textContent !== null) {
        const target = +targetAttr;
        const count = +textContent;

        const increment = target / speed;

        if (count < target) {
          counter.textContent = Math.ceil(count + increment).toString();
          setTimeout(() => updateCount(counter), 50); // Aumenté el tiempo para que sea más lento
        } else {
          counter.textContent = target.toString();
        }
      } else {
        console.error("Error: data-count o textContent es nulo.");
      }
    };

    const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          counters.forEach((counter) => {
            updateCount(counter);
          });
          observer.disconnect(); // Detener la observación una vez que los contadores han empezado
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // El 50% del contenedor debe estar visible para que se inicie
    });

    const statsSection = document.getElementById('stats');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection); // Limpiar la observación cuando el componente se desmonte
      }
    };
  }, []);

  return (
    <div id='stats' className='text-center stats-section'>
      <div className='container'>
        <div className='section-title'>
          <h3 className="subtitulo-seccion">Nuestro potencial en cifras</h3>
        </div>
        <div className='row'>
          <div className='col-12 col-md-3'>
            <i className='fa fa-user'></i>
            <h3>
              <span className='count' data-count='4'>0</span>
            </h3>
            <p>Cobertura en múltiples regiones</p>
          </div>
          <div className='col-12 col-md-3'>
            <i className='fa fa-heart'></i>
            <h3>
              <span className='count' data-count='70'>0</span>+
            </h3>
            <p>Equipo de profesionales expertos</p>
          </div>
          <div className='col-12 col-md-3'>
            <i className='fa fa-anchor'></i>
            <h3>
              <span className='count' data-count='20'>0</span>+
            </h3>
            <p>Clientes que confían en nosotros</p>
          </div>
          <div className='col-12 col-md-3'>
            <i className='fa fa-user'></i>
            <h3>
              <span className='count' data-count='110'>0</span>
            </h3>
            <p>Puntos de vigilancia estratégicos</p>
          </div>
        </div>
      </div>
    </div>
  )
}
