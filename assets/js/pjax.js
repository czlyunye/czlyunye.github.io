/* ============================================
   PJAX 无刷新站内导航
   拦截站内链接点击，fetch 目标页后只替换 <main>，
   页头/播放器/灯箱保持不变 —— 音乐跨页播放不中断。
   ============================================ */
(function () {
  /* 顶部加载进度条 —— 点击后立即有反馈 */
  const bar = document.createElement("div");
  bar.id = "pjax-progress";
  document.body.appendChild(bar);
  let barTimer;
  function barStart() {
    clearTimeout(barTimer);
    bar.style.transition = "none";
    bar.style.width = "0";
    bar.style.opacity = "1";
    void bar.offsetWidth;
    bar.style.transition = "";
    bar.style.width = "18%";
    barTimer = setTimeout(() => { bar.style.width = "72%"; }, 300);
  }
  function barDone() {
    clearTimeout(barTimer);
    bar.style.width = "100%";
    setTimeout(() => { bar.style.opacity = "0"; }, 250);
    setTimeout(() => { bar.style.width = "0"; }, 600);
  }

  function isInternal(a) {
    if (!a || a.target === "_blank" || a.hasAttribute("download")) return false;
    const href = a.getAttribute("href");
    if (!href || href.startsWith("#")) return false;
    if (/^(https?:|mailto:|tel:)/i.test(href)) return false;
    return true;
  }

  /* 子目录页面（如 posts/）里的相对路径，按目标页地址转成根绝对路径 */
  function absolutize(root, baseUrl) {
    root.querySelectorAll("[src]").forEach(el => {
      const v = el.getAttribute("src");
      if (v && !v.startsWith("/") && !/^(https?:|data:)/i.test(v)) {
        el.setAttribute("src", new URL(v, baseUrl).pathname);
      }
    });
    root.querySelectorAll("a[href]").forEach(el => {
      const v = el.getAttribute("href");
      if (v && !v.startsWith("/") && !v.startsWith("#") && !/^(https?:|mailto:)/i.test(v)) {
        el.setAttribute("href", new URL(v, baseUrl).pathname);
      }
    });
  }

  let navSeq = 0;

  async function navigate(url, push) {
    const seq = ++navSeq;
    barStart();
    let res;
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 8000);   // 8 秒超时
    try {
      res = await fetch(url, { signal: ctrl.signal });
      if (!res.ok) throw 0;
    } catch {
      clearTimeout(timer);
      barDone();
      location.href = url;   // 超时或失败则回退到整页跳转
      return;
    }
    clearTimeout(timer);
    const html = await res.text();
    if (seq !== navSeq) return;   // 期间发生了更新的导航，丢弃本次结果
    const doc = new DOMParser().parseFromString(html, "text/html");
    const newMain = doc.querySelector("main");
    const curMain = document.querySelector("main");
    if (!newMain || !curMain) { location.href = url; return; }

    absolutize(newMain, url);
    const key = doc.body.getAttribute("data-title-key");
    if (key) document.body.setAttribute("data-title-key", key);
    else document.body.removeAttribute("data-title-key");
    document.title = doc.title;   // applyLang 会按 title-key 再覆盖

    curMain.replaceWith(newMain);
    if (push) history.pushState({}, "", url);
    window.scrollTo(0, 0);
    if (window.initPage) window.initPage();
    barDone();
  }

  document.addEventListener("click", e => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest("a");
    if (!isInternal(a)) return;
    const url = new URL(a.getAttribute("href"), location.href);
    if (url.origin !== location.origin) return;
    if (!/\.html?$/i.test(url.pathname) && url.pathname !== "/") return;  // 图片等资源交给原有逻辑
    e.preventDefault();
    navigate(url.pathname);
  });

  window.addEventListener("popstate", () => navigate(location.pathname, false));
})();
