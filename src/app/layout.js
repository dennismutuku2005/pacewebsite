import { Rubik, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import ChatWidget from "./components/ChatWidget";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-rubik",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tappi - Find Customers, Retain With Ease",
  description: "Providing tools for businesses to increase sales, find new customers and build relationships with them.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rubik.variable} ${geistMono.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-white font-rubik">
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