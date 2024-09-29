import React from 'react';
import { useLocation } from 'react-router-dom'; 

function Confirmation() {
  const location = useLocation(); 
  const orderNumber = location.state?.orderNumber; 

  return (
    <div className="container">
      <h1>¡Compra Exitosa!</h1>
      <p>Gracias por tu compra. Te enviaremos un correo con los detalles.</p>
      {orderNumber && (
        <p><strong>Tu número de orden es:</strong> {orderNumber}</p>
      )}
    </div>
  );
}

export default Confirmation;
