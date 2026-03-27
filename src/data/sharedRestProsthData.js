// ═══════════════════════════════════════════════════════════════════
// SHARED RESTORATIVE + PROSTH DATA
// Citations, color system, group classifier, shared product arrays
// ═══════════════════════════════════════════════════════════════════

export const EG = {
  IFU: { label: "IFU", color: "#3b82f6", bg: "#1e3a5f", desc: "Manufacturer IFU" },
  STRONG: { label: "Strong", color: "#10b981", bg: "#064e3b", desc: "Multiple RCTs / meta-analyses" },
  MODERATE: { label: "Mod", color: "#f59e0b", bg: "#78350f", desc: "Limited trials / systematic reviews" },
  CONSENSUS: { label: "Cons", color: "#a78bfa", bg: "#3b1f6e", desc: "Expert consensus" },
  EMERGING: { label: "New", color: "#f472b6", bg: "#831843", desc: "Preliminary research" },
  CONFLICT: { label: "IFU≠Ev", color: "#ef4444", bg: "#7f1d1d", desc: "Evidence contradicts IFU" },
};

export const CURE_INFO = {
  standard: "Wavelength: 430–480 nm (camphorquinone peak ~468 nm). Minimum irradiance: 800 mW/cm². Ideal: ≥1000 mW/cm². Verify radiometer annually.",
  polywave: "Some materials use alternative initiators (TPO, Ivocerin) requiring 380–420 nm range. Polywave LEDs (e.g., Bluephase, VALO) recommended for broad-spectrum curing.",
};

export const ISOLATION = {
  rubberDam: "Gold standard. Required for all adhesive bonding where possible. Provides absolute moisture control and retraction.",
  isolite: "Isolite/Isodry/Mr. Thirsty: Acceptable for posterior composites, IDS, DME. Provides relative isolation + light + retraction + suction. Not equivalent to rubber dam for veneers/critical esthetics.",
  cottonRoll: "Cotton roll + high-volume suction + DryTips: Minimum acceptable for bonding. Requires vigilant moisture management. Not recommended for critical adhesive procedures.",
  evidence: "Systematic reviews show rubber dam isolation significantly improves longevity of adhesive restorations. Relative isolation (Isolite) is acceptable for routine posterior work but rubber dam preferred for anterior veneers, IDS, and complex bonded ceramics.",
};

export const APA_INTRAORAL = {
  ids: "For IDS/resin coat: intraoral APA (27–50 μm Al₂O₃) used DRY to roughen existing resin coat before impression/cementation. Wet APA not indicated intraorally — water interferes with particle abrasion and creates slurry.",
  core: "For core build-up surfaces: dry APA 50 μm acceptable intraorally to roughen composite core before impression. Protect adjacent teeth/soft tissue with Teflon tape or rubber dam.",
  extraoral: "All CAD/CAM restoration surface treatment is done EXTRAORALLY. Never sandblast ceramics intraorally.",
};

export const CIT = {
  "shen-2004": { pmid: "15182161", title: "Silane stability: 2-bottle vs pre-hydrolyzed single-bottle", authors: "Shen C, et al.", journal: "J Prosthet Dent", year: 2004, grade: "STRONG" },
  "lung-2012": { pmid: "22192253", title: "Silane coupling agents and surface conditioning: Overview", authors: "Lung CYK, Matinlinna JP", journal: "Dent Mater", year: 2012, grade: "STRONG" },
  "hooshmand-2004": { pmid: "15533457", title: "Silane + heat on shear bond strength", authors: "Hooshmand T, et al.", journal: "J Prosthodont", year: 2004, grade: "STRONG" },
  "takahashi-2021": { pmid: "33849770", title: "Pre-hydrolyzed silane aging on bond to LS₂", authors: "Takahashi A, et al.", journal: "Dent Mater J", year: 2021, grade: "STRONG" },
  "barghi-2000": { pmid: "11199559", title: "Air-drying and heat treatment of silane on bond", authors: "Barghi N", journal: "J Oral Rehabil", year: 2000, grade: "STRONG" },
  "sattabanasuk-2016": { pmid: "27187830", title: "Silane film thickness on resin-ceramic bond", authors: "Sattabanasuk V, et al.", journal: "Dent Mater", year: 2016, grade: "STRONG" },
  "matinlinna-2018": { pmid: "29397094", title: "Silane coupling agents in dental materials: Review", authors: "Matinlinna JP, et al.", journal: "Chin J Dent Res", year: 2018, grade: "STRONG" },
  "ozcan-2015-hf": { pmid: "25765377", title: "HF concentration on bonding to LS₂", authors: "Ozcan M, et al.", journal: "J Adhes Dent", year: 2015, grade: "STRONG" },
  "sundfeld-2018": { pmid: "29352880", title: "HF etch time on leucite ceramic bond", authors: "Sundfeld Neto D", journal: "Oper Dent", year: 2018, grade: "STRONG" },
  "neis-2015": { pmid: "25625264", title: "Surface treatments for glass ceramic repair", authors: "Neis CA, et al.", journal: "Oper Dent", year: 2015, grade: "STRONG" },
  "brentel-2007": { pmid: "17403766", title: "Residual HF on bond to leucite ceramic", authors: "Brentel AS, et al.", journal: "J Adhes Dent", year: 2007, grade: "STRONG" },
  "ozcan-2013": { pmid: "23188834", title: "Bond to air-abraded vs HF-treated RNC", authors: "Ozcan M, et al.", journal: "J Adhes Dent", year: 2013, grade: "STRONG" },
  "elsaka-2014": { pmid: "25411847", title: "Bond of resin CAD/CAM with different treatments", authors: "Elsaka SE", journal: "J Prosthodont", year: 2014, grade: "STRONG" },
  "ozcan-2015-mdp": { pmid: "25843258", title: "MDP primers on bond to zirconia", authors: "Ozcan M, Bernasconi M", journal: "J Adhes Dent", year: 2015, grade: "STRONG" },
  "yang-2010": { pmid: "20648250", title: "10-MDP on bond to zirconia after sandblasting", authors: "Yang B, et al.", journal: "Dent Mater", year: 2010, grade: "STRONG" },
  "kern-2015": { pmid: "26563238", title: "Bonding to oxide ceramics: Lab vs clinical", authors: "Kern M", journal: "Dent Mater", year: 2015, grade: "STRONG" },
  "ozcan-2019": { pmid: "30648958", title: "Surface conditioning and bond to PICN", authors: "Ozcan M, et al.", journal: "J Mech Behav Biomed", year: 2019, grade: "STRONG" },
  "perdigao-2020": { pmid: "31843019", title: "Current perspectives: Universal adhesives", authors: "Perdigao J, et al.", journal: "Jpn Dent Sci Rev", year: 2020, grade: "STRONG" },
  "peumans-2012": { pmid: "22192253", title: "Clinical effectiveness of adhesives for bonded ceramics", authors: "Peumans M, et al.", journal: "Dent Mater", year: 2012, grade: "STRONG" },
  "suh-2003": { pmid: "14520192", title: "DC cements with self-etching adhesives", authors: "Suh BI, et al.", journal: "J Esthet Restor Dent", year: 2003, grade: "STRONG" },
  "vanmeerbeek-2020": { pmid: "31980327", title: "Selective enamel etching: Meta-analysis", authors: "Van Meerbeek B, et al.", journal: "Dent Mater", year: 2020, grade: "STRONG" },
  "imazato-2010": { pmid: "20018720", title: "Antibacterial MDPB in self-etch adhesive", authors: "Imazato S, et al.", journal: "J Dent", year: 2010, grade: "MODERATE" },
  "daronch-2005": { pmid: "16153142", title: "Pre-heating on composite properties", authors: "Daronch M, et al.", journal: "J Dent Res", year: 2005, grade: "MODERATE" },
  "lohbauer-2009": { pmid: "19288024", title: "Heated composite cementation", authors: "Lohbauer U, et al.", journal: "Oper Dent", year: 2009, grade: "MODERATE" },
  "quun-2020": { pmid: "32012527", title: "Cleaning methods after saliva contamination", authors: "Quun L, et al.", journal: "J Prosthodont", year: 2020, grade: "MODERATE" },
  "al-hamdan-2019": { pmid: "31213517", title: "Er:YAG laser on glass ceramics: Systematic review", authors: "Al-Hamdan RS", journal: "Lasers Med Sci", year: 2019, grade: "EMERGING" },
  "elsaka-2016": { pmid: "26892037", title: "Bond of ZLS to resin composite", authors: "Elsaka SE, Elnaghy AM", journal: "Dent Mater", year: 2016, grade: "MODERATE" },
  "ellingsen-2021": { pmid: "33521154", title: "Bond of CAD/CAM to titanium bases", authors: "Ellingsen LA, et al.", journal: "J Prosthet Dent", year: 2021, grade: "MODERATE" },
  "graf-2022": { pmid: "34862055", title: "Ti-base cementation: Systematic review", authors: "Graf T, et al.", journal: "Int J Prosthodont", year: 2022, grade: "STRONG" },
  "abed-2015": { pmid: "25882878", title: "Fracture resistance of CAD/CAM resin composites", authors: "Abed YA, et al.", journal: "Dent Mater", year: 2015, grade: "MODERATE" },
  "monticelli-2006": { pmid: "16698931", title: "Self-adhesive cements into dentin", authors: "Monticelli F, et al.", journal: "J Dent Res", year: 2006, grade: "STRONG" },
  // Gold/alloy
  "ozcan-2004-alloy": { pmid: "15357048", title: "Bond strength to noble alloys with alloy primers", authors: "Ozcan M, et al.", journal: "J Dent", year: 2004, grade: "STRONG" },
  "matsumura-2003": { pmid: "12665766", title: "Bonding to gold alloy with VBATDT primers", authors: "Matsumura H, et al.", journal: "J Dent Res", year: 2003, grade: "STRONG" },
  // Rubber dam / isolation
  "wang-2019-dam": { pmid: "31177642", title: "Rubber dam isolation on longevity of composite restorations", authors: "Wang Y, et al.", journal: "J Dent", year: 2019, grade: "STRONG" },
  // IFUs
  "ifu-emax": { pmid: null, title: "IPS e.max CAD IFU", authors: "Ivoclar", journal: "IFU", year: 2024, grade: "IFU" },
  "ifu-tetric": { pmid: null, title: "Tetric CAD IFU", authors: "Ivoclar", journal: "IFU", year: 2024, grade: "IFU" },
  "ifu-enamic": { pmid: null, title: "VITA ENAMIC IFU", authors: "VITA", journal: "IFU", year: 2023, grade: "IFU" },
  "ifu-tessera": { pmid: null, title: "Tessera IFU", authors: "Dentsply Sirona", journal: "IFU", year: 2024, grade: "IFU" },
  "ifu-empress": { pmid: null, title: "IPS Empress CAD IFU", authors: "Ivoclar", journal: "IFU", year: 2023, grade: "IFU" },
  "ifu-katana": { pmid: null, title: "Katana Zirconia ONE IFU", authors: "Kuraray", journal: "IFU", year: 2024, grade: "IFU" },
  "ifu-cercon": { pmid: null, title: "Cercon 4D IFU", authors: "Dentsply Sirona", journal: "IFU", year: 2024, grade: "IFU" },
  "ifu-zircad": { pmid: null, title: "IPS e.max ZirCAD Prime IFU", authors: "Ivoclar", journal: "IFU", year: 2024, grade: "IFU" },
  "ifu-lava": { pmid: null, title: "Lava Ultimate IFU", authors: "3M/Solventum", journal: "IFU", year: 2023, grade: "IFU" },
  "ifu-grandio": { pmid: null, title: "Grandio Blocs IFU", authors: "VOCO", journal: "IFU", year: 2023, grade: "IFU" },
  "ifu-cerasmart": { pmid: null, title: "Cerasmart IFU", authors: "GC", journal: "IFU", year: 2023, grade: "IFU" },
  "ifu-3mzr": { pmid: null, title: "3M Lava Plus Zirconia IFU", authors: "3M/Solventum", journal: "IFU", year: 2024, grade: "IFU" },
  "3m-lava-restrict": { pmid: null, title: "Lava Ultimate — crown restriction", authors: "3M ESPE", journal: "Tech Bulletin", year: 2015, grade: "IFU" },
};

