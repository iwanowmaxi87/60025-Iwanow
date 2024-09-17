import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../styles/Cart.css';

function Cart() {
  const { cart, calculateTotal, clearCart, removeFromCart, updateItemQuantity, getItemCount } = useContext(CartContext);
  const navigate = useNavigate();

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity > 0) {
      updateItemQuantity(itemId, newQuantity);
    }
  };

  const handlePurchase = () => {
    alert('Gracias por tu compra!');
    clearCart();
    navigate('/confirmation');
  };

  return (
    <div className="container">
      <h1>Tu carrito</h1>
      <div className="cart-summary">
        <h3>Items en el carrito: {getItemCount()}</h3>
      </div>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          <ul className="list-group">
            {cart.map((item, index) => (
              <li key={index} className="list-group-item d-flex align-items-center">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h5>{item.name}</h5>
                  <p>Precio: ${item.price}</p>
                  <div className="quantity-selector">
                    <label>Cantidad:</label>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    />
                  </div>
                </div>
                <button
                  className="btn btn-danger btn-sm ml-auto"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <div className="total-section">
            <h3>Total: ${calculateTotal()}</h3>
            <button className="btn btn-primary" onClick={handlePurchase}>
              Comprar
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
