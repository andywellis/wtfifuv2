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
// 1. PRINTER TECHNOLOGY
// ═══════════════════════════════════════════════
export const PRINTERS = [
  {
    id: "tech-comparison", lastReviewed: "2026-03", name: "SLA vs DLP vs LCD — Technology Selection", mfr: "N/A — Reference", cat: "Printer Technology — Comparison",
    composition_detail: "THREE PRINT TECHNOLOGIES:\n\nSLA (Stereolithography):\n• UV laser traces each layer point-by-point\n• Highest resolution (25μm XY) but SLOWEST\n• Best for: surgical guides, models requiring extreme accuracy\n• Example: Formlabs Form 3B+\n\nDLP (Digital Light Processing):\n• UV projector flashes ENTIRE layer simultaneously\n• Fast + accurate; limited by projector resolution\n• Best for: balance of speed + quality\n• Example: SprintRay Pro 95S, Asiga MAX UV\n\nLCD (Masked SLA / mSLA):\n• LCD screen masks UV LEDs; entire layer at once\n• Fastest + most affordable; LCD degrades over time\n• Best for: high-volume production, splints, models\n• Example: Phrozen, Elegoo (consumer); SprintRay Pro 55S (dental)",
    technique: "PRINTER SELECTION CRITERIA:\n• Accuracy needed: SLA > DLP > LCD\n• Speed needed: LCD ≈ DLP >> SLA\n• Budget: LCD < DLP < SLA\n• Volume: LCD/DLP for production; SLA for precision\n• Material compatibility: check manufacturer-validated resin list\n• Resolution: 25–50μm XY typical for dental",
    evidence: "Per García Gil 2025: SLA (Formlabs Form 3B) showed BEST accuracy for full-arch models; DLP comparable for single-unit work.\nPer Tatlicioglu 2025: DLP produced significantly more accurate denture bases than LCD (p<0.05); DLP also had lower residual material and better surface quality.\n\nAll three technologies produce clinically acceptable results for most dental applications. SLA preferred when accuracy is paramount (surgical guides, implant models). DLP/LCD preferred for production speed.",
    notes: "All three technologies produce clinically acceptable dental restorations. Choice depends on workflow volume, accuracy requirements, and budget.",
    refs: ["garcia-gil-2025-3dp-accuracy","tatlicioglu-2025-dlp-lcd"]
  },
  {
    id: "sprintray-pro", lastReviewed: "2026-03", name: "SprintRay Pro 95S / Pro 55S", mfr: "SprintRay", cat: "Printer Technology — DLP/LCD",
    composition_detail: "Pro 95S: DLP, 4K resolution, open material system, build volume 192×120×200mm.\nPro 55S: LCD, faster print speed, more affordable, same build volume.\n\nSprintRay ecosystem: Pro Wash (automated washing), Pro Cure (post-curing), RayWare (slicing software), SprintRay Cloud (design service).",
    technique: "Validated for: surgical guides, temporary crowns, denture bases, splints, models, IBTs.\nLayner thickness: 50μm (guides/crowns) to 100μm (models/splints).\nOpen material system accepts third-party resins with custom profiles.",
    evidence: "SprintRay is the most widely adopted dental 3D printer in North America. Closed-loop ecosystem (print → wash → cure) simplifies workflow. FDA-cleared materials available for each indication.",
    notes: "Most popular dental 3D printer ecosystem in North America. DLP (95S) for accuracy, LCD (55S) for volume/value.",
    refs: []
  },
  {
    id: "formlabs-form", lastReviewed: "2026-03", name: "Formlabs Form 3B+ / Form 4B", mfr: "Formlabs", cat: "Printer Technology — SLA/DLP",
    composition_detail: "Form 3B+: Low Force Stereolithography (LFS) — inverted SLA with flexible tank reduces peel forces. Build volume 145×145×185mm.\nForm 4B: next-gen, faster print engine, larger build volume.\n\nFormlabs ecosystem: Form Wash, Form Cure, PreForm software, dental material library.",
    technique: "Validated for: surgical guides, temporary crowns, permanent crowns, denture bases, splints, models, IBTs, custom trays.\nHighest material library of any dental printer.\nLayer thickness: 25–50μm (dental applications).",
    evidence: "Per García Gil 2025: Form 3B showed BEST accuracy for full-arch models among tested printers.\nFormlabs Permanent Crown resin is one of few FDA-cleared permanent crown print resins. Broadest validated material range in dental 3D printing.",
    notes: "Gold standard for accuracy (SLA). Broadest material library. Form 4B represents next-generation speed improvement.",
    refs: ["garcia-gil-2025-3dp-accuracy"]
  },
  {
    id: "asiga-pro4k", lastReviewed: "2026-03", name: "Asiga MAX UV / Pro 4K", mfr: "Asiga", cat: "Printer Technology — DLP",
    composition_detail: "DLP with 385nm UV LED. MAX UV: 4K resolution (51μm pixel), build volume 119×67×75mm.\nPro 4K: larger build volume for full-arch models.\n\nTrue open material platform — any 385nm-compatible resin. No proprietary lockout.",
    technique: "Validated for: all dental indications with compatible resins.\nTrue open platform = maximum material flexibility.\nSmaller build volume limits full-arch production runs.",
    evidence: "Popular in labs requiring material flexibility. Highest resolution DLP pixel size among dental printers. Open platform means lower material costs but requires operator validation of resin profiles.",
    notes: "True open-material DLP platform. Excellent resolution. Smaller build volume than SprintRay/Formlabs.",
    refs: []
  },
];

