// ═══════════════════════════════════════════════
// TREATMENT PLANNING — Philosophies, Classifications, Sequencing
// ═══════════════════════════════════════════════

export const TP_CIT = {
  "kois-2015-risk": { pmid: null, title: "Comprehensive Risk-Based Diagnostically Driven Treatment Planning: Developing Sequentially Generated Treatment", authors: "Kois DE, Kois JC", journal: "Dent Clin North Am", year: 2015, grade: "EXPERT" },
  "spear-2007-interdisciplinary": { pmid: null, title: "A Multidisciplinary Approach to Esthetic Dentistry", authors: "Spear FM, Kokich VG", journal: "Dent Clin North Am", year: 2007, grade: "EXPERT" },
  "keough-2003-occlusion-1": { pmid: null, title: "Occlusion-Based Treatment Planning for Complex Dental Restorations: Part 1", authors: "Keough B", journal: "Int J Periodontics Restorative Dent", year: 2003, grade: "EXPERT" },
  "keough-2003-occlusion-2": { pmid: null, title: "Occlusion-Based Treatment Planning for Complex Dental Restorations: Part 2", authors: "Keough B", journal: "Int J Periodontics Restorative Dent", year: 2003, grade: "EXPERT" },
  "douglass-2002-comprehensive": { pmid: null, title: "Making a Comprehensive Diagnosis in a Comprehensive Care Curriculum", authors: "Douglass GD", journal: "J Dent Educ", year: 2002, grade: "EXPERT" },
  "li-2022-global-dx": { pmid: null, title: "Predictable Digital Restorative Workflow Utilizing Virtual Patient Model With Global Diagnosis Principle", authors: "Li Y et al.", journal: "J Esthet Restor Dent", year: 2022, grade: "MODERATE" },
  "silva-2019-facial-flow": { pmid: null, title: "The Facial Flow Concept: An Organic Orofacial Analysis—the Vertical Component", authors: "Silva BP et al.", journal: "J Prosthet Dent", year: 2019, grade: "MODERATE" },
  "coachman-2020-dsd": { pmid: null, title: "Chairside 3D Digital Design and Trial Restoration Workflow", authors: "Coachman C et al.", journal: "J Prosthet Dent", year: 2020, grade: "MODERATE" },
  "coachman-2021-copypaste": { pmid: null, title: "Interdisciplinary Guided Dentistry, Digital Quality Control, and the Copy-Paste Concepts", authors: "Coachman C et al.", journal: "J Esthet Restor Dent", year: 2021, grade: "MODERATE" },
  "tonetti-2018-perio-class": { pmid: null, title: "Staging and Grading of Periodontitis: Framework and Proposal of a New Classification", authors: "Tonetti MS, Greenwell H, Kornman KS", journal: "J Periodontol", year: 2018, grade: "STRONG" },
  "caton-2018-new-class": { pmid: null, title: "A New Classification Scheme for Periodontal and Peri-Implant Diseases and Conditions", authors: "Caton JG et al.", journal: "J Periodontol", year: 2018, grade: "STRONG" },
  "featherstone-2018-cambra": { pmid: null, title: "The Evidence for Caries Management by Risk Assessment (CAMBRA)", authors: "Featherstone JDB, Chaffee BW", journal: "Adv Dent Res", year: 2018, grade: "STRONG" },
  "schiffman-2016-dctmd": { pmid: null, title: "Executive Summary of the Diagnostic Criteria for Temporomandibular Disorders", authors: "Schiffman E, Ohrbach R", journal: "JADA", year: 2016, grade: "STRONG" },
  "juloski-2012-ferrule": { pmid: null, title: "Ferrule Effect: A Literature Review", authors: "Juloski J et al.", journal: "J Endod", year: 2012, grade: "STRONG" },
  "hajeer-2026-ferrule-ma": { pmid: null, title: "Ferrule Dimensions and Restoration Outcomes in Endodontically Treated Teeth: SR and MA", authors: "Hajeer O et al.", journal: "J Prosthodont", year: 2026, grade: "STRONG" },
  "goodacre-2023-nccl": { pmid: null, title: "NCCLs: Morphology, Progression, Prevalence, Etiology, Pathophysiology, and Clinical Guidelines", authors: "Goodacre CJ et al.", journal: "J Prosthodont", year: 2023, grade: "STRONG" },
  "grippo-2012-nccl": { pmid: null, title: "Abfraction, Abrasion, Biocorrosion, and the Enigma of NCCLs: A 20-Year Perspective", authors: "Grippo JO et al.", journal: "J Esthet Restor Dent", year: 2012, grade: "MODERATE" },
  "warnakulasuriya-2021-opmd": { pmid: null, title: "Oral Potentially Malignant Disorders: Consensus Report on Nomenclature and Classification", authors: "Warnakulasuriya S et al.", journal: "Oral Diseases", year: 2021, grade: "STRONG" },
  "sandhu-2026-medical-clearance": { pmid: null, title: "Medical Clearance Considerations for Medically Complex Adult Patients", authors: "Sandhu S et al.", journal: "JADA", year: 2026, grade: "MODERATE" },
};

export const tpGetGroup = c => {
  if (c.includes("Philosophy")) return "Treatment Planning Philosophies";
  if (c.includes("Classification") || c.includes("Staging") || c.includes("Diagnosis")) return "Classification Systems";
  if (c.includes("Sequencing") || c.includes("Decision") || c.includes("Protocol")) return "Treatment Sequencing & Decisions";
  if (c.includes("Risk")) return "Risk Assessment";
  return "Other";
};

export const TP_GROUPS = ["Treatment Planning Philosophies", "Classification Systems", "Treatment Sequencing & Decisions", "Risk Assessment"];

