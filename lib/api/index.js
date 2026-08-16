import { galleryItems, galleryPage } from "@/data/gallery";
import { testimonials, testimonialsPage } from "@/data/testimonials";
import { doctor } from "@/data/doctor";
import { contactPage, videoItems, videosPage } from "@/data/contact";
import { aboutPage, specialties, stats } from "@/data/pages";
import { siteConfig } from "@/data/site";
import { homeSections } from "@/data/navigation";

/** Swap these with Sanity later — keep the same signatures. */

export async function getGalleryItems() {
  return galleryItems;
}

export async function getGalleryPage() {
  return galleryPage;
}

export async function getTestimonials() {
  return testimonials;
}

export async function getTestimonialsPage() {
  return testimonialsPage;
}

export async function getDoctor() {
  return doctor;
}

export async function getContactPage() {
  return contactPage;
}

export async function getVideos() {
  return videoItems;
}

export async function getVideosPage() {
  return videosPage;
}

export async function getAboutPage() {
  return aboutPage;
}

export async function getSpecialties() {
  return specialties;
}

export async function getStats() {
  return stats;
}

export async function getHomeSections() {
  return homeSections;
}

export async function getSiteConfig() {
  return siteConfig;
}
