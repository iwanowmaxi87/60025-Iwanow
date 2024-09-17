import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Primera columna: Dirección */}
          <div className="col-md-3">
            <h5>Dirección</h5>
            <ul className="footer-links">
              <li><a href="https://www.google.com/maps/place/123+Main+St,+Your+City,+Country" target="_blank" rel="noopener noreferrer">123 Sin Nombre Av</a></li>
              <li><a href="mailto:info@example.com">info@example.com</a></li>
              <li><a href="tel:+123456789">+123 456 789</a></li>
            </ul>
          </div>
          
          {/* Segunda columna: Atención al cliente */}
          <div className="col-md-3">
            <h5>Atención al Cliente</h5>
            <ul className="footer-links">
              <li><Link to="/contact">Contacto</Link></li>
              <li><Link to="/faq">Preguntas Frecuentes</Link></li>
              <li><Link to="/returns">Devoluciones</Link></li>
            </ul>
          </div>
          
          {/* Tercera columna: Redes Sociales */}
          <div className="col-md-3">
            <h5>Redes Sociales</h5>
            <ul className="footer-links">
              <li>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} /> Facebook
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} /> Twitter
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} /> Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Cuarta columna: Login y Suscribirse */}
          <div className="col-md-3">
            <h5>Acceso y Suscripción</h5>
            <ul className="footer-links">
              <li><Link to="/login">Iniciar Sesión</Link></li>
              <li><Link to="/signup">Registrarse</Link></li>
              <li><a href="#subscribe">Suscribirse al boletín</a></li>
            </ul>
            <form className="subscribe-form">
              <input 
                type="email" 
                placeholder="Correo electrónico" 
                className="subscribe-input"
              />
              <button type="submit" className="subscribe-button">Suscribirse</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

