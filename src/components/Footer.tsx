import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#946449] text-white py-1">
      <div className="max-w-8xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-4">
          
          {/* Logo Section */}
          <div className="flex items-center pl-10">
            <Image 
              src="/logo-icon-white.png" 
              alt="Waroeng Bebek Ngarasan Logo" 
              width={80} 
              height={80}
              className="mr-4"
            />
          </div>
          
          {/* Vertical Divider */}
          <div className="hidden md:block pt-3 -ml-4 mr-4">
            <div className="w-1 bg-[#F1E2D0] opacity-60" style={{ height: '70px' }}></div>
          </div>
          
          {/* Content Grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-0 text-sm items-start pt-4">
            
            {/* Address */}
            <div className='text-left -mt-1 mb-2'>
              <h3 className="font-heading medium mb-2 text-[#F1E2D0] pl-4 text-xl">Address</h3>
              <p className="text-[#F1E2D0] leading-relaxed pl-4 -mt-2">
                Jl. Tubagus Ismail No.21,<br />
                Sekeloa, Kecamatan<br />
                Coblong, Kota Bandung
              </p>
            </div>
            
            {/* Opening Hours */}
            <div className='-mt-1'>
              <h3 className="font-heading medium mb-2 text-[#F1E2D0] pl-4 text-xl">Opening Hours</h3>
              <p className="text-[#F1E2D0] leading-relaxed pl-4">
                Setiap Hari 11.00 - 22.00
              </p>
            </div>
            
            {/* Contact */}
            <div className='-mt-1'>
              <h3 className="font-heading medium mb-2 text-[#F1E2D0] pl-4 text-xl">Contact</h3>
              <p className="text-[#F1E2D0] leading-relaxed pl-4">
                +62 811-2346-500<br />
                ngarasan@markin.id
              </p>
            </div>
            
            {/* Follow */}
            <div className='items-center -mt-1'>
              <h3 className="font-heading medium mb-2 text-[#F1E2D0] pl-4 text-xl">Follow</h3>
              <div className="flex gap-3 pl-1">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image 
                    src="/logo-icon-facebook.png" 
                    alt="Facebook" 
                    width={24} 
                    height={24}
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image 
                    src="/logo-icon-instagram.png" 
                    alt="Instagram" 
                    width={24} 
                    height={24}
                  />
                </a>
              </div>
            </div>
            
          </div>
          
          {/* Right Side - Privacy & Terms */}
          <div className="text-right pr-10 pt-4">
            <Link href="#" className="block hover:text-[#F1E2D0] text-xs mb-1 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="block hover:text-[#F1E2D0] text-xs transition-colors">
              Terms of Service
            </Link>
            <p className="text-xs mt-4 text-[#F1E2D0] opacity-80">
              © 2025 Designed by Anissa Kultsum
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;