import Image from "next/image";
import { CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hakkımızda",
    description: "Mustafa Karlı Mühendislik, inşaat ve mühendislik sektöründe 15+ yıllık deneyimi ile profesyonel hizmetler sunmaktadır. Deneyimli ekibimiz ve kalite garantimiz ile projelerinizde yanınızdayız.",
    keywords: ["hakkımızda", "mustafa karlı", "mühendislik firması", "inşaat şirketi", "profesyonel ekip", "deneyimli mühendisler"],
    openGraph: {
        title: "Hakkımızda | Mustafa Karlı Mühendislik",
        description: "15+ yıllık deneyim, 50+ başarılı proje, 30+ memnun müşteri. İnşaat ve mühendislik alanında güvenilir partneriniz.",
        url: "https://www.mustafakarlimuhendislik.com/hakkimizda",
    },
};

export default function About() {
    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <section className="relative pt-40 pb-16 md:pt-48 md:pb-24 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero-construction.jpg"
                        alt="Hakkımızda"
                        fill
                        className="object-cover"
                        quality={85}
                    />
                </div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70 z-[1]"></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-black/50 to-black/80 z-[2]"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Hakkımızda</h1>
                    <p className="text-xl text-gray-400">
                        Mustafa Karlı Mühendislik - İnşaat ve mühendislik alanında güvenilir partner
                    </p>
                </div>
            </section>

            {/* Şirket Bilgisi */}
            <section className="py-20 md:py-32 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Biz Kimiz?</h2>
                            <p className="text-gray-400 mb-4 leading-relaxed">
                                Mustafa Karlı Mühendislik, inşaat ve mühendislik sektöründe yılların deneyimi
                                ve uzmanlığı ile hizmet veren bir şirkettir. Kuruluşundan bu yana, sayısız
                                başarılı projeyi tamamlamış ve müşteri memnuniyetini en üst düzeyde tutmuştur.
                            </p>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Ekibimiz, alanında deneyimli mühendisler, mimarlar ve teknisyenlerden oluşmaktadır.
                                Her projede en yüksek kalite standartlarını uyguluyor ve zamanında teslim etmeyi
                                garantiliyoruz.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="text-primary flex-shrink-0" size={24} />
                                    <span className="text-gray-300">Profesyonel ve deneyimli ekip</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="text-primary flex-shrink-0" size={24} />
                                    <span className="text-gray-300">Kalite ve güvenilirlik garantisi</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="text-primary flex-shrink-0" size={24} />
                                    <span className="text-gray-300">Zamanında proje teslimi</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="text-primary flex-shrink-0" size={24} />
                                    <span className="text-gray-300">Müşteri memnuniyeti odaklı hizmet</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 rounded-lg h-96 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-6xl font-bold text-primary mb-2">15+</div>
                                <p className="text-gray-400">Yıl Deneyim</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* İstatistikler */}
            <section className="py-20 md:py-32 bg-gradient-to-b from-black to-black/50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Başarı Hikayemiz</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 text-center hover:border-primary/40 transition-all">
                            <div className="text-5xl font-bold text-primary mb-2">50+</div>
                            <p className="text-gray-400">Tamamlanan Proje</p>
                        </div>
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 text-center hover:border-primary/40 transition-all">
                            <div className="text-5xl font-bold text-primary mb-2">30+</div>
                            <p className="text-gray-400">Memnun Müşteri</p>
                        </div>
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 text-center hover:border-primary/40 transition-all">
                            <div className="text-5xl font-bold text-primary mb-2">100+</div>
                            <p className="text-gray-400">Uzman Personel</p>
                        </div>
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 text-center hover:border-primary/40 transition-all">
                            <div className="text-5xl font-bold text-primary mb-2">15+</div>
                            <p className="text-gray-400">Yıl Deneyim</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Misyon ve Vizyon */}
            <section className="py-20 md:py-32 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8">
                            <h3 className="text-2xl font-bold mb-4 text-white">Misyonumuz</h3>
                            <p className="text-gray-400 leading-relaxed">
                                İnşaat ve mühendislik projelerinde en yüksek kalite standartlarını uygulamak,
                                müşteri memnuniyetini sağlamak ve sektörde güvenilir bir partner olmak.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8">
                            <h3 className="text-2xl font-bold mb-4 text-white">Vizyonumuz</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Sektörde lider konuma gelmek, yenilikçi çözümler sunmak ve sürdürülebilir
                                kalkınmaya katkı sağlamak.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Değerlerimiz */}
            <section className="py-20 md:py-32 bg-gradient-to-b from-black to-black/50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Temel Değerlerimiz</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 hover:border-primary/40 transition-all">
                            <h4 className="text-xl font-bold mb-3 text-primary">Kalite</h4>
                            <p className="text-gray-400">
                                Her projede en yüksek kalite standartlarını uygulamak ve müşteri beklentilerini aşmak.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 hover:border-primary/40 transition-all">
                            <h4 className="text-xl font-bold mb-3 text-primary">Güvenilirlik</h4>
                            <p className="text-gray-400">
                                Verdiğimiz sözleri tutmak, zamanında teslim etmek ve müşteri güvenini kazanmak.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 hover:border-primary/40 transition-all">
                            <h4 className="text-xl font-bold mb-3 text-primary">İnovasyon</h4>
                            <p className="text-gray-400">
                                Yeni teknolojileri takip etmek ve projelerimizde en modern çözümleri uygulamak.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

