import type {StructureResolver} from 'sanity/structure'
import {HomeIcon} from '@sanity/icons/Home'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Innhold')
    .items([
      S.listItem()
        .title('Forside')
        .id('homePage')
        .icon(HomeIcon)
        .child(S.document().schemaType('homePage').documentId('homePage').title('Forside')),
      S.divider(),
      S.documentTypeListItem('service').title('Tjenester'),
      S.documentTypeListItem('teamMember').title('Ansatte'),
      S.documentTypeListItem('testimonial').title('Kundeomtaler'),
    ])
