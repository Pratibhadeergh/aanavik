import Link from "next/link";

export default function ResearchPage() {
  return (
    <main className="min-h-screen px-12 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.2em] text-green-700">
          RESEARCH
        </p>

        <p className="mt-8 max-w-3xl text-2xl text-gray-700 md:text-3xl">
          Different questions. A shared interest in conditions.
        </p>

        <div className="mt-16 space-y-8">
          <Link
            href="/research/human-layer"
            className="block border border-gray-300 bg-white p-8 md:p-12"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-green-700">
              1. HUMAN LAYER
            </p>
            <p className="mt-6 max-w-2xl text-2xl leading-relaxed text-gray-700 md:text-3xl">
              Understanding the human as a living system.
            </p>
          </Link>

          <Link
            href="/research/stability-stack"
            className="block border border-gray-300 bg-white p-8 md:p-12"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-green-700">
              2. STABILITY STACK
            </p>
            <p className="mt-6 max-w-3xl text-2xl leading-relaxed text-gray-700 md:text-3xl">
              Understanding the conditions that make sustainable performance possible.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}