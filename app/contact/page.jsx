import ContactPageView from "@/components/shared/ContactPageView";
import { buildMetadata } from "@/lib/seo";
import { getContactPage } from "@/lib/api";
import { getServices } from "@/lib/api/services";

export async function generateMetadata() {
  const page = await getContactPage();
  return buildMetadata({ ...page.seo, path: "/contact/" });
}

export default async function ContactPage() {
  const [page, services] = await Promise.all([getContactPage(), getServices()]);
  return <ContactPageView page={page} services={services} />;
}
