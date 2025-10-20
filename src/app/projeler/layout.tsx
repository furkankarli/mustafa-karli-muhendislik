import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projelerimiz",
    description: "Başarıyla tamamlanan ve devam eden inşaat projelerimiz. 50+ proje deneyimi ile konut, ticari ve endüstriyel alanlarda profesyonel hizmet.",
    keywords: ["inşaat projeleri", "tamamlanan projeler", "devam eden projeler", "konut kompleksi", "ticari merkez", "endüstriyel tesis"],
    openGraph: {
        title: "Projelerimiz | Mustafa Karlı Mühendislik",
        description: "50+ başarılı proje. Konut, ticari ve endüstriyel alanlarda gerçekleştirdiğimiz projelerimizi inceleyin.",
        url: "https://www.mustafakarlimuhendislik.com/projeler",
    },
};

export default function ProjeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

