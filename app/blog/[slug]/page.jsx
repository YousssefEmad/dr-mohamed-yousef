import { notFound } from "next/navigation";
import BlogDetailView from "@/components/blog/BlogDetailView";
import { buildMetadata } from "@/lib/seo";
import { getPostBySlug, getPostSlugs } from "@/lib/api/blog";

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({ ...post.seo, path: `/blog/${post.slug}/` });
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();
  return <BlogDetailView post={post} />;
}
