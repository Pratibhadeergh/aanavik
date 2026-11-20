import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Thinking Shelf | Aanavik",
  description:
    "A reading journal exploring the ideas that shape how we think, behave, connect and live.",
};

const completedBooks = [
  { title: "Beyond Belief", theme: "Beliefs, mindset and possibility" },
  {
    title: "Think Again",
    author: "Adam Grant",
    theme: "Rethinking, metacognition and intellectual humility",
  },
  {
    title: "Hooked by Design",
    theme: "Design and behavioural influence",
  },
  {
    title: "The Girls Aren't Fine",
    theme: "Gender and contemporary social experience",
  },
  {
    title: "The Five Dysfunctions of a Team",
    author: "Patrick Lencioni",
    theme: "Trust, conflict and collective behaviour",
  },
];

const nextBooks = [
  { title: "Deep Work", author: "Cal Newport", note: "A revisit" },
  {
    title: "Books by Gay Hendricks",
    note: "Returning to work I have read before",
  },
  {
    title: "Into the Magic Shop",
    author: "James R. Doty",
    note: "Alongside its companion book",
  },
  {
    title: "Atlas of the Heart",
    author: "Brené Brown",
    note: "Exploring emotions and human connection",
  },
  { title: "The Courage to Be Disliked", note: "Waiting on the shelf" },
  { title: "Thinking, Fast and Slow", note: "Waiting on the shelf" },
  { title: "The Mountain Is You", note: "Waiting on the shelf" },
];

