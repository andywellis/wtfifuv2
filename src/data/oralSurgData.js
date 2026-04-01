// ═══════════════════════════════════════════════
// ORAL SURGERY / EXODONTIA — Techniques, Protocols, Complications
// ═══════════════════════════════════════════════

export const ORALSURG_CIT = {
  "abdelwahab-2021-physics": { pmid: null, title: "Efficacy of Physics Forceps for Exodontia: A Systematic Review (8 RCTs)", authors: "Abdelwahab M et al.", journal: "J Oral Maxillofac Surg", year: 2021, grade: "MODERATE" },
  "hariharan-2014-physics": { pmid: null, title: "Split-Mouth Comparison of Physics Forceps in Orthodontic Extraction (54 premolars)", authors: "Hariharan S et al.", journal: "Br J Oral Maxillofac Surg", year: 2014, grade: "MODERATE" },
  "peixoto-2024-coronectomy": { pmid: null, title: "Benefits of Coronectomy in Lower Third Molar Surgery: SR and MA", authors: "Peixoto AO et al.", journal: "J Oral Maxillofac Surg", year: 2024, grade: "STRONG" },
  "kang-2025-coronectomy": { pmid: null, title: "Coronectomy in Lower Third Molar Surgery: SR and MA (34 studies, 7115 teeth)", authors: "Kang FW et al.", journal: "J Oral Maxillofac Surg", year: 2025, grade: "STRONG" },
  "li-2025-coronectomy": { pmid: null, title: "Coronectomy for High-Risk Mandibular Third Molars: Neuroprotection, Long-Term Outcomes", authors: "Li J, Zhang W", journal: "Oral Surg Oral Med Oral Pathol Oral Radiol", year: 2025, grade: "MODERATE" },
  "cicciu-2021-piezo": { pmid: null, title: "Piezoelectric Bone Surgery for Impacted Third Molars: SR, MA, and TSA", authors: "Cicciù M et al.", journal: "Int J Oral Maxillofac Surg", year: 2021, grade: "STRONG" },
  "badenoch-jones-2016-piezo": { pmid: null, title: "Piezoelectric vs Conventional Rotary Osteotomy: SR and MA", authors: "Badenoch-Jones EK et al.", journal: "Br J Oral Maxillofac Surg", year: 2016, grade: "STRONG" },
  "canellas-2021-socket-nma": { pmid: null, title: "What Grafting Materials Produce Greater Ridge Preservation? NMA (31 RCTs)", authors: "Canellas JVDS et al.", journal: "J Craniomaxillofac Surg", year: 2021, grade: "STRONG" },
  "jambhekar-2015-socket": { pmid: null, title: "Clinical and Histologic Outcomes of Socket Grafting: SR of RCTs", authors: "Jambhekar S et al.", journal: "J Prosthet Dent", year: 2015, grade: "STRONG" },
  "yan-2025-prf-socket": { pmid: null, title: "Efficacy of PRF in Alveolar Ridge Preservation: SR and MA (18 RCTs)", authors: "Yan J, Lu K", journal: "Front Med", year: 2025, grade: "STRONG" },
  "canellas-2022-dexa-nma": { pmid: null, title: "Comparative Efficacy of Corticosteroids After Third Molar Surgery: Network MA", authors: "Canellas JVDS et al.", journal: "Br J Oral Maxillofac Surg", year: 2022, grade: "STRONG" },
  "miroshnychenko-2023-pain-nma": { pmid: null, title: "Acute Postoperative Dental Pain: SR and Network MA", authors: "Miroshnychenko A et al.", journal: "J Dent Res", year: 2023, grade: "STRONG" },
  "feldman-2025-oars": { pmid: null, title: "Nonopioid vs Opioid After Third Molar Extractions: OARS RCT (1815 patients)", authors: "Feldman CA et al.", journal: "JADA", year: 2025, grade: "STRONG" },
  "carrasco-labra-2024-ada-pain": { pmid: null, title: "ADA Evidence-Based Guideline for Pharmacologic Management of Acute Dental Pain", authors: "Carrasco-Labra A et al.", journal: "JADA", year: 2024, grade: "STRONG" },
  "lodi-2021-abx-cochrane": { pmid: null, title: "Antibiotics to Prevent Complications Following Tooth Extractions (Cochrane)", authors: "Lodi G et al.", journal: "Cochrane Database Syst Rev", year: 2021, grade: "STRONG" },
  "daly-2022-drysocket-cochrane": { pmid: null, title: "Local Interventions for Management of Alveolar Osteitis (Cochrane)", authors: "Daly BJ et al.", journal: "Cochrane Database Syst Rev", year: 2022, grade: "STRONG" },
  "hong-2018-vertical-extraction": { pmid: null, title: "Minimally Invasive Vertical vs Conventional Tooth Extraction (323 teeth)", authors: "Hong B et al.", journal: "JADA", year: 2018, grade: "MODERATE" },
  "hounsome-2020-prophylactic": { pmid: null, title: "Prophylactic Removal of Impacted Third Molars: SR and Economic Evaluation", authors: "Hounsome J et al.", journal: "Health Technol Assess", year: 2020, grade: "STRONG" },
  "bilginaylar-2018-prf-oac": { pmid: null, title: "PRF for Immediate Closure of Acute Oroantral Communications (21 patients, 100%)", authors: "Bilginaylar K", journal: "J Oral Maxillofac Surg", year: 2018, grade: "MODERATE" },
  "schmidt-2021-pericoronitis": { pmid: null, title: "Evidence-Based Pericoronitis Management: Antibiotics Overprescribed (75% of dentists)", authors: "Schmidt J et al.", journal: "Int J Environ Res Public Health", year: 2021, grade: "MODERATE" },
  "leroy-2022-pericoronitis-cochrane": { pmid: null, title: "Antibiotics in Periodontal Abscesses and Pericoronitis: SR (ZERO RCTs found)", authors: "Leroy R et al.", journal: "Eur J Oral Sci", year: 2022, grade: "STRONG" },
};

