# Integrations Hub — Design System

A design system for **Integrations Hub**, an AI-powered integration & automation platform. Integrations Hub lets teams connect their apps, APIs, and data sources, then build automated workflows that move and transform information between them — with AI assisting at the seams (suggesting mappings, summarizing payloads, triaging failures). The brand mark is a **brain rendered as a circuit of connected nodes**: intelligence + connectivity.

This repository is the single source of truth for the brand's visual language: tokens, typography, color, components, and a product UI kit. Everything here is consumed by linking one stylesheet (`styles.css`) and the generated component bundle.

> **Sources provided for this system:** two logo files only — `uploads/IH logo.png` (white wordmark) and `uploads/IH logo1.png` (black wordmark + brain icon). No codebase, Figma file, or product copy was supplied. The product definition (AI integration/automation platform), surfaces (logged-in web dashboard), and the full visual language below were **derived from the brand name + mark and confirmed with the user**, not extracted from existing product source. Treat the foundations as authoritative; treat product-specific copy/screens as well-reasoned proposals open to correction.

---

## Content fundamentals

**Voice.** Confident, plainspoken, technical-but-human. We are a tool for builders, so we sound like a capable teammate, not a hype reel. Short declaratives. We explain *what happens* and *why it matters*, never marketing fog.

**Person.** Address the user as **you**; the product is **Integrations Hub** or **we** when describing what the platform does. Avoid "I".

**Casing.** Sentence case **everywhere** — buttons, menus, headings, table headers, dialog titles. Never Title Case UI. Product/connector names keep their own casing (Slack, HubSpot, PostgreSQL). Reserve ALL-CAPS for tiny eyebrow labels with wide tracking.

**Tone by surface.**
- *Headings / marketing:* punchy, benefit-led. "Connect everything." "Automations that just work."
- *UI labels:* terse, verb-first. "New integration", "Run now", "Add connector", "View logs".
- *Helper / empty states:* helpful and specific. "No runs yet — connect a source to see activity here."
- *Errors:* state what failed + the next action. "Sync failed. Check the connector credentials and retry." Never blame the user.

**Numbers & data.** Always in mono (Geist Mono). Use thousands separators (`1,204 events`). Relative time in UI ("4 min ago", "2 days ago"); absolute time on hover/detail.

**Emoji.** Not used in product UI or marketing. Status and meaning are carried by the icon set and color, never emoji.

**Examples of on-brand copy**
- Button: `New integration` · `Run now` · `Connect`
- Status: `Active · 1,204 events today` · `Rate limited` · `Sync failed`
- Empty state: `No connectors yet. Add your first to start moving data.`
- Toast: `Slack connected.` / `Workflow saved.`

---

## Visual foundations

**Overall vibe.** Modern, crisp SaaS. Lots of cool-white/near-black neutral space, one confident accent, hairline borders, soft shadows. Technical without being cold; the rounded-but-tight geometry of Geist keeps it approachable.

**Color.**
- **Primary — "Iris" (`--primary-600 #5b4df0`)**, an electric indigo. The single brand action color: primary buttons, active nav, focus, links, key data. Used decisively but sparingly — most of the UI is neutral.
- **Secondary — "Wire" cyan (`--cyan-500 #0ea5ba`)**. Reserved for connectivity/flow motifs, data viz, and the occasional second accent. Never competes with Iris for primary actions.
- **Neutrals — cool slate**, slightly blue-cool, 0→950. Carry text, surfaces, and borders.
- **Semantic** — green (success), amber (warning), red (danger), each with a `-subtle` tint for soft backgrounds (badges, alerts).
- **Gradients:** avoided. No purple→blue hero gradients. Flat fills only; the one permitted "glow" is `--shadow-accent` under a primary CTA, used rarely.
- **Imagery color vibe:** when product/app logos appear they keep native color; otherwise the palette is the hero. No photography in the core product.

**Typography.** **Geist** (UI + display) and **Geist Mono** (code, payloads, IDs, metrics, timestamps). Headings use tight tracking (−0.015 to −0.03em) and semibold→black weights. Body is 14px / 1.5. Medium (500) and semibold (600) do most UI work. *(Geist is loaded from Google Fonts — see Fonts note below.)*

**Spacing & layout.** 4px base grid (`--space-*`). Fixed app chrome: a 248px sidebar and a 56px top bar (`--sidebar-w`, `--topbar-h`). Content max ~1240px; readable prose ~720px. Generous padding inside cards (20–24px).

**Corners.** Soft but crisp: controls/inputs 8px (`--radius-md`), cards/panels 12px (`--radius-lg`), modals 16px, pills/avatars/toggles full. Nothing sharp-cornered; nothing overly pill-shaped except true pills.

**Borders.** Hairline (1px) is the default separator — `--border-subtle` between sections, `--border-default` on controls, `--border-strong` on hover. Borders + a faint shadow define cards, not heavy strokes. The "dashed border" treatment is reserved for *empty/add* affordances (ghost cards), never decorative accents.

