import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gizlilik Politikası",
    description: "Mustafa Karlı Mühendislik gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi edinin.",
    keywords: ["gizlilik politikası", "KVKK", "kişisel veriler", "veri güvenliği"],
    openGraph: {
        title: "Gizlilik Politikası | Mustafa Karlı Mühendislik",
        description: "Kişisel verilerinizin korunması ve gizliliği bizim için önemlidir. KVKK uyumlu gizlilik politikamızı inceleyin.",
        url: "https://www.mustafakarlimuhendislik.com/gizlilik-politikasi",
    },
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <section className="relative pt-40 pb-16 md:pt-48 md:pb-24 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero-construction.jpg"
                        alt="Gizlilik Politikası"
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
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Gizlilik Politikası</h1>
                    <p className="text-xl text-gray-400">
                        Son Güncelleme: {new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-invert prose-lg max-w-none">

                        {/* Giriş */}
                        <div className="mb-12">
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Mustafa Karlı Mühendislik olarak, kişisel verilerinizin gizliliğine ve güvenliğine önem veriyoruz.
                                Bu gizlilik politikası, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında
                                kişisel verilerinizin nasıl toplandığını, kullanıldığını, saklandığını ve korunduğunu açıklamaktadır.
                            </p>
                        </div>

                        {/* Veri Sorumlusu */}
                        <div className="mb-12 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8">
                            <h2 className="text-2xl font-bold text-white mb-4">1. Veri Sorumlusu</h2>
                            <p className="text-gray-300 leading-relaxed mb-2">
                                KVKK uyarınca veri sorumlusu sıfatıyla hareket eden firmamızın iletişim bilgileri:
                            </p>
                            <ul className="text-gray-300 space-y-2 ml-6">
                                <li><strong className="text-primary">Ünvan:</strong> Mustafa Karlı Mühendislik</li>
                                <li><strong className="text-primary">E-posta:</strong> info@mustafakarlimuhendislik.com</li>
                                <li><strong className="text-primary">Telefon:</strong> +90 554 580 77 94</li>
                            </ul>
                        </div>

                        {/* Toplanan Veriler */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">2. Toplanan Kişisel Veriler</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Web sitemiz üzerinden aşağıdaki kişisel verilerinizi toplayabiliriz:
                            </p>
                            <ul className="text-gray-300 space-y-3 ml-6 list-disc">
                                <li><strong className="text-white">Kimlik Bilgileri:</strong> Ad, soyad</li>
                                <li><strong className="text-white">İletişim Bilgileri:</strong> E-posta adresi, telefon numarası</li>
                                <li><strong className="text-white">İşlem Güvenliği Bilgileri:</strong> IP adresi, çerez kayıtları, tarayıcı bilgileri</li>
                                <li><strong className="text-white">Pazarlama Bilgileri:</strong> İletişim tercihleri, hizmet talepleri</li>
                            </ul>
                        </div>

                        {/* Verilerin Kullanım Amaçları */}
                        <div className="mb-12 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8">
                            <h2 className="text-2xl font-bold text-white mb-4">3. Kişisel Verilerin İşlenme Amaçları</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
                            </p>
                            <ul className="text-gray-300 space-y-2 ml-6 list-disc">
                                <li>İletişim taleplerinize yanıt vermek</li>
                                <li>Hizmet teklifi sunmak ve proje değerlendirmesi yapmak</li>
                                <li>Müşteri ilişkileri yönetimi</li>
                                <li>Hizmet kalitesini iyileştirmek</li>
                                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                                <li>Bilgi güvenliği süreçlerinin yürütülmesi</li>
                            </ul>
                        </div>

                        {/* Veri Paylaşımı */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">4. Kişisel Verilerin Aktarılması</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Kişisel verileriniz, KVKK'nın 8. ve 9. maddelerinde belirtilen şartlara uygun olarak:
                            </p>
                            <ul className="text-gray-300 space-y-2 ml-6 list-disc">
                                <li>İş ortaklarımız ile (sözleşme gereği)</li>
                                <li>Hukuki yükümlülüklerimizi yerine getirmek için yetkili kamu kurum ve kuruluşları ile</li>
                                <li>Teknik destek sağlayıcılar ile</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed mt-4">
                                Kişisel verileriniz, yeterli güvenlik önlemleri alınarak ve KVKK'ya uygun şekilde aktarılmaktadır.
                            </p>
                        </div>

                        {/* Çerezler */}
                        <div className="mb-12 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8">
                            <h2 className="text-2xl font-bold text-white mb-4">5. Çerez (Cookie) Kullanımı</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Web sitemiz, kullanıcı deneyimini iyileştirmek ve site trafiğini analiz etmek amacıyla çerezler kullanmaktadır:
                            </p>
                            <ul className="text-gray-300 space-y-2 ml-6 list-disc">
                                <li><strong className="text-white">Zorunlu Çerezler:</strong> Sitenin çalışması için gerekli</li>
                                <li><strong className="text-white">Analitik Çerezler:</strong> Site kullanımını analiz etmek için</li>
                                <li><strong className="text-white">Fonksiyonel Çerezler:</strong> Tercihlerinizi hatırlamak için</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed mt-4">
                                Tarayıcı ayarlarınızdan çerezleri yönetebilir veya silebilirsiniz.
                            </p>
                        </div>

                        {/* Veri Güvenliği */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">6. Veri Güvenliği</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Kişisel verilerinizin güvenliğini sağlamak için:
                            </p>
                            <ul className="text-gray-300 space-y-2 ml-6 list-disc">
                                <li>SSL sertifikası ile şifreli veri iletimi</li>
                                <li>Güvenli sunucu altyapısı</li>
                                <li>Düzenli güvenlik güncellemeleri</li>
                                <li>Yetkilendirilmiş personel erişimi</li>
                                <li>Düzenli veri yedekleme</li>
                            </ul>
                        </div>

                        {/* KVKK Hakları */}
                        <div className="mb-12 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8">
                            <h2 className="text-2xl font-bold text-white mb-4">7. KVKK Kapsamındaki Haklarınız</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:
                            </p>
                            <ul className="text-gray-300 space-y-2 ml-6 list-disc">
                                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                                <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                                <li>İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                                <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
                                <li>Eksik veya yanlış işlenmiş olması hâlinde düzeltilmesini isteme</li>
                                <li>KVKK'da öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme</li>
                                <li>Düzeltme, silme ve yok edilme taleplerinin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
                                <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhine bir sonucun ortaya çıkmasına itiraz etme</li>
                                <li>Kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme</li>
                            </ul>
                        </div>

                        {/* Başvuru */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">8. Başvuru Yöntemi</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                KVKK kapsamındaki haklarınızı kullanmak için aşağıdaki yöntemlerle başvurabilirsiniz:
                            </p>
                            <div className="bg-black/50 border border-primary/20 rounded-lg p-6">
                                <p className="text-gray-300 mb-2"><strong className="text-primary">E-posta:</strong> info@mustafakarlimuhendislik.com</p>
                                <p className="text-gray-300 mb-2"><strong className="text-primary">Telefon:</strong> +90 554 580 77 94</p>
                            </div>
                            <p className="text-gray-300 leading-relaxed mt-4">
                                Başvurularınız, niteliğine göre en geç 30 gün içinde ücretsiz olarak sonuçlandırılacaktır.
                            </p>
                        </div>

                        {/* Değişiklikler */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">9. Politika Güncellemeleri</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Bu Gizlilik Politikası, yasal düzenlemelerdeki değişiklikler veya iş süreçlerindeki güncellemeler
                                doğrultusunda revize edilebilir. Yapılan değişiklikler web sitemizde yayımlandığı tarihte
                                yürürlüğe girer. Kullanıcılarımızı düzenli olarak bu sayfayı kontrol etmeye davet ediyoruz.
                            </p>
                        </div>

                        {/* İletişim */}
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8">
                            <h2 className="text-2xl font-bold text-white mb-4">10. İletişim</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Gizlilik Politikamız ile ilgili sorularınız için bizimle iletişime geçebilirsiniz:
                            </p>
                            <div className="text-gray-300 space-y-2">
                                <p><strong className="text-primary">E-posta:</strong> info@mustafakarlimuhendislik.com</p>
                                <p><strong className="text-primary">Telefon:</strong> +90 554 580 77 94</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

