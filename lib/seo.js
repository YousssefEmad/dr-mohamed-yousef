import { siteConfig as localSite, siteSeo as localSeo } from "@/data/site";
import { absoluteUrl } from "@/lib/helpers";

function resolveSite(site) {
  return site || localSite;
}

const DEFAULT_ROBOTS = {
  index: true,
  follow: true,
};

export function buildMetadata(
  {
    titleAr,
    descriptionAr,
    keywordsAr = [],
    keywordsEn = [],
    path = "/",
    image,
  } = {},
  site
) {
  const siteConfig = resolveSite(site);
  const seo = siteConfig.seo || localSeo;
  const title = titleAr || seo.titleAr;
  const description = descriptionAr || seo.descriptionAr;
  const keywords = [...(keywordsAr || []), ...(keywordsEn || [])];
  const canonical = absoluteUrl(path, siteConfig.url);
  const ogImage = image || siteConfig.defaultOgImage;
  const ogImageAbs = ogImage.startsWith("http")
    ? ogImage
    : absoluteUrl(ogImage, siteConfig.url);

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical },
    robots: DEFAULT_ROBOTS,
    openGraph: {
      type: "website",
      locale: "ar_EG",
      url: canonical,
      siteName: siteConfig.nameEn,
      title,
      description,
      images: [{ url: ogImageAbs, width: 1200, height: 630, alt: title }],
    },
  };
}

export function organizationSchema(site) {
  const siteConfig = resolveSite(site);
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: siteConfig.nameEn,
    alternateName: siteConfig.nameAr,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addressEn,
      addressLocality: "Alexandria",
      addressCountry: "EG",
    },
    sameAs: Object.values(siteConfig.social || {}).filter(Boolean),
    medicalSpecialty: "Ophthalmology",
  };
}

export function localBusinessSchema(site) {
  const siteConfig = resolveSite(site);
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.nameAr,
    image: absoluteUrl(siteConfig.logo, siteConfig.url),
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addressAr,
      addressLocality: "الإسكندرية",
      addressCountry: "EG",
    },
    url: siteConfig.url,
    priceRange: "$$",
  };
}

export function reviewsSchema(items = [], site) {
  const siteConfig = resolveSite(site);
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: siteConfig.nameAr,
    url: `${siteConfig.url}/testimonials/`,
    review: items.map((item) => ({
      "@type": "Review",
      author: { "@type": "Person", name: item.nameAr },
      reviewBody: item.textAr,
      inLanguage: "ar",
    })),
  };
}
