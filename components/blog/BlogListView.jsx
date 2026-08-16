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
              <div className="col-lg-4 col-md-6 mb-4" key={post.slug}>
                <article className="article-card h-100">
                  <div className="article-card__media">
                    <Link href={`/blog/${post.slug}/`}>
                      <img src={post.image} alt={pick(post, "title")} />
                    </Link>
                    <span className="article-card__cat">{pick(post, "category")}</span>
                  </div>
                  <div className="article-card__body">
                    <h3>
                      <Link href={`/blog/${post.slug}/`}>{pick(post, "title")}</Link>
                    </h3>
                    <p>{pick(post, "excerpt")}</p>
                    <Link href={`/blog/${post.slug}/`} className="blog-btn">
                      {t(uiLabels, "readMore")}
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
