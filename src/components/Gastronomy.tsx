import React, { useState } from 'react';
import { ChefHat, Clock, Utensils, Star } from 'lucide-react';
import { Dish } from '../types';
import { dishes } from '../data/mockData';

export default function Gastronomy() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  const categories = {
    all: 'Todos',
    main: 'Platos Principales',
    appetizer: 'Entradas',
    dessert: 'Postres',
    drink: 'Bebidas'
  };

  const filteredDishes = dishes.filter(dish => 
    selectedCategory === 'all' || dish.category === selectedCategory
  );

  return (
    <section id="gastronomia" className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <ChefHat className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Gastronomía Típica
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre los sabores ancestrales de Pampas, donde cada plato cuenta la historia de nuestras tradiciones culinarias andinas.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === key
                  ? 'bg-green-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-green-100 border border-gray-200 hover:border-green-300'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedDish(dish)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                    dish.category === 'main' ? 'bg-red-500' :
                    dish.category === 'appetizer' ? 'bg-orange-500' :
                    dish.category === 'dessert' ? 'bg-pink-500' :
                    'bg-blue-500'
                  }`}>
                    {categories[dish.category as keyof typeof categories]}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">Tradicional</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{dish.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{dish.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-green-600">
                    <Utensils className="w-4 h-4" />
                    <span className="text-sm font-medium">Plato Típico</span>
                  </div>
                  <span className="text-lg font-bold text-green-600">{dish.averagePrice}</span>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-500">Ingredientes principales:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {dish.ingredients.slice(0, 3).map((ingredient, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {ingredient}
                      </span>
                    ))}
                    {dish.ingredients.length > 3 && (
                      <span className="text-xs text-green-600 font-medium">
                        +{dish.ingredients.length - 3} más
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dish Detail Modal */}
        {selectedDish && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedDish.image}
                  alt={selectedDish.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedDish(null)}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-70"
                >
                  ×
                </button>
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg">
                  <span className="font-bold text-lg">{selectedDish.averagePrice}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedDish.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
                      selectedDish.category === 'main' ? 'bg-red-500' :
                      selectedDish.category === 'appetizer' ? 'bg-orange-500' :
                      selectedDish.category === 'dessert' ? 'bg-pink-500' :
                      'bg-blue-500'
                    }`}>
                      {categories[selectedDish.category as keyof typeof categories]}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 bg-yellow-100 px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-yellow-700">Tradicional</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">{selectedDish.description}</p>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <ChefHat className="w-5 h-5 mr-2 text-green-600" />
                    Ingredientes Principales
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {selectedDish.ingredients.map((ingredient, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>{ingredient}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">¿Dónde probarlo?</h4>
                  <p className="text-green-700 text-sm">
                    Este delicioso plato lo puedes encontrar en los restaurantes tradicionales de Pampas. 
                    Te recomendamos visitar nuestros restaurantes recomendados para una experiencia auténtica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Traditional Food Culture Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Cultura Gastronómica Pampeña</h3>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              La gastronomía de Pampas es un testimonio vivo de la herencia cultural de nuestros ancestros. 
              Cada plato representa siglos de tradición, donde los ingredientes nativos de los Andes se combinan 
              con técnicas culinarias ancestrales. Desde la ceremoniosa preparación de la pachamanca hasta 
              la delicada elaboración de la chicha de jora, nuestra cocina es una celebración de la identidad huancavelicana.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ChefHat className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Técnicas Ancestrales</h4>
              <p className="text-gray-600 text-sm">
                Métodos de cocina transmitidos de generación en generación, como la cocción bajo tierra y el uso de piedras calientes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Ingredientes Nativos</h4>
              <p className="text-gray-600 text-sm">
                Quinua, papas nativas, maíz de jora y hierbas aromáticas que crecen en nuestros valles andinos.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Tradición Ceremonial</h4>
              <p className="text-gray-600 text-sm">
                Platos que forman parte de celebraciones religiosas y festividades importantes de nuestra comunidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}