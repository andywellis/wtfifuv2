// ═══════════════════════════════════════════════
// PHARMACOLOGY — Perioperative Medication Management
// ═══════════════════════════════════════════════

export const PHARM_CIT = {
  "douketis-2022-accp": { pmid: null, title: "Perioperative Management of Antithrombotic Therapy: ACCP Guideline", authors: "Douketis JD et al.", journal: "Chest", year: 2022, grade: "STRONG" },
  "douketis-2024-doac": { pmid: null, title: "Perioperative Management of Patients Taking DOACs: A Review", authors: "Douketis JD, Spyropoulos AC", journal: "JAMA", year: 2024, grade: "STRONG" },
  "thompson-2024-aha-periop": { pmid: null, title: "2024 AHA/ACC Guideline for Perioperative Cardiovascular Management", authors: "Thompson A et al.", journal: "JACC", year: 2024, grade: "STRONG" },
  "agarwal-2026-aap-peds": { pmid: null, title: "Pediatrician Role in Evaluation of Patients Undergoing Anesthesia (AAP 2026)", authors: "Agarwal R et al.", journal: "Pediatrics", year: 2026, grade: "STRONG" },
  "ada-2026-diabetes-hospital": { pmid: null, title: "Diabetes Care in Hospital: Standards of Care in Diabetes 2026", authors: "ADA", journal: "Diabetes Care", year: 2026, grade: "STRONG" },
  "ruggiero-2014-mronj": { pmid: null, title: "AAOMS Position Paper on Medication-Related Osteonecrosis of the Jaw 2014", authors: "Ruggiero SL et al.", journal: "J Oral Maxillofac Surg", year: 2014, grade: "STRONG" },
  "sertoz-2025-psychotropics": { pmid: null, title: "Perioperative Management of Psychotropic Medications", authors: "Sertöz N et al.", journal: "Minerva Anestesiol", year: 2025, grade: "MODERATE" },
  "cummings-2021-spaqi-supplements": { pmid: null, title: "Preoperative Management Using Dietary Supplements: SPAQI Consensus", authors: "Cummings KC et al.", journal: "Mayo Clin Proc", year: 2021, grade: "STRONG" },
  "shah-2023-asra-cannabis": { pmid: null, title: "ASRA Consensus on Perioperative Cannabis and Cannabinoids Management", authors: "Shah S et al.", journal: "Reg Anesth Pain Med", year: 2023, grade: "STRONG" },
  "herrick-2021-medical-clearance": { pmid: null, title: "Medical Clearance for Common Dental Procedures", authors: "Herrick KR et al.", journal: "Am Fam Physician", year: 2021, grade: "MODERATE" },
  "park-2025-bisphosphonate-timing": { pmid: null, title: "Time Since Last IV Bisphosphonate and MRONJ Risk in Osteoporotic Patients", authors: "Park JH et al.", journal: "Nat Commun", year: 2025, grade: "STRONG" },
};

export const pharmGetGroup = c => {
  if (c.includes("Anticoag") || c.includes("Antiplatelet") || c.includes("Thromb")) return "Anticoagulants & Antiplatelets";
  if (c.includes("Antihypertens") || c.includes("Cardiac") || c.includes("Beta") || c.includes("CCB") || c.includes("ACE") || c.includes("Diuretic")) return "Antihypertensives";
  if (c.includes("Diabet") || c.includes("Insulin") || c.includes("GLP") || c.includes("SGLT") || c.includes("Metformin")) return "Diabetes Medications";
  if (c.includes("Bisphosphonate") || c.includes("MRONJ") || c.includes("Denosumab") || c.includes("Antiresorptive")) return "Bisphosphonates & MRONJ";
  if (c.includes("Psych") || c.includes("SSRI") || c.includes("Benzo") || c.includes("Lithium") || c.includes("MAOI") || c.includes("Stimulant")) return "Psychiatric Medications";
  if (c.includes("Steroid") || c.includes("Cortico")) return "Corticosteroids";
  if (c.includes("Supplement") || c.includes("Herbal") || c.includes("Cannabis")) return "Supplements & Cannabinoids";
  if (c.includes("Interaction") || c.includes("Reference") || c.includes("Emergency")) return "Quick Reference";
  return "Other Medication Classes";
};

