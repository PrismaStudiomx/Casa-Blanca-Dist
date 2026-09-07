import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cb-eight-rho.vercel.app"),

  title: {
    default: "Casa Blanca Distribuciones | Servicio y confianza",
    template: "%s | Casa Blanca Distribuciones",
  },

  description:
    "Casa Blanca Distribuciones ofrece soluciones de distribución y abastecimiento para negocios en Guadalajara, Jalisco.",

  keywords: [
  "Casa Blanca Distribuciones",
  "distribuidora Guadalajara",
  "distribuidora Jalisco",
  "distribución Guadalajara",
  "distribución Jalisco",
  "abastecimiento para negocios",
  "distribuidora de productos",
  "productos de consumo",
],

  authors: [
    {
      name: "Casa Blanca Distribuciones",
    },
  ],

  creator: "Casa Blanca Distribuciones",
publisher: "Casa Blanca Distribuciones",

category: "business",
classification: "Distribución y abastecimiento",

alternates: {
  canonical: "https://cb-eight-rho.vercel.app/",
},

  openGraph: {
  type: "website",
  locale: "es_MX",
  url: "https://cb-eight-rho.vercel.app/",
  siteName: "Casa Blanca Distribuciones",
  title: "Casa Blanca Distribuciones | Servicio y confianza",
  description:
    "Distribución y abastecimiento para negocios que buscan productos de calidad, atención cercana y un servicio confiable.",
  images: [
    {
      url: "https://cb-eight-rho.vercel.app/og-casa-blanca.jpg",
      width: 1200,
      height: 630,
      alt: "Casa Blanca Distribuciones",
      type: "image/jpeg",
    },
  ],
},

  twitter: {
  card: "summary_large_image",
  title: "Casa Blanca Distribuciones | Servicio y confianza",
  description:
    "Distribución y abastecimiento para negocios en Guadalajara, Jalisco.",
  images: [
    "https://cb-eight-rho.vercel.app/og-casa-blanca.jpg",
  ],
},

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body className={`${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}