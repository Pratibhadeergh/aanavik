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
      <body className="flex min-h-full flex-col">
        <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--background)]/95 backdrop-blur-sm">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 md:px-10 lg:px-14">
            <a
              href="/"
              className="font-serif text-2xl tracking-tight text-[var(--soil)] transition-opacity hover:opacity-75"
              aria-label="Aanavik home"
            >
              Aanavik<span className="text-[var(--leaf)]">.</span>
              <span className="ml-3 hidden align-middle font-sans text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[var(--muted)] sm:inline">
                Molecules &amp; Meaning
              </span>
            </a>
            <Navigation />
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="mt-20 border-t border-[var(--line)]">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
            <p className="font-serif text-base text-[var(--soil)]">
              Aanavik <span className="text-[var(--leaf)]">·</span> Molecules &amp; Meaning
            </p>
            <p>Different systems. Similar questions.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
