import {type SchemaTypeDefinition} from 'sanity'
import {gardenEntry} from './gardenEntry'
import {gardenOccurrence} from './gardenOccurrence'
import {thinkingBook} from './thinkingBook'
import {thinkingEntry} from './thinkingEntry'
import {writingPost} from './writingPost'
import {writingSeries} from './writingSeries'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [gardenEntry, gardenOccurrence, thinkingBook, thinkingEntry, writingSeries, writingPost],
}
