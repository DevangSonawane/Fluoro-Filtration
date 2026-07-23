# Fluoro Filtration — Website Build Spec
*A brief for Claude Code. Paste this whole document as the starting prompt, then iterate.*

---

## 0. Before you build — positioning rules (non-negotiable)

These rules exist because Fluoro Filtration does not yet have a signed dealership agreement with any manufacturer. The site must never say anything that isn't true yet.

1. **Never name a specific manufacturing partner** (no "HL Filter," no Chinese entity names, no city names of factories) anywhere on the public site. Refer generically to "our manufacturing partner network" or "our certified production partners."
2. **Never claim ISO/USP/FDA certifications on Fluoro Filtration's own behalf** unless Fluoro Filtration itself holds them. It's fine to say "sourced from ISO 9001–certified manufacturing partners" once that's actually confirmed in writing — until then, don't state it as fact.
3. **Never imply Fluoro Filtration manufactures the filters.** Position as a filtration solutions / sourcing & distribution partner. This is more credible anyway — buyers trust honest positioning over inflated claims.
4. **All product copy must be written fresh**, not paraphrased closely from any supplier's catalog. Use the technical specs (micron ratings, materials, dimensions) as raw facts — those aren't copyrightable — but write every sentence of description from scratch.
5. Use your own product naming (see Section 4). Don't reuse a supplier's model codes.

---

## 1. Brand identity

**Name:** Fluoro Filtration
**Positioning line:** *Filtration sourcing and technical support for pharmaceutical and chemical manufacturers in India.*

**Tone:** Precise, plain-spoken, quietly confident. No hype words ("world-class," "cutting-edge," "revolutionary"). Filtration buyers are engineers and QA people — they trust specificity, not adjectives.

### Color palette

Avoid the generic "industrial navy + white" look every competitor uses, and avoid AI-design clichés (no warm cream + terracotta, no near-black + neon, no broadsheet-newspaper grid). Instead, ground the palette in the actual subject: clarity, filtered liquid, precision.

| Token | Hex | Role |
|---|---|---|
| `ink` | `#10201C` | Primary text, headers — deep teal-black, not navy |
| `paper` | `#F7F8F6` | Background — cool soft white, not cream |
| `clarity` | `#1F7A78` | Primary accent — teal, evokes clean filtered liquid |
| `flow` | `#E8A33D` | Secondary accent — warm amber, used sparingly for CTAs only |
| `slate` | `#4B5C58` | Secondary text, captions |
| `hairline` | `#DCE3E0` | Borders, dividers, grid lines |

### Typography

| Role | Face | Why |
|---|---|---|
| Display (headings) | **Space Grotesk** | Technical character, slightly unusual proportions — reads as engineered, not generic corporate |
| Body | **Inter** | Clean, highly legible at small sizes for spec-heavy content |
| Data / specs | **IBM Plex Mono** | Used only for micron ratings, dimensions, numeric specs — makes data feel like data |

### Signature element — the pleat motif

Every pleated filter cartridge has a physical chevron/zigzag pleat structure. Use an abstracted version of this as the site's one recurring graphic signature:
- On page load: a thin animated line draws itself into a pleat/zigzag pattern behind the hero headline (0.6s, ease-out, plays once).
- As a section divider between page sections (static SVG, thin stroke, low opacity).
- As the favicon and loading-state spinner (a folding pleat animation).

This is the *one* place to spend animation budget. Everything else on the site should be quiet: simple fades on scroll, no parallax, no gimmicks. (Per 2026 B2B design research: buyers respond to purposeful simplicity, not decorative motion — animation should clarify, not decorate.)

### Logo concept

Wordmark: `FLUORO` in Space Grotesk Bold, tight letter-spacing, all caps, in `ink`. Directly below or beside it, `FILTRATION` in Inter Medium, wider letter-spacing, smaller size, in `slate` — this creates a two-tier lockup common to serious technical brands (similar hierarchy to how "3M" or "Pall" style marks separate a bold mark from a descriptor).
Icon (optional, for favicon/social only): a minimal 3-fold chevron/pleat glyph in `clarity`, sitting to the left of the wordmark.

---

## 2. Site structure (multi-page)

```
/                    → Home
/products            → Products (category grid → detail views)
/products/[slug]     → Individual product family detail page
/about                → About Fluoro Filtration
/contact              → Contact / Get a Quote
```

