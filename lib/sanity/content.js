import { doctor as localDoctor } from "@/data/doctor";
import { services as localServices } from "@/data/services";
import { blogPosts as localPosts } from "@/data/blog";
import { galleryItems as localGallery, galleryPage as localGalleryPage } from "@/data/gallery";
import {
  testimonials as localTestimonials,
  testimonialsPage as localTestimonialsPage,
} from "@/data/testimonials";
import {
  contactPage as localContact,
  videoItems as localVideos,
  videosPage as localVideosPage,
} from "@/data/contact";
import {
  aboutPage as localAbout,
  specialties as localSpecialties,
  stats as localStats,
  trustReasons as localTrustReasons,
  visionBlock as localVisionBlock,
} from "@/data/pages";
import { siteConfig as localSite, siteSeo as localSeo } from "@/data/site";
import { homeSections as localHomeSections } from "@/data/navigation";
import { unstable_noStore as noStore } from "next/cache";
import { client } from "./client";
import { urlForImage } from "./image";

function img(source, fallback) {
  return urlForImage(source) || fallback || "";
}

function strList(value, fallback = []) {
  return Array.isArray(value) && value.length ? value.filter(Boolean) : fallback;
}

function mapSeo(docSeo, fallback = {}) {
  if (!docSeo) return fallback;
  return {
    titleAr: docSeo.titleAr || fallback.titleAr || "",
    titleEn: docSeo.titleEn || fallback.titleEn || "",
    descriptionAr: docSeo.descriptionAr || fallback.descriptionAr || "",
    descriptionEn: docSeo.descriptionEn || fallback.descriptionEn || "",
    keywordsAr: strList(docSeo.keywordsAr, fallback.keywordsAr || []),
    keywordsEn: strList(docSeo.keywordsEn, fallback.keywordsEn || []),
  };
}

/** Always bypass Next/Vercel Data Cache so Studio edits show without redeploy. */
async function safeFetch(query, fallback) {
  noStore();
  try {
    return await client.fetch(query, {}, { cache: "no-store", next: { revalidate: 0 } });
  } catch (err) {
    console.warn("[sanity] fetch failed, using local data:", err.message);
    return fallback;
  }
}

export function mapSite(doc) {
  if (!doc) {
    return { ...localSite, seo: localSeo, homeSections: localHomeSections };
  }

  return {
    ...localSite,
    nameAr: doc.nameAr || localSite.nameAr,
    nameEn: doc.nameEn || localSite.nameEn,
    shortNameAr: doc.shortNameAr || localSite.shortNameAr,
    shortNameEn: doc.shortNameEn || localSite.shortNameEn,
    taglineAr: doc.taglineAr || localSite.taglineAr,
    taglineEn: doc.taglineEn || localSite.taglineEn,
    url: doc.url || localSite.url,
    logo: img(doc.logo, localSite.logo),
    phone: doc.phone || localSite.phone,
    phoneDisplay: doc.phoneDisplay || localSite.phoneDisplay,
    phoneAlt: doc.phoneAlt || localSite.phoneAlt,
    phoneAltDisplay: doc.phoneAltDisplay || localSite.phoneAltDisplay,
    whatsapp: doc.whatsapp || localSite.whatsapp,
    whatsappHref: doc.whatsappHref || localSite.whatsappHref,
    email: doc.email || localSite.email,
    contactEmail: doc.contactEmail || localSite.contactEmail,
    addressAr: doc.addressAr || localSite.addressAr,
    addressEn: doc.addressEn || localSite.addressEn,
    hoursAr: doc.hoursAr || localSite.hoursAr,
    hoursEn: doc.hoursEn || localSite.hoursEn,
    mapEmbed: doc.mapEmbed || localSite.mapEmbed,
    social: {
      facebook: doc.social?.facebook ?? localSite.social.facebook,
      instagram: doc.social?.instagram ?? localSite.social.instagram,
      youtube: doc.social?.youtube ?? localSite.social.youtube,
      tiktok: doc.social?.tiktok ?? localSite.social.tiktok,
      snapchat: doc.social?.snapchat ?? localSite.social.snapchat,
    },
    breadcrumbBg: img(doc.breadcrumbBg, localSite.breadcrumbBg),
    defaultOgImage: img(doc.defaultOgImage, localSite.defaultOgImage),
    copyrightAr: doc.copyrightAr || localSite.copyrightAr,
    copyrightEn: doc.copyrightEn || localSite.copyrightEn,
    seo: mapSeo(doc.seo, localSeo),
    homeSections: {
      ...localHomeSections,
      ...(doc.homeSections || {}),
    },
    contactPage: {
      ...localContact,
      titleAr: doc.contactTitleAr || localContact.titleAr,
      titleEn: doc.contactTitleEn || localContact.titleEn,
      formTitleAr: doc.formTitleAr || localContact.formTitleAr,
      formTitleEn: doc.formTitleEn || localContact.formTitleEn,
      successAr: doc.formSuccessAr || localContact.successAr,
      successEn: doc.formSuccessEn || localContact.successEn,
      seo: mapSeo(doc.contactSeo, localContact.seo),
    },
    galleryPage: {
      ...localGalleryPage,
      titleAr: doc.galleryTitleAr || localGalleryPage.titleAr,
      titleEn: doc.galleryTitleEn || localGalleryPage.titleEn,
      subtitleAr: doc.gallerySubtitleAr || localGalleryPage.subtitleAr,
      subtitleEn: doc.gallerySubtitleEn || localGalleryPage.subtitleEn,
    },
    videosPage: {
      ...localVideosPage,
      titleAr: doc.videosTitleAr || localVideosPage.titleAr,
      titleEn: doc.videosTitleEn || localVideosPage.titleEn,
      subtitleAr: doc.videosSubtitleAr || localVideosPage.subtitleAr,
      subtitleEn: doc.videosSubtitleEn || localVideosPage.subtitleEn,
    },
    testimonialsPage: {
      ...localTestimonialsPage,
      titleAr: doc.testimonialsTitleAr || localTestimonialsPage.titleAr,
      titleEn: doc.testimonialsTitleEn || localTestimonialsPage.titleEn,
      subtitleAr: doc.testimonialsSubtitleAr || localTestimonialsPage.subtitleAr,
      subtitleEn: doc.testimonialsSubtitleEn || localTestimonialsPage.subtitleEn,
    },
  };
}

