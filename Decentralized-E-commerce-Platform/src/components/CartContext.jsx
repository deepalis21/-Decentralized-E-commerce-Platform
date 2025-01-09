import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItemFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const cartCount = cart.length;

  return (
    <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
