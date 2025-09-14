import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('¡Gracias por tu mensaje! Te contactaremos pronto.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 2000);
  };

  return (
    <section id="contacto" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes preguntas sobre Pampas o necesitas ayuda para planear tu visita? Estamos aquí para ayudarte a vivir la mejor experiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Envíanos un Mensaje</h3>
            
            {submitMessage && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Tu nombre completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">info@pampastour.com</p>
                    <p className="text-gray-600">turismo@municipalidadpampas.gob.pe</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Teléfono</h4>
                    <p className="text-gray-600">+51 977 163 359</p>
                    <p className="text-gray-600">+51 064 123 456</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-red-100 rounded-full p-3">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Dirección</h4>
                    <p className="text-gray-600">Plaza de Armas s/n</p>
                    <p className="text-gray-600">Pampas, Tayacaja - Huancavelica</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                    <p className="text-gray-600">+51 977 163 359</p>
                    <button
                      onClick={() => window.open('https://wa.me/51977163359?text=Hola! Me gustaría información sobre el turismo en Pampas.', '_blank')}
                      className="text-green-600 hover:text-green-800 text-sm font-medium"
                    >
                      Chatear ahora →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Síguenos en Redes Sociales</h3>
              
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/carlos.silva.123829"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transition-colors duration-300 group"
                >
                  <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                </a>
                <a
                  href="https://www.instagram.com/karos._.c/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 hover:bg-pink-700 text-white p-4 rounded-full transition-colors duration-300 group"
                >
                  <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                </a>
              </div>
              
              <div className="mt-6 space-y-3 text-sm text-gray-600">
                <p className="flex items-center space-x-2">
                  <Facebook className="w-4 h-4 text-blue-600" />
                  <span>@PampasTourOficial</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span>@PampasTour</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 flex items-center">
                <MapPin className="w-6 h-6 text-red-600 mr-2" />
                Ubicación de Pampas
              </h3>
              <p className="text-gray-600 mt-2">
                Encuentra Pampas en el corazón de Tayacaja, Huancavelica
              </p>
            </div>
            <div className="h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15390.123456789!2d-74.8589!3d-12.4097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e0b5c0b5c0b5c%3A0x0!2sPampas%2C%20Tayacaja%2C%20Huancavelica!5e0!3m2!1sen!2spe!4v1635000000000!5m2!1sen!2spe"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}