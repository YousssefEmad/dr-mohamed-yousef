"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useSiteConfig } from "@/context/SiteContext";
import { uiLabels } from "@/data/navigation";

export default function Breadcrumb({ titleAr, titleEn }) {
  const { pick, t, lang } = useLanguage();
  const site = useSiteConfig();
  const title = lang === "en" ? titleEn || titleAr : titleAr || titleEn;

  return (
    <div
      className="page-banner-area"
      style={{ backgroundImage: `url('${site.breadcrumbBg}')` }}
    >
      <div className="container">
        <div className="page-banner-content">
          <h2>{title}</h2>
          <ul className="pages-list">
            <li>
              <Link href="/">{t(uiLabels, "home")}</Link>
            </li>
            <li>{title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
