import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../CartWidget.css';

function CartWidget() {
  const { cart } = useContext(CartContext);

  // Calcular la cantidad total de items en el carrito
  const totalItems = cart.reduce((acc, item) => acc+ 1, 0);

  return (
    <div className="cart-widget">
      <Link to="/cart">
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        {totalItems > 0 && (
          <span className="cart-count">{totalItems}</span>
        )}
      </Link>
    </div>
  );
}

export default CartWidget;
