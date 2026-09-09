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

      </section>
    </main>
  );
}