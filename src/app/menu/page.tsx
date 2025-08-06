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
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen bg-cover bg-center flex items-center justify-center md:justify-start" style={{
        backgroundImage: "url('/bebek-menu.png')"
      }}>
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* Menu Popular Section */}
      <section className="py-12 md:py-20 px-4" style={{backgroundColor: '#f0e1cf'}}>
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-8 md:mb-16 px-4 md:px-8 lg:px-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6" style={{
              color: '#d74a26', 
              fontFamily: 'var(--font-mondish-black-italic), serif',
              lineHeight: '1.1'
            }}>
              Dimasak dengan Kasih, menghadirkan Cita pada setiap Hidangan
            </h1>
          </div>
          
          {/* Featured Menu - Bebek Oven Ngarasan */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-2 xl:gap-4 items-center mb-8 md:mb-12">
            {/* Column 1 - Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-1">
              <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-90 xl:h-90 rounded-full overflow-hidden">
                <img 
                  src="/menu/bebek-oven-ngarasan.png" 
                  alt="Bebek Oven Ngarasan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Column 2 - Content */}
            <div className="px-4 lg:px-0 lg:pl-4 xl:pl-8 order-2 lg:order-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal" style={{
                color: '#627663', 
                WebkitTextStroke: '0.2px rgba(240, 225, 207, 1)', 
                textShadow: '0 4px 3px rgba(0,0,0,0.35)',
                fontFamily: 'var(--font-mondish-black), serif'
                }}>
                Menu Populer
                </h2>
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal" style={{
                color: '#627663', 
                WebkitTextStroke: '0.4px rgba(240, 225, 207, 1)', 
                textShadow: '0 4px 3px rgba(0,0,0,0.35)',
                fontFamily: 'var(--font-mondish-black), serif'
                }}>
                Bebek Oven Ngarasan
              </h3>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-tight text-justify" style={{
                color: '#936348',
                fontFamily: 'var(--font-roboto-medium), sans-serif',
                textShadow: '0 4px 6px rgba(0,0,0,0.25)',
                wordSpacing: '-0.15em',
              }}>
                Bebek Oven Ngarasan adalah sajian paling populer dari Waroeng Bebek Ngarasan dan merupakan menu utama. Diolah dengan hati-hati dan teliti sehingga menghasilkan daging yang empuk, lembut, dan tidak amis. Rasa bumbu rahasia khas Waroeng Bebek Ngarasan yang didominasi rasa pedas dan juga sedikit rasa manis menambahkan rasa nikmat saat melahapnya.
              </p>
            </div>
          </div>
          
        </div>
        <div className="max-w-[90rem] mx-auto px-4">
          {/* Swiper Carousel */}
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={8}
            slidesPerView={1}
            navigation={false}
            pagination={false}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              480: {
                slidesPerView: 1.5,
                spaceBetween: 8,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 8,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 8,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
              1536: {
                slidesPerView: 5,
                spaceBetween: 12,
              },
            }}
            className="menu-swiper mb-2 md:mb-3"
          >
            {menuItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative flex flex-col items-center h-full">
                  {/* Image - positioned above and overlapping the border */}
                  <div className="relative z-10 mb-[-35px] sm:mb-[-40px] md:mb-[-80px] lg:mb-[-100px] xl:mb-[-265px]">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full border-2 md:border-4 border-[#617662]">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Border container with text */}
                  <div 
                    className="relative w-full h-64 sm:h-72 md:h-[35rem] lg:h-[45rem] xl:h-[58rem] flex items-center justify-center xl:mb-[-200px]"
                    style={{
                      backgroundImage: "url('/border-container.png')",
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center'
                    }}
                  >
                    {/* Text content centered vertically in border */}
                    <div className="flex items-center justify-center w-full h-full px-2 ">
                      <div className="text-start max-w-[10rem] sm:max-w-[12rem] md:max-w-[14rem] lg:max-w-[16rem] xl:max-w-[18rem] mt-2 xl:ml-2">
                        <h3 className="text-base sm:text-lg md:text-[1.2rem] lg:text-[1.1rem] xl:text-[1.2rem] font-bold -mb-1" style={{
                          color: '#936348',
                          fontFamily: 'var(--font-roboto-medium), sans-serif',
                        }}>
                          {item.name}
                        </h3>
                        <p className="text-sm sm:text-base md:text-[1.15rem] lg:text-[1.2rem] xl:text-[1.25rem] leading-tight" style={{
                          color: '#936348',
                          fontFamily: 'var(--font-roboto-regular), sans-serif',
                          lineHeight: '1.1',
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
          <div className="flex justify-center items-center gap-2 md:gap-4 mt-2 lg:gap-6 ">
            {/* Previous Button */}
            <button 
              onClick={() => swiperRef.current?.swiper?.slidePrev()}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-24 lg:h-24 hover:scale-110 transition-transform"
            >
              <img 
                src="/arrow-left.png" 
                alt="Previous"
                className="w-full h-full object-contain"
              />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-1 md:gap-2 lg:gap-6">
              {Array.from({ length: 6 }, (_, index) => (
                <div 
                  key={index}
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 rounded-full"
                  style={{ backgroundColor: '#946449' }}
                />
              ))}
            </div>
            
            {/* Next Button */}
            <button 
              onClick={() => swiperRef.current?.swiper?.slideNext()}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-24 lg:h-24 hover:scale-110 transition-transform"
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