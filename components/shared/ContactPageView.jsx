"use client";

import Breadcrumb from "@/components/layout/Breadcrumb";
import ContactForm from "@/components/shared/ContactForm";
import PhoneLink from "@/components/shared/PhoneLink";
import { useLanguage } from "@/context/LanguageContext";
import { useSiteConfig } from "@/context/SiteContext";
import { whatsappHref } from "@/lib/helpers";
import { homeSections } from "@/data/navigation";

export default function ContactPageView({ page, services = [] }) {
  const { pick } = useLanguage();
  const site = useSiteConfig();

  return (
    <>
      <Breadcrumb titleAr={page.titleAr} titleEn={page.titleEn} />
      <section className="contact-page-area pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2>{pick(page, "heading")}</h2>
            <p>{pick(page, "intro")}</p>
          </div>
          <div className="row align-items-start">
            <div className="col-lg-5 mb-4">
              <div className="contact-page-info">
                <h3>{pick(page, "formTitle")}</h3>
                <ul>
                  <li>
                    <i className="bx bx-map" />
                    <div>
                      <strong>{pick(homeSections, "addressTitle")}</strong>
                      <p>{pick(site, "address")}</p>
                    </div>
                  </li>
                  <li>
                    <i className="bx bx-phone" />
                    <div>
                      <strong>{pick(homeSections, "phonesTitle")}</strong>
                      <p>
                        <PhoneLink href={`tel:${site.phone}`}>{site.phoneDisplay}</PhoneLink>
                      </p>
                      <p>
                        <PhoneLink href={`tel:${site.phoneAlt}`}>{site.phoneAltDisplay}</PhoneLink>
                      </p>
                    </div>
                  </li>
                  <li>
                    <i className="bx bxl-whatsapp" />
                    <div>
                      <strong>{pick(homeSections, "whatsappTitle")}</strong>
                      <p>
                        <a href={whatsappHref(site)} target="_blank" rel="noopener noreferrer">
                          {site.phoneDisplay}
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7 mb-4">
              <ContactForm services={services} />
            </div>
          </div>
          <div className="contact-page-map mt-2">
            <iframe
              src={site.mapEmbed}
              style={{ border: 0, width: "100%", minHeight: 360 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="map"
            />
          </div>
        </div>
      </section>
    </>
  );
}
