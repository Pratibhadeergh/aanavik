import {defineField, defineType} from 'sanity'

export const writingPost = defineType({
  name: 'writingPost',
  title: 'Writing',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
      name: 'excerpt',
      title: 'Short description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publication date',
      type: 'datetime',
    }),
    defineField({
      name: 'kind',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Essay', value: 'essay'},
          {title: 'Research note', value: 'research-note'},
          {title: 'Garden observation', value: 'garden-observation'},
        ],
      },
      initialValue: 'essay',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'series',
      title: 'Series',
      type: 'reference',
      to: [{type: 'writingSeries'}],
    }),
    defineField({
      name: 'externalUrl',
      title: 'Original article URL',
      type: 'url',
      description: 'Link to Substack or another publication. Leave blank for a future Aanavik-hosted article.',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'body',
      title: 'Article body',
      type: 'array',
      of: [{type: 'block'}, {type: 'image', options: {hotspot: true}}],
      description: 'Optional article content for future publication on Aanavik.',
    }),
    defineField({
      name: 'featured',
      title: 'Feature on Writing page',
      type: 'boolean',
      initialValue: false,
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
      title: 'Newest first',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
    {
      title: 'Display order',
      name: 'sortOrderAsc',
      by: [{field: 'sortOrder', direction: 'asc'}],
    },
  ],
  preview: {
    select: {title: 'title', kind: 'kind', date: 'publishedAt'},
    prepare({title, kind, date}) {
      return {
        title,
        subtitle: [kind, date ? new Date(date).toLocaleDateString() : 'Unscheduled'].filter(Boolean).join(' · '),
      }
    },
  },
})