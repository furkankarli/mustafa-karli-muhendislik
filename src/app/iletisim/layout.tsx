import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "İletişim",
    description: "Bize ulaşın! Projeleriniz hakkında konuşmak, teklif almak veya danışmanlık için bizimle iletişime geçin. Profesyonel ekibimiz size yardımcı olmak için hazır.",
    keywords: ["iletişim", "teklif al", "danışmanlık", "proje teklifi", "mühendislik danışmanlığı", "inşaat teklifi"],
    openGraph: {
        title: "İletişim | Mustafa Karlı Mühendislik",
        description: "Projeleriniz için bizimle iletişime geçin. Uzman ekibimiz size en iyi çözümleri sunmak için hazır.",
        url: "https://www.mustafakarlimuhendislik.com/iletisim",
    },
};

export default function IletisimLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

