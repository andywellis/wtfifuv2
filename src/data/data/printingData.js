// ═══════════════════════════════════════════════════════════════════
// 3D PRINTING DATA — Printers, Resins, FDA Status, Post-Curing
// ═══════════════════════════════════════════════════════════════════

export const PRINT_CIT = {
  "katheng-2025-tech-comparison": { pmid: null, title: "SLA highest flexural (93.4 MPa) vs DLP (70.0) vs LCD (64.7); SLA smoothest surface (Ra 14.79nm vs DLP 24.59 vs LCD 89.87)", authors: "Katheng A, et al.", journal: "Sci Rep", year: 2025, grade: "STRONG" },
  "tatlicioglu-2025-dlp-vs-lcd": { pmid: null, title: "DLP vs LCD: DLP higher accuracy, lower weight, less residual material, shorter time (p<0.05)", authors: "Tatlicioglu BD, et al.", journal: "J Dent", year: 2025, grade: "STRONG" },
  "arslan-2025-sprintray-crown": { pmid: null, title: "SprintRay Crown superior marginal fit vs Saremco (p=0.002) and DentaFab (p=0.0005) by micro-CT", authors: "Arslan E, et al.", journal: "J Prosthodont", year: 2025, grade: "STRONG" },
  "hegedus-2025-survey": { pmid: null, title: "Transnational survey: SprintRay, Formlabs, Dentsply Sirona among most popular dental 3D printer brands globally", authors: "Hegedüs T, et al.", journal: "J Dent", year: 2025, grade: "MODERATE" },
  "henprasert-2020-guide-accuracy": { pmid: null, title: "No sig. diff accuracy between 3D-printed and milled surgical guides; angular 0.77-0.78°; apical 0.80-0.84mm", authors: "Henprasert P, et al.", journal: "J Prosthodont", year: 2020, grade: "STRONG" },
  "flottes-2025-permanent-sr": { pmid: null, title: "SR: Crowntec highest mechanical properties; all 3D-printed resins inferior to milled composites; insufficient clinical evidence for definitive use", authors: "Flottes Y, et al.", journal: "J Prosthet Dent", year: 2025, grade: "STRONG" },
  "ribeiro-2025-evidence-gap": { pmid: null, title: "Scoping review: insufficient clinical evidence to support 3D-printed resins for indirect definitive restorations", authors: "Ribeiro HFB, et al.", journal: "Eur J Oral Sci", year: 2025, grade: "STRONG" },
  "mandurino-2025-milled-vs-printed": { pmid: null, title: "SR: milling significantly higher flexural strength than 3D printing (Hedge g -3.88, p=0.02) for permanent resins", authors: "Mandurino M, et al.", journal: "Materials", year: 2025, grade: "STRONG" },
  "bayarsaikhan-2021-postcure-temp": { pmid: null, title: "80°C post-curing: highest flexural strength (147.48 MPa) and cell viability (89.51%) vs 40°C", authors: "Bayarsaikhan E, et al.", journal: "Polymers", year: 2021, grade: "STRONG" },
  "kim-2020-postcure-time": { pmid: null, title: "60-90 min post-curing significantly improves flexural strength, Vickers hardness, DC, and biocompatibility", authors: "Kim D, et al.", journal: "Polymers", year: 2020, grade: "STRONG" },
  "sivaswamy-2026-denture-ma": { pmid: null, title: "MA: conventional dentures better retention than 3D-printed (p=0.04); no sig. diff in patient satisfaction", authors: "Sivaswamy V, et al.", journal: "J Prosthet Dent", year: 2026, grade: "STRONG" },
  "sium-2024-guide-manufacturing": { pmid: null, title: "All manufacturing methods within accepted safety deviation (1.5-2mm); no sig. diff printed vs milled guides", authors: "Sium-Abel A, et al.", journal: "Clin Oral Implants Res", year: 2024, grade: "STRONG" },
  // ── Veneers & post-processing ──
  "alghauli-2024-veneer-sr": { pmid: null, title: "SR/MA: 3D-printed veneers superior trueness + better marginal/internal fit vs milled (p<0.05); ultra-thin 0.1-0.2mm feasible", authors: "Alghauli MA, Alqutaibi AY", journal: "J Esthet Restor Dent", year: 2024, grade: "STRONG" },
  "unkovskiy-2025-lcm-veneer": { pmid: null, title: "Proof-of-concept: 3D-printed lithium disilicate non-prep veneers 0.1-0.2mm via LCM; excellent fit and esthetics", authors: "Unkovskiy A, et al.", journal: "J Esthet Restor Dent", year: 2025, grade: "MODERATE" },
  "rues-2023-zirconia-veneer-fit": { pmid: null, title: "3D-printed zirconia veneers: incisal gap 78μm vs milled 391μm (p=0.001); milled better marginal (44 vs 55μm)", authors: "Rues S, et al.", journal: "J Dent", year: 2023, grade: "STRONG" },
  "dascanio-2026-durability-umbrella": { pmid: null, title: "Umbrella review: 3D-printed resins lower flexural, fatigue, color stability vs milled; short-term (6-24mo) encouraging", authors: "Dascanio R, et al.", journal: "J Dent", year: 2026, grade: "STRONG" },
  "wang-2025-washing-sr": { pmid: null, title: "SR: TPM higher trueness/precision vs IPA; IPA better flexural strength; 5-15 min optimal wash; 30 min may degrade", authors: "Wang X, et al.", journal: "J Dent", year: 2025, grade: "STRONG" },
  "metin-2024-veneer-orientation": { pmid: null, title: "Veneers: 30° orientation highest trueness (RMSE 0.016); 90° lowest trueness — avoid for veneers", authors: "Metin DS, et al.", journal: "J Dent", year: 2024, grade: "STRONG" },
  "borella-2023-layer-thickness": { pmid: null, title: "100μm specimens worse than 50μm for DC, roughness, flexural strength, hardness (p<0.05); 50μm recommended", authors: "Borella PS, et al.", journal: "Dent Mater", year: 2023, grade: "STRONG" },
};

