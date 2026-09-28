export type GerminationProfile = {
  min: number
  idealMin: number
  idealMax: number
  max: number
}
export type LifeStage =
  | 'seed'
  | 'germinating'
  | 'seedling'
  | 'establishing'
  | 'vegetative'
  | 'flowering'
  | 'fruiting'
  | 'harvesting'
  | 'finished'
export type GardenWindow = {
  action: 'sow'
  period: string
  source: string
  sourceLocation: string
}

export type SeedSource = {
  name: string
  location?: string
}

export type Variety = {
  id: string
  name: string
  seedSource: SeedSource
  gardenWindows?: GardenWindow[]
}
export type Crop = {
  id: string
  name: string
  category: string
  germination?: GerminationProfile
  varieties?: Variety[]
}

export const crops: Crop[] = [
  {
    id: 'tomato',
    name: 'Tomato',
    category: 'Fruiting vegetables',
    germination: {
  min: 15,
  idealMin: 21,
  idealMax: 29,
  max: 35,
},
    varieties: [
      {
        id: 'ananas-noir',
        name: 'Ananas Noir',
        seedSource: {
          name: 'Yarroway Farm',
          location: 'Mysuru, Karnataka',
        },
        gardenWindows: [
          {
            action: 'sow',
            period: 'End of Monsoon',
            source: 'Yarroway Farm',
            sourceLocation: 'Mysuru, Karnataka',
          },
          {
            action: 'sow',
            period: 'Early Summer',
            source: 'Yarroway Farm',
            sourceLocation: 'Mysuru, Karnataka',
          },
        ],
      },
    ],
  },

  {
    id: 'spinach',
    name: 'Spinach',
    category: 'Leafy greens',
    germination: {
  min: 5,
  idealMin: 15,
  idealMax: 24,
  max: 30,
},
    varieties: [
      {
        id: 'red-aztech-spinach',
        name: 'Red Aztech Spinach',
        seedSource: {
          name: 'Yarroway Farm',
          location: 'Mysuru, Karnataka',
        },
        gardenWindows: [
          {
            action: 'sow',
            period: 'Monsoon',
            source: 'Yarroway Farm',
            sourceLocation: 'Mysuru, Karnataka',
          },
          {
            action: 'sow',
            period: 'Autumn',
            source: 'Yarroway Farm',
            sourceLocation: 'Mysuru, Karnataka',
          },
          {
            action: 'sow',
            period: 'Winter',
            source: 'Yarroway Farm',
            sourceLocation: 'Mysuru, Karnataka',
          },
        ],
      },
      {
        id: 'long-standing-spinach',
        name: 'Long Standing Spinach',
        seedSource: {
          name: 'Yarroway Farm',
          location: 'Mysuru, Karnataka',
        },
        gardenWindows: [
          {
            action: 'sow',
            period: 'Monsoon',
            source: 'Yarroway Farm',
            sourceLocation: 'Mysuru, Karnataka',
          },
          {
            action: 'sow',
            period: 'Autumn',
            source: 'Yarroway Farm',
            sourceLocation: 'Mysuru, Karnataka',
          },
          {
            action: 'sow',
            period: 'Winter',
            source: 'Yarroway Farm',
            sourceLocation: 'Mysuru, Karnataka',
          },
        ],
      },
    ],
  },

  {
    id: 'lettuce',
    name: 'Lettuce',
    category: 'Leafy greens',
    germination: {
  min: 5,
  idealMin: 15,
  idealMax: 24,
  max: 30,
},
    varieties: [
      {
        id: 'may-queen-lettuce',
        name: 'May Queen Lettuce',
        seedSource: {
          name: 'Yarroway Farm',
          location: 'Mysuru, Karnataka',
        },
        gardenWindows: [
          {
            action: 'sow',
            period: 'Autumn',
            source: 'Yarroway Farm',
            sourceLocation: 'Mysuru, Karnataka',
          },
          {
            action: 'sow',
            period: 'Winter',
            source: 'Yarroway Farm',
            sourceLocation: 'Mysuru, Karnataka',
          },
          {
            action: 'sow',
            period: 'Early Summer',
            source: 'Yarroway Farm',
            sourceLocation: 'Mysuru, Karnataka',
          },
        ],
      },
    ],
  },

  {
    id: 'bottle-gourd',
    name: 'Bottle gourd',
    category: 'Cucurbits',
    germination: {
  min: 18,
  idealMin: 24,
  idealMax: 32,
  max: 38,
},
    varieties: [
      {
        id: 'giant-round-bottle-gourd',
        name: 'Giant Round Bottle Gourd',
        seedSource: {
          name: 'Yarroway Farm',
          location: 'Mysuru, Karnataka',
        },
        gardenWindows: [
          {
            action: 'sow',
            period: 'All Seasons',
            source: 'Yarroway Farm',
            sourceLocation: 'Mysuru, Karnataka',
          },
        ],
      },
    ],
  },
]