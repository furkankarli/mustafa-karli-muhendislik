import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-primary/20">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Şirket Bilgisi */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-primary">Mustafa Karlı Mühendislik</h3>
                        <p className="text-gray-400 text-sm">
                            İnşaat ve mühendislik alanında profesyonel hizmetler sunuyoruz.
                        </p>
                    </div>

                    {/* Hızlı Linkler */}
                    <div>
                        <h4 className="text-md font-semibold mb-4 text-white">Hızlı Linkler</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-primary transition-colors">
                                    Ana Sayfa
                                </Link>
                            </li>
                            <li>
                                <Link href="/hakkimizda" className="text-gray-400 hover:text-primary transition-colors">
                                    Hakkımızda
                                </Link>
                            </li>
                            <li>
                                <Link href="/hizmetler" className="text-gray-400 hover:text-primary transition-colors">
                                    Hizmetler
                                </Link>
                            </li>
                            <li>
                                <Link href="/projeler" className="text-gray-400 hover:text-primary transition-colors">
                                    Projeler
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Daha Fazla Linkler */}
                    <div>
                        <h4 className="text-md font-semibold mb-4 text-white">Daha Fazla</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/referanslar" className="text-gray-400 hover:text-primary transition-colors">
                                    Referanslar
                                </Link>
                            </li>
                            <li>
                                <Link href="/iletisim" className="text-gray-400 hover:text-primary transition-colors">
                                    İletişim
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* İletişim Bilgisi */}
                    <div>
                        <h4 className="text-md font-semibold mb-4 text-white">İletişim</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <Phone size={18} className="text-primary mt-1 flex-shrink-0" />
                                <a href="tel:+905545807794" className="text-gray-400 text-sm hover:text-primary transition-colors">
                                    +90 554 580 77 94
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <Mail size={18} className="text-primary mt-1 flex-shrink-0" />
                                <a href="mailto:info@mustafakarlimuhendislik.com" className="text-gray-400 text-sm hover:text-primary transition-colors">
                                    info@mustafakarlimuhendislik.com
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">Adres Bilgisi</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-primary/20 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} Mustafa Karlı Mühendislik. Tüm hakları saklıdır.
                        </p>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <Link href="/gizlilik-politikasi" className="text-gray-400 hover:text-primary transition-colors text-sm">
                                Gizlilik Politikası
                            </Link>
                            <Link href="/kullanim-sartlari" className="text-gray-400 hover:text-primary transition-colors text-sm">
                                Kullanım Şartları
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

