"use client";

import { useLanguage } from "@/context/LanguageContext";
import { visionBlock } from "@/data/pages";

export default function HomeVision() {
  const { pick } = useLanguage();
  return (
    <section className="pb-70">
      <div className="container">
        <div className="vision-card">
          <span># {pick(visionBlock, "tag")}</span>
          <p>{pick(visionBlock, "text")}</p>
        </div>
      </div>
    </section>
  );
}
