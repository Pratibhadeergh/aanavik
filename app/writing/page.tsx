export default function WritingPage() {
  return (
    <main className="min-h-screen px-6 py-16 md:px-12">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-[0.2em] text-green-700">
          Writing
        </p>

        <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-tight md:text-6xl">
          Ideas, questions and observations where science meets everyday life.
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-gray-600">
          Writing that follows living systems, human experience and the
          conditions that shape what happens next.
        </p>

        <section className="mt-20">
          <p className="text-sm uppercase tracking-[0.2em] text-green-700">
            Living Systems
          </p>

          <div className="mt-8 border-t border-gray-300 pt-8">
            <p className="text-sm uppercase tracking-[0.15em] text-gray-500">
              12-part series · Complete
            </p>

            <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
              Fermentation
            </h2>

            <p className="mt-5 max-w-2xl text-xl leading-relaxed text-gray-700">
              A journey through taste, microbes, transformation, time and
              what fermentation changes.
            </p>

            <p className="mt-5 max-w-2xl leading-relaxed text-gray-600">
              It begins with a jar of mustard in Tokyo and a flavour that
              did not yet have a name. From kokumi and the meaning of
              “alive” to microbial ecosystems, probiotics and what
              fermented foods actually deliver, the series follows
              fermentation beyond recipes and beyond the language of
              “good” and “bad” bacteria.
            </p>

            <a
              href="https://pratibhascuriousity.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-11 items-center border-b border-green-700 pb-1 text-base font-medium text-green-700 transition-opacity hover:opacity-70"
            >
              Read the complete series on Substack →
            </a>
          </div>
        </section>

        <section className="mt-16 border-t border-gray-200 pt-10">
          <p className="text-sm uppercase tracking-[0.15em] text-gray-500">
            From the series
          </p>

          <div className="mt-8 space-y-10">
            <article>
              <h3 className="font-serif text-2xl leading-tight">
                <a
                  href="https://pratibhascuriousity.substack.com/p/when-taste-gets-its-vocabulary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block transition-colors hover:text-[#A65D45] focus-visible:text-[#A65D45] focus-visible:outline-none"
                >
                  When Taste Gets Its Vocabulary
                </a>
              </h3>

              <p className="mt-3 max-w-2xl leading-relaxed text-gray-600">
                A jar of mustard in Tokyo, a word called kokumi, and what
                fermentation can teach us about flavour, microbes, and the body.
              </p>
            </article>

            <article>
              <a
                href="https://pratibhascuriousity.substack.com/p/what-do-we-mean-when-we-call-a-food"
                target="_blank"
                rel="noopener noreferrer"
                className="group block transition-colors hover:text-[#A65D45] focus-visible:text-[#A65D45] focus-visible:outline-none"
              >
                <h3 className="font-serif text-2xl leading-tight">
                  What Do We Mean When We Call a Food “Alive”?
                </h3>

                <p className="mt-3 max-w-2xl leading-relaxed text-gray-600">
                  Alive, dormant, or something stranger? Inside the hidden
                  microbial ecosystems shaping fermented foods.
                </p>
              </a>
            </article>

            <article>
              <a
                href="https://pratibhascuriousity.substack.com/p/what-fermented-foods-actually-deliver"
                target="_blank"
                rel="noopener noreferrer"
                className="group block transition-colors hover:text-[#A65D45] focus-visible:text-[#A65D45] focus-visible:outline-none"
              >
                <h3 className="font-serif text-2xl leading-tight">
                  What Fermented Foods Actually Deliver
                </h3>

                <p className="mt-3 max-w-2xl leading-relaxed text-gray-600">
                  It’s not just what’s alive — it’s what has already happened.
                </p>
              </a>
            </article>
          </div>
        </section>

        <section className="mt-20 border-t border-gray-300 pt-10">
          <p className="text-sm uppercase tracking-[0.2em] text-green-700">
            More to come
          </p>

          <p className="mt-5 max-w-2xl font-serif text-3xl leading-tight">
            The writing continues across the garden, the microbiome, human
            experience and the systems we live and work within.
          </p>
        </section>
      </div>
    </main>
  );
}