export const PHARM_GROUPS = ["Anticoagulants & Antiplatelets", "Antihypertensives", "Diabetes Medications", "Bisphosphonates & MRONJ", "Psychiatric Medications", "Corticosteroids", "Supplements & Cannabinoids", "Other Medication Classes", "Quick Reference"];

// ═══════════════════════════════════════════════
// ANTICOAGULANTS & ANTIPLATELETS
// ═══════════════════════════════════════════════
export const ANTICOAG = [
  {
    id: "warfarin-dental", lastReviewed: "2026-03", name: "Warfarin (Coumadin) — Dental Management", mfr: "Multiple", cat: "Anticoagulant — Vitamin K Antagonist",
    framework: "MECHANISM: inhibits vitamin K-dependent clotting factors (II, VII, IX, X) and proteins C, S.\nPURPOSE: VTE prevention/treatment, stroke prevention in A-fib, mechanical heart valves.\nHALF-LIFE: 20-60 hours (variable).\nMONITORING: INR (International Normalized Ratio).",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE for dental procedures — DO NOT HOLD\n\n• Therapeutic INR ≤3.5 is acceptable for ALL dental procedures including extractions\n• Bleeding risk ~5%, self-limiting with local measures\n• Local hemostatic measures: sutures, gelatin sponge, oxidized cellulose, tranexamic acid rinse\n• May use TXA 5% mouthwash (10mL before procedure, 2-3x daily for 1-2 days)\n• NO bridging therapy needed for dental procedures\n\nRARELY INTERRUPT: only for complex multiple extractions in patients with poor gingival health (hold 2-3 days, coordinate with physician).",
    evidence: "Per ACCP 2022 (Douketis): continue warfarin for dental procedures at therapeutic INR.\nPer Herrick 2021 (Am Fam Physician): medical clearance supports continuation for routine dental work.\n\nRisk of thrombotic event from stopping warfarin FAR OUTWEIGHS bleeding risk from dental procedures.",
    notes: "DEFAULT: CONTINUE. Check INR within 72 hours before procedure. If INR >3.5, defer elective procedure and coordinate with physician.",
    refs: ["douketis-2022-accp", "herrick-2021-medical-clearance"]
  },
  {
    id: "doac-dental", lastReviewed: "2026-03", name: "DOACs (Direct Oral Anticoagulants) — Dental Management", mfr: "Multiple (Eliquis, Xarelto, Pradaxa)", cat: "Anticoagulant — Direct Oral",
    framework: "DRUGS:\n• Apixaban (Eliquis) — Factor Xa inhibitor, BID dosing\n• Rivaroxaban (Xarelto) — Factor Xa inhibitor, daily dosing\n• Edoxaban (Savaysa) — Factor Xa inhibitor, daily dosing\n• Dabigatran (Pradaxa) — direct thrombin inhibitor, BID dosing\n\nHALF-LIVES: 8-14 hours (rapid on/off). No routine lab monitoring needed.",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE or DELAY morning dose — DO NOT HOLD for days\n\nSIMPLE PROCEDURES (extractions, cleanings):\n• Once-daily DOAC: delay morning dose until evening post-procedure\n• Twice-daily DOAC: omit morning dose, take evening dose as scheduled\n• Alternative: continue as usual\n\nCOMPLEX ORAL SURGERY (multiple impactions, extensive bone work):\n• Factor Xa inhibitors: hold 1 day before (24-36h)\n• Dabigatran: hold 1-2 days (adjust for renal function)\n  — CrCl >50: hold 1 day\n  — CrCl 30-50: hold 2 days\n  — CrCl 15-30: hold 3-4 days\n\nRESUME: when hemostasis achieved, typically same day or next morning.",
    evidence: "Per Douketis 2024 JAMA review (988 patients): no increase in major bleeding with DOAC continuation vs interruption for minor dental procedures.\n\nReversal agents available for emergencies: idarucizumab (Praxbind) for dabigatran, andexanet alfa for Xa inhibitors.",
    notes: "DOACs are MUCH simpler to manage than warfarin for dental procedures. Short half-life = rapid on/off. Most dental procedures: just delay or skip ONE dose.",
    refs: ["douketis-2024-doac", "douketis-2022-accp"]
  },
  {
    id: "antiplatelet-dental", lastReviewed: "2026-03", name: "Aspirin & P2Y12 Inhibitors — Dental Management", mfr: "Multiple", cat: "Antiplatelet — Dental Management",
    framework: "ASPIRIN: irreversible COX inhibition, platelet recovery 7-10 days\nP2Y12 INHIBITORS: clopidogrel (Plavix), ticagrelor (Brilinta), prasugrel (Effient) — ADP receptor antagonism\n\nPURPOSE: secondary MI/stroke prevention, post-stent (CRITICAL for drug-eluting stents)",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE BOTH for dental procedures — DO NOT HOLD\n\n• ACCP 2022: suggest continuing aspirin AND P2Y12 over stopping\n• No increased uncontrollable bleeding risk\n• All bleeding managed with local measures\n\nDUAL ANTIPLATELET (DAPT) TIMING AFTER STENT:\n• Bare-metal stent: wait 6 weeks before elective dental\n• Drug-eluting stent: wait 6 months before elective dental\n• If urgent: proceed with effective anesthesia and local hemostasis\n\n⚠ CRITICAL: stopping P2Y12 prematurely after stent = life-threatening stent thrombosis. ALWAYS coordinate with cardiologist before any changes.",
    evidence: "Per ACCP 2022: continue aspirin (conditional, very low certainty). Studies show NO increased risk of uncontrollable bleeding.\n\nPlatelet turnover 7-10 days — if stopped, full recovery takes this long. Risk of thrombotic event if stopped outweighs bleeding risk.",
    notes: "NEVER stop antiplatelet therapy for dental procedures without cardiologist approval. Local hemostasis is always sufficient.",
    refs: ["douketis-2022-accp", "herrick-2021-medical-clearance"]
  },
];

