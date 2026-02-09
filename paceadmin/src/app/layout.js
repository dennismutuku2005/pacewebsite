import "./globals.css";

export const metadata = {
  title: "Pace Admin | Management Portal",
  description: "Premium WISP management and billing portal for Pace.",
  icons: {
    icon: '/icon.png',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
