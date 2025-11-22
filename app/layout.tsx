import type { Metadata } from "next";
// ✅ Importez Lora pour la police principale et Roboto_Mono pour la police mono
import { Lora, Roboto_Mono } from "next/font/google"; 
import "./globals.css";
import Header from "../components/header/page";
import Footer from "../components/footer/page";
import Slider from "../components/sections/slider/page";
import About from "../components/sections/aboutme/page";
import "../style/style.css";

// 1. Définissez la police PRINCIPALE (sans-serif/serif)
const lora = Lora({
  // Spécifiez les graisses que vous utiliserez (ex: 400 et 700)
  weight: ["400", "700"], 
  subsets: ["latin"],
  // ✅ CORRECTION : Variable cohérente pour Lora
  variable: "--font-lora", 
});

// 2. Définissez la police MONO
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  // ✅ CORRECTION : Variable cohérente pour Roboto Mono
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
// ...
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // 3. Appliquez la variable Lora d'abord (pour le corps du texte)
        className={`${lora.variable} ${robotoMono.variable} antialiased`}
      >
        <main>
          < Header />
          < Slider />
          < About />
          {children}
          < Footer />
        </main>
      </body>
    </html>
  );
}