import { TouristSpot, Restaurant, Hotel, Dish, Event } from '../types';

export const touristSpots: TouristSpot[] = [
  {
    id: '1',
    name: 'Pamuri Acraquia',
    description: 'Impresionante caída de agua de 80 metros rodeada de vegetación andina.',
    fullDescription: 'La Cascada de Huancaya es una de las joyas naturales más importantes de Pampas. Con una caída de 80 metros de altura, esta cascada ofrece un espectáculo natural único rodeada de flora y fauna típica de la región. Es ideal para trekking, fotografía y conexión con la naturaleza.',
    image: 'https://pamuriandeslodge.com/wp-content/uploads/2025/02/kit-de-actividades-Pamuri-2025.png',
    location: {
      lat: -12.4089,
      lng: -74.8597,
      address: 'Cascada de Huancaya, Pampas, Tayacaja'
    },
    rating: 4.8,
    category: 'natural'
  },
  {
    id: '2',
    name: 'Plaza de Armas de Pampas',
    description: 'Centro histórico y corazón cultural de la ciudad.',
    fullDescription: 'La Plaza de Armas es el centro neurálgico de Pampas, donde convergen la historia, cultura y vida cotidiana de sus habitantes. Rodeada de edificios coloniales y republicanos, es el lugar perfecto para conocer las tradiciones locales y disfrutar de eventos culturales.',
    image: 'https://scontent.flim2-5.fna.fbcdn.net/v/t51.75761-15/503019583_18145149367391443_7265379072396825701_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF5gd9mffHG2l7LnBfS1jFFy3wARY6L5JXLfABFjovklVxEqpFzLu8L5glulaix8oeidzakfJ5OSYb6_r-sI1EB&_nc_ohc=Kd_nGoqd50oQ7kNvwFkQfv-&_nc_oc=AdmBIMecgrNS4fyXJyUuzHSLoNFNljBfpwb7yX_l9iHP0BFZdNEZr1_796ohLhJ057hXnKxh5XruFYKO7pZpA-sx&_nc_zt=23&_nc_ht=scontent.flim2-5.fna&_nc_gid=RWYln4yPIRog2vlTju6O-Q&oh=00_AfZGnPgZWZMFRB1uz7POpk0dDbucMrDpvbqOi_8tfMJQzg&oe=68CCA154',
    location: {
      lat: -12.4097,
      lng: -74.8589,
      address: 'Plaza de Armas, Pampas, Tayacaja'
    },
    rating: 4.5,
    category: 'cultural'
  },
  {
    id: '3',
    name: 'Mirador san Cristobal',
    description: 'Vista panorámica de la cordillera y el valle de Pampas.',
    fullDescription: 'Ubicado estratégicamente en las alturas de Pampas, este mirador natural ofrece vistas espectaculares de la cordillera de los Andes y el verde valle que rodea la ciudad. Es el lugar perfecto para contemplar atardeceres y tomar las mejores fotografías panorámicas.',
    image: 'https://scontent.flim2-1.fna.fbcdn.net/v/t51.82787-15/515271679_18147846862391443_3592407269209285995_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF62tDDKXS2hL7tSkAVS-Czg1eryeooJlqDV6vJ6igmWgzWHvDAhK0WWgcIaFDh4bxQM5Q-Ii8w1dEJJ2Hfnqo9&_nc_ohc=URmHG1QIngMQ7kNvwFECkhL&_nc_oc=AdmoFg-g-oP01EVfcZVpckb_rv64S8W4L0uXl6XZnV9J-ozsPqLWj6dFBiyJt1AYtspmVbyEu991Juhs0H_aXVD1&_nc_zt=23&_nc_ht=scontent.flim2-1.fna&_nc_gid=ABRum2UzQIWgRIu0XTjI5w&oh=00_AfYbX0QhJnCfdi6tOa8olpX5X3yKj5dxoL5_Qzy1ZVSPPA&oe=68CCC4F6',
    location: {
      lat: -12.4045,
      lng: -74.8612,
      address: 'Mirador san Cristobal, Pampas, Tayacaja'
    },
    rating: 4.9,
    category: 'natural'
  },
  {
    id: '4',
    name: 'Iglesia San Pedro',
    description: 'Templo colonial con arquitectura tradicional andina.',
    fullDescription: 'La Iglesia San Pedro es uno de los testimonios más importantes de la arquitectura colonial en Pampas. Construida en el siglo XVII, combina elementos barrocos con influencias andinas, siendo un importante centro de fe y tradición para la comunidad local.',
    image: 'https://scontent.flim2-2.fna.fbcdn.net/v/t39.30808-6/475307604_1338008647355686_2673178689393552737_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFrVPHk6aXeIPDanufO0v26FKcp5anUZycUpynlqdRnJzGGlVglD1XuvP1LqNOdGzGljOiS2RG_XRZYSra_aY_D&_nc_ohc=_LSthMQyGfwQ7kNvwG19IjV&_nc_oc=Admhd_o1NZk8XOaCyoZdMD62Sd678uvZn4iegtIWd2YYK6A7yLZqdOjivB0r-M_7CjBgNXOcv3zInWepw1T91wPB&_nc_zt=23&_nc_ht=scontent.flim2-2.fna&_nc_gid=sfIpFEIpljXvLQYkH5wL8w&oh=00_AfaO_oQe2GBszlZHNWdAFRRlyv0Ux6cqnhC3Yvc3qoBIMQ&oe=68CCB1C4',
    location: {
      lat: -12.4102,
      lng: -74.8585,
      address: 'Iglesia San Pedro, Pampas, Tayacaja'
    },
    rating: 4.3,
    category: 'historical'
  },
  {
    id: '5',
    name: 'Casa Hacienca San Juan de Pillo',
    description: 'Laguna de aguas cristalinas ideal para deportes acuáticos.',
    fullDescription: 'Azulcocha es una hermosa laguna de origen glaciar ubicada en los alrededores de Pampas. Sus aguas cristalinas de color azul intenso la convierten en un destino ideal para la pesca deportiva, kayak y contemplación de la naturaleza en estado puro.',
    image: 'https://scontent.flim2-2.fna.fbcdn.net/v/t51.82787-15/515722754_18514879039008842_638190527707370667_n.webp?stp=dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGamce_OgxupOmL0KkKE-lVyLI5izJRGCDIsjmLMlEYIJqJnzkzx8yA_jhNjCGaUYS4qcXtmf0ZEy-UY4yjgYSS&_nc_ohc=n0T9-LBvRggQ7kNvwFaoHML&_nc_oc=AdlQzydFs1Y1TmWuhUKS6U3g5KvLqxGLPg-E3jlJqXtAnrQHnlo3x4CG43CfBmKxuo-l9Xd7AX2VjDzhtUCn-YrW&_nc_zt=23&_nc_ht=scontent.flim2-2.fna&_nc_gid=-6JQ5xvbZmdavWhRnrNpzw&oh=00_AfYVIPzQWpWe24w3KWH0NAFhBDOv9Kof4sh70hqEKj2NQA&oe=68CCA10B',
    location: {
      lat: -12.3876,
      lng: -74.8734,
      address: 'Laguna Azulcocha, Pampas, Tayacaja'
    },
    rating: 4.7,
    category: 'adventure'
  }
];

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Recreo Campestre "La Gruta"',
    description: 'Restaurante tradicional especializado en comida típica huancavelicana.',
    image: 'https://scontent.flim2-6.fna.fbcdn.net/v/t39.30808-6/548196488_1362979345833977_3024558074879724327_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHwp7VX0Bd8qh5txCxpQWxUxMyPEWgWmwPEzI8RaBabA9FiEcJ2gxEpxFSZWtKcVHyjL9tlRknZwrR2VWQ5Whnk&_nc_ohc=QLc3Da3oGioQ7kNvwHf_szG&_nc_oc=Admm-jAAelFyffhc7CjTcGfLk2LD9hWFq-xlVQpbzyzhFK8t5Q6xBj7YT6kt4RAo1kciE8EUeifxwhDKxcyuoRz4&_nc_zt=23&_nc_ht=scontent.flim2-6.fna&_nc_gid=QTK8PU6qsathNDyMMet5Yg&oh=00_AfZq_U8HHhQuG_tdMw9WZJaqAjVX1qtU3G4jztFYNNF2wA&oe=68CCE039',
    location: {
      lat: -12.4095,
      lng: -74.8591,
      address: 'Jr. Comercio 145, Pampas, Tayacaja'
    },
    rating: 4.6,
    dishes: [
      { name: 'Pachamanca Pampeña', price: 'S/ 25.00', description: 'Plato tradicional cocido bajo tierra con carnes variadas y papas nativas' },
      { name: 'Trucha a la Plancha', price: 'S/ 18.00', description: 'Trucha fresca del río acompañada de ensalada y papa dorada' },
      { name: 'Cuy al Horno', price: 'S/ 35.00', description: 'Cuy criollo horneado con hierbas aromáticas y ají amarillo' },
      { name: 'Sopa de Quinua', price: 'S/ 12.00', description: 'Nutritiva sopa con quinua, verduras andinas y carne de alpaca' }
    ],
    phone: '+51987654321',
    email: 'sabores@pampas.com',
    hours: '7:00 AM - 10:00 PM'
  },
  {
    id: '2',
    name: 'Restaurant El Tayta',
    description: 'Ambiente acogedor con las mejores carnes y parrillas de la región.',
    image: 'https://scontent.flim2-1.fna.fbcdn.net/v/t1.6435-9/95364616_533556603948791_424288063846350848_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGFEhZMwNtxBQfoUVM8f2t9-2enCjHoMyv7Z6cKMegzK-u87C8F0AF2uB5VPISMSLE6lp0mhbXECEbRBF7h3CD8&_nc_ohc=XNZ0dQV8_q8Q7kNvwFKu68y&_nc_oc=Adm8I7OrAPh36pAznPKfbUPMsNQ2W1iaWA8u3UMBL0HHSz-WqyjIyMYCGBettfMC51Sx3d8rRH3k5tOLPPLEsye8&_nc_zt=23&_nc_ht=scontent.flim2-1.fna&_nc_gid=mPxoW0IjrzlSpuYe4gkelg&oh=00_Afa8ujiAj8Qqfl5V_l6u0EDvYzcj8PxFnZafzPUp0BUDcw&oe=68EE991C',
    location: {
      lat: -12.4088,
      lng: -74.8593,
      address: 'Av. Los Libertadores 234, Pampas, Tayacaja'
    },
    rating: 4.4,
    dishes: [
      { name: 'Parrilla Familiar', price: 'S/ 45.00', description: 'Variedad de carnes a la parrilla para 4 personas con acompañamientos' },
      { name: 'Anticuchos de Alpaca', price: 'S/ 20.00', description: 'Brochetas de carne tierna de alpaca marinadas en ají panca' },
      { name: 'Lomo Saltado Criollo', price: 'S/ 22.00', description: 'Clásico lomo saltado con papas fritas y arroz graneado' },
      { name: 'Chicharrón de Cerdo', price: 'S/ 16.00', description: 'Chicharrón crujiente acompañado de salsa criolla y cancha' }
    ],
    phone: '+51976543210',
    email: 'fogonanndino@pampas.com',
    hours: '12:00 PM - 11:00 PM'
  },
  {
    id: '3',
    name: 'Café de la Plaza',
    description: 'Cafetería y pastelería con productos artesanales locales.',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
    location: {
      lat: -12.4099,
      lng: -74.8587,
      address: 'Plaza de Armas s/n, Pampas, Tayacaja'
    },
    rating: 4.2,
    dishes: [
      { name: 'Café de Altura', price: 'S/ 8.00', description: 'Café premium cultivado en las montañas de Tayacaja' },
      { name: 'Empanadas de Queso', price: 'S/ 6.00', description: 'Empanadas artesanales rellenas de queso fresco local' },
      { name: 'Torta de Maíz Morado', price: 'S/ 10.00', description: 'Deliciosa torta tradicional con maíz morado y canela' },
      { name: 'Sandwich de Pavo', price: 'S/ 14.00', description: 'Sandwich gourmet con pavo, palta y vegetales frescos' }
    ],
    phone: '+51965432109',
    email: 'cafedelaplaza@pampas.com',
    hours: '6:00 AM - 9:00 PM'
  }
];

