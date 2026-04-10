/**
 * Injects config-driven bits into the DOM. Pages call initPage({ currentNav }) after DOM ready.
 */
(function () {
  function getConfig() {
    return window.WOLFPRO_SITE || {};
  }

  function fillHeaderFooter(currentNav) {
    const cfg = getConfig();
    const year = new Date().getFullYear();

    document.querySelectorAll("[data-site-company]").forEach(function (el) {
      el.textContent = cfg.company || "";
    });
    document.querySelectorAll("[data-site-domain]").forEach(function (el) {
      el.textContent = cfg.domain || "";
    });
    document.querySelectorAll("[data-site-email]").forEach(function (el) {
      const email = cfg.email || "";
      el.textContent = email;
      if (el.tagName === "A") el.href = "mailto:" + email;
    });

    const music = cfg.music || {};
    document.querySelectorAll("[data-music-url]").forEach(function (el) {
      if (music.url) el.href = music.url;
    });
    document.querySelectorAll("[data-music-label]").forEach(function (el) {
      if (music.label) el.textContent = music.label;
    });

    document.querySelectorAll("[data-footer-year]").forEach(function (el) {
      el.textContent = String(year);
    });

    if (currentNav) {
      document.querySelectorAll('nav a[data-nav="' + currentNav + '"]').forEach(function (a) {
        a.setAttribute("aria-current", "page");
      });
    }
  }

  function renderServices() {
    const root = document.getElementById("service-grid");
    if (!root) return;
    const cfg = getConfig();
    const services = cfg.services || [];
    root.innerHTML = "";
    services.forEach(function (s) {
      const article = document.createElement("article");
      article.className = "card";
      article.setAttribute("id", s.id || "");
      article.innerHTML =
        '<div class="card-icon" aria-hidden="true">' +
        (s.icon || "•") +
        "</div>" +
        "<h3>" +
        escapeHtml(s.title || "") +
        "</h3>" +
        "<p class=\"summary\">" +
        escapeHtml(s.summary || "") +
        "</p>" +
        "<p class=\"detail\">" +
        escapeHtml(s.detail || "") +
        "</p>" +
        '<a class="card-cta" href="' +
        escapeAttr(s.ctaHref || "#") +
        '">' +
        escapeHtml(s.ctaLabel || "Contact") +
        "</a>";
      root.appendChild(article);
    });
  }

  function renderProjects() {
    const root = document.getElementById("project-grid");
    if (!root) return;
    const cfg = getConfig();
    const projects = cfg.projects || [];
    root.innerHTML = "";
    projects.forEach(function (p) {
      const article = document.createElement("article");
      article.className = "project-card";
      const tags = (p.tags || [])
        .map(function (t) {
          return "<span>" + escapeHtml(t) + "</span>";
        })
        .join("");
      const link =
        p.href && p.linkLabel
          ? '<a class="project-link" href="' +
            escapeAttr(p.href) +
            '" target="_blank" rel="noopener noreferrer">' +
            escapeHtml(p.linkLabel) +
            "</a>"
          : "";
      article.innerHTML =
        "<h3>" +
        escapeHtml(p.title || "") +
        "</h3>" +
        '<div class="project-meta">' +
        '<span class="status-pill">' +
        escapeHtml(p.status || "") +
        "</span>" +
        (tags ? '<div class="tags">' + tags + "</div>" : "") +
        "</div>" +
        "<p>" +
        escapeHtml(p.blurb || "") +
        "</p>" +
        link;
      root.appendChild(article);
    });
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function escapeAttr(str) {
    return escapeHtml(str).replace(/'/g, "&#39;");
  }

  function fillHero() {
    const cfg = getConfig();
    const h1 = document.querySelector("[data-hero-title]");
    const lede = document.querySelector("[data-hero-lede]");
    if (h1) h1.textContent = cfg.company || h1.textContent;
    if (lede) lede.textContent = cfg.tagline || lede.textContent;
  }

  function fillMusicBanner() {
    const cfg = getConfig();
    const el = document.querySelector("[data-music-description]");
    const music = cfg.music || {};
    if (el && music.description) el.textContent = music.description;
  }

  window.wolfproInit = function (opts) {
    opts = opts || {};
    fillHeaderFooter(opts.currentNav);
    fillHero();
    fillMusicBanner();
    renderServices();
    renderProjects();
  };
})();