export const oralSurgGetGroup = c => {
  if (c.includes("Forceps") || c.includes("Elevator") || c.includes("Instrument")) return "Forceps & Elevators";
  if (c.includes("Surgical") || c.includes("Extraction") || c.includes("Atraumatic")) return "Surgical Extraction Techniques";
  if (c.includes("Third Molar") || c.includes("Impaction")) return "Third Molar Management";
  if (c.includes("Socket") || c.includes("Ridge Preservation")) return "Socket Preservation";
  if (c.includes("Hemosta") || c.includes("Bleeding")) return "Hemostatic Protocols";
  if (c.includes("Analges") || c.includes("Pharmacol") || c.includes("Antibiotic") || c.includes("Dexamethasone")) return "Pharmacology — Exodontia";
  if (c.includes("Complication") || c.includes("Dry Socket") || c.includes("OAC") || c.includes("Nerve") || c.includes("Pericoronitis")) return "Complications & Management";
  return "Protocols & Decision Frameworks";
};

export const ORALSURG_GROUPS = ["Forceps & Elevators", "Surgical Extraction Techniques", "Third Molar Management", "Socket Preservation", "Hemostatic Protocols", "Pharmacology — Exodontia", "Complications & Management", "Protocols & Decision Frameworks"];

// ═══════════════════════════════════════════════
// FORCEPS & ELEVATORS
// ═══════════════════════════════════════════════
export const FORCEPS = [
  {
    id: "upper-universal-150", name: "Upper Universal Forceps (150)", mfr: "N/A — Instrument", cat: "Forceps — Maxillary",
    framework: "Broad, triangular beaks positioned perpendicular to handle. Engages tooth at CEJ level circumferentially.",
    application: "TECHNIQUE:\n1. Apply beaks at CEJ level on buccal and palatal surfaces\n2. Engage tooth circumferentially with firm apical pressure\n3. Single-rooted: apply buccal-palatal pressure with ROTATION (30-45° arc)\n4. Multi-rooted: figure-8 motion (alternating buccal-palatal)\n5. Deliver tooth occlusally once mobile\n\nINDICATIONS: maxillary premolars, single-rooted molars, teeth with intact crowns",
    evidence: "Standard forceps technique. For esthetic zone: minimize buccal pressure to preserve buccal plate — consider periotome luxation first to sever PDL fibers before forceps application.",
    notes: "The workhorse maxillary forceps. Use 150S (narrow variant) for premolars with tapered roots.",
    refs: []
  },
  {
    id: "lower-universal-151", name: "Lower Universal Forceps (151)", mfr: "N/A — Instrument", cat: "Forceps — Mandibular",
    framework: "Beaks at 90° angle to handles. Designed for mandibular teeth with occlusal approach.",
    application: "TECHNIQUE:\n1. Engage beaks at CEJ level on buccal and lingual surfaces\n2. Apply firm apical pressure to seat beaks subgingivally\n3. Buccal-lingual rocking motion with slight rotation\n4. Deliver tooth occlusally\n\nINDICATIONS: mandibular premolars, molars with intact crowns, teeth amenable to elevation",
    evidence: "Standard mandibular forceps. For surgical extractions or resistant teeth, switch to cow horn (17/23) or elevators.",
    notes: "If 151 is insufficient, consider cow horn for molars or surgical approach with buccal trough.",
    refs: []
  },
  {
    id: "cow-horn-17", name: "Cow Horn Forceps (17/23)", mfr: "N/A — Instrument", cat: "Forceps — Mandibular Molar",
    framework: "Pointed beaks designed to engage FURCATION of mandibular molars. Beaks converge when handles compressed.",
    application: "SPLIT TECHNIQUE (for resistant molars):\n1. Section tooth mesiodistally through furcation using #557 or #702 bur\n2. Remove MESIAL root first (typically less curvature)\n3. Engage distal root with cow horn beaks at furcation\n4. Apply vertical pressure while squeezing handles to engage root\n5. Deliver with buccal-lingual rocking\n\nDIRECT TECHNIQUE (intact tooth):\n1. Seat beak tips into furcation on buccal and lingual\n2. Squeeze handles — beaks drive into furcation, expanding socket\n3. Apply slight rotational force\n4. Deliver occlusally\n\n⚠ CAUTION: risk of mandibular fracture in atrophic bone — avoid excessive apical pressure",
    evidence: "Cow horn forceps are highly effective for mandibular molars with divergent roots. The split technique is indicated when direct forceps fail or roots are divergent/curved.",
    notes: "The split technique is often faster than prolonged forceps manipulation. Section first, extract roots individually.",
    refs: []
  },
  {
    id: "physics-forceps", name: "Physics Forceps", mfr: "GoldenDent", cat: "Forceps — Atraumatic",
    framework: "FIRST-CLASS LEVER SYSTEM:\n• Buccal beak placed 3-4mm apical to CEJ\n• Crestal bumper rests on palatal/lingual crestal bone\n• Rotational force perpendicular to long axis\n• Expands socket and severs PDL — does NOT grip tooth",
    application: "TECHNIQUE:\n1. Place buccal beak 3-4mm apical to CEJ\n2. Position bumper on palatal/lingual crestal bone\n3. Apply SLOW, steady rotational force (wrist rotation, not squeezing)\n4. Hold for 30-60 seconds — allow creep deformation of PDL and bone\n5. Continue rotation until tooth mobile\n6. Deliver with conventional forceps or continue physics rotation\n\n⚠ DO NOT SQUEEZE handles — this is NOT a grip forceps. It is a lever system.",
    evidence: "Per Abdelwahab 2021 SR (8 RCTs):\n• Buccal cortical plate fracture: significantly reduced (p=0.001) in one study\n• Gingival laceration: significantly reduced in 3 studies (all p≤0.032)\n• Pain day 1: significantly reduced (p≤0.03) in 3 studies\n• Bleeding: significantly reduced (p≤0.001) in 2 studies\n• Operating time: no significant difference\n• ⚠ High risk of bias in most studies\n\nPer Hariharan 2014 split-mouth RCT (54 premolars): lower pain (VAS 0.59 vs 1.04, p=0.03) but no other significant differences.",
    notes: "Best for: esthetic zone extractions requiring buccal plate preservation, socket preservation cases, minimally invasive approach. The key is SLOW, SUSTAINED rotational force — not squeezing.",
    refs: ["abdelwahab-2021-physics", "hariharan-2014-physics"]
  },
  {
    id: "elevators-straight-cryer", name: "Straight & Cryer Elevators", mfr: "N/A — Instruments", cat: "Elevator — Luxation",
    framework: "STRAIGHT ELEVATOR (301/Coupland):\n• Single working end, used for initial luxation\n• Insert into PDL space, apply apical + rotational force\n• Use ALVEOLAR BONE as fulcrum — never adjacent tooth\n\nCRYER ELEVATOR (East/West paired):\n• Concave tip designed to engage root surface\n• Right and left versions for different root positions\n• For retained roots after crown removal",
    application: "STRAIGHT ELEVATOR LUXATION:\n1. Insert elevator into mesial or distal PDL space\n2. Apply apical pressure while rotating handle\n3. Work circumferentially around tooth\n4. ⚠ NEVER use adjacent tooth as fulcrum\n5. Use alveolar bone ridge as fulcrum point\n\nCRYER FOR RETAINED ROOTS:\n1. Identify root position radiographically\n2. Create purchase point with small round bur if needed\n3. Insert elevator between root and buccal bone\n4. Apply rotational force to elevate occlusally\n5. ⚠ Avoid excessive apical pressure",
    evidence: "Elevators are essential adjuncts to forceps extraction. Initial luxation with elevators followed by forceps delivery reduces force required and tissue trauma.",
    notes: "ROOT TIP DECISION: Retrieve if >3mm, in esthetic zone, associated with pathology, or mobile. May LEAVE if <3mm, deeply embedded, no pathology, and retrieval risks nerve/sinus damage — informed consent required.",
    refs: []
  },
];

