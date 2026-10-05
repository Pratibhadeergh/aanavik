import { PortableText } from '@portabletext/react'
import { client } from '@/sanity/lib/client'
import GardenGallery from '../GardenGallery'
import GardenNav from '../GardenNav'

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

export default async function GardenJournalPage() {
  const gardenEntries = await client.fetch(GARDEN_QUERY)

  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-4xl">

        {/* Hero */}
        <div>
          

          <h1 className="mt-6 text-6xl font-serif leading-tight">
           The garden, day to day.
          </h1>

          <p className="mt-10 max-w-2xl text-2xl text-gray-600">
            Observations, experiments and lessons from a living garden.
          </p>
           </div>

    <GardenNav current="journal" />

    {/* Journal entries */}
    <section className="mt-24 border-t border-gray-200 pt-12">
         

          {gardenEntries.map((entry: any) => (
            <article key={entry._id} className="mt-10 max-w-3xl">

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

              <h2 className="mt-3 text-3xl font-serif">
                {entry.title}
              </h2>

              <div className="mt-6 text-lg leading-8 text-gray-700 [&>p+p]:mt-4">
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
        </section>

      </div>
    </main>
  )
}