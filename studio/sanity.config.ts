import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes, singletonTypes} from './schemaTypes'
import {structure} from './structure'

export default defineConfig({
  name: 'default',
  title: 'Mediaveien demo',
  projectId: '1bzgbepc',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool({defaultApiVersion: '2026-03-01'})],

  schema: {
    types: schemaTypes,
    // Forsiden skal ikke kunne opprettes på nytt fra «Create»-menyen.
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  document: {
    // Forsiden kan ikke slettes eller dupliseres.
    actions: (actions, {schemaType}) =>
      singletonTypes.has(schemaType)
        ? actions.filter(({action}) => action && ['publish', 'discardChanges', 'restore'].includes(action))
        : actions,
  },
})
