"use client";

import { useLanguage } from "@/context/LanguageContext";
import { homeSections } from "@/data/navigation";

export default function HomeTrust({ reasons = [] }) {
  const { pick } = useLanguage();
  if (!reasons.length) return null;
  return (
    <section className="pt-0 pb-100">
      <div className="container">
        <div className="section-title-warp text-center mb-4">
          <span className="sub-title">
            <i className="flaticon-hashtag-symbol" />
            {pick(homeSections, "trustTag")}
          </span>
          <h2>{pick(homeSections, "aboutHeading")}</h2>
        </div>
        <div className="row">
          {reasons.map((item) => (
            <div className="col-md-6 col-lg-3 mb-4" key={item.titleAr}>
              <div className="trust-card h-100">
                <h3>{pick(item, "title")}</h3>
                <p>{pick(item, "text")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
