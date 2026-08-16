"use client";

import { getFacebookReelEmbedSrc } from "@/lib/facebookVideo";

export default function FacebookReelCard({ url, title }) {
  const embedSrc = getFacebookReelEmbedSrc(url);
  if (!embedSrc) return null;

  return (
    <article className="reel-card">
      <div className="reel-card__frame">
        <iframe
          src={embedSrc}
          title={title}
          loading="lazy"
          scrolling="no"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </article>
  );
}