export const hotels: Hotel[] = [
  {
    id: '1',
    name: 'Apart - Hotel Valle Andino Pampas - Tayacaja - Huancavelica',
    description: 'Hotel boutique con arquitectura colonial y servicios modernos.',
    images: [
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg'
    ],
    location: {
      lat: -12.4093,
      lng: -74.8588,
      address: 'Jr. Bolívar 178, Pampas, Tayacaja'
    },
    rating: 4.5,
    priceRange: 'S/ 120 - S/ 200 por noche',
    services: ['WiFi gratuito', 'Desayuno incluido', 'Restaurante', 'Room service', 'Estacionamiento', 'Lavandería'],
    phone: '+51954321098',
    email: 'reservas@pampascolonial.com',
    rooms: 24
  },
  {
    id: '2',
    name: 'Hotel Plaza Pampas',
    description: 'Alojamiento económico y cómodo en el centro de la ciudad.',
    images: [
      'https://lh3.googleusercontent.com/p/AF1QipOuSAyttX0uirgkmPiL_I8DTTCu-8yo1OP3KoUL=w253-h187-k-no',
      'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg'
    ],
    location: {
      lat: -12.4101,
      lng: -74.8594,
      address: 'Av. Grau 89, Pampas, Tayacaja'
    },
    rating: 4.0,
    priceRange: 'S/ 60 - S/ 90 por noche',
    services: ['WiFi gratuito', 'Recepción 24h', 'Agua caliente', 'TV cable', 'Estacionamiento'],
    phone: '+51943210987',
    email: 'info@hostallosandes.com',
    rooms: 16
  },
  {
    id: '3',
    name: 'Casa Mallqui Hospedaje',
    description: 'Lodge ecológico con vistas panorámicas y experiencias de naturaleza.',
    images: [
      'https://scontent.flim2-2.fna.fbcdn.net/v/t39.30808-6/489029973_1933398980736065_4242431568750635892_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF5Ymy8DR2SUfM3mtxhUhxZG6O3kd7JuUwbo7eR3sm5TBUDA4LXSvBFLiX0VuguLPFtAWLzIQkMmmh8QqZ1EEc8&_nc_ohc=TKLHXo7fWLEQ7kNvwGoJGwK&_nc_oc=AdlvrZi7jjxlMgBSzd0zIm-G6E7Re9Br0FlsE3Q2SOCdqAM6QvooFXzygoaQTkJgv8zW4R9aFcJWiUhHRRD49G7I&_nc_zt=23&_nc_ht=scontent.flim2-2.fna&_nc_gid=fJwrQMMSsiW2_VH1UkIM8w&oh=00_AfbTfZkXXoMxKiwe5tCM_i8xSTV9gaSaSUyz7s2lUVrWzg&oe=68CCD896',
      'https://images.pexels.com/photos/277572/pexels-photo-277572.jpeg'
    ],
    location: {
      lat: -12.4050,
      lng: -74.8615,
      address: 'Carretera al Mirador Km 2, Pampas, Tayacaja'
    },
    rating: 4.8,
    priceRange: 'S/ 180 - S/ 300 por noche',
    services: ['WiFi gratuito', 'Tours guiados', 'Spa natural', 'Restaurante orgánico', 'Actividades al aire libre', 'Transporte'],
    phone: '+51932109876',
    email: 'reservas@ecolodgemirador.com',
    rooms: 12
  }
];

