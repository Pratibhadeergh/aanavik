import Link from "next/link";

const areas = [
  {
    number: "01",
    title: "Human Layer",
    description: "Biological signals, lived experience and personal context — brought together without mistaking a measurement for an explanation.",
    href: "/research/human-layer",
    link: "Explore the Human Layer",
  },
  {
    number: "02",
    title: "Stability Stack",
    description: "The conditions beneath sustainable functioning: capacity, regulation, containment, execution and performance.",
    href: "/research/stability-stack",
    link: "Explore the Stability Stack",
  },
];

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-14 lg:py-28">
      <div className="max-w-3xl">
        <p className="editorial-eyebrow">Research &amp; frameworks</p>
        <h1 className="mt-6 font-serif text-5xl leading-tight tracking-tight text-[var(--soil)] sm:text-6xl">
          Different questions. A shared interest in conditions.
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-[var(--muted)]">
          Aanavik follows two related lines of inquiry. One asks how we make
          sense of signals from the human body. The other asks what conditions
          shape a person’s capacity to function, adapt and respond.
        </p>
      </div>

      <div className="mt-16 grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
        {areas.map((area) => (
          <Link
            key={area.number}
            href={area.href}
            className="group flex min-h-72 flex-col bg-[var(--surface)] p-8 transition-colors hover:bg-white sm:p-10"
          >
            <p className="editorial-eyebrow">{area.number}</p>
            <h2 className="mt-8 font-serif text-3xl text-[var(--soil)] transition-colors group-hover:text-[var(--leaf)]">
              {area.title}
            </h2>
            <p className="mt-4 max-w-xl flex-1 text-base leading-7 text-[var(--muted)]">
              {area.description}
            </p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--soil)]">
              {area.link} <span aria-hidden="true">→</span>
            </span>
          </Link>
        ))}
      </div>

      <p className="mt-10 max-w-2xl text-sm leading-6 text-[var(--muted)]">
        These are distinct lenses, not interchangeable models. Each has its
        own questions, context and limits.
      </p>
    </div>
  );
}