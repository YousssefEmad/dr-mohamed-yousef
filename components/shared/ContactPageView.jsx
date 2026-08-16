"use client";

import Breadcrumb from "@/components/layout/Breadcrumb";
import ContactForm from "@/components/shared/ContactForm";
import PhoneLink from "@/components/shared/PhoneLink";
import { useLanguage } from "@/context/LanguageContext";
import { useSiteConfig } from "@/context/SiteContext";

export default function ContactPageView({ page, services = [] }) {
  const { pick } = useLanguage();
  const site = useSiteConfig();

  return (
    <>
      <Breadcrumb titleAr={page.titleAr} titleEn={page.titleEn} />
      <section className="contact-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h3>{pick(page, "formTitle")}</h3>
              <p>{pick(site, "address")}</p>
              <p>
                <PhoneLink href={`tel:${site.phone}`}>{site.phoneDisplay}</PhoneLink>
              </p>
              <iframe
                src={site.mapEmbed}
                style={{ border: 0, width: "100%", minHeight: 280 }}
                allowFullScreen
                loading="lazy"
                title="map"
              />
            </div>
            <div className="col-lg-7">
              <ContactForm services={services} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
