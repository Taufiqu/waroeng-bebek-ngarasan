import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profil Kami - Waroeng Bebek Ngarasan',
  description: 'Cerita perjalanan Waroeng Bebek Ngarasan dalam menyajikan hidangan bebek terbaik dengan cita rasa tradisional Nusantara.',
  keywords: 'profil, sejarah, waroeng bebek, tradisional, kuliner indonesia',
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-screen bg-cover bg-center" style={{
        backgroundImage: "url('/hero-profile-bg.jpg')"
      }}>
        <div className="absolute inset-0 bg-black/20"></div> {/* semi transparan gelap */}
      </section>

      {/* Content Section */}
      <section className="py-16 px-4" style={{backgroundColor: '#f0e1cf'}}>
        <div className="max-w-[96rem] mx-auto">
          
          {/* Row 1 - Main Title */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{
              color: '#d74a26', 
              fontFamily: 'var(--font-mondish-black-italic), serif',
              lineHeight: '1.1'
            }}>
              'Tak Rindu karena tidak Mengenal, maka mari Mengenal
            </h1>
          </div>

          {/* Row 2 - Three Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pr-5 pl-5">
            
            {/* Column 1 - Main Story */}
            <div className="space-y-4">
              <p className="text-lg leading-tight text-justify" style={{color: '#936348'}}>
                Waroeng Bebek Ngarasan berdiri pada tahun 2007 di Bandung, Jawa Barat, sebagai usaha pengolahan pangan rumahan. Filosofi nama 'Ngarasan' sendiri, pemilik ingin menciptakan makanan yang enak secara teknis dan membekas secara emosional. Waroeng Bebek Ngarasan sendiri memiliki awalnya mengusung konsep cepat saji karena lokasi di sekitar kampus. Lalu ada tahun 2015, rumah makan resmi mengusung konsep tema rumah jaman dulu (vintage) Indonesia untuk keluarga, dengan suasana hangat nyaman, resep rumahan, dan sentuhan nostalgia.
              </p>
              
              <p className="text-lg leading-tight text-justify" style={{color: '#936348'}}>
                Ide untuk menjual bebek oven ngarasan muncul saat melihat bebek dianggap makanan "bermasalah" (amis, alot, terlalu berminyak). sehingga pemiliki menemukan sebuah solusi, yaitu memanggang bebek dengan teknik oven slow-cook agar tekstur empuk, aroma bumbu rahasia tetap kuat dan meresap hingga ke serat daging.
              </p>

              <p className="text-lg leading-tight text-justify" style={{color: '#936348'}}>
                Untuk saat ini, kami, Waroeng Bebek Ngarasan terus berusaha untuk tetap menjaga dan meningkatkan kenyamanan serta kemudahan bagi para tamu yang menyantap hidangan kami, baik secara langsung di tempat, maupun tamu daring.
              </p>
            </div>

            {/* Column 2 - Vision & Mission */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-medium leading-tight" style={{
                color: '#d74a26',
                fontFamily: 'var(--font-mondish-black-italic), serif'
              }}>
                Kami ada dengan sebuah Mimpi dan Tujuan, serta Visi dan Misi
              </h2>
              
              <p className="text-lg leading-tight text-justify" style={{color: '#936348'}}>
                Waroeng Bebek Ngarasan hadir dengan harapan untuk membawa Anda menembus waktu, dan tujuan untuk menyuguhkan nostalgia di setiap suapan. Mari sejenak singgah, dan biarkan kami bercerita.
              </p>

              <p className="text-lg leading-tight text-justify" style={{color: '#936348'}}>
                Inilah Visi Waroeng Bebek Ngarasan: menciptakan sebuah tempat di mana pengalaman makan menjadi sebuah perjalanan istimewa. Bukan hanya soal rasa bumbu medok yang menggungah selera dari hidangan Nusantara kami, tapi juga tentang bagaimana konsep vintage yang kami usung mampu membangkitkan suasana ramah dan hangat yang sudah jarang ditemui.
              </p>

              <p className="text-lg leading-tight text-justify" style={{color: '#936348'}}>
                Sebagai Misi, kami bertekad mempertahankan keaslian rasa dan kualitas yang tak lekang oleh zaman. Dengan keramahan dari segenap hati, kami ingin setiap tamu yang datang merasa disayangi, sama seperti keluarga sendiri.
              </p>
            </div>

            {/* Column 3 - Philosophy */}
            <div className="space-y-12 flex flex-col">
              <h3 className="text-2xl md:text-3xl font-medium leading-tight" style={{
                color: '#d74a26',
                fontFamily: 'var(--font-mondish-black-italic), serif'
              }}>
                Filosofi yang kami pegang teguh dalam setiap hidangan dan pengalaman para tamu
              </h3>
              
              <h2 className="text-5xl md:text-5xl font-medium leading-tight text-center" style={{
                color: '#617662',
                fontFamily: 'var(--font-mondish-bold-italic), serif',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
              }}>
                "Tidak ada makanan terbaik, yang ada hanya resep makanan yang lebih baik."
              </h2>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
