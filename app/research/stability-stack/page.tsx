import Link from "next/link";

const layers = [
  {
    number: "01",
    title: "Capacity",
    description:
      "The resources, abilities and available energy a person can draw on.",
  },
  {
    number: "02",
    title: "Regulation",
    description:
      "The processes through which a person adjusts to internal and external demands.",
  },
  {
    number: "03",
    title: "Containment",
    description:
      "The boundaries, support and psychological safety that help hold complexity without being overwhelmed by it.",
  },
  {
    number: "04",
    title: "Execution",
    description:
      "The ability to translate intention and available capacity into action within real conditions.",
  },
  {
    number: "05",
    title: "Performance",
    description:
      "What becomes visible when the other conditions interact over time — an outcome, not the whole system.",
  },
];

export default function StabilityStackPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-14 lg:py-28">
      <header className="max-w-4xl">
        <p className="editorial-eyebrow">Research · Stability Stack</p>
        <h1 className="mt-6 font-serif text-5xl leading-[1.08] tracking-tight text-[var(--soil)] sm:text-6xl lg:text-7xl">
          Performance has conditions.
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-[var(--muted)] sm:text-2xl">
          Stability Stack is a way to examine the conditions beneath
          sustainable functioning — not just the performance visible on the
          surface.
        </p>
      </header>

      <section className="mt-20 grid gap-10 border-y border-[var(--line)] py-12 md:grid-cols-[0.7fr_1.3fr] md:gap-16 lg:py-16">
        <div>
          <p className="editorial-eyebrow">The central question</p>
          <h2 className="mt-5 font-serif text-3xl leading-tight text-[var(--soil)]">
            What has to be in place for a person to function, adapt and respond?
          </h2>
        </div>
        <div className="max-w-2xl space-y-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
          <p>
            Performance is easy to notice. The conditions that make it possible
            are less visible.
          </p>
          <p>
            Capacity, regulation, containment and execution shape what a person
            can sustain. Looking at these layers helps shift the question from
            “Why isn’t this person performing?” to “What conditions are shaping
            what is possible here?”
          </p>
        </div>
      </section>

      <section className="mt-20">
        <div className="max-w-2xl">
          <p className="editorial-eyebrow">Five interacting layers</p>
          <h2 className="mt-5 font-serif text-3xl leading-tight text-[var(--soil)] sm:text-4xl">
            A stack to examine, not a ladder to climb.
          </h2>
          <p className="mt-5 text-base leading-7 text-[var(--muted)]">
            The layers are connected. They are not a ranking of people, nor a
            guarantee that strengthening one layer will automatically produce
            a particular outcome.
          </p>
        </div>

        <div className="mt-10 border-t border-[var(--line)]">
          {layers.map((layer) => (
            <article
              key={layer.number}
              className="grid gap-4 border-b border-[var(--line)] py-7 md:grid-cols-[5rem_0.7fr_1.3fr] md:items-start md:gap-8"
            >
              <p className="editorial-eyebrow">{layer.number}</p>
              <h3 className="font-serif text-2xl text-[var(--soil)]">
                {layer.title}
              </h3>
              <p className="max-w-2xl text-base leading-7 text-[var(--muted)]">
                {layer.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 bg-[var(--surface)] px-7 py-10 sm:px-10 lg:px-12 lg:py-14">
        <p className="editorial-eyebrow">A framework, not a verdict</p>
        <div className="mt-5 max-w-3xl">
          <h2 className="font-serif text-3xl leading-tight text-[var(--soil)] sm:text-4xl">
            The point is to make conditions discussable.
          </h2>
          <p className="mt-6 text-base leading-8 text-[var(--muted)] sm:text-lg">
            Stability Stack is a conceptual lens for asking better questions
            about the relationship between a person and the conditions around
            them. It is not a clinical diagnostic tool or a validated
            predictive model. It does not replace professional judgement or
            the person’s own account of their experience.
          </p>
          <Link
            href="/research/human-layer"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--soil)] hover:text-[var(--leaf)]"
          >
            Explore the Human Layer <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}