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
        <Link href="/" className="text-xl md:text-2xl font-bold text-[#1C1C1C]">
          Dr. Luis A. Rincón Gutiérrez
        </Link>

        {/* Menú de navegación (Desktop) */}
        <nav className="hidden md:flex space-x-4">
          <Link href="/services" className="text-[#747474] hover:text-[#26B995]">
            Servicios
          </Link>
          <Link href="/about" className="text-[#747474] hover:text-[#26B995]">
            Acerca de mí
          </Link>
          <Link href="/blog" className="text-[#747474] hover:text-[#26B995]">
            Blog
          </Link>
          <Link href="/conferences" className="text-[#747474] hover:text-[#26B995]">
            Conferencias
          </Link>
          <Link href="/contact" className="text-[#747474] hover:text-[#26B995]">
            Contacto
          </Link>
        </nav>

        {/* Botón de registro (Desktop) */}
        <button className="hidden md:block bg-[#28BF98] text-white px-6 py-2 rounded-lg hover:bg-[#26B995]">
          Registro Nuevo
        </button>

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
            <Link href="/services" className="text-[#747474] hover:text-[#26B995]">
              Servicios
            </Link>
            <Link href="/about" className="text-[#747474] hover:text-[#26B995]">
              Acerca de mí
            </Link>
            <Link href="/blog" className="text-[#747474] hover:text-[#26B995]">
              Blog
            </Link>
            <Link href="/conferences" className="text-[#747474] hover:text-[#26B995]">
              Conferencias
            </Link>
            <Link href="/contact" className="text-[#747474] hover:text-[#26B995]">
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