// ═══════════════════════════════════════════════════════════════════
// SLEEP DENTISTRY DATA — MADs, Screening, Titration, Monitoring
// ═══════════════════════════════════════════════════════════════════

// ── Citations ──
export const SLEEP_CIT = {
  "iftikhar-2023-mad-nma": { pmid: null, title: "NMA: SomnoDent Flex P-score 0.94, TAP 0.83, IST 0.82; no statistically significant differences between MADs", authors: "Iftikhar IH, et al.", journal: "Sleep Breath", year: 2023, grade: "STRONG" },
  "yu-2023-mad-longterm": { pmid: null, title: "Long-term MA: MADs reduce AHI by -16.77 events/h (95% CI -20.80 to -12.74); sustained effect >5 yr", authors: "Yu M, et al.", journal: "PLoS One", year: 2023, grade: "STRONG" },
  "petit-2002-mad-contraindications": { pmid: null, title: "34% of consecutive OSA patients had contraindications to MAD; primarily dental problems; <8 teeth/arch excluded", authors: "Petit FX, et al.", journal: "Am J Respir Crit Care Med", year: 2002, grade: "STRONG" },
  "ma-2020-titration-dose": { pmid: null, title: "Dose-response: mild OSA target 38.6% max protrusion; moderate 62.9%; severe 68.8%; efficacy plateaus ~70%", authors: "Ma Y, et al.", journal: "J Clin Sleep Med", year: 2020, grade: "STRONG" },
  "fleury-2004-titration": { pmid: null, title: "Titration protocol: start 50-60% max protrusion; advance 0.5-1mm/wk; combine clinical + oximetric endpoints", authors: "Fleury B, et al.", journal: "Chest", year: 2004, grade: "STRONG" },
  "chung-2016-stopbang": { pmid: null, title: "STOP-Bang: score ≥3 detects 93% moderate-severe OSA, 100% severe; score 0-2 low risk, 5-8 high risk", authors: "Chung F, et al.", journal: "Chest", year: 2016, grade: "STRONG" },
  "johns-1991-ess": { pmid: null, title: "Epworth Sleepiness Scale: 0-10 normal, 11-12 mild, 13-15 moderate, 16-24 severe EDS; MCID -2 to -3 pts", authors: "Johns MW", journal: "Sleep", year: 1991, grade: "STRONG" },
  "gottlieb-2020-osa-review": { pmid: null, title: "JAMA: HSAT sensitivity 79%, specificity 79%; PSG reference standard; HSAT appropriate for high pretest probability", authors: "Gottlieb DJ, Punjabi NM", journal: "JAMA", year: 2020, grade: "STRONG" },
  "aasm-2021-psg-guidance": { pmid: null, title: "AASM: before MAD either HSAT or PSG acceptable; after titration follow-up study recommended; subjective alone insufficient", authors: "Caples SM, et al.", journal: "J Clin Sleep Med", year: 2021, grade: "STRONG" },
  "mansour-2024-mad-side-effects": { pmid: null, title: "SR side effects: hypersalivation 33.3%, occlusal changes 30.2%, muscle pain 22.9%, tooth discomfort 20.2%", authors: "Mansour N, et al.", journal: "Sleep Breath", year: 2024, grade: "STRONG" },
  "uniken-2020-mad-10yr": { pmid: null, title: "10-yr: overjet -3.5mm, overbite -2.9mm with MAD vs -0.7/-0.8 CPAP; progressive time-related changes", authors: "Uniken Venema JAM, et al.", journal: "Clin Oral Investig", year: 2020, grade: "STRONG" },
  "ramar-2015-aasm-mad-cpg": { pmid: null, title: "AASM 2015 CPG: MAD recommended for mild-moderate OSA or CPAP-intolerant; custom > prefabricated", authors: "Ramar K, et al.", journal: "J Clin Sleep Med", year: 2015, grade: "STRONG" },
  // ── Adjunctive therapies ──
  "cochrane-2020-myofunctional": { pmid: null, title: "Cochrane: myofunctional therapy AHI MD -13.20 events/h; ESS MD -4.52; low-moderate certainty", authors: "Rueda JR, et al.", journal: "Cochrane Database Syst Rev", year: 2020, grade: "MODERATE" },
  "saba-2024-myofunctional-ma": { pmid: null, title: "MA: myofunctional therapy AHI MD -10.2 events/h (p<0.001); SpO₂ nadir +3.19%", authors: "Saba ES, et al.", journal: "Laryngoscope", year: 2024, grade: "STRONG" },
  "cochrane-2019-positional": { pmid: null, title: "Cochrane: positional therapy AHI MD -7.38 events/h; adherence better than CPAP (+2.5 hr/night)", authors: "Srijithesh PR, et al.", journal: "Cochrane Database Syst Rev", year: 2019, grade: "MODERATE" },
  "alqarni-2023-vibrotactile-ma": { pmid: null, title: "MA: vibrotactile devices AHI MD -9.19 events/h (p<0.001); significant supine time reduction", authors: "ALQarni AS, et al.", journal: "Thorax", year: 2023, grade: "STRONG" },
};

