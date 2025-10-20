import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Award, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ana Sayfa",
  description: "Mustafa Karlı Mühendislik - İnşaat ve mühendislik alanında 15+ yıllık deneyim. İnşaat müteahhitliği, elektrik tesisatı, mekanik tesisat, yapı denetim ve proje yönetimi hizmetleri.",
  keywords: ["inşaat firması", "mühendislik hizmetleri", "inşaat müteahhitliği", "profesyonel mühendislik", "İstanbul inşaat", "kaliteli inşaat"],
  openGraph: {
    title: "Mustafa Karlı Mühendislik - İnşaat ve Mühendislik Hizmetleri",
    description: "15+ yıllık deneyim, 50+ başarılı proje. İnşaat ve mühendislik alanında güvenilir çözüm ortağınız.",
    url: "https://www.mustafakarlimuhendislik.com",
    images: [
      {
        url: "https://www.mustafakarlimuhendislik.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Mustafa Karlı Mühendislik",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-black to-black opacity-50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              İnşaat ve Mühendislik Alanında
              <span className="text-primary block mt-2"> Profesyonel Çözümler</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
              Mustafa Karlı Mühendislik olarak, yılların deneyimi ve uzman kadromuzla
              sizin projelerinizi en yüksek kalitede gerçekleştiriyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/iletisim">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-semibold">
                  Bize Ulaşın <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/projeler">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Projelerimizi Görün
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmetler Özeti */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-black via-black to-black/50">
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20"></div>
        <div className="absolute inset-0 bg-black/40"></div>

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
