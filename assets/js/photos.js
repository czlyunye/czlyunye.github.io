/* ============================================
   照片清单 —— 添加新照片只需两步：
   1. 把图片文件放进 images/gallery/（建议长边 ≤ 2400px）
   2. 在下方 PHOTOS 数组里复制一段，改成新照片的信息
   category 可选值：shanye 山野 / guangying 光影 / renxiang 人像 / chengshi 城市
   ============================================ */

const PHOTO_CATEGORIES = [
  { id: "all",       zh: "全部", en: "All" },
  { id: "shanye",    zh: "山野", en: "Mountains" },
  { id: "guangying", zh: "光影", en: "Light & Shadow" },
  { id: "renxiang",  zh: "人像", en: "Portraits" },
  { id: "chengshi",  zh: "城市", en: "City" },
];

const PHOTOS = [
  {
    src:   "images/gallery/milkyway-bortala-2026.jpg",
    thumb: "images/gallery/thumbs/milkyway-bortala-2026.jpg",
    category: "shanye",
    title:    { zh: "六双手，一起够到银河", en: "Six Hands Reaching for the Milky Way" },
    location: { zh: "新疆 · 博尔塔拉", en: "Bortala, Xinjiang" },
    year: "2026",
    desc: {
      zh: "世界摄影日，与朋友在博尔塔拉的草原星空下。",
      en: "On World Photography Day, beneath the starry grasslands of Bortala with friends."
    }
  },
];
