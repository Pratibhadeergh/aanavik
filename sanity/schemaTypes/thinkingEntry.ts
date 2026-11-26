import {defineField, defineType} from 'sanity'

export const thinkingEntry = defineType({
  name: 'thinkingEntry',
  title: 'Reflection',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Article title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title', maxLength: 96}, validation: (Rule) => Rule.required()}),
    defineField({
      name: 'books',
      title: 'Related books (optional)',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'thinkingBook'}]}],
      description: 'Link this reflection to one or more books, or leave it empty for a standalone Thinking Shelf article.',
    }),
    defineField({
      name: 'book',
      title: 'Legacy book reference',
      type: 'reference',
      to: [{type: 'thinkingBook'}],
      hidden: true,
      description: 'Retained for compatibility with reflections created before multi-book linking.',
    }),
    defineField({name: 'excerpt', title: 'Short introduction', type: 'text', rows: 3, validation: (Rule) => Rule.required()}),
    defineField({name: 'publishedAt', title: 'Publication date', type: 'datetime'}),
    defineField({
      name: 'body', title: 'Article', type: 'array',
      of: [
        {type: 'block'},
        {type: 'image', options: {hotspot: true}, fields: [{name: 'caption', title: 'Caption', type: 'string'}]},
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'coverImage', title: 'Article image (optional)', type: 'image', options: {hotspot: true}}),
    defineField({name: 'tags', title: 'Themes and ideas', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'featured', title: 'Feature on the Thinking Shelf', type: 'boolean', initialValue: false}),
    defineField({
      name: 'thinkingPrompts', title: 'Thinking prompts (private drafting aid)', type: 'object',
      description: 'Optional prompts to help develop the reflection. These are not displayed in the published article.',
      fields: [
        {name: 'proposal', title: 'What is the author proposing?', type: 'text', rows: 2},
        {name: 'resonated', title: 'What stayed with me?', type: 'text', rows: 2},
        {name: 'questions', title: 'What do I question or disagree with?', type: 'text', rows: 2},
        {name: 'evidence', title: 'What evidence would I like to examine?', type: 'text', rows: 2},
        {name: 'connections', title: 'What connects this to something else?', type: 'text', rows: 2},
        {name: 'takeaway', title: 'What question am I taking away?', type: 'text', rows: 2},
      ],
    }),
  ],
  orderings: [{title: 'Newest first', name: 'publishedDesc', by: [{field: 'publishedAt', direction: 'desc'}]}],
  preview: {
    select: {title: 'title', books: 'books', legacyBook: 'book.title', date: 'publishedAt'},
    prepare({title, books, legacyBook, date}) {
      const bookTitles = books?.map((book) => book.title).filter(Boolean) ?? []
      const related = bookTitles.length ? bookTitles.join(', ') : legacyBook
      return {title, subtitle: [related, date ? new Date(date).toLocaleDateString() : 'Draft'].filter(Boolean).join(' · ')}
    },
  },
})
