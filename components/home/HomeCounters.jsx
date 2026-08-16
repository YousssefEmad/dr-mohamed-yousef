"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function HomeCounters({ stats = [] }) {
  const { pick } = useLanguage();

  if (!stats.length) return null;

  return (
    <div className="aboutsection-2">
      <div className="vision-counter">
        {stats.map((item) => (
          <div className="counter-item" key={item.labelAr}>
            <h3>{item.value}</h3>
            <p>{pick(item, "label")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
