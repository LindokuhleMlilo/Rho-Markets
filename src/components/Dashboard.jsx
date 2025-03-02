// src/components/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/market" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition duration-300">
          <h2 className="text-xl font-bold mb-4">Market</h2>
          <p>View and trade assets on Rho Markets.</p>
        </Link>
        <Link to="/bridge" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition duration-300">
          <h2 className="text-xl font-bold mb-4">Bridge</h2>
          <p>Transfer assets between chains seamlessly.</p>
        </Link>
        <Link to="/portfolio" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition duration-300">
          <h2 className="text-xl font-bold mb-4">Portfolio</h2>
          <p>Track your crypto holdings and yields.</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;