// ═══════════════════════════════════════════════════════════════════
// ENDODONTICS DATA — src/data/endoData.js
// All RPM/torque from manufacturer IFUs. All claims evidence-backed.
// ═══════════════════════════════════════════════════════════════════

// ── Endo-Specific Citations ──
export const ENDO_CIT = {
  "aae-rep-2021": { title: "AAE Clinical Considerations for Regenerative Procedure", authors: "AAE", journal: "AAE Position", year: 2021, grade: "CONSENSUS" },
  "ese-rep-2016": { title: "ESE Position Statement on Revitalization", authors: "ESE", journal: "Int Endod J", year: 2016, grade: "CONSENSUS" },
  "pmc5750827": { pmid: "PMC5750827", title: "REPs: Current protocols and future directions", authors: "Widbiller M, et al.", journal: "Int Endod J", year: 2019, grade: "STRONG" },
  "pmc9712432": { title: "Expert consensus on regenerative endodontic procedures", authors: "Zhou R, et al.", journal: "Int J Oral Sci", year: 2022, grade: "CONSENSUS" },
  "pmc8740102": { pmid: "PMC8740102", title: "Shaping ability of PTG and WOG in S-shaped canals", authors: "Liu Y, et al.", journal: "BMC Oral Health", year: 2022, grade: "STRONG" },
  "ds-ptg-ifu": { title: "ProTaper Gold IFU", authors: "Dentsply Sirona", journal: "IFU", year: 2017, grade: "IFU" },
  "ds-wog-ifu": { title: "WaveOne Gold Scientific Manual", authors: "Dentsply Sirona", journal: "IFU", year: 2023, grade: "IFU" },
  "coltene-edm-ifu": { title: "HyFlex EDM IFU REV-03-2023", authors: "Coltene", journal: "IFU", year: 2023, grade: "IFU" },
  "edgeendo-x7-ifu": { title: "EdgeFile X7 Directions for Use", authors: "EdgeEndo", journal: "IFU", year: 2019, grade: "IFU" },
  "brasseler-bc-ifu": { title: "EndoSequence BC Sealer IFU", authors: "Brasseler USA", journal: "IFU", year: 2018, grade: "IFU" },
  "brasseler-rrm-ifu": { title: "EndoSequence BC RRM IFU", authors: "Brasseler USA", journal: "IFU", year: 2018, grade: "IFU" },
  "septodont-bio-ifu": { title: "Biodentine IFU", authors: "Septodont", journal: "IFU", year: 2022, grade: "IFU" },
  "buchanan-hiflow": { title: "Warm GP obturation with BC HiFlow Sealer", authors: "Buchanan S", journal: "Endod Pract US", year: 2020, grade: "CONSENSUS" },
  "pmc5527214": { pmid: "PMC5527214", title: "Cytotoxicity of GuttaFlow Bioseal, GF2, AH Plus, MTA Fillapex", authors: "Collado-González M, et al.", journal: "Iran Endod J", year: 2017, grade: "STRONG" },
  "pmc7527971": { title: "Sealing ability AH Plus vs GuttaFlow Bioseal", authors: "Lee JK, et al.", journal: "Bioinorg Chem Appl", year: 2020, grade: "MODERATE" },
  "ds-ribbon-2025": { title: "DS launches AH Plus Ribbon + ProRoot Bio Sealer", authors: "Dentsply Sirona", journal: "Press Release", year: 2025, grade: "IFU" },
};

// ── Endo Group Classifier ──
export const endoGetGroup = c => {
  if (c.includes("Access Bur")) return "Access Burs";
  if (c.includes("Hand File") || c.includes("Pathfinding")) return "Hand Files";
  if (c.includes("Glide Path") || c.includes("Orifice")) return "Glide Path & Orifice Openers";
  if (c.includes("Rotary") || c.includes("Reciprocating")) return "Rotary & Reciprocating Systems";
  if (c.includes("Irrigant") || c.includes("Solvent") || c.includes("Chelator") || c.includes("Antimicrobial")) return "Irrigants & Solvents";
  if (c.includes("Bioceramic") && (c.includes("Repair") || c.includes("VPT") || c.includes("Pulp"))) return "Bioceramics & VPT";
  if (c.includes("Obturation") || c.includes("Gutta") || c.includes("Carrier")) return "Obturation Materials";
  if (c.includes("Sealer")) return "Sealers";
  return "Other";
};

export const ENDO_GROUPS = [
  "Access Burs", "Hand Files", "Glide Path & Orifice Openers",
  "Rotary & Reciprocating Systems", "Irrigants & Solvents",
  "Bioceramics & VPT", "Obturation Materials", "Sealers"
];