// ═══════════════════════════════════════════════
// 2. SURGICAL GUIDE RESINS (individual products)
// ═══════════════════════════════════════════════
export const GUIDE_RESINS = [
  {
    id: "sprintray-sg3", lastReviewed: "2026-03", name: "SprintRay Surgical Guide 3", mfr: "SprintRay", cat: "Resin — Surgical Guide",
    composition_detail: "Biocompatible Class I photopolymer resin. Clear/translucent. 510(k) FDA cleared for surgical guides.\nCompatible with SprintRay Pro 95S/55S printers.",
    technique: "PRINT: 50μm layer thickness, horizontal orientation for full-arch (highest accuracy).\nWASH: IPA or TPM, 5–10 min.\nPOST-CURE: UV + heat, 20–30 min at 60°C, 385–405nm.\nSTORAGE: use within 6 months; store dark, dry, room temp.",
    evidence: "Per Henprasert 2020: no significant differences in accuracy between 3D-printed and milled surgical guides (angular 0.77–0.78°; apical 0.80–0.84mm).\nPer Sium-Abel 2024: all manufacturing methods within accepted safety deviation envelope (1.5–2.0mm).\n\nINDICATIONS: implant placement guides, bone reduction guides, endodontic access guides.",
    notes: "Equivalent accuracy to milled guides. Print horizontal for full-arch, consider vertical for short-span (40–110μm improvement per evidence).",
    refs: ["henprasert-2020-guide-accuracy","sium-abel-2024-guide-deviation"]
  },
  {
    id: "formlabs-sg", lastReviewed: "2026-03", name: "Formlabs Surgical Guide Resin", mfr: "Formlabs", cat: "Resin — Surgical Guide",
    composition_detail: "Biocompatible Class I methacrylate-based photopolymer. Clear. 510(k) FDA cleared.\nOptimized for Form 3B+/Form 4B printers.",
    technique: "PRINT: 50μm layer thickness on Form 3B+.\nWASH: Form Wash, IPA 5 min.\nPOST-CURE: Form Cure, 60°C for 30 min.\nAutoclavable after post-curing for sterile surgical field.",
    evidence: "Per García Gil 2025: Formlabs SLA showed best full-arch accuracy. Autoclavability is key advantage — allows sterile surgical field without guide bags.\n\nINDICATIONS: implant placement guides, bone reduction guides, endodontic access guides.",
    notes: "Best accuracy (SLA platform). Autoclavable. Formlabs ecosystem integration.",
    refs: ["garcia-gil-2025-3dp-accuracy"]
  },
  {
    id: "bego-varseo-sg", lastReviewed: "2026-03", name: "BEGO VarseoWax Surgical Guide", mfr: "BEGO", cat: "Resin — Surgical Guide",
    composition_detail: "Biocompatible photopolymer for DLP printers. Transparent. CE marked, 510(k) clearance.\nDesigned for BEGO Varseo S and compatible DLP printers.",
    technique: "PRINT: 50μm layer thickness.\nWASH: IPA 3–5 min.\nPOST-CURE: per BEGO Otoflash protocol.\nCompatible with open-material DLP printers (Asiga, etc.).",
    evidence: "BEGO is established in European dental lab market. VarseoWax system covers guides, temporaries, and models in a single printer ecosystem.\n\nINDICATIONS: implant placement guides.",
    notes: "European market leader. Compatible with open DLP platforms.",
    refs: []
  },
];

