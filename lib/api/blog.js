import { blogPosts } from "@/data/blog";
import { normalizeSlug } from "@/lib/helpers";

export async function getPosts() {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug) {
  const posts = await getPosts();
  const decoded = normalizeSlug(slug);
  return posts.find((p) => p.slug === decoded || p.slug === slug) || null;
}

export async function getPostSlugs() {
  const posts = await getPosts();
  return posts.map((p) => p.slug);
}

export async function getRelatedPosts(slugs = []) {
  const posts = await getPosts();
  return posts.filter((p) => slugs.includes(p.slug));
}
