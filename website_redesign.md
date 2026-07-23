I'm redesigning fluorofiltration.com, an industrial filtration products 
distributor site. Keep the header/nav exactly as is — everything else 
needs rework. This is a B2B industrial site; buyers are engineers and 
procurement people who want fast, credible, visual answers.

CONTENT FIXES (do these first, they're bugs not opinions):
1. Remove the duplicated boilerplate line "One source for filter media, 
   bags, cartridges, housings, and complete filtration systems" from 
   every page body — it currently repeats near-verbatim on Home, About, 
   Products, Technical Data, and Contact. Keep it ONLY in the footer.
2. Replace the placeholder contact info (info@fluorofiltration.in, 
   +91 00000 00000) with [REAL EMAIL] and [REAL PHONE] — flag these as 
   TODOs if I haven't given you real values yet.
3. Deduplicate near-identical sentences repeated across About/Home/Contact 
   (e.g. "help you choose the right micron rating, media, and housing" 
   appears 3+ times) — vary the phrasing per page or cut repeats entirely.

VISUAL HIERARCHY:
4. Introduce a clear type scale: hero headline should be dramatically 
   larger/bolder than section headers, which should be clearly larger 
   than card titles, which should be clearly larger than body text. 
   Right now everything reads at similar visual weight.
5. Add generous whitespace between sections (increase vertical padding 
   between Hero / Finder / Why Choose Us / Applications / Contact — 
   these currently run together without enough breathing room).
6. Give each of the 9 product category cards (Filter Media, Liquid 
   Filter Bags, Filter Cartridges, High Flow Cartridges, Pleated 
   Membrane Cartridges, Melt Blown Cartridges, Oil & Carbon Cartridges, 
   String Wound, Filter Housings) a distinct icon or simple line-art 
   illustration — not a photo, just a clean technical icon — so the 
   grid isn't pure text. Use a consistent icon style/weight throughout 
   (lucide-react icons are fine as a placeholder).

PRODUCT IMAGERY:
7. Add an image slot (with a clean placeholder state) to every product 
   family card (FX-PP Series, FX-PES Series, FX-PT Series, FX-NY Series, 
   FX-PV Series, FX-HF Series) and every top-level product category. 
   I'll supply real photos later — build the layout to expect a 
   16:9 or 4:3 product image at the top of each card.

FILTRATION FINDER:
8. Redesign the 3-step Filtration Finder to feel like an interactive 
   tool, not another card list — use a progress indicator (step 1 of 3), 
   larger touch-friendly option buttons, and a visually distinct 
   "results" panel (different background/border treatment from the 
   static product grid below it) so it's obvious this is dynamic.

TRUST & CREDIBILITY:
9. Add a lightweight trust strip near the top of the homepage — years 
   supplying the industry, number of product families, industries 
   served count, or similar credibility markers (use placeholder 
   numbers I'll confirm).
10. Add a client logos or "industries served" visual strip (can reuse 
    the existing Applications section content, but presented as a 
    horizontal logo/icon strip instead of a text card grid).

RESPONSIVE & POLISH:
11. Audit mobile layout — card grids should collapse cleanly to single 
    column with proper touch targets on all interactive elements 
    (Finder buttons, nav, contact form).
12. Tighten the color palette to 1 primary brand color + 1 accent + 
    neutrals — avoid using more than that across buttons/highlights/
    icons for visual consistency.

Keep all existing copy/content and routes intact — this is a visual 
and structural redesign, not a content rewrite. Show me the homepage 
first before moving to About/Products/Technical Data/Contact.