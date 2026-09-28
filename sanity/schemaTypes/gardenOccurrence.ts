import { defineField, defineType } from 'sanity'

export const gardenOccurrence = defineType({
  name: 'gardenOccurrence',
  title: 'Garden Occurrence',
  type: 'document',

  fields: [
    defineField({
      name: 'crop',
      title: 'Crop',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'variety',
      title: 'Variety',
      type: 'string',
    }),

    defineField({
      name: 'startedAt',
      title: 'Started',
      type: 'datetime',
    }),
    defineField({
      name: 'currentStage',
      title: 'Current stage',
      type: 'string',
      options: {
        list: [
          {title: 'Seed', value: 'seed'},
          {title: 'Germinating', value: 'germinating'},
          {title: 'Seedling', value: 'seedling'},
          {title: 'Establishing', value: 'establishing'},
          {title: 'Vegetative', value: 'vegetative'},
          {title: 'Flowering', value: 'flowering'},
          {title: 'Fruiting', value: 'fruiting'},
          {title: 'Harvesting', value: 'harvesting'},
          {title: 'Finished', value: 'finished'},
        ],
      },
    }),
   
    
  ],
})