export default function ThinkingShelfPage() {
  return (
    <div className="px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-5xl">
        <header className="max-w-4xl">
          <p className="editorial-eyebrow">Aanavik / Reading &amp; Ideas</p>
          <h1 className="mt-6 font-serif text-5xl leading-tight text-[var(--soil)] md:text-7xl">
            The Thinking Shelf
          </h1>
          <p className="mt-5 font-serif text-2xl italic text-[var(--muted)] md:text-3xl">
            Ideas worth sitting with.
          </p>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            A reading journal exploring the ideas that shape how we think,
            behave, connect and live. Not just what I read, but what reading
            makes me think about.
          </p>
        </header>

        <section className="mt-16 border-y border-[var(--line)] py-10 md:mt-20 md:py-14">
          <p className="editorial-eyebrow">The beginning</p>
          <h2 className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-[var(--soil)] md:text-4xl">
            Why I&apos;m Reading Again (Except That I&apos;ve Never Really Stopped)
          </h2>

          <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-[var(--muted)] md:text-lg">
            <p>
              I&apos;ve always been a reader. Even during the periods when I
              wasn&apos;t reading much, I continued buying books. My bookshelves
              kept growing, sometimes faster than my reading list. There was
              always another subject I wanted to understand, another idea I
              wanted to explore, another book I was convinced I would get
              around to reading.
            </p>
            <p>
              So perhaps saying that I&apos;ve started reading again isn&apos;t
              entirely accurate. What has returned is the habit of making time
              for it.
            </p>
            <p>
              When I started coaching work with Ramya Ranganathan, she would
              often recommend books after discussing particular ideas or
              concepts with us. Sometimes she would introduce an idea during a
              session, and the book behind that idea would become the next
              thing I wanted to explore. That&apos;s how I got around to
              reading <em>Deep Work</em> by Cal Newport, <em>The Big Leap</em>{" "}
              by Gay Hendricks and <em>Flow</em> by Mihaly Csikszentmihalyi.
            </p>
            <p>
              The coaching eventually ended, and, predictably, the reading
              slowed down too. I continued buying books, though.{" "}
              <em>The Courage to Be Disliked</em>, <em>Thinking, Fast and Slow</em>{" "}
              and <em>The Mountain Is You</em> joined the ever-growing pile of
              books waiting for their turn.
            </p>
            <p>They are still waiting.</p>
            <p>
              Then came the fracture. When I joined Karthi&apos;s Inner Circle,
              we were asked to identify and establish keystone habits. With my
              ankle in a cast, there wasn&apos;t much I could choose in terms
              of physical activity. I needed something that was possible
              within my circumstances, something I could do consistently.
            </p>
            <p>I chose reading.</p>
            <p>
              Today is day 31 of the streak. I have finished five books in
              27 days of active reading, but the number was never the target.
              The intention was to learn, to follow ideas, and to put some
              things in place as a foundation for the work ahead.
            </p>
            <p>
              The first five books in this stretch have been{" "}
              <em>Beyond Belief</em>, <em>Think Again</em>,{" "}
              <em>Hooked by Design</em>, <em>The Girls Aren&apos;t Fine</em>{" "}
              and <em>The Five Dysfunctions of a Team</em>. They approach
              different subjects from different directions, but I&apos;m
              beginning to notice connections: how beliefs shape decisions,
              how willing we are to reconsider what we think we know, how
              environments influence behaviour, and what makes relationships
              and teams work.
            </p>
            <p>
              These aren&apos;t necessarily questions I started with. Some
              emerged while reading. Others came from connecting one book to
              another.
            </p>
            <p>
              That&apos;s what I want to explore here. Not conventional book
              summaries or star ratings, but the ideas themselves: what an
              author proposes, what the evidence supports, what I question,
              and where an idea leads next.
            </p>
            <p>
              I read physical books and Kindle books. I also have Audible, and
              I&apos;m looking forward to bringing audiobooks into garden time
              when I can get back among the plants. Different formats, different
              moments, one continuing curiosity.
            </p>
            <p>
              I don&apos;t have a rigid reading plan. I suspect I&apos;ll
              continue following ideas as they emerge, picking up books when
              something makes me curious enough to investigate further.
            </p>
            <p className="font-serif text-2xl leading-relaxed text-[var(--soil)]">
              The interesting part is often what happens between books.
            </p>
          </div>
        </section>

        <section className="mt-16 md:mt-20">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="editorial-eyebrow">The reading log</p>
              <h2 className="mt-3 font-serif text-3xl text-[var(--soil)] md:text-4xl">
                Five books, many questions.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[var(--muted)]">
              The list is a record of what I have read, not a ranking. The
              connections and questions matter more than the count.
            </p>
          </div>

          <div className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {completedBooks.map((book, index) => (
              <article
                key={book.title}
                className="grid gap-2 py-5 md:grid-cols-[3rem_1fr_1fr] md:items-baseline md:gap-6"
              >
                <p className="text-sm tabular-nums text-[var(--leaf)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="font-serif text-xl text-[var(--soil)]">
                    {book.title}
                  </h3>
                  {book.author && (
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {book.author}
                    </p>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {book.theme}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 md:mt-20">
          <p className="editorial-eyebrow">Waiting on the shelf</p>
          <h2 className="mt-3 font-serif text-3xl text-[var(--soil)] md:text-4xl">
            Where curiosity goes next.
          </h2>
          <div className="mt-8 grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
            {nextBooks.map((book) => (
              <article
                key={book.title}
                className="bg-[var(--surface)] p-6 md:p-8"
              >
                <h3 className="font-serif text-xl text-[var(--soil)]">
                  {book.title}
                </h3>
                {book.author && (
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {book.author}
                  </p>
                )}
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {book.note}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-[var(--line)] pt-10 md:mt-20">
          <p className="editorial-eyebrow">A note on the practice</p>
          <h2 className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-[var(--soil)] md:text-4xl">
            Reading happens in more than one place.
          </h2>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-serif text-xl text-[var(--soil)]">
                Physical books
              </h3>
              <p className="mt-3 leading-relaxed text-[var(--muted)]">
                Time to slow down, annotate, revisit a passage and sit with an
                idea.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-[var(--soil)]">Kindle</h3>
              <p className="mt-3 leading-relaxed text-[var(--muted)]">
                A library close at hand, ready whenever there is a moment to
                read.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-[var(--soil)]">Audible</h3>
              <p className="mt-3 leading-relaxed text-[var(--muted)]">
                Books to listen to when I return to the garden: while watering,
                tending, harvesting and observing.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 border-t border-[var(--line)] pt-10 md:mt-20">
          <p className="editorial-eyebrow">What to expect</p>
          <p className="mt-4 max-w-3xl font-serif text-2xl leading-relaxed text-[var(--soil)] md:text-3xl">
            Ideas, questions, evidence and unexpected connections. Sometimes
            a book will change my mind. Sometimes it will leave me with better
            questions.
          </p>
        </section>
      </div>
    </div>
  );
}
