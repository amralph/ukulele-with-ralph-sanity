import {StructureBuilder} from 'sanity/structure'

export const myStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Front Page')
        .id('frontPage')
        .child(S.document().schemaType('frontPage').documentId('frontPage')),
      S.listItem().title('Tabs').schemaType('tab').child(S.documentTypeList('tab').title('Tabs')),
    ])
