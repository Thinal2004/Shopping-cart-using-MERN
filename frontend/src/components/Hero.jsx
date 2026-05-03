import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200')] bg-cover bg-center rounded-2xl p-10 md:p-16 text-white my-8">
      <div className="relative z-10 max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Fresh Groceries Delivered to Your Door</h1>
        <p className="text-base md:text-lg mb-8 text-gray-100">
          Experience the peak of seasonal freshness with hand-picked produce from local sustainable farms delivered in under 2 hours.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-[#0a7a35] hover:bg-green-800 text-white px-6 py-3 rounded-full font-bold transition">Shop Now</button>
          <button className="bg-white/20 hover:bg-white/30 border border-white text-white px-6 py-3 rounded-full font-bold transition">View Deals</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;