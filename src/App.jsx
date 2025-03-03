// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CryptoMarquee from './components/CryptoMarquee';
import Features from './components/Features';
import LendBorrowEngage from './components/LendBorrowEngage';
import StatsComponent from './components/StatsComponent';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Market from './components/Market'; // Import Market

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <CryptoMarquee />
                <Features />
                <LendBorrowEngage />
                <StatsComponent />
                <Footer />
              </>
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/market" element={<Market />} /> {/* Add Market route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;