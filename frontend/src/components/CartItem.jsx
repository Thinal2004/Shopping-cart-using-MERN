import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
    const { addToCart, decreaseQty, removeFromCart } = useContext(CartContext);
    
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] mb-4">
      
      <div className="flex items-center gap-5">
        <img src={item.imageUrl} alt={item.name} className="w-20 h-20 rounded-xl object-cover shadow-sm" />
        <div>
          <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
          <p className="text-gray-500 text-sm mt-1">
            Rs {item.price.toFixed(2)} <span className="text-gray-400">/ {item.category}</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end gap-3">
        <div className="flex items-center bg-[#ebf5ed] rounded-full px-1 py-1">
          {/* Minus Button */}
          <button 
            onClick={() => decreaseQty(item._id)}
            className="text-[#0a7a35] hover:bg-[#d5ecd8] w-8 h-8 rounded-full flex items-center justify-center font-bold transition"
          >-</button>
          
          <span className="font-semibold text-gray-800 px-3">{item.qty}</span>
          
          {/* Plus Button */}
          <button 
            onClick={() => addToCart(item)}
            className="text-[#0a7a35] hover:bg-[#d5ecd8] w-8 h-8 rounded-full flex items-center justify-center font-bold transition"
          >+</button>
        </div>
        
        {/* Delete Button */}
        <button 
          onClick={() => removeFromCart(item._id)}
          className="text-red-400 hover:text-red-600 transition text-lg" 
          aria-label="Remove item"
        >
          🗑️
        </button>
      </div>

    </div>
  );
};

export default CartItem;