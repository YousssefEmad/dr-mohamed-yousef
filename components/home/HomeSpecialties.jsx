"use client";

import { useLanguage } from "@/context/LanguageContext";
import { homeSections } from "@/data/navigation";

export default function HomeSpecialties({ specialties = [], doctor }) {
  const { pick } = useLanguage();
  const left = specialties.filter((s) => s.side === "left");
  const right = specialties.filter((s) => s.side === "right");

  return (
    <section className="specialties-area ptb-100">
      <div className="bg-line2">
        <svg width="249" height="958" viewBox="0 0 249 958" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M294 -2C203.922 27.1851 -98.5671 220.672 103.246 407.673C305.058 594.674 73.0659 900.578 21 973"
            stroke="#c2b870"
            strokeWidth="50"
          />
        </svg>
      </div>
      <div className="container">
        <div className="section-title text-center">
          <h2>{pick(homeSections, "specialtiesTag")}</h2>
          <span />
        </div>
        <div className="specialties-wrapper">
          <div className="specialties-column left">
            {left.map((item) => (
              <div className="specialty-item" key={item.titleAr}>
                <h3>{pick(item, "title")}</h3>
                <p>{pick(item, "text")}</p>
              </div>
            ))}
          </div>
          <div className="doctor-image">
            <img src={doctor.portraitImage} alt={pick(doctor, "name")} />
          </div>
          <div className="specialties-column right">
            {right.map((item) => (
              <div className="specialty-item" key={item.titleAr}>
                <h3>{pick(item, "title")}</h3>
                <p>{pick(item, "text")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
