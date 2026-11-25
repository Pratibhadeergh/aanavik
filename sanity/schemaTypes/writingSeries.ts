import {defineField, defineType} from 'sanity'

export const writingSeries = defineType({
  name: 'writingSeries',
  title: 'Writing Series',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Series title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Series introduction',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Series status',
      type: 'string',
      options: {
        list: [
          {title: 'In progress', value: 'in-progress'},
          {title: 'Complete', value: 'complete'},
        ],
        layout: 'radio',
      },
      initialValue: 'in-progress',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'partCount',
      title: 'Number of parts',
      type: 'number',
      validation: (Rule) => Rule.integer().min(1),
    }),
    defineField({
      name: 'sortOrder',
      title: 'Display order',
      type: 'number',
      initialValue: 10,
    }),
  ],
  orderings: [
    {
      title: 'Display order',
      name: 'sortOrderAsc',
      by: [{field: 'sortOrder', direction: 'asc'}],
    },
  ],
  preview: {
    select: {title: 'title', status: 'status'},
    prepare({title, status}) {
      return {title, subtitle: status === 'complete' ? 'Complete' : 'In progress'}
    },
  },
})