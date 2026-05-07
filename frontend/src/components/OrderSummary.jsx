import React, { useContext } from 'react'; 
import { CartContext } from '../context/CartContext';

const OrderSummary = ({totalItems, total }) => {

  const { clearCart } = useContext(CartContext);

  const handleCheckout = () => {
    alert("Success! Your order has been placed.");
    clearCart();
  };

  return (
    <div className="w-full lg:w-[380px]">
      
      {/* Main Summary Box */}
      <div className="bg-[#eef0f2] p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
        
        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-gray-600">
            <span>Total Items</span>
            <span className="font-medium">{totalItems}</span>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg text-gray-800">Total</span>
            <span className="font-bold text-xl text-[#0a7a35]">Rs {total.toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={handleCheckout}
          className="w-full bg-[#0a7a35] hover:bg-green-800 text-white py-3.5 rounded-xl font-bold transition shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed">
          Proceed to Checkout
        </button>

      </div>

    </div>
  );
};

export default OrderSummary;