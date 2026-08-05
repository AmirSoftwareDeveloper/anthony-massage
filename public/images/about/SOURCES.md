# About-page image provenance

Adobe Stock originals, renamed to the slot each fills on the About page.
Keep this mapping — the stock ID is the licence record.

| File in repo             | Adobe Stock original       | Used by                                  |
| ------------------------ | -------------------------- | ---------------------------------------- |
| `philosophy.jpeg`        | AdobeStock_138356044.jpeg  | Home → Philosophy section                |
| `intro.jpeg`             | AdobeStock_202181902.jpeg  | About → "Hi — I'm Anthony."              |
| `the-work.jpeg`          | AdobeStock_238971063.jpeg  | About → "A conversation with your body." |
| `the-work-detail.jpeg`   | AdobeStock_278688590.jpeg  | About → same chapter, accent image       |
| `restriction.jpeg`       | AdobeStock_298433235.jpeg  | About → "The pain is rarely the whole story." |
| `technique.jpeg`         | AdobeStock_355938431.jpeg  | About → "I can only meet it."            |
| `path.jpeg`              | AdobeStock_363885506.jpeg  | About → "I knew pain from the inside."   |
| `still-learning.jpeg`    | AdobeStock_478511576.jpeg  | About → "Every body is different."       |
| `beyond.jpeg`            | AdobeStock_556545760.jpeg  | About → "Beneath the surface."           |
| `the-work-detail-2.jpeg` | **none — generated placeholder** | About → same chapter, second accent |

`the-work-detail-2.jpeg` is not a photograph. The reference layout pairs two
square accents in that chapter and the folder held no tenth image, so it is a
generated "IMAGE TO COME" card in the site palette (1000×1000). Replace it with
a real square-ish photo; nothing else needs to change.

All nine are 1920×1280 (3:2), and every one is displayed **cropped** via
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