// ═══════════════════════════════════════════════
// SURGICAL TECHNIQUES
// ═══════════════════════════════════════════════
export const SURGICAL_TECHNIQUES = [
  {
    id: "coronectomy", name: "Coronectomy — IAN Protection", mfr: "N/A — Technique", cat: "Surgical Technique — Third Molar",
    framework: "INTENTIONAL PARTIAL ODONTECTOMY: remove crown, retain roots to protect IAN.\n\nINDICATIONS:\n• IAN within 2mm on CBCT\n• Rood radiographic signs present (darkening/deflection of root, canal interruption/diversion)\n• Patient informed of alternative (complete extraction with higher nerve risk)\n\nCONTRAINDICATIONS:\n• Active infection/abscess\n• Mobile tooth\n• Caries extending into roots\n• Horizontal impaction (risk of root migration into IAN)\n• Cannot comply with follow-up",
    application: "TECHNIQUE:\n1. Standard flap elevation\n2. Decoronate tooth to 2-3mm BELOW crestal bone level\n3. Remove ALL enamel (prevents migration complications)\n4. Round sharp root edges with bur\n5. Irrigate socket thoroughly\n6. Allow blood clot to form over root surface\n7. Primary closure\n8. Follow-up radiograph at 6 months, then annually\n\nROOT MIGRATION: occurs in >90% of cases, mean 2.5-4.6mm, predominantly within 6-12 months. Chronic pain: 0% after 3 years. Bone regeneration: 3.2-3.5mm at distal of second molar.",
    evidence: "Per Kang 2025 MA (34 studies, 7115 teeth):\n• IAN injury: RR 0.1 (95% CI 0.0-0.2) — 90% risk reduction vs extraction\n\nPer Peixoto 2024 MA:\n• IAN injury: OR 0.14 (95% CI 0.06-0.30, p=0.0001) — 86% risk reduction\n• Dry socket: OR 0.38 (95% CI 0.13-1.09)\n• Re-intervention rate: OR 5.38 (95% CI 1.14-25.28) — higher than extraction\n\nPer Li 2025 review:\n• IAN injury: 0-0.65% (coronectomy) vs 3.7-19% (extraction)\n• Permanent deficit: 0.6% vs 0.9%",
    notes: "Coronectomy is the EVIDENCE-BASED approach for third molars with confirmed IAN proximity on CBCT. The trade-off is higher re-intervention rate (5.38x) but dramatically lower nerve injury risk.",
    refs: ["kang-2025-coronectomy", "peixoto-2024-coronectomy", "li-2025-coronectomy"]
  },
  {
    id: "piezosurgery-extraction", name: "Piezosurgery for Extraction", mfr: "Multiple manufacturers", cat: "Surgical Technique — Piezosurgery",
    framework: "ULTRASONIC BONE SURGERY:\n• Frequency: 25-29 kHz\n• Power: 50-70% cortical, 30-50% cancellous\n• Irrigation: continuous sterile saline 50-60 mL/min\n\nSELECTIVE CUTTING: cuts mineralized tissue ONLY — spares soft tissue (nerves, vessels, sinus membrane). Key advantage over rotary instruments.",
    application: "TECHNIQUE:\n1. Select appropriate tip (bone cutting for osteotomy, root separation for sectioning)\n2. Apply LIGHT, consistent pressure — let device cut\n3. Move tip in sweeping motions\n4. Do NOT force — excessive pressure reduces cutting efficiency\n5. Maintain continuous irrigation\n\nBEST FOR: third molars near IAN, sinus proximity, esthetic zone bone preservation, thin buccal plates",
    evidence: "Per Cicciù 2021 SR+TSA:\n• Surgery duration: significantly LONGER (strong evidence)\n• Pain: reduced (low evidence)\n• Trismus: reduced (low evidence)\n\nPer Badenoch-Jones 2016 MA (15 trials):\n• Facial swelling day 1: SMD -1.15 (p<0.05) — significantly reduced\n\nPer Erdem 2024 split-mouth RCT:\n• Edema: significantly reduced (p=0.0001)\n• Trismus: significantly reduced (p=0.0001)\n• Pain: significantly reduced\n• Bone healing: significantly better at 3 and 6 months\n\nTRADE-OFF: longer surgery time but better postop outcomes and bone preservation.",
    notes: "Piezosurgery takes longer but produces less swelling, less trismus, less pain, and better bone healing. Worth the extra time for complex cases, IAN proximity, and esthetic zone.",
    refs: ["cicciu-2021-piezo", "badenoch-jones-2016-piezo"]
  },
  {
    id: "atraumatic-extraction", name: "Atraumatic Extraction Protocol — Esthetic Zone", mfr: "N/A — Protocol", cat: "Surgical Technique — Atraumatic",
    framework: "PRINCIPLE: preserve buccal cortical plate integrity for implant placement and esthetic outcomes. Buccal plate in maxillary anterior is typically <1mm thick.\n\nINSTRUMENT OPTIONS:\n• Periotome: thin blade severs PDL fibers, minimal socket expansion\n• Luxator: sharper, wedging action — more expansion than periotome\n• Physics forceps: lever system, rotational force\n• Vertical extraction system (Benex): screw into root canal, vertical traction\n• Piezosurgery: selective bone cutting for precision",
    application: "FLAPLESS PROTOCOL (preferred for esthetic zone):\n1. NO incisions — preserve blood supply to buccal plate\n2. Periotome luxation — sever PDL circumferentially\n3. Minimal force extraction — physics forceps or vertical system\n4. Socket preservation — IMMEDIATE grafting\n5. Suture — cross-mattress if possible for primary closure\n\nVERTICAL EXTRACTION SYSTEM (Benex):\n1. Remove crown/access root canal\n2. Prepare canal to 1.5-2mm diameter\n3. Thread screw into canal (8-10mm for single-rooted)\n4. Attach to traction device\n5. Apply CONTROLLED vertical force over 2-5 minutes\n6. Monitor 2-3mm elevation before complete extraction",
    evidence: "Per Hong 2018 (323 teeth): vertical system success 85.4%, flap surgery reduced from 22% to 5.6% (75% reduction).\nPer Muska 2013 (111 teeth): overall 83% success; single-rooted 89% vs multi-rooted 43%.\n\nPeriotome RCT (30 premolars): no sig difference in dentinal microcracks vs conventional (p=0.424).\n\nAtraumatic extraction preserves buccal plate → better implant outcomes → better esthetics.",
    notes: "In the esthetic zone, the extra time for atraumatic extraction pays dividends in implant outcomes and soft tissue esthetics.",
    refs: ["hong-2018-vertical-extraction"]
  },
];

