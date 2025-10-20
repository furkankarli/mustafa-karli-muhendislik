"use client";

import { Phone } from "lucide-react";
import { useState } from "react";

export default function FloatingActionButtons() {
    const [isOpen, setIsOpen] = useState(false);

    const handlePhoneCall = () => {
        window.open("tel:+905545807794", "_self");
    };

    const handleWhatsApp = () => {
        const message = encodeURIComponent("Merhaba! Projeleriniz hakkında bilgi almak istiyorum.");
        window.open(`https://wa.me/905545807794?text=${message}`, "_blank");
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <div className="relative">
                {/* WhatsApp Button */}
                <div className={`absolute bottom-32 right-1 flex items-center gap-3 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                    <div className="bg-black/80 text-white text-xs px-3 py-1.5 rounded-md shadow-lg whitespace-nowrap flex items-center h-12">
                        WhatsApp
                    </div>
                    <button
                        onClick={handleWhatsApp}
                        className="w-12 h-12 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
                        style={{ backgroundColor: '#25D366' }}
                        aria-label="WhatsApp mesaj gönder"
                        title="WhatsApp"
                    >
                        {/* WhatsApp SVG Icon */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                        </svg>
                    </button>
                </div>

                {/* Phone Button */}
                <div className={`absolute bottom-16 right-1 flex items-center gap-3 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                    <div className="bg-black/80 text-white text-xs px-3 py-1.5 rounded-md shadow-lg whitespace-nowrap flex items-center h-12">
                        Telefon
                    </div>
                    <button
                        onClick={handlePhoneCall}
                        className="w-12 h-12 rounded-full bg-green-600 text-white shadow-lg hover:shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
                        aria-label="Telefon ara"
                        title="Telefon"
                    >
                        <Phone size={20} />
                    </button>
                </div>

                {/* Main FAB */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`relative w-14 h-14 rounded-full bg-primary text-black shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                    aria-label="İletişim seçenekleri"
                    title="İletişim"
                >
                    {/* Glow / Pulse hint */}
                    {!isOpen && (
                        <>
                            <span className="absolute inset-0 -z-10 rounded-full bg-primary/30 blur-lg animate-pulse-slow" />
                            <span className="absolute inline-flex h-full w-full rounded-full bg-primary/40 opacity-60 animate-ping" />
                        </>
                    )}
                    <svg
                        className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>

                    {/* Small label to indicate purpose when closed */}
                    {!isOpen && (
                        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-black/80 text-white text-xs px-3 py-1.5 rounded-md shadow-lg whitespace-nowrap select-none">
                            İletişim
                        </span>
                    )}
                </button>
            </div>
        </div>
    );
}