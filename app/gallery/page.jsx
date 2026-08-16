import GalleryPageView from "@/components/gallery/GalleryPageView";
import { buildMetadata } from "@/lib/seo";
import { getGalleryItems, getGalleryPage } from "@/lib/api";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  const page = await getGalleryPage();
  return buildMetadata({ ...page.seo, path: "/gallery/" });
}

export default async function GalleryPage() {
  const [items, page] = await Promise.all([getGalleryItems(), getGalleryPage()]);
  return <GalleryPageView items={items} page={page} />;
}
