"use client";

import Breadcrumb from "@/components/layout/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";

export default function BlogDetailView({ post }) {
  const { pick } = useLanguage();
  return (
    <>
      <Breadcrumb titleAr={post.titleAr} titleEn={post.titleEn} />
      <section className="ptb-100">
        <div className="container">
          <img src={post.image} alt={pick(post, "title")} className="mb-4 w-100" />
          <h1>{pick(post, "title")}</h1>
          <div dangerouslySetInnerHTML={{ __html: pick(post, "content") }} />
        </div>
      </section>
    </>
  );
}
