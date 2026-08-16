import {
  getServices as sanityServices,
  getServiceBySlug as sanityServiceBySlug,
} from "@/lib/sanity/content";

export async function getServices() {
  const list = await sanityServices();
  return [...list].sort((a, b) => a.order - b.order);
}

export async function getServiceBySlug(slug) {
  return sanityServiceBySlug(slug);
}

export async function getRelatedServices(slugs = []) {
  const list = await getServices();
  return list.filter((s) => slugs.includes(s.slug));
}

export async function getServiceSlugs() {
  const list = await getServices();
  return list.map((s) => s.slug);
}
