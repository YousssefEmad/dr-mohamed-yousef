import { Alexandria } from "next/font/google";
import "@/styles/globals.css";
import Providers from "@/components/layout/Providers";
import SiteShell from "@/components/layout/SiteShell";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata, organizationSchema, localBusinessSchema } from "@/lib/seo";
import { siteSeo } from "@/data/site";
import { getServices } from "@/lib/api/services";
import { getSiteConfig } from "@/lib/api";
import { REVALIDATE_SECONDS } from "@/lib/sanity/revalidate";

const alexandria = Alexandria({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  fallback: ["Tahoma", "Arial", "sans-serif"],
});

export const revalidate = REVALIDATE_SECONDS;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export async function generateMetadata() {
  const site = await getSiteConfig();
  return buildMetadata({ ...(site.seo || siteSeo), path: "/" }, site);
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children }) {
  const [services, siteConfig] = await Promise.all([getServices(), getSiteConfig()]);

  return (
    <html lang="ar" dir="rtl" className={alexandria.className} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/images/logo-smile-home.png" type="image/png" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/boxicons.min.css" />
        <link rel="stylesheet" href="/assets/css/flaticon.css" />
        <link rel="stylesheet" href="/assets/css/flaticon-two.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/custom.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
      </head>
      <body className="lang-ar" suppressHydrationWarning>
        <JsonLd data={[organizationSchema(siteConfig), localBusinessSchema(siteConfig)]} />
        <Providers siteConfig={siteConfig}>
          <SiteShell services={services}>{children}</SiteShell>
        </Providers>
      </body>
    </html>
  );
}
