import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TouristSpots from './components/TouristSpots';
import Restaurants from './components/Restaurants';
import Hotels from './components/Hotels';
import Gastronomy from './components/Gastronomy';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        <section id="inicio">
          <Hero />
        </section>
        
        <TouristSpots />
        <Restaurants />
        <Hotels />
        <Gastronomy />
        <Events />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;