import Link from "next/link";
import { Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Referanslar",
    description: "Müşterilerimizin görüş ve deneyimleri. 30+ memnun müşteri, %98 memnuniyet oranı ile güvenilir iş ortağınız. Başarı hikayelerimizi keşfedin.",
    keywords: ["referanslar", "müşteri görüşleri", "memnun müşteriler", "başarı hikayeleri", "müşteri deneyimleri", "proje referansları"],
    openGraph: {
        title: "Referanslar | Mustafa Karlı Mühendislik",
        description: "30+ memnun müşteri, %98 memnuniyet oranı. Müşterilerimizin görüş ve deneyimlerini okuyun.",
        url: "https://www.mustafakarlimuhendislik.com/referanslar",
    },
};

const references = [
    {
        id: 1,
        name: "Ahmet Yılmaz",
        company: "ABC İnşaat Ltd. Şti.",
        role: "Genel Müdür",
        testimonial: "Mustafa Karlı Mühendislik ile çalışmak çok profesyonel bir deneyim oldu. Projemiz zamanında tamamlandı ve kalitesi mükemmeldi.",
        rating: 5
    },
    {
        id: 2,
        name: "Fatma Kaya",
        company: "XYZ Gayrimenkul",
        role: "Proje Müdürü",
        testimonial: "Ekibin profesyonelliği ve dikkat detaylara çok etkileyici. Tüm taraflarımızla sorunsuz bir işbirliği gerçekleştirdik.",
        rating: 5
    },
    {
        id: 3,
        name: "Mehmet Demir",
        company: "Demir İnşaat",
        role: "Müdür",
        testimonial: "Teknik bilgi ve deneyimleri ile projemize çok değer kattılar. Kesinlikle tekrar çalışmak istiyorum.",
        rating: 5
    },
    {
        id: 4,
        name: "Ayşe Çetin",
        company: "Çetin Mimarlık",
        role: "Proje Sahibi",
        testimonial: "Zamanında teslim, kaliteli işçilik ve mükemmel müşteri hizmetleri. Herkese tavsiye ediyorum.",
        rating: 5
    },
    {
        id: 5,
        name: "İbrahim Şahin",
        company: "Şahin Enerji",
        role: "Teknik Müdür",
        testimonial: "Elektrik tesisatı projemizde gösterdikleri titizlik ve profesyonellik takdire şayan.",
        rating: 5
    },
    {
        id: 6,
        name: "Zeynep Akçay",
        company: "Akçay Turizm",
        role: "Genel Müdür",
        testimonial: "Otel inşaatında gösterdikleri iş kalitesi ve zaman yönetimi beklentilerimizi aştı.",
        rating: 5
    },
];

export default function References() {
    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <section className="relative pt-36 pb-16 md:pt-44 md:pb-24">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-black to-black opacity-50"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Referanslar</h1>
                    <p className="text-xl text-gray-400">
                        Müşterilerimizin görüşleri ve deneyimleri
                    </p>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-20 md:py-32 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {references.map((reference) => (
                            <div
                                key={reference.id}
                                className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 hover:border-primary/40 transition-all duration-300"
                            >
                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(reference.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={18}
                                            className="fill-primary text-primary"
                                        />
                                    ))}
                                </div>

                                {/* Testimonial */}
                                <p className="text-gray-400 mb-6 leading-relaxed italic">
                                    &ldquo;{reference.testimonial}&rdquo;
                                </p>

                                {/* Author Info */}
                                <div className="border-t border-primary/20 pt-4">
                                    <p className="font-bold text-white">{reference.name}</p>
                                    <p className="text-sm text-gray-400">{reference.role}</p>
                                    <p className="text-sm text-primary font-semibold">{reference.company}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 md:py-32 bg-gradient-to-b from-black to-black/50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Müşteri Memnuniyeti</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 text-center">
                            <div className="text-5xl font-bold text-primary mb-2">30+</div>
                            <p className="text-gray-400">Memnun Müşteri</p>
                        </div>
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 text-center">
                            <div className="text-5xl font-bold text-primary mb-2">98%</div>
                            <p className="text-gray-400">Memnuniyet Oranı</p>
                        </div>
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 text-center">
                            <div className="text-5xl font-bold text-primary mb-2">50+</div>
                            <p className="text-gray-400">Tamamlanan Proje</p>
                        </div>
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 text-center">
                            <div className="text-5xl font-bold text-primary mb-2">15+</div>
                            <p className="text-gray-400">Yıl Deneyim</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-32 bg-black">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Siz de Memnun Müşterilerimiz Arasında Olabilirsiniz</h2>
                    <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                        Projelerinizi profesyonel bir şekilde gerçekleştirmek için bugün bize ulaşın.
                    </p>
                    <Link
                        href="/iletisim"
                        className="inline-block bg-primary text-black px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                        İletişim Formu
                    </Link>
                </div>
            </section>
        </div>
    );
}

