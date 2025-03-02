import React from 'react';

const Hero = () => {
  return (
    <div className="relative py-20 flex items-center justify-center bg-black overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 via-gray-900 to-black transform rotate-3 scale-105 hero-background"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-yellow-700 via-gray-900 to-black transform -rotate-3 scale-105 hero-background"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Crypto Lending Made Simplified
        </h1>
        <p className="text-gray-400 mb-8">
          Rho Markets is a consumer liquidity protocol building on Scroll.<br />
          Enabling users the easiest experience liquidity through on-chain lending.
        </p>
        <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded hover:bg-yellow-500">
          Start Trading
        </button>
      </div>
    </div>
  );
};

export default Hero;