import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aanavik | Molecules & Meaning",
  description:
    "Exploring the conditions that allow living systems to thrive.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  <header className="border-b border-gray-200">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-6">
      <a href="/" className="text-2xl font-serif">
        Aanavik
      </a>

      <Navigation />
    </div>
  </header>

  <main className="flex-1">
    {children}
  </main>

  <footer className="border-t border-gray-200">
    <div className="mx-auto max-w-6xl px-8 py-8 text-sm text-gray-500">
      Different systems. Similar principles.
    </div>
  </footer>
</body>
    </html>
  );
}
