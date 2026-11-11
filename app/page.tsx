import Link from "next/link";

const domains = [
  {
    number: "01",
    title: "Human Layer",
    subtitle: "Understanding what your body is telling you.",
    description:
      "Blood work, genetic information, the microbiome, wearables and everyday signals are pieces of a larger system. We bring them into context to help people understand what may be happening in their bodies — and what they might explore next.",
    threads: "Food · Sleep · Movement · Recovery · Further testing",
    href: "/research/human-layer",
    action: "Explore the Human Layer",
  },
  {
    number: "02",
    title: "Stability Stack",
    subtitle: "Understanding the conditions in which a person is operating.",
    description:
      "Capacity, environment, relationships, demands and recovery all shape how a person can function, adapt and respond. Stability Stack looks at the conditions around a person — not just the problem in front of them.",
    threads: "Capacity · Regulation · Containment · Execution · Performance",
    href: "/research/stability-stack",
    action: "Explore the Stability Stack",
  },
  {
    number: "03",
    title: "Garden",
    subtitle: "Exploring living systems by growing, observing and participating.",
    description:
      "A garden is food, movement, light, attention, recovery and relationships — as well as a place to observe what happens when we change conditions and pay attention to the response.",
    threads: "Food · Light · Movement · Attention · Recovery",
    href: "/garden",
    action: "Step into the garden",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="mx-auto grid min-h-[76vh] max-w-7xl items-center gap-12 px-6 py-20 md:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:px-14 lg:py-28">
        <div className="max-w-4xl">
          <p className="editorial-eyebrow">Molecules &amp; Meaning</p>
          <h1 className="mt-7 font-serif text-5xl leading-[1.08] tracking-[-0.035em] text-[var(--soil)] sm:text-6xl lg:text-7xl">
            What conditions allow living systems to thrive?
          </h1>
          <p className="mt-8 max-w-2xl font-serif text-xl leading-relaxed text-[var(--foreground)] sm:text-2xl">
            Healthy gardens. Healthy microbes. Healthy humans.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
            <a
              href="#perspective"
              className="border-b border-[var(--leaf)] pb-1 text-sm font-medium text-[var(--soil)] transition-colors hover:text-[var(--leaf)]"
            >
              Enter the Aanavik perspective <span aria-hidden="true">↓</span>
            </a>
            <span className="text-sm text-[var(--muted)]">
              Different systems. Similar questions.
            </span>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="relative mx-auto hidden aspect-square w-full max-w-[27rem] items-center justify-center lg:flex"
        >
          <div className="absolute inset-[8%] rounded-full border border-[var(--line)]" />
          <div className="absolute inset-[19%] rounded-full border border-[var(--line)]" />
          <div className="absolute inset-[30%] rounded-full border border-[var(--line)]" />
          <div className="absolute left-[12%] top-[23%] h-3 w-3 rounded-full bg-[var(--leaf)]" />
          <div className="absolute bottom-[20%] right-[18%] h-2.5 w-2.5 rounded-full bg-[var(--soil)]" />
          <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-[var(--leaf)]/50 bg-[var(--surface)] text-center">
            <span className="max-w-28 font-serif text-2xl leading-tight text-[var(--soil)]">
              Living
              <br />
              systems
            </span>
          </div>
          <span className="absolute left-0 top-[48%] font-serif text-sm italic text-[var(--muted)]">
            conditions
          </span>
          <span className="absolute bottom-[5%] right-[8%] font-serif text-sm italic text-[var(--muted)]">
            response
          </span>
        </div>
      </section>

      <section
        id="perspective"
        className="border-y border-[var(--line)] bg-[var(--surface)]"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-14 lg:py-24">
          <div>
            <p className="editorial-eyebrow">The Aanavik perspective</p>
            <h2 className="mt-5 max-w-sm font-serif text-3xl leading-tight text-[var(--soil)] sm:text-4xl">
              We look for the conditions.
            </h2>
          </div>
          <div className="max-w-3xl text-lg leading-relaxed text-[var(--muted)]">
            <p>
              A garden is not healthy because of one intervention. A microbial
              community is not healthy because of one species. A human is not
              healthy because of one biomarker.
            </p>
            <p className="mt-6 font-serif text-2xl leading-snug text-[var(--soil)] sm:text-3xl">
              Living systems emerge from relationships.
            </p>
            <p className="mt-6">
              Aanavik is a way of looking at those relationships — across
              biology, behaviour and the environments in which living systems
              take shape.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="max-w-2xl">
          <p className="editorial-eyebrow">Three entry points</p>
          <h2 className="mt-5 font-serif text-3xl leading-tight text-[var(--soil)] sm:text-4xl">
            Different questions. A shared interest in conditions.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--muted)]">
            Each domain has its own language and evidence. The connection is
            the curiosity that runs through them.
          </p>
        </div>

        <div className="mt-12 grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
          {domains.map((domain) => (
            <article
              key={domain.number}
              className="flex flex-col bg-[var(--background)] p-7 sm:p-9 lg:min-h-[32rem] lg:p-10"
            >
              <p className="editorial-eyebrow">{domain.number}</p>
              <h3 className="mt-8 font-serif text-2xl text-[var(--soil)] sm:text-3xl">
                {domain.title}
              </h3>
              <p className="mt-4 font-serif text-lg leading-snug text-[var(--foreground)]">
                {domain.subtitle}
              </p>
              <p className="mt-5 flex-1 text-sm leading-7 text-[var(--muted)]">
                {domain.description}
              </p>
              <p className="mt-7 border-t border-[var(--soft-line)] pt-5 text-xs leading-6 tracking-wide text-[var(--muted)]">
                {domain.threads}
              </p>
              <Link
                href={domain.href}
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--soil)] transition-colors hover:text-[var(--leaf)]"
              >
                {domain.action} <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[var(--soil)] text-[var(--background)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-14 lg:py-24">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#c4d1b6]">
              Relationships · Timing · Response
            </p>
            <h2 className="mt-5 max-w-sm font-serif text-3xl leading-tight sm:text-4xl">
              The signal is only useful if we can respond to it.
            </h2>
          </div>
          <div className="max-w-3xl text-base leading-relaxed text-[#e1e7dc] sm:text-lg">
            <p>
              Relationships shape what happens. Timing shapes when we notice
              it. Response shapes what happens next.
            </p>
            <p className="mt-5">
              A signal can exist without being understood. A pattern can be
              visible without being recognised. A condition can be changed
              without knowing what to watch for.
            </p>
            <p className="mt-5">
              Aanavik is interested in closing that gap — between signal and
              understanding, between understanding and response.
            </p>
            <Link
              href="/why-aanavik"
              className="mt-8 inline-flex border-b border-[#c4d1b6] pb-1 text-sm font-medium text-white transition-colors hover:text-[#c4d1b6]"
            >
              More about Aanavik <span className="ml-2" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-14 lg:py-24">
        <div className="flex flex-col gap-6 border-b border-[var(--line)] pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="editorial-eyebrow">Continue exploring</p>
            <h2 className="mt-5 font-serif text-3xl text-[var(--soil)] sm:text-4xl">
              Follow the questions further.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
            Writing runs through all three domains — connecting ideas,
            research and observations from the garden.
          </p>
        </div>
        <div className="grid gap-8 pt-8 sm:grid-cols-3">
          <Link href="/writing" className="group">
            <p className="editorial-eyebrow">Ideas &amp; observations</p>
            <h3 className="mt-3 font-serif text-2xl text-[var(--soil)] transition-colors group-hover:text-[var(--leaf)]">
              Writing <span aria-hidden="true">↗</span>
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              Essays, questions and observations where science meets everyday
              life.
            </p>
          </Link>
          <Link href="/research" className="group">
            <p className="editorial-eyebrow">Evidence &amp; inquiry</p>
            <h3 className="mt-3 font-serif text-2xl text-[var(--soil)] transition-colors group-hover:text-[var(--leaf)]">
              Research <span aria-hidden="true">↗</span>
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              The science, evidence and open questions behind the work.
            </p>
          </Link>
          <Link href="/garden" className="group">
            <p className="editorial-eyebrow">Practice &amp; observation</p>
            <h3 className="mt-3 font-serif text-2xl text-[var(--soil)] transition-colors group-hover:text-[var(--leaf)]">
              Garden <span aria-hidden="true">↗</span>
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              Growing, observing and learning from living systems.
            </p>
          </Link>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--surface)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-16 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14 lg:py-20">
          <div>
            <p className="editorial-eyebrow">Start anywhere</p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-[var(--soil)] sm:text-4xl">
              Start with the question that brought you here.
            </h2>
          </div>
          <Link
            href="/why-aanavik"
            className="inline-flex shrink-0 items-center gap-3 self-start border-b border-[var(--leaf)] pb-2 text-sm font-medium text-[var(--soil)] transition-colors hover:text-[var(--leaf)] lg:self-center"
          >
            Get to know Aanavik <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
