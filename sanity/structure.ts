import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Aanavik content')
    .items([
      S.listItem()
        .title('Thinking Shelf')
        .child(
          S.list()
            .title('Thinking Shelf')
            .items([
              S.documentTypeListItem('thinkingBook').title('Books'),
              S.documentTypeListItem('thinkingEntry').title('Reflections'),
            ]),
        ),
      S.divider(),
      S.documentTypeListItem('writingSeries').title('Writing series'),
      S.documentTypeListItem('writingPost').title('Writing'),
      S.divider(),
      S.documentTypeListItem('gardenEntry').title('Garden journal entries'),
      S.documentTypeListItem('gardenOccurrence').title('Garden occurrences'),
    ])