// ═══════════════════════════════════════════════
// 1. ACCESS BURS
// ═══════════════════════════════════════════════
export const ACCESS_BURS = [
  {
    id: "endo-z-bur", name: "Endo Z Bur", mfr: "Eagle Dental / Dentsply / generic", cat: "Access Bur — Carbide",
    composition: "Tungsten carbide, FG shank, surgical length available (25mm). Non-cutting safety tip + tapered funnel body.",
    notes: "THE endo access bur. Non-cutting tip protects pulp chamber floor while the funnel shape widens access cavity walls. Use in high-speed handpiece with water cooling. After initial penetration with round bur, switch to Endo Z for refinement and deroofing.",
    technique: "1) Initial penetration: round carbide #2 or #4 through enamel/dentin roof\n2) Switch to Endo Z once into pulp chamber\n3) Funnel-shaped body flares walls while safe tip rides floor\n4) Sweep laterally to delineate chamber anatomy",
    substrate: "Through enamel/dentin: carbide ideal\nThrough PFM: diamond to penetrate porcelain → switch to carbide through metal/dentin\nThrough zirconia: diamond REQUIRED (carbide will not cut ZrO₂) — water cooling essential\nThrough composite/RNC: carbide efficient\nThrough gold: carbide preferred for control",
    refs: []
  },
  {
    id: "endo-access-bur", name: "Endo Access Bur (Safe-Ended)", mfr: "Eagle Dental / generic", cat: "Access Bur — Carbide",
    composition: "Tungsten carbide, FG shank. Safe-ended (non-cutting) tip prevents penetration beyond pulp chamber floor.",
    notes: "Similar concept to Endo Z but with blunter, more rounded safe end. Funnel shape allows easier access to canal orifices. Use with water irrigation in high-speed handpiece. Pack of 5 per Eagle Dental.",
    technique: "Same as Endo Z. Position safe-ended tip at desired depth → sweep laterally to open access without risk of floor perforation.",
    refs: []
  },
  {
    id: "munce-discovery", name: "Munce Discovery Bur", mfr: "CJM Engineering", cat: "Access Bur — MB2 Location",
    composition: "Ultrasmall carbide bur, 0.5mm tip diameter. Extended-length shank for deep access under magnification.",
    notes: "THE bur for finding MB2. Designed by Dr. John Munce specifically for troughing calcified dentin between MB1 and the expected MB2 location under microscope. Use with water, LED transillumination, and light touch. Never force — let the bur find the anatomy.\n\nMB2 prevalence: present in 60–90% of maxillary first molars (age-dependent). Location: 1–2mm palatal/lingual to MB1, along the developmental groove between MB1 and palatal canal.",
    technique: "1) Microscope + transillumination (place fiber optic buccally)\n2) Identify developmental groove between MB1 and palatal orifice\n3) Lightly trough with Munce bur along groove, 1–2mm mesial to palatal line angle\n4) Look for 'catch' — dark dot indicating calcified canal\n5) Negotiate with #06 or #08 C-file + EDTA",
    refs: []
  },
  {
    id: "round-carbide-sl", name: "Round Carbide Burs (Surgical Length)", mfr: "Multiple", cat: "Access Bur — Initial Penetration",
    composition: "Tungsten carbide round burs, surgical length (25mm shank). Sizes: #2 (1.0mm), #4 (1.4mm), #6 (1.8mm).",
    notes: "Standard initial penetration burs for endo access. #2 for small/calcified teeth, #4 most common, #6 for large pulp chambers. Surgical length (25mm) provides better reach in posterior teeth compared to standard FG (19mm). Switch to Endo Z bur once pulp chamber is entered.",
    technique: "1) Mark access point on occlusal surface\n2) Penetrate with round carbide until 'drop' into pulp chamber felt\n3) Switch to Endo Z for refinement\n4) ⚠ Watch for excessive depth — use apex locator/radiograph for depth reference",
    refs: []
  },
];

// ═══════════════════════════════════════════════
// 2. HAND FILES
// ═══════════════════════════════════════════════
export const HAND_FILES = [
  {
    id: "k-file", name: "K-Files (ISO Standard)", mfr: "Multiple (Dentsply, Mani, Kerr, EdgeEndo)", cat: "Hand File — Negotiation",
    composition: "Stainless steel (standard) or NiTi (flexible variant). Square cross-section — machined by twisting a square blank.",
    sizes: "#06, #08, #10, #15, #20, #25, #30, #35, #40, #45, #50, #55, #60, #70, #80",
    colorCode: "ISO: white #15/#45, yellow #20/#50, red #25/#55, blue #30/#60, green #35/#70, black #40/#80. Sizes #06/#08/#10 have unique colors (pink/grey/purple) per manufacturer.",
    motion: "Watch-winding: ¼ turn CW, pull back. Also: balanced force technique (¼ turn CW to engage, ¼–½ turn CCW to cut, pull).",
    notes: "The workhorse hand file. Use for: initial negotiation, patency establishment, working length confirmation, apical gauging after rotary, recapitulation between rotary files.\n\n⚠ #10 K-file to working length is MANDATORY before any rotary instrumentation — this confirms a reproducible glide path exists.\n\nStainless steel: better tactile feedback, stiffer. NiTi hand files: more flexible for curved canals but less tactile.\n\nPre-curve tip for calcified/curved canals. Use with EDTA lubricant (File-Eze, EdgeGel).",
    refs: []
  },
  {
    id: "hedstrom", name: "Hedstrom Files (H-Files)", mfr: "Multiple", cat: "Hand File — Bulk Removal",
    composition: "Stainless steel. Machined spiral cross-section with positive rake angle — aggressive cutting edges on outstroke.",
    sizes: "Same ISO sizing as K-files: #15–#80",
    colorCode: "Same ISO color coding as K-files.",
    motion: "⚠ PULL ONLY — NEVER rotate. Rotation = instant fracture. The spiral cross-section locks into dentin on rotation and the file will snap immediately.\n\nFiling motion: insert to depth → pull back along canal wall. Circumferential filing: pull along each wall sequentially.",
    notes: "Extremely aggressive cutting on outstroke. Use for: bulk dentin removal when widening canals, circumferential filing to straighten access, removal of gutta-percha in retreatment (combined with solvent).\n\n⚠ ⚠ CRITICAL SAFETY: NEVER use H-files in ANY rotary or rotating motion. This is the #1 hand file fracture scenario in endo training.",
    refs: []
  },
  {
    id: "c-file", name: "C-Files / C+ Files", mfr: "Dentsply / Mani", cat: "Hand File — Calcified Canal",
    composition: "Stainless steel, stiffer than standard K-files. Designed for calcified canal negotiation.",
    sizes: "#06, #08, #10 (most useful in small sizes)",
    motion: "Watch-winding with firm apical pressure. Pre-curve tip. Use with EDTA gel.",
    notes: "Stiffer than K-files at equivalent size — designed to push through calcified dentin. Pre-curve tip 1–2mm with cotton plier before insertion. Flood canal with EDTA (17% or gel formulation). Patience is key — advance slowly, recapitulate frequently.\n\nIf C-file cannot negotiate: try #06 K-file with EDTA, or Munce Discovery bur under microscope to trough toward canal.",
    refs: []
  },
];

