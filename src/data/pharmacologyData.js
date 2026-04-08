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
  "miller-2014-steroid-supplement": { pmid: null, title: "Perioperative Steroid Supplementation in Dental Patients", authors: "Miller CS, Schonfeld SE", journal: "Oral Surg Oral Med Oral Pathol Oral Radiol", year: 2014, grade: "MODERATE" },
  "hopon-2018-hbo-orn": { pmid: null, title: "HOPON Trial: Hyperbaric Oxygen for Prevention of ORN After Tooth Extraction", authors: "Shaw RJ et al.", journal: "J Dent Res", year: 2018, grade: "STRONG" },
  "acr-2015-mtx-periop": { pmid: null, title: "ACR/AAHKS Guidelines for Perioperative Management of Antirheumatic Medications", authors: "ACR/AAHKS", journal: "Arthritis Rheumatol", year: 2015, grade: "STRONG" },
};

export const pharmGetGroup = c => {
  if (c.includes("Anticoag") || c.includes("Antiplatelet") || c.includes("Thromb")) return "Anticoagulants & Antiplatelets";
  if (c.includes("Antihypertens") || c.includes("Cardiac") || c.includes("Beta-Blocker") || c.includes("CCB") || c.includes("ACE Inhibitor") || c.includes("ARB") || c.includes("Diuretic")) return "Antihypertensives";
  if (c.includes("Diabet") || c.includes("Insulin") || c.includes("GLP") || c.includes("SGLT") || c.includes("Metformin")) return "Diabetes Medications";
  if (c.includes("Bisphosphonate") || c.includes("MRONJ") || c.includes("Denosumab") || c.includes("Antiresorptive") || c.includes("Antiangiogenic")) return "Bisphosphonates & MRONJ";
  if (c.includes("Psych") || c.includes("SSRI") || c.includes("Benzo") || c.includes("Lithium") || c.includes("MAOI") || c.includes("Stimulant")) return "Psychiatric Medications";
  if (c.includes("Anticonvulsant") || c.includes("Antiepileptic") || c.includes("Gabapentinoid")) return "Anticonvulsants";
  if (c.includes("Steroid") || c.includes("Cortico")) return "Corticosteroids";
  if (c.includes("Thyroid")) return "Thyroid Medications";
  if (c.includes("Immunosuppressant") || c.includes("Biologic") || c.includes("Transplant") || c.includes("TNF")) return "Immunosuppressants & Biologics";
  if (c.includes("Chemotherapy") || c.includes("Radiation") || c.includes("Oncology")) return "Chemotherapy & Radiation";
  if (c.includes("Hormonal") || c.includes("Contraceptive") || c.includes("HRT")) return "Hormonal Medications";
  if (c.includes("GI —") || c.includes("PPI") || c.includes("H2 Blocker")) return "GI Medications";
  if (c.includes("Muscle Relaxant")) return "Muscle Relaxants";
  if (c.includes("Opioid") || c.includes("MAT") || c.includes("Methadone") || c.includes("Buprenorphine")) return "Chronic Opioids & MAT";
  if (c.includes("Supplement") || c.includes("Herbal") || c.includes("Cannabis")) return "Supplements & Cannabinoids";
  if (c.includes("Antihistamine")) return "Other Medication Classes";
  if (c.includes("Interaction") || c.includes("Reference") || c.includes("Emergency") || c.includes("Oral Manifestation") || c.includes("Special Population")) return "Quick Reference";
  return "Other Medication Classes";
};

