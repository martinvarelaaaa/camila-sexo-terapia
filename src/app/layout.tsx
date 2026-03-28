import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Camila Jurfest | Psicóloga y Sexóloga Clínica en Montevideo",
    template: "%s | Camila Jurfest",
  },
  description:
    "Camila Jurfest, psicóloga y sexóloga clínica en Pocitos, Montevideo. Terapia sexual, de pareja y psicoterapia individual. Atención online para todo Uruguay. Reservá tu sesión.",
  keywords: [
    "psicóloga Montevideo",
    "sexóloga clínica Uruguay",
    "terapia sexual Montevideo",
    "terapia de pareja Montevideo",
    "psicóloga Pocitos",
    "terapeuta sexual Montevideo",
    "terapia perinatal Montevideo",
    "sexología Uruguay",
    "Camila Jurfest",
  ],
  authors: [{ name: "Camila Jurfest" }],
  creator: "Camila Jurfest",
  metadataBase: new URL("https://www.camilajurfest.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_UY",
    url: "https://www.camilajurfest.com",
    siteName: "Camila Jurfest",
    title: "Camila Jurfest — Psicóloga y Sexóloga Clínica en Montevideo",
    description:
      "Psicóloga y sexóloga clínica en Montevideo. Terapia individual, de pareja, sexual y perinatal. Sin tabúes, con enfoque humano y científico.",
    images: [
      {
        url: "/og-image",
        width: 1200,
        height: 630,
        alt: "Camila Jurfest — Psicóloga y Sexóloga Clínica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Camila Jurfest — Psicóloga y Sexóloga Clínica en Montevideo",
    description:
      "Psicóloga y sexóloga clínica en Montevideo. Terapia sin tabúes.",
    images: ["/og-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} h-full`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{ backgroundColor: "var(--cream)", color: "var(--charcoal)" }}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
