// src/components/Navbar.jsx
import React from 'react';
import { ConnectButton, useActiveAccount } from "thirdweb/react"; // Updated import
import { client } from "../client";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const account = useActiveAccount(); // Use useActiveAccount to get the connected wallet
  const navigate = useNavigate();

  // Redirect to dashboard if wallet is connected
  React.useEffect(() => {
    if (account?.address) {
      navigate('/dashboard');
    }
  }, [account?.address, navigate]);

  return (
    <nav className="flex justify-between items-center p-6">
      <div className="text-2xl font-bold">Rho Markets</div>
      <div className="flex items-center space-x-4">
        <a href="#" className="hover:text-yellow-400">Home</a>
        <a href="#" className="hover:text-yellow-400">Features</a>
        <a href="#" className="hover:text-yellow-400">Pricing</a>
        <a href="#" className="hover:text-yellow-400">Contact</a>
        <ConnectButton
          client={client}
          theme="dark"
          style={{
            backgroundColor: "#FBBF24",
            color: "#1F2937",
            fontWeight: "bold",
            padding: "8px 16px",
            borderRadius: "8px",
            transition: "background-color 0.3s",
          }}
          connectModal={{
            size: "wide",
            title: "Connect to Rho Markets",
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;