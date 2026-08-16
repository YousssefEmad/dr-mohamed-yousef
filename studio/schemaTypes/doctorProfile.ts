import {defineArrayMember, defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons/User'
import {seoFields} from './seoFields'

export const doctorProfile = defineType({
  name: 'doctorProfile',
  title: 'بروفايل الدكتور',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({name: 'nameAr', title: 'الاسم (عربي)', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'nameEn', title: 'الاسم (English)', type: 'string'}),
    defineField({name: 'titleAr', title: 'المسمى (عربي)', type: 'string'}),
    defineField({name: 'titleEn', title: 'المسمى (English)', type: 'string'}),
    defineField({
      name: 'slug',
      title: 'الرابط',
      type: 'slug',
      options: {source: 'nameEn', maxLength: 96},
    }),
    defineField({name: 'image', title: 'الصورة الرئيسية', type: 'image', options: {hotspot: true}}),
    defineField({name: 'portraitImage', title: 'صورة البورتريه', type: 'image', options: {hotspot: true}}),
    defineField({name: 'imageAlt', title: 'صورة إضافية', type: 'image', options: {hotspot: true}}),
    defineField({name: 'bioAr', title: 'النبذة (عربي)', type: 'text', rows: 5}),
    defineField({name: 'bioEn', title: 'النبذة (English)', type: 'text', rows: 5}),
    defineField({
      name: 'credentialsAr',
      title: 'الاعتمادات (عربي)',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({
      name: 'credentialsEn',
      title: 'الاعتمادات (English)',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    ...seoFields,
  ],
  preview: {select: {title: 'nameAr', subtitle: 'titleAr', media: 'image'}},
})