// ═══════════════════════════════════════════════
// 3. GLIDE PATH & ORIFICE OPENERS
// ═══════════════════════════════════════════════
export const GLIDE_PATH = [
  {
    id: "proglider", name: "ProGlider", mfr: "Dentsply Sirona", cat: "Glide Path — Rotary NiTi",
    composition: "M-Wire NiTi. Single glide path file. Size 16, progressive taper .02 → .085.",
    motor: { rpm: 300, torque: 2.0, motion: "Continuous rotation", program: "X-Smart: ProGlider preset" },
    notes: "Single-file glide path establishment — replaces the multi-file PathFile sequence. Use AFTER #10 K-file reaches working length, BEFORE shaping files.\n\nPre-programmed on X-Smart Plus/IQ motors. Progressive taper creates a smooth, reproducible path that transitions seamlessly to shaping files.",
    edgeAnalog: "EdgeFind (P1 13/.03, P2 16/.03, P3 19/.03) — 3-file glide path sequence",
    refs: ["ds-ptg-ifu"]
  },
  {
    id: "hyflex-gpf", name: "HyFlex EDM Glidepath Files", mfr: "Coltene", cat: "Glide Path — CM NiTi EDM",
    composition: "Controlled Memory NiTi + EDM surface. GPF 10/.05 and GPF 15/.03.",
    motor: { rpm: 300, torque: 1.8, motion: "Continuous rotation", program: "CanalPro X-Move: HyFlex EDM GPF preset" },
    notes: "Part of HyFlex EDM OGSF sequence. GPF 15/.03 (new) for narrow/curved canals → GPF 10/.05 for standard glide path. Pre-bendable like stainless steel files (unique CM property). Reusable after autoclaving — shape restores with heat.\n\nPer IFU: 300 RPM, up to 1.8 Ncm for glidepath files (lower than 400 RPM/2.5 Ncm for shaping files).",
    refs: ["coltene-edm-ifu"]
  },
  {
    id: "gates-glidden", name: "Gates Glidden Drills", mfr: "Multiple", cat: "Orifice — Stainless Steel Latch",
    composition: "Stainless steel, latch-type (RA shank) for slow-speed handpiece. Sizes #1–#6, 32mm length.",
    motor: { rpm: "750–1000", torque: "N/A", motion: "Continuous rotation", program: "Slow-speed handpiece" },
    notes: "#2 and #3 most commonly used for coronal flaring. Safety feature: designed to break at shank-to-blade junction (predictable failure point, easy retrieval).\n\n⚠ Use ONLY in straight portion of canal — NEVER in curvature (strip perforation risk).\n⚠ Anti-curvature filing technique: direct Gates Glidden away from furcation concavity to prevent strip perforation on the danger side of the root.",
    refs: []
  },
  {
    id: "protaper-sx", name: "ProTaper Gold SX (Orifice Shaper)", mfr: "Dentsply Sirona", cat: "Orifice — Rotary NiTi",
    composition: "Gold heat-treated NiTi. 19mm length (shorter than standard files). No designated tip size — pure shaping file.",
    motor: { rpm: 300, torque: 5.1, motion: "Continuous rotation", program: "X-Smart: PTG SX preset" },
    notes: "Dedicated orifice opener/coronal flarer in the ProTaper Gold system. Use after S1 and S2 per IFU to: (1) optimally shape shorter roots, (2) relocate coronal canal away from furcation, (3) expand shape as desired. Brushing motion on outstroke.\n\nPer IFU: SX and S1 share same settings — 300 RPM, 5.10 Ncm.",
    refs: ["ds-ptg-ifu"]
  },
];

