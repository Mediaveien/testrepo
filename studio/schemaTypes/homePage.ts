import {defineField, defineType} from 'sanity'
import {HomeIcon} from '@sanity/icons/Home'

export const homePage = defineType({
  name: 'homePage',
  title: 'Forside',
  type: 'document',
  icon: HomeIcon,
  groups: [
    {name: 'hero', title: 'Hero', default: true},
    {name: 'sections', title: 'Seksjoner'},
    {name: 'contact', title: 'Kontakt'},
  ],
  fields: [
    defineField({name: 'heroEyebrow', title: 'Overlinje', type: 'string', group: 'hero'}),
    defineField({
      name: 'heroTitle',
      title: 'Tittel',
      type: 'string',
      group: 'hero',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'heroText', title: 'Tekst', type: 'text', rows: 3, group: 'hero'}),
    defineField({
      name: 'heroVideo',
      title: 'Video',
      type: 'file',
      group: 'hero',
      description:
        'MP4 som spilles av i bakgrunnen uten lyd. Bildet under brukes som plakat før videoen laster, og vises alene hvis ingen video er lagt inn.',
      options: {accept: 'video/mp4,video/webm'},
    }),
    defineField({name: 'heroImage', title: 'Bilde', type: 'image', group: 'hero', options: {hotspot: true}}),

    defineField({name: 'servicesTitle', title: 'Tjenester: tittel', type: 'string', group: 'sections'}),
    defineField({name: 'servicesText', title: 'Tjenester: tekst', type: 'text', rows: 3, group: 'sections'}),
    defineField({name: 'regionTitle', title: 'Region: tittel', type: 'string', group: 'sections'}),
    defineField({name: 'regionText', title: 'Region: tekst', type: 'text', rows: 3, group: 'sections'}),
    defineField({name: 'aboutTitle', title: 'Om oss: tittel', type: 'string', group: 'sections'}),
    defineField({name: 'aboutText', title: 'Om oss: tekst', type: 'text', rows: 5, group: 'sections'}),

    defineField({name: 'ctaTitle', title: 'CTA: tittel', type: 'string', group: 'contact'}),
    defineField({name: 'ctaText', title: 'CTA: tekst', type: 'text', rows: 2, group: 'contact'}),
    defineField({
      name: 'contactEmail',
      title: 'Kontakt-e-post',
      type: 'string',
      group: 'contact',
      validation: (rule) => rule.email(),
    }),
    defineField({name: 'address', title: 'Besøksadresse', type: 'text', rows: 4, group: 'contact'}),
  ],
  preview: {prepare: () => ({title: 'Forside'})},
})
