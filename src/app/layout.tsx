import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mustafakarlimuhendislik.com'),
  title: {
    default: "Mustafa Karlı Mühendislik - İnşaat ve Mühendislik Hizmetleri",
    template: "%s | Mustafa Karlı Mühendislik"
  },
  description: "İnşaat ve mühendislik alanında profesyonel hizmetler. Yılların deneyimi ve uzman kadromuzla projelerinizi en yüksek kalitede gerçekleştiriyoruz.",
  keywords: ["inşaat", "mühendislik", "müteahhitlik", "elektrik tesisatı", "mekanik tesisat", "yapı denetim", "proje yönetimi", "İstanbul inşaat", "profesyonel mühendislik"],
  authors: [{ name: "Mustafa Karlı Mühendislik" }],
  creator: "Mustafa Karlı Mühendislik",
  publisher: "Mustafa Karlı Mühendislik",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://www.mustafakarlimuhendislik.com',
    siteName: 'Mustafa Karlı Mühendislik',
    title: 'Mustafa Karlı Mühendislik - İnşaat ve Mühendislik Hizmetleri',
    description: 'İnşaat ve mühendislik alanında profesyonel hizmetler. Yılların deneyimi ve uzman kadromuzla projelerinizi en yüksek kalitede gerçekleştiriyoruz.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Mustafa Karlı Mühendislik Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mustafa Karlı Mühendislik - İnşaat ve Mühendislik Hizmetleri',
    description: 'İnşaat ve mühendislik alanında profesyonel hizmetler. Yılların deneyimi ve uzman kadromuzla projelerinizi en yüksek kalitede gerçekleştiriyoruz.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Google Search Console eklendiğinde buraya kod eklenecek
    // google: 'verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mustafa Karlı Mühendislik",
    "url": "https://www.mustafakarlimuhendislik.com",
    "logo": "https://www.mustafakarlimuhendislik.com/logo.png",
    "description": "İnşaat ve mühendislik alanında profesyonel hizmetler. Yılların deneyimi ve uzman kadromuzla projelerinizi en yüksek kalitede gerçekleştiriyoruz.",
    "foundingDate": "2008",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TR",
      "addressLocality": "İstanbul"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+90 554 580 77 94",
      "email": "info@mustafakarlimuhendislik.com"
    },
    "sameAs": [
      // Sosyal medya linkleri eklenebilir
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.mustafakarlimuhendislik.com",
    "name": "Mustafa Karlı Mühendislik",
    "image": "https://www.mustafakarlimuhendislik.com/logo.png",
    "url": "https://www.mustafakarlimuhendislik.com",
    "telephone": "+90 554 580 77 94",
    "email": "info@mustafakarlimuhendislik.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TR",
      "addressLocality": "İstanbul"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.0082", // İstanbul koordinatları
      "longitude": "28.9784"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "30"
    }
  };

  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased">
        <TooltipProvider>
          <Toaster />
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
