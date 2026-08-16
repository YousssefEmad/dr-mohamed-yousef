"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useSiteConfig } from "@/context/SiteContext";
import PhoneLink from "@/components/shared/PhoneLink";
import { homeSections } from "@/data/navigation";
import { whatsappHref } from "@/lib/helpers";

export default function HomeContact() {
  const { pick } = useLanguage();
  const site = useSiteConfig();

  return (
    <section className="contact-area pt-100 pb-70">
      <div className="container">
        <div className="section-title-warp text-center">
          <span className="sub-title">
            <i className="flaticon-hashtag-symbol" />
            {pick(homeSections, "contactTag")}
          </span>
          <h2>{pick(homeSections, "contactHeading")}</h2>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-lg-4 col-md-6">
            <div className="contact-info text-center">
              <div className="contact-item mb-4">
                <i className="bx bx-map" />
                <h4>{pick(homeSections, "addressTitle")}</h4>
                <p>{pick(site, "address")}</p>
              </div>
              <div className="contact-item mb-4">
                <i className="bx bx-phone-call" />
                <h4>{pick(homeSections, "phonesTitle")}</h4>
                <p>
                  <PhoneLink href={`tel:${site.phone}`}>{site.phoneDisplay}</PhoneLink>
                </p>
                <p>
                  <PhoneLink href={`tel:${site.phoneAlt}`}>{site.phoneAltDisplay}</PhoneLink>
                </p>
              </div>
              <div className="contact-item">
                <i className="bx bxl-whatsapp" />
                <h4>{pick(homeSections, "whatsappTitle")}</h4>
                <p>
                  <a href={whatsappHref(site)} target="_blank" rel="noopener noreferrer">
                    {site.phoneDisplay}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-6">
            <iframe
              src={site.mapEmbed}
              style={{ border: 0, width: "100%", minHeight: 360 }}
              allowFullScreen
              loading="lazy"
              title="map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