// ── Group Classifier ──
export const sleepGetGroup = c => {
  if (c.includes("MAD") || c.includes("Mandibular Advancement")) return "Mandibular Advancement Devices";
  if (c.includes("Screening") || c.includes("Questionnaire") || c.includes("Scale")) return "Screening Tools";
  if (c.includes("Protocol") || c.includes("Titration") || c.includes("Workflow")) return "Protocols & Workflow";
  if (c.includes("Positional") || c.includes("Myofunctional")) return "Adjunctive Therapies";
  return "Other";
};

export const SLEEP_GROUPS = ["Mandibular Advancement Devices", "Screening Tools", "Protocols & Workflow", "Adjunctive Therapies"];

// ═══════════════════════════════════════════════
// 1. MANDIBULAR ADVANCEMENT DEVICES
// ═══════════════════════════════════════════════
export const MAD_PRODUCTS = [
  {
    id: "somnodent-flex", name: "SomnoDent Flex", mfr: "SomnoMed", cat: "MAD — Unattached Bilateral Interlocking (Duo-Bloc)",
    composition: "SMH BFlex™ medical-grade nylon. Separate upper/lower trays with bilateral fin-coupling mechanism. Metal-free options available. 3–5 yr lifespan. 3-yr warranty.",
    notes: "HIGHEST RANKED MAD. Per Iftikhar 2023 NMA: P-score 0.94 — highest for AHI reduction. Per Yu 2023: MADs reduce AHI by -16.77 events/h with sustained effect >5 yr.\n\nTITRATION: precision screw advancement; 0.1mm per turn; 8–10mm total range. Patient can self-titrate between appointments.\n\nDESIGN: duo-bloc (separate upper/lower) with bilateral fin-coupling → allows lateral movement and mouth opening during sleep. This is the key comfort advantage over attached designs.\n\nCONTRAINDICATIONS: <8 functional teeth per arch, severe periodontal disease with mobility, active TMD (relative), max protrusive distance <5mm, BMI >40 (reduced efficacy), central sleep apnea predominance.\n\nPer Petit 2002: 34% of consecutive OSA patients had contraindications to MAD — always do thorough dental exam before fabrication.",
    refs: ["iftikhar-2023-mad-nma","yu-2023-mad-longterm","petit-2002-mad-contraindications"]
  },
  {
    id: "tap-device", name: "TAP (Thornton Adjustable Positioner)", mfr: "Airway Management Inc.", cat: "MAD — Attached Midline Traction",
    composition: "Acrylic resin (PMMA) or thermoplastic upper/lower trays with central hook-and-socket mechanism. Metal hardware.",
    notes: "Per Iftikhar 2023 NMA: P-score 0.83 — second highest for AHI reduction.\n\nTITRATION: central adjustment screw; 0.25mm per turn; up to 11mm total range — widest titration range of any MAD.\n\nDESIGN: attached midline traction — single-point hook mechanism connects upper and lower. Prevents mouth opening during sleep (advantage for mouth breathers). LIMITATION: limited lateral jaw movement; may increase TMJ stress in some patients.\n\nSimple single-point adjustment makes titration straightforward for both clinician and patient.",
    refs: ["iftikhar-2023-mad-nma"]
  },
  {
    id: "ema-device", name: "EMA (Elastic Mandibular Advancement)", mfr: "Myerson", cat: "MAD — Elastic Strap Connection",
    composition: "Thermoformed acrylic trays with replaceable elastic straps connecting upper and lower. 9 strap lengths (13–21mm) × 4 elastic strengths = 36 possible combinations.",
    notes: "MAXIMUM JAW MOBILITY of any MAD design — elastic straps allow full range of lateral and opening movement.\n\nTITRATION: by strap length and elastic strength; 36 combinations allow fine-tuned adjustment. Easy chairside swap. LIMITATION: less precise than screw-based systems; straps require periodic replacement.\n\nADVANTAGES: maximum comfort from jaw mobility; low profile; simple to adjust. Best for patients who cannot tolerate restricted jaw movement.\n\nDISADVANTAGES: strap durability (need replacement); less precise positioning than screw-based MADs.",
    refs: ["iftikhar-2023-mad-nma"]
  },
  {
    id: "prosomnus-mad", name: "ProSomnus [Select / EVO / IA]", mfr: "ProSomnus Sleep Technologies", cat: "MAD — 3D-Printed Precision-Fit",
    composition: "Medical-grade nylon (PA12). 3D-printed from digital scans — no physical impressions. FDA-cleared Class II medical device. 2.5mm thin profile. 3–5 yr lifespan.",
    notes: "DIGITAL WORKFLOW MAD — CAD/CAM manufactured from intraoral scans.\n\nProSomnus EVO: Precision Control System with 0.1mm increments — finest titration resolution available.\nProSomnus IA: integrated advancement mechanism.\n\nADVANTAGES: digital workflow (no alginate impressions); thinnest profile (2.5mm); precision fit from digital scan; fast turnaround.\n\nLIMITATION: newer to market; less long-term published data than SomnoDent or TAP.",
    refs: ["iftikhar-2023-mad-nma"]
  },
  {
    id: "panthera-dsad", name: "Panthera D-SAD", mfr: "Panthera Dental", cat: "MAD — CAD/CAM Milled Nylon",
    composition: "Type 12 medical-grade polyamide (nylon). CAD/CAM milled. ~6 grams per arch — LIGHTEST MAD on market. Metal-free, biocompatible. Resistant to staining/odor.",
    notes: "LIGHTEST MAD AVAILABLE (~6g/arch) — key differentiator for patient comfort.\n\nTITRATION: interchangeable connector rods; 0.5mm increments via rod exchange. LIMITATION: requires new rods for each advancement change (not patient-adjustable like screw-based systems).\n\nCAD/CAM milled (not printed) — higher mechanical properties than 3D-printed alternatives. High fracture resistance. 3–5 yr expected lifespan.\n\nBest for: patients who prioritize comfort and minimal bulk; those who have failed other MADs due to bulk/weight.",
    refs: ["iftikhar-2023-mad-nma"]
  },
  {
    id: "narval-cc", name: "Narval CC", mfr: "ResMed", cat: "MAD — Computer-Designed Articulated",
    composition: "Biocompatible nylon. Digitally designed and manufactured with bilateral connectors. Part of ResMed sleep ecosystem.",
    notes: "REMD ECOSYSTEM MAD — integrates with ResMed's sleep diagnostics and monitoring platform.\n\nTITRATION: interchangeable connector arms; multiple advancement positions. Requires new connectors for titration changes (similar to Panthera).\n\nResMed-sponsored studies show efficacy comparable to other custom MADs. Advantage for practices already using ResMed CPAP/diagnostic equipment.",
    refs: ["iftikhar-2023-mad-nma"]
  },
];

// ═══════════════════════════════════════════════
// 2. SCREENING TOOLS
// ═══════════════════════════════════════════════
export const SCREENING_TOOLS = [
  {
    id: "stop-bang", name: "STOP-Bang Questionnaire", cat: "Screening Tool — OSA Risk Assessment",
    notes: "VALIDATED OSA SCREENING TOOL — 8 yes/no questions.\n\nS: Snoring (loud enough to be heard through closed doors)\nT: Tired (daytime fatigue/sleepiness)\nO: Observed apnea (witnessed breathing stops)\nP: Pressure (treated for high blood pressure)\nB: BMI >35\nA: Age >50\nN: Neck circumference >40cm (15.7 in)\nG: Gender male\n\nSCORING (per Chung 2016):\n• 0–2: LOW risk (18% probability moderate-severe OSA; 4% severe)\n• 3–4: INTERMEDIATE risk (25–35% moderate-severe; 15–25% severe)\n• 5–8: HIGH risk (45–60% moderate-severe; 35–75% severe)\n\nSENSITIVITY: score ≥3 detects 93% of moderate-severe OSA and 100% of severe OSA.\n\nCLINICAL ACTION: score ≥3 → sleep study (HSAT or PSG). Per Gottlieb 2020 JAMA: HSAT sensitivity 79%, specificity 79%; appropriate for high pretest probability without significant comorbidities.",
    refs: ["chung-2016-stopbang","gottlieb-2020-osa-review"]
  },
  {
    id: "epworth-sleepiness", name: "Epworth Sleepiness Scale (ESS)", cat: "Screening Tool — Daytime Sleepiness",
    notes: "SUBJECTIVE SLEEPINESS MEASURE — 8 situations scored 0–3 each.\n\nSITUATIONS: sitting/reading, watching TV, sitting inactive in public, passenger in car (1 hr), lying down in afternoon, sitting/talking, sitting quietly after lunch (no alcohol), in car stopped in traffic.\n\nSCORING (per Johns 1991):\n• 0–10: NORMAL daytime sleepiness\n• 11–12: MILD excessive daytime sleepiness\n• 13–15: MODERATE EDS\n• 16–24: SEVERE EDS\n\nESS ≥13 optimally predicts objective sleepiness (MSLT <8 min). Correlates with AHI and distinguishes primary snoring from OSA.\n\nMINIMUM CLINICALLY IMPORTANT DIFFERENCE: -2 to -3 points (use to assess treatment response).\n\nUSE: baseline assessment before MAD therapy → repeat after titration to document improvement. Part of insurance documentation requirements.",
    refs: ["johns-1991-ess","gottlieb-2020-osa-review"]
  },
];

