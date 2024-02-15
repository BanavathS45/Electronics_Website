import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const getData = () => {
  const newProductData = localStorage.getItem("Products");
  return newProductData ? JSON.parse(newProductData) : [];
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getData());

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems(cartItems.filter(item => item !== itemToRemove));
  };

  useEffect(() => {
    localStorage.setItem("Products", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
