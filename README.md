# Sean Jafri Portfolio v2

Static portfolio site for **seanjafri.github.io** — replaces the previous Bootstrap-based portfolio.

## Structure

```
/
├── index.html              Main portfolio page (thumbnail grid + modal popups)
├── css/main.css            All styles (single file, no preprocessor)
├── js/
│   ├── main.js             Hero rotation, reveal-on-scroll, modal logic
│   └── projects-data.js    Per-project content (title, tags, description, media list)
├── img/
│   ├── background/         5 hero rotation images
│   └── portfolio/          36 project images (blurred + cropped)
├── videos/                 12 optimized H.264 MP4s + 1 GIF fallback
└── legacy/                 Snapshot of the previous 2017 portfolio site
```

Total: ~239 MB (109 MB videos, 117 MB legacy, 14 MB current images).

## Deploying to seanjafri.github.io

```bash
# From an empty clone of your repo:
cd seanjafri.github.io
rm -rf *                       # wipe the current site (it's archived in legacy/)
cp -r /path/to/this/folder/* . # copy these files in
git add -A
git commit -m "Portfolio v2 — Robotics Hardware Engineer"
git push origin main           # or master, whichever your branch is
```

GitHub Pages serves it at https://seanjafri.github.io within a minute or two of push.

## Things to know

### The /legacy/ folder
Contains the previous portfolio exactly as it was. Reachable at `/legacy/index.html` from the footer link ("← View previous portfolio (2017)"). **The legacy site contains unblurred versions of the same HP fixture photos** — these have been on your live GitHub Pages site since you put them there years ago, so re-publishing them at /legacy/ doesn't expose anything new. If you want a cleaner break, delete the `legacy/` folder before deploying and remove the footer link from `index.html`.

### Image blurring
Sensitive HP-internal labels (asset tags, barcodes, HP Inc. Validation stickers, internal codenames, MAC/IP addresses, handwritten engineer names) were Gaussian-blurred at high resolution before web-resize, so the blur is locally irreversible. Project codenames (Deep Purple, Varda, Hendrix mode), HP logos embossed in CAD/prints, and embossed text on fixture bodies were intentionally left visible per your direction.

### Video sizes
Originals were 1.3 GB. All transcoded to 720p H.264 with `+faststart` flag for fast web playback. If GitHub Pages bandwidth becomes a problem, you could move videos to a CDN (Cloudflare R2, Bunny, etc.) or YouTube/Vimeo embeds and just update the `<video><source src=...>` URLs in `index.html`.

### Browser support
- All current browsers (Chrome, Safari, Firefox, Edge — current 2 versions)
- Mobile: tested at 390 × 844 (iPhone 14 Pro). Single-column responsive below 900 px width
- Respects `prefers-reduced-motion` for users who disable animations

## Editing the site

The site is plain static HTML/CSS/JS — no build step, no Node, no framework. To edit:

- **Add a project**: copy an `<article class="project">` block in `index.html` and update text + images
- **Change colors / fonts**: variables at the top of `css/main.css` under `:root`
- **Adjust hero rotation timing**: `setInterval(advance, 10000)` in `js/main.js` (10s default)
- **Replace background images**: drop new files in `img/background/` and update the `<div class="hero-slide">` URLs in the hero block

## Credits

Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces) (display, OFL), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (mono, OFL), [Inter](https://fonts.google.com/specimen/Inter) (body, OFL) — all served from Google Fonts.

Built by Sean Jafri with assistance from Claude (Anthropic), May 2026.
