"use client";

import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";
import { uiLabels } from "@/data/navigation";

export default function BlogListView({ posts = [] }) {
  const { pick, t } = useLanguage();
  return (
    <>
      <Breadcrumb titleAr="المقالات الطبية" titleEn="Medical Blog" />
      <section className="blog-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            {posts.map((post) => (
              <div className="col-lg-6" key={post.slug}>
                <div className="single-blog mb-4">
                  <Link href={`/blog/${post.slug}/`}>
                    <img src={post.image} alt={pick(post, "title")} />
                  </Link>
                  <h3>
                    <Link href={`/blog/${post.slug}/`}>{pick(post, "title")}</Link>
                  </h3>
                  <p>{pick(post, "excerpt")}</p>
                  <Link href={`/blog/${post.slug}/`} className="blog-btn">
                    {t(uiLabels, "readMore")}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
