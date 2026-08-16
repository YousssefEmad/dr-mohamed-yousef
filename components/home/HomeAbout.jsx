"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useSiteConfig } from "@/context/SiteContext";
import SocialLinks from "@/components/shared/SocialLinks";
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
              <SocialLinks site={site} />
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
