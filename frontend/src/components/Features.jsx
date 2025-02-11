import React from 'react';

const Features = () => {
  return (
    <div className="mt-20 p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Easy to Use</h3>
          <p className="text-gray-400">
            Intuitive interface designed for traders of all levels.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Advanced Tools</h3>
          <p className="text-gray-400">
            Access powerful tools to analyze and execute trades.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Secure</h3>
          <p className="text-gray-400">
            Your data and funds are protected with top-tier security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;