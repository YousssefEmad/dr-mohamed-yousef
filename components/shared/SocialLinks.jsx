"use client";

import { whatsappHref } from "@/lib/helpers";

export default function SocialLinks({ site, className = "social-links", compact = false }) {
  const social = site?.social || {};
  const all = [
    social.facebook && { href: social.facebook, icon: "bx bxl-facebook", label: "Facebook" },
    social.instagram && { href: social.instagram, icon: "bx bxl-instagram", label: "Instagram" },
    social.tiktok && { href: social.tiktok, icon: "bx bxl-tiktok", label: "TikTok" },
    social.snapchat && { href: social.snapchat, icon: "bx bxl-snapchat", label: "Snapchat" },
    { href: whatsappHref(site), icon: "bx bxl-whatsapp", label: "WhatsApp" },
  ].filter(Boolean);
  const items = compact
    ? all.filter((item) => item.label === "Facebook" || item.label === "WhatsApp")
    : all;

  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item.label}>
          <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
            <i className={item.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}
