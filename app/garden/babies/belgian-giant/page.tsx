import { PortableText } from '@portabletext/react'
import { client } from '@/sanity/lib/client'
import GardenGallery from '../../GardenGallery'

const GARDEN_QUERY = `*[_type == "gardenEntry" && title == "Belgian Giant — first emergence"] | order(observedAt asc) {
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

export default async function BelgianGiantPage() {
  const entries = await client.fetch(GARDEN_QUERY)

  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-5xl">

        <div>
          <h1 className="text-6xl font-serif leading-tight">
            Belgian Giant
          </h1>

          <p className="mt-6 text-2xl text-gray-600">
            Tomato · growing in the garden
          </p>
        </div>

        <section className="mt-24 border-t border-gray-200 pt-12">
          <h2 className="text-4xl font-serif">
            Growing here now.
          </h2>

          <div className="mt-12">
            {entries.map((entry: any) => (
              <article key={entry._id} className="mt-16 max-w-4xl">

                <p className="text-sm text-gray-500">
                  {new Date(entry.observedAt).toLocaleString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true,
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
                            className="underline underline-offset-4 decoration-gray-400 hover:decoration-gray-700"
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