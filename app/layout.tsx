import type { Metadata } from "next";
import { Lora, Roboto_Mono } from "next/font/google"; 
import "./globals.css";
import "../style/style.css";
import Header from "../components/header/page";
import Footer from "../components/footer/page";

const lora = Lora({
  weight: ["400", "700"], 
  subsets: ["latin"],
  variable: "--font-lora", 
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Lucas Heymans Drawing",
  description: "Mon Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${lora.variable} ${robotoMono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
