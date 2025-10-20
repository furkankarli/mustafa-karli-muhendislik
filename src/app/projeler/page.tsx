"use client";

import { useState } from "react";
import { Building2, Calendar, MapPin } from "lucide-react";

// NOT: Bu sayfa client component olduğu için metadata export edilemez
// Metadata için layout.tsx'te tanımlanmış template kullanılacak

const projects = [
    {
        id: 1,
        title: "Konut Kompleksi A",
        category: "completed",
        location: "İstanbul",
        date: "2023",
        description: "200 daireli modern konut kompleksi projesi",
        status: "Tamamlandı"
    },
    {
        id: 2,
        title: "Ticari Merkez B",
        category: "completed",
        location: "Ankara",
        date: "2023",
        description: "5 katlı ticari merkez inşaatı",
        status: "Tamamlandı"
    },
    {
        id: 3,
        title: "Endüstriyel Tesis C",
        category: "completed",
        location: "İzmir",
        date: "2022",
        description: "Üretim tesisi inşaatı ve tesisatı",
        status: "Tamamlandı"
    },
    {
        id: 4,
        title: "Konut Kompleksi D",
        category: "ongoing",
        location: "Bursa",
        date: "2024",
        description: "150 daireli konut kompleksi (devam ediyor)",
        status: "Devam Ediyor"
    },
    {
        id: 5,
        title: "Ofis Binası E",
        category: "ongoing",
        location: "İstanbul",
        date: "2024",
        description: "Yönetici ofisleri ve çalışma alanları",
        status: "Devam Ediyor"
    },
    {
        id: 6,
        title: "Eğitim Tesisi F",
        category: "ongoing",
        location: "Ankara",
        date: "2024",
        description: "Eğitim merkezi inşaatı (devam ediyor)",
        status: "Devam Ediyor"
    },
];

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredProjects = activeFilter === "all"
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <section className="relative pt-36 pb-16 md:pt-44 md:pb-24">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-black to-black opacity-50"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Projelerimiz</h1>
                    <p className="text-xl text-gray-400">
                        Başarıyla tamamlanan ve devam eden projelerimiz
                    </p>
                </div>
            </section>

            {/* Filter Buttons */}
            <section className="py-8 bg-black/50 border-b border-primary/20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button
                            onClick={() => setActiveFilter("all")}
                            className={`px-6 py-2 rounded-lg font-semibold transition-all ${activeFilter === "all"
                                ? "bg-primary text-black"
                                : "bg-primary/10 text-primary border border-primary/30 hover:border-primary/60"
                                }`}
                        >
                            Tüm Projeler
                        </button>
                        <button
                            onClick={() => setActiveFilter("completed")}
                            className={`px-6 py-2 rounded-lg font-semibold transition-all ${activeFilter === "completed"
                                ? "bg-primary text-black"
                                : "bg-primary/10 text-primary border border-primary/30 hover:border-primary/60"
                                }`}
                        >
                            Biten Projeler
                        </button>
                        <button
                            onClick={() => setActiveFilter("ongoing")}
                            className={`px-6 py-2 rounded-lg font-semibold transition-all ${activeFilter === "ongoing"
                                ? "bg-primary text-black"
                                : "bg-primary/10 text-primary border border-primary/30 hover:border-primary/60"
                                }`}
                        >
                            Devam Eden Projeler
                        </button>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 md:py-32 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-300 group"
                            >
                                {/* Project Image Placeholder */}
                                <div className="bg-gradient-to-br from-primary/20 to-primary/5 h-48 flex items-center justify-center group-hover:from-primary/30 transition-all">
                                    <Building2 size={64} className="text-primary/40 group-hover:text-primary/60 transition-colors" />
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-lg font-bold text-white">{project.title}</h3>
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.category === "completed"
                                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                            : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                                            }`}>
                                            {project.status}
                                        </span>
                                    </div>

                                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                                    {/* Project Details */}
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                                            <MapPin size={16} className="text-primary" />
                                            <span>{project.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                                            <Calendar size={16} className="text-primary" />
                                            <span>{project.date}</span>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="border-t border-primary/20 pt-4">
                                        <button className="text-primary font-semibold text-sm hover:text-primary/80 transition-colors">
                                            Detayları Görüntüle →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 md:py-32 bg-gradient-to-b from-black to-black/50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Proje İstatistikleri</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 text-center">
                            <div className="text-5xl font-bold text-primary mb-2">50+</div>
                            <p className="text-gray-400">Toplam Proje</p>
                        </div>
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 text-center">
                            <div className="text-5xl font-bold text-primary mb-2">40+</div>
                            <p className="text-gray-400">Tamamlanan Proje</p>
                        </div>
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 text-center">
                            <div className="text-5xl font-bold text-primary mb-2">10+</div>
                            <p className="text-gray-400">Devam Eden Proje</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

