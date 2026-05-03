import React from 'react';
import HomePage from './pages/HomePage'; 
import CartPage from './pages/CartPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <CartProvider>
    <Router>
      <div className="bg-white min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
};

export default App;