// ═══════════════════════════════════════════════
// 1. TREATMENT PLANNING PHILOSOPHIES
// ═══════════════════════════════════════════════
export const PHILOSOPHIES = [
  {
    id: "abgd-cmorepooope", name: "ABGD / CMOREPOOOPE Framework", mfr: "American Board of General Dentistry", cat: "Philosophy — Board Standard",
    framework: "SYSTEMATIC DISCIPLINE-BY-DISCIPLINE PROBLEM LIST:\n\nC — Chief Complaint (patient\'s primary concern, duration, expectations)\nM — Medical History (medications, allergies, ASA status, systemic conditions)\nO — Oral Pathology (OPMDs, lesions, lymphadenopathy, skin lesions, TNM staging)\nR — Restorative Needs (caries, CAMBRA risk, NCCLs, failing restorations, ferrule assessment)\nE — Endodontic Problems (pulpal/periapical diagnosis per AAE, VPT candidacy)\nP — Periodontal Disease (Stage I-IV, Grade A-C, furcation, recession, mucogingival)\nO — Occlusion/OFP/Sleep (Angle class, DC/TMD, Mallampati, AHI)\nO — Oral Surgery Needs (extractions, impactions per Pell & Gregory/Winter, biopsy)\nO — Orthodontic Concerns (Angle class, crowding, skeletal discrepancies)\nP — Prosthetic Needs (Kennedy class, Siebert defects, implant assessment)\nE — Esthetic Concerns (smile line, papilla, tooth color/shape, gingival display)",
    application: "PHASED TREATMENT MODEL:\n\n1. DIAGNOSTIC PHASE: comprehensive exam, radiographs, risk assessment, complete problem list\n2. DISEASE CONTROL: emergency care, OHI, SRP, caries control, extractions, provisionas\n3. RE-EVALUATION (4-6 wk post-SRP): re-probe, assess compliance, finalize definitive plan\n4. DEFINITIVE PHASE: perio surgery, endo, final restorations, prosthetics, ortho\n5. MAINTENANCE: recall exams, prophylaxis, monitoring, risk reassessment\n\nEvery problem identified BEFORE any treatment begins. Phasing allows financial flexibility.",
    evidence: "STRENGTHS:\n• Most comprehensive — ensures no discipline overlooked\n• Board exam aligned — required for ABGD certification\n• Systematic documentation structure\n• Phased approach allows financial flexibility\n\nLIMITATIONS:\n• Less emphasis on risk stratification than Kois\n• May be time-consuming for simple cases\n• Does not prioritize by risk level\n\nBEST FOR: board examination cases, complex multidisciplinary cases, teaching/training environments",
    notes: "The foundational framework for comprehensive dental treatment planning. All other philosophies can be layered on top of CMOREPOOOPE as organizing enhancements.",
    refs: []
  },
  {
    id: "kois-risk-based", name: "Kois Center — Risk-Based Treatment Planning", mfr: "Kois Center (John Kois)", cat: "Philosophy — Risk-Based",
    framework: "FOUR RISK CATEGORIES (each rated Low/Moderate/High):\n\n1. PERIODONTAL RISK: probing depths, CAL, BOP, bone loss, furcations, smoking, diabetes, genetics\n2. BIOMECHANICAL RISK: caries risk, tooth structure, restoration status, parafunction, ferrule\n3. FUNCTIONAL RISK: TMD, occlusal stability, parafunction, wear, condylar position\n4. DENTOFACIAL RISK: smile design, tooth position/alignment, gingival display, facial proportions\n\nTreatment addresses HIGHEST-RISK categories first.",
    application: "SEQUENTIALLY GENERATED TREATMENT:\n\n• Each phase builds on stability achieved in prior phase\n• High-risk categories prioritized\n• Cannot proceed to definitive restorative until perio is stable\n• Cannot finalize esthetics until function is addressed\n• Treatment can be phased over years — financial flexibility\n\nDIAGNOSIS DRIVES TREATMENT — not patient desires alone.",
    evidence: "Per Kois 2015 (Dent Clin North Am): sequentially generated treatment allows phasing over time while maintaining diagnostic rigor.\n\nSTRENGTHS:\n• Evidence-based risk stratification\n• Prioritizes logically by risk\n• Phased approach practical for real-world practice\n\nLIMITATIONS:\n• Requires Kois Center training for full implementation\n• May add complexity for simple cases\n\nBEST FOR: complex restorative cases, full-mouth rehabilitation planning, risk-driven prioritization",
    notes: "Most rigorous risk assessment framework. Many practitioners blend Kois risk categories with ABGD documentation structure.",
    refs: ["kois-2015-risk"]
  },
  {
    id: "spear-esthetics", name: "Spear Education — Esthetics-Driven", mfr: "Spear Education (Frank Spear)", cat: "Philosophy — Esthetics-Driven",
    framework: "TREATMENT HIERARCHY (in order):\n\n1. ESTHETICS — define ideal tooth position, smile design, facial harmony FIRST\n2. FUNCTION — establish stable occlusion to support esthetic result\n3. STRUCTURE — ensure adequate tooth structure/restorative foundation\n4. BIOLOGY — periodontal and pulpal health to support all above\n\nEsthetic objectives are established FIRST, then all other disciplines work to support those objectives.",
    application: "INTERDISCIPLINARY INTEGRATION:\n\n• Complex cases require coordination: prosthodontist + periodontist + orthodontist + surgeon\n• Esthetic goals guide ALL disciplines\n• Ortho moves teeth to ideal esthetic position\n• Perio creates ideal gingival architecture\n• Restorative delivers final esthetic result\n\nSequence: Define esthetic goals → Coordinate disciplines → Execute plan",
    evidence: "Per Spear & Kokich 2007 (Dent Clin North Am): esthetics-driven interdisciplinary approach produces superior outcomes for complex cases.\n\nSTRENGTHS:\n• Patient-centered esthetic outcomes\n• Excellent for complex interdisciplinary cases\n• Clear hierarchy prevents ad hoc treatment\n\nLIMITATIONS:\n• May overemphasize esthetics when biology/function should take priority\n• Requires interdisciplinary team access\n\nBEST FOR: full-mouth esthetic rehabilitation, anterior zone cases, interdisciplinary coordination",
    notes: "Esthetics as starting point — not an afterthought. Most practitioners apply Spear principles for esthetic cases and Kois/Dawson for functional cases.",
    refs: ["spear-2007-interdisciplinary"]
  },
  {
    id: "dawson-occlusion", name: "Dawson Academy — Occlusion-Based", mfr: "Dawson Academy (Peter Dawson)", cat: "Philosophy — Occlusion-Based",
    framework: "SIX ELEMENTS OF OCCLUSION (must be addressed IN ORDER):\n\n1. CENTRIC RELATION (CR): most anterosuperior position of condyles — the starting point for ALL occlusal treatment\n2. VERTICAL DIMENSION OF OCCLUSION (VDO): optimal jaw separation — establish before tooth position\n3. POSTERIOR OCCLUSAL PLANE: Curve of Spee, plane orientation — guides posterior tooth position\n4. MAXILLARY INCISAL EDGE POSITION: esthetics, phonetics, lip support — determines anterior guidance\n5. MANDIBULAR INCISAL EDGE POSITION: overbite/overjet — completes anterior guidance\n6. POSTERIOR OCCLUSAL ANATOMY: cusp height, fossa depth — final morphology",
    application: "MUTUAL PROTECTION OCCLUSION SCHEME:\n\n• Posterior teeth contact SIMULTANEOUSLY and EQUALLY in centric occlusion\n• Canines disclude posterior teeth in LATERAL excursions\n• Anterior teeth disclude posterior teeth in PROTRUSION\n\nCR is captured FIRST → VDO established → planes set → guidance designed → anatomy finalized\n\nPhysiologic foundation MUST be established before any restorative work.",
    evidence: "Per Keough 2003 Parts 1 & 2 (Int J Periodontics Restorative Dent): systematic occlusal approach enhances predictability in complex reconstruction.\n\nSTRENGTHS:\n• Reproducible foundation for full-mouth rehab\n• Predictability through ordered sequence\n• Eliminates occlusal interferences systematically\n\nLIMITATIONS:\n• CR may be difficult to capture\n• Some question clinical necessity in all cases\n• Rigid sequence may not suit every case\n\nBEST FOR: full-mouth reconstruction, occlusal rehabilitation, complex prosthetic cases",
    notes: "Occlusion is foundational — the six elements in sequence is the key differentiator. Many practitioners use Dawson principles for functional cases regardless of other philosophy preferences.",
    refs: ["keough-2003-occlusion-1", "keough-2003-occlusion-2"]
  },
  {
    id: "pankey-comprehensive", name: "Pankey Institute — Comprehensive Care", mfr: "Pankey Institute (L.D. Pankey)", cat: "Philosophy — Whole-Patient",
    framework: "FIVE ELEMENTS OF OPTIMAL ORAL HEALTH:\n\n1. Healthy periodontium\n2. Absence of disease (caries, pathology)\n3. Comfortable, stable TMJ\n4. Stable, functional occlusion\n5. Acceptable esthetics\n\nWHOLE-PATIENT PHILOSOPHY — focuses on relationship between oral health and overall well-being. Doctor-patient relationship is central.",
    application: "TREATMENT SEQUENCE:\n\nDisease Control → Stability → Definitive Treatment\n\n• Comprehensive diagnosis BEFORE any treatment\n• All problems identified before plan begins\n• Patient education and informed consent emphasized\n• Conservative approach — preserve natural tooth structure\n• Prevention-oriented — address causes, not just symptoms\n• Long-term stability — plan for longevity",
    evidence: "Per Douglass 2002 (J Dent Educ): comprehensive diagnosis is prerequisite for comprehensive care.\n\nSTRENGTHS:\n• Patient-centered philosophy\n• Emphasizes relationship and communication\n• Conservative, prevention-oriented\n\nLIMITATIONS:\n• Less structured than other systems\n• May be less efficient for simple cases\n\nBEST FOR: relationship-based practices, comprehensive care philosophy, patient communication",
    notes: "The oldest modern treatment planning philosophy. Emphasizes the human side of dentistry alongside clinical excellence.",
    refs: ["douglass-2002-comprehensive"]
  },
  {
    id: "global-diagnosis", name: "Global Diagnosis (Robbins/Rouse)", mfr: "Bill Robbins, Jeff Rouse", cat: "Philosophy — Face-First / Airway",
    framework: "GLOBAL DIAGNOSIS CATEGORIES (face-first, airway-centric):\n\n1. AIRWAY/SLEEP — screen for sleep-disordered breathing FIRST\n2. TMJ/OCCLUSION — joint health, condylar position, occlusal scheme\n3. PERIODONTAL — soft and hard tissue health\n4. BIOMECHANICAL — tooth structure, restorative needs\n5. DENTOFACIAL — smile design, facial harmony\n\nTreatment planning BEGINS WITH THE FACE and works inward. Airway compromise affects craniofacial development, TMJ health, occlusal stability, and sleep quality.",
    application: "FACIALLY GENERATED TREATMENT PLANNING (FGTP):\n\n• Facial reference lines guide smile design\n• Integration of 3D facial scanning with intraoral data\n• Virtual patient creation for predictable outcomes\n• Natural head position as reference\n\nFACIAL FLOW CONCEPT: organic orofacial analysis emphasizing HARMONY over rigid geometric rules. Dynamic evaluation of facial asymmetries. Natural, balanced smile design — not mathematical symmetry.",
    evidence: "Per Li 2022 (J Esthet Restor Dent): virtual patient model with Global Diagnosis principle enables predictable minimally invasive rehabilitation.\nPer Silva 2019 (J Prosthet Dent): Facial Flow concept provides organic orofacial analysis framework.\n\nSTRENGTHS:\n• Uniquely integrates airway/sleep into diagnosis\n• Facially-driven esthetics\n• Modern digital integration\n\nLIMITATIONS:\n• Requires sleep medicine training\n• Adds diagnostic complexity\n\nBEST FOR: cases involving airway concerns, facial-driven esthetics, craniofacial development cases",
    notes: "The key distinction: Global Diagnosis integrates AIRWAY AND SLEEP as foundational diagnostic categories. No other philosophy does this systematically.",
    refs: ["li-2022-global-dx", "silva-2019-facial-flow"]
  },
  {
    id: "dsd-coachman", name: "Digital Smile Design (DSD)", mfr: "Christian Coachman", cat: "Philosophy — Digital Visualization",
    framework: "DIGITALLY-DRIVEN FACIALLY-GUIDED TREATMENT PLANNING:\n\n7-STEP WORKFLOW:\n1. Facial documentation (photos, videos in natural head position)\n2. Digital smile design (reference lines on photographs)\n3. 3D virtual patient (integrate facial + intraoral scans + CBCT)\n4. Virtual wax-up (CAD design of proposed treatment)\n5. 3D printed mock-up (trial restoration for patient approval)\n6. Guided execution (surgical/restorative guides from approved design)\n7. Digital quality control (scan and verify outcomes)",
    application: "COPY-PASTE CONCEPT:\n\nThe approved digital design is MAINTAINED through ALL treatment phases:\n• Orthodontics moves teeth to match approved design\n• Periodontics creates gingival architecture per design\n• Surgery follows guided plan from design\n• Restorative delivers final result matching approved mock-up\n\nPatient APPROVES the design BEFORE any irreversible treatment. Visual communication tool for team and patient.",
    evidence: "Per Coachman 2020 (J Prosthet Dent): chairside 3D design and trial restoration workflow.\nPer Coachman 2021 (J Esthet Restor Dent): copy-paste concept maintains design integrity across disciplines.\n\nSTRENGTHS:\n• Excellent patient communication and case acceptance\n• Predictable outcomes through visualization\n• Interdisciplinary coordination tool\n\nLIMITATIONS:\n• Significant technology investment\n• Learning curve for software\n• Requires digital workflow infrastructure\n\nBEST FOR: esthetic cases, patient communication, interdisciplinary coordination, practices with digital workflow",
    notes: "DSD is both a philosophy and a workflow tool. Can be integrated with any other treatment planning philosophy as the visualization and execution layer.",
    refs: ["coachman-2020-dsd", "coachman-2021-copypaste"]
  },
];

// ═══════════════════════════════════════════════
// 2. CLASSIFICATION SYSTEMS
// ═══════════════════════════════════════════════
export const CLASSIFICATIONS = [
  {
    id: "asa-classification", name: "ASA Physical Status Classification (I-VI)", mfr: "American Society of Anesthesiologists", cat: "Classification — Medical Risk",
    framework: "ASA I: Normal healthy patient — no systemic disease\nASA II: Mild systemic disease — controlled HTN, controlled DM, mild asthma, pregnancy\nASA III: Severe systemic disease — poorly controlled DM, stable angina, moderate COPD, morbid obesity\nASA IV: Severe disease, constant threat to life — unstable angina, recent MI (<3mo), severe CHF\nASA V: Moribund, not expected to survive without operation\nASA VI: Brain-dead patient for organ donation",
    application: "DENTAL MANAGEMENT MODIFICATIONS:\n\nASA I: No modifications needed\nASA II: Routine care with monitoring\nASA III: Stress reduction protocol; consider medical consultation before invasive procedures\nASA IV: Defer elective treatment; emergency care only\nASA V-VI: Hospital setting only\n\nDocument ASA status at initial examination. ASA III+ requires medical consultation before surgery.",
    evidence: "Per Sandhu 2026 (JADA): medical clearance considerations for complex patients.\nPer Clough 2016 (Br Dent J): implementation of ASA in periodontal practice.\nPer Herrick 2021 (Am Fam Physician): medical clearance for common dental procedures.\n\nASA classification is universally accepted for perioperative risk stratification across all surgical disciplines.",
    notes: "Document ASA at every new patient exam. ASA III+ may need physician consultation before sedation or extensive surgery.",
    refs: ["sandhu-2026-medical-clearance"]
  },
  {
    id: "cambra-cra", name: "CAMBRA Caries Risk Assessment", mfr: "Featherstone / UCSF", cat: "Classification — Caries Risk",
    framework: "RISK DETERMINATION BASED ON 3 CATEGORIES:\n\nDISEASE INDICATORS: visible cavities, radiographic lesions into dentin, white spots, restorations in past 3 years\n\nRISK FACTORS: heavy plaque, frequent snacking (>3x/day), deep pits/fissures, recreational drug use, inadequate saliva, orthodontic appliances, exposed roots\n\nPROTECTIVE FACTORS: fluoride toothpaste (2x/day), fluoride varnish (past 6mo), Rx fluoride, CHX (past 6mo), xylitol, adequate saliva flow",
    application: "MANAGEMENT BY RISK LEVEL:\n\nLOW: routine recall, OTC fluoride\nMODERATE: 6-month recall, fluoride varnish, OTC fluoride\nHIGH: 3-4 month recall, Rx fluoride (5000 ppm), CHX 0.12%, dietary counseling\nEXTREME: aggressive intervention, frequent recall, combination therapy\n\nAddition of chemical therapy (CHX + 5000 ppm fluoride) to restorative treatment reduces caries increment by 20-38% in high-risk adults.",
    evidence: "Per Featherstone 2018 (Adv Dent Res): CAMBRA evidence base supports risk-based caries management.\nPer Brons-Piche 2019 (J Dent Educ): predictive validity of CAMBRA model validated.\n\nCAMBRA is the most widely validated caries risk assessment system in dental education.",
    notes: "Cross-reference: Preventive Dentistry category for fluoride products, SDF, sealants, and remineralization agents by CAMBRA risk level.",
    refs: ["featherstone-2018-cambra"]
  },
  {
    id: "aae-pulpal-dx", name: "AAE Pulpal & Periapical Diagnosis", mfr: "American Association of Endodontists", cat: "Classification — Endodontic Diagnosis",
    framework: "PULPAL DIAGNOSIS:\n• Normal Pulp: asymptomatic, normal response to testing\n• Reversible Pulpitis: sharp transient pain to stimulus, resolves when removed\n• Symptomatic Irreversible Pulpitis: spontaneous pain, lingering >30 sec, may refer\n• Asymptomatic Irreversible Pulpitis: no symptoms but pulp exposure or deep caries; vital\n• Pulp Necrosis: non-vital, no response to testing\n• Previously Treated: prior RCT\n• Previously Initiated Therapy: partial pulpotomy or pulpectomy started\n\nPERIAPICAL DIAGNOSIS:\n• Normal Apical Tissues: no symptoms, normal radiograph\n• Symptomatic Apical Periodontitis: pain with biting/percussion\n• Asymptomatic Apical Periodontitis: no symptoms, periapical radiolucency\n• Acute Apical Abscess: rapid onset, swelling, pus, systemic involvement\n• Chronic Apical Abscess: sinus tract, little discomfort, intermittent drainage",
    application: "CLINICAL TESTING PROTOCOL:\n\n1. Cold test (Endo-Ice or refrigerant spray on cotton pellet)\n2. Heat test (heated gutta-percha or warm water syringe)\n3. Electric pulp test (EPT)\n4. Percussion test (vertical and horizontal)\n5. Palpation test (periapical region)\n6. Bite test (Tooth Slooth or cotton roll)\n7. Radiographic assessment (periapical + CBCT if needed)\n\nAlways test control tooth first. Document ALL findings.",
    evidence: "AAE classification is the universally accepted standard for endodontic diagnosis. Required for treatment planning documentation and insurance communication.\n\nKey decision: Reversible pulpitis → monitor/restore. Irreversible pulpitis → RCT or extraction. Necrosis → RCT or extraction.",
    notes: "Cross-reference: Endodontics category for file systems, irrigants, bioceramics, and obturation by diagnosis.",
    refs: []
  },
  {
    id: "perio-2017-classification", name: "2017 Periodontal Classification (Stage/Grade)", mfr: "AAP/EFP", cat: "Classification — Periodontal Staging",
    framework: "STAGING (Severity + Complexity):\n\nStage I: CAL 1-2mm, bone loss coronal third (<15%), PD ≤4mm, no tooth loss\nStage II: CAL 3-4mm, bone loss coronal third (15-33%), PD ≤5mm, no tooth loss\nStage III: CAL ≥5mm, bone loss to mid-third+, PD ≥6mm, ≤4 teeth lost, furcation Class II/III\nStage IV: CAL ≥5mm, bone loss to mid-third+, PD ≥6mm, ≥5 teeth lost, masticatory dysfunction\n\nGRADING (Progression Rate + Risk):\n\nGrade A (Slow): bone loss/age <0.25, non-smoker, HbA1c <7%\nGrade B (Moderate): bone loss/age 0.25-1.0, smoker <10 cig/day, HbA1c 7-8%\nGrade C (Rapid): bone loss/age >1.0, smoker ≥10 cig/day, HbA1c ≥8%\n\nExtent: Localized (<30% teeth), Generalized (≥30%), Molar-incisor pattern",
    application: "TREATMENT IMPLICATIONS BY STAGE:\n\nStage I-II: non-surgical therapy (SRP), risk factor modification\nStage III: SRP + likely surgical therapy (regenerative if intrabony defects)\nStage IV: SRP + surgical + prosthetic rehabilitation for masticatory dysfunction\n\nGrade modifies recall interval:\nGrade A: 6-12 month recall\nGrade B: 4-6 month recall\nGrade C: 3-4 month recall + aggressive risk factor modification",
    evidence: "Per Tonetti 2018 (J Periodontol / J Clin Periodontol): staging and grading framework.\nPer Caton 2018 (J Periodontol): new classification key changes from 1999.\n\nReplaced the 1999 classification. Stage reflects severity/complexity, Grade reflects biological behavior and risk.",
    notes: "Cross-reference: Periodontics category for materials by stage (membranes, grafts, biologics for Stage III-IV).",
    refs: ["tonetti-2018-perio-class", "caton-2018-new-class"]
  },
  {
    id: "furcation-classifications", name: "Furcation Classifications (Glickman/Hamp/Tarnow)", mfr: "Multiple", cat: "Classification — Periodontal Furcation",
    framework: "GLICKMAN (I-IV):\nI: Incipient — soft tissue only, no bone loss in furcation\nII: Cul-de-sac — horizontal bone loss into furcation, not through-and-through\nIII: Through-and-through — complete horizontal loss, covered by soft tissue\nIV: Through-and-through — exposed, gingival recession into furcation\n\nHAMP (I-III):\nI: <1/3 buccolingual width (≤3mm horizontal probing)\nII: >1/3 but not through (≥3mm but not complete)\nIII: Through-and-through (probe passes completely)\n\nTARNOW-FLETCHER VERTICAL (A/B/C):\nA: 1-3mm vertical bone loss — better prognosis\nB: 4-6mm vertical loss — moderate prognosis\nC: ≥7mm vertical loss — poor prognosis",
    application: "TREATMENT BY CLASS:\n\nGlickman I / Hamp I: scaling, OHI, odontoplasty\nGlickman II / Hamp II: regenerative therapy possible (GTR, bone graft + membrane)\nGlickman III / Hamp III: tunnel preparation, root resection, or extraction\nGlickman IV: extraction usually indicated\n\n⚠ Clinical probing UNDERESTIMATES furcation involvement vs surgical findings. Radiographs may miss buccal/lingual furcations due to superimposition.",
    evidence: "Per Zappa 1993 (J Periodontol): clinical furcation diagnoses correlate with interradicular bone defects.\nPer Tarnow 1984 (J Periodontol): vertical subclassification of furcation involvement.\n\nHamp classification is most commonly used in clinical practice. Tarnow-Fletcher adds prognostic value through vertical assessment.",
    notes: "Cross-reference: Periodontics for membrane and graft selection by furcation class.",
    refs: []
  },
  {
    id: "cairo-recession", name: "Cairo Recession Classification (RT1-3)", mfr: "Cairo et al. / 2017 Perio Classification", cat: "Classification — Periodontal Recession",
    framework: "RT1: No interproximal attachment loss — complete root coverage ACHIEVABLE\nRT2: Interproximal CAL ≤ buccal CAL — PARTIAL root coverage expected\nRT3: Interproximal CAL > buccal CAL — LIMITED root coverage expected\n\nCOMPARISON TO MILLER (historical):\nMiller I/II → RT1 (no interproximal bone loss)\nMiller III → RT2 (some interproximal loss)\nMiller IV → RT3 (severe interproximal loss)",
    application: "TREATMENT SELECTION BY CLASS:\n\nRT1: CTG + CAF is gold standard (highest complete root coverage rates)\n— Alternatives: Mucograft, AlloDerm (lower CRC but reduced morbidity)\nRT2: CTG + CAF (partial coverage expected, set realistic expectations)\nRT3: Limited coverage — consider restorative options, orthodontic root coverage, or acceptance\n\nCairo classification BETTER PREDICTS root coverage outcomes than Miller.",
    evidence: "Per Cortellini 2018 (J Periodontol / J Clin Periodontol): Cairo classification adopted in 2017 periodontal classification.\nPer Pini Prato 2021 (J Periodontol): value of 2017 classification for phenotype and recession.\n\nCairo replaced Miller because it directly links to prognostic outcomes for root coverage procedures.",
    notes: "Cross-reference: Periodontics for soft tissue substitute selection (Mucograft, Fibro-Gide, AlloDerm, CTG) by Cairo class.",
    refs: []
  },
  {
    id: "dctmd-criteria", name: "DC/TMD Diagnostic Criteria", mfr: "Schiffman, Ohrbach / RDC/TMD Consortium", cat: "Classification — TMD Diagnosis",
    framework: "AXIS I (Physical Diagnoses):\n\nPAIN DISORDERS: myalgia, arthralgia, headache attributed to TMD\nDISC DISPLACEMENT: with reduction, with reduction + intermittent locking, without reduction + limited opening, without reduction + no limited opening\nDEGENERATIVE JOINT DISEASE: osteoarthritis, osteoarthrosis\nSUBLUXATION: hypermobility (jaw locking in open position)\n\nAXIS II (Psychosocial):\n• Graded Chronic Pain Scale\n• Jaw Functional Limitation Scale\n• PHQ-4 (anxiety/depression screening)\n• Oral Behaviors Checklist",
    application: "CLINICAL EXAMINATION PROTOCOL:\n\n1. Familiar pain reproduction with palpation (masseter, temporalis, preauricular)\n2. Maximum unassisted opening (mm)\n3. Maximum assisted opening (mm)\n4. Lateral and protrusive excursions (mm)\n5. Joint sounds (clicking, crepitus) — location and timing\n6. Pain with function (chewing, opening, excursions)\n7. Axis II questionnaires for psychosocial assessment",
    evidence: "Per Schiffman 2016 (JADA): executive summary of DC/TMD.\nPer Ohrbach 2019 (J Pain): AAPT diagnostic criteria for chronic painful TMD.\nPer Sharma 2026 (J Dent Res): validity of brief diagnostic criteria confirmed.\n\nDC/TMD is the international gold standard for TMD diagnosis in both clinical and research settings.",
    notes: "Cross-reference: OFP/TMD category for splint therapy, injection protocols, and pharmacology by DC/TMD diagnosis.",
    refs: ["schiffman-2016-dctmd"]
  },
  {
    id: "pell-gregory-winter", name: "Pell & Gregory + Winter (Third Molar)", mfr: "Pell & Gregory / Winter / Pederson", cat: "Classification — Third Molar Impaction",
    framework: "PELL & GREGORY — DEPTH:\nPosition A: highest point AT or ABOVE occlusal plane of 2nd molar\nPosition B: highest point BETWEEN occlusal plane and CEJ of 2nd molar\nPosition C: highest point BELOW CEJ of 2nd molar\n\nPELL & GREGORY — RAMUS:\nClass I: sufficient space between ramus and distal of 2nd molar\nClass II: ~half of crown covered by ramus\nClass III: entire tooth within ramus\n\nWINTER — ANGULATION:\nMesioangular (most common, 43-65%), Vertical, Horizontal, Distoangular, Inverted (rare)\n\nPEDERSON DIFFICULTY INDEX (3-10 points):\nSpatial (I=1, II=2, III=3) + Depth (A=1, B=2, C=3) + Angulation (mesio/vert=1, horiz=2, disto/inverted=3)\n3-4: minimally difficult | 5-6: moderately difficult | 7-10: very difficult",
    application: "SURGICAL APPROACH BY DIFFICULTY:\n\nPederson 3-4 (Class I-II, Position A-B, mesio/vertical): in-office extraction, 15-30 min\nPederson 5-6: in-office with surgical experience, may need sectioning\nPederson ≥7 (Class III, Position C, horizontal/disto): REFER to oral surgeon\n\nReferral triggers: proximity to IAN on CBCT, severe difficulty score, medical complexity",
    evidence: "Per Jaroń 2021 (Int J Environ Res Public Health): impaction pattern and difficulty assessment.\nPer Khojastepour 2019 (J Oral Maxillofac Surg): Winter and Pell & Gregory classification validation.\n\nCombining all three systems (Pell & Gregory + Winter + Pederson) gives the most complete preoperative assessment.",
    notes: "Cross-reference: Oral Surgery category for extraction techniques, complications, and pharmacology by difficulty level.",
    refs: []
  },
  {
    id: "kennedy-applegate", name: "Kennedy Classification + Applegate Rules", mfr: "Kennedy / Applegate", cat: "Classification — Partial Edentulism",
    framework: "KENNEDY CLASSIFICATION:\nClass I: Bilateral distal extension (edentulous posterior to remaining teeth)\nClass II: Unilateral distal extension\nClass III: Unilateral bounded edentulous space\nClass IV: Single bilateral anterior space crossing midline\n\nAPPLEGATE RULES:\n1. Classification follows extractions\n2. Missing 3rd molar not replaced = not considered\n3. 3rd molar as abutment = considered\n4. Missing 2nd molar not replaced = not considered\n5. Most posterior edentulous area determines class\n6. Additional spaces = modifications (e.g., Class II Mod 1)\n7. Only NUMBER of modifications counts, not extent\n8. Class IV has NO modifications (any posterior space changes class)",
    application: "TREATMENT CONSIDERATIONS BY CLASS:\n\nClass I: tissue-supported posteriorly, stress-breaking design needed, consider implants\nClass II: asymmetric support, rotational forces, stress-breaking needed\nClass III: tooth-supported — MOST FAVORABLE for RPD; also ideal for FPD\nClass IV: esthetic considerations, anterior guidance critical\n\nFor all classes: evaluate for implant-supported alternatives vs RPD vs FPD.",
    evidence: "Per McGarry 2002 (J Prosthodont): ACP classification of partial edentulism.\nPer Charyeva 2012 (J Prosthodont): Kennedy classification and treatment options in clinical practice.\n\nKennedy classification is universally used for communicating partial edentulism status.",
    notes: "Cross-reference: Prosthodontics category for removable prosthetics, implant-supported options by Kennedy class.",
    refs: []
  },
  {
    id: "siebert-ridge", name: "Siebert Ridge Defect Classification (I-III)", mfr: "Siebert / Wang & Al-Shammari", cat: "Classification — Ridge Deficiency",
    framework: "Class I: BUCCOLINGUAL loss — loss of ridge width, adequate height\nClass II: APICOCORONAL loss — loss of ridge height, adequate width\nClass III: COMBINATION — loss of both width and height",
    application: "TREATMENT BY CLASS:\n\nClass I: Horizontal augmentation (GBR with particulate graft + membrane, or block graft)\nClass II: Vertical augmentation (most challenging — consider distraction osteogenesis, onlay graft, or short implants)\nClass III: Combined/staged augmentation — often requires staged approach\n\nClass I has best esthetic outcomes with pontics. Class II-III may require ridge augmentation before fixed prosthetics or implants.",
    evidence: "Per Wang 2002 (Int J Periodontics Restorative Dent): HVC therapeutically-oriented classification.\nPer Hawkins 1991 (J Prosthet Dent): ridge contour related to esthetics and function.\n\nSiebert classification guides augmentation approach and sets realistic expectations for ridge reconstruction.",
    notes: "Cross-reference: Periodontics for bone graft and membrane selection. Implantology for GBR protocols.",
    refs: []
  },
  {
    id: "mallampati-friedman", name: "Mallampati Classification (I-IV) + Friedman", mfr: "Mallampati / Friedman / Myers JAMA 2013", cat: "Classification — Airway Assessment",
    framework: "MALLAMPATI (patient seated, mouth open, tongue protruded, no phonation):\nClass I: soft palate, fauces, uvula, pillars ALL visible — lower OSA risk\nClass II: soft palate, fauces, uvula visible\nClass III: soft palate, BASE of uvula visible — higher OSA risk\nClass IV: only HARD PALATE visible — highest OSA risk\n\nFRIEDMAN TONGUE POSITION: modified version accounting for tongue position relative to palate. Better correlation with OSA severity than standard Mallampati.",
    application: "OSA CORRELATION:\n\nEach 1-point increase in Mallampati score increases OSA odds by ~2-fold.\n\nOSA SEVERITY (based on AHI):\nNormal: AHI <5\nMild: AHI 5-15\nModerate: AHI 15-30\nSevere: AHI >30\n\nScreen ALL patients with Mallampati + STOP-BANG + Epworth. Mallampati III-IV → refer for sleep study.",
    evidence: "Per Myers 2013 (JAMA): Mallampati as independent predictor of OSA in rational clinical examination SR.\nPer Yu 2020 (J Clin Sleep Med): Friedman tongue position assessment utility.\nPer Nuckton 2006 (Sleep): Mallampati as independent OSA predictor.",
    notes: "Cross-reference: Sleep Dentistry for oral appliance therapy. Sedation for airway assessment before sedation procedures.",
    refs: []
  },
];

