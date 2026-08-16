import {defineField, defineType} from 'sanity'
import {PlayIcon} from '@sanity/icons/Play'

export const video = defineType({
  name: 'video',
  title: 'فيديو',
  type: 'document',
  icon: PlayIcon,
  fields: [
    defineField({name: 'titleAr', title: 'العنوان (عربي)', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'titleEn', title: 'العنوان (English)', type: 'string'}),
    defineField({
      name: 'url',
      title: 'رابط فيسبوك',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'serviceSlug', title: 'خدمة مرتبطة (slug)', type: 'string'}),
    defineField({name: 'order', title: 'الترتيب', type: 'number', initialValue: 0}),
  ],
  orderings: [{title: 'الترتيب', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'titleAr', subtitle: 'url'}},
})
