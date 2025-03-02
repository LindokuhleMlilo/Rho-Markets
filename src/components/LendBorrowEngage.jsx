import React from 'react';
import { FaCoins, FaHandHoldingUsd, FaGamepad } from 'react-icons/fa'; 

const LendBorrowEngage = () => {
  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          All-in-one Liquidity Protocol for Consumers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Lend */}
          <div className="bg-gray-800 p-6 rounded-lg text-center transition transform duration-300 hover:scale-105 hover:bg-gray-700 hover:shadow-lg hover:shadow-yellow-400/50">
            <div className="flex justify-center">
              <FaCoins className="text-yellow-400 text-5xl mb-4" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Lend</h3>
            <p className="text-gray-400">
              Boost your crypto earnings by supplying your assets and starting to earn yields.
            </p>
          </div>

          {/* Borrow */}
          <div className="bg-gray-800 p-6 rounded-lg text-center transition transform duration-300 hover:scale-105 hover:bg-gray-700 hover:shadow-lg hover:shadow-yellow-400/50">
            <div className="flex justify-center">
              <FaHandHoldingUsd className="text-yellow-400 text-5xl mb-4" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Borrow</h3>
            <p className="text-gray-400">
              Meet your liquidity needs while earning interest on your supplied assets.
            </p>
          </div>

          {/* Engage */}
          <div className="bg-gray-800 p-6 rounded-lg text-center transition transform duration-300 hover:scale-105 hover:bg-gray-700 hover:shadow-lg hover:shadow-yellow-400/50">
            <div className="flex justify-center">
              <FaGamepad className="text-yellow-400 text-5xl mb-4" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Engage</h3>
            <p className="text-gray-400">
              Gamified experience brings on-chain lending to consumers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LendBorrowEngage;
