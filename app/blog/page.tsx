import Image from 'next/image';

export default function BlogPage() {
  return (
    <main className="pt-24 min-h-screen bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#53b3e7] mb-6">Blog</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Ejemplo de artículo del blog */}
          <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-gray-100 h-48 relative">
              {/* Placeholder para la imagen del artículo */}
              <Image
                src="/electro.png"
                alt="Doctor"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-[#747474] mb-2 py-5">
                Cómo interpretar los resultados de tu electrocardiograma
              </h2>
              <p className="text-gray-600 mb-4">
                Aprende a interpretar los resultados de tu electrocardiograma y toma decisiones informadas sobre tu salud.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">12 Marzo, 2024</span>
                <button className="text-blue-700 hover:text-yellow-200 transition-colors">
                  Leer más →
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}