"use client";

import Breadcrumb from "@/components/layout/Breadcrumb";
import ContactForm from "@/components/shared/ContactForm";
import { useLanguage } from "@/context/LanguageContext";

export default function ServiceDetailView({ service, services = [] }) {
  const { pick } = useLanguage();
  return (
    <>
      <Breadcrumb titleAr={service.titleAr} titleEn={service.titleEn} />
      <section className="ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <img src={service.image} alt={pick(service, "title")} className="mb-4 w-100" />
              <h2>{pick(service, "title")}</h2>
              <p>{pick(service, "description")}</p>
            </div>
            <div className="col-lg-4">
              <ContactForm services={services} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