export const dishes: Dish[] = [
  {
    id: '1',
    name: 'Pachamanca',
    description: 'Plato ceremonial ancestral cocido bajo tierra con piedras calientes, carnes variadas y tubérculos andinos.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSiPOH7WBWK5iTBGXIHVDns-BS8P7djLS_0A&s',
    ingredients: ['Carne de res', 'Carne de cerdo', 'Pollo', 'Papas nativas', 'Camote', 'Choclo', 'Habas', 'Hierbas aromáticas'],
    averagePrice: 'S/ 25.00 - S/ 35.00',
    category: 'main'
  },
  {
    id: '2',
    name: 'Trucha Frita',
    description: 'Pescado fresco de las lagunas andinas, preparado con técnicas tradicionales y acompañamientos locales.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIqZ1M4O9245ssk8O_E9UoJdr9T247DClsOA&s',
    ingredients: ['Trucha fresca', 'Ajo', 'Limón', 'Ají amarillo', 'Papa amarilla', 'Ensalada criolla', 'Cancha serrana'],
    averagePrice: 'S/ 18.00 - S/ 25.00',
    category: 'main'
  },
  {
    id: '3',
    name: 'Cuy Colorado',
    description: 'Cuy asado al horno con ají colorado, especialidad ceremonial de la gastronomía huancavelicana.',
    image: 'https://buenazo.cronosmedia.glr.pe/original/2020/09/18/5f658a8e18bec76fb1584df4.jpg',
    ingredients: ['Cuy tierno', 'Ají colorado', 'Comino', 'Ajo', 'Sal de maras', 'Papa sancochada', 'Ensalada'],
    averagePrice: 'S/ 35.00 - S/ 45.00',
    category: 'main'
  },
  {
    id: '4',
    name: 'Caldo de Mote',
    description: 'Sopa nutritiva con quinua blanca, verduras andinas y carne de alpaca, ideal para el clima de altura.',
    image: 'https://www.cocineroperuano.com/images/caldo-mote.jpg',
    ingredients: ['Quinua blanca', 'Carne de alpaca', 'Zanahoria', 'Apio', 'Papa amarilla', 'Cebolla', 'Culantro'],
    averagePrice: 'S/ 12.00 - S/ 18.00',
    category: 'appetizer'
  },
  {
    id: '5',
    name: 'Chicha de Jora',
    description: 'Bebida fermentada tradicional elaborada con maíz de jora, herencia ancestral de los pobladores andinos.',
    image: 'https://www.comida-peruana.com/base/stock/Recipe/chicha-de-jora-peruana/chicha-de-jora-peruana_web.jpg',
    ingredients: ['Maíz de jora', 'Chancaca', 'Canela', 'Clavo de olor', 'Agua de manantial'],
    averagePrice: 'S/ 5.00 - S/ 8.00',
    category: 'drink'
  },
  {
    id: '6',
    name: 'Mazamorra de Calabaza',
    description: 'Postre tradicional cremoso con calabaza, leche y especias dulces, perfecto para cerrar una comida típica.',
    image: 'https://i.ytimg.com/vi/4E8AhuOx1WE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAaKj0LUJpBZQBegs642p6tVIKutg',
    ingredients: ['Calabaza', 'Leche fresca', 'Azúcar rubia', 'Canela', 'Clavo', 'Maicena', 'Pasas'],
    averagePrice: 'S/ 8.00 - S/ 12.00',
    category: 'dessert'
  }
];

