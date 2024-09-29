import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../styles/Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faWallet, faUniversity } from '@fortawesome/free-solid-svg-icons';

function Cart() {
  const { cart, calculateTotal, clearCart, removeFromCart, updateItemQuantity, getItemCount } = useContext(CartContext);
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentData, setPaymentData] = useState({});
  const [paymentStep, setPaymentStep] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null); 

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity > 0) {
      updateItemQuantity(itemId, newQuantity);
    }
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
    setPaymentStep(true);
  };

  const handlePaymentDataChange = (event) => {
    const { name, value } = event.target;
    setPaymentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const generateOrderNumber = () => {
    
    const timestamp = new Date().getTime(); 
    const randomPart = Math.floor(Math.random() * 10000); 
    return `ORD-${timestamp}-${randomPart}`; 
  };

  const handlePurchase = () => {
    if (!paymentMethod || Object.keys(paymentData).length === 0) {
      alert('Por favor, selecciona un método de pago y completa los datos.');
      return;
    }

    const newOrderNumber = generateOrderNumber(); 
    setOrderNumber(newOrderNumber);

    
    clearCart();
    navigate('/confirmation', { state: { orderNumber: newOrderNumber } }); 
  };

  return (
    <div className="containerCart">
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

            {/* Selección de método de pago */}
            <div className="payment-section">
              <h4>Selecciona un método de pago:</h4>
              <select value={paymentMethod} onChange={handlePaymentMethodChange}>
                <option value="">Selecciona un método</option>
                <option value="creditCard">
                  <FontAwesomeIcon icon={faCreditCard} /> Tarjeta de Crédito
                </option>
                <option value="mercadoPago">
                  <FontAwesomeIcon icon={faWallet} /> Mercado Pago
                </option>
                <option value="bankTransfer">
                  <FontAwesomeIcon icon={faUniversity} /> Transferencia Bancaria
                </option>
              </select>
            </div>

            {/* formulario método de pago */}
            {paymentStep && (
              <div className="payment-details">
                {paymentMethod === 'creditCard' && (
                  <div>
                    <h4>Datos de la Tarjeta de Crédito</h4>
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Número de tarjeta"
                      onChange={handlePaymentDataChange}
                    />
                    <input
                      type="text"
                      name="expiryDate"
                      placeholder="Fecha de vencimiento"
                      onChange={handlePaymentDataChange}
                    />
                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                      onChange={handlePaymentDataChange}
                    />
                  </div>
                )}
                {paymentMethod === 'mercadoPago' && (
                  <div>
                    <h4>Datos de Mercado Pago</h4>
                    <input
                      type="email"
                      name="mercadopagoEmail"
                      placeholder="Email de Mercado Pago"
                      onChange={handlePaymentDataChange}
                    />
                  </div>
                )}
                {paymentMethod === 'bankTransfer' && (
                  <div>
                    <h4>Datos de la Transferencia Bancaria</h4>
                    <input
                      type="text"
                      name="accountNumber"
                      placeholder="Número de cuenta"
                      onChange={handlePaymentDataChange}
                    />
                    <input
                      type="text"
                      name="bankName"
                      placeholder="Nombre del banco"
                      onChange={handlePaymentDataChange}
                    />
                  </div>
                )}
              </div>
            )}

            <div className="checkout-buttons">
              <button className="btnComprar" onClick={handlePurchase}>
                Comprar
              </button>
            </div>

            {/* número de orden */}
            {orderNumber && (
              <div className="order-confirmation">
                <h3>Tu número de compra: {orderNumber}</h3>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