// ═══════════════════════════════════════════════
// SOCKET PRESERVATION (reference card — cross-ref perio for materials)
// ═══════════════════════════════════════════════
export const SOCKET_PRESERVATION = [
  {
    id: "socket-decision-algorithm", name: "Socket Preservation — Decision Algorithm", mfr: "N/A — Protocol", cat: "Socket Preservation — Decision",
    framework: "WHEN TO GRAFT:\n• Implant planned within 6 months → GRAFT\n• Esthetic zone (maxillary anterior) → ALWAYS GRAFT\n• Thin buccal plate (<1mm) → GRAFT\n• Molar socket (>5mm diameter) → GRAFT\n\nMAY NOT NEED GRAFT:\n• No implant planned\n• Posterior mandible with thick bone\n• Patient declines / cost prohibitive\n• Medical contraindications",
    application: "MATERIAL SELECTION (per network meta-analyses):\n\nHORIZONTAL WIDTH PRESERVATION (vs no graft):\n• Xenografts (Bio-Oss): 0.88mm preserved — GOLD STANDARD for dimensional stability\n• FDBA: 1.35mm preserved\n• PRF alone: 1.66mm preserved\n\nBUCCOLINGUAL WIDTH LOSS (less = better):\n• Xenografts: 1.3mm loss (best)\n• Allografts: 1.63mm\n• Alloplasts: 2.13mm\n• No graft: 2.79mm\n\nVITAL BONE FORMATION:\n• Alloplasts: 45.53% (most new bone)\n• No graft: 41.07%\n• Xenografts: 35.72%\n• Allografts: 29.93%\n\nBio-Oss = best dimensional stability but slowest resorption. Alloplasts = most vital bone but less dimensional stability.",
    evidence: "Per Canellas 2021 NMA (31 RCTs, 1088 patients): xenografts among best for ridge preservation.\nPer Canullo 2022 NMA (88 RCTs, 2805 patients): xenografts/allografts best for dimensional preservation; platelet concentrates best for new bone.\nPer Jambhekar 2015 SR (32 RCTs, 1354 sockets): comprehensive material comparison with histologic outcomes.",
    notes: "Cross-reference: Periodontics for specific graft products (Bio-Oss, FDBA, DFDBA) and membrane selection (Bio-Gide, CollaPlug, PRF).",
    refs: ["canellas-2021-socket-nma", "jambhekar-2015-socket", "yan-2025-prf-socket"]
  },
];

