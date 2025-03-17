import Image from "next/image";

export default function ConferencesPage() {
  return (
    <main className="pt-24 min-h-screen bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#53b3e7] mb-6">Conferencias</h1>
        <div className="space-y-6">
          {/* Ejemplo de conferencia */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="bg-gray-100 h-48 rounded-lg">
                  {/* Placeholder para la imagen de la conferencia */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400 relative">
                    <Image
                      src="/medicina-prev.jpg"
                      alt="Doctor"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 space-y-4">
                <h2 className="text-2xl font-semibold text-[#747474]">
                  Avances en Medicina Preventiva
                </h2>
                <div className="flex items-center space-x-4 text-gray-600">
                  <span>📅 15 Abril, 2024</span>
                  <span>🕒 18:00 - 20:00</span>
                  <span>📍 Centro de Convenciones</span>
                </div>
                <p className="text-gray-600">
                  Únete a esta conferencia donde discutiremos los últimos
                  avances en medicina preventiva y cómo implementarlos en la
                  práctica diaria.
                </p>
                <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-yellow-200 transition-colors">
                  Registrarse
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
