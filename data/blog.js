function article(html) {
  return html.trim();
}

export const blogPosts = [
  {
    id: "1",
    slug: "eyelid-surgery-cosmetic-or-medical",
    titleAr: "هل عملية تجميل الجفون تجميلية فقط؟ أم قد تكون ضرورية لتحسين الرؤية؟",
    titleEn: "Is eyelid surgery only cosmetic, or can it improve vision?",
    excerptAr:
      "كثير يعتقد أن تجميل الجفون للمظهر فقط. الحقيقة أن ارتخاء الجفن قد يضيق مجال الرؤية، فتصبح الجراحة جزءًا من العلاج.",
    excerptEn:
      "Many think eyelid surgery is only cosmetic. Drooping lids can narrow the visual field, so surgery can be medical.",
    image: "/assets/images/blog.jpg",
    date: "2026-08-01",
    dateDisplayAr: "1 أغسطس 2026",
    dateDisplayEn: "1 August 2026",
    categoryAr: "تجميل الجفون",
    categoryEn: "Eyelid surgery",
    authorAr: "د. محمد يوسف",
    authorEn: "Dr. Mohamed Youssef",
    relatedSlugs: ["what-is-ptosis", "eyelid-surgery-candidates"],
    seo: {
      titleAr: "هل تجميل الجفون تجميلي فقط؟ | دكتور تجميل الجفون",
      titleEn: "Is eyelid surgery only cosmetic?",
      descriptionAr: "متى تكون جراحة تجميل الجفون علاجية لتحسين مجال الرؤية وليس للمظهر فقط.",
      descriptionEn: "When eyelid surgery is medical, not only cosmetic.",
      keywordsAr: ["دكتور تجميل الجفون", "أفضل جراح تجميل جفون", "ارتخاء الجفون"],
      keywordsEn: ["eyelid surgery", "ptosis"],
    },
    contentAr: article(`
<p>يعتقد كثير من الناس أن جراحات تجميل الجفون تُجرى لتحسين المظهر فقط. لكن هذا الاعتقاد ليس دقيقًا في جميع الحالات.</p>
<p>ففي بعض المرضى يؤدي ارتخاء الجفون أو زيادة الجلد في الجفن العلوي إلى التأثير على مجال الرؤية والشعور بثقل في العين وصعوبة في أداء الأنشطة اليومية. وهنا تصبح الجراحة جزءًا من العلاج وليست مجرد إجراء تجميلي.</p>
<h2>متى تكون جراحة الجفون علاجية؟</h2>
<p>قد يوصي الطبيب بإجراء جراحة الجفون إذا تسبب الارتخاء في:</p>
<ul>
<li>تضييق مجال الرؤية، خاصة في الجزء العلوي</li>
<li>الشعور بثقل مستمر في الجفون</li>
<li>الحاجة إلى رفع الحاجبين باستمرار لتحسين الرؤية</li>
<li>صعوبة القراءة أو القيادة أو ممارسة الأنشطة اليومية</li>
</ul>
<h2>ومتى يكون الهدف تجميليًا؟</h2>
<p>قد يلجأ بعض الأشخاص إلى جراحة الجفون لتحسين مظهر العين والتخلص من الجلد الزائد حول العين وانتفاخات الجفون وعلامات التقدم في العمر. وفي هذه الحالات تهدف الجراحة إلى مظهر أكثر راحة وطبيعية مع الحفاظ على تناسق ملامح الوجه.</p>
<h2>كيف يحدد الطبيب الحاجة إلى العملية؟</h2>
<p>لا توجد إجابة واحدة تناسب الجميع. يعتمد القرار على فحص دقيق للجفون وتقييم تأثيرها على الرؤية، إلى جانب مناقشة توقعات المريض والنتيجة المرجوة. لذلك فإن التشخيص الصحيح هو الخطوة الأهم قبل اتخاذ أي قرار.</p>
<p>إذا كنت تعاني من ارتخاء الجفون أو تشعر أن الجفن يؤثر على رؤيتك، يمكنك حجز موعد مع د. محمد يوسف لإجراء تقييم شامل واختيار العلاج الأنسب لحالتك.</p>
`),
    contentEn: article(`<p>Eyelid surgery is not always cosmetic. Drooping lids can narrow the visual field and make daily tasks harder. A precise exam decides whether the goal is medical, cosmetic, or both.</p>`),
  },
  {
    id: "2",
    slug: "what-is-ptosis",
    titleAr: "ما هو ارتخاء الجفون؟ وكيف يؤثر على الرؤية؟",
    titleEn: "What is drooping eyelids (ptosis) and how does it affect vision?",
    excerptAr:
      "ارتخاء الجفون انخفاض في موضع الجفن العلوي أو زيادة الجلد المحيط به. درجته تختلف من شخص لآخر، وفي الحالات المتقدمة قد يضيق مجال الرؤية.",
    excerptEn:
      "Ptosis is a drop of the upper lid or extra skin around it. In advanced cases it can narrow the visual field.",
    image: "/assets/images/blog-2.jpg",
    date: "2026-07-28",
    dateDisplayAr: "28 يوليو 2026",
    dateDisplayEn: "28 July 2026",
    categoryAr: "تجميل الجفون",
    categoryEn: "Eyelid surgery",
    authorAr: "د. محمد يوسف",
    authorEn: "Dr. Mohamed Youssef",
    relatedSlugs: ["eyelid-surgery-cosmetic-or-medical", "eyelid-surgery-candidates"],
    seo: {
      titleAr: "ما هو ارتخاء الجفون؟ | دكتور تجميل الجفون",
      titleEn: "What is ptosis?",
      descriptionAr: "تعريف ارتخاء الجفون وتأثيره على الرؤية ومتى يصبح العلاج ضروريًا.",
      descriptionEn: "What ptosis is, how it affects vision, and when treatment is needed.",
      keywordsAr: ["ارتخاء الجفون", "دكتور تجميل الجفون"],
      keywordsEn: ["ptosis", "droopy eyelids"],
    },
    contentAr: article(`
<p>ارتخاء الجفون هو انخفاض في موضع الجفن العلوي أو زيادة في الجلد المحيط به. وقد يحدث نتيجة التقدم في العمر أو لأسباب خلقية أو بعض المشكلات الصحية. لذلك تختلف درجة الارتخاء من شخص لآخر، وتختلف طريقة العلاج وفقًا لكل حالة.</p>
<h2>كيف يؤثر ارتخاء الجفون على الرؤية؟</h2>
<p>في الحالات المتقدمة قد يؤدي ارتخاء الجفن إلى:</p>
<ul>
<li>تقليل مجال الرؤية العلوية</li>
<li>الشعور بثقل في العينين</li>
<li>رفع الحاجبين باستمرار لتحسين الرؤية</li>
<li>صعوبة القراءة أو القيادة أو بعض الأنشطة اليومية</li>
<li>إجهاد العين نتيجة محاولة تعويض ضعف مجال الرؤية</li>
</ul>
<h2>متى يكون العلاج ضروريًا؟</h2>
<p>إذا أثبت الفحص أن ارتخاء الجفن يؤثر على الرؤية أو يسبب صعوبة في ممارسة الأنشطة اليومية، قد يوصي الطبيب بإجراء جراحة لتصحيح المشكلة واستعادة وظيفة الجفن بشكل طبيعي. أما إذا اقتصر التأثير على المظهر فقط فيتم مناقشة الخيارات المناسبة وفقًا لرغبة المريض وحالته.</p>
<p>التشخيص يعتمد على فحص شامل للجفون والعين مع تقييم مجال الرؤية ودرجة الارتخاء. ليس كل ارتخاء يؤثر على الرؤية في جميع الحالات، لكنه قد يسبب تضييقًا في مجال الرؤية لدى بعض المرضى مع زيادة الدرجة.</p>
<p>إذا كنت تشعر أن ارتخاء الجفون يؤثر على رؤيتك أو يسبب لك صعوبة، احجز موعدًا مع د. محمد يوسف لتحديد أفضل خطة علاج تناسب حالتك.</p>
`),
    contentEn: article(`<p>Ptosis is a dropped upper lid or extra skin. Advanced cases can shrink the upper visual field and tire the eyes. Treatment depends on a full exam, not appearance alone.</p>`),
  },
  {
    id: "3",
    slug: "eyelid-surgery-candidates",
    titleAr: "من هم المرشحون لعملية تجميل الجفون؟",
    titleEn: "Who is a candidate for eyelid surgery?",
    excerptAr:
      "ليست كل حالات ارتخاء الجفون أو الانتفاخات تحتاج إلى جراحة. القرار لا يعتمد على العمر فقط، بل على تقييم طبي دقيق لتأثير الحالة على الرؤية أو المظهر.",
    excerptEn:
      "Not every droopy or puffy lid needs surgery. Age alone does not decide. A medical exam of vision and appearance does.",
    image: "/assets/images/blog-3.jpg",
    date: "2026-07-20",
    dateDisplayAr: "20 يوليو 2026",
    dateDisplayEn: "20 July 2026",
    categoryAr: "تجميل الجفون",
    categoryEn: "Eyelid surgery",
    authorAr: "د. محمد يوسف",
    authorEn: "Dr. Mohamed Youssef",
    relatedSlugs: ["eyelid-surgery-cosmetic-or-medical", "what-is-ptosis"],
    seo: {
      titleAr: "المرشحون لعملية تجميل الجفون | أفضل جراح تجميل جفون",
      titleEn: "Eyelid surgery candidates",
      descriptionAr: "متى تكون عملية تجميل الجفون مناسبة ومن الذي لا تناسبُه الجراحة.",
      descriptionEn: "When eyelid surgery is suitable and when it is not.",
      keywordsAr: ["أفضل جراح تجميل جفون", "عملية تجميل الجفون"],
      keywordsEn: ["eyelid surgery candidates"],
    },
    contentAr: article(`
<p>ليست كل حالات ارتخاء الجفون أو الانتفاخات حول العين تحتاج إلى جراحة. كما أن قرار إجراء العملية لا يعتمد على العمر فقط، بل على تقييم طبي دقيق يحدد مدى تأثير الحالة على الرؤية أو المظهر.</p>
<h2>متى تكون العملية مناسبة؟</h2>
<p>قد تكون خيارًا مناسبًا إذا كنت تعاني من:</p>
<ul>
<li>ارتخاء في الجفن العلوي يؤثر على مجال الرؤية</li>
<li>زيادة في الجلد حول العين تعطي مظهرًا مرهقًا أو متقدمًا في العمر</li>
<li>انتفاخات دائمة في الجفون نتيجة تجمع الدهون</li>
<li>عدم تناسق واضح في شكل الجفون</li>
<li>شعور بثقل في الجفن يؤثر على الأنشطة اليومية</li>
</ul>
<h2>هل العمر هو العامل الأساسي؟</h2>
<p>العمر وحده لا يحدد الحاجة إلى العملية. قد يحتاج إليها بعض الأشخاص في سن مبكرة بسبب عوامل وراثية أو مشكلات خلقية، بينما تظهر الحاجة مع التقدم في العمر نتيجة ارتخاء الجلد والأنسجة.</p>
<h2>كيف يحدد الطبيب الملاءمة؟</h2>
<p>يعتمد القرار على درجة ارتخاء الجفون، وتأثير الحالة على الرؤية، وجودة الجلد والأنسجة المحيطة، والتاريخ المرضي والحالة الصحية العامة، وتوقعات المريض من العملية.</p>
<p>في بعض الحالات قد يرى الطبيب أن الجراحة ليست الحل الأفضل في الوقت الحالي، أو أن المريض يحتاج إلى علاج مشكلة أخرى أولًا. لذلك لا يمكن الاعتماد على المظهر وحده لتحديد مدى الحاجة.</p>
<p>إذا كنت تتساءل إن كنت مرشحًا مناسبًا، احجز تقييمًا شاملًا مع د. محمد يوسف.</p>
`),
    contentEn: article(`<p>Not every lid issue needs surgery. Suitability depends on visual field, skin quality, health, and expectations — not age alone.</p>`),
  },
  {
    id: "4",
    slug: "laser-vision-correction-candidate",
    titleAr: "هل أنا مناسب لعملية تصحيح الإبصار بالليزر؟",
    titleEn: "Am I a candidate for laser vision correction?",
    excerptAr:
      "عمليات تصحيح الإبصار بالليزر من أكثر الحلول شيوعًا للتخلص من النظارات، لكن هذا لا يعني أنها تناسب جميع الأشخاص. النجاح يبدأ بفحص دقيق.",
    excerptEn:
      "Laser is a common way to reduce glasses, but it does not suit everyone. Success starts with a precise exam.",
    image: "/assets/images/blog.jpg",
    date: "2026-07-12",
    dateDisplayAr: "12 يوليو 2026",
    dateDisplayEn: "12 July 2026",
    categoryAr: "تصحيح الإبصار",
    categoryEn: "Vision correction",
    authorAr: "د. محمد يوسف",
    authorEn: "Dr. Mohamed Youssef",
    relatedSlugs: ["does-vision-return-after-lasik", "what-is-icl"],
    seo: {
      titleAr: "هل أنا مناسب لتصحيح الإبصار بالليزر؟ | أفضل دكتور عيون",
      titleEn: "Am I suitable for LASIK?",
      descriptionAr: "شروط المرشحين لتصحيح الإبصار بالليزر والفحوصات التي تسبق العملية.",
      descriptionEn: "Who is a candidate for laser vision correction and which tests come first.",
      keywordsAr: ["تصحيح الإبصار بالليزر", "أفضل دكتور عيون", "ليزك"],
      keywordsEn: ["LASIK candidate", "laser vision correction"],
    },
    contentAr: article(`
<p>أصبحت عمليات تصحيح الإبصار بالليزر من أكثر الحلول شيوعًا للتخلص من النظارات والعدسات اللاصقة، لكن هذا لا يعني أنها تناسب جميع الأشخاص. فالنجاح الحقيقي لا يعتمد على التقنية المستخدمة فقط، بل يبدأ أولًا بالتأكد من أن حالتك مناسبة لهذا النوع من الإجراءات من خلال فحص شامل وتقييم دقيق للعين.</p>
<h2>من هم المرشحون؟</h2>
<p>قد تكون العملية مناسبة إذا كنت:</p>
<ul>
<li>تعاني من قصر النظر أو طول النظر أو الاستجماتيزم</li>
<li>تجاوزت 18 عامًا مع استقرار درجة ضعف النظر</li>
<li>تتمتع بسمك قرنية مناسب لإجراء العملية</li>
<li>لا تعاني من أمراض تؤثر على صحة القرنية أو الشبكية</li>
<li>تتمتع بصحة عامة جيدة ولا توجد موانع طبية</li>
</ul>
<p>ويظل القرار النهائي بعد الفحص الشامل الذي يحدد مدى ملاءمة الإجراء لحالتك.</p>
<h2>هل تناسب العملية جميع حالات ضعف النظر؟</h2>
<p>ليس بالضرورة. في بعض الحالات قد يرى الطبيب أن الليزر ليس الخيار الأنسب، ويقترح حلولًا أخرى مثل عدسات ICL أو وسائل علاج مختلفة حسب درجة ضعف النظر وحالة العين. لذلك لا توجد تقنية واحدة تناسب جميع المرضى.</p>
<h2>ما الفحوصات التي تسبق العملية؟</h2>
<ul>
<li>قياس درجة ضعف النظر</li>
<li>فحص سمك القرنية</li>
<li>رسم خرائط القرنية</li>
<li>قياس اتساع حدقة العين</li>
<li>فحص الشبكية والتأكد من سلامة العين</li>
</ul>
<p>نجاح العملية لا يبدأ داخل غرفة العمليات، بل يبدأ بالتشخيص الصحيح. احجز فحصًا شاملًا مع د. محمد يوسف لتحديد التقنية الأنسب لعينيك.</p>
`),
    contentEn: article(`<p>Laser is not for everyone. Age, stable prescription, corneal thickness and retinal health decide. Sometimes ICL is better.</p>`),
  },
  {
    id: "5",
    slug: "does-vision-return-after-lasik",
    titleAr: "هل يعود ضعف النظر بعد عملية الليزر؟",
    titleEn: "Can vision regress after laser surgery?",
    excerptAr:
      "في معظم الحالات تكون نتائج العملية مستقرة، لكن ذلك يعتمد على طبيعة العين واستقرار درجة ضعف النظر قبل الإجراء والالتزام بتعليمات الطبيب.",
    excerptEn:
      "Results are usually stable, depending on the eye, a stable prescription before surgery, and following instructions.",
    image: "/assets/images/blog-2.jpg",
    date: "2026-07-05",
    dateDisplayAr: "5 يوليو 2026",
    dateDisplayEn: "5 July 2026",
    categoryAr: "تصحيح الإبصار",
    categoryEn: "Vision correction",
    authorAr: "د. محمد يوسف",
    authorEn: "Dr. Mohamed Youssef",
    relatedSlugs: ["laser-vision-correction-candidate", "what-is-icl"],
    seo: {
      titleAr: "هل يعود ضعف النظر بعد الليزر؟",
      titleEn: "Does myopia return after LASIK?",
      descriptionAr: "استقرار نتائج تصحيح الإبصار بالليزر ومتى قد يحدث تغير بسيط في الرؤية.",
      descriptionEn: "How stable laser results are and when slight change can happen.",
      keywordsAr: ["تصحيح الإبصار بالليزر", "نتائج الليزك"],
      keywordsEn: ["LASIK results"],
    },
    contentAr: article(`
<p>هذا السؤال من أكثر الأسئلة التي يطرحها المرضى قبل اتخاذ قرار تصحيح الإبصار. والإجابة المختصرة: في معظم الحالات تكون نتائج العملية مستقرة، لكن ذلك يعتمد على طبيعة العين واستقرار درجة ضعف النظر قبل الإجراء والالتزام بتعليمات الطبيب بعد العملية.</p>
<p>تهدف العملية إلى تصحيح درجة ضعف النظر الموجودة وقت الإجراء، لذلك تحقق نتائج مستقرة لدى أغلب المرضى الذين تنطبق عليهم شروط العملية. لكن هذا لا يمنع حدوث تغيرات طبيعية في العين مع التقدم في العمر، سواء أُجريت العملية أم لا.</p>
<p>في بعض الحالات قد يحدث تغير بسيط في درجة الإبصار مثل إجراء العملية قبل استقرار ضعف النظر، أو تغيرات طبيعية مرتبطة بالعمر، أو حالات تستدعي متابعة إضافية مع الطبيب.</p>
<p>نسبة قليلة من المرضى قد تحتاج إلى إجراء تصحيحي بسيط إذا حدث تغير في درجة الإبصار بمرور الوقت، ويعتمد ذلك على تقييم الطبيب وحالة العين.</p>
<p>للمحافظة على أفضل نتيجة: الالتزام بقطرات العين حسب التعليمات، حضور مواعيد المتابعة، حماية العين خلال فترة التعافي، وإجراء فحص دوري للعين حتى بعد نجاح العملية.</p>
`),
    contentEn: article(`<p>Most laser results stay stable when the prescription was stable first. Aging can still change the eye later. Follow-up protects the outcome.</p>`),
  },
  {
    id: "6",
    slug: "what-is-icl",
    titleAr: "ما هي عدسات ICL وهل يمكن أن تكون بديلًا لعمليات الليزك؟",
    titleEn: "What are ICL lenses and can they replace LASIK?",
    excerptAr:
      "الليزك ليس الحل الوحيد. عدسات ICL تُزرع داخل العين لتصحيح ضعف الإبصار دون إزالة العدسة الطبيعية، وقد تناسب من لا يصلح لهم الليزر.",
    excerptEn:
      "LASIK is not the only option. ICL is implanted without removing the natural lens, and may suit those who cannot have laser.",
    image: "/assets/images/blog-3.jpg",
    date: "2026-06-28",
    dateDisplayAr: "28 يونيو 2026",
    dateDisplayEn: "28 June 2026",
    categoryAr: "عدسات ICL",
    categoryEn: "ICL",
    authorAr: "د. محمد يوسف",
    authorEn: "Dr. Mohamed Youssef",
    relatedSlugs: ["can-icl-be-removed", "laser-vision-correction-candidate"],
    seo: {
      titleAr: "زراعة عدسات ICL | بديل الليزك",
      titleEn: "ICL lenses | LASIK alternative",
      descriptionAr: "ما هي عدسات ICL ومتى تكون بديلًا مناسبًا لعمليات الليزك.",
      descriptionEn: "What ICL is and when it is a suitable LASIK alternative.",
      keywordsAr: ["زراعة عدسات ICL", "عدسات ICL", "بديل الليزك"],
      keywordsEn: ["ICL", "ICL vs LASIK"],
    },
    contentAr: article(`
<p>كثير من الأشخاص يعتقد أن الليزك هو الحل الوحيد للتخلص من النظارات أو العدسات اللاصقة. لكن بعض الحالات قد لا تكون مناسبة لعمليات الليزر، وهنا تظهر عدسات ICL كأحد الحلول الحديثة والفعالة لتصحيح الإبصار.</p>
<p>عدسات ICL عدسات طبية دقيقة تُزرع داخل العين لتصحيح ضعف الإبصار دون إزالة العدسة الطبيعية للعين. وتُستخدم لعلاج قصر النظر، وفي بعض الحالات طول النظر وحالات الاستجماتيزم. وتتميز بأنها تبقى داخل العين دون أن يشعر بها المريض مع الحفاظ على أنسجة القرنية.</p>
<h2>متى تكون عدسات ICL خيارًا مناسبًا؟</h2>
<ul>
<li>درجات قصر النظر المرتفعة</li>
<li>عدم ملاءمة سمك القرنية لعمليات الليزر</li>
<li>بعض الحالات التي لا تحقق فيها عمليات الليزك النتيجة المرجوة</li>
</ul>
<p>ويعتمد القرار دائمًا على نتائج الفحص الشامل للعين. يمكن اعتبارها بديلًا في بعض الحالات، لكن ليس لجميع المرضى. السؤال ليس «أيهما أفضل؟» بل «أيهما الأنسب لحالتي؟»</p>
<p>من أبرز المميزات: مناسبة لبعض المرضى غير المرشحين لليزر، لا تتطلب إزالة أي جزء من القرنية، وتوفر جودة رؤية ممتازة في الحالات المناسبة، ويمكن إزالة العدسة أو استبدالها إذا دعت الحاجة الطبية.</p>
<p>إذا كنت تفكر في التخلص من النظارة وترغب في معرفة إن كانت عدسات ICL مناسبة لحالتك، احجز تقييمًا شاملًا مع د. محمد يوسف.</p>
`),
    contentEn: article(`<p>ICL is an implant that keeps the natural lens. It often helps high myopia or thin corneas when LASIK is not suitable.</p>`),
  },
  {
    id: "7",
    slug: "can-icl-be-removed",
    titleAr: "هل يمكن إزالة عدسات ICL أو استبدالها؟",
    titleEn: "Can ICL lenses be removed or replaced?",
    excerptAr:
      "عدسات ICL صُممت بحيث يمكن للطبيب إزالتها أو استبدالها إذا دعت الحاجة الطبية. في أغلب الحالات لا يحتاج المرضى إلى إزالتها.",
    excerptEn:
      "ICL is designed so the doctor can remove or replace it if medically needed. Most patients never need removal.",
    image: "/assets/images/blog.jpg",
    date: "2026-06-20",
    dateDisplayAr: "20 يونيو 2026",
    dateDisplayEn: "20 June 2026",
    categoryAr: "عدسات ICL",
    categoryEn: "ICL",
    authorAr: "د. محمد يوسف",
    authorEn: "Dr. Mohamed Youssef",
    relatedSlugs: ["what-is-icl", "laser-vision-correction-candidate"],
    seo: {
      titleAr: "هل يمكن إزالة عدسات ICL؟",
      titleEn: "Can ICL be removed?",
      descriptionAr: "إمكانية إزالة أو استبدال عدسات ICL عند الحاجة الطبية.",
      descriptionEn: "When ICL lenses can be removed or replaced.",
      keywordsAr: ["زراعة عدسات ICL", "إزالة عدسات ICL"],
      keywordsEn: ["remove ICL"],
    },
    contentAr: article(`
<p>من أكثر الأسئلة التي يسألها المرضى قبل زراعة عدسات ICL: هل تفضل العدسة داخل العين مدى الحياة؟ وهل يمكن إزالتها إذا احتجت لذلك؟ الإجابة التي تطمئن الكثير: عدسات ICL صُممت بحيث يمكن للطبيب إزالتها أو استبدالها إذا دعت الحاجة الطبية.</p>
<p>من الطبيعي أن يشعر المريض بالقلق من أي إجراء يتم داخل العين. ومعرفة أن العدسة ليست إجراءً دائمًا غير قابل للتغيير يمنح كثيرًا من المرضى شعورًا أكبر بالاطمئنان قبل اتخاذ القرار.</p>
<p>في أغلب الحالات لا يحتاج المرضى إلى إزالة العدسة بعد زراعتها، خاصة عند اختيار الحالة المناسبة وإجراء الفحوصات الدقيقة قبل العملية. ومع ذلك تبقى إمكانية الإزالة أو الاستبدال من المزايا المهمة لهذه التقنية إذا استدعت الحالة ذلك.</p>
<p>قد يوصي الطبيب بذلك في حالات مثل الحاجة إلى تغيير مقاس العدسة، أو حدوث تغيرات تستدعي استبدالها، أو تطور تقنيات علاجية أو ظروف صحية تستوجب تدخلًا آخر. ويظل القرار الطبي مرتبطًا بتقييم حالة كل مريض على حدة.</p>
<p>عدسات ICL ليست خيارًا جامدًا لا يمكن تغييره، وهذا ما يجعلها خيارًا مرنًا وآمنًا للعديد من المرضى المناسبين لهذا النوع من تصحيح الإبصار.</p>
`),
    contentEn: article(`<p>ICL can be removed or replaced if medically needed. Most patients keep the lens. Follow-up remains part of long-term success.</p>`),
  },
  {
    id: "8",
    slug: "is-cataract-normal-aging",
    titleAr: "هل المياه البيضاء جزء طبيعي من التقدم في العمر؟ ومتى تحتاج إلى العلاج؟",
    titleEn: "Is cataract a normal part of aging, and when does it need treatment?",
    excerptAr:
      "المياه البيضاء غالبًا ترتبط بالتقدم في العمر، لكنها ليست جزءًا يجب التعايش معه. يمكن علاجها واستعادة الرؤية في كثير من الحالات.",
    excerptEn:
      "Cataract is often age-related, but it is not something you must live with. Treatment can restore vision in many cases.",
    image: "/assets/images/blog-2.jpg",
    date: "2026-06-12",
    dateDisplayAr: "12 يونيو 2026",
    dateDisplayEn: "12 June 2026",
    categoryAr: "المياه البيضاء",
    categoryEn: "Cataract",
    authorAr: "د. محمد يوسف",
    authorEn: "Dr. Mohamed Youssef",
    relatedSlugs: ["cataract-lens-types", "eyelid-surgery-cosmetic-or-medical"],
    seo: {
      titleAr: "دكتور مياه بيضاء | هل المياه البيضاء طبيعية مع العمر؟",
      titleEn: "Is cataract normal aging?",
      descriptionAr: "ما هي المياه البيضاء ومتى تحتاج إلى العلاج وهل يمكن علاجها بالقطرات.",
      descriptionEn: "What cataract is, when to treat it, and why drops cannot reverse it.",
      keywordsAr: ["دكتور مياه بيضاء", "المياه البيضاء", "جراحة المياه البيضاء"],
      keywordsEn: ["cataract doctor", "cataract treatment"],
    },
    contentAr: article(`
<p>عندما يبدأ النظر في التشوش تدريجيًا يعتقد كثير من الأشخاص أن السبب هو التقدم في العمر فقط، بينما قد يكون السبب الحقيقي هو الإصابة بالمياه البيضاء.</p>
<p>ورغم أن المياه البيضاء غالبًا ترتبط بالتقدم في العمر، فإنها ليست جزءًا طبيعيًا يجب التعايش معه، بل حالة يمكن علاجها واستعادة الرؤية بعدها في كثير من الحالات.</p>
<p>المياه البيضاء فقدان تدريجي لشفافية عدسة العين الطبيعية، مما يؤدي إلى مرور الضوء بصورة أقل وضوحًا، فيبدأ المريض بالشعور بتشوش في الرؤية مع مرور الوقت. وتتطور الحالة عادة بشكل تدريجي لذلك قد لا يلاحظها المريض في بدايتها.</p>
<p>التقدم في العمر هو السبب الأكثر شيوعًا، إلا أن المياه البيضاء قد تظهر أيضًا نتيجة الإصابة بمرض السكري، أو التعرض لإصابة في العين، أو استخدام بعض الأدوية لفترات طويلة، أو بعض الحالات الخلقية. لذلك لا يرتبط ظهورها بعمر معين فقط.</p>
<p>قرار العلاج لا يعتمد على عمر المريض وإنما على مدى تأثير المياه البيضاء على الرؤية والأنشطة اليومية. إذا بدأت تؤثر على القراءة أو القيادة أو ممارسة الحياة بشكل طبيعي فقد يكون الوقت مناسبًا لمناقشة خيارات العلاج مع الطبيب.</p>
<p>حتى الآن لا توجد قطرات أو أدوية تعيد عدسة العين إلى حالتها الطبيعية بعد الإصابة بالمياه البيضاء. ويظل العلاج الفعال هو إزالة العدسة المعتمة واستبدالها بعدسة صناعية مناسبة للحالة.</p>
<p>إذا كنت تلاحظ تشوشًا تدريجيًا أو أن النظارة لم تعد تمنحك الوضوح نفسه، قد يكون من المناسب إجراء فحص شامل للعين لتحديد السبب واختيار العلاج الأنسب.</p>
`),
    contentEn: article(`<p>Cataract is clouding of the natural lens. Drops cannot reverse it. Surgery replaces the cloudy lens when daily life is affected.</p>`),
  },
  {
    id: "9",
    slug: "cataract-lens-types",
    titleAr: "ما الفرق بين أنواع العدسات المستخدمة في عملية المياه البيضاء؟",
    titleEn: "What is the difference between cataract lens types?",
    excerptAr:
      "نجاح عملية المياه البيضاء لا يعتمد فقط على إزالة العدسة المعتمة، بل أيضًا على اختيار العدسة المناسبة لكل مريض. لا توجد عدسة واحدة تناسب الجميع.",
    excerptEn:
      "Cataract success is not only removing the cloudy lens. The right implant for each patient matters. No single lens fits everyone.",
    image: "/assets/images/blog-3.jpg",
    date: "2026-06-05",
    dateDisplayAr: "5 يونيو 2026",
    dateDisplayEn: "5 June 2026",
    categoryAr: "المياه البيضاء",
    categoryEn: "Cataract",
    authorAr: "د. محمد يوسف",
    authorEn: "Dr. Mohamed Youssef",
    relatedSlugs: ["is-cataract-normal-aging", "what-is-icl"],
    seo: {
      titleAr: "أنواع عدسات المياه البيضاء | دكتور مياه بيضاء",
      titleEn: "Cataract lens types",
      descriptionAr: "الفرق بين العدسات أحادية البؤرة ومتعددة البؤر وعدسات الاستجماتيزم في جراحة المياه البيضاء.",
      descriptionEn: "Monofocal, multifocal and toric lenses in cataract surgery.",
      keywordsAr: ["دكتور مياه بيضاء", "عدسات المياه البيضاء"],
      keywordsEn: ["cataract lenses", "multifocal IOL"],
    },
    contentAr: article(`
<p>نجاح عملية المياه البيضاء لا يعتمد فقط على إزالة العدسة المعتمة، بل يعتمد أيضًا على اختيار العدسة المناسبة لكل مريض. ومع وجود أنواع مختلفة من العدسات قد يتساءل الكثير: ما الفرق بينها؟ وهل هناك نوع أفضل من الآخر؟</p>
<p>الحقيقة أنه لا توجد عدسة واحدة تناسب جميع المرضى، وإنما يحدد الطبيب الخيار الأنسب بناءً على احتياجات كل حالة وأسلوب حياة المريض.</p>
<p>أثناء جراحة المياه البيضاء يتم إزالة العدسة الطبيعية التي فقدت شفافيتها ثم استبدالها بعدسة صناعية شفافة تساعد على استعادة وضوح الرؤية. وتظل هذه العدسة داخل العين بشكل دائم ولا يشعر بها المريض بعد العملية.</p>
<h2>أبرز أنواع العدسات</h2>
<p><strong>العدسات أحادية البؤرة (Monofocal):</strong> تساعد على توفير رؤية واضحة لمسافة واحدة، وغالبًا ما يحتاج المريض إلى نظارة لبعض الأنشطة مثل القراءة أو استخدام الهاتف.</p>
<p><strong>العدسات متعددة البؤر (Multifocal):</strong> توفر رؤية لمسافات مختلفة وقد تقلل الاعتماد على النظارات في بعض الأنشطة اليومية، لكنها ليست مناسبة لجميع المرضى.</p>
<p><strong>العدسات المخصصة للاستجماتيزم (Toric):</strong> تُستخدم في بعض الحالات التي تعاني من الاستجماتيزم وتساعد على تصحيح الانحراف إلى جانب علاج المياه البيضاء.</p>
<h2>كيف يختار الطبيب العدسة المناسبة؟</h2>
<p>لا يعتمد الاختيار على نوع العدسة فقط، وإنما على طبيعة العين، ووجود الاستجماتيزم من عدمه، واحتياجات المريض اليومية ونمط الحياة والعمل، ونتائج الفحوصات قبل العملية.</p>
<p>العدسة الأفضل ليست بالضرورة الأعلى تكلفة، بل التي تناسب حالة المريض واحتياجاته البصرية. لذلك يبدأ القرار الصحيح دائمًا بفحص شامل للعين ومناقشة الخيارات المتاحة.</p>
`),
    contentEn: article(`<p>Monofocal, multifocal and toric lenses each fit different eyes and lifestyles. The best lens is the one that matches your visual needs, not the most expensive.</p>`),
  },
];
