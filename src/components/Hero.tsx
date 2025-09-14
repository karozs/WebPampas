import React from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';

// 👇 Importa la imagen desde src/images
import pampasImage from "../images/pampas.jpg";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen bg-gradient-to-br from-green-600 via-blue-500 to-green-700 overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url(${pampasImage})`, // 👈 ahora usa tu imagen local
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Descubre <span className="text-yellow-400">Pampas</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90 animate-fade-in-up delay-200">
            Corazón de Tayacaja
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-80 max-w-2xl mx-auto animate-fade-in-up delay-300">
            Explora la magia de Pampas, donde la naturaleza andina se encuentra con la rica cultura huancavelicana. 
            Descubre paisajes únicos, gastronomía ancestral y la calidez de su gente.
          </p>
          
          {/* Stats */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8 animate-fade-in-up delay-500">
            <div className="flex items-center space-x-2">
              <MapPin className="w-6 h-6 text-yellow-400" />
              <span className="text-lg">3,276 msnm</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-6 h-6 text-yellow-400" />
              <span className="text-lg">Clima templado todo el año</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-6 h-6 text-yellow-400" />
              <span className="text-lg">Más de 8,000 habitantes</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up delay-700">
            <button
              onClick={() => scrollToSection('lugares')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explorar Lugares
            </button>
            <button
              onClick={() => scrollToSection('gastronomia')}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Probar la Gastronomía
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
