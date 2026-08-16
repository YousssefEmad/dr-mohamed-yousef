"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useSiteConfig } from "@/context/SiteContext";
import { homeSections, uiLabels } from "@/data/navigation";

export default function HomeAbout({ about, doctor }) {
  const { pick, t } = useLanguage();
  const site = useSiteConfig();

  return (
    <div className="dental-tourism-about-area ptb-100 position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12">
            <div className="dental-tourism-about-image">
              <img src={doctor.image} alt={pick(doctor, "name")} />
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="dental-tourism-about-content">
              <span># {pick(homeSections, "aboutTag")}</span>
              <h3>{pick(about, "heading")}</h3>
              <p>{pick(about, "intro")}</p>
              <ul className="social-links">
                {site.social.facebook ? (
                  <li>
                    <a href={site.social.facebook} target="_blank" rel="noopener">
                      <i className="bx bxl-facebook" />
                    </a>
                  </li>
                ) : null}
                {site.social.instagram ? (
                  <li>
                    <a href={site.social.instagram} target="_blank" rel="noopener">
                      <i className="bx bxl-instagram" />
                    </a>
                  </li>
                ) : null}
                {site.social.tiktok ? (
                  <li>
                    <a href={site.social.tiktok} target="_blank" rel="noopener">
                      <i className="bx bxl-tiktok" />
                    </a>
                  </li>
                ) : null}
                <li>
                  <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener">
                    <i className="bx bxl-whatsapp" />
                  </a>
                </li>
              </ul>
              <div className="about-btn">
                <Link href="/about/" className="default-btn">
                  {t(uiLabels, "learnMore")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
