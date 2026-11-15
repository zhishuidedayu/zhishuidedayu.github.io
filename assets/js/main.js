/* =========================================================
   个人简介网站 · 少量交互
   就算这一段完全加载失败，页面内容也照常显示。
   ========================================================= */

(function () {
  "use strict";

  // 标记“JS 可用”，CSS 里的淡入效果才会启用
  document.documentElement.classList.add("js");

  // 1) 页脚年份自动更新
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // 2) 手机端导航开关
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "关闭导航" : "打开导航");
    });

    // 点了导航项就收起来
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // 3) 滚动到哪，哪一块淡入（不支持 IntersectionObserver 就直接全显示）
  var reveals = document.querySelectorAll("[data-reveal]");

  if (!("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

  reveals.forEach(function (el) { observer.observe(el); });
})();
