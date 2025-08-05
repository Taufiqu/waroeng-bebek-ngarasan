'use client';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image and Social Media Buttons */}
      <section 
        className="relative min-h-screen bg-cover bg-center flex items-center justify-start"
        style={{
          backgroundImage: "url('/suasana-warung.png')"
        }}
      > 
        {/* Content Container */}
        <div className="relative z-10 max-w-[36rem] pl-16 text-left">
          
          {/* Row 1 - Title */}
          <div className="mb-12">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-[#f0e1cf]"
              style={{
                fontFamily: 'var(--font-mondish-black-italic), serif',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                lineHeight: '1.1'
              }}
            >
              Mari menyambung rasa dan kenangan di...
            </h1>
          </div>

          {/* Row 2 - Social Media Buttons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-[30rem]">
            
            {/* Column 1 - Buttons 1-4 */}
            <div className="space-y-4">
              
              {/* Instagram Button */}
              <button 
                onClick={() => window.open('https://www.instagram.com/waroengbebekngarasan?igsh=NHVhYmJhcWkwdXRp', '_blank')}
                className="w-full flex items-center justify-center py-3 px-6 hover:scale-105 transition-transform"
                style={{
                  backgroundImage: "url('/button-contact.png')",
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  minHeight: '50px',
                  border: 'none'
                }}
              >
                <span 
                  className="font-bold"
                  style={{
                    color: '#f0e1cf',
                    fontFamily: 'var(--font-mondish-bold), serif',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                    fontSize: '1.4rem'
                  }}
                >
                  Instagram
                </span>
              </button>

              {/* Facebook Button */}
              <button 
                onClick={() => window.open('https://www.facebook.com/share/1AtZf3hcnu/', '_blank')}
                className="w-full flex items-center justify-center py-3 px-6 hover:scale-105 transition-transform"
                style={{
                  backgroundImage: "url('/button-contact.png')",
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  minHeight: '50px',
                  border: 'none'
                }}
              >
                <span 
                  className="font-bold"
                  style={{
                    color: '#f0e1cf',
                    fontFamily: 'var(--font-mondish-bold), serif',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                    fontSize: '1.4rem'
                  }}
                >
                  Facebook
                </span>
              </button>

              {/* WhatsApp Button */}
              <button 
                onClick={() => window.open('https://wa.me/6281123465000?text=Halo%20Waroeng%20Bebek%20Ngarasan,%20saya%20ingin%20memesan', '_blank')}
                className="w-full flex items-center justify-center py-3 px-6 hover:scale-105 transition-transform"
                style={{
                  backgroundImage: "url('/button-contact.png')",
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  minHeight: '50px',
                  border: 'none'
                }}
              >
                <span 
                  className="font-bold"
                  style={{
                    color: '#f0e1cf',
                    fontFamily: 'var(--font-mondish-bold), serif',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                    fontSize: '1.4rem'
                  }}
                >
                  WhatsApp
                </span>
              </button>

              {/* Email Button */}
              <button 
                onClick={() => window.open('mailto:ngarasan@markin.id', '_blank')}
                className="w-full flex items-center justify-center py-3 px-6 hover:scale-105 transition-transform"
                style={{
                  backgroundImage: "url('/button-contact.png')",
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  minHeight: '50px',
                  border: 'none'
                }}
              >
                <span 
                  className="font-bold"
                  style={{
                    color: '#f0e1cf',
                    fontFamily: 'var(--font-mondish-bold), serif',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                    fontSize: '1.4rem'
                  }}
                >
                  Email
                </span>
              </button>
            </div>

            {/* Column 2 - Buttons 5-7 */}
            <div className="space-y-4">
              
              {/* GoFood Button */}
              <button 
                onClick={() => window.open('https://gofood.link/u/3a1a', '_blank')}
                className="w-full flex items-center justify-center py-3 px-6 hover:scale-105 transition-transform"
                style={{
                  backgroundImage: "url('/button-contact.png')",
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  minHeight: '50px',
                  border: 'none'
                }}
              >
                <span 
                  className="font-bold"
                  style={{
                    color: '#f0e1cf',
                    fontFamily: 'var(--font-mondish-bold), serif',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                    fontSize: '1.4rem'
                  }}
                >
                  GoFood
                </span>
              </button>

              {/* GrabFood Button */}
              <button 
                onClick={() => window.open('https://r.grab.com/g/6-20250805_111948_ff4a3bd1da1a4f6c8b76e17da454a5a8_MEXMPS-6-CYMFGCN3LX3BJX', '_blank')}
                className="w-full flex items-center justify-center py-3 px-6 hover:scale-105 transition-transform"
                style={{
                  backgroundImage: "url('/button-contact.png')",
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  minHeight: '50px',
                  border: 'none'
                }}
              >
                <span 
                  className="font-bold"
                  style={{
                    color: '#f0e1cf',
                    fontFamily: 'var(--font-mondish-bold), serif',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                    fontSize: '1.4rem'
                  }}
                >
                  GrabFood
                </span>
              </button>

              {/* ShopeeFood Button */}
              <button 
                onClick={() => window.open('https://shopee.co.id/universal-link/now-food/shop/859052?deep_and_deferred=1&shareChannel=copy_info', '_blank')}
                className="w-full flex items-center justify-center py-3 px-6 hover:scale-105 transition-transform"
                style={{
                  backgroundImage: "url('/button-contact.png')",
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  minHeight: '50px',
                  border: 'none'
                }}
              >
                <span 
                  className="font-bold"
                  style={{
                    color: '#f0e1cf',
                    fontFamily: 'var(--font-mondish-bold), serif',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                    fontSize: '1.4rem'
                  }}
                >
                  ShopeeFood
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>    
    </div>
  );
}
