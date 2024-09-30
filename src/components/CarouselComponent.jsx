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
        <li href="https://www.kwcables.com/" target="_blank" rel="noopener noreferrer">
          <img className="d-block w-100" src={publi1} alt="Imagen 1" />
        </li>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <li href="https://www.gretschguitars.com/" target="_blank" rel="noopener noreferrer">
          <img className="d-block w-100" src={publi2} alt="Imagen 2" />
        </li>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <li href="https://www.santander.com.ar/personas" target="_blank" rel="noopener noreferrer">
          <img className="d-block w-100" src={publi3} alt="Imagen 3" />
        </li>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
