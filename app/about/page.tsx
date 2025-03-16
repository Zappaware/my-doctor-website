import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="pt-24 min-h-screen bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#53b3e7] mb-6">Acerca de mí</h1>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#747474]">Dr. Luis A. Rincón Gutiérrez</h2>
            <p className="text-gray-600">
              Médico especialista comprometido con la salud y el bienestar de mis pacientes. 
              Con años de experiencia en el campo médico, me dedico a proporcionar atención 
              médica de calidad y personalizada.
            </p>
            <div className="space-y-2">
              <h3 className="font-semibold text-[#747474]">Especialidades:</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Medicina General</li>
                <li>Atención Preventiva</li>
                <li>Consulta Especializada</li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-100 h-96 rounded-lg">
            {/* Placeholder para la imagen del doctor */}
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <Image src="/image.png" alt="Doctor" width={250} height={250} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 