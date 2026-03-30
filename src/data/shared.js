// ═══════════════════════════════════════════════
// SHARED DATA — Citations, Evidence, Protocols
// ═══════════════════════════════════════════════

export const EG = {
  IFU: { label: "IFU", color: "#3b82f6", bg: "#1e3a5f", desc: "Manufacturer IFU" },
  STRONG: { label: "Strong", color: "#10b981", bg: "#064e3b", desc: "Multiple RCTs / meta-analyses" },
  MODERATE: { label: "Mod", color: "#f59e0b", bg: "#78350f", desc: "Limited trials / systematic reviews" },
  CONSENSUS: { label: "Cons", color: "#a78bfa", bg: "#3b1f6e", desc: "Expert consensus" },
  EMERGING: { label: "New", color: "#f472b6", bg: "#831843", desc: "Preliminary research" },
  CONFLICT: { label: "IFU≠Ev", color: "#ef4444", bg: "#7f1d1d", desc: "Evidence contradicts IFU" },
};

export const CURE_INFO = {
  standard: "Wavelength: 430–480 nm (CQ peak ~468 nm). Min: 800 mW/cm². Ideal: ≥1000 mW/cm². Verify radiometer annually.",
  polywave: "Some materials use alternative initiators (TPO, Ivocerin) requiring 380–420 nm range. Polywave LEDs (Bluephase, VALO) recommended.",
};

export const ISOLATION = {
  rubberDam: "Gold standard. Required for all adhesive bonding where possible. Absolute moisture control + retraction.",
  isolite: "Isolite/Isodry/Mr. Thirsty: Acceptable for posterior composites, IDS, DME. Relative isolation + light + retraction + suction. Not equivalent to rubber dam for veneers.",
  cottonRoll: "Cotton roll + HVE + DryTips: Minimum acceptable. Vigilant moisture management. Not for critical adhesive procedures.",
  evidence: "Systematic reviews show rubber dam significantly improves longevity of adhesive restorations (Wang 2019). Relative isolation acceptable for routine posterior.",
};

export const APA_INTRAORAL = {
  ids: "IDS/resin coat: intraoral APA (27–50 μm Al₂O₃) DRY to roughen existing resin coat. Wet APA not indicated intraorally.",
  core: "Core surfaces: dry APA 50 μm acceptable intraorally. Protect adjacent teeth/soft tissue with Teflon tape or rubber dam.",
  extraoral: "All CAD/CAM restoration surface treatment is done EXTRAORALLY. Never sandblast ceramics intraorally.",
};

export const SILANE_2B = {
  steps: ["Mix A+B at point of use", "Apply ONE thin coat", "React 60 sec", "AIR THIN aggressively 10–15 sec", "Optional: warm air ~60°C × 5 sec", "Verify: dry, tacky surface"],
  warn: "Excess = siloxane multilayer = WEAK BOUNDARY LAYER. Monolayer is the goal.",
  heat: "Heat (50–100°C) promotes condensation, drives off solvents → more durable bond.",
  products: "Bis-silane (Bisco) · Porcelain Primer (Bisco)",
  rationale: "Pre-hydrolyzed universal primers (Monobond Plus, Clearfil Ceramic Primer Plus) degrade in solution. Shelf life + open-bottle time directly affect bond. 2-bottle mixes fresh → hydrolytically stable γ-MPS → superior long-term durability.",
  refs: ["shen-2004", "lung-2012", "hooshmand-2004", "sattabanasuk-2016", "barghi-2000", "takahashi-2021"]
};