export const printGetGroup = c => {
  if (c.includes("Printer") || c.includes("Technology")) return "Printers & Technology";
  if (c.includes("Surgical Guide")) return "Surgical Guide Resins";
  if (c.includes("Provisional") || c.includes("Temporary")) return "Provisional C&B Resins";
  if (c.includes("Permanent") || c.includes("Definitive")) return "Permanent C&B Resins";
  if (c.includes("Denture")) return "Denture Resins";
  if (c.includes("Splint") || c.includes("Retainer")) return "Splint & Retainer Resins";
  if (c.includes("Model")) return "Model Resins";
  if (c.includes("Post-Curing") || c.includes("Protocol") || c.includes("FDA")) return "Protocols & Regulatory";
  return "Other";
};

export const PRINT_GROUPS = ["Printers & Technology", "Surgical Guide Resins", "Provisional C&B Resins", "Permanent C&B Resins", "Denture Resins", "Splint & Retainer Resins", "Model Resins", "Protocols & Regulatory"];

// ═══════════════════════════════════════════════
// 1. PRINTERS & TECHNOLOGY
// ═══════════════════════════════════════════════
export const PRINTERS = [
  {
    id: "tech-comparison", name: "SLA vs DLP vs LCD — Technology Selection", cat: "Printer Technology — Comparison",
    composition_detail: "• Resolution limited by projector pixel size\n\nLCD/mSLA (Masked SLA): LCD screen masks UV light; XY 35–50μm.\n• Most cost-effective; fast\n• Higher surface roughness; shorter LCD lifespan", technique: "THREE DENTAL 3D PRINTING TECHNOLOGIES:\n\nSLA (Stereolithography): point-by-point UV laser curing; XY 25–140μm.\n• HIGHEST trueness + smoothest surface (Ra 14.79nm)\n• Slowest for large prints; higher cost\n\nDLP (Digital Light Processing): entire layer cured simultaneously via projector; XY 50–100μm.", evidence: "• HIGHEST flexural strength (93.4 MPa vs DLP 70.0 vs LCD 64.7)\n• Faster than SLA; good accuracy\n• Per Tatlicioglu 2025: DLP higher accuracy, lower weight, less residual material, shorter time vs LCD (p<0.05)\nALL technologies produce models within clinical acceptability (<100μm). Choice depends on: volume needs (DLP fastest), accuracy priority (SLA best), budget (LCD cheapest).", notes: "THREE DENTAL 3D PRINTING TECHNOLOGIES:\n\nSLA (Stereolithography): point-by-point UV laser curing; XY 25–140μm.\n• HIGHEST trueness + smoothest surface (Ra 14.79nm)\n• HIGHEST flexural strength (93.4 MPa vs DLP 70.0 vs LCD 64.7)\n• Slowest for large prints; higher cost\n\nDLP (Digital Light Processing): entire layer cured simultaneously via projector; XY 50–100μm.\n• Faster than SLA; good accuracy\n• Per Tatlicioglu 2025: DLP higher accuracy, lower weight, less residual material, shorter time vs LCD (p<0.05)\n• Resolution limited by projector pixel size\n\nLCD/mSLA (Masked SLA): LCD screen masks UV light; XY 35–50μm.\n• Most cost-effective; fast\n• Higher surface roughness; shorter LCD lifespan\n\nALL technologies produce models within clinical acceptability (<100μm). Choice depends on: volume needs (DLP fastest), accuracy priority (SLA best), budget (LCD cheapest).",
    refs: ["katheng-2025-tech-comparison","tatlicioglu-2025-dlp-vs-lcd"]
  },
  {
    id: "sprintray-pro", name: "SprintRay Pro 95S / Pro 55S", mfr: "SprintRay", cat: "Printer — DLP",
    composition: "DLP technology. Pro 95S: 192×120×200mm build, 52μm XY. Pro 55S: 140×79×200mm, 55μm XY. Both 10–200μm Z. Price: $5K–12K.",
    notes: "Major market player in North American dental practices. Validated resins: SprintRay Crown, Surgical Guide 3, Model 2, Splint, IDB (denture base).\n\nPer Arslan 2025: SprintRay Crown showed SUPERIOR marginal fit vs Saremco (p=0.002) and DentaFab (p=0.0005) by micro-CT.\n\nPro 95S: larger build volume for full-arch models and multiple units. Pro 55S: compact/affordable entry point.",
    refs: ["arslan-2025-sprintray-crown","hegedus-2025-survey"]
  },
  {
    id: "formlabs-form", name: "Formlabs Form 3B+ / Form 4B", mfr: "Formlabs", cat: "Printer — SLA (LFS)",
    composition: "Low Force Stereolithography (LFS). Form 3B+: 145×145×185mm, 25μm XY. Form 4B: 200×125×210mm, 50μm XY. Price: $4K–6K.",
    composition_detail: "Validated resins: Surgical Guide, Dental LT Clear (splints), Model, Temporary CB, Permanent Crown Resin, Denture Base, Premium Teeth.", technique: "MARKET LEADER — most widely used dental 3D printer globally per Hegedüs 2025 survey.\n\nStrong ecosystem with Form Wash + Form Cure post-processing units. Excellent documentation and dental workflow guides.", evidence: "Per Young Kim 2024: Form 3 produced most accurate casts (median trueness 27.9μm). Per Wen 2024: Form 3 lowest flatness error (0.061mm).", notes: "MARKET LEADER — most widely used dental 3D printer globally per Hegedüs 2025 survey.\n\nValidated resins: Surgical Guide, Dental LT Clear (splints), Model, Temporary CB, Permanent Crown Resin, Denture Base, Premium Teeth.\n\nPer Young Kim 2024: Form 3 produced most accurate casts (median trueness 27.9μm). Per Wen 2024: Form 3 lowest flatness error (0.061mm).\n\nStrong ecosystem with Form Wash + Form Cure post-processing units. Excellent documentation and dental workflow guides.",
    refs: ["hegedus-2025-survey"]
  },
  {
    id: "asiga-pro4k", name: "Asiga MAX UV / Pro 4K", mfr: "Asiga", cat: "Printer — DLP (Open Material)",
    composition: "DLP technology. MAX UV: 119×67×75mm, 62μm XY. Pro 4K: 134×75×153mm, 62μm XY, 1μm Z resolution. Price: $5K–10K.",
    composition_detail: "OPEN MATERIAL SYSTEM — compatible with multiple third-party resins (Crowntec, VarseoSmile Crown Plus, KeySplint, etc.). Key advantage for practices wanting material flexibility without vendor lock-in.", evidence: "Used extensively in research for printing definitive crown resins. Good accuracy for orthodontic models per Venezia 2022.", notes: "OPEN MATERIAL SYSTEM — compatible with multiple third-party resins (Crowntec, VarseoSmile Crown Plus, KeySplint, etc.). Key advantage for practices wanting material flexibility without vendor lock-in.\n\nUsed extensively in research for printing definitive crown resins. Good accuracy for orthodontic models per Venezia 2022.",
    refs: ["hegedus-2025-survey"]
  },
];

