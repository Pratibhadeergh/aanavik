import PageContainer from "../components/PageContainer";
import MyceliumBackground from "../components/MyceliumBackground";
export default function WhyAanavikPage() {
  return (
    <PageContainer>
     <h1 className="mb-4 font-serif text-5xl leading-[1.08] tracking-tight text-[var(--soil)] sm:text-6xl lg:text-7xl">
  Why Aanavik
</h1>

      <p className="mt-7 mb-16 max-w-2xl font-serif text-2xl leading-relaxed text-[var(--foreground)] sm:text-3xl">
  Aanavik means molecular in Sanskrit.
</p>

      <section className="max-w-4xl space-y-7 text-base leading-8 text-[var(--foreground)]">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--aanavik-accent)]">
  01 / Relationships
</p>
        <p>
        A molecule is not the smallest thing that exists.
    It is the smallest unit at which things begin to matter to one another.
  </p>

  <p>
    That idea shapes how Aanavik looks at living systems.
  </p>

  <p>
    Across bacteria, gardens, human health, artificial intelligence,
    and writing, the same question keeps appearing:
  </p>

  <p className="text-2xl font-medium leading-relaxed py-6">
    What conditions allow a living system to thrive?
  </p>

  <p>
    Again and again, the answer seems to lie not in the individual parts,
    but in the relationships between them.
  </p>

  <p>
    A gut microbiome does not thrive because one strain works overtime.
    A garden bed does not flourish because of one intervention.
    A person does not stay well because of one habit fixed in isolation.
  </p>

  <p>
    In each case, health emerges from many small relationships working
    in concert — feedback loops, signals, repair — mostly invisible
    until something breaks.
        </p>
      </section>
     <section className="mt-20 max-w-4xl space-y-7 text-base leading-8 text-[var(--foreground)]">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--aanavik-accent)]">
  02 / Timing
</p>
  <p className="text-2xl font-medium leading-relaxed">
    Relationships are only part of the story. Timing matters too.
  </p>

  <p>
    Most breakdown is not a knowledge problem. It is a timing problem:
    the information was there, just not there when it mattered.
  </p>

  <p>
    A lab result nobody reads back in time. A stress signal in a plant
    noticed only after it wilts. A pattern repeated three more times
    before anyone names it.
  </p>

  <p>
    The signal existed. The response came too late.
  </p>
</section>
<section className="mt-20 max-w-4xl space-y-7 text-base leading-8 text-[var(--foreground)]">
    <p className="text-xs uppercase tracking-[0.2em] text-[var(--aanavik-accent)]">
  03 / Response
</p>
  <p className="text-2xl font-medium leading-relaxed">
    That is the gap Aanavik is built to close.
  </p>

  <p>
    Not with one finished answer, but with a handful of unfinished ones —
    a framework, a way of thinking about physiology, a tool for planning
    a garden, a body of writing — all circling the same question from
    different angles.
  </p>

  <p>
    Because the writing was never separate from the science.
    It is where the molecular becomes meaningful.
  </p>
</section>
<MyceliumBackground />
    </PageContainer>
  );
}