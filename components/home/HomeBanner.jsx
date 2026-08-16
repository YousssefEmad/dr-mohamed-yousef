"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { doctor } from "@/data/doctor";

const slides = [
  {
    image: "/assets/images/banner.png",
    tagAr: "استشاري طب وجراحة العيون",
    tagEn: "Consultant of Ophthalmology",
    titleAr: "د. محمد يوسف",
    titleEn: "Dr. Mohamed Yousef",
    textAr: doctor.bioAr,
    textEn: doctor.bioEn,
  },
  {
    image: "/assets/images/banner-2.png",
    tagAr: "رؤية أوضح... وحياة أفضل",
    tagEn: "Clearer vision... a better life",
    titleAr: "رعاية متخصصة بأحدث تقنيات طب العيون",
    titleEn: "Specialized care with the latest eye-care technology",
    textAr:
      "نؤمن بأن كل رحلة علاج تبدأ بتشخيص دقيق، وخطة علاج تناسب احتياجات كل مريض.",
    textEn:
      "Every treatment journey starts with an accurate diagnosis and a plan tailored to each patient.",
  },
];

export default function HomeBanner() {
  const { pick } = useLanguage();
  return (
    <div className="banner-slides">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="mySwiper-slider"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.image}>
            <img src={slide.image} alt="" />
            <div className="banner-content">
              <span>{pick(slide, "tag")}</span>
              <h1>{pick(slide, "title")}</h1>
              <p>{pick(slide, "text")}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