// ═══════════════════════════════════════════════
// 2. SURGICAL GUIDE RESINS
// ═══════════════════════════════════════════════
export const GUIDE_RESINS = [
  {
    id: "surgical-guide-resins", name: "Surgical Guide Resins (SprintRay SG3, Formlabs SG, BEGO VarseoWax SG)", cat: "Surgical Guide Resin — Methacrylate",
    composition: "Methacrylate-based photopolymers. Biocompatible Class I/IIa. All major brands 510(k) FDA cleared. Flexural strength ~80–100 MPa post-cured.",
    technique: "PRINT ORIENTATION:\n• Complete arch: HORIZONTAL (0°) orientation — highest accuracy\n• Short-span: VERTICAL (90°) may be superior (40–110μm improvement)\n• Layer thickness: 50μm reduces deviations vs 100μm\n\nPOST-CURING: UV + heat, 20–30 min at 60°C, 385–405nm wavelength.", evidence: "EQUIVALENT ACCURACY to milled guides — routine clinical use.\n\nPer Henprasert 2020: no significant differences in accuracy between 3D-printed and milled surgical guides (angular 0.77–0.78°; apical 0.80–0.84mm).\nPer Sium-Abel 2024: all manufacturing methods within accepted safety deviation envelope (1.5–2.0mm).\n\nSTORAGE: no significant accuracy change over 14 days regardless of light/dark storage.\n\n⚠ All printed guides show slightly SHALLOWER-than-planned depth (0.71–0.84mm per Singthong 2024) — account for this in implant planning.", notes: "EQUIVALENT ACCURACY to milled guides — routine clinical use.\n\nPer Henprasert 2020: no significant differences in accuracy between 3D-printed and milled surgical guides (angular 0.77–0.78°; apical 0.80–0.84mm).\nPer Sium-Abel 2024: all manufacturing methods within accepted safety deviation envelope (1.5–2.0mm).\n\nPRINT ORIENTATION:\n• Complete arch: HORIZONTAL (0°) orientation — highest accuracy\n• Short-span: VERTICAL (90°) may be superior (40–110μm improvement)\n• Layer thickness: 50μm reduces deviations vs 100μm\n\nPOST-CURING: UV + heat, 20–30 min at 60°C, 385–405nm wavelength.\n\nSTORAGE: no significant accuracy change over 14 days regardless of light/dark storage.\n\n⚠ All printed guides show slightly SHALLOWER-than-planned depth (0.71–0.84mm per Singthong 2024) — account for this in implant planning.",
    refs: ["henprasert-2020-guide-accuracy","sium-2024-guide-manufacturing"]
  },
];

