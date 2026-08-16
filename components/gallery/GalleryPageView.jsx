"use client";

import Breadcrumb from "@/components/layout/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";

export default function GalleryPageView({ items = [], page }) {
  const { pick } = useLanguage();
  return (
    <>
      <Breadcrumb titleAr={page.titleAr} titleEn={page.titleEn} />
      <section className="ptb-100">
        <div className="container">
          <div className="row">
            {items.map((item) => (
              <div className="col-lg-3 col-md-6 mb-4" key={item.id}>
                <img src={item.image} alt={pick(item, "title")} className="w-100" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
