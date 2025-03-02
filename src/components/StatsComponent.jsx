import React from 'react';
import { FaDollarSign, FaUsers, FaChartLine } from 'react-icons/fa'; 

const StatsComponent = () => {
  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4">
          #1 Liquidity Protocol on Scroll
        </h1>

        {/* Links */}
        <div className="flex justify-center space-x-4 mb-8">
          <a href="#" className="text-yellow-400 hover:text-yellow-500">
            Rho Markets
          </a>
          <a href="#" className="text-yellow-400 hover:text-yellow-500">
            Documentation
          </a>
        </div>

        {/* Subheading */}
        <p className="text-gray-400 text-lg mb-12">
          Let your crypto work for you
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Total Borrowed */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <FaDollarSign className="text-yellow-400 text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-yellow-400">$33,496,044.86</h3>
            <p className="text-gray-400">Total Borrowed</p>
          </div>

          {/* Active Users */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <FaUsers className="text-yellow-400 text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-yellow-400">16,021</h3>
            <p className="text-gray-400">Active Users</p>
          </div>

          {/* Another Stat */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <FaChartLine className="text-yellow-400 text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-yellow-400">$8,924,232.88</h3>
            <p className="text-gray-400">Another Stat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;