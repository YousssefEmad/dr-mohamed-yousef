import {defineField, defineType} from 'sanity'
import {ImagesIcon} from '@sanity/icons/Images'

export const galleryImage = defineType({
  name: 'galleryImage',
  title: 'صورة معرض',
  type: 'document',
  icon: ImagesIcon,
  fields: [
    defineField({name: 'image', title: 'الصورة', type: 'image', options: {hotspot: true}, validation: (rule) => rule.required()}),
    defineField({name: 'titleAr', title: 'العنوان (عربي)', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'titleEn', title: 'العنوان (English)', type: 'string'}),
    defineField({name: 'captionAr', title: 'التعليق (عربي)', type: 'string'}),
    defineField({name: 'captionEn', title: 'التعليق (English)', type: 'string'}),
    defineField({name: 'category', title: 'التصنيف', type: 'string', initialValue: 'cases'}),
    defineField({name: 'order', title: 'الترتيب', type: 'number', initialValue: 0}),
  ],
  orderings: [{title: 'الترتيب', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'titleAr', media: 'image'}},
})
