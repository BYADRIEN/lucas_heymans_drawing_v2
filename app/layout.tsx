import type { Metadata } from "next";
import { Lora, Roboto_Mono } from "next/font/google"; 
import "./globals.css";
import "../style/style.css";
import Header from "../components/header/page";
import Footer from "../components/footer/page";

// 1. Configuration des polices
const lora = Lora({
  weight: ["400", "700"], 
  subsets: ["latin"],
  variable: "--font-lora", 
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

// 2. Metadata (Le titre de ton onglet)
export const metadata: Metadata = {
  title: "Lucas Heymans Drawing",
  description: "Portfolio de dessin et illustrations",
};

// 3. Le Layout principal
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${lora.variable} ${robotoMono.variable} antialiased`}>
        <Header />
        
        {/* C'est ici que le contenu de tes pages (Accueil ou Login) s'affichera */}
        <main>
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
