import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guitar Guide - Learn Guitar Step by Step",
  description: "A comprehensive interactive guide for learning guitar from scratch. Master chords, tabs, and techniques with our step-by-step lessons.",
  keywords: "guitar, learn guitar, guitar lessons, chords, tabs, beginner guitar",
  authors: [{ name: "Guitar Guide" }],
  openGraph: {
    title: "Guitar Guide - Learn Guitar Step by Step",
    description: "Master guitar with interactive lessons, chord diagrams, and practice tools",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}