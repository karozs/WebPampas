import React from 'react';
import { Mountain, Facebook, Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mountain className="w-8 h-8 text-green-500" />
              <span className="text-xl font-bold">PampasTour</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Descubre la magia de Pampas, corazón de Tayacaja. Tu guía completa para explorar los tesoros naturales, culturales y gastronómicos de Huancavelica.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/pampastour"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/pampastour"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@pampastour.com"
                className="text-gray-400 hover:text-green-500 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {[
                { name: 'Inicio', id: 'inicio' },
                { name: 'Lugares Turísticos', id: 'lugares' },
                { name: 'Restaurantes', id: 'restaurantes' },
                { name: 'Hoteles', id: 'hoteles' },
                { name: 'Gastronomía', id: 'gastronomia' },
                { name: 'Eventos', id: 'eventos' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-green-500 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Plaza de Armas s/n, Pampas, Tayacaja - Huancavelica</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+51 967 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@pampastour.com</span>
              </div>
            </div>
          </div>

          {/* Tourism Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Información Turística</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <strong className="text-white">Altitud:</strong> 3,276 msnm
              </div>
              <div>
                <strong className="text-white">Clima:</strong> Templado todo el año
              </div>
              <div>
                <strong className="text-white">Mejor época:</strong> Abril - Octubre
              </div>
              <div>
                <strong className="text-white">Idiomas:</strong> Español, Quechua
              </div>
              <div>
                <strong className="text-white">Moneda:</strong> Soles (PEN)
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm">
                © {currentYear} PampasTour. Todos los derechos reservados.
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Desarrollado para promover el turismo en Pampas, Tayacaja - Huancavelica
              </p>
            </div>
            
            <div className="flex items-center space-x-1 text-sm text-gray-300">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>para Pampas</span>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="text-center">
              <p className="text-xs text-gray-400 leading-relaxed">
                PampasTour es una iniciativa para impulsar el turismo sostenible y responsable en Pampas, Tayacaja - Huancavelica. 
                Trabajamos en colaboración con la comunidad local, restaurantes, hoteles y guías turísticos para ofrecer experiencias auténticas 
                que respeten nuestra cultura y medio ambiente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}