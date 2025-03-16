export default function ContactPage() {
  return (
    <main className="pt-24 min-h-screen bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#53b3e7] mb-6">Contacto</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Formulario de contacto */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-[#747474] mb-6">Envíanos un mensaje</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-[#747474] mb-2">Nombre completo</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#747474] mb-2">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#747474] mb-2">Mensaje</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-yellow-200 transition-colors"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-[#747474] mb-4">Información de contacto</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600">
                  <span>📍</span>
                  <p>Av. Principal #123, Ciudad</p>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <span>📞</span>
                  <p>+1 234 567 8900</p>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <span>✉️</span>
                  <p>contacto@doctor.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-[#747474] mb-4">Horario de atención</h2>
              <div className="space-y-2 text-gray-600">
                <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                <p>Sábados: 9:00 AM - 2:00 PM</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 