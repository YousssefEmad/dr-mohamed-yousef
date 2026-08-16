"use client";

import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesListView({ services = [] }) {
  const { pick } = useLanguage();
  return (
    <>
      <Breadcrumb titleAr="الخدمات الطبية" titleEn="Medical Services" />
      <section className="services-area pt-5 pb-70">
        <div className="container">
          <div className="row">
            {services.map((service) => (
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
    </>
  );
}
