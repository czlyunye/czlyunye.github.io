/* ============================================
   中英双语字典与切换逻辑
   —— 以后改文案，只需改这个文件
   ============================================ */

const I18N = {
  zh: {
    "doc.title.index": "云野 Yunye · 个人主页",
    "doc.title.photography": "摄影 · 云野 Yunye",
    "doc.title.research": "研究 · 云野 Yunye",
    "doc.title.contact": "联系 · 云野 Yunye",

    "nav.home": "首页",
    "nav.photography": "摄影",
    "nav.research": "研究",
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
    "about.p1": "我是云野，本名陈照梁，目前任聚宽（JoinQuant）招聘经理。山东大学 2026 届本科。喜欢山野与星空，习惯用相机收集路上遇见的光。",
    "about.p2": "这个网站用来存放我的摄影作品、研究学习与联系方式，会持续慢慢更新。",
    "sec.edu": "教育经历",
    "sec.edu.en": "Education",
    "edu.1.name": "山东大学 · 本科",
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

    "research.title": "研究",
    "research.title.en": "Research",
    "research.intro": "目前在以下几个方向持续学习与积累，论文、笔记与项目会陆续更新在这里。",
    "dir.1.name": "宏观经济学",
    "dir.1.en": "Macroeconomics",
    "dir.1.desc": "关注经济周期、货币政策与长期增长，尝试把宏观框架落到可验证的问题上。",
    "dir.2.name": "量化投资",
    "dir.2.en": "Quantitative Investment",
    "dir.2.desc": "数据驱动的投资策略与因子研究，身处量化行业，对方法论保持长期兴趣。",
    "dir.3.name": "人工智能",
    "dir.3.en": "Artificial Intelligence",
    "dir.3.desc": "关注大模型能力边界，以及 AI 在投研、招聘与组织协作中的实际落地。",
    "dir.4.name": "企业管理",
    "dir.4.en": "Business Management",
    "dir.4.desc": "从招聘一线观察人才、组织与激励机制，记录真实世界里的管理问题。",
    "research.empty": "研究成果筹备中",
    "research.empty.en": "Work in progress — publications & notes coming soon",

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
    "doc.title.research": "Research · Yunye",
    "doc.title.contact": "Contact · Yunye",

    "nav.home": "Home",
    "nav.photography": "Photography",
    "nav.research": "Research",
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
    "about.p1": "I'm Yunye (Zhaoliang Chen), Talent Acquisition Manager at JoinQuant, and a 2026 graduate of Shandong University. I love mountains and night skies, and I collect the light I meet on the road with my camera.",
    "about.p2": "This site is where I keep my photography, research notes, and contact details — growing slowly over time.",
    "sec.edu": "Education",
    "sec.edu.en": "教育经历",
    "edu.1.name": "Shandong University · B.A.",
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

    "research.title": "Research",
    "research.title.en": "研究",
    "research.intro": "I'm currently building depth in the following areas. Papers, notes, and projects will be published here as they come.",
    "dir.1.name": "Macroeconomics",
    "dir.1.en": "宏观经济学",
    "dir.1.desc": "Business cycles, monetary policy, and long-run growth — turning macro frameworks into testable questions.",
    "dir.2.name": "Quantitative Investment",
    "dir.2.en": "量化投资",
    "dir.2.desc": "Data-driven strategies and factor research, with an insider's view from the quant industry.",
    "dir.3.name": "Artificial Intelligence",
    "dir.3.en": "人工智能",
    "dir.3.desc": "The frontier of LLM capability, and how AI actually lands in research, hiring, and organizations.",
    "dir.4.name": "Business Management",
    "dir.4.en": "企业管理",
    "dir.4.desc": "Talent, organizations, and incentives — management questions observed from the hiring frontline.",
    "research.empty": "Research in preparation",
    "research.empty.en": "研究成果筹备中，敬请期待",

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
