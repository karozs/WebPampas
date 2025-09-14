import React, { useState } from 'react';
import { Calendar, MapPin, Music, Users, Clock, Star } from 'lucide-react';
import { Event } from '../types';
import { events } from '../data/mockData';

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categoryLabels = {
    all: 'Todos',
    religious: 'Religioso',
    festival: 'Festival',
    cultural: 'Cultural',
    dance: 'Danza'
  };

  const filteredEvents = events.filter(event => 
    filter === 'all' || event.category === filter
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'religious':
        return <Star className="w-4 h-4" />;
      case 'festival':
        return <Music className="w-4 h-4" />;
      case 'cultural':
        return <Users className="w-4 h-4" />;
      case 'dance':
        return <Music className="w-4 h-4" />;
      default:
        return <Calendar className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'religious':
        return 'bg-purple-500';
      case 'festival':
        return 'bg-orange-500';
      case 'cultural':
        return 'bg-blue-500';
      case 'dance':
        return 'bg-pink-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section id="eventos" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Calendar className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Eventos y Festividades
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vive la cultura viva de Pampas a través de sus festividades tradicionales, donde la música, danza y tradición se unen en celebraciones únicas.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                filter === key
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200 hover:border-blue-300'
              }`}
            >
              {getCategoryIcon(key)}
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white flex items-center space-x-1 ${getCategoryColor(event.category)}`}>
                    {getCategoryIcon(event.category)}
                    <span>{categoryLabels[event.category as keyof typeof categoryLabels]}</span>
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-2 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{event.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                
                <div className="flex items-center mb-4">
                  <MapPin className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-500">{event.location}</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-blue-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">Evento Anual</span>
                  </div>
                  <span className="text-lg font-bold text-blue-600">{event.date}</span>
                </div>

                <button
                  onClick={() => setSelectedEvent(event)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 font-medium"
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Event Detail Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-70"
                >
                  ×
                </button>
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span className="font-bold">{selectedEvent.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedEvent.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium text-white flex items-center space-x-1 w-fit ${getCategoryColor(selectedEvent.category)}`}>
                      {getCategoryIcon(selectedEvent.category)}
                      <span>{categoryLabels[selectedEvent.category as keyof typeof categoryLabels]}</span>
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">{selectedEvent.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                      Fecha
                    </h4>
                    <p className="text-gray-700">{selectedEvent.date}</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-red-600" />
                      Ubicación
                    </h4>
                    <p className="text-gray-700">{selectedEvent.location}</p>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Información Importante</h4>
                  <div className="space-y-2 text-blue-700 text-sm">
                    <p>• Esta festividad forma parte del calendario cultural de Pampas</p>
                    <p>• Se recomienda llegar temprano para disfrutar de todas las actividades</p>
                    <p>• Participación gratuita y abierta a toda la comunidad</p>
                    <p>• Ideal para familias y visitantes de todas las edades</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Cultural Heritage Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Patrimonio Cultural Vivo</h3>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Las festividades de Pampas son mucho más que celebraciones; son expresiones auténticas de nuestra identidad cultural. 
              Cada evento conecta a las generaciones presentes con nuestras raíces ancestrales, manteniendo viva la tradición 
              huancavelicana a través de la música, danza, gastronomía y rituales sagrados.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Tradición Religiosa</h4>
              <p className="text-gray-600 text-sm">
                Celebraciones que honran a nuestros santos patronos y fortalecen la fe comunitaria.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Music className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Música Ancestral</h4>
              <p className="text-gray-600 text-sm">
                Melodías andinas interpretadas con instrumentos tradicionales como quenas y charangos.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-pink-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Danzas Típicas</h4>
              <p className="text-gray-600 text-sm">
                Expresiones corporales que narran historias de nuestros antepasados y su relación con la naturaleza.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Calendario Ritual</h4>
              <p className="text-gray-600 text-sm">
                Festividades organizadas siguiendo ciclos agrícolas y lunares heredados de nuestros ancestros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}