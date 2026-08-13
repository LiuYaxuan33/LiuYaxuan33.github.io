(function () {
  const body = document.body;
  const languageButton = document.querySelector(".language-toggle");
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");

  function setLanguage(language) {
    const next = language === "en" ? "en" : "zh";
    body.dataset.lang = next;
    document.documentElement.lang = next === "zh" ? "zh-CN" : "en";
    document.documentElement.classList.remove("js-loading");
    try { localStorage.setItem("site-language", next); } catch (error) {}
  }

  let saved = "zh";
  try { saved = localStorage.getItem("site-language") || "zh"; } catch (error) {}
  const queryLanguage = new URLSearchParams(window.location.search).get("lang");
  setLanguage(queryLanguage || saved);

  languageButton?.addEventListener("click", function () {
    setLanguage(body.dataset.lang === "zh" ? "en" : "zh");
  });

  menuButton?.addEventListener("click", function () {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    nav?.classList.toggle("open", !open);
  });

  nav?.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menuButton?.setAttribute("aria-expanded", "false");
      nav.classList.remove("open");
    });
  });

  const year = document.getElementById("current-year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
