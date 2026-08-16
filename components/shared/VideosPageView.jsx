"use client";

import Breadcrumb from "@/components/layout/Breadcrumb";
import FacebookReelCard from "@/components/shared/FacebookReelCard";
import { useLanguage } from "@/context/LanguageContext";

export default function VideosPageView({ items = [], page }) {
  const { pick } = useLanguage();
  return (
    <>
      <Breadcrumb titleAr={page.titleAr} titleEn={page.titleEn} />
      <section className="ptb-100">
        <div className="container">
          <div className="section-title-warp text-center mb-4">
            <h2>{pick(page, "heading") || pick(page, "title")}</h2>
            <p>{pick(page, "subtitle")}</p>
          </div>
          <div className="row">
            {items.map((item) => (
              <div className="col-6 col-md-4 col-lg-3 mb-4" key={item.id}>
                <FacebookReelCard
                  url={item.url}
                  poster={item.poster}
                  title={pick(item, "title")}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
