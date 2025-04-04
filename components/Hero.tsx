import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-blue-400 py-20 pt-24">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
          {/* Foto de perfil */}
          <div className="mb-8 md:mb-0 md:mr-8 rounded-full overflow-hidden w-[180px] h-[180px]">
            <Image
              src="/image.png" // Ruta a la foto de perfil en la carpeta public
              alt="Foto de perfil"
              width={180}
              height={180}
              layout="fixed"
              className="rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>

          {/* Contenido de texto y botones */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Consulta mis servicios médicos
            </h1>
            <p className="text-white mb-8 text-sm md:text-base">
              Estamos para ayudarte con tus necesidades preparación profesional.
            </p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <Button 
                variant="default"
                size="lg"
                className="bg-blue-700 hover:bg-yellow-200 hover:text-blue-700"
              >
                Consigue una cita
              </Button>
              <Button 
                variant="secondary"
                size="lg"
                className="bg-white text-blue-700 hover:bg-yellow-200"
              >
                Contacta con nosotros
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}