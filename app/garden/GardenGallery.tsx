'use client'

import { useEffect, useRef, useState } from 'react'
import { urlFor } from '@/sanity/lib/image'

type GardenImage = {
  asset?: {
    _ref?: string
  }
  caption?: string
}

type GardenGalleryProps = {
  images: GardenImage[]
  title: string
}

export default function GardenGallery({
  images,
  title,
}: GardenGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [selectedImage, setSelectedImage] = useState<GardenImage | null>(null)
const [canScrollLeft, setCanScrollLeft] = useState(false)
const [canScrollRight, setCanScrollRight] = useState(true)

const updateScrollButtons = () => {
  const element = scrollRef.current
  if (!element) return

  setCanScrollLeft(element.scrollLeft > 5)
  setCanScrollRight(
    element.scrollLeft + element.clientWidth < element.scrollWidth - 5
  )
}
useEffect(() => {
  const element = scrollRef.current
  if (!element) return

  updateScrollButtons()

  element.addEventListener('scroll', updateScrollButtons)
  window.addEventListener('resize', updateScrollButtons)

  return () => {
    element.removeEventListener('scroll', updateScrollButtons)
    window.removeEventListener('resize', updateScrollButtons)
  }
}, [])
const scrollPrevious = () => {
  scrollRef.current?.scrollBy({
    left: -scrollRef.current.clientWidth * 0.8,
    behavior: 'smooth',
  })
}
  const scrollNext = () => {
    scrollRef.current?.scrollBy({
      left: scrollRef.current.clientWidth * 0.8,
      behavior: 'smooth',
    })
  }

  if (!images?.length) return null

  return (
    <>
      <div className="relative mt-8">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none' }}
        >
          {images.map((image, index) => (
            <figure
              key={image.asset?._ref ?? index}
              className="w-[78%] shrink-0 snap-start md:w-[48%]"
            >
              <button
                type="button"
                onClick={() => setSelectedImage(image)}
                className="block w-full cursor-zoom-in text-left"
                aria-label={`Enlarge photograph ${index + 1}`}
              >
                <img
                  src={urlFor(image).width(1400).url()}
                  alt={image.caption || title}
                  className="h-auto w-full rounded-2xl"
                />
              </button>

              {image.caption && (
                <figcaption className="mt-2 text-sm text-gray-500">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>

        {images.length > 1 && (
  <>
    {canScrollLeft && (
      <button
        type="button"
        onClick={scrollPrevious}
        aria-label="Show previous photographs"
        className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-gray-600 shadow-md"
      >
        ‹
      </button>
    )}

    {canScrollRight && (
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Show more photographs"
        className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-gray-600 shadow-md"
      >
        ›
      </button>
    )}
  </>
)}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-6 top-6 text-3xl text-white"
            aria-label="Close photograph"
          >
            ×
          </button>

          <img
            src={urlFor(selectedImage).width(2000).url()}
            alt={selectedImage.caption || title}
            className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}