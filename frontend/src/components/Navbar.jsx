import React, {useContext}from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  // Pull the cartItems
  const { cartItems } = useContext(CartContext);
  
  // Pull in the current user and the logout function
  const { currentUser, logout } = useContext(AuthContext);
  // Calculate total number of items
  const totalItems = cartItems.reduce((total, item) => total + item.qty, 0);

  return (
    <nav className="sticky top-0 z-50 bg-white flex justify-between items-center py-5 border-b border-gray-100">
      <Link to="/" className="text-2xl font-bold text-[#0a7a35] hover:opacity-80 transition">
        FreshMarket
      </Link>
      <ul className="hidden md:flex list-none gap-8 text-gray-500 font-medium">
        <li>
          <a href="/#vegetables" className="hover:text-[#0a7a35] cursor-pointer transition">Vegetables</a>
        </li>
        <li>
          <a href="/#fruits" className="hover:text-[#0a7a35] cursor-pointer transition">Fruits</a>
        </li>
        <li>
          <a href="/#cakes" className="hover:text-[#0a7a35] cursor-pointer transition">Cakes</a>
        </li>
        <li>
          <a href="/#cakes" className="hover:text-[#0a7a35] cursor-pointer transition">Biscuits</a>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        
        <Link to="/cart" className="relative text-xl cursor-pointer hover:text-[#0a7a35] transition pr-2">
          🛒
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>

        {currentUser ? (
          <div className="flex items-center gap-3 pl-2">
            {/* Split the displayName to just show their First Name */}
            <span className="text-sm font-semibold text-gray-700 hidden sm:block">
              Hi, {currentUser.displayName?.split(' ')[0]}
            </span>
            <button 
              onClick={logout}
              className="text-xs font-bold text-gray-400 hover:text-red-500 transition px-2 py-1 rounded border border-transparent hover:border-red-100 hover:bg-red-50"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="text-xl pl-2 cursor-pointer hover:text-[#0a7a35] transition">👤</Link>
        )}

      </div>
    </nav>
  );
};

export default Navbar;