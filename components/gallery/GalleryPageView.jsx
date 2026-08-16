"use client";

import Breadcrumb from "@/components/layout/Breadcrumb";
import FancyboxBinder from "@/components/shared/FancyboxBinder";
import { useLanguage } from "@/context/LanguageContext";

export default function GalleryPageView({ items = [], page }) {
  const { pick } = useLanguage();

  return (
    <>
      <FancyboxBinder selector='[data-fancybox="cases"]' />
      <Breadcrumb titleAr={page.titleAr} titleEn={page.titleEn} />
      <section className="ptb-100">
        <div className="container">
          <div className="section-title-warp text-center mb-4">
            <h2>{pick(page, "title")}</h2>
            <p>{pick(page, "subtitle")}</p>
            {page.introAr ? <p>{pick(page, "intro")}</p> : null}
          </div>
          <div className="row">
            {items.map((item) => (
              <div className="col-lg-3 col-md-6 mb-4" key={item.id}>
                <a
                  href={item.image}
                  data-fancybox="cases"
                  data-caption={pick(item, "title")}
                  className="gallery-card"
                >
                  <img src={item.image} alt={pick(item, "title")} loading="lazy" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
