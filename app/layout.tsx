import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = "https://dariusbenta.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Darius Adrian Benta — Backend Developer",
    template: "%s | Darius Adrian Benta",
  },
  description:
    "Backend Developer especializado en Java, Spring Boot, APIs REST y arquitectura de sistemas escalables.",
  keywords: [
    "Backend Developer",
    "Java",
    "Spring Boot",
    "REST API",
    "PostgreSQL",
    "Docker",
    "JPA",
    "Hibernate",
    "Darius Adrian Benta",
  ],
  authors: [{ name: "Darius Adrian Benta" }],
  creator: "Darius Adrian Benta",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    title: "Darius Adrian Benta — Backend Developer",
    description:
      "Backend Developer especializado en Java, Spring Boot, APIs REST y arquitectura de sistemas escalables.",
    siteName: "Darius Adrian Benta",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darius Adrian Benta — Backend Developer",
    description:
      "Backend Developer especializado en Java, Spring Boot, APIs REST y arquitectura de sistemas escalables.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
