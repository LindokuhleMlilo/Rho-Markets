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
import Pricing from './components/Pricing'; // Create this component
import Contact from './components/Contact'; // Create this component

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
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;