export const CIT = {
  "shen-2004": { pmid: "15182161", title: "Silane stability: 2-bottle vs pre-hydrolyzed", authors: "Shen C, et al.", journal: "J Prosthet Dent", year: 2004, grade: "STRONG" },
  "lung-2012": { pmid: "22192253", title: "Silane coupling agents: Overview", authors: "Lung CYK, Matinlinna JP", journal: "Dent Mater", year: 2012, grade: "STRONG" },
  "hooshmand-2004": { pmid: "15533457", title: "Silane + heat on bond strength", authors: "Hooshmand T, et al.", journal: "J Prosthodont", year: 2004, grade: "STRONG" },
  "takahashi-2021": { pmid: "33849770", title: "Pre-hydrolyzed silane aging on bond to LS₂", authors: "Takahashi A, et al.", journal: "Dent Mater J", year: 2021, grade: "STRONG" },
  "barghi-2000": { pmid: "11199559", title: "Air-drying and heat treatment of silane", authors: "Barghi N", journal: "J Oral Rehabil", year: 2000, grade: "STRONG" },
  "sattabanasuk-2016": { pmid: "27187830", title: "Silane film thickness on bond", authors: "Sattabanasuk V, et al.", journal: "Dent Mater", year: 2016, grade: "STRONG" },
  "matinlinna-2018": { pmid: "29397094", title: "Silane in dental materials: Review", authors: "Matinlinna JP, et al.", journal: "Chin J Dent Res", year: 2018, grade: "STRONG" },
  "ozcan-2015-hf": { pmid: "25765377", title: "HF concentration on bonding to LS₂", authors: "Ozcan M, et al.", journal: "J Adhes Dent", year: 2015, grade: "STRONG" },
  "sundfeld-2018": { pmid: "29352880", title: "HF etch time on leucite bond", authors: "Sundfeld Neto D", journal: "Oper Dent", year: 2018, grade: "STRONG" },
  "neis-2015": { pmid: "25625264", title: "Surface treatments for glass ceramic repair", authors: "Neis CA, et al.", journal: "Oper Dent", year: 2015, grade: "STRONG" },
  "brentel-2007": { pmid: "17403766", title: "Residual HF on leucite bond", authors: "Brentel AS, et al.", journal: "J Adhes Dent", year: 2007, grade: "STRONG" },
  "ozcan-2013": { pmid: "23188834", title: "Bond to air-abraded vs HF-treated RNC", authors: "Ozcan M, et al.", journal: "J Adhes Dent", year: 2013, grade: "STRONG" },
  "elsaka-2014": { pmid: "25411847", title: "Bond of resin CAD/CAM", authors: "Elsaka SE", journal: "J Prosthodont", year: 2014, grade: "STRONG" },
  "ozcan-2015-mdp": { pmid: "25843258", title: "MDP primers on zirconia bond", authors: "Ozcan M, Bernasconi M", journal: "J Adhes Dent", year: 2015, grade: "STRONG" },
  "yang-2010": { pmid: "20648250", title: "10-MDP on zirconia after sandblasting", authors: "Yang B, et al.", journal: "Dent Mater", year: 2010, grade: "STRONG" },
  "kern-2015": { pmid: "26563238", title: "Bonding to oxide ceramics: Lab vs clinical", authors: "Kern M", journal: "Dent Mater", year: 2015, grade: "STRONG" },
  "ozcan-2019": { pmid: "30648958", title: "Surface conditioning and bond to PICN", authors: "Ozcan M, et al.", journal: "J Mech Behav Biomed", year: 2019, grade: "STRONG" },
  "perdigao-2020": { pmid: "31843019", title: "Universal adhesives: Current perspectives", authors: "Perdigao J, et al.", journal: "Jpn Dent Sci Rev", year: 2020, grade: "STRONG" },
  "peumans-2012": { pmid: "22192253", title: "Adhesives for bonded ceramics: Clinical", authors: "Peumans M, et al.", journal: "Dent Mater", year: 2012, grade: "STRONG" },
  "suh-2003": { pmid: "14520192", title: "DC cements with SE adhesives", authors: "Suh BI, et al.", journal: "J Esthet Restor Dent", year: 2003, grade: "STRONG" },
  "vanmeerbeek-2020": { pmid: "31980327", title: "Selective enamel etching: Meta-analysis", authors: "Van Meerbeek B, et al.", journal: "Dent Mater", year: 2020, grade: "STRONG" },
  "imazato-2010": { pmid: "20018720", title: "Antibacterial MDPB in SE adhesive", authors: "Imazato S, et al.", journal: "J Dent", year: 2010, grade: "MODERATE" },
  "daronch-2005": { pmid: "16153142", title: "Pre-heating on composite properties", authors: "Daronch M, et al.", journal: "J Dent Res", year: 2005, grade: "MODERATE" },
  "lohbauer-2009": { pmid: "19288024", title: "Heated composite cementation", authors: "Lohbauer U, et al.", journal: "Oper Dent", year: 2009, grade: "MODERATE" },
  "quun-2020": { pmid: "32012527", title: "Cleaning after saliva contamination", authors: "Quun L, et al.", journal: "J Prosthodont", year: 2020, grade: "MODERATE" },
  "al-hamdan-2019": { pmid: "31213517", title: "Er:YAG on glass ceramics: Systematic review", authors: "Al-Hamdan RS", journal: "Lasers Med Sci", year: 2019, grade: "EMERGING" },
  "elsaka-2016": { pmid: "26892037", title: "Bond of ZLS to resin", authors: "Elsaka SE, Elnaghy AM", journal: "Dent Mater", year: 2016, grade: "MODERATE" },
  "ellingsen-2021": { pmid: "33521154", title: "Bond of CAD/CAM to Ti bases", authors: "Ellingsen LA, et al.", journal: "J Prosthet Dent", year: 2021, grade: "MODERATE" },
  "graf-2022": { pmid: "34862055", title: "Ti-base cementation: Systematic review", authors: "Graf T, et al.", journal: "Int J Prosthodont", year: 2022, grade: "STRONG" },
  "abed-2015": { pmid: "25882878", title: "Fracture of CAD/CAM resin composites", authors: "Abed YA, et al.", journal: "Dent Mater", year: 2015, grade: "MODERATE" },
  "monticelli-2006": { pmid: "16698931", title: "SA cements into dentin", authors: "Monticelli F, et al.", journal: "J Dent Res", year: 2006, grade: "STRONG" },
  "ozcan-2004-alloy": { pmid: "15357048", title: "Bond to noble alloys with primers", authors: "Ozcan M, et al.", journal: "J Dent", year: 2004, grade: "STRONG" },
  "matsumura-2003": { pmid: "12665766", title: "Bonding to gold with VBATDT", authors: "Matsumura H, et al.", journal: "J Dent Res", year: 2003, grade: "STRONG" },
  "wang-2019-dam": { pmid: "31177642", title: "Rubber dam on composite longevity", authors: "Wang Y, et al.", journal: "J Dent", year: 2019, grade: "STRONG" },
  // IFUs
  "ifu-emax": { pmid: null, title: "IPS e.max CAD IFU", authors: "Ivoclar", journal: "IFU", year: 2024, grade: "IFU" },
  "ifu-tetric": { pmid: null, title: "Tetric CAD IFU", authors: "Ivoclar", journal: "IFU", year: 2024, grade: "IFU" },
  "ifu-enamic": { pmid: null, title: "VITA ENAMIC IFU", authors: "VITA", journal: "IFU", year: 2023, grade: "IFU" },
  "ifu-tessera": { pmid: null, title: "Tessera IFU", authors: "Dentsply Sirona", journal: "IFU", year: 2024, grade: "IFU" },
  "ifu-empress": { pmid: null, title: "IPS Empress CAD IFU", authors: "Ivoclar", journal: "IFU", year: 2023, grade: "IFU" },
  "ifu-katana": { pmid: null, title: "Katana Zirconia ONE IFU", authors: "Kuraray", journal: "IFU", year: 2024, grade: "IFU" },
  "ifu-cercon": { pmid: null, title: "Cercon 4D IFU", authors: "Dentsply Sirona", journal: "IFU", year: 2024, grade: "IFU" },
  "ifu-zircad": { pmid: null, title: "ZirCAD Prime IFU", authors: "Ivoclar", journal: "IFU", year: 2024, grade: "IFU" },
  "ifu-lava": { pmid: null, title: "Lava Ultimate IFU", authors: "3M/Solventum", journal: "IFU", year: 2023, grade: "IFU" },
  "ifu-grandio": { pmid: null, title: "Grandio Blocs IFU", authors: "VOCO", journal: "IFU", year: 2023, grade: "IFU" },
  "ifu-cerasmart": { pmid: null, title: "Cerasmart IFU", authors: "GC", journal: "IFU", year: 2023, grade: "IFU" },
  "ifu-3mzr": { pmid: null, title: "3M Lava Plus Zirconia IFU", authors: "3M/Solventum", journal: "IFU", year: 2024, grade: "IFU" },
  "3m-lava-restrict": { pmid: null, title: "Lava Ultimate — crown restriction", authors: "3M ESPE", journal: "Tech Bulletin", year: 2015, grade: "IFU" },
};

