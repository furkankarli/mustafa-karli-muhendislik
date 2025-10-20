"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <section className="relative pt-36 pb-16 md:pt-44 md:pb-24">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-black to-black opacity-50"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">İletişim</h1>
                    <p className="text-xl text-gray-400">
                        Bize ulaşın ve projeleriniz hakkında konuşalım
                    </p>
                </div>
            </section>

            {/* Contact Info and Form */}
            <section className="py-20 md:py-32 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Information */}
                        <div className="lg:col-span-1">
                            <h2 className="text-2xl font-bold mb-8 text-white">İletişim Bilgilerimiz</h2>

                            <div className="space-y-6">
                                {/* Phone */}
                                <div className="flex gap-4">
                                    <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone size={24} className="text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1">Telefon</h3>
                                        <p className="text-gray-400">+90 (XXX) XXX XX XX</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex gap-4">
                                    <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail size={24} className="text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1">E-posta</h3>
                                        <p className="text-gray-400">info@example.com</p>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex gap-4">
                                    <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin size={24} className="text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1">Adres</h3>
                                        <p className="text-gray-400">
                                            Şehir, Bölge<br />
                                            Ülke
                                        </p>
                                    </div>
                                </div>

                                {/* Working Hours */}
                                <div className="flex gap-4">
                                    <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Clock size={24} className="text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1">Çalışma Saatleri</h3>
                                        <p className="text-gray-400">
                                            Pazartesi - Cuma: 09:00 - 18:00<br />
                                            Cumartesi: 10:00 - 16:00<br />
                                            Pazar: Kapalı
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold mb-8 text-white">Bize Mesaj Gönderin</h2>

                            {submitted && (
                                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400">
                                    ✓ Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-white">Ad Soyad *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-primary/10 border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="Adınız ve soyadınız"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-white">E-posta *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-primary/10 border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="E-posta adresiniz"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-white">Telefon</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-primary/10 border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="Telefon numaranız"
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-white">Konu *</label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-primary/10 border border-primary/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    >
                                        <option value="" className="bg-black text-white">Konu seçiniz</option>
                                        <option value="proje" className="bg-black text-white">Yeni Proje</option>
                                        <option value="danismanlik" className="bg-black text-white">Danışmanlık</option>
                                        <option value="teklif" className="bg-black text-white">Teklif İsteği</option>
                                        <option value="diger" className="bg-black text-white">Diğer</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-white">Mesaj *</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 bg-primary/10 border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                                        placeholder="Mesajınızı yazınız..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full bg-primary hover:bg-primary/90 text-black font-semibold"
                                >
                                    Gönder
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 md:py-32 bg-gradient-to-b from-black to-black/50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">Konumumuz</h2>
                    <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg flex items-center justify-center">
                        <p className="text-gray-400">Harita burada görüntülenecek</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

