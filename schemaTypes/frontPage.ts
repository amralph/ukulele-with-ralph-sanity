import {defineType, defineField} from 'sanity'

export const frontPage = defineType({
  name: 'frontPage',
  title: 'Front Page',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'featuredTabs',
      title: 'Featured Tabs',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'tab'}],
        },
      ],
    }),
  ],
})
