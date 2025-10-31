"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Building2, Award, Users, ArrowRight } from "lucide-react";

// NOT: Bu sayfa client component olduğu için metadata export edilemez
// Metadata için (home)/layout.tsx'te tanımlanmış

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/hero-construction.jpg"
            alt="İnşaat Mühendislik"
            fill
            className="object-cover will-change-transform animate-kenburns"
            priority
            quality={85}
          />
        </div>

        {/* Dark Overlay for text readability (lighter) */}
        <div className="absolute inset-0 bg-black/50 z-[1]"></div>

        {/* Gradient Overlay (softer) */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-black/30 to-black/60 z-[2]"></div>

        <div className="container mx-auto px-4 relative z-10 h-full flex items-center backface-hidden will-change-transform">
          {/* Slogan - Mobile-first readability */}
          <div className="max-w-4xl animate-slide-in-left opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <h1
              className="
                text-[1.9rem] leading-[2.35rem]
                sm:text-4xl sm:leading-[3rem]
                md:text-5xl md:leading-[3.5rem]
                lg:text-6xl lg:leading-[4.25rem]
                xl:text-7xl xl:leading-[5rem]
                font-extrabold tracking-tight text-primary text-shadow-lg
                inline-block
              "
            >
              Güvenilir Mühendislik, Kaliteli İnşaat
            </h1>
          </div>
        </div>

        {/* Scroll Indicator - More Prominent & Clickable */}
        <button
          onClick={() => {
            // Önce bir sonraki bölümün id'sine kaydırmayı dene
            const target = document.getElementById('services');
            if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              return;
            }
            // Geriye dönüş: ekran yüksekliği - navbar yüksekliği
            const navbarHeight = window.innerWidth >= 768 ? 128 : 112; // md:h-32 : h-28
            window.scrollTo({ top: window.innerHeight - navbarHeight, behavior: 'smooth' });
          }}
          className="absolute left-1/2 transform transform-gpu -translate-x-1/2 z-10 animate-bounce-slow cursor-pointer hover:scale-110 transition-transform bottom-40 md:bottom-8 backface-hidden"
          aria-label="Aşağı kaydır"
        >
          <div className="flex flex-col items-center text-primary gap-1">
            <span className="text-base md:text-lg font-medium tracking-wider">KEŞFET</span>
            <div className="w-[2px] h-5 bg-gradient-to-b from-transparent to-primary"></div>
            <svg className="w-5 h-5 -mt-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </button>
      </section>

      {/* Hizmetler Özeti */}
      <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-black via-black to-black/50 scroll-mt-[112px] md:scroll-mt-[128px]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Neden Bizi Seçmelisiniz?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Deneyim, kalite ve müşteri memnuniyeti bizim temel değerlerimizdir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Kart 1 */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="bg-primary/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Building2 size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Geniş Deneyim</h3>
              <p className="text-gray-400">
                Yılların birikimi ve çok sayıda başarılı proje ile sektörde lider konumdayız.
              </p>
            </div>

            {/* Kart 2 */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="bg-primary/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Award size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Kalite Garantisi</h3>
              <p className="text-gray-400">
                Her projede en yüksek kalite standartlarını uyguluyor ve müşteri memnuniyetini ön planda tutuyoruz.
              </p>
            </div>

            {/* Kart 3 */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="bg-primary/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Users size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Uzman Kadro</h3>
              <p className="text-gray-400">
                Alanında deneyimli mühendisler ve teknisyenlerden oluşan profesyonel ekibimiz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Son Projeler Özeti */}
      <section className="py-20 md:py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Son Projelerimiz</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Başarıyla tamamladığımız ve devam eden projelerimizden bazıları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gradient-to-br from-primary/10 to-black border border-primary/20 rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-300 group">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 h-48 flex items-center justify-center group-hover:from-primary/30 transition-all">
                  <Building2 size={64} className="text-primary/40 group-hover:text-primary/60 transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-white">Proje {i}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Başarıyla tamamlanan veya devam eden projemizin kısa açıklaması.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-primary font-semibold">Devam Ediyor</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/projeler">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Tüm Projelerimizi Görün <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-construction.jpg"
            alt="İnşaat Projesi"
            fill
            className="object-cover"
            quality={85}
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-[1]"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 z-[2]"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Sizin Projeniz Bizim Önceliğimiz</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Yeni bir proje başlatmak veya danışmanlık almak istiyorsanız,
            lütfen bizimle iletişime geçin.
          </p>
          <Link href="/iletisim">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-semibold">
              İletişim Formu <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
