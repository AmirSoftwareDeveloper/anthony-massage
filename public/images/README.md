# Anthony Massage Works — artwork package

Everything visual in the site, in four folders: `hero/`, `people/`,
`effects/`, `variants/`.

---

## What to edit

**`hero/frame*.jpg`** (and `your-body-hero.jpg`) — the full-colour originals,
served directly by the site. **These are the only files to edit.**

Every `frame*-iso.jpg` and `frame*-spill.jpg` next to them is rebuilt from its
matching `frame*.jpg` automatically, so edits there would be overwritten. One
exception, flagged below.

---

## Billboard text, per page

| file | page | sign should read |
|---|---|---|
| frame1–4.jpg | Home (four-pose sequence) | **no change** — ANTHONY / MASSAGE WORKS |
| frame6.jpg | Approach | PAYING ATTENTION / TO YOU |
| frame8.jpg | Your Session | YOUR / SESSION |
| frame5.jpg | Anthony, Cole, Song Ying (individual pages) | **no change** — ANTHONY / MASSAGE WORKS |
| **new file** | Therapists roster | YOUR / THERAPISTS |
| frame9.jpg | Book | WE'RE READY / FOR YOU |
| your-body-hero.jpg | Your Body | YOUR / BODY |

Keep the italic third line, *Imagine feeling different.*, on all of them. It is
the one element that makes these read as six signs belonging to one practice.

### The Therapists roster needs its own file

`frame5.jpg` is currently shared by the roster **and** the three individual
therapist pages. The roster needs YOUR / THERAPISTS while the individual pages
keep the practice name, so they can no longer be one file.

Save the roster version as **`frame10.jpg`** — same scene, same pose, only the
words differ. I will point the roster at it.

---

## Two things that will bite if they are missed

**frame4-iso.jpg was cleaned by hand and cannot be rebuilt.**
That is the standing pose whose halo you removed in Photoshop. Every other
`-iso` file is generated from its source, but that one carries your hand work.
If you edit `frame4.jpg`, tell me — I will need your cleaned grey version again
rather than regenerating it, or the halo comes back.

Home keeps its text, so `frame4.jpg` should not need touching at all.

**`your-body-hero.jpg` is 1280 × 853, not 1672 × 941.**
That page is built differently from the rest: its own stylesheet, no light path,
and the billboard embedded directly in the HTML as base64. Keep it at 1280 × 853
if you can. If you export larger I will size it down before embedding, since
that image travels inside the page file rather than alongside it.

---

## Export settings

- keep **1672 × 941** for every frame (except the Your Body hero, above)
- JPEG, quality 90 or higher, or PNG if you would rather not recompress
- do not crop, rotate, or resize — the board geometry is measured per frame and
  the light path is aligned to it

---

## Board geometry

Pixel coordinates of the sign face in each 1672 × 941 image, in case it helps
with alignment. The text sits in the left portion, the figure in the right.

| frame | left | right | top | bottom | sign W × H |
|---|---|---|---|---|---|
| frame1 | 321 | 1283 | 313 | 634 | 962 × 321 |
| frame2 | 320 | 1286 | 315 | 636 | 966 × 321 |
| frame3 | 323 | 1286 | 318 | 648 | 963 × 330 |
| frame4 | 320 | 1288 | 314 | 638 | 968 × 324 |
| frame5 | 303 | 1294 | 300 | 679 | 991 × 379 |
| frame6 | 284 | 1331 | 300 | 697 | 1047 × 397 |
| frame8 | 274 | 1302 | 294 | 686 | 1028 × 392 |
| frame9 | 263 | 1319 | 280 | 688 | 1056 × 408 |

Note the newer frames carry a noticeably larger sign — frame9's is 1056 × 408
against frame1's 962 × 321. They were rendered independently. It causes no
problem on standalone pages, but it means type set at a fixed point size will
read smaller on frame9 than on frame1. Matching the sign's *proportions* rather
than absolute sizes will keep the pages consistent.

---

## Typeface

The site sets headings in **Cormorant Garamond** and body text in **Karla**,
both free from Google Fonts. The existing sign lettering is a classical serif in
the same family of shapes — Cormorant Garamond in a medium weight should sit
close to it. Worth setting one word beside the original to check before
committing to all five.

---

## The other folders

**`hero/frame*-iso.jpg` / `frame*-spill.jpg`** — the isolated and spill
versions the site actually loads. Grey world with colour only on the board
(`-iso`), and the same plus the warm pool on the ground (`-spill`). I rebuild
these from the matching `frame*.jpg`; no need to touch them.

**`hero/grain.png`** — a 128 × 128 soft-light overlay tiled across every page
via CSS. Small but easy to lose.

**`people/`** — the three portrait placeholders for the therapists page (4:5,
swap in real photographs at that ratio). Still reading "PORTRAIT TO COME" —
no page points at these yet.

**`effects/energy6.png`** — a standalone glow asset, currently unused.

**`variants/`** — alternate takes on frame4 (`frame4-alt-shorts.jpg`,
`frame4-touched-hold.jpg`) that were not selected. Kept in case the pose
choice is revisited; not wired into any page.

---

## Sending it back

Just the edited files from `hero/`, at the same dimensions. For each one I
will:

1. verify dimensions, board geometry and figure containment
2. capture its greyscale reference
3. rebuild its `-iso` and `-spill` assets
4. measure and set `data-board` for that page
5. check the light path lands on the board at desktop and mobile

Nothing structural changes — the pages already point at these filenames, with
`frame10.jpg` the only new one to wire up.
