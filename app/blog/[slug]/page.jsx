import { notFound } from "next/navigation";
import BlogDetailView from "@/components/blog/BlogDetailView";
import { buildMetadata } from "@/lib/seo";
import { getPostBySlug } from "@/lib/api/blog";

export const dynamic = "force-dynamic";
export const revalidate = 0;

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
