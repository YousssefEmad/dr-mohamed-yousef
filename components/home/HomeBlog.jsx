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
          {posts.slice(0, 2).map((post, index) => (
            <div className="col-lg-6 col-md-6" key={post.slug}>
              <div className="single-blog row">
                <div className="col-lg-6 col-12">
                  <div className="blog-image">
                    <Link href={`/blog/${post.slug}/`}>
                      <img src={post.image} alt={pick(post, "title")} />
                    </Link>
                    <div className="tag">{String(index + 1).padStart(2, "0")}</div>
                    <div className="tag-two">
                      <Link href={`/blog/${post.slug}/`}>{pick(post, "category")}</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="blog-content">
                    <h3>
                      <Link href={`/blog/${post.slug}/`}>{pick(post, "title")}</Link>
                    </h3>
                    <p>{pick(post, "excerpt")}</p>
                    <Link href={`/blog/${post.slug}/`} className="blog-btn">
                      {t(uiLabels, "readMore")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
