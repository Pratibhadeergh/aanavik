import Link from "next/link";
import {client} from "@/sanity/lib/client";
import {urlFor} from "@/sanity/lib/image";

export const metadata = {
  title: "The Thinking Shelf | Aanavik",
  description: "A reading journal exploring the ideas that shape how we think, behave, connect and live.",
};

const BOOKS_QUERY = `*[_type == "thinkingBook"] | order(
  select(status == "reading" => 0, status == "to-read" => 1, status == "completed" => 2, 3) asc,
  finishedOn desc,
  title asc
) {
  _id, title, author, "slug": slug.current, status, note, theme, formats, finishedOn,
  cover,
  "reflectionCount": count(*[_type == "thinkingEntry" && references(^._id) && defined(publishedAt)])
}`;

const ENTRIES_QUERY = `*[_type == "thinkingEntry" && defined(publishedAt)] | order(publishedAt desc)[0...8] {
  _id, title, excerpt, publishedAt, "slug": slug.current,
  "bookTitle": book->title, "bookSlug": book->slug.current
}`;

type Book = {
  _id: string; title: string; author: string; slug: string; status: string;
  note?: string; theme?: string; formats?: string[]; finishedOn?: string; cover?: any; reflectionCount: number;
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
          A reading journal exploring the ideas that shape how we think, behave, connect and live.
          Not just what I read, but what reading makes me think about.
        </p>
      </header>

      <section className="mt-20 border-t border-[var(--line)] pt-10">
        <p className="editorial-eyebrow">The beginning</p>
        <h2 className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-[var(--soil)] sm:text-4xl">
          Why I&apos;m Reading Again (Except That I&apos;ve Never Really Stopped)
        </h2>
        <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-[var(--muted)]">
          <p>
            I&apos;ve always been a reader. Even during the periods when I wasn&apos;t reading much, I continued buying books.
            My bookshelves kept growing, sometimes faster than my reading list. There was always another subject I wanted
            to understand, another idea I wanted to explore, another book I was convinced I would get around to reading.
          </p>
          <p>
            So perhaps saying that I&apos;ve started reading again isn&apos;t entirely accurate. What has returned is the
            habit of making time for it.
          </p>
          <p>
            When I started coaching work with Ramya Ranganathan, she would often recommend books after discussing
            particular ideas or concepts with us. Sometimes she would introduce an idea during a session, and the book
            behind that idea would become the next thing I wanted to explore. That&apos;s how I got around to reading
            <em> Deep Work</em> by Cal Newport, <em>The Big Leap</em> by Gay Hendricks and <em>Flow</em> by
            Mihaly Csikszentmihalyi.
          </p>
          <p>
            The coaching eventually ended, and, predictably, the reading slowed down too. I continued buying books,
            though. <em>The Courage to Be Disliked</em>, <em>Thinking, Fast and Slow</em> and <em>The Mountain Is You</em>
            joined the ever-growing pile of books waiting for their turn.
          </p>
          <p>They are still waiting.</p>
          <p>
            Then came the fracture. When I joined Karthi&apos;s Inner Circle, we were asked to identify and establish
            keystone habits. With my ankle in a cast, there wasn&apos;t much I could choose in terms of physical activity.
            I needed something that was possible within my circumstances, something I could do consistently.
          </p>
          <p>I chose reading.</p>
          <p>
            At the time this page began, I was on day 31 of the streak. I had finished five books in 27 days of active
            reading, but the number was never the target. The intention was to learn, to follow ideas, and to put some
            things in place as a foundation for the work ahead.
          </p>
          <p>
            The first five books in this stretch were <em>Beyond Belief</em>, <em>Think Again</em>, <em>Hooked by Design</em>,
            <em> The Girls Aren&apos;t Fine</em> and <em>The Five Dysfunctions of a Team</em>. They approach different
            subjects from different directions, but I&apos;m beginning to notice connections: how beliefs shape decisions,
            how willing we are to reconsider what we think we know, how environments influence behaviour, and what makes
            relationships and teams work.
          </p>
          <p>
            These aren&apos;t necessarily questions I started with. Some emerged while reading. Others came from
            connecting one book to another.
          </p>
          <p>
            That&apos;s what I want to explore here. Not conventional book summaries or star ratings, but the ideas
            themselves: what an author proposes, what the evidence supports, what I question, and where an idea leads next.
          </p>
          <p>
            I read physical books and Kindle books. I also have Audible, and I&apos;m looking forward to bringing
            audiobooks into garden time when I can get back among the plants. Different formats, different moments,
            one continuing curiosity.
          </p>
          <p>
            I don&apos;t have a rigid reading plan. I suspect I&apos;ll continue following ideas as they emerge, picking
            up books when something makes me curious enough to investigate further.
          </p>
          <p className="pt-2 font-serif text-2xl leading-relaxed text-[var(--soil)]">
            The interesting part is often what happens between books.
          </p>
        </div>
      </section>

      {current.length > 0 && (
        <section className="mt-20 border-t border-[var(--line)] pt-9">
          <p className="editorial-eyebrow">On the reading table</p>
          <div className="mt-7 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {current.map((book) => <BookCard key={book._id} book={book} />)}
          </div>
        </section>
      )}

      {completed.length > 0 && (
        <section className="mt-20 border-t border-[var(--line)] pt-9">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="editorial-eyebrow">The reading log</p>
              <h2 className="mt-3 font-serif text-3xl text-[var(--soil)] sm:text-4xl">Books read, questions gathered.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[var(--muted)]">
              The list is a record of what I have read, not a ranking. The connections and questions matter more than the count.
            </p>
          </div>
          <div className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {completed.map((book, index) => (
              <article key={book._id} className="grid gap-2 py-5 md:grid-cols-[3rem_1fr_1fr] md:items-baseline md:gap-6">
                <p className="text-sm tabular-nums text-[var(--muted)]">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <h3 className="font-serif text-xl text-[var(--soil)]">
                    <Link href={`/thinking-shelf/books/${book.slug}`} className="hover:text-[var(--leaf)]">{book.title}</Link>
                  </h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">{book.author}</p>
                </div>
                <p className="text-sm leading-relaxed text-[var(--muted)]">{book.theme || book.note}</p>
              </article>
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

      {upcoming.length > 0 && (
        <section className="mt-20 border-t border-[var(--line)] pt-9">
          <p className="editorial-eyebrow">Waiting on the shelf</p>
          <h2 className="mt-3 font-serif text-3xl text-[var(--soil)] sm:text-4xl">Where curiosity goes next.</h2>
          <div className="mt-8 grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
            {upcoming.map((book) => (
              <article key={book._id} className="bg-[var(--background)] p-6 md:p-8">
                <h3 className="font-serif text-xl text-[var(--soil)]">
                  <Link href={`/thinking-shelf/books/${book.slug}`} className="hover:text-[var(--leaf)]">{book.title}</Link>
                </h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{book.author}</p>
                {book.note && <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{book.note}</p>}
              </article>
            ))}
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
          <div><h3 className="font-serif text-xl text-[var(--soil)]">Audible</h3><p className="mt-3 text-sm leading-7 text-[var(--muted)]">Books to listen to when I return to the garden: while watering, tending, harvesting and observing.</p></div>
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
