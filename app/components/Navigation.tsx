"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 text-sm uppercase tracking-[0.15em] text-gray-600">
        <Link href="/why-aanavik">Why Aanavik</Link>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/writing">Writing</Link>
        <Link href="/research">Research</Link>
        <Link href="/garden">Garden</Link>
      </nav>

      {/* Mobile Button */}
      {/* Mobile Navigation */}
<div className="relative flex flex-col items-end md:hidden">
  <button
    className="text-3xl text-gray-700"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle navigation menu"
  >
    ☰
  </button>

  {menuOpen && (
    <nav className="mt-3 flex w-56 flex-col gap-5 rounded-xl bg-white p-6 shadow-xl">
 <Link href="/">Home</Link>
<Link href="/why-aanavik">Why Aanavik</Link>
<Link href="/writing">Writing</Link>
<Link href="/research">Research</Link>
<Link href="/garden">Garden</Link>
    </nav>
  )}
</div>
    </>
  );
}