// ═══════════════════════════════════════════════
// DIABETES MEDICATIONS
// ═══════════════════════════════════════════════
export const DIABETES_MEDS = [
  {
    id: "glp1-dental", lastReviewed: "2026-03", name: "GLP-1 Agonists (Ozempic, Mounjaro) — ASPIRATION RISK", mfr: "Multiple (semaglutide, tirzepatide, liraglutide)", cat: "Diabetes — GLP-1 Agonist ⚠",
    framework: "DRUGS: semaglutide (Ozempic/Wegovy, weekly), dulaglutide (Trulicity, weekly), liraglutide (Victoza, daily), tirzepatide (Mounjaro/Zepbound, weekly).\n\nMECHANISM: incretin mimetic — enhances insulin secretion, DELAYS GASTRIC EMPTYING.\n\n⚠ CRITICAL: delayed gastric emptying creates ASPIRATION RISK during sedation/GA.",
    application: "DENTAL MANAGEMENT:\n\nLOCAL ANESTHESIA ONLY: may continue\n\nORAL/IV SEDATION OR GENERAL ANESTHESIA:\n• Daily dosing (liraglutide): HOLD on day of procedure\n• Weekly dosing (semaglutide, tirzepatide, dulaglutide): HOLD 1 WEEK prior\n\nResume when oral intake tolerated.\n\n⚠ If patient vomits or has nausea pre-procedure: CANCEL elective procedure.\n⚠ Consider EXTENDED fasting (8+ hours) — gastroparesis effect persists days after last dose.",
    evidence: "Per AAP 2026 Guideline (Agarwal): mandatory hold for procedures requiring anesthesia. Daily = hold day-of; weekly = hold 1 week.\n\nGLP-1 agonists are among the most commonly prescribed medications in 2026. Every dental provider performing sedation MUST ask about these drugs.",
    notes: "This is the most important new medication class for dental sedation safety. The gastroparesis effect is the concern — full stomach + sedation = aspiration risk.",
    refs: ["agarwal-2026-aap-peds"]
  },
  {
    id: "sglt2-dental", lastReviewed: "2026-03", name: "SGLT2 Inhibitors (Sodium-Glucose Cotransporter-2) — Euglycemic DKA Risk", mfr: "Multiple (Jardiance, Farxiga, Invokana)", cat: "Diabetes — SGLT2 Inhibitor ⚠",
    framework: "DRUGS: empagliflozin (Jardiance), dapagliflozin (Farxiga), canagliflozin (Invokana), ertugliflozin (Steglatro).\n\nMECHANISM: blocks renal glucose reabsorption — causes glycosuria.\n\n⚠ RISK: euglycemic diabetic ketoacidosis (DKA) — can occur with NORMAL glucose levels.",
    application: "DENTAL MANAGEMENT:\n\nLOCAL ANESTHESIA, NO NPO: may continue (low risk)\n\nIV SEDATION OR GENERAL ANESTHESIA:\n• HOLD 3-4 DAYS BEFORE procedure\n• Canagliflozin, dapagliflozin, empagliflozin: ≥3 days\n• Ertugliflozin: ≥4 days\n\nResume when eating normally post-procedure.\n\n⚠ Euglycemic DKA can occur with glucose <250 mg/dL — check ketones if patient feels unwell, even with normal glucose.",
    evidence: "Per FDA/ADA/AHA Consensus: hold 3-4 days before surgery (Class 1, Level C-LD).\nPer ADA 2026 Standards of Care: perioperative SGLT2i management guidelines.\nPer 2024 AHA/ACC Perioperative Guideline: confirms hold recommendation.",
    notes: "SGLT2 inhibitors are increasingly common. The euglycemic DKA is the trap — glucose looks normal but patient is in ketoacidosis. Hold well in advance of sedation.",
    refs: ["thompson-2024-aha-periop", "ada-2026-diabetes-hospital"]
  },
  {
    id: "insulin-dental", lastReviewed: "2026-03", name: "Insulin — Perioperative Management", mfr: "Multiple", cat: "Diabetes — Insulin",
    framework: "TYPES:\n• Rapid-acting: lispro, aspart, glulisine\n• Short-acting: regular insulin\n• Intermediate: NPH\n• Long-acting: glargine, detemir, degludec\n\n⚠ NEVER completely stop insulin in Type 1 diabetes — risk of DKA.",
    application: "PERIOPERATIVE MANAGEMENT:\n\n• BASAL insulin: reduce to 75-80% of usual dose evening before/morning of surgery\n• NPH: reduce to 50% of dose\n• BOLUS/mealtime insulin: HOLD if NPO\n• Insulin pump: may continue if policy allows\n• TARGET glucose: 100-180 mg/dL perioperatively\n• Monitor glucose every 2-4 hours while NPO\n\nResume full doses when eating normally.\n\nFor LOCAL ANESTHESIA ONLY (not NPO): take normal doses, eat normally.",
    evidence: "Per ADA 2026 Standards: perioperative insulin management protocol.\nPer AAP 2026: always adjust insulin, never stop completely in Type 1.\n\nType 1 diabetes: NEVER stop insulin completely. Type 2 on insulin: reduce basal, hold bolus if NPO.",
    notes: "Key principle: REDUCE basal, HOLD bolus if NPO, NEVER stop in Type 1. Monitor glucose. Resume when eating.",
    refs: ["ada-2026-diabetes-hospital", "agarwal-2026-aap-peds"]
  },
];