// ═══════════════════════════════════════════════
// PHARMACOLOGY — EXODONTIA
// ═══════════════════════════════════════════════
export const EXODONTIA_PHARM = [
  {
    id: "analgesic-protocol", name: "Post-Extraction Analgesic Protocol", mfr: "ADA 2024 Guideline", cat: "Pharmacology — Analgesics",
    framework: "FIRST-LINE: NSAIDs ± Acetaminophen (ADA 2024 Guideline)\n\nMOST EFFECTIVE (per Miroshnychenko 2023 NMA, 82 RCTs, 9095 participants):\n• Ibuprofen 400mg + Acetaminophen 1000mg = MOST EFFECTIVE overall\n• Ibuprofen 400mg alone = effective\n• Naproxen 400-440mg = effective\n\nOPIOIDS ARE NOT SUPERIOR:\n• Oxycodone 5mg, Codeine 60mg, Tramadol = NO BETTER THAN PLACEBO\n• Acetaminophen + Oxycodone 10mg = LESS effective than ibuprofen + APAP",
    application: "PRESCRIBING PROTOCOL:\n\nFirst choice: Ibuprofen 400mg + Acetaminophen 500-1000mg q6h PRN\nAlternative: Naproxen 440mg + Acetaminophen 500mg q8-12h PRN\nDuration: 3-5 days typically sufficient\n\nMAXIMUM DAILY DOSES:\n• Ibuprofen: 2400mg\n• Naproxen sodium: 1100mg\n• Acetaminophen: 4000mg (3000mg if liver risk)\n\n⚠ DO NOT prescribe opioids as first-line for dental pain. The evidence does not support it.",
    evidence: "Per OARS RCT (Feldman 2025, 1815 patients):\n• Ibuprofen 400mg + APAP 500mg vs Hydrocodone 5mg + APAP 300mg\n• Pain scores: significantly LOWER with nonopioid on days 1-2\n• Patient satisfaction: HIGHER with nonopioid\n• Rescue medication: LESS with nonopioid\n\nPer ADA 2024 Guideline (Carrasco-Labra): NSAIDs + APAP recommended as first-line for acute dental pain in adolescents, adults, and older adults.",
    notes: "Ibuprofen + acetaminophen is SUPERIOR to any opioid combination for dental pain. This is now the standard of care per ADA guidelines.",
    refs: ["miroshnychenko-2023-pain-nma", "feldman-2025-oars", "carrasco-labra-2024-ada-pain"]
  },
  {
    id: "dexamethasone-protocol", name: "Dexamethasone for Third Molar Surgery", mfr: "N/A — Protocol", cat: "Pharmacology — Dexamethasone",
    framework: "OPTIMAL PROTOCOL (per Canellas 2022 NMA, 61 studies, 3561 subjects):\n\nDose: 8mg dexamethasone\nRoute: SUBMUCOSAL injection (highest probability of being most effective)\nTiming: PREOPERATIVE administration\n\nALTERNATIVES:\n• 4mg oral: effective for pain and swelling (reduced analgesic intake 5-fold per RCT)\n• 2mg submucosal: effective in patients <25 years",
    application: "ADMINISTRATION:\n\nSUBMUCOSAL (preferred):\n1. Draw up 8mg/2mL dexamethasone sodium phosphate\n2. Inject into buccal vestibule adjacent to surgical site\n3. Administer BEFORE incision\n\nORAL (alternative):\n1. 4-8mg dexamethasone tablet\n2. Take 1 hour before surgery\n3. May repeat 4mg day 2 if significant swelling expected\n\nSingle perioperative dose: NO increased infection risk (Cochrane 2018: OR 1.01, 95% CI 0.80-1.27).",
    evidence: "Per Canellas 2022 NMA:\n• Edema reduction: dexamethasone 8mg submucosal = best (SMD -3.58)\n• Pain reduction day 1: SMD -30.95\n• Pain reduction day 2: SMD -15.25\n• Ranking: highest probability of being most effective among all corticosteroid protocols\n\n⚠ Monitor glucose in diabetic patients — single dose causes transient hyperglycemia.",
    notes: "8mg dexamethasone submucosal preoperatively is the evidence-based standard for third molar surgery. The data strongly supports routine use.",
    refs: ["canellas-2022-dexa-nma"]
  },
  {
    id: "antibiotic-extraction", name: "Antibiotics for Extraction — When Indicated", mfr: "Cochrane 2021", cat: "Pharmacology — Antibiotics",
    framework: "COCHRANE 2021 (23 trials, 3206 participants):\n\nInfection prevention: RR 0.34 (66% reduction), NNT = 19\nDry socket prevention: RR 0.66 (34% reduction), NNT = 46\nAdverse effects: RR 1.46 (mild, transient)\nCertainty: LOW-QUALITY evidence\n\n⚠ NOT routinely indicated for healthy patients or simple extractions.",
    application: "INDICATIONS FOR ANTIBIOTICS:\n• Immunocompromised patients\n• Extensive bone removal\n• Prolonged surgery (>45 minutes)\n• Signs of infection\n• NOT routine for healthy patients\n\nWHEN PRESCRIBED:\n• Amoxicillin 500mg TID × 5-7 days (first-line)\n• Clindamycin 300mg QID × 5-7 days (PCN allergy)\n• Metronidazole 500mg TID × 5 days (alternative)\n\nPERICORONITIS: 75% of dentists prescribe antibiotics but ZERO RCTs support routine use (Schmidt 2021, Leroy 2022). Local treatment is first-line.",
    evidence: "Per Lodi 2021 Cochrane: antibiotics reduce infection after extraction but NNT=19. Most infections are mild and self-limiting.\nPer Schmidt 2021: pericoronitis antibiotics are overprescribed — local treatment (irrigation, debridement) should be first-line.\nPer Leroy 2022: ZERO RCTs evaluating antibiotics vs local treatment for pericoronitis.",
    notes: "Default to NO antibiotics for routine extractions in healthy patients. Reserve for immunocompromised, extensive surgery, or signs of infection.",
    refs: ["lodi-2021-abx-cochrane", "schmidt-2021-pericoronitis", "leroy-2022-pericoronitis-cochrane"]
  },
];

