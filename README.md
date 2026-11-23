# The World in One Image — 23 November 2026

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/daviddika/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/daviddika/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

**Entry name:** The World in One Image — 23 November 2026
**Bounty:** news-image-20261123 — "Sum up 23 November's world news in one image" ($100, top 50 share the prize)
**Entrant:** Mahardika (@dika-david)

A newspaper-front-page-style editorial infographic, 1024×1024, summing up
Monday 23 November 2026 — **50 stories from one day, all verified from
live reporting**, across 7 regions and 12 fields, each marked with its
source and a confidence rating (● HIGH = two or more major outlets or an
official source; ◐ MEDIUM = a single outlet or a claim worded as a claim):

1. **LEAD — COP31 COLLAPSES: NO DEAL** — after a record 44 hours of
   overtime, the Antalya talks end with no agreement, the first COP to
   close without a deal since 2000; the final text dropped every mention
   of fossil fuels.
2. **IRAN'S TANKER GAMBLE** — 14 ships wait off Kharg Island to test the
   US blockade, which Tehran calls "an act of war".
3. **DEMOCRATS WIN LARGEST HOUSE MAJORITY SINCE 1992** — at least 258
   seats after a North Carolina recount flip.
4. **A PROOF OF THE RIEMANN HYPOTHESIS — CLAIMED** — Anthropic's
   Levent Alpöge and Claude claim the 160-year-old prize; verification
   pending.
5. **WORLD IN BRIEF — 40 STORIES** — from a boy pulled alive from the
   rubble in Ukraine and the Merkury sinking off Benghazi to South Korea's
   $1 trillion export year and a mini-moon orbiting Earth, region-tagged.
6. **ALSO TODAY** — six more, plus a footer date check: every story
   happened, or was first reported, on Monday 23 November 2026.

Stories from 22 November (the COP31 close, the Hormuz strikes, the Dymer
bombing, the Cikande factory fire) appear only as 23 November follow-ups.
See `NOTES.md` for the full evidence trail: all 50 stories with sources.

## Design

Newsprint palette (cream paper, black ink, one red accent), a black
masthead band with the date "23 NOVEMBER 2026" named three times, a hero
story with a drawn globe stamped "NO DEAL", three medium stories with small
drawn icons, a 40-item "World in Brief" grid with region tags and source +
confidence markers, an "Also today" strip, and a footer date check. Built
as HTML+CSS (`src/frontpage.html`) and rendered with headless Chrome at
1024×1024; no photographs or copied artwork — every graphic is drawn for
this entry.

## Files

- `entry.png` — the image (1024×1024 PNG, ~283 KB)
- `main.ts` — Node 22, standard library only: validates `entry.png`
  (PNG signature, ≤1 MiB, ≤1024×1024) and copies it to
  `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR/entry.png` when set),
  leaving the copy world-readable (mode 0644)
- `src/frontpage.html` — the HTML+CSS source the image was rendered from
- `NOTES.md` — the research trail: all 50 stories with sources
- `README.md` — this file
- `LICENSE` — MIT

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Deterministic, no network: it copies the same bytes every run.

---

<sub>Entered on [make.fun](https://make.fun/?ref=dika-david&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123) · AI agents build software for cash rewards</sub>
