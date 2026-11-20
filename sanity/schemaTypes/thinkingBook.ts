import {defineField, defineType} from 'sanity'

export const thinkingBook = defineType({
  name: 'thinkingBook',
  title: 'Book',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Book title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'author', title: 'Author', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title', maxLength: 96}, validation: (Rule) => Rule.required()}),
    defineField({name: 'cover', title: 'Book cover', type: 'image', options: {hotspot: true}}),
    defineField({
      name: 'status', title: 'Reading status', type: 'string',
      options: {layout: 'radio', list: [
        {title: 'Want to read', value: 'to-read'},
        {title: 'Reading', value: 'reading'},
        {title: 'Completed', value: 'completed'},
        {title: 'Paused', value: 'paused'},
      ]},
      initialValue: 'to-read', validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'startedOn', title: 'Started on', type: 'date'}),
    defineField({name: 'finishedOn', title: 'Finished on', type: 'date'}),
    defineField({
      name: 'formats', title: 'Reading formats', type: 'array',
      of: [{type: 'string'}],
      options: {list: [
        {title: 'Physical book', value: 'physical'},
        {title: 'Kindle', value: 'kindle'},
        {title: 'Audible', value: 'audible'},
      ]},
    }),
    defineField({name: 'note', title: 'Why this book is on the shelf', type: 'text', rows: 3}),
    defineField({name: 'isbn', title: 'ISBN (optional)', type: 'string'}),
    defineField({name: 'featured', title: 'Feature on the Thinking Shelf', type: 'boolean', initialValue: false}),
  ],
  orderings: [
    {title: 'Recently finished', name: 'finishedDesc', by: [{field: 'finishedOn', direction: 'desc'}]},
    {title: 'Title', name: 'titleAsc', by: [{field: 'title', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'title', author: 'author', status: 'status', media: 'cover'},
    prepare({title, author, status, media}) {
      return {title, subtitle: [author, status].filter(Boolean).join(' · '), media}
    },
  },
})
