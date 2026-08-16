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
          <div className="blog-detail-cover mb-4">
            <img src={post.image} alt={pick(post, "title")} />
          </div>
          <h1>{pick(post, "title")}</h1>
          <div dangerouslySetInnerHTML={{ __html: pick(post, "content") }} />
        </div>
      </section>
    </>
  );
}
