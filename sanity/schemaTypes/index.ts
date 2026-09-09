import {type SchemaTypeDefinition} from 'sanity'
import {gardenEntry} from './gardenEntry'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [gardenEntry],
}