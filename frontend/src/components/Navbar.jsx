import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-5 border-b border-gray-100">
      <div className="text-2xl font-bold text-[#0a7a35]">FreshMarket</div>
      <ul className="hidden md:flex list-none gap-8 text-gray-500 font-medium">
        <li className="text-[#0a7a35] border-b-2 border-[#0a7a35] pb-1 cursor-pointer">Vegetables</li>
        <li className="hover:text-gray-800 cursor-pointer transition">Fruits</li>
        <li className="hover:text-gray-800 cursor-pointer transition">Cakes</li>
        <li className="hover:text-gray-800 cursor-pointer transition">Biscuits</li>
      </ul>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex bg-gray-100 rounded-full px-4 py-2 items-center">
          <span className="text-gray-500">🔍</span>
          <input 
            type="text" 
            placeholder="Search fresh food..." 
            className="bg-transparent border-none outline-none ml-2 w-40"
          />
        </div>
        <span className="text-xl cursor-pointer hover:text-[#0a7a35] transition">🛒</span>
        <span className="text-xl cursor-pointer hover:text-[#0a7a35] transition">👤</span>
      </div>
    </nav>
  );
};

export default Navbar;