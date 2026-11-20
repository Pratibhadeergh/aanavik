import Link from "next/link";
import {client} from "@/sanity/lib/client";
import {urlFor} from "@/sanity/lib/image";

export const metadata = {
  title: "The Thinking Shelf | Aanavik",
  description: "Books, ideas and reflections worth sitting with.",
};

const BOOKS_QUERY = `*[_type == "thinkingBook"] | order(
  select(status == "reading" => 0, status == "to-read" => 1, status == "completed" => 2, 3) asc,
  finishedOn desc,
  title asc
) {
  _id, title, author, "slug": slug.current, status, note, formats, finishedOn,
  cover,
  "reflectionCount": count(*[_type == "thinkingEntry" && references(^._id) && defined(publishedAt)])
}`;

const ENTRIES_QUERY = `*[_type == "thinkingEntry" && defined(publishedAt)] | order(publishedAt desc)[0...8] {
  _id, title, excerpt, publishedAt, "slug": slug.current,
  "bookTitle": book->title, "bookSlug": book->slug.current
}`;

type Book = {
  _id: string; title: string; author: string; slug: string; status: string;
  note?: string; formats?: string[]; finishedOn?: string; cover?: any; reflectionCount: number;
};
type Entry = {
  _id: string; title: string; excerpt: string; publishedAt: string; slug: string;
  bookTitle?: string; bookSlug?: string;
};

const statusLabels: Record<string, string> = {
  "to-read": "On the reading list", reading: "Currently reading", completed: "Completed", paused: "Paused",
};

export default async function ThinkingShelfPage() {
  const [books, entries] = await Promise.all([
    client.fetch<Book[]>(BOOKS_QUERY, {}, {next: {revalidate: 60}}),
    client.fetch<Entry[]>(ENTRIES_QUERY, {}, {next: {revalidate: 60}}),
  ]);
  const current = books.filter((book) => book.status === "reading");
  const completed = books.filter((book) => book.status === "completed");
  const upcoming = books.filter((book) => book.status === "to-read");

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-14 lg:py-28">
      <header className="max-w-4xl">
        <p className="editorial-eyebrow">Reading · Ideas &amp; inquiry</p>
        <h1 className="mt-6 font-serif text-5xl leading-[1.08] tracking-tight text-[var(--soil)] sm:text-6xl lg:text-7xl">
          The Thinking Shelf
        </h1>
        <p className="mt-7 max-w-2xl font-serif text-2xl leading-relaxed text-[var(--foreground)] sm:text-3xl">
          Ideas worth sitting with.
        </p>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)]">
          A reading journal about proposals, questions, evidence and unexpected connections.
          Not a scorecard of books finished, but a record of what happens when an idea stays with you.
        </p>
      </header>

      {current.length > 0 && (
        <section className="mt-20 border-t border-[var(--line)] pt-9">
          <p className="editorial-eyebrow">On the reading table</p>
          <div className="mt-7 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {current.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        </section>
      )}

      <section className="mt-20 border-t border-[var(--line)] pt-9">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="editorial-eyebrow">The reflections</p>
            <h2 className="mt-4 font-serif text-3xl text-[var(--soil)] sm:text-4xl">Ideas that followed me out of the book.</h2>
          </div>
        </div>
        {entries.length > 0 ? (
          <div className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {entries.map((entry) => (
              <article key={entry._id} className="py-7">
                <p className="editorial-eyebrow">
                  {entry.bookTitle ? <Link href={`/thinking-shelf/books/${entry.bookSlug}`} className="hover:text-[var(--soil)]">{entry.bookTitle}</Link> : "Reading reflection"}
                  {entry.publishedAt ? ` · ${new Date(entry.publishedAt).toLocaleDateString("en", {year: "numeric", month: "short", day: "numeric"})}` : ""}
                </p>
                <h3 className="mt-3 font-serif text-2xl leading-snug text-[var(--soil)] sm:text-3xl">
                  <Link href={`/thinking-shelf/${entry.slug}`} className="transition-colors hover:text-[var(--leaf)]">{entry.title}</Link>
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted)]">{entry.excerpt}</p>
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-7 max-w-2xl text-sm leading-7 text-[var(--muted)]">
            Reflections will appear here as they are published. The shelf can begin with the books themselves.
          </p>
        )}
      </section>

      {completed.length > 0 && (
        <section className="mt-20 border-t border-[var(--line)] pt-9">
          <p className="editorial-eyebrow">Read and considered</p>
          <div className="mt-7 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {completed.map((book) => <BookCard key={book._id} book={book} />)}
          </div>
        </section>
      )}

      {upcoming.length > 0 && (
        <section className="mt-20 border-t border-[var(--line)] pt-9">
          <p className="editorial-eyebrow">Waiting on the shelf</p>
          <div className="mt-7 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((book) => <BookCard key={book._id} book={book} />)}
          </div>
        </section>
      )}

      <section className="mt-20 border-t border-[var(--line)] pt-9">
        <p className="editorial-eyebrow">A note on the practice</p>
        <h2 className="mt-5 max-w-3xl font-serif text-3xl leading-snug text-[var(--soil)] sm:text-4xl">
          Reading happens in more than one place.
        </h2>
        <div className="mt-8 grid gap-7 md:grid-cols-3">
          <div><h3 className="font-serif text-xl text-[var(--soil)]">Physical books</h3><p className="mt-3 text-sm leading-7 text-[var(--muted)]">Time to slow down, annotate, revisit a passage and sit with an idea.</p></div>
          <div><h3 className="font-serif text-xl text-[var(--soil)]">Kindle</h3><p className="mt-3 text-sm leading-7 text-[var(--muted)]">A library close at hand, ready whenever there is a moment to read.</p></div>
          <div><h3 className="font-serif text-xl text-[var(--soil)]">Audible</h3><p className="mt-3 text-sm leading-7 text-[var(--muted)]">Books to listen to while watering, tending, harvesting and observing in the garden.</p></div>
        </div>
      </section>

      <section className="mt-20 border-t border-[var(--line)] pt-9">
        <p className="editorial-eyebrow">What to expect</p>
        <p className="mt-5 max-w-4xl font-serif text-2xl leading-relaxed text-[var(--soil)] sm:text-3xl">
          Ideas, questions, evidence and unexpected connections. Sometimes a book will change my mind.
          Sometimes it will leave me with better questions.
        </p>
      </section>
    </div>
  );
}

function BookCard({book}: {book: Book}) {
  return (
    <article className="flex gap-5 border-t border-[var(--soft-line)] pt-5">
      {book.cover && (
        <Link href={`/thinking-shelf/books/${book.slug}`} className="w-20 shrink-0">
          <img src={urlFor(book.cover).width(240).height(340).fit("max").url()} alt={`Cover of ${book.title}`} className="w-full shadow-sm" />
        </Link>
      )}
      <div className="min-w-0">
        <p className="editorial-eyebrow">{statusLabels[book.status] ?? "On the shelf"}</p>
        <h3 className="mt-2 font-serif text-xl leading-snug text-[var(--soil)]">
          <Link href={`/thinking-shelf/books/${book.slug}`} className="hover:text-[var(--leaf)]">{book.title}</Link>
        </h3>
        <p className="mt-2 text-sm text-[var(--muted)]">{book.author}</p>
        {book.note && <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{book.note}</p>}
        {book.reflectionCount > 0 && <p className="mt-3 text-xs text-[var(--leaf)]">{book.reflectionCount} {book.reflectionCount === 1 ? "reflection" : "reflections"}</p>}
      </div>
    </article>
  );
}
