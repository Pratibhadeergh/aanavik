import Link from "next/link";
export default function Navigation() {
  return (
    <nav className="flex gap-8 text-sm uppercase tracking-[0.15em] text-gray-600">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/writing">Writing</Link>
      <Link href="/research">Research</Link>
      <Link href="/garden">Garden</Link>
    </nav>
  );
}