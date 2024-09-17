import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // Importa el contexto del carrito
import '../styles/SpecialOffers.css'; // Agrega tus estilos CSS

import electricImg from '../img/oferta1.jpg'; // Imagen de ejemplo
import acousticImg from '../img/ampliUno.jpg';
import bajoImg from '../img/ampliDos.jpg';
import keyboardImg from '../img/oferta4.jpg';
import bateriaImg from '../img/Auriculares/auriUno.jpg';
import accessoriosImg from '../img/oferta6.jpg';
import sistemaSonidoImg from '../img/oferta7.jpg';
import amplificadorImg from '../img/electromaticLtd.jpg';

function SpecialOffers() {
  const { addToCart } = useContext(CartContext); // Usamos el contexto del carrito

  const offers = [
    { id: 1, name: "Guitarra Eléctrica", price: "$500", description: "Potente y con gran sonido.", category: "guitarraElectric", img: electricImg },
    { id: 2, name: "Amplificador", price: "$300", description: "Perfecto para guitarra y bajo.", category: "guitarraAcoustic", img: acousticImg },
    { id: 3, name: "Amplificador", price: "$450", description: "Graves potentes y definidos.", category: "bajos", img: bajoImg },
    { id: 4, name: "Microfono", price: "$600", description: "Ideal para cualquier estilo.", category: "keyboards", img: keyboardImg },
    { id: 5, name: "Auriculares", price: "$800", description: "Sonido natural y armónico.", category: "accessorios", img: bateriaImg },
    { id: 6, name: "Sistema de Sonido", price: "$50", description: "Sonido profesional para eventos.", category: "accessorios", img: accessoriosImg },
    { id: 7, name: "Sistema de Sonido", price: "$1200", description: "Completa tu equipo.", category: "sistemaSonido", img: sistemaSonidoImg },
    { id: 8, name: "Guitarra Eléctrica", price: "$400", description: "Perfecto para guitarra y bajo.", category: "amplificador", img: amplificadorImg },
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
              <p className="price">{offer.price}</p>
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
