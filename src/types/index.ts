export interface TouristSpot {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  image: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  rating: number;
  category: 'natural' | 'cultural' | 'adventure' | 'historical';
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  image: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  rating: number;
  dishes: Array<{
    name: string;
    price: string;
    description: string;
  }>;
  phone: string;
  email: string;
  hours: string;
}

export interface Hotel {
  id: string;
  name: string;
  description: string;
  images: string[];
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  rating: number;
  priceRange: string;
  services: string[];
  phone: string;
  email: string;
  rooms: number;
}

export interface Dish {
  id: string;
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  averagePrice: string;
  category: 'main' | 'appetizer' | 'dessert' | 'drink';
}

export interface Event {
  id: string;
  name: string;
  description: string;
  image: string;
  date: string;
  location: string;
  category: 'festival' | 'cultural' | 'religious' | 'dance';
}

export interface Rating {
  spotId: string;
  rating: number;
  timestamp: number;
}