// ═══════════════════════════════════════════════
// BISPHOSPHONATES & MRONJ
// ═══════════════════════════════════════════════
export const MRONJ_MEDS = [
  {
    id: "oral-bisphosphonate", lastReviewed: "2026-03", name: "Oral Bisphosphonates — MRONJ Risk & Drug Holiday", mfr: "Multiple (Fosamax, Actonel, Boniva)", cat: "Bisphosphonate/Antiresorptive — Oral",
    framework: "DRUGS: alendronate (Fosamax, weekly), risedronate (Actonel, weekly/monthly), ibandronate (Boniva, monthly).\nMECHANISM: inhibit osteoclast-mediated bone resorption.\n\nMRONJ (Medication-Related Osteonecrosis of the Jaw) RISK:\n• Osteoporosis patients: 0.001-0.21% (very low)\n• After tooth extraction: 0.5%\n• Duration-dependent: higher risk with >4 years of therapy",
    application: "DRUG HOLIDAY DECISION:\n\n<4 YEARS WITHOUT risk factors: CONTINUE — proceed with dental surgery\n\n<4 YEARS WITH risk factors (diabetes, steroids, smoking, RA): consider 2-month holiday\n\n>4 YEARS WITHOUT risk factors: CONTINUE or consider 2-month holiday\n\n>4 YEARS WITH risk factors: CONSIDER 2-MONTH DRUG HOLIDAY\n• Hold 2 months before procedure\n• Resume 3 months after healing complete\n• COORDINATE WITH PRESCRIBING PHYSICIAN\n\nRISK FACTORS: duration >4yr, diabetes, chronic corticosteroids, smoking, RA, poor oral hygiene, invasive procedures\n\nPer Park 2025: risk substantially lower when paused >90 days, lowest when >1 year.",
    evidence: "Per AAOMS 2014: consider 2-month holiday for >4 years + risk factors.\nPer ADA 2011: <4 years = no alteration needed.\nPer Endocrine Society 2019: conflicting guidelines (ADA vs AAOMS).\nPer FDA 2011: no substantial data to guide drug holiday decisions.\nPer Park 2025 (152,299 patients): risk lower when paused >90 days.\n\n⚠ Optimize oral health BEFORE starting bisphosphonates. Atraumatic extraction when possible.",
    notes: "The drug holiday decision is CONTROVERSIAL. Default to continuing for <4 years. For >4 years + risk factors, coordinate with prescribing physician — fracture risk vs MRONJ risk is the trade-off.",
    refs: ["ruggiero-2014-mronj", "park-2025-bisphosphonate-timing", "herrick-2021-medical-clearance"]
  },
  {
    id: "iv-bisphosphonate", lastReviewed: "2026-03", name: "IV Bisphosphonates — Much Higher MRONJ Risk", mfr: "Multiple (Zometa, Reclast)", cat: "Bisphosphonate/Antiresorptive — IV ⚠",
    framework: "DRUGS:\n• Zoledronic acid (Reclast) — yearly for osteoporosis\n• Zoledronic acid (Zometa) — monthly for CANCER\n• Pamidronate (Aredia) — for cancer\n\n⚠ Cancer patients: up to 100x HIGHER MRONJ risk than osteoporosis patients.\nHalf-life in bone: YEARS (not days/weeks).",
    application: "DENTAL MANAGEMENT:\n\nOSTEOPOROSIS (yearly Reclast): consider holding; per Park 2025, risk lowest when paused >1 year\n\nCANCER (monthly Zometa): AVOID dental surgery if possible\n• If necessary: coordinate with oncologist\n• Drug holiday may NOT be beneficial due to long bone half-life\n\n⚠ DENTAL CLEARANCE BEFORE starting IV bisphosphonates is STRONGLY recommended.\n⚠ Atraumatic extraction technique mandatory. Consider prophylactic antibiotics (no strong evidence).",
    evidence: "Per AAOMS 2014: cancer patients on IV bisphosphonates at dramatically higher MRONJ risk.\nPer Park 2025: risk lowest when paused >1 year for zoledronate.\nPer Eastell 2019 (Endocrine Society): pharmacological management of osteoporosis guidelines.",
    notes: "IV bisphosphonates for cancer = highest MRONJ risk category. Drug holiday is less effective than with oral bisphosphonates due to long bone half-life. Prevention (dental clearance before starting) is the best strategy.",
    refs: ["ruggiero-2014-mronj", "park-2025-bisphosphonate-timing"]
  },
];

