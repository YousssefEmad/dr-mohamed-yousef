import type {StructureResolver} from 'sanity/structure'
import {CogIcon} from '@sanity/icons/Cog'
import {DocumentTextIcon} from '@sanity/icons/DocumentText'
import {HeartIcon} from '@sanity/icons/Heart'
import {ImagesIcon} from '@sanity/icons/Images'
import {PlayIcon} from '@sanity/icons/Play'
import {UserIcon} from '@sanity/icons/User'

const SINGLETONS = [
  {type: 'siteSettings', title: 'إعدادات الموقع', icon: CogIcon},
  {type: 'doctorProfile', title: 'بروفايل الدكتور', icon: UserIcon},
  {type: 'aboutPage', title: 'صفحة من نحن', icon: UserIcon},
] as const

export const structure: StructureResolver = (S) =>
  S.list()
    .title('المحتوى')
    .items([
      ...SINGLETONS.map((item) =>
        S.listItem()
          .title(item.title)
          .icon(item.icon)
          .child(S.document().schemaType(item.type).documentId(item.type).title(item.title)),
      ),
      S.divider(),
      S.documentTypeListItem('service').title('الخدمات الطبية').icon(HeartIcon),
      S.documentTypeListItem('post').title('المقالات').icon(DocumentTextIcon),
      S.documentTypeListItem('galleryImage').title('معرض الصور').icon(ImagesIcon),
      S.documentTypeListItem('video').title('الفيديوهات').icon(PlayIcon),
      S.documentTypeListItem('testimonial').title('آراء المرضى').icon(DocumentTextIcon),
      S.documentTypeListItem('faq').title('الأسئلة الشائعة').icon(DocumentTextIcon),
    ])
