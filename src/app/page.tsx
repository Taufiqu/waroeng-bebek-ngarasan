import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-100 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-gray-800 mb-6 italic">
              Waroeng Bebek
              <span className="text-amber-600"> Ngarasan</span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Sajian bebek terenak di kota dengan cita rasa tradisional yang autentik.
              Nikmati kelezatan bebek bumbu khas Nusantara.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/menu"
                className="font-body bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors font-semibold text-lg"
              >
                Lihat Menu
              </Link>
              <Link
                href="/contact"
                className="font-body border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-lg hover:bg-amber-50 transition-colors font-semibold text-lg"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-4 italic">
              Menu Unggulan
            </h2>
            <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
              Cicipi kelezatan menu andalan kami yang telah menjadi favorit pelanggan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Menu Item 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center">
                <span className="font-body text-gray-600 text-lg">Foto Bebek Goreng</span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold text-gray-800 mb-2 italic">
                  Bebek Goreng Kremes
                </h3>
                <p className="font-body text-gray-600 mb-4">
                  Bebek goreng dengan bumbu rempah tradisional dan taburan kremes renyah
                </p>
                <span className="font-body text-amber-600 font-bold text-xl">Rp 45.000</span>
              </div>
            </div>

            {/* Menu Item 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-red-200 to-orange-300 flex items-center justify-center">
                <span className="font-body text-gray-600 text-lg">Foto Bebek Bakar</span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold text-gray-800 mb-2 italic">
                  Bebek Bakar Madu
                </h3>
                <p className="font-body text-gray-600 mb-4">
                  Bebek bakar dengan olesan madu dan bumbu kecap manis yang menggoda
                </p>
                <span className="font-body text-amber-600 font-bold text-xl">Rp 48.000</span>
              </div>
            </div>

            {/* Menu Item 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-green-200 to-yellow-300 flex items-center justify-center">
                <span className="font-body text-gray-600 text-lg">Foto Bebek Rica</span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold text-gray-800 mb-2 italic">
                  Bebek Rica-Rica
                </h3>
                <p className="font-body text-gray-600 mb-4">
                  Bebek dengan bumbu rica-rica pedas yang khas dan menantang selera
                </p>
                <span className="font-body text-amber-600 font-bold text-xl">Rp 50.000</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="font-body inline-block bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors font-semibold text-lg"
            >
              Lihat Semua Menu
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-6 italic">
                Tentang Kami
              </h2>
              <p className="font-body text-lg text-gray-600 mb-6 leading-relaxed">
                Waroeng Bebek Ngarasan hadir dengan komitmen menyajikan hidangan bebek 
                berkualitas tinggi dengan cita rasa autentik Nusantara. Dengan pengalaman 
                bertahun-tahun, kami menggunakan resep turun-temurun dan bahan-bahan 
                pilihan terbaik.
              </p>
              <p className="font-body text-lg text-gray-600 mb-8 leading-relaxed">
                Setiap hidangan diolah dengan penuh cinta dan keahlian oleh chef 
                berpengalaman untuk memberikan pengalaman kuliner yang tak terlupakan.
              </p>
              <Link
                href="/profile"
                className="font-body inline-block border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-lg hover:bg-amber-50 transition-colors font-semibold text-lg"
              >
                Baca Selengkapnya
              </Link>
            </div>
            <div className="bg-gradient-to-br from-amber-300 to-orange-400 rounded-2xl h-96 flex items-center justify-center">
              <span className="font-body text-white text-xl">Foto Suasana Waroeng</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-20 px-4 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 italic">
            Kunjungi Kami
          </h2>
          <p className="font-body text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Rasakan pengalaman kuliner yang tak terlupakan di Waroeng Bebek Ngarasan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="font-body bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors font-semibold text-lg"
            >
              Info Kontak
            </Link>
            <a
              href="https://wa.me/628123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-lg hover:bg-amber-50 hover:text-gray-800 transition-colors font-semibold text-lg"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
