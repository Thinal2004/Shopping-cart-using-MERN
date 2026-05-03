import React from 'react';
// Make sure this path matches where you saved your HomePage file!
// If it's just in the src folder, use: import HomePage from './HomePage';
import HomePage from './pages/HomePage'; 

const App = () => {
  return (
    <div className="bg-white min-h-screen">
      <HomePage />
    </div>
  );
};

export default App;