// ═══════════════════════════════════════════════
// 4. ROTARY & RECIPROCATING FILE SYSTEMS
// ═══════════════════════════════════════════════
export const ROTARY_RECIP = [
  {
    id: "waveone-gold", name: "WaveOne Gold", mfr: "Dentsply Sirona", cat: "Reciprocating — Gold NiTi",
    composition: "Gold heat-treated NiTi. Parallelogram cross-section with alternate contact point design. Variable and reducing tapers.",
    motor: { rpm: "Pre-set (firmware)", torque: "Pre-set (firmware)", motion: "Reciprocation: 150° CCW (cutting) + 30° CW (release)", program: "X-Smart Plus/IQ: 'WAVEONE ALL' | ProMark | VDW motors" },
    files: [
      { name: "Small", tip: 20, taper: ".07", color: "Yellow", use: "Narrow canals, lower premolars, MB2" },
      { name: "Primary", tip: 25, taper: ".07", color: "Red", use: "80–85% of cases per DS" },
      { name: "Medium", tip: 35, taper: ".06", color: "Green", use: "Larger canals" },
      { name: "Large", tip: 45, taper: ".05", color: "White", use: "Very large canals, palatal roots" },
    ],
    lengths: "21, 25, 31 mm",
    singleUse: true,
    notes: "THE reciprocating standard. 3 cycles of 150°/30° = one complete 360° revolution. Gold heat treatment: 80% more flexible, 50% more fatigue-resistant vs original WaveOne M-Wire.\n\nTechnique: in-and-out pecking, 3–4mm amplitude, irrigate + recapitulate with #10 K-file after each advance. Do NOT force — let the file advance passively.\n\nMatched obturation: WaveOne Gold GP points + GuttaCore for WaveOne Gold carriers.",
    edgeAnalog: "EdgeOne Fire — same motor settings ('WaveOne Gold' program), same sizes (S/P/M/L). Claims 5× cyclic fatigue resistance vs WaveOne Gold.",
    refs: ["ds-wog-ifu"]
  },
  {
    id: "protaper-gold", name: "ProTaper Gold", mfr: "Dentsply Sirona", cat: "Rotary — Gold NiTi (Progressive Taper)",
    composition: "Gold heat-treated NiTi. Progressive variable taper (NOT constant). Convex triangular cross-section (S files), modified triangular (F files).",
    motor: { rpm: 300, torque: "Variable per file", motion: "Continuous rotation", program: "X-Smart Plus/IQ: 'PROTAPER' mode" },
    files: [
      { name: "SX", tip: "N/A", taper: "Var", color: "Orange", use: "Orifice opener (19mm)", rpm: 300, torque: 5.1 },
      { name: "S1", tip: 17, taper: ".02→.11", color: "Purple", use: "Coronal shaping (brushing)", rpm: 300, torque: 5.1 },
      { name: "S2", tip: 20, taper: ".04→.115", color: "White", use: "Middle third shaping (brushing)", rpm: 300, torque: 1.5 },
      { name: "F1", tip: 20, taper: ".07", color: "Yellow", use: "Finishing — apical", rpm: 300, torque: 1.5 },
      { name: "F2", tip: 25, taper: ".08", color: "Red", use: "Finishing — apical", rpm: 300, torque: 3.1 },
      { name: "F3", tip: 30, taper: ".09", color: "Blue", use: "Finishing — larger canals", rpm: 300, torque: 3.1 },
      { name: "F4", tip: 40, taper: ".06", color: "Black", use: "Large canals", rpm: 300, torque: 3.1 },
      { name: "F5", tip: 50, taper: ".05", color: "Yellow", use: "Very large canals", rpm: 300, torque: 3.1 },
    ],
    singleUse: false,
    notes: "The classic multi-file rotary system. Crown-down sequence: SX (if needed) → S1 (brush outstroke) → S2 (brush outstroke) → F1 (non-brushing, passive to WL) → gauge with #20 hand file → F2 if loose → gauge with #25, etc.\n\nPer IFU torque settings (Manualzz multilingual document): S1/SX: 5.10 Ncm, S2/F1: 1.50 Ncm, F2–F5: 3.10 Ncm. All at 300 RPM.\n\nNote: X-Smart 'PROTAPER' motor presets may use 250 RPM (per PMC8740102) — both 250–300 RPM are within manufacturer guidance.",
    edgeAnalog: "EdgeTaper Encore Platinum — same X1/X2/X3 progressive taper concept, torque 320 g-cm (3.2 Ncm)",
    refs: ["ds-ptg-ifu", "pmc8740102"]
  },
  {
    id: "protaper-ultimate", name: "ProTaper Ultimate", mfr: "Dentsply Sirona", cat: "Rotary — Gold+Blue NiTi (Progressive Taper)",
    composition: "Slider/Shaper/F1–F3: Gold heat treatment. FX/FXL: Blue heat treatment. Parallelogram cross-section with variable acute angles.",
    motor: { rpm: 400, torque: "Same for all files", motion: "Continuous rotation", program: "X-Smart Pro+: ProTaper Ultimate preset" },
    files: [
      { name: "Slider", tip: "17", taper: ".02", color: "—", use: "Glide path (replaces separate glide path file)" },
      { name: "Shaper", tip: "20", taper: "Var", color: "—", use: "Coronal 2/3 shaping" },
      { name: "F1", tip: "20", taper: ".07", color: "Yellow", use: "Apical finishing" },
      { name: "F2", tip: "25", taper: ".08", color: "Red", use: "Apical finishing" },
      { name: "F3", tip: "30", taper: ".09", color: "Blue", use: "Apical finishing" },
      { name: "FX", tip: "40", taper: ".04", color: "—", use: "Auxiliary — large canals (Blue heat Tx)" },
      { name: "FXL", tip: "55", taper: ".03", color: "—", use: "Auxiliary — very large (Blue heat Tx)" },
    ],
    singleUse: false,
    notes: "Newest generation ProTaper. ALL files at 400 RPM (faster than ProTaper Gold 300 RPM). 'Deep shape' philosophy: increased apical taper (F1: 7%, F2: 8%, F3: 9%) for optimized hydraulics and debris evacuation.\n\nSlider eliminates need for separate glide path file in 63% of cases (DS user study, n=21 dentists, 210 canals). Shaper + Finishers use Gold heat treatment; FX/FXL use Blue heat treatment for maximum flexibility in large curved canals.",
    edgeAnalog: "EdgeTaper Blaze Utopia (FireWire Blaze heat treatment)",
    refs: ["ds-ptg-ifu"]
  },
  {
    id: "trunatomy", name: "TruNatomy", mfr: "Dentsply Sirona", cat: "Rotary — Heat-Treated NiTi (Regressive Taper)",
    composition: "Heat-treated NiTi. Slim 0.8mm maximum flute diameter (vs 1.2mm for most variable taper files). Off-center parallelogram cross-section with 2 cutting edges.",
    motor: { rpm: 500, torque: "~1.5", motion: "Continuous rotation", program: "X-Smart: TruNatomy preset" },
    files: [
      { name: "Orifice Modifier", tip: 20, taper: ".08", color: "—", use: "Coronal flaring" },
      { name: "Glider", tip: 17, taper: ".02", color: "—", use: "Glide path" },
      { name: "Small", tip: 20, taper: ".04", color: "Yellow", use: "Narrow canals" },
      { name: "Prime", tip: 26, taper: ".04", color: "Red", use: "Most cases" },
      { name: "Medium", tip: 36, taper: ".03", color: "—", use: "Larger canals" },
      { name: "Large", tip: 46, taper: ".03", color: "—", use: "Very large canals" },
    ],
    singleUse: false,
    notes: "Designed around Clark/Khademi peri-cervical dentin (PCD) preservation concept. REGRESSIVE tapers: thinner coronally than ProTaper → preserves critical dentin in the cervical danger zone.\n\n500 RPM (per DS product page: '500 rpm vs traditional 300 rpm') with less torque (~1.5 Ncm per PMC study methodology). Only 2 cutting edges = less resistance, less screw-in effect.\n\nMatched obturation: TruNatomy Conform Fit GP points match file shapes.",
    edgeAnalog: null,
    refs: ["ds-ptg-ifu"]
  },
  {
    id: "vortex-blue", name: "Vortex Blue", mfr: "Dentsply Sirona", cat: "Rotary — Blue NiTi (Constant Taper)",
    composition: "Blue heat-treated NiTi (distinctive blue color). Triangular cross-section with radial lands. Electropolished surface. Controlled memory — pre-curved shape returns after use.",
    motor: { rpm: 500, torque: 2.0, motion: "Continuous rotation", program: "Any endo motor — 500 RPM, 2.0 Ncm" },
    files: [
      { name: ".04 series", tip: "15–40", taper: ".04", color: "Per ISO", use: "Standard sequential" },
      { name: ".06 series", tip: "20–50", taper: ".06", color: "Per ISO", use: "Greater taper" },
    ],
    lengths: "21, 25, 31 mm",
    singleUse: false,
    notes: "Traditional sequential rotary approach: crown-down or step-back with incrementally larger files. Blue metallurgy = controlled memory (pre-curved shape returns after use). Electropolished surface = smoother, better fatigue resistance.\n\nStill widely preferred by endodontists who like sequential files over single-file reciprocation. Blue heat treatment: austenite finish temp ~38°C (near body temp), high proportion of stable martensite = increased ductility.",
    edgeAnalog: "EdgeSequel Sapphire — 'used exactly like Vortex, Vortex Blue, and EndoSequence' per EdgeEndo. True 1:1 drop-in replacement. Claims 2× cyclic fatigue vs Vortex Blue, 8× vs Vortex/EndoSequence.",
    refs: []
  },
  {
    id: "hyflex-edm", name: "HyFlex EDM", mfr: "Coltene", cat: "Rotary — CM NiTi EDM (Variable Taper)",
    composition: "Controlled Memory (CM) NiTi + Electric Discharge Machining (EDM) surface hardening. Unique cross-section: quadrangular (tip) → rectangular (middle) → triangular (coronal). Pre-bendable like stainless steel.",
    motor: { rpm: 400, torque: 2.5, motion: "Continuous rotation", program: "CanalPro X-Move: HyFlex EDM preset" },
    files: [
      { name: "Orifice Opener", tip: 25, taper: ".12", color: "—", use: "Coronal flaring (optional)" },
      { name: "GPF", tip: "10/.05 or 15/.03", taper: "See name", color: "—", use: "Glide path (300 RPM, 1.8 Ncm)" },
      { name: "Shaping", tip: 20, taper: ".05 (variable)", color: "—", use: "Canal shaping to WL" },
      { name: "Finishing", tip: "25–60", taper: ".02–.12", color: "—", use: "Various finishing sizes" },
    ],
    singleUse: false,
    notes: "5th generation root canal files. EDM manufacturing creates unique hardened surface with superior fracture resistance. Controlled Memory: files can be pre-bent like stainless steel (crucial in severely curved canals). REUSABLE: shape restores during autoclaving.\n\nPer IFU (REV-03-2023): Shaping/finishing files: 400 RPM, up to 2.5 Ncm. Glidepath files: 300 RPM, up to 1.8 Ncm.\n\nSafety: spirals designed to LENGTHEN under stress (prevents binding). If file does NOT regain shape after autoclaving → discard (fracture risk increased).\n\nOGSF sequence: O(rifice) → G(lidepath) → S(haping) → F(inishing)",
    edgeAnalog: null,
    refs: ["coltene-edm-ifu"]
  },
  {
    id: "edgefile-x7", name: "EdgeFile X7", mfr: "EdgeEndo", cat: "Rotary — FireWire NiTi (Constant Taper)",
    composition: "Annealed Heat Treated (AHT) NiTi, brand name 'FireWire'. Constant taper (.04 and .06 available). Pre-bendable.",
    motor: { rpm: "300–500", torque: 3.0, motion: "Continuous rotation", program: "Any endo motor — 300–500 RPM, 3.0 Ncm (300 g-cm)" },
    files: [
      { name: ".04 series", tip: "17–45", taper: ".04", color: "Per ISO", use: "All canals — crown-down technique" },
      { name: ".06 series", tip: "17–45", taper: ".06", color: "Per ISO", use: "Straight to mildly curved canals" },
    ],
    lengths: "21, 25, 29 mm",
    singleUse: true,
    notes: "EdgeEndo's original and most recognized file. Per IFU: compatible with Vortex, ProFile, K3, Sequence, TF, and other .04/.06 taper systems — 'use your current file technique along with the same speeds and torques.'\n\nHas its OWN crown-down technique (IFU): Start 25/.04 → to resistance or WL. If resistance before WL → drop to 20/.04 → repeat alternating until one reaches WL. Then step up sizes as needed.\n\nSafety: designed to UNWIND (not snap) — use until file unwinds backwards.\n\n⚠ Can be used in CW reciprocating motor but NOT in WaveOne (CCW) motor. EdgeOne Fire is the WaveOne-compatible reciprocating file.\n\nDIFFERENCE from EdgeSequel Sapphire: X7 has its own crown-down technique and is a broader-compatibility file. Sapphire is a true 1:1 Vortex Blue drop-in.",
    edgeAnalog: "This IS the EdgeEndo product. Sapphire = Vortex Blue analog. X7 = broader rotary analog.",
    refs: ["edgeendo-x7-ifu"]
  },
  {
    id: "reciproc", name: "RECIPROC / RECIPROC blue", mfr: "VDW", cat: "Reciprocating — M-Wire / Blue NiTi",
    composition: "RECIPROC: M-Wire NiTi. RECIPROC blue: Blue heat-treated NiTi. S-shaped cross-section.",
    motor: { rpm: "Pre-set (firmware)", torque: "Pre-set (firmware)", motion: "Reciprocation: ~150° CCW + ~30° CW (similar to WaveOne)", program: "VDW.GOLD or VDW.SILVER: 'RECIPROC' / 'RECIPROC blue' program" },
    files: [
      { name: "R25", tip: 25, taper: ".08", color: "Red", use: "Most canals" },
      { name: "R40", tip: 40, taper: ".06", color: "Black", use: "Large canals" },
      { name: "R50", tip: 50, taper: ".05", color: "Yellow", use: "Very large canals" },
    ],
    singleUse: true,
    notes: "VDW's reciprocating system — direct competitor to WaveOne Gold. S-shaped cross-section (vs WOG's parallelogram). RECIPROC blue has Blue heat treatment for increased flexibility and fatigue resistance.\n\nKey difference from WaveOne Gold: cross-section design and manufacturer ecosystem (VDW motors vs DS X-Smart). Similar reciprocation angles and clinical philosophy.",
    edgeAnalog: null,
    refs: []
  },
];

