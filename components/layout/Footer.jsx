"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useSiteConfig } from "@/context/SiteContext";
import PhoneLink from "@/components/shared/PhoneLink";
import { homeSections, uiLabels } from "@/data/navigation";

export default function Footer({ services = [] }) {
  const { pick, t } = useLanguage();
  const site = useSiteConfig();

  return (
    <footer className="footer-area site-footer pt-100 pb-20">
      <div className="container">
        <div className="footer-brand text-center">
          <Link href="/">
            <img className="footer-logo-img" src={site.logo} alt={pick(site, "name")} />
          </Link>
        </div>
        <div className="row align-items-start">
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h3>{t(uiLabels, "callUs")}</h3>
              <ul className="footer-contact-list">
                <li>
                  <i className="bx bx-phone" />
                  <PhoneLink href={`tel:${site.phone}`}>{site.phoneDisplay}</PhoneLink>
                </li>
                <li>
                  <i className="bx bx-phone" />
                  <PhoneLink href={`tel:${site.phoneAlt}`}>{site.phoneAltDisplay}</PhoneLink>
                </li>
                <li>
                  <i className="bx bxl-whatsapp" />
                  <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="footer-widget">
              <h3>{pick(homeSections, "addressTitle")}</h3>
              <p>{pick(site, "address")}</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-lg-end mt-4 mt-lg-0">
            <div className="footer-widget">
              <h3>{t(uiLabels, "medicalServices")}</h3>
              <ul className="footer-ul">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}/`}>{pick(s, "title")}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area pt-4">
        <div className="container d-flex justify-content-center">
          <p className="mb-0">{pick(site, "copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
