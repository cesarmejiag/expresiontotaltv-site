import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {MdDashboard, MdSettings, MdLink, MdPerson} from 'react-icons/md'

const hiddenDocTypes = (listItem: any) =>
  !['page', 'route', 'site-config', 'host'].includes(listItem.getId())

export default defineConfig({
  name: 'default',
  title: 'Expresión Total TV',

  projectId: '01ptukrd',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Site')
          .items([
            S.listItem()
              .title('Site config')
              .icon(MdSettings)
              .child(S.editor().id('config').schemaType('site-config').documentId('global-config')),
            S.listItem()
              .title('Routes')
              .icon(MdLink)
              .schemaType('route')
              .child(S.documentTypeList('route').title('Routes')),
            ...S.documentTypeListItems().filter(hiddenDocTypes),
            S.listItem()
              .title('Pages')
              .icon(MdDashboard)
              .schemaType('page')
              .child(S.documentTypeList('page').title('Pages')),
            S.listItem()
              .title('Hosts')
              .icon(MdPerson)
              .schemaType('host')
              .child(S.documentTypeList('host').title('Hosts')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
