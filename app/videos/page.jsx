import VideosPageView from "@/components/shared/VideosPageView";
import { buildMetadata } from "@/lib/seo";
import { getVideos, getVideosPage } from "@/lib/api";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  const page = await getVideosPage();
  return buildMetadata({ ...page.seo, path: "/videos/" });
}

export default async function VideosPage() {
  const [items, page] = await Promise.all([getVideos(), getVideosPage()]);
  return <VideosPageView items={items} page={page} />;
}
