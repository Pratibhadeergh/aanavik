import Link from "next/link";

const stages = [
  {
    number: "01",
    label: "Signals",
    title: "The body is always producing information.",
    paragraphs: [
      "Blood work, genetics, the microbiome, sleep, movement, heart rate, digestion, energy, mood and other everyday experiences can all provide signals about what is happening.",
      "Different kinds of information show us different layers of the system. DNA gives us one layer. Gene expression measured through RNA gives us another. Methylation patterns, biomarkers, the microbiome, physiology and everyday experience add others.",
      "Some signals change over minutes or hours. Others unfold over months or years. Some describe what we were born with; others reflect what the system is doing now.",
      "But a signal is not an explanation. A number can tell us that something is different without telling us why.",
    ],
  },
  {
    number: "02",
    label: "Context",
    title: "Meaning emerges from relationships.",
    paragraphs: [
      "A single measurement rarely tells the whole story. What matters is often the relationship between signals, the pattern over time, and what else was happening when the signal appeared.",
      "Context changes how we interpret information. What changed? When did it change? What changed alongside it? What might be worth looking at next?",
    ],
  },
  {
    number: "03",
    label: "Response",
    title: "Understanding is useful only when it changes what happens next.",
    paragraphs: [
      "The purpose of bringing signals into context is not to collect more information. It is to make better decisions about what to explore, what to change, what to monitor and when further investigation may be useful.",
      "Food, sleep, movement, recovery and further testing are not isolated interventions. They are possible responses within a larger system.",
    ],
  },
];

export default function HumanLayerPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-14 lg:py-28">
      <header className="max-w-4xl">
        <p className="editorial-eyebrow">Research · Human Layer</p>
        <h1 className="mt-6 font-serif text-5xl leading-[1.08] tracking-tight text-[var(--soil)] sm:text-6xl lg:text-7xl">
          A signal is not an explanation.
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-[var(--muted)] sm:text-2xl">
          The body is a living system, constantly changing in response to its
          conditions.
        </p>
      </header>

      <div className="mt-20 border-t border-[var(--line)]">
        {stages.map((stage) => (
          <section
            key={stage.number}
            className="grid gap-6 border-b border-[var(--line)] py-12 md:grid-cols-[0.45fr_1.55fr] md:gap-12 lg:py-16"
          >
            <div>
              <p className="editorial-eyebrow">
                {stage.number} · {stage.label}
              </p>
            </div>
            <div className="max-w-3xl">
              <h2 className="font-serif text-3xl leading-tight text-[var(--soil)] sm:text-4xl">
                {stage.title}
              </h2>
              {stage.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-6 text-base leading-8 text-[var(--muted)] sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="grid gap-6 bg-[var(--surface)] px-7 py-10 sm:px-10 md:grid-cols-[0.45fr_1.55fr] md:gap-12 lg:px-12 lg:py-14">
        <p className="editorial-eyebrow">The point</p>
        <div className="max-w-3xl">
          <p className="font-serif text-2xl leading-snug text-[var(--soil)] sm:text-3xl">
            More data does not automatically create more understanding.
            Context does.
          </p>
          <p className="mt-6 text-base leading-8 text-[var(--muted)] sm:text-lg">
            The Human Layer is interested in that space between signal and
            response — where information becomes useful because it can be
            understood in context.
          </p>
          <Link
            href="/research/stability-stack"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--soil)] hover:text-[var(--leaf)]"
          >
            Explore the Stability Stack <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}