// ═══════════════════════════════════════════════
// 3. PROVISIONAL C&B RESINS (individual products)
// ═══════════════════════════════════════════════
export const PROVISIONAL_RESINS = [
  {
    id: "nextdent-cb-mfh", lastReviewed: "2026-03", name: "NextDent C&B MFH", mfr: "NextDent (3D Systems)", cat: "Resin — Provisional C&B",
    composition_detail: "Methacrylic oligomer + phosphine oxide photoinitiator. Micro-filled hybrid (MFH). Available in A1, A2, A3, A3.5, B1 VITA shades.\n510(k) FDA cleared for temporary crowns/bridges.",
    technique: "PRINT: 50μm layer thickness.\nWASH: IPA 3 min (ultrasonic) or TPM.\nPOST-CURE: minimum 10 min (adequate strength); optimal 60–90 min (max mechanical properties per Kim 2020).\nTEMP: 80°C produces highest flexural strength (147.48 MPa per Bayarsaikhan 2021).\n\n⚠ UNDER-CURED RESINS ARE CYTOTOXIC — do not shortcut post-curing.",
    evidence: "Most widely studied provisional print resin. Per Soto-Montero 2022: 5–10 min post-cure = adequate strength without unacceptable color change. Per Kim 2020: 60–90 min significantly improves flexural strength, hardness, and biocompatibility.\n\nFlexural strength after full post-cure approaches milled PMMA.\n\nINDICATIONS: single crowns, bridges, inlays, onlays (temporary, <12 months).",
    notes: "Gold standard provisional print resin. Most clinical data available. Shade range covers most clinical situations.",
    refs: ["soto-montero-2022-postcure","kim-2020-postcure-properties"]
  },
  {
    id: "formlabs-temp-cb", lastReviewed: "2026-03", name: "Formlabs Temporary CB Resin", mfr: "Formlabs", cat: "Resin — Provisional C&B",
    composition_detail: "Methacrylate-based photopolymer. Available in A1, A2, A3 shades.\n510(k) FDA cleared. Optimized for Form 3B+/Form 4B.",
    technique: "PRINT: 50μm on Form 3B+.\nWASH: Form Wash, IPA 5 min.\nPOST-CURE: Form Cure, 80°C for 60 min.\nFormlabs recommends their full wash → cure workflow for consistent results.",
    evidence: "Formlabs ecosystem advantage: PreForm software has validated print profiles for this resin = consistent results with minimal operator tuning.\n\nINDICATIONS: single crowns, bridges, inlays, onlays (temporary).",
    notes: "Formlabs ecosystem integration. Validated profiles reduce operator error.",
    refs: []
  },
  {
    id: "sprintray-crown-temp", lastReviewed: "2026-03", name: "SprintRay Crown Temp", mfr: "SprintRay", cat: "Resin — Provisional C&B",
    composition_detail: "Methacrylate-based photopolymer. Multiple VITA shades.\n510(k) FDA cleared for temporary restorations.",
    technique: "PRINT: 50μm layer thickness on SprintRay Pro.\nWASH: SprintRay Pro Wash, 5–10 min.\nPOST-CURE: SprintRay Pro Cure, per material profile.\nSprintRay Cloud design service available for chairside workflow.",
    evidence: "Part of SprintRay's closed-loop ecosystem. SprintRay Cloud allows chairside design without CAD expertise.\n\nINDICATIONS: single crowns, bridges (temporary, <12 months).",
    notes: "SprintRay ecosystem. Cloud design service lowers barrier to entry for chairside printing.",
    refs: []
  },
  {
    id: "varseosmile-temp", lastReviewed: "2026-03", name: "BEGO VarseoSmile Temp", mfr: "BEGO", cat: "Resin — Provisional C&B",
    composition_detail: "Methacrylate-based photopolymer for DLP printers. Multiple shades.\nCE marked. Available for open-material DLP systems.",
    technique: "PRINT: 50μm layer thickness on BEGO Varseo or compatible DLP.\nWASH: IPA.\nPOST-CURE: BEGO Otoflash protocol.",
    evidence: "BEGO's provisional resin in the VarseoSmile ecosystem. European market established.\n\nINDICATIONS: single crowns, bridges (temporary).",
    notes: "BEGO ecosystem. Open-material DLP compatible.",
    refs: []
  },
];

