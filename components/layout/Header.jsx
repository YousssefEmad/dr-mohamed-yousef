"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { useSiteConfig } from "@/context/SiteContext";
import { navigation } from "@/data/navigation";
import LanguageSwitcher from "@/components/shared/LanguageSwitcher";
import SocialLinks from "@/components/shared/SocialLinks";

export default function Header({ services = [] }) {
  const { pick } = useLanguage();
  const site = useSiteConfig();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const items = navigation.map((item) => {
    if (item.childrenKey === "services") {
      return {
        ...item,
        children: services.map((s) => ({
          href: `/services/${s.slug}/`,
          labelAr: s.titleAr,
          labelEn: s.titleEn,
        })),
      };
    }
    return item;
  });

  return (
    <header className="header-area grin-care-header">
      <div className="navbar-area grin-care-navbar">
        <div className="main-responsive-nav">
          <div className="container">
            <div className="d-flex g-0 align-items-center justify-content-between">
              <button
                className="mobile-menu-btn d-lg-none"
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Menu"
              >
                <span />
                <span />
                <span />
              </button>
              <div className="logo">
                <Link href="/">
                  <img src={site.logo} alt={pick(site, "name")} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="main-navbar">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link className="navbar-brand" href="/">
                <img src={site.logo} alt={pick(site, "name")} />
              </Link>
              <div className="collapse navbar-collapse mean-menu show">
                <ul className="navbar-nav">
                  {items.map((item) => (
                    <li className="nav-item" key={item.id}>
                      <Link href={item.href} className="nav-link">
                        {pick(item, "label")}
                        {item.children ? <i className="bx bx-caret-down" /> : null}
                      </Link>
                      {item.children ? (
                        <ul className="dropdown-menu">
                          {item.children.map((child) => (
                            <li className="nav-item" key={child.href}>
                              <Link href={child.href} className="nav-link">
                                {pick(child, "label")}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="soail-contact-header d-flex align-items-center gap-2">
                <LanguageSwitcher />
                <SocialLinks site={site} className="header-social-list" compact />
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div
        className={`mobile-overlay${mobileOpen ? " active" : ""}`}
        onClick={() => setMobileOpen(false)}
      />
      <div className={`mobile-menu${mobileOpen ? " active" : ""}`}>
        <div className="mobile-menu-header">
          <Link href="/" className="mobile-logo">
            <img src={site.logo} alt="" />
          </Link>
          <LanguageSwitcher className="lang-switch-btn mobile-lang-switch" />
          <button className="close-menu" type="button" onClick={() => setMobileOpen(false)}>
            &times;
          </button>
        </div>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <Link href={item.href}>{pick(item, "label")}</Link>
              {item.children
                ? item.children.map((child) => (
                    <Link key={child.href} href={child.href} style={{ display: "block", paddingInlineStart: 16 }}>
                      {pick(child, "label")}
                    </Link>
                  ))
                : null}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
