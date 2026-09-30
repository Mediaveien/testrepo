import {defineArrayMember, defineField, defineType} from 'sanity'
import {CaseIcon} from '@sanity/icons/Case'

export const service = defineType({
  name: 'service',
  title: 'Tjeneste',
  type: 'document',
  icon: CaseIcon,
  groups: [
    {name: 'content', title: 'Innhold', default: true},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      description: 'Delen av adressen etter /tjenester/. Klikk «Generate» for å lage den fra tittelen.',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/æ/g, 'ae')
            .replace(/ø/g, 'o')
            .replace(/å/g, 'a')
            .normalize('NFKD')
            .replace(/[̀-ͯ]/g, '')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '')
            .slice(0, 96),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Rekkefølge',
      type: 'number',
      group: 'content',
      description: 'Lavest tall vises først.',
    }),
    defineField({
      name: 'excerpt',
      title: 'Kort beskrivelse',
      type: 'text',
      rows: 3,
      group: 'content',
      description: 'Vises på kortet på forsiden.',
      validation: (rule) => rule.max(160).warning('Hold den under 160 tegn så kortene blir like høye.'),
    }),
    defineField({
      name: 'image',
      title: 'Bilde',
      type: 'image',
      group: 'content',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: 'Alt-tekst', type: 'string'})],
    }),
    defineField({
      name: 'intro',
      title: 'Ingress',
      type: 'text',
      rows: 4,
      group: 'content',
    }),
    defineField({
      name: 'body',
      title: 'Innhold',
      type: 'array',
      group: 'content',
      of: [defineArrayMember({type: 'block'})],
    }),
    defineField({
      name: 'highlights',
      title: 'Dette får du',
      type: 'array',
      group: 'content',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO-beskrivelse',
      type: 'text',
      rows: 2,
      group: 'seo',
      validation: (rule) => rule.max(160).warning('Google viser vanligvis rundt 155 tegn.'),
    }),
  ],
  orderings: [
    {title: 'Rekkefølge', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'title', subtitle: 'slug.current', media: 'image'},
    prepare: ({title, subtitle, media}) => ({title, subtitle: subtitle ? `/tjenester/${subtitle}` : 'Mangler slug', media}),
  },
})
