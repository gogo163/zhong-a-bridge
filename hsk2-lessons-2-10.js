/* ============================================================
   hsk2-lessons-2-10.js
   محتوى دروس HSK2 من الدرس التاني للعاشر
   نفس بنية hsk2-data.js (lessonSchema) اللي اتفقنا عليها
   ============================================================ */

const HSK2_LESSONS = [

/* ------------------ الدرس 2: المقارنة ------------------ */
{
  id: 2,
  level: "HSK2",
  title: "المقارنة",
  title_cn: "比较",
  icon: "⚖️",

  words: [
    { id:"v201", hanzi:"比", pinyin:"bǐ", meaning_ar:"أداة المقارنة (مثل)", audio:"audio/hsk2/l02/v201.wav",
      example:{ hanzi:"他比我高。", pinyin:"tā bǐ wǒ gāo", meaning_ar:"هو أطول مني." } },
    { id:"v202", hanzi:"更", pinyin:"gèng", meaning_ar:"أكثر / بالأكثر", audio:"audio/hsk2/l02/v202.wav",
      example:{ hanzi:"这个更好。", pinyin:"zhège gèng hǎo", meaning_ar:"ده أحسن." } },
    { id:"v203", hanzi:"最", pinyin:"zuì", meaning_ar:"الأكثر (أفعل التفضيل)", audio:"audio/hsk2/l02/v203.wav",
      example:{ hanzi:"她最漂亮。", pinyin:"tā zuì piàoliang", meaning_ar:"هي الأجمل." } },
    { id:"v204", hanzi:"一样", pinyin:"yíyàng", meaning_ar:"زي بعض / متشابه", audio:"audio/hsk2/l02/v204.wav",
      example:{ hanzi:"我们一样高。", pinyin:"wǒmen yíyàng gāo", meaning_ar:"إحنا في نفس الطول." } },
    { id:"v205", hanzi:"差", pinyin:"chà", meaning_ar:"أقل / ناقص", audio:"audio/hsk2/l02/v205.wav",
      example:{ hanzi:"我的中文差一点。", pinyin:"wǒ de zhōngwén chà yìdiǎn", meaning_ar:"صينيتي ناقصة شوية." } },
    { id:"v206", hanzi:"比较", pinyin:"bǐjiào", meaning_ar:"نسبيًا / بالمقارنة", audio:"audio/hsk2/l02/v206.wav",
      example:{ hanzi:"这里比较安静。", pinyin:"zhèlǐ bǐjiào ānjìng", meaning_ar:"هنا هادي نسبيًا." } },
    { id:"v207", hanzi:"还", pinyin:"hái", meaning_ar:"لسه / كمان", audio:"audio/hsk2/l02/v207.wav",
      example:{ hanzi:"他还年轻。", pinyin:"tā hái niánqīng", meaning_ar:"هو لسه صغير." } },
    { id:"v208", hanzi:"极了", pinyin:"jíle", meaning_ar:"جدًا (مبالغة بعد الصفة)", audio:"audio/hsk2/l02/v208.wav",
      example:{ hanzi:"太好极了！", pinyin:"tài hǎo jíle", meaning_ar:"ده كويس جدًا جدًا!" } }
  ],

  grammar: {
    title_ar: "جملة المقارنة بـ 比",
    explanation_ar: "لعمل مقارنة في الصينية بنستخدم 比 بين الشيئين، والصفة بتيجي في الآخر. لو عايزة تأكدي المقارنة تزيدي 更 قبل الصفة.",
    pattern: "الشيء أ + 比 + الشيء ب + (更) + الصفة",
    examples: [
      { hanzi:"北京比开罗冷。", pinyin:"běijīng bǐ kāiluó lěng", meaning_ar:"بكين أبرد من القاهرة." },
      { hanzi:"这个比那个更贵。", pinyin:"zhège bǐ nàge gèng guì", meaning_ar:"ده أغلى من ده كمان." }
    ]
  },

  practiceSentences: [
    { id:"p201", type:"reorder", hanzi:"我 比 你 高", correctOrder:["我","比","你","高"], meaning_ar:"أنا أطول منك." }
  ],

  quiz: [
    { id:"q201", question_ar:"إزاي تقولي 'هو أطول مني' بالصيني؟", vocabId:"v201",
      options:["他比我高","他高我比","比他我高","我他比高"], correctIndex:0 },
    { id:"q202", question_ar:"إيه معنى 一样؟", vocabId:"v204",
      options:["مختلف","زي بعض","أكبر","أصغر"], correctIndex:1 },
    { id:"q203", question_ar:"'الأكثر' أو 'أفعل التفضيل' بالصيني هي؟", vocabId:"v203",
      options:["更","最","比","还"], correctIndex:1 }
  ],

  cultureCard: {
    id:"c-hsk2-l02",
    icon:"🙇",
    title_ar:"ليه الصينيين بيتجنبوا المقارنة المباشرة في الكلام العادي؟",
    body_ar:"مع إن قاعدة 比 سهلة نحويًا، الصينيين في الواقع بيتجنبوا المقارنات المباشرة عن نفسهم في الكلام اليومي، وده جزء من قيمة اسمها 谦虚 (التواضع). لو حد مدحك بتقول 'إنجليزيتك كويسة أوي'، الرد المتوقع مش 'شكرًا' البسيطة، لكن 哪里哪里 (nǎlǐ nǎlǐ - 'وين وين؟' يعني 'مبالغ فيك') كنوع من التواضع الاجتماعي. رفض المديح مباشرة ده سلوك مهذب في الثقافة الصينية، عكس الثقافات التانية اللي بتقبل المديح بارتياح.",
    relatedTo:"daily_life"
  }
},

/* ------------------ الدرس 3: المشاعر والحالة النفسية ------------------ */
{
  id: 3,
  level: "HSK2",
  title: "المشاعر والحالة النفسية",
  title_cn: "感情",
  icon: "😊",

  words: [
    { id:"v301", hanzi:"高兴", pinyin:"gāoxìng", meaning_ar:"مبسوط / سعيد", audio:"audio/hsk2/l03/v301.wav",
      example:{ hanzi:"我很高兴。", pinyin:"wǒ hěn gāoxìng", meaning_ar:"أنا مبسوط أوي." } },
    { id:"v302", hanzi:"难过", pinyin:"nánguò", meaning_ar:"حزين", audio:"audio/hsk2/l03/v302.wav",
      example:{ hanzi:"她很难过。", pinyin:"tā hěn nánguò", meaning_ar:"هي حزينة أوي." } },
    { id:"v303", hanzi:"生气", pinyin:"shēngqì", meaning_ar:"زعلان / غضبان", audio:"audio/hsk2/l03/v303.wav",
      example:{ hanzi:"他生气了。", pinyin:"tā shēngqì le", meaning_ar:"هو زعل." } },
    { id:"v304", hanzi:"害怕", pinyin:"hàipà", meaning_ar:"خايف", audio:"audio/hsk2/l03/v304.wav",
      example:{ hanzi:"我害怕黑。", pinyin:"wǒ hàipà hēi", meaning_ar:"أنا خايف من الضلمة." } },
    { id:"v305", hanzi:"担心", pinyin:"dānxīn", meaning_ar:"قلقان", audio:"audio/hsk2/l03/v305.wav",
      example:{ hanzi:"别担心。", pinyin:"bié dānxīn", meaning_ar:"متقلقيش." } },
    { id:"v306", hanzi:"累", pinyin:"lèi", meaning_ar:"تعبان", audio:"audio/hsk2/l03/v306.wav",
      example:{ hanzi:"我今天很累。", pinyin:"wǒ jīntiān hěn lèi", meaning_ar:"أنا تعبان النهارده." } },
    { id:"v307", hanzi:"舒服", pinyin:"shūfu", meaning_ar:"مرتاح / كويس (صحيًا)", audio:"audio/hsk2/l03/v307.wav",
      example:{ hanzi:"我不舒服。", pinyin:"wǒ bù shūfu", meaning_ar:"مش حاسس إني كويس." } },
    { id:"v308", hanzi:"讨厌", pinyin:"tǎoyàn", meaning_ar:"يكره / يزهق من", audio:"audio/hsk2/l03/v308.wav",
      example:{ hanzi:"我讨厌等人。", pinyin:"wǒ tǎoyàn děng rén", meaning_ar:"بكره الاستنى حد." } }
  ],

  grammar: {
    title_ar: "التعبير عن الحالة بـ 了",
    explanation_ar: "لما تحطي 了 بعد صفة الحالة النفسية، بتبقى بتقولي إن الحالة دي 'حصلت / بدأت'، مش وصف ثابت. الفرق بين 我生气 (أنا عصبي بطبعي) و 我生气了 (أنا زعلت دلوقتي).",
    pattern: "الفاعل + الصفة + 了",
    examples: [
      { hanzi:"他难过了。", pinyin:"tā nánguò le", meaning_ar:"هو زعل (حصل تغيير في حالته)." }
    ]
  },

  practiceSentences: [
    { id:"p301", type:"multiple_choice", hanzi:"我今天特别 ___ ，因为明天考试。", correctOrder:["担心"], meaning_ar:"أنا النهارده قلقان جدًا لأن بكرة امتحان." }
  ],

  quiz: [
    { id:"q301", question_ar:"إيه معنى 舒服؟", vocabId:"v307",
      options:["تعبان","مرتاح/كويس","زعلان","خايف"], correctIndex:1 },
    { id:"q302", question_ar:"لو حد قالك '别担心'، معناها؟", vocabId:"v305",
      options:["اتضايق","متقلقيش","افرح","استنى"], correctIndex:1 },
    { id:"q303", question_ar:"'زعلان' بالصيني؟", vocabId:"v303",
      options:["高兴","生气","害怕","累"], correctIndex:1 }
  ],

  cultureCard: {
    id:"c-hsk2-l03",
    icon:"🎭",
    title_ar:"ليه الصينيين نادرًا ما يقولوا مشاعرهم صراحة؟",
    body_ar:"مفهوم 面子 (الوش/السمعة الاجتماعية) بيلعب دور كبير في إزاي الصينيين بيعبروا عن مشاعرهم. إظهار الغضب أو الحزن قدام الناس ممكن يتفهم إنه 'فقدان للوش' سواء للشخص نفسه أو للطرف التاني. عشان كده هتلاقي الصينيين بيستخدموا تعبيرات غير مباشرة، أو بيبتسموا حتى وهم مضايقين، وده مختلف تمامًا عن ثقافات تانية بتشجع التعبير المباشر عن المشاعر. لما تتعلمي كلمة زي 讨厌، اعرفي إنها بتتقال غالبًا بشكل خفيف/هزار أكتر من التعبير عن كره حقيقي.",
    relatedTo:"daily_life"
  }
},

/* ------------------ الدرس 4: الجسم والصحة ------------------ */
{
  id: 4,
  level: "HSK2",
  title: "الجسم والصحة",
  title_cn: "身体健康",
  icon: "🩺",

  words: [
    { id:"v401", hanzi:"头", pinyin:"tóu", meaning_ar:"راس", audio:"audio/hsk2/l04/v401.wav",
      example:{ hanzi:"我头疼。", pinyin:"wǒ tóu téng", meaning_ar:"دماغي بتوجعني." } },
    { id:"v402", hanzi:"肚子", pinyin:"dùzi", meaning_ar:"بطن", audio:"audio/hsk2/l04/v402.wav",
      example:{ hanzi:"我肚子疼。", pinyin:"wǒ dùzi téng", meaning_ar:"بطني بتوجعني." } },
    { id:"v403", hanzi:"疼", pinyin:"téng", meaning_ar:"بيوجع", audio:"audio/hsk2/l04/v403.wav",
      example:{ hanzi:"哪儿疼？", pinyin:"nǎr téng", meaning_ar:"فين بيوجعك؟" } },
    { id:"v404", hanzi:"感冒", pinyin:"gǎnmào", meaning_ar:"برد (مرض)", audio:"audio/hsk2/l04/v404.wav",
      example:{ hanzi:"我感冒了。", pinyin:"wǒ gǎnmào le", meaning_ar:"أنا مبرد." } },
    { id:"v405", hanzi:"医院", pinyin:"yīyuàn", meaning_ar:"مستشفى", audio:"audio/hsk2/l04/v405.wav",
      example:{ hanzi:"去医院。", pinyin:"qù yīyuàn", meaning_ar:"روح المستشفى." } },
    { id:"v406", hanzi:"医生", pinyin:"yīshēng", meaning_ar:"دكتور", audio:"audio/hsk2/l04/v406.wav",
      example:{ hanzi:"他是医生。", pinyin:"tā shì yīshēng", meaning_ar:"هو دكتور." } },
    { id:"v407", hanzi:"药", pinyin:"yào", meaning_ar:"دوا", audio:"audio/hsk2/l04/v407.wav",
      example:{ hanzi:"吃药。", pinyin:"chī yào", meaning_ar:"خد الدوا." } },
    { id:"v408", hanzi:"生病", pinyin:"shēngbìng", meaning_ar:"يمرض", audio:"audio/hsk2/l04/v408.wav",
      example:{ hanzi:"我生病了。", pinyin:"wǒ shēngbìng le", meaning_ar:"أنا اتمرضت." } }
  ],

  grammar: {
    title_ar: "التعبير عن الألم بـ 疼",
    explanation_ar: "عشان تقولي 'حاجة بتوجعني'، بتحطي اسم مكان الألم في الجسم قبل 疼 مباشرة، من غير أي حرف جر.",
    pattern: "عضو الجسم + 疼",
    examples: [
      { hanzi:"我牙疼。", pinyin:"wǒ yá téng", meaning_ar:"سني بتوجعني." }
    ]
  },

  practiceSentences: [
    { id:"p401", type:"fill_blank", hanzi:"我___了，要去医院看医生。", correctOrder:["生病"], meaning_ar:"أنا اتمرضت، لازم أروح المستشفى أشوف دكتور." }
  ],

  quiz: [
    { id:"q401", question_ar:"إيه معنى 感冒؟", vocabId:"v404",
      options:["صداع","برد (مرض)","تعب","دوا"], correctIndex:1 },
    { id:"q402", question_ar:"إزاي تقولي 'دماغي بتوجعني'؟", vocabId:"v401",
      options:["我头疼","我疼头","头我疼","疼我头"], correctIndex:0 },
    { id:"q403", question_ar:"'دكتور' بالصيني؟", vocabId:"v406",
      options:["医院","药","医生","病人"], correctIndex:2 }
  ],

  cultureCard: {
    id:"c-hsk2-l04",
    icon:"♨️",
    title_ar:"ليه الصينيين بينصحوك دايمًا بـ 'اشرب مياه سخنة'؟",
    body_ar:"لو اتمرضتي قدام أي صيني، أكتر نصيحة هتسمعيها هي 多喝热水 (اشربي مياه سخنة كتير). ده جاي من فلسفة الطب الصيني التقليدي (中医) اللي بتقول إن الجسم لازم يفضل في توازن بين البرد والسخونة، والمياه الباردة ممكن 'تختل' التوازن ده. النظرة دي مش بس نصيحة طبية عابرة، دي جزء من فكرة أعمق عن التوازن (阴阳 - يين ويانج) موجودة في كل حاجة من الأكل للطقس للمزاج، وبتفسر ليه هتلاقي مطاعم صينية كتير بتقدملك مياه سخنة بدل التلجة حتى في الصيف.",
    relatedTo:"daily_life"
  }
},

/* ------------------ الدرس 5: الهوايات ووقت الفراغ ------------------ */
{
  id: 5,
  level: "HSK2",
  title: "الهوايات ووقت الفراغ",
  title_cn: "爱好",
  icon: "🎨",

  words: [
    { id:"v501", hanzi:"爱好", pinyin:"àihào", meaning_ar:"هواية", audio:"audio/hsk2/l05/v501.wav",
      example:{ hanzi:"我的爱好是画画。", pinyin:"wǒ de àihào shì huàhuà", meaning_ar:"هوايتي الرسم." } },
    { id:"v502", hanzi:"游泳", pinyin:"yóuyǒng", meaning_ar:"يعوم", audio:"audio/hsk2/l05/v502.wav",
      example:{ hanzi:"我喜欢游泳。", pinyin:"wǒ xǐhuan yóuyǒng", meaning_ar:"بحب العوم." } },
    { id:"v503", hanzi:"唱歌", pinyin:"chànggē", meaning_ar:"يغني", audio:"audio/hsk2/l05/v503.wav",
      example:{ hanzi:"她唱歌唱得很好。", pinyin:"tā chànggē chàng de hěn hǎo", meaning_ar:"هي بتغني كويس أوي." } },
    { id:"v504", hanzi:"跳舞", pinyin:"tiàowǔ", meaning_ar:"يرقص", audio:"audio/hsk2/l05/v504.wav",
      example:{ hanzi:"我们去跳舞吧。", pinyin:"wǒmen qù tiàowǔ ba", meaning_ar:"يلا نروح نرقص." } },
    { id:"v505", hanzi:"运动", pinyin:"yùndòng", meaning_ar:"رياضة", audio:"audio/hsk2/l05/v505.wav",
      example:{ hanzi:"我每天运动。", pinyin:"wǒ měitiān yùndòng", meaning_ar:"باتمرن كل يوم." } },
    { id:"v506", hanzi:"旅游", pinyin:"lǚyóu", meaning_ar:"يسافر / سياحة", audio:"audio/hsk2/l05/v506.wav",
      example:{ hanzi:"我喜欢旅游。", pinyin:"wǒ xǐhuan lǚyóu", meaning_ar:"بحب السفر." } },
    { id:"v507", hanzi:"画画", pinyin:"huàhuà", meaning_ar:"يرسم", audio:"audio/hsk2/l05/v507.wav",
      example:{ hanzi:"他会画画。", pinyin:"tā huì huàhuà", meaning_ar:"هو بيعرف يرسم." } },
    { id:"v508", hanzi:"听音乐", pinyin:"tīng yīnyuè", meaning_ar:"يسمع موسيقى", audio:"audio/hsk2/l05/v508.wav",
      example:{ hanzi:"我在听音乐。", pinyin:"wǒ zài tīng yīnyuè", meaning_ar:"أنا بسمع موسيقى دلوقتي." } }
  ],

  grammar: {
    title_ar: "وصف مهارة الفعل بـ 得",
    explanation_ar: "عشان توصفي 'إزاي حد بيعمل حاجة' (كويس/وحش/بسرعة)، بتكرري الفعل وبعده 得 ثم الصفة.",
    pattern: "الفعل + الفعل + 得 + الصفة",
    examples: [
      { hanzi:"他跑得很快。", pinyin:"tā pǎo de hěn kuài", meaning_ar:"هو بيجري بسرعة." }
    ]
  },

  practiceSentences: [
    { id:"p501", type:"reorder", hanzi:"我的 爱好 是 游泳", correctOrder:["我的","爱好","是","游泳"], meaning_ar:"هوايتي العوم." }
  ],

  quiz: [
    { id:"q501", question_ar:"'هواية' بالصيني؟", vocabId:"v501",
      options:["运动","爱好","旅游","音乐"], correctIndex:1 },
    { id:"q502", question_ar:"إيه معنى 跳舞؟", vocabId:"v504",
      options:["يغني","يرسم","يرقص","يعوم"], correctIndex:2 },
    { id:"q503", question_ar:"جملة 'هي بتغني كويس' بتستخدم إيه بعد الفعل المكرر؟", vocabId:"v503",
      options:["了","的","得","吗"], correctIndex:2 }
  ],

  cultureCard: {
    id:"c-hsk2-l05",
    icon:"🏞️",
    title_ar:"ليه هتلاقي مصريين صينيين بيتمرنوا مع بعض في الحديقة الصبح؟",
    body_ar:"من أشهر المشاهد في الصين الصبح بدري هي مجموعات من الناس، غالبًا كبار السن، بيتمرنوا مع بعض في الحدايق العامة على 太极拳 (تاي تشي) أو حتى بيرقصوا رقصة جماعية اسمها 广场舞 (رقصة الميدان). الهوايات في الثقافة الصينية غالبًا بتتمارس كنشاط جماعي مش فردي، وده انعكاس لقيمة الجماعية (集体主义) اللي بتفضل النشاط المشترك على العزلة الفردية. حتى الرياضة اللي في ثقافات تانية بتتمارس لوحدك، في الصين بتبقى مناسبة اجتماعية.",
    relatedTo:"daily_life"
  }
},

/* ------------------ الدرس 6: المواصلات والسفر ------------------ */
{
  id: 6,
  level: "HSK2",
  title: "المواصلات والسفر",
  title_cn: "交通",
  icon: "🚄",

  words: [
    { id:"v601", hanzi:"飞机", pinyin:"fēijī", meaning_ar:"طيارة", audio:"audio/hsk2/l06/v601.wav",
      example:{ hanzi:"坐飞机去。", pinyin:"zuò fēijī qù", meaning_ar:"نروح بالطيارة." } },
    { id:"v602", hanzi:"火车", pinyin:"huǒchē", meaning_ar:"قطر", audio:"audio/hsk2/l06/v602.wav",
      example:{ hanzi:"火车站在哪儿？", pinyin:"huǒchēzhàn zài nǎr", meaning_ar:"محطة القطر فين؟" } },
    { id:"v603", hanzi:"出租车", pinyin:"chūzūchē", meaning_ar:"تاكسي", audio:"audio/hsk2/l06/v603.wav",
      example:{ hanzi:"我们坐出租车。", pinyin:"wǒmen zuò chūzūchē", meaning_ar:"هناخد تاكسي." } },
    { id:"v604", hanzi:"公共汽车", pinyin:"gōnggòng qìchē", meaning_ar:"أتوبيس", audio:"audio/hsk2/l06/v604.wav",
      example:{ hanzi:"我坐公共汽车上班。", pinyin:"wǒ zuò gōnggòng qìchē shàngbān", meaning_ar:"باروح الشغل بالأتوبيس." } },
    { id:"v605", hanzi:"骑自行车", pinyin:"qí zìxíngchē", meaning_ar:"يركب عجلة", audio:"audio/hsk2/l06/v605.wav",
      example:{ hanzi:"他骑自行车来的。", pinyin:"tā qí zìxíngchē lái de", meaning_ar:"هو جه بالعجلة." } },
    { id:"v606", hanzi:"开车", pinyin:"kāichē", meaning_ar:"يسوق عربية", audio:"audio/hsk2/l06/v606.wav",
      example:{ hanzi:"我不会开车。", pinyin:"wǒ bú huì kāichē", meaning_ar:"أنا مش عارف أسوق." } },
    { id:"v607", hanzi:"走路", pinyin:"zǒulù", meaning_ar:"يمشي على رجليه", audio:"audio/hsk2/l06/v607.wav",
      example:{ hanzi:"我走路去。", pinyin:"wǒ zǒulù qù", meaning_ar:"هامشي وأروح." } },
    { id:"v608", hanzi:"机场", pinyin:"jīchǎng", meaning_ar:"مطار", audio:"audio/hsk2/l06/v608.wav",
      example:{ hanzi:"去机场要多长时间？", pinyin:"qù jīchǎng yào duō cháng shíjiān", meaning_ar:"هياخد قد إيه نروح المطار؟" } }
  ],

  grammar: {
    title_ar: "استخدام 坐 و 骑 و 开 حسب نوع المواصلة",
    explanation_ar: "الصينية بتفرّق بين أفعال الركوب حسب نوع المواصلة: 坐 (تقعد جواها - طيارة/قطر/أتوبيس/تاكسي)، 骑 (تركب فوقها - عجلة/موتوسيكل)، 开 (تسوقها بنفسك - عربية).",
    pattern: "坐/骑/开 + وسيلة المواصلة",
    examples: [
      { hanzi:"我坐火车，他开车。", pinyin:"wǒ zuò huǒchē, tā kāichē", meaning_ar:"أنا راكب القطر، هو سايق عربيته." }
    ]
  },

  practiceSentences: [
    { id:"p601", type:"multiple_choice", hanzi:"我每天 ___ 自行车上班。", correctOrder:["骑"], meaning_ar:"أنا باركب العجلة كل يوم عشان أروح الشغل." }
  ],

  quiz: [
    { id:"q601", question_ar:"إيه الفعل المستخدم مع 'عجلة'؟", vocabId:"v605",
      options:["坐","骑","开","走"], correctIndex:1 },
    { id:"q602", question_ar:"'مطار' بالصيني؟", vocabId:"v608",
      options:["火车站","机场","出租车","飞机"], correctIndex:1 },
    { id:"q603", question_ar:"إيه معنى 走路؟", vocabId:"v607",
      options:["يسوق","يمشي","يعوم","يركب"], correctIndex:1 }
  ],

  cultureCard: {
    id:"c-hsk2-l06",
    icon:"🚅",
    title_ar:"ليه القطر السريع (高铁) مصدر فخر قومي في الصين؟",
    body_ar:"شبكة القطارات فائقة السرعة في الصين (高铁 - gāotiě) هي الأكبر في العالم، وبتوصل سرعات تفوق 300 كم/ساعة. المشروع ده بالنسبالهم مش بس وسيلة مواصلات، لكنه رمز لتقدم البلد التكنولوجي السريع في العقود الأخيرة، وهتلاقي كتير من الصينيين فخورين بيه ويتكلموا عنه بحماس. برضو ثقافة 'مشاركة العجلة' (共享单车) - عجل ملونة منتشرة في كل شارع تقدر تفتحها بتطبيق موبايل - بقت جزء أساسي من حياة المدن الصينية اليومية.",
    relatedTo:"daily_life"
  }
},

/* ------------------ الدرس 7: الأفعال المساعدة ------------------ */
{
  id: 7,
  level: "HSK2",
  title: "الأفعال المساعدة",
  title_cn: "能愿动词",
  icon: "🗝️",

  words: [
    { id:"v701", hanzi:"想", pinyin:"xiǎng", meaning_ar:"عايز / نفسي في", audio:"audio/hsk2/l07/v701.wav",
      example:{ hanzi:"我想喝茶。", pinyin:"wǒ xiǎng hē chá", meaning_ar:"نفسي أشرب شاي." } },
    { id:"v702", hanzi:"要", pinyin:"yào", meaning_ar:"عايز / لازم", audio:"audio/hsk2/l07/v702.wav",
      example:{ hanzi:"我要走了。", pinyin:"wǒ yào zǒu le", meaning_ar:"لازم أمشي دلوقتي." } },
    { id:"v703", hanzi:"会", pinyin:"huì", meaning_ar:"يعرف يعمل (مهارة متعلمة)", audio:"audio/hsk2/l07/v703.wav",
      example:{ hanzi:"我会做饭。", pinyin:"wǒ huì zuòfàn", meaning_ar:"أنا بعرف أطبخ." } },
    { id:"v704", hanzi:"能", pinyin:"néng", meaning_ar:"يقدر (قدرة/إذن)", audio:"audio/hsk2/l07/v704.wav",
      example:{ hanzi:"我能帮你。", pinyin:"wǒ néng bāng nǐ", meaning_ar:"أقدر أساعدك." } },
    { id:"v705", hanzi:"可以", pinyin:"kěyǐ", meaning_ar:"مسموح / ممكن", audio:"audio/hsk2/l07/v705.wav",
      example:{ hanzi:"我可以进来吗？", pinyin:"wǒ kěyǐ jìnlái ma", meaning_ar:"أقدر أدخل؟" } },
    { id:"v706", hanzi:"应该", pinyin:"yīnggāi", meaning_ar:"المفروض / لازم", audio:"audio/hsk2/l07/v706.wav",
      example:{ hanzi:"你应该休息。", pinyin:"nǐ yīnggāi xiūxi", meaning_ar:"المفروض ترتاح." } },
    { id:"v707", hanzi:"得", pinyin:"děi", meaning_ar:"لازم (حتمية)", audio:"audio/hsk2/l07/v707.wav",
      example:{ hanzi:"我得走了。", pinyin:"wǒ děi zǒu le", meaning_ar:"لازم أمشي." } },
    { id:"v708", hanzi:"不用", pinyin:"búyòng", meaning_ar:"مش محتاج / معلش مفيش داعي", audio:"audio/hsk2/l07/v708.wav",
      example:{ hanzi:"不用谢。", pinyin:"búyòng xiè", meaning_ar:"مفيش داعي للشكر." } }
  ],

  grammar: {
    title_ar: "الفرق بين 会 و 能 و 可以",
    explanation_ar: "الثلاثة بيترجموا 'يقدر' بالعربي، بس معانيهم مختلفة: 会 = مهارة اتعلمتها (زي السباحة أو اللغة)، 能 = قدرة جسدية أو ظرفية، 可以 = إذن اجتماعي أو إمكانية.",
    pattern: "الفاعل + 会/能/可以 + الفعل",
    examples: [
      { hanzi:"我会游泳，但今天不能游，因为你可以陪我明天去吗？", pinyin:"wǒ huì yóuyǒng, dàn jīntiān bù néng yóu", meaning_ar:"أنا بعرف أعوم، بس النهارده مقدرش أعوم." }
    ]
  },

  practiceSentences: [
    { id:"p701", type:"multiple_choice", hanzi:"我 ___ 说一点中文。", correctOrder:["会"], meaning_ar:"أنا بعرف أتكلم صيني شوية." }
  ],

  quiz: [
    { id:"q701", question_ar:"لو عايزة تقولي 'أعرف أعوم' (مهارة اتعلمتيها)، تستخدمي؟", vocabId:"v703",
      options:["能","会","可以","要"], correctIndex:1 },
    { id:"q702", question_ar:"إيه معنى 应该؟", vocabId:"v706",
      options:["مسموح","المفروض","عايز","يقدر"], correctIndex:1 },
    { id:"q703", question_ar:"'مفيش داعي' بالصيني؟", vocabId:"v708",
      options:["不会","不能","不用","不可以"], correctIndex:2 }
  ],

  cultureCard: {
    id:"c-hsk2-l07",
    icon:"🎋",
    title_ar:"ليه 应该 مش دايمًا بتبقى أمر مباشر زي 'لازم' بالعربي؟",
    body_ar:"لما صيني يقولك 你应该... (المفروض إنك...)، غالبًا مش بيديك أمر مباشر زي ما ممكن تفهمي من الترجمة، لكنه بيقدملك اقتراح مهذب وغير ملزم، خصوصًا لو الفارق في السن أو المكانة الاجتماعية موجود. الثقافة الصينية بتميل للتواصل غير المباشر (委婉) عشان تحافظ على 面子 (وش/كرامة) الطرفين. عشان كده هتلاقي 应该 بتتقال بنبرة ناعمة، وبيتوقع إن اللي بتتكلمي معاه يقدر يرفض من غير ما يحس إنه بيتحدى كلامك بشكل مباشر.",
    relatedTo:"grammar"
  }
},

/* ------------------ الدرس 8: المكالمات والمواعيد ------------------ */
{
  id: 8,
  level: "HSK2",
  title: "المكالمات والمواعيد",
  title_cn: "打电话",
  icon: "📞",

  words: [
    { id:"v801", hanzi:"喂", pinyin:"wéi", meaning_ar:"ألو (لما ترد التليفون)", audio:"audio/hsk2/l08/v801.wav",
      example:{ hanzi:"喂，你好！", pinyin:"wéi, nǐhǎo", meaning_ar:"ألو، أهلًا!" } },
    { id:"v802", hanzi:"打电话", pinyin:"dǎ diànhuà", meaning_ar:"يتصل بالتليفون", audio:"audio/hsk2/l08/v802.wav",
      example:{ hanzi:"我给你打电话。", pinyin:"wǒ gěi nǐ dǎ diànhuà", meaning_ar:"هاتصل بيك." } },
    { id:"v803", hanzi:"手机", pinyin:"shǒujī", meaning_ar:"موبايل", audio:"audio/hsk2/l08/v803.wav",
      example:{ hanzi:"我的手机没电了。", pinyin:"wǒ de shǒujī méi diàn le", meaning_ar:"موبايلي البطارية خلصت." } },
    { id:"v804", hanzi:"等", pinyin:"děng", meaning_ar:"يستنى", audio:"audio/hsk2/l08/v804.wav",
      example:{ hanzi:"请等一下。", pinyin:"qǐng děng yíxià", meaning_ar:"استني لحظة من فضلك." } },
    { id:"v805", hanzi:"见面", pinyin:"jiànmiàn", meaning_ar:"يقابل", audio:"audio/hsk2/l08/v805.wav",
      example:{ hanzi:"我们明天见面。", pinyin:"wǒmen míngtiān jiànmiàn", meaning_ar:"هنتقابل بكرة." } },
    { id:"v806", hanzi:"约", pinyin:"yuē", meaning_ar:"يحدد ميعاد", audio:"audio/hsk2/l08/v806.wav",
      example:{ hanzi:"我们约在公园。", pinyin:"wǒmen yuē zài gōngyuán", meaning_ar:"حددنا نتقابل في الحديقة." } },
    { id:"v807", hanzi:"迟到", pinyin:"chídào", meaning_ar:"يتأخر", audio:"audio/hsk2/l08/v807.wav",
      example:{ hanzi:"对不起，我迟到了。", pinyin:"duìbuqǐ, wǒ chídào le", meaning_ar:"آسف، اتأخرت." } },
    { id:"v808", hanzi:"安排", pinyin:"ānpái", meaning_ar:"يرتب / ينظم", audio:"audio/hsk2/l08/v808.wav",
      example:{ hanzi:"你安排一下时间。", pinyin:"nǐ ānpái yíxià shíjiān", meaning_ar:"رتّبي الوقت شوية." } }
  ],

  grammar: {
    title_ar: "إعطاء شخص فعل بـ 给",
    explanation_ar: "لما الفعل موجّه لشخص (زي 'اتصل بيك' أو 'باعتلك')، بتستخدمي 给 قبل الشخص عشان تحددي إنه هو المستقبِل.",
    pattern: "الفاعل + 给 + الشخص + الفعل",
    examples: [
      { hanzi:"他给我打电话了。", pinyin:"tā gěi wǒ dǎ diànhuà le", meaning_ar:"هو اتصلي بيا." }
    ]
  },

  practiceSentences: [
    { id:"p801", type:"reorder", hanzi:"我们 明天 见面 约", correctOrder:["我们","约","明天","见面"], meaning_ar:"حددنا نتقابل بكرة." }
  ],

  quiz: [
    { id:"q801", question_ar:"لما ترفعي التليفون بتقولي إيه؟", vocabId:"v801",
      options:["再见","喂","谢谢","对不起"], correctIndex:1 },
    { id:"q802", question_ar:"إيه معنى 迟到؟", vocabId:"v807",
      options:["يستنى","يتأخر","يقابل","يتصل"], correctIndex:1 },
    { id:"q803", question_ar:"'يحدد ميعاد' بالصيني؟", vocabId:"v806",
      options:["约","等","安排","见面"], correctIndex:0 }
  ],

  cultureCard: {
    id:"c-hsk2-l08",
    icon:"⏰",
    title_ar:"ليه الوصول بدري للميعاد مهم أوي في الصين؟",
    body_ar:"في السياق الرسمي أو مع الأكابر، الوصول قبل الميعاد بـ5-10 دقايق مش مجرد لطف، لكنه علامة احترام أساسية. التأخير (迟到) في اجتماع عمل أو مقابلة رسمية ممكن يتفهم إنه استخفاف بوقت الطرف التاني وبمكانته، حتى لو السبب بسيط. من ناحية تانية، في العلاقات الشخصية القريبة، المرونة في المواعيد أكتر عادي. الفرق ده بين السياق الرسمي وغير الرسمي مهم جدًا تلاحظيه، لأنه أساس فكرة أوسع في الثقافة الصينية اسمها 关系 (العلاقات) اللي بتحدد إزاي تتعاملي مع كل حد حسب قربه منك.",
    relatedTo:"daily_life"
  }
},

/* ------------------ الدرس 9: السبب والنتيجة ------------------ */
{
  id: 9,
  level: "HSK2",
  title: "السبب والنتيجة",
  title_cn: "因果关系",
  icon: "🔗",

  words: [
    { id:"v901", hanzi:"因为", pinyin:"yīnwèi", meaning_ar:"لأن", audio:"audio/hsk2/l09/v901.wav",
      example:{ hanzi:"因为下雨，我没去。", pinyin:"yīnwèi xiàyǔ, wǒ méi qù", meaning_ar:"لأنها كانت بتمطر، ماروحتش." } },
    { id:"v902", hanzi:"所以", pinyin:"suǒyǐ", meaning_ar:"لذلك / عشان كده", audio:"audio/hsk2/l09/v902.wav",
      example:{ hanzi:"所以我很累。", pinyin:"suǒyǐ wǒ hěn lèi", meaning_ar:"عشان كده أنا تعبان." } },
    { id:"v903", hanzi:"但是", pinyin:"dànshì", meaning_ar:"لكن", audio:"audio/hsk2/l09/v903.wav",
      example:{ hanzi:"我想去，但是没时间。", pinyin:"wǒ xiǎng qù, dànshì méi shíjiān", meaning_ar:"نفسي أروح بس معنديش وقت." } },
    { id:"v904", hanzi:"虽然", pinyin:"suīrán", meaning_ar:"رغم إن / مع إن", audio:"audio/hsk2/l09/v904.wav",
      example:{ hanzi:"虽然很难，但是我喜欢。", pinyin:"suīrán hěn nán, dànshì wǒ xǐhuan", meaning_ar:"رغم إنه صعب، بس بحبه." } },
    { id:"v905", hanzi:"可是", pinyin:"kěshì", meaning_ar:"لكن (نفس 但是)", audio:"audio/hsk2/l09/v905.wav",
      example:{ hanzi:"可是我不想去。", pinyin:"kěshì wǒ bù xiǎng qù", meaning_ar:"بس أنا مش عايز أروح." } },
    { id:"v906", hanzi:"而且", pinyin:"érqiě", meaning_ar:"كمان / وكمان", audio:"audio/hsk2/l09/v906.wav",
      example:{ hanzi:"便宜，而且好吃。", pinyin:"piányi, érqiě hǎochī", meaning_ar:"رخيص، وكمان طعمه حلو." } },
    { id:"v907", hanzi:"除了", pinyin:"chúle", meaning_ar:"ماعدا / غير", audio:"audio/hsk2/l09/v907.wav",
      example:{ hanzi:"除了他，都来了。", pinyin:"chúle tā, dōu lái le", meaning_ar:"ماعدا هو، الكل جه." } },
    { id:"v908", hanzi:"特别", pinyin:"tèbié", meaning_ar:"خصوصي / جدًا", audio:"audio/hsk2/l09/v908.wav",
      example:{ hanzi:"今天特别冷。", pinyin:"jīntiān tèbié lěng", meaning_ar:"النهارده بردان جدًا." } }
  ],

  grammar: {
    title_ar: "جملة السبب والنتيجة 因为...所以...",
    explanation_ar: "زي بالظبط 'لأن... لذلك...' بالعربي، الجملة الأولى بتوضح السبب والتانية بتوضح النتيجة. ممكن تستخدمي واحدة منهم بس وتفهم من السياق.",
    pattern: "因为 + السبب،所以 + النتيجة",
    examples: [
      { hanzi:"因为我感冒了，所以没去上班。", pinyin:"yīnwèi wǒ gǎnmào le, suǒyǐ méi qù shàngbān", meaning_ar:"لأني اتبردت، عشان كده ماروحتش الشغل." }
    ]
  },

  practiceSentences: [
    { id:"p901", type:"fill_blank", hanzi:"___ 下雨，___ 我们不去公园了。", correctOrder:["因为","所以"], meaning_ar:"لأنها بتمطر، عشان كده مش هنروح الحديقة." }
  ],

  quiz: [
    { id:"q901", question_ar:"'رغم إن' بالصيني؟", vocabId:"v904",
      options:["因为","虽然","所以","除了"], correctIndex:1 },
    { id:"q902", question_ar:"إيه اللي بييجي بعد 因为؟", vocabId:"v901",
      options:["النتيجة","السبب","السؤال","الوقت"], correctIndex:1 },
    { id:"q903", question_ar:"إيه معنى 除了؟", vocabId:"v907",
      options:["كمان","ماعدا","رغم","لكن"], correctIndex:1 }
  ],

  cultureCard: {
    id:"c-hsk2-l09",
    icon:"🌀",
    title_ar:"ليه الصينيين نادرًا ما يقولوا 'لأ' بشكل مباشر؟",
    body_ar:"لو سألتي زميل صيني في العمل ينفع يساعدك، ونادرًا ما هتسمعي 不 (لأ) صريحة كإجابة. بدل كده هتسمعي حاجات زي 我考虑一下 (خليني أفكر) أو 可能有点困难 (ممكن يكون فيه شوية صعوبة)، وده رفض غير مباشر لكن مفهوم ضمنيًا. الرفض المباشر بيتفهم إنه قاسي وممكن يسبب إحراج (فقدان 面子) لأي طرف. فهم أدوات الربط زي 但是 و 虽然 مهم جدًا هنا، لأنها بتساعدك تلتقطي لما حد بيقولك 'لأ' من غير ما يستخدم الكلمة نفسها.",
    relatedTo:"daily_life"
  }
},

/* ------------------ الدرس 10: التخطيط للمستقبل والتكرار ------------------ */
{
  id: 10,
  level: "HSK2",
  title: "التخطيط للمستقبل والتكرار",
  title_cn: "计划",
  icon: "📅",

  words: [
    { id:"v1001", hanzi:"还", pinyin:"hái", meaning_ar:"لسه / برضه", audio:"audio/hsk2/l10/v1001.wav",
      example:{ hanzi:"我还没吃饭。", pinyin:"wǒ hái méi chīfàn", meaning_ar:"أنا لسه ماكلتش." } },
    { id:"v1002", hanzi:"再", pinyin:"zài", meaning_ar:"تاني (في المستقبل)", audio:"audio/hsk2/l10/v1002.wav",
      example:{ hanzi:"我们再见。", pinyin:"wǒmen zàijiàn", meaning_ar:"هنشوف بعض تاني." } },
    { id:"v1003", hanzi:"也", pinyin:"yě", meaning_ar:"كمان / برضه", audio:"audio/hsk2/l10/v1003.wav",
      example:{ hanzi:"我也想去。", pinyin:"wǒ yě xiǎng qù", meaning_ar:"أنا كمان عايز أروح." } },
    { id:"v1004", hanzi:"一起", pinyin:"yìqǐ", meaning_ar:"مع بعض", audio:"audio/hsk2/l10/v1004.wav",
      example:{ hanzi:"我们一起去吧。", pinyin:"wǒmen yìqǐ qù ba", meaning_ar:"يلا نروح مع بعض." } },
    { id:"v1005", hanzi:"已经", pinyin:"yǐjīng", meaning_ar:"خلاص / بالفعل", audio:"audio/hsk2/l10/v1005.wav",
      example:{ hanzi:"我已经吃了。", pinyin:"wǒ yǐjīng chī le", meaning_ar:"أنا خلاص كلت." } },
    { id:"v1006", hanzi:"快要...了", pinyin:"kuàiyào...le", meaning_ar:"على وشك / قرب", audio:"audio/hsk2/l10/v1006.wav",
      example:{ hanzi:"我快要到了。", pinyin:"wǒ kuàiyào dào le", meaning_ar:"أنا قربت أوصل." } },
    { id:"v1007", hanzi:"计划", pinyin:"jìhuà", meaning_ar:"خطة", audio:"audio/hsk2/l10/v1007.wav",
      example:{ hanzi:"你有什么计划？", pinyin:"nǐ yǒu shénme jìhuà", meaning_ar:"عندك إيه خطط؟" } },
    { id:"v1008", hanzi:"打算", pinyin:"dǎsuàn", meaning_ar:"ينوي", audio:"audio/hsk2/l10/v1008.wav",
      example:{ hanzi:"我打算明年去中国。", pinyin:"wǒ dǎsuàn míngnián qù zhōngguó", meaning_ar:"أنا ناوي أروح الصين السنة الجاية." } }
  ],

  grammar: {
    title_ar: "التعبير عن حدث قريب بـ 快要...了",
    explanation_ar: "التركيبة دي بتستخدم عشان تقولي إن حاجة هتحصل قريب أوي، زي 'على وشك' بالعربي. لازم 了 تيجي في آخر الجملة.",
    pattern: "快要 + الفعل/الصفة + 了",
    examples: [
      { hanzi:"电影快要开始了。", pinyin:"diànyǐng kuàiyào kāishǐ le", meaning_ar:"الفيلم هيبدأ قريب." }
    ]
  },

  practiceSentences: [
    { id:"p1001", type:"reorder", hanzi:"我们 明年 打算 一起 去 中国", correctOrder:["我们","打算","明年","一起","去","中国"], meaning_ar:"إحنا ناويين نروح الصين مع بعض السنة الجاية." }
  ],

  quiz: [
    { id:"q1001", question_ar:"'ينوي' بالصيني؟", vocabId:"v1008",
      options:["计划","打算","已经","快要"], correctIndex:1 },
    { id:"q1002", question_ar:"إزاي تقولي 'الفيلم هيبدأ قريب'؟", vocabId:"v1006",
      options:["电影已经开始","电影快要开始了","电影再开始","电影也开始了"], correctIndex:1 },
    { id:"q1003", question_ar:"إيه معنى 一起؟", vocabId:"v1004",
      options:["لسه","تاني","مع بعض","خلاص"], correctIndex:2 }
  ],

  cultureCard: {
    id:"c-hsk2-l10",
    icon:"🧧",
    title_ar:"ليه القرارات المستقبلية في الصين غالبًا مش قرار فردي؟",
    body_ar:"لما تسألي صديقة صينية عن خططها للمستقبل (计划)، هتلاحظي إن كتير من القرارات الكبيرة - الدراسة، الشغل، حتى الزواج - بتتاخد بمشاركة العيلة، مش قرار فردي بحت زي في تقاليد تانية. ده جزء من قيمة 孝 (بر الوالدين واحترامهم) اللي اتكلمنا عنها قبل كده، وبتمتد لفكرة إن نجاح الفرد هو في الأساس نجاح للعيلة كلها. عشان كده لو سألتي حد صيني 'إيه خطتك؟' ممكن تلاقيه بيقولك 'لسه بستشير أهلي' حتى لو هو كبير في السن ومستقل ماديًا.",
    relatedTo:"daily_life"
  }
}

];
