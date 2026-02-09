import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

export const metadata = {
  title: "Pace Admin | Management Portal",
  description: "Premium WISP management and billing portal for Pace.",
  icons: {
    icon: '/icon.png',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={figtree.variable}>
      <body className="antialiased font-figtree bg-[#F8F9FA]">
        {children}
      </body>
    </html>
  );
}
