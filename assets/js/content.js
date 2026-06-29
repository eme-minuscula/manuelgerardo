/*
 * Trilingual content (ES / CA / EN).
 * Real, sourced facts (bio, books + synopses, awards, the verified article,
 * social profiles) are filled in. Items still to be supplied by Manuel are
 * marked [PENDIENTE]/[PENDENT]/[PENDING] and listed in README.md.
 */
window.SITE_CONTENT = {
  /* ---------- UI labels & static strings ---------- */
  es: {
    "nav.services": "PR & Marcas",
    "nav.journalism": "Periodismo",
    "nav.books": "Libros",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",

    "hero.eyebrow": "PR gastronómico · Periodista · Escritor",
    "hero.title": "Cuento la gastronomía: de la crónica al relato de marca.",
    "hero.lede": "Comunicación para restaurantes y marcas de gastronomía, con la mirada de un periodista y la voz de un escritor. Afincado en Barcelona.",
    "hero.ctaPrimary": "Trabajemos juntos",
    "hero.ctaSecondary": "Ver mi periodismo",

    "strip.label": "Mi trabajo ha aparecido en",

    "services.kicker": "PR & Marcas",
    "services.title": "Comunicación para restaurantes y gastronomía",
    "services.intro": "Acompaño a restaurantes, bodegas y marcas de alimentación a definir su relato y llevarlo a los medios: estrategia, contenidos y relación con prensa.",

    "journalism.kicker": "Periodismo",
    "journalism.title": "Crónica, crítica y reportaje",
    "journalism.intro": "Una selección de piezas sobre gastronomía, cultura y literatura, y las personas que las mueven.",

    "books.kicker": "Libros",
    "books.title": "Obra literaria",
    "books.intro": "Narrativa publicada en España y Latinoamérica que explora la vulnerabilidad, el deseo y el poder.",

    "about.kicker": "Sobre mí",
    "about.title": "Manuel Gerardo Sánchez",
    "about.awardsTitle": "Premios y reconocimientos",

    "testimonials.kicker": "Testimonios",
    "testimonials.title": "Lo que dicen de mi trabajo",

    "contact.kicker": "Contacto",
    "contact.title": "Hablemos de tu proyecto",
    "contact.intro": "¿Una historia que contar, un restaurante que lanzar o una colaboración editorial? Escríbeme.",

    "footer.meta": "© 2026 Manuel Gerardo Sánchez · Barcelona"
  },

  ca: {
    "nav.services": "PR & Marques",
    "nav.journalism": "Periodisme",
    "nav.books": "Llibres",
    "nav.about": "Sobre mi",
    "nav.contact": "Contacte",

    "hero.eyebrow": "PR gastronòmic · Periodista · Escriptor",
    "hero.title": "Explico la gastronomia: de la crònica al relat de marca.",
    "hero.lede": "Comunicació per a restaurants i marques de gastronomia, amb la mirada d'un periodista i la veu d'un escriptor. Establert a Barcelona.",
    "hero.ctaPrimary": "Treballem junts",
    "hero.ctaSecondary": "Vegeu el meu periodisme",

    "strip.label": "El meu treball ha aparegut a",

    "services.kicker": "PR & Marques",
    "services.title": "Comunicació per a restaurants i gastronomia",
    "services.intro": "Acompanyo restaurants, cellers i marques d'alimentació a definir el seu relat i portar-lo als mitjans: estratègia, continguts i relació amb la premsa.",

    "journalism.kicker": "Periodisme",
    "journalism.title": "Crònica, crítica i reportatge",
    "journalism.intro": "Una selecció de peces sobre gastronomia, cultura i literatura, i les persones que les mouen.",

    "books.kicker": "Llibres",
    "books.title": "Obra literària",
    "books.intro": "Narrativa publicada a Espanya i Llatinoamèrica que explora la vulnerabilitat, el desig i el poder.",

    "about.kicker": "Sobre mi",
    "about.title": "Manuel Gerardo Sánchez",
    "about.awardsTitle": "Premis i reconeixements",

    "testimonials.kicker": "Testimonis",
    "testimonials.title": "El que diuen del meu treball",

    "contact.kicker": "Contacte",
    "contact.title": "Parlem del teu projecte",
    "contact.intro": "Una història per explicar, un restaurant per llançar o una col·laboració editorial? Escriu-me.",

    "footer.meta": "© 2026 Manuel Gerardo Sánchez · Barcelona"
  },

  /* ---------- Repeating data blocks ---------- */

  publications: ["Cocina y Vino", "Exceso", "Complot", "El Estímulo", "Clímax", "The Objective", "Zenda"],

  // Real, published pieces: one gastronomy feature (The Objective) plus five
  // columns from his Zenda author page. Article thumbnails are still
  // placeholders until Manuel sends images.
  // Six curated pieces, each with photo + short teaser. (Teasers are editorial
  // summaries to confirm with Manuel.)
  articles: [
    {
      ph: "article-1", img: "assets/img/article-isadora.jpg",
      tag: { es: "Perfil", ca: "Perfil" }, outlet: "The Objective",
      title: { es: "Isadora de Zubillaga: la embajada de la prudencia", ca: "Isadora de Zubillaga: la embajada de la prudencia" },
      excerpt: { es: "Un perfil a fondo: la persona detrás del cargo.", ca: "Un perfil a fons: la persona darrere del càrrec." },
      href: "https://theobjective.com/further/espana/2019-05-20/isadora-de-zubillaga-la-embajada-de-la-prudencia/"
    },
    {
      ph: "article-2", img: "assets/img/article-cienciaficcion.webp",
      tag: { es: "Ensayo", ca: "Assaig" }, outlet: "Blog",
      title: { es: "Cienciaficción", ca: "Cienciaficció" },
      excerpt: { es: "Un ensayo sobre el futuro que imaginamos y lo que dice de nosotros.", ca: "Un assaig sobre el futur que imaginem i el que diu de nosaltres." },
      href: "https://manuelgerardosanchez.com/2024/05/11/cienciaficcion/"
    },
    {
      ph: "article-3", img: "assets/img/article-sade.jpg",
      tag: { es: "Columna", ca: "Columna" }, outlet: "Zenda",
      title: { es: "Sade y la primera orgía", ca: "Sade y la primera orgía" },
      excerpt: { es: "El marqués, el deseo y los límites: una lectura de Sade.", ca: "El marquès, el desig i els límits: una lectura de Sade." },
      href: "https://www.zendalibros.com/sade-y-la-primera-orgia/"
    },
    {
      ph: "article-4", img: "assets/img/article-yasmina.jpg",
      tag: { es: "Columna", ca: "Columna" }, outlet: "Zenda",
      title: { es: "Yasmina Reza sabe de hombres", ca: "Yasmina Reza sabe de hombres" },
      excerpt: { es: "La dramaturga que disecciona, con humor afilado, el ego masculino.", ca: "La dramaturga que dissecciona, amb humor afilat, l'ego masculí." },
      href: "https://www.zendalibros.com/yasmina-reza-sabe-de-hombres/"
    },
    {
      ph: "article-5", img: "assets/img/article-llamado.jpg",
      tag: { es: "Columna", ca: "Columna" }, outlet: "Zenda",
      title: { es: "El llamado del diablo", ca: "El llamado del diablo" },
      excerpt: { es: "Una indagación sobre la vieja fascinación por el mal.", ca: "Una indagació sobre la vella fascinació pel mal." },
      href: "https://www.zendalibros.com/el-llamado-del-diablo/"
    },
    {
      ph: "article-6", img: "assets/img/article-homofobia.jpg",
      tag: { es: "Columna", ca: "Columna" }, outlet: "Zenda",
      title: { es: "Homofobia, hasta después de la muerte", ca: "Homofòbia, fins després de la mort" },
      excerpt: { es: "Sobre un estigma que persiste más allá de la vida.", ca: "Sobre un estigma que persisteix més enllà de la vida." },
      href: "https://www.zendalibros.com/homofobia-hasta-despues-de-la-muerte/"
    }
  ],

  // Real books with sourced synopses.
  books: [
    {
      ph: "book-1", title: "En verano duele más", cover: "assets/img/en-verano-duele-mas.jpg", meta: { es: "Novela · Egales, 2023", ca: "Novel·la · Egales, 2023", en: "Novel · Egales, 2023" },
      blurb: {
        es: "Camille regresa a Punta de Mata, en el oriente venezolano, cuando su padre agoniza. Una novela sobre la familia, el deseo, la culpa y la memoria.",
        ca: "En Camille torna a Punta de Mata, a l'orient veneçolà, quan el seu pare agonitza. Una novel·la sobre la família, el desig, la culpa i la memòria.",
        en: "Camille returns to Punta de Mata, in eastern Venezuela, as his father lies dying. A novel about family, desire, guilt and memory."
      }
    },
    {
      ph: "book-2", title: "El revuelo de los insectos", cover: "assets/img/el-revuelo-de-los-insectos.jpg", meta: { es: "Novela · Egales, 2020", ca: "Novel·la · Egales, 2020", en: "Novel · Egales, 2020" },
      blurb: {
        es: "Dos milicianos desertores —y amantes— huyen por la selva de una tiranía imaginaria. Una fábula orwelliana sobre el poder, la persecución y el deseo.",
        ca: "Dos milicians desertors —i amants— fugen per la selva d'una tirania imaginària. Una faula orwelliana sobre el poder, la persecució i el desig.",
        en: "Two deserting militiamen — and lovers — flee through the jungle of an imaginary tyranny. An Orwellian fable about power, persecution and desire."
      }
    },
    {
      ph: "book-3", title: "Sangre que lava", cover: "assets/img/sangre-que-lava.jpg", meta: { es: "Relatos, 2016", ca: "Relats, 2016", en: "Stories, 2016" },
      blurb: {
        es: "Relatos donde conviven la vulnerabilidad y la violencia, sello de la narrativa del autor.",
        ca: "Relats on conviuen la vulnerabilitat i la violència, segell de la narrativa de l'autor.",
        en: "Stories where vulnerability and violence coexist — a hallmark of the author's fiction."
      }
    },
    {
      ph: "book-4", title: "El último día de mi reinado", cover: "assets/img/el-ultimo-dia-de-mi-reinado.jpg", meta: { es: "Relatos · Sudaquia, 2013", ca: "Relats · Sudaquia, 2013", en: "Stories · Sudaquia, 2013" },
      blurb: {
        es: "Su primer libro de cuentos, donde ya asoman las tensiones entre vulnerabilidad y poder que marcarán su obra.",
        ca: "El seu primer llibre de contes, on ja apunten les tensions entre vulnerabilitat i poder que marcaran la seva obra.",
        en: "His debut story collection, where the tensions between vulnerability and power that mark his work already surface."
      }
    }
  ],

  services: [
    {
      icon: "✶", title: { es: "Estrategia de relato", ca: "Estratègia de relat", en: "Story & positioning" },
      body: {
        es: "Definimos qué hace única a tu cocina y cómo contarlo, dentro y fuera de la carta.",
        ca: "Definim què fa única la teva cuina i com explicar-ho, dins i fora de la carta.",
        en: "We define what makes your kitchen unique and how to tell it — on and off the menu."
      }
    },
    {
      icon: "✎", title: { es: "Contenidos y copy", ca: "Continguts i copy", en: "Content & copywriting" },
      body: {
        es: "Cartas, webs, dossieres de prensa y redes con una voz propia y cuidada.",
        ca: "Cartes, webs, dossiers de premsa i xarxes amb una veu pròpia i acurada.",
        en: "Menus, websites, press kits and social with a careful voice of its own."
      }
    },
    {
      icon: "❋", title: { es: "Relación con prensa", ca: "Relació amb la premsa", en: "Press & media relations" },
      body: {
        es: "Te conecto con los periodistas, guías y medios de gastronomía que importan.",
        ca: "Et connecto amb els periodistes, guies i mitjans de gastronomia que importen.",
        en: "I connect you with the journalists, guides and food media that matter."
      }
    },
    {
      icon: "✦", title: { es: "Lanzamientos y eventos", ca: "Llançaments i esdeveniments", en: "Launches & events" },
      body: {
        es: "Aperturas, nuevas cartas y experiencias pensadas para tener repercusión.",
        ca: "Obertures, noves cartes i experiències pensades per tenir repercussió.",
        en: "Openings, new menus and experiences designed to land."
      }
    }
  ],

  clients: ["[Cliente 1]", "[Cliente 2]", "[Cliente 3]", "[Cliente 4]", "[Cliente 5]"],

  about: {
    es: [
      "Manuel Gerardo Sánchez (Caracas, 1982) es escritor, periodista e historiador afincado en Barcelona. Se formó como historiador en la Universidad Central de Venezuela y cursó un máster en Literatura Comparada y Estudios Culturales en la Universitat Autònoma de Barcelona.",
      "Durante ocho años dirigió la revista de investigación Clímax y hoy es editor asociado de El Estímulo. Colabora con The Objective y Zenda, y ha firmado crónicas, reportajes, entrevistas y perfiles —también gastronómicos— en Exceso, Cocina y Vino y Complot, entre otros.",
      "Es autor de En verano duele más (Egales, 2023), El revuelo de los insectos (Egales, 2020), Sangre que lava y El último día de mi reinado (Sudaquia)."
    ],
    ca: [
      "Manuel Gerardo Sánchez (Caracas, 1982) és escriptor, periodista i historiador establert a Barcelona. Es va formar com a historiador a la Universitat Central de Veneçuela i va cursar un màster en Literatura Comparada i Estudis Culturals a la Universitat Autònoma de Barcelona.",
      "Durant vuit anys va dirigir la revista d'investigació Clímax i avui és editor associat d'El Estímulo. Col·labora amb The Objective i Zenda, i ha signat cròniques, reportatges, entrevistes i perfils —també gastronòmics— a Exceso, Cocina y Vino i Complot, entre d'altres.",
      "És autor d'En verano duele más (Egales, 2023), El revuelo de los insectos (Egales, 2020), Sangre que lava i El último día de mi reinado (Sudaquia)."
    ]
  },

  awards: [
    { es: "Premio a la Excelencia Periodística — Sociedad Interamericana de Prensa (SIP)", ca: "Premi a l'Excel·lència Periodística — Societat Interamericana de Premsa (SIP)", en: "Award for Journalistic Excellence — Inter American Press Association (IAPA)" },
    { es: "Premio de relato y residencia artística — Centre d'Art La Rectoria (España)", ca: "Premi de relat i residència artística — Centre d'Art La Rectoria (Espanya)", en: "Short-story prize & artistic residency — Centre d'Art La Rectoria (Spain)" },
    { es: "Beca de residencia artística — Centre d'Art Camac (Francia)", ca: "Beca de residència artística — Centre d'Art Camac (França)", en: "Artistic residency grant — Centre d'Art Camac (France)" }
  ],

  testimonials: [
    { quote: { es: "[Testimonio] Trabajar con Manuel cambió cómo contamos lo que hacemos.", ca: "[Testimoni] Treballar amb en Manuel va canviar com expliquem el que fem.", en: "[Testimonial] Working with Manuel changed how we tell our story." }, author: "[Nombre], [Restaurante]" },
    { quote: { es: "[Testimonio] Su mirada periodística marca la diferencia.", ca: "[Testimoni] La seva mirada periodística marca la diferència.", en: "[Testimonial] His journalist's eye makes the difference." }, author: "[Nombre], [Medio / Marca]" },
    { quote: { es: "[Testimonio] Rigor, voz y buen gusto a partes iguales.", ca: "[Testimoni] Rigor, veu i bon gust a parts iguals.", en: "[Testimonial] Rigour, voice and good taste in equal measure." }, author: "[Nombre], [Bodega]" }
  ],

  // Real where known; Instagram handle to confirm.
  social: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/manuel-gerardo-sanchez/" },
    { label: "Facebook", href: "https://www.facebook.com/manuelgerardoescritor/" }
  ]
};
