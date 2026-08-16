import HomePageView from "@/components/home/HomePageView";
import { buildMetadata } from "@/lib/seo";
import { siteSeo } from "@/data/site";
import { getServices } from "@/lib/api/services";
import { getPosts } from "@/lib/api/blog";
import { getAboutPage, getDoctor, getSpecialties, getStats, getSiteConfig, getGalleryItems } from "@/lib/api";

export async function generateMetadata() {
  const site = await getSiteConfig();
  return buildMetadata({ ...siteSeo, path: "/" }, site);
}

export default async function HomePage() {
  const [about, doctor, specialties, stats, services, posts, galleryItems] = await Promise.all([
    getAboutPage(),
    getDoctor(),
    getSpecialties(),
    getStats(),
    getServices(),
    getPosts(),
    getGalleryItems(),
  ]);

  return (
    <HomePageView
      about={about}
      doctor={doctor}
      specialties={specialties}
      stats={stats}
      services={services}
      posts={posts}
      galleryItems={galleryItems}
    />
  );
}