export const PHARM_GROUPS = ["Anticoagulants & Antiplatelets", "Antihypertensives", "Diabetes Medications", "Bisphosphonates & MRONJ", "Corticosteroids", "Psychiatric Medications", "Anticonvulsants", "Thyroid Medications", "Immunosuppressants & Biologics", "Chemotherapy & Radiation", "Hormonal Medications", "GI Medications", "Muscle Relaxants", "Chronic Opioids & MAT", "Supplements & Cannabinoids", "Other Medication Classes", "Quick Reference"];

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
  {
    id: "metformin-dental", lastReviewed: "2026-03", name: "Metformin (Glucophage) — Lactic Acidosis & Contrast Dye", mfr: "Multiple", cat: "Diabetes — Metformin",
    framework: "MECHANISM: reduces hepatic glucose production, increases insulin sensitivity. Does NOT cause hypoglycemia alone.\nUSES: Type 2 diabetes (first-line), prediabetes, PCOS.\nHALF-LIFE: 4-9 hours.\n\n⚠ LACTIC ACIDOSIS (rare but serious):\n• Risk increased with renal impairment, dehydration, contrast dye, excessive alcohol\n• Symptoms: nausea, vomiting, abdominal pain, rapid breathing, confusion\n\nORAL MANIFESTATIONS:\n• Metallic/dysgeusia (10-30%)\n• May contribute to B12 deficiency → glossitis, burning mouth",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE for most dental procedures — DO NOT HOLD\n\n• Metformin does NOT cause hypoglycemia when used alone (biguanide, not insulin secretagogue)\n• No special precautions for local anesthesia procedures\n• Epinephrine: SAFE\n\n⚠ HOLD for procedures requiring iodinated contrast dye (e.g., CT with contrast):\n• Hold 48 hours before and after contrast\n• Relevance: if you order CT imaging with contrast for surgical planning\n\n⚠ IV SEDATION/GA with prolonged NPO:\n• Continue metformin if short NPO period\n• If prolonged NPO (>12 hours) or concern for dehydration: hold on day of procedure\n• Resume when eating normally\n\nTaste disturbance: common. Patients may complain — reassure that it's a known side effect.",
    evidence: "Per ADA 2026: metformin remains first-line for Type 2 diabetes. Lactic acidosis risk is very low (4.3 per 100,000 patient-years) in patients with normal renal function.\nMetformin does not cause hypoglycemia — this is the key distinction from sulfonylureas and insulin.",
    notes: "Metformin is the safest diabetes drug for dental. Continue it. No hypoglycemia risk. Only concern: dehydration during long NPO, or contrast dye interaction.",
    refs: ["ada-2026-diabetes-hospital"]
  },
  {
    id: "sulfonylurea-dental", lastReviewed: "2026-03", name: "Sulfonylureas (Glipizide, Glyburide, Glimepiride) — Hypoglycemia Risk ⚠", mfr: "Multiple", cat: "Diabetes — Sulfonylurea ⚠",
    framework: "DRUGS: glipizide (Glucotrol), glyburide (DiaBeta, Glynase), glimepiride (Amaryl).\nMECHANISM: stimulate pancreatic insulin secretion (insulin secretagogues).\n\n⚠ HYPOGLYCEMIA RISK:\n• HIGHEST among oral diabetes drugs\n• Risk increased by: missed meals, NPO status, alcohol, renal impairment\n• Glyburide: HIGHEST hypoglycemia risk (active metabolites, longest acting)\n• Glimepiride: lower hypoglycemia risk\n\nORAL MANIFESTATIONS:\n• Hypoglycemia symptoms: tremor, diaphoresis, confusion, altered behavior",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE — but adjust for NPO status\n\n• MORNING APPOINTMENT PREFERRED (avoid missed lunch)\n• If patient will eat before appointment: take medication as usual\n• If NPO for sedation:\n  — HOLD morning sulfonylurea dose\n  — Resume when eating post-procedure\n• Keep glucose source available (juice, glucose tablets, cake gel)\n\n⚠ HYPOGLYCEMIA PROTOCOL:\n• Conscious patient: 15-20g fast-acting carbohydrate (4oz juice, glucose tablets)\n• Recheck glucose in 15 minutes, repeat if still <70 mg/dL\n• Unconscious patient: glucagon 1mg IM or nasal glucagon 3mg\n\nEpinephrine: SAFE. May transiently increase glucose (actually helpful if hypoglycemic).",
    evidence: "Sulfonylureas cause hypoglycemia in 10-20% of users annually. Glyburide has the highest rate. Morning dental appointments minimize risk of missed meals.",
    notes: "Hold sulfonylurea if NPO for sedation. Keep glucose source available. Morning appointments preferred. Treat hypoglycemia with 15g fast carbs.",
    refs: ["ada-2026-diabetes-hospital"]
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
  {
    id: "lithium-dental", lastReviewed: "2026-03", name: "Lithium (Lithobid) — Narrow Therapeutic Index ⚠", mfr: "Multiple", cat: "Psychiatric — Lithium ⚠",
    framework: "MECHANISM: mood stabilizer (mechanism not fully understood — modulates intracellular signaling).\nUSES: bipolar disorder (first-line), augmentation for depression.\nTHERAPEUTIC RANGE: 0.6-1.2 mEq/L (NARROW).\nTOXIC: >1.5 mEq/L. Lethal: >3.0 mEq/L.\nHALF-LIFE: 18-36 hours.\n\n⚠ NSAIDs INCREASE LITHIUM LEVELS 25-60%:\n• Reduced renal lithium clearance\n• This is the #1 dental-relevant drug interaction for lithium\n\nORAL MANIFESTATIONS:\n• Dysgeusia (metallic taste)\n• Xerostomia\n• Tremor (complicates dental procedures)\n• Sialorrhea at higher doses (paradoxical)",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE — DO NOT HOLD\n\nANALGESIC PRESCRIBING:\n• AVOID NSAIDs (ibuprofen, naproxen) — increases lithium 25-60%\n• Use ACETAMINOPHEN as sole analgesic\n• If NSAID absolutely necessary: ≤3 days only, coordinate with psychiatrist for lithium level check\n• Aspirin: less effect on lithium levels than other NSAIDs but still use cautiously\n• COX-2 inhibitors (celecoxib): SAME interaction as traditional NSAIDs\n\nSEDATION:\n• Lithium may prolong neuromuscular blockade\n• Standard dental sedation doses are generally safe\n• Monitor for tremor (may worsen with anxiety)\n\n⚠ DEHYDRATION increases lithium levels:\n• Ensure patient is well-hydrated before procedure\n• If patient has been NPO for sedation, monitor for lithium toxicity signs\n• Signs of toxicity: coarse tremor, nausea, vomiting, diarrhea, ataxia, confusion",
    evidence: "NSAID-lithium interaction is well-documented across multiple studies. Even short-course ibuprofen can increase lithium levels into toxic range.\nAcetaminophen does not affect lithium levels — always the preferred choice.",
    notes: "Lithium + NSAIDs = dangerous. ACETAMINOPHEN ONLY. If patient must have NSAID: ≤3 days, check lithium level. Keep patient hydrated.",
    refs: ["sertoz-2025-psychotropics"]
  },
  {
    id: "stimulants-adhd-dental", lastReviewed: "2026-03", name: "Stimulants/ADHD Medications — Cardiovascular Considerations", mfr: "Multiple", cat: "Psychiatric — Stimulant/ADHD",
    framework: "DRUGS:\n• Amphetamine salts (Adderall, Vyvanse/lisdexamfetamine)\n• Methylphenidate (Ritalin, Concerta, Focalin)\n• Non-stimulant: atomoxetine (Strattera — NRI)\n\nMECHANISM: increase dopamine/norepinephrine availability.\n\n⚠ CARDIOVASCULAR EFFECTS:\n• Increased HR (5-10 bpm), increased BP (2-4 mmHg)\n• Sympathomimetic → additive with epinephrine\n• Rare: sudden cardiac death (pre-existing structural heart disease)",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE — DO NOT HOLD\n\nEPINEPHRINE PRECAUTIONS:\n• Limit to 2 CARPULES of 1:100,000 (same as TCAs)\n• Risk: additive sympathomimetic effect → tachycardia, hypertension\n• Use aspiration technique, inject slowly\n• Monitor cardiovascular response\n• Alternative: 3% mepivacaine plain\n\nSEDATION:\n• Chronic stimulant users may have altered anesthetic requirements\n• May need higher sedative doses (sympathetic tone)\n• Monitor HR and BP during sedation\n\nBEHAVIORAL CONSIDERATIONS:\n• Schedule appointments for when medication is active (better cooperation)\n• Xerostomia common → increased caries risk\n• Bruxism possible\n• Appetite suppression → check nutritional status in children",
    evidence: "Stimulant-epinephrine interaction is based on additive sympathomimetic pharmacology. Clinical significance at dental epi doses is debated but precaution is warranted.\nPer FDA: cardiovascular screening recommended before starting stimulants.",
    notes: "Limit epi to 2 carpules. Schedule appointments when medication is active. Xerostomia → caries risk. Monitor cardiovascular status.",
    refs: []
  },
  {
    id: "antipsychotics-dental", lastReviewed: "2026-03", name: "Antipsychotics (Typical & Atypical) — Xerostomia & Interactions", mfr: "Multiple", cat: "Psychiatric — Antipsychotic",
    framework: "TYPICAL (1st gen): haloperidol (Haldol), chlorpromazine, fluphenazine\nATYPICAL (2nd gen): risperidone (Risperdal), olanzapine (Zyprexa), quetiapine (Seroquel), aripiprazole (Abilify), clozapine (Clozaril), ziprasidone (Geodon)\n\nMECHANISM: dopamine D2 receptor antagonism (± serotonin, histamine, muscarinic, alpha receptors).\n\n⚠ ORAL MANIFESTATIONS:\n• Xerostomia (significant — anticholinergic effect, especially olanzapine, quetiapine)\n• Tardive dyskinesia (involuntary orofacial movements — typicals > atypicals)\n• Sialorrhea (CLOZAPINE — paradoxical drooling despite anticholinergic properties)\n• Dysphagia\n• Burning mouth syndrome",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE — DO NOT HOLD (psychotic relapse risk)\n\nSEDATION ADJUSTMENT:\n• Significant sedation potentiation — reduce dental sedative doses by 25-50%\n• Especially: quetiapine (very sedating), olanzapine, chlorpromazine\n• Additive CNS depression with opioids, benzodiazepines, N2O\n\nEPINEPHRINE:\n• Typical antipsychotics (haloperidol, chlorpromazine): alpha-blocking effect\n  — Epinephrine may cause paradoxical HYPOTENSION (β2 vasodilation unopposed)\n  — Limit epi or use cautiously with typicals\n• Atypical antipsychotics: generally safe with standard epi doses\n\n⚠ QTc PROLONGATION: haloperidol, ziprasidone, thioridazine\n• Avoid additional QT-prolonging drugs (erythromycin, ondansetron high-dose)\n\nCLOZAPINE SPECIAL:\n• AGRANULOCYTOSIS (1-2%): check WBC/ANC before invasive procedures\n• If ANC <1500: defer elective treatment\n• Sialorrhea: bothersome to patient, increases caries risk at commissures",
    evidence: "Tardive dyskinesia: 20-30% prevalence with long-term typical antipsychotic use. Atypicals have lower risk but not zero.\nClozapine agranulocytosis requires mandatory REMS monitoring program.",
    notes: "Continue antipsychotics. Reduce sedation doses 25-50%. Typicals: limit epi (alpha-blocking). Clozapine: check ANC. Xerostomia management is critical for caries prevention.",
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
// ANTIHYPERTENSIVES
// ═══════════════════════════════════════════════
export const ANTIHYPERTENSIVES = [
  {
    id: "ace-inhibitors-dental", lastReviewed: "2026-03", name: "ACE Inhibitors — Angioedema Risk & Dry Cough", mfr: "Multiple (lisinopril, enalapril, ramipril, benazepril)", cat: "Antihypertensive — ACE Inhibitor",
    framework: "DRUGS: lisinopril (Zestril/Prinivil), enalapril (Vasotec), ramipril (Altace), benazepril (Lotensin), captopril.\nMECHANISM: inhibit angiotensin-converting enzyme → reduced angiotensin II → vasodilation, decreased aldosterone.\nHALF-LIVES: 6-12h (most), captopril 2h.\n\nORAL MANIFESTATIONS:\n• Dry cough (5-20%) — most common side effect, bradykinin accumulation\n• ANGIOEDEMA (0.1-0.7%) — lips, tongue, floor of mouth. Can occur YEARS after starting drug\n• Dysgeusia (metallic/loss of taste) — especially captopril\n• Lichenoid drug reactions (rare)\n• Burning mouth sensation",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE — DO NOT HOLD\n\n• Take medication as scheduled on day of procedure\n• Monitor BP before procedure — confirm <180/110 before starting\n• Epinephrine: SAFE at standard doses (no interaction)\n• NSAIDs: may reduce antihypertensive effect — short course (≤5 days) OK, avoid chronic use\n\n⚠ ANGIOEDEMA ALERT:\n• If patient develops lip/tongue swelling: this is an EMERGENCY\n• Administer epinephrine 0.3mg IM if airway compromise\n• ACEi angioedema does NOT respond to antihistamines or steroids (bradykinin-mediated, not histamine)\n• Call 911 immediately — airway management may be needed\n• Report to prescribing physician for drug change (switch to ARB, but 2-8% cross-reactivity)",
    evidence: "Per AHA/ACC 2024: continue ACE inhibitors perioperatively for most procedures.\nACEi angioedema is more common in Black patients (3-4x higher incidence).\nNSAID interaction: clinically significant only with chronic use (>5 days); short dental courses are acceptable.",
    notes: "Continue ACEi. Watch for angioedema (lips/tongue) — does NOT respond to Benadryl. NSAIDs OK for short courses. Epinephrine is safe.",
    refs: ["thompson-2024-aha-periop"]
  },
  {
    id: "arb-dental", lastReviewed: "2026-03", name: "ARBs (Angiotensin Receptor Blockers) — Safer Alternative to ACEi", mfr: "Multiple (losartan, valsartan, irbesartan, olmesartan)", cat: "Antihypertensive — ARB",
    framework: "DRUGS: losartan (Cozaar), valsartan (Diovan), irbesartan (Avapro), olmesartan (Benicar), candesartan (Atacand), telmisartan (Micardis).\nMECHANISM: block angiotensin II at AT1 receptor → vasodilation.\n\nORAL MANIFESTATIONS:\n• Angioedema (RARE, <0.1% — much lower than ACEi)\n• NO dry cough (key advantage over ACEi)\n• Dysgeusia (rare)",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE — DO NOT HOLD\n\n• Same protocol as ACE inhibitors\n• Monitor BP before procedure\n• Epinephrine: SAFE at standard doses\n• NSAIDs: same caution as ACEi — short course OK, avoid chronic\n• Lower angioedema risk than ACEi but still possible (2-8% cross-reactivity in patients switched from ACEi for angioedema)",
    evidence: "Per AHA/ACC 2024: continue ARBs perioperatively.\nARBs are first-line alternative when ACEi causes cough or angioedema.\nAngioedema cross-reactivity: 2-8% of patients with ACEi angioedema will also react to ARBs.",
    notes: "Simpler than ACEi — no cough, much less angioedema. Continue. Same NSAID caution applies.",
    refs: ["thompson-2024-aha-periop"]
  },
  {
    id: "beta-blocker-dental", lastReviewed: "2026-03", name: "Beta-Blockers — Epinephrine Interaction ⚠", mfr: "Multiple", cat: "Antihypertensive — Beta-Blocker ⚠",
    framework: "NON-SELECTIVE (block β1 + β2): propranolol (Inderal), nadolol (Corgard), carvedilol (Coreg), labetalol, timolol (ophthalmic)\nSELECTIVE β1 (cardioselective): metoprolol (Lopressor/Toprol), atenolol (Tenormin), bisoprolol\n\nMECHANISM: block beta-adrenergic receptors → reduced HR, contractility, BP.\n\n⚠ EPINEPHRINE INTERACTION (non-selective only):\n• Epinephrine stimulates both α (vasoconstriction) and β2 (vasodilation)\n• Non-selective β-blockers block β2 vasodilation → UNOPPOSED ALPHA → severe hypertension + reflex bradycardia\n• Selective β1 blockers: interaction is much less significant",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE — DO NOT HOLD (rebound tachycardia/hypertension risk)\n\nEPINEPHRINE LIMITS:\n• NON-SELECTIVE (propranolol, nadolol, carvedilol):\n  — Limit to 2 CARPULES (0.036mg epi) of 1:100,000\n  — Risk: hypertensive crisis from unopposed alpha stimulation\n  — Alternative: use 3% mepivacaine (no epi)\n\n• SELECTIVE β1 (metoprolol, atenolol, bisoprolol):\n  — Standard epi doses generally safe\n  — Still use aspiration technique, slow injection\n  — Some references suggest limiting to 4 carpules as precaution\n\n⚠ NEVER stop beta-blockers abruptly — rebound tachycardia, hypertension, arrhythmia, angina, even MI.",
    evidence: "Per pharmacology literature: non-selective beta-blockers + epinephrine → unopposed alpha stimulation is a well-documented interaction.\nPer AHA/ACC 2024: continue beta-blockers perioperatively — stopping is MORE dangerous than the epi interaction.\nSelective β1 blockers at normal doses have minimal clinical interaction with dental epi doses.",
    notes: "KEY: non-selective (propranolol) = limit 2 carpules epi. Selective (metoprolol) = safer with epi. NEVER abruptly stop.",
    refs: ["thompson-2024-aha-periop"]
  },
  {
    id: "ccb-dental", lastReviewed: "2026-03", name: "Calcium Channel Blockers — Gingival Hyperplasia ⚠", mfr: "Multiple", cat: "Antihypertensive — CCB ⚠",
    framework: "DIHYDROPYRIDINES (vascular): nifedipine (Procardia/Adalat), amlodipine (Norvasc), felodipine\nNON-DIHYDROPYRIDINES (cardiac): diltiazem (Cardizem), verapamil (Calan)\n\nMECHANISM: block L-type calcium channels → vasodilation (DHP) or reduced HR/contractility (non-DHP).\n\n⚠ GINGIVAL HYPERPLASIA:\n• Nifedipine: 6-83% incidence (HIGHEST among all CCBs)\n• Amlodipine: 1.7-3.3% (lower but increasingly common due to high prescribing volume)\n• Diltiazem: 5-21%\n• Verapamil: rare (<2%)\n• Onset: typically within 1-3 months of starting drug\n• More severe with poor oral hygiene, higher doses, concomitant cyclosporine or phenytoin",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE — DO NOT HOLD\n\nGINGIVAL HYPERPLASIA MANAGEMENT:\n1. Meticulous oral hygiene instruction — primary prevention\n2. Professional cleaning every 3 months\n3. Chlorhexidine rinse 0.12% may help\n4. If severe: coordinate with physician for drug substitution\n   — ARB or ACEi are alternatives without gingival effects\n   — Amlodipine preferred over nifedipine if CCB needed\n5. Gingivectomy/gingivoplasty if necessary — but RECURS if drug continues\n\n⚠ TRIPLE THREAT: CCB + cyclosporine + phenytoin = worst gingival hyperplasia\n\nEpinephrine: SAFE with all CCBs.\nNSAIDs: short course OK.",
    evidence: "Per systematic reviews: nifedipine has highest incidence of gingival overgrowth among CCBs. Amlodipine is becoming more clinically relevant due to high prescribing volume.\nPlaque control significantly reduces severity — oral hygiene is the most modifiable factor.\nGingival overgrowth resolves or improves within 1-8 weeks of drug substitution.",
    notes: "CCBs are one of the 'big three' gingival hyperplasia drugs (with cyclosporine and phenytoin). Always check for CCBs in patients with gingival overgrowth. Drug substitution is the definitive treatment.",
    refs: ["thompson-2024-aha-periop"]
  },
  {
    id: "diuretics-dental", lastReviewed: "2026-03", name: "Diuretics — Electrolyte & Orthostatic Concerns", mfr: "Multiple", cat: "Antihypertensive — Diuretic",
    framework: "THIAZIDES: hydrochlorothiazide (HCTZ), chlorthalidone, indapamide\nLOOP: furosemide (Lasix), bumetanide, torsemide\nPOTASSIUM-SPARING: spironolactone (Aldactone), eplerenone, triamterene, amiloride\n\nMECHANISM: increase renal sodium/water excretion → reduced blood volume → lower BP.\n\nORAL MANIFESTATIONS:\n• Xerostomia (dehydration effect)\n• Lichenoid drug reactions (thiazides)\n• Orthostatic hypotension (especially loop diuretics + dental chair position changes)",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE — DO NOT HOLD\n\n• Allow bathroom breaks — patients on diuretics have urgency\n• Rise from dental chair SLOWLY — orthostatic hypotension risk, especially:\n  — Loop diuretics (furosemide)\n  — Elderly patients\n  — Patients also on other antihypertensives\n• Monitor BP, especially postural changes\n• Epinephrine: SAFE at standard doses\n• NSAIDs: may reduce diuretic efficacy and worsen renal function — short course OK\n\n⚠ HYPOKALEMIA (thiazides, loop): can increase risk of cardiac arrhythmias with epinephrine\n  — If patient reports muscle cramps, weakness, palpitations: check K+ before elective procedure\n\n⚠ HYPERKALEMIA (spironolactone + ACEi/ARB): monitor if prescribing NSAIDs (further K+ increase)",
    evidence: "Per AHA/ACC 2024: continue diuretics perioperatively. Orthostatic hypotension is the primary dental concern.\nHypokalemia from thiazides/loop diuretics theoretically increases arrhythmia risk with epi, but clinically significant events are rare at dental epi doses.",
    notes: "Continue diuretics. Remember: bathroom breaks, slow chair position changes, watch for orthostatic hypotension in elderly.",
    refs: ["thompson-2024-aha-periop"]
  },
];

// ═══════════════════════════════════════════════
// CORTICOSTEROIDS
// ═══════════════════════════════════════════════
export const CORTICOSTEROIDS = [
  {
    id: "corticosteroid-stress-dose", lastReviewed: "2026-03", name: "Corticosteroids — Stress Dose Protocol by Procedure", mfr: "Multiple (prednisone, prednisolone, methylprednisolone, hydrocortisone, dexamethasone)", cat: "Corticosteroid — Stress Dose Protocol",
    framework: "HYPOTHALAMIC-PITUITARY-ADRENAL (HPA) AXIS SUPPRESSION:\n• Occurs with ≥20mg prednisone/day (or equivalent) for ≥3 weeks\n• Also: ≥5mg prednisone/day for >4 weeks, Cushingoid appearance, any dose if adrenalectomy/pituitary disease\n• Recovery: 2-9 months after discontinuation\n\n⚠ RISK: adrenal crisis during surgical stress — hypotension, cardiovascular collapse\n\nEQUIVALENT DOSES (in mg):\n• Hydrocortisone 20 = Prednisone 5 = Prednisolone 5 = Methylprednisolone 4 = Dexamethasone 0.75\n\nNORMAL CORTISOL OUTPUT: 8-10mg hydrocortisone/day; stress response can produce 50-200mg/day",
    application: "STRESS DOSE PROTOCOL BY PROCEDURE SEVERITY:\n\nMINOR (SRP, simple extraction, 1-2 teeth):\n• Take usual morning dose\n• NO supplementation needed\n• Normal cortisol output sufficient\n\nMODERATE (multiple extractions, implant placement, biopsy):\n• Take usual morning dose PLUS\n• Hydrocortisone 50mg IV/IM at induction OR\n• Double usual oral dose morning of procedure\n• Resume normal dose next day\n\nMAJOR (full mouth extractions, orthognathic, major bone grafting):\n• Take usual morning dose PLUS\n• Hydrocortisone 100mg IV at induction\n• Then 50mg IV every 8 hours × 24-48 hours\n• Taper to normal dose over 1-2 days\n\n⚠ IF PATIENT ON <5mg PREDNISONE/DAY: NO supplementation needed for ANY dental procedure.\n⚠ IF PATIENT STOPPED STEROIDS <3 MONTHS AGO: treat as if still on steroids.",
    evidence: "Per Miller & Schonfeld 2014: stress dose supplementation guidelines by surgical risk.\nPer AHA/ACC 2024: confirms perioperative steroid supplementation recommendations.\n\nRECENT TREND: many experts now argue stress dosing is OVER-applied in dentistry. For most in-office dental procedures (local anesthesia only), simply taking the usual morning dose is sufficient. Reserve stress dosing for prolonged procedures under sedation/GA.",
    notes: "Most dental procedures are MINOR — just have patient take usual morning dose. Moderate/major procedures: supplement. Key: NEVER abruptly stop chronic steroids.",
    refs: ["thompson-2024-aha-periop"]
  },
  {
    id: "topical-inhaled-steroids", lastReviewed: "2026-03", name: "Topical & Inhaled Corticosteroids — Oral Candidiasis Risk", mfr: "Multiple", cat: "Corticosteroid — Topical/Inhaled",
    framework: "INHALED: fluticasone (Flovent/Advair), budesonide (Pulmicort/Symbicort), beclomethasone, mometasone (Asmanex)\nTOPICAL ORAL: triamcinolone acetonide (Kenalog in Orabase), dexamethasone rinse, clobetasol gel\n\nMECHANISM: local anti-inflammatory effect. Minimal systemic absorption at standard doses.\n\n⚠ ORAL MANIFESTATIONS:\n• Oral candidiasis (thrush) — 5-10% of inhaled steroid users\n• Dysphonia (hoarseness)\n• Topical oral steroids: localized candidiasis at application site",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE — NO supplementation needed (no HPA suppression at standard doses)\n\nCANDIDIASIS PREVENTION (inhaled steroids):\n1. Rinse mouth with water after EVERY inhaled dose\n2. Use spacer device with metered-dose inhalers\n3. Brush teeth after using inhaler\n4. If candidiasis develops: nystatin rinse or clotrimazole troches\n\nCANDIDIASIS WITH TOPICAL ORAL STEROIDS:\n1. Monitor for white patches at application sites\n2. Prophylactic antifungal if prolonged use (>2 weeks)\n3. Nystatin 100,000 units/mL rinse QID concurrent with steroid use\n\n⚠ HIGH-DOSE inhaled steroids (>1000mcg fluticasone equivalent/day) may cause HPA suppression — treat like systemic steroids.",
    evidence: "Oral candidiasis is the most common oral side effect of inhaled corticosteroids. Spacer use reduces oropharyngeal deposition by 80% and significantly reduces candidiasis risk.\nHPA suppression from inhaled steroids is rare at standard doses but documented at high doses.",
    notes: "Rinse-and-spit after inhaled steroids prevents most candidiasis. No stress dose supplementation needed for inhaled/topical steroids at standard doses.",
    refs: []
  },
];

// ═══════════════════════════════════════════════
// DENOSUMAB (separate from bisphosphonates)
// ═══════════════════════════════════════════════
export const DENOSUMAB = [
  {
    id: "denosumab-dental", lastReviewed: "2026-03", name: "Denosumab (Prolia/Xgeva) — MRONJ + Rebound Bone Loss ⚠", mfr: "Amgen", cat: "Antiresorptive — Denosumab ⚠",
    framework: "DRUGS:\n• Prolia (denosumab 60mg SC every 6 months) — OSTEOPOROSIS\n• Xgeva (denosumab 120mg SC monthly) — CANCER (bone metastases, giant cell tumor)\n\nMECHANISM: monoclonal antibody against RANKL → inhibits osteoclast formation/function.\n\n⚠ KEY DIFFERENCE FROM BISPHOSPHONATES:\n• Shorter duration of action: effect wears off 6 months after last dose\n• Does NOT accumulate in bone matrix (unlike bisphosphonates which persist for YEARS)\n• MRONJ risk: 0.04% osteoporosis, 1-5% cancer dose\n\n⚠ REBOUND VERTEBRAL FRACTURES: stopping denosumab causes RAPID bone loss and increased fracture risk. Must transition to bisphosphonate when stopping.",
    application: "DENTAL MANAGEMENT:\n\nPROLIA (60mg q6mo — osteoporosis):\n• MRONJ risk is LOW (0.04%)\n• Dental surgery timing: schedule procedures 4-5 months AFTER last injection (trough period)\n• Drug holiday: discuss with prescribing physician — 6-month window exists naturally between doses\n• Resume Prolia on schedule after healing\n\nXGEVA (120mg monthly — cancer):\n• MRONJ risk is HIGH (1-5%)\n• Same approach as IV bisphosphonates for cancer\n• AVOID elective invasive procedures if possible\n• If surgery needed: coordinate with oncologist\n\n⚠ DO NOT recommend stopping denosumab without physician coordination — rebound vertebral fractures are serious.\n\nLocal measures for ALL denosumab patients:\n• Atraumatic extraction technique\n• Minimize dentoalveolar surgery\n• Consider teriparatide (Forteo) as MRONJ adjunctive treatment (per emerging case reports)",
    evidence: "Per AAOMS 2014: denosumab included in MRONJ risk assessment.\nMRONJ risk with Prolia is lower than oral bisphosphonates in most studies.\nRebound bone loss after stopping denosumab: rapid increase in bone remodeling markers within 3-6 months, vertebral fracture risk peaks at 7-18 months.\nPer emerging data: denosumab MRONJ may resolve faster than bisphosphonate MRONJ due to reversible mechanism.",
    notes: "Denosumab is NOT a bisphosphonate. Key differences: shorter acting, reversible, rebound risk when stopping. Time dental surgery to trough period (4-5 months after Prolia injection). NEVER recommend stopping without physician coordination.",
    refs: ["ruggiero-2014-mronj"]
  },
];

// ═══════════════════════════════════════════════
// ANTICONVULSANTS
// ═══════════════════════════════════════════════
export const ANTICONVULSANTS = [
  {
    id: "phenytoin-dental", lastReviewed: "2026-03", name: "Phenytoin (Dilantin) — Gingival Hyperplasia 50% ⚠", mfr: "Pfizer / Multiple", cat: "Anticonvulsant — Phenytoin ⚠",
    framework: "MECHANISM: blocks voltage-gated sodium channels → seizure control.\nHALF-LIFE: 7-42 hours (dose-dependent, nonlinear kinetics).\n\n⚠ GINGIVAL HYPERPLASIA:\n• Incidence: approximately 50% of patients\n• Onset: within 1-3 months of starting drug\n• Anterior teeth > posterior; interdental papillae most affected\n• More severe in: adolescents, poor oral hygiene, higher serum levels, concurrent CCBs or cyclosporine\n\nOTHER ORAL MANIFESTATIONS:\n• Coarsening of facial features\n• Megaloblastic anemia (folic acid depletion)\n• Drug-induced lupus (rare)\n• Gingival bleeding",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE — DO NOT HOLD (seizure risk)\n\nGINGIVAL HYPERPLASIA MANAGEMENT:\n1. Meticulous oral hygiene — the MOST effective modifiable factor\n2. Professional cleaning every 3 months minimum\n3. Folic acid supplementation (0.5mg/day) — may reduce hyperplasia severity\n4. Chlorhexidine 0.12% rinse as adjunct\n5. If severe: coordinate with neurologist for drug substitution\n   — Levetiracetam (Keppra), lamotrigine, lacosamide do NOT cause gingival hyperplasia\n6. Gingivectomy/gingivoplasty — RECURS in 30% within 3 months if drug continues\n\nENZYME INDUCTION:\n• Phenytoin is a potent CYP3A4/2C9 inducer\n• May reduce effectiveness of: benzodiazepines (midazolam, triazolam), corticosteroids, azole antifungals\n• Dose adjustments may be needed for procedural sedation\n\n⚠ Erythromycin, clarithromycin, fluconazole INCREASE phenytoin levels → toxicity risk\n• Use AZITHROMYCIN instead",
    evidence: "Per systematic reviews: gingival hyperplasia occurs in approximately 50% of phenytoin users. Oral hygiene is the strongest modifiable risk factor.\nFolic acid supplementation: mixed evidence but generally recommended (mechanism: phenytoin depletes folic acid needed for collagen homeostasis).\nDrug substitution resolves hyperplasia in most cases within 1-8 weeks.",
    notes: "Phenytoin = 50% gingival hyperplasia. Part of the 'big three' (with cyclosporine and nifedipine). Folic acid may help. Use azithromycin, not erythromycin/clarithromycin.",
    refs: []
  },
  {
    id: "valproic-acid-dental", lastReviewed: "2026-03", name: "Valproic Acid (Depakote) — Platelet & Bleeding Risk", mfr: "AbbVie / Multiple", cat: "Anticonvulsant — Valproic Acid ⚠",
    framework: "MECHANISM: enhances GABA activity, blocks sodium/calcium channels.\nUSES: epilepsy, bipolar disorder, migraine prophylaxis.\nHALF-LIFE: 9-16 hours.\n\n⚠ HEMATOLOGIC EFFECTS:\n• Thrombocytopenia: 5-40% of patients (dose-dependent)\n• Platelet dysfunction: inhibits secondary aggregation\n• von Willebrand-like syndrome (rare but documented)\n• Dose-dependent: more common at levels >100 μg/mL\n\nOTHER ORAL MANIFESTATIONS:\n• Xerostomia\n• Altered taste",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE — DO NOT HOLD (seizure/mood stability risk)\n\nBEFORE INVASIVE PROCEDURES:\n• Check CBC with platelet count\n• If platelets >50,000: proceed with dental surgery\n• If platelets 30,000-50,000: proceed with caution, local hemostatic measures\n• If platelets <30,000: DEFER elective surgery, coordinate with physician\n• Consider checking bleeding time or PFA-100 if platelets normal but clinical bleeding\n\nHEMOSTATIC MEASURES:\n• Sutures, gelatin sponge, oxidized cellulose\n• Tranexamic acid rinse 5%\n• Pressure with gauze\n\n⚠ Drug interactions:\n• Aspirin DISPLACES valproic acid from protein binding → increased free VPA + additive antiplatelet\n• Avoid prescribing aspirin to patients on VPA\n• Erythromycin/clarithromycin may increase VPA levels → use azithromycin",
    evidence: "Thrombocytopenia is dose-dependent and more common at serum levels >100 μg/mL. In most patients on therapeutic doses, platelet counts remain adequate for dental surgery.\nvon Willebrand-like syndrome: rare but important — consider if unexplained bleeding despite normal platelet count.",
    notes: "Check platelet count before surgery. >50K = proceed. Avoid aspirin in these patients. Use azithromycin not erythromycin.",
    refs: []
  },
  {
    id: "carbamazepine-enzyme-dental", lastReviewed: "2026-03", name: "Carbamazepine & Enzyme-Inducing Anticonvulsants — Drug Interactions", mfr: "Multiple", cat: "Anticonvulsant — Enzyme Inducer ⚠",
    framework: "ENZYME INDUCERS: carbamazepine (Tegretol), oxcarbazepine (Trileptal), phenobarbital, primidone\nNON-INDUCING (safer): levetiracetam (Keppra), lamotrigine (Lamictal), lacosamide (Vimpat), gabapentin, pregabalin, topiramate\n\nMECHANISM: carbamazepine induces CYP3A4, 2C9, 1A2 — accelerates metabolism of MANY drugs.\n\n⚠ ORAL MANIFESTATIONS:\n• Xerostomia\n• Aplastic anemia (carbamazepine — rare but serious, 1:200,000)\n• Stevens-Johnson syndrome/TEN (HLA-B*15:02 in Asian patients — screen before prescribing)\n• Erythema multiforme (oral ulcers)",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE — DO NOT HOLD (seizure risk)\n\nCRITICAL DRUG INTERACTIONS:\n• Carbamazepine + erythromycin/clarithromycin → CARBAMAZEPINE TOXICITY\n  — Use AZITHROMYCIN (no CYP3A4 inhibition)\n• Carbamazepine + fluconazole/ketoconazole → carbamazepine toxicity\n  — Use nystatin topical instead\n• Carbamazepine REDUCES effectiveness of:\n  — Midazolam, triazolam (sedation may fail)\n  — Dexamethasone, methylprednisolone\n  — Doxycycline\n  — Oral contraceptives\n\nSEDATION ADJUSTMENT:\n• Patients on carbamazepine may need HIGHER doses of midazolam/triazolam\n• Consider IV sedation route (bypasses first-pass metabolism) or use non-CYP3A4 sedatives\n\n⚠ If prescribing antibiotics: azithromycin, amoxicillin, clindamycin are ALL safe\n⚠ AVOID: erythromycin, clarithromycin, metronidazole (increases carbamazepine levels)",
    evidence: "Carbamazepine-macrolide interaction is well-documented and potentially fatal (carbamazepine toxicity: ataxia, nystagmus, cardiac conduction defects).\nAzithromycin is the safe macrolide — no significant CYP3A4 inhibition.",
    notes: "Golden rule for anticonvulsant patients: azithromycin, not erythromycin/clarithromycin. Sedation doses may need to be increased. Amoxicillin and clindamycin are safe.",
    refs: []
  },
];

// ═══════════════════════════════════════════════
// THYROID MEDICATIONS
// ═══════════════════════════════════════════════
export const THYROID_MEDS = [
  {
    id: "levothyroxine-dental", lastReviewed: "2026-03", name: "Levothyroxine (Synthroid) — Continue, Minimal Concerns", mfr: "Multiple (Synthroid, Levoxyl, Tirosint)", cat: "Thyroid — Levothyroxine",
    framework: "MECHANISM: synthetic T4 (thyroxine) replacement for hypothyroidism.\nHALF-LIFE: 6-7 days (very long).\nUSES: hypothyroidism, post-thyroidectomy, Hashimoto's thyroiditis, TSH suppression in thyroid cancer.\n\nORAL MANIFESTATIONS OF HYPOTHYROIDISM:\n• Macroglossia\n• Delayed wound healing\n• Dysgeusia\n• Increased susceptibility to oral infections\n• Delayed tooth eruption (children)",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE — DO NOT HOLD\n\n• Well-controlled hypothyroidism: NO special precautions needed\n• Epinephrine: SAFE at standard doses\n• All dental medications safe\n• No drug interactions of dental significance\n\n⚠ UNCONTROLLED/SEVERE HYPOTHYROIDISM (myxedema):\n• Increased sensitivity to CNS depressants (sedatives, opioids)\n• Reduce sedation doses by 25-50%\n• Delayed wound healing\n• Increased infection risk\n• Defer elective treatment until thyroid controlled\n\n⚠ OVER-REPLACEMENT (iatrogenic hyperthyroidism):\n• Tachycardia, arrhythmia risk with epi\n• Treat like hyperthyroidism below",
    evidence: "Levothyroxine is one of the most prescribed drugs in the US. Well-controlled patients require no modifications to dental treatment.\nMissing ONE dose has no clinical effect due to long half-life.",
    notes: "Levothyroxine is a non-issue when well-controlled. Just continue. Only concern: uncontrolled hypothyroidism (reduce sedation) or over-replacement (cardiac risk).",
    refs: []
  },
  {
    id: "antithyroid-dental", lastReviewed: "2026-03", name: "Antithyroid Drugs (Methimazole, PTU) — Thyroid Storm & Agranulocytosis ⚠", mfr: "Multiple", cat: "Thyroid — Antithyroid ⚠",
    framework: "DRUGS: methimazole (Tapazole), propylthiouracil (PTU).\nMECHANISM: inhibit thyroid hormone synthesis.\nUSES: Graves' disease, hyperthyroidism.\n\n⚠ CRITICAL SIDE EFFECTS:\n• AGRANULOCYTOSIS (0.1-0.5%) — neutropenia → oral ulcers, infections\n• Hepatotoxicity (PTU > methimazole)\n\n⚠ THYROID STORM RISK:\n• Uncontrolled hyperthyroidism + surgical stress → thyroid storm\n• Symptoms: fever >104°F, tachycardia >140, delirium, cardiovascular collapse\n• MORTALITY: 10-30% even with treatment",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE — DO NOT HOLD\n\nBEFORE INVASIVE PROCEDURES:\n• Confirm thyroid is CONTROLLED (recent TSH/free T4 within range)\n• If uncontrolled hyperthyroidism: DEFER all elective dental treatment\n\n⚠ UNCONTROLLED HYPERTHYROIDISM:\n• Epinephrine is DANGEROUS — catecholamine sensitivity is markedly increased\n• Use mepivacaine 3% plain (no vasoconstrictor)\n• Limit stress — keep appointments short, manage anxiety\n• If thyroid storm suspected: call 911 immediately, cool patient, beta-blocker if available\n\nAGRANULOCYTOSIS SCREENING:\n• If patient develops oral ulcers, fever, sore throat: check WBC/ANC immediately\n• Postpone dental procedures if ANC <1000\n• Oral ulcers may be the FIRST sign of agranulocytosis",
    evidence: "Thyroid storm during dental procedures is rare but reported. Risk is highest in uncontrolled patients undergoing stressful procedures.\nAgranulocytosis typically occurs in first 3 months of therapy. Oral ulcers may precede systemic signs.",
    notes: "Controlled hyperthyroidism = treat normally. Uncontrolled = defer, NO epi. Watch for oral ulcers as sign of agranulocytosis.",
    refs: []
  },
];

// ═══════════════════════════════════════════════
// IMMUNOSUPPRESSANTS & BIOLOGICS
// ═══════════════════════════════════════════════
export const IMMUNOSUPPRESSANTS = [
  {
    id: "cyclosporine-tacrolimus-dental", lastReviewed: "2026-03", name: "Cyclosporine & Tacrolimus — Gingival Hyperplasia + Infection Risk", mfr: "Multiple", cat: "Immunosuppressant — Transplant ⚠",
    framework: "CYCLOSPORINE (Neoral, Sandimmune): calcineurin inhibitor for solid organ transplant, autoimmune disease.\nTACROLIMUS (Prograf): calcineurin inhibitor, largely replaced cyclosporine for transplant.\n\n⚠ GINGIVAL HYPERPLASIA:\n• Cyclosporine: 25-81% incidence (second highest after phenytoin)\n• Tacrolimus: <5% (key advantage over cyclosporine)\n• TRIPLE THREAT: cyclosporine + nifedipine + phenytoin = severe hyperplasia\n\nINFECTION RISK: profoundly immunosuppressed → increased risk of oral candidiasis, viral reactivation (HSV, CMV), bacterial infections.\n\nNEPHROTOXICITY: both drugs are nephrotoxic — affects drug dosing.",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE — DO NOT HOLD (organ rejection risk)\n\n⚠ COORDINATE WITH TRANSPLANT TEAM for any surgical procedures\n\nINFECTION PREVENTION:\n• Prophylactic antibiotics for invasive procedures (transplant team protocol)\n• Check WBC/ANC before surgery\n• Monitor for oral candidiasis (prophylactic antifungals if history)\n\nGINGIVAL HYPERPLASIA (cyclosporine):\n• Same management as phenytoin/CCB hyperplasia\n• Coordinate with transplant team about switching to tacrolimus (significantly less hyperplasia)\n\nDRUG INTERACTIONS:\n• Erythromycin, clarithromycin → INCREASED cyclosporine/tacrolimus levels (nephrotoxicity)\n• Fluconazole, ketoconazole → INCREASED levels\n• Use AZITHROMYCIN for antibiotics\n• Use NYSTATIN for oral candidiasis (avoid systemic azoles)\n• NSAIDs: avoid or use minimal course (additive nephrotoxicity)\n• Acetaminophen: PREFERRED analgesic\n\n⚠ METRONIDAZOLE increases cyclosporine levels — avoid if possible",
    evidence: "Cyclosporine gingival hyperplasia is reduced by >50% when patients switch to tacrolimus.\nInfection risk in transplant patients requires close coordination with transplant team.\nDrug interactions are the primary dental concern — azithromycin and nystatin are safe choices.",
    notes: "Transplant patients: coordinate with transplant team. Azithromycin not erythromycin. Nystatin not fluconazole. Acetaminophen not NSAIDs. Cyclosporine = gingival hyperplasia; tacrolimus = much less.",
    refs: []
  },
  {
    id: "tnf-biologics-dental", lastReviewed: "2026-03", name: "TNF-α Inhibitors & Biologics — Infection Risk & Wound Healing", mfr: "Multiple", cat: "Biologic — TNF-α Inhibitor / Immunomodulator",
    framework: "TNF-α INHIBITORS: adalimumab (Humira), infliximab (Remicade), etanercept (Enbrel), certolizumab (Cimzia), golimumab (Simponi).\nIL-17 INHIBITORS: secukinumab (Cosentyx), ixekizumab (Taltz).\nIL-23 INHIBITORS: ustekinumab (Stelara), guselkumab (Tremfya).\nJAK INHIBITORS: tofacitinib (Xeljanz), baricitinib (Olumiant), upadacitinib (Rinvoq).\nRITUXIMAB (Rituxan): anti-CD20 B-cell depletion.\n\nUSES: rheumatoid arthritis, Crohn's, psoriasis, ankylosing spondylitis.\n\n⚠ INFECTION RISK: increased susceptibility to bacterial, fungal, viral, and opportunistic infections.",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE for minor dental procedures (cleanings, simple extractions)\n\nFOR SURGICAL PROCEDURES:\n• HOLD 1-2 half-lives before major surgery (consult rheumatologist)\n  — Adalimumab: hold 2-4 weeks\n  — Infliximab: hold 4-8 weeks (longest)\n  — Etanercept: hold 1-2 weeks (shortest)\n• Resume when wound healing adequate (no infection signs)\n\nINFECTION PREVENTION:\n• Prophylactic antibiotics (amoxicillin 2g) for invasive procedures — per clinical judgment\n• Monitor for delayed wound healing\n• Screen for oral candidiasis\n\n⚠ TB REACTIVATION: all patients should have been screened before starting biologic. If active TB suspected, defer dental and refer.\n\n⚠ JAK INHIBITORS: additional risk of herpes zoster reactivation — intraoral herpetic lesions possible.\n\nDrug interactions: minimal with common dental medications.",
    evidence: "Per ACR/BSR guidelines: biologics may be held perioperatively for major procedures. For dental procedures, continuing is generally recommended unless extensive surgery planned.\nInfection risk is real but manageable with prophylactic measures.",
    notes: "Minor dental work: continue biologics. Major surgery: coordinate hold with rheumatologist. Watch for delayed healing and infections.",
    refs: []
  },
  {
    id: "methotrexate-dental", lastReviewed: "2026-03", name: "Methotrexate — Oral Ulcers & Immunosuppression", mfr: "Multiple", cat: "Immunosuppressant — Methotrexate",
    framework: "MECHANISM: folate antagonist → inhibits dihydrofolate reductase → reduced DNA/RNA synthesis.\nUSES: rheumatoid arthritis (low-dose 7.5-25mg/week), psoriasis, cancer (high-dose).\nHALF-LIFE: 3-10 hours (low-dose), but active metabolites persist longer.\n\n⚠ ORAL MANIFESTATIONS:\n• Oral ulcerative stomatitis (most common oral side effect)\n• Mucositis (especially at higher doses)\n• Increased infection risk\n• Taste changes\n• Folate-deficiency related oral findings",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE for low-dose RA regimens — DO NOT HOLD\n\n• Per ACR 2015: continue methotrexate through most surgeries (better outcomes than holding)\n• Folic acid supplementation (1mg/day or leucovorin) reduces oral ulceration\n\nBEFORE INVASIVE PROCEDURES:\n• Check CBC (pancytopenia risk)\n• If WBC <3500 or ANC <1500 or platelets <50,000: defer elective surgery\n• Coordinate with rheumatologist for borderline values\n\nORAL ULCERS MANAGEMENT:\n• Reduce dose (coordinate with prescribing physician)\n• Increase folic acid/leucovorin\n• Topical: magic mouthwash, benzocaine, or dexamethasone rinse\n\n⚠ Drug interactions:\n• NSAIDs reduce renal clearance of MTX → toxicity risk\n  — Low-dose MTX + short-course dental NSAIDs: generally OK with monitoring\n  — High-dose MTX: AVOID NSAIDs completely\n• Trimethoprim-sulfamethoxazole: synergistic folate antagonism → pancytopenia",
    evidence: "Per ACR 2015: continuing methotrexate through surgery reduces RA flare without increasing infection rate.\nOral ulceration is the most common reason for dose reduction.\nFolic acid supplementation reduces oral and GI side effects by 79%.",
    notes: "Continue MTX. Check CBC. Folic acid reduces oral ulcers. Short-course NSAIDs are OK with low-dose MTX but avoid with high-dose.",
    refs: []
  },
];

// ═══════════════════════════════════════════════
// CHEMOTHERAPY & RADIATION
// ═══════════════════════════════════════════════
export const CHEMO_RADIATION = [
  {
    id: "chemotherapy-dental", lastReviewed: "2026-03", name: "Chemotherapy — ANC/Platelet Thresholds for Dental Treatment", mfr: "N/A — Protocol Reference", cat: "Chemotherapy — Dental Thresholds ⚠",
    framework: "MYELOSUPPRESSION TIMING: nadir typically 7-14 days after chemo cycle, recovery by day 21-28.\n\n⚠ TREATMENT THRESHOLDS:\n• ANC >2000: PROCEED with dental treatment (routine and surgical)\n• ANC 1000-2000: PROCEED with prophylactic antibiotics\n• ANC 500-1000: URGENT treatment only, prophylactic antibiotics, consult oncologist\n• ANC <500: EMERGENCY treatment only, hospital setting\n\n• Platelets >75,000: PROCEED with surgery\n• Platelets 40,000-75,000: PROCEED with local hemostatic measures, avoid regional blocks\n• Platelets 20,000-40,000: URGENT only, platelet transfusion may be needed\n• Platelets <20,000: EMERGENCY only, transfuse\n\n⚠ ORAL MUCOSITIS: occurs in 40% of standard chemo, 80% of high-dose/head-neck radiation.",
    application: "DENTAL PROTOCOL:\n\nBEFORE CHEMOTHERAPY STARTS:\n• Complete dental evaluation and treatment BEFORE first cycle\n• Extract hopeless teeth ≥2 weeks before chemo\n• Treat active infections\n• Prophylactic fluoride trays\n• Oral hygiene instruction — critical\n\nDURING CHEMOTHERAPY:\n• Schedule dental treatment during recovery phase (day 17-21+ after cycle)\n• Check CBC day of procedure\n• Apply thresholds above\n• Avoid elective treatment during nadir period\n\nMUCOSITIS MANAGEMENT:\n• Bland rinses (salt/soda)\n• Magic mouthwash (lidocaine/diphenhydramine/antacid)\n• Cryotherapy during 5-FU infusion (ice chips)\n• Palifermin (Kepivance) for stem cell transplant patients\n• Low-level laser therapy (LLLT/PBM) — growing evidence",
    evidence: "Per NCI/NIDCR: dental clearance before chemotherapy reduces oral complications by up to 30%.\nOral mucositis grading: WHO Grade 0-4. Grade 3-4 may require dose reduction or treatment delay.\nLow-level laser therapy: per Cochrane 2017, reduces incidence and severity of mucositis.",
    notes: "Key: dental clearance BEFORE chemo starts. During chemo: check CBC, treat during recovery phase, use ANC/platelet thresholds.",
    refs: []
  },
  {
    id: "radiation-orn-dental", lastReviewed: "2026-03", name: "Head & Neck Radiation — Osteoradionecrosis (ORN) Risk ⚠", mfr: "N/A — Protocol Reference", cat: "Radiation — ORN Protocol ⚠",
    framework: "⚠ OSTEORADIONECROSIS (ORN): radiation-induced bone death, typically mandible.\n\nRISK FACTORS:\n• Radiation dose >50 Gy to mandible (threshold for significant ORN risk)\n• Tooth extraction after radiation (most common trigger)\n• Mandible > maxilla (less vascular supply)\n• Onset: months to YEARS after radiation (lifetime risk)\n\nOTHER RADIATION EFFECTS:\n• Radiation caries (rampant, cervical)\n• Xerostomia (salivary gland damage, often permanent >40 Gy)\n• Trismus (fibrosis of masticatory muscles)\n• Mucositis (acute)\n• Loss of taste (often recovers partially)",
    application: "DENTAL PROTOCOL:\n\nBEFORE RADIATION:\n• Extract all hopeless and questionable teeth ≥2-3 WEEKS before radiation\n• Restore all salvageable teeth\n• Custom fluoride trays for daily use (lifetime)\n• Oral hygiene instruction — intensive\n\nAFTER RADIATION (lifetime protocols):\n• Daily fluoride tray application — INDEFINITE\n• 3-month recall appointments\n• Saliva substitutes, sialagogues (pilocarpine 5mg TID if tolerated)\n\n⚠ EXTRACTIONS AFTER RADIATION (>50 Gy):\n• AVOID if at all possible (endodontic treatment preferred)\n• If extraction necessary:\n  1. Atraumatic technique mandatory\n  2. Prophylactic antibiotics (amoxicillin/clindamycin, extended course)\n  3. Primary closure when possible\n  4. Hyperbaric oxygen (HBO): CONTROVERSIAL\n     — Marx protocol: 20 dives pre-extraction, 10 post\n     — Per HOPON trial (2018): HBO did NOT reduce ORN after extraction\n     — Many institutions have abandoned routine HBO\n  5. Pentoxifylline + tocopherol (PENTO protocol): emerging evidence for ORN prevention/treatment\n\n⚠ IMPLANTS in irradiated bone: higher failure rate (3-5x). HBO may improve outcomes. Consider zygomatic implants to avoid irradiated mandible.",
    evidence: "Per HOPON trial 2018: HBO did not significantly reduce ORN after dental extraction in irradiated patients — major paradigm shift.\nPer Marx 1983: original HBO protocol (still used at some institutions).\nPentoxifylline + tocopherol (PENTOCLO protocol): reported 89% healing rate in established ORN.",
    notes: "ORN is a LIFETIME risk after head-neck radiation >50 Gy. Prevention (pre-radiation extractions, fluoride, oral hygiene) is far better than treatment. HBO is controversial (HOPON trial negative). Pentoxifylline + vitamin E is emerging.",
    refs: []
  },
  {
    id: "antiangiogenic-mronj", lastReviewed: "2026-03", name: "Antiangiogenic Agents — MRONJ Risk (Bevacizumab, Sunitinib)", mfr: "Multiple", cat: "Chemotherapy — Antiangiogenic MRONJ ⚠",
    framework: "DRUGS:\n• Bevacizumab (Avastin) — anti-VEGF monoclonal antibody\n• Sunitinib (Sutent) — tyrosine kinase inhibitor\n• Sorafenib (Nexavar), cabozantinib, everolimus, temsirolimus\n\nMECHANISM: inhibit angiogenesis (new blood vessel formation) → tumor starvation.\n\n⚠ MRONJ RISK:\n• Bevacizumab: 0.2-0.9% overall, higher with concurrent bisphosphonates\n• Sunitinib: reported cases, risk poorly quantified\n• Mechanism: impaired mucosal healing due to VEGF inhibition",
    application: "DENTAL MANAGEMENT:\n\n• Included in AAOMS 2014 MRONJ definition as causative agents\n• Same precautions as IV bisphosphonates for cancer patients\n• Dental clearance BEFORE starting antiangiogenic therapy\n• Avoid invasive procedures during active treatment if possible\n• If extraction necessary: atraumatic technique, primary closure, prophylactic antibiotics\n\n⚠ COMBINATION THERAPY: antiangiogenic + bisphosphonate = HIGHEST MRONJ risk\n\nDRUG HOLIDAY:\n• Bevacizumab half-life: ~20 days\n• Consider timing procedures to trough period (coordinate with oncologist)\n• Sunitinib: 4 weeks on, 2 weeks off cycling — schedule dental during off period",
    evidence: "Per AAOMS 2014: antiangiogenic agents are recognized MRONJ risk factors.\nRisk is lower than bisphosphonates alone but additive when combined.\nBevacizumab MRONJ may heal faster than bisphosphonate MRONJ after drug cessation due to shorter half-life.",
    notes: "Antiangiogenic agents cause MRONJ through impaired mucosal healing. Risk is additive with bisphosphonates. Time procedures to drug troughs when possible.",
    refs: ["ruggiero-2014-mronj"]
  },
];

// ═══════════════════════════════════════════════
// HORMONAL MEDICATIONS
// ═══════════════════════════════════════════════
export const HORMONAL_MEDS = [
  {
    id: "ocp-hrt-dental", lastReviewed: "2026-03", name: "Oral Contraceptives & HRT — Continue, Antibiotic Myth", mfr: "Multiple", cat: "Hormonal — Contraceptive/HRT",
    framework: "OCP: combined estrogen-progestin, progestin-only pills, patches, rings.\nHRT: conjugated estrogens (Premarin), estradiol, estrogen-progestin combinations.\n\nORAL MANIFESTATIONS:\n• Gingival inflammation (estrogen increases vascular permeability)\n• Increased bleeding on probing\n• Oral melanotic pigmentation (rare)\n• Dry socket risk: OCPs increase risk of dry socket after extraction (estrogen increases fibrinolysis)",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE — DO NOT HOLD\n\n⚠ ANTIBIOTIC-OCP INTERACTION MYTH:\n• Traditional teaching: antibiotics reduce OCP effectiveness\n• EVIDENCE: NO documented reduction in OCP efficacy with:\n  — Amoxicillin, azithromycin, clindamycin, metronidazole, doxycycline\n• ONLY confirmed interaction: RIFAMPIN (reduces OCP levels by 40-60%)\n  — Rifampin is NOT used in dental prescribing\n• STILL: inform patients of theoretical risk and recommend backup contraception per informed consent\n\nDRY SOCKET PREVENTION:\n• OCP users have 2-3x higher dry socket risk\n• Schedule extractions during days 23-28 of OCP cycle (lowest estrogen)\n• Atraumatic technique, avoid excessive irrigation\n• Consider chlorhexidine rinse pre-extraction\n\n⚠ SUGAMMADEX (Bridion) interaction: used in GA to reverse neuromuscular blockade — binds progesterone. Equivalent to missing an OCP dose. Recommend backup contraception for 7 days if sugammadex given during dental GA.",
    evidence: "Per Cochrane 2012 and systematic reviews: no evidence that common antibiotics reduce OCP efficacy.\nRifampin is the only antibiotic with documented OCP interaction.\nDry socket: estrogen enhances fibrinolytic activity in alveolar bone → increased clot lysis.",
    notes: "Continue OCPs/HRT. Common antibiotics do NOT reduce OCP efficacy (only rifampin does). OCP users have higher dry socket risk — schedule extractions late in cycle.",
    refs: []
  },
];

// ═══════════════════════════════════════════════
// GI MEDICATIONS
// ═══════════════════════════════════════════════
export const GI_MEDS = [
  {
    id: "ppi-dental", lastReviewed: "2026-03", name: "Proton Pump Inhibitors (PPIs) — CYP2C19 & Clopidogrel Interaction", mfr: "Multiple", cat: "GI — PPI",
    framework: "DRUGS: omeprazole (Prilosec), esomeprazole (Nexium), lansoprazole (Prevacid), pantoprazole (Protonix), rabeprazole (Aciphex).\nMECHANISM: irreversibly inhibit H+/K+-ATPase (proton pump) in parietal cells.\n\n⚠ DENTAL RELEVANCE:\n• CYP2C19 interaction with CLOPIDOGREL (Plavix)\n  — Omeprazole/esomeprazole INHIBIT CYP2C19 → reduce clopidogrel activation → reduced antiplatelet effect\n  — FDA warning: avoid omeprazole + clopidogrel\n  — PANTOPRAZOLE: minimal CYP2C19 inhibition → PREFERRED with clopidogrel\n\nORAL MANIFESTATIONS (long-term PPI use):\n• Hypomagnesemia → oral paresthesias\n• Iron/B12/calcium malabsorption → glossitis, burning mouth\n• Increased C. difficile risk with concurrent antibiotics",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE — DO NOT HOLD\n\n• If patient is on CLOPIDOGREL + PPI:\n  — Note which PPI — if omeprazole/esomeprazole, note in chart\n  — Do NOT change PPI yourself — this is a physician decision\n  — Pantoprazole is the preferred PPI with clopidogrel\n\n• If prescribing antibiotics to patient on PPI:\n  — Standard courses are fine\n  — Be aware of slightly increased C. difficile risk\n  — Amoxicillin, azithromycin, clindamycin all OK\n\nORAL MANIFESTATIONS:\n• Burning mouth/glossitis in long-term users: check B12, iron, magnesium\n• Xerostomia (uncommon but reported)",
    evidence: "Per FDA 2010 warning: omeprazole reduces clopidogrel active metabolite by 45%.\nPer COGENT trial 2010: omeprazole + clopidogrel reduced GI events without increased cardiovascular events in lower-risk patients — debate continues.\nPantoprazole has weakest CYP2C19 inhibition among PPIs.",
    notes: "PPIs: continue. Key dental relevance: omeprazole reduces clopidogrel effectiveness. Pantoprazole is preferred with clopidogrel. Don't change the PPI — just note it.",
    refs: []
  },
  {
    id: "h2-blocker-dental", lastReviewed: "2026-03", name: "H2 Blockers — Avoid Cimetidine (CYP Inhibitor)", mfr: "Multiple", cat: "GI — H2 Blocker",
    framework: "DRUGS: famotidine (Pepcid), cimetidine (Tagamet), ranitidine (Zantac — withdrawn 2020, NDMA contamination).\nMECHANISM: block histamine H2 receptors on parietal cells → reduced acid secretion.\n\n⚠ CIMETIDINE is a CYP inhibitor (1A2, 2C9, 2D6, 3A4):\n• Increases levels of: lidocaine, benzodiazepines, warfarin, carbamazepine, phenytoin, theophylline\n• FAMOTIDINE has NO significant CYP interactions → PREFERRED\n\nORAL MANIFESTATIONS:\n• Xerostomia (uncommon)\n• Dysgeusia (cimetidine)",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE — DO NOT HOLD\n\n• Famotidine: no dental drug interactions — safe\n• CIMETIDINE interactions with dental drugs:\n  — Increased lidocaine levels → potential toxicity with large doses\n  — Increased midazolam/triazolam levels → prolonged sedation\n  — Increased warfarin effect → more bleeding\n  — REDUCE sedation doses by 25-50% if patient on cimetidine\n\n⚠ Cimetidine is rarely prescribed now (famotidine preferred), but still available OTC\n⚠ Ranitidine (Zantac) was withdrawn from market in 2020 — patients may not have updated their medication list",
    evidence: "Cimetidine CYP inhibition is well-documented. Famotidine lacks this interaction, making it the preferred H2 blocker.\nLidocaine toxicity from cimetidine interaction is theoretical at dental doses but documented at higher infusion rates.",
    notes: "H2 blockers: continue. Famotidine = no issues. Cimetidine = reduce sedation doses (CYP inhibitor). Ask if patient still lists ranitidine (withdrawn 2020).",
    refs: []
  },
];

// ═══════════════════════════════════════════════
// GABAPENTINOIDS & NEUROPATHIC PAIN
// ═══════════════════════════════════════════════
export const GABAPENTINOIDS = [
  {
    id: "gabapentin-pregabalin-dental", lastReviewed: "2026-03", name: "Gabapentin (Neurontin) & Pregabalin (Lyrica) — Sedation Potentiation", mfr: "Multiple", cat: "Anticonvulsant — Gabapentinoid",
    framework: "DRUGS: gabapentin (Neurontin, 300-3600mg/day), pregabalin (Lyrica, 75-600mg/day).\nMECHANISM: bind alpha-2-delta subunit of voltage-gated calcium channels → reduce excitatory neurotransmitter release.\nUSES: neuropathic pain, fibromyalgia, epilepsy (adjunct), anxiety (off-label), post-herpetic neuralgia.\n\n⚠ DENTAL RELEVANCE:\n• Increasingly used for chronic orofacial pain, trigeminal neuralgia, TMD\n• Sedation and dizziness are common (especially pregabalin)\n• Respiratory depression when combined with opioids (FDA Black Box warning 2019)",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE — DO NOT HOLD\n\n⚠ FDA BLACK BOX WARNING (2019): gabapentinoids + opioids = increased respiratory depression risk\n• Avoid prescribing opioids to patients on gabapentin/pregabalin if possible\n• Use NSAIDs + acetaminophen instead\n• If opioid needed: lowest effective dose, shortest duration, warn patient\n\nSEDATION ADJUSTMENT:\n• Reduce benzodiazepine/sedative doses by 25-50%\n• Additive CNS depression with N2O, opioids, benzos\n• Monitor respiratory status during sedation\n\nOROFACIAL PAIN:\n• Gabapentin/pregabalin are first-line for trigeminal neuralgia refractory to carbamazepine\n• If patient has orofacial pain diagnosis: do NOT assume dental etiology without thorough workup\n• Coordinate with orofacial pain specialist",
    evidence: "Per FDA 2019 warning: serious breathing difficulties with gabapentinoids + CNS depressants.\nPer multiple RCTs: gabapentin/pregabalin are effective for neuropathic pain but NOT for acute post-surgical dental pain.",
    notes: "FDA warning: gabapentinoids + opioids = respiratory depression. Prefer NSAIDs/APAP. Reduce sedation doses. These drugs treat neuropathic pain, not acute surgical pain.",
    refs: []
  },
];

// ═══════════════════════════════════════════════
// ANTIHISTAMINES
// ═══════════════════════════════════════════════
export const ANTIHISTAMINES = [
  {
    id: "antihistamines-dental", lastReviewed: "2026-03", name: "Antihistamines — Xerostomia & Sedation", mfr: "Multiple", cat: "Antihistamine — Dental Considerations",
    framework: "1st GENERATION (sedating, anticholinergic):\n• Diphenhydramine (Benadryl), hydroxyzine (Atarax/Vistaril), chlorpheniramine, promethazine (Phenergan)\n\n2nd GENERATION (non-sedating):\n• Loratadine (Claritin), cetirizine (Zyrtec), fexofenadine (Allegra), levocetirizine (Xyzal)\n\n⚠ ORAL MANIFESTATIONS:\n• Xerostomia: 1st gen >> 2nd gen (anticholinergic effect)\n• Dysgeusia (rare)\n• Increased caries risk from chronic xerostomia",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE — NO need to hold\n\n1st GENERATION CONCERNS:\n• Sedation potentiation: additive with dental sedatives, opioids, N2O\n• Reduce sedation doses by 25% if patient takes diphenhydramine/hydroxyzine regularly\n• Anticholinergic burden adds to xerostomia from other medications\n• ⚠ Beers criteria: AVOID 1st gen antihistamines in elderly (confusion, falls, urinary retention)\n\n2nd GENERATION: minimal dental concerns\n\nHYDROXYZINE IN DENTAL SEDATION:\n• Commonly used as pre-sedation anxiolytic (25-50mg PO)\n• NOT a benzodiazepine — H1 antihistamine with anxiolytic properties\n• Advantage: no respiratory depression as monotherapy\n• ⚠ QTc prolongation at higher doses (>100mg)\n\nXEROSTOMIA MANAGEMENT:\n• Identify total anticholinergic burden (sum of all medications)\n• Saliva substitutes, sialagogues, frequent water\n• High-risk caries protocol: prescription fluoride, more frequent recall",
    evidence: "Xerostomia is the most significant dental impact of chronic antihistamine use. First-generation agents contribute significantly to anticholinergic burden, especially in polypharmacy elderly patients.",
    notes: "1st gen antihistamines: additive sedation, xerostomia, avoid in elderly. 2nd gen: minimal concerns. Hydroxyzine is useful for dental anxiolysis without respiratory depression.",
    refs: []
  },
];

// ═══════════════════════════════════════════════
// MUSCLE RELAXANTS
// ═══════════════════════════════════════════════
export const MUSCLE_RELAXANTS = [
  {
    id: "muscle-relaxant-dental", lastReviewed: "2026-03", name: "Muscle Relaxants — Sedation Potentiation ⚠", mfr: "Multiple", cat: "Muscle Relaxant — Sedation Risk ⚠",
    framework: "DRUGS:\n• Cyclobenzaprine (Flexeril) — structurally related to TCAs\n• Methocarbamol (Robaxin)\n• Tizanidine (Zanaflex) — alpha-2 agonist\n• Baclofen (Lioresal) — GABA-B agonist\n• Metaxalone (Skelaxin) — less sedating\n• Carisoprodol (Soma) — metabolized to meprobamate (Schedule IV)\n\nMECHANISM: central CNS depression (most), reduced muscle spasticity.\n\n⚠ KEY CONCERN: additive CNS/respiratory depression with dental sedatives and opioids.",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE — DO NOT HOLD (may worsen pain/spasm)\n\nSEDATION ADJUSTMENT:\n• ALL muscle relaxants potentiate CNS depression with:\n  — Benzodiazepines (midazolam, triazolam)\n  — Opioids (all)\n  — Nitrous oxide\n• Reduce sedation doses by 25-50%\n• Monitor respiratory status closely\n\nSPECIFIC CONCERNS:\n• Cyclobenzaprine: TCA-like structure → LIMIT EPINEPHRINE to 2 carpules (same as TCA protocol)\n  — Also: increased risk of serotonin syndrome with tramadol/meperidine\n• Tizanidine: hypotension risk with dental sedation\n• Carisoprodol: abuse potential, additive with opioids → respiratory depression\n• Baclofen: do NOT stop abruptly (withdrawal seizures, similar to benzos)\n\nTMD PATIENTS: many TMD patients are on muscle relaxants — always ask.",
    evidence: "CNS depression from muscle relaxants is additive, not synergistic, with dental sedatives. However, the clinical impact is significant — respiratory depression is the primary concern.\nCyclobenzaprine-epinephrine interaction is based on its TCA structural similarity.",
    notes: "Reduce sedation doses by 25-50%. Cyclobenzaprine = treat like a TCA (limit epi to 2 carpules). Don't stop baclofen abruptly. Ask TMD patients about these drugs.",
    refs: []
  },
];

// ═══════════════════════════════════════════════
// CHRONIC OPIOIDS & MAT
// ═══════════════════════════════════════════════
export const OPIOID_MAT = [
  {
    id: "methadone-dental", lastReviewed: "2026-03", name: "Methadone — QTc Prolongation & Pain Management", mfr: "Multiple", cat: "Opioid/MAT — Methadone ⚠",
    framework: "MECHANISM: full mu-opioid agonist + NMDA receptor antagonist.\nUSES: opioid use disorder maintenance (MAT), chronic pain.\nHALF-LIFE: 8-59 hours (highly variable, accumulates).\n\n⚠ QTc PROLONGATION:\n• Methadone prolongs QT interval in dose-dependent manner\n• Risk of Torsades de Pointes (polymorphic ventricular tachycardia)\n• Higher risk at doses >100mg/day\n\n⚠ PAIN MANAGEMENT CHALLENGE:\n• Chronic opioid tolerance — standard dental opioid doses may be INEFFECTIVE\n• Methadone provides baseline analgesia but NOT adequate for acute surgical pain",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE METHADONE — DO NOT HOLD (precipitates withdrawal)\n\nPAIN MANAGEMENT STRATEGY:\n• Maximize NON-OPIOID analgesia: ibuprofen 600mg + acetaminophen 1000mg\n• Long-acting local anesthesia (bupivacaine 0.5% with epi)\n• If opioid needed for severe pain:\n  — SHORT-ACTING opioid (hydrocodone, oxycodone) at HIGHER than standard doses\n  — Coordinate with MAT prescriber\n  — Prescribe 3-5 day supply maximum\n  — No tramadol (serotonin risk, weak efficacy in tolerant patients)\n\n⚠ QTc CONCERNS:\n• Avoid drugs that further prolong QT:\n  — Erythromycin, clarithromycin → use azithromycin\n  — Ondansetron (Zofran) at high doses\n  — Diphenhydramine IV\n• ECG monitoring if sedation planned\n\n⚠ SEDATION: increased sensitivity to respiratory depression despite opioid tolerance — benzodiazepine doses should be REDUCED, not increased.",
    evidence: "Methadone QTc prolongation is well-documented. ECG monitoring recommended at doses >100mg/day.\nPain management in opioid-tolerant patients requires multimodal approach — opioid monotherapy is often inadequate.",
    notes: "Continue methadone. Maximize NSAIDs/APAP. If opioid needed: short-acting, higher dose, coordinate with MAT provider. Avoid QT-prolonging drugs. Azithromycin not erythromycin.",
    refs: []
  },
  {
    id: "buprenorphine-dental", lastReviewed: "2026-03", name: "Buprenorphine/Suboxone — DO NOT Precipitate Withdrawal ⚠", mfr: "Multiple (Suboxone, Subutex, Sublocade)", cat: "Opioid/MAT — Buprenorphine ⚠",
    framework: "FORMULATIONS:\n• Buprenorphine/naloxone (Suboxone) — sublingual film/tablet, most common\n• Buprenorphine alone (Subutex) — sublingual, for pregnancy\n• Buprenorphine injection (Sublocade) — monthly depot\n• Buprenorphine patch (Butrans) — for chronic pain (lower dose)\n\nMECHANISM: PARTIAL mu-opioid agonist with HIGH receptor binding affinity.\n\n⚠ CRITICAL PHARMACOLOGY:\n• Partial agonist = CEILING EFFECT on respiratory depression (safer than full agonists)\n• HIGH binding affinity = DISPLACES other opioids from receptor\n• Naloxone component: prevents IV abuse (not absorbed sublingually)",
    application: "DENTAL MANAGEMENT:\n\n⚠ CONTINUE BUPRENORPHINE — DO NOT HOLD, DO NOT REDUCE\n\n⚠ DO NOT PRECIPITATE WITHDRAWAL:\n• Do NOT administer naloxone (Narcan) unless life-threatening respiratory depression\n  — Naloxone will precipitate severe withdrawal in buprenorphine patients\n  — Higher doses of naloxone needed to overcome buprenorphine's high receptor affinity\n\nPAIN MANAGEMENT STRATEGY:\n• Maximize NON-OPIOID analgesia (ibuprofen 600mg + acetaminophen 1000mg)\n• Long-acting local anesthesia (bupivacaine)\n• Buprenorphine itself provides some analgesia (may split dose to TID for pain)\n\n• If additional opioid needed for SEVERE pain:\n  — SHORT-ACTING full agonist (hydrocodone, oxycodone) AT HIGHER DOSES\n  — Buprenorphine's high receptor affinity means full agonists must compete for binding\n  — Coordinate with MAT prescriber\n  — Some protocols: divide buprenorphine to TID/QID dosing for better analgesic coverage\n  — Do NOT prescribe tramadol (weak, ineffective, serotonin risk)\n\n⚠ OLD PRACTICE (now outdated): stopping buprenorphine before surgery. Current evidence: CONTINUE through procedure. Stopping increases relapse risk dramatically.",
    evidence: "Per ASAM 2020 and multiple consensus guidelines: continue buprenorphine perioperatively.\nStopping buprenorphine for surgery increases relapse risk and does NOT improve pain management.\nMultimodal non-opioid analgesia is effective for most dental procedures.",
    notes: "CONTINUE buprenorphine — never stop for dental procedures. Maximize NSAIDs/APAP. If opioid needed: higher-dose short-acting, coordinate with MAT provider. NEVER give naloxone casually.",
    refs: []
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
  {
    id: "oral-manifestations-table", lastReviewed: "2026-03", name: "Drug-Induced Oral Manifestations — Comprehensive Reference", mfr: "N/A — Reference", cat: "Quick Reference — Oral Manifestations",
    framework: "GINGIVAL HYPERPLASIA:\n• Phenytoin (Dilantin): ~50%\n• Cyclosporine (Neoral): 25-81%\n• Nifedipine (Procardia): 6-83%\n• Amlodipine (Norvasc): 1.7-3.3%\n• Diltiazem (Cardizem): 5-21%\n\nXEROSTOMIA (>500 medications cause dry mouth):\n• Anticholinergics: TCAs, antihistamines, scopolamine, oxybutynin\n• Antihypertensives: diuretics, clonidine, beta-blockers\n• Psychiatric: SSRIs, SNRIs, antipsychotics, benzodiazepines\n• Opioids (all)\n• Anticonvulsants, muscle relaxants\n\nLICHENOID DRUG REACTIONS:\n• NSAIDs, ACE inhibitors, thiazides, beta-blockers\n• Gold salts, penicillamine, antimalarials\n• Oral hypoglycemics (sulfonylureas)\n\nORAL ULCERATION/MUCOSITIS:\n• Methotrexate, chemotherapy agents\n• Nicorandil (aphthous-like ulcers)\n• Alendronate (direct mucosal injury if dissolved in mouth)\n• Antithyroid drugs (agranulocytosis → ulcers)",
    application: "DYSGEUSIA (altered taste):\n• ACE inhibitors (especially captopril)\n• Metronidazole (metallic taste)\n• Clarithromycin (metallic/bitter)\n• Lithium (metallic)\n• Metformin (metallic)\n• Chemotherapy agents\n\nOSTEONECROSIS (MRONJ):\n• Bisphosphonates (oral and IV)\n• Denosumab (Prolia, Xgeva)\n• Antiangiogenic agents (bevacizumab, sunitinib)\n\nBRUXISM:\n• SSRIs (fluoxetine, sertraline most common)\n• SNRIs (venlafaxine)\n• Amphetamines/stimulants\n• Recreational drugs (MDMA, cocaine)\n\nANGIOEDEMA:\n• ACE inhibitors (0.1-0.7%)\n• ARBs (rare, <0.1%)\n• NSAIDs (cross-reactivity with aspirin allergy)\n\nORAL CANDIDIASIS:\n• Inhaled corticosteroids\n• Broad-spectrum antibiotics\n• Immunosuppressants\n• Xerostomia-causing drugs (secondary)",
    evidence: "Drug-induced oral manifestations are among the most common reasons patients present to dental providers. Identification requires a complete medication history and awareness of associations.",
    notes: "This reference card covers the major drug-oral manifestation associations. When a patient presents with unexplained oral findings, always review the medication list for potential drug causes.",
    refs: []
  },
  {
    id: "emergency-medications-dental", lastReviewed: "2026-03", name: "Emergency Medications Checklist — Dental Office", mfr: "N/A — Reference", cat: "Quick Reference — Emergency Medications",
    framework: "REQUIRED EMERGENCY MEDICATIONS (ADA recommended):\n\n1. EPINEPHRINE 1:1000 (1mg/mL) — auto-injectors or ampules\n   • Anaphylaxis: 0.3-0.5mg IM (adult), 0.01mg/kg IM (peds, max 0.3mg)\n   • Repeat every 5-15 minutes as needed\n   • THIS IS THE MOST IMPORTANT DRUG IN THE KIT\n\n2. NITROGLYCERIN 0.4mg sublingual tablets or spray\n   • Angina/acute coronary syndrome\n   • 1 tablet/spray SL, repeat every 5 min × 3 doses\n   • ⚠ Confirm NO PDE-5 inhibitor use in past 24-48h (sildenafil, tadalafil)\n\n3. ALBUTEROL (salbutamol) inhaler with spacer\n   • Bronchospasm/asthma\n   • 4-8 puffs via spacer, repeat every 20 min\n\n4. ASPIRIN 325mg (chewable)\n   • Suspected MI: have patient CHEW 325mg immediately\n   • ⚠ Confirm no aspirin allergy\n\n5. DIPHENHYDRAMINE 50mg (injectable or oral)\n   • Mild-moderate allergic reactions\n   • NOT for anaphylaxis (use epinephrine first)\n\n6. ORAL GLUCOSE / GLUCAGON\n   • Hypoglycemia: 15-20g oral glucose if conscious\n   • Glucagon 1mg IM if unconscious (or nasal glucagon 3mg)",
    application: "ADDITIONAL RECOMMENDED MEDICATIONS:\n\n7. OXYGEN with delivery devices (nasal cannula, face mask, BVM)\n   • Required for essentially all emergencies\n\n8. MIDAZOLAM (if performing sedation)\n   • Seizure: 5mg IM or intranasal\n\n9. FLUMAZENIL 0.2mg (if performing benzodiazepine sedation)\n   • Benzodiazepine reversal\n   • ⚠ Risk of seizures in chronic benzo users\n\n10. NALOXONE 0.4mg (Narcan)\n    • Opioid reversal\n    • ⚠ Use cautiously in buprenorphine/methadone patients (precipitates withdrawal)\n    • Nasal: 4mg intranasal\n\n11. ATROPINE 0.5mg (if performing sedation)\n    • Symptomatic bradycardia\n\n12. AMMONIA INHALANT\n    • Vasovagal syncope (most common dental emergency)\n\nCHECK EXPIRATION DATES MONTHLY. Replace before expiration.",
    evidence: "Per ADA: every dental office should have emergency medications and equipment appropriate to their scope of practice.\nVasovagal syncope accounts for >50% of all dental emergencies.\nAnaphylaxis: epinephrine is the ONLY first-line treatment — delay increases mortality.",
    notes: "Minimum kit: epinephrine, nitroglycerin, albuterol, aspirin, diphenhydramine, glucose/glucagon, oxygen. Offices performing sedation need additional drugs. DRILL quarterly.",
    refs: []
  },
  {
    id: "special-populations-dental", lastReviewed: "2026-03", name: "Special Populations — Pediatric, Geriatric, Pregnant", mfr: "N/A — Reference", cat: "Quick Reference — Special Populations",
    framework: "PEDIATRIC PHARMACOLOGY:\n• Weight-based dosing for ALL medications\n• Amoxicillin: 25-50mg/kg/day divided TID (max 500mg/dose)\n• Ibuprofen: 5-10mg/kg every 6-8h (>6 months old)\n• Acetaminophen: 10-15mg/kg every 4-6h\n• NO aspirin <18 years (Reye syndrome)\n• NO tetracycline/doxycycline <8 years (tooth discoloration)\n• Local anesthetic max: lidocaine 4.4mg/kg, articaine 7mg/kg\n• Codeine: CONTRAINDICATED <12 years (FDA Black Box — ultra-rapid metabolizers → respiratory depression/death)\n• Tramadol: CONTRAINDICATED <12 years\n\nGERIATRIC PHARMACOLOGY:\n• Reduced hepatic/renal clearance → start LOW, titrate SLOW\n• Polypharmacy: average 65+ patient takes 5-9 medications\n• Increased sensitivity to CNS depressants (sedatives, opioids)\n• Anticholinergic burden → falls, confusion, xerostomia\n• BEERS criteria drugs to avoid: long-acting benzos, first-gen antihistamines, muscle relaxants",
    application: "PREGNANCY PHARMACOLOGY:\n• FDA Category system replaced by narrative labeling (2015)\n\nSAFE IN PREGNANCY (with evidence):\n• Lidocaine with epinephrine — SAFE (Category B equivalent)\n• Acetaminophen — SAFE (preferred analgesic)\n• Amoxicillin — SAFE\n• Penicillin — SAFE\n• Cephalexin — SAFE\n• Azithromycin — SAFE\n• Clindamycin — SAFE\n\nAVOID IN PREGNANCY:\n• NSAIDs: avoid after 20 weeks (premature ductus closure), limited use OK in 2nd trimester\n• Tetracycline/doxycycline: tooth discoloration, bone growth inhibition\n• Metronidazole: traditionally avoided 1st trimester (limited evidence of harm)\n• Codeine/opioids: neonatal withdrawal risk, avoid if possible\n• Benzodiazepines: avoid 1st trimester (cleft risk debated), minimal use OK later\n• Nitrous oxide: controversial — avoid 1st trimester, ok 2nd-3rd with scavenging\n\nLACTATION:\n• Most dental drugs are compatible with breastfeeding\n• Acetaminophen, ibuprofen, amoxicillin, lidocaine: all SAFE\n• Pump and dump NOT necessary for routine dental procedures",
    evidence: "Per ACOG: dental treatment is safe and recommended during pregnancy. Second trimester is optimal but emergencies treated any trimester.\nPer AAP: most common dental medications are compatible with breastfeeding.\nPer FDA 2016 codeine warning: contraindicated in children <12 years.",
    notes: "Pediatric: weight-based dosing, no codeine <12, no tetracycline <8. Geriatric: start low, go slow, check polypharmacy. Pregnant: acetaminophen + amoxicillin are workhorses. Treat dental emergencies in ANY trimester.",
    refs: []
  },
];

export const ALL_PHARM_PRODUCTS = [
  ...ANTICOAG,
  ...ANTIHYPERTENSIVES,
  ...DIABETES_MEDS,
  ...MRONJ_MEDS,
  ...DENOSUMAB,
  ...CORTICOSTEROIDS,
  ...PSYCH_MEDS,
  ...ANTICONVULSANTS,
  ...GABAPENTINOIDS,
  ...THYROID_MEDS,
  ...IMMUNOSUPPRESSANTS,
  ...CHEMO_RADIATION,
  ...HORMONAL_MEDS,
  ...GI_MEDS,
  ...ANTIHISTAMINES,
  ...MUSCLE_RELAXANTS,
  ...OPIOID_MAT,
  ...SUPPLEMENTS,
  ...QUICK_REF,
];
