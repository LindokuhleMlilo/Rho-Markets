import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center p-6">
        <div className="text-2xl font-bold">Rho Markets</div>
        <div className="space-x-4">
          <a href="#" className="hover:text-yellow-400">Home</a>
          <a href="#" className="hover:text-yellow-400">Features</a>
          <a href="#" className="hover:text-yellow-400">Pricing</a>
          <a href="#" className="hover:text-yellow-400">Contact</a>
        </div>
        <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded hover:bg-yellow-500">
          Get Started
        </button>
      </nav>
      {/* Horizontal grey line */}
      <hr className="border-gray-700" />
    </div>
  );
};

export default Navbar;