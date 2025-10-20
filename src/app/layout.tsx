import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Mustafa Karlı Mühendislik - İnşaat ve Mühendislik Hizmetleri",
  description: "İnşaat ve mühendislik alanında profesyonel hizmetler. Yılların deneyimi ve uzman kadromuzla projelerinizi en yüksek kalitede gerçekleştiriyoruz.",
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
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
