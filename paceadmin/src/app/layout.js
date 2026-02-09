import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-rubik",
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
    <html lang="en" className={rubik.variable}>
      <body className="antialiased font-rubik">
        {children}
      </body>
    </html>
  );
}