// ═══════════════════════════════════════════════
// PSYCHIATRIC MEDICATIONS
// ═══════════════════════════════════════════════
export const PSYCH_MEDS = [
  {
    id: "ssri-snri-dental", lastReviewed: "2026-03", name: "SSRIs & SNRIs (Serotonin/Norepinephrine Reuptake Inhibitors) — Serotonin Syndrome Risk", mfr: "Multiple (Prozac, Zoloft, Lexapro, Effexor, Cymbalta)", cat: "Psychiatric — SSRI/SNRI",
    framework: "SSRIs: fluoxetine (Prozac), sertraline (Zoloft), escitalopram (Lexapro), paroxetine (Paxil)\nSNRIs: venlafaxine (Effexor), duloxetine (Cymbalta)\n\nMECHANISM: inhibit serotonin (± norepinephrine) reuptake.\nHEMOSTASIS: mild antiplatelet effect (usually clinically insignificant for dental).\nORAL MANIFESTATION: bruxism (SSRIs may worsen).",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE — DO NOT HOLD (risk of withdrawal/relapse outweighs minimal bleeding risk)\n\n⚠ SEROTONIN SYNDROME — AVOID combining with:\n• Tramadol — CONTRAINDICATED\n• Meperidine (Demerol) — CONTRAINDICATED\n• Linezolid — CONTRAINDICATED\n\nSAFE analgesics with SSRIs/SNRIs:\n• Codeine, oxycodone, hydrocodone, morphine — all safe\n• Ibuprofen + acetaminophen — PREFERRED (no serotonin interaction)\n\nFluoxetine may inhibit benzodiazepine metabolism (CYP2D6/3A4) — reduce sedation doses if patient on fluoxetine.",
    evidence: "Per Sertöz 2025 (Minerva Anestesiol): continue SSRIs/SNRIs perioperatively.\n\nSerotonin syndrome: potentially fatal. Symptoms: hyperthermia, rigidity, myoclonus, agitation, autonomic instability. Onset within hours of drug combination.",
    notes: "ALWAYS ask about SSRIs/SNRIs before prescribing tramadol. This is the most common dangerous drug interaction in dental prescribing.",
    refs: ["sertoz-2025-psychotropics"]
  },
  {
    id: "tca-maoi-dental", lastReviewed: "2026-03", name: "TCAs & MAOIs (Tricyclic Antidepressants & Monoamine Oxidase Inhibitors) — Epinephrine Limits", mfr: "Multiple", cat: "Psychiatric — TCA/MAOI ⚠",
    framework: "TCAs: amitriptyline, nortriptyline, doxepin, imipramine\n• Mechanism: inhibit serotonin + norepinephrine reuptake; anticholinergic\n• Oral manifestation: XEROSTOMIA (significant)\n\nMAOIs: phenelzine (Nardil), tranylcypromine (Parnate)\n• Mechanism: inhibit monoamine oxidase\n• RARE but important — high drug interaction risk",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE BOTH — DO NOT HOLD\n\nTCAs — EPINEPHRINE LIMITS:\n• Limit to 1:100,000 concentration\n• Maximum 2 CARPULES (0.036mg epinephrine)\n• Risk: hypertensive crisis, arrhythmias\n• TCAs potentiate pressor response to epinephrine\n\nMAOIs — EVEN STRICTER:\n• Limit to 1:100,000 concentration\n• Maximum 1 CARPULE (0.018mg epinephrine)\n• Risk: hypertensive crisis\n\nMAOI CONTRAINDICATED DRUGS:\n• Meperidine — can cause serotonin syndrome → DEATH\n• Tramadol — serotonin syndrome risk\n• Ephedrine, pseudoephedrine — hypertensive crisis\n\nSafe opioids with MAOIs: morphine, oxycodone, hydrocodone (use cautiously).",
    evidence: "Per Sertöz 2025: continue TCAs/MAOIs perioperatively. Coordinate with psychiatrist for MAOIs.\n\nTCAs: significant sedation — additive with dental sedatives. Reduce sedation doses by 25-50%.\nMAOIs: individualize for procedures requiring sedation/GA — discuss with psychiatry and anesthesia.",
    notes: "TCAs: limit epi to 2 carpules. MAOIs: limit epi to 1 carpule. NEVER prescribe meperidine or tramadol to patients on MAOIs.",
    refs: ["sertoz-2025-psychotropics"]
  },
  {
    id: "benzo-chronic-dental", lastReviewed: "2026-03", name: "Benzodiazepines (Chronic Use) — Withdrawal Risk", mfr: "Multiple (Xanax, Ativan, Valium, Klonopin)", cat: "Psychiatric — Benzodiazepine",
    framework: "DRUGS: alprazolam (Xanax), lorazepam (Ativan) — short-acting; diazepam (Valium), clonazepam (Klonopin) — long-acting.\nMECHANISM: enhance GABA-A receptor activity.\n\n⚠ RISK: withdrawal SEIZURES if stopped abruptly.",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE — DO NOT HOLD (seizure risk)\n\nSEDATION ADJUSTMENT:\n• Patients on chronic benzodiazepines have TOLERANCE\n• REDUCE procedural sedation doses by 30-50%\n• Risk of respiratory depression when combined with opioids\n\n⚠ FDA WARNING: avoid concurrent opioid + benzodiazepine prescribing\n• Increased risk of respiratory depression, overdose, death\n• If both needed: lowest doses, shortest duration\n• Consider naloxone prescription\n\nDrug interactions: fluoxetine/fluvoxamine may inhibit benzo metabolism → increased sedation.",
    evidence: "Per Sertöz 2025: continue benzodiazepines perioperatively. Risk of withdrawal seizures if stopped.\n\nChronic benzo patients require dose adjustment for procedural sedation — they will need LESS additional benzodiazepine but may need it due to tolerance.",
    notes: "Never stop chronic benzodiazepines abruptly. Adjust procedural sedation doses. Monitor for respiratory depression when combining with opioids.",
    refs: ["sertoz-2025-psychotropics"]
  },
];