// ═══════════════════════════════════════════════
// 5. IRRIGANTS & SOLVENTS
// ═══════════════════════════════════════════════
export const IRRIGANTS = [
  {
    id: "naocl", name: "Sodium Hypochlorite (NaOCl)", mfr: "Multiple", cat: "Irrigant — Primary Antimicrobial",
    concentrations: "0.5%, 1.0%, 2.5%, 3.0%, 5.25%, 6.0%",
    notes: "THE primary endodontic irrigant. DISSOLVES organic tissue (pulp remnants, biofilm). Antibacterial. Nothing else replaces its tissue-dissolving capacity.\n\nConcentration debate:\n• Full strength (5.25–6%): maximum tissue dissolution, most cytotoxic if extruded\n• 2.5–3%: balance of efficacy and safety — most common clinical choice\n• 1%: reduced efficacy, sometimes used with activation (PIPS/laser)\n\nActivation methods: manual agitation, ultrasonic (PUI), PIPS/SWEEPS (Er:YAG), XP Endo Finisher, EndoActivator\n\nWarm NaOCl (40–60°C): enhances dissolving capacity without increasing concentration.\n\n⚠ NEVER mix NaOCl with CHX — produces para-chloroaniline (PCA), a carcinogenic precipitate\n⚠ NaOCl accident (extrusion beyond apex): severe pain, rapid swelling, ecchymosis, possible paresthesia. Management: analgesics, antibiotics, corticosteroids, warm compresses, close follow-up. This is a medical emergency if severe.",
    refs: []
  },
  {
    id: "edta-17", name: "EDTA 17% (Ethylenediaminetetraacetic Acid)", mfr: "Multiple", cat: "Chelator — Smear Layer Removal",
    notes: "Chelating agent — removes smear layer (inorganic component: dentin chips/debris). Standard: 17% aqueous solution.\n\nProtocol: 1 mL per canal, 1 minute contact time.\n⚠ DO NOT leave in canal >1 minute — causes excessive dentin erosion and weakens root structure.\n\nSequence: Use AFTER NaOCl shaping (penultimate irrigant), BEFORE final NaOCl rinse.\n\nAlso releases growth factors from dentin matrix (TGF-β, VEGF, BMPs) — critical for REPs.\n\nProducts: generic 17% EDTA, File-Eze (Ultradent — with surfactant for lubrication), EdgeGel (EdgeEndo — 19% EDTA gel for file lubrication).",
    refs: []
  },
  {
    id: "chx-2", name: "Chlorhexidine 2% (CHX)", mfr: "Multiple", cat: "Antimicrobial — Adjunct Irrigant",
    notes: "Antimicrobial with substantivity — continues killing bacteria after application (unlike NaOCl which dissipates). Does NOT dissolve tissue.\n\nUse: optional final rinse in retreatment cases or persistent infections. Antimicrobial spectrum complements NaOCl.\n\n⚠ CANNOT replace NaOCl as primary irrigant — no tissue-dissolving ability.\n⚠ NEVER combine with NaOCl in the canal — produces para-chloroaniline (PCA), carcinogenic orange-brown precipitate. Flush with saline or EDTA between irrigants if switching.\n\nFor REPs: CHX is NOT recommended due to cytotoxicity to stem cells — use low-concentration NaOCl only.",
    refs: []
  },
  {
    id: "gp-solvents", name: "GP Solvents (Retreatment)", mfr: "Multiple", cat: "Solvent — GP Removal",
    notes: "Used to dissolve gutta-percha during retreatment:\n\n• Chloroform: most effective GP solvent. ⚠ Carcinogenic — avoid when alternatives suffice.\n• Eucalyptol: natural solvent, less toxic than chloroform, slower acting. Reasonable first choice.\n• Xylene: effective but toxic fumes.\n• Orange oil (d-limonene): mild solvent, safest option, slowest.\n• EndoSolv-R (Septodont): for resin-based sealers. EndoSolv-E: for eugenol-based sealers.\n\nTechnique: flood canal with solvent → H-file (pull strokes) to remove softened GP → irrigate with NaOCl → repeat.",
    refs: []
  },
];