export const SILANE_2B = {
  steps: ["Mix A+B at point of use", "Apply ONE thin coat", "React 60 sec", "AIR THIN aggressively 10–15 sec", "Optional: warm air ~60°C × 5 sec", "Verify: dry, tacky surface"],
  warn: "Excess = siloxane multilayer = WEAK BOUNDARY LAYER. Monolayer is the goal.",
  heat: "Heat (50–100°C) promotes condensation, drives off solvents → more durable bond.",
  products: "Bis-silane (Bisco) · Porcelain Primer (Bisco)",
  rationale: "Pre-hydrolyzed universal primers (Monobond Plus, Clearfil Ceramic Primer Plus) degrade in solution. Shelf life + open-bottle time directly affect bond. 2-bottle mixes fresh → hydrolytically stable γ-MPS → superior long-term durability.",
  refs: ["shen-2004", "lung-2012", "hooshmand-2004", "sattabanasuk-2016", "barghi-2000", "takahashi-2021"]
};

export const CC = {
  "Resin Nano-Ceramic (RNC)": { bg: "#0c2d3e", a: "#22d3ee", t: "#0e4457" },
  "Polymer-Infiltrated Ceramic (PICN)": { bg: "#1f1535", a: "#c084fc", t: "#2e1a5e" },
  "Nano-ceramic Hybrid (RNC)": { bg: "#0c2d3e", a: "#22d3ee", t: "#0e4457" },
  "Force-Absorbing Hybrid (RNC)": { bg: "#0c2d3e", a: "#22d3ee", t: "#0e4457" },
  "Advanced Lithium Disilicate (ZLS+)": { bg: "#2d0f1e", a: "#fb7185", t: "#4a1530" },
  "Lithium Disilicate (LS₂)": { bg: "#2d0f1e", a: "#fb7185", t: "#4a1530" },
  "Leucite Glass-Ceramic": { bg: "#2d1f0a", a: "#fbbf24", t: "#4a3510" },
  "Super-Translucent Zirconia (4Y-TZP STML)": { bg: "#0a1a2e", a: "#60a5fa", t: "#0f2a4a" },
  "Multilayered Zirconia (4Y/5Y-TZP)": { bg: "#0a1a2e", a: "#60a5fa", t: "#0f2a4a" },
  "Zirconia + Fusion Layer (4Y-TZP)": { bg: "#0a1a2e", a: "#60a5fa", t: "#0f2a4a" },
  "High-Translucency Zirconia (3Y/5Y-TZP)": { bg: "#0a1a2e", a: "#60a5fa", t: "#0f2a4a" },
  "Titanium Implant Interface": { bg: "#1a1a14", a: "#a8a29e", t: "#2e2e22" },
  "Gold / Noble Alloy": { bg: "#2a2008", a: "#eab308", t: "#3d3010" },
  "Self-Adhesive Resin Cement": { bg: "#1a2210", a: "#84cc16", t: "#2e3d14" },
  "Dual-Cure Adhesive Resin Cement": { bg: "#1a2210", a: "#84cc16", t: "#2e3d14" },
  "Light-Cure Resin Cement": { bg: "#22160a", a: "#f97316", t: "#3d2510" },
  "Hybrid Abutment Resin Cement": { bg: "#1a1a14", a: "#a8a29e", t: "#2e2e22" },
  "Resin-Modified Glass Ionomer (RMGI)": { bg: "#0f1a22", a: "#38bdf8", t: "#142a3d" },
  "Heated Packable Composite (Off-Label Luting)": { bg: "#22160a", a: "#f97316", t: "#3d2510" },
  "Fiber-Reinforced Flowable Composite": { bg: "#1a1022", a: "#e879f9", t: "#2e1a3d" },
  "Universal Flowable Composite": { bg: "#1a1022", a: "#e879f9", t: "#2e1a3d" },
  "Packable/Universal Composite": { bg: "#1a1022", a: "#e879f9", t: "#2e1a3d" },
  "Bulk Fill Composite": { bg: "#1a1022", a: "#e879f9", t: "#2e1a3d" },
  "Dual-Cure Core Build-Up": { bg: "#1a1022", a: "#e879f9", t: "#2e1a3d" },
  "Total-Etch 3-Step Adhesive": { bg: "#0a1a1a", a: "#2dd4bf", t: "#0f2e2e" },
  "Self-Etch 2-Step Adhesive": { bg: "#0a1a1a", a: "#2dd4bf", t: "#0f2e2e" },
  "Universal Adhesive": { bg: "#0a1a1a", a: "#2dd4bf", t: "#0f2e2e" },
  // Polishing
  "Polishing — Diamond Impregnated": { bg: "#1a150e", a: "#d4a574", t: "#2e2214" },
  "Polishing — Aluminum Oxide Disc": { bg: "#1a150e", a: "#d4a574", t: "#2e2214" },
  "Polishing — Rubber/Silicone": { bg: "#1a150e", a: "#d4a574", t: "#2e2214" },
  "Polishing — Paste/Brush Finish": { bg: "#1a150e", a: "#d4a574", t: "#2e2214" },
  "Polishing — Stone/Abrasive": { bg: "#1a150e", a: "#d4a574", t: "#2e2214" },
  // Stain/Glaze
  "Stain/Glaze — Light-Cure": { bg: "#1e1028", a: "#c4b5fd", t: "#2e1a42" },
  "Stain/Glaze — Furnace-Fire": { bg: "#1e1028", a: "#c4b5fd", t: "#2e1a42" },
  "Stain/Glaze — Nano-Coat": { bg: "#1e1028", a: "#c4b5fd", t: "#2e1a42" },
  // Surface Treatments
  "Surface Treatment — Universal Primer (MDP + Silane)": { bg: "#0e1a1e", a: "#5eead4", t: "#134e4a" },
  "Surface Treatment — Universal Primer (Silane + MDP + Sulfide)": { bg: "#0e1a1e", a: "#5eead4", t: "#134e4a" },
  "Surface Treatment — Self-Etching Ceramic Primer": { bg: "#0e1a1e", a: "#5eead4", t: "#134e4a" },
  "Surface Treatment — Metal/Noble Alloy Primer": { bg: "#0e1a1e", a: "#5eead4", t: "#134e4a" },
  "Surface Treatment — Zirconia/Alumina Primer": { bg: "#0e1a1e", a: "#5eead4", t: "#134e4a" },
  "Surface Treatment — Ceramic Etchant": { bg: "#0e1a1e", a: "#5eead4", t: "#134e4a" },
  "Surface Treatment — Decontamination Agent": { bg: "#0e1a1e", a: "#5eead4", t: "#134e4a" },
  "Surface Treatment — Mechanical Surface Activation": { bg: "#0e1a1e", a: "#5eead4", t: "#134e4a" },
  // Post & Core
  "Post/Core — Cast Metal": { bg: "#1a1510", a: "#d4a574", t: "#2e2214" },
  "Post/Core — Fiber Reinforced": { bg: "#1a1510", a: "#d4a574", t: "#2e2214" },
  "Post/Core — Fiber Reinforcement": { bg: "#1a1510", a: "#d4a574", t: "#2e2214" },
  "Post/Core — DC Core Build-Up": { bg: "#1a1510", a: "#d4a574", t: "#2e2214" },
  "Post/Core — LC Bulk Fill Core": { bg: "#1a1510", a: "#d4a574", t: "#2e2214" },
  // Not Recommended Bonding
  "⚠ Not Recommended — 5th Gen Total-Etch": { bg: "#2a0a0a", a: "#f87171", t: "#450a0a" },
  "⚠ Not Recommended — Acetone-Based": { bg: "#2a0a0a", a: "#f87171", t: "#450a0a" },
  // Provisionals
  "Provisional — Bis-Acryl": { bg: "#1a2218", a: "#86efac", t: "#1e3a2a" },
  "Provisional — PMMA (Milled)": { bg: "#1a2218", a: "#86efac", t: "#1e3a2a" },
  "Provisional — PMMA (Printed)": { bg: "#1a2218", a: "#86efac", t: "#1e3a2a" },
  "Provisional — Polycarbonate Shell": { bg: "#1a2218", a: "#86efac", t: "#1e3a2a" },
  "Temporary Cement": { bg: "#1a2218", a: "#86efac", t: "#1e3a2a" },
};
export const gc = c => CC[c] || { bg: "#111827", a: "#6b7280", t: "#1f2937" };

export const getGroup = c => {
  if (c.includes("RNC") || c.includes("PICN") || (c.includes("Hybrid") && !c.includes("Abutment"))) return "Restorative Blocks";
  if (c.includes("Lithium") || c.includes("ZLS") || c.includes("Leucite")) return "Glass-Ceramics";
  if (c.includes("Zirconia") || c.includes("TZP") || c.includes("Fusion")) return "Zirconia";
  if (c.includes("Titanium")) return "Ti-Base";
  if (c.includes("Gold") || c.includes("Noble")) return "Gold / Metal";
  if (c.includes("Temporary Cement")) return "Provisional Materials";
  if (c.includes("Cement") || c.includes("RMGI") || c.includes("Off-Label Luting") || c.includes("Abutment Resin")) return "Cements";
  if (c.includes("Flowable") || c.includes("Packable") || c.includes("Bulk Fill") || c.includes("Core Build") || c.includes("Fiber-Reinforced")) return "Composites";
  if (c.includes("Adhesive") || c.includes("adhesive")) return "Bonding Agents";
  if (c.includes("Polishing")) return "Polishing Systems";
  if (c.includes("Stain") || c.includes("Glaze") || c.includes("Nano-Coat")) return "Stain / Glaze Systems";
  if (c.includes("Surface Treatment")) return "Surface Treatments";
  if (c.includes("Post/Core")) return "Post & Core";
  if (c.includes("Not Recommended")) return "Bonding Agents";
  if (c.includes("Provisional") || c.includes("PMMA")) return "Provisional Materials";
  return "Other";
};

export const GROUPS = ["Restorative Blocks", "Glass-Ceramics", "Zirconia", "Ti-Base", "Gold / Metal", "Cements", "Composites", "Post & Core", "Bonding Agents", "Surface Treatments", "Polishing Systems", "Stain / Glaze Systems", "Provisional Materials"];

// ═══ SHARED PRODUCT ARRAYS (used by both Restorative and Prosth) ═══

export const CEMENTS = [
  { id: "panavia-sa", name: "Panavia SA Cement Universal", mfr: "Kuraray", cat: "Self-Adhesive Resin Cement", cureType: "Dual-cure", composition: "MDP-containing SA resin cement. 10-MDP → zirconia/metal.", strength: "Film: 22 μm", indications: ["Zirconia","Metal/PFM","Fiber posts","Inlays (retentive)"], notes: "MDP = best SA cement for zirconia. No tooth adhesive needed. Sel etch enamel STILL recommended.",
    steps: ["Clean restoration: sandblast + primer (MDP for Zr, silane for glass-ceramic)","Sel etch enamel margins 15s → rinse → blot (recommended)","Apply to restoration intaglio","Seat firmly","Tack cure 2–3s/margin → gel cleanup","Full cure 20s/surface. Self-cure 4–5 min where light can't reach"], workTime: "2:30", setTime: "4:30 SC / 20s LC", cleanup: "Gel phase cleanup. Much easier than full set.",
    compat: { excellent: ["Zirconia (MDP bond)","Metal/PFM","Fiber posts"], good: ["RNC (with primer)"], avoid: ["Veneers","Empress/leucite"] },
    adhesiveNeeded: "NO tooth adhesive. Sel etch enamel recommended.", restorationPrep: "ALWAYS prime restoration. Self-adhesive = tooth side only.",
    dcNote: "Inherently DC. No activator.", special: "Per Kuraray IFU: MDP monomer provides chemical bond to ZrO₂, tooth hydroxyapatite, and metal oxides — making this the gold-standard self-adhesive cement for zirconia restorations. MDP creates a stable nanolayer at the zirconia interface that resists hydrolytic degradation (Yoshida et al., J Dent Res 2012). For glass-ceramics: SA cementation is acceptable per IFU for retentive preps, but adhesive cementation (HF etch + silane + adhesive resin cement) still produces significantly stronger bond to glass-ceramic surface. Clinical decision: if the prep is retentive and the material is ≥530 MPa, Panavia SA is fully adequate and dramatically faster. If the restoration relies on bond for retention (veneer, non-retentive prep, low-strength ceramic): switch to Panavia V5 adhesive protocol.", refs: ["ozcan-2015-mdp","kern-2015"] },
  { id: "variolink-dc", name: "Variolink Esthetic DC", mfr: "Ivoclar", cat: "Dual-Cure Adhesive Resin Cement", cureType: "Dual-cure", composition: "Bis-GMA/UDMA DC cement. No MDP. Requires tooth adhesive.", strength: "Film: 28 μm", indications: ["LS₂ crowns/FPDs","Glass-ceramics","PICN","RNC crowns"], notes: "Ivoclar system. Shade-matched (Warm/Neutral/Cool).",
    steps: ["Prep restoration: HF or sandblast → 2-bottle silane → air thin","Prep tooth: sel etch → Adhese Universal + DC ACTIVATOR 1:1 → scrub 20s → cure","⚠ DC ACTIVATOR MANDATORY or cement WON'T self-cure","Apply to restoration intaglio → seat → tack cure → gel cleanup","Full cure 20s/surface","Liquid Strip on margins → final cure"], workTime: "3:00", setTime: "6:00 SC / 20s LC", cleanup: "Tack cure → gel cleanup → Liquid Strip (glycerin) on margins.",
    compat: { excellent: ["LS₂","Leucite","PICN"], good: ["RNC","Zirconia (with MDP primer)"], avoid: ["Without DC activator","Without tooth adhesive"] },
    adhesiveNeeded: "YES. Adhese Universal + DC Activator, or OptiBond FL.", restorationPrep: "HF + 2-bottle silane (glass-ceramic). Sandblast + silane (RNC). MDP (Zr).",
    dcNote: "⚠ Adhese Universal MUST mix with DC Activator 1:1. #1 failure with this system. OptiBond FL inherently DC.", special: "Per Ivoclar IFU: use Adhese Universal + DC Activator on tooth side, Monobond Plus (or Monobond Etch & Prime) on restoration side. Evidence supports 2-bottle silane (separate silane + separate adhesive) over pre-hydrolyzed universal primers (Monobond Plus contains silane + MDP + phosphoric acid ester in one bottle — convenient but potentially less stable long-term). The 2-bottle approach: Clearfil Ceramic Primer Plus or equivalent → separate adhesive = discrete coupling agent layer. For veneers: LC mode preferred (Variolink Esthetic LC) — DC yellowing artifact visible in thin translucent ceramics. If DC required for opacity: accept slight warm shift. Ivoclar's Cementation Navigation System helps match cement to indication.", refs: ["ifu-emax","suh-2003"] },
  { id: "nx3-lc", name: "NX3 Nexus LC", mfr: "Kerr", cat: "Light-Cure Resin Cement", cureType: "Light-cure only", composition: "Bis-GMA/TEGDMA LC cement. No chemical cure.", strength: "Film: 15 μm (thinnest)", indications: ["Porcelain veneers","Thin inlays (<1.5mm)"], notes: "LC only = unlimited working time. Best for veneers. NOT for crowns >1.5mm. Best color stability (no amine yellowing).",
    steps: ["HF etch + 2-bottle silane → air thin","Tooth: sel etch + OptiBond FL","Apply thin layer to restoration intaglio","Seat gently","UNLIMITED time to verify position/margins","Remove ALL excess before curing","Cure 40s facial, 20s lingual, 20s each proximal","Glycerin on margins → final cure 10s"], workTime: "Unlimited", setTime: "40s LC. NO self-cure.", cleanup: "Pre-cure cleanup — major advantage.",
    compat: { excellent: ["Porcelain veneers","Thin LS₂ veneers"], good: ["Thin PICN/RNC"], avoid: ["Full crowns","Opaque (Zr/PFM)",">1.5mm"] },
    adhesiveNeeded: "YES. LC adhesive fine.", restorationPrep: "HF + 2-bottle silane.", dcNote: "NO self-cure. If light can't reach it → stays uncured.", special: "Per Kerr IFU: light-cure only resin cement, amine-free for color stability — ideal for thin translucent veneers where DC yellowing is unacceptable. Gold standard veneer cementation protocol: OptiBond FL (3-step etch-and-rinse, filled adhesive, inherently DC) + NX3 LC = maximum bond + zero amine yellowing + color-stable cement line. The LC-only formulation means no self-cure component = zero redox initiator yellowing over time. Trade-off: LC-only requires light transmission — do NOT use for opaque or thick restorations. For opaque cores: switch to NX3 DC. Try-in pastes available for shade simulation before permanent cementation. The OptiBond FL + NX3 LC combination has the longest veneer cementation track record in peer-reviewed literature.", refs: [] },
  { id: "relyx-unicem", name: "RelyX Unicem 2", mfr: "Solventum (3M)", cat: "Self-Adhesive Resin Cement", cureType: "Dual-cure", composition: "Phosphoric acid methacrylate SA. No MDP.", strength: "Film: 20 μm", indications: ["Metal/PFM","Zirconia (retentive)","Fiber posts"], notes: "Workhorse SA. No MDP — inferior to Panavia SA for zirconia. OK for retentive preps.",
    steps: ["Sandblast + primer per material","Optional sel etch enamel margins","Apply to intaglio → seat firmly 3+ min","Remove excess → cure 20s/surface"], workTime: "2:00", setTime: "6:00 SC / 20s LC", cleanup: "Remove gross excess before/after tack.",
    compat: { excellent: ["Metal/PFM","Fiber posts"], good: ["Zirconia retentive (Panavia SA better)"], avoid: ["Veneers","Non-retentive preps"] },
    adhesiveNeeded: "NO. Sel etch improves seal.", restorationPrep: "Always prime. MDP for Zr, silane for glass-ceramic.", dcNote: "Inherently DC.", special: "Per 3M/Solventum IFU: self-adhesive resin cement — no separate bonding agent or primer. Contains methacrylated phosphoric acid ester for self-etching. No MDP = inferior zirconia bond compared to Panavia SA or Panavia V5. On zirconia: relies on micro-mechanical retention from prep geometry + weaker phosphate ester bond. For retentive zirconia preps: adequate. For short preps, tapered preps, or adhesion-critical situations: switch to MDP-based SA cement. On glass-ceramics: adhesive cementation with HF etch + silane + resin cement still significantly outperforms any SA cement. RelyX Unicem 2's niche: maximum simplicity on retentive metal, PFM, or high-strength ceramic preps where the prep geometry does the heavy lifting.", refs: ["monticelli-2006"] },
  { id: "multilink-hb", name: "Multilink Hybrid Abutment", mfr: "Ivoclar", cat: "Hybrid Abutment Resin Cement", cureType: "DC (chemical dominant)", composition: "Dimethacrylate cement for Ti-base bonding. Chemical cure dominant.", strength: "Ti-ceramic optimized", indications: ["Ti-base → zirconia","Ti-base → LS₂","Ti-base → RNC"], notes: "PURPOSE-BUILT for ti-base. Chemical cure dominant (light can't reach Ti interface). BOTH surfaces primed.",
    steps: ["Sandblast Ti chimney 50μm 2.0 bar 15s","Ultrasonic isopropanol 3 min → steam","Prep suprastructure per material","Prime Ti: Monobond Plus (MDP) 60s → air thin","Prime suprastructure per material","Apply to BOTH surfaces","Seat firmly","Remove ALL excess — esp. implant connection","Cure accessible 20s + chemical ≥5 min","VERIFY connection clean"], workTime: "3:30", setTime: "5:00 SC + LC boost", cleanup: "METICULOUS connection cleanup. Loupes/microscope.",
    compat: { excellent: ["Ti → Zr","Ti → LS₂","Ti → RNC"], good: [], avoid: ["General cementation","Direct crown on teeth"] },
    adhesiveNeeded: "MDP on Ti. Appropriate primer on suprastructure.", restorationPrep: "BOTH surfaces.", dcNote: "Chemical primary. Light supplementary.", special: "Per Ivoclar IFU: self-curing resin cement for Ti-Base/hybrid abutment assembly. The #1 failure: residual cement in the implant connection bore or at the seating interface → cement debris creates micro-gap → screw loosening → bacterial ingress → peri-implant complications. Use magnification (loupes minimum) and verify ALL cement excess is removed from connection bore, internal hex/octagon, and margins. Extraoral cementation protocol: assemble crown to Ti-Base on bench → cement → clean all excess → verify with explorer under magnification → only then screw-retain into implant. The self-cure eliminates light-access concerns for opaque substructures. MDP-containing primer (Monobond Plus or Metal/Zirconia Primer) needed on Ti-Base surface before cementation. Torque to manufacturer specification — overtorque strips the screw, undertorque invites loosening.", refs: ["graf-2022","ellingsen-2021"] },
  { id: "relyx-luting", name: "RelyX Luting Plus", mfr: "Solventum (3M)", cat: "Resin-Modified Glass Ionomer (RMGI)", cureType: "GI + optional LC", composition: "Fluoroaluminosilicate glass + HEMA. Fluoride release.", strength: "Compressive: ~140 MPa", indications: ["PFM/Metal crowns (retentive)","Zirconia (highly retentive)","Pediatric","Fluoride needed"], notes: "NOT resin cement. Bonds via acid-base + HEMA. Fluoride. Moisture tolerant. Inferior bond to resin cements.",
    steps: ["Clean/dry tooth (moisture tolerant but excess water reduces bond)","No etch or adhesive needed","Mix capsule per IFU","Apply to intaglio → seat","Initial set ~3 min → remove excess","Optional: cure margins 20s","PROTECT from moisture 10 min"], workTime: "2:30", setTime: "4:30 initial. 24 hr maturation.", cleanup: "After initial set. Easier than resin. Protect from early moisture.",
    compat: { excellent: ["Metal retentive","PFM retentive"], good: ["Zirconia highly retentive","SS crowns"], avoid: ["Veneers","Non-retentive","Bonded ceramics","RNC/PICN"] },
    adhesiveNeeded: "NO. Direct acid-base bond.", restorationPrep: "Minimal. Sandblast recommended.", dcNote: "GI acid-base + resin LC. Light optional.", special: "Per 3M/Solventum IFU: resin-modified glass ionomer (RMGI) cement — fluoride release at crown margins + chemical bond to tooth structure + moisture tolerance (sets in damp field unlike resin cements). Use when: retentive prep geometry + desire for fluoride protection + challenging moisture control (subgingival margins, pediatric, geriatric). Early moisture contamination in first 10 min = #1 failure mode — RMGI is moisture-sensitive during initial set despite being more tolerant than resin cements. Do NOT use for non-retentive preps or adhesion-dependent restorations (veneers, onlays) — bond strength insufficient. Shear bond to zirconia is minimal without MDP primer — for zirconia, Panavia SA or V5 is strongly preferred. Best niche: retentive PFM or high-strength ceramic crowns where simplicity, fluoride, and moisture tolerance matter more than maximum bond strength.", refs: [] },
  { id: "panavia-v5", name: "Panavia V5", mfr: "Kuraray", cat: "Dual-Cure Adhesive Resin Cement", cureType: "Dual-cure", composition: "MDP-containing DC adhesive cement. Bonds to Zr, metal, AND tooth.", strength: "Film: 20 μm", indications: ["Zirconia (adhesive)","LS₂","All-ceramic","RNC","Metal","Posts"], notes: "MDP → bonds everything. Most complete adhesive system with Clearfil UBQ2 (inherently DC).",
    steps: ["Prep restoration: primer (Clearfil Ceramic Primer Plus or 2-bottle silane) → air thin","Sel etch enamel 15–30s → rinse → blot","Clearfil UBQ2: scrub 20s → air thin → cure 10s","⚠ UBQ2 inherently DC — NO activator needed","Apply Panavia V5 to intaglio → seat","Tack cure 3s/margin → gel cleanup","Full cure 20s/surface","Oxyguard on margins × 3 min → remove → polish"], workTime: "2:30", setTime: "5:00 SC / 20s LC", cleanup: "Gel cleanup → cure → oxyguard for marginal integrity.",
    compat: { excellent: ["Zirconia (MDP)","Metal/PFM","LS₂","RNC"], good: ["PICN","Posts","Leucite"], avoid: ["Veneers (use NX3 LC for working time)"] },
    adhesiveNeeded: "YES. Clearfil UBQ2 (inherently DC) or any DC-compatible adhesive.", restorationPrep: "Clearfil Ceramic Primer Plus or 2-bottle silane + MDP.",
    dcNote: "UBQ2 inherently DC — MAJOR advantage (no activator, no risk of forgetting).", special: "Per Kuraray IFU: most streamlined adhesive cementation system available. Contains MDP for zirconia/metal bond + inherently dual-cure (no separate DC activator needed, unlike Adhese Universal) + includes Oxyguard II for anaerobic cure of oxygen-inhibited margins. Tooth side: Clearfil Universal Bond Quick 2 (which is also inherently DC). Ceramic side: Clearfil Ceramic Primer Plus (2-bottle silane system) or Clearfil Universal Bond Quick 2. Entire system is MDP-based and DC-compatible without any extra activators or mixing steps. Evidence strongly supports MDP-based cements for long-term zirconia bond stability (Yoshida et al., J Dent Res 2012; Blatz et al., J Dent Res 2018). For glass-ceramics: HF etch → Clearfil Ceramic Primer Plus → Panavia V5 = comprehensive adhesive protocol. Oxyguard = mandatory for margin cure — oxygen inhibition layer prevents polymerization at cement margins without it.", refs: ["ozcan-2015-mdp","yang-2010","kern-2015"] },
  { id: "apx-heated", name: "Clearfil APX (Heated)", mfr: "Kuraray", cat: "Heated Packable Composite (Off-Label Luting)", cureType: "Light-cure only (heated)", composition: "85 wt% filled Bis-GMA/TEGDMA packable. Heated 55–68°C → flows like flowable.", strength: "Flex: 149 MPa. Wear > cements.", indications: ["Well-fitting inlays/onlays","RNC restorations","Marginal wear priority"], notes: "Off-label luting. At 55–68°C flows like flowable, sets with packable properties. Higher filler = better marginal wear. ~90 sec working window.",
    steps: ["Pre-heat Calset to 55–68°C (10+ min)","Prep restoration + tooth per standard protocol","Warm compule 2–3 min at temp","Remove — ~90 sec of flow","Express into intaglio (NOT tooth)","IMMEDIATELY seat — viscosity increases fast","Remove excess while warm","Cure 40s facial, 20s lingual, 20s proximal","Polish margins"], workTime: "~90 sec from warmer", setTime: "40s LC. No self-cure.", cleanup: "Remove while warm. After cooling = set composite. Margins are polishable.",
    compat: { excellent: ["Well-fitting RNC inlays/onlays","Thin glass-ceramic inlays"], good: ["PICN"], avoid: ["Full crowns (no light)","Opaque (Zr/PFM)","Poor fit",">2mm"] },
    adhesiveNeeded: "YES. Standard adhesive protocol.", restorationPrep: "Standard per material.", dcNote: "LC ONLY. Must transmit light.", special: "Per Kuraray: Clearfil APX at 85 wt% filler is the most wear-resistant direct composite available. When heated to 55–68°C in a composite warmer (e.g., Calset): viscosity drops dramatically → flows like a luting agent while maintaining the 85 wt% filler load upon cure. Growing evidence supports heated composite as an off-label luting agent: superior marginal adaptation due to high filler content, polishable margins (unlike resin cement margins), and reduced polymerization shrinkage vs dedicated resin cements. Narrow working window from warmer: material stiffens rapidly as it cools — seat restoration within 60–90 sec of removal from warmer. Protocol: warm APX → inject/syringe into restoration → seat immediately → cure. Per IFU: indicated for direct posterior restorations. Heated luting use is OFF-LABEL but increasingly evidence-supported. Film thickness when heated approaches that of dedicated resin cements.", refs: ["daronch-2005","lohbauer-2009"] },
];

