export default function Hero() {
  return (
    <section className="bg-blue-600 py-20"> {/* Cambia el fondo a azul medio */}
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-white mb-4"> {/* Texto blanco */}
          Bienvenido al Consultorio del Dr. Internista
        </h1>
        <p className="text-gray-100 mb-8"> {/* Texto gris claro */}
          Cuidando de tu salud con experiencia y dedicación.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
          Agenda una cita
        </button>
      </div>
    </section>
  );
}