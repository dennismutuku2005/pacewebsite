import { Figtree, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import ChatWidget from "./components/ChatWidget";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pace WISP - Utility Software for Wireless Internet Providers",
  description: "Empowering WISPs with cutting-edge billing systems and management tools. Streamline your operations with our Hotspot and PPPoE solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${figtree.variable} ${geistMono.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-white font-figtree">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <FAQ />
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}