// ═══════════════════════════════════════════════
// 3. PROVISIONAL C&B RESINS
// ═══════════════════════════════════════════════
export const PROVISIONAL_RESINS = [
  {
    id: "provisional-print-resins", name: "Provisional C&B Resins (NextDent C&B MFH, Formlabs Temp CB, SprintRay Crown Temp, VarseoSmile Temp)", cat: "Provisional Resin — Temporary (<1 yr)",
    composition: "Methacrylate-based photopolymers. All 510(k) FDA cleared for TEMPORARY use (<1 yr). Flexural strength: NextDent C&B MFH 74.9–92 MPa; SprintRay ~100–120 MPa; Formlabs ~80–100 MPa.",
    composition_detail: "ROUTINE CLINICAL USE — well-established for provisional restorations.\nPOST-CURING (critical for mechanical properties):\n• Minimum: 5–10 min — adequate strength without unacceptable color change (Soto-Montero 2022)\n⚠ UNDER-CURED RESINS ARE CYTOTOXIC — material selection, washing, and post-polymerization significantly affect cytotoxicity. Do not shortcut post-curing.", evidence: "• Optimal: 60–90 min — significantly improves flexural strength, hardness, DC, and biocompatibility (Kim 2020)\n• Temperature: 80°C produces highest flexural strength (147.48 MPa) and cell viability (89.51%) vs 40°C (Bayarsaikhan 2021)", notes: "ROUTINE CLINICAL USE — well-established for provisional restorations.\n\nPOST-CURING (critical for mechanical properties):\n• Minimum: 5–10 min — adequate strength without unacceptable color change (Soto-Montero 2022)\n• Optimal: 60–90 min — significantly improves flexural strength, hardness, DC, and biocompatibility (Kim 2020)\n• Temperature: 80°C produces highest flexural strength (147.48 MPa) and cell viability (89.51%) vs 40°C (Bayarsaikhan 2021)\n\n⚠ UNDER-CURED RESINS ARE CYTOTOXIC — material selection, washing, and post-polymerization significantly affect cytotoxicity. Do not shortcut post-curing.",
    refs: ["bayarsaikhan-2021-postcure-temp","kim-2020-postcure-time"]
  },
];

// ═══════════════════════════════════════════════
// 4. PERMANENT C&B RESINS
// ═══════════════════════════════════════════════
export const PERMANENT_RESINS = [
  {
    id: "permanent-print-resins", name: "Permanent C&B Resins (Crowntec, VarseoSmile Crown Plus, Formlabs Permanent Crown, SprintRay Crown)", cat: "Permanent Resin — Definitive (>1 yr)",
    composition: "Crowntec (Saremco): 123.4 MPa dry, 97.5 MPa aged — HIGHEST mechanical properties. VarseoSmile Crown Plus (BEGO): 109.9 MPa dry. Formlabs Permanent Crown and SprintRay Crown: 510(k) FDA cleared. Crowntec and VarseoSmile: CE-marked, LIMITED FDA clearance.",
    composition_detail: "Per Flottes 2025 SR: Crowntec generally showed highest mechanical properties. ALL 3D-printed resins remain mechanically INFERIOR to CAD-CAM milled composite blocks.\n• Formlabs Permanent Crown Resin: 510(k) cleared", technique: "Per Benalcázar-Jalkh 2026: milled composite survived extended fatigue testing while ALL 3D-printed samples failed.\n\n• SprintRay Crown (Permanent): 510(k) cleared\nCLINICAL RECOMMENDATION: May use for SINGLE-UNIT restorations with appropriate consent and monitoring. NOT recommended for multi-unit FDPs until further clinical evidence. Post-cure 60–90 min at 60–80°C.", evidence: "⚠ LIMITED CLINICAL EVIDENCE — use with caution.\n\nPer Ribeiro 2025: 'insufficient clinical evidence to support use of 3D-printed resins for indirect definitive restorations.'\nPer Mandurino 2025 SR: milling significantly higher flexural strength than 3D printing (Hedge g -3.88, p=0.02).\nFDA STATUS:\n• Crowntec: CE-marked, limited FDA\n• VarseoSmile Crown Plus: CE-marked, limited FDA", notes: "⚠ LIMITED CLINICAL EVIDENCE — use with caution.\n\nPer Flottes 2025 SR: Crowntec generally showed highest mechanical properties. ALL 3D-printed resins remain mechanically INFERIOR to CAD-CAM milled composite blocks.\nPer Ribeiro 2025: 'insufficient clinical evidence to support use of 3D-printed resins for indirect definitive restorations.'\nPer Mandurino 2025 SR: milling significantly higher flexural strength than 3D printing (Hedge g -3.88, p=0.02).\nPer Benalcázar-Jalkh 2026: milled composite survived extended fatigue testing while ALL 3D-printed samples failed.\n\nFDA STATUS:\n• Formlabs Permanent Crown Resin: 510(k) cleared\n• SprintRay Crown (Permanent): 510(k) cleared\n• Crowntec: CE-marked, limited FDA\n• VarseoSmile Crown Plus: CE-marked, limited FDA\n\nCLINICAL RECOMMENDATION: May use for SINGLE-UNIT restorations with appropriate consent and monitoring. NOT recommended for multi-unit FDPs until further clinical evidence. Post-cure 60–90 min at 60–80°C.",
    refs: ["flottes-2025-permanent-sr","ribeiro-2025-evidence-gap","mandurino-2025-milled-vs-printed"]
  },
];

