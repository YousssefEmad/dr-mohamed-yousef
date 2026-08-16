import TestimonialsPageView from "@/components/shared/TestimonialsPageView";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata, reviewsSchema } from "@/lib/seo";
import { getTestimonials, getTestimonialsPage, getSiteConfig } from "@/lib/api";

export async function generateMetadata() {
  const page = await getTestimonialsPage();
  return buildMetadata({ ...page.seo, path: "/testimonials/" });
}

export default async function TestimonialsPage() {
  const [items, page, site] = await Promise.all([
    getTestimonials(),
    getTestimonialsPage(),
    getSiteConfig(),
  ]);
  return (
    <>
      <JsonLd data={reviewsSchema(items, site)} />
      <TestimonialsPageView items={items} page={page} />
    </>
  );
}
