"use client";

import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import HomeTrust from "@/components/home/HomeTrust";
import SocialLinks from "@/components/shared/SocialLinks";
import { useLanguage } from "@/context/LanguageContext";
import { useSiteConfig } from "@/context/SiteContext";
import { doctor as localDoctor } from "@/data/doctor";
import { uiLabels } from "@/data/navigation";

export default function AboutPageView({ about, doctor = localDoctor, trustReasons = [] }) {
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
                <SocialLinks site={site} />
                <Link href="/contact/" className="default-btn mt-3">
                  {t(uiLabels, "bookNow")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeTrust reasons={trustReasons} />
    </>
  );
}
