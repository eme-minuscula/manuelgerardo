# Manuel Gerardo Sánchez — website

A fast, fully responsive **one-page** site for Manuel Gerardo Sánchez —
gastronomy journalist, author and PR for restaurants & food brands.

- **Bilingual** ES / EN (toggle, bottom-right). Remembers your choice.
- **Two live style proposals** to compare (toggle, bottom-right):
  - **Editorial** — minimalist, magazine feel (Space Grotesk + Inter).
  - **Literary** — elegant, book-like (Playfair Display + EB Garamond).
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

Everything below is currently **Lorem Ipsum / placeholder** and should be replaced.
Real, verified facts (bio, book list, awards, outlets) are already filled in.

### Images (all are placeholders right now)
- [ ] **Portrait** — hero photo (vertical, ~4:5) and an About photo.
- [ ] **Article thumbnails** — 1 image per journalism piece (~3:2).
- [ ] **Book covers** — cover image for each of the 4 books (~2:3).
- [ ] **Client / publication logos** — optional, if we want real logos instead of text.

### Text & data
- [ ] **Hero headline & intro** — confirm or rewrite the tagline (ES + EN).
- [ ] **Journalism** — real article titles, outlets, 1–2 line summaries, and **links** (replace the 6 placeholder cards).
- [ ] **PR / Services** — confirm the 4 service areas and their descriptions; add packages/pricing if wanted.
- [ ] **Clients** — list of restaurants / brands he's worked with (names + permission to show).
- [ ] **Testimonials** — 2–3 real quotes with name + business.
- [ ] **About** — review the bio; add anything missing (current roles, what he's working on now).
- [ ] **Contact** — confirm the real email and social handles (Instagram / LinkedIn / X).

### Decisions to confirm
- [ ] Which **style proposal** he prefers (Editorial vs Literary) — then we drop the other.
- [ ] Whether to keep the bilingual toggle or launch in one language first.
- [ ] Domain: confirm we're reusing `manuelgerardosanchez.com`.
