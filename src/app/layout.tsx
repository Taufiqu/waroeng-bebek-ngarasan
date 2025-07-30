import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Custom fonts
const mondishBlackItalic = localFont({
  src: "./fonts/MondishBlackItalic.otf",
  variable: "--font-mondish",
  display: "swap",
});

const arabotoMedium = localFont({
  src: "./fonts/Araboto Medium 400.ttf",
  variable: "--font-araboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Waroeng Bebek Ngarasan - Sajian Bebek Terenak",
  description: "Sajian bebek terenak di kota dengan cita rasa tradisional yang autentik. Menu lengkap, suasana nyaman, harga terjangkau.",
  keywords: "bebek, restaurant, makanan tradisional, kuliner, waroeng",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${mondishBlackItalic.variable} ${arabotoMedium.variable} font-sans antialiased`}>
        <Navigation />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
