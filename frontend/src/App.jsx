import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CryptoMarquee from './components/CryptoMarquee';
import Features from './components/Features';
import LendBorrowEngage from './components/LendBorrowEngage';
import StatsComponent from './components/StatsComponent';
import Footer from './components/Footer';


function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Hero />
      <CryptoMarquee />
      <Features />
      <LendBorrowEngage />
      <StatsComponent />
      <Footer />
    </div>
  );
}

export default App;