// ═══════════════════════════════════════════════
// 4. PERMANENT C&B RESINS (individual products)
// ═══════════════════════════════════════════════
export const PERMANENT_RESINS = [
  {
    id: "crowntec-permanent", lastReviewed: "2026-03", name: "Saremco Crowntec", mfr: "Saremco Dental", cat: "Resin — Permanent C&B",
    composition_detail: "Ceramic-filled hybrid composite resin. Highest mechanical properties among 3D-printed permanent resins per Flottes 2025.\n510(k) FDA cleared for permanent crowns.",
    technique: "PRINT: 50μm layer thickness.\nWASH: per manufacturer protocol.\nPOST-CURE: extended cure cycle critical for permanent indication.\n\n⚠ ADHESIVE CEMENTATION MANDATORY — print resins are weaker than milled blocks.",
    evidence: "Per Flottes 2025 SR: Crowntec generally showed HIGHEST mechanical properties among 3D-printed permanent resins. But ALL 3D-printed resins remain mechanically INFERIOR to CAD-CAM milled composite blocks.\nPer Benalcázar-Jalkh 2026: milled composite survived extended fatigue testing while ALL 3D-printed samples failed.\nPer Mandurino 2025 SR: milling significantly higher flexural strength than 3D printing (Hedge g -3.88, p=0.02).\n\n⚠ LIMITED CLINICAL EVIDENCE — use with caution for permanent restorations.\nINDICATIONS: single crowns (permanent, with informed consent about limited long-term data).",
    notes: "Best mechanical properties among printed permanent resins. Still inferior to milled. Limited clinical data.",
    refs: ["flottes-2025-permanent-sr","mandurino-2025-milled-vs-printed","benalcazar-2026-fatigue"]
  },
  {
    id: "varseosmile-crown-plus", lastReviewed: "2026-03", name: "BEGO VarseoSmile Crown Plus", mfr: "BEGO", cat: "Resin — Permanent C&B",
    composition_detail: "Ceramic-filled hybrid composite for permanent restorations. CE marked. For DLP printers.\n510(k) FDA cleared for permanent single crowns.",
    technique: "PRINT: 50μm layer thickness on BEGO Varseo or compatible DLP.\nWASH: IPA.\nPOST-CURE: extended BEGO Otoflash protocol.\n\n⚠ ADHESIVE CEMENTATION MANDATORY.",
    evidence: "Per Flottes 2025 SR: included in permanent resin comparison — mechanical properties below Crowntec but clinically acceptable in short-term.\nPer Ribeiro 2025: 'insufficient clinical evidence to support use of 3D-printed resins for indirect definitive restorations.'\n\n⚠ LIMITED LONG-TERM DATA.\nINDICATIONS: single crowns (permanent, with caution).",
    notes: "FDA-cleared permanent option. Limited long-term clinical evidence. Use with informed consent.",
    refs: ["flottes-2025-permanent-sr","ribeiro-2025-insufficient-evidence"]
  },
  {
    id: "formlabs-permanent", lastReviewed: "2026-03", name: "Formlabs Permanent Crown Resin", mfr: "Formlabs", cat: "Resin — Permanent C&B",
    composition_detail: "Ceramic-filled hybrid composite. Available in A1, A2, A3 shades.\n510(k) FDA cleared for permanent single crowns. Formlabs Form 3B+/Form 4B.",
    technique: "PRINT: 50μm on Form 3B+.\nWASH: Form Wash, IPA.\nPOST-CURE: Form Cure, extended protocol per Formlabs dental library.\n\n⚠ ADHESIVE CEMENTATION MANDATORY.",
    evidence: "One of few FDA-cleared permanent crown print resins. Formlabs ecosystem integration with validated profiles.\nPer Ribeiro 2025: evidence insufficient for definitive long-term recommendations.\n\n⚠ Use for single crowns only — NO FPDs.\nINDICATIONS: single crowns (permanent, with caution and informed consent).",
    notes: "FDA-cleared permanent option. Formlabs ecosystem. Single crowns only. Limited long-term data.",
    refs: ["ribeiro-2025-insufficient-evidence"]
  },
  {
    id: "sprintray-crown-perm", lastReviewed: "2026-03", name: "SprintRay Crown", mfr: "SprintRay", cat: "Resin — Permanent C&B",
    composition_detail: "Ceramic-filled hybrid composite for permanent restorations.\n510(k) FDA cleared for permanent single crowns.",
    technique: "PRINT: 50μm on SprintRay Pro.\nWASH: SprintRay Pro Wash.\nPOST-CURE: SprintRay Pro Cure, extended protocol.\n\n⚠ ADHESIVE CEMENTATION MANDATORY.",
    evidence: "SprintRay's permanent crown resin. Same evidence limitations as other printed permanent materials.\nPer Flottes 2025 SR: ALL 3D-printed permanent resins mechanically inferior to milled.\n\n⚠ LIMITED LONG-TERM DATA.\nINDICATIONS: single crowns (permanent, with caution).",
    notes: "SprintRay ecosystem. FDA-cleared. Same long-term evidence limitations as all printed permanent resins.",
    refs: ["flottes-2025-permanent-sr"]
  },
];

// ═══════════════════════════════════════════════
// 5. DENTURE BASE RESINS (individual products)
// ═══════════════════════════════════════════════
export const DENTURE_RESINS = [
  {
    id: "sprintray-idb", lastReviewed: "2026-03", name: "SprintRay IDB (Integrated Denture Base)", mfr: "SprintRay", cat: "Resin — Denture Base",
    composition_detail: "PMMA-based photopolymer for denture bases. Available in pink shades.\n510(k) FDA cleared for denture bases.",
    technique: "PRINT: 100μm layer thickness (adequate for denture base).\nWASH: SprintRay Pro Wash.\nPOST-CURE: SprintRay Pro Cure, full protocol.\nTeeth bonded with denture base bonding agent or printed monolithically.",
    evidence: "Per Sivaswamy 2026 MA: conventional dentures showed BETTER RETENTION than 3D-printed (p=0.04); NO significant difference in patient satisfaction.\nPer Altalla 2025 SR: no sig. diff in water sorption, solubility, or surface roughness vs conventional PMMA. But conventional has higher elastic modulus (p=0.04).\nMilled denture bases show higher strength than printed (El Samahy 2023).\n\nINDICATIONS: complete dentures, partial denture bases, interim prostheses.",
    notes: "Clinically acceptable but milled PMMA has higher strength. Conventional PMMA has better retention per MA data.",
    refs: ["sivaswamy-2026-printed-denture","altalla-2025-denture-properties"]
  },
  {
    id: "formlabs-denture-base", lastReviewed: "2026-03", name: "Formlabs Denture Base Resin", mfr: "Formlabs", cat: "Resin — Denture Base",
    composition_detail: "PMMA-based photopolymer. Available in pink shades (light, medium, dark).\n510(k) FDA cleared. Formlabs Form 3B+/Form 4B.",
    technique: "PRINT: 100μm on Form 3B+.\nWASH: Form Wash, IPA.\nPOST-CURE: Form Cure, extended protocol.\nFormlabs offers complete denture workflow: base + teeth in one print session.",
    evidence: "Same evidence class as all printed denture bases — clinically acceptable but mechanically inferior to milled.\nFormlabs offers the most complete printed denture workflow (base + teeth + try-in).\n\nINDICATIONS: complete dentures, partial denture bases.",
    notes: "Complete Formlabs denture workflow available. Clinically acceptable. Milled PMMA still stronger.",
    refs: ["sivaswamy-2026-printed-denture"]
  },
  {
    id: "nextdent-denture-3d", lastReviewed: "2026-03", name: "NextDent Denture 3D+", mfr: "NextDent (3D Systems)", cat: "Resin — Denture Base",
    composition_detail: "PMMA-based photopolymer. Multiple pink shades.\n510(k) FDA cleared for denture bases.",
    technique: "PRINT: 100μm layer thickness.\nWASH: IPA 3 min ultrasonic.\nPOST-CURE: UV chamber per NextDent protocol.",
    evidence: "Per Zeidan 2023: 3D-printed denture bases (NextDent) showed moderate flexural strength — ranked below milled (AvaDent, Polident) and conventional heat-cured (Vertex), above polyamide.\n\nINDICATIONS: complete dentures, partial denture bases.",
    notes: "Moderate strength among printed bases. Most established printed denture ecosystem. Below milled in flexural strength.",
    refs: ["sivaswamy-2026-printed-denture"]
  },
];