export async function getSiteConfig() {
  const doc = await safeFetch(`*[_id == "siteSettings"][0]`, null);
  return mapSite(doc);
}

function mapDoctor(doc) {
  if (!doc) return localDoctor;
  return {
    ...localDoctor,
    slug: doc.slug?.current || doc.slug || localDoctor.slug,
    nameAr: doc.nameAr || localDoctor.nameAr,
    nameEn: doc.nameEn || localDoctor.nameEn,
    titleAr: doc.titleAr || localDoctor.titleAr,
    titleEn: doc.titleEn || localDoctor.titleEn,
    image: img(doc.image, localDoctor.image),
    portraitImage: img(doc.portraitImage, localDoctor.portraitImage),
    bioAr: doc.bioAr || localDoctor.bioAr,
    bioEn: doc.bioEn || localDoctor.bioEn,
    credentialsAr: strList(doc.credentialsAr, localDoctor.credentialsAr),
    credentialsEn: strList(doc.credentialsEn, localDoctor.credentialsEn),
    seo: mapSeo(doc.seo, localDoctor.seo),
  };
}

export async function getDoctor() {
  const doc = await safeFetch(`*[_id == "doctorProfile"][0]`, null);
  return mapDoctor(doc);
}

function mapAbout(doc) {
  if (!doc) return localAbout;
  return {
    ...localAbout,
    titleAr: doc.titleAr || localAbout.titleAr,
    titleEn: doc.titleEn || localAbout.titleEn,
    headingAr: doc.headingAr || localAbout.headingAr,
    headingEn: doc.headingEn || localAbout.headingEn,
    introAr: doc.introAr || localAbout.introAr,
    introEn: doc.introEn || localAbout.introEn,
    seo: mapSeo(doc.seo, localAbout.seo),
  };
}

export async function getAboutPage() {
  const doc = await safeFetch(`*[_id == "aboutPage"][0]`, null);
  return mapAbout(doc);
}

function mapService(doc) {
  const slug = doc.slug?.current || doc.slug || "";
  const local = localServices.find((s) => s.slug === slug) || {};
  return {
    ...local,
    id: doc.legacyId || local.id || slug,
    slug,
    order: doc.order ?? local.order ?? 0,
    titleAr: doc.titleAr || local.titleAr || "",
    titleEn: doc.titleEn || local.titleEn || "",
    shortDescriptionAr: doc.shortDescriptionAr || local.shortDescriptionAr || "",
    shortDescriptionEn: doc.shortDescriptionEn || local.shortDescriptionEn || "",
    descriptionAr: doc.descriptionAr || local.descriptionAr || "",
    descriptionEn: doc.descriptionEn || local.descriptionEn || "",
    image: img(doc.image, local.image || "/assets/images/service-eyelid.png"),
    highlightsAr: strList(doc.highlightsAr, local.highlightsAr || []),
    highlightsEn: strList(doc.highlightsEn, local.highlightsEn || []),
    seo: mapSeo(doc.seo, local.seo || {}),
  };
}

export async function getServices() {
  const docs = await safeFetch(
    `*[_type == "service"]|order(order asc){
      legacyId, titleAr, titleEn, slug, order, image,
      shortDescriptionAr, shortDescriptionEn,
      descriptionAr, descriptionEn, highlightsAr, highlightsEn, seo
    }`,
    null
  );
  if (!docs?.length) return [...localServices].sort((a, b) => a.order - b.order);
  return docs.map(mapService);
}

