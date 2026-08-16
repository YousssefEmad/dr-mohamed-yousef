"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { homeSections, uiLabels } from "@/data/navigation";

export default function HomeServices({ services = [] }) {
  const { pick, t } = useLanguage();
  const preview = services.slice(0, 3);

  return (
    <section className="services-area pb-70">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="section-title-warp">
              <span className="sub-title">
                <i className="flaticon-hashtag-symbol" />
                {pick(homeSections, "servicesTag")}
              </span>
              <h2>{pick(homeSections, "servicesHeading")}</h2>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="section-warp-btn">
              <Link href="/services/" className="default-btn">
                {t(uiLabels, "viewAll")}
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {preview.map((service) => (
            <div className="col-lg-4 col-md-6" key={service.slug}>
              <div className="single-services">
                <div className="services-image">
                  <Link href={`/services/${service.slug}/`}>
                    <img src={service.image} alt={pick(service, "title")} />
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href={`/services/${service.slug}/`}>{pick(service, "title")}</Link>
                  </h3>
                  <p>{pick(service, "shortDescription")}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
