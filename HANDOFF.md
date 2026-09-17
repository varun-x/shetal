# Trifreight landing — handoff

Branch: `feat/trifreight-landing`. Nothing is committed; everything below is in the
working tree.

**Read `AGENTS.md` first.** This is Next.js 16.3.4 with Turbopack. Read the relevant
guide in `node_modules/next/dist/docs/` before writing code — the APIs differ from
older Next.

---

## 1. State: verified vs unverified

### Verified (built + screenshotted in a real browser)

| Area | What was done |
|---|---|
| Dead routes | `/blog`, `/contact` created; every `/get-quote` link repointed to `/contact`. All 8 routes build and return 200. |
| Hero | Brand blue restored. Vertical beams only (no grid) + travelling glint. Real clouds blending into the next section. Stickers replace the floating info boxes. |
| Headline | Contrast raised ~3.2:1 → ~7:1 via a deeper-blue vignette (palette unchanged), looser tracking. |
| Services | Rebuilt as 4 compact sticker-led cards; the 600px panel is gone. |
| Map section | White, dotted world map as background, heading over it. The Mode/Border/Handoff boxes are gone. |
| CTA / footer | Slide-to-WhatsApp control; footer rebuilt on the Aceternity structure. |
| Widths | Container 1220 → 1140; padding and type scaled down throughout. |
| Next 16 | `priority` → `preload` on the hero image; `data-scroll-behavior="smooth"` on `<html>`. |
| Lint | Fixed a pre-existing `react-hooks/set-state-in-effect` error in `Stat.tsx`. |

### Unverified — written but never built

These four edits were made after the last screenshot pass. **Build and eyeball them
before anything else.**

1. `page.tsx` — clouds moved behind the hero mockup (`CloudBlend` → `z-0`, content
   wrapper → `z-10`). They were painting *over* the mockup and washing it out.
2. `page.tsx` — service card stickers wrapped in a fixed `h-[68px]` well so every
   card title starts on the same baseline. They were ragged.
3. `page.tsx` — approach photo `object-[32%_center]`. It was cropped to show only
   sky; the truck sits at ~30% across in `road-freight.jpg`.
4. `page.tsx` / `SiteFooter.tsx` — map-section row moved into a translucent pill so
   it reads over the map dots; the second cloud blend (white → `#ebeff3`) was
   **removed** because clouds over white render as a grey smudge; footer closing card
   tightened to kill a dead gap.

```bash
npx next build && npx next start -p 4321
```

---

## 2. Open questions for Varun — do not guess

1. **WhatsApp number.** He wrote `9457737292` (10 digits). I assumed `+91` →
   `wa.me/919457737292`, hard-coded in `src/components/ui/SlideToWhatsApp.tsx`.
   Confirm before this ships — a wrong number sends every lead nowhere.
2. **`grass.webp`** is downloaded to `public/images/atmosphere/` but unused. Flowers
   read oddly for a freight company. Confirm whether he wants it used or deleted.
3. **Contact form has no backend.** `ContactForm.tsx` opens a pre-filled `mailto:` to
   `ops@trifreight.in`. That was a deliberate choice so nothing a visitor types is
   silently dropped, but it is not a real form. Ask before wiring a service.
4. **`/get-quote` was folded into `/contact`.** The header button still reads
   "Get Quote" but points at `/contact`. Confirm he wants one page, not two.

---

## 3. Still outstanding from his review

He asked for "microanimation" and Courso-style strokes broadly. Delivered so far:
beam glints, sticker bob, card hover lift, self-drawing `HandNote` arrows, lane arcs,
port pulses, the slide control. Not yet done:

- **Only the homepage was reworked.** `/services`, `/about`, `/industries`,
  `/case-studies`, `/blog`, `/contact` still use the old wide spacing and the old
  large type scale. His complaints — "everything feels so wide", "cards are too big",
  "feels empty" — apply to those pages too. They also have no stickers.
- **`PageHero.tsx`** still carries the old `clamp(2.9rem,6.6vw,6.6rem)` scale and the
  1220px container. Bringing it in line would fix five pages at once — do this first.
- **Mobile is unchecked.** Every screenshot was 1440px. Check ~400px, especially the
  hero cloud band, the slide control (touch drag), and the world map.
- `Button.tsx`, `ArrowLink.tsx`, `SectionTag.tsx`, `Stat.tsx`, `Reveal.tsx` are
  untouched and still match the old scale.

---

## 4. Gotchas that cost real time

**Turbopack caches the Tailwind CSS output.** New utility classes in *new* files may
not appear in the compiled CSS on an incremental build. `.font-hand` was silently
missing until `rm -rf .next`. If a class has no effect and the markup looks right,
clean-build before debugging anything else.

**Tailwind emits `.relative` after `.absolute`.** Putting both on one element makes
`relative` win regardless of attribute order. This shipped a bug where a cloud layer
dropped into normal flow and pushed the hero down 544px. Don't pass a positioning
class into a component that already sets one — see the comment on `SkyClouds`'
replacement in `CloudBlend.tsx`.

**`pkill -f 'next start'` kills its own shell**, because the pattern matches the bash
command line running it. Exit code 144. Use the background-task ID instead.

**ImageMagick here is v6**, so flood-fill is `-draw 'matte x,y floodfill'`, not
`alpha`. The `alpha` primitive fails with "non-conforming drawing primitive".

**`raw.githubusercontent.com` is blocked**; the npm registry and general `curl` are
not. The world map data came from the `world-atlas` npm tarball.

---

## 5. Where things live

```
src/components/ui/
  worldMapPath.ts      generated — 1637 land dots as ONE svg path (zero-length
                       segments + round linecap). Regenerate only if the projection
                       changes; see the header comment. Natural Earth 1:50m, public domain.
  WorldMap.tsx         dark + light themes, animated lanes, port pulses
  CloudBlend.tsx       panning cloud band; `fadeTo` must match the next section's bg
  Sticker.tsx          sticker registry + bob/tilt
  SlideToWhatsApp.tsx  drag control; tap and Enter/Space also complete it
  HandNote.tsx         handwritten note + self-drawing arrow (Caveat)
```

Stickers were cut from Varun's sheet with ImageMagick connected-components; three had
merged with neighbours and were split at the emptiest column/row of their alpha
profile. Working files, including the scripts, are in this session's scratchpad —
they are not needed to build.

### Screenshot harness

`playwright-core` is installed in the scratchpad (not a project dependency). Chromium
lives at `~/.cache/ms-playwright/chromium-1234/chrome-linux64/chrome`. The scratchpad
holds `shot.js` (full-page capture, scrolls first so lazy images and `whileInView`
reveals fire) and `probe.js` (dumps element boxes, computed fonts, console errors).
Re-create them if the scratchpad is gone — screenshotting is the only way to catch the
layering and alignment bugs above; the build stays green through all of them.
