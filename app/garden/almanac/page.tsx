'use client'

import { useEffect, useState } from 'react'
import { crops } from './crops'
import { tomatoSeedStarts } from './seedLines'
import Link from 'next/link'
import GardenNav from '../GardenNav'
type Status = 'start' | 'prepare' | 'watch' | 'wait'
type WeatherDay = {
  date: string
  min: number
  max: number
  precipitationProbability: number
}
type Plant = {
  name: string
  category: string
  status: Status
  note: string
  relationship?: string
  activeVarieties?: string[]
}


function getStatus(
  minTemperature: number,
  maxTemperature: number,
  idealMin: number,
  idealMax: number,
  forecast: WeatherDay[],
): Status {
  if (forecast.length === 0) {
    return 'wait'
  }

  const nextThreeDays = forecast.slice(0, 3)

  const suitableDays = nextThreeDays.filter(
    (day) =>
      day.min <= idealMax &&
      day.max >= idealMin,
  ).length

  const warmEnoughDays = nextThreeDays.filter(
    (day) => day.max >= idealMin,
  ).length

  const tooColdDays = nextThreeDays.filter(
    (day) => day.max < minTemperature,
  ).length

  const tooHotDays = nextThreeDays.filter(
    (day) => day.min > maxTemperature,
  ).length

  if (suitableDays >= 2) {
    return 'start'
  }

  if (tooColdDays >= 2 || tooHotDays >= 2) {
    return 'wait'
  }

  if (warmEnoughDays >= 1) {
    return 'watch'
  }

  return 'prepare'
}

const notesByCrop: Record<string, string> = {
  tomato:
    'Warm conditions make this a good time to begin the seed-starting cycle.',
  spinach:
    'A cool-season crop. The current window depends on how temperatures are trending.',
  lettuce:
    'Lettuce prefers cooler germination conditions. The current window is not quite right yet.',
  'bottle-gourd':
    'A warm-season crop. Keep it in view as the next suitable window develops.',
}



const relationships: Record<string, string[]> = {
  Tomatoes: ['Lettuce', 'Basil', 'Marigold', 'Borage'],
  Peas: ['Marigold', 'Lettuce'],
  Lettuce: ['Tomatoes', 'Marigold', 'Basil'],
  Basil: ['Tomatoes', 'Lettuce'],
  Marigold: ['Tomatoes', 'Lettuce', 'Peas'],
  Borage: ['Tomatoes', 'Peas'],
}

const statusLabels: Record<Status, string> = {
  start: 'Start now',
  prepare: 'Prepare',
  watch: 'Watch',
  wait: 'Wait',
}

const statusDescriptions: Record<Status, string> = {
  start: 'The conditions are suitable to begin.',
  prepare: 'Not quite time yet. Get the next step ready.',
  watch: 'The window is approaching.',
  wait: 'The conditions are not right yet.',
}

export default function AlmanacPage() {
      const [weather, setWeather] = useState<WeatherDay[]>([])
  const [weatherLoading, setWeatherLoading] = useState(true)
    useEffect(() => {
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&daily=temperature_2m_min,temperature_2m_max,precipitation_probability_max&timezone=Asia%2FKolkata'
    )
      .then((response) => response.json())
      .then((data) => {
        const days: WeatherDay[] = data.daily.time.map(
          (date: string, index: number) => ({
            date,
            min: data.daily.temperature_2m_min[index],
            max: data.daily.temperature_2m_max[index],
            precipitationProbability:
              data.daily.precipitation_probability_max[index],
          })
        )

        setWeather(days)
        setWeatherLoading(false)
      })
      .catch(() => {
        setWeatherLoading(false)
      })
  }, [])
  const plants: Plant[] = crops.map((crop) => ({
  name: crop.name,
  category: crop.category,
  activeVarieties:
  crop.id === 'tomato'
    ? [...new Set(tomatoSeedStarts.map((start) => start.variety))]
    : undefined,
  status: crop.germination
    ? getStatus(
        crop.germination.min,
        crop.germination.max,
        crop.germination.idealMin,
        crop.germination.idealMax,
        weather,
      )
    : 'wait',
  note:
    notesByCrop[crop.id] ??
    'The Almanac is still learning this crop. Keep it in view as conditions develop.',
}))
  const [selectedPlant, setSelectedPlant] = useState<string | null>(null)

  const selected = plants.find((plant) => plant.name === selectedPlant)

  const relatedPlants = selectedPlant
    ? relationships[selectedPlant] ?? []
    : []

  const groupedStatuses: Status[] = ['start', 'prepare', 'watch', 'wait']

  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
       

        {/* Hero */}
        <div>
         

          <h1 className="mt-6 text-6xl font-serif leading-tight">
            What can I start now?
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-8 text-gray-600">
            A garden calendar that looks ahead, so you don't have to hold
            the whole garden in your head.
          </p>

          <p className="mt-6 text-sm uppercase tracking-[0.15em] text-gray-500">
            Delhi, India
          </p>
        </div>
<GardenNav current="almanac" />
        {/* Status groups */}
        {groupedStatuses.map((status) => {
          const matchingPlants = plants.filter(
            (plant) => plant.status === status
          )

          if (!matchingPlants.length) return null

          return (
            <section
              key={status}
              className="mt-20 border-t border-gray-200 pt-12"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                {statusLabels[status]}
              </p>

              <p className="mt-3 text-gray-500">
                {statusDescriptions[status]}
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {matchingPlants.map((plant) => (
                  <button
                    key={plant.name}
                    type="button"
                    onClick={() => setSelectedPlant(plant.name)}
                    className={`rounded-2xl border p-6 text-left transition ${
                      selectedPlant === plant.name
                        ? 'border-green-700'
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <p className="text-xs uppercase tracking-[0.15em] text-gray-500">
                      {plant.category}
                    </p>

                    <h2 className="mt-2 text-2xl font-serif">
                      {plant.name}
                    </h2>

                    <p className="mt-3 text-gray-600">
                      {plant.note}
                    </p>
                  </button>
                ))}
              </div>
            </section>
          )
        })}

        {/* Selected plant */}
        {selected && (
          <section className="mt-20 border-t border-gray-200 pt-12">
            <p className="text-sm uppercase tracking-[0.2em] text-green-700">
              {selected.name}
            </p>

            <h2 className="mt-4 text-4xl font-serif">
              {selected.status === 'start'
                ? 'This is the window.'
                : statusDescriptions[selected.status]}
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              {selected.note}
            </p>

            {selected.relationship && (
              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                {selected.relationship}
              </p>
            )}

            {relatedPlants.length > 0 && (
              <div className="mt-10">
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                  What else might fit?
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {relatedPlants.map((plant) => (
                    <button
                      key={plant}
                      type="button"
                      onClick={() => setSelectedPlant(plant)}
                      className="rounded-full border border-gray-300 px-5 py-3 text-gray-700 transition hover:border-gray-600"
                    >
                      {plant}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

      </div>
    </main>
  )
}