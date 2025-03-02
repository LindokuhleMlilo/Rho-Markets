import React from 'react';

const CryptoMarquee = () => {
  const tokens = [
    { name: 'Scroll', symbol: 'SCROLL' },
    { name: 'Stakestone', symbol: 'STAKESTONE' },
    { name: 'Lido', symbol: 'LDO' },
    { name: 'Kelp', symbol: 'KELP' },
    { name: 'Solv', symbol: 'SOLV' },
    { name: 'ether.fi', symbol: 'ETHFI' },
    { name: 'amcent', symbol: 'AMC' },
    { name: 'izumi', symbol: 'IZI' },
    { name: 'Rho Markets', symbol: 'RHO' },
  ];

  // Duplicate the tokens array to create a seamless loop
  const duplicatedTokens = [...tokens, ...tokens];

  return (
    <div className="overflow-hidden whitespace-nowrap bg-gray-600 py-4 mt-24 mb-12">
      <div className="inline-block animate-marquee">
        {duplicatedTokens.map((token, index) => (
          <div key={index} className="inline-flex items-center mx-8">
            <span className="text-lg font-bold text-yellow-400">{token.name}</span>
            <span className="ml-2 text-gray-400">{token.symbol}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoMarquee;