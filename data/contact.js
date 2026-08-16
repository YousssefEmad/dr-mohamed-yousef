const facebookVideos = [
  "https://www.facebook.com/reel/959007936052850/",
  "https://www.facebook.com/reel/2016526145525098/",
  "https://www.facebook.com/reel/1435430110963693/",
  "https://www.facebook.com/reel/1225106965799798/",
  "https://www.facebook.com/reel/708345368358435/",
  "https://www.facebook.com/reel/1856263015155844/",
  "https://www.facebook.com/reel/1256863696117337/",
  "https://www.facebook.com/reel/24019602314338675/",
  "https://www.facebook.com/reel/1449288959590072/",
  "https://www.facebook.com/reel/2470718953313502/",
  "https://www.facebook.com/reel/1092232419435792/",
  "https://www.facebook.com/reel/1041735098106727/",
  "https://www.facebook.com/reel/1692147418220903/",
  "https://www.facebook.com/reel/1445568246759534/",
  "https://www.facebook.com/reel/1856550265240541/",
  "https://www.facebook.com/reel/1125208649533731/",
  "https://www.facebook.com/reel/3765596420412365/",
  "https://www.facebook.com/reel/1497751404499882/",
  "https://www.facebook.com/reel/24395197533514392/",
  "https://www.facebook.com/reel/825619826605656/",
  "https://www.facebook.com/reel/1252729726535645/",
  "https://www.facebook.com/reel/1781103462542222/",
  "https://www.facebook.com/reel/1916741012592233/",
  "https://www.facebook.com/reel/1412539430385392/",
  "https://www.facebook.com/reel/1365835807939159/",
  "https://www.facebook.com/reel/1355815305837273/",
  "https://www.facebook.com/reel/1423103079401892/",
  "https://www.facebook.com/reel/1538498784945382/",
  "https://www.facebook.com/reel/1244326464283706/",
  "https://www.facebook.com/reel/2451883161913136/",
  "https://www.facebook.com/reel/25927399860233330/",
  "https://www.facebook.com/reel/1983805202534055/",
  "https://www.facebook.com/reel/1497488625234421/",
  "https://www.facebook.com/reel/2760433770987547/",
  "https://www.facebook.com/reel/2466442693775534/",
  "https://www.facebook.com/reel/2040133659878958/",
  "https://www.facebook.com/reel/26558986400429271/",
  "https://www.facebook.com/reel/4404144156524649/",
  "https://www.facebook.com/reel/825232860540048/",
  "https://www.facebook.com/reel/1553914356187254/",
  "https://www.facebook.com/reel/912610691821601/",
  "https://www.facebook.com/reel/953821404065349/",
  "https://www.facebook.com/reel/913431248252257/",
  "https://www.facebook.com/Dr.Mohamed.Youssef.Ophthalmologist/videos/1415412136729507/",
];

const posters = [
  "/assets/images/gallary-1.jpg",
  "/assets/images/gallary-2.jpg",
  "/assets/images/gallary-3.jpg",
  "/assets/images/gallary-4.jpg",
];

export const videoItems = facebookVideos.map((url, index) => ({
  id: String(index + 1),
  titleAr: `حالة ${index + 1}`,
  titleEn: `Case ${index + 1}`,
  url,
  poster: posters[index % posters.length],
  serviceSlug: "",
}));

export const videosPage = {
  titleAr: "فيديوهات حالات العيادة",
  titleEn: "Clinic Case Videos",
  subtitleAr: "نتائج حقيقية لمرضى د. محمد يوسف — شاهد المزيد على قنوات العيادة",
  subtitleEn: "Real results for Dr. Mohamed Youssef’s patients — watch more on the clinic channels",
  headingAr: "عرض حالات للدكتور محمد يوسف",
  headingEn: "Case videos of Dr. Mohamed Youssef",
  seo: {
    titleAr: "فيديوهات حالات تجميل الجفون | د. محمد يوسف",
    titleEn: "Eyelid Surgery Case Videos | Dr. Mohamed Youssef",
    descriptionAr:
      "فيديوهات حالات حقيقية لتجميل الجفون وتصحيح الإبصار والمياه البيضاء في عيادة د. محمد يوسف بالإسكندرية.",
    descriptionEn:
      "Real case videos of eyelid surgery, vision correction and cataract at Dr. Mohamed Youssef clinic.",
    keywordsAr: ["تجميل الجفون", "حالات قبل وبعد", "أفضل جراح تجميل جفون"],
    keywordsEn: ["eyelid surgery cases", "before after"],
  },
};

export const contactPage = {
  titleAr: "تواصل معنا",
  titleEn: "Contact Us",
  headingAr: "تواصل مع د. محمد يوسف لحجز موعدك أو للاستفسار عن حالتك",
  headingEn: "Contact Dr. Mohamed Youssef to book or ask about your case",
  formTitleAr: "احجز موعدك",
  formTitleEn: "Book an appointment",
  introAr:
    "العيادة جاهزة للرد على استفساراتك وتقديم رعاية متخصصة لصحة عينيك. تواصل عبر الهاتف أو النموذج.",
  introEn:
    "The clinic is ready to answer your questions and provide specialized eye care. Call or use the form.",
  successAr: "تم استلام رسالتك بنجاح. سنتواصل معك قريبًا.",
  successEn: "Your message was received. We will contact you soon.",
  errorAr: "حدث خطأ. يرجى المحاولة مرة أخرى.",
  errorEn: "Something went wrong. Please try again.",
  seo: {
    titleAr: "حجز موعد | أفضل دكتور عيون في الإسكندرية",
    titleEn: "Book an Appointment | Best Eye Doctor in Alexandria",
    descriptionAr:
      "تواصل مع عيادة د. محمد يوسف في الإبراهيمية، الإسكندرية لحجز موعد تجميل الجفون أو المياه البيضاء أو عدسات ICL.",
    descriptionEn:
      "Contact Dr. Mohamed Youssef clinic in Ibrahimia, Alexandria to book eyelid, cataract or ICL care.",
    keywordsAr: ["حجز موعد دكتور عيون", "أفضل دكتور عيون", "عيادة عيون الإسكندرية"],
    keywordsEn: ["book eye doctor", "Alexandria eye clinic"],
  },
};
