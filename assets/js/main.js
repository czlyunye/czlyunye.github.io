/* ============================================
   站点交互：导航高亮 / 画廊筛选 / 灯箱 / 精选摄影
   ============================================ */

(function () {
  "use strict";

  const lang = () => (typeof getLang === "function" ? getLang() : "zh");
  const L = obj => (obj && obj[lang()]) || (obj && obj.zh) || "";

  /* ---------- 导航当前页高亮 ---------- */
  function markActiveNav() {
    const path = location.pathname;
    const page = path.split("/").pop() || "index.html";
    const inPosts = path.includes("/posts/");
    document.querySelectorAll(".nav-links a").forEach(a => {
      const href = a.getAttribute("href").replace(/^\.\.\//, "");
      a.classList.toggle("active", href === page || (inPosts && href === "blog.html") || (page === "" && href === "index.html"));
    });
  }

  /* ---------- 画廊渲染 ---------- */
  let currentFilter = "all";
  let lbIndex = 0;
  let visiblePhotos = [];

  function renderFilterBar() {
    const bar = document.querySelector(".filter-bar");
    if (!bar) return;
    bar.innerHTML = "";
    PHOTO_CATEGORIES.forEach(cat => {
      const btn = document.createElement("button");
      btn.className = "filter-btn" + (cat.id === currentFilter ? " active" : "");
      btn.textContent = lang() === "zh" ? cat.zh : cat.en;
      btn.addEventListener("click", () => {
        currentFilter = cat.id;
        renderFilterBar();
        renderGallery();
      });
      bar.appendChild(btn);
    });
  }

  function renderGallery() {
    const grid = document.querySelector(".gallery");
    if (!grid) return;
    grid.innerHTML = "";

    visiblePhotos = PHOTOS.filter(p => currentFilter === "all" || p.category === currentFilter);

    visiblePhotos.forEach((p, i) => {
      const card = document.createElement("figure");
      card.className = "photo-card";
      card.innerHTML = `
        <div class="thumb"><img src="${p.thumb || p.src}" alt="${L(p.title)}" loading="lazy"></div>
        <figcaption class="photo-info">
          <h3>${L(p.title)}</h3>
          <div class="meta">${L(p.location)} · ${p.year || ""}</div>
          ${p.desc ? `<div class="desc">${L(p.desc)}</div>` : ""}
        </figcaption>`;
      card.addEventListener("click", () => openLightbox(i));
      grid.appendChild(card);
    });

    // 空分类显示“虚位以待”占位
    if (visiblePhotos.length === 0) {
      const cat = PHOTO_CATEGORIES.find(c => c.id === currentFilter);
      const ph = document.createElement("div");
      ph.className = "photo-placeholder";
      ph.innerHTML = `
        <div class="cat">${cat ? (lang() === "zh" ? cat.zh : cat.en) : ""}</div>
        <div>${t("photo.placeholder")}</div>`;
      grid.appendChild(ph);
    }
  }

  /* ---------- 灯箱 ---------- */
  function buildLightbox() {
    if (document.querySelector(".lightbox")) return;
    const lb = document.createElement("div");
    lb.className = "lightbox";
    lb.innerHTML = `
      <button class="lb-btn lb-close" aria-label="close">×</button>
      <button class="lb-btn lb-prev" aria-label="prev">‹</button>
      <div class="lightbox-inner">
        <img alt="">
        <div class="lightbox-caption"><h3></h3><div class="meta"></div><div class="desc"></div></div>
      </div>
      <button class="lb-btn lb-next" aria-label="next">›</button>`;
    document.body.appendChild(lb);

    lb.querySelector(".lb-close").addEventListener("click", closeLightbox);
    lb.querySelector(".lb-prev").addEventListener("click", e => { e.stopPropagation(); stepLightbox(-1); });
    lb.querySelector(".lb-next").addEventListener("click", e => { e.stopPropagation(); stepLightbox(1); });
    lb.addEventListener("click", e => { if (e.target === lb) closeLightbox(); });
    document.addEventListener("keydown", e => {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") stepLightbox(-1);
      if (e.key === "ArrowRight") stepLightbox(1);
    });
  }

  function openLightbox(i) {
    lbIndex = i;
    updateLightbox();
    document.querySelector(".lightbox").classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    document.querySelector(".lightbox").classList.remove("open");
    document.body.style.overflow = "";
  }

  function stepLightbox(d) {
    lbIndex = (lbIndex + d + visiblePhotos.length) % visiblePhotos.length;
    updateLightbox();
  }

  function updateLightbox() {
    const p = visiblePhotos[lbIndex];
    if (!p) return;
    const lb = document.querySelector(".lightbox");
    lb.querySelector("img").src = p.src;
    lb.querySelector("img").alt = L(p.title);
    lb.querySelector("h3").textContent = L(p.title);
    lb.querySelector(".meta").textContent = `${L(p.location)} · ${p.year || ""}`;
    lb.querySelector(".desc").textContent = p.desc ? L(p.desc) : "";
  }

  /* ---------- 首页精选摄影 ---------- */
  function renderFeatured() {
    const host = document.querySelector(".featured-card");
    if (!host || typeof PHOTOS === "undefined" || PHOTOS.length === 0) {
      if (host) host.closest(".section").style.display = "none";
      return;
    }
    const p = PHOTOS.find(x => x.featured) || PHOTOS[0];
    host.innerHTML = `
      <img src="${p.thumb || p.src}" alt="${L(p.title)}">
      <div class="featured-body">
        <h3>${L(p.title)}</h3>
        <div class="meta">${L(p.location)} · ${p.year || ""}</div>
        <p>${p.desc ? L(p.desc) : ""}</p>
        <span class="featured-link">${t("featured.link")}</span>
      </div>`;
  }

  /* ---------- 博客文章列表 ---------- */
  function renderPosts(retried) {
    const list = document.getElementById("post-list");
    if (!list) return;
    // posts.js 因网络问题没加载成功时，动态补载一次
    if (typeof POSTS === "undefined" && !retried) {
      const s = document.createElement("script");
      const base = location.pathname.includes("/posts/") ? "../" : "";
      s.src = base + "assets/js/posts.js";
      s.onload = () => renderPosts(true);
      s.onerror = () => renderPosts(true);
      document.head.appendChild(s);
      return;
    }
    const empty = document.getElementById("blog-empty");
    list.innerHTML = "";
    if (typeof POSTS === "undefined" || POSTS.length === 0) {
      if (empty) empty.style.display = "";
      return;
    }
    if (empty) empty.style.display = "none";
    POSTS.slice()
      .sort((a, b) => (b.date || "").localeCompare(a.date || ""))
      .forEach(p => {
        const item = document.createElement("a");
        item.className = "post-item";
        item.href = p.url;
        if (/^https?:/.test(p.url)) { item.target = "_blank"; item.rel = "noopener"; }
        item.innerHTML = `
          <div class="post-date">${p.date || ""}</div>
          <div>
            <h3>${L(p.title)}</h3>
            ${p.excerpt ? `<p class="post-excerpt">${L(p.excerpt)}</p>` : ""}
            <span class="post-more">${t("blog.readmore")}</span>
          </div>`;
        list.appendChild(item);
      });
  }

  /* ---------- 联系页二维码（有图则显示，无图显示占位） ---------- */
  function renderQRCodes() {
    document.querySelectorAll(".qr-item[data-qr]").forEach(item => {
      const src = item.dataset.qr;
      const label = item.querySelector(".label").textContent;
      const img = new Image();
      img.alt = label;
      if (item.dataset.qrPos) img.style.objectPosition = item.dataset.qrPos;
      img.onload = () => {
        item.querySelector(".qr-box").replaceWith(img);
      };
      img.src = src;
    });
  }

  /* ---------- 启动（PJAX 换页后也会再次调用） ---------- */
  function initPage() {
    applyLang();
    markActiveNav();
    if (!document.querySelector(".lightbox")) buildLightbox();
    renderFilterBar();
    renderGallery();
    renderFeatured();
    renderPosts();
    renderQRCodes();

    document.querySelectorAll(".footer-year").forEach(el => {
      el.textContent = new Date().getFullYear();
    });
  }
  window.initPage = initPage;
  document.addEventListener("DOMContentLoaded", initPage);

  // 语言切换时重渲染动态内容
  window.onLangChange = function () {
    renderFilterBar();
    renderGallery();
    renderFeatured();
    renderPosts();
  };
})();
