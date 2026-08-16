"use client";

import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import ContactForm from "@/components/shared/ContactForm";
import { useLanguage } from "@/context/LanguageContext";
import { uiLabels } from "@/data/navigation";

export default function ServiceDetailView({ service, services = [] }) {
  const { pick, t, lang } = useLanguage();
  const highlights = lang === "en" ? service.highlightsEn : service.highlightsAr;
  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <Breadcrumb titleAr={service.titleAr} titleEn={service.titleEn} />
      <section className="services-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="services-details-image">
                <img src={service.image} alt={pick(service, "title")} />
              </div>
              <div className="services-details-content">
                <h3>{pick(service, "title")}</h3>
                <p>{pick(service, "description")}</p>
              </div>
              {highlights?.length ? (
                <ul className="services-details-list">
                  {highlights.map((item) => (
                    <li key={item}>
                      <i className="flaticon-check" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              <div className="service-detail-form mt-4">
                <h3>{t(uiLabels, "bookAppointment")}</h3>
                <ContactForm services={services} />
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <aside className="widget-area">
                <div className="widget widget_grin_posts_thumb">
                  <h3 className="widget-title">{t(uiLabels, "relatedServices")}</h3>
                  {others.map((item) => (
                    <article className="item" key={item.slug}>
                      <div className="info">
                        <h4 className="title usmall">
                          <Link href={`/services/${item.slug}/`}>{pick(item, "title")}</Link>
                        </h4>
                      </div>
                    </article>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
