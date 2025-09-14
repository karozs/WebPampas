import React, { useState } from 'react';
import { MapPin, Phone, Mail, Users, Star, Wifi, Coffee, Car, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Hotel } from '../types';
import { hotels } from '../data/mockData';
import { sendWhatsAppMessage, sendEmail } from '../utils/whatsapp';
import StarRating from './StarRating';

export default function Hotels() {
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleWhatsApp = (hotel: Hotel) => {
    const message = `Hola! Me gustaría hacer una reserva en ${hotel.name}. ¿Podrían ayudarme con información sobre disponibilidad y tarifas?`;
    sendWhatsAppMessage(hotel.phone, message);
  };

  const handleEmail = (hotel: Hotel) => {
    const subject = `Reserva en ${hotel.name}`;
    const body = `Estimados,\n\nMe gustaría hacer una reserva en su hotel. Por favor, envíenme información sobre disponibilidad, tarifas y servicios.\n\nSaludos cordiales.`;
    sendEmail(hotel.email, subject, body);
  };

  const nextImage = () => {
    if (selectedHotel) {
      setCurrentImageIndex((prev) => 
        prev === selectedHotel.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedHotel) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedHotel.images.length - 1 : prev - 1
      );
    }
  };

  const serviceIcons = {
    'WiFi gratuito': <Wifi className="w-4 h-4" />,
    'Desayuno incluido': <Coffee className="w-4 h-4" />,
    'Estacionamiento': <Car className="w-4 h-4" />,
    'Recepción 24h': <Users className="w-4 h-4" />
  };

  return (
    <section id="hoteles" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Hoteles y Hospedajes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descansa cómodamente en los mejores hoteles de Pampas, desde opciones económicas hasta experiencias de lujo con vistas panorámicas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="relative">
                <img
                  src={hotel.images[0]}
                  alt={hotel.name}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {hotel.rooms} habitaciones
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{hotel.name}</h3>
                <p className="text-gray-600 mb-4">{hotel.description}</p>
                
                <div className="flex items-center mb-3">
                  <MapPin className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-500">{hotel.location.address}</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <StarRating rating={hotel.rating} size="sm" />
                  <span className="text-lg font-bold text-green-600">{hotel.priceRange}</span>
                </div>

                {/* Services */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Servicios:</h4>
                  <div className="flex flex-wrap gap-2">
                    {hotel.services.slice(0, 4).map((service, index) => (
                      <div key={index} className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-full text-xs text-gray-700">
                        {serviceIcons[service as keyof typeof serviceIcons] || <Star className="w-3 h-3" />}
                        <span>{service}</span>
                      </div>
                    ))}
                    {hotel.services.length > 4 && (
                      <button
                        onClick={() => setSelectedHotel(hotel)}
                        className="text-blue-600 hover:text-blue-800 text-xs font-medium"
                      >
                        +{hotel.services.length - 4} más
                      </button>
                    )}
                  </div>
                </div>

                {/* Contact Buttons */}
                <div className="flex space-x-2 mb-4">
                  <button
                    onClick={() => handleWhatsApp(hotel)}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Reservar</span>
                  </button>
                  <button
                    onClick={() => handleEmail(hotel)}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </button>
                </div>

                <button
                  onClick={() => {
                    setSelectedHotel(hotel);
                    setCurrentImageIndex(0);
                  }}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-300 mb-4"
                >
                  Ver más detalles
                </button>

                {/* Google Maps Embed */}
                <div className="rounded-lg overflow-hidden">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d${hotel.location.lng}!3d${hotel.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${encodeURIComponent(hotel.name)}!5e0!3m2!1sen!2spe!4v1635000000000!5m2!1sen!2spe`}
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

        {/* Modal for hotel details */}
        {selectedHotel && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto">
              {/* Image Gallery */}
              <div className="relative">
                <img
                  src={selectedHotel.images[currentImageIndex]}
                  alt={selectedHotel.name}
                  className="w-full h-64 object-cover"
                />
                {selectedHotel.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {selectedHotel.images.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
                <button
                  onClick={() => setSelectedHotel(null)}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center"
                >
                  ×
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedHotel.name}</h3>
                    <StarRating rating={selectedHotel.rating} />
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">{selectedHotel.priceRange}</p>
                    <p className="text-sm text-gray-500">{selectedHotel.rooms} habitaciones disponibles</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">{selectedHotel.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Todos los Servicios</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedHotel.services.map((service, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                          {serviceIcons[service as keyof typeof serviceIcons] || <Star className="w-4 h-4" />}
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Contacto</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-gray-700">
                        <Phone className="w-4 h-4" />
                        <span>{selectedHotel.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-700">
                        <Mail className="w-4 h-4" />
                        <span>{selectedHotel.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-700">
                        <MapPin className="w-4 h-4" />
                        <span>{selectedHotel.location.address}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => handleWhatsApp(selectedHotel)}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Reservar por WhatsApp</span>
                  </button>
                  <button
                    onClick={() => handleEmail(selectedHotel)}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Consultar por Email</span>
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