/* ============================================
   博客文章清单 —— 发布新文章只需两步：
   1. 把文章正文发给我（或在 posts/ 文件夹里新建一个 HTML 页面）
   2. 在下方 POSTS 数组里复制一段，改成新文章的信息
   列表自动按日期从新到旧排序。
   url 可以是站内页面（posts/xxx.html），也可以是外部链接（https://...）。
   ============================================ */

const POSTS = [
  // 方案二：站内排版页
  {
    url: "posts/2024-01-20-shiling.html",
    title:   { zh: "年度精选 | 时令", en: "Annual Selections | The 24 Solar Terms" },
    date: "2024-01-20",
    excerpt: { zh: "二十四节气摄影合集——每个节气，一句诗，一张图。（站内排版版）",
               en: "A photographic journey through the 24 solar terms — one verse, one image each. (On-site version)" }
  },
  // 方案一：直接跳转微信原文
  {
    url: "https://mp.weixin.qq.com/s/sMKhDHswwvYis6zPLfHpnw",
    title:   { zh: "年度精选 | 时令（微信原文）", en: "Annual Selections | The 24 Solar Terms (WeChat original)" },
    date: "2024-01-20",
    excerpt: { zh: "点击跳转到公众号「视平线」，阅读原版排版。", en: "Opens the original layout on the WeChat official account “视平线”." }
  },

  // 以后再发新文章，复制下面这段改内容：
  // {
  //   url: "posts/my-first-post.html",
  //   title:   { zh: "文章标题", en: "Post Title" },
  //   date: "2026-08-24",
  //   excerpt: { zh: "一句话摘要，显示在列表里。", en: "One-line excerpt shown in the list." }
  // },
];