// ═══════════════════════════════════════════════
// 5. DENTURE RESINS
// ═══════════════════════════════════════════════
export const DENTURE_RESINS = [
  {
    id: "denture-base-resins", name: "Denture Base Resins (SprintRay IDB, Formlabs Denture Base, NextDent Denture 3D+)", cat: "Denture Resin — Base",
    composition: "All 510(k) FDA cleared. NextDent Denture 3D+: 74.89 MPa flexural, Ra 0.19–0.23μm. SprintRay IDB, Formlabs Denture Base: comparable properties.",
    technique: "Per Sivaswamy 2026 MA: conventional dentures showed BETTER RETENTION than 3D-printed (p=0.04); NO significant difference in patient satisfaction between 3D-printed, milled, and conventional.\n\nMilled specimens show higher flexural/impact strength and lower surface roughness than 3D-printed (El Samahy 2023).\n\nDENTURE TEETH: NextDent Denture Teeth and Formlabs Premium Teeth — both 510(k) cleared; show favorable wear resistance vs conventional.\n\nPost-cure: 30–60 min at 60–80°C.", evidence: "CLINICAL USE ACCEPTABLE — but conventional PMMA may have slight advantages.\n\nPer Altalla 2025 SR/MA: no sig. diff in water sorption (p=0.81), solubility (p=0.21), or surface roughness (p=0.08). But conventional PMMA exhibits higher elastic modulus (p=0.04) — greater stiffness.", notes: "CLINICAL USE ACCEPTABLE — but conventional PMMA may have slight advantages.\n\nPer Sivaswamy 2026 MA: conventional dentures showed BETTER RETENTION than 3D-printed (p=0.04); NO significant difference in patient satisfaction between 3D-printed, milled, and conventional.\n\nPer Altalla 2025 SR/MA: no sig. diff in water sorption (p=0.81), solubility (p=0.21), or surface roughness (p=0.08). But conventional PMMA exhibits higher elastic modulus (p=0.04) — greater stiffness.\n\nMilled specimens show higher flexural/impact strength and lower surface roughness than 3D-printed (El Samahy 2023).\n\nDENTURE TEETH: NextDent Denture Teeth and Formlabs Premium Teeth — both 510(k) cleared; show favorable wear resistance vs conventional.\n\nPost-cure: 30–60 min at 60–80°C.",
    refs: ["sivaswamy-2026-denture-ma"]
  },
];

// ═══════════════════════════════════════════════
// 6. SPLINT & RETAINER RESINS
// ═══════════════════════════════════════════════
export const SPLINT_RESINS = [
  {
    id: "splint-print-resins", name: "Splint Resins (KeySplint Hard/Soft, Dental LT Clear, V-Print Splint)", cat: "Splint Resin — Occlusal Appliance",
    composition: "KeySplint Hard (Keystone): ~90–110 MPa, highest hardness. KeySplint Soft: highest fracture toughness among flexible splints. Dental LT Clear (Formlabs): ~50–80 MPa, 510(k) cleared. V-Print Splint (VOCO): lowest water solubility.",
    technique: "⚠ BIOCOMPATIBILITY WARNING: insufficiently post-cured materials show CYTOTOXICITY. Aging leads to decreased properties and increased leaching. Follow manufacturer post-curing protocols exactly.\n\nKeySplint Hard: best for bruxism/TMD (hardest). KeySplint Soft: best for patient comfort. Dental LT Clear: most established (Formlabs ecosystem). V-Print Splint: lowest solubility.", evidence: "All major brands 510(k) FDA cleared. Per Qin 2025 RCT: 3D-printed splints comparable efficacy and satisfaction to conventional; significantly reduced production time.\n\nPOST-CURING:\n• UV + heat: 30–60 min — post-curing method significantly affects mechanical properties\n• Autoclave (132°C × 4 min): reduces monomer elution and improves surface microhardness WITHOUT deteriorating flexural modulus (Tangpothitham 2022)\n• LED + nitrogen atmosphere: highest surface hardness", notes: "All major brands 510(k) FDA cleared. Per Qin 2025 RCT: 3D-printed splints comparable efficacy and satisfaction to conventional; significantly reduced production time.\n\nPOST-CURING:\n• UV + heat: 30–60 min — post-curing method significantly affects mechanical properties\n• Autoclave (132°C × 4 min): reduces monomer elution and improves surface microhardness WITHOUT deteriorating flexural modulus (Tangpothitham 2022)\n• LED + nitrogen atmosphere: highest surface hardness\n\n⚠ BIOCOMPATIBILITY WARNING: insufficiently post-cured materials show CYTOTOXICITY. Aging leads to decreased properties and increased leaching. Follow manufacturer post-curing protocols exactly.\n\nKeySplint Hard: best for bruxism/TMD (hardest). KeySplint Soft: best for patient comfort. Dental LT Clear: most established (Formlabs ecosystem). V-Print Splint: lowest solubility.",
    refs: ["flottes-2025-permanent-sr"]
  },
];

