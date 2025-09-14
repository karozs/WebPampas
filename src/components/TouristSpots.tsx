import React, { useState } from 'react';
import { MapPin, Eye, Star, Clock } from 'lucide-react';
import { TouristSpot } from '../types';
import { touristSpots } from '../data/mockData';
import StarRating from './StarRating';

export default function TouristSpots() {
  const [selectedSpot, setSelectedSpot] = useState<TouristSpot | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredSpots = touristSpots.filter(spot => 
    filter === 'all' || spot.category === filter
  );

  const categoryLabels = {
    all: 'Todos',
    natural: 'Natural',
    cultural: 'Cultural',
    adventure: 'Aventura',
    historical: 'Histórico'
  };

  return (
    <section id="lugares" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Lugares Turísticos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre los rincones más hermosos de Pampas, desde majestuosas cascadas hasta sitios históricos llenos de tradición.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === key
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-green-50 border border-gray-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Spots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSpots.map((spot) => (
            <div
              key={spot.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative">
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                    spot.category === 'natural' ? 'bg-green-500' :
                    spot.category === 'cultural' ? 'bg-blue-500' :
                    spot.category === 'adventure' ? 'bg-orange-500' :
                    'bg-purple-500'
                  }`}>
                    {categoryLabels[spot.category as keyof typeof categoryLabels]}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{spot.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{spot.description}</p>
                
                <div className="flex items-center mb-4">
                  <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-500">{spot.location.address}</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <StarRating rating={spot.rating} size="sm" />
                  <button
                    onClick={() => setSelectedSpot(spot)}
                    className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Ver más</span>
                  </button>
                </div>

                {/* Google Maps Embed */}
                <div className="mt-4 rounded-lg overflow-hidden">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d${spot.location.lng}!3d${spot.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${encodeURIComponent(spot.name)}!5e0!3m2!1sen!2spe!4v1635000000000!5m2!1sen!2spe`}
                    width="100%"
                    height="150"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for detailed view */}
        {selectedSpot && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedSpot.image}
                  alt={selectedSpot.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedSpot(null)}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center"
                >
                  ×
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{selectedSpot.name}</h3>
                <div className="flex items-center mb-4">
                  <StarRating rating={selectedSpot.rating} />
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{selectedSpot.fullDescription}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Ubicación</h4>
                    <p className="text-gray-600 mb-4">{selectedSpot.location.address}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Coordenadas</h4>
                    <p className="text-gray-600">
                      Lat: {selectedSpot.location.lat}, Lng: {selectedSpot.location.lng}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}