// ═══════════════════════════════════════════════
// SUPPLEMENTS & CANNABINOIDS
// ═══════════════════════════════════════════════
export const SUPPLEMENTS = [
  {
    id: "herbal-supplements", lastReviewed: "2026-03", name: "Herbal Supplements — Hold Guidelines", mfr: "SPAQI 2021 Consensus", cat: "Supplement — Herbal ⚠",
    framework: "⚠ MANY herbs have ANTIPLATELET effects.\n\nHOLD 2 WEEKS BEFORE SURGERY:\n• Garlic, ginger, ginkgo biloba, turmeric, feverfew\n• Ginseng (American, Panax, Siberian), dong quai, danshen\n• Saw palmetto, horse chestnut, resveratrol, vitamin E\n• Aloe, arnica, bromelain, cat\'s claw, devil\'s claw\n\nHOLD 48 HOURS:\n• Chondroitin, glucosamine\n\nCONTINUE (safe):\n• Fish oil/omega-3 — NO increased bleeding in prospective studies\n• Melatonin — may reduce preoperative anxiety (Cochrane: as effective as midazolam)\n• Passionflower — good safety profile\n• German chamomile — modest anxiety reduction",
    application: "CLINICAL PROTOCOL:\n\n1. ASK SPECIFICALLY about ALL supplements — patients often don\'t volunteer this information\n2. Document supplement name, dose, duration\n3. Hold antiplatelet herbs 2 weeks before surgery/sedation\n4. Continue fish oil (prior bleeding concerns NOT supported)\n5. Continue melatonin (may actually help)\n6. Resume all supplements when healing adequate (typically 1-2 weeks post-op)",
    evidence: "Per SPAQI 2021 Consensus (Cummings, Mayo Clin Proc): comprehensive perioperative supplement management guidelines with evidence ratings for each supplement.\n\nFish oil: newer prospective data suggest potentially LOWER blood loss, contradicting older concerns.\nMelatonin: Cochrane review supports anxiolytic effect; may decrease delirium in elderly.",
    notes: "The most commonly missed medication class. Patients do not think of supplements as medications. ASK DIRECTLY about herbs, vitamins, and supplements.",
    refs: ["cummings-2021-spaqi-supplements"]
  },
  {
    id: "cannabis-dental", lastReviewed: "2026-03", name: "Cannabis/CBD — Perioperative Management", mfr: "ASRA 2023 / SPAQI 2021", cat: "Supplement — Cannabis/CBD ⚠",
    framework: "PRODUCTS: marijuana (THC), CBD oil, hemp products, edibles, vaporized, smoked.\n\n⚠ PHYSIOLOGICAL CONCERNS:\n• Cardiovascular: sympathetic hyperactivity, tachycardia (30%), coronary vasospasm\n• Respiratory: airway irritability (similar to tobacco), wheezing, uvular edema\n• Anesthetic: impaired temperature regulation, INCREASED anesthetic requirements\n• Hemostasis: THC and CBD inhibit platelet aggregation in vitro\n• 21% of \'pure CBD\' products contain THC",
    application: "DENTAL MANAGEMENT:\n\nLOCAL ANESTHESIA ONLY: may continue (low risk)\n\nIV SEDATION OR GENERAL ANESTHESIA:\n• HOLD ≥3 DAYS minimum (ideally 2 weeks if smoked)\n• Treat cannabis smokers like tobacco smokers for airway management\n\n⚠ ACUTE INTOXICATION: CANCEL elective procedure\n\n⚠ Product variability: no standardization of THC:CBD ratios. Cannot assume \'CBD only\' is actually THC-free.",
    evidence: "Per ASRA 2023 Guideline (Shah): recommendations range from 72 hours to 10 days cessation before surgery.\nPer SPAQI 2021: discontinue use, minimum hold 3 days, ideal 2 weeks for smokers.\n\nIncreased anesthetic requirements in chronic users — may need higher doses of sedatives.",
    notes: "Cannabis use is increasingly common and under-reported. Ask specifically. Treat smokers like tobacco smokers for airway assessment. Cancel if acutely intoxicated.",
    refs: ["shah-2023-asra-cannabis", "cummings-2021-spaqi-supplements"]
  },
];

