import BlogListView from "@/components/blog/BlogListView";
import { buildMetadata } from "@/lib/seo";
import { getPosts } from "@/lib/api/blog";

export const metadata = buildMetadata({
  titleAr: "المقالات الطبية | د. محمد يوسف",
  descriptionAr: "مقالات ونصائح حول صحة العيون.",
  path: "/blog/",
});

export default async function BlogPage() {
  const posts = await getPosts();
  return <BlogListView posts={posts} />;
}
