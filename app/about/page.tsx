export default function AboutPage() {
  return (
    <main className="min-h-screen px-12 py-20">
      <div className="max-w-4xl">

        <p className="text-sm uppercase tracking-[0.2em] text-green-700">
          About
        </p>

        <h1 className="mt-6 text-6xl font-serif leading-tight">
          We are interested in the conditions that allow living systems to thrive.
        </h1>

        <div className="mt-12 space-y-8 text-xl leading-relaxed text-gray-700">

          <p>
            Aanavik began with a simple observation.
          </p>

          <p>
            Whether we are looking at soil, microbes, metabolism or human
            behaviour, the healthiest systems rarely depend on a single
            intervention. They emerge from relationships.
          </p>

          <p>
            We study those relationships.
          </p>

          <p>
            Our work sits at the intersection of microbiology, systems
            biology, ecology, nutrition and human health, asking a single
            question:
          </p>

          <blockquote className="border-l-4 border-green-700 pl-6 italic text-black">
            What conditions allow living systems to become more resilient?
          </blockquote>

          <p>
            Sometimes the answer is molecular.
            Sometimes ecological.
            Sometimes behavioural.
          </p>

          <p>
            Different systems.
            Similar principles.
          </p>

        </div>
      </div>
    </main>
  );
}
