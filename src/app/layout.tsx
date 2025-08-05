import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Custom fonts - Mondish Family
const mondishBlackItalic = localFont({
  src: "./fonts/MondishBlackItalic.otf",
  variable: "--font-mondish-black-italic",
  display: "swap",
});

const mondishBlack = localFont({
  src: "./fonts/MondishBlack.otf",
  variable: "--font-mondish-black",
  display: "swap",
});

const mondishBoldItalic = localFont({
  src: "./fonts/MondishBoldItalic.otf",
  variable: "--font-mondish-bold-italic",
  display: "swap",
});

const mondishBold = localFont({
  src: "./fonts/MondishBold.otf",
  variable: "--font-mondish-bold",
  display: "swap",
});

const mondishRegularItalic = localFont({
  src: "./fonts/MondishRegularItalic.otf",
  variable: "--font-mondish-regular-italic",
  display: "swap",
});

const mondishRegular = localFont({
  src: "./fonts/MondishRegular.otf",
  variable: "--font-mondish-regular",
  display: "swap",
});

// Backward compatibility aliases
const mondishHeading = localFont({
  src: "./fonts/MondishRegular.otf",
  variable: "--font-mondish",
  display: "swap",
});

const mondishHeadingItalic = localFont({
  src: "./fonts/MondishBlackItalic.otf",
  variable: "--font-mondish-italic",
  display: "swap",
});

const mondishHeadingLight = localFont({
  src: "./fonts/MondishLight.otf",
  variable: "--font-mondish-light-compat",
  display: "swap",
});

const mondishLightItalic = localFont({
  src: "./fonts/MondishLightItalic.otf",
  variable: "--font-mondish-light-italic",
  display: "swap",
});

const mondishLight = localFont({
  src: "./fonts/MondishLight.otf",
  variable: "--font-mondish-light",
  display: "swap",
});

const mondishThinItalic = localFont({
  src: "./fonts/MondishThinItalic.otf",
  variable: "--font-mondish-thin-italic",
  display: "swap",
});

const mondishThin = localFont({
  src: "./fonts/MondishThin.otf",
  variable: "--font-mondish-thin",
  display: "swap",
});

// Araboto Family
const arabotoBlack = localFont({
  src: "./fonts/Araboto Black 400.ttf",
  variable: "--font-araboto-black",
  display: "swap",
});

const arabotoBold = localFont({
  src: "./fonts/Araboto Bold 400.ttf",
  variable: "--font-araboto-bold",
  display: "swap",
});

const arabotoMedium = localFont({
  src: "./fonts/Araboto Medium 400.ttf",
  variable: "--font-araboto-medium",
  display: "swap",
});

// Backward compatibility aliases
const arabotoCompat = localFont({
  src: "./fonts/Araboto Medium 400.ttf",
  variable: "--font-araboto",
  display: "swap",
});

const arabotoNormal = localFont({
  src: "./fonts/Araboto Normal 400.ttf",
  variable: "--font-araboto-normal",
  display: "swap",
});

const arabotoLight = localFont({
  src: "./fonts/Araboto Light 400.ttf",
  variable: "--font-araboto-light",
  display: "swap",
});

const arabotoThin = localFont({
  src: "./fonts/Araboto Thin 400.ttf",
  variable: "--font-araboto-thin",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Waroeng Bebek Ngarasan - Sajian Bebek Terenak",
  description: "Sajian bebek terenak di kota dengan cita rasa tradisional yang autentik. Menu lengkap, suasana nyaman, harga terjangkau.",
  keywords: "bebek, restaurant, makanan tradisional, kuliner, waroeng",
  icons: {
    icon: '/logo-icon.png',
    shortcut: '/logo-icon.png',
    apple: '/logo-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${mondishBlackItalic.variable} ${mondishBlack.variable} ${mondishBoldItalic.variable} ${mondishBold.variable} ${mondishRegularItalic.variable} ${mondishRegular.variable} ${mondishLightItalic.variable} ${mondishLight.variable} ${mondishThinItalic.variable} ${mondishThin.variable} ${arabotoBlack.variable} ${arabotoBold.variable} ${arabotoMedium.variable} ${arabotoNormal.variable} ${arabotoLight.variable} ${arabotoThin.variable} ${mondishHeading.variable} ${mondishHeadingItalic.variable} ${mondishHeadingLight.variable} ${arabotoCompat.variable} font-sans antialiased`}>
        <Navigation />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