// ═══════════════════════════════════════════════
// 3. TREATMENT SEQUENCING & DECISIONS
// ═══════════════════════════════════════════════
export const SEQUENCING = [
  {
    id: "phased-treatment", name: "Phased Treatment Model — Universal Sequence", mfr: "N/A — Protocol", cat: "Sequencing — Treatment Phases",
    framework: "FIVE PHASES OF TREATMENT:\n\n1. DIAGNOSTIC: history, exam, radiographs, models, photos, risk assessment, problem list, classification\n2. DISEASE CONTROL: emergency care, OHI, SRP, caries excavation, interim restorations, extractions, endo of symptomatic teeth, occlusal adjustment, provisionals\n3. RE-EVALUATION (4-6 weeks post-SRP): re-probe all sites, assess tissue response, evaluate compliance, determine need for surgical perio\n4. DEFINITIVE: perio surgery, final restorations, prosthetics, implants, ortho\n5. MAINTENANCE: recall exams, prophylaxis, monitoring, risk reassessment",
    application: "KEY DECISION POINTS:\n\nAfter Disease Control → Re-eval determines:\n• Sites responding to SRP: maintenance\n• Sites NOT responding (PD ≥5mm + BOP): surgical therapy\n• Patient non-compliant: re-motivate before definitive phase\n\nAfter Re-eval → Definitive sequence:\n1. Perio surgery first (tissue must heal before restorative margins)\n2. Endo as needed\n3. Orthodontics if planned\n4. Implant placement (after grafting heals)\n5. Final restorations (prosth last)\n6. Implant restoration",
    evidence: "Phased treatment is universally accepted across all treatment planning philosophies. The specific sequence within the definitive phase may vary by philosophy (Dawson: occlusion first; Spear: esthetics first; Kois: highest risk first).",
    notes: "Every philosophy uses some version of this sequence. The disagreement is about what drives PRIORITIZATION within the definitive phase.",
    refs: []
  },
  {
    id: "ferrule-post-decision", name: "Ferrule & Post Decision Algorithm", mfr: "N/A — Decision Framework", cat: "Decision — Restorative",
    framework: "FERRULE REQUIREMENTS (per Juloski 2012, Hajeer 2026 MA):\n\n• Minimum HEIGHT: 1.5-2.0 mm of sound dentin above finish line\n• Minimum THICKNESS: ≥1.0 mm circumferentially\n• CIRCUMFERENTIAL: ideally 360° — partial ferrule is better than none\n\nThe ferrule is the SINGLE MOST IMPORTANT factor for long-term survival of endodontically treated teeth.",
    application: "DECISION ALGORITHM:\n\n≥2mm ferrule circumferentially → NO POST needed for most cases (direct core buildup sufficient)\n1.5-2mm ferrule → FIBER POST recommended (increases retention of core)\n<1.5mm ferrule → QUESTIONABLE prognosis — discuss with patient\nNo ferrule → Consider EXTRACTION + implant (post-and-core has high failure rate without ferrule)\n\nPOST SELECTION:\n• Fiber post: preferred for most cases (similar modulus to dentin, favorable failure mode)\n• Cast post: only when inadequate coronal structure prevents fiber post retention\n• ⚠ Cast post failure = root fracture (catastrophic). Fiber post failure = decementation (repairable).",
    evidence: "Per Hajeer 2026 MA (J Prosthodont): ferrule dimensions directly predict restoration outcomes.\nPer Juloski 2012 (J Endod): comprehensive ferrule effect literature review.\nPer Fontana 2019 (Oper Dent): ferrule thickness affects fracture resistance with both post types.\n\nConsensus: NO post compensates for absence of ferrule. Ferrule > post type for long-term survival.",
    notes: "Cross-reference: Endodontics for post-and-core materials. Restorative for crown margin placement.",
    refs: ["juloski-2012-ferrule", "hajeer-2026-ferrule-ma"]
  },
  {
    id: "nccl-decision", name: "NCCL Etiology & Management Decision", mfr: "Grippo / Goodacre", cat: "Decision — Restorative",
    framework: "MULTIFACTORIAL ETIOLOGY (not separate entities):\n\n• BIOCORROSION (chemical/biochemical): acid erosion from diet, GERD, medications\n• ABRASION (mechanical): toothbrush wear, abrasive dentifrice\n• ABFRACTION (stress): occlusal loading creates stress concentration at CEJ\n\nThese factors interact SYNERGISTICALLY — rarely a single cause. Acid softens enamel/dentin → brushing removes softened structure → stress concentrations accelerate loss.",
    application: "MANAGEMENT DECISION:\n\nMONITOR (no restoration) when:\n• Lesion is stable (not progressing)\n• No sensitivity\n• No esthetic concern\n• Risk factors controlled (diet, brushing technique, occlusion)\n\nRESTORE when:\n• Active progression documented\n• Sensitivity persists\n• Structural compromise\n• Esthetic concern\n• Approaching pulp\n\nMATERIAL SELECTION FOR NCCL:\n• GIC/RMGIC: cervical lesions with moisture control challenges\n• Composite (flowable): lesions with adequate isolation\n• Composite (universal): larger lesions requiring strength\n• ⚠ Prep design: NO mechanical retention needed with adhesive bonding; beveled enamel margin",
    evidence: "Per Goodacre 2023 (J Prosthodont): comprehensive NCCL review with clinical guidelines.\nPer Grippo 2012 (J Esthet Restor Dent): 20-year perspective on multifactorial NCCL etiology.\n\nKey insight: the old terms 'abrasion,' 'erosion,' and 'abfraction' as separate diagnoses are INCORRECT. NCCLs are multifactorial.",
    notes: "Cross-reference: Restorative for composite and GIC selection. Preventive for fluoride and remineralization.",
    refs: ["goodacre-2023-nccl", "grippo-2012-nccl"]
  },
];

// ═══════════════════════════════════════════════
// COMBINED EXPORT
// ═══════════════════════════════════════════════
export const ALL_TP_PRODUCTS = [
  ...PHILOSOPHIES,
  ...CLASSIFICATIONS,
  ...SEQUENCING,
];
