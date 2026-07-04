# LibertAI Website Redesign Plan

**Direction:** black-and-white monochrome system, Liberty Purple used sparingly · **Source brief:** LibertAI Website Improvement Brief (UX/UI redesign guide) · **Status:** proposal for review · July 2026

---

## 1. What the brief asks for

The site must move visitors from understanding to action fast. It should communicate, in order:

1. Access to leading AI models through one simple API (GLM-5.2 as the flagship).
2. Lower cost and strong performance vs. major providers.
3. **No data collection, no training on customer data** — private inference.
4. Simple migration from an existing provider (change the endpoint, keep everything else).
5. Startup credits up to $10,000 for selected companies.

Primary conversions: **Try GLM-5.2**, **Get an API key**, **Apply for startup credits**, **Talk to the team**.

This is a repositioning as much as a redesign: today the site leads with the decentralized/crypto story (Tokenomics, $LTAI, Aleph ecosystem); the brief leads with a developer-infrastructure story (models, price, privacy, migration). The visual system below is built for that story.

## 2. Where the current site stands (audit)

| Aspect | Today | Assessment |
|---|---|---|
| Background | `#0E0F18` (dark navy) + full-screen hero videos + nebula art | Dark DNA is right; the video/nebula layer fights legibility and reads "crypto project," not "infrastructure" |
| Body text | `#B5B6BA` on navy | Too dim at small sizes — the readability complaint is real |
| Accents | `#EA7AF4` orchid scattered across 56 call sites, plus `#644DF9` in logo/product | Two competing accents; no budget or hierarchy |
| Type | Satoshi (Medium only) headings, Input Sans body | Satoshi is good brand equity; Input Sans is weak at small sizes and only ships one weight |
| Signature details | Bracketed eyebrows `[ Privacy is Freedom ]`, glass pill buttons | The bracket motif is genuinely distinctive — keep it |
| IA | Private AI · API · Search · Tokenomics · Blog · Roadmap | Developer paths (models, pricing, docs) are buried; no credits program surface |

