import React, { useContext } from 'react'; 
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const CategoryRow = ({ title, products }) => {
  const { addToCart } = useContext(CartContext);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    if (!currentUser) {
      alert("Please log in or create an account to add items to your cart!");
      navigate('/login'); 
      return; 
    }
    
    // If they ARE logged in, proceed as normal
    addToCart(product);
  };
  
  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id || product.id} className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition duration-300 group">
            
            <div className="relative h-52 overflow-hidden">
              <img 
                src={product.img || product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <button 
                onClick={() => handleAddToCart(product)}
                className="absolute bottom-3 right-3 bg-[#0a7a35] hover:bg-green-800 text-white rounded-full w-9 h-9 flex items-center justify-center text-xl transition shadow-md"
              >
                +
              </button>
            </div>

            <div className="p-4">
              <span className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold">{product.tag || product.category}</span>
              <h3 className="text-lg font-semibold my-1 text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-3 line-clamp-2 leading-relaxed">{product.desc || product.description}</p>
              <p className="text-lg font-bold text-[#0a7a35]">{typeof product.price === 'number' ? `Rs ${product.price.toFixed(2)}` : product.price}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryRow;