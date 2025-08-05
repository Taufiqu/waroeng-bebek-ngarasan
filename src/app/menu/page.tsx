'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useRef } from 'react';
import type { SwiperRef } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const menuItems = [
  {
    id: 1,
    name: 'Telur Bumbu Ngarasan',
    description: 'disajikan dengan hangat. Sangat cocok dimakan bersama nasi hangat. Dimasak dan dibalur bumbu rahasia ngarasan yang memiliki rasa dominan manis dengan sedikit pedas.',
    price: 'Rp 15.000',
    category: 'Telur Bumbu',
    image: '/menu/telur-bumbu-ngarasan.png',
    gradient: 'from-green-300 to-teal-300'
  },
  {
    id: 2,
    name: 'Lele Goreng Kremes',
    description: 'disajikan dengan hangat. rasa yang gurih cocok untuk dimakan bersama nasi hangat. Bersama dengan remahan tepung yang digoreng menambah rasa menyenangkan saat memakannya.',
    price: 'Rp 25.000',
    category: 'Lele Goreng',
    image: '/menu/lele-goreng-kremes.png',
    gradient: 'from-yellow-200 to-orange-300'
  },
  {
    id: 3,
    name: 'Ayam Oven Ngarasan',
    description: 'disajikan dengan hangat. Dagingnya yang empuk dan lembut memudahkan untuk dimakan. Dipanggang dengan baluran bumbu rahasia ngarasan yang memiliki rasa dominan manis dengan sedikit pedas.',
    price: 'Rp 38.000',
    category: 'Ayam Oven',
    image: '/menu/ayam-oven-ngarasan.png',
    gradient: 'from-red-200 to-orange-300'
  },
  {
    id: 4,
    name: 'Bebek Goreng Kremes',
    description: 'disajikan dengan hangat. Daging yang empuk dan tidak amis, serta rasa yang gurih cocok dilidah. Bersama dengan remahan tepung yang digoreng menambah rasa menyenangkan saat memakannya.',
    price: 'Rp 45.000',
    category: 'Bebek Goreng',
    image: '/menu/bebek-goreng-kremes.png',
    gradient: 'from-green-200 to-yellow-300'
  },
  {
    id: 5,
    name: 'Ayam Goreng Kremes',
    description: 'disajikan dengan hangat. Daging yang empuk serta rasa yang gurih cocok untuk dimakan bersama nasi hangat. Bersama dengan remahan tepung yang digoreng menambah rasa menyenangkan saat memakannya.',
    price: 'Rp 35.000',
    category: 'Ayam Goreng',
    image: '/menu/ayam-goreng-kremes.png',
    gradient: 'from-amber-200 to-orange-300'
  },
  {
    id: 6,
    name: 'Bebek Oven Ngarasan',
    description: 'disajikan dengan hangat. Dagingnya yang empuk dan lembut memudahkan untuk dimakan. Dipanggang dengan baluran bumbu rahasia ngarasan yang memiliki rasa dominan manis dengan sedikit pedas.',
    price: 'Rp 55.000',
    category: 'Bebek Oven',
    image: '/menu/bebek-oven-ngarasan.png',
    gradient: 'from-purple-200 to-pink-300'
  }
];

export default function MenuPage() {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative h-104 md:h-[700px] lg:h-[900px] bg-cover bg-center" style={{
        backgroundImage: "url('/bebek-menu.png')"
      }}>
        <div className="absolute inset-0 bg-black/20"></div> {/* semi transparan gelap */}
      </section>

      {/* Menu Popular Section */}
      <section className="py-20 px-4" style={{backgroundColor: '#f0e1cf'}}>
        <div className="max-w-[71rem] mx-auto">

          <div className="text-center mb-16 mr-22 ml-22">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{
              color: '#d74a26', 
              fontFamily: 'var(--font-mondish-black-italic), serif',
              lineHeight: '1.1'
            }}>
              Dimasak dengan Kasih, menghadirkan Cita pada setiap Hidangan
            </h1>
          </div>
          
          {/* Featured Menu - Bebek Oven Ngarasan */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 items-center mb-6">
            {/* Column 1 - Image */}
            <div className="flex justify-center -mr-7 -ml-37 mb-10">
              <div className="w-90 h-90 rounded-full overflow-hidden">
                <img 
                  src="/menu/bebek-oven-ngarasan.png" 
                  alt="Bebek Oven Ngarasan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Column 2 - Content */}
            <div className="space-y-2 -ml-30">
                <h2 className="text-4xl font-normal" style={{
                color: '#627663', 
                WebkitTextStroke: '0.2px rgba(240, 225, 207, 1)', 
                textShadow: '0 4px 3px rgba(0,0,0,0.35)', // efek blur/feather
                fontFamily: 'var(--font-mondish-black), serif', 
                fontSize: '2.8rem'
                }}>
                Menu Populer
                </h2>
              
              <h3 className="text-4xl font-normal" style={{
                color: '#627663', 
                WebkitTextStroke: '0.4px rgba(240, 225, 207, 1)', 
                textShadow: '0 4px 3px rgba(0,0,0,0.35)', // efek blur/feather
                fontFamily: 'var(--font-mondish-black), serif', 
                fontSize: '3.8rem'
                }}>
                Bebek Oven Ngarasan
              </h3>
              
              <p className="text-xl leading-tight text-justify" style={{
                color: '#936348',
                fontFamily: 'var(--font-roboto-medium), sans-serif',
                textShadow: '0 4px 6px rgba(0,0,0,0.25)', // efek blur/feather
                fontSize: '1.4rem',
                wordSpacing: '-0.15em',
              }}>
                Bebek Oven Ngarasan adalah sajian paling populer dari Waroeng Bebek Ngarasan dan merupakan menu utama. Diolah dengan hati-hati dan teliti sehingga menghasilkan daging yang empuk, lembut, dan tidak amis. Rasa bumbu rahasia khas Waroeng Bebek Ngarasan yang didominasi rasa pedas dan juga sedikit rasa manis menambahkan rasa nikmat saat melahapnya.
              </p>
            </div>
          </div>
          
        </div>
        <div className="max-w-[102rem] mx-auto px-4">
          {/* Swiper Carousel */}
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={1}
            slidesPerView={1}
            navigation={false}
            pagination={false}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 1,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 1,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 1,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 1,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 1,
              },
            }}
            className="menu-swiper mb-8"
          >
            {menuItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative flex flex-col items-center h-full">
                  {/* Image - positioned above and overlapping the border */}
                  <div className="relative z-10 mb-[-35px]">
                    <div className="w-48 h-48 rounded-full border-4 border-[#617662]">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Border container with text */}
                  <div 
                    className="relative w-full h-76 flex items-center justify-center pt-8"
                    style={{
                      backgroundImage: "url('/border-container.png')", // sesuaikan nama file border PNG
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center'
                    }}
                  >
                    {/* Text content centered vertically in border */}
                    <div className="flex items-center justify-center w-full h-full">
                      <div className="text-start max-w-[14rem]">
                        <h3 className="text-[1.2rem] font-bold" style={{
                          color: '#936348',
                          fontFamily: 'var(--font-roboto-medium), sans-serif'
                        }}>
                          {item.name}
                        </h3>
                        <p className="text-[1.15rem] leading-tight" style={{
                          color: '#936348',
                          fontFamily: 'var(--font-roboto-regular), sans-serif'
                        }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation */}
          <div className="flex justify-center items-center gap-8">
            {/* Previous Button */}
            <button 
              onClick={() => swiperRef.current?.swiper?.slidePrev()}
              className="w-25 h-25 hover:scale-110 transition-transform"
            >
              <img 
                src="/arrow-left.png" 
                alt="Previous"
                className="w-full h-full object-contain"
              />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-7">
              {Array.from({ length: 6 }, (_, index) => (
                <div 
                  key={index}
                  className="w-7 h-7 rounded-full"
                  style={{ backgroundColor: '#946449' }}
                />
              ))}
            </div>
            
            {/* Next Button */}
            <button 
              onClick={() => swiperRef.current?.swiper?.slideNext()}
              className="w-25 h-25 hover:scale-110 transition-transform"
            >
              <img 
                src="/arrow-right.png" 
                alt="Next"
                className="w-full h-full object-contain"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
