import { normalizeSlug } from "@/lib/helpers";
import {
  getPosts as sanityPosts,
  getPostBySlug as sanityPostBySlug,
} from "@/lib/sanity/content";

export async function getPosts() {
  const posts = await sanityPosts();
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug) {
  const decoded = normalizeSlug(slug);
  const post = await sanityPostBySlug(decoded);
  if (post) return post;
  return sanityPostBySlug(slug);
}

export async function getRelatedPosts(slugs = []) {
  const posts = await getPosts();
  return posts.filter((p) => slugs.includes(p.slug));
}

export async function getAdjacentPosts(slug) {
  const posts = await getPosts();
  const decoded = normalizeSlug(slug);
  const index = posts.findIndex((p) => p.slug === decoded || p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: posts[index + 1] || null,
    next: posts[index - 1] || null,
  };
}

export async function getPostSlugs() {
  const posts = await getPosts();
  return posts.map((p) => p.slug);
}