// ═══════════════════════════════════════════════
// 3. PROTOCOLS & WORKFLOW
// ═══════════════════════════════════════════════
export const SLEEP_PROTOCOLS = [
  {
    id: "mad-titration-protocol", name: "MAD Titration Protocol", cat: "Protocol — Titration",
    notes: "EVIDENCE-BASED MAD TITRATION:\n\nSTARTING POSITION: 50–60% of maximum protrusion (per Fleury 2004, Ma 2020).\n\nDOSE-RESPONSE (Ma 2020):\n• Mild OSA: target 38.6% of max protrusion (3.5 ± 1.8mm)\n• Moderate OSA: target 62.9% (5.8 ± 1.9mm)\n• Severe OSA: target 68.8% (5.9 ± 2.2mm)\n• Efficacy PLATEAUS at ~70% of maximum protrusion\n\nTITRATION SCHEDULE:\n1) Start at 50–60% max protrusion\n2) Advance 0.5–1.0mm per week\n3) Monitor with symptom diary + home oximetry\n4) Continue until: symptoms resolve, OR snoring eliminated, OR max comfortable advancement reached\n5) Confirm with follow-up HSAT or PSG\n\nENDPOINTS:\n• Primary: AHI <5 (complete response)\n• Acceptable: >50% AHI reduction with residual AHI <20 (partial response)\n• Per AASM 2021: subjective feedback alone is INSUFFICIENT — follow-up sleep study recommended after titration.\n\nSIDE EFFECT MONITORING:\nPer Mansour 2024 SR: hypersalivation 33.3%, occlusal changes 30.2%, muscle pain 22.9%, tooth discomfort 20.2%.\nPer Uniken Venema 2020 (10-yr): overjet -3.5mm, overbite -2.9mm with MAD. Changes are PROGRESSIVE and TIME-RELATED — continuous monitoring required.",
    refs: ["fleury-2004-titration","ma-2020-titration-dose","aasm-2021-psg-guidance","mansour-2024-mad-side-effects","uniken-2020-mad-10yr"]
  },
  {
    id: "sleep-clinical-workflow", name: "Sleep Dentistry Clinical Workflow", cat: "Protocol — Workflow",
    notes: "COMPLETE CLINICAL WORKFLOW FOR DENTAL SLEEP MEDICINE:\n\n1) SCREEN: STOP-Bang ≥3 → refer for sleep study\n   • Also screen: ESS for daytime sleepiness baseline\n   • Document neck circumference, Mallampati class, BMI\n\n2) DIAGNOSE: HSAT or PSG confirming OSA (AHI ≥5)\n   • Per Gottlieb 2020: HSAT sensitivity/specificity both 79%\n   • PSG for complex cases, comorbidities, negative HSAT with high suspicion\n\n3) EVALUATE CANDIDACY:\n   • Per AASM 2015 CPG: MAD recommended for mild-moderate OSA or CPAP-intolerant\n   • Dental exam: minimum 8 functional teeth/arch; assess periodontal status, TMD, max protrusion (must be ≥5mm)\n   • Per Petit 2002: 34% of OSA patients have MAD contraindications\n\n4) FABRICATE: custom MAD from digital or physical impressions\n   • Custom > prefabricated (per AASM 2015)\n\n5) TITRATE: start at 50–60% max protrusion; advance 0.5–1mm/week\n   • Target: dose-response per Ma 2020 (mild 39%, moderate 63%, severe 69% of max)\n\n6) CONFIRM EFFICACY: follow-up HSAT or PSG after optimal titration\n   • Per AASM 2021: subjective feedback alone insufficient\n\n7) MONITOR: annual dental follow-up; reassess if symptoms recur, weight changes >10%, or new cardiovascular events\n   • Track occlusal changes (overjet, overbite) at every visit\n\nINSURANCE: CMS requires AHI ≥5 with symptoms OR AHI ≥15; sleep study within 5 yr; prescription from physician. Typically covered under medical (not dental) insurance.",
    refs: ["chung-2016-stopbang","gottlieb-2020-osa-review","ramar-2015-aasm-mad-cpg","aasm-2021-psg-guidance","petit-2002-mad-contraindications","ma-2020-titration-dose"]
  },
];

