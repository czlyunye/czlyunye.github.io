/* ============================================
   中英双语字典与切换逻辑
   —— 以后改文案，只需改这个文件
   ============================================ */

const I18N = {
  zh: {
    "doc.title.index": "云野 Yunye · 个人主页",
    "doc.title.photography": "摄影 · 云野 Yunye",
    "doc.title.blog": "个人Blog · 云野 Yunye",
    "doc.title.contact": "联系 · 云野 Yunye",

    "nav.home": "首页",
    "nav.photography": "摄影",
    "nav.blog": "个人Blog",
    "nav.contact": "联系",

    "hero.eyebrow": "陈照梁 · 聚宽 JoinQuant 招聘经理",
    "hero.name": "云野",
    "hero.name.latin": "Yunye",
    "hero.poem": "「但去莫复问，白云无尽时。」",
    "hero.poem.src": "—— 王维《送别》",
    "hero.bio": "欢迎对量化、摄影、AI、经济学等领域感兴趣的朋友找我聊天。",
    "hero.cta.gallery": "看看摄影",
    "hero.cta.contact": "联系我",

    "sec.about": "关于我",
    "sec.about.en": "About",
    "about.p1": "我叫陈照梁（云野），2026 年毕业于山东大学管理学院，师从陈志军教授，获学士学位，目前在北京聚宽投资管理有限公司担任招聘经理。",
    "about.p2": "这个网站用来存放一些我的摄影作品、个人博客和联系方式，未来会不断更新个人的作品和所思所想。",
    "about.p3": "感谢您的观看！",
    "sec.edu": "教育经历",
    "sec.edu.en": "Education",
    "edu.1.name": "山东大学 管理学院 · 学士",
    "edu.1.mentor": "导师：陈志军 教授",
    "edu.1.note": "学院奖学金",
    "edu.2.name": "山东省青州第一中学",
    "edu.2.note": "优秀毕业生",
    "sec.interests": "研究兴趣",
    "sec.interests.en": "Interests",
    "interest.1": "宏观经济学",
    "interest.2": "量化投资",
    "interest.3": "人工智能",
    "interest.4": "企业管理",
    "sec.featured": "精选摄影",
    "sec.featured.en": "Featured",
    "featured.link": "进入画廊 →",

    "photo.title": "摄影",
    "photo.title.en": "Photography",
    "photo.sub": "山野、光影、人像、城市——把路上遇见的光收进取景框。",
    "photo.placeholder": "虚位以待",

    "blog.title": "个人 Blog",
    "blog.title.en": "Blog",
    "blog.sub": "关于量化、AI、经济学与管理的思考，以及路上遇见的光。",
    "blog.topics": "常写话题",
    "blog.empty": "第一篇文章正在酝酿中",
    "blog.empty.en": "The first post is on its way",
    "blog.readmore": "阅读全文 →",

    "contact.title": "联系",
    "contact.title.en": "Contact",
    "contact.intro": "欢迎通过以下方式找到我，聊量化、摄影、AI，或只是打个招呼。",
    "contact.email": "邮箱",
    "contact.qr.wechat": "微信",
    "contact.qr.xhs": "小红书",
    "contact.qr.empty": "二维码待补充",

    "footer.right": "由 GitHub Pages 托管",
  },

  en: {
    "doc.title.index": "Yunye · Home",
    "doc.title.photography": "Photography · Yunye",
    "doc.title.blog": "Blog · Yunye",
    "doc.title.contact": "Contact · Yunye",

    "nav.home": "Home",
    "nav.photography": "Photography",
    "nav.blog": "Blog",
    "nav.contact": "Contact",

    "hero.eyebrow": "Zhaoliang Chen · Talent Acquisition Manager, JoinQuant",
    "hero.name": "Yunye",
    "hero.name.latin": "云 野",
    "hero.poem": "“Go on, and ask me nothing more — white clouds drift on, endless.”",
    "hero.poem.src": "— Wang Wei, “Seeing Off a Friend”",
    "hero.bio": "Always glad to talk quant, photography, AI, economics — or anything in between. Say hi.",
    "hero.cta.gallery": "View Photography",
    "hero.cta.contact": "Get in Touch",

    "sec.about": "About",
    "sec.about.en": "关于我",
    "about.p1": "I'm Zhaoliang Chen (Yunye). I graduated in 2026 from the School of Management, Shandong University with a bachelor's degree, under the supervision of Prof. Zhijun Chen. I now work as a Talent Acquisition Manager at Beijing JoinQuant Investment Management Co.",
    "about.p2": "This site is home to my photography, my blog, and my contact details — I'll keep adding new works and thoughts over time.",
    "about.p3": "Thanks for stopping by!",
    "sec.edu": "Education",
    "sec.edu.en": "教育经历",
    "edu.1.name": "School of Management, Shandong University · Bachelor's Degree",
    "edu.1.mentor": "Advisor: Prof. Zhijun Chen",
    "edu.1.note": "School Scholarship",
    "edu.2.name": "Qingzhou No.1 High School, Shandong",
    "edu.2.note": "Outstanding Graduate",
    "sec.interests": "Research Interests",
    "sec.interests.en": "研究兴趣",
    "interest.1": "Macroeconomics",
    "interest.2": "Quantitative Investment",
    "interest.3": "Artificial Intelligence",
    "interest.4": "Business Management",
    "sec.featured": "Featured Photography",
    "sec.featured.en": "精选摄影",
    "featured.link": "Enter Gallery →",

    "photo.title": "Photography",
    "photo.title.en": "摄影",
    "photo.sub": "Mountains, light, faces, cities — collecting the light I meet on the road.",
    "photo.placeholder": "Coming soon",

    "blog.title": "Blog",
    "blog.title.en": "个人Blog",
    "blog.sub": "Notes on quant, AI, economics and management — and light collected on the road.",
    "blog.topics": "Topics",
    "blog.empty": "The first post is on its way",
    "blog.empty.en": "第一篇文章正在酝酿中",
    "blog.readmore": "Read more →",

    "contact.title": "Contact",
    "contact.title.en": "联系",
    "contact.intro": "Find me below — for quant, photography, AI, or just to say hello.",
    "contact.email": "Email",
    "contact.qr.wechat": "WeChat",
    "contact.qr.xhs": "Xiaohongshu",
    "contact.qr.empty": "QR code coming soon",

    "footer.right": "Hosted on GitHub Pages",
  }
};

/* ---------- 切换逻辑 ---------- */
const LANG_KEY = "yunye-site-lang";

function getLang() {
  return localStorage.getItem(LANG_KEY) || "zh";
}

function t(key) {
  const lang = getLang();
  return (I18N[lang] && I18N[lang][key]) || I18N.zh[key] || key;
}

function applyLang() {
  const lang = getLang();
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });

  const titleKey = document.body.dataset.titleKey;
  if (titleKey) document.title = t(titleKey);

  document.querySelectorAll(".lang-toggle .zh, .lang-toggle .en").forEach(el => {
    el.classList.toggle("on", el.classList.contains(lang));
  });

  // 通知动态内容（画廊等）重新渲染
  if (typeof window.onLangChange === "function") window.onLangChange();
}

function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  applyLang();
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang();
  document.querySelectorAll(".lang-toggle").forEach(btn => {
    btn.addEventListener("click", () => setLang(getLang() === "zh" ? "en" : "zh"));
  });
});
