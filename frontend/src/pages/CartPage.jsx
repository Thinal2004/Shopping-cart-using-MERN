import React, {useContext} from 'react';
import Navbar from '../components/Navbar';
import CartItem from '../components/CartItem';
import OrderSummary from '../components/OrderSummary';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);

  return (
    <div className="max-w-[1200px] mx-auto px-5 font-sans text-gray-800 pb-20">
      <Navbar />

      <div className="mt-10 mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Your Shopping Cart</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        
        <div className="flex-1">
          {/* Display a message if cart is empty, otherwise map the real items */}
          {cartItems.length === 0 ? (
            <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="text-xl text-gray-500 mb-4">Your cart is currently empty.</p>
              <Link to="/" className="inline-block bg-[#0a7a35] hover:bg-green-800 text-white px-8 py-3 rounded-xl font-bold transition">
                Start Shopping
              </Link>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <CartItem key={item._id} item={item} />
              ))}
              <Link to="/" className="mt-4 inline-block text-[#0a7a35] font-semibold flex items-center gap-2 hover:underline">
                <span>←</span> Continue Shopping
              </Link>
            </>
          )}
        </div>

        {cartItems.length > 0 && (
          <OrderSummary totalItems={totalItems} total={total} />
        )}

      </div>
    </div>
  );
};

export default CartPage;