**Brand facts recovered from source** (authoritative, from LibertAI's own repos):
- `#644DF9` is **"Liberty Purple"** — defined as `--primary` in `libertai-web-shared/styles/theme.css` ("single source of truth for colors"), and `--vp-c-brand-1` in the docs theme.
- Logo mark gradient: `#644DF9 → #FCCBFF` (see `public/favicon.svg`).
- Taglines in use: *"Private AI, Unleashed"*, *"Privacy is Freedom"*, *"Break free, join the liberation."*

## 3. Design direction — "Monochrome + one purple"

A stark black-and-white system in the lineage of the strongest AI infrastructure sites (x.ai, Linear, Vercel, Together), with **Liberty Purple `#644DF9` as the only color**, spent deliberately. Principles:

1. **Black ground, white ink.** Near-black canvas; pure `#000` permitted in hero/terminal zones. All hierarchy from lightness steps and hairlines — zero drop shadows, zero glassmorphism.
2. **Brightness raised for readability** (carries over the earlier session's finding): body copy moves from `#B5B6BA` to `#C9C9D2` (≈12.8:1 on `#050505`), and nothing that must be read sits below ≈8:1. Details in §5.
3. **A strict purple budget: ~3 purple moments per screen.** Primary CTA *or* status dot *or* one highlighted token/link — never large fills, never decorative washes. In charts, LibertAI's bar is **white**; competitors are grey; purple stays out of data.
4. **Two-voice typography.** A sans carries the message; an uppercase tracked monospace carries the technical meta (eyebrows, labels, table headers, stats). The existing `[ bracket ]` eyebrow motif is retained, now set in mono — it already looks like a terminal annotation.
5. **Code is the hero image.** No stock art, no 3D blobs, no background videos. The OpenAI-compatible `base_url` swap *is* the visual proof (migration story §5 of the brief).
6. **Model pricing as a first-class design object.** Cards and tables designed as carefully as the hero (brief §4, §7).
7. **Motion only where it demonstrates the product** (streaming tokens, counters); respect `prefers-reduced-motion`. Kill autoplay videos — they cost LCP and credibility.

## 4. Design tokens

### Color

| Token | Value | Use | Contrast on `#050505` |
|---|---|---|---|
| `--bg` | `#050505` | page ground | — |
| `--bg-hero` | `#000000` | hero / terminal bands | — |
| `--surface-1` | `#0B0B0E` | cards, code windows | — |
| `--surface-2` | `#101014` | raised rows, inputs | — |
| `--line` | `rgba(255,255,255,.10)` | hairlines everywhere | — |
| `--line-strong` | `rgba(255,255,255,.16)` | interactive borders | — |
| `--ink` | `#F5F5F7` | headlines, key numbers | 18.9:1 |
| `--body` | `#C9C9D2` | body copy | 12.8:1 (AAA) |
| `--dim` | `#A3A3AE` | secondary/meta text | 8.4:1 (AAA) |
| `--faint` | `#6E6E78` | disabled, decorative only — never body copy | 4.0:1 |
| `--purple` | `#644DF9` | Liberty Purple — solid fills only (primary CTA, status dot) | 3.9:1 (UI ≥3:1 ✓; not for small text) |
| `--purple-bright` | `#9D8FFF` | purple *as text*: links, tags, one code token | 7.8:1 (AAA) |
| `--gradient` | `#644DF9 → #FCCBFF` | logo mark only | — |

Notes:
- White text on a `#644DF9` button = 5.3:1 (AA ✓).
- `--purple-bright` **is** the "increase the brightness value" recommendation applied to the accent: raw Liberty Purple fails as text on black (3.9:1), the brightened companion passes AAA. Same hue family, two jobs.
- Neutrals are biased slightly violet (`#C9C9D2`, `#A3A3AE`) so the grayscale feels chosen and harmonizes with the accent.
- Retire `#EA7AF4` orchid on the marketing site; it survives only inside the logo gradient's pink terminal. One purple, one story.

### Brightness migration (readability fix)

| Role | Old | New | Result |
|---|---|---|---|
| Body copy | `#B5B6BA` (~9:1 on navy) | `#C9C9D2` (12.8:1 on black) | +42% relative luminance |
| Secondary text | `#B5B6BA` shared | `#A3A3AE` dedicated tier (8.4:1) | still AAA, now distinct from body |
| Headlines | `#FFFFFF` | `#F5F5F7` | unchanged effectively |
| Smallest readable size | — | 12.5px mono / 13px sans, never in `--faint` | enforced floor |

### Type scale (desktop → mobile via clamp)

| Role | Size | Weight | Tracking |
|---|---|---|---|
| Display / h1 | clamp(34–54px) | 500–600 | −0.03 to −0.045em |
| h2 | clamp(28–40px) | 500–600 | −0.02em |
| h3 / card titles | 20–22px | 500 | −0.01em |
| Body | 16–17px / 1.6 | 400 | 0 |
| Meta / eyebrows / labels | 10–12px mono | 400–500 | +0.10 to +0.14em, uppercase |
| Code | 12.5–13.5px mono / 1.7 | 400 | 0 |

### Buttons

| Variant | Style | Budget |
|---|---|---|
| Primary | solid `--ink` (white), black label | the default conversion button |
| Accent primary | solid `--purple`, white label | at most one per page, for THE action (e.g. Try GLM-5.2) |
| Secondary | transparent, `--line-strong` hairline border | unlimited |
| Link | `--body` → hover `--ink` or `--purple-bright` underline | unlimited |

Radius: 8px marketing / 11px cards (or 0px if the Machine Room direction is chosen — pick one silhouette and keep it).

## 5. Typography — recommendation and alternatives

Four directions were built as working demos (see §9). Recommendation:

**Ship: Satoshi (display) + Inter (body) + JetBrains Mono (meta/code)** — demo V4's stack.
- Satoshi keeps brand continuity with today's site and the chat/console apps (their shared theme is Satoshi-only) — zero re-branding risk, already licensed and self-hosted.
- Inter replaces Input Sans for body: dramatically better small-size rendering, full weight range, variable font, free.
- JetBrains Mono is the new technical voice: eyebrows `[ LIKE THIS ]`, table headers, stats, code.
- Action item: today only `Satoshi-Medium.woff2` is bundled; add Bold (and ideally Variable) from Fontshare.

**Alternative (clean break):** Inter/Geist for everything + mono (demo V1) — the full x.ai/Vercel industry voice. Choose this if the team wants to look like category-standard AI infrastructure at the cost of some brand distinctiveness.

**Reserve:** Instrument Serif (demo V3) for brand/manifesto moments (e.g. `/private-ai`, About) — not for the whole product site. Space Grotesk (demo V2) if the brand should feel more "machine room" than "clean lab."

## 6. Page-by-page blueprint

### Homepage (order per brief §Recommended)

1. **Hero** — headline: *"Power your applications with leading AI models — without compromising your data."* Sub: GLM-5.2 + other leading open models, one simple API, competitive pricing, no training on your data. CTAs: `Try GLM-5.2` + `Talk to our team`. Trust row: No data collection · No training on your data · Private inference, attested in hardware. Startup-credits pill above the headline. Right side: code window with the two-line migration proof. Below: mono metrics strip (throughput · $/1M in/out · 0 bytes logged · TEE-attested).
2. **Privacy benefits** — three-up: no collection / no training / verifiable TEE. Keep copy factual; link to attestation docs. Eyebrow: `[ Privacy is freedom ]`.
3. **Startup credits** — headline *"Get up to $10,000 in LibertAI credits"*; short form: company name + work email, company size, what you're building, current provider, est. monthly AI spend. CTA `Apply for Startup Credits`. Copy must say credits are reviewed/approved, not automatic (brief §2).
4. **Supported models** — cards: name + best use case, input/output price per 1M, context size, speed estimate, `Try model` + `API docs`. GLM-5.2 card first with a `FLAGSHIP` tag (purple-bright text). Data comes live from the existing Aleph aggregate (`LTAI_PRICING`) — do not hardcode.
5. **Performance & cost comparison** — horizontal bars: white bar = LibertAI, grey bars = OpenAI/Anthropic flagship; tabs for price ($/1M out), speed (tok/s), latency (TTFT). Cite an independent source (e.g. Artificial Analysis) and date every figure.
6. **Migration in four steps** — 1. Create account 2. Generate API key 3. Select model 4. Swap the endpoint. Rendered as a numbered rail next to a before/after code diff (one changed line highlighted in purple-bright). CTA `View Migration Guide`.
7. **API & pricing preview** — chat/agents/inference workloads, model+price table extract, links: `Get an API Key` · `View Documentation` · `View Full Pricing`.
8. **Final CTA band** — pure black, one line, `Try GLM-5.2` (the page's single purple button) + `Talk to Our Team`.

### Navigation (IA change)

`Models · Pricing · Docs · Solutions (use cases + LiberClaw) · Company (About/Blog/Roadmap/Tokenomics)` + persistent `Get API key` (solid white) and `Chat` (ghost). Tokenomics moves out of the top level: it stays one click away under Company, but the first-impression nav is a developer-infrastructure nav. Keep all existing SEO landing routes; restyle with the new tokens.

### Pricing page (brief §7)

Keep structure; per plan/model show: model name, input & output price, context size, estimated speed, main use case, and estimated usage per credit package. Add a "what a credit buys" estimator once figures are confirmed internally.

### Chat page (brief §8 — separate repo, shared theme)

- Model dropdown inside the chat: name, one-line description, speed level (●●○), cost level ($, $$), context size; switching keeps the conversation.
- Slim banner: *"Building an AI product? Apply for up to $10,000 in LibertAI credits."* — dismissible, `--surface-1` with hairline, purple-bright link (not a purple fill).
- Ship the same tokens through `libertai-web-shared/styles/theme.css` (`--primary: #644DF9` is already right; add the text-tier tokens there).

## 7. Component inventory to build/refactor

| Component | Notes | Reuses |
|---|---|---|
| Code window | header dots + filename tab + copy button; greyscale syntax, one purple token max | new |
| Model card | price rows, context, speed, tag; polarity-flip variant for featured | `ModelsSection`, `APIModelsAndPricing` |
| Comparison bars/table | white-vs-grey bars, mono labels, source footnote | new |
| Metrics strip | mono label + big value cells with hairline dividers | new |
| Credits form | 5 fields + consent line; server endpoint TBD | new |
| Eyebrow | `[ LABEL ]` mono uppercase component | replaces per-section ad-hoc styles |
| Buttons | 4 variants per §4; retire `glass` variant | `ui/button.tsx` |
| Banner/pill | announcement chip w/ purple-bright keyword | new |

## 8. Implementation roadmap (this repo)

- **Phase 0 — tokens & fonts (½ day):** rewrite `:root` in `src/styles.css` with §4 tokens; add Inter + JetBrains Mono woff2 to `src/assets/fonts/`; map `--font-sans: Inter`, keep `--font-satoshi`, add `--font-mono`; drop Input Sans.
- **Phase 1 — homepage core (2–3 days):** new `HeroSection` (headline/CTAs/trust/code window/metrics), `PrivacySection`, `ModelsSection` restyle with live pricing, final CTA. Remove hero videos; delete `ltai-bg-*` nebula utilities.
- **Phase 2 — conversion surfaces (2–3 days):** credits section + form, comparison section, migration section, API preview; nav + footer IA.
- **Phase 3 — pricing page & long tail (2 days):** pricing clarity per §6, SEO landing pages re-token, 404, use-case pages.
- **Phase 4 — cross-app (coordinate):** push text-tier tokens into `libertai-web-shared`; chat model-picker + credits banner in the chat repo.
- Keep: TanStack Router structure, prerender script, `llms.txt` / api-catalog, analytics. GSAP/Lenis stay but animations become opt-in and functional only.

## 9. The four hero demos

Interactive file: **`docs/redesign/demos/hero-concepts.html`** (self-contained, fonts embedded — open locally or via the shared artifact). Switch with the floating pill or keys `1–4`, `←/→`; `About` explains each concept; append `?clean` to hide the switcher for screenshots. Screenshots in `docs/redesign/screenshots/`.

| # | Concept | Fonts | Lineage | Purple budget | Character |
|---|---|---|---|---|---|
| 1 | **Signal** | Inter + JetBrains Mono | OpenAI / Vercel | credits-pill dot, `glm-5.2` code token, link hovers | Clean industry-standard infrastructure; code window as proof |
| 2 | **Machine Room** | Space Grotesk + JetBrains Mono | x.ai / Groq | primary CTA fill, live dot, blinking cursor | Stark terminal energy; benchmark bars; loudest personality |
| 3 | **Manifesto** | Instrument Serif + Inter | Anthropic (on black) | one asterisk, link hover | Editorial, human; trust claims as a literal footnote |
| 4 | **Continuity** | Satoshi + Inter | Current brand, matured | announcement chip, soft glow, credits link, FLAGSHIP tag | Production-ready evolution; model-card stack sells pricing clarity |

**Recommended composition:** ship **V4 (Continuity)** as the homepage base — lowest risk, keeps brand equity — and merge in **V1's code window + metrics strip** as the hero's right column and footer. Use **V2's benchmark bars** for the comparison section and **V3's treatment** for `/private-ai` and manifesto moments. All figures in the demos (prices, tok/s, context, savings) are **illustrative placeholders**.

### Round 2 — design-led concepts (dark grey + white twins)

A second exploration deliberately steps away from the AI-infrastructure vernacular toward award-site art direction: dark **grey** tonal grounds (not pure black), physical textures (paper grain, film grain, material surfaces), and a fully designed **white version of every concept** — 8 examples total.

Interactive file: **`docs/redesign/demos/hero-concepts-2.html`** — keys `1–4` switch concepts, `M` (or the ☀/☾ button) flips dark/white per concept, `?clean` hides the chrome.

| # | Concept | Fonts | Art direction | Ground (dark / light) | Purple budget |
|---|---|---|---|---|---|
| A | **Gallery** | Fraunces + Manrope + Fragment Mono | Museum catalog plate: models as a private collection; rotating attestation seal ("verified, not promised"); numbered trust captions; hairline mat frame; paper grain | `#191817` / `#F6F3ED` warm | seal + two links |
| B | **Studio** | Syne + Manrope + Fragment Mono | Kinetic poster: edge-to-edge fitted display type (JS fit-to-width), corner metadata, drifting tonal blob, film grain, model-ticker marquee | `#1C1C1E` / `#F1F1EF` cool | the slash, one marquee item, credits link |
| C | **Proof** | Bricolage Grotesque + Fraunces italic + Manrope | Annotated proof sheet: italic margin notes with dotted leaders, hand-drawn circle on "your data," highlighter stroke, rubber-stamp credits mark, `fig. 1` migration footnote | `#1B1A19` / `#FBF9F4` paper | circle + highlight + stamp |
| D | **Strata** | Sora + Fragment Mono | Material study: the four products (Chat/API/Agents/Search) as textured layers that expand on hover, with one purple seam running the full height — "privacy runs through every layer" | `#202022` / `#EFEFEC` gallery | the seam + label + credits link |

Light modes are designed, not inverted: text tiers re-derived for contrast (ink ≈13:1, body ≈8.5:1), grain flips to `multiply`, and the accent switches from the brightened `#9D8FFF` to a darkened `#5334E6` (≈6:1 on the light grounds) — the same two-job accent logic as the dark system, mirrored. Round-2 screenshots live in `docs/redesign/screenshots/` (`r2-*`).

### Round 3 — Concept 09 "Transmission" (Marathon-inspired HUD, dark only)

A translation of Bungie's *Marathon* "graphic realism" into LibertAI's world: private inference as a secure transmission. File: **`docs/redesign/demos/hero-concepts-3.html`**; screenshots `r3-*`.

- **Type:** Anton (ultra-condensed display — solid line + outlined line, purple square full-stops), Archivo (UI), Fragment Mono (HUD data).
- **Motifs:** top/bottom HUD bars with live status (`SYS.STATUS: ENCRYPTED — 0 BYTES LOGGED`), vertical protocol rails, registration crosses, a spec **readout panel** for GLM-5.2 with segmented bars (privacy row fully lit in purple, scan-sweep animation), CSS barcode + ID plate, ghost outlined "5.2" numeral, hazard stripe, model ticker, glitch-slice hover on the headline (reduced-motion safe).
- **Copy voice:** "ALL SIGNAL. / ZERO TRACE." — the trust claims as system status rather than marketing; credits reframed as a "supply drop."
- **Accent use:** deliberately more signal-active than rounds 1–2 (Marathon grammar) while surfaces stay monochrome: CTA fill, status dots, privacy bar, ghost stroke in purple; the logo-gradient pink reserved for the credits line and one ticker item.

## 10. Open items to confirm internally (from the brief + this work)

1. Final startup-credit amount, conditions, and review process; where applications go (endpoint/CRM).
2. GLM-5.2 availability and launch date on LibertAI (not yet announced publicly; current flagship copy references GLM-4.7).
3. Accurate pricing, benchmark, speed, and credit-usage figures — including the comparison chart's source and refresh cadence ("Ask Moshe" per the brief).
4. Final privacy/data-retention wording (legal review of "no data collection / no training" claims + TEE attestation scope).
5. Typography decision: §5 recommendation (Satoshi+Inter+JetBrains Mono) vs. clean-break Inter; Satoshi additional weights licensing (Fontshare, free).
6. Tokenomics demotion from primary nav — needs community/stakeholder sign-off.
