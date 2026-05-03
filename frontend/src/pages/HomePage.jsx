import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CategoryRow from '../components/CategoryRow';

const HomePage = () => {
  // We will replace this with your Axios database fetch later!
  const mockVegetables = [
    { id: 1, tag: 'Organic', name: 'Organic Carrots', desc: 'Farm-fresh organic carrots with green tops, perfect for roasting...', price: '$2.99/kg', img: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500' },
    { id: 2, tag: 'Produce', name: 'Green Bell Pepper', desc: 'Crunchy and sweet, these bell peppers add a pop of color to an...', price: '$1.50/ea', img: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=500' },
    { id: 3, tag: 'Vine-Ripened', name: 'Cherry Tomatoes', desc: 'Exploding with sweetness, these vine-ripened tomatoes are a sala...', price: '$3.49/pk', img: 'https://images.unsplash.com/photo-1561136594-7f68413baa99?w=500' },
    { id: 4, tag: 'Superfood', name: 'Fresh Broccoli', desc: 'Nutrient-dense broccoli crowns, hand-selected for peak quality an...', price: '$2.25/ea', img: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500' },
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-5 font-sans text-gray-800 pb-10">
      <Navbar />
      <Hero />
      <CategoryRow title="Vegetables" products={mockVegetables} />
      
      {/* Later, you can easily add more rows just by duplicating the line below with new data! */}
      {/* <CategoryRow title="Fruits" products={mockFruits} /> */}
    </div>
  );
};

export default HomePage;