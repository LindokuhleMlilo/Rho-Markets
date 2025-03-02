// src/components/Navbar.jsx
import React from 'react';
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { client } from "../client";
import { useNavigate, Link, useLocation } from 'react-router-dom'; // Add useLocation

const Navbar = () => {
  const account = useActiveAccount();
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route

  // Redirect to dashboard if wallet is connected and not already on the homepage
  React.useEffect(() => {
    if (account?.address && location.pathname !== '/') {
      navigate('/dashboard');
    }
  }, [account?.address, navigate, location.pathname]); // Add location.pathname to dependencies

  return (
    <nav className="flex justify-between items-center p-6">
      <div className="text-2xl font-bold">Rho Markets</div>
      <div className="flex items-center space-x-4">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/features" className="hover:text-yellow-400">Features</Link>
        <Link to="/pricing" className="hover:text-yellow-400">Pricing</Link>
        <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
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