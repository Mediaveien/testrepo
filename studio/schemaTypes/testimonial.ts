import {defineField, defineType} from 'sanity'
import {CommentIcon} from '@sanity/icons/Comment'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Kundeomtale',
  type: 'document',
  icon: CommentIcon,
  fields: [
    defineField({name: 'quote', title: 'Sitat', type: 'text', rows: 4, validation: (rule) => rule.required()}),
    defineField({name: 'name', title: 'Navn', type: 'string'}),
    defineField({name: 'role', title: 'Stilling og bedrift', type: 'string'}),
    defineField({name: 'order', title: 'Rekkefølge', type: 'number', description: 'Lavest tall vises først.'}),
    defineField({name: 'image', title: 'Bilde', type: 'image', options: {hotspot: true}}),
  ],
  orderings: [{title: 'Rekkefølge', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'name', subtitle: 'role', media: 'image'}},
})
