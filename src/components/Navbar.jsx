import React from 'react';
import { ConnectButton } from "thirdweb/react";
import { client } from "../client";
import "../styles.css"; 

const Navbar = () => {
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
          className="custom-connect-button" 
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