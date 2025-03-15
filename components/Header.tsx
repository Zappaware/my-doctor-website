"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl md:text-2xl font-bold text-[#53b3e7]">
          Dr. Luis A. Rincón Gutiérrez
        </Link>

        <div className="hidden md:flex items-center space-x-4">
          {/* Menú de navegación (Desktop) */}
          <nav className="flex space-x-4">
            <Link href="/services" className="text-[#747474] hover:text-yellow-200">
              Servicios
            </Link>
            <Link href="/about" className="text-[#747474] hover:text-yellow-200">
              Acerca de mí
            </Link>
            <Link href="/blog" className="text-[#747474] hover:text-yellow-200">
              Blog
            </Link>
            <Link href="/conferences" className="text-[#747474] hover:text-yellow-200">
              Conferencias
            </Link>
            <Link href="/contact" className="text-[#747474] hover:text-yellow-200">
              Contacto
            </Link>
          </nav>

          {/* Botón de registro (Desktop) */}
          <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-yellow-200">
            Registro Nuevo
          </button>
        </div>

        {/* Ícono de menú (Mobile) */}
        <button
          className="md:hidden text-[#1C1C1C]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú de navegación (Mobile) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="/services" className="text-[#747474] hover:text-yellow-200">
              Servicios
            </Link>
            <Link href="/about" className="text-[#747474] hover:text-yellow-200">
              Acerca de mí
            </Link>
            <Link href="/blog" className="text-[#747474] hover:text-yellow-200">
              Blog
            </Link>
            <Link href="/conferences" className="text-[#747474] hover:text-yellow-200">
              Conferencias
            </Link>
            <Link href="/contact" className="text-[#747474] hover:text-yellow-200">
              Contacto
            </Link>
            <button className="bg-[#28BF98] text-white px-6 py-2 rounded-lg hover:bg-[#26B995]">
              Registro Nuevo
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}