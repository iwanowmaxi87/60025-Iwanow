

import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
      if (existingItemIndex > -1) {
        
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + item.quantity
        };
        return updatedCart;
      } else {
        
        return [...prevCart, item];
      }
    });
  };

  const updateItemQuantity = (itemId, newQuantity) => {
    setCart((prevCart) => {
      if (newQuantity <= 0) {
        return prevCart.filter(item => item.id !== itemId);
      }
      return prevCart.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getItemCount = () => {
    
    return cart.reduce((total, item) => total + item.quantity, 0);
  };
  

  return (
    <CartContext.Provider value={{ cart, addToCart, updateItemQuantity, removeFromCart, clearCart, calculateTotal, getItemCount }}>
      {children}
    </CartContext.Provider>
  );
};
