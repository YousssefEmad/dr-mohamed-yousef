import { services as localServices } from "@/data/services";

export async function getServices() {
  return [...localServices].sort((a, b) => a.order - b.order);
}

export async function getServiceBySlug(slug) {
  const list = await getServices();
  const decoded = decodeURIComponent(slug || "");
  return list.find((s) => s.slug === slug || s.slug === decoded) || null;
}

export async function getServiceSlugs() {
  const list = await getServices();
  return list.map((s) => s.slug);
}
