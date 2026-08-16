"use client";

import HomeBanner from "@/components/home/HomeBanner";
import HomeAbout from "@/components/home/HomeAbout";
import HomeVision from "@/components/home/HomeVision";
import HomeSpecialties from "@/components/home/HomeSpecialties";
import HomeCounters from "@/components/home/HomeCounters";
import HomeServices from "@/components/home/HomeServices";
import HomeCases from "@/components/home/HomeCases";
import HomeContact from "@/components/home/HomeContact";
import HomeBlog from "@/components/home/HomeBlog";

export default function HomePageView({
  about,
  doctor,
  specialties,
  stats,
  services,
  posts,
  galleryItems,
}) {
  return (
    <>
      <HomeBanner />
      <HomeAbout about={about} doctor={doctor} />
      <HomeVision />
      <HomeSpecialties specialties={specialties} doctor={doctor} />
      <HomeCounters stats={stats} />
      <HomeServices services={services} />
      <HomeCases items={galleryItems} />
      <HomeContact />
      <HomeBlog posts={posts} />
    </>
  );
}
