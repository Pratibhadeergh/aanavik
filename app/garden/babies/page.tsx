import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'

const GARDEN_QUERY = `*[_type == "gardenEntry" && defined(plant)] | order(observedAt desc) {
  _id,
  observedAt,
  plant,
  title,
  images[defined(asset)] {
    asset,
    caption
  }
}`

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export default async function GardenBabiesPage() {
  const entries = await client.fetch(GARDEN_QUERY)

  const plants = Object.values(
    entries.reduce((acc: Record<string, any>, entry: any) => {
      if (!acc[entry.plant]) {
        acc[entry.plant] = entry
      }

      return acc
    }, {})
  )

  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-6xl">

        <div>
          <h1 className="text-6xl font-serif leading-tight">
            Meet the babies
          </h1>

          <p className="mt-8 max-w-2xl text-2xl text-gray-600">
            A visual record of what is growing in the garden.
          </p>
        </div>

        <section className="mt-24">
          <h2 className="text-4xl font-serif">
            Growing now
          </h2>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plants.map((plant: any) => {
              const image = plant.images?.[0]

              return (
                <Link
                  key={plant.plant}
                  href={`/garden/babies/${slugify(plant.plant)}`}
                  className="group block"
                >
                  <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
                    {image ? (
                      <img
                        src={urlFor(image.asset).width(900).height(900).fit('crop').url()}
                        alt={plant.plant}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-gray-400">
                        No photograph yet
                      </div>
                    )}
                  </div>

                  <h3 className="mt-5 text-2xl font-serif group-hover:underline">
                    {plant.plant}
                  </h3>

                  <p className="mt-2 text-gray-500">
                    {new Date(plant.observedAt).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </Link>
              )
            })}
          </div>
        </section>

      </div>
    </main>
  )
} 