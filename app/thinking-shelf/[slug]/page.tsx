import Link from "next/link";
import {notFound} from "next/navigation";
import {PortableText, type PortableTextComponents} from "@portabletext/react";
import {client} from "@/sanity/lib/client";
import {urlFor} from "@/sanity/lib/image";

const ENTRY_QUERY = `*[_type == "thinkingEntry" && slug.current == $slug && defined(publishedAt)][0] {
  title, excerpt, publishedAt, body, coverImage, tags,
  "bookTitle": book->title,
  "bookSlug": book->slug.current,
  "author": book->author
}`;

type EntryData = {
  title: string; excerpt: string; publishedAt: string; body: any[];
  coverImage?: any; tags?: string[]; bookTitle?: string; bookSlug?: string; author?: string;
};

const components: PortableTextComponents = {
  block: {
    h2: ({children}) => <h2 className="mt-12 font-serif text-2xl leading-tight text-[var(--soil)] sm:text-3xl">{children}</h2>,
    h3: ({children}) => <h3 className="mt-9 font-serif text-xl text-[var(--soil)] sm:text-2xl">{children}</h3>,
    normal: ({children}) => <p className="mt-7 text-[17px] leading-[1.8] text-[var(--foreground)] sm:text-[18px]">{children}</p>,
    blockquote: ({children}) => <blockquote className="my-10 border-l-2 border-[var(--leaf)] pl-6 font-serif text-2xl leading-relaxed text-[var(--soil)]">{children}</blockquote>,
  },
  list: {
    bullet: ({children}) => <ul className="mt-7 list-disc space-y-3 pl-6 text-[17px] leading-[1.8] text-[var(--foreground)] sm:text-[18px]">{children}</ul>,
    number: ({children}) => <ol className="mt-7 list-decimal space-y-3 pl-6 text-[17px] leading-[1.8] text-[var(--foreground)] sm:text-[18px]">{children}</ol>,
  },
  types: {
    image: ({value}) => <figure className="my-10">
      <img src={urlFor(value).width(1400).auto("format").url()} alt={value.alt || ""} className="h-auto w-full" />
      {value.caption && <figcaption className="mt-3 text-xs text-[var(--muted)]">{value.caption}</figcaption>}
    </figure>,
  },
};

export async function generateMetadata({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const entry = await client.fetch<Pick<EntryData, "title" | "excerpt"> | null>(
    `*[_type == "thinkingEntry" && slug.current == $slug && defined(publishedAt)][0]{title, excerpt}`,
    {slug},
  );
  return entry ? {title: `${entry.title} | The Thinking Shelf · Aanavik`, description: entry.excerpt} : {};
}

export default async function ThinkingEntryPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const entry = await client.fetch<EntryData | null>(ENTRY_QUERY, {slug}, {next: {revalidate: 60}});
  if (!entry) notFound();

  return (
    <article className="mx-auto max-w-4xl px-6 py-20 md:px-10 lg:py-28">
      <Link href="/thinking-shelf" className="text-sm text-[var(--muted)] hover:text-[var(--soil)]">← The Thinking Shelf</Link>
      <header className="mt-12 border-b border-[var(--line)] pb-10">
        <p className="editorial-eyebrow">A reading reflection</p>
        <h1 className="mt-6 max-w-3xl font-serif text-3xl leading-[1.16] tracking-tight text-[var(--soil)] sm:text-4xl">{entry.title}</h1>
        <p className="mt-6 max-w-3xl font-serif text-xl leading-relaxed text-[var(--muted)]">{entry.excerpt}</p>
        <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-xs text-[var(--muted)]">
          <time dateTime={entry.publishedAt}>{new Date(entry.publishedAt).toLocaleDateString("en", {year: "numeric", month: "long", day: "numeric"})}</time>
          {entry.bookTitle && entry.bookSlug && <Link href={`/thinking-shelf/books/${entry.bookSlug}`} className="text-[var(--leaf)] hover:text-[var(--soil)]">From {entry.bookTitle}{entry.author ? ` · ${entry.author}` : ""}</Link>}
        </div>
      </header>
      {entry.coverImage && <img src={urlFor(entry.coverImage).width(1400).auto("format").url()} alt="" className="mt-10 h-auto w-full" />}
      <div className="mx-auto mt-12 max-w-3xl">
        <PortableText value={entry.body} components={components} />
      </div>
      {entry.tags && entry.tags.length > 0 && <div className="mx-auto mt-14 flex max-w-3xl flex-wrap gap-2 border-t border-[var(--line)] pt-7">{entry.tags.map((tag) => <span key={tag} className="border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">{tag}</span>)}</div>}
      {entry.bookTitle && entry.bookSlug && <footer className="mx-auto mt-16 max-w-3xl border-t border-[var(--line)] pt-7 text-sm text-[var(--muted)]">From the Thinking Shelf: <Link href={`/thinking-shelf/books/${entry.bookSlug}`} className="text-[var(--soil)] hover:text-[var(--leaf)]">{entry.bookTitle}</Link></footer>}
    </article>
  );
}
