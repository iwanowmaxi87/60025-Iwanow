import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../styles/OfferCarousel.css';

function CarouselComponent() {
  return (
    <div className="ofertaCarousel">
      <Link to="/special-offers">
        <h2 className="ofertaTitulo">Ofertas Especiales</h2>
      </Link>
      <Carousel className='offCarousel'>
        {/* Primer Slide con 4 imágenes */}
        <Carousel.Item className='itemCarousel'>
          <div className="row justify-content-center">
            <div className="col-md-3">
              <Link to="/item/1"> 
                <img className="ofertImgUno" src="https://i0.wp.com/kemuelmusica.com/wp-content/uploads/2020/Shure/SHURE_SM7B_02.jpg?fit=1200%2C1200&ssl=1" alt="Accesorios" />
                <div className="ofertDetails">
                  <h4>Micrófono Dinámico Cardioide XLR Grabación/Radio/TV Shure SM7B</h4>
                  <p>una reproducción excepcionalmente limpia y natural de la música y la palabra.</p>
                  <p className="price">$50000</p>
                </div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/item/8"> 
                <img className="ofertImgDos" src="https://i0.wp.com/kemuelmusica.com/wp-content/uploads/2020/EHX/EHX_SILENCER_08.jpg?fit=1200%2C1200&ssl=1" alt="Amplificador" />
                <div className="ofertDetails">
                  <h4>Noise Gate compuerta ruido ELECTRO HARMONIX SILENCER</h4>
                  <p>Para guitarra eléctrica / bajo</p>
                  <p className="price">$47000</p>
                </div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/item/7"> 
                <img className="ofertImgTres" src="https://i0.wp.com/kemuelmusica.com/wp-content/uploads/2020/VOX/VOX_VT20X_08.jpg?fit=1200%2C1200&ssl=1" alt="Amplificador" />
                <div className="ofertDetails">
                  <h4>Amplificador Guitarra Eléctrica 20 Watts 1X8 Híbrido Vox VT20X</h4>
                  <p>Amplificador Eléctrica Combo 1X8 20W Híbrido (Valvular y Transitor)</p>
                  <p className="price">$45000</p>
                </div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/item/4"> 
                <img className="ofertImgCuatro" src="https://bairesrocks.vteximg.com.br/arquivos/ids/238385/Cable_kcw_Tecnica-02.jpg?v=637955263947600000" alt="Accesorios" />
                <div className="ofertDetails">
                  <h4>Guitarra Electrica PRS J2RJ SE Silver Sky Dragon</h4>
                  <p>Esta guitarra proporciona un amplio tono y capacidad de ejecución.</p>
                  <p className="price">$36000</p>
                </div>
              </Link>
            </div>
          </div>
        </Carousel.Item>

        {/* Segundo Slide con 4 imágenes */}
        <Carousel.Item className='itemCarousel'>
          <div className="row justify-content-center">
            <div className="col-md-3">
              <Link to="/item/5"> 
                <img className="ofertImgCinco" src="https://i0.wp.com/kemuelmusica.com/wp-content/uploads/2020/MARSHALL/MARSHALL_MG101CFX_01.jpg?fit=1200%2C1200&ssl=1" alt="Accesorios" />
                <div className="ofertDetails">
                  <h4>Amplificador 100W Marshall MG101CFX</h4>
                  <p>Para ritmos contundentes.</p>
                  <p className="price">$80000</p>
                </div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/item/6"> 
                <img className="ofertImgSeis" src="https://bairesrocks.vteximg.com.br/arquivos/ids/243124/Guitarra_Transacustica_Tecnica-02.jpg?v=638339509819330000" alt="Accesorios" />
                <div className="ofertDetails">
                  <h4>Pack Streaming Yamaha AG03MK2BLSPK Consola Mic Auris</h4>
                  <p>Mezclador de transmisión en vivo de 3 canales.</p>
                  <p className="price">$35000</p>
                </div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/item/7"> 
                <img className="ofertImgSiete" src="https://bairesrocks.vteximg.com.br/arquivos/ids/244812/0144503506_gtr_frt_001_rr.jpg?v=638497561663900000" alt="Accesorios" />
                <div className="ofertDetails">
                  <h4>Guitarra Eléctrica Fender Player Stratocaster </h4>
                  <p>El sonido inspirador de una Stratocaster es uno de los fundamentos de Fender</p>
                  <p className="price">$12000</p>
                </div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/item/11"> 
                <img className="ofertImgOcho" src="https://i0.wp.com/kemuelmusica.com/wp-content/uploads/2020/Ross/ROSS_AC25C-90.jpg?fit=1200%2C1200&ssl=1" alt="amplificador" />
                <div className="ofertDetails">
                  <h4>Amplificador multipropósito ROSS A25C</h4>
                  <p>Ideal para cualquier estilo.</p>
                  <p className="price">$40000</p>
                </div>
              </Link>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
