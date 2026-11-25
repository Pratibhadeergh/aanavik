import {PortableText} from "@portabletext/react";
import {client} from "@/sanity/lib/client";
import GardenGallery from "../GardenGallery";
import GardenNav from "../GardenNav";

type GardenEntry = {
  _id: string;
  observedAt: string;
  plant?: string;
  title: string;
  observation: any;
  images?: Array<{
    asset?: {_ref?: string};
    caption?: string;
  }>;
};

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
}`;

export default async function GardenJournalPage() {
  const gardenEntries = await client.fetch<GardenEntry[]>(GARDEN_QUERY);

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-14 lg:py-28">
      <header className="max-w-4xl">
        <p className="editorial-eyebrow">Garden · Selected observations</p>
        <h1 className="mt-6 font-serif text-5xl leading-tight tracking-tight text-[var(--soil)] sm:text-6xl">
          The garden, day to day.
        </h1>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[var(--muted)] sm:text-2xl">
          Selected observations, experiments and lessons from a living garden.
        </p>
      </header>

      <GardenNav current="journal" />

      <section className="mt-16 border-t border-[var(--line)] pt-8">
        {gardenEntries.length > 0 ? (
          gardenEntries.map((entry) => (
            <article key={entry._id} className="max-w-4xl border-b border-[var(--line)] py-10">
              <p className="editorial-eyebrow">
                {new Date(entry.observedAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  timeZone: "Asia/Kolkata",
                })}
                {entry.plant ? ` · ${entry.plant}` : ""}
              </p>
              <h2 className="mt-4 font-serif text-3xl text-[var(--soil)] sm:text-4xl">
                {entry.title}
              </h2>
              <div className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg [&>p+p]:mt-4">
                <PortableText
                  value={entry.observation}
                  components={{
                    marks: {
                      link: ({value, children}) => (
                        <a
                          href={value?.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-4 decoration-[var(--line)] hover:decoration-[var(--soil)]"
                        >
                          {children}
                        </a>
                      ),
                    },
                  }}
                />
              </div>
              {entry.images?.length ? (
                <GardenGallery images={entry.images} title={entry.title} />
              ) : null}
            </article>
          ))
        ) : (
          <p className="max-w-2xl py-8 text-base leading-7 text-[var(--muted)]">
            Selected garden observations will appear here as they are ready to be shared.
          </p>
        )}
      </section>
    </div>
  );
}