Navigation bar: `Home · Products · About · Contact` + a persistent "Request a Quote" button in `flow` amber, top-right, on every page.

---

## 3. Page-by-page content

### 3.1 Home

**Hero section**
- Headline: **"Filtration that holds up to inspection."**
- Subhead: "We source and support pleated cartridge filters, filter bags, and membrane media for pharmaceutical and chemical manufacturers across India — with the technical documentation to back every batch."
- Primary CTA: "Find the right filter" → scrolls to / links to the Filtration Finder tool
- Secondary CTA: "Request a Quote" → /contact
- Pleat animation plays once behind headline on load.

**Filtration Finder (the signature interactive tool — build this properly, it's the differentiator)**

A 3-step guided selector, not a static table:

```
Step 1: What are you filtering?
  [ Pharmaceutical process liquid ]  [ Chemical / solvent ]  [ Process water ]

Step 2: What micron range do you need? (show a simple slider or button group)
  0.1–0.45 µm (fine/sterile-grade)   1–10 µm (standard)   10+ µm (coarse pre-filter)

Step 3: Any special conditions?
  [ ] High temperature (>60°C)
  [ ] Aggressive solvent / strong acid-alkali
  [ ] Needs to be autoclavable

→ Result: shows 1-3 matching product families from /products with a one-line reason
  ("PTFE pleated — hydrophobic, autoclavable to 121°C, handles your solvent + sterilization need")
```

Implementation note: this can be pure client-side logic (a small decision table mapping combinations to product slugs) — no backend needed for v1.

**Why Fluoro Filtration section**
Three columns, each one sentence + short supporting line. Write honestly — don't claim scale you don't have yet:
1. **Technical fit, not just a catalog.** "We help you match the right media and micron rating to your actual process conditions, not just sell off a spec sheet."
2. **Documentation you can hand to QA.** "Certificates of Analysis and material compliance data are provided with every batch."
3. **A partner who answers the phone.** "Direct technical support from someone who understands pharmaceutical and chemical filtration requirements — not a call center."

**Industries served** — visual grid, 3-4 tiles: Pharmaceutical Manufacturing / Chemical Processing / Process Water Treatment. (Leave out claims like "Food & Beverage" or "Semiconductor" unless you're actually pursuing those — better to look focused than to look padded.)

**CTA band (bottom of page)**
"Have a spec sheet already? Send it over and we'll confirm compatibility and pricing within 48 hours." → /contact

---

### 3.2 Products

Organize by **application category first, product type second** — this is the exact gap competitors have (they organize by product type only, forcing the buyer to already know what they need).

Category tiles:
- **Pharmaceutical Process Filtration** (pleated PP, PES, PTFE, Nylon 6 media)
- **Chemical & Solvent Filtration** (PP pleated, PTFE for aggressive media)
- **High-Flow Industrial Filtration** (high-flow cartridges for larger volume processes)

Each tile → filtered product grid → click into a detail page.

**Product detail page template** (use for each product family):

```
[Product family name — your own naming, see Section 4]
One-paragraph description (written fresh, plain language, what it's for and why)

Spec table (use IBM Plex Mono for the numbers):
  Media
  Micron ratings available
  Max operating temperature
  Max differential pressure
  Typical applications (as tags/pills, not paragraphs)

[Request pricing for this product] button → /contact, pre-filled with product name
```

Do **not** publish unit pricing on the site — pricing depends on your live supplier terms and you don't want stale numbers online. Every product page ends in a quote-request CTA instead.

---

### 3.3 About

Keep this short and honest. Don't invent a founding story or team bios that don't exist yet.

- **What we do**: 2-3 sentences on sourcing + technical support model (see positioning line above).
- **How we work**: brief explanation of the process — spec discussion → sample evaluation → trial order → ongoing supply. This doubles as light buyer education and sets expectations correctly (signals you're not a fly-by-night reseller).
- **Get in touch** CTA.

Do not include: fabricated years-in-business claims, fabricated client logos, or stock photos of "our team" if there is no team yet. An honest, sparse About page reads better to a technical buyer than a padded one.

---

### 3.4 Contact

- Simple form: Name, Company, Email, Phone, Industry (dropdown), Message, optional "attach a spec sheet" file upload.
- Direct contact details (phone/email/WhatsApp) displayed plainly, not buried.
- No live chat widget for v1 — it implies 24/7 staffing you don't have yet.

Form submission for v1: client-side form that opens a pre-filled `mailto:` link, or posts to a simple serverless function/email service (e.g., Formspree, Resend) if Claude Code sets up a backend route. Start with the simpler option and upgrade later.

---

## 4. Product naming (your own, not the supplier's)

Don't reuse any supplier's model codes. Suggested naming pattern — prefix + media type:

| Your name | Media | Maps to (internal reference only, never shown publicly) |
|---|---|---|
| FX-PP Series | Polypropylene pleated | (PP pleated cartridges) |
| FX-PES Series | Polyethersulfone membrane | (PES pleated cartridges) |
| FX-PT Series | PTFE membrane | (PTFE pleated cartridges) |
| FX-NY Series | Nylon 6 | (Nylon 6 pleated cartridges) |
| FX-PV Series | PVDF membrane | (PVDF pleated cartridges) |
| FX-HF Series | High-flow cartridges | (high-flow industrial cartridges) |

Use the technical specs (micron ratings, temperature/pressure limits) freely on the product pages — these are factual performance data, not copyrightable content. Just don't copy the supplier's descriptive sentences or model codes verbatim.

---

## 5. Technical build spec (for Claude Code)

**Stack**
- Next.js (App Router), TypeScript
- Tailwind CSS — configure the theme with the exact tokens from Section 1 (don't use Tailwind's default palette; extend `tailwind.config` with `ink`, `paper`, `clarity`, `flow`, `slate`, `hairline`)
- Framer Motion — for the pleat-draw animation and simple scroll-fade reveals only. No parallax, no scroll-jacking.
- `lucide-react` for utility icons (arrows, checkmarks, phone/mail icons)
- Fonts via `next/font`: Space Grotesk (display), Inter (body), IBM Plex Mono (data)

**Structure**
```
/app
  /page.tsx                 → Home
  /products/page.tsx        → Products index
  /products/[slug]/page.tsx → Product detail
  /about/page.tsx
  /contact/page.tsx
/components
  Nav.tsx
  Footer.tsx
  PleatMotif.tsx             → SVG + Framer Motion draw-in animation
  FiltrationFinder.tsx       → the 3-step selector, client component
  ProductCard.tsx
  SpecTable.tsx              → renders spec data in IBM Plex Mono
/lib
  products.ts                → typed data file with all product family data (name, media, specs, category)
  finder-logic.ts             → decision table mapping Finder answers → product slugs
```

**Data-driven products**: Put all product family content (name, description, specs, category, applications) in `/lib/products.ts` as a typed array, and generate product pages from it (`generateStaticParams`). This makes it trivial to add/edit products later without touching page templates.

**Non-negotiable quality bar**
- Fully responsive down to a 375px mobile viewport — most B2B research/first-contact now happens on mobile.
- Visible keyboard focus states on all interactive elements.
- Respect `prefers-reduced-motion` — disable the pleat animation and scroll-fades for users who request it.
- Lighthouse performance score priority: this is a lead-generation tool, slow load = lost credibility instantly.
- No stock photography of generic "people in hard hats." If no real product/facility photography exists yet, use clean abstract/geometric graphics (built from the pleat motif) instead of fake stock images — this matches the honest-positioning principle in Section 0.

---

## 6. What to paste into Claude Code

Paste this entire document as your first message, then add:

> "Build this as a Next.js + Tailwind + TypeScript site following the spec above. Start with the design tokens and layout shell (Nav, Footer, PleatMotif), then build the Home page including the Filtration Finder, then Products, then About and Contact. Show me the Home page first before continuing."

Building it in that order (tokens/shell → Home/Finder → Products → About/Contact) lets you course-correct on the visual direction early, before it's baked into every page.

---

## 7. Open items to fill in before launch

- [ ] Actual phone/email/WhatsApp contact details
- [ ] Domain name and hosting decision
- [ ] Whether the Filtration Finder's product recommendations are confirmed once you have real supplier lead times/pricing to back availability claims
- [ ] Real product photography, once available (until then, use the abstract pleat-based graphics, not stock photos)
- [ ] Legal/business registration name if different from "Fluoro Filtration" as a trade name — for the footer's fine print