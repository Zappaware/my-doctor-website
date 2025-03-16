export default function Services() {
  const services = [
    { title: 'Consulta Médica', description: 'Agenda en mi perfil de Doctoralia' },
    { title: 'Mentoría profesional', description: 'Mentoría para estudiantes y profesionales' },
    { title: 'Cuidado Online', description: 'Servicios de cuidado uno a uno' },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#53b3e7] mb-8">
          MIS SERVICIOS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-[#FFFFFF] p-6 rounded-lg shadow-md border border-[#ABEDDC]">
              <h3 className="text-xl font-semibold text-[#3026b9] mb-2">
                {service.title}
              </h3>
              <p className="text-[#747474]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}