# About-page image provenance

Adobe Stock originals, renamed to the slot each fills on the About page.
Keep this mapping — the stock ID is the licence record.

| File in repo             | Adobe Stock original                    | Used by                                       |
| ------------------------ | --------------------------------------- | --------------------------------------------- |
| `philosophy.jpeg`        | AdobeStock_138356044.jpeg               | Home → Philosophy section                     |
| `intro.jpeg`             | AdobeStock_202181902.jpeg               | About → "Hi — I'm Anthony."                   |
| `the-work.jpeg`          | AdobeStock_238971063.jpeg               | **unused** — replaced, see note below         |
| `the-work-accent.jpeg`   | AdobeStock_238971063.jpeg (square crop) | About → "A conversation…", 2nd accent         |
| `the-work-detail.jpeg`   | AdobeStock_278688590.jpeg               | About → same chapter, accent image            |
| `restriction.jpeg`       | AdobeStock_298433235.jpeg               | About → "The pain is rarely the whole story." |
| `technique.jpeg`         | AdobeStock_355938431.jpeg               | About → "I can only meet it."                 |
| `path.jpeg`              | AdobeStock_363885506.jpeg               | About → "I knew pain from the inside."        |
| `still-learning.jpeg`    | AdobeStock_478511576.jpeg               | About → "Every body is different."            |
| `beyond.jpeg`            | AdobeStock_556545760.jpeg               | About → "Beneath the surface."                |
| `the-work-detail-2.jpeg` | **none — generated placeholder**        | About → same chapter, second accent           |

## Unplaced photographs

Seven more Adobe Stock originals were added to this folder. Nothing renders them
yet, so they carry **descriptive** names rather than slot names — rename them to
the slot when one is assigned, the way the table above does.

| File in repo             | Adobe Stock original      | What it shows                                       |
| ------------------------ | ------------------------- | --------------------------------------------------- |
| `room-towels.jpeg`       | AdobeStock_112858740.jpeg | Folded towels on a dressed table, candles behind    |
| `room-stones.jpeg`       | AdobeStock_138747839.jpeg | Empty treatment room set with hot stones and a lily |
| `hot-stones.jpeg`        | AdobeStock_222108312.jpeg | Hot stones placed along a back, shot from overhead  |
| `head-massage.jpeg`      | AdobeStock_354949263.jpeg | Scalp and temple work, candlelit, client face up    |
| `lower-back.jpeg`        | AdobeStock_379840091.jpeg | Both hands working the lower back, bright and close |
| `candlelit-session.jpeg` | AdobeStock_640734239.jpeg | Candles in focus, a session in soft focus behind    |
| `abdominal-work.jpeg`    | AdobeStock_696337843.jpeg | Abdominal work against black, dramatic side light   |

`room-towels.jpeg` is 1920×1387; `candlelit-session.jpeg` and `room-stones.jpeg`
are the only two with room to breathe on the left, so they crop best into wide
frames. The rest are 1920×1280 like the originals above and follow the same
centre-crop caveats.

`the-work-detail-2.jpeg` is not a photograph — it is a generated "IMAGE TO COME"
card. It is **no longer referenced**: the "A conversation with your body."
chapter now uses `the-work-accent.jpeg` in that slot. The file was left in the
repo but nothing renders it.

## "A conversation with your body." — images swapped

`the-work.jpeg` (a clinical close-up of a bare back) was not wanted as the
chapter's feature image. It was replaced by `philosophy.jpeg`, the only licensed
photo in this folder not already placed on the About page — note that this means
the same photo now appears on Home → Philosophy **and** on this chapter.

`the-work-accent.jpeg` is a 1280×1280 centre crop of `the-work.jpeg`, made with
`sips`. Same Adobe Stock licence as its source; it exists only to fill the second
accent square without introducing a new stock purchase.

The photographs are 1920×1280 (3:2), and every one is displayed **cropped** via
`object-cover`. The reference layout builds tall frames — the About collage
stretches its feature image to match the chapter's copy height, and the
Philosophy figure is near-square — so a landscape source has to be cropped to
fill them. Matching the frames to the 3:2 sources instead was tried and
flattened the layout: short strips can't anchor a column, leaving each one
40–60% empty.

Because the crop is centred, a photo whose subject sits far off-centre will
lose it. If one crops badly, either re-crop the source file to roughly 4:5 or
give that image its own `object-position`.

**Note:** the photo→chapter pairing above was assigned without viewing the
images, so it is provisional. To re-pair, swap the file contents — every
reference in the code goes through these slot names.