// ═══════════════════════════════════════════════
// 6. SPLINT RESINS (individual products)
// ═══════════════════════════════════════════════
export const SPLINT_RESINS = [
  {
    id: "keysplint-hard", lastReviewed: "2026-03", name: "KeySplint Hard", mfr: "Keystone Industries", cat: "Resin — Splint / Night Guard",
    composition_detail: "Rigid methacrylate-based photopolymer. Clear. 510(k) FDA cleared for occlusal splints.\nDesigned for rigid stabilization splints.",
    technique: "PRINT: 50–100μm layer thickness.\nWASH: IPA or TPM.\nPOST-CURE: UV + heat, 30–60 min.\nAdjust occlusion chairside with acrylic burs + polish.",
    evidence: "Per Qin 2025 RCT: 3D-printed splints comparable efficacy and satisfaction to conventional; significantly reduced production time.\nPer Tangpothitham 2022: autoclave post-processing (132°C × 4 min) reduces monomer elution and improves hardness WITHOUT deteriorating flexural modulus.\n\nINDICATIONS: stabilization splints, Michigan splints, flat-plane splints.",
    notes: "Most widely used rigid splint resin. Autoclave trick improves biocompatibility. Comparable outcomes to conventional.",
    refs: ["qin-2025-splint-rct","tangpothitham-2022-autoclave"]
  },
  {
    id: "keysplint-soft", lastReviewed: "2026-03", name: "KeySplint Soft", mfr: "Keystone Industries", cat: "Resin — Splint / Night Guard",
    composition_detail: "Flexible methacrylate-based photopolymer. Clear. 510(k) FDA cleared.\nDesigned for flexible night guards and soft splints.",
    technique: "PRINT: 50–100μm layer thickness.\nWASH: IPA or TPM.\nPOST-CURE: UV + heat, 30–60 min.\nFlexible — does not require occlusal adjustment like rigid splints.",
    evidence: "Flexible alternative for patients who break rigid splints or cannot tolerate hard acrylic.\n\n⚠ Not appropriate for TMD stabilization (lacks rigidity for centric stop control).\nINDICATIONS: night guards (bruxism protection), athletic mouthguards, soft splints.",
    notes: "Flexible option for bruxers who break rigid splints. Not for TMD stabilization.",
    refs: []
  },
  {
    id: "dental-lt-clear", lastReviewed: "2026-03", name: "Formlabs Dental LT Clear Resin", mfr: "Formlabs", cat: "Resin — Splint / Night Guard",
    composition_detail: "Biocompatible long-term (LT) clear methacrylate photopolymer. 510(k) FDA cleared.\nFormlabs Form 3B+/Form 4B.",
    technique: "PRINT: 100μm on Form 3B+.\nWASH: Form Wash, IPA.\nPOST-CURE: Form Cure, per Formlabs dental protocol.\nLong-term biocompatibility rating = can be worn >24hr.",
    evidence: "Formlabs' long-term biocompatible resin. Validated for extended intraoral wear (>24 hours continuous).\n\nINDICATIONS: occlusal splints, night guards, retainers, sleep apnea devices.",
    notes: "Long-term biocompatible. Formlabs ecosystem. Validated for extended wear.",
    refs: []
  },
  {
    id: "vprint-splint", lastReviewed: "2026-03", name: "V-Print Splint", mfr: "VOCO", cat: "Resin — Splint / Night Guard",
    composition_detail: "Methacrylate-based photopolymer. Clear. CE marked, 510(k) cleared.\nCompatible with open-material DLP/LCD printers.",
    technique: "PRINT: 50–100μm on compatible DLP/LCD printers.\nWASH: IPA.\nPOST-CURE: UV chamber per VOCO protocol.",
    evidence: "VOCO's entry in the dental splint resin market. Open-material compatibility is the key advantage — works with Asiga, SprintRay, and other open platforms.\n\nINDICATIONS: occlusal splints, night guards.",
    notes: "Open-platform compatible. VOCO dental materials ecosystem.",
    refs: []
  },
];

