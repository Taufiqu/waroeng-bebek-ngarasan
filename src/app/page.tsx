import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Background Image Section */}
      <section className="relative h-screen bg-cover bg-center" style={{
        backgroundImage: "url('/hero-home-bg.jpg')"
      }}>
        <div className="absolute inset-0 bg-black/20"></div> {/* semi transparan gelap */}
      </section>

      {/* Hero Text Section */}
      <section className="py-16 text-white" style={{backgroundColor: '#946449'}}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl italic font-normal mb-6 leading-tight">
            Rasa <span className='font-bold' style={{color: '#3C998F', letterSpacing: '0.05em'}}>serta</span> Kenangan
          </h1>
          <h2 className="font-heading font-extrabold italic text-5xl md:text-6xl mb-3" style={{color: '#3C998F', textShadow: '0 0 1px white, 0 0 1px white, 0 0 1px white, 0 0 1px white', letterSpacing: '0.05em'}}>
            Waroeng Bebek Ngarasan
          </h2>
          <p className="font-heading-light italic text-lg font-light mb-6 leading-relaxed max-w-3xl mx-auto opacity-90" style={{letterSpacing: '0.05em'}}>
            Menyajikan hidangan dengan penuh cita dan suasana dengan nostalgia akan rumah.
          </p>
          <p className="font-body text-md leading-relaxed max-w-5xl mx-auto opacity-90">
            Waroeng Bebek Ngarasan dengan suka hati dengan berinovasi untuk menyajikan sajian sederhana, terjangkau, dengan rasa yang nikmat dan suasana
            nostalgia. Dengan suasana masa lalu yang diperlihatkan pada interior, penyajian hidangan, serta suasana yang membawa mu seakan berkunjung ke
            rumah nenek.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="bg-[#f0e1cf]">
        {/* Profile Section - Gambar di Kanan */}
        <section className="py-12" style={{color: '#D84B26'}}>
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 items-center">
            <div className="md:col-span-2 p-8">
              <h3 className="text-4xl font-normal mb-6" style={{color: '#627663', WebkitTextStroke: '0.5px white', textShadow: '2px 2px 2px rgba(0,0,0,0.5)', fontFamily: 'var(--font-roboto-black), sans-serif'}}>Profile</h3>
              <h2 className="mb-6 text-orange-red" style={{fontFamily: 'var(--font-mondish-black-italic), serif', fontSize: '3.5rem', textShadow: '-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white', lineHeight: '1.1', wordSpacing: '-0.1em', width: '120%'}}>
                Tak Rindu karena tidak Mengenal, maka mari Mengenal
              </h2>
              <div className="mt-8">
                <Link 
                  href="/profile" 
                  className="inline-flex items-center justify-start px-12 py-4 hover:opacity-80 transition-opacity"
                  style={{
                    backgroundImage: "url('/button/button-bg.png')", 
                    backgroundSize: '70%', 
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'left center',
                    border: 'none',
                    outline: 'none',
                    minWidth: '280px',
                    height: '70px'
                  }}
                >
                  <img 
                    src="/button/profile-icon.png" 
                    alt="Profile Icon" 
                    className="w-15 h-15 mr-9 -ml-7 drop-shadow-md " 
                  />
                  <div className="font-heading font-semibold leading-tight text-orange-red flex flex-col text-left" style={{textShadow: '-0.5px -0.5px 0 white, -0.5px -0.5px 0 white, -0.5px -0.5px 0 white, -0.5px -0.5px 0 white'}}>
                    <span style={{fontSize: '1.1rem'}}>Lanjut ke</span>
                    <span style={{fontSize: '1.7rem'}}>Profile</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="md:col-span-2">
              <img 
                src="/foto-depan.png" 
                alt="Foto Warung Bebek Ngarasan" 
                className="w-full aspect-[4/3] object-cover rounded-3xl shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Menu Section - Gambar di Kiri */}
        <section className="py-12" style={{color: '#D84B26'}}>
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 items-center">
            <div className="order-2 md:order-1 md:col-span-2">
              <img 
                src="/bebek-menu.png" 
                alt="Menu Bebek Spesial" 
                className="w-full aspect-[4/3] object-cover rounded-3xl shadow-md"
              />
            </div>
            <div className="order-1 md:order-2 md:col-span-2 p-8">
              <h3 className="text-4xl font-normal mb-6" style={{color: '#627663', WebkitTextStroke: '0.5px white', textShadow: '2px 2px 2px rgba(0,0,0,0.5)', fontFamily: 'var(--font-roboto-black), sans-serif'}}>Menu</h3>
              <h2 className="mb-6 text-orange-red" style={{fontFamily: 'var(--font-mondish-black-italic), serif', fontSize: '3.5rem', textShadow: '-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white', lineHeight: '1.1', wordSpacing: '-0.1em', width: '120%'}}>
                Dimasak dengan Kasih, Menghadirkan Cita pada Setiap Hidangan
              </h2>
              <div className="mt-8">
                <Link 
                  href="/menu" 
                  className="inline-flex items-center justify-start px-12 py-4 hover:opacity-80 transition-opacity"
                  style={{
                    backgroundImage: "url('/button/button-bg.png')", 
                    backgroundSize: '70%', 
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'left center',
                    border: 'none',
                    outline: 'none',
                    minWidth: '280px',
                    height: '70px'
                  }}
                >
                  <img 
                    src="/button/menu-icon.png" 
                    alt="Menu Icon" 
                    className="w-15 h-15 mr-9 -ml-7 drop-shadow-md" 
                  />
                  <div className="font-heading font-semibold leading-tight text-orange-red flex flex-col text-left" style={{textShadow: '-0.5px -0.5px 0 white, -0.5px -0.5px 0 white, -0.5px -0.5px 0 white, -0.5px -0.5px 0 white'}}>
                    <span style={{fontSize: '1.25rem'}}>Lanjut ke</span>
                    <span style={{fontSize: '1.7rem'}}>Menu</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - Gambar di Kanan */}
        <section className="py-12" style={{color: '#D84B26'}}>
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 items-center">
            <div className="md:col-span-2 p-8">
              <h3 className="text-4xl font-normal mb-6" style={{color: '#627663', WebkitTextStroke: '0.5px white', textShadow: '2px 2px 2px rgba(0,0,0,0.5)', fontFamily: 'var(--font-roboto-black), sans-serif'}}>Contact</h3>
              <h2 className="mb-6 text-orange-red" style={{fontFamily: 'var(--font-mondish-black-italic), serif', fontSize: '3.5rem', textShadow: '-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white', lineHeight: '1.1', wordSpacing: '-0.1em', width: '120%'}}>
                Mari menyambung rasa dan kenangan di...
              </h2>
              <div className="mt-8">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-start px-12 py-4 hover:opacity-80 transition-opacity"
                  style={{
                    backgroundImage: "url('/button/button-bg.png')", 
                    backgroundSize: '70%', 
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'left center',
                    border: 'none',
                    outline: 'none',
                    minWidth: '280px',
                    height: '70px'
                  }}
                >
                  <img 
                    src="/button/contact-icon.png" 
                    alt="Contact Icon" 
                    className="w-15 h-15 mr-9 -ml-7 drop-shadow-md" 
                  />
                  <div className="font-heading font-semibold leading-tight text-orange-red flex flex-col text-left" style={{textShadow: '-0.5px -0.5px 0 white, -0.5px -0.5px 0 white, -0.5px -0.5px 0 white, -0.5px -0.5px 0 white'}}>
                    <span style={{fontSize: '1.25rem'}}>Lanjut ke</span>
                    <span style={{fontSize: '1.7rem'}}>Contact</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="md:col-span-2">
              <img 
                src="/suasana-warung.png" 
                alt="Suasana Warung Bebek Ngarasan" 
                className="w-full aspect-[4/3] object-cover rounded-3xl shadow-md"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
