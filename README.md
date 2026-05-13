# Sean Jafri — Portfolio Site Update (v3)

A refreshed `index.html` for **seanjafri.github.io** with all your HP Inc.
work integrated, the original 2018 site archived at `/legacy/`, and a
**rotating hero background** that crossfades through 5 images every 10
seconds — the lab anchor plus four photos drawn from your Mars Rover
competition and personal travel shots.

## What's in this package

```
index.html                                 New homepage (~62 KB)
README.md                                  This file
img/
  shaad_favicon1.png                       Favicon (carried over)
  Sean Jafri Resume.pdf                    Resume (carried over)
  hero/                                    NEW — rotating background images
    01-lab.jpg                             HP Inc. lab (anchor / first frame)
    02-rover-desert.jpg                    Mars Rover at URC 2017 competition
    03-mountains.jpg                       Pikes Peak landscape
    04-sunset.jpg                          Sunset over the lake
    05-savannah.jpg                        Savannah riverfront, Sept 2025
  portfolio/                               Lightweight stills for earlier work
    2017.jpg                               ← upgraded: URC team photo with rover
    sundog.jpg                             UTARI Sundog CAD render
    uvs2.jpg                               ← upgraded: actual UVS ball-tracking demo
  projects/                                HP project images (~3 MB total)
    cradle-original · universal-cradle
    aluminum-frame · ram-mount-render
    mega-ii-render · mega-original-vs-ii
    varda-render
    deep-purple-db0 · deep-purple-fixture-live
    keyboard-bot-top · keyboard-bot-poster
    usbc-flip-bot
    low-power-switch · triage-fixture
videos/
  deep-purple-insertion.mp4                40s, 720p (~1.5 MB)
  keyboard-bot-typing.mp4                  25s, 540p (~1.5 MB)
legacy/
  index.html                               Original 2018 portfolio
  css/ · js/ · scss/ · vendor/             Original Bootstrap "Freelancer" assets
```

## What changed since the last package

- ✅ **Rotating hero background** — five images crossfade every 10 seconds
  (lab → URC rover → Pikes Peak → Texas sunset → Savannah → repeat). Smooth
  1.6-second crossfade. Pauses automatically when you scroll past the hero
  or switch tabs (saves CPU/battery). Respects `prefers-reduced-motion`
  (no rotation if the user has it enabled).
- ✅ **Upgraded Mars Rover earlier-work card** — replaced the old CAD render
  with the URC competition team photo (you, the rover, and the team in the
  Utah desert).
- ✅ **Upgraded UVS earlier-work card** — replaced the placeholder render
  with a real frame from the tennis-ball tracking demo, showing the rover
  actually running its machine-vision/SLAM stack.

## How to deploy

### Option A — quick drop-in (recommended)

1. Unzip this archive at the root of your `seanjafri.github.io` repo.
2. The new `img/hero/` folder is added; the old `img/hero-lab.jpg` from
   the previous package is no longer referenced — you can delete it.
3. **Optional cleanup** — once you confirm everything renders:
   - Old `img/portfolio/*.gif` files (~100 MB total) are still referenced
     by the legacy site via `../img/portfolio/`. Leave them if you want
     legacy GIFs to keep animating. Delete if you don't.
   - Root-level `css/`, `js/`, `vendor/`, `scss/`, `mail/`, `gulpfile.js`,
     `package.json`, `package-lock.json` aren't used by the new site.
     The legacy folder has its own copy.
4. Commit and push.

### Option B — verify locally first

```bash
cd /path/to/seanjafri.github.io
unzip ~/Downloads/seanjafri-site-update.zip
python3 -m http.server 8000
# Open http://localhost:8000          → new site (watch hero rotate)
# Open http://localhost:8000/legacy/  → original 2018 site
```

## Project structure on the live site

1. **Hero** — rotating background (5 images, 10s each), big intro
2. **About** — three-paragraph intro
3. **Stats** — 4 headline numbers
4. **Selected work at HP** (8 featured projects):
   - Test Fixture Evolution · Mega II · Varda · Deep Purple (+video)
   - Keyboard Bot (+video) · USB-C Flip Bot · Low Power Switch · Polaris Triage
5. **The bot family** — 9-card catalogue
6. **Earlier engineering work** — Mars Rover, Sundog, UVS
7. **Toolkit** — Mechanical/CAD · Electronics/Software · Manufacturing
8. **Contact**
9. **Archive band** — link to legacy site
10. **Footer**

## How the hero rotation works

Five `<div>` elements stacked behind the hero text, each with a different
`background-image`. CSS class `.active` on one of them = `opacity: 1` with
a 1.6-second transition. JavaScript flips which one has `.active` every
10 seconds. Image #1 (the lab) loads immediately for first paint; the
other four crossfade in over the next 40 seconds, plenty of time for them
to finish loading even on slow connections.

To **change the rotation order**, reorder the `<div class="hero-bg-img">`
lines inside `<div class="hero-bg-stack">` near the top of `index.html`.
To **change the timing**, search for `10000` in the `<script>` block
(milliseconds — currently 10 seconds). To **add or remove an image**,
add/delete a `.hero-bg-img` div with the appropriate `background-image`
URL — no other code changes needed, the rotator handles any count ≥ 2.

To **disable rotation entirely**, remove all but one `.hero-bg-img` div,
or remove the `(function(){ ... })();` rotator block from the script.

## Things to verify before you push

- [ ] **Original vs Mega II caption** — currently labelled "Original (left)
  vs Mega II (right)". Swap if you have it backwards.
- [ ] **"Pelori" vs "Polaris"** — your filename was Pelori, your resume
  was Polaris. I used Polaris.
- [ ] **Credits** — Mega II ("Schematic by my manager. PCB layout, mechanical
  by me.") and Varda ("Schematic by an EE on the team. PCB layout and
  mechanical by me."). Search `proj-credit` in `index.html` to edit.
- [ ] **Stat numbers** — −93% / $7.2k/yr / 250+ / 12×.
- [ ] **"Open to opportunities"** — visible in hero meta + contact section.
- [ ] **Resume link** — `img/Sean Jafri Resume.pdf`.
- [ ] **Hero rotation order** — currently lab → rover → mountains → sunset
  → Savannah. Reorder the divs in `<div class="hero-bg-stack">` if you
  want a different sequence (or remove some).

## Total weight

| Bucket | Size |
| --- | --- |
| New site (HTML + inline CSS/JS) | ~62 KB |
| Hero rotation images (5 × ~400 KB avg) | ~2 MB |
| HP project images | ~3 MB |
| Earlier-work stills | ~340 KB |
| Two embedded videos | ~3 MB |
| Legacy site assets | ~5 MB |
| **Total in this package** | **~13 MB** |

