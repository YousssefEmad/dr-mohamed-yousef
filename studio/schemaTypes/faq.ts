import {defineField, defineType} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons/DocumentText'

export const faq = defineType({
  name: 'faq',
  title: 'سؤال شائع',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'key',
      title: 'المعرف (مثل retina-1)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'questionAr', title: 'السؤال (عربي)', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'questionEn', title: 'السؤال (English)', type: 'string'}),
    defineField({name: 'answerAr', title: 'الإجابة (عربي)', type: 'text', rows: 4}),
    defineField({name: 'answerEn', title: 'الإجابة (English)', type: 'text', rows: 4}),
    defineField({name: 'order', title: 'الترتيب', type: 'number', initialValue: 0}),
  ],
  orderings: [{title: 'الترتيب', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'questionAr', subtitle: 'key'}},
})
