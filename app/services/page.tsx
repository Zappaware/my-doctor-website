export default function ServicesPage() {
  return (
    <main className="pt-24 min-h-screen bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#53b3e7] mb-6">Servicios</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Ejemplo de tarjeta de servicio */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-[#747474] mb-4">Consulta General</h2>
            <p className="text-gray-600 mb-4">
              Atención médica integral y personalizada para el diagnóstico y tratamiento de diversas condiciones de salud.
            </p>
            <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-yellow-200 transition-colors">
              Agendar Cita
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 