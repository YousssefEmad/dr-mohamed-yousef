"use client";

import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";
import { useSiteConfig } from "@/context/SiteContext";
import { doctor as localDoctor } from "@/data/doctor";
import { uiLabels } from "@/data/navigation";

export default function AboutPageView({ about, doctor = localDoctor }) {
  const { pick, t } = useLanguage();
  const site = useSiteConfig();

  return (
    <>
      <Breadcrumb titleAr={about.titleAr} titleEn={about.titleEn} />
      <div className="dental-tourism-about-area ptb-100 position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="dental-tourism-about-image">
                <img src={doctor.image} alt={pick(doctor, "name")} />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="dental-tourism-about-content">
                <span># {pick(about, "title")}</span>
                <h3>{pick(about, "heading")}</h3>
                <p>{pick(about, "intro")}</p>
                <ul>
                  {(pick(doctor, "credentials") || doctor.credentialsAr).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ul className="social-links">
                  <li>
                    <a href={site.social.facebook} target="_blank" rel="noopener">
                      <i className="bx bxl-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener">
                      <i className="bx bxl-whatsapp" />
                    </a>
                  </li>
                </ul>
                <Link href="/contact/" className="default-btn mt-3">
                  {t(uiLabels, "bookNow")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
