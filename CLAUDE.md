# WTFIFU — Claude Code Context

> **This file lives at the repo root so Claude Code reads it automatically on every session.**
> Last updated: April 7, 2026

---

## What Is WTFIFU?

WTFIFU (Where to Find Instructions for Use) is a React 18 + Vite dental materials and clinical protocols reference app. Evidence-based, living reference. Target audience: practicing general dentists. Free web app at wtfifu.com, future App Store distribution planned.

Product/citation/specialty counts are **computed dynamically at runtime** from the data files. NEVER hardcode these numbers anywhere.

---

## Tech Stack & Environment

- **Framework:** React 18 + Vite
- **Node:** v20.18.0 (pinned via Netlify env var `NODE_VERSION` and `.nvmrc`)
- **Repo:** `andywellis/WTFIFUV2`
- **Local clone:** `C:\Users\andyw\OneDrive\Documents\GitHub\wtfifuv2`
- **Deploy:** Netlify auto-deploy from GitHub push → `wtfifuv2.netlify.app` + custom domain `wtfifu.com`
- **OS:** Windows 11, PowerShell
- **Claude Code model:** Opus (`claude config set model claude-opus-4-6`)

---

## File Structure

```
src/
  App.jsx                — Specialty tile registry (19 tiles)
  ProductBrowser.jsx     — TAB_CONFIG + SPECIALTY_REGISTRY + card rendering
  EndoBrowser.jsx        — Custom endo browser with 3-tab detail
  index.jsx              — App entry point
  components/
    LandingPage.jsx      — Landing page with dynamic counts
    PubMedSearch.jsx     — Embedded PubMed search on all detail views
    UIKit.jsx            — Shared UI components
  data/
    index.js             — Re-export hub for all data files
    endoData.js          — Endodontics
    implantData.js       — Implantology (includes Versah Densah Burs)
    laserData.js         — Laser Dentistry
    ofpData.js           — Orofacial Pain / TMD
    oralMedData.js       — Oral Medicine
    oralSurgData.js      — Oral Surgery
    orthodonticsData.js  — Orthodontics
    pediatricData.js     — Pediatric Dentistry
    perioData.js         — Periodontics
    pharmacologyData.js  — Pharmacology
    photographyData.js   — Dental Photography
    preventiveData.js    — Preventive Dentistry
    printingData.js      — 3D Printing
    prosthData.js        — Prosthodontics
    restorativeData.js   — Restorative Dentistry
    sedationData.js      — Sedation & Anesthesia
    shared.js            — Shared constants
    sharedRestProsthData.js — Shared (cements, surface tx, polishing)
    sleepData.js         — Sleep Dentistry
    traumaData.js        — Dental Trauma
    treatmentPlanningData.js — Treatment Planning
public/
  robots.txt, sitemap.xml, og-image.png
index.html               — SEO-enriched with JSON-LD + noscript content
```

---

## Data Architecture

### Entry Format (MANDATORY — do not deviate)

```js
{
  id: "kebab-case-unique-id",       // Unique, descriptive
  name: "Display Name",             // Spell out acronyms in parentheses
  mfr: "Manufacturer Name",         // Or "N/A — Protocol" / "N/A — Instrument" / "N/A — Reference Card"
  cat: "Subcategory — Descriptor",  // Must match a pattern in the getGroup classifier
  lastReviewed: "YYYY-MM",          // When entry was last verified
  // TAB FIELDS — must match TAB_CONFIG for this specialty (see below)
  fieldName1: "Tab 1 content. Use \\n for line breaks.",
  fieldName2: "Tab 2 content.",
  fieldName3: "Tab 3 content.",
  notes: "Legacy field. Duplicates tab content for backwards compatibility.",
  refs: ["citation-key-1", "citation-key-2"]  // Keys into the CIT object
}
```

### Citation Format

```js
"author-year-keyword": {
  pmid: null,                        // PubMed ID if available, null if not
  title: "Abbreviated descriptive title with key finding",
  authors: "FirstAuthor LastName et al.",
  journal: "Abbreviated Journal Name",
  year: 2025,
  grade: "STRONG"                    // STRONG (SR/MA/large RCT), MODERATE (small RCT/cohort), LIMITED
}
```

### Each Data File Exports

1. `SPECIALTY_CIT` — citation objects
2. `specialtyGetGroup(cat)` — classifier function routing entries to subcategory groups
3. `SPECIALTY_GROUPS` — array of subcategory group names
4. `ALL_SPECIALTY_PRODUCTS` — combined array of all entries

