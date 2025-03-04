import React from 'react';
import { FiTrendingUp } from 'react-icons/fi'; // Import the graph icon

const Market = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      {/* Wallet Info */}
      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <div className="flex justify-between items-center">
          {/* Total Market Size */}
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <p className="text-4xl font-bold">31,659,685.23</p>
              <div className="flex items-center justify-center space-x-2">
                <FiTrendingUp className="h-4 w-4 text-yellow-400" /> 
                <p className="text-gray-400 text-lg">Market Size</p>
              </div>
            </div>
          </div>

          {/* Total Borrowed */}
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <p className="text-4xl font-bold">8,747,270.53</p>
              <div className="flex items-center justify-center space-x-2">
                <FiTrendingUp className="h-4 w-4 text-yellow-400" /> 
                <p className="text-gray-400 text-lg">Total Borrowed</p>
              </div>
            </div>
          </div>

          {/* Total Available */}
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <p className="text-4xl font-bold">1,513,745.97</p>
              <div className="flex items-center justify-center space-x-2">
                <FiTrendingUp className="h-4 w-4 text-yellow-400" /> 
                <p className="text-gray-400 text-lg">Total Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Markets Section */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Markets</h2>
          <div className="flex space-x-4">
            <button className="text-yellow-400 hover:text-yellow-500">Single Assets</button>
            <button className="text-yellow-400 hover:text-yellow-500">All Assets</button>
            <button className="text-yellow-400 hover:text-yellow-500">ETH Category</button>
            <button className="text-yellow-400 hover:text-yellow-500">BTC Category</button>
            <button className="text-yellow-400 hover:text-yellow-500">Stablecoin</button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-700">
                <th className="px-6 py-3 text-left text-sm font-bold">Assets</th>
                <th className="px-6 py-3 text-left text-sm font-bold">Collateral Type</th>
                <th className="px-6 py-3 text-left text-sm font-bold">Max LTV</th>
                <th className="px-6 py-3 text-left text-sm font-bold">Total Supplied</th>
                <th className="px-6 py-3 text-left text-sm font-bold">Supply APY</th>
                <th className="px-6 py-3 text-left text-sm font-bold">Borrow APY</th>
                <th className="px-6 py-3 text-left text-sm font-bold">Total Borrowed</th>
                <th className="px-6 py-3 text-left text-sm font-bold">Borrow Available</th>
              </tr>
            </thead>
            <tbody>
              {/* Example Row */}
              <tr className="border-b border-gray-700">
                <td className="px-6 py-4 flex items-center space-x-2">
                  <img src="/eth.png" alt="ETH" className="h-6" />
                  <span>ETH</span>
                </td>
                <td className="px-6 py-4">Open</td>
                <td className="px-6 py-4 text-yellow-400">80.00%</td>
                <td className="px-6 py-4">566.88</td>
                <td className="px-6 py-4 text-yellow-400">1.65%</td> {/* Yellow percentage */}
                <td className="px-6 py-4 text-yellow-400">3.37%</td> {/* Yellow percentage */}
                <td className="px-6 py-4">373.44</td>
                <td className="px-6 py-4">$486,607.30</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Market;