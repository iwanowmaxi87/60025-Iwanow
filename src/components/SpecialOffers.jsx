import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; 
import '../styles/SpecialOffers.css'; 

import microDos from '../img/oferta1.jpg';
import acousticImg from '../img/ampliUno.jpg';
import bajoImg from '../img/ampliDos.jpg';
import keyboardImg from '../img/oferta4.jpg';
import accessoriosImg from '../img/oferta6.jpg';
import sistemaSonidoImg from '../img/oferta7.jpg';
import guitarraElectrica from '../img/electromaticLtd.jpg';

function SpecialOffers() {
  const { addToCart } = useContext(CartContext); 

  const offers = [
    { id: 1, name: "Microfono", price: "$500", description: "Potente y con gran sonido.", category: "microfonos", img: microDos },
    { id: 2, name: "Amplificador", price: "$300", description: "Perfecto para guitarra y bajo.", category: "amplificadores", img: acousticImg },
    { id: 3, name: "Amplificador", price: "$450", description: "Graves potentes y definidos.", category: "amplificadores", img: bajoImg },
    { id: 4, name: "Microfono", price: "$600", description: "Ideal para cualquier estilo.", category: "microfonos", img: keyboardImg },
    { id: 5, name: "Auriculares", price: "$800", description: "Sonido natural y armónico.", category: "auriculares", img: 'https://bairesrocks.vteximg.com.br/arquivos/ids/228100/main_c5f56c81.jpg?v=637606025524500000' },
    { id: 6, name: "Sistema de Sonido", price: "$5000", description: "Sonido profesional para eventos.", category: "consolas", img: accessoriosImg },
    { id: 7, name: "Sistema de Sonido", price: "$1200", description: "Completa tu equipo.", category: "controladores", img: sistemaSonidoImg },
    { id: 8, name: "Guitarra Eléctrica", price: "$400", description: "Perfecto para guitarra y bajo.", category: "guitarraElectrica", img: guitarraElectrica },
  ];

  const handleAddToCart = (offer) => {
    // Aquí llamamos a la función para agregar al carrito
    addToCart(offer);
  };

  return (
    <div className="special-offers">
      <h1>Ofertas Especiales</h1>
      <div className="offer-grid">
        {offers.map((offer) => (
          <div key={offer.id} className="offer-item">
            <Link to={`/category/${offer.category}`}>
              <img src={offer.img} alt={offer.name} className="offer-img" />
              <h4>{offer.name}</h4>
              <p>{offer.description}</p>
              <p className="priceSpecialOfferts">{offer.price}</p>
            </Link>
            <button className="add-to-cart" onClick={() => handleAddToCart(offer)}>
              Agregar al Carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpecialOffers;
