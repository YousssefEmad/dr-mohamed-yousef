import {getCliClient} from 'sanity/cli'
import {siteConfig, siteSeo} from '../data/site.js'
import {doctor} from '../data/doctor.js'
import {aboutPage} from '../data/pages.js'
import {homeSections} from '../data/navigation.js'
import {services} from '../data/services.js'
import {blogPosts} from '../data/blog.js'
import {galleryItems, galleryPage} from '../data/gallery.js'
import {contactPage, videoItems, videosPage} from '../data/contact.js'
import {testimonials, testimonialsPage} from '../data/testimonials.js'

const client = getCliClient({apiVersion: '2026-08-15'})

function slug(current: string) {
  return {_type: 'slug', current}
}

function optionalUrl(value?: string) {
  return value && /^https?:\/\//.test(value) ? value : undefined
}

async function run() {
  await client.createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    nameAr: siteConfig.nameAr,
    nameEn: siteConfig.nameEn,
    shortNameAr: siteConfig.shortNameAr,
    shortNameEn: siteConfig.shortNameEn,
    taglineAr: siteConfig.taglineAr,
    taglineEn: siteConfig.taglineEn,
    url: siteConfig.url,
    copyrightAr: siteConfig.copyrightAr,
    copyrightEn: siteConfig.copyrightEn,
    phone: siteConfig.phone,
    phoneDisplay: siteConfig.phoneDisplay,
    phoneAlt: siteConfig.phoneAlt,
    phoneAltDisplay: siteConfig.phoneAltDisplay,
    whatsapp: siteConfig.whatsapp,
    whatsappHref: optionalUrl(siteConfig.whatsappHref),
    email: siteConfig.email,
    contactEmail: siteConfig.contactEmail,
    addressAr: siteConfig.addressAr,
    addressEn: siteConfig.addressEn,
    hoursAr: siteConfig.hoursAr,
    hoursEn: siteConfig.hoursEn,
    mapEmbed: optionalUrl(siteConfig.mapEmbed),
    contactTitleAr: contactPage.titleAr,
    contactTitleEn: contactPage.titleEn,
    formTitleAr: contactPage.formTitleAr,
    formTitleEn: contactPage.formTitleEn,
    formSuccessAr: contactPage.successAr,
    formSuccessEn: contactPage.successEn,
    social: {
      facebook: optionalUrl(siteConfig.social.facebook),
      instagram: optionalUrl(siteConfig.social.instagram),
      youtube: optionalUrl(siteConfig.social.youtube),
      tiktok: optionalUrl(siteConfig.social.tiktok),
      snapchat: optionalUrl(siteConfig.social.snapchat),
    },
    galleryTitleAr: galleryPage.titleAr,
    galleryTitleEn: galleryPage.titleEn,
    gallerySubtitleAr: galleryPage.subtitleAr,
    gallerySubtitleEn: galleryPage.subtitleEn,
    videosTitleAr: videosPage.titleAr,
    videosTitleEn: videosPage.titleEn,
    videosSubtitleAr: videosPage.subtitleAr,
    videosSubtitleEn: videosPage.subtitleEn,
    testimonialsTitleAr: testimonialsPage.titleAr,
    testimonialsTitleEn: testimonialsPage.titleEn,
    testimonialsSubtitleAr: testimonialsPage.subtitleAr,
    testimonialsSubtitleEn: testimonialsPage.subtitleEn,
    homeSections,
    seo: siteSeo,
  })

  await client.createOrReplace({
    _id: 'doctorProfile',
    _type: 'doctorProfile',
    nameAr: doctor.nameAr,
    nameEn: doctor.nameEn,
    titleAr: doctor.titleAr,
    titleEn: doctor.titleEn,
    slug: slug(doctor.slug),
    bioAr: doctor.bioAr,
    bioEn: doctor.bioEn,
    credentialsAr: doctor.credentialsAr,
    credentialsEn: doctor.credentialsEn,
    seo: doctor.seo,
  })

  await client.createOrReplace({
    _id: 'aboutPage',
    _type: 'aboutPage',
    titleAr: aboutPage.titleAr,
    titleEn: aboutPage.titleEn,
    headingAr: aboutPage.headingAr,
    headingEn: aboutPage.headingEn,
    introAr: aboutPage.introAr,
    introEn: aboutPage.introEn,
    seo: aboutPage.seo,
  })

  for (const item of services) {
    await client.createOrReplace({
      _id: `service-${item.slug}`,
      _type: 'service',
      legacyId: item.id,
      titleAr: item.titleAr,
      titleEn: item.titleEn,
      slug: slug(item.slug),
      order: item.order,
      shortDescriptionAr: item.shortDescriptionAr,
      shortDescriptionEn: item.shortDescriptionEn,
      descriptionAr: item.descriptionAr,
      descriptionEn: item.descriptionEn,
      highlightsAr: item.highlightsAr,
      highlightsEn: item.highlightsEn,
      seo: item.seo,
    })
  }

  for (const item of blogPosts) {
    await client.createOrReplace({
      _id: `post-${item.slug}`,
      _type: 'post',
      legacyId: item.id,
      titleAr: item.titleAr,
      titleEn: item.titleEn,
      slug: slug(item.slug),
      excerptAr: item.excerptAr,
      excerptEn: item.excerptEn,
      contentAr: item.contentAr,
      contentEn: item.contentEn,
      date: item.date,
      dateDisplayAr: item.dateDisplayAr,
      dateDisplayEn: item.dateDisplayEn,
      categoryAr: item.categoryAr,
      categoryEn: item.categoryEn,
      authorAr: item.authorAr,
      authorEn: item.authorEn,
      relatedSlugs: item.relatedSlugs || [],
      seo: item.seo,
    })
  }

  for (const [index, item] of galleryItems.entries()) {
    await client.createOrReplace({
      _id: `gallery-${item.id}`,
      _type: 'galleryImage',
      titleAr: item.titleAr,
      titleEn: item.titleEn,
      captionAr: item.captionAr,
      captionEn: item.captionEn,
      order: index + 1,
    })
  }

  for (const [index, item] of videoItems.entries()) {
    await client.createOrReplace({
      _id: `video-${item.id}`,
      _type: 'video',
      titleAr: item.titleAr,
      titleEn: item.titleEn,
      url: item.url,
      serviceSlug: item.serviceSlug || '',
      order: index + 1,
    })
  }

  for (const [index, item] of testimonials.entries()) {
    await client.createOrReplace({
      _id: `testimonial-${item.id}`,
      _type: 'testimonial',
      nameAr: item.nameAr,
      nameEn: item.nameEn,
      textAr: item.textAr,
      textEn: item.textEn,
      order: index + 1,
    })
  }

  console.log('Seed complete for dr-mohamed-yousef (u2kv1c58). Upload images from the Studio.')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
