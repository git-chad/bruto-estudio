import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { ReactLenis } from "@/lib/lenis/lenis";
import Navbar from "@/components/navigation/navbar";

export const metadata: Metadata = {
  title: "BRUTO ESTUDIO",
  description: "Based in Buenos Aires, available for the whole world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: true,
      }}
    >
      <html lang="es">
        <body className={GeistSans.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </ReactLenis>
  );
}