---

## TAB_CONFIG Mappings (in ProductBrowser.jsx)

| Specialty | Tab Fields | Tab Labels |
|-----------|-----------|------------|
| restorative / prosth | design / protocol / evidence | Design & Composition / Protocol & Technique / Evidence & Outcomes |
| implants | design / protocol / evidence / guided_surgery | (4 tabs) |
| perio | composition / steps / special | Composition / Steps / Special |
| sedation | pharmacology / dosing / evidence | Pharmacology / Dosing / Evidence |
| endo | design / protocol / evidence | Design & Composition / Protocol & Technique / Evidence & Outcomes |
| tx-planning | framework / application / evidence | Framework & Classification / Clinical Application / Evidence & Comparison |
| oral-surgery | framework / application / evidence | Description & Indications / Technique & Protocol / Evidence & Outcomes |
| pharmacology | framework / application / evidence | Drug & Mechanism / Dental Protocol / Evidence & Guidelines |

---

## Tab Content Guidelines

- **Tab 1** (Framework/Design/Material/Drug): WHAT it is. Composition, mechanism, classification, structure.
- **Tab 2** (Application/Protocol/Technique/Dosing): HOW to use it. Step-by-step, chairside-ready.
- **Tab 3** (Evidence/Outcomes): WHY. Clinical data with `Per Author Year:` citations, sample sizes, key outcomes. Include IFU vs evidence divergences where they exist.

### Content Rules

- Never leave a tab field empty — if no data, write `"Limited published data. [what IS known]."`
- Every clinical claim needs `Per Author Year:` attribution
- Spell out all acronyms on first use within each entry
- **No institutional language** ("resident", "AEGD", "training program")
- Cross-reference other WTFIFU categories where relevant: `"Cross-reference: Periodontics for membrane selection"`
- Only best-selling, evidence-based products — no obsolete or second-tier materials

---

## How to Add a New Entry to an Existing Category

1. Open the relevant data file (e.g., `oralSurgData.js`)
2. Add entry object to the appropriate array
3. Include ALL tab fields that TAB_CONFIG expects for that specialty
4. Add citations to the CIT object if referencing new papers
5. Verify the `cat` field matches a pattern in the `getGroup` classifier
6. `npm run build` to verify
7. `git add . && git commit -m "descriptive message" && git push`

## How to Add a New Category

1. Create `newCategoryData.js` in `src/data/` with CIT, getGroup, GROUPS, ALL exports
2. Add exports to `src/data/index.js`
3. Add TAB_CONFIG entry in `ProductBrowser.jsx`
4. Add SPECIALTY_REGISTRY entry in `ProductBrowser.jsx`
5. Add import in `ProductBrowser.jsx`
6. Add tile in `App.jsx` specialties array
7. Counts in LandingPage.jsx and index.html update dynamically — do NOT hardcode

---

## Known Bugs & Gotchas

1. **Perio TAB_CONFIG:** HAD duplicate key (second overwrote first). Fix was deleting the duplicate. If you see weird perio tab behavior, check for duplicate keys.
2. **Implant guided surgery:** Data belongs in `guided_surgery` field with 4th tab, NOT appended to `notes`.
3. **Institutional language:** Scan for and remove any "resident", "AEGD", "training program" references.
4. **App.jsx crash risk:** If you add specialty objects outside the `SPECIALTIES` array (e.g., loose objects at module scope), the app will crash on load. Every specialty object must be INSIDE the array.
5. **Netlify build errors:** If Node version mismatch, verify `NODE_VERSION=20.18.0` is set in Netlify environment variables AND `.nvmrc` contains `20.18.0`.
6. **DNS/blank page at wtfifu.com:** This was a domain config issue, not app code. If it recurs, check Netlify domain settings.

---

## Key Principles (READ THESE)

1. **NO silent scope compression** — If you can't build the full agreed architecture in one pass, say so BEFORE proceeding. Do not deliver a compressed version as if it were complete. This creates rework and is unacceptable.
2. **Disclose trade-offs before executing** — Surface constraints upfront, not after the fact.
3. **Execution over narration** — Andy communicates tersely. Execute tasks, don't explain at length.
4. **Tab 2 = clean chairside quick-reference.** Tab 3 = thorough evidence (the WHY).
5. **Every entry needs `lastReviewed` field.**
6. **Acronyms in names must be spelled out** in parentheses.
7. **NEVER hardcode counts** — product, citation, and specialty counts are computed dynamically at runtime.
8. **Only best-selling, evidence-based products** — No obsolete or second-tier materials.
9. **Windows 11** — Always give Windows/PowerShell instructions, never assume macOS/Linux.

