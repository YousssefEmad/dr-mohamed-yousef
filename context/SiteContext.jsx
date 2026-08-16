"use client";

import { createContext, useContext } from "react";
import { siteConfig as localSite } from "@/data/site";

const SiteContext = createContext(localSite);

export function SiteProvider({ children, siteConfig }) {
  return (
    <SiteContext.Provider value={siteConfig || localSite}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSiteConfig() {
  return useContext(SiteContext);
}
