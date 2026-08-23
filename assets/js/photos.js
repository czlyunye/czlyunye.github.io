/* ============================================
   照片清单 —— 添加新照片只需两步：
   1. 把图片文件放进 images/gallery/（建议长边 ≤ 2400px）
   2. 在下方 PHOTOS 数组里复制一段，改成新照片的信息
   category 可选值：shanye 山野 / guangying 光影 / renxiang 人像 / chengshi 城市
   featured: true 表示该照片作为首页"精选摄影"展示（全列表只标一张）
   ============================================ */

const PHOTO_CATEGORIES = [
  { id: "all",       zh: "全部", en: "All" },
  { id: "shanye",    zh: "山野", en: "Mountains" },
  { id: "guangying", zh: "光影", en: "Light & Shadow" },
  { id: "renxiang",  zh: "人像", en: "Portraits" },
  { id: "chengshi",  zh: "城市", en: "City" },
];

const PHOTOS = [
  /* ---------- 山野 ---------- */
  {
    src: "images/gallery/shanye-01.jpg", thumb: "images/gallery/thumbs/shanye-01.jpg",
    category: "shanye",
    title: { zh: "金光落在湖面上，有人停下来看山", en: "Golden light on the lake; someone stops to watch the mountains" },
    location: { zh: "新疆 · 博尔塔拉", en: "Bortala, Xinjiang" }, year: "2026"
  },
  {
    src: "images/gallery/shanye-02.jpg", thumb: "images/gallery/thumbs/shanye-02.jpg",
    category: "shanye",
    title: { zh: "雪山林海，通往云端之路", en: "Snow peaks and forests — a road into the clouds" },
    location: { zh: "新疆 · 伊犁", en: "Ili, Xinjiang" }, year: "2026"
  },
  {
    src: "images/gallery/shanye-03.jpg", thumb: "images/gallery/thumbs/shanye-03.jpg",
    category: "shanye", featured: true,
    title: { zh: "星河见证，青春万岁", en: "The galaxy bears witness — long live youth" },
    location: { zh: "新疆 · 博尔塔拉", en: "Bortala, Xinjiang" }, year: "2026"
  },
  {
    src: "images/gallery/shanye-04.jpg", thumb: "images/gallery/thumbs/shanye-04.jpg",
    category: "shanye",
    title: { zh: "坐看山河奔向远方", en: "Sitting still, watching the land run to the horizon" },
    location: { zh: "新疆 · 伊犁", en: "Ili, Xinjiang" }, year: "2026"
  },
  {
    src: "images/gallery/shanye-05.jpg", thumb: "images/gallery/thumbs/shanye-05.jpg",
    category: "shanye",
    title: { zh: "独自站在漫天星辰的怀抱里", en: "Standing alone in the embrace of a starry sky" },
    location: { zh: "新疆 · 博尔塔拉", en: "Bortala, Xinjiang" }, year: "2026"
  },
  {
    src: "images/gallery/shanye-06.jpg", thumb: "images/gallery/thumbs/shanye-06.jpg",
    category: "shanye",
    title: { zh: "在苍茫草甸上与星河对话", en: "A conversation with the Milky Way on a vast meadow" },
    location: { zh: "山西 · 荷叶坪", en: "Heyeping, Shanxi" }, year: "2026"
  },
  {
    src: "images/gallery/shanye-07.jpg", thumb: "images/gallery/thumbs/shanye-07.jpg",
    category: "shanye",
    title: { zh: "天边烧红旷野的梦", en: "The horizon sets the wilderness dreaming in red" },
    location: { zh: "内蒙古 · 乌兰察布", en: "Ulanqab, Inner Mongolia" }, year: "2026"
  },
  {
    src: "images/gallery/shanye-08.jpg", thumb: "images/gallery/thumbs/shanye-08.jpg",
    category: "shanye",
    title: { zh: "林海雪原，纯净得不染纤尘", en: "Forest sea and snowfield, pure beyond dust" },
    location: { zh: "黑龙江 · 哈尔滨", en: "Harbin, Heilongjiang" }, year: "2026"
  },
  {
    src: "images/gallery/shanye-09.jpg", thumb: "images/gallery/thumbs/shanye-09.jpg",
    category: "shanye",
    title: { zh: "雾凇摇醒一山晴光", en: "Rime ice wakes a mountain of clear light" },
    location: { zh: "黑龙江 · 哈尔滨", en: "Harbin, Heilongjiang" }, year: "2026"
  },
  {
    src: "images/gallery/shanye-10.jpg", thumb: "images/gallery/thumbs/shanye-10.jpg",
    category: "shanye",
    title: { zh: "漫山红叶，点燃整个深秋", en: "Red leaves set the whole of late autumn alight" },
    location: { zh: "山东 · 济南", en: "Jinan, Shandong" }, year: "2026"
  },
  {
    src: "images/gallery/shanye-11.jpg", thumb: "images/gallery/thumbs/shanye-11.jpg",
    category: "shanye",
    title: { zh: "悬崖云台，俯瞰漫山秋色", en: "A cliffside platform overlooking autumn hills" },
    location: { zh: "山东 · 淄博", en: "Zibo, Shandong" }, year: "2026"
  },
  {
    src: "images/gallery/shanye-12.jpg", thumb: "images/gallery/thumbs/shanye-12.jpg",
    category: "shanye",
    title: { zh: "暮色熔金，照亮苍茫原野", en: "Dusk melts into gold over the vast wilds" },
    location: { zh: "内蒙古 · 乌兰察布", en: "Ulanqab, Inner Mongolia" }, year: "2026"
  },
  {
    src: "images/gallery/shanye-13.jpg", thumb: "images/gallery/thumbs/shanye-13.jpg",
    category: "shanye",
    title: { zh: "云隙漏下万丈天光", en: "Ten thousand rays of skylight through the clouds" },
    location: { zh: "内蒙古 · 乌兰察布", en: "Ulanqab, Inner Mongolia" }, year: "2026"
  },
  {
    src: "images/gallery/shanye-14.jpg", thumb: "images/gallery/thumbs/shanye-14.jpg",
    category: "shanye",
    title: { zh: "风吹云走，青草连绵", en: "Wind moves the clouds; green grass rolls on" },
    location: { zh: "内蒙古 · 乌兰察布", en: "Ulanqab, Inner Mongolia" }, year: "2026"
  },

  /* ---------- 光影 ---------- */
  {
    src: "images/gallery/guangying-01.jpg", thumb: "images/gallery/thumbs/guangying-01.jpg",
    category: "guangying",
    title: { zh: "红墙春树下，长椅坐暖一段光阴", en: "Beneath spring trees by red walls, a bench warms a stretch of time" },
    location: { zh: "中国 · 北京", en: "Beijing, China" }, year: "2026"
  },
  {
    src: "images/gallery/guangying-02.jpg", thumb: "images/gallery/thumbs/guangying-02.jpg",
    category: "guangying",
    title: { zh: "旧窗收藏午后微光", en: "An old window keeps the afternoon's soft light" },
    location: { zh: "山东 · 潍坊", en: "Weifang, Shandong" }, year: "2026"
  },
  {
    src: "images/gallery/guangying-03.jpg", thumb: "images/gallery/thumbs/guangying-03.jpg",
    category: "guangying",
    title: { zh: "仰头是漫天盛放的春天", en: "Look up: a whole sky of spring in bloom" },
    location: { zh: "山东 · 济南", en: "Jinan, Shandong" }, year: "2026"
  },
  {
    src: "images/gallery/guangying-04.jpg", thumb: "images/gallery/thumbs/guangying-04.jpg",
    category: "guangying",
    title: { zh: "一叶轻舟裁开碧水", en: "A small boat cuts through green water" },
    location: { zh: "山东 · 威海", en: "Weihai, Shandong" }, year: "2026"
  },
  {
    src: "images/gallery/guangying-05.jpg", thumb: "images/gallery/thumbs/guangying-05.jpg",
    category: "guangying",
    title: { zh: "走入《南来北往》的冬日暖阳里", en: "Stepping into the winter sunshine of “Always on the Move”" },
    location: { zh: "山东 · 潍坊", en: "Weifang, Shandong" }, year: "2026"
  },
  {
    src: "images/gallery/guangying-06.jpg", thumb: "images/gallery/thumbs/guangying-06.jpg",
    category: "guangying",
    title: { zh: "琉璃瓦上落满风雪的故事", en: "Glazed tiles gather stories of wind and snow" },
    location: { zh: "山东 · 济南", en: "Jinan, Shandong" }, year: "2026"
  },
  {
    src: "images/gallery/guangying-07.jpg", thumb: "images/gallery/thumbs/guangying-07.jpg",
    category: "guangying",
    title: { zh: "一场大雪，染白了水榭亭台", en: "One heavy snowfall whitens the waterside pavilions" },
    location: { zh: "山东 · 济南", en: "Jinan, Shandong" }, year: "2026"
  },

  /* ---------- 人像 ---------- */
  {
    src: "images/gallery/renxiang-01.jpg", thumb: "images/gallery/thumbs/renxiang-01.jpg",
    category: "renxiang",
    title: { zh: "在钢铁森林里做孤傲的梦", en: "Dreaming a proud dream in the concrete forest" },
    location: { zh: "中国 · 上海", en: "Shanghai, China" }, year: "2026",
    desc: { zh: "出镜 @DuooD", en: "Model: @DuooD" }
  },
  {
    src: "images/gallery/renxiang-02.jpg", thumb: "images/gallery/thumbs/renxiang-02.jpg",
    category: "renxiang",
    title: { zh: "走入岩井俊二的冬天", en: "Walking into a Shunji Iwai winter" },
    location: { zh: "山东 · 青州", en: "Qingzhou, Shandong" }, year: "2026",
    desc: { zh: "出镜 @Seraphina.", en: "Model: @Seraphina." }
  },
  {
    src: "images/gallery/renxiang-03.jpg", thumb: "images/gallery/thumbs/renxiang-03.jpg",
    category: "renxiang",
    title: { zh: "池畔并肩，许一场盛世清欢", en: "Side by side by the pond, a promise of quiet joy" },
    location: { zh: "山东 · 青州", en: "Qingzhou, Shandong" }, year: "2026",
    desc: { zh: "出镜 @九色鹿", en: "Model: @九色鹿" }
  },
  {
    src: "images/gallery/renxiang-04.jpg", thumb: "images/gallery/thumbs/renxiang-04.jpg",
    category: "renxiang",
    title: { zh: "玉兰如雪人如画，惊艳了红楼春色", en: "Magnolias like snow, her like a painting — spring dazzled at the red house" },
    location: { zh: "中国 · 北京", en: "Beijing, China" }, year: "2026",
    desc: { zh: "出镜 @小杨崽", en: "Model: @小杨崽" }
  },

  /* ---------- 城市 ---------- */
  {
    src: "images/gallery/chengshi-01.jpg", thumb: "images/gallery/thumbs/chengshi-01.jpg",
    category: "chengshi",
    title: { zh: "雪山与晨光亲吻海湾", en: "Snowy peaks and morning light kiss the bay" },
    location: { zh: "山东 · 威海", en: "Weihai, Shandong" }, year: "2026"
  },
  {
    src: "images/gallery/chengshi-02.jpg", thumb: "images/gallery/thumbs/chengshi-02.jpg",
    category: "chengshi",
    title: { zh: "在城市的街道直面群山", en: "Facing the mountains from a city street" },
    location: { zh: "山东 · 威海", en: "Weihai, Shandong" }, year: "2026"
  },
  {
    src: "images/gallery/chengshi-03.jpg", thumb: "images/gallery/thumbs/chengshi-03.jpg",
    category: "chengshi",
    title: { zh: "刻在大地上的百年回响", en: "A century of echoes carved into the land" },
    location: { zh: "山东 · 威海", en: "Weihai, Shandong" }, year: "2026"
  },
  {
    src: "images/gallery/chengshi-04.jpg", thumb: "images/gallery/thumbs/chengshi-04.jpg",
    category: "chengshi",
    title: { zh: "烟火照亮一城欢喜", en: "Fireworks light up a city of joy" },
    location: { zh: "浙江 · 湖州", en: "Huzhou, Zhejiang" }, year: "2026"
  },
  {
    src: "images/gallery/chengshi-05.jpg", thumb: "images/gallery/thumbs/chengshi-05.jpg",
    category: "chengshi",
    title: { zh: "人间聚落山河之间", en: "A human settlement nestled between mountains and rivers" },
    location: { zh: "安徽 · 黄山", en: "Huangshan, Anhui" }, year: "2026"
  },
  {
    src: "images/gallery/chengshi-06.jpg", thumb: "images/gallery/thumbs/chengshi-06.jpg",
    category: "chengshi",
    title: { zh: "风雪古桥，静候归人步履", en: "An old bridge in the snow, waiting for returning steps" },
    location: { zh: "山东 · 济南", en: "Jinan, Shandong" }, year: "2026"
  },
  {
    src: "images/gallery/chengshi-07.jpg", thumb: "images/gallery/thumbs/chengshi-07.jpg",
    category: "chengshi",
    title: { zh: "现代都会的不夜天际线", en: "The sleepless skyline of a modern metropolis" },
    location: { zh: "中国 · 上海", en: "Shanghai, China" }, year: "2026"
  },
  {
    src: "images/gallery/chengshi-08.jpg", thumb: "images/gallery/thumbs/chengshi-08.jpg",
    category: "chengshi",
    title: { zh: "秋光漫过城市边缘", en: "Autumn light spills over the city's edge" },
    location: { zh: "山东 · 济南", en: "Jinan, Shandong" }, year: "2026"
  },
];