// ═══════════════════════════════════════════════
// 4. ADJUNCTIVE THERAPIES
// ═══════════════════════════════════════════════
export const SLEEP_ADJUNCTS = [
  {
    id: "myofunctional-therapy", name: "Myofunctional Therapy for OSA — Exercise Protocol", cat: "Adjunctive — Myofunctional Therapy",
    notes: "AHI REDUCTION ~10 events/h — effective adjunct for mild-moderate OSA.\n\nPer Cochrane 2020: AHI MD -13.20 events/h vs sham (low certainty); ESS MD -4.52 (moderate certainty).\nPer Saba 2024 MA: AHI MD -10.2 events/h (p<0.001); minimum SpO₂ improved +3.19%.\nPer Rodríguez-Alcalá 2026: tongue volume reduction -8 to -12 cm³; upper airway remodeling on MRI.\n\nEXERCISE PROTOCOL (20–30 min/day, 3×/day, minimum 3 months):\n• Tongue posture: tip on incisive papilla, posterior tongue elevated — hold 5–10 sec, 10 reps\n• Tongue strengthening: press firmly against palate (isometric); sweep across palate (isotonic) — 10–20 reps\n• Lip seal: purse lips tightly; hold button between lips against resistance — hold 10 sec, 10 reps\n• Soft palate: sustained 'Ah' with elevation; gargling — 10–20 reps\n• Swallowing: correct pattern with tongue tip on palate, teeth together\n• Breathing: nasal breathing awareness; diaphragmatic breathing\n• Cheek: alternating cheek suction; balloon inflation — 10 reps\n\nPATIENT SELECTION: ✅ mild-moderate OSA (AHI 5–30), CPAP-intolerant, adjunct to MAD, post-adenotonsillectomy residual. ❌ severe OSA as monotherapy. App-based monitoring achieves 90% adherence.",
    refs: ["cochrane-2020-myofunctional","saba-2024-myofunctional-ma"]
  },
  {
    id: "positional-therapy", name: "Positional Therapy Devices (Night Shift, NightBalance)", cat: "Adjunctive — Positional Therapy",
    notes: "FOR POSITIONAL OSA: supine AHI ≥2× non-supine AHI, non-supine AHI <10.\n\nPer Cochrane 2019: AHI MD -7.38 events/h vs inactive control (low certainty). CPAP superior for AHI reduction BUT positional therapy has significantly BETTER ADHERENCE (+2.5 hr/night).\nPer ALQarni 2023 MA (vibrotactile devices): AHI MD -9.19 events/h (p<0.001); significant supine time reduction.\nPer Kelly 2026 RCT: vibrotactile AHI -4.41 events/h (34% improvement); >50% opted to continue.\n\nDEVICES:\n• Night Shift (Advanced Brain Monitoring): neck-worn vibrotactile, FDA-cleared, tracks compliance\n• NightBalance (Philips): chest-worn vibrotactile, integrated Philips ecosystem\n• SlumberBUMP: inflatable belt, lower cost, limited evidence\n• Tennis ball technique: DIY, poor compliance — NOT recommended long-term\n\nPer Berry 2019 RCT (NightBalance vs APAP): AHI on SPT 7.29 vs APAP 3.71 — APAP superior, but SPT used 1.6 hr/night MORE. Effective therapy = efficacy × adherence.\n\nBEST FOR: mild-moderate positional OSA in patients refusing CPAP/MAD; can combine with MAD for synergistic effect.",
    refs: ["cochrane-2019-positional","alqarni-2023-vibrotactile-ma"]
  },
];

// ═══════════════════════════════════════════════
// ASSEMBLED EXPORT
// ═══════════════════════════════════════════════
export const ALL_SLEEP_PRODUCTS = [
  ...MAD_PRODUCTS,
  ...SCREENING_TOOLS,
  ...SLEEP_PROTOCOLS,
  ...SLEEP_ADJUNCTS,
];