export async function getServiceBySlug(slug) {
  const list = await getServices();
  const decoded = decodeURIComponent(slug || "");
  return list.find((s) => s.slug === slug || s.slug === decoded) || null;
}

function mapPost(doc) {
  const slug = doc.slug?.current || doc.slug || "";
  const local = localPosts.find((p) => p.slug === slug) || {};
  const date = doc.date || local.date || "";
  return {
    ...local,
    id: doc.legacyId || local.id || slug,
    slug,
    titleAr: doc.titleAr || local.titleAr || "",
    titleEn: doc.titleEn || local.titleEn || "",
    excerptAr: doc.excerptAr || local.excerptAr || "",
    excerptEn: doc.excerptEn || local.excerptEn || "",
    contentAr: doc.contentAr || local.contentAr || "",
    contentEn: doc.contentEn || local.contentEn || "",
    image: img(doc.image, local.image || "/assets/images/blog-img1.jpg"),
    date,
    dateDisplayAr: doc.dateDisplayAr || local.dateDisplayAr || "",
    dateDisplayEn: doc.dateDisplayEn || local.dateDisplayEn || "",
    categoryAr: doc.categoryAr || local.categoryAr || "",
    categoryEn: doc.categoryEn || local.categoryEn || "",
    authorAr: doc.authorAr || local.authorAr || "",
    authorEn: doc.authorEn || local.authorEn || "",
    relatedSlugs: strList(doc.relatedSlugs, local.relatedSlugs || []),
    seo: mapSeo(doc.seo, local.seo || {}),
  };
}

export async function getPosts() {
  const docs = await safeFetch(
    `*[_type == "post"]|order(date desc){
      legacyId, titleAr, titleEn, slug, excerptAr, excerptEn,
      contentAr, contentEn, image, date, dateDisplayAr, dateDisplayEn,
      categoryAr, categoryEn, authorAr, authorEn, relatedSlugs, seo
    }`,
    null
  );
  if (!docs?.length) {
    return [...localPosts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }
  return docs.map(mapPost);
}

export async function getPostBySlug(slug) {
  const posts = await getPosts();
  return posts.find((p) => p.slug === slug) || null;
}

export async function getGalleryItems() {
  const docs = await safeFetch(
    `*[_type == "galleryImage"]|order(order asc){_id, titleAr, titleEn, captionAr, captionEn, image, order}`,
    null
  );
  if (!docs?.length) return localGallery;
  return docs.map((doc, i) => {
    const local = localGallery[i] || {};
    return {
      id: doc._id || local.id || String(i + 1),
      image: img(doc.image, local.image || "/assets/images/gallary-1.jpg"),
      titleAr: doc.titleAr || local.titleAr || "",
      titleEn: doc.titleEn || local.titleEn || "",
      captionAr: doc.captionAr || local.captionAr || "",
      captionEn: doc.captionEn || local.captionEn || "",
    };
  });
}

export async function getVideos() {
  const docs = await safeFetch(
    `*[_type == "video"]|order(order asc){titleAr, titleEn, url, serviceSlug, order}`,
    null
  );
  if (!docs?.length) return localVideos;
  return docs.map((doc, i) => ({
    id: String(i + 1),
    titleAr: doc.titleAr || localVideos[i]?.titleAr || "",
    titleEn: doc.titleEn || localVideos[i]?.titleEn || "",
    url: doc.url || localVideos[i]?.url || "",
    poster: localVideos[i]?.poster || "",
    serviceSlug: doc.serviceSlug || "",
  }));
}

export async function getTestimonials() {
  const docs = await safeFetch(
    `*[_type == "testimonial"]|order(order asc){nameAr, nameEn, textAr, textEn, image, order}`,
    null
  );
  if (!docs?.length) return localTestimonials;
  return docs.map((doc, i) => {
    const local = localTestimonials[i] || {};
    return {
      id: String(i + 1),
      image: img(doc.image, local.image || "/assets/images/testim-1.jpg"),
      nameAr: doc.nameAr || local.nameAr || "",
      nameEn: doc.nameEn || local.nameEn || "",
      textAr: doc.textAr || local.textAr || "",
      textEn: doc.textEn || local.textEn || "",
    };
  });
}

export async function getContactPage() {
  const site = await getSiteConfig();
  return site.contactPage || localContact;
}

export async function getGalleryPage() {
  const site = await getSiteConfig();
  return site.galleryPage || localGalleryPage;
}

export async function getVideosPage() {
  const site = await getSiteConfig();
  return site.videosPage || localVideosPage;
}

export async function getTestimonialsPage() {
  const site = await getSiteConfig();
  return site.testimonialsPage || localTestimonialsPage;
}

export async function getHomeSections() {
  const site = await getSiteConfig();
  return site.homeSections || localHomeSections;
}

export async function getSpecialties() {
  return localSpecialties;
}

export async function getStats() {
  return localStats;
}

export async function getTrustReasons() {
  return localTrustReasons;
}

export async function getVisionBlock() {
  return localVisionBlock;
}