// ═══════════════════════════════════════════════
// QUICK REFERENCE CARDS
// ═══════════════════════════════════════════════
export const QUICK_REF = [
  {
    id: "drug-interactions-dental", lastReviewed: "2026-03", name: "Drug Interactions — Dental Prescribing Quick Reference", mfr: "N/A — Reference", cat: "Quick Reference — Drug Interactions",
    framework: "CRITICAL DENTAL PRESCRIBING INTERACTIONS:\n\nPATIENT ON → AVOID → USE INSTEAD\n\nWarfarin/DOACs → chronic NSAIDs → acetaminophen\nLithium → NSAIDs (increases Li 25-60%) → acetaminophen\nSSRIs/SNRIs → tramadol, meperidine → codeine, oxycodone\nMAOIs → meperidine, tramadol, ephedrine → morphine, oxycodone (cautiously)\nCyclosporine/tacrolimus → clarithromycin, erythromycin → AZITHROMYCIN\nCarbamazepine → clarithromycin, erythromycin → AZITHROMYCIN\nColchicine → clarithromycin, erythromycin → AZITHROMYCIN\nMethotrexate → high-dose NSAIDs → acetaminophen\nGabapentin/pregabalin → opioids → NSAIDs + acetaminophen\nPDE-5 inhibitors (Viagra) → nitrates → avoid nitrates 24-48h\nTCAs → epinephrine >2 carpules → limit to 2 carpules\nNon-selective beta-blockers → epinephrine >2 carpules → limit to 2 carpules",
    application: "BEFORE PRESCRIBING ANY MEDICATION:\n1. Review patient\'s current medication list\n2. Check this interaction table\n3. Default to acetaminophen + ibuprofen (fewest interactions)\n4. Default to azithromycin (fewest CYP interactions) when antibiotic needed\n5. When in doubt: acetaminophen alone is almost universally safe",
    evidence: "These interactions are well-documented and clinically significant. The most common dangerous interaction in dental practice is SSRI + tramadol (serotonin syndrome).",
    notes: "Print this card for chairside reference. The three rules: (1) APAP is almost always safe, (2) Azithromycin is the safest antibiotic for drug interactions, (3) NEVER give tramadol to patients on SSRIs/SNRIs/MAOIs.",
    refs: []
  },
  {
    id: "epi-limits-card", lastReviewed: "2026-03", name: "Epinephrine Limits by Medication", mfr: "N/A — Reference", cat: "Quick Reference — Epinephrine",
    framework: "STANDARD (no medication concerns):\n• 1:100,000 epi — no specific limit (0.2mg max per appointment per healthy adult)\n\nTCAs (amitriptyline, nortriptyline, doxepin):\n• 1:100,000 concentration\n• Maximum 2 CARPULES (0.036mg epi)\n• Risk: hypertensive crisis, arrhythmias\n\nMAOIs (phenelzine, tranylcypromine):\n• 1:100,000 concentration\n• Maximum 1 CARPULE (0.018mg epi)\n• Risk: severe hypertensive crisis\n\nNON-SELECTIVE BETA-BLOCKERS (propranolol):\n• 1:100,000 concentration\n• Maximum 2 CARPULES (0.036mg epi)\n• Risk: unopposed alpha-stimulation → hypertension\n• Selective beta-blockers (metoprolol, atenolol): safer with epi\n\nSTIMULANTS/ADHD (Adderall, Ritalin):\n• Use cautiously\n• Limit to 2 CARPULES\n• Monitor cardiovascular response",
    application: "CHAIRSIDE PROTOCOL:\n1. Ask about TCAs, MAOIs, beta-blockers, stimulants at EVERY visit\n2. Document epi limit in chart\n3. Count carpules administered\n4. If limit reached: use 3% mepivacaine (no epi) for additional anesthesia\n5. Monitor BP and heart rate if using epi in at-risk patients",
    evidence: "These limits are consensus-based and universally taught in dental education. The physiological basis is well-established: TCAs and MAOIs potentiate catecholamine effects; non-selective beta-blockers cause unopposed alpha stimulation.",
    notes: "Know the three medications that limit epinephrine: TCAs (2 carpules), MAOIs (1 carpule), non-selective beta-blockers (2 carpules). If in doubt, use mepivacaine 3% plain.",
    refs: []
  },
];

export const ALL_PHARM_PRODUCTS = [
  ...ANTICOAG,
  ...DIABETES_MEDS,
  ...MRONJ_MEDS,
  ...PSYCH_MEDS,
  ...SUPPLEMENTS,
  ...QUICK_REF,
];