// ═══════════════════════════════════════════════
// COLOR + CATEGORY SYSTEM
// ═══════════════════════════════════════════════

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
};

export const gc = (c) => CC[c] || { bg: "#111827", a: "#6b7280", t: "#1f2937" };

export const getGroup = (c) => {
  if (c.includes("RNC") || c.includes("PICN") || (c.includes("Hybrid") && !c.includes("Abutment"))) return "Restorative Blocks";
  if (c.includes("Lithium") || c.includes("ZLS") || c.includes("Leucite")) return "Glass-Ceramics";
  if (c.includes("Zirconia") || c.includes("TZP") || c.includes("Fusion")) return "Zirconia";
  if (c.includes("Titanium")) return "Ti-Base";
  if (c.includes("Gold") || c.includes("Noble")) return "Gold / Metal";
  if (c.includes("Cement") || c.includes("RMGI") || c.includes("Off-Label Luting") || c.includes("Abutment Resin")) return "Cements";
  if (c.includes("Flowable") || c.includes("Packable") || c.includes("Bulk Fill") || c.includes("Core Build") || c.includes("Fiber-Reinforced")) return "Composites";
  if (c.includes("Adhesive") || c.includes("adhesive")) return "Bonding Agents";
  return "Other";
};

// ═══════════════════════════════════════════════
// SPECIALTY DEFINITIONS (for landing page)
// ═══════════════════════════════════════════════

