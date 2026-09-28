import {type SchemaTypeDefinition} from 'sanity'
import {gardenEntry} from './gardenEntry'
import { gardenOccurrence } from './gardenOccurrence'

export const schema: {types: SchemaTypeDefinition[]} = {
 types: [gardenEntry, gardenOccurrence],
}