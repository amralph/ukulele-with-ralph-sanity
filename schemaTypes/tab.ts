import {defineField, defineType} from 'sanity'

export const tab = defineType({
  name: 'tab',
  title: 'Tab',
  type: 'document',

  fieldsets: [
    {name: 'meta', title: 'Meta Info', options: {collapsible: true, collapsed: false}},
    {name: 'links', title: 'External Links', options: {collapsible: true, collapsed: true}},
    {name: 'files', title: 'Files', options: {collapsible: true, collapsed: true}},
  ],

  fields: [
    // Meta info
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
      fieldset: 'meta',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
      fieldset: 'meta',
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
      fieldset: 'meta',
    }),
    defineField({
      name: 'category',
      type: 'string',
      fieldset: 'meta',
    }),
    defineField({
      name: 'composer',
      type: 'string',
      fieldset: 'meta',
    }),

    // External Links
    defineField({
      name: 'videoUrl',
      type: 'url',
      fieldset: 'links',
    }),
    defineField({
      name: 'shopUrl',
      type: 'url',
      fieldset: 'links',
    }),

    // Files
    defineField({
      name: 'tabFile',
      type: 'file',
      options: {accept: 'application/pdf'},
      fieldset: 'files',
    }),
    defineField({
      name: 'previewTabFile',
      type: 'file',
      options: {accept: 'image/*'},
      fieldset: 'files',
    }),
    defineField({
      name: 'audioFile',
      type: 'file',
      options: {accept: 'audio/mpeg'},
      fieldset: 'files',
    }),
  ],
})