export const SURFACE_TREATMENTS = [
  { id: "clearfil-ceramic-primer-plus", name: "Clearfil Ceramic Primer Plus", mfr: "Kuraray Noritake", cat: "Surface Treatment — Universal Primer (MDP + Silane)",
    composition: "Single-component primer containing MDP monomer (10-methacryloyloxydecyl dihydrogen phosphate) + γ-MPS silane coupling agent in ethanol solvent. Water-free formulation for shelf stability.",
    indications: ["Zirconia priming (MDP component)","Glass-ceramic priming (silane component)","Composite/hybrid ceramic priming","Metal priming","Intraoral porcelain/composite repair priming"],
    notes: "Universal single-bottle primer for ALL indirect restoration substrates. The 'Plus' formulation has optimized chemical equilibrium between MDP and silane for better shelf life than original Clearfil Ceramic Primer. Pairs with Panavia V5 as the native Kuraray ecosystem.",
    steps: ["Pretreat restoration surface per substrate: HF etch (glass-ceramic) or sandblast (Zr/composite/metal)","Apply Clearfil Ceramic Primer Plus to adherent surface with applicator brush¹","Dry entire surface thoroughly with mild, oil-free airflow²","Proceed immediately to cementation (e.g., Panavia V5)","For intraoral repair: roughen surface → etch 5 sec (K-Etchant) → Ceramic Primer Plus → bonding agent → composite"],
    special: "¹Per Kuraray IFU: single coat, apply and dry — no wait time specified (unlike Monobond Plus 60-sec). The MDP monomer has 35+ years of evidence (Yoshida et al., J Dent Res 2012: MDP forms a stable self-assembled nanolayer on ZrO₂ that resists hydrolytic degradation). ²Ethanol-based solvent — store with cap closed to prevent evaporation. Requires refrigeration per original formulation, bring to room temperature before use. Per Dental Advisor: 96% of consultants would recommend; rated equal to or better than current silane by all evaluators (n=27 consultants, >240 restorations). Eliminates HF treatment per Kuraray IFU for simplified cementation — but evidence supports HF + separate silane for maximum glass-ceramic bond strength. The 2-bottle vs 1-bottle debate: Clearfil Ceramic Primer Plus is a single-bottle that contains both MDP and silane in chemical equilibrium, which is more stable than pre-hydrolyzed universal primers. However, for maximum bond to glass-ceramics: dedicated 2-bottle approach (HF etch + separate silane → separate adhesive) still outperforms any single-bottle solution long-term.", refs: [] },

  { id: "monobond-plus", name: "Monobond Plus", mfr: "Ivoclar", cat: "Surface Treatment — Universal Primer (Silane + MDP + Sulfide)",
    composition: "Alcohol solution of three functional methacrylates: silane methacrylate (for glass-ceramics/SiO₂), phosphoric acid methacrylate/MDP (for zirconia/oxide ceramics), and sulphide methacrylate (for precious metal alloys).",
    indications: ["Glass-ceramic priming (silane)","Zirconia/oxide ceramic priming (MDP)","Metal/alloy priming (sulphide)","Composite priming","Fiber-reinforced composite priming","Universal restoration surface conditioning"],
    notes: "Ivoclar's universal primer. Three functional monomers in one bottle = one product for every substrate. 60-second reaction time per IFU. No refrigeration needed. Pairs with Variolink Esthetic DC and Adhese Universal in the Ivoclar ecosystem.",
    steps: ["Pretreat restoration per substrate: HF 5% etch (glass-ceramic, 20 sec LS₂ / 60 sec feldspathic) or sandblast (Zr/metal/composite)","Rinse and dry","Apply Monobond Plus to entire adherent surface with applicator brush","Allow to react for 60 seconds (per IFU — do NOT skip this dwell time)¹","Disperse excess with strong air blast²","Surface remains active for ≥7 days per Ivoclar data (Monobond Plus, not Etch & Prime)","Proceed to cementation with Variolink Esthetic or Multilink Automix"],
    special: "¹The 60-second reaction time is mandatory per Ivoclar IFU — this is NOT just a drying step. The silane and MDP monomers need time to chemically bond to the substrate surface. Skipping or shortening this time reduces bond strength. ²Per Ivoclar IFU: disperse with 'a breath of strong air' — not a gentle puff. Must remove solvent completely. Shelf stability consideration: Monobond Plus contains pre-hydrolyzed silane in the same bottle as MDP — the 'chemical equilibrium' is maintained by the alcohol solvent, but once opened and exposed to humidity, hydrolysis begins. For maximum glass-ceramic bond longevity, evidence supports separate 2-bottle silane systems. Per Spear Education (Agarwal): after try-in, clean with Ivoclean or 37% H₃PO₄ before re-priming — saliva proteins reduce bond by ~50% if not removed. Do NOT use H₃PO₄ on zirconia. Per Ivoclar blog: silane-containing primers do NOT work on zirconia (no glass particles) — the MDP component handles zirconia adhesion.", refs: [] },

  { id: "monobond-etch-prime", name: "Monobond Etch & Prime", mfr: "Ivoclar", cat: "Surface Treatment — Self-Etching Ceramic Primer",
    composition: "Single-component: ammonium polyfluoride (etching agent) + silane methacrylate (coupling agent) in alcohol/water solvent. Etches AND silanizes glass-ceramic in ONE step.",
    indications: ["Glass-ceramic surface conditioning (e.max CAD, Empress CAD)","Alternative to HF acid + separate silane","Chairside efficiency where HF handling is undesirable"],
    notes: "⚠ For GLASS-CERAMICS only — does NOT work on zirconia (no etch-susceptible glass phase). Replaces the 2-step HF etch + silane with a single 20-sec application. Ammonium polyfluoride is safer than HF on skin contact per Ivoclar.",
    steps: ["Clean restoration intaglio surface","Apply Monobond Etch & Prime to intaglio surface with brush — rub for 20 seconds¹","Rinse thoroughly with water spray","Dry with oil-free air","Proceed immediately to cementation","⚠ Do NOT allow to contact outer/esthetic surface — cement will bond there","⚠ After try-in contamination: must re-apply (unlike Monobond Plus which stays active 7 days)"],
    special: "¹Per Ivoclar IFU: 20-second active rubbing application — the ammonium polyfluoride etches while the silane simultaneously bonds. This is NOT a passive dwell like Monobond Plus (60-sec sit). Etch mechanism: ammonium polyfluoride selectively dissolves glass phase, creating micromechanical retention similar to HF but with controlled etch depth. Per Spear (Agarwal): Monobond Etch & Prime can also serve as a post-try-in cleaning step — it cleans, etches, and primes in one application. Key limitation: Ivoclar has not tested how long the primed surface remains active (unlike Monobond Plus which is stable ≥7 days). So prime → cement immediately. The safety advantage over HF is genuine — ammonium polyfluoride causes only mild reversible irritation on skin contact vs HF's severe tissue destruction.", refs: [] },

  { id: "alloy-primer", name: "Alloy Primer (VBATDT)", mfr: "Kuraray Noritake", cat: "Surface Treatment — Metal/Noble Alloy Primer",
    composition: "VBATDT (6-(4-vinylbenzyl-n-propyl)amino-1,3,5-triazine-2,4-dithiol) + MDP in acetone solvent. VBATDT provides thiol-metal bond to noble metal oxides; MDP bonds to base metal oxides.",
    indications: ["Gold/noble alloy bonding (VBATDT component)","Base metal/non-precious alloy bonding (MDP component)","Ti-Base priming","Intraoral metal repair","Maryland bridge metal wing bonding"],
    notes: "The ONLY way to chemically bond to noble metals (gold, palladium, platinum). VBATDT creates thiol-metal bond that no other primer achieves on noble alloys. Essential for non-retentive gold restorations or Maryland bridges with metal wings.",
    steps: ["Sandblast metal surface: 50 μm Al₂O₃ at 1–2 bar","Clean: ultrasonic or steam","Apply Alloy Primer to sandblasted surface with applicator brush","Allow to dry (acetone evaporates rapidly)","Proceed immediately to adhesive resin cementation","⚠ Single coat, thin application — excess pools and weakens bond","⚠ Store at room temp, keep cap closed (acetone evaporates)"],
    special: "Per Kuraray: VBATDT is the critical functional monomer for noble metal adhesion. The thiol group (-SH) reacts with noble metal surfaces to form a chemical bond that cannot be achieved with MDP alone (MDP bonds to metal oxides, but noble metals form minimal oxide layers). For gold crowns on short preps: sandblast → Alloy Primer → Panavia V5 = maximum retention. For Ti-Base abutments: Alloy Primer provides chemical bond to titanium surface. The acetone solvent means this product evaporates very quickly — work fast, keep bottle capped. Clearfil Ceramic Primer Plus does NOT contain VBATDT — it cannot replace Alloy Primer for noble metal adhesion.", refs: [] },

  { id: "z-prime-plus", name: "Z-Prime Plus", mfr: "Bisco", cat: "Surface Treatment — Zirconia/Alumina Primer",
    composition: "MDP (10-methacryloyloxydecyl dihydrogen phosphate) + BPDM (biphenyl dimethacrylate) in ethanol solvent. Designed specifically for zirconia and alumina oxide ceramic priming.",
    indications: ["Zirconia priming before cementation","Alumina ceramic priming","Zirconia repair priming"],
    notes: "Bisco's dedicated zirconia primer. Contains MDP for chemical bond to ZrO₂. Unlike Clearfil Ceramic Primer Plus, does NOT contain silane — will not prime glass-ceramics. Zirconia-specific.",
    steps: ["Sandblast zirconia: 50 μm Al₂O₃ at 1–2 bar (verify per material IFU)","Apply Z-Prime Plus to sandblasted surface","Air dry thoroughly","Proceed to cementation — compatible with any methacrylate-based resin cement","For maximum bond: pair with Bisco Duo-Link or any DC resin cement"],
    special: "Z-Prime Plus is a dedicated zirconia primer — simpler formulation than universal primers. The focused MDP concentration may provide stronger zirconia-specific bond than universal primers that must balance silane/MDP/sulfide ratios. Per Bisco: does not require refrigeration. For practitioners who want ONE product for everything: use Clearfil Ceramic Primer Plus or Monobond Plus. For practitioners who want the strongest possible zirconia-specific bond: Z-Prime Plus + dedicated silane (for glass-ceramics separately) may outperform universal primers long-term.", refs: [] },

  { id: "hf-etchant", name: "HF Acid Etchants (5–9.5%)", mfr: "Various (Ivoclar, Bisco, Ultradent)", cat: "Surface Treatment — Ceramic Etchant",
    composition: "Hydrofluoric acid gel (5% standard, 9–9.5% aggressive). Selectively dissolves the glass phase of silica-based ceramics, creating micromechanical retention.",
    indications: ["Glass-ceramic surface etching (e.max, Empress, Vita Mark II, Tessera)","Creating micromechanical retention for adhesive cementation","⚠ NOT for zirconia (no glass phase to dissolve)","⚠ NOT for composite/RNC blocks (damages resin matrix)"],
    notes: "⚠ SERIOUS SAFETY HAZARD — HF causes severe burns and systemic toxicity. Never contact skin, eyes, or mucosa. Keep calcium gluconate gel in operatory. Etch times are MATERIAL-SPECIFIC and must be followed exactly — over-etching weakens the ceramic.",
    steps: ["SAFETY: gloves, eye protection, suction, extraoral application only","Etch times by material (per published protocols + IFUs):","  • Lithium disilicate (e.max CAD/Press): 5% HF, 20 seconds","  • Feldspathic (Vita Mark II): 5% HF, 60 seconds","  • Leucite (Empress CAD): 5% HF, 60 seconds","  • ZLS+ (Tessera): 5% HF, 20 seconds (verify current DS IFU)","Rinse thoroughly under running water into collection cup","Neutralize per IFU (some products include neutralizer)","Dry with oil-free air","IMMEDIATELY apply silane (Monobond Plus, Clearfil Ceramic Primer Plus, or dedicated silane)","⚠ NEVER etch twice — over-etching destroys microstructure and REDUCES bond strength","⚠ NEVER use on zirconia or composite/RNC"],
    special: "Per Compendium (Blatz & Conejo 2022): etchable ceramics require HF to achieve ideal surface roughness and micromechanical retention. Etch time determines outcome — too short = insufficient retention, too long = surface damage and reduced bond. Per Spear (Agarwal): lithium disilicate should NEVER be etched a second time with HF. 9–9.5% HF (e.g., Ultradent Porcelain Etch) etches faster — use extreme caution with timing, especially on LS₂. The alternative to HF is Monobond Etch & Prime (ammonium polyfluoride, safer on skin) — acceptable but HF + separate silane remains the gold standard for maximum bond. Calcium gluconate gel (2.5%) is the ONLY effective first aid for HF skin exposure — have it in the operatory before opening HF.", refs: [] },

  { id: "ivoclean", name: "Ivoclean", mfr: "Ivoclar", cat: "Surface Treatment — Decontamination Agent",
    composition: "Alkaline suspension of zirconium oxide particles in aqueous solution. Absorbs phosphate groups from salivary proteins and try-in paste residue via ZrO₂ particle affinity.",
    indications: ["Post-try-in restoration surface cleaning","Removing salivary/blood protein contamination","Removing glycerin-based try-in paste residue","Restoring bonding potential after intraoral try-in"],
    notes: "Purpose-built for ONE job: removing salivary proteins that contaminate etched/silanized ceramic surfaces during try-in. Salivary protein contamination reduces bond strength by ~50% per evidence. Ivoclean restores bonding potential without re-etching.",
    steps: ["After try-in: rinse restoration with water","Apply Ivoclean to contaminated intaglio surface with microbrush","Leave for 20 seconds","Rinse thoroughly with water","Dry with oil-free air","Re-apply Monobond Plus (60 sec) or Clearfil Ceramic Primer Plus","Proceed to cementation","Alternative decontamination: 37% H₃PO₄ for 30 sec (glass-ceramics ONLY — NOT zirconia)","Alternative for Kuraray users: scrub with Clearfil SE Protect primer (MDPB kills bacteria + cleans surface)"],
    special: "Per Spear Education: no cleaning or cleaning with 70% ethanol results in ~50% bond strength reduction after saliva contamination. 37% H₃PO₄ + re-silanization achieves near-original bond strength — comparable to Ivoclean + re-silanization. Critical: do NOT use H₃PO₄ on zirconia — phosphoric acid does not clean zirconia effectively and may interfere with MDP bonding. For zirconia after try-in: Ivoclean → MDP primer → cement. The ZrO₂ nanoparticles in Ivoclean preferentially adsorb phosphate-containing contaminants, mechanically lifting them off the restoration surface. Per Ivoclar blog: re-etching or re-sandblasting after try-in is NOT necessary and could damage the restoration — just clean (Ivoclean) and re-prime (Monobond Plus).", refs: [] },

  { id: "apa-protocol", name: "Airborne Particle Abrasion (APA)", mfr: "Various", cat: "Surface Treatment — Mechanical Surface Activation",
    composition: "Aluminum oxide (Al₂O₃) particles propelled by compressed air. Standard: 50 μm particles at 1–2 bar pressure. Alternative: 25–50 μm for delicate substrates. CoJet/Rocatec: SiO₂-coated Al₂O₃ for tribochemical silica coating.",
    indications: ["Zirconia surface roughening before priming","Composite/RNC intaglio roughening","Metal surface roughening before priming","Intraoral repair surface preparation","CoJet: creating silica layer on zirconia/metal for silane bonding"],
    notes: "⚠ INTRAORAL: DRY APA only. Wet APA is NOT indicated intraorally — water interferes with particle abrasion mechanics and creates visibility issues. EXTRAORAL: dry standard. For glass-ceramics: DO NOT sandblast — use HF etch instead (sandblasting creates subsurface damage in glass-ceramics).",
    steps: ["ZIRCONIA: 50 μm Al₂O₃, 1–2 bar, 10 mm distance, 10–15 sec per surface","COMPOSITE/RNC: 50 μm Al₂O₃, ≤2 bar (lower pressure — resin matrix is softer)","METAL: 50 μm Al₂O₃, 1–2 bar, 10–15 sec","⚠ GLASS-CERAMIC: DO NOT sandblast (use HF etch instead)","After APA: clean with ultrasonic (1 min) or steam","Apply appropriate primer immediately (MDP for Zr, silane for glass-ceramic, Alloy Primer for metal)","CoJet/TRIBOCHEMICAL: 30 μm SiO₂-coated Al₂O₃ → creates silica layer → silane can now bond to zirconia/metal"],
    special: "The debate: Does APA damage zirconia? Low-pressure APA (≤2 bar) with 50 μm particles creates beneficial surface roughening without clinically significant strength reduction per multiple studies (Blatz et al., J Dent Res 2018). High-pressure APA (>2.5 bar) or coarse particles (>110 μm) creates subsurface damage and phase transformation — avoid. Per Ivoclar IFU for e.max CAD: 'Do not blast IPS e.max CAD restorations with Al₂O₃ or glass polishing beads before cementation.' This is explicit — HF etch is the proper surface activation for glass-ceramics, NOT sandblasting. CoJet tribochemical silica coating: deposits SiO₂ onto non-silica surfaces (zirconia, metal) → silane can now bond chemically → creates a silane-bondable surface on materials that are normally silane-incompatible. This is the mechanism behind 'silane on zirconia' claims — it's not the silane bonding to zirconia, it's the silane bonding to the deposited silica layer.", refs: [] },
];

