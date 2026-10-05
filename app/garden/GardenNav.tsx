import Link from 'next/link'

type GardenSection = 'garden' | 'almanac' | 'journal' | 'babies'

const sections = [
  { id: 'garden', label: 'Garden', href: '/garden' },
  { id: 'almanac', label: 'Garden Almanac', href: '/garden/almanac' },
  { id: 'journal', label: 'Garden Journal', href: '/garden/journal' },
  { id: 'babies', label: 'The Garden', href: '/garden/babies' },
] as const

export default function GardenNav({
  current,
}: {
  current: GardenSection
}) {
  return (
    <nav className="mt-10 border-y border-gray-200 py-4">
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm uppercase tracking-[0.15em]">
        {sections.map((section) => {
          const isCurrent = section.id === current

          return (
            <Link
              key={section.id}
              href={section.href}
              aria-current={isCurrent ? 'page' : undefined}
              className={
                isCurrent
                  ? 'text-gray-900'
                  : 'text-gray-500 transition hover:text-green-700'
              }
            >
              {section.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}