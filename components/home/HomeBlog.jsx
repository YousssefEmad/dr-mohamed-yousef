"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { homeSections, uiLabels } from "@/data/navigation";

export default function HomeBlog({ posts = [] }) {
  const { pick, t } = useLanguage();

  return (
    <section className="blog-area pt-100 pb-70">
      <div className="container">
        <div className="section-title-warp text-center">
          <span className="sub-title">
            <i className="flaticon-hashtag-symbol" />
            {pick(homeSections, "blogTag")}
          </span>
          <h2>{pick(homeSections, "blogHeading")}</h2>
        </div>
        <div className="row">
          {posts.slice(0, 3).map((post, index) => (
            <div className="col-lg-4 col-md-6" key={post.slug}>
              <article className="article-card">
                <div className="article-card__media">
                  <Link href={`/blog/${post.slug}/`}>
                    <img src={post.image} alt={pick(post, "title")} />
                  </Link>
                  <span className="article-card__num">{String(index + 1).padStart(2, "0")}</span>
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
        <div className="text-center mt-3">
          <Link href="/blog/" className="default-btn">
            {t(uiLabels, "viewMore")}
          </Link>
        </div>
      </div>
    </section>
  );
}
