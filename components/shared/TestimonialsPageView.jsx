"use client";

import Breadcrumb from "@/components/layout/Breadcrumb";
import FancyboxBinder from "@/components/shared/FancyboxBinder";
import { useLanguage } from "@/context/LanguageContext";

export default function TestimonialsPageView({ items = [], page }) {
  const { pick } = useLanguage();

  return (
    <>
      <FancyboxBinder selector='[data-fancybox="reviews"]' />
      <Breadcrumb titleAr={page.titleAr} titleEn={page.titleEn} />
      <section className="ptb-100">
        <div className="container">
          <div className="section-title-warp text-center mb-4">
            <h2>{pick(page, "title")}</h2>
            <p>{pick(page, "subtitle")}</p>
          </div>
          <div className="row">
            {items.map((item) => (
              <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
                <article className="review-card">
                  <a
                    href={item.image}
                    data-fancybox="reviews"
                    data-caption={pick(item, "name")}
                    className="review-card__media"
                  >
                    <img src={item.image} alt={pick(item, "name")} loading="lazy" />
                    <span className="review-card__icon" aria-hidden="true">
                      <i className="bx bx-images" />
                    </span>
                  </a>
                  <h3>{pick(item, "name")}</h3>
                  <p>{pick(item, "text")}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
