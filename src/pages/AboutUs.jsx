import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../img/about1.jpg';
import img2 from '../img/about2.jpg';
import img3 from '../img/about3.jpg';
import '../styles/AboutUs.css'; 

function AboutUs() {
  return (
    <div className="aboutUsContainer">
      <h2>Sobre Nosotros</h2>
      <p>
        En Guitar House, nos apasiona la música. Llevamos años proporcionando a nuestros clientes
        las mejores guitarras y equipos para que puedan crear sonidos increíbles. Nuestro equipo
        está formado por músicos y entusiastas que conocen la importancia de un buen instrumento.
      </p>
      
      <Carousel className='aboutCarousel'>
        <Carousel.Item className='aboutItem'>
          <img className="d-block w-100" src={img1} alt="Primer img" />
          <Carousel.Caption className='aboutCaption'>
            <h3>Nuestra Historia</h3>
            <p>Desde 1990, Guitar House ha estado a la vanguardia de la música.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='aboutItem'>
          <img className="d-block w-100" src={img2} alt="Segunda img" />
          <Carousel.Caption className='aboutCaption'>
            <h3>Instrumentos de Calidad</h3>
            <p>Ofrecemos una amplia gama de guitarras y accesorios.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='aboutItem'>
          <img className="d-block w-100" src={img3} alt="Tercera img" />
          <Carousel.Caption className='aboutCaption'>
            <h3>Comprometidos con la Música</h3>
            <p>Estamos dedicados a ayudar a nuestros clientes a alcanzar sus sueños musicales.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default AboutUs;
