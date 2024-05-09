import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Deliveroo',

  projectId: 'ez6nfbwa',
  dataset: 'deliveroo',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
