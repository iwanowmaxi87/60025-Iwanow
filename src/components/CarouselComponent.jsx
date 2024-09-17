import React from 'react';
import { Carousel } from 'react-bootstrap';
import publi1 from '../img/img1.jpg';
import publi2 from '../img/img2.jpg';
import publi3 from '../img/img3.jpg';
import '../styles/CarouselComponent.css';

function CarouselComponent() {
  return (
    <Carousel className="customCarousel">
      <Carousel.Item>
        <a href="https://www.kwcables.com/" target="_blank" rel="noopener noreferrer">
          <img className="d-block w-100" src={publi1} alt="Imagen 1" />
        </a>
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <a href="https://www.gretschguitars.com/" target="_blank" rel="noopener noreferrer">
          <img className="d-block w-100" src={publi2} alt="Imagen 2" />
        </a>
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <a href="https://www.santander.com.ar/personas" target="_blank" rel="noopener noreferrer">
          <img className="d-block w-100" src={publi3} alt="Imagen 3" />
        </a>
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
