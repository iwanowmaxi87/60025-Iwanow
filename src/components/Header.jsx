import React from 'react';
import { useLocation } from 'react-router-dom';
import homeImg from '../img/home.jpg';
import catalogImg from '../img/bajoHeader.jpg';
import productImg from '../img/product.jpg';
import cartImg from '../img/cart.jpg';
import confirmationImg from '../img/confirmation.jpg';
import homeAboutImg from '../img/about.jpg';
import acusticBateriaImg from '../img/bateriaHeader.jpg';
import guitarraAcusticaImg from '../img/acusticHeader.jpg';
import guitarraElectricaImg from '../img/guitarHeader.jpg';
import ampliImg from '../img/ampliHeader.jpg';
import '../styles/Header.css'; 

function Header() {
  const location = useLocation();

  const getImageForPage = () => {
    if (location.pathname === '/') {
      return homeImg;
    } 
    if (location.pathname.startsWith('/category')) {
      // Verifica la categoría actual para determinar la imagen adecuada
      if (location.pathname.includes('baterias')) {
        return acusticBateriaImg; 
      }
      if (location.pathname.includes('guitarraAcustica')) {
        return guitarraAcusticaImg; 
      }
      if (location.pathname.includes('bajo')) {
        return catalogImg; 
      }
      if (location.pathname.includes('guitarraElectrica')) {
        return guitarraElectricaImg; 
      }
      if (location.pathname.includes('amplificadores')) {
        return ampliImg; 
      }

      return catalogImg; 
    }
    if (location.pathname.startsWith('/item')) {
      return productImg;
    }
    if (location.pathname === '/cart') {
      return cartImg;
    }
    if (location.pathname === '/confirmation') {
      return confirmationImg;
    }
    // Ruta no cubierta previamente
    return homeAboutImg;
  };

  return (
    <div className="header">
      <img 
        src={getImageForPage()} 
        alt="Header" 
        className="header-image" 
      />
    </div>
  );
}

export default Header;