---

## Workflow

1. **Claude.ai (Opus chats in Project):** Large data builds, architecture decisions, OE research document ingestion
2. **Claude Code (terminal):** `git push`, `npm run build`, targeted fixes, error loops — goal is to minimize Andy as middleman
3. **Feedback queue:** Running doc of all pending work with data status
4. **Gemini:** Cross-check data accuracy as QA layer

### Standard Claude Code Fix Pattern

```
Open src/data/[filename]. [Describe exactly what to change]. Run npm run build. If it succeeds, git add, commit with descriptive message, and push. If it fails, read the error and fix it.
```

---

## Current Content Status (April 7, 2026)

### Deployed (19 specialties)

Counts are approximate — run `grep -c 'id: "' src/data/*Data.js src/data/sharedRestProsthData.js` for exact numbers.

### Pending Builds

| Specialty | Status | Notes |
|-----------|--------|-------|
| Oral Surgery expansion | Data complete, build pending | Target 42-53 entries. Currently ~15. Need forceps, surgical extraction, 3rd molar classification, socket preservation, bone reduction, hemostatics, suturing, complications |
| Pharmacology expansion | **50 entries built** (file ready) | Needs deployment. Covers anticoagulants, antihypertensives, diabetes, MRONJ, psych, corticosteroids, anticonvulsants, thyroid, immunosuppressants, chemo/radiation, hormonal, GI, muscle relaxants, opioids/MAT, supplements, emergency, special populations, quick reference |
| Treatment Planning expansion | Data complete | Need ~10 more entries: ICDAS, Angle Classification, ICOP, Fitzpatrick, WHO OPMD, AJCC TNM, Interdisciplinary, Digital Workflow, Anticoag Management, MRONJ Risk Assessment |
| Perio PRF expansion | Data complete, NOT built | L-PRF, A-PRF, i-PRF, CGF entries for perioData.js |
| Perio soft tissue substitutes | Data complete | Mucograft, Fibro-Gide, AlloDerm, Ossix Volumax, Puros Dermis, clinical decision matrix |
| Perio post-op products | Data complete | CHX 0.12%, Listerine, aminocaproic acid |
| Cementation protocol enrichment | Data complete | IFU vs Evidence sections for all material classes. Add to existing restorative/prosth entries |
| Implant guided surgery data | Data complete | Add to guided_surgery field for all 5 implant systems |

---

## Cementation Enrichment Data Summary

All data collected for IFU vs Evidence-Based Protocol sections. Material classes covered:

- **Resin composite/PICN:** Silane may DECREASE bond on resin blocks (major IFU divergence). CoJet + silane = 42 MPa highest for Lava Ultimate.
- **3D Printed resins:** Traditional protocols NOT fully validated. Milled > printed. Sandblast yes, HF no.
- **Feldspathic:** 5% HF validated. MEP viable alternative to HF+silane.
- **Leucite-reinforced:** Similar to feldspathic. MEP acceptable.
- **Lithium disilicate/ZLS:** Self-adhesive 50% lower bond BUT clinically acceptable for full-coverage. 5% HF SUPERIOR to 10% for ZLS (IFU divergence). Monobond Etch & Prime viable HF alternative.
- **Zirconia 3Y/4Y/5Y:** Sandblast 50µm at 0.2 MPa. MDP primers essential. RMGI non-inferior at 4yr. Cement shade critical for 5Y. 50µm MANDATORY for high-translucency (cracks with >90µm).
- **PFM/Noble metals:** Powder-liquid RMGI 2-3x more retentive than paste-paste. MDP essential for Au-Pt-Pd-Ag-In alloys. Zinc phosphate still 85-100% survival at 8.5yr.

Build strategy: Add "IFU vs Evidence" section to each existing block entry's protocol tab (Option A).

---

## Data Quality Standards

- Evidence grades: STRONG (SR/MA/large RCT), MODERATE (small RCT/cohort), LIMITED (case series/expert opinion)
- Citation format: `Per AuthorLastName Year (Journal):` followed by key finding with sample size
- IFU divergences: Explicitly call out where manufacturer instructions differ from published evidence
- Cross-references: Link to other WTFIFU categories when relevant
- lastReviewed: Set to current month when entry is created or verified
