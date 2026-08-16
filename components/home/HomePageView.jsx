"use client";

import HomeBanner from "@/components/home/HomeBanner";
import HomeAbout from "@/components/home/HomeAbout";
import HomeSpecialties from "@/components/home/HomeSpecialties";
import HomeCounters from "@/components/home/HomeCounters";
import HomeServices from "@/components/home/HomeServices";
import HomeContact from "@/components/home/HomeContact";
import HomeBlog from "@/components/home/HomeBlog";

export default function HomePageView({
  about,
  doctor,
  specialties,
  stats,
  services,
  posts,
}) {
  return (
    <>
      <HomeBanner />
      <HomeAbout about={about} doctor={doctor} />
      <HomeSpecialties specialties={specialties} doctor={doctor} />
      <HomeCounters stats={stats} />
      <HomeServices services={services} />
      <HomeContact />
      <HomeBlog posts={posts} />
    </>
  );
}
