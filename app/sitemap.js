import { siteConfig } from "@/data/site";
import { getServiceSlugs } from "@/lib/api/services";
import { getPostSlugs } from "@/lib/api/blog";

export default async function sitemap() {
  const base = siteConfig.url;
  const [serviceSlugs, postSlugs] = await Promise.all([
    getServiceSlugs(),
    getPostSlugs(),
  ]);
  const staticPaths = ["", "about", "services", "blog", "contact", "gallery", "videos", "testimonials"];
  const now = new Date().toISOString();
  return [
    ...staticPaths.map((path) => ({
      url: path ? `${base}/${path}/` : `${base}/`,
      lastModified: now,
    })),
    ...serviceSlugs.map((slug) => ({ url: `${base}/services/${slug}/`, lastModified: now })),
    ...postSlugs.map((slug) => ({ url: `${base}/blog/${slug}/`, lastModified: now })),
  ];
}