**Elevation / shadows.** Subtle, cool-tinted, layered. `--shadow-sm` for resting cards, `--shadow-md` on hover, `--shadow-lg/xl` for popovers and modals. Dark theme uses deeper, flatter shadows. No hard drop shadows.

**Cards.** Surface fill + 1px subtle border + `--shadow-sm`, 12px radius. Optional bordered header (title/subtitle/actions) and a sunken-background footer for actions. Interactive cards lift 1px and deepen to `--shadow-md` on hover.

**Motion.** Quick and confident, never bouncy. 140ms for hovers/color, 200ms default, 320ms for panels/modals. Standard ease `cubic-bezier(0.2,0,0,1)`; a gentle `--ease-out` for entrances only. The one signature animation is the **StatusDot ping** — a soft expanding ring on live/active states. All motion collapses under `prefers-reduced-motion`.

**Hover / press states.**
- *Hover:* neutral surfaces go one step darker (`--bg-hover`); primary buttons darken (`--accent-hover`); borders strengthen.
- *Press:* a 0.5px downward nudge (`translateY`) + one more shade darker (`--bg-active` / `--accent-active`). No scale-down.
- *Focus:* a 3px Iris ring (`--ring`) via box-shadow, plus border color shift. Always visible on keyboard focus.

**Transparency & blur.** Used lightly: tooltips and the inverse pill use solid inverse surfaces (no blur by default). Subtle `color-mix` tints generate semantic `-subtle` backgrounds and dark-mode accents. Heavy glassmorphism is *not* part of the language.

---

## Iconography

- **Library: [Lucide](https://lucide.dev)** — clean, consistent 2px-stroke line icons. This was chosen to **match the logo**, which is itself a 2px-stroke line glyph (the brain). *(No icon set was provided in the source; Lucide is a documented substitution — flagged for the user.)*
- **Style rules:** stroke (never filled) at 1.75–2px; size 16px alongside `base`/`sm` text and inside `md` controls, 18px in `lg` controls and toolbars, 14px in dense breadcrumbs/meta. Icons inherit `currentColor`, so they pick up text/semantic color automatically.
- **Usage in this repo:** component cards and UI kits load Lucide from CDN (`https://unpkg.com/lucide@0.469.0`) and render `<i data-lucide="name">` + `lucide.createIcons()`. In production, prefer the `lucide-react` package.
- **No hand-drawn SVG icons, no emoji, no unicode dingbats** as iconography. The only bespoke SVGs in components are tiny functional marks (chevrons, checkmarks) baked into form controls.
- **Brand assets** live in `assets/`: `logo-black.png`, `logo-white.png` (full wordmarks) and `icon-black.png`, `icon-white.png` (the brain glyph alone, cropped from the wordmark for favicons/avatars/compact headers).

---

## Fonts note (action may be needed)

No font files were supplied. **Geist + Geist Mono** were selected as the closest high-quality match to the geometric/grotesque bold wordmark and are loaded from **Google Fonts** via `tokens/fonts.css`. Because that is a remote `@import`, the build does not bundle the binaries (consumers get them at runtime over the network). **If you have the brand's actual UI font, drop the `.woff2` files into `assets/fonts/` and replace the `@import` with local `@font-face` rules** so the system ships self-contained fonts.

---

## Index / manifest

**Root**
- `styles.css` — the one entry point consumers link. `@import`s every token + font file.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front matter for use in Claude Code.

**`tokens/`** — `fonts.css`, `colors.css` (ramps + light/dark semantic aliases), `typography.css`, `spacing.css`, `radius.css`, `shadow.css`, `motion.css`.

**`assets/`** — `logo-black.png`, `logo-white.png`, `icon-black.png`, `icon-white.png`.

**`components/`** — reusable React primitives (`Name.jsx` + `Name.d.ts` + `Name.prompt.md`, one `*.card.html` per group):
- `actions/` — **Button**, **IconButton**
- `forms/` — **Input**, **Textarea**, **Select**, **Checkbox**, **Radio** / **RadioGroup**, **Switch**
- `data-display/` — **Card**, **Badge**, **Avatar** / **AvatarGroup**, **StatusDot**
- `feedback/` — **Alert**, **Spinner**, **ProgressBar**, **Tooltip**
- `navigation/` — **Tabs**, **Breadcrumbs**

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

**`ui_kits/dashboard/`** — high-fidelity recreation of the logged-in product (see its own `README.md`).

**`slides/`** — branded sample slide layouts.

**Component namespace:** `window.IntegrationsHubDesignSystem_c1b980` (use in `@dsCard` HTML: `const { Button } = window.IntegrationsHubDesignSystem_c1b980`). The bundle, manifest, and adherence config are generated automatically — do not edit them.
