export default function Home() {
  return (
    <main className="w-full max-w-7xl mx-auto px-8">
      <section className="min-h-[calc(100vh-5rem)] flex flex-col justify-center py-12">

        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-green-700">
            Molecules & Meaning
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.05]">
            What conditions allow living
            <br />
            systems to thrive?
          </h1>

          <p className="mt-7 text-2xl md:text-3xl">
            Healthy gardens. Healthy microbes. Healthy humans.
          </p>

          <p className="mt-3 text-lg md:text-xl text-gray-600">
            Different systems. Similar principles.
          </p>
        </div>

        <div
          id="perspective"
          className="mt-12 pt-8 border-t border-gray-200 max-w-5xl"
        >
          <p className="text-sm uppercase tracking-[0.22em] text-green-700">
            The Aanavik perspective
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-serif">
            We look for the conditions.
          </h2>

          <div className="mt-5 max-w-4xl text-lg md:text-xl leading-relaxed text-gray-700">
            <p>
              A garden is not healthy because of one intervention.
              A microbial community is not healthy because of one species.
              A human is not healthy because of one biomarker.
            </p>

            <p className="mt-4">
              Living systems emerge from relationships.
            </p>
          </div>
        </div>


      <div
        id="questions"
        className="mt-16 pt-8 border-t border-gray-200 max-w-5xl"
      >
        <p className="text-sm uppercase tracking-[0.22em] text-green-700">
          The questions we follow
        </p>

        <h2 className="mt-4 text-3xl md:text-4xl font-serif">
          Different questions. A shared interest in conditions.
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-serif">Human Systems</h3>

            <p className="mt-3 text-lg font-serif">
              Understanding what your body is telling you.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Blood work, genetic information, the microbiome, wearables and
              everyday signals are pieces of a larger system. We bring them
              into context to help people understand what may be happening in
              their bodies — and what they might explore next.
            </p>

            <p className="mt-4 text-sm text-gray-600">
              Food · Sleep · Movement · Recovery · Further testing
            </p>
          </div>

          <div>
            <h3 className="text-xl font-serif">Stability Stack</h3>
            <p className="mt-3 text-lg font-serif">
  Understanding the conditions in which a person is operating.
</p>

<p className="mt-4 text-gray-700 leading-relaxed">
  Capacity, environment, relationships, demands and recovery all shape how
  a person can function, adapt and respond. Stability Stack looks at the
  conditions around a person — not just the problem in front of them.
</p>

<p className="mt-4 text-sm text-gray-600">
  Capacity · Environment · Relationships · Recovery · Response
</p>
          </div>

          <div>
            <h3 className="text-xl font-serif">Garden</h3>
            <p className="mt-3 text-lg font-serif">
  Exploring living systems by growing, observing and participating.
</p>

<p className="mt-4 text-gray-700 leading-relaxed">
 A garden is food, movement, light, attention, recovery and relationships —
as well as a place to observe what happens when we change conditions and
pay attention to the response.
</p>

<p className="mt-4 text-sm text-gray-600">
  Food · Light · Movement · Attention · Recovery
</p>
          </div>
        </div>
      </div>
<div
  id="connection"
  className="mt-16 pt-8 border-t border-gray-200 max-w-5xl"
>
  <p className="text-sm uppercase tracking-[0.22em] text-green-700">
    Relationships · Timing · Response
  </p>

  <h2 className="mt-4 text-3xl md:text-4xl font-serif">
    The signal is only useful if we can respond to it.
  </h2>

  <div className="mt-6 max-w-4xl text-lg md:text-xl leading-relaxed text-gray-700">
    <p>
      Relationships shape what happens. Timing shapes when we notice it.
      Response shapes what happens next.
    </p>

    <p className="mt-4">
      A signal can exist without being understood. A pattern can be visible
      without being recognised. A condition can be changed without knowing
      what to watch for.
    </p>

    <p className="mt-4">
      Aanavik is interested in closing that gap — between signal and
      understanding, between understanding and response.
    </p>
  </div>

  <p className="mt-6 text-sm text-gray-600">
    <a href="/why-aanavik" className="inline-block py-2">Explore Why Aanavik →</a>
  </p>
</div>
      <div
        id="explore"
        className="mt-16 pt-8 border-t border-gray-200 max-w-5xl"
      >
        <p className="text-sm uppercase tracking-[0.22em] text-green-700">
          Explore Aanavik
        </p>

        <h2 className="mt-4 text-3xl md:text-4xl font-serif">
          Follow the questions further.
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-serif">Writing</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Ideas, questions and observations where science meets everyday
              life.
            </p>
            <p className="mt-4 text-sm text-gray-600">
<a href="/writing" className="inline-block py-2">Read the writing →</a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-serif">Research</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              The science, evidence and questions behind the work.
            </p>
            <p className="mt-4 text-sm text-gray-600">
              <a href="/research" className="inline-block py-2">Explore the research →</a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-serif">Garden</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Growing, observing and learning from living systems.
            </p>
            <p className="mt-4 text-sm text-gray-600">
              <a href="/garden" className="inline-block py-2">Enter the garden →</a>
            </p>
          </div>
        </div>
      </div>
      </section>
    </main>
  );
}