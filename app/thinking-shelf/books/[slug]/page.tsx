import Link from "next/link";
import {notFound} from "next/navigation";
import {client} from "@/sanity/lib/client";
import {urlFor} from "@/sanity/lib/image";

const BOOK_QUERY = `*[_type == "thinkingBook" && slug.current == $slug][0] {
  _id, title, author, status, note, theme, formats, startedOn, finishedOn, cover,
  "slug": slug.current,
  "entries": *[_type == "thinkingEntry" && references(^._id) && defined(publishedAt)] | order(publishedAt desc) {
    title, excerpt, publishedAt, "slug": slug.current
  }
}`;

type BookData = {
  _id: string; title: string; author: string; status: string; note?: string; theme?: string;
  formats?: string[]; startedOn?: string; finishedOn?: string; cover?: any; slug: string;
  entries: {title: string; excerpt: string; publishedAt: string; slug: string}[];
};

export default async function ThinkingBookPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const book = await client.fetch<BookData | null>(BOOK_QUERY, {slug}, {next: {revalidate: 60}});
  if (!book) notFound();

  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 lg:py-28">
      <Link href="/thinking-shelf" className="text-sm text-[var(--muted)] hover:text-[var(--soil)]">← Back to The Thinking Shelf</Link>
      <header className="mt-12 grid gap-9 md:grid-cols-[auto_1fr] md:items-start">
        {book.cover && <img src={urlFor(book.cover).width(480).height(680).fit("max").url()} alt={`Cover of ${book.title}`} className="w-36 shadow-md md:w-48" />}
        <div>
          <p className="editorial-eyebrow">A book on the Thinking Shelf</p>
          <h1 className="mt-5 font-serif text-4xl leading-tight text-[var(--soil)] sm:text-5xl">{book.title}</h1>
          <p className="mt-4 font-serif text-xl text-[var(--muted)]">{book.author}</p>
          <p className="mt-5 text-xs uppercase tracking-[0.14em] text-[var(--leaf)]">{book.status.replace("-", " ")}</p>
          {book.theme && <p className="mt-7 max-w-2xl text-sm uppercase tracking-[0.12em] text-[var(--leaf)]">{book.theme}</p>}
          {book.note && <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]">{book.note}</p>}
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[var(--muted)]">
            {book.startedOn && <span>Started {new Date(book.startedOn).toLocaleDateString("en", {month: "short", year: "numeric"})}</span>}
            {book.finishedOn && <span>Finished {new Date(book.finishedOn).toLocaleDateString("en", {month: "short", year: "numeric"})}</span>}
            {book.formats?.map((format) => <span key={format}>{format}</span>)}
          </div>
        </div>
      </header>

      <section className="mt-20 border-t border-[var(--line)] pt-9">
        <p className="editorial-eyebrow">Thinking beyond the pages</p>
        <h2 className="mt-4 font-serif text-3xl text-[var(--soil)]">Reflections on this book</h2>
        {book.entries.length > 0 ? (
          <div className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {book.entries.map((entry) => (
              <article key={entry.slug} className="py-7">
                <p className="editorial-eyebrow">{new Date(entry.publishedAt).toLocaleDateString("en", {year: "numeric", month: "long", day: "numeric"})}</p>
                <h3 className="mt-3 font-serif text-2xl text-[var(--soil)]"><Link href={`/thinking-shelf/${entry.slug}`} className="hover:text-[var(--leaf)]">{entry.title}</Link></h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted)]">{entry.excerpt}</p>
              </article>
            ))}
          </div>
        ) : <p className="mt-6 text-sm leading-7 text-[var(--muted)]">No reflections published yet. Sometimes an idea needs a little more time.</p>}
      </section>
    </div>
  );
}
