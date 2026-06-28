/*
 * Bilingual content for the site.
 * Real, verifiable facts (books, awards, publications, bio) are filled in.
 * Anything we don't have yet uses [PLACEHOLDER] / Lorem Ipsum and is listed
 * in README.md under "Content & assets still needed".
 */
window.SITE_CONTENT = {
  /* ---------- UI labels & static strings ---------- */
  es: {
    "ui.editorial": "Editorial",
    "ui.literary": "Literario",

    "nav.journalism": "Periodismo",
    "nav.books": "Libros",
    "nav.services": "PR & Marcas",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",

    "hero.eyebrow": "Periodista gastronómico · Escritor · PR",
    "hero.title": "Cuento la gastronomía: de la crónica al relato de marca.",
    "hero.lede": "Periodista y escritor afincado en Barcelona. Escribo sobre cocina, cultura y las historias que hay detrás de cada plato, y ayudo a restaurantes y marcas a contar las suyas.",
    "hero.ctaPrimary": "Ver mi periodismo",
    "hero.ctaSecondary": "Trabajemos juntos",

    "strip.label": "Mi trabajo ha aparecido en",

    "journalism.kicker": "Periodismo",
    "journalism.title": "Crónica, crítica y reportaje gastronómico",
    "journalism.intro": "Una selección de artículos sobre cocina, producto, cultura del vino y las personas que mueven la gastronomía. [Sustituiremos estos ejemplos por tus piezas reales y sus enlaces.]",

    "books.kicker": "Libros",
    "books.title": "Obra literaria",
    "books.intro": "Narrativa publicada en España y Latinoamérica. Ficción que explora la vulnerabilidad, el deseo y el poder.",

    "services.kicker": "PR & Marcas",
    "services.title": "Comunicación para restaurantes y gastronomía",
    "services.intro": "Acompaño a restaurantes, bodegas y marcas de alimentación a definir su relato y llevarlo a los medios. Estrategia, contenidos y relación con prensa.",

    "about.kicker": "Sobre mí",
    "about.title": "Manuel Gerardo Sánchez",
    "about.awardsTitle": "Premios y reconocimientos",

    "testimonials.kicker": "Testimonios",
    "testimonials.title": "Lo que dicen de mi trabajo",

    "contact.kicker": "Contacto",
    "contact.title": "Hablemos de tu proyecto",
    "contact.intro": "¿Una historia que contar, un restaurante que lanzar o una colaboración editorial? Escríbeme.",
    "contact.formName": "Nombre",
    "contact.formEmail": "Email",
    "contact.formMessage": "Mensaje",
    "contact.formSubmit": "Enviar mensaje",
    "contact.formNote": "Este formulario aún no está conectado. Configura un servicio gratuito (p. ej. Formspree) o usa el email de arriba.",

    "footer.meta": "© 2026 Manuel Gerardo Sánchez · Barcelona"
  },

  en: {
    "ui.editorial": "Editorial",
    "ui.literary": "Literary",

    "nav.journalism": "Journalism",
    "nav.books": "Books",
    "nav.services": "PR & Brands",
    "nav.about": "About",
    "nav.contact": "Contact",

    "hero.eyebrow": "Gastronomy journalist · Author · PR",
    "hero.title": "I tell the story of food — from the long read to the brand.",
    "hero.lede": "A journalist and author based in Barcelona. I write about cooking, culture and the stories behind every dish, and I help restaurants and brands tell their own.",
    "hero.ctaPrimary": "See my journalism",
    "hero.ctaSecondary": "Let's work together",

    "strip.label": "My work has appeared in",

    "journalism.kicker": "Journalism",
    "journalism.title": "Food features, criticism and reporting",
    "journalism.intro": "A selection of pieces on cooking, produce, wine culture and the people who move gastronomy forward. [We'll swap these samples for your real articles and links.]",

    "books.kicker": "Books",
    "books.title": "Literary work",
    "books.intro": "Fiction published in Spain and Latin America — stories that explore vulnerability, desire and power.",

    "services.kicker": "PR & Brands",
    "services.title": "Communications for restaurants & gastronomy",
    "services.intro": "I help restaurants, wineries and food brands define their story and take it to the media — strategy, content and press relations.",

    "about.kicker": "About",
    "about.title": "Manuel Gerardo Sánchez",
    "about.awardsTitle": "Awards & recognition",

    "testimonials.kicker": "Testimonials",
    "testimonials.title": "What people say about my work",

    "contact.kicker": "Contact",
    "contact.title": "Let's talk about your project",
    "contact.intro": "A story to tell, a restaurant to launch, or an editorial collaboration? Get in touch.",
    "contact.formName": "Name",
    "contact.formEmail": "Email",
    "contact.formMessage": "Message",
    "contact.formSubmit": "Send message",
    "contact.formNote": "This form isn't connected yet. Set up a free service (e.g. Formspree) or use the email above.",

    "footer.meta": "© 2026 Manuel Gerardo Sánchez · Barcelona"
  },

  /* ---------- Repeating data blocks (rendered by main.js) ---------- */

  // Publications strip — real outlets from his career. Logos are text placeholders.
  publications: ["Cocina y Vino", "Exceso", "Complot", "El Estímulo", "Clímax", "The Objective", "Zenda"],

  // Journalism cards. Titles/excerpts are PLACEHOLDER Lorem until real pieces arrive.
  articles: [
    {
      ph: "article-1", tag: { es: "Crónica", en: "Feature" }, outlet: "Cocina y Vino",
      title: { es: "[Título de artículo] El sabor que dejó la frontera", en: "[Article title] The flavour the border left behind" },
      excerpt: {
        es: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      href: "#"
    },
    {
      ph: "article-2", tag: { es: "Crítica", en: "Review" }, outlet: "Exceso",
      title: { es: "[Título de artículo] Una mesa para entender la ciudad", en: "[Article title] A table that explains the city" },
      excerpt: {
        es: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        en: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      href: "#"
    },
    {
      ph: "article-3", tag: { es: "Reportaje", en: "Reporting" }, outlet: "The Objective",
      title: { es: "[Título de artículo] El oficio detrás de la barra", en: "[Article title] The craft behind the bar" },
      excerpt: {
        es: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        en: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      href: "#"
    },
    {
      ph: "article-4", tag: { es: "Perfil", en: "Profile" }, outlet: "Complot",
      title: { es: "[Título de artículo] Retrato de un cocinero", en: "[Article title] Portrait of a cook" },
      excerpt: {
        es: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        en: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      href: "#"
    },
    {
      ph: "article-5", tag: { es: "Vino", en: "Wine" }, outlet: "Cocina y Vino",
      title: { es: "[Título de artículo] La nueva geografía del vino", en: "[Article title] The new geography of wine" },
      excerpt: {
        es: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        en: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
      },
      href: "#"
    },
    {
      ph: "article-6", tag: { es: "Ensayo", en: "Essay" }, outlet: "Zenda",
      title: { es: "[Título de artículo] Comer como forma de memoria", en: "[Article title] Eating as a form of memory" },
      excerpt: {
        es: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.",
        en: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni."
      },
      href: "#"
    }
  ],

  // Books — real titles & publishers.
  books: [
    { ph: "book-1", title: "En verano duele más", meta: { es: "Relatos · Editorial Egales, 2023", en: "Stories · Editorial Egales, 2023" } },
    { ph: "book-2", title: "El revuelo de los insectos", meta: { es: "Novela · Editorial Egales, 2020", en: "Novel · Editorial Egales, 2020" } },
    { ph: "book-3", title: "Sangre que lava", meta: { es: "Relatos, 2017", en: "Stories, 2017" } },
    { ph: "book-4", title: "El último día de mi reinado", meta: { es: "Relatos · Sudaquia, 2013", en: "Stories · Sudaquia, 2013" } }
  ],

  // PR / services — descriptions are PLACEHOLDER, to be refined with Manuel.
  services: [
    {
      icon: "✶", title: { es: "Estrategia de relato", en: "Story & positioning" },
      body: {
        es: "Definimos qué hace única a tu cocina y cómo contarlo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        en: "We define what makes your kitchen unique and how to tell it. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    },
    {
      icon: "✎", title: { es: "Contenidos y copy", en: "Content & copywriting" },
      body: {
        es: "Cartas, webs, dossieres y redes con voz propia. Ut enim ad minim veniam, quis nostrud exercitation.",
        en: "Menus, websites, press kits and social with a voice of its own. Ut enim ad minim veniam, quis nostrud."
      }
    },
    {
      icon: "❋", title: { es: "Relación con prensa", en: "Press & media relations" },
      body: {
        es: "Te conecto con periodistas, guías y medios de gastronomía. Duis aute irure dolor in reprehenderit.",
        en: "I connect you with journalists, guides and food media. Duis aute irure dolor in reprehenderit."
      }
    },
    {
      icon: "✦", title: { es: "Lanzamientos y eventos", en: "Launches & events" },
      body: {
        es: "Aperturas, nuevas cartas y experiencias con repercusión. Excepteur sint occaecat cupidatat non proident.",
        en: "Openings, new menus and experiences that land. Excepteur sint occaecat cupidatat non proident."
      }
    }
  ],

  // Client logos — placeholders.
  clients: ["[Cliente 1]", "[Cliente 2]", "[Cliente 3]", "[Cliente 4]", "[Cliente 5]"],

  // About — real, condensed bio + real awards.
  about: {
    es: [
      "Manuel Gerardo Sánchez (Caracas, 1982) es escritor, periodista e historiador afincado en Barcelona. Estudió Historia en la Universidad Central de Venezuela y un máster en Literatura Comparada y Estudios Culturales en la Universitat Autònoma de Barcelona.",
      "Como periodista ha sido redactor jefe de la revista de investigación Clímax y editor del portal El Estímulo, y ha colaborado con medios como The Objective, Zenda, Papel Literario y Tal Cual. Ha publicado crónicas, reportajes, entrevistas y perfiles gastronómicos en Exceso, Cocina y Vino y Complot, entre otros.",
      "Es autor de los libros En verano duele más (Egales, 2023), El revuelo de los insectos (Egales, 2020), Sangre que lava y El último día de mi reinado (Sudaquia, 2013)."
    ],
    en: [
      "Manuel Gerardo Sánchez (Caracas, 1982) is a writer, journalist and historian based in Barcelona. He studied History at the Central University of Venezuela and holds a master's in Comparative Literature and Cultural Studies from the Autonomous University of Barcelona.",
      "As a journalist he has been editor-in-chief of the investigative magazine Clímax and editor of the news portal El Estímulo, and has contributed to outlets such as The Objective, Zenda, Papel Literario and Tal Cual. He has published features, reporting, interviews and food profiles in Exceso, Cocina y Vino and Complot, among others.",
      "He is the author of En verano duele más (Egales, 2023), El revuelo de los insectos (Egales, 2020), Sangre que lava and El último día de mi reinado (Sudaquia, 2013)."
    ]
  },

  awards: [
    { es: "Premio a la Excelencia Periodística — Sociedad Interamericana de Prensa (SIP)", en: "Award for Journalistic Excellence — Inter American Press Association (IAPA)" },
    { es: "Premio de relato y residencia artística — Centre d'Art La Rectoria (España)", en: "Short-story prize & artistic residency — Centre d'Art La Rectoria (Spain)" },
    { es: "Beca de residencia artística — Centre d'Art Camac (Francia)", en: "Artistic residency grant — Centre d'Art Camac (France)" }
  ],

  // Testimonials — PLACEHOLDER quotes.
  testimonials: [
    { quote: { es: "[Testimonio] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Trabajar con Manuel cambió cómo contamos lo que hacemos.", en: "[Testimonial] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Working with Manuel changed how we tell our story." }, author: "[Nombre], [Restaurante]" },
    { quote: { es: "[Testimonio] Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Su mirada periodística marca la diferencia.", en: "[Testimonial] Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. His journalist's eye makes the difference." }, author: "[Nombre], [Medio/Marca]" },
    { quote: { es: "[Testimonio] Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.", en: "[Testimonial] Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip." }, author: "[Nombre], [Bodega]" }
  ],

  // Social links — placeholders to confirm.
  social: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "X / Twitter", href: "#" }
  ]
};
