import BlogListView from "@/components/blog/BlogListView";
import { buildMetadata } from "@/lib/seo";
import { getPosts } from "@/lib/api/blog";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = buildMetadata({
  titleAr: "المقالات الطبية | أفضل دكتور عيون وتجميل الجفون",
  descriptionAr:
    "مقالات د. محمد يوسف عن تجميل الجفون، ارتخاء الجفون، تصحيح الإبصار بالليزر، زراعة عدسات ICL، وجراحة المياه البيضاء.",
  keywordsAr: [
    "أفضل دكتور عيون",
    "دكتور تجميل الجفون",
    "أفضل جراح تجميل جفون",
    "دكتور مياه بيضاء",
    "زراعة عدسات ICL",
  ],
  path: "/blog/",
});

export default async function BlogPage() {
  const posts = await getPosts();
  return <BlogListView posts={posts} />;
}
