export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-14 lg:py-28">
      <header className="max-w-4xl">
        <p className="editorial-eyebrow">Contact · Start a conversation</p>
        <h1 className="mt-6 font-serif text-5xl leading-[1.08] tracking-tight text-[var(--soil)] sm:text-6xl lg:text-7xl">
          Good questions deserve a conversation.
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-[var(--muted)] sm:text-2xl">
          Have a question, an idea, a perspective to share, or something you
          would like to explore together? I’d be glad to hear from you.
        </p>
      </header>

      <section className="mt-20 max-w-3xl border-t border-[var(--line)] pt-10">
        <p className="editorial-eyebrow">Write to Aanavik</p>
        <a
          href="mailto:Pratibha.aanavik@gmail.com"
          className="mt-5 inline-flex items-center gap-3 border-b border-[var(--leaf)] pb-2 font-serif text-2xl text-[var(--soil)] transition-colors hover:text-[var(--leaf)] sm:text-3xl"
        >
          Pratibha.aanavik@gmail.com
          <span aria-hidden="true" className="font-sans text-base">↗</span>
        </a>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)]">
          Whether it’s a question about the work, a possible collaboration, or
          simply a connection sparked by something you read here, this is a
          good place to begin.
        </p>
      </section>
    </main>
  );
}
