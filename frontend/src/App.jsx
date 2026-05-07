import React from 'react';
import HomePage from './pages/HomePage'; 
import CartPage from './pages/CartPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './context/AuthContext';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <AuthProvider>
    <CartProvider>
    <Router>
      <div className="bg-white min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          <Route path="/cart" element={<CartPage />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
    </CartProvider>
    </AuthProvider>
  );
};

export default App;