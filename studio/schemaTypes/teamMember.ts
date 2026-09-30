import {defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons/User'

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Ansatt',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({name: 'name', title: 'Navn', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'role', title: 'Stilling', type: 'string'}),
    defineField({name: 'email', title: 'E-post', type: 'string', validation: (rule) => rule.email()}),
    defineField({name: 'phone', title: 'Telefon', type: 'string'}),
    defineField({name: 'order', title: 'Rekkefølge', type: 'number', description: 'Lavest tall vises først.'}),
    defineField({name: 'image', title: 'Bilde', type: 'image', options: {hotspot: true}}),
  ],
  orderings: [{title: 'Rekkefølge', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'name', subtitle: 'role', media: 'image'}},
})
