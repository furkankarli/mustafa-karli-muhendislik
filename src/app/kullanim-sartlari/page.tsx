import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kullanım Şartları",
    description: "Mustafa Karlı Mühendislik web sitesi kullanım şartları. Hizmetlerimizi kullanırken uymanız gereken kurallar ve koşullar.",
    keywords: ["kullanım şartları", "hizmet şartları", "yasal uyarı", "web sitesi kullanımı"],
    openGraph: {
        title: "Kullanım Şartları | Mustafa Karlı Mühendislik",
        description: "Web sitemizi kullanırken uymanız gereken şartlar ve koşullar hakkında bilgi edinin.",
        url: "https://www.mustafakarlimuhendislik.com/kullanim-sartlari",
    },
};

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <section className="relative pt-40 pb-16 md:pt-48 md:pb-24 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero-construction.jpg"
                        alt="Kullanım Şartları"
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
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Kullanım Şartları</h1>
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
                                www.mustafakarlimuhendislik.com adresinde yer alan web sitesi ("Site") Mustafa Karlı Mühendislik
                                tarafından işletilmektedir. Sitemizi ziyaret ederek ve/veya kullanarak, aşağıdaki kullanım şartlarını
                                ("Şartlar") kabul etmiş sayılırsınız.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Lütfen bu Şartları dikkatlice okuyunuz. Bu Şartları kabul etmiyorsanız, Siteyi kullanmamanızı rica ederiz.
                            </p>
                        </div>

                        {/* Hizmetlerin Tanımı */}
                        <div className="mb-12 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8">
                            <h2 className="text-2xl font-bold text-white mb-4">1. Hizmetlerin Tanımı</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Mustafa Karlı Mühendislik olarak, Site üzerinden aşağıdaki hizmetleri sunmaktayız:
                            </p>
                            <ul className="text-gray-300 space-y-2 ml-6 list-disc">
                                <li>İnşaat mühendisliği hizmetleri hakkında bilgilendirme</li>
                                <li>Şirketimiz ve projelerimiz hakkında tanıtım</li>
                                <li>İletişim ve teklif alma olanağı</li>
                                <li>Referans projelerin görüntülenmesi</li>
                                <li>Hizmet portföyümüzün tanıtımı</li>
                            </ul>
                        </div>

                        {/* Kullanıcı Yükümlülükleri */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">2. Kullanıcı Yükümlülükleri ve Sorumlulukları</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Siteyi kullanırken aşağıdaki kurallara uymayı kabul edersiniz:
                            </p>
                            <ul className="text-gray-300 space-y-2 ml-6 list-disc">
                                <li>Yürürlükteki tüm yasalara ve düzenlemelere uygun hareket etmek</li>
                                <li>Doğru ve güncel bilgiler sağlamak</li>
                                <li>Başkalarının haklarını ihlal etmemek</li>
                                <li>Sitenin güvenliğini tehlikeye atabilecek faaliyetlerde bulunmamak</li>
                                <li>Zararlı yazılım, virüs veya benzeri kodlar göndermemek</li>
                                <li>Otomatik sistemler veya botlar kullanarak Site'ye erişmemek</li>
                                <li>Site içeriğini izinsiz kopyalamamak veya dağıtmamak</li>
                            </ul>
                        </div>

                        {/* Fikri Mülkiyet */}
                        <div className="mb-12 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8">
                            <h2 className="text-2xl font-bold text-white mb-4">3. Fikri Mülkiyet Hakları</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Site'de yer alan tüm içerik, tasarım, logo, metin, grafik, fotoğraf ve diğer materyaller
                                ("İçerik") Mustafa Karlı Mühendislik'in mülkiyetindedir veya lisanslıdır.
                            </p>
                            <div className="space-y-3 text-gray-300">
                                <p><strong className="text-white">3.1. Telif Hakları:</strong> Tüm İçerik, Türkiye Cumhuriyeti ve uluslararası telif hakkı yasaları ile korunmaktadır.</p>
                                <p><strong className="text-white">3.2. Kullanım Kısıtlamaları:</strong> İçerik, yalnızca kişisel ve ticari olmayan amaçlarla görüntülenebilir. Yazılı izin olmaksızın kopyalama, çoğaltma, değiştirme veya dağıtma yasaktır.</p>
                                <p><strong className="text-white">3.3. Marka Kullanımı:</strong> Mustafa Karlı Mühendislik adı, logosu ve diğer markaları, yazılı izin olmaksızın kullanılamaz.</p>
                            </div>
                        </div>

                        {/* Hizmet Koşulları */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">4. Hizmet Koşulları</h2>
                            <div className="space-y-4 text-gray-300">
                                <p><strong className="text-white">4.1. Hizmet Değişiklikleri:</strong> Mustafa Karlı Mühendislik, Site'de sunulan hizmetleri önceden haber vermeksizin değiştirme, askıya alma veya sonlandırma hakkını saklı tutar.</p>
                                <p><strong className="text-white">4.2. Erişim:</strong> Site'ye erişim geçici olarak kesintiye uğrayabilir veya bakım, güncelleme veya acil durumlar nedeniyle kısıtlanabilir.</p>
                                <p><strong className="text-white">4.3. Doğruluk:</strong> Site'de yer alan bilgilerin doğru ve güncel olması için çaba gösterilmekle birlikte, bilgilerin eksiksiz ve hatasız olduğu garanti edilmez.</p>
                            </div>
                        </div>

                        {/* Sorumluluk Reddi */}
                        <div className="mb-12 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8">
                            <h2 className="text-2xl font-bold text-white mb-4">5. Sorumluluk Reddi ve Sınırlamaları</h2>
                            <div className="space-y-4 text-gray-300">
                                <p><strong className="text-white">5.1. Genel Sorumluluk Reddi:</strong> Site ve içeriği "olduğu gibi" ve "mevcut olduğu şekilde" sunulmaktadır. Mustafa Karlı Mühendislik, açık veya zımni hiçbir garanti vermemektedir.</p>
                                <p><strong className="text-white">5.2. Dolaylı Zararlar:</strong> Mustafa Karlı Mühendislik, Site'nin kullanımından veya kullanılamamasından kaynaklanan dolaylı, arızi veya özel zararlardan sorumlu tutulamaz.</p>
                                <p><strong className="text-white">5.3. Üçüncü Taraf Bağlantıları:</strong> Site, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu bağlantılar yalnızca kolaylık sağlamak amacıyla verilmiştir ve söz konusu sitelerin içeriğinden sorumluluk kabul edilmez.</p>
                                <p><strong className="text-white">5.4. Teknik Sorunlar:</strong> Virüs, kötü amaçlı yazılım veya diğer teknik sorunlardan kaynaklanan zararlardan sorumluluk kabul edilmez.</p>
                            </div>
                        </div>

                        {/* Tazminat */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">6. Tazminat</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Site'yi kullanımınızdan, bu Şartları ihlal etmenizden veya üçüncü tarafların haklarını
                                ihlal etmenizden kaynaklanan her türlü talep, zarar, yükümlülük, maliyet ve masraftan
                                (avukatlık ücretleri dahil) Mustafa Karlı Mühendislik'i, yöneticilerini, çalışanlarını
                                ve temsilcilerini korumayı ve tazmin etmeyi kabul edersiniz.
                            </p>
                        </div>

                        {/* İletişim Bilgileri */}
                        <div className="mb-12 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8">
                            <h2 className="text-2xl font-bold text-white mb-4">7. İletişim Bilgileri Kullanımı</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Site üzerinden sağladığınız iletişim bilgileri:
                            </p>
                            <ul className="text-gray-300 space-y-2 ml-6 list-disc">
                                <li>Yalnızca talep ettiğiniz hizmetler için kullanılacaktır</li>
                                <li>Hizmet teklifi ve bilgilendirme amacıyla iletişim kurmak için kullanılabilir</li>
                                <li>Açık onayınız olmadan üçüncü taraflarla paylaşılmayacaktır</li>
                                <li>Gizlilik Politikamız kapsamında korunacaktır</li>
                            </ul>
                        </div>

                        {/* Uyuşmazlıklar */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">8. Uygulanacak Hukuk ve Uyuşmazlık Çözümü</h2>
                            <div className="space-y-4 text-gray-300">
                                <p><strong className="text-white">8.1. Uygulanacak Hukuk:</strong> Bu Şartlar, Türkiye Cumhuriyeti yasalarına tabidir ve bu yasalara göre yorumlanır.</p>
                                <p><strong className="text-white">8.2. Yetkili Mahkeme:</strong> Bu Şartlardan kaynaklanan veya bu Şartlarla ilgili her türlü uyuşmazlığın çözümünde İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.</p>
                                <p><strong className="text-white">8.3. Dostane Çözüm:</strong> Herhangi bir uyuşmazlık durumunda, taraflar öncelikle dostane bir çözüm bulmak için iyi niyetle müzakere edeceklerdir.</p>
                            </div>
                        </div>

                        {/* Değişiklikler */}
                        <div className="mb-12 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8">
                            <h2 className="text-2xl font-bold text-white mb-4">9. Şartlarda Değişiklikler</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Mustafa Karlı Mühendislik, bu Kullanım Şartları'nı istediği zaman değiştirme hakkını saklı tutar.
                                Değişiklikler, Site'de yayımlandığı anda yürürlüğe girer.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Değişikliklerden sonra Site'yi kullanmaya devam etmeniz, değiştirilen Şartları kabul ettiğiniz
                                anlamına gelir. Bu nedenle, bu sayfayı düzenli olarak kontrol etmenizi öneririz.
                            </p>
                        </div>

                        {/* Bölünebilirlik */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">10. Bölünebilirlik</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Bu Şartların herhangi bir hükmünün geçersiz veya uygulanamaz olduğuna karar verilmesi durumunda,
                                bu hüküm mümkün olan en geniş ölçüde uygulanacak şekilde yorumlanacak ve Şartların kalan
                                hükümleri tam olarak yürürlükte kalmaya devam edecektir.
                            </p>
                        </div>

                        {/* Feragat */}
                        <div className="mb-12 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8">
                            <h2 className="text-2xl font-bold text-white mb-4">11. Feragat</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Mustafa Karlı Mühendislik'in bu Şartların herhangi bir hükmünü uygulamaması,
                                söz konusu hükümden feragat edildiği anlamına gelmez ve gelecekte bu hükmü
                                uygulama hakkımızı etkilemez.
                            </p>
                        </div>

                        {/* İletişim */}
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8">
                            <h2 className="text-2xl font-bold text-white mb-4">12. İletişim</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Bu Kullanım Şartları hakkında sorularınız veya yorumlarınız için bizimle iletişime geçebilirsiniz:
                            </p>
                            <div className="text-gray-300 space-y-2">
                                <p><strong className="text-primary">Mustafa Karlı Mühendislik</strong></p>
                                <p><strong className="text-primary">E-posta:</strong> info@mustafakarlimuhendislik.com</p>
                                <p><strong className="text-primary">Telefon:</strong> +90 554 580 77 94</p>
                                <p><strong className="text-primary">Web:</strong> www.mustafakarlimuhendislik.com</p>
                            </div>
                        </div>

                        {/* Son Not */}
                        <div className="mt-12 pt-8 border-t border-primary/20">
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Bu Kullanım Şartları son olarak {new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
                                tarihinde güncellenmiştir. Siteyi kullanarak bu şartları okuduğunuzu, anladığınızı ve
                                kabul ettiğinizi beyan edersiniz.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

