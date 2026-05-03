import React, { createContext, useState } from 'react';

// Create the Context 
export const CartContext = createContext();

// Create the Provider 
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // ADD OR INCREASE ITEM
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item._id === product._id);
      if (existingItem) {
        return prevItems.map((item) =>
          item._id === product._id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevItems, { ...product, qty: 1 }];
    });
  };

  // Decrease quantity
  const decreaseQty = (productId) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item._id === productId) {
          // Prevent quantity from dropping below 1 (they should use the delete button instead)
          return { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 };
        }
        return item;
      });
    });
  };

  // REMOVE ITEM ENTIRELY
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== productId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, decreaseQty, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};