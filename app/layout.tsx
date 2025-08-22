import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://guitarguide.app'),
  title: {
    default: "Guitar Guide - Learn Guitar Step by Step",
    template: "%s | Guitar Guide"
  },
  description: "A comprehensive interactive guide for learning guitar from scratch. Master chords, tabs, and techniques with our step-by-step lessons.",
  keywords: ["guitar", "learn guitar", "guitar lessons", "chords", "tabs", "beginner guitar", "guitar tutorial", "music education", "online guitar course"],
  authors: [{ name: "Guitar Guide" }],
  creator: "Guitar Guide",
  publisher: "Guitar Guide",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Guitar Guide - Learn Guitar Step by Step",
    description: "Master guitar with interactive lessons, chord diagrams, and practice tools",
    url: "https://guitarguide.app",
    siteName: "Guitar Guide",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Guitar Guide - Learn Guitar Online",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guitar Guide - Learn Guitar Step by Step",
    description: "Master guitar with interactive lessons, chord diagrams, and practice tools",
    images: ["/og-image.png"],
    creator: "@guitarguide",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://guitarguide.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}