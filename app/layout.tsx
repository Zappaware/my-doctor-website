import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} pt-24`}> {/* Añadimos pt-24 */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}