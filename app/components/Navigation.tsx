"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/why-aanavik", label: "Why Aanavik" },
  { href: "/writing", label: "Writing" },
  { href: "/research", label: "Research" },
  { href: "/garden", label: "Garden" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `text-[0.68rem] font-medium uppercase tracking-[0.16em] transition-colors hover:text-[var(--soil)] ${
      pathname === href || (href !== "/" && pathname.startsWith(`${href}/`))
        ? "text-[var(--soil)]"
        : "text-[var(--muted)]"
    }`;

  return (
    <>
      <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex lg:gap-9">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={linkClass(link.href)}
            aria-current={pathname === link.href ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="relative md:hidden">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-[var(--soil)] transition-colors hover:bg-[var(--surface)]"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span aria-hidden="true" className="text-xl leading-none">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>

        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="absolute right-0 top-14 z-50 flex w-64 flex-col gap-1 rounded-sm border border-[var(--line)] bg-[var(--surface)] p-3 shadow-xl"
          >
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 text-sm text-[var(--muted)] transition-colors hover:bg-[var(--background)] hover:text-[var(--soil)]"
            >
              Home
            </Link>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 text-sm transition-colors hover:bg-[var(--background)] hover:text-[var(--soil)] ${
                  pathname === link.href ? "text-[var(--soil)]" : "text-[var(--muted)]"
                }`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </>
  );
}
