import {client} from "@/sanity/lib/client";

const SERIES_QUERY = `*[_type == "writingSeries"] | order(sortOrder asc, title asc) {
  _id,
  title,
  description,
  status,
  partCount
}`;

const POSTS_QUERY = `*[_type == "writingPost"] | order(publishedAt desc, sortOrder asc) {
  _id,
  title,
  excerpt,
  publishedAt,
  kind,
  externalUrl,
  featured,
  "seriesTitle": series->title
}`;

const archive = [
  {
    title: "When Taste Gets Its Vocabulary",
    excerpt:
      "A jar of mustard in Tokyo, a word called kokumi, and what fermentation can teach us about flavour, microbes, and the body.",
    href: "https://pratibhascuriousity.substack.com/p/when-taste-gets-its-vocabulary",
  },
  {
    title: "What Do We Mean When We Call a Food “Alive”?",
    excerpt:
      "Alive, dormant, or something stranger? Inside the hidden microbial ecosystems shaping fermented foods.",
    href: "https://pratibhascuriousity.substack.com/p/what-do-we-mean-when-we-call-a-food",
  },
  {
    title: "What Fermented Foods Actually Deliver",
    excerpt: "It’s not just what’s alive — it’s what has already happened.",
    href: "https://pratibhascuriousity.substack.com/p/what-fermented-foods-actually-deliver",
  },
];

export default async function WritingPage() {
  const [series, posts] = await Promise.all([
    client.fetch(SERIES_QUERY),
    client.fetch(POSTS_QUERY),
  ]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-14 lg:py-28">
      <header className="max-w-4xl">
        <p className="editorial-eyebrow">Writing · Ideas &amp; observations</p>
        <h1 className="mt-6 font-serif text-5xl leading-[1.08] tracking-tight text-[var(--soil)] sm:text-6xl lg:text-7xl">
          Ideas, questions and observations where science meets everyday life.
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-[var(--muted)] sm:text-2xl">
          Writing that follows living systems, human experience and the
          conditions that shape what happens next.
        </p>
      </header>

      <section className="mt-20 border-t border-[var(--line)] pt-10">
        <p className="editorial-eyebrow">Series</p>
        {series.length > 0 ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {series.map((item: {
              _id: string;
              title: string;
              description: string;
              status: string;
              partCount?: number;
            }) => (
              <article key={item._id} className="bg-[var(--surface)] p-7 sm:p-9">
                <p className="editorial-eyebrow">
                  {item.partCount ? `${item.partCount}-part series` : "Writing series"} · {item.status === "complete" ? "Complete" : "In progress"}
                </p>
                <h2 className="mt-5 font-serif text-3xl text-[var(--soil)]">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
              </article>
            ))}
          </div>
        ) : (
          <article className="mt-8 max-w-4xl border-t border-[var(--line)] pt-8">
            <p className="editorial-eyebrow">12-part series · Complete</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[var(--soil)] sm:text-5xl">
              Living Systems: Fermentation
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
              A journey through taste, microbes, transformation, time and what
              fermentation changes.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)]">
              It begins with a jar of mustard in Tokyo and a flavour that did
              not yet have a name. From kokumi and the meaning of “alive” to
              microbial ecosystems, probiotics and what fermented foods
              actually deliver, the series follows fermentation beyond recipes
              and beyond the language of “good” and “bad” bacteria.
            </p>
            <a
              href="https://pratibhascuriousity.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-11 items-center border-b border-[var(--leaf)] pb-1 text-sm font-medium text-[var(--soil)] hover:text-[var(--leaf)]"
            >
              Read the complete series on Substack <span className="ml-2" aria-hidden="true">↗</span>
            </a>
          </article>
        )}
      </section>

      <section className="mt-20 border-t border-[var(--line)] pt-10">
        <p className="editorial-eyebrow">From the archive</p>
        {posts.length > 0 ? (
          <div className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {posts.map((post: {
              _id: string;
              title: string;
              excerpt: string;
              publishedAt?: string;
              kind: string;
              externalUrl?: string;
              seriesTitle?: string;
            }) => (
              <article key={post._id} className="py-7">
                <p className="editorial-eyebrow">
                  {post.kind.replace("-", " ")}{post.seriesTitle ? ` · ${post.seriesTitle}` : ""}
                  {post.publishedAt ? ` · ${new Date(post.publishedAt).toLocaleDateString("en", {year: "numeric", month: "short"})}` : ""}
                </p>
                <h3 className="mt-3 font-serif text-2xl text-[var(--soil)] sm:text-3xl">
                  {post.externalUrl ? (
                    <a href={post.externalUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--leaf)]">
                      {post.title} <span aria-hidden="true">↗</span>
                    </a>
                  ) : post.title}
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted)]">{post.excerpt}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {archive.map((post) => (
              <article key={post.title} className="py-7">
                <h3 className="font-serif text-2xl text-[var(--soil)] sm:text-3xl">
                  <a href={post.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--leaf)]">
                    {post.title} <span aria-hidden="true">↗</span>
                  </a>
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted)]">{post.excerpt}</p>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="mt-20 border-t border-[var(--line)] pt-10">
        <p className="editorial-eyebrow">An evolving archive</p>
        <p className="mt-5 max-w-3xl font-serif text-2xl leading-snug text-[var(--soil)] sm:text-3xl">
          The writing continues across the garden, the microbiome, human
          experience and the systems we live and work within.
        </p>
      </section>
    </div>
  );
}
