import {defineArrayMember, defineField} from 'sanity'

export const seoFields = [
  defineField({
    name: 'seo',
    title: 'SEO',
    type: 'object',
    fields: [
      defineField({name: 'titleAr', title: 'عنوان SEO (عربي)', type: 'string'}),
      defineField({name: 'titleEn', title: 'عنوان SEO (English)', type: 'string'}),
      defineField({name: 'descriptionAr', title: 'وصف SEO (عربي)', type: 'text', rows: 3}),
      defineField({name: 'descriptionEn', title: 'وصف SEO (English)', type: 'text', rows: 3}),
      defineField({
        name: 'keywordsAr',
        title: 'كلمات مفتاحية (عربي)',
        type: 'array',
        of: [defineArrayMember({type: 'string'})],
      }),
      defineField({
        name: 'keywordsEn',
        title: 'كلمات مفتاحية (English)',
        type: 'array',
        of: [defineArrayMember({type: 'string'})],
      }),
    ],
  }),
]
