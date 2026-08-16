import {defineField, defineType} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons/DocumentText'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'رأي مريض',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({name: 'nameAr', title: 'الاسم (عربي)', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'nameEn', title: 'الاسم (English)', type: 'string'}),
    defineField({name: 'textAr', title: 'نص الرأي (عربي)', type: 'text', rows: 4}),
    defineField({name: 'textEn', title: 'نص الرأي (English)', type: 'text', rows: 4}),
    defineField({name: 'image', title: 'صورة الرأي', type: 'image', options: {hotspot: true}}),
    defineField({name: 'order', title: 'الترتيب', type: 'number', initialValue: 0}),
  ],
  orderings: [{title: 'الترتيب', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'nameAr', subtitle: 'textAr', media: 'image'}},
})
