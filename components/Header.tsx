import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Dr. Internista
        </Link>
        <nav className="space-x-4">
          <Link href="/about" className="text-gray-700 hover:text-blue-600">
            Sobre Mí
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-blue-600">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}