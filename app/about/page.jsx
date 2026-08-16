import AboutPageView from "@/components/about/AboutPageView";
import { buildMetadata } from "@/lib/seo";
import { getAboutPage, getDoctor } from "@/lib/api";

export async function generateMetadata() {
  const about = await getAboutPage();
  return buildMetadata({ ...about.seo, path: "/about/" });
}

export default async function AboutPage() {
  const [about, doctor] = await Promise.all([getAboutPage(), getDoctor()]);
  return <AboutPageView about={about} doctor={doctor} />;
}