// ═══════════════════════════════════════════════
// COMPLICATIONS
// ═══════════════════════════════════════════════
export const COMPLICATIONS = [
  {
    id: "dry-socket", name: "Dry Socket (Alveolar Osteitis)", mfr: "N/A — Complication", cat: "Complication — Dry Socket",
    framework: "INCIDENCE: 1-5% routine, up to 30% surgical third molars\n\nRISK FACTORS:\n• Smoking (OR 2-4)\n• Oral contraceptives\n• Mandibular molars (highest risk location)\n• Traumatic extraction\n• Poor oral hygiene\n• History of dry socket\n\nDIAGNOSIS: 2-5 days post-extraction, severe throbbing pain, exposed bone in socket, foul odor/taste, pain radiating to ear/temple",
    application: "MANAGEMENT:\n1. Gentle irrigation with warm saline or CHX (do NOT curette — causes more damage)\n2. Place medicated dressing:\n   • Alvogyl (most commonly used — butamben + eugenol + iodoform)\n   • Iodoform gauze strip (change every 1-2 days)\n   • SaliCept patch (alternative)\n3. Analgesics: ibuprofen 400-600mg + acetaminophen 500-1000mg\n4. Follow-up in 2-3 days for dressing change\n5. Resolution typically within 7-10 days\n\nPREVENTION:\n• CHX 0.12% rinse pre-extraction (reduces AO by 51% per Canullo 2020 MA)\n• PRF in socket\n• Avoid smoking 48-72 hours\n• Gentle surgical technique",
    evidence: "Per Daly 2022 Cochrane: local interventions for alveolar osteitis management. Alvogyl is most widely used but evidence is limited.\n\nPer Canullo 2020 MA with TSA: CHX reduces AO by 51% (RR=0.49, 95% CI 0.40-0.60). Strong evidence for pre-extraction CHX rinse.",
    notes: "Prevention is better than treatment. CHX pre-rinse is the best-supported preventive measure. Smoking cessation counseling before extraction.",
    refs: ["daly-2022-drysocket-cochrane"]
  },
  {
    id: "oac-management", name: "Oroantral Communication (OAC/OAF)", mfr: "N/A — Complication", cat: "Complication — OAC/OAF",
    framework: "DIAGNOSIS:\n• Valsalva test: patient pinches nose and blows — air bubbles in socket\n• Nose blow test: air/fluid from socket\n• Direct visualization of sinus\n\nSIZE-BASED ALGORITHM:\n<2mm: spontaneous closure expected (~90%)\n2-3mm: suture socket, gelatin sponge — 60% with suture alone\n3-5mm: immediate closure — buccal advancement flap (65%) OR PRF plug (100%)\n5-10mm: buccal fat pad flap (100%) or palatal rotation flap (81%)\n>10mm: double-layer closure or REFER",
    application: "PRF PLUG TECHNIQUE (for acute OAC 3-5mm):\n1. Prepare 2-4 PRF clots\n2. Clean socket with sterile saline\n3. Compress PRF into membranes\n4. Layer into socket covering OAC\n5. Suture to surrounding gingiva (4-0 resorbable)\n6. No primary flap closure needed\n\nBUCCAL FAT PAD FLAP (5-10mm):\n1. Horizontal incision posterior to zygomatic buttress\n2. Blunt dissection through buccinator to expose fat pad\n3. Rotate fat pad to cover defect\n4. Suture to palatal mucosa (3-0 resorbable)\n5. Fat pad epithelializes in 2-3 weeks\n6. Success rate: 100% in multiple studies, even in immunocompromised\n\nPOSTOP Rx: amoxicillin-clavulanate 875/125mg BID × 7-10d, nasal decongestant spray × 5d, saline rinse BID × 2-4wk, nasal steroid spray × 2-4wk",
    evidence: "Per Bilginaylar 2018: PRF plug 100% success (21/21 patients) for acute OAC >3mm.\nPer Bereczki-Temistocle 2022: buccal fat pad 0% relapse vs buccal flap 35% relapse.\n\n⚠ PATIENT INSTRUCTIONS: avoid nose blowing, sneeze with mouth open, no straws, no smoking. Complete full antibiotic course.",
    notes: "Buccal fat pad flap is the most reliable closure technique for medium-large OAC. PRF plug is minimally invasive and excellent for smaller communications. Refer if >10mm or failed primary closure.",
    refs: ["bilginaylar-2018-prf-oac"]
  },
  {
    id: "pericoronitis-management", name: "Pericoronitis — Management Decision Matrix", mfr: "N/A — Protocol", cat: "Complication — Pericoronitis",
    framework: "SEVERITY CLASSIFICATION:\n\nMILD: localized gingival inflammation, mild pain, no trismus, no systemic symptoms\nMODERATE: moderate pain, mild trismus, purulent discharge, regional lymphadenopathy\nSEVERE: significant trismus (>20mm reduction), facial swelling, dysphagia, fever, fascial space involvement",
    application: "MANAGEMENT BY SEVERITY:\n\nMILD: local treatment ONLY — irrigation with CHX/saline under operculum, debridement, OHI. NO antibiotics. Elective extraction 2-4 weeks after resolution.\n\nMODERATE: irrigation + debridement. Antibiotics ONLY if no improvement at 48h. Semi-urgent extraction 1-2 weeks after acute phase.\n\nSEVERE: irrigation, I&D if abscess, antibiotics INDICATED, urgent referral if fascial space involvement. Extraction after acute infection controlled (5-7 days).\n\nRECURRENT (≥2 episodes): definitive extraction recommended.\n\n⚠ DO NOT EXTRACT DURING ACUTE PHASE — increased infection spread risk, poor anesthesia, increased bleeding.\n\nANTIBIOTIC SELECTION (when indicated):\n1st line: Amoxicillin 500mg TID × 5-7d\nAlt: Metronidazole 500mg TID × 5d\nSevere: Amox-clav 875/125mg BID × 7d\nPCN allergy: Clindamycin 300mg QID × 5-7d (⚠ C. difficile risk)",
    evidence: "Per Schmidt 2021: 75% of dentists prescribe antibiotics for pericoronitis — this is NOT evidence-based. ZERO RCTs support routine antibiotic use.\nPer Leroy 2022 (Cochrane-style SR): ZERO trials evaluating antibiotics vs no antibiotics found.\n\nKEY POINTS:\n1. Local treatment is first-line for mild-moderate\n2. Antibiotics are overprescribed — no evidence supports routine use\n3. Definitive treatment is EXTRACTION, not antibiotics or operculectomy\n4. Do not extract during acute phase",
    notes: "This is one of the most commonly overtreated conditions in dentistry. Local treatment first. Reserve antibiotics for severe cases with systemic involvement.",
    refs: ["schmidt-2021-pericoronitis", "leroy-2022-pericoronitis-cochrane"]
  },
];

export const ALL_ORALSURG_PRODUCTS = [
  ...FORCEPS,
  ...SURGICAL_TECHNIQUES,
  ...SOCKET_PRESERVATION,
  ...EXODONTIA_PHARM,
  ...COMPLICATIONS,
];
