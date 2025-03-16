import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Footer() {
  return (
    <footer className="bg-blue-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
          {/* Columna 1: Logo y descripción */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Dr. Internista</h2>
            <p className="text-white">
              Cuidando de tu salud con experiencia y dedicación.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {[
                { href: "/", text: "Home" },
                { href: "/services", text: "Servicios" },
                { href: "/about", text: "Acerca de mí" },
                { href: "/contact", text: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <Button
                    variant="link"
                    className="text-white hover:text-yellow-200 p-0 h-auto font-normal"
                    asChild
                  >
                    <Link href={link.href}>{link.text}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Información de contacto */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <ul className="text-white space-y-2">
              <li>Dirección: 123 Calle Falsa, Ciudad, País</li>
              <li>Teléfono: +123 456 7890</li>
              <li>Email: info@doctorinternista.com</li>
            </ul>
          </div>

          {/* Columna 4: Redes sociales */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              {[
                {
                  name: "Facebook",
                  href: "https://www.facebook.com/profile.php?id=61573893670370",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325v21.351C0 23.407 0.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c0.732 0 1.325-0.593 1.325-1.325V1.325C24 0.593 23.407 0 22.675 0z" />
                    </svg>
                  ),
                },
                {
                  name: "Instagram",
                  href: "https://www.instagram.com/dr.luis.rincon/",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <HoverCard key={social.name}>
                  <HoverCardTrigger asChild>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-yellow-200"
                    >
                      {social.icon}
                    </a>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-auto">
                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-medium">Síguenos en {social.name}</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}

              <HoverCard>
                <HoverCardTrigger asChild>
                  <a
                    href="https://www.doctoralia.com.mx/luis-alberto-rincon-gutierrez/internista/celaya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-yellow-200"
                  >
                    <Image
                      src="/doctoralia-favicon.png"
                      alt="Doctoralia"
                      width={24}
                      height={24}
                      className="w-6 h-6 filter brightness-0 invert hover:brightness-100 hover:invert-0"
                    />
                  </a>
                </HoverCardTrigger>
                <HoverCardContent className="w-auto">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium">Agenda tu cita en Doctoralia</p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="border-t border-[#ABEDDC] mt-8 pt-8 text-center text-white">
          <p>© 2023 Dr. Internista. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
