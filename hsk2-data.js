/* ============================================================
   hsk2-data.js
   بنية بيانات دروس HSK2 - تطبيق تعليم الصينية بالعربي
   ============================================================

   الفكرة العامة:
   - كل درس (lesson) فيه: كلمات جديدة + قواعد + جمل تدريب + كويز
   - كل درس بينتهي بـ "بطاقة فكر صيني" (cultureCard) مرتبطة بموضوع
     الدرس نفسه، مش معلومة عشوائية
   - نظام المراجعة (review) بيعتمد على spaced repetition بسيط:
     كل كلمة بتتسجل بتاريخ آخر مراجعة + عدد مرات الغلط، وبناءً
     عليها بتتحدد امتى ترجعلها تاني (1 يوم / 3 أيام / 7 أيام)
   ============================================================ */


/* ------------------------------------------------------------
   1. هيكل الدرس الواحد (Lesson Schema)
   ------------------------------------------------------------ */
const lessonSchema = {
  id: "hsk2-l01",              // معرف فريد للدرس
  level: "HSK2",
  order: 1,
  title_ar: "الزمن الماضي",     // عنوان الدرس بالعربي
  title_cn: "过去时",
  icon: "🕐",                   // إيموجي يظهر في index الدروس

  // --------------------------------------------------
  // الكلمات الجديدة في الدرس
  // --------------------------------------------------
  vocabulary: [
    {
      id: "v001",
      hanzi: "了",
      pinyin: "le",
      meaning_ar: "أداة تدل على اكتمال الفعل (زي 'قد' في الماضي)",
      audio: "audio/hsk2/l01/v001.wav",
      example: {
        hanzi: "我吃了饭。",
        pinyin: "wǒ chī le fàn",
        meaning_ar: "أنا أكلت الأكل."
      }
    }
    // ... باقي كلمات الدرس (10-15 كلمة)
  ],

  // --------------------------------------------------
  // شرح القاعدة النحوية
  // --------------------------------------------------
  grammar: {
    title_ar: "استخدام 了 للدلالة على الماضي",
    explanation_ar: "في الصينية مفيش تصريف للفعل زي العربي أو الإنجليزي، فبنستخدم 了 بعد الفعل عشان نقول إن الحدث خلص.",
    pattern: "الفاعل + الفعل + 了 + المفعول",
    examples: [
      { hanzi: "他去了北京。", pinyin: "tā qù le běijīng", meaning_ar: "هو راح بكين." }
    ]
  },

  // --------------------------------------------------
  // جمل تدريب (تفاعلية - ترتيب / اختيار / كتابة)
  // --------------------------------------------------
  practiceSentences: [
    {
      id: "p001",
      type: "reorder",          // reorder | multiple_choice | fill_blank
      hanzi: "我 昨天 了 去 学校",
      correctOrder: ["我", "昨天", "去", "了", "学校"],
      meaning_ar: "أنا رحت المدرسة إمبارح."
    }
  ],

  // --------------------------------------------------
  // كويز نهاية الدرس
  // --------------------------------------------------
  quiz: [
    {
      id: "q001",
      question_ar: "إيه معنى 了 في الجملة؟",
      vocabId: "v001",          // مربوط بالكلمة عشان نظام المراجعة يعرف يسجلها
      options: ["فعل ماضي مساعد", "اسم إشارة", "حرف جر", "ضمير"],
      correctIndex: 0
    }
  ],

  // --------------------------------------------------
  // بطاقة الفكر الصيني - أهم جزء للتميز
  // لازم تكون مرتبطة بموضوع الدرس، مش معلومة عامة
  // --------------------------------------------------
  cultureCard: {
    id: "c-hsk2-l01",
    title_ar: "ليه الصينيين مش بيهتموا بالزمن زي الغرب؟",
    body_ar: "في الفكر الصيني التقليدي، الوقت مش خط مستقيم من الماضي للمستقبل زي في الثقافة الغربية، لكنه دائري ومتكرر زي فصول السنة. عشان كده اللغة الصينية معندهاش تصريف زمني للفعل زي 'أكل/يأكل/سيأكل' - بدل كده بتستخدم كلمات زي 了 بس عشان تأكد إن الحدث خلص، مش عشان تحدد 'شكل' الفعل. الفكرة دي منعكسة في كل حاجة من الفلسفة لحد التقويم الصيني اللي بيتكرر كل 60 سنة.",
    relatedTo: "grammar",       // grammar | vocabulary | daily_life | history
    icon: "☯️"
  }
};