// ═══════════════════════════════════════════════
// 7. PROTOCOLS & REFERENCE CARDS (keep as-is)
// ═══════════════════════════════════════════════
export const PRINT_PROTOCOLS = [
  {
    id: "postcure-protocol", lastReviewed: "2026-03", name: "Post-Curing Protocol — Quick Reference", mfr: "N/A — Protocol", cat: "Protocol — Post-Processing",
    technique: "POST-CURE IS MANDATORY — uncured resins are cytotoxic and mechanically weak.\n\nBY APPLICATION:\n• Surgical guides: UV + heat, 20–30 min at 60°C\n• Provisional C&B: minimum 10 min (adequate); optimal 60–90 min at 80°C (max properties)\n• Permanent C&B: extended cure per manufacturer (longest)\n• Denture base: full cure cycle per manufacturer\n• Splints: UV + heat, 30–60 min; autoclave 132°C × 4 min optional (improves biocompatibility)",
    evidence: "Per Soto-Montero 2022: 5–10 min post-cure = adequate strength without color change.\nPer Kim 2020: 60–90 min significantly improves flexural strength, hardness, degree of conversion, and biocompatibility.\nPer Bayarsaikhan 2021: 80°C produces highest flexural strength (147.48 MPa) and cell viability (89.51%).\nPer Aati 2021: nitrogen atmosphere during curing increases surface hardness.\n\n⚠ UNDER-CURED = CYTOTOXIC. Material selection, washing thoroughness, and post-cure duration ALL affect biocompatibility.",
    notes: "Post-curing is the single most important step for biocompatibility and mechanical properties. Never shortcut.",
    refs: ["soto-montero-2022-postcure","kim-2020-postcure-properties"]
  },
  {
    id: "washing-protocol", lastReviewed: "2026-03", name: "Washing Protocol — IPA vs TPM", mfr: "N/A — Protocol", cat: "Protocol — Post-Processing",
    technique: "WASHING removes uncured resin. Two main solvents:\n\nIPA (Isopropyl Alcohol 99%):\n• 2–5 min in agitated bath or automated washer\n• Most widely used; effective\n• ⚠ Flammable — ventilate and store properly\n• Replace when contaminated (cloudy appearance)\n\nTPM (Tripropylene Glycol Monomethyl Ether):\n• Less aggressive solvent; better for some resins\n• Longer wash time needed (5–10 min)\n• Less flammable than IPA\n• SprintRay Pro Wash uses TPM\n\nAFTER WASHING: air dry completely before post-curing. Residual solvent = compromised cure.",
    evidence: "Both IPA and TPM produce clinically acceptable results. IPA is more effective per wash cycle but more hazardous. TPM is gentler on resins with sensitive surface finish.\n\n⚠ Insufficient washing leaves uncured monomer → cytotoxicity. Over-washing (>10 min IPA) can damage surface detail on thin restorations.",
    notes: "Wash thoroughly but don't over-wash. Dry completely before post-cure.",
    refs: []
  },
  {
    id: "orientation-layer-guide", lastReviewed: "2026-03", name: "Print Orientation & Layer Thickness", mfr: "N/A — Protocol", cat: "Protocol — Print Settings",
    technique: "ORIENTATION AFFECTS ACCURACY AND STRENGTH:\n\n• Surgical guides (full-arch): HORIZONTAL (0°) = highest accuracy\n• Surgical guides (short-span): VERTICAL (90°) may be superior (40–110μm improvement)\n• Crowns: 45° angled for best balance of accuracy + support placement\n• Denture bases: parallel to build platform\n• Splints: 30–45° angle\n\nLAYER THICKNESS:\n• 25μm: highest detail (surgical guides, margins)\n• 50μm: standard dental (crowns, guides, splints)\n• 100μm: acceptable for models, denture bases, study casts\n\nSUPPORT PLACEMENT: avoid placing supports on margins, intaglio surfaces, or occlusal contacts. Orient to place supports on least critical surface.",
    evidence: "Per García Gil 2025: shell thickness and orientation significantly affect accuracy. 50μm layer reduces deviations vs 100μm for surgical guides.\nPer general consensus: thinner layers = better marginal accuracy but longer print time. Balance based on clinical requirements.",
    notes: "Orient to minimize supports on critical surfaces. Thinner layers for precision work.",
    refs: ["garcia-gil-2025-3dp-accuracy"]
  },
  {
    id: "fda-clearance-guide", lastReviewed: "2026-03", name: "FDA Clearance Status — Quick Reference", mfr: "N/A — Reference", cat: "Protocol — Regulatory",
    technique: "FDA 510(k) STATUS BY APPLICATION (as of 2026):\n\n✅ CLEARED — routine clinical use:\n• Surgical guides (most major brands)\n• Provisional crowns/bridges (NextDent, Formlabs, SprintRay, BEGO)\n• Denture bases (SprintRay, Formlabs, NextDent)\n• Splints/night guards (KeySplint, Formlabs, VOCO)\n• Models and dies\n• Custom trays\n\n⚠ CLEARED WITH CAUTION — limited long-term evidence:\n• Permanent crowns (Crowntec, Formlabs Permanent Crown, VarseoSmile Crown Plus, SprintRay Crown)\n• Permanent inlays/onlays\n\n❌ NOT CLEARED / NOT RECOMMENDED:\n• Permanent FPDs (multi-unit bridges)\n• Direct-printed clear aligners for PERMANENT use (only interim/in-house refinement)",
    evidence: "Per Ribeiro 2025: 'insufficient clinical evidence to support use of 3D-printed resins for indirect definitive restorations.'\nPer Mandurino 2025: milling significantly higher flexural strength than 3D printing.\n\nFDA clearance ≠ long-term clinical evidence. Printed permanent crowns are cleared but lack the 5–10 year survival data that milled restorations have. Use with informed consent.",
    notes: "FDA clearance does not equal clinical evidence. Provisional/guide resins have strong evidence. Permanent resins have clearance but limited long-term data.",
    refs: ["ribeiro-2025-insufficient-evidence","mandurino-2025-milled-vs-printed"]
  },
  {
    id: "printed-veneers", lastReviewed: "2026-03", name: "3D-Printed No-Prep Veneers — Emerging", mfr: "N/A — Emerging Technology", cat: "Protocol — Emerging Applications",
    technique: "LITHOGRAPHY-BASED CERAMIC MANUFACTURING (LCM):\n• Prints in ceramic slurry → debinding → sintering\n• Achieves 0.1–0.2mm veneer thickness (thinner than conventional 0.3–0.5mm)\n• Still largely experimental — no widespread FDA-cleared dental product\n\nPRINTED COMPOSITE VENEERS:\n• Possible with permanent crown resins at thin dimensions\n• Limited evidence on long-term wear and bonding",
    evidence: "Per in vitro studies: printed zirconia veneers showed better incisal fit than milled.\nLCM technology is promising but not yet commercially available for routine dental use.\n\n⚠ EXPERIMENTAL — not recommended for routine clinical use yet.\nINDICATIONS (future): ultra-thin veneers, no-prep veneers, complex geometries impossible to mill.",
    notes: "Emerging technology. LCM ceramic printing and ultra-thin printed veneers are promising but not yet routine clinical.",
    refs: []
  },
  {
    id: "workflow-times", lastReviewed: "2026-03", name: "Digital Workflow Times & Troubleshooting", mfr: "N/A — Protocol", cat: "Protocol — Workflow",
    technique: "TYPICAL WORKFLOW TIMES:\n• Design (CAD): 10–30 min depending on complexity\n• Print: 30–90 min (varies by size, layer thickness, printer)\n• Wash: 5–10 min\n• Dry: 10–15 min\n• Post-cure: 10–90 min (application-dependent)\n• Finish/polish: 5–15 min\n\nTOTAL: 1.5–3 hours for a single crown from scan to seat\n\nTROUBLESHOOTING:\n• Failed prints → check resin temperature, tank condition, build platform leveling\n• Warping → insufficient support, wrong orientation, resin too cold\n• Poor fit → check printer calibration, layer thickness, resin expiration\n• Surface roughness → insufficient post-cure, old resin, contaminated tank\n• Color mismatch → wrong shade selection, over-curing (yellowing), insufficient wash",
    evidence: "3D printing enables same-day delivery for provisionals, guides, and splints. Permanent restorations may require additional try-in appointments given the limited evidence base.\n\nPrint failure rates decrease significantly with operator experience and proper maintenance protocols.",
    notes: "Same-day workflow is the key value proposition. Operator experience and maintenance are critical to consistent results.",
    refs: []
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
  ...PRINT_PROTOCOLS,
];
