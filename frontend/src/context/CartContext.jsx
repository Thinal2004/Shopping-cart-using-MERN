import React, { createContext, useState, useContext, useEffect } from 'react';
import { AuthContext } from './AuthContext';

// Create the Context 
export const CartContext = createContext();

// Create the Provider 
export const CartProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Whenever the user changes, load their specific cart
  useEffect(() => {
    if (currentUser) {
      const savedCart = localStorage.getItem(`cart_${currentUser.uid}`);
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      } else {
        setCartItems([]);
      }
    } else {
      setCartItems([]);
    }
    setIsLoaded(true); 
  }, [currentUser]);

  // Whenever the cart changes, save it to their specific storage
  useEffect(() => {
    // Only save if someone is actually logged in
    if (isLoaded && currentUser) {
      localStorage.setItem(`cart_${currentUser.uid}`, JSON.stringify(cartItems));
    }
  }, [cartItems, currentUser]);

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

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, decreaseQty, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};