export const SPECIALTIES = [
  {
    id: "restorative",
    name: "Restorative",
    subtitle: "CAD/CAM blocks, composites, bonding agents, cements, staining, polishing",
    icon: "🦷",
    color: "#22d3ee",
    bg: "#0c2d3e",
    groups: ["Restorative Blocks", "Glass-Ceramics", "Composites", "Bonding Agents", "Cements", "Stain / Glaze Systems", "Polishing Systems"],
    ready: true,
  },
  {
    id: "prostho",
    name: "Prosthodontics",
    subtitle: "Crown & bridge, provisionals, RPDs, dentures, staining, polishing, impressions",
    icon: "👑",
    color: "#60a5fa",
    bg: "#0a1a2e",
    groups: ["Zirconia", "Gold / Metal", "Ti-Base", "Cements", "Provisional Materials", "Stain / Glaze Systems", "Polishing Systems", "Impression & Scanning", "Removable Aids & Instruments", "RPDs & Flexible Partials", "Dentures & Overdentures"],
    ready: true,
  },
  {
    id: "endo",
    name: "Endodontics",
    subtitle: "File systems, gutta percha, bioceramics, sealers, irrigants",
    icon: "🔬",
    color: "#fb7185",
    bg: "#2d0f1e",
    groups: ["File Systems", "Obturation", "Bioceramics", "Irrigants"],
    ready: false,
  },
  {
    id: "perio",
    name: "Periodontics & Surgery",
    subtitle: "Membranes, biologics, bone grafts, sutures, hemostatics",
    icon: "🩹",
    color: "#f472b6",
    bg: "#831843",
    groups: ["Membranes", "Biologics", "Bone Grafts", "Sutures"],
    ready: false,
  },
  {
    id: "implants",
    name: "Implantology",
    subtitle: "Systems, surfaces, connections, platform switching, All-on-X, provisionals",
    icon: "🔩",
    color: "#a8a29e",
    bg: "#1a1a14",
    groups: ["Implant Systems", "Surfaces & Coatings", "Connections & Platform Switching", "Components", "Provisionals", "All-on-X"],
    ready: false,
  },
  {
    id: "preventive",
    name: "Preventive",
    subtitle: "Fluorides, sealants, remineralizing agents, caries protocols",
    icon: "🛡️",
    color: "#10b981",
    bg: "#064e3b",
    groups: ["Fluorides", "Sealants", "Remineralization", "Caries Risk"],
    ready: false,
  },
  {
    id: "lasers",
    name: "Lasers",
    subtitle: "Diode, Er:YAG, Nd:YAG, CO₂ — wavelengths, indications, settings",
    icon: "⚡",
    color: "#f59e0b",
    bg: "#78350f",
    groups: ["Soft Tissue Lasers", "Hard Tissue Lasers", "Photobiomodulation"],
    ready: false,
  },
  {
    id: "bioactive",
    name: "Bioactive Materials",
    subtitle: "Bioceramics, MTA, Biodentine, bioactive composites, liners",
    icon: "🧬",
    color: "#c084fc",
    bg: "#3b1f6e",
    groups: ["Bioceramics", "Bioactive Composites", "Liners/Bases"],
    ready: false,
  },
  {
    id: "ofp",
    name: "Orofacial Pain",
    subtitle: "Injectables, splints, physical medicine, acupuncture, pharmacology",
    icon: "💉",
    color: "#f43f5e",
    bg: "#4c0519",
    groups: ["Injectables", "Occlusal Splints", "Physical Medicine", "Acupuncture / Dry Needling", "Pharmacology"],
    ready: false,
  },
  {
    id: "sleep",
    name: "Sleep Dentistry",
    subtitle: "MADs, myofunctional therapy, ancillary OSA treatments, screening",
    icon: "😴",
    color: "#818cf8",
    bg: "#1e1b4b",
    groups: ["Mandibular Advancement Devices", "Myofunctional Therapy", "Ancillary OSA Tx", "Screening / Assessment"],
    ready: false,
  },
  {
    id: "sedation",
    name: "Sedation & Anesthesia",
    subtitle: "N₂O, anxiolysis, moderate sedation, deep sedation, emergency protocols",
    icon: "🫧",
    color: "#06b6d4",
    bg: "#083344",
    groups: ["Nitrous Oxide", "Minimal Sedation / Anxiolysis", "Moderate Sedation", "Deep Sedation", "Local Anesthesia", "Emergency Drugs"],
    ready: false,
  },
  {
    id: "printing",
    name: "3D Printing",
    subtitle: "Printer tech, resins (temp/perm/guides/dentures), post-processing protocols",
    icon: "🖨️",
    color: "#f97316",
    bg: "#431407",
    groups: ["Printer Technologies", "Provisional Resins", "Definitive Resins", "Surgical Guide Resins", "Denture Resins", "Specialty Resins", "Post-Processing"],
    ready: false,
  },
];
