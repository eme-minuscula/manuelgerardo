(function () {
  "use strict";
  var C = window.SITE_CONTENT;

  // Default language follows the browser; a stored choice (footer picker) wins.
  function detectLang() {
    var stored = localStorage.getItem("mgs-lang");
    if (stored === "es" || stored === "ca" || stored === "en") return stored;
    var nav = (navigator.language || navigator.userLanguage || "es").toLowerCase();
    if (nav.indexOf("ca") === 0) return "ca";
    if (nav.indexOf("es") === 0) return "es";
    return "en";
  }

  var state = { lang: detectLang() };
  var html = document.documentElement;

  function t(obj) {
    return obj ? (obj[state.lang] != null ? obj[state.lang] : obj.es) : "";
  }

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function placeholder(key, label) {
    var d = el("div", "placeholder");
    d.setAttribute("data-ph", key);
    d.setAttribute("aria-hidden", "true");
    if (label) d.appendChild(el("span", "placeholder-label", label));
    return d;
  }

  /* ---------- Static (data-i18n) strings ---------- */
  function applyStrings() {
    var dict = C[state.lang];
    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      if (dict[key] != null) node.textContent = dict[key];
    });
    html.setAttribute("lang", state.lang);
    document.title =
      state.lang === "es"
        ? "Manuel Gerardo Sánchez — PR gastronómico · Periodista · Escritor"
        : "Manuel Gerardo Sánchez — Food PR · Journalist · Author";
  }

  /* ---------- Dynamic sections ---------- */
  function renderPublications() {
    var ul = document.getElementById("publications");
    ul.innerHTML = "";
    C.publications.forEach(function (name) {
      ul.appendChild(el("li", "logo-item", name));
    });
  }

  function renderArticles() {
    var wrap = document.getElementById("articles");
    wrap.innerHTML = "";
    var imgLabel = { es: "Imagen del artículo", ca: "Imatge de l'article", en: "Article image" };
    C.articles.forEach(function (a) {
      var card = el("a", "card card-article");
      card.href = a.href || "#";
      if (/^https?:/.test(a.href || "")) { card.target = "_blank"; card.rel = "noopener"; }
      var ph = placeholder(a.ph, imgLabel[state.lang] || imgLabel.es);
      ph.classList.add("card-media");
      card.appendChild(ph);
      var body = el("div", "card-body");
      var meta = el("div", "card-meta");
      meta.appendChild(el("span", "tag", t(a.tag)));
      meta.appendChild(el("span", "outlet", a.outlet));
      body.appendChild(meta);
      body.appendChild(el("h3", "card-title", t(a.title)));
      body.appendChild(el("p", "card-excerpt", t(a.excerpt)));
      var readLbl = { es: "Leer", ca: "Llegir", en: "Read" };
      body.appendChild(el("span", "card-link", (readLbl[state.lang] || readLbl.es) + " →"));
      card.appendChild(body);
      wrap.appendChild(card);
    });
  }

  function renderBooks() {
    var wrap = document.getElementById("books-list");
    wrap.innerHTML = "";
    var coverLbl = { es: "Portada", ca: "Coberta", en: "Cover" };
    C.books.forEach(function (b) {
      var card = el("article", "card card-book");
      var ph = placeholder(b.ph, coverLbl[state.lang] || coverLbl.es);
      ph.classList.add("book-cover");
      card.appendChild(ph);
      var body = el("div", "card-body");
      body.appendChild(el("h3", "card-title", b.title));
      body.appendChild(el("p", "card-meta-line", t(b.meta)));
      if (b.blurb) body.appendChild(el("p", "card-blurb", t(b.blurb)));
      card.appendChild(body);
      wrap.appendChild(card);
    });
  }

  function renderServices() {
    var wrap = document.getElementById("services-list");
    wrap.innerHTML = "";
    C.services.forEach(function (s) {
      var card = el("article", "card card-service");
      card.appendChild(el("div", "service-icon", s.icon));
      card.appendChild(el("h3", "card-title", t(s.title)));
      card.appendChild(el("p", "card-body-text", t(s.body)));
      wrap.appendChild(card);
    });
    var clients = document.getElementById("clients");
    clients.innerHTML = "";
    C.clients.forEach(function (name) {
      clients.appendChild(el("li", "client-item", name));
    });
  }

  function renderAbout() {
    var box = document.getElementById("about-text");
    box.innerHTML = "";
    C.about[state.lang].forEach(function (p) {
      box.appendChild(el("p", null, p));
    });
    var ul = document.getElementById("awards-list");
    ul.innerHTML = "";
    C.awards.forEach(function (a) {
      ul.appendChild(el("li", null, t(a)));
    });
  }

  function renderTestimonials() {
    var wrap = document.getElementById("testimonials");
    wrap.innerHTML = "";
    C.testimonials.forEach(function (q) {
      var fig = el("figure", "quote");
      fig.appendChild(el("blockquote", null, t(q.quote)));
      fig.appendChild(el("figcaption", null, q.author));
      wrap.appendChild(fig);
    });
  }

  function renderSocial() {
    var ul = document.getElementById("social");
    ul.innerHTML = "";
    C.social.forEach(function (s) {
      var li = el("li");
      var a = el("a", null, s.label);
      a.href = s.href;
      a.target = "_blank";
      a.rel = "noopener";
      li.appendChild(a);
      ul.appendChild(li);
    });
  }

  function renderAll() {
    applyStrings();
    renderPublications();
    renderServices();
    renderArticles();
    renderBooks();
    renderAbout();
    renderTestimonials();
    renderSocial();
  }

  /* ---------- Language picker (footer) ---------- */
  function setLang(lang, persist) {
    state.lang = lang;
    if (persist) localStorage.setItem("mgs-lang", lang);
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
    renderAll();
  }

  function initControls() {
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.getAttribute("data-lang"), true); });
    });

    // Mobile nav
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".nav");
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var open = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(open));
      });
      nav.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          nav.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    }

    // Header shadow on scroll
    var header = document.querySelector(".site-header");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 8) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    });
  }

  /* ---------- Init ---------- */
  setLang(state.lang, false); // renders everything; doesn't override stored pref
  initControls();
})();