// ═══════════════════════════════════════════════
// 6. BIOCERAMICS & VPT
// ═══════════════════════════════════════════════
export const BIOCERAMICS = [
  {
    id: "proroot-mta", name: "ProRoot MTA", mfr: "Dentsply Sirona", cat: "Bioceramic — Repair/VPT",
    composition: "Portland cement (tricalcium silicate, dicalcium silicate, tricalcium aluminate) + bismuth oxide (radiopacifier) + trace elements.",
    settingTime: "2.5–4 hours",
    ph: "12.5 (highly alkaline — antibacterial)",
    indications: ["Pulp capping", "Pulpotomy", "Apexification", "Perforation repair", "Root-end filling (apicoectomy)"],
    notes: "The original bioceramic. Setting: hydration reaction → calcium silicate hydrate + Ca(OH)₂ release. Requires moisture to set. Excellent biocompatibility — induces cementum/dentin bridge formation.\n\n⚠ DISCOLORATION: bismuth oxide causes grey/dark discoloration in 83% of cases. AVOID in anterior/esthetic zone — use Biodentine or BC RRM instead.\n\nHandling: mix powder + sterile water on glass slab → putty consistency → place with MTA carrier/plugger → moisten with damp cotton pellet → temporize (if 2-visit approach) or GI cap.",
    vptRole: "Acceptable for VPT in posterior/non-esthetic zone. Biodentine preferred overall due to faster set + no staining.",
    refs: []
  },
  {
    id: "biodentine", name: "Biodentine", mfr: "Septodont", cat: "Bioceramic — Repair/VPT",
    composition: "Ultra-pure tricalcium silicate (Active Biosilicate Technology), calcium carbonate, zirconium oxide (radiopacifier). Liquid: calcium chloride (accelerator) + water-reducing agent. Monomer-free, resin-free.",
    settingTime: "9–12 minutes initial set (per IFU). Working time ~6 minutes.",
    mixing: "1 capsule + 5 drops liquid → triturate in amalgamator 30 seconds at 4000–4500 RPM. Biodentine XP: cartridge in dedicated mixer 30 sec.",
    ph: "Alkaline (antibacterial)",
    indications: ["Direct/indirect pulp capping", "Pulpotomy (reversible AND irreversible pulpitis)", "Perforation repair", "Root-end filling", "Apexification", "Revitalization/REPs", "Temporary dentin restoration (up to 6 months per Septodont)"],
    notes: "Advantages over MTA: dramatically faster set (12 min vs 2.5–4 hr), better handling (capsule mixing vs slab), NO bismuth oxide = NO discoloration. Compressive strength similar to sound dentin.\n\nBioactive: induces hydroxyapatite formation + dentin bridge. Promotes TGF-β1 release and odontoblast differentiation.\n\nVPT gold standard for esthetic zone. Can be used as temporary restoration up to 6 months. Cannot be etched or bonded to directly — place composite or GI over it.\n\nBiodentine XP: newer syringe-based delivery via dedicated mixer + dispenser gun.",
    vptRole: "PREFERRED for all VPT — especially anterior/esthetic zone (no staining). 12 min set allows same-visit final restoration.",
    refs: ["septodont-bio-ifu"]
  },
  {
    id: "bc-rrm", name: "EndoSequence BC RRM (Root Repair Material)", mfr: "Brasseler USA", cat: "Bioceramic — Repair/VPT",
    composition: "Calcium silicates, calcium phosphate monobasic, calcium hydroxide, zirconium oxide, tantalum oxide, filler + thickening agents.",
    settingTime: "Regular Putty/Paste: ~2 hours. Fast-Set Putty: ~20 minutes.",
    ph: "12+ (antibacterial)",
    forms: "Paste (syringable) · Putty (condensable, Cavit-like consistency) · Fast-Set Putty (20 min set)",
    indications: ["Root-end filling (retrograde)", "Perforation repair", "Resorption repair", "Apexification (apical barrier)", "Pulp capping"],
    notes: "Pre-mixed: NO mixing required — direct placement from syringe or jar. Hydrophilic — sets in presence of moisture (dentinal tubule humidity). Metal-free: zirconium oxide + tantalum oxide radiopacifiers = NO discoloration.\n\nAlso known as: iRoot BP Plus (Canada), TotalFill RRM (FKG, outside North America).\n\nPer IFU perforation repair: apply self-cure or dual-cure GLASS IONOMER over unset BC RRM — do NOT use composite directly over unset material.\n\nFor 2-visit repair of larger perforations: moist cotton pellet over material before temporization.",
    vptRole: "Acceptable for VPT. Advantages: pre-mixed (no mixing errors), no staining, fast-set option. Less clinical VPT data than MTA/Biodentine.",
    perforationRepair: "Small (<1mm): BC RRM Putty or MTA — high success\nMedium (1–3mm): MTA or Biodentine — pack firmly\nLarge/strip (>3mm): poor prognosis. Internal matrix (CollaPlug) + MTA/BC Putty over matrix\nFurcal: time-dependent — fresh repair >90% success, longstanding ~60–70%",
    refs: ["brasseler-rrm-ifu"]
  },
];

