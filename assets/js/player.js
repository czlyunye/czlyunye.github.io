/* ============================================
   音乐播放器 —— 右下角圆形按钮 + macOS 风格歌词条
   - 不自动播放，必须点击按钮
   - 曲库随机播放（含重听同一首的可能，完全随机）
   歌曲/歌词数据在 lyrics.js（TRACKS）
   ============================================ */
(function () {
  if (typeof TRACKS === "undefined" || !TRACKS.length) return;

  /* ---------- 注入 DOM ---------- */
  const btn = document.createElement("button");
  btn.className = "music-player";
  btn.type = "button";
  btn.innerHTML = `
    <span class="mp-ring"></span>
    <svg class="mp-note" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
    </svg>
    <span class="mp-eq" aria-hidden="true"><i></i><i></i><i></i></span>`;

  const chip = document.createElement("div");
  chip.className = "mp-chip";

  const bar = document.createElement("div");
  bar.className = "lyrics-bar";
  bar.innerHTML = `<span class="lb-line"></span>`;

  document.body.append(btn, chip, bar);

  const lineEl = bar.querySelector(".lb-line");
  const audio = new Audio();
  audio.preload = "auto";

  let trackIdx = -1;
  let lastLine = -2;

  const isZh = () => (typeof getLang === "function" ? getLang() : "zh") === "zh";

  function pickRandom() {
    return Math.floor(Math.random() * TRACKS.length);
  }

  function loadTrack(i) {
    trackIdx = i;
    const tr = TRACKS[i];
    audio.src = tr.src;
    chip.textContent = `${tr.title} · ${tr.artist}`;
    lastLine = -2;
    updateTip();
  }

  function updateTip() {
    const playing = !audio.paused && !audio.ended;
    const label = playing ? (isZh() ? "暂停" : "Pause") : (isZh() ? "播放音乐" : "Play music");
    btn.title = trackIdx >= 0
      ? `${TRACKS[trackIdx].title} · ${TRACKS[trackIdx].artist} — ${label}`
      : label;
    btn.setAttribute("aria-label", label);
  }

  function setPlayingUI(playing) {
    btn.classList.toggle("playing", playing);
    chip.classList.toggle("show", playing);
    bar.classList.toggle("show", playing);
    if (!playing) { lastLine = -2; lineEl.textContent = ""; }
    updateTip();
  }

  /* ---------- 歌词同步 ---------- */
  function currentLineIndex(t) {
    const L = TRACKS[trackIdx].lyrics;
    let idx = -1;
    for (let i = 0; i < L.length; i++) {
      if (L[i][0] <= t + 0.15) idx = i; else break;
    }
    return idx;
  }

  function syncLyric() {
    if (trackIdx < 0 || audio.paused) return;
    const idx = currentLineIndex(audio.currentTime);
    if (idx === lastLine) return;
    lastLine = idx;
    const tr = TRACKS[trackIdx];
    lineEl.textContent = idx >= 0 ? tr.lyrics[idx][1] : `${tr.title} · ${tr.artist}`;
    lineEl.classList.remove("lb-anim");
    void lineEl.offsetWidth;   // 重新触发动画
    lineEl.classList.add("lb-anim");
  }

  /* ---------- 事件 ---------- */
  btn.addEventListener("click", () => {
    if (trackIdx < 0) {
      loadTrack(pickRandom());
      audio.play().catch(() => {});
    } else if (audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  });

  audio.addEventListener("play", () => setPlayingUI(true));
  audio.addEventListener("pause", () => setPlayingUI(false));
  audio.addEventListener("ended", () => {
    loadTrack(pickRandom());          // 完全随机，可能仍是同一首
    audio.play().catch(() => {});
  });
  audio.addEventListener("timeupdate", syncLyric);

  window.addEventListener("langchange", updateTip);
})();
