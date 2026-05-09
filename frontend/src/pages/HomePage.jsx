import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CategoryRow from '../components/CategoryRow';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const HomePage = () => {
  // Create a state variable to hold the products from the database
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the data when the component loads
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://shopping-cart-using-mern.vercel.app/api/products');
        
        // Save the database array into our React state
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter the products by category
  const vegetables = products.filter(product => product.category === 'Vegetables');
  const fruits = products.filter(product => product.category === 'Fruits');
  const cakes = products.filter(product => product.category === 'Cakes' || product.category === 'Biscuits');

  return (
    <div className="max-w-[1200px] mx-auto px-5 font-sans text-gray-800 pb-10">
      <Navbar />
      <Hero />
      {loading ? (
        <div className="text-center text-2xl font-bold py-20 text-gray-400">Loading fresh groceries...</div>
      ) : (
        <>
          {vegetables.length > 0 && (
            <section id="vegetables" className="scroll-mt-24">
              <CategoryRow title="Vegetables" products={vegetables} />
            </section>
          )}
          
          {fruits.length > 0 && (
            <section id="fruits" className="scroll-mt-24">
              <CategoryRow title="Fruits" products={fruits} />
            </section>
          )}
          
          {cakes.length > 0 && (
            <section id="cakes" className="scroll-mt-24">
              <CategoryRow title="Cakes & Biscuits" products={cakes} />
            </section>
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;