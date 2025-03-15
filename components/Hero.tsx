export default function Hero() {
  return (
    <section className="bg-[#26B995] py-20 pt-24"> {/* Añadimos pt-24 */}
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Consulta mis servicios médicos
        </h1>
        <p className="text-[#ABEDDC] mb-8 text-sm md:text-base">
          Estamos para ayudarte con tus necesidades médicas.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button className="bg-[#28BF98] text-white px-6 py-3 rounded-lg hover:bg-[#26B995]">
            Consigue una cita
          </button>
          <button className="bg-white text-[#28BF98] px-6 py-3 rounded-lg hover:bg-[#ABEDDC]">
            Contacta con nosotros
          </button>
        </div>
      </div>
    </section>
  );
}