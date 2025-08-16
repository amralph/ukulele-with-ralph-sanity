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

    defineField({
      name: 'youtubeUrl',
      title: 'YouTube',
      type: 'url',
      description: 'Link to the YouTube channel or video',
    }),

    defineField({
      name: 'tiktokUrl',
      title: 'TikTok',
      type: 'url',
      description: 'Link to the TikTok profile or video',
    }),
  ],
})