// ═══════════════════════════════════════════════
// 7. OBTURATION MATERIALS
// ═══════════════════════════════════════════════
export const OBTURATION = [
  {
    id: "gutta-percha", name: "Gutta-Percha (GP) Cones", mfr: "Multiple", cat: "Obturation — Core Material",
    composition: "~20% gutta-percha polymer (trans-1,4-polyisoprene), ~65% zinc oxide, ~10% barium sulfate (radiopacifier), ~5% wax/resin.",
    notes: "THE standard obturation core material. Thermoplastic: softens at 42–49°C (alpha-phase), flows at 56–62°C. NOT adhesive to dentin — requires sealer for seal.\n\nForms: standardized cones (ISO sizing), non-standardized (accessory), system-matched (WaveOne Gold, ProTaper, TruNatomy), pellets (for GP guns), cartridges.\n\nSystem-matched cones: match the taper created by specific file systems for single-cone technique.\n\nBC Points (Brasseler): GP cones impregnated + coated with bioceramic nanoparticles — bond with BC Sealer for gap-free seal.",
    refs: []
  },
  {
    id: "guttacore", name: "GuttaCore", mfr: "Dentsply Sirona", cat: "Carrier — Cross-Linked GP",
    composition: "Cross-linked gutta-percha core on flexible carrier. Alpha-phase GP surrounds the carrier for thermoplastic adaptation.",
    notes: "Carrier-based obturation: heat in ThermaPrep 2 oven (auto-selects temp/time per file size) → insert heated obturator to working length in single continuous motion → sear off handle at orifice with hot instrument.\n\nWaveOne Gold-matched sizes available. Advantages: 3D fill, fast, predictable, excellent lateral canal adaptation.\n\nDisadvantages: post space preparation can displace carrier, retreatment more difficult than cold GP (carrier must be bypassed or removed).\n\nGuttaCore replaced Thermafil (legacy plastic carrier) — cross-linked GP carrier is retreatable with rotary files and heat.",
    refs: []
  },
  {
    id: "warm-vertical", name: "Warm Vertical Condensation (WVC)", mfr: "System B/Elements (Kerr) + Obtura III (Obtura Spartan)", cat: "Obturation — Technique",
    composition: "Continuous wave technique. Down-pack: heat plugger (System B or Elements) + master GP cone + sealer. Back-fill: GP gun (Obtura III or equivalent) for incremental warm GP injection.",
    notes: "Gold standard for 3D obturation per evidence — but technique-sensitive.\n\nDown-pack (System B/Elements): 200°C standard (adjustable 160–250°C). Touch-and-melt: activated heat plugger moved apically through GP. Stop 4–5mm from WL (apical plug). Sustained heat burst → sustained pressure → cold plugger for final apical condensation.\n\nBack-fill (Obtura III): inject heated GP (160–200°C) in 2–3mm increments. Condense each increment with cold plugger. Fill to orifice level.\n\nWith BC Sealer HiFlow: per Buchanan, downpack distance can be shortened (sealer's net expansion compensates) — simplified CW technique.",
    refs: ["buchanan-hiflow"]
  },
  {
    id: "guttaflow-2", name: "GuttaFlow 2", mfr: "Coltene", cat: "Obturation — Silicone-Based Sealer+GP",
    composition: "Gutta-percha powder (<30 μm) + polydimethylsiloxane (silicone) + platinum catalyst + zirconium dioxide + micro-silver.",
    notes: "Cold obturation system — sealer + GP powder combined in one product. Automix capsule delivery, room temperature, no heating required.\n\nBiocompatibility: higher than AH Plus per multiple PMC studies.\n\n⚠ LIMITATIONS:\n• NO bioactivity — GuttaFlow 2 showed no apatite-forming ability per FTIR study\n• NOT bondable to dentin (silicone-based = no chemical adhesion)\n• Retreatment: silicone dissolves poorly in solvents (harder than GP+AH Plus)\n• Cannot use with warm obturation (silicone degrades with heat)\n• Limited long-term outcome data vs AH Plus (decades of evidence)\n\nGuttaFlow Bioseal: adds bioactive glass ceramic (calcium silicate) to GuttaFlow 2 formula. Less leakage than AH Plus in single-cone per PMC7527971. Still silicone-based with same retreatment concerns.",
    refs: ["pmc5527214", "pmc7527971"]
  },
];

