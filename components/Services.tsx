export default function Services() {
  const services = [
    { title: 'Consultas Generales', description: 'Atención médica integral.' },
    { title: 'Enfermedades Crónicas', description: 'Manejo de diabetes, hipertensión, etc.' },
    { title: 'Chequeos Preventivos', description: 'Evaluaciones de salud periódicas.' },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8"> {/* Texto azul oscuro */}
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-2"> {/* Texto azul oscuro */}
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}