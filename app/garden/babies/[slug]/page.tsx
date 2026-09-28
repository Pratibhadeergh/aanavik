import { PortableText } from '@portabletext/react'
import { client } from '@/sanity/lib/client'
import GardenGallery from '../../GardenGallery'
import { notFound } from 'next/navigation'

const GARDEN_QUERY = `*[_type == "gardenEntry" && defined(plant)] | order(observedAt asc) {
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

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export default async function BabyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const entries = await client.fetch(GARDEN_QUERY)

  const plantEntries = entries.filter(
    (entry: any) => slugify(entry.plant) === slug
  )

  if (plantEntries.length === 0) {
    notFound()
  }

  const plant = plantEntries[0].plant

  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-5xl">

        <div>
          <h1 className="text-6xl font-serif leading-tight">
            {plant}
          </h1>

          <p className="mt-6 text-2xl text-gray-600">
            Growing in the garden
          </p>
        </div>

        <section className="mt-24 border-t border-gray-200 pt-12">

          <h2 className="text-4xl font-serif">
            Growing here now.
          </h2>

          <div className="mt-12">
            {plantEntries.map((entry: any) => (
              <article
                key={entry._id}
                className="mt-16 max-w-4xl"
              >
                <p className="text-sm text-gray-500">
                  {new Date(entry.observedAt).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                    timeZone: 'Asia/Kolkata',
                  })}
                </p>

                <h3 className="mt-3 text-3xl font-serif">
                  {entry.title}
                </h3>

                <div className="mt-6 text-lg leading-8 text-gray-700">
                  <PortableText
                    value={entry.observation}
                    components={{
                      marks: {
                        link: ({ value, children }) => (
                          <a
                            href={value?.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline underline-offset-4"
                          >
                            {children}
                          </a>
                        ),
                      },
                    }}
                  />
                </div>

                {entry.images?.length > 0 && (
                  <GardenGallery
                    images={entry.images}
                    title={entry.title}
                  />
                )}
              </article>
            ))}
          </div>

        </section>

      </div>
    </main>
  )
}