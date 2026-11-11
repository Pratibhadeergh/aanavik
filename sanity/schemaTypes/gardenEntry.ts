import {defineField, defineType} from 'sanity'

export const gardenEntry = defineType({
  name: 'gardenEntry',
  title: 'Garden Journal Entry',
  type: 'document',

  fields: [
    defineField({
      name: 'observedAt',
      title: 'Date & time',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'plant',
      title: 'Plant / variety',
      type: 'string',
      description: 'The name on the plant tag, e.g. Black Krim.',
    }),

    defineField({
      name: 'occurrence',
      title: 'Garden occurrence',
      type: 'reference',
      to: [{type: 'gardenOccurrence'}],
    }),

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'observation',
      title: 'Observation',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'images',
      title: 'Photographs',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
          ],
        },
      ],
    }),

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'visibility',
      title: 'Journal visibility',
      type: 'string',
      description: 'Keep observations private by default. Only entries explicitly marked public appear in the Garden Journal on Aanavik.',
      options: {
        list: [
          {title: 'Private working note', value: 'private'},
          {title: 'Publish in Garden Journal', value: 'public'},
        ],
        layout: 'radio',
      },
      initialValue: 'private',
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      plant: 'plant',
      date: 'observedAt',
      visibility: 'visibility',
    },
    prepare({title, plant, date, visibility}) {
      return {
        title,
        subtitle: `${visibility === 'public' ? 'Public' : 'Private'} · ${plant || 'Unassigned plant'} · ${date ? new Date(date).toLocaleDateString() : ''}`,
      }
    },
  },
})
