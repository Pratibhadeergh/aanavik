import Link from "next/link";
import NextImage from "next/image";
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
  "relatedBooks": (select(defined(book) => [book->{title, "slug": slug.current}], []) + (books[]->{title, "slug": slug.current}))
}`;

type Book = {
  _id: string; title: string; author: string; slug: string; status: string;
  note?: string; theme?: string; formats?: string[]; finishedOn?: string; cover?: any; reflectionCount: number;
};
type Entry = {
  _id: string; title: string; excerpt: string; publishedAt: string; slug: string;
  relatedBooks?: {title: string; slug: string}[];
};

const originalCompletedBooks = [
  {title: "Beyond Belief", author: "Nir Eyal", theme: "Beliefs, mindset and possibility"},
  {title: "Think Again", author: "Adam Grant", theme: "Rethinking, metacognition and intellectual humility"},
  {title: "Hooked by Design", author: "Dr. Ramya Ranganathan", theme: "Design and behavioural influence"},
  {title: "The Girls Aren't Fine", author: "Harnidh Kaur", theme: "Gender and contemporary social experience"},
  {title: "The Five Dysfunctions of a Team", author: "Patrick Lencioni", theme: "Trust, conflict and collective behaviour"},
];

const originalNextBooks = [
  {title: "Deep Work", author: "Cal Newport", note: "A revisit"},
  {title: "Gay Hendricks — books to revisit", author: "Gay Hendricks", note: "Returning to work I have read before; individual titles to be added"},
  {title: "Into the Magic Shop", author: "James R. Doty", note: "Alongside its companion book"},
  {title: "Atlas of the Heart", author: "Brené Brown", note: "Exploring emotions and human connection"},
  {title: "The Courage to Be Disliked", author: "Ichiro Kishimi and Fumitake Koga", note: "Waiting on the shelf"},
  {title: "Thinking, Fast and Slow", author: "Daniel Kahneman", note: "Waiting on the shelf"},
  {title: "The Mountain Is You", author: "Brianna Wiest", note: "Waiting on the shelf"},
];

const normalizeBookTitle = (title: string) => title
  .toLowerCase()
  .replace(/aren't/g, "are not")
  .replace(/\b5\b/g, "five")
  .normalize("NFKD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9]/g, "");

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
            <section className="mt-12">
        <NextImage
          src="/images/thinking-shelf-bookshelf.png"
          alt="A botanical bookshelf with a fermentation jar"
          width={1800}
          height={1100}
          className="h-auto w-full"
          sizes="(max-width: 768px) 100vw, 1200px"
        />
      </section>

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

      {(completed.length > 0 || originalCompletedBooks.length > 0) && (
        <section className="mt-20 border-t border-[var(--line)] pt-10">
          <p className="editorial-eyebrow">The books in this reading streak</p>
          <h2 className="mt-3 font-serif text-3xl leading-snug text-[var(--soil)] sm:text-4xl">The Thinking Shelf</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
            A growing record of the books I've finished along this stretch of reading. Each one leaves something behind: an idea, a question, or a connection to follow.
          </p>
          <div className="mt-10 overflow-hidden border-b-[12px] border-[#8a6b48] bg-gradient-to-b from-[#f1eee5] to-[#e7e0d2] px-5 pb-0 pt-7 shadow-[0_12px_18px_-14px_rgba(40,30,20,0.55)] sm:px-8">
            <div className="flex min-h-52 items-end justify-start gap-2 overflow-x-auto pb-0">
              {[...completed, ...originalCompletedBooks.filter((oldBook) => !completed.some((book) => normalizeBookTitle(book.title) === normalizeBookTitle(oldBook.title)))].map((book, index) => (
                <div key={"_id" in book ? book._id : book.title} className="group flex w-24 shrink-0 flex-col items-center justify-end sm:w-28">
                  {"cover" in book && book.cover ? (
                    <Link href={"slug" in book && book.slug ? `/thinking-shelf/books/${book.slug}` : "#"} aria-label={`Explore ${book.title}`} className="block w-full transition-transform duration-200 hover:-translate-y-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--leaf)]">
                      <img src={urlFor(book.cover).width(240).height(340).fit("max").url()} alt={`Cover of ${book.title}`} className="h-44 w-full object-cover object-top shadow-md sm:h-48" />
                    </Link>
                  ) : (
                    <div className="flex h-44 w-full items-center justify-center border-x border-white/20 px-2 text-center shadow-md transition-transform duration-200 group-hover:-translate-y-2 sm:h-48" style={{backgroundColor:["#53634a","#8b6b4f","#b5a27c","#65776c","#8a7768"][index%5]}}>
                      <span className="font-serif text-sm leading-snug text-white">{book.title}</span>
                    </div>
                  )}
                  <p className="mt-2 line-clamp-2 w-full text-center text-xs leading-4 text-[var(--soil)]">{book.title}</p>
                  <p className="mb-3 mt-1 line-clamp-1 w-full text-center text-[11px] text-[var(--muted)]">{book.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


      {current.length > 0 && (
        <section className="mt-20 border-t border-[var(--line)] pt-10">
          <p className="editorial-eyebrow">The reading table</p>
          <h2 className="mt-3 font-serif text-3xl leading-snug text-[var(--soil)] sm:text-4xl">On the reading table</h2>
          <div className="mt-8 grid grid-cols-1 gap-5">
            {current.map((book) => <BookCard key={book._id} book={book} />)}
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
                  {entry.relatedBooks?.length ? entry.relatedBooks.map((book, index) => <span key={book.slug}>{index > 0 ? " · " : ""}<Link href={`/thinking-shelf/books/${book.slug}`} className="hover:text-[var(--soil)]">{book.title}</Link></span>) : "Reading reflection"}
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

      {(upcoming.length > 0 || books.length === 0) && (
        <section className="mt-20 border-t border-[var(--line)] pt-9">
          <p className="editorial-eyebrow">Waiting on the shelf</p>
          <h2 className="mt-3 font-serif text-3xl text-[var(--soil)] sm:text-4xl">Where curiosity goes next.</h2>
          <div className="mt-8 grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
            {(upcoming.length > 0 ? upcoming : originalNextBooks).map((book) => (
              <article key={"_id" in book ? book._id : book.title} className="bg-[var(--background)] p-6 md:p-8">
                <h3 className="font-serif text-xl text-[var(--soil)]">
                  {"slug" in book && book.slug
                    ? <Link href={`/thinking-shelf/books/${book.slug}`} className="hover:text-[var(--leaf)]">{book.title}</Link>
                    : book.title}
                </h3>
                {book.author && <p className="mt-1 text-sm text-[var(--muted)]">{book.author}</p>}
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
    <Link
      href={`/thinking-shelf/books/${book.slug}`}
      className="group flex h-full gap-5 border border-[var(--line)] bg-[var(--surface)] p-5 transition-colors hover:border-[var(--leaf)] hover:bg-[var(--soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--leaf)]"
    >
      {book.cover && (
        <div className="w-20 shrink-0">
          <img src={urlFor(book.cover).width(240).height(340).fit("max").url()} alt={`Cover of ${book.title}`} className="w-full shadow-sm" />
        </div>
      )}
      <div className="flex min-w-0 flex-1 flex-col justify-center sm:flex-row sm:items-center sm:justify-between sm:gap-10">
        <div className="min-w-0">
          <p className="editorial-eyebrow">{statusLabels[book.status] ?? "On the shelf"}</p>
          <h3 className="mt-2 font-serif text-2xl leading-snug text-[var(--soil)] transition-colors group-hover:text-[var(--leaf)] sm:text-3xl">
            {book.title}
          </h3>
          <p className="mt-2 text-base text-[var(--muted)]">{book.author}</p>
          {book.note && <p className="mt-4 max-w-2xl text-[17px] leading-[1.75] text-[var(--muted)]">{book.note}</p>}
        </div>
        <div className="mt-6 flex shrink-0 flex-col items-start gap-3 sm:mt-0 sm:items-end">
          {book.reflectionCount > 0 && <p className="text-sm text-[var(--leaf)]">{book.reflectionCount} {book.reflectionCount === 1 ? "reflection" : "reflections"}</p>}
          <span className="text-base font-medium text-[var(--leaf)]">Explore this book <span aria-hidden="true">→</span></span>
        </div>
      </div>
    </Link>
  );
}
