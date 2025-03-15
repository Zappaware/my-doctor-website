export default function Services() {
  const services = [
    { title: 'Expert Doctors', description: 'On what matters most free matching' },
    { title: 'Free Support', description: 'An easy-to-use online directory' },
    { title: 'Online Care', description: 'One-to-one matching for experience support' },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#1C1C1C] mb-8">
          OUR SERVICES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-[#FFFFFF] p-6 rounded-lg shadow-md border border-[#ABEDDC]">
              <h3 className="text-xl font-semibold text-[#26B995] mb-2">
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