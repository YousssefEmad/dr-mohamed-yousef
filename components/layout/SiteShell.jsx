"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";

export default function SiteShell({ children, services = [] }) {
  return (
    <>
      <Header services={services} />
      <main>{children}</main>
      <Footer services={services} />
      <FloatingCTA />
    </>
  );
}