/* ------------------------------------------------------------
   2. هيكل تتبع تقدم المستخدم (يتخزن في localStorage)
   ------------------------------------------------------------ */
const userProgressSchema = {
  completedLessons: ["hsk1-l01", "hsk1-l02"],   // معرفات الدروس المكتملة

  // نقاط وستريك (نفس نظام NihongoArabic)
  points: 0,
  streak: {
    current: 0,
    longest: 0,
    lastActiveDate: null        // ISO date - لحساب استمرار الستريك
  },

  // مراجعة الفكر الصيني - ستريك منفصل للقراءة اليومية
  cultureStreak: {
    current: 0,
    longest: 0,
    lastReadDate: null,
    readCards: ["c-hsk1-l01", "c-hsk1-l02"]
  },

  // نظام المراجعة (Spaced Repetition) - لكل كلمة
  reviewQueue: {
    "v001": {
      lastReviewed: "2026-07-20",
      nextReview: "2026-07-23",     // يوم / 3 أيام / أسبوع حسب الأداء
      correctStreak: 1,              // كام مرة صح متتالية
      interval: "3d",                // 1d | 3d | 7d | 14d | mastered
      timesWrong: 2
    }
  }
};


/* ------------------------------------------------------------
   3. منطق تحديد موعد المراجعة القادمة (spaced repetition بسيط)
   ------------------------------------------------------------ */
function calculateNextReview(wordProgress, wasCorrect) {
  const intervals = ["1d", "3d", "7d", "14d", "mastered"];
  let currentIndex = intervals.indexOf(wordProgress.interval || "1d");

  if (wasCorrect) {
    // لو جاوب صح، ينتقل للفترة الأطول اللي بعدها
    currentIndex = Math.min(currentIndex + 1, intervals.length - 1);
    wordProgress.correctStreak = (wordProgress.correctStreak || 0) + 1;
  } else {
    // لو غلط، يرجع لبداية الدورة ويزود عداد الغلط
    currentIndex = 0;
    wordProgress.correctStreak = 0;
    wordProgress.timesWrong = (wordProgress.timesWrong || 0) + 1;
  }

  wordProgress.interval = intervals[currentIndex];
  wordProgress.lastReviewed = new Date().toISOString().split("T")[0];

  const daysToAdd = { "1d": 1, "3d": 3, "7d": 7, "14d": 14, "mastered": 30 };
  const next = new Date();
  next.setDate(next.getDate() + daysToAdd[wordProgress.interval]);
  wordProgress.nextReview = next.toISOString().split("T")[0];

  return wordProgress;
}


/* ------------------------------------------------------------
   4. نظام النقاط - جدول موحد لكل الأحداث
   ------------------------------------------------------------ */
const pointsTable = {
  completeLesson: 20,
  quizCorrectAnswer: 5,
  quizPerfectScore: 15,        // بونص لو كل الأسئلة صح
  dailyReviewCompleted: 10,
  readCultureCard: 5,
  cultureStreakWeek: 30,       // بونص أسبوعي لو قرا الفكرة كل يوم
  streakMilestone: {           // بونص حسب طول الستريك
    3: 10,
    7: 25,
    14: 50,
    30: 100
  }
};


/* ------------------------------------------------------------
   5. تصدير البيانات (لو هتستخدمي modules) أو استخدام مباشر
   ------------------------------------------------------------ */
// إذا كنتِ مش مستخدمة import/export، امسحي السطر ده وخليها global variables
// export { lessonSchema, userProgressSchema, calculateNextReview, pointsTable };
