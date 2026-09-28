import { client } from '@/sanity/lib/client'

const GREEN_TIGER_QUERY = `*[
  _type == "gardenEntry" &&
  plant == "Green Tiger"
] | order(observedAt asc) {
  _id,
  observedAt,
  title
}`

export default async function GreenTigerPage() {
  const entries = await client.fetch(GREEN_TIGER_QUERY)

  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-4xl">

        <h1 className="text-6xl font-serif leading-tight">
          Green Tiger
        </h1>

        <p className="mt-8 max-w-2xl text-2xl text-gray-600">
          Tomato · growing in the garden
        </p>

        <section className="mt-24 border-t border-gray-200 pt-12">
          <h2 className="text-3xl font-serif">
            Its story so far
          </h2>

          {entries.length === 0 ? (
            <p className="mt-8 text-lg text-gray-600">
              The story is just beginning.
            </p>
          ) : (
            <div className="mt-12 space-y-8">
              {entries.map((entry: any) => (
                <article key={entry._id}>
                  <p className="text-sm text-gray-500">
                    {new Date(entry.observedAt).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>

                  <h3 className="mt-2 text-2xl font-serif">
                    {entry.title}
                  </h3>
                </article>
              ))}
            </div>
          )}
        </section>

      </div>
    </main>
  )
}