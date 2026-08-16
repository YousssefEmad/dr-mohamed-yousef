"use client";

import { useSiteConfig } from "@/context/SiteContext";
import { whatsappHref } from "@/lib/helpers";

export default function FloatingCTA() {
  const site = useSiteConfig();
  return (
    <ul className="wrapper">
      <li className="icon call">
        <span>
          <a href={`tel:${site.phone}`} aria-label="Call">
            <i className="bx bx-phone" />
          </a>
        </span>
      </li>
      <li className="icon whatsapp">
        <span>
          <a href={whatsappHref(site)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i className="bx bxl-whatsapp" />
          </a>
        </span>
      </li>
    </ul>
  );
}