export const POLISHING = [
  { id: "dialite-zr", name: "Dialite ZR", mfr: "Brasseler", cat: "Polishing — Diamond Impregnated", composition: "Diamond-impregnated silicone, 2-step system engineered specifically for zirconia. Specific particle size and bonding matrix designed for ZrO₂ hardness.", strength: "N/A",
    indications: ["Zirconia post-sintering adjustment","Monolithic zirconia polish","Zirconia intraoral adjustment"],
    notes: "Zirconia-dedicated. 2-step: Medium → Fine. Evidence (Alder 2016, PMID 26618785) shows polished Zr achieves glaze-equivalent finish at 15,000 RPM.",
    steps: ["Adjust with fine diamond bur (≤40 μm) — NEVER carbide on zirconia","Step 1 (Medium): 5,000–7,000 RPM intraoral / 8,000–10,000 RPM extraoral, light pressure ~2 N","Step 2 (Fine): same RPM, light pressure, 30 sec per area","Water cooling intraorally (≥50 ml/min)","Verify: smooth, lustrous surface — mirror reflection = adequate","Optional: Dialite Extra-Oral Diamond Paste with felt for maximum gloss"],
    rpm: "IO: 5,000–7,000 · EO: 8,000–10,000", pressure: "~2 N (light — let diamonds work)", wet: "Wet intraoral. Dry acceptable extraoral.",
    substrates: { composite: false, glassCeramic: false, zirconia: true, pmma: false, metal: false, printedResin: false },
    special: "Study (Alder et al., J Prosthet Dent 2016, PMID 26618785): Both Dialite ZR and CeraMaster achieved glaze-equivalent roughness/gloss at 15,000 RPM. Though IFU says 5,000–7,000, evidence supports higher speeds for superior results. Never skip steps — each progressive step significantly improves outcome.", refs: [] },

  { id: "dialite-ld", name: "Dialite LD", mfr: "Brasseler", cat: "Polishing — Diamond Impregnated", composition: "Diamond-impregnated silicone, 2-step system engineered specifically for lithium disilicate. Different particle/matrix formulation than ZR variant.", strength: "N/A",
    indications: ["LS₂ post-crystallization adjustment","e.max CAD/Tessera polish","Lithium disilicate intraoral adjustment"],
    notes: "Lithium disilicate-dedicated. Substrate-specific formulation — do NOT use ZR variant on LS₂ or vice versa.",
    steps: ["Adjust with fine diamond bur","Step 1 (Medium): 5,000–7,000 RPM IO / 8,000–10,000 RPM EO, light pressure","Step 2 (Fine): same RPM, 30 sec per area","Water cooling intraorally","Optional: Dialite Extra-Oral Diamond Paste + Diamond Discs (911H series) for lab finish","Power: Brasseler Forza L50K lab motor with light pressure (per Brasseler)"],
    rpm: "IO: 5,000–7,000 · EO: 8,000–10,000", pressure: "Light", wet: "Wet intraoral.",
    substrates: { composite: false, glassCeramic: true, zirconia: false, pmma: false, metal: false, printedResin: false },
    special: "Brasseler makes substrate-specific systems for a reason — the diamond particle size and bonding matrix are optimized differently for LS₂ vs ZrO₂ vs feldspathic. Using the wrong system gives suboptimal results. Feather Lite variant (4,000–6,000 RPM IO) available for anatomy polishing in developmental grooves.", refs: [] },

  { id: "dialite-porcelain", name: "Dialite Porcelain", mfr: "Brasseler", cat: "Polishing — Diamond Impregnated", composition: "Diamond-impregnated silicone, 3-step system for feldspathic porcelain. Blue (coarse) → Pink (medium) → Gray (fine).", strength: "N/A",
    indications: ["Feldspathic porcelain adjustment","Leucite ceramic (Empress, Vita Mark II) polish","PFM porcelain adjustment"],
    notes: "3-step (unlike ZR/LD which are 2-step). The classic Dialite system. Blue/Pink/Gray color coding. Includes Feather Lite variant for anatomy.",
    steps: ["Adjust with fine diamond","Step 1 — BLUE (Coarse): adjusting and initial polish. IO: 5,000–7,000 RPM / EO: 8,000–10,000 RPM","Step 2 — PINK (Medium): pre-polish. Same RPM.","Step 3 — GRAY (Fine): final polish. Same RPM.","Feather Lite final polish: IO 4,000–6,000 RPM, FINAL POLISH 2,000–3,000 RPM","Feather Lite extraoral: 4,000–10,000 RPM, FINAL POLISH 2,000–5,000 RPM","Use ALL three steps in order for best results"],
    rpm: "IO: 5,000–7,000 · EO: 8,000–10,000 · Feather Lite final: 2,000–3,000 IO / 2,000–5,000 EO", pressure: "Light", wet: "Wet intraoral.",
    substrates: { composite: false, glassCeramic: true, zirconia: false, pmma: false, metal: false, printedResin: false },
    special: "The Feather Lite final polish speed (2,000–3,000 RPM intraoral) is notably slower than the standard polishing speed. This is a deliberate IFU specification — the flexible spiral lamelae work best at low speed to feather into developmental grooves and maintain surface anatomy differentiation. Autoclavable.", refs: [] },

  { id: "zilmaster", name: "ZiLMaster", mfr: "Shofu", cat: "Polishing — Diamond Impregnated", composition: "Diamond-impregnated silicone, 3-step system for zirconia AND lithium disilicate. Coarse (green band) → Medium (blue band) → Fine (yellow band).", strength: "N/A",
    indications: ["Zirconia CAD/CAM restorations","Lithium disilicate restorations","Lithium silicate (Tessera/Celtra) restorations"],
    notes: "Shofu's dedicated ceramic CAD/CAM polishing system. 3-step unlike Brasseler's 2-step ceramic systems. Color-banded shanks for identification. Works on BOTH Zr and LS₂.",
    steps: ["Step 1 — Coarse (GREEN band): finishing/pre-polish. Mounted: 10,000–15,000 RPM, max 20,000","Step 2 — Medium (BLUE band): polish. Same RPM.","Step 3 — Fine (YELLOW band): super-polish. Same RPM.","Unmounted wheels: 5,000–10,000 RPM, max 15,000","Contact pressure: 1.5 N","Water cooling intraorally (≥50 ml/min)","No polishing paste needed — diamond impregnated"],
    rpm: "Mounted: 10,000–15,000 (max 20,000) · Unmounted: 5,000–10,000 (max 15,000)", pressure: "1.5 N", wet: "Wet intraoral. Dry acceptable extraoral.",
    substrates: { composite: false, glassCeramic: true, zirconia: true, pmma: false, metal: false, printedResin: false },
    special: "Shofu categorizes their polishing line by substrate: ZiLMaster/CeraMaster = ceramics, Brownie/Greenie = metals. Do not interchange. Available in CA and HP shanks for both chairside and lab. Per manufacturer: all steps must be used sequentially for best results — skipping steps leaves surface defects.", refs: [] },

  { id: "ceramaster", name: "CeraMaster / CeraMaster Coarse", mfr: "Shofu", cat: "Polishing — Diamond Impregnated", composition: "100% diamond-impregnated polisher. CeraMaster Coarse (pre-polish) → CeraMaster (high-gloss). Designed for porcelain/ceramic.", strength: "N/A",
    indications: ["Porcelain/ceramic adjustment polish","Feldspathic porcelain","Glass-ceramic restorations"],
    notes: "Shofu's porcelain-specific diamond system. 2-step. Evidence (Alder 2016) confirms glaze-equivalent results at 15,000 RPM.",
    steps: ["Step 1 — CeraMaster Coarse: pre-polish. 10,000–15,000 RPM, 1.5 N pressure","Step 2 — CeraMaster: high-gloss polish. Same RPM.","30 sec per area per step","No additional polishing paste or water needed for extraoral","Water cooling intraorally"],
    rpm: "10,000–15,000", pressure: "1.5 N", wet: "Dry extraoral (per IFU). Wet intraoral.",
    substrates: { composite: false, glassCeramic: true, zirconia: true, pmma: false, metal: false, printedResin: false },
    special: "Per Alder et al. (PMID 26618785): 15,000 RPM is the evidence-based optimal speed — produces higher gloss and lower surface roughness than both 5,000 RPM (insufficient cutting) and 40,000 RPM (excessive heat/gouging). At 15,000 RPM, both CeraMaster and Dialite ZR achieved surface finish equivalent or superior to furnace-glazed zirconia. Temperature never exceeded 41°C at any speed tested — no pulpal risk. CeraMaster is specifically designed for porcelain/ceramic substrates per Shofu product classification. For zirconia polishing: Shofu recommends ZiLMaster (their dedicated zirconia system) but CeraMaster also achieves acceptable results on zirconia per the Alder study. For composite polishing: use Enhance/PoGo or Sof-Lex instead — CeraMaster's diamond grit is too aggressive for resin. For metal/alloy: use Brownie/Greenie (Shofu's metal-specific system).", refs: [] },

  { id: "optragloss", name: "OptraGloss", mfr: "Ivoclar", cat: "Polishing — Diamond Impregnated", composition: "Diamond-impregnated silicone (up to 70 wt% diamond). 2-step universal system: Dark blue (PP pre-polish) → Light blue (HP high-gloss). Shapes: Flame, Cup, Lens, Spiral Wheel.", strength: "N/A",
    indications: ["All ceramics (glass-ceramic, feldspathic, oxide/zirconia)","Composite resins (1-step with HP only)","Intraoral and extraoral","Pre-sinter zirconia (Extra Oral variant)"],
    notes: "Universal — one system for ceramic AND composite. Composite = 1 step (HP only). Ceramic = 2 steps (PP → HP). Extra Oral variant can polish BEFORE sintering/crystallization.",
    steps: ["FOR COMPOSITE: Light blue HP only, 10,000–15,000 RPM, light pressure. One step.","FOR SINTERED CERAMIC: Step 1 — Dark blue PP pre-polish, 10,000–15,000 RPM","Step 2 — Light blue HP high-gloss, 10,000–15,000 RPM","FOR PRE-SINTER ZIRCONIA (Extra Oral): PP at <5,000 RPM → HP at <10,000 RPM","FOR PRE-CRYSTALLIZATION LS₂ (Extra Oral): same as pre-sinter protocol","Contact pressure: ~2 N (per OptraFine IFU)","Water cooling intraorally (≥50 ml/min)","Autoclavable, reusable. No additional paste needed."],
    rpm: "Sintered: 10,000–15,000 · Pre-sinter Zr: <5,000 (PP) / <10,000 (HP) · Composite: 10,000–15,000", pressure: "~2 N", wet: "Wet intraoral. Optional extraoral.",
    substrates: { composite: true, glassCeramic: true, zirconia: true, pmma: true, metal: false, printedResin: false },
    special: "Pre-sinter polishing evidence (Pankey Institute/Ivoclar SEM data): pre-sinter polish with OptraGloss produces the smoothest surface vs post-sinter polish vs glazing. Clinical literature indicates glazed zirconia demonstrates HIGHER wear to opposing enamel than polished. Achieves <0.2 μm Ra on e.max CAD and ZirCAD Prime in 2 steps. The Extra Oral variant is the only system verified for use on unsintered zirconia AND pre-crystallized lithium disilicate.", refs: [] },

  { id: "eve-diacera", name: "Eve Diacera", mfr: "EVE Ernst Vetter", cat: "Polishing — Diamond Impregnated", composition: "Diamond-impregnated silicone, 2-step, specifically formulated for zirconia and alumina. High diamond concentration. DIASYNT PLUS for grinding (separate product).", strength: "N/A",
    indications: ["Full-contour zirconia restorations","Alumina restorations","Zirconia intraoral adjustment"],
    notes: "Zirconia + alumina specialist. Before polishing: grind with DIASYNT PLUS (separate product). No glazing required after Diacera polishing. TWIST shapes must rotate counter-clockwise.",
    steps: ["Grind adjustment areas with EVE DIASYNT PLUS","Step 1 (Medium): HP 7,000–12,000 RPM / RA 10,000–12,000 RPM","Step 2 (Fine): same RPM","No polishing paste needed — diamond impregnated","Water cooling intraorally (≥50 ml/min per EVE)","TWIST shape: counter-clockwise rotation ONLY (prevents lamella damage)","Discard when working part worn to mandrel"],
    rpm: "HP: 7,000–12,000 (optimal 7,000–10,000) · RA: 10,000–12,000 · Max: 20,000", pressure: "Light", wet: "Wet intraoral only. Not needed extraoral.",
    substrates: { composite: false, glassCeramic: false, zirconia: true, pmma: false, metal: false, printedResin: false },
    special: "Per EVE FAQ: Exceeding recommended RPM reduces polisher lifetime and increases heat. All steps must be used for best results. Polishers contain embedded abrasive — no external paste. Makes glazing unnecessary per manufacturer. Available in multiple shapes including TWIST (flexible lamelae for anatomy) and OCCLUFLEX (cups/points).", refs: [] },

  { id: "brownie-greenie", name: "Brownie / Greenie / Super Greenie", mfr: "Shofu", cat: "Polishing — Rubber/Silicone", composition: "Silicon carbide impregnated rubber. 3-step: Brownie (pre-polish) → Greenie (polish) → Super Greenie (super-polish, yellow-banded shank).", strength: "N/A",
    indications: ["Amalgam","Precious alloys (gold)","Non-precious alloys","Metal-based restorations"],
    notes: "⚠ Shofu categorizes this under METAL polishing, not ceramic. Primary substrates: amalgam, precious alloys, non-precious alloys. Broader intraoral claims exist but these are formulated for metallic restorations.",
    steps: ["Brownie (brown): pre-polish/smooth surface. 5,000–7,000 RPM.","Greenie (green): polish/lustrous finish. 5,000–7,000 RPM.","Super Greenie (yellow band): super-polish. 5,000–7,000 RPM.","Contact pressure: 1–2 N","Water coolant for amalgam polishing","No polishing paste needed — silicon carbide impregnated","Autoclavable, reusable"],
    rpm: "5,000–7,000", pressure: "1–2 N", wet: "Water for amalgam. Dry for alloys.",
    substrates: { composite: false, glassCeramic: false, zirconia: false, pmma: false, metal: true, printedResin: false },
    special: "Shofu's product categorization explicitly places Brownie/Greenie under 'Metal' polishing — separate from ZiLMaster (zirconia/LS₂) and CeraMaster (porcelain/ceramic). This distinction matters clinically: silicon carbide abrasives in Brownie/Greenie are optimized for the hardness and ductility of metallic alloys. Using these on ceramics risks surface micro-fracturing (ceramics are brittle, metals are ductile — the abrasive interaction is fundamentally different). For metal/gold/alloy polishing: Brownie → Greenie → Super Greenie remains the standard 3-step protocol at 5,000–7,000 RPM. For amalgam: use with water cooling to avoid mercury vapor release from frictional heat. For ceramic restorations: use ZiLMaster (dedicated zirconia/LS₂ system with aluminum oxide + diamond particles) or CeraMaster (100% diamond-impregnated for porcelain). For composite: use Enhance/PoGo or Sof-Lex. The color coding is the identification system: brown = Brownie (coarsest), green = Greenie, yellow-banded shank = Super Greenie (finest). All are autoclavable and reusable — replace when visibly worn or deformed.", refs: [] },

  { id: "soflexdisc", name: "Sof-Lex Discs", mfr: "Solventum (3M)", cat: "Polishing — Aluminum Oxide Disc", composition: "Aluminum oxide (Al₂O₃) coated polyester discs. 4-grit sequential system. Color-coded: dark (coarse) → medium → fine → light (superfine).", strength: "N/A",
    indications: ["Composite anterior (Class III, IV, V)","Veneer margins","Accessible flat/convex surfaces","Ceramic and glass ionomer finishing"],
    notes: "Gold standard for anterior composite polish on accessible surfaces. Pop-on mandrel. Single-use. Extra-Thin variant for tight access. NOT effective in concavities/occlusal anatomy.",
    steps: ["Coarse (dark): gross finishing/contouring. Slow-speed, <15,000 RPM.","Medium: refine surface. <15,000 RPM.","Fine: smooth to satin. <15,000 RPM.","Superfine (light): high gloss. <15,000 RPM.","Do NOT use high-speed handpiece","Unidirectional strokes: composite → tooth (avoid pulling composite off margin)","Light pressure — disc should flex to adapt","Single-use — discard after each patient"],
    rpm: "<15,000 (per IFU: 'below 15,000 rpm')", pressure: "Light — disc flexes", wet: "With or without water. Dry gives better visibility.",
    substrates: { composite: true, glassCeramic: true, zirconia: false, pmma: true, metal: false, printedResin: false },
    special: "Per 3M IFU: speeds below 15,000 RPM, never high-speed handpiece. For Sof-Lex Diamond Polishing Spirals (final gloss step): max 5,000 RPM with low pressure, circular movements. Finishing brushes: do not exceed 30,000 RPM. Substrates per Solventum: composite, ceramic, glass ionomer. Available in ½\" and ⅜\" diameters.", refs: [] },

  { id: "enhance-pogo", name: "Enhance / PoGo", mfr: "Dentsply Sirona", cat: "Polishing — Rubber/Silicone", composition: "Enhance: aluminum oxide impregnated urethane dimethacrylate (finishing). PoGo: diamond micro-polisher (high-gloss). Single-use. Pre-mounted — no mandrel.", strength: "N/A",
    indications: ["Composite finishing (Enhance) and polishing (PoGo)","All composite restorations","Compomers"],
    notes: "2-product system: Enhance for finishing/contouring, PoGo for final diamond polish. Pressure-controlled: heavy = more removal, light = smooth. Enhance Flex (newer): 3,000–8,000 RPM recommended.",
    steps: ["Enhance: conventional slow speed, light intermittent pressure, air cooling","Aggressiveness controlled by PRESSURE, not speed","PoGo: follow Enhance for final diamond high-gloss polish","Available as cups, points, discs in regular and mini sizes","Do NOT use with HIGH-SPEED HANDPIECES (per IFU)","Single-use — no reprocessing","Enhance Flex (newer 2-step): 3,000–8,000 RPM recommended, max 20,000, water cooling ≥50 ml/min"],
    rpm: "Enhance: 'conventional speed' (per IFU) · Enhance Flex: 3,000–8,000 (max 20,000) · NO high-speed", pressure: "Pressure-controlled system. Heavy = removal. Light = finish.", wet: "Air cooling (Enhance). Water cooling (Enhance Flex, ≥50 ml/min).",
    substrates: { composite: true, glassCeramic: false, zirconia: false, pmma: true, metal: false, printedResin: false },
    special: "Per DS IFU: 'Do not use with high speed handpieces. Use at conventional speed with light intermittent pressure.' The pressure-control mechanism is the key differentiator — one instrument does bulk removal through finishing by varying applied force. PoGo adds the diamond polish step. For Enhance Flex: water cooling mandatory, reprocessable up to 10x.", refs: [] },

  { id: "dura-white", name: "Dura-White Stones", mfr: "Shofu", cat: "Polishing — Stone/Abrasive", composition: "Vitrified-bonded micrograined aluminum oxide (Arkansas-type). FINISHING instrument — NOT polishing. Prepares surface for polishing systems.", strength: "N/A",
    indications: ["Fine finishing of enamel","Composite finishing","Glass ionomer finishing","Porcelain finishing","Crown prep smoothing after diamond contouring"],
    notes: "⚠ FINISHING, not polishing. Step before rubber/disc/diamond polishing systems. Do not expect gloss from stones alone. Common error: stopping at white stone.",
    steps: ["Use AFTER gross contouring with diamonds or carbides","5,000–20,000 RPM (max 30,000)","Contact pressure: 2 N","Smooths and refines surface — removes gross scratches","FOLLOW WITH polishing system (ZiLMaster, Sof-Lex, OptraGloss, etc.) for actual gloss","Available: FG, CA, HP shanks","Autoclavable, reusable — long service life"],
    rpm: "5,000–20,000 (max 30,000)", pressure: "2 N", wet: "Dry or wet.",
    substrates: { composite: true, glassCeramic: true, zirconia: false, pmma: true, metal: false, printedResin: false },
    special: "Per Shofu: Dura-White = fine finishing; Dura-Green = contouring/finishing (more aggressive, silicon carbide, for composites/amalgams/alloys/porcelains, same RPM range 5,000–20,000). Both are preparation steps for polishing — they produce smooth surfaces, not glossy ones. The proper sequence: diamond bur adjustment → Dura-Green (contour) → Dura-White (smooth) → polishing system (gloss).", refs: [] },

  { id: "dia-paste", name: "Diamond Polishing Paste + Brushes", mfr: "Brasseler / Shofu / Various", cat: "Polishing — Paste/Brush Finish", composition: "Diamond particle suspension (1–6 μm) in polishing vehicle. Applied with felt wheels, goat hair brushes, or horse hair brushes on straight handpiece.", strength: "N/A",
    indications: ["Final high-gloss on all ceramics","Final gloss on composite","Metal/gold high polish","Lab and chairside finishing step"],
    notes: "Universal final step. Products: Dialite Extra-Oral Diamond Paste (Brasseler), Dura-Polish DIA (Shofu), Pearl Surface Z (Kuraray, zirconia-specific). Brush hierarchy matters: felt (flat surfaces) → goat hair (anatomy) → horse hair (final buff).",
    steps: ["Select brush/wheel: felt wheel (flat), goat hair brush (anatomy-following), horse hair (softest final buff)","Apply thin layer of paste to brush/wheel","Straight handpiece: 5,000–10,000 RPM","Light intermittent strokes, keep paste from drying","For ceramics: 6 μm → 1 μm if multiple grits available","⚠ ALWAYS clean after paste before cementation — ultrasonic → steam","Diamond residue = invisible bonding contaminant if not removed"],
    rpm: "5,000–10,000 (paste finish)", pressure: "Very light — paste does the work.", wet: "Paste provides lubrication. Add water if drying.",
    substrates: { composite: true, glassCeramic: true, zirconia: true, pmma: true, metal: true, printedResin: false },
    special: "Brush hierarchy: horse hair (softest, final buff, <5,000 RPM) → goat hair (medium, follows anatomy) → felt (firmest, flat surfaces, highest material removal of the three). Pearl Surface Z (Kuraray): zirconia-specific diamond paste optimized for Katana. Always, always clean after paste before any bonding or cementation. For zirconia: the full hierarchy is diamond bur adjustment → Eve Diacera or ZiLMaster → diamond paste on felt/goat hair = maximum gloss.", refs: [] },
];

