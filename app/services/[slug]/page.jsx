import { notFound } from "next/navigation";
import ServiceDetailView from "@/components/services/ServiceDetailView";
import { buildMetadata } from "@/lib/seo";
import { getServiceBySlug, getServices } from "@/lib/api/services";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({ ...service.seo, path: `/services/${service.slug}/` });
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const [service, services] = await Promise.all([
    getServiceBySlug(slug),
    getServices(),
  ]);
  if (!service) notFound();
  return <ServiceDetailView service={service} services={services} />;
}
