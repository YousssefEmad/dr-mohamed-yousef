import {defineArrayMember, defineField, defineType} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons/DocumentText'
import {seoFields} from './seoFields'

export const post = defineType({
  name: 'post',
  title: 'مقال',
  type: 'document',
  icon: DocumentTextIcon,
  groups: [
    {name: 'basic', title: 'أساسي', default: true},
    {name: 'content', title: 'المحتوى'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({name: 'legacyId', title: 'المعرف', type: 'string', hidden: true, group: 'basic'}),
    defineField({name: 'titleAr', title: 'العنوان (عربي)', type: 'string', group: 'basic', validation: (rule) => rule.required()}),
    defineField({name: 'titleEn', title: 'العنوان (English)', type: 'string', group: 'basic'}),
    defineField({
      name: 'slug',
      title: 'الرابط',
      type: 'slug',
      group: 'basic',
      options: {source: 'titleEn', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'image', title: 'الصورة', type: 'image', options: {hotspot: true}, group: 'basic'}),
    defineField({name: 'date', title: 'التاريخ', type: 'date', group: 'basic', validation: (rule) => rule.required()}),
    defineField({name: 'dateDisplayAr', title: 'عرض التاريخ (عربي)', type: 'string', group: 'basic'}),
    defineField({name: 'dateDisplayEn', title: 'عرض التاريخ (English)', type: 'string', group: 'basic'}),
    defineField({name: 'categoryAr', title: 'التصنيف (عربي)', type: 'string', group: 'basic'}),
    defineField({name: 'categoryEn', title: 'التصنيف (English)', type: 'string', group: 'basic'}),
    defineField({name: 'authorAr', title: 'الكاتب (عربي)', type: 'string', group: 'basic'}),
    defineField({name: 'authorEn', title: 'الكاتب (English)', type: 'string', group: 'basic'}),
    defineField({name: 'excerptAr', title: 'المختصر (عربي)', type: 'text', rows: 3, group: 'content'}),
    defineField({name: 'excerptEn', title: 'المختصر (English)', type: 'text', rows: 3, group: 'content'}),
    defineField({name: 'contentAr', title: 'المحتوى HTML (عربي)', type: 'text', rows: 10, group: 'content'}),
    defineField({name: 'contentEn', title: 'المحتوى HTML (English)', type: 'text', rows: 10, group: 'content'}),
    defineField({
      name: 'relatedSlugs',
      title: 'مقالات مرتبطة (slug)',
      type: 'array',
      group: 'content',
      of: [defineArrayMember({type: 'string'})],
    }),
    ...seoFields.map((field) => ({...field, group: 'seo'})),
  ],
  orderings: [{title: 'الأحدث', name: 'dateDesc', by: [{field: 'date', direction: 'desc'}]}],
  preview: {select: {title: 'titleAr', subtitle: 'date', media: 'image'}},
})
