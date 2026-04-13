/**
 * Injects config-driven bits into the DOM. Pages call wolfproInit({ currentNav }) after DOM ready.
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

    document.querySelectorAll("[data-site-email-inquiry]").forEach(function (el) {
      const email = cfg.email || "";
      const subject = "Employment or contract inquiry";
      el.href = "mailto:" + email + "?subject=" + encodeURIComponent(subject);
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
      if (s.id) article.id = s.id;
      article.innerHTML =
        '<div class="card-icon" aria-hidden="true">' +
        (s.icon || "•") +
        "</div>" +
        "<h3>" +
        escapeHtml(s.title || "") +
        "</h3>" +
        '<p class="summary">' +
        escapeHtml(s.summary || "") +
        "</p>" +
        '<p class="detail">' +
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

  function renderFeaturedApps() {
    const root = document.getElementById("featured-app-grid");
    if (!root) return;
    const cfg = getConfig();
    const apps = cfg.featuredApps || [];
    root.innerHTML = "";
    apps.forEach(function (app, index) {
      const article = document.createElement("article");
      article.className = "app-card";
      const titleId = app.id ? app.id + "-title" : "featured-app-title-" + index;
      if (app.id) article.id = app.id;
      article.setAttribute("aria-labelledby", titleId);
      const link =
        app.href && app.linkLabel
          ? '<a class="app-card-link" href="' +
            escapeAttr(app.href) +
            '" target="_blank" rel="noopener noreferrer">' +
            escapeHtml(app.linkLabel) +
            "</a>"
          : "";
      const logoHtml = app.logo
        ? '<div class="app-card-logo-wrap"><img class="app-card-logo" src="' +
          escapeAttr(app.logo) +
          '" alt="' +
          escapeAttr(app.title || "App logo") +
          '" width="360" height="180" loading="lazy" decoding="async" /></div>'
        : "";
      article.innerHTML =
        logoHtml +
        '<h3 id="' +
        escapeAttr(titleId) +
        '">' +
        escapeHtml(app.title || "") +
        "</h3>" +
        '<p class="app-card-desc">' +
        escapeHtml(app.description || "") +
        "</p>" +
        link;
      root.appendChild(article);
    });
  }

  function renderMusicSpotlight() {
    const root = document.getElementById("music-spotlight");
    if (!root) return;
    const cfg = getConfig();
    const m = cfg.music || {};
    const label = m.label || "Music";
    const url = m.url || "#";
    const desc = m.description || "";
    const logo = m.logo || "";
    const photo = m.photo || "";
    const ctaText = m.cta || "Visit music site ↗";

    root.className =
      "music-spotlight" + (photo ? " music-spotlight--split" : " music-spotlight--compact");

    const photoBlock = photo
      ? '<div class="music-spotlight-visual">' +
        '<img class="music-spotlight-photo" src="' +
        escapeAttr(photo) +
        '" alt="' +
        escapeAttr(label + " — artist photo") +
        '" width="600" height="900" loading="lazy" decoding="async" />' +
        "</div>"
      : "";

    const logoBlock = logo
      ? '<div class="music-spotlight-logo-wrap">' +
        '<img class="music-spotlight-logo" src="' +
        escapeAttr(logo) +
        '" alt="' +
        escapeAttr(label + " logo") +
        '" width="400" height="120" loading="lazy" decoding="async" />' +
        "</div>"
      : "";

    root.innerHTML =
      '<div class="music-spotlight-inner">' +
      photoBlock +
      '<div class="music-spotlight-copy">' +
      logoBlock +
      '<p class="music-spotlight-lede">' +
      escapeHtml(desc) +
      "</p>" +
      '<a class="btn btn-primary music-spotlight-cta" href="' +
      escapeAttr(url) +
      '" target="_blank" rel="noopener noreferrer">' +
      escapeHtml(ctaText) +
      "</a>" +
      "</div>" +
      "</div>";
  }

  function renderHeroVisual() {
    const root = document.querySelector("[data-hero-visual]");
    if (!root) return;
    const cfg = getConfig();
    const img = cfg.heroImage;
    if (!img || !img.src) {
      root.innerHTML = "";
      return;
    }
    root.innerHTML =
      '<figure class="hero-photo-frame">' +
      '<img src="' +
      escapeAttr(img.src) +
      '" alt="' +
      escapeAttr(img.alt || "") +
      '" width="900" height="1200" loading="eager" decoding="async" />' +
      "</figure>";
  }

  function renderCapabilityStrip() {
    const root = document.getElementById("capability-strip");
    if (!root) return;
    const cfg = getConfig();
    const items = cfg.capabilityStrip || [];
    root.innerHTML = "";
    items.forEach(function (item) {
      if (!item || !item.src) return;
      const article = document.createElement("article");
      article.className = "capability-card";
      article.innerHTML =
        '<div class="capability-card-visual">' +
        '<img src="' +
        escapeAttr(item.src) +
        '" alt="' +
        escapeAttr(item.alt || "") +
        '" width="800" height="600" loading="lazy" decoding="async" />' +
        "</div>" +
        '<p class="capability-card-label">' +
        escapeHtml(item.label || "") +
        "</p>";
      root.appendChild(article);
    });

    const credit = document.querySelector("[data-photo-credit]");
    if (credit) {
      const show = Boolean(cfg.heroImage && cfg.heroImage.src) || items.length > 0;
      credit.hidden = !show;
    }
  }

  function fillSectionIntros() {
    const cfg = getConfig();
    const map = [
      ["[data-expertise-intro]", cfg.expertiseIntro],
      ["[data-apps-intro]", cfg.appsIntro],
      ["[data-services-intro]", cfg.servicesIntro],
    ];
    map.forEach(function (pair) {
      const el = document.querySelector(pair[0]);
      const text = pair[1];
      if (el && text) el.textContent = text;
    });
  }

  function renderPolyworks() {
    const root = document.getElementById("polyworks-root");
    if (!root) return;
    const cfg = getConfig();
    const p = cfg.polyworks;
    if (!p) {
      root.innerHTML = "";
      return;
    }
    const email = cfg.email || "";
    const subject = p.ctaSubject || "PolyWorks inquiry";
    const mailHref = email ? "mailto:" + email + "?subject=" + encodeURIComponent(subject) : "#";

    const equipHtml = (p.equipment || [])
      .map(function (item) {
        if (!item || !item.name) return "";
        return (
          '<article class="polyworks-equip-card">' +
          "<h4>" +
          escapeHtml(item.name) +
          "</h4>" +
          '<p class="polyworks-equip-desc">' +
          escapeHtml(item.summary || "") +
          "</p>" +
          "</article>"
        );
      })
      .join("");

    const bulletsHtml = (p.whyBullets || [])
      .map(function (line) {
        return "<li>" + escapeHtml(line) + "</li>";
      })
      .join("");

    root.innerHTML =
      '<div class="section-head">' +
      '<h2 id="polyworks-heading">' +
      escapeHtml(p.title || "PolyWorks") +
      "</h2>" +
      '<p class="section-sub">' +
      escapeHtml(p.lede || "") +
      "</p>" +
      "</div>" +
      '<div class="polyworks-panels">' +
      '<div class="polyworks-panel">' +
      "<h3>What PolyWorks is</h3>" +
      '<p class="polyworks-prose">' +
      escapeHtml(p.whatIs || "") +
      "</p>" +
      "<h3>How we work on your floor</h3>" +
      '<p class="polyworks-prose">' +
      escapeHtml(p.howItWorks || "") +
      "</p>" +
      "</div>" +
      '<div class="polyworks-panel polyworks-panel--hardware">' +
      "<h3>Laser tracker hardware</h3>" +
      '<p class="polyworks-hardware-lede">We use Leica absolute laser trackers for direct (probed) measurement and contactless scanning — chosen to match each zone of the part and the tolerance you are holding.</p>' +
      '<div class="polyworks-equip-grid">' +
      equipHtml +
      "</div>" +
      "</div>" +
      "</div>" +
      '<div class="polyworks-panel polyworks-panel--accent">' +
      "<h3>" +
      escapeHtml(p.whyTitle || "Why partner with WolfPro") +
      "</h3>" +
      '<ul class="polyworks-why-list">' +
      bulletsHtml +
      "</ul>" +
      (p.whyClosing
        ? '<p class="polyworks-prose polyworks-prose--tight">' + escapeHtml(p.whyClosing) + "</p>"
        : "") +
      "</div>" +
      '<div class="polyworks-panel polyworks-panel--scan">' +
      "<h3>" +
      escapeHtml((p.scanning && p.scanning.title) || "3D scanning") +
      "</h3>" +
      '<p class="polyworks-prose">' +
      escapeHtml((p.scanning && p.scanning.body) || "") +
      "</p>" +
      '<a class="btn btn-primary polyworks-cta" href="' +
      escapeAttr(mailHref) +
      '">' +
      escapeHtml(p.ctaLabel || "Contact") +
      "</a>" +
      "</div>";
  }

  function fillAbout() {
    const root = document.querySelector("[data-about-bio]");
    if (!root) return;
    const cfg = getConfig();
    const text = cfg.aboutBio;
    if (!text) return;
    root.innerHTML = "";
    String(text)
      .split(/\n\n+/)
      .map(function (p) {
        return p.trim();
      })
      .filter(Boolean)
      .forEach(function (para) {
        const p = document.createElement("p");
        p.textContent = para;
        root.appendChild(p);
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
    const highlightsRoot = document.querySelector("[data-hero-highlights]");
    if (h1) {
      h1.textContent = cfg.heroTitle || cfg.personName || cfg.company || h1.textContent;
    }
    if (lede) {
      lede.textContent = cfg.heroLede || cfg.tagline || lede.textContent;
    }
    if (highlightsRoot) {
      highlightsRoot.innerHTML = "";
      const items = cfg.heroHighlights || [];
      items.forEach(function (text) {
        if (!text) return;
        const li = document.createElement("li");
        li.textContent = text;
        highlightsRoot.appendChild(li);
      });
      highlightsRoot.hidden = highlightsRoot.children.length === 0;
    }
  }

  window.wolfproInit = function (opts) {
    opts = opts || {};
    fillHeaderFooter(opts.currentNav);
    fillHero();
    renderHeroVisual();
    fillSectionIntros();
    renderCapabilityStrip();
    renderPolyworks();
    renderFeaturedApps();
    renderMusicSpotlight();
    fillAbout();
    renderServices();
    renderProjects();
  };
})();
