// بيانات مفردات HSK1 كاملة — 10 دروس، ~150 كلمة
// كل كلمة: الحرف الصيني، البينيين، المعنى بالعربي، مثال جملة (صيني + بينيين + عربي)

const HSK1_LESSONS = [
  {
    id: 1,
    title: "التحية والتعارف",
    words: [
      { char:"你", pinyin:"nǐ", ar:"إنتَ / إنتِ", ex_zh:"你好", ex_py:"nǐ hǎo", ex_ar:"مرحبًا (حرفيًا: إنت كويس)" },
      { char:"我", pinyin:"wǒ", ar:"أنا", ex_zh:"我是学生", ex_py:"wǒ shì xuésheng", ex_ar:"أنا طالب" },
      { char:"他 / 她", pinyin:"tā", ar:"هو / هي", ex_zh:"他是老师", ex_py:"tā shì lǎoshī", ex_ar:"هو مدرّس" },
      { char:"是", pinyin:"shì", ar:"يكون (فعل الكينونة)", ex_zh:"我是埃及人", ex_py:"wǒ shì Āijí rén", ex_ar:"أنا مصري" },
      { char:"叫", pinyin:"jiào", ar:"يُسمّى", ex_zh:"我叫Gehad", ex_py:"wǒ jiào Gehad", ex_ar:"اسمي Gehad" },
      { char:"名字", pinyin:"míngzi", ar:"اسم", ex_zh:"你叫什么名字？", ex_py:"nǐ jiào shénme míngzi", ex_ar:"إيه اسمك؟" },
      { char:"老师", pinyin:"lǎoshī", ar:"مدرّس / مدرّسة", ex_zh:"她是老师", ex_py:"tā shì lǎoshī", ex_ar:"هي مدرّسة" },
      { char:"学生", pinyin:"xuésheng", ar:"طالب / طالبة", ex_zh:"我是学生", ex_py:"wǒ shì xuésheng", ex_ar:"أنا طالب" },
      { char:"朋友", pinyin:"péngyou", ar:"صديق", ex_zh:"他是我朋友", ex_py:"tā shì wǒ péngyou", ex_ar:"هو صديقي" },
      { char:"认识", pinyin:"rènshi", ar:"يتعرّف على", ex_zh:"很高兴认识你", ex_py:"hěn gāoxìng rènshi nǐ", ex_ar:"فرصة سعيدة" },
      { char:"很", pinyin:"hěn", ar:"جدًا", ex_zh:"很好", ex_py:"hěn hǎo", ex_ar:"كويس جدًا" },
      { char:"高兴", pinyin:"gāoxìng", ar:"سعيد", ex_zh:"我很高兴", ex_py:"wǒ hěn gāoxìng", ex_ar:"أنا مبسوط جدًا" },
      { char:"谢谢", pinyin:"xièxie", ar:"شكرًا", ex_zh:"谢谢你", ex_py:"xièxie nǐ", ex_ar:"شكرًا لك" },
      { char:"不客气", pinyin:"bú kèqi", ar:"العفو", ex_zh:"不客气！", ex_py:"bú kèqi", ex_ar:"العفو!" },
      { char:"再见", pinyin:"zàijiàn", ar:"مع السلامة", ex_zh:"再见，明天见", ex_py:"zàijiàn, míngtiān jiàn", ex_ar:"مع السلامة، أشوفك بكرة" }
    ]
  },
  {
    id: 2,
    title: "الأرقام والعد",
    words: [
      { char:"一", pinyin:"yī", ar:"واحد", ex_zh:"一个人", ex_py:"yí ge rén", ex_ar:"شخص واحد" },
      { char:"二", pinyin:"èr", ar:"اتنين", ex_zh:"二月", ex_py:"èr yuè", ex_ar:"شهر فبراير" },
      { char:"三", pinyin:"sān", ar:"تلاتة", ex_zh:"三个苹果", ex_py:"sān ge píngguǒ", ex_ar:"تلات تفاحات" },
      { char:"四", pinyin:"sì", ar:"أربعة", ex_zh:"四点", ex_py:"sì diǎn", ex_ar:"الساعة أربعة" },
      { char:"五", pinyin:"wǔ", ar:"خمسة", ex_zh:"五个学生", ex_py:"wǔ ge xuésheng", ex_ar:"خمس طلاب" },
      { char:"六", pinyin:"liù", ar:"ستة", ex_zh:"六月", ex_py:"liù yuè", ex_ar:"شهر يونيو" },
      { char:"七", pinyin:"qī", ar:"سبعة", ex_zh:"七天", ex_py:"qī tiān", ex_ar:"سبع أيام" },
      { char:"八", pinyin:"bā", ar:"تمانية", ex_zh:"八点", ex_py:"bā diǎn", ex_ar:"الساعة تمانية" },
      { char:"九", pinyin:"jiǔ", ar:"تسعة", ex_zh:"九月", ex_py:"jiǔ yuè", ex_ar:"شهر سبتمبر" },
      { char:"十", pinyin:"shí", ar:"عشرة", ex_zh:"十个人", ex_py:"shí ge rén", ex_ar:"عشرة أشخاص" },
      { char:"零", pinyin:"líng", ar:"صفر", ex_zh:"零度", ex_py:"líng dù", ex_ar:"صفر درجة" },
      { char:"多少", pinyin:"duōshao", ar:"كام (لأرقام كبيرة)", ex_zh:"多少钱？", ex_py:"duōshao qián", ex_ar:"بكام؟" },
      { char:"几", pinyin:"jǐ", ar:"كام (لأرقام صغيرة)", ex_zh:"几点了？", ex_py:"jǐ diǎn le", ex_ar:"الساعة كام؟" },
      { char:"个", pinyin:"gè", ar:"كلمة عدّ عامة", ex_zh:"一个朋友", ex_py:"yí ge péngyou", ex_ar:"صديق واحد" },
      { char:"岁", pinyin:"suì", ar:"سنة (عمر)", ex_zh:"我二十岁", ex_py:"wǒ èrshí suì", ex_ar:"أنا عندي عشرين سنة" }
    ]
  },
  {
    id: 3,
    title: "الأسرة والناس",
    words: [
      { char:"爸爸", pinyin:"bàba", ar:"بابا", ex_zh:"我爸爸是医生", ex_py:"wǒ bàba shì yīshēng", ex_ar:"بابا دكتور" },
      { char:"妈妈", pinyin:"māma", ar:"ماما", ex_zh:"我妈妈很漂亮", ex_py:"wǒ māma hěn piàoliang", ex_ar:"ماما جميلة جدًا" },
      { char:"儿子", pinyin:"érzi", ar:"ابن", ex_zh:"他有一个儿子", ex_py:"tā yǒu yí ge érzi", ex_ar:"عنده ابن واحد" },
      { char:"女儿", pinyin:"nǚ'ér", ar:"بنت", ex_zh:"她有两个女儿", ex_py:"tā yǒu liǎng ge nǚ'ér", ex_ar:"عندها بنتين" },
      { char:"家", pinyin:"jiā", ar:"بيت / عيلة", ex_zh:"我家在开罗", ex_py:"wǒ jiā zài Kāiluó", ex_ar:"بيتي في القاهرة" },
      { char:"先生", pinyin:"xiānsheng", ar:"سيد / زوج", ex_zh:"王先生", ex_py:"Wáng xiānsheng", ex_ar:"السيد وانج" },
      { char:"小姐", pinyin:"xiǎojiě", ar:"آنسة", ex_zh:"李小姐", ex_py:"Lǐ xiǎojiě", ex_ar:"الآنسة لي" },
      { char:"同学", pinyin:"tóngxué", ar:"زميل دراسة", ex_zh:"他是我同学", ex_py:"tā shì wǒ tóngxué", ex_ar:"هو زميلي في الدراسة" },
      { char:"人", pinyin:"rén", ar:"شخص / إنسان", ex_zh:"中国人", ex_py:"Zhōngguó rén", ex_ar:"شخص صيني" },
      { char:"猫", pinyin:"māo", ar:"قطة", ex_zh:"我有一只猫", ex_py:"wǒ yǒu yì zhī māo", ex_ar:"عندي قطة" },
      { char:"狗", pinyin:"gǒu", ar:"كلب", ex_zh:"那是我的狗", ex_py:"nà shì wǒ de gǒu", ex_ar:"ده كلبي" },
      { char:"谁", pinyin:"shéi", ar:"مين", ex_zh:"他是谁？", ex_py:"tā shì shéi", ex_ar:"هو مين؟" },
      { char:"我们", pinyin:"wǒmen", ar:"إحنا", ex_zh:"我们是朋友", ex_py:"wǒmen shì péngyou", ex_ar:"إحنا أصحاب" },
      { char:"你们", pinyin:"nǐmen", ar:"إنتم", ex_zh:"你们好", ex_py:"nǐmen hǎo", ex_ar:"مرحبًا بيكم" },
      { char:"他们", pinyin:"tāmen", ar:"هم", ex_zh:"他们是学生", ex_py:"tāmen shì xuésheng", ex_ar:"هم طلاب" }
    ]
  },
  {
    id: 4,
    title: "الوقت",
    words: [
      { char:"现在", pinyin:"xiànzài", ar:"دلوقتي", ex_zh:"现在几点？", ex_py:"xiànzài jǐ diǎn", ex_ar:"الساعة كام دلوقتي؟" },
      { char:"今天", pinyin:"jīntiān", ar:"النهاردة", ex_zh:"今天星期几？", ex_py:"jīntiān xīngqī jǐ", ex_ar:"النهاردة إيه اليوم؟" },
      { char:"明天", pinyin:"míngtiān", ar:"بكرة", ex_zh:"明天见", ex_py:"míngtiān jiàn", ex_ar:"أشوفك بكرة" },
      { char:"昨天", pinyin:"zuótiān", ar:"إمبارح", ex_zh:"昨天很冷", ex_py:"zuótiān hěn lěng", ex_ar:"إمبارح كان برد جدًا" },
      { char:"年", pinyin:"nián", ar:"سنة", ex_zh:"今年", ex_py:"jīnnián", ex_ar:"السنة دي" },
      { char:"月", pinyin:"yuè", ar:"شهر", ex_zh:"这个月", ex_py:"zhège yuè", ex_ar:"الشهر ده" },
      { char:"星期", pinyin:"xīngqī", ar:"أسبوع / يوم في الأسبوع", ex_zh:"星期一", ex_py:"xīngqīyī", ex_ar:"يوم الاتنين" },
      { char:"点", pinyin:"diǎn", ar:"الساعة (وقت)", ex_zh:"三点", ex_py:"sān diǎn", ex_ar:"الساعة تلاتة" },
      { char:"分钟", pinyin:"fēnzhōng", ar:"دقيقة", ex_zh:"十分钟", ex_py:"shí fēnzhōng", ex_ar:"عشر دقايق" },
      { char:"时候", pinyin:"shíhou", ar:"وقت / لحظة", ex_zh:"什么时候？", ex_py:"shénme shíhou", ex_ar:"إمتى؟" },
      { char:"上午", pinyin:"shàngwǔ", ar:"الصبح", ex_zh:"上午九点", ex_py:"shàngwǔ jiǔ diǎn", ex_ar:"الساعة تسعة الصبح" },
      { char:"下午", pinyin:"xiàwǔ", ar:"بعد الضهر", ex_zh:"下午三点", ex_py:"xiàwǔ sān diǎn", ex_ar:"الساعة تلاتة بعد الضهر" },
      { char:"中午", pinyin:"zhōngwǔ", ar:"الضهر", ex_zh:"中午吃饭", ex_py:"zhōngwǔ chī fàn", ex_ar:"الأكل وقت الضهر" },
      { char:"号", pinyin:"hào", ar:"تاريخ / رقم", ex_zh:"八月三号", ex_py:"bā yuè sān hào", ex_ar:"3 أغسطس" },
      { char:"一点儿", pinyin:"yìdiǎnr", ar:"شوية", ex_zh:"一点儿水", ex_py:"yìdiǎnr shuǐ", ex_ar:"شوية مية" }
    ]
  },
  {
    id: 5,
    title: "الأكل والشرب",
    words: [
      { char:"吃", pinyin:"chī", ar:"ياكل", ex_zh:"我吃米饭", ex_py:"wǒ chī mǐfàn", ex_ar:"أنا باكل أرز" },
      { char:"喝", pinyin:"hē", ar:"يشرب", ex_zh:"喝茶", ex_py:"hē chá", ex_ar:"يشرب شاي" },
      { char:"茶", pinyin:"chá", ar:"شاي", ex_zh:"一杯茶", ex_py:"yì bēi chá", ex_ar:"كوباية شاي" },
      { char:"水", pinyin:"shuǐ", ar:"مية", ex_zh:"喝水", ex_py:"hē shuǐ", ex_ar:"يشرب مية" },
      { char:"米饭", pinyin:"mǐfàn", ar:"أرز", ex_zh:"米饭很好吃", ex_py:"mǐfàn hěn hǎochī", ex_ar:"الأرز طعمه حلو" },
      { char:"苹果", pinyin:"píngguǒ", ar:"تفاحة", ex_zh:"一个苹果", ex_py:"yí ge píngguǒ", ex_ar:"تفاحة واحدة" },
      { char:"水果", pinyin:"shuǐguǒ", ar:"فاكهة", ex_zh:"我喜欢水果", ex_py:"wǒ xǐhuan shuǐguǒ", ex_ar:"أنا بحب الفاكهة" },
      { char:"菜", pinyin:"cài", ar:"أكلة / خضار", ex_zh:"这个菜很好吃", ex_py:"zhège cài hěn hǎochī", ex_ar:"الأكلة دي طعمها حلو" },
      { char:"杯子", pinyin:"bēizi", ar:"كوباية", ex_zh:"一个杯子", ex_py:"yí ge bēizi", ex_ar:"كوباية واحدة" },
      { char:"饭店", pinyin:"fàndiàn", ar:"مطعم / فندق", ex_zh:"去饭店吃饭", ex_py:"qù fàndiàn chī fàn", ex_ar:"نروح المطعم ناكل" },
      { char:"喜欢", pinyin:"xǐhuan", ar:"يحب", ex_zh:"我喜欢中国菜", ex_py:"wǒ xǐhuan Zhōngguó cài", ex_ar:"أنا بحب الأكل الصيني" },
      { char:"些", pinyin:"xiē", ar:"شوية / بعض", ex_zh:"一些水果", ex_py:"yìxiē shuǐguǒ", ex_ar:"شوية فاكهة" },
      { char:"东西", pinyin:"dōngxi", ar:"حاجة / أشياء", ex_zh:"买东西", ex_py:"mǎi dōngxi", ex_ar:"يشتري حاجات" },
      { char:"好", pinyin:"hǎo", ar:"كويس", ex_zh:"很好吃", ex_py:"hěn hǎochī", ex_ar:"طعمه حلو جدًا" },
      { char:"太", pinyin:"tài", ar:"جدًا (زيادة)", ex_zh:"太好了", ex_py:"tài hǎo le", ex_ar:"تمام أوي!" }
    ]
  },
  {
    id: 6,
    title: "الأماكن والاتجاهات",
    words: [
      { char:"在", pinyin:"zài", ar:"موجود في", ex_zh:"我在家", ex_py:"wǒ zài jiā", ex_ar:"أنا في البيت" },
      { char:"这", pinyin:"zhè", ar:"ده / دي", ex_zh:"这是我的书", ex_py:"zhè shì wǒ de shū", ex_ar:"ده كتابي" },
      { char:"那", pinyin:"nà", ar:"ده (بعيد)", ex_zh:"那是他的车", ex_py:"nà shì tā de chē", ex_ar:"دي عربيته" },
      { char:"哪", pinyin:"nǎ", ar:"أنهي", ex_zh:"哪个好？", ex_py:"nǎge hǎo", ex_ar:"أنهي واحد أحسن؟" },
      { char:"哪儿", pinyin:"nǎr", ar:"فين", ex_zh:"你在哪儿？", ex_py:"nǐ zài nǎr", ex_ar:"إنت فين؟" },
      { char:"里", pinyin:"lǐ", ar:"جوّه", ex_zh:"家里", ex_py:"jiā lǐ", ex_ar:"جوّه البيت" },
      { char:"前面", pinyin:"qiánmiàn", ar:"قدام", ex_zh:"学校前面", ex_py:"xuéxiào qiánmiàn", ex_ar:"قدام المدرسة" },
      { char:"后面", pinyin:"hòumiàn", ar:"ورا", ex_zh:"医院后面", ex_py:"yīyuàn hòumiàn", ex_ar:"ورا المستشفى" },
      { char:"上", pinyin:"shàng", ar:"فوق", ex_zh:"桌子上", ex_py:"zhuōzi shàng", ex_ar:"فوق الترابيزة" },
      { char:"下", pinyin:"xià", ar:"تحت", ex_zh:"桌子下", ex_py:"zhuōzi xià", ex_ar:"تحت الترابيزة" },
      { char:"中国", pinyin:"Zhōngguó", ar:"الصين", ex_zh:"我去中国", ex_py:"wǒ qù Zhōngguó", ex_ar:"أنا رايح الصين" },
      { char:"北京", pinyin:"Běijīng", ar:"بكين", ex_zh:"北京很大", ex_py:"Běijīng hěn dà", ex_ar:"بكين مدينة كبيرة" },
      { char:"学校", pinyin:"xuéxiào", ar:"مدرسة", ex_zh:"去学校", ex_py:"qù xuéxiào", ex_ar:"يروح المدرسة" },
      { char:"医院", pinyin:"yīyuàn", ar:"مستشفى", ex_zh:"去医院", ex_py:"qù yīyuàn", ex_ar:"يروح المستشفى" },
      { char:"商店", pinyin:"shāngdiàn", ar:"محل", ex_zh:"这个商店", ex_py:"zhège shāngdiàn", ex_ar:"المحل ده" }
    ]
  },
  {
    id: 7,
    title: "الأفعال اليومية",
    words: [
      { char:"看", pinyin:"kàn", ar:"يشوف / يقرا", ex_zh:"看电视", ex_py:"kàn diànshì", ex_ar:"يتفرج على التلفزيون" },
      { char:"看见", pinyin:"kànjiàn", ar:"يشوف (لمح)", ex_zh:"我看见他了", ex_py:"wǒ kànjiàn tā le", ex_ar:"شفته" },
      { char:"听", pinyin:"tīng", ar:"يسمع", ex_zh:"听音乐", ex_py:"tīng yīnyuè", ex_ar:"يسمع موسيقى" },
      { char:"说", pinyin:"shuō", ar:"يقول / يتكلم", ex_zh:"说汉语", ex_py:"shuō Hànyǔ", ex_ar:"يتكلم صيني" },
      { char:"读", pinyin:"dú", ar:"يقرا (بصوت)", ex_zh:"读书", ex_py:"dú shū", ex_ar:"يقرا كتاب" },
      { char:"来", pinyin:"lái", ar:"ييجي", ex_zh:"他来了", ex_py:"tā lái le", ex_ar:"هو جه" },
      { char:"去", pinyin:"qù", ar:"يروح", ex_zh:"去学校", ex_py:"qù xuéxiào", ex_ar:"يروح المدرسة" },
      { char:"回", pinyin:"huí", ar:"يرجع", ex_zh:"回家", ex_py:"huí jiā", ex_ar:"يرجع البيت" },
      { char:"开", pinyin:"kāi", ar:"يفتح / يسوق", ex_zh:"开车", ex_py:"kāi chē", ex_ar:"يسوق عربية" },
      { char:"打电话", pinyin:"dǎ diànhuà", ar:"يتصل تليفونيًا", ex_zh:"给我打电话", ex_py:"gěi wǒ dǎ diànhuà", ex_ar:"اتصل بيا" },
      { char:"睡觉", pinyin:"shuìjiào", ar:"ينام", ex_zh:"我要睡觉了", ex_py:"wǒ yào shuìjiào le", ex_ar:"هنام دلوقتي" },
      { char:"工作", pinyin:"gōngzuò", ar:"يشتغل / شغل", ex_zh:"我在工作", ex_py:"wǒ zài gōngzuò", ex_ar:"أنا بشتغل دلوقتي" },
      { char:"学习", pinyin:"xuéxí", ar:"يذاكر / يتعلم", ex_zh:"学习汉语", ex_py:"xuéxí Hànyǔ", ex_ar:"يتعلم صيني" },
      { char:"住", pinyin:"zhù", ar:"يسكن", ex_zh:"你住在哪儿？", ex_py:"nǐ zhù zài nǎr", ex_ar:"إنت ساكن فين؟" },
      { char:"做", pinyin:"zuò", ar:"يعمل", ex_zh:"做什么？", ex_py:"zuò shénme", ex_ar:"بتعمل إيه؟" }
    ]
  },
  {
    id: 8,
    title: "الطقس والوصف",
    words: [
      { char:"天气", pinyin:"tiānqì", ar:"الطقس", ex_zh:"今天天气很好", ex_py:"jīntiān tiānqì hěn hǎo", ex_ar:"النهاردة الطقس حلو" },
      { char:"冷", pinyin:"lěng", ar:"برد", ex_zh:"今天很冷", ex_py:"jīntiān hěn lěng", ex_ar:"النهاردة برد جدًا" },
      { char:"热", pinyin:"rè", ar:"حر", ex_zh:"夏天很热", ex_py:"xiàtiān hěn rè", ex_ar:"الصيف بيبقى حر جدًا" },
      { char:"下雨", pinyin:"xiàyǔ", ar:"بتنزل مطر", ex_zh:"外面下雨了", ex_py:"wàimiàn xiàyǔ le", ex_ar:"بره بتمطر" },
      { char:"大", pinyin:"dà", ar:"كبير", ex_zh:"大房子", ex_py:"dà fángzi", ex_ar:"بيت كبير" },
      { char:"小", pinyin:"xiǎo", ar:"صغير", ex_zh:"小狗", ex_py:"xiǎo gǒu", ex_ar:"كلب صغير" },
      { char:"漂亮", pinyin:"piàoliang", ar:"جميل", ex_zh:"很漂亮", ex_py:"hěn piàoliang", ex_ar:"جميل جدًا" },
      { char:"多", pinyin:"duō", ar:"كتير", ex_zh:"很多人", ex_py:"hěn duō rén", ex_ar:"ناس كتير" },
      { char:"少", pinyin:"shǎo", ar:"قليل", ex_zh:"很少", ex_py:"hěn shǎo", ex_ar:"قليل جدًا" },
      { char:"能", pinyin:"néng", ar:"يقدر", ex_zh:"我能去", ex_py:"wǒ néng qù", ex_ar:"أنا أقدر أروح" },
      { char:"会", pinyin:"huì", ar:"يعرف يعمل", ex_zh:"我会说汉语", ex_py:"wǒ huì shuō Hànyǔ", ex_ar:"أنا أعرف أتكلم صيني" },
      { char:"想", pinyin:"xiǎng", ar:"عايز / يفكر", ex_zh:"我想去中国", ex_py:"wǒ xiǎng qù Zhōngguó", ex_ar:"عايز أروح الصين" },
      { char:"没有", pinyin:"méiyǒu", ar:"معندوش / مفيش", ex_zh:"我没有钱", ex_py:"wǒ méiyǒu qián", ex_ar:"معنديش فلوس" },
      { char:"都", pinyin:"dōu", ar:"كله / الكل", ex_zh:"我们都是学生", ex_py:"wǒmen dōu shì xuésheng", ex_ar:"كلنا طلاب" },
      { char:"对不起", pinyin:"duìbuqǐ", ar:"آسف", ex_zh:"对不起！", ex_py:"duìbuqǐ", ex_ar:"آسف!" }
    ]
  },
  {
    id: 9,
    title: "التسوق والأغراض اليومية",
    words: [
      { char:"钱", pinyin:"qián", ar:"فلوس", ex_zh:"多少钱？", ex_py:"duōshao qián", ex_ar:"بكام؟" },
      { char:"买", pinyin:"mǎi", ar:"يشتري", ex_zh:"我想买苹果", ex_py:"wǒ xiǎng mǎi píngguǒ", ex_ar:"عايز أشتري تفاح" },
      { char:"块", pinyin:"kuài", ar:"وحدة عملة (جنيه/يوان)", ex_zh:"十块钱", ex_py:"shí kuài qián", ex_ar:"عشرة جنيه" },
      { char:"衣服", pinyin:"yīfu", ar:"هدوم", ex_zh:"买衣服", ex_py:"mǎi yīfu", ex_ar:"يشتري هدوم" },
      { char:"出租车", pinyin:"chūzūchē", ar:"تاكسي", ex_zh:"坐出租车", ex_py:"zuò chūzūchē", ex_ar:"يركب تاكسي" },
      { char:"飞机", pinyin:"fēijī", ar:"طيارة", ex_zh:"坐飞机", ex_py:"zuò fēijī", ex_ar:"يركب طيارة" },
      { char:"请", pinyin:"qǐng", ar:"من فضلك / يدعو", ex_zh:"请坐", ex_py:"qǐng zuò", ex_ar:"اتفضل اقعد" },
      { char:"没关系", pinyin:"méi guānxi", ar:"معلش / مفيش مشكلة", ex_zh:"没关系！", ex_py:"méi guānxi", ex_ar:"معلش، مفيش مشكلة" },
      { char:"汉语", pinyin:"Hànyǔ", ar:"اللغة الصينية", ex_zh:"学习汉语", ex_py:"xuéxí Hànyǔ", ex_ar:"يتعلم صيني" },
      { char:"书", pinyin:"shū", ar:"كتاب", ex_zh:"一本书", ex_py:"yì běn shū", ex_ar:"كتاب واحد" },
      { char:"桌子", pinyin:"zhuōzi", ar:"ترابيزة", ex_zh:"一张桌子", ex_py:"yì zhāng zhuōzi", ex_ar:"ترابيزة واحدة" },
      { char:"椅子", pinyin:"yǐzi", ar:"كرسي", ex_zh:"坐在椅子上", ex_py:"zuò zài yǐzi shàng", ex_ar:"قاعد على الكرسي" },
      { char:"电脑", pinyin:"diànnǎo", ar:"كمبيوتر", ex_zh:"用电脑", ex_py:"yòng diànnǎo", ex_ar:"يستخدم الكمبيوتر" },
      { char:"医生", pinyin:"yīshēng", ar:"دكتور", ex_zh:"他是医生", ex_py:"tā shì yīshēng", ex_ar:"هو دكتور" },
      { char:"电视", pinyin:"diànshì", ar:"تلفزيون", ex_zh:"看电视", ex_py:"kàn diànshì", ex_ar:"يتفرج على التلفزيون" }
    ]
  },
  {
    id: 10,
    title: "أدوات السؤال والربط",
    words: [
      { char:"什么", pinyin:"shénme", ar:"إيه", ex_zh:"这是什么？", ex_py:"zhè shì shénme", ex_ar:"ده إيه؟" },
      { char:"怎么", pinyin:"zěnme", ar:"إزاي", ex_zh:"怎么去？", ex_py:"zěnme qù", ex_ar:"نروح إزاي؟" },
      { char:"怎么样", pinyin:"zěnmeyàng", ar:"عامل إيه / رأيك إيه", ex_zh:"这个怎么样？", ex_py:"zhège zěnmeyàng", ex_ar:"رأيك إيه في ده؟" },
      { char:"呢", pinyin:"ne", ar:"أداة سؤال (وانت؟)", ex_zh:"你呢？", ex_py:"nǐ ne", ex_ar:"وانت؟" },
      { char:"吗", pinyin:"ma", ar:"أداة سؤال نعم/لا", ex_zh:"你好吗？", ex_py:"nǐ hǎo ma", ex_ar:"إزيك؟" },
      { char:"的", pinyin:"de", ar:"أداة ملكية (بتاع)", ex_zh:"我的书", ex_py:"wǒ de shū", ex_ar:"كتابي" },
      { char:"了", pinyin:"le", ar:"أداة تدل على اكتمال الفعل", ex_zh:"我吃了", ex_py:"wǒ chī le", ex_ar:"أنا كلت خلاص" },
      { char:"和", pinyin:"hé", ar:"و", ex_zh:"我和你", ex_py:"wǒ hé nǐ", ex_ar:"أنا وإنت" },
      { char:"喂", pinyin:"wéi", ar:"ألو (في التليفون)", ex_zh:"喂，你好", ex_py:"wéi, nǐ hǎo", ex_ar:"ألو، إزيك" },
      { char:"爱", pinyin:"ài", ar:"يحب (حب عميق)", ex_zh:"我爱你", ex_py:"wǒ ài nǐ", ex_ar:"بحبك" },
      { char:"字", pinyin:"zì", ar:"حرف / كلمة مكتوبة", ex_zh:"汉字", ex_py:"Hànzì", ex_ar:"الحرف الصيني" },
      { char:"电影", pinyin:"diànyǐng", ar:"فيلم", ex_zh:"看电影", ex_py:"kàn diànyǐng", ex_ar:"يتفرج على فيلم" },
      { char:"坐", pinyin:"zuò", ar:"يقعد / يركب", ex_zh:"请坐", ex_py:"qǐng zuò", ex_ar:"اتفضل اقعد" },
      { char:"本", pinyin:"běn", ar:"كلمة عدّ للكتب", ex_zh:"两本书", ex_py:"liǎng běn shū", ex_ar:"كتابين" }
    ]
  }
];
