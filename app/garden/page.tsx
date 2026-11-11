import Link from "next/link";

const destinations = [
  {
    eyebrow: "Garden Almanac",
    title: "What can I start now?",
    description:
      "A garden calendar that looks ahead, so you don't have to hold the whole garden in your head.",
    href: "/garden/almanac",
    action: "Plan the next sowing",
  },
  {
    eyebrow: "Garden Journal",
    title: "The garden, day to day.",
    description:
      "Observations, experiments and lessons from a living garden.",
    href: "/garden/journal",
    action: "Read the journal",
  },
  {
    eyebrow: "The garden",
    title: "Meet the babies.",
    description:
      "The plants growing, flowering, fruiting and generally getting into trouble in the garden.",
    href: "/garden/babies",
    action: "Meet the plants",
  },
];

export default function GardenPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-14 lg:py-28">
      <header className="max-w-4xl">
        <p className="editorial-eyebrow">Garden · Practice &amp; observation</p>
        <h1 className="mt-6 font-serif text-5xl leading-[1.08] tracking-tight text-[var(--soil)] sm:text-6xl lg:text-7xl">
          The garden is our longest-running experiment.
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-[var(--muted)] sm:text-2xl">
          Soil, microbes, compost, seeds, insects and seasons reveal the same
          principles that appear throughout biology: diversity, resilience
          and relationships.
        </p>
      </header>

      <nav
        aria-label="Garden sections"
        className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-y border-[var(--line)] py-5"
      >
        <Link href="/garden/almanac" className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--soil)]">
          Garden Almanac
        </Link>
        <Link href="/garden/journal" className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--soil)]">
          Garden Journal
        </Link>
        <Link href="/garden/babies" className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--soil)]">
          The Garden
        </Link>
      </nav>

      <section className="mt-16">
        <div className="max-w-2xl">
          <p className="editorial-eyebrow">Ways into the garden</p>
          <h2 className="mt-5 font-serif text-3xl leading-tight text-[var(--soil)] sm:text-4xl">
            Growing is one way of paying attention.
          </h2>
        </div>

        <div className="mt-10 grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
          {destinations.map((destination) => (
            <Link
              key={destination.href}
              href={destination.href}
              className="group flex min-h-72 flex-col bg-[var(--surface)] p-8 transition-colors hover:bg-white lg:p-10"
            >
              <p className="editorial-eyebrow">{destination.eyebrow}</p>
              <h3 className="mt-8 font-serif text-2xl leading-snug text-[var(--soil)] transition-colors group-hover:text-[var(--leaf)]">
                {destination.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-[var(--muted)]">
                {destination.description}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--soil)]">
                {destination.action} <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-6 border-t border-[var(--line)] pt-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
        <p className="editorial-eyebrow">An ongoing practice</p>
        <p className="max-w-3xl font-serif text-2xl leading-snug text-[var(--soil)] sm:text-3xl">
          A garden is not a controlled laboratory. It is a living place to
          observe, participate, make changes and learn from what happens next.
        </p>
      </section>
    </div>
  );
}