// ═══════════════════════════════════════════════
// 7. PROTOCOLS & REGULATORY
// ═══════════════════════════════════════════════
export const PRINT_PROTOCOLS = [
  {
    id: "postcure-protocol", name: "Post-Curing Protocol — Quick Reference", cat: "Protocol — Post-Curing",
    composition_detail: "POST-CURING BY APPLICATION:\n• Surgical Guides: 20–30 min at 60°C, 385–405nm\n• Provisional C&B: minimum 5–10 min (adequate); optimal 60–90 min (best strength + biocompatibility)\n• Permanent C&B: 60–90 min at 60–80°C (mandatory for adequate properties)\n• Denture Base: 30–60 min at 60–80°C\n• Splints: 30–60 min UV+heat OR autoclave 132°C × 4 min\nCRITICAL FINDINGS:", technique: "⚠ UNDER-CURED = CYTOTOXIC. Post-curing is not optional — it is a critical biocompatibility step.", evidence: "• Per Bayarsaikhan 2021: 80°C produces highest flexural strength (147.48 MPa) and best biocompatibility (89.51% cell viability) vs 40°C\n• Per Kim 2020: 60–90 min significantly improves strength, hardness, DC, and biocompatibility\n• Per Gekle 2025: 385nm and 400nm wavelengths recommended; 460nm NOT advisable\n• Surface (0mm) shows higher DC/hardness than 2–4mm depths — thicker restorations need longer curing", notes: "POST-CURING BY APPLICATION:\n\n• Surgical Guides: 20–30 min at 60°C, 385–405nm\n• Provisional C&B: minimum 5–10 min (adequate); optimal 60–90 min (best strength + biocompatibility)\n• Permanent C&B: 60–90 min at 60–80°C (mandatory for adequate properties)\n• Denture Base: 30–60 min at 60–80°C\n• Splints: 30–60 min UV+heat OR autoclave 132°C × 4 min\n\nCRITICAL FINDINGS:\n• Per Bayarsaikhan 2021: 80°C produces highest flexural strength (147.48 MPa) and best biocompatibility (89.51% cell viability) vs 40°C\n• Per Kim 2020: 60–90 min significantly improves strength, hardness, DC, and biocompatibility\n• Per Gekle 2025: 385nm and 400nm wavelengths recommended; 460nm NOT advisable\n• Surface (0mm) shows higher DC/hardness than 2–4mm depths — thicker restorations need longer curing\n\n⚠ UNDER-CURED = CYTOTOXIC. Post-curing is not optional — it is a critical biocompatibility step.",
    refs: ["bayarsaikhan-2021-postcure-temp","kim-2020-postcure-time"]
  },
  {
    id: "fda-clearance-guide", name: "FDA Clearance Status — Quick Reference", cat: "Protocol — FDA Regulatory Status",
    composition_detail: "• Permanent C&B (>1 yr): Formlabs Permanent Crown Resin (510(k)); SprintRay Crown Permanent (510(k))", technique: "• Surgical guides: SprintRay SG3, Formlabs SG, BEGO VarseoWax SG, Primeprint SG\n• Provisional C&B (<1 yr): NextDent C&B MFH, Formlabs Temp CB, SprintRay Crown Temp, VarseoSmile Temp\n• Denture base: SprintRay IDB, Formlabs Denture Base, NextDent Denture 3D+\n• Denture teeth: NextDent Denture Teeth, Formlabs Premium Teeth\n• Splints: KeySplint Hard/Soft, Dental LT Clear, SprintRay Splint\n• Models: not regulated (non-intraoral)", evidence: "FDA CLEARANCE BY CATEGORY (as of 2026):\n\n✅ ROUTINE USE — 510(k) CLEARED:\n⚠ USE WITH CAUTION — LIMITED CLEARANCE:\n• Crowntec and VarseoSmile Crown Plus: CE-marked only, limited FDA\n• Per Ribeiro 2025: 'insufficient clinical evidence to support 3D-printed resins for indirect definitive restorations'\n\n⚠ Single-unit permanent restorations ONLY with consent and monitoring. Multi-unit FDPs NOT recommended until clinical evidence matures.", notes: "FDA CLEARANCE BY CATEGORY (as of 2026):\n\n✅ ROUTINE USE — 510(k) CLEARED:\n• Surgical guides: SprintRay SG3, Formlabs SG, BEGO VarseoWax SG, Primeprint SG\n• Provisional C&B (<1 yr): NextDent C&B MFH, Formlabs Temp CB, SprintRay Crown Temp, VarseoSmile Temp\n• Denture base: SprintRay IDB, Formlabs Denture Base, NextDent Denture 3D+\n• Denture teeth: NextDent Denture Teeth, Formlabs Premium Teeth\n• Splints: KeySplint Hard/Soft, Dental LT Clear, SprintRay Splint\n• Models: not regulated (non-intraoral)\n\n⚠ USE WITH CAUTION — LIMITED CLEARANCE:\n• Permanent C&B (>1 yr): Formlabs Permanent Crown Resin (510(k)); SprintRay Crown Permanent (510(k))\n• Crowntec and VarseoSmile Crown Plus: CE-marked only, limited FDA\n• Per Ribeiro 2025: 'insufficient clinical evidence to support 3D-printed resins for indirect definitive restorations'\n\n⚠ Single-unit permanent restorations ONLY with consent and monitoring. Multi-unit FDPs NOT recommended until clinical evidence matures.",
    refs: ["ribeiro-2025-evidence-gap","flottes-2025-permanent-sr"]
  },
];

// ═══════════════════════════════════════════════
// 8. NO-PREP VENEERS (3D-Printed)
// ═══════════════════════════════════════════════
export const VENEER_RESINS = [
  {
    id: "printed-veneers", name: "3D-Printed No-Prep Veneers (Ceramic LCM & Resin)", cat: "Permanent Resin — No-Prep Veneers",
    composition_detail: "RESIN-BASED PERMANENT VENEERS:\n⚠ RESIN VENEERS: use with caution — consider for trial/diagnostic veneers, cost-sensitive patients with informed consent, or cases where ceramic is contraindicated. NOT first-line for definitive veneers.", technique: "ULTRA-THIN VENEERS (0.1–0.2mm) ARE TECHNICALLY FEASIBLE with 3D printing.\n\nCERAMIC (LCM — Lithography-based Ceramic Manufacturing):\nPer Unkovskiy 2025: proof-of-concept — 6 non-prep lithium disilicate veneers printed at 0.1–0.2mm using CeraFab S65 Medical (Lithoz). Post-processed: debindering 430°C (5h), sintering 900°C. 'Excellent fit and esthetics.'\n\n3D-PRINTED ZIRCONIA VENEERS:\nPer Rues 2023: incisal edge gap 78μm (printed) vs 391μm (milled) — p=0.001. Printed SIGNIFICANTLY BETTER at sharp edges because drill compensation can be omitted. Marginal gap: milled slightly better (44 vs 55μm, p=0.011).\n\nPer Alghauli 2024 SR/MA: 3D-printed veneers exhibited SUPERIOR trueness and better marginal/internal fit vs milled restorations.\n\nPRINT ORIENTATION: 30° = highest trueness for veneers (RMSE 0.016 per Metin 2024). AVOID 90° — lowest trueness.", evidence: "Per Dascanio 2026 umbrella review: lower flexural strength, fatigue resistance, and color stability vs milled. Short-term (6–24 mo) encouraging but long-term durability uncertain.", notes: "ULTRA-THIN VENEERS (0.1–0.2mm) ARE TECHNICALLY FEASIBLE with 3D printing.\n\nCERAMIC (LCM — Lithography-based Ceramic Manufacturing):\nPer Unkovskiy 2025: proof-of-concept — 6 non-prep lithium disilicate veneers printed at 0.1–0.2mm using CeraFab S65 Medical (Lithoz). Post-processed: debindering 430°C (5h), sintering 900°C. 'Excellent fit and esthetics.'\n\n3D-PRINTED ZIRCONIA VENEERS:\nPer Rues 2023: incisal edge gap 78μm (printed) vs 391μm (milled) — p=0.001. Printed SIGNIFICANTLY BETTER at sharp edges because drill compensation can be omitted. Marginal gap: milled slightly better (44 vs 55μm, p=0.011).\n\nPer Alghauli 2024 SR/MA: 3D-printed veneers exhibited SUPERIOR trueness and better marginal/internal fit vs milled restorations.\n\nRESIN-BASED PERMANENT VENEERS:\nPer Dascanio 2026 umbrella review: lower flexural strength, fatigue resistance, and color stability vs milled. Short-term (6–24 mo) encouraging but long-term durability uncertain.\n\n⚠ RESIN VENEERS: use with caution — consider for trial/diagnostic veneers, cost-sensitive patients with informed consent, or cases where ceramic is contraindicated. NOT first-line for definitive veneers.\n\nPRINT ORIENTATION: 30° = highest trueness for veneers (RMSE 0.016 per Metin 2024). AVOID 90° — lowest trueness.",
    refs: ["alghauli-2024-veneer-sr","unkovskiy-2025-lcm-veneer","rues-2023-zirconia-veneer-fit","dascanio-2026-durability-umbrella","metin-2024-veneer-orientation"]
  },
];

// ═══════════════════════════════════════════════
// 9. POST-PROCESSING DEEP DIVE
// ═══════════════════════════════════════════════
export const POST_PROCESSING = [
  {
    id: "washing-protocol", name: "Washing Protocol — IPA vs TPM", cat: "Protocol — Post-Processing (Washing)",
    composition_detail: "Per Wang 2025 SR: TPM achieves HIGHER trueness and precision vs IPA. IPA risks material degradation with extended exposure. TPM is safer (less volatile, non-flammable) and improves wettability/DC.", technique: "PROTOCOL:\n1) Remove from platform with plastic scraper\n2) Initial wash: IPA or TPM, 3–5 min (ultrasonic preferred)\n3) Second wash: fresh solvent, 2–3 min\n4) Air dry: 5–10 min (compressed air or ambient)\n5) Then proceed to support removal → post-curing", evidence: "IPA vs TPM — TRADE-OFF: TPM better for accuracy, IPA better for strength.\n\nPer Mostafavi 2021: TPM 5–7 min = highest trueness and precision. IPA groups showed significantly lower accuracy.\nPer Scherer 2024: IPA-91% and IPA-99% = highest flexural strength. TPM, bio-ethyl alcohol = lowest flexural strength.\n\nOPTIMAL WASH DURATION: 5–15 min (both solvents). 30+ min may DEGRADE material properties (reduced flexural strength). Per Hwangbo 2021: 7–8 min showed highest strength.\n\n⚠ IPA is FLAMMABLE — adequate ventilation required. TPM is safer alternative.", notes: "IPA vs TPM — TRADE-OFF: TPM better for accuracy, IPA better for strength.\n\nPer Wang 2025 SR: TPM achieves HIGHER trueness and precision vs IPA. IPA risks material degradation with extended exposure. TPM is safer (less volatile, non-flammable) and improves wettability/DC.\n\nPer Mostafavi 2021: TPM 5–7 min = highest trueness and precision. IPA groups showed significantly lower accuracy.\nPer Scherer 2024: IPA-91% and IPA-99% = highest flexural strength. TPM, bio-ethyl alcohol = lowest flexural strength.\n\nOPTIMAL WASH DURATION: 5–15 min (both solvents). 30+ min may DEGRADE material properties (reduced flexural strength). Per Hwangbo 2021: 7–8 min showed highest strength.\n\nPROTOCOL:\n1) Remove from platform with plastic scraper\n2) Initial wash: IPA or TPM, 3–5 min (ultrasonic preferred)\n3) Second wash: fresh solvent, 2–3 min\n4) Air dry: 5–10 min (compressed air or ambient)\n5) Then proceed to support removal → post-curing\n\n⚠ IPA is FLAMMABLE — adequate ventilation required. TPM is safer alternative.",
    refs: ["wang-2025-washing-sr"]
  },
  {
    id: "orientation-layer-guide", name: "Print Orientation & Layer Thickness — Quick Reference", cat: "Protocol — Print Settings",
    composition_detail: "COLOR/TRANSLUCENCY: print orientation significantly affects color (ΔL*) and translucency. Some materials exceed acceptability threshold at certain angles — test on specific resin before clinical use.", technique: "OPTIMAL ORIENTATION BY RESTORATION:\nLAYER THICKNESS:", evidence: "• Surgical guides: 0° (horizontal) — highest accuracy for complete arch\n• Crowns: 30–45° — balance of fit and edge strength\n• Veneers: 30° — highest trueness (RMSE 0.016 per Metin 2024)\n• Splints: 0° — optimal accuracy\n• Dentures: 45–90° — minimize warping\n• Models: 30–45° — good accuracy with efficiency\n⚠ 90° consistently shows LOWEST trueness — avoid for restorations.\n\nPer Borella 2023: 100μm significantly worse than 50μm for DC, roughness, flexural strength, and hardness (p<0.05).\n• 20μm: highest precision — for highest-accuracy restorations (slow)\n• 50μm: RECOMMENDED for most restorations — best balance\n• 100μm: acceptable for models and dentures only", notes: "OPTIMAL ORIENTATION BY RESTORATION:\n• Surgical guides: 0° (horizontal) — highest accuracy for complete arch\n• Crowns: 30–45° — balance of fit and edge strength\n• Veneers: 30° — highest trueness (RMSE 0.016 per Metin 2024)\n• Splints: 0° — optimal accuracy\n• Dentures: 45–90° — minimize warping\n• Models: 30–45° — good accuracy with efficiency\n⚠ 90° consistently shows LOWEST trueness — avoid for restorations.\n\nLAYER THICKNESS:\nPer Borella 2023: 100μm significantly worse than 50μm for DC, roughness, flexural strength, and hardness (p<0.05).\n• 20μm: highest precision — for highest-accuracy restorations (slow)\n• 50μm: RECOMMENDED for most restorations — best balance\n• 100μm: acceptable for models and dentures only\n\nCOLOR/TRANSLUCENCY: print orientation significantly affects color (ΔL*) and translucency. Some materials exceed acceptability threshold at certain angles — test on specific resin before clinical use.",
    refs: ["metin-2024-veneer-orientation","borella-2023-layer-thickness"]
  },
  {
    id: "workflow-times", name: "Digital Workflow Time Estimates & Troubleshooting", cat: "Protocol — Workflow & Troubleshooting",
    composition_detail: "• Surface pitting → filter resin; replace vat; extend wash time\nSUPPORT REMOVAL: BEFORE post-curing (easier when resin slightly flexible; post-cured supports become brittle and chip). Exception: ultra-thin veneers may need support during curing to prevent warping.\n\nVENTILATION: dedicated area with 6–10 air changes/hr; carbon filtration for VOCs; IPA generates flammable vapors; printing area separate from patient treatment. Nitrile gloves required for resin handling.", technique: "WORKFLOW TIMES (scan → design → print → post-process → deliver):\n• Surgical guide (single): ~1.5–2.5 hr\n• Provisional crown: ~1–1.5 hr\n• Permanent crown: ~2–3 hr\n• Splint: ~1.5–3 hr\n• Denture base: ~4–6 hr\n• Full-arch model: ~1.5–3 hr\nDigital workflows reduced chairside time by 29% vs conventional.\n\nCOMMON PRINT FAILURES & SOLUTIONS:\n• Failed adhesion to platform → re-level; increase base exposure; clean with IPA\n• Layer separation → increase exposure time; warm resin to 25–30°C; replace FEP film\n• Warping → add supports; optimize orientation; follow cure times exactly\n• Brittleness → INCREASE post-cure time (most common cause); reduce wash time\n• Cytotoxicity → extend post-cure to 60–90 min; proper washing protocol", notes: "WORKFLOW TIMES (scan → design → print → post-process → deliver):\n• Surgical guide (single): ~1.5–2.5 hr\n• Provisional crown: ~1–1.5 hr\n• Permanent crown: ~2–3 hr\n• Splint: ~1.5–3 hr\n• Denture base: ~4–6 hr\n• Full-arch model: ~1.5–3 hr\nDigital workflows reduced chairside time by 29% vs conventional.\n\nCOMMON PRINT FAILURES & SOLUTIONS:\n• Failed adhesion to platform → re-level; increase base exposure; clean with IPA\n• Layer separation → increase exposure time; warm resin to 25–30°C; replace FEP film\n• Warping → add supports; optimize orientation; follow cure times exactly\n• Surface pitting → filter resin; replace vat; extend wash time\n• Brittleness → INCREASE post-cure time (most common cause); reduce wash time\n• Cytotoxicity → extend post-cure to 60–90 min; proper washing protocol\n\nSUPPORT REMOVAL: BEFORE post-curing (easier when resin slightly flexible; post-cured supports become brittle and chip). Exception: ultra-thin veneers may need support during curing to prevent warping.\n\nVENTILATION: dedicated area with 6–10 air changes/hr; carbon filtration for VOCs; IPA generates flammable vapors; printing area separate from patient treatment. Nitrile gloves required for resin handling.",
    refs: ["wang-2025-washing-sr","bayarsaikhan-2021-postcure-temp"]
  },
];

// ═══════════════════════════════════════════════
export const ALL_PRINTING_PRODUCTS = [
  ...PRINTERS,
  ...GUIDE_RESINS,
  ...PROVISIONAL_RESINS,
  ...PERMANENT_RESINS,
  ...DENTURE_RESINS,
  ...SPLINT_RESINS,
  ...VENEER_RESINS,
  ...PRINT_PROTOCOLS,
  ...POST_PROCESSING,
];
