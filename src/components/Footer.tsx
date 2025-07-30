import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-heading font-bold text-amber-400 mb-4 italic">
              Waroeng Bebek Ngarasan
            </h3>
            <p className="text-gray-300 text-sm font-body">
              Sajian bebek terenak di kota dengan cita rasa tradisional yang autentik.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-body font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-amber-400 transition-colors font-body">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-gray-300 hover:text-amber-400 transition-colors font-body">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-md font-semibold mb-4">Hubungi Kami</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>📍 Jl. Contoh No. 123, Kota</p>
              <p>📞 +62 123 456 7890</p>
              <p>🕒 Buka: 10:00 - 22:00 WIB</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Waroeng Bebek Ngarasan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
