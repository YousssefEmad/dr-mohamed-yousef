"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { SiteProvider } from "@/context/SiteContext";

export default function Providers({ children, siteConfig }) {
  return (
    <LanguageProvider>
      <SiteProvider siteConfig={siteConfig}>{children}</SiteProvider>
    </LanguageProvider>
  );
}