// ═══════════════════════════════════════════════
// 8. SEALERS
// ═══════════════════════════════════════════════
export const SEALERS = [
  {
    id: "bc-sealer", name: "EndoSequence BC Sealer", mfr: "Brasseler USA", cat: "Sealer — Bioceramic (Cold)",
    composition: "Calcium silicates, calcium phosphate monobasic, calcium hydroxide, zirconium oxide, tantalum oxide, thickening agents. Pre-mixed injectable bioceramic.",
    settingTime: "4 hours (per IFU). In very dry canals: >10 hours. Working time >4 hours.",
    ph: "12+ initially (antibacterial — kills E. faecalis within 2 min per study)",
    notes: "THE bioceramic sealer standard. Pre-mixed, no mixing. Hydrophilic — sets via moisture from dentinal tubules. Zero shrinkage (slight expansion ~0.2%). Nano-particle size = excellent flow into canal anatomy.\n\nSingle-cone technique: matched GP cone + BC Sealer = simplified obturation. BC Points (bioceramic-coated GP) recommended for optimal bond.\n\n50+ million cases worldwide since 2008. 74+ published studies.\n\n⚠ CANNOT be removed once set — retreatment with bioceramic sealer is extremely difficult. This is the fundamental trade-off vs resin sealers.\n\nAlso known as: iRoot SP (Canada), TotalFill BC Sealer (FKG).",
    warmCompat: false,
    refs: ["brasseler-bc-ifu"]
  },
  {
    id: "bc-sealer-hiflow", name: "EndoSequence BC Sealer HiFlow", mfr: "Brasseler USA", cat: "Sealer — Bioceramic (Warm)",
    composition: "Chemically IDENTICAL to BC Sealer MINUS the thickening agent. 20% more radiopaque (more ZrO₂). Heat-resistant to 220°C.",
    settingTime: "Similar to BC Sealer (~4 hr) — may set faster under heat per PMC studies.",
    notes: "Designed specifically for WARM obturation techniques. Lower viscosity when heated → better flow under continuous wave or warm vertical condensation.\n\nUse with: BC Points 150 Series + BC Pellets at 150–220°C.\n\nPer Buchanan CE: 'chemically identical to BC Sealer — differences are heat resistance to 220°C and 20% greater radiopacity.' Shortens required CW downpack distance because sealer's net expansion fills gaps that GP condensation previously needed to reach.\n\nAlso known as: TotalFill BC Sealer HiFlow (FKG).",
    warmCompat: true,
    refs: ["buchanan-hiflow", "brasseler-bc-ifu"]
  },
  {
    id: "ah-plus", name: "AH Plus / AH Plus Ribbon", mfr: "Dentsply Sirona", cat: "Sealer — Epoxy-Amine Resin",
    composition: "AH Plus: epoxy-amine resin (2-paste system). AH Plus Ribbon (2025): improved paste consistency + adhesion to GP. Both are RESIN sealers, NOT bioceramic.",
    settingTime: "~8 hours",
    notes: "Gold standard RESIN sealer — 30+ years of clinical data. The benchmark against which all sealers are compared.\n\nExcellent dimensional stability. Retreatable: dissolves in chloroform/solvents (major advantage over bioceramic sealers). Compatible with ALL obturation techniques (warm, cold, carrier).\n\n⚠ Releases formaldehyde during setting (controversial — within safe limits per studies but theoretically undesirable).\n⚠ AH Plus Bioceramic (separate product): is a BIOCERAMIC sealer from DS, NOT the same as resin AH Plus. Set time 2–4 hr, 25% more radiopaque than BC Sealer, bismuth-free.\n\nAH Plus Ribbon (Oct 2025): newest resin formulation — improved flowability + GP adhesion. Still epoxy-amine resin, not bioceramic.\n\nProRoot Bio Sealer (Oct 2025): DS's NEW bioceramic sealer entry — calcium silicate-based, higher bioactive cement content, non-staining, retreatable, compatible with cold/warm/carrier.",
    warmCompat: true,
    refs: ["ds-ribbon-2025"]
  },
  {
    id: "edge-utopia-sealer", name: "EdgeUtopia Bioceramic Sealer", mfr: "EdgeEndo", cat: "Sealer — Bioceramic (Cold+Warm)",
    composition: "Pre-mixed calcium silicate bioceramic. Small average particle size. 2g syringe with 20 disposable tips.",
    settingTime: "2–4 hours",
    ph: "12.5 (antibacterial)",
    notes: "EdgeEndo's bioceramic sealer. Ready-to-use, no mixing. Thin film thickness, excellent flow. Hydrophilic — sets in moist environment. Zero shrinkage at setting.\n\nCan be used with BOTH warm-vertical and single-cone techniques.\n\nEdgeBioCeramic ThermalFlow: EdgeEndo's warm-optimized variant (= BC Sealer HiFlow analog). Lower viscosity for warm obturation techniques.",
    warmCompat: true,
    refs: []
  },
  {
    id: "znoe-sealer", name: "ZnOE Sealers (Eugenol-Based)", mfr: "Multiple (Kerr, SybronEndo)", cat: "Sealer — Zinc Oxide Eugenol",
    composition: "Zinc oxide + eugenol + various additions. Products: Grossman's Sealer, Roth's Sealer, Tubli-Seal, Pulp Canal Sealer (Kerr).",
    notes: "Traditional sealer category. Slow-setting, good lubrication, antibacterial (eugenol). Advantage: resorbable if extruded beyond apex — body clears excess material.\n\n⚠ Eugenol INHIBITS resin polymerization — if post/core is planned with resin cement, eugenol sealer may compromise the post cementation bond. AVOID in teeth planned for resin-cemented fiber posts.\n\nStill widely used with adequate clinical outcomes over decades. Declining in favor of bioceramic sealers for new cases.",
    warmCompat: true,
    refs: []
  },
];

// ═══════════════════════════════════════════════
// ASSEMBLED EXPORT
// ═══════════════════════════════════════════════
export const ALL_ENDO = [
  ...ACCESS_BURS,
  ...HAND_FILES,
  ...GLIDE_PATH,
  ...ROTARY_RECIP,
  ...IRRIGANTS,
  ...BIOCERAMICS,
  ...OBTURATION,
  ...SEALERS,
];
