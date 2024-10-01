// src/components/NavBar.jsx
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../styles/NavBar.css'; 
import imgLogo from '../img/logo.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  const { getItemCount } = useContext(CartContext); 
  const [darkMode, setDarkMode] = useState(false);

  // Función para alternar entre el modo claro y oscuro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode'); 
  };

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} shadow-sm`}>
      <Link to="/" className="navbar-brand">
        <img src={imgLogo} alt="Logo de la Empresa" className="imgLogo" />
      </Link>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          
          <li className="nav-item dropdown">
            
          <button
  className="nav-link dropdown-toggle dropdown-toggle-btn"
  id="navbarDropdown"
  role="button"
  data-bs-toggle="dropdown"
  aria-expanded="false"
>
              Guitarras & Bajos
            </button>
            <ul className="dropdown-menu shadow-lg rounded" aria-labelledby="navbarDropdown">
              <li>
                <Link className="dropdown-item" to="/category/guitarraElectrica">
                  Guitarras Eléctricas
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/category/guitarraAcustica">
                  Guitarras Acústicas
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/category/bajo">
                  Bajos
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/category/accesorios">
                  Accesorios
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/category/pedales">
                  Pedales
                </Link>
              </li>
            </ul>
          </li>

          
          <li className="nav-item dropdown">
            
          <button
  className="nav-link dropdown-toggle dropdown-toggle-btn"
  id="navbarDropdown"
  role="button"
  data-bs-toggle="dropdown"
  aria-expanded="false"
>
              Audio & Sonido
            </button>
            <ul className="dropdown-menu shadow-lg rounded" aria-labelledby="audioSonidoDropdown">
              <li>
                <Link className="dropdown-item" to="/category/amplificadores">
                  Amplificadores
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/category/auriculares">
                  Auriculares
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/category/controladores">
                  Controladores
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/category/consolas">
                  Consolas
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/category/microfonos">
                  Micrófonos
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link to="/category/baterias" className="nav-link">Baterías Acústicas</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">Sobre Nosotros</Link>
          </li>
        </ul>
        <button className="btn btn-outline-secondary mr-2" onClick={toggleDarkMode}>
          {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
        <Link to="/cart" className="nav-link position-relative">
          <FontAwesomeIcon icon={faShoppingCart} size="lg" />
          {getItemCount() > 0 && (
            <span className="cart-count position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {getItemCount()}
              <span className="visually-hidden">items en el carrito</span>
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;

