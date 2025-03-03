
import React from 'react';

const Market = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">

      {/* Wallet Info */}
      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">

          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">Total Market Size</span>
            <span className="text-lg font-bold">8,747,270.53</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">Total Borrow</span>
            <span className="text-lg font-bold">1,513,745.97</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">Total Available</span>
            <span className="text-lg font-bold">6,233,524.56</span>
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
                <td className="px-6 py-4">80.00%</td>
                <td className="px-6 py-4">566.88</td>
                <td className="px-6 py-4">1.65%</td>
                <td className="px-6 py-4">3.37%</td>
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