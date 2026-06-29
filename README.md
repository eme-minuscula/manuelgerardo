# Manuel Gerardo Sánchez — website

A fast, fully responsive **one-page** site for Manuel Gerardo Sánchez —
gastronomy journalist, author and PR for restaurants & food brands.

- **Trilingual** ES / CA / EN. Defaults to the visitor's browser language;
  picker in the footer remembers a manual choice.
- **One style** — "Literary Gold": elegant, book-like, bold-but-posh
  (Playfair Display + EB Garamond, gold accents, dark closing bands).
- No build step, no framework, no cost: plain **HTML + CSS + JS**.

## Preview locally

```bash
# from the repo root, any static server works:
python3 -m http.server 8000
# then open http://localhost:8000
```

## How it's organised

```
index.html              # markup / section skeleton
assets/css/base.css     # layout + responsive (structure)
assets/css/themes.css   # the two style proposals (design tokens)
assets/js/content.js    # ALL text & data, bilingual — edit content here
assets/js/main.js       # rendering + language/theme toggles
CNAME                   # custom domain for GitHub Pages
```

To change wording or add articles/books/clients, edit **`assets/js/content.js`** only.

## Free hosting on GitHub Pages

1. Push this repo to GitHub.
2. **Settings → Pages → Build and deployment → Deploy from a branch**, pick the
   branch and `/ (root)`.
3. Pages publishes at `https://<user>.github.io/<repo>/` with free HTTPS.
4. **Custom domain (free):** the included `CNAME` points at
   `manuelgerardosanchez.com`. At the domain registrar, add DNS records:
   - `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `<user>.github.io`
   Then tick **Enforce HTTPS** in Pages.

## Make the contact form work (free, optional)

The form posts to a placeholder. Create a free [Formspree](https://formspree.io)
form and replace `your-form-id` in `index.html` (`action="https://formspree.io/f/your-form-id"`).
Until then, the email link works fine.

---

## ⚠️ Content & assets still needed from Manuel

Real text is filled in where it could be sourced (bio, the four books + synopses,
awards, the verified *The Objective* article, LinkedIn/Facebook). The items below
still need him.

### Images — ALL are placeholders (and must be supplied)
The build environment can't reach his sites to pull images, so nothing was
imported. Provide the actual files (drop them in `assets/img/` and we wire them
up) **or** paste public image URLs and we'll link them:
- [ ] **Portrait** — hero photo (vertical, ~4:5) and an About photo.
- [ ] **Book covers** — cover image for each of the 4 books (~2:3).
- [ ] **Article thumbnails** — 1 image per journalism piece (~3:2).
- [ ] **Client / publication logos** — optional, if we want logos instead of text.

### Text & data
- [ ] **Journalism** — the real card #1 (*The Objective*) is in; replace the 3
      `[Ejemplo]/[Sample]` cards with his chosen pieces (title, outlet, summary, **link**).
- [ ] **Clients** — restaurants / brands he's worked with (names + permission).
- [ ] **Testimonials** — 2–3 real quotes with name + business (currently placeholder).
- [ ] **Services** — confirm the 4 areas / wording; add packages or pricing if wanted.
- [ ] **Contact** — confirm the email (`hola@…` is a guess) and the **Instagram** handle.
- [ ] **Book years** — confirm *Sangre que lava* (2016?) and *El último día de mi reinado* (2013/2014?).

### Decisions to confirm
- [ ] Domain: confirm we're reusing `manuelgerardosanchez.com`.
- [ ] Default language behaviour (browser-detect) and the ES/CA/EN set are as requested.
