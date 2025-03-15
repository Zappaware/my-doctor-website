import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#26B995] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
          {/* Columna 1: Logo y descripción */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Dr. Internista</h2>
            <p className="text-[#ABEDDC]">
              Cuidando de tu salud con experiencia y dedicación.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[#ABEDDC] hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#ABEDDC] hover:text-white">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#ABEDDC] hover:text-white">
                  Acerca de mí
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#ABEDDC] hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Información de contacto */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <ul className="text-[#ABEDDC] space-y-2">
              <li>Dirección: 123 Calle Falsa, Ciudad, País</li>
              <li>Teléfono: +123 456 7890</li>
              <li>Email: info@doctorinternista.com</li>
            </ul>
          </div>

          {/* Columna 4: Redes sociales */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-[#ABEDDC] hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-[#ABEDDC] hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.23 5.924c-.736.326-1.527.547-2.357.646.847-.508 1.498-1.312 1.804-2.27-.793.47-1.671.812-2.606.996-.75-.8-1.817-1.296-2.999-1.296-2.269 0-4.108 1.838-4.108 4.108 0 .322.036.635.106.935-3.415-.171-6.442-1.807-8.47-4.294-.353.607-.555 1.312-.555 2.064 0 1.424.725 2.68 1.825 3.415-.672-.021-1.305-.206-1.859-.512v.052c0 1.991 1.415 3.651 3.293 4.029-.344.094-.707.144-1.081.144-.265 0-.522-.026-.773-.074.522 1.63 2.038 2.816 3.833 2.85-1.404 1.1-3.174 1.757-5.096 1.757-.332 0-.659-.02-.98-.057 1.816 1.164 3.973 1.843 6.29 1.843 7.547 0 11.675-6.252 11.675-11.675 0-.178-.004-.355-.012-.531.802-.578 1.497-1.3 2.047-2.123z" />
                </svg>
              </a>
              <a href="#" className="text-[#ABEDDC] hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="border-t border-[#ABEDDC] mt-8 pt-8 text-center text-[#ABEDDC]">
          <p>© 2023 Dr. Internista. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}