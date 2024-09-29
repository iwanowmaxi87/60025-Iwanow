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
        <img src={imgLogo} alt="Logo" className="imgLogo" />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          {/* Dropdown para Guitarras & Bajos */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Guitarras & Bajos
            </a>
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

          {/* Dropdown para Audio & Sonido */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="audioSonidoDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Audio & Sonido
            </a>
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
                  Microfonos
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
        <Link to="/cart" className="nav-link">
          <FontAwesomeIcon icon={faShoppingCart} size="lg" />
          {getItemCount() > 0 && (
            <span className="cart-count">{getItemCount()}</span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
