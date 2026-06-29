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
    "journalism.title": "Crónica, crítica y reportaje gastronómico",
    "journalism.intro": "Una selección de piezas sobre cocina, producto, cultura del vino y las personas que mueven la gastronomía.",

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
    "journalism.title": "Crònica, crítica i reportatge gastronòmic",
    "journalism.intro": "Una selecció de peces sobre cuina, producte, cultura del vi i les persones que mouen la gastronomia.",

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

  en: {
    "nav.services": "PR & Brands",
    "nav.journalism": "Journalism",
    "nav.books": "Books",
    "nav.about": "About",
    "nav.contact": "Contact",

    "hero.eyebrow": "Food PR · Journalist · Author",
    "hero.title": "I tell the story of food — from the long read to the brand.",
    "hero.lede": "Communications for restaurants and food brands, with a journalist's eye and an author's voice. Based in Barcelona.",
    "hero.ctaPrimary": "Let's work together",
    "hero.ctaSecondary": "See my journalism",

    "strip.label": "My work has appeared in",

    "services.kicker": "PR & Brands",
    "services.title": "Communications for restaurants & gastronomy",
    "services.intro": "I help restaurants, wineries and food brands define their story and take it to the media: strategy, content and press relations.",

    "journalism.kicker": "Journalism",
    "journalism.title": "Food features, criticism and reporting",
    "journalism.intro": "A selection of pieces on cooking, produce, wine culture and the people who move gastronomy forward.",

    "books.kicker": "Books",
    "books.title": "Literary work",
    "books.intro": "Fiction published in Spain and Latin America — stories that explore vulnerability, desire and power.",

    "about.kicker": "About",
    "about.title": "Manuel Gerardo Sánchez",
    "about.awardsTitle": "Awards & recognition",

    "testimonials.kicker": "Testimonials",
    "testimonials.title": "What people say about my work",

    "contact.kicker": "Contact",
    "contact.title": "Let's talk about your project",
    "contact.intro": "A story to tell, a restaurant to launch, or an editorial collaboration? Get in touch.",

    "footer.meta": "© 2026 Manuel Gerardo Sánchez · Barcelona"
  },

  /* ---------- Repeating data blocks ---------- */

  publications: ["Cocina y Vino", "Exceso", "Complot", "El Estímulo", "Clímax", "The Objective", "Zenda"],

  // First card is a verified, published gastronomy piece (real link). The rest
  // are clearly-marked examples until Manuel sends his selected articles.
  articles: [
    {
      ph: "article-1", tag: { es: "Crónica", ca: "Crònica", en: "Feature" }, outlet: "The Objective",
      title: {
        es: "Tribulaciones de un gourmet español en China",
        ca: "Tribulacions d'un gourmet espanyol a la Xina",
        en: "Tribulations of a Spanish gourmet in China"
      },
      excerpt: {
        es: "Crónica gastronómica sobre el choque —y el placer— de comer lejos de casa.",
        ca: "Crònica gastronòmica sobre el xoc —i el plaer— de menjar lluny de casa.",
        en: "A food feature on the clash — and the pleasure — of eating far from home."
      },
      href: "https://theobjective.com/gastronomia/2024-09-29/tribulaciones-de-un-gourmet-espanol-en-china/"
    },
    {
      ph: "article-2", tag: { es: "Ejemplo", ca: "Exemple", en: "Sample" }, outlet: "Cocina y Vino",
      title: { es: "[Ejemplo] Crónica de un producto de temporada", ca: "[Exemple] Crònica d'un producte de temporada", en: "[Sample] A seasonal produce feature" },
      excerpt: {
        es: "Marcador para una de tus piezas. Lo sustituimos por el artículo y el enlace reales.",
        ca: "Marcador per a una de les teves peces. El substituïm per l'article i l'enllaç reals.",
        en: "Placeholder for one of your pieces. We'll swap it for the real article and link."
      },
      href: "#"
    },
    {
      ph: "article-3", tag: { es: "Ejemplo", ca: "Exemple", en: "Sample" }, outlet: "Exceso",
      title: { es: "[Ejemplo] Perfil de un cocinero", ca: "[Exemple] Perfil d'un cuiner", en: "[Sample] Profile of a chef" },
      excerpt: {
        es: "Marcador para una de tus piezas. Lo sustituimos por el artículo y el enlace reales.",
        ca: "Marcador per a una de les teves peces. El substituïm per l'article i l'enllaç reals.",
        en: "Placeholder for one of your pieces. We'll swap it for the real article and link."
      },
      href: "#"
    },
    {
      ph: "article-4", tag: { es: "Ejemplo", ca: "Exemple", en: "Sample" }, outlet: "Complot",
      title: { es: "[Ejemplo] La nueva cultura del vino", ca: "[Exemple] La nova cultura del vi", en: "[Sample] The new wine culture" },
      excerpt: {
        es: "Marcador para una de tus piezas. Lo sustituimos por el artículo y el enlace reales.",
        ca: "Marcador per a una de les teves peces. El substituïm per l'article i l'enllaç reals.",
        en: "Placeholder for one of your pieces. We'll swap it for the real article and link."
      },
      href: "#"
    }
  ],

  // Real books with sourced synopses.
  books: [
    {
      ph: "book-1", title: "En verano duele más", meta: { es: "Novela · Egales, 2023", ca: "Novel·la · Egales, 2023", en: "Novel · Egales, 2023" },
      blurb: {
        es: "Camille regresa a Punta de Mata, en el oriente venezolano, cuando su padre agoniza. Una novela sobre la familia, el deseo, la culpa y la memoria.",
        ca: "En Camille torna a Punta de Mata, a l'orient veneçolà, quan el seu pare agonitza. Una novel·la sobre la família, el desig, la culpa i la memòria.",
        en: "Camille returns to Punta de Mata, in eastern Venezuela, as his father lies dying. A novel about family, desire, guilt and memory."
      }
    },
    {
      ph: "book-2", title: "El revuelo de los insectos", meta: { es: "Novela · Egales, 2020", ca: "Novel·la · Egales, 2020", en: "Novel · Egales, 2020" },
      blurb: {
        es: "Dos milicianos desertores —y amantes— huyen por la selva de una tiranía imaginaria. Una fábula orwelliana sobre el poder, la persecución y el deseo.",
        ca: "Dos milicians desertors —i amants— fugen per la selva d'una tirania imaginària. Una faula orwelliana sobre el poder, la persecució i el desig.",
        en: "Two deserting militiamen — and lovers — flee through the jungle of an imaginary tyranny. An Orwellian fable about power, persecution and desire."
      }
    },
    {
      ph: "book-3", title: "Sangre que lava", meta: { es: "Relatos, 2016", ca: "Relats, 2016", en: "Stories, 2016" },
      blurb: {
        es: "Relatos donde conviven la vulnerabilidad y la violencia, sello de la narrativa del autor.",
        ca: "Relats on conviuen la vulnerabilitat i la violència, segell de la narrativa de l'autor.",
        en: "Stories where vulnerability and violence coexist — a hallmark of the author's fiction."
      }
    },
    {
      ph: "book-4", title: "El último día de mi reinado", meta: { es: "Relatos · Sudaquia, 2013", ca: "Relats · Sudaquia, 2013", en: "Stories · Sudaquia, 2013" },
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
    ],
    en: [
      "Manuel Gerardo Sánchez (Caracas, 1982) is a writer, journalist and historian based in Barcelona. He trained as a historian at the Central University of Venezuela and holds a master's in Comparative Literature and Cultural Studies from the Autonomous University of Barcelona.",
      "For eight years he edited the investigative magazine Clímax and today he is associate editor of El Estímulo. He contributes to The Objective and Zenda, and has written features, reporting, interviews and profiles — food writing among them — for Exceso, Cocina y Vino and Complot, among others.",
      "He is the author of En verano duele más (Egales, 2023), El revuelo de los insectos (Egales, 2020), Sangre que lava and El último día de mi reinado (Sudaquia)."
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