export const STAIN_GLAZE = [
  { id: "miyo-esthetic", name: "MiYO Esthetic / Chairside", mfr: "Jensen Dental", cat: "Stain/Glaze — Furnace-Fire", composition: "Liquid ceramic system: MiYO Color (translucent/semi-translucent/opaque self-glazing colors) + MiYO Structure (translucent self-glazing building pastes, 0.1–0.2 mm) + Glaze. Four systems: Esthetic (lab), Chairside (dentist), Pink (gingival), 850 (LS₂ crystallization cycle).", strength: "N/A",
    indications: ["Sintered zirconia characterization","Post-crystallized LS₂ characterization","PFM/PFZ","Monolithic and cutback restorations"],
    notes: "ALL MiYO systems are FURNACE-FIRED — not light-cure. Self-glazing in single firing. Colors float on colors without mixing. 0.1–0.2 mm application thickness. Firing temps vary by furnace — Jensen assists with calibration.",
    steps: ["Clean sintered/crystallized restoration surface","Apply MiYO Color with brush for characterization (float wet on wet)","Apply MiYO Structure for surface texture (0.1–0.2 mm)","Apply InSync Glaze Paste or Glaze Spray for final seal","Fire in glaze cycle — single firing (temps vary per furnace)","Dial in furnace-specific temps with Jensen support","Max 2–3 coats of glaze per IFU for full coverage"],
    substrates: { composite: false, glassCeramic: true, zirconia: true, pmma: false, printedResin: false },
    cureMethod: "Furnace fire (glaze cycle). NOT light-cure. Temps vary by furnace/material.",
    special: "MiYO is NOT a traditional stain — it's a liquid ceramic that lets light pass through, exciting underlying material. Achieves layered-ceramic esthetics in 0.1–0.2 mm. The 850 system specifically fires during LS₂ crystallization (~850°C) — no separate glaze firing needed. Chairside system = same concept, optimized for chairside furnaces (CEREC SpeedFire, Programat CS). Every furnace must be individually calibrated — temps on the dial do not equal actual temps.", refs: [] },

  { id: "miyo-850", name: "MiYO 850", mfr: "Jensen Dental", cat: "Stain/Glaze — Furnace-Fire", composition: "Liquid ceramic optimized for existing LS₂ crystallization cycles (~850°C). Colors self-glaze during crystallization firing. No separate glaze cycle needed.", strength: "N/A",
    indications: ["IPS e.max CAD chairside characterization (during crystallization)","Tessera (verify compatibility)","Any LS₂ requiring crystallization"],
    notes: "Fires DURING crystallization — not after. Apply to milled LS₂ in blue state, then crystallize with MiYO 850 applied. One firing = crystallization + color + glaze.",
    steps: ["Mill LS₂ restoration (blue state)","Apply MiYO 850 Colors for characterization","Apply MiYO 850 Structure for texture if desired","Place on crystallization tray with IPS Object Fix","Fire standard crystallization cycle (~850°C)","Colors self-glaze in the crystallization cycle","What you see wet = what you get fired (per Jensen)"],
    substrates: { composite: false, glassCeramic: true, zirconia: false, pmma: false, printedResin: false },
    cureMethod: "Fires during LS₂ crystallization cycle (~850°C). No separate glaze firing.",
    special: "Per Jensen: MiYO 850 doesn't drift, puddle or slump. Color stable — doesn't fade after firing. Matches Classic Vita shades. Easy to apply, not technique sensitive, doesn't bubble or pit. The efficiency gain is significant: one firing instead of crystallization + separate stain + separate glaze = potentially 2 fewer firings.", refs: [] },

  { id: "emax-crystall", name: "IPS e.max CAD Crystall./", mfr: "Ivoclar", cat: "Stain/Glaze — Furnace-Fire", composition: "Combination crystallization/stain/glaze system for IPS e.max CAD. Includes Shades, Stains, Glaze Paste (with/without fluorescence), Add-On, Liquids. Fires during crystallization at ~840°C.", strength: "N/A",
    indications: ["IPS e.max CAD characterization","IPS e.max ZirCAD staining","IPS Empress CAD staining","All Ivoclar ceramic materials"],
    notes: "Single range for ALL Ivoclar ceramics. Combination firing: crystallization + glaze in ONE step (~840°C in Programat). Max 6 restorations per tray. If using Glaze Paste: do NOT also use Speed Crystallization/Glaze Spray.",
    steps: ["Mill and adjust e.max CAD restoration (blue state)","Apply Shades for color modification if needed","Apply Stains for characterization","Apply Crystall./Glaze Paste — thin, even coat","Place on Crystallization Tray with IPS Object Fix pins","Combination firing in Programat (~840°C, 20–25 min)","Cool slowly in furnace","Minor corrections: IPS e.max CAD Crystall./Add-On","Max 2 glaze firings (additional firings risk devitrification)"],
    substrates: { composite: false, glassCeramic: true, zirconia: true, pmma: false, printedResin: false },
    cureMethod: "Furnace fire (Programat). Combination crystallization/glaze ~840°C.",
    special: "Per Ivoclar IFU: do not blast restorations with Al₂O₃ or glass beads before firing. More intense shades via repeated staining/firing — NOT thicker layers. Fluorescent glaze (Crystall./Glaze Paste FLUO) gives natural fluorescence to monolithic restorations. The Add-On material can build minor contact corrections directly on e.max CAD or ZirCAD restorations.", refs: ["ifu-emax"] },

  { id: "ivocolor", name: "IPS Ivocolor", mfr: "Ivoclar", cat: "Stain/Glaze — Furnace-Fire", composition: "Shade pastes (color modification), Essence pastes (characterization: mamelons, translucency, crack lines), Glaze Powder FLUO / Paste FLUO. Full lab stain and glaze system.", strength: "N/A",
    indications: ["e.max ZirCAD labside characterization","e.max CAD labside characterization","Empress CAD characterization","All Ivoclar ceramics (lab workflow)"],
    notes: "The full Ivoclar lab stain/glaze system. Separate from Crystall./ (which is chairside-focused). Shade + Essence + Glaze. Stain and glaze firings can be together or separate — same parameters.",
    steps: ["Clean restoration — steam to remove contamination and grease","Apply IPS Ivocolor Shade pastes for base color modification","Apply IPS Ivocolor Essence pastes for characterization","Apply IPS Ivocolor Glaze (Powder FLUO or Paste FLUO) — thin, even coat","Fire per Ivoclar parameters (varies by substrate — verify current IFU)","More intense shades via repeat firing, NOT thicker layers","Use fluorescent glaze for natural fluorescence on ZrO₂"],
    substrates: { composite: false, glassCeramic: true, zirconia: true, pmma: false, printedResin: false },
    cureMethod: "Furnace fire. Parameters vary by substrate.",
    special: "The Shade/Essence/Glaze system gives maximum control for lab ceramists. Glaze degree controlled by consistency (thinner = less gloss, thicker = more). Check under fluorescent lamp (366 nm) after firing to verify fluorescence homogeneity. Max 2 firings recommended for glass-ceramics to avoid devitrification.", refs: [] },

  { id: "ds-universal-stain", name: "DS Universal Stain & Glaze", mfr: "Dentsply Sirona", cat: "Stain/Glaze — Furnace-Fire", composition: "Universal stain and glaze system. Compatible across DS ceramic portfolio. Includes DS Universal Spray Glaze Fluo variant.", strength: "N/A",
    indications: ["Tessera (ZLS+)","Celtra Duo","Cercon 4D zirconia","CEREC MTL Zirconia","All DS ceramics"],
    notes: "DS cross-platform system. SpeedFire compatible. Per CEREC MTL IFU: restoration MUST be polished BEFORE glaze application. Also compatible with VITA AKZENT Plus GLAZE LT.",
    steps: ["Polish restoration first (per DS IFU — do not skip)","Apply stain with brush — thin, controlled application","Apply DS Universal Glaze — thin even coat","Fire per DS protocol (temps vary by substrate material)","SpeedFire compatible for rapid turnaround","Verify firing schedule per specific substrate — Tessera differs from Cercon"],
    substrates: { composite: false, glassCeramic: true, zirconia: true, pmma: false, printedResin: false },
    cureMethod: "Furnace fire. SpeedFire compatible.",
    special: "Per CEREC MTL Zirconia IFU: 'The restoration must be polished prior to glaze application.' This is explicit and mandatory — DS requires pre-polish before glazing. Skipping this step produces a rougher surface under the glaze that can compromise the glaze-substrate interface. Per DS SpeedFire protocol: firing times vary significantly by substrate — Tessera (ZLS+) uses different parameters than Cercon 4D zirconia. Always verify the firing schedule for your specific material before loading. The DS Universal Spray Glaze Fluo variant adds fluorescence matching for natural appearance under UV light — particularly relevant for anterior restorations that will be seen in social/photography settings. Cross-manufacturer compatibility: VITA AKZENT Plus GLAZE LT is documented as compatible, giving labs flexibility outside the pure DS ecosystem.", refs: [] },

  { id: "czr-paste-stain", name: "CZR FC Paste Stain", mfr: "Kuraray Noritake", cat: "Stain/Glaze — Furnace-Fire", composition: "Paste stain system for Katana zirconia. SpeedFire compatible (~10 min fire). Low-temperature firing. Also: Esthetic Colorant for pre-sinter coloring.", strength: "N/A",
    indications: ["Katana zirconia ONE/Speed characterization","Katana STML/UTML/YML","Any Kuraray zirconia workflow"],
    notes: "Kuraray ecosystem: Esthetic Colorant (pre-sinter liquid coloring) → Sinter → CZR FC Paste Stain (post-sinter characterization/glaze). SpeedFire ~10 min.",
    steps: ["PRE-SINTER (Esthetic Colorant): apply to milled restoration with metal-free brush/pen → dry 80–200°C ≥30 min → sinter","POST-SINTER (CZR FC Paste Stain): apply stains with brush → apply FC Glaze/Clear Glaze → fire in SpeedFire (~10 min) or conventional","Up to 2 glaze cycles in SpeedFire","Choose 1–2 shades darker than target for posterior (STML/UTML per technical guide)","Polished finish = target shade; Glazed finish = lighter → adjust with external stain"],
    substrates: { composite: false, glassCeramic: false, zirconia: true, pmma: false, printedResin: false },
    cureMethod: "Furnace fire. SpeedFire ~10 min or conventional.",
    special: "The Kuraray workflow has TWO characterization stages: (1) Esthetic Colorant pre-sinter (diffuses into structure, fixed during sintering, no extra bake) and (2) CZR FC Paste Stain post-sinter (external characterization/glaze). Per technical guide: for polished finish, select target shade; for glazed finish, shade reads lighter — adjust accordingly. Esthetic Colorant does not significantly affect flexural strength per Kuraray testing.", refs: ["ifu-katana"] },

  { id: "optiglaze-color", name: "Optiglaze Color", mfr: "GC", cat: "Stain/Glaze — Nano-Coat", composition: "Light-cured nano-filled characterization coating. Homogeneously dispersed nano-filler for wear resistance. TWO products: Optiglaze (clear protective coat) and Optiglaze COLOR (stain + glaze characterization system).", strength: "N/A",
    indications: ["Cerasmart (RNC)","Composite restorations","PMMA / acrylic","Printed restorations","Denture teeth","Temporary crowns/bridges","NOT for glass-ceramics or zirconia"],
    notes: "⚠ For RESIN-BASED materials only (RNC, composite, PMMA, printed). NOT for glass-ceramics or zirconia — those need furnace-fire systems. Dual function: sealant + characterization.",
    steps: ["Surface characterization: sandblast 25–50 μm (0.15 MPa) → clean (steam/ultrasonic)","For hybrid ceramics (Cerasmart) and composites: treat surface with CERAMIC PRIMER II","Shake Optiglaze Color bottle well → dispense in dish","Apply thinly with brush. DO NOT air blow.","Light cure per light source: LED (400–430 nm) 40 sec, Halogen 40 sec, GC Labolight 5 min, GC Steplight <3cm 10 sec / >3cm 20 sec","Apply Clear or Clear HV on entire surface as final seal → cure","For internal characterization: apply ON oxygen inhibition layer (do not remove it)"],
    substrates: { composite: true, glassCeramic: false, zirconia: false, pmma: true, metal: false, printedResin: true },
    cureMethod: "Light-cure. LED (400–430 nm): 40 sec. Halogen: 40 sec. GC Labolight: 5 min.",
    special: "Per GC application guide: DO NOT air blow after application (disrupts layer). For hybrid ceramics, Ceramic Primer II is required before Optiglaze. The nano-filler provides actual wear resistance — unlike unfilled bonding agent used as a sealant. Shades: 16 colors (Blue, Clear, Grey, Ivory, White, Lavender, Olive, Orange, Pink, Red, Brown, Yellow) plus HV (high viscosity) and shade modifiers (A+, B+, C+). Clear HV is thicker viscosity for final seal coat.", refs: [] },

  { id: "renamel", name: "Cosmedent Renamel Microfill", mfr: "Cosmedent", cat: "Stain/Glaze — Light-Cure", composition: "Ultra-fine microfill composite paste system for direct characterization and surface enhancement. Not a traditional stain/glaze — a polishable surface composite layer.", strength: "N/A",
    indications: ["Direct composite characterization","Composite veneer surface layer","Composite repair/blend","Surface defect correction","High-end anterior esthetics"],
    notes: "Not stain/glaze in the traditional sense. Applied as 0.3–0.5 mm final surface layer of ultra-polishable microfill over body composite. Exceptional polish due to ultra-fine particle size.",
    steps: ["Build restoration to near-final contour with body composite","Apply Renamel microfill as final surface layer (0.3–0.5 mm)","Sculpt surface anatomy, add characterization","Cure 20 sec standard","Polish with sequential system (Sof-Lex → felt + paste)","Microfill polishes to exceptional high gloss"],
    substrates: { composite: true, glassCeramic: false, zirconia: false, pmma: false, metal: false, printedResin: false },
    cureMethod: "Light-cure. Standard composite curing protocol.",
    special: "Niche product for high-end direct esthetics. The microfill particle size polishes to a gloss that rivals porcelain. Not necessary for routine posterior — this is for anterior cases competing with indirect restorations. Cosmedent system integrates with their composite stain/tint products for polychromatic layering.", refs: [] },
];
