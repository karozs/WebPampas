import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Star, MessageCircle } from 'lucide-react';
import { Restaurant } from '../types';
import { restaurants } from '../data/mockData';
import { sendWhatsAppMessage, sendEmail } from '../utils/whatsapp';
import StarRating from './StarRating';

export default function Restaurants() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  const handleWhatsApp = (restaurant: Restaurant) => {
    const message = `Hola! Me gustaría hacer una reserva en ${restaurant.name}. ¿Podrían ayudarme con información sobre disponibilidad?`;
    sendWhatsAppMessage(restaurant.phone, message);
  };

  const handleEmail = (restaurant: Restaurant) => {
    const subject = `Consulta sobre ${restaurant.name}`;
    const body = `Estimados,\n\nMe gustaría obtener más información sobre sus servicios y hacer una reserva.\n\nSaludos cordiales.`;
    sendEmail(restaurant.email, subject, body);
  };

  return (
    <section id="restaurantes" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Restaurantes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Saborea la auténtica gastronomía huancavelicana en los mejores restaurantes de Pampas, donde la tradición se encuentra con el sabor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="relative">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{restaurant.hours}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{restaurant.name}</h3>
                <p className="text-gray-600 mb-4">{restaurant.description}</p>
                
                <div className="flex items-center mb-4">
                  <MapPin className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-500">{restaurant.location.address}</span>
                </div>
                
                <div className="mb-4">
                  <StarRating rating={restaurant.rating} size="sm" />
                </div>

                {/* Menu Preview */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Platos Destacados:</h4>
                  <div className="space-y-2">
                    {restaurant.dishes.slice(0, 2).map((dish, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm text-gray-700">{dish.name}</span>
                        <span className="text-sm font-semibold text-green-600">{dish.price}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedRestaurant(restaurant)}
                    className="text-blue-600 hover:text-blue-800 text-sm mt-2 font-medium"
                  >
                    Ver menú completo →
                  </button>
                </div>

                {/* Contact Buttons */}
                <div className="flex space-x-2 mb-4">
                  <button
                    onClick={() => handleWhatsApp(restaurant)}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </button>
                  <button
                    onClick={() => handleEmail(restaurant)}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </button>
                </div>

                {/* Google Maps Embed */}
                <div className="rounded-lg overflow-hidden">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d${restaurant.location.lng}!3d${restaurant.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${encodeURIComponent(restaurant.name)}!5e0!3m2!1sen!2spe!4v1635000000000!5m2!1sen!2spe`}
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

        {/* Modal for menu details */}
        {selectedRestaurant && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedRestaurant.image}
                  alt={selectedRestaurant.name}
                  className="w-full h-48 object-cover"
                />
                <button
                  onClick={() => setSelectedRestaurant(null)}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center"
                >
                  ×
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedRestaurant.name}</h3>
                <div className="flex items-center mb-4">
                  <StarRating rating={selectedRestaurant.rating} />
                </div>
                <p className="text-gray-700 mb-6">{selectedRestaurant.description}</p>
                
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Menú Completo</h4>
                <div className="space-y-4">
                  {selectedRestaurant.dishes.map((dish, index) => (
                    <div key={index} className="border-b border-gray-200 pb-3">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-semibold text-gray-800">{dish.name}</h5>
                        <span className="font-bold text-green-600">{dish.price}</span>
                      </div>
                      <p className="text-sm text-gray-600">{dish.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex space-x-4">
                  <button
                    onClick={() => handleWhatsApp(selectedRestaurant)}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Contactar por WhatsApp</span>
                  </button>
                  <button
                    onClick={() => handleEmail(selectedRestaurant)}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Enviar Email</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}