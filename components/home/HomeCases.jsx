"use client";

import Link from "next/link";
import FancyboxBinder from "@/components/shared/FancyboxBinder";
import { useLanguage } from "@/context/LanguageContext";
import { homeSections, uiLabels } from "@/data/navigation";

export default function HomeCases({ items = [] }) {
  const { pick, t } = useLanguage();
  const preview = items.slice(0, 4);
  if (!preview.length) return null;

  return (
    <section className="pt-0 pb-70">
      <FancyboxBinder selector='[data-fancybox="home-cases"]' />
      <div className="container">
        <div className="section-title-warp text-center mb-4">
          <span className="sub-title">
            <i className="flaticon-hashtag-symbol" />
            {pick(homeSections, "casesTag")}
          </span>
          <h2>{pick(homeSections, "casesHeading")}</h2>
        </div>
        <div className="row">
          {preview.map((item) => (
            <div className="col-6 col-md-3 mb-4" key={item.id}>
              <a
                href={item.image}
                data-fancybox="home-cases"
                data-caption={pick(item, "title")}
                className="gallery-card"
              >
                <img src={item.image} alt={pick(item, "title")} loading="lazy" />
              </a>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/gallery/" className="default-btn">
            {t(uiLabels, "viewMore")}
          </Link>
        </div>
      </div>
    </section>
  );
}