export const events: Event[] = [
  {
    id: '1',
    name: 'Santisima Virgen Purísima Patrona de Pampas Tayacaja',
    description: 'Celebración religiosa más importante de Pampas con procesiones, danzas típicas y ferias gastronómicas.',
    image: 'https://scontent.flim2-5.fna.fbcdn.net/v/t1.6435-9/50138651_2316860688362553_5230511752612937728_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFGRUj5LdFUBmYuayV-j5IoEek6wWdlnGYR6TrBZ2WcZvSSlEFidQfLUdtKJbdSBa8zkO9thZi7AVzaRKUkc1HJ&_nc_ohc=3MEMo3p1qgkQ7kNvwGkHVJv&_nc_oc=AdneFyhiK9wvN2lJnIAY6e5OTFSjQj405xXDlp64LQ3YR-p8xRGnThRz5D_MXHoB7nT4MBAE6tNZ-fGM4pNrBoRI&_nc_zt=23&_nc_ht=scontent.flim2-5.fna&_nc_gid=TMNsFice9QT29WxkakLCwA&oh=00_Afar7SybYwUo7laS-5acZ-Tqszc0Minw-BWD53_FnOPb6A&oe=68EE956E',
    date: '20 de Enero',
    location: 'Plaza de Armas y calles principales',
    category: 'religious'
  },
  {
    id: '2',
    name: 'Carnaval Pampeño',
    description: 'Festividad colorida con comparsas, música tradicional, yunzas y celebraciones que duran toda la semana.',
    image: 'https://portal.andina.pe/EDPfotografia3/Thumbnail/2023/02/14/000933503W.webp',
    date: 'Febrero - Marzo (fecha movible)',
    location: 'Todo el distrito de Pampas',
    category: 'festival'
  },
  {
    id: '3',
    name: 'Tayta San Cristóbal',
    description: 'Evento gastronómico anual donde se preparan pachamancas comunales y se realizan concursos culinarios.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHMQd8LQ0XDFVAfD0RnWZcqx1rihd5XFT-g7SYXAYAoWK10z0a0GdmXnAco7N4qpHZ1zY&usqp=CAU',
    date: '1er domingo de Agosto',
    location: 'Campo ferial de Pampas',
    category: 'cultural'
  },
  {
    id: '4',
    name: 'Semana del Turismo',
    description: 'Semana dedicada a promover los atractivos turísticos con tours gratuitos, exposiciones y actividades culturales.',
    image: 'https://images.pexels.com/photos/1388444/pexels-photo-1388444.jpeg',
    date: 'Última semana de Septiembre',
    location: 'Diversos atractivos turísticos',
    category: 'cultural'
  },
  {
    id: '5',
    name: 'Fiesta del santiago Tayacajino',
    description: 'Fiesta dedicada al ganado, se celebra con musica ancestral asi como instrumentos.',
    image: 'https://i0.wp.com/mochilalista.wordpress.com/wp-content/uploads/2018/08/santiago-tayacajino-3.jpg?w=797&h=528&ssl=1',
    date: '25 de Julio',
    location: 'Provincia de Tayacaja',
    category: 'dance'
  }
];