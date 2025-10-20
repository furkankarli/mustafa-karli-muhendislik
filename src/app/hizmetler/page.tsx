import { Hammer, Zap, Wrench, Shield, Lightbulb, Briefcase } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hizmetlerimiz",
    description: "İnşaat müteahhitliği, elektrik tesisatı, mekanik tesisat, yapı denetim, danışmanlık ve proje yönetimi hizmetleri. Profesyonel çözümler için bize ulaşın.",
    keywords: ["inşaat müteahhitliği", "elektrik tesisatı", "mekanik tesisat", "yapı denetim", "mühendislik danışmanlığı", "proje yönetimi", "enerji yönetimi"],
    openGraph: {
        title: "Hizmetlerimiz | Mustafa Karlı Mühendislik",
        description: "İnşaat müteahhitliği, elektrik ve mekanik tesisat, yapı denetim, danışmanlık hizmetleri. 15+ yıllık deneyim ile yanınızdayız.",
        url: "https://www.mustafakarlimuhendislik.com/hizmetler",
    },
};

const services = [
    {
        icon: Hammer,
        title: "İnşaat Müteahhitliği",
        description: "Konut, ticari ve endüstriyel projeler için tam inşaat hizmetleri sunuyoruz."
    },
    {
        icon: Zap,
        title: "Elektrik Tesisatı",
        description: "Profesyonel elektrik tesisatı ve enerji yönetim sistemleri kurulumu."
    },
    {
        icon: Wrench,
        title: "Mekanik Tesisatı",
        description: "Su, doğalgaz ve ısıtma sistemleri için tam mekanik tesisatı hizmetleri."
    },
    {
        icon: Shield,
        title: "Yapı Denetim",
        description: "Bağımsız mühendis olarak yapı denetim ve kontrol hizmetleri."
    },
    {
        icon: Lightbulb,
        title: "Danışmanlık",
        description: "Proje tasarımı, mühendislik danışmanlığı ve teknik destek hizmetleri."
    },
    {
        icon: Briefcase,
        title: "Proje Yönetimi",
        description: "Başlangıçtan tamamlanmasına kadar profesyonel proje yönetimi."
    },
];

export default function Services() {
    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <section className="relative pt-36 pb-16 md:pt-44 md:pb-24">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-black to-black opacity-50"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Hizmetlerimiz</h1>
                    <p className="text-xl text-gray-400">
                        Kapsamlı inşaat ve mühendislik hizmetleri
                    </p>
                </div>
            </section>

            {/* Hizmetler Grid */}
            <section className="py-20 md:py-32 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 hover:border-primary/40 transition-all duration-300 group"
                                >
                                    <div className="bg-primary/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                                        <Icon size={32} className="text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{service.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Hizmet Detayları */}
            <section className="py-20 md:py-32 bg-gradient-to-b from-black to-black/50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Neden Bizim Hizmetlerimizi Seçmelisiniz?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Özellik 1 */}
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8">
                            <h3 className="text-xl font-bold mb-4 text-white">Deneyimli Profesyoneller</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Ekibimiz, alanında 15+ yıl deneyime sahip mühendisler ve teknisyenlerden oluşmaktadır.
                                Her projede en yüksek standartları uygulamaya kararlıyız.
                            </p>
                        </div>

                        {/* Özellik 2 */}
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8">
                            <h3 className="text-xl font-bold mb-4 text-white">Kalite Kontrol</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Her aşamada katı kalite kontrol prosesleri uyguluyor ve tüm işleri
                                uluslararası standartlara göre gerçekleştiriyoruz.
                            </p>
                        </div>

                        {/* Özellik 3 */}
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8">
                            <h3 className="text-xl font-bold mb-4 text-white">Zamanında Teslim</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Proje planlaması ve yönetiminde titiz olmak, zamanında teslim etmek
                                bizim temel ilkelerimizdir.
                            </p>
                        </div>

                        {/* Özellik 4 */}
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8">
                            <h3 className="text-xl font-bold mb-4 text-white">Müşteri Desteği</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Proje öncesinden sonrasına kadar müşteri memnuniyetini en üst düzeyde tutmak
                                ve 24/7 destek sağlamak için çalışıyoruz.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Proses */}
            <section className="py-20 md:py-32 bg-black">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Çalışma Prosesimiz</h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { step: "1", title: "Danışma", desc: "Proje gereksinimlerini detaylı olarak anlaşıyoruz" },
                            { step: "2", title: "Planlama", desc: "Kapsamlı proje planı ve zaman çizelgesi hazırlıyoruz" },
                            { step: "3", title: "Uygulama", desc: "Profesyonel ekibimiz projeyi gerçekleştiriyor" },
                            { step: "4", title: "Teslim", desc: "Kalite kontrol sonrası projeyi teslim ediyoruz" },
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-primary text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                                    {item.step}
                                </div>
                                <h4 className="text-lg font-bold mb-2 text-white">{item.title}</h4>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

