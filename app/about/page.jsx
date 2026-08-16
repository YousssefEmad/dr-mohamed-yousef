import AboutPageView from "@/components/about/AboutPageView";
import { buildMetadata } from "@/lib/seo";
import { getAboutPage, getDoctor, getTrustReasons } from "@/lib/api";

export async function generateMetadata() {
  const about = await getAboutPage();
  return buildMetadata({ ...about.seo, path: "/about/" });
}

export default async function AboutPage() {
  const [about, doctor, trustReasons] = await Promise.all([
    getAboutPage(),
    getDoctor(),
    getTrustReasons(),
  ]);
  return <AboutPageView about={about} doctor={doctor} trustReasons={trustReasons} />;
}
