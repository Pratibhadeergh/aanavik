import { PortableText } from '@portabletext/react'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import GardenGallery from './GardenGallery'
const GARDEN_QUERY = `*[_type == "gardenEntry"] | order(observedAt desc) {
  _id,
  observedAt,
  plant,
  title,
  observation,
  images[defined(asset)] {
  asset,
  caption
}
}`

export default async function GardenPage() {
  const gardenEntries = await client.fetch(GARDEN_QUERY)

  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-4xl">

        {/* Hero */}
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-green-700">
            Garden
          </p>

          <h1 className="mt-6 text-6xl font-serif leading-tight">
            The garden is our longest-running experiment.
          </h1>

          <p className="mt-10 max-w-2xl text-2xl text-gray-600">
  Soil, microbes, compost, seeds, insects and seasons reveal the
  same principles that appear throughout biology: diversity,
  resilience and relationships.
</p>
</div>

{/* Garden Navigation */}
<nav className="mt-10 border-y border-gray-200 py-4">
  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm uppercase tracking-[0.15em] text-gray-500">
    <a href="/garden/almanac" className="transition hover:text-green-700">
      Garden Almanac
    </a>

    <a href="/garden/journal" className="transition hover:text-green-700">
      Garden Journal
    </a>

    <a href="/garden/babies" className="transition hover:text-green-700">
      The Garden
    </a>
  </div>
</nav>

{/* Garden Almanac */}
<section className="mt-20 grid gap-6 md:grid-cols-3">
          <a
            href="/garden/almanac"
            className="rounded-2xl border border-gray-200 p-8 transition hover:border-gray-400"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Garden Almanac
            </p>

            <h2 className="mt-4 text-3xl font-serif">
              What can I start now?
            </h2>

            <p className="mt-4 text-lg leading-7 text-gray-600">
              A garden calendar that looks ahead, so you don't have to hold
              the whole garden in your head.
            </p>
          </a>

          <a
  href="/garden/journal"
  className="rounded-2xl border border-gray-200 p-8 transition hover:border-gray-400"
>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Garden Journal
            </p>

            <h2 className="mt-4 text-3xl font-serif">
              The garden, day to day.
            </h2>

            <p className="mt-4 text-lg leading-7 text-gray-600">
              Observations, experiments and lessons from a living garden.
            </p>
          </a>

         <a
  href="/garden/babies"
  className="rounded-2xl border border-gray-200 p-8 transition hover:border-gray-400"
>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              The garden
            </p>

            <h2 className="mt-4 text-3xl font-serif">
              Meet the babies
            </h2>

            <p className="mt-4 text-lg leading-7 text-gray-600">
              The plants growing, flowering, fruiting and generally getting
              into trouble in the garden.
            </p>
          </a>
        </section>

        

      </div>
    </main>
  )
}