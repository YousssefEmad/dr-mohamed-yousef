import ServicesListView from "@/components/services/ServicesListView";
import { buildMetadata } from "@/lib/seo";
import { getServices } from "@/lib/api/services";

export const metadata = buildMetadata({
  titleAr: "الخدمات الطبية | د. محمد يوسف",
  descriptionAr: "خدمات تصحيح الإبصار والمياه البيضاء وتجميل الجفون وعدسات ICL.",
  path: "/services/",
});

export default async function ServicesPage() {
  const services = await getServices();
  return <ServicesListView services={services} />;
}
