"use client";

import Breadcrumb from "@/components/layout/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";

export default function VideosPageView({ items = [], page }) {
  const { pick } = useLanguage();
  return (
    <>
      <Breadcrumb titleAr={page.titleAr} titleEn={page.titleEn} />
      <section className="ptb-100">
        <div className="container">
          <div className="row">
            {items.map((item) => (
              <div className="col-lg-6 mb-4" key={item.id}>
                <h4>{pick(item, "title")}</h4>
                {item.url?.endsWith(".mp4") ? (
                  <video src={item.url} controls preload="metadata" style={{ width: "100%" }} />
                ) : (
                  <a href={item.url} target="_blank" rel="noopener">
                    {item.url}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
