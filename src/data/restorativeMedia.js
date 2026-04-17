// ============================================================
// WTFIFU — Restorative Dentistry Curated Media
// ============================================================
// Follows same pattern as restorativeData.js
// Each entry = one specific episode/video/article (NOT channels)
//
// VETTING CRITERIA:
//   1. Presenter has peer-reviewed publications OR faculty appointment
//      OR documented recognized clinical expertise
//   2. Content freely accessible (no paywall)
//   3. No undisclosed industry sponsorship
//   4. Does not contradict SR/MA evidence without acknowledging controversy
//
// TAB_CONFIG for media (handled in LearnBrowser):
//   summary   → what the episode covers + why it matters
//   takeaways → specific clinical pearls, protocols, decision points
//   context   → presenter credentials + disclosures
// ============================================================

// --- CITATIONS ---
export const RESTORATIVE_MEDIA_CIT = {
  "magne-2002-biomimetic-book": {
    pmid: null,
    title: "Bonded Porcelain Restorations in the Anterior Dentition — A Biomimetic Approach",
    authors: "Magne P, Belser U",
    journal: "Quintessence Publishing",
    year: 2002,
    grade: "STRONG"
  },
  "magne-2021-biomimetic-2nd": {
    pmid: null,
    title: "Biomimetic Restorative Dentistry — 2nd Edition (2 volumes, 888 pages)",
    authors: "Magne P, Belser U",
    journal: "Quintessence Publishing",
    year: 2021,
    grade: "STRONG"
  },
  "mclaren-zirconia-bond-hydrolysis": {
    pmid: null,
    title: "Long-term zirconia bond degradation — MDP primer cement hydrolysis at 10-12 years (lecture data)",
    authors: "McLaren EA",
    journal: "Clinical lecture / Protrusive Dental Podcast",
    year: 2022,
    grade: "MODERATE"
  },
  "gerdolle-dme-protocols": {
    pmid: null,
    title: "Deep margin elevation protocols and adhesive bonding principles for partial-coverage restorations",
    authors: "Gerdolle D",
    journal: "Clinical lecture / Protrusive Dental Podcast",
    year: 2021,
    grade: "MODERATE"
  },
  "lawson-2016-pbrn-material-selection": {
    pmid: "27693758",
    title: "Dentist material selection for single-unit crowns — National Dental PBRN findings",
    authors: "Makhija SK, Lawson NC, Gilbert GH, et al.",
    journal: "J Dent",
    year: 2016,
    grade: "STRONG"
  },
  "menees-2014-hf-lithium-disilicate": {
    pmid: "24952767",
    title: "Influence of particle abrasion or HF etching on lithium disilicate flexural strength",
    authors: "Menees TS, Lawson NC, Beck PR, Burgess JO",
    journal: "J Prosthet Dent",
    year: 2014,
    grade: "MODERATE"
  },
  "blatz-2018-apc-zirconia-bonding": {
    pmid: "30299107",
    title: "Cementation and Bonding of Zirconia Restorations — the APC concept",
    authors: "Blatz MB, Alvarez M, Sawyer K, Brindis M",
    journal: "Compend Contin Educ Dent",
    year: 2018,
    grade: "STRONG"
  },
  "alammar-blatz-2022-hi-translucent-zirconia": {
    pmid: null,
    title: "Systematic review — resin bonding to high-translucent zirconia maintains efficacy of conventional MDP protocols",
    authors: "Alammar A, Blatz MB",
    journal: "J Esthet Restor Dent (systematic review)",
    year: 2022,
    grade: "STRONG"
  },
  "van-meerbeek-buonocore-2020": {
    pmid: null,
    title: "State of the art of dental adhesives — Buonocore Memorial Lecture (foundational review)",
    authors: "Van Meerbeek B, Yoshihara K, Van Landuyt K, Yoshida Y, Peumans M",
    journal: "J Adhes Dent",
    year: 2020,
    grade: "STRONG"
  },
  "yoshida-mdp-hydroxyapatite-2012": {
    pmid: "22398808",
    title: "Self-assembled nano-layering at the adhesive interface — MDP–hydroxyapatite chemistry",
    authors: "Yoshida Y, Yoshihara K, Nagaoka N, et al. (Van Meerbeek group)",
    journal: "J Dent Res",
    year: 2012,
    grade: "STRONG"
  },
  "pashley-mmp-inhibition-chx": {
    pmid: null,
    title: "MMP inhibition by chlorhexidine preserves hybrid layer integrity over time",
    authors: "Pashley DH, Tay FR, Breschi L, et al.",
    journal: "Dent Mater",
    year: 2011,
    grade: "STRONG"
  },
  "breschi-hybrid-layer-degradation": {
    pmid: null,
    title: "Dental adhesion review — hybrid layer degradation mechanisms and preservation strategies",
    authors: "Breschi L, Maravic T, Cunha SR, Comba A, Cadenaro M, Tjaderhane L, Pashley DH, Tay FR, Mazzoni A",
    journal: "Dent Mater",
    year: 2018,
    grade: "STRONG"
  },
  "sulaiman-universal-adhesives-review": {
    pmid: null,
    title: "Universal adhesives — clinical performance and technique sensitivity considerations",
    authors: "Sulaiman TA et al.",
    journal: "Operative Dentistry / J Esthet Restor Dent",
    year: 2022,
    grade: "MODERATE"
  },
  "renne-milling-accuracy-studies": {
    pmid: null,
    title: "Scan and milling accuracy across CAD/CAM systems (>50 published studies)",
    authors: "Renne W, Ludlow M, Fryml J, et al.",
    journal: "Various peer-reviewed journals",
    year: 2024,
    grade: "MODERATE"
  },
  "ferracane-2011-composite-state-of-art": {
    pmid: "21093034",
    title: "Resin composite — state of the art (foundational review)",
    authors: "Ferracane JL",
    journal: "Dent Mater",
    year: 2011,
    grade: "STRONG"
  },
  "price-light-curing-review-2014": {
    pmid: null,
    title: "Light curing in dentistry — narrative review of photoinitiators, radiometers, and technique",
    authors: "Price RBT, Ferracane JL, Shortall AC",
    journal: "Dent Mater",
    year: 2015,
    grade: "STRONG"
  },
  "price-polywave-lights-2014": {
    pmid: null,
    title: "Light emission characteristics of polywave (multi-peak) LED curing units — implications for alternative photoinitiators",
    authors: "Price RBT, et al.",
    journal: "J Dent",
    year: 2014,
    grade: "MODERATE"
  },
  "lawson-omnichroma-structural-color": {
    pmid: null,
    title: "Optical performance of single-shade composites utilizing structural color (refractive index matching)",
    authors: "Lawson NC, et al.",
    journal: "Operative Dentistry / J Dent",
    year: 2021,
    grade: "MODERATE"
  },
  "dietschi-natural-layering-2006": {
    pmid: null,
    title: "Layering concepts for anterior composites — the Natural Layering Concept (developer paper)",
    authors: "Dietschi D",
    journal: "Pract Proced Aesthet Dent / Int J Esthet Dent",
    year: 2006,
    grade: "MODERATE"
  },
  "dietschi-fahl-2016-layering": {
    pmid: null,
    title: "Shading concepts and layering techniques for direct anterior composite restorations — updated clinical guidelines",
    authors: "Dietschi D, Fahl N Jr.",
    journal: "Br Dent J",
    year: 2016,
    grade: "MODERATE"
  },
  "opdam-posterior-composite-12yr": {
    pmid: null,
    title: "12-year survival of posterior direct composite restorations — longevity predictors",
    authors: "Opdam NJM, Bronkhorst EM, Roeters JM, Loomans BAC",
    journal: "Dent Mater",
    year: 2010,
    grade: "STRONG"
  }
};

// --- MEDIA ENTRIES ---
export const RESTORATIVE_MEDIA = [
  {
    id: "pdp221-magne-occlusal-veneers",
    name: "Occlusal Veneers and Material Selection with Pascal Magne",
    source: "Protrusive Dental Podcast — PDP221",
    cat: "Glass-Ceramics",
    lastReviewed: "2025-04",
    format: "podcast",
    platform: "YouTube / Spotify / Apple Podcasts",
    url: "https://youtu.be/WTsF1mD-nTo",
    duration: 85,
    presenter: {
      name: "Dr. Pascal Magne",
      credentials: "DMD, PhD — University of Geneva. Associate Professor, USC Ostrow School of Dentistry. Director, Center for Esthetic Dentistry. 100+ peer-reviewed articles.",
      affiliation: "University of Southern California / Magne Education"
    },
    host: "Dr. Jaz Gulati — BDS (Hons), MFDS RCPS, PgCert DentEd, PgDip Orth",
    tags: ["deep-dive", "material-selection", "IDS", "cementation", "indirect-composite", "adhesive-protocol"],
    mapTo: ["restorative/bonding-agents", "restorative/cad-cam-ceramics", "restorative/indirect-restorations"],
    summary: "Magne walks through occlusal veneer indications for worn and root-filled molars, arguing that indirect composite at 0.6mm thickness provides damping behavior that protects remaining root structure — a property ceramic and zirconia lack. Full bonding protocol covered step-by-step: air abrasion, IDS with high-fill flowable, silane activation with heat (30s react → air dry → 60s heat source), and cementation with preheated composite. Addresses the composite-vs-ceramic decision matrix with fatigue testing data showing composite's stress distribution advantage in specific scenarios. Direct challenge to the 'lithium disilicate for everything' mentality with nuanced material selection guidance.\n\nReferenced studies: IDS effects on aging/fracture strength of LS2 inlays/overlays, short-fiber reinforced MOD restorations for undermined cusps, ultrathin CAD/CAM occlusal veneers for erosion.",
    takeaways: "• Silane protocol: apply → 30s reaction time → air dry → 60s heat activation (hair dryer). Skipping the heat step significantly reduces bond strength — most IFUs omit this.\n• Occlusal composite veneers as thin as 0.6mm are viable when properly bonded — the damping behavior absorbs stress that would otherwise concentrate at the root.\n• Indirect composite outperforms ceramic for root-filled posterior teeth because it allows controlled failure at the restoration level rather than catastrophic root fracture.\n• IDS is not optional for indirect adhesive restorations — it is the single most impactful protocol step for long-term survival.\n• For endodontically treated molars: composite overlay > ceramic overlay > post-and-crown in most scenarios.\n• Cross-reference: WTFIFU Cementation enrichment data for LS2/ZLS surface treatment protocols.",
    context: "Pascal Magne — PhD in biomaterials (Geneva, 2002), full-time research scholar at University of Minnesota (1997-1999), USC faculty since 2004. Author of Bonded Porcelain Restorations (2002, translated into 12 languages) and Biomimetic Restorative Dentistry 2nd edition (2021, 888 pages). Over 100 peer-reviewed publications in adhesive and esthetic dentistry.\n\nHost Jaz Gulati — BDS with Clinical Distinction (Sheffield 2013), MFDS RCPS Glasgow, restorative DCT posts at Guy's Hospital and Charles Clifford. Published in Dental Update. Protrusive Dental Podcast reaches 150+ countries.\n\nIndustry disclosure: Magne is Director of Magne Education at Beverly Hills Dental Lab (since 2022). Episode is not industry-sponsored.",
    notes: "Available on YouTube with clinical photography and case visuals. Full transcript available on protrusive.co.uk. CE credit available via Protrusive Guidance app (1.25 credits).",
    refs: ["magne-2002-biomimetic-book", "magne-2021-biomimetic-2nd"]
  },

  {
    id: "pdp117-mclaren-dental-ceramics",
    name: "Which Ceramic Should I Use? — Material Selection with Ed McLaren",
    source: "Protrusive Dental Podcast — PDP117",
    cat: "Zirconia",
    lastReviewed: "2022-06",
    format: "podcast",
    platform: "YouTube / Spotify / Apple Podcasts",
    url: "https://youtu.be/ZR-V-ekhMv0",
    duration: 60,
    presenter: {
      name: "Dr. Ed McLaren",
      credentials: "DDS, MDC — UCLA School of Dentistry faculty. Founded UCLA Center for Esthetic Dentistry. Internationally recognized authority on dental ceramics, zirconia translucency, and ceramic classification systems.",
      affiliation: "UCLA School of Dentistry"
    },
    host: "Dr. Jaz Gulati — BDS (Hons), MFDS RCPS, PgCert DentEd, PgDip Orth",
    tags: ["deep-dive", "ceramic-classification", "zirconia", "lithium-disilicate", "feldspathic", "material-selection"],
    mapTo: ["restorative/cad-cam-ceramics", "restorative/cementation", "prosth/ceramic-materials"],
    summary: "Ed McLaren covers the full ceramic material landscape: feldspathic viability given declining lab technician skills, composite vs ceramic veneers, the APC (airborne-particle abrasion, primer, cement) protocol for zirconia, posterior zirconia onlays, eMax vs GC LiSi comparison, and the three main zirconia types (3Y, 4Y, 5Y). McLaren shares a critical long-term observation — after 10-12 years, MDP-primed zirconia crowns began failing from cement hydrolysis, raising questions about polycrystalline ceramic bonding durability. His position: lithium disilicate remains the gold standard for partial coverage because it can be reliably etched for micromechanical retention. Zirconia is appropriate for full-coverage where retention/resistance form supplements the bond.\n\nAlso covers: wear case protocols, when monolithic zirconia vs layered is appropriate, and why zirconia veneers remain inadvisable despite marketing pressure.",
    takeaways: "• Lithium disilicate (eMax, LiSi) remains king for partial-coverage — reliable HF etch creates true micromechanical bond that zirconia cannot match.\n• Three types of zirconia: 3Y-TZP (strongest, most opaque), 4Y-PSZ (balanced), 5Y-PSZ (most translucent, weakest). Match selection to clinical scenario, not marketing.\n• MDP primer on zirconia creates a chemical bond only — no micromechanical interlock. Observed clinical bond degradation at 10-12 years from cement hydrolysis.\n• For posterior with good enamel margins → lithium disilicate onlay. Posterior with compromised enamel → zirconia full coverage with retention form.\n• Zirconia partial-coverage restorations (onlays, veneers) are NOT recommended despite emerging trend.\n• Feldspathic porcelain veneers still produce the best esthetics — the limiting factor is lab technician availability, not the material.\n• Downloadable 1-page ceramic indications cheat sheet available on protrusive.co.uk.\n• Cross-reference: WTFIFU zirconia cementation data — 50µm mandatory for 5Y-TZP, RMGI non-inferior for full-coverage.",
    context: "Ed McLaren — DDS, MDC. UCLA School of Dentistry faculty. Founded the UCLA Center for Esthetic Dentistry. Published extensively on zirconia optical properties, ceramic classification, and cementation protocols. One of the most-cited authorities on dental ceramic material science. His ceramic classification system is widely adopted.\n\nIndustry disclosure: McLaren has consulted for multiple ceramic manufacturers. Disclosed at episode start. Content represents his independent clinical and research positions.",
    notes: "YouTube version includes ceramic comparison charts. Free 1-page indications summary downloadable from show notes.",
    refs: ["mclaren-zirconia-bond-hydrolysis"]
  },

  {
    id: "pdp077-gerdolle-extreme-bonding",
    name: "Extreme Bonding Exposed — Deep Margin Elevation & Adhesive Principles",
    source: "Protrusive Dental Podcast — PDP077",
    cat: "Bonding Agents",
    lastReviewed: "2021-07",
    format: "podcast",
    platform: "YouTube / Spotify / Apple Podcasts",
    url: "https://protrusive.co.uk/extreme-bonding",
    duration: 70,
    presenter: {
      name: "Dr. David Gerdolle",
      credentials: "Swiss dentist and educator in adhesive and restorative dentistry. Trained in the Magne/Dietschi tradition. Internationally recognized for deep margin elevation protocols and conservative adhesive restorations.",
      affiliation: "Private practice (Switzerland) / International lecturer"
    },
    host: "Dr. Jaz Gulati — BDS (Hons), MFDS RCPS, PgCert DentEd, PgDip Orth",
    tags: ["technique-focused", "deep-margin-elevation", "bonding-protocol", "adhesive-science", "onlay-cementation"],
    mapTo: ["restorative/bonding-agents", "restorative/indirect-restorations", "restorative/cementation"],
    summary: "David Gerdolle covers the foundational science of why flat, retentionless table-top onlays stay bonded — and what you must get right for them to work. Core principle: the substrate must be clean and rough. Walks through deep margin elevation (DME) step-by-step — a technique conceived by Dietschi and Magne ~25 years ago as an alternative to crown lengthening for subgingival proximal caries. DME preserves the papilla permanently by bringing the margin supragingivally with composite before taking the indirect impression, rather than surgically removing bone and soft tissue.\n\nCovers: matrix placement for DME acquisition, rubber dam interaction with deep margins, magnification requirements, and the IDS/DME sequencing question. Clinical photos on YouTube version show each step at 15x magnification.",
    takeaways: "• The 2 requirements for reliable adhesive bonding: CLEAN and ROUGH. If you remember nothing else from your bonding protocol, remember that.\n• Deep margin elevation saves the papilla — crown lengthening for proximal caries permanently destroys the papilla and creates a food trap. DME avoids this by compositing the margin to a supragingival position.\n• Table-top onlays with no retention form work IF: circumferential enamel is present, IDS is performed, and cementation protocol is meticulous.\n• For ultrathin ceramics (0.3-0.5mm) seen on Instagram — these only work when bonded on enamel. Inadequate thickness on dentin = failure.\n• Composite thickness under the ceramic: 0.5mm is sufficient for stress dampening. No difference in tooth stress whether composite base is 0.5mm or 5mm.\n• DME sequence: rubber dam → matrix placement → acquire deep margin → composite buildup → then proceed with onlay prep and impression.\n• Cross-reference: WTFIFU bonding agent generation cards, cementation protocol enrichment.",
    context: "David Gerdolle — Swiss clinician and educator with extensive training in the Dietschi/Magne school of adhesive dentistry. Known internationally for systematic DME protocols. Not primarily an academic researcher but a highly regarded clinical educator whose protocols are evidence-informed and widely adopted.\n\nIndustry disclosure: None identified for this episode.",
    notes: "PDF of DME steps available by contacting Protrusive Dental via Instagram. YouTube version has clinical photography at high magnification. Pairs well with PDP059 (Nik Sethi — ceramic onlay full protocol) and PDP161 (adhesive onlay geek discussion).",
    refs: ["gerdolle-dme-protocols"]
  },

  {
    id: "pdp173-ids-tutorial-part1",
    name: "Immediate Dentine Sealing Tutorial — Step-by-Step Clinical Protocol",
    source: "Protrusive Dental Podcast — PDP173",
    cat: "Substrate Protocols",
    lastReviewed: "2023-12",
    format: "podcast",
    platform: "YouTube / Spotify / Apple Podcasts",
    url: "https://protrusive.co.uk/immediatedentinesealing",
    duration: 55,
    presenter: {
      name: "Dr. Zahid Sheikh",
      credentials: "UK-based restorative dentist specializing in adhesive and indirect restorative techniques.",
      affiliation: "Private practice (UK)"
    },
    host: "Dr. Jaz Gulati — BDS (Hons), MFDS RCPS, PgCert DentEd, PgDip Orth",
    tags: ["technique-focused", "IDS", "bonding-protocol", "step-by-step", "foundational"],
    mapTo: ["restorative/bonding-agents", "restorative/indirect-restorations"],
    summary: "Dedicated tutorial on Immediate Dentin Sealing — the single most impactful protocol step for indirect adhesive restoration longevity. Covers the history of IDS (Magne's original concept and literature), clinical step sequence, IDS layer thickness control, enamel refinement after sealing, preventing temporaries from bonding to the sealed surface, liquid dam technique for temporisation, and removal of temporary restorations without damaging the IDS layer.\n\nThis is the 'how-to' companion to the 'why' covered in PDP221 (Magne) and PDP077 (Gerdolle). Part 2 covers IDS reactivation at the cementation appointment.",
    takeaways: "• IDS = seal freshly cut dentin immediately after prep, BEFORE impression/scan. Do not wait until cementation day.\n• Layer thickness matters — too thick creates seating problems. Use a high-fill flowable (e.g., G-aenial Injectable) applied thinly.\n• Prevent temp adhesion to IDS: glycerin gel or petroleum jelly on the sealed surface before temporary fabrication.\n• Air abrasion at prep stage for both cleaning and roughening — serves dual purpose for IDS adhesion.\n• Enamel refinement AFTER IDS — clean up enamel margins to ensure no adhesive resin on enamel (it interferes with final etch).\n• Liquid dam application for temporisation when using spot-etch temporary technique.\n• Part 2 covers reactivation: air abrasion of IDS surface at cementation, re-application of adhesive, then seat restoration.",
    context: "Dr. Zahid Sheikh — UK restorative dentist. While not a published academic researcher, his clinical protocols are directly informed by the Magne IDS literature and represent current best-practice application of that research.\n\nKey supporting literature: Magne P et al. — multiple papers on IDS showing improved fracture resistance and bond strength vs conventional delayed bonding.",
    notes: "Part 2 episode covers IDS reactivation. YouTube version includes clinical step photography. Pairs with PDP221 (Magne — why IDS matters) and PDP059 (Sethi — full onlay workflow including IDS).",
    refs: ["magne-2021-biomimetic-2nd"]
  },

  // ==========================================================
  // [ZIRCONIA] Entry: Blatz FOR.org zirconia lecture
  // ==========================================================
  {
    id: "for-blatz-demystifying-zirconia",
    name: "Demystifying Zirconia — Understanding the Material and Its Handling",
    source: "FOR.org (Foundation for Oral Rehabilitation) — Online Lecture",
    cat: "Zirconia",
    lastReviewed: "2024-09",
    format: "lecture",
    platform: "FOR.org (free account registration)",
    url: "https://www.for.org/en/learn/videos/markus-blatz-demystifying-zirconia-understanding-material-and-its-handling",
    duration: 55,
    presenter: {
      name: "Prof. Markus B. Blatz, DMD, PhD",
      credentials: "Professor and Chair, Department of Preventive and Restorative Sciences, University of Pennsylvania School of Dental Medicine. Founding Director, Penn Dental Medicine CAD/CAM Ceramic Center. Developed the APC zirconia-bonding concept.",
      affiliation: "University of Pennsylvania School of Dental Medicine"
    },
    host: "FOR.org (academic lecture — no host)",
    tags: ["deep-dive", "zirconia", "APC-concept", "cementation", "material-selection"],
    mapTo: ["restorative/zirconia", "restorative/cements", "restorative/surface-treatments"],
    summary: "Full academic lecture from Blatz covering zirconia material science, laboratory parameters, manufacturing differences between monolithic full-contour zirconia formulations, and why cementation/bonding protocols differ fundamentally from metal alloys and glass ceramics. Blatz walks through the physical, optical, and biologic properties that made zirconia dominant, then addresses the core clinical problem: zirconia lacks a glass phase, making hydrofluoric acid etching ineffective.\n\nThis is the definitive free lecture introducing the APC (Airborne-particle abrasion, Primer, Composite cement) zirconia-bonding concept — a protocol Blatz and colleagues developed from decades of research. Distinguishes between full-coverage restorations (conventional cementation acceptable) and partial-coverage/resin-bonded restorations (APC mandatory). Covers bilayer zirconia veneering ceramic selection and why unsupported layering ceramic chips.",
    takeaways: "• Zirconia's lack of glass phase makes HF etching ineffective — micromechanical bonding requires a different strategy.\n• APC Protocol: (A) Airborne-particle abrasion with 50µm Al₂O₃ at ~0.2 MPa, (P) MDP-containing zirconia Primer (e.g., Clearfil Ceramic Primer), (C) dual-cure or self-cure composite resin cement.\n• MDP monomer chemically bonds to the oxidized zirconia surface — sandblasting provides surface activation, not just roughening.\n• Full-coverage zirconia with adequate retention form: conventional cementation is acceptable — APC is not mandatory.\n• Partial-coverage restorations (onlays, RBFDPs): APC protocol is REQUIRED for clinical success.\n• High-translucent zirconia (4Y, 5Y-PSZ) is more susceptible to particle-abrasion damage above 90µm — stick to 50µm maximum.\n• Bilayer zirconia: unsupported layering ceramic chips. Design principles mirror PFM best practices.\n• Cross-reference: WTFIFU zirconia cementation data (50µm mandatory for 5Y-TZP, MDP primer essential, cement shade critical for high-translucency).",
    context: "Markus Blatz — DMD (Albert-Ludwigs University, Freiburg, Germany), PhD, Professorship. Penn Dental Medicine Chair. Founding Director, Penn Dental Medicine CAD/CAM Ceramic Center. Co-developed the APC concept (Compendium 2018). Co-authored 2022 systematic review confirming resin-bonding protocols remain effective for high-translucent zirconia.\n\nFOR.org (Foundation for Oral Rehabilitation) is an academic non-profit supported by Nobel Biocare but operating as an independent academic resource. Free account registration required.\n\nIndustry disclosure: Blatz has consulted for multiple ceramic and implant manufacturers. The APC protocol is not proprietary — it is a generic evidence-based concept applicable across manufacturers.",
    notes: "Free lecture requires FOR.org account registration (no paywall). Companion lecture on same platform: 'Fundamentals of Monolithic Zirconia Materials — Are They All the Same?' covers material differences between zirconia formulations in depth.",
    refs: ["blatz-2018-apc-zirconia-bonding", "alammar-blatz-2022-hi-translucent-zirconia"]
  },

  // ==========================================================
  // [ZIRCONIA] Entry: Blatz ADA NSW digital dentistry episode
  // ==========================================================
  {
    id: "adansw-blatz-embracing-digital",
    name: "Embracing Digital Dentistry — From Misinformation to Mastery",
    source: "The Dental Practitioner (ADA NSW) — Season 10, Episode 87",
    cat: "Zirconia",
    lastReviewed: "2024-11",
    format: "podcast",
    platform: "Apple Podcasts / ADA NSW",
    url: "https://podcasts.apple.com/us/podcast/the-dental-practitioner/id1479028524",
    duration: 45,
    presenter: {
      name: "Prof. Markus B. Blatz, DMD, PhD",
      credentials: "Professor and Chair, Penn Dental Medicine. Founding Director, Penn CAD/CAM Ceramic Center. Developer of APC zirconia-bonding concept. 100+ peer-reviewed publications on ceramics and adhesive dentistry.",
      affiliation: "University of Pennsylvania School of Dental Medicine"
    },
    host: "Australian Dental Association (NSW) — The Dental Practitioner Podcast",
    tags: ["deep-dive", "zirconia", "APC-concept", "misinformation", "evidence-evaluation", "CAD-CAM"],
    mapTo: ["restorative/zirconia", "restorative/cements"],
    summary: "Different framing from the FOR.org academic lecture — here Blatz addresses the rampant social media misinformation surrounding zirconia and digital dentistry. He explains why understanding the fundamental material science matters more than chasing the newest scanner or cement, and walks through the evidence base for APC zirconia-bonding protocols in a way pitched directly at practicing clinicians rather than academics.\n\nUseful companion to the FOR.org lecture because the delivery is conversational and Q&A-driven rather than didactic. Covers overlapping content (APC protocol, MDP primer chemistry, full-coverage vs partial-coverage decision points) but with more emphasis on 'how do I evaluate claims I see on Instagram' — a skill increasingly essential for GPs exposed to manufacturer marketing cycles.",
    takeaways: "• The APC protocol (Airborne-particle abrasion, Primer, Composite cement) remains the evidence-based foundation for zirconia bonding — unchanged across zirconia generations (3Y, 4Y, 5Y).\n• Social media claims often run ahead of peer-reviewed evidence by 5-10 years. Be skeptical of protocols that haven't been published.\n• Understanding WHY a protocol works (the material chemistry) protects you when manufacturers release new products with changed recommendations.\n• Digital workflow adoption doesn't replace fundamental material knowledge — it adds tools that still obey the same bonding rules.\n• High-translucent zirconia generations (4Y/5Y) have reduced strength — match material selection to clinical load, not marketing category.\n• Blatz's position: don't abandon proven protocols for trendy shortcuts; the science of adhesion is decades-mature for a reason.\n• Cross-reference: FOR.org lecture (academic companion), WTFIFU zirconia cementation enrichment data.",
    context: "Markus Blatz — see FOR.org entry for full credentials.\n\nThe Dental Practitioner is published by the Australian Dental Association (NSW branch). ADA NSW is a professional membership organization — the podcast is editorially independent and freely accessible (no paywall, no membership required). Different audience from US-focused media, which sometimes produces sharper takes on US-centric marketing trends.\n\nIndustry disclosure: Blatz's standard industry consulting disclosures apply; episode is not industry-sponsored.",
    notes: "Free on Apple Podcasts. Search 'The Dental Practitioner ADA NSW episode 87' or 'Embracing Digital Dentistry Blatz'. Different format/angle from the FOR.org lecture — the two together provide both the didactic academic framing and the practical clinician-facing framing of the same APC concepts.",
    refs: ["blatz-2018-apc-zirconia-bonding", "alammar-blatz-2022-hi-translucent-zirconia"]
  },

  // ==========================================================
  // [GLASS-CERAMICS] Entry: Lawson Very Clinical Onlays
  // ==========================================================
  {
    id: "veryclinical-lawson-onlays",
    name: "Dr. Nate Lawson is a Fan of Onlays (and Partial Coverage)",
    source: "Very Clinical Podcast — Very Dental Podcast Network",
    cat: "Glass-Ceramics",
    lastReviewed: "2023-10",
    format: "podcast",
    platform: "Apple Podcasts / Very Dental Podcast Network",
    url: "https://podcasts.apple.com/us/podcast/very-dental-podcast-network",
    duration: 55,
    presenter: {
      name: "Dr. Nate Lawson, DMD, PhD",
      credentials: "Director, Division of Biomaterials, University of Alabama at Birmingham (UAB) School of Dentistry. DMD (UAB, 2011), PhD Biomedical Engineering (UAB, 2012). 200+ peer-reviewed publications. Editorial board, Journal of Adhesive Dentistry and Compendium.",
      affiliation: "University of Alabama at Birmingham School of Dentistry"
    },
    host: "Very Clinical Podcast (Very Dental Podcast Network)",
    tags: ["deep-dive", "onlays", "partial-coverage", "material-selection", "prep-design", "lithium-disilicate"],
    mapTo: ["restorative/glass-ceramics", "restorative/substrate-protocols", "restorative/cements"],
    summary: "Lawson makes the case for partial-coverage restorations over full-coverage crowns wherever tooth structure permits. Discusses the mechanical and clinical merits of onlays using his biomaterials research perspective — fracture mechanics, fatigue testing data, bond durability with current generations of lithium disilicate and zirconia. Addresses the common failure modes of partial coverage (temp dislodgement, adhesive fatigue, margin staining) and how newer materials and bonding protocols have addressed them.\n\nPractical content includes prep design specifics (minimum thickness, cusp capping criteria, margin placement), temporization strategies, and the cement selection decision tree for different substrates. Lawson's framework prioritizes preserving tooth structure when the bonding conditions (enamel availability, isolation quality) support it.",
    takeaways: "• Partial-coverage restorations preserve tooth structure that full crowns unnecessarily remove — prep design should match biomechanical need, not habit.\n• Circumferential enamel is the success criterion for reliable adhesive bonding. When enamel is intact at margins, lithium disilicate onlays perform excellently long-term.\n• Minimum LS2 thickness: 1.5mm for occlusal surfaces under normal load, 2.0mm for bruxists.\n• Cusp capping indications: undermined cusp (residual dentin thickness <2mm), cracks extending into dentin, or dentin-only margins.\n• Temporization with spot-etch technique (isolated etch zone) allows retention without compromising the final bond.\n• Newer zirconia generations have expanded partial-coverage possibilities BUT lithium disilicate remains preferred when enamel is available (reliable HF etching vs zirconia's chemical-only MDP bond).\n• Heated composite cementation improves seating and reduces cement layer thickness — preferred over dual-cure resin cements for most partial-coverage cases.\n• Cross-reference: WTFIFU glass-ceramics and cementation enrichment data (5% HF 20s for LS2, NOT 10%).",
    context: "Nate Lawson — DMD/PhD from UAB, mentored under Dr. John Burgess. Director of Division of Biomaterials since 2016. 200+ publications. Serves on ADA Council of Scientific Affairs.\n\nThe Very Dental Podcast Network is hosted by Dr. Alan Mead and other practicing clinicians. Independent, not affiliated with industry. Mead is a practicing GP — episodes are conversational clinician-to-clinician format.\n\nIndustry disclosure: Lawson's UAB biomaterials lab performs industry-funded research disclosed in episode content.",
    notes: "Search Very Clinical feed for 'Nate Lawson onlays'. Free podcast, no paywall. Different angle from Lawson's Viva Learning zirconia episode — more clinical decision-making focused vs material science.",
    refs: ["lawson-2016-pbrn-material-selection", "menees-2014-hf-lithium-disilicate"]
  },

  // ==========================================================
  // [GLASS-CERAMICS] Entry: Smithson eMax Onlays + Vertipreps
  // ==========================================================
  {
    id: "pdp019-smithson-emax-vertipreps",
    name: "eMax Onlays and Vertipreps — Indications, IDS, DME, and Vertical Preparation",
    source: "Protrusive Dental Podcast — PDP019",
    cat: "Glass-Ceramics",
    lastReviewed: "2019-07",
    format: "podcast",
    platform: "YouTube / Spotify / Apple Podcasts",
    url: "https://protrusive.co.uk/emax-onlays-and-vertipreps-pdp019",
    duration: 90,
    presenter: {
      name: "Dr. Jason Smithson, BDS",
      credentials: "Internationally recognized restorative clinician and educator. Founder of Simply Smithson and the Art of Dentistry courses. Lectures extensively on adhesive dentistry, veneers, onlays, and vertical preparations. Active member of the American Academy of Cosmetic Dentistry (AACD) and Italian Academy of Aesthetic Dentistry (IAED).",
      affiliation: "Simply Smithson / Private practice (UK) / International lecturer"
    },
    host: "Dr. Jaz Gulati — BDS (Hons), MFDS RCPS, PgCert DentEd, PgDip Orth",
    tags: ["deep-dive", "lithium-disilicate", "onlays", "vertipreps", "IDS", "DME", "controversy"],
    mapTo: ["restorative/glass-ceramics", "restorative/substrate-protocols", "restorative/cements", "restorative/bonding-agents"],
    summary: "Mammoth 90-minute deep-dive covering the strict indications for lithium disilicate onlays, the full IDS and DME protocols, and a genuinely candid discussion of vertical preparations (BOPT/vertipreps) — including where they're appropriate and the controversy surrounding their overuse. Smithson's perspective is unusually valuable because he's executed both conventional and vertical preps at high volume across decades and is willing to discuss failure modes and limits.\n\nFirst half focuses on lithium disilicate onlay case selection, prep design, IDS as a non-negotiable step, deep margin elevation for subgingival caries, and heated composite cementation. Second half covers vertipreps — what they are (no finish line, subgingival placement, biologically oriented), when they work well (deep subgingival margins, poor enamel quality unsuitable for adhesive dentistry), and why they've become controversial (indication creep, digital scanning difficulties).",
    takeaways: "• Lithium disilicate onlay: minimum 1.5mm occlusal thickness, circumferential enamel preferred, IDS mandatory.\n• IDS creates a protected hybrid layer before the impression/scan — prevents salivary contamination of freshly cut dentin during temporization.\n• Deep margin elevation (DME): composite buildup to bring subgingival margins supragingival, avoiding crown lengthening and papilla loss.\n• Vertipreps (vertical preparations / BOPT): no finish line, biologically oriented, designed for cases where enamel quality precludes adhesive dentistry or margins are deeply subgingival.\n• Vertipreps require experience — Gulati and Smithson both caution against indication creep. 'Verticalists' who vertiprep every case have gone too far.\n• For onlays with good enamel: adhesive onlay is superior to full coverage. Reserve vertipreps for cases where adhesive bonding cannot be predictably achieved.\n• Digital scanning of deep subgingival vertipreps requires aggressive tissue retraction — scanner light must reach the margin to capture it.\n• Cross-reference: WTFIFU bonding agent generations, glass-ceramics and cementation enrichment data, substrate protocols.",
    context: "Jason Smithson — BDS. Internationally recognized restorative clinician and course leader. Known for direct composite artistry and ceramic onlay expertise. His teaching style is technique-heavy and unapologetically clinical.\n\nHost Jaz Gulati — see other Protrusive entries for credentials.\n\nIndustry disclosure: Smithson runs private courses (Simply Smithson, Art of Dentistry). Uses specific composite brands in his teaching which are discussed in episode; no sponsored product promotion detected.",
    notes: "Long episode (~90 min). Free on Protrusive website, YouTube, and major podcast platforms. Referenced as the definitive vertiprep episode by multiple subsequent Protrusive episodes including Jorge Cardoso's Vertiprep Revision (PDP following).",
    refs: []
  },

  // ==========================================================
  // [BONDING AGENTS] Entry: Van Meerbeek adhesion evolution
  // ==========================================================
  {
    id: "apnf-van-meerbeek-adhesive-evolution",
    name: "Adhesive Dentistry Evolution — Generations, pH Dynamics, and 10-MDP Nanolayering",
    source: "All Pulp No Fiction Dental Podcast — Episode 022",
    cat: "Bonding Agents",
    lastReviewed: "2023-05",
    format: "podcast",
    platform: "YouTube / Apple Podcasts / Spotify",
    url: "https://www.youtube.com/results?search_query=all+pulp+no+fiction+van+meerbeek+022",
    duration: 75,
    presenter: {
      name: "Prof. Bart Van Meerbeek, DDS, MSc, PhD",
      credentials: "Full Professor and Chairman of BIOMAT Research Cluster, Department of Oral Health Sciences, KU Leuven (Belgium). Widely regarded as the world's leading researcher in dental adhesion. 500+ peer-reviewed publications. Developed the dental adhesives classification system (4th through 8th generation framework). Collaborator on the foundational 10-MDP nanolayering research with Yoshida, Yoshihara, and Kuraray Noritake.",
      affiliation: "KU Leuven — BIOMAT Research Cluster, Department of Oral Health Sciences"
    },
    host: "All Pulp No Fiction Dental Podcast",
    tags: ["deep-dive", "foundational", "bonding-generations", "adhesive-chemistry", "MDP", "pH-dynamics", "self-etch"],
    mapTo: ["restorative/bonding-agents"],
    summary: "The foundational episode on dental adhesion — when you want to understand the generational evolution of bonding agents, you go to Van Meerbeek. He walks through the full history from 4th generation multi-bottle systems (OptiBond FL as gold standard) to 8th generation universal adhesives, and explains the chemistry of WHY each generation behaves differently.\n\nThe deepest content is on pH dynamics: the critical difference between ultra-mild (pH >2.5), mild (pH 2-2.5), and strong (pH <1.5) self-etching primers, and how these pH ranges determine whether the adhesive gently demineralizes and co-polymerizes with hydroxyapatite OR aggressively decalcifies and exposes unprotected collagen. Explains exactly how the 10-MDP functional monomer chemically interacts with hydroxyapatite to form stable nanolayered structures that resist hydrolytic degradation — the mechanism that makes mild self-etch with MDP clinically superior to strong acidic systems.\n\nThis is the 'why does modern bonding actually work' episode. Essential listening before attempting to understand why IDS, universal adhesive selection, or cement chemistry matters.",
    takeaways: "• Adhesive generations are a classification shorthand — what matters is the chemistry: total-etch vs self-etch, pH level, solvent type, MDP inclusion.\n• 4th generation (OptiBond FL): multi-bottle etch-and-rinse, gold standard for enamel bonding, technique-sensitive for dentin.\n• 5th gen: one-bottle etch-and-rinse. 6th-7th: self-etch systems (eliminate the etch-rinse step). 8th: universal adhesives that work in multiple modes.\n• pH spectrum: Ultra-mild (pH >2.5) = gentle demineralization, preserves collagen scaffold for MDP nanolayering. Strong (pH <1.5) = aggressive decalcification, exposes collagen that becomes vulnerable to hydrolysis.\n• 10-MDP monomer: the phosphate group chemically bonds to calcium in hydroxyapatite, forming self-assembled nanolayered structures with stable ionic bonds.\n• Nanolayering (Yoshida et al. 2012): MDP-calcium salts organize into layered structures at the adhesive interface — THIS is why MDP-containing adhesives outperform non-MDP alternatives for long-term bond durability.\n• Mild self-etch with MDP gives the most stable long-term dentin bond because it doesn't over-decalcify.\n• For enamel: selective etch with phosphoric acid regardless of adhesive generation — enamel bonds best with strong etching.\n• Cross-reference: WTFIFU bonding agent generation cards (directly aligned with this classification).",
    context: "Bart Van Meerbeek — widely considered the single most important researcher in dental adhesion chemistry. KU Leuven (Belgium) — his BIOMAT research group has produced foundational work on adhesive classification, MDP chemistry, and nanolayering that underpins modern understanding of why bonds work or fail. Delivered the Buonocore Memorial Lecture (the highest honor in dental adhesion research). 500+ publications with several thousand citations.\n\nAll Pulp No Fiction is an independent dental podcast focusing on evidence-based clinical content. Free on YouTube and podcast platforms.\n\nIndustry disclosure: Van Meerbeek has collaborated with Kuraray Noritake (developers of MDP-containing products) on foundational research — disclosed openly. His classification framework and pH chemistry analysis apply universally across manufacturers, not specific to any brand.",
    notes: "Free on YouTube and podcast platforms. Foundational episode — should be considered 'Start Here' for the Bonding Agents subcategory. Companion listening: the Dr. David Alleman hybrid layer episode for the MMP/degradation perspective.",
    refs: ["van-meerbeek-buonocore-2020", "yoshida-mdp-hydroxyapatite-2012"]
  },

  // ==========================================================
  // [BONDING AGENTS] Entry: Alleman hybrid layer + MMPs
  // ==========================================================
  {
    id: "sla-alleman-hybrid-layer-mmps",
    name: "Hybrid Layer Explained — MMP Inhibition, Collagen Preservation, and Bond Durability",
    source: "Six Lessons Approach Podcast (Dr. David Alleman)",
    cat: "Bonding Agents",
    lastReviewed: "2022-08",
    format: "podcast",
    platform: "YouTube",
    url: "https://www.youtube.com/results?search_query=six+lessons+approach+hybrid+layer+alleman",
    duration: 65,
    presenter: {
      name: "Dr. David Alleman, DDS",
      credentials: "Founder of the Six Lessons Approach to adhesive dentistry. Retired private practice clinician and international educator. Pioneering clinical educator on hybrid layer preservation, MMP inhibition, and biomimetic bonding protocols. Taught the Six Lessons Approach to thousands of dentists internationally.",
      affiliation: "Six Lessons Approach Academy (independent education)"
    },
    host: "Dr. David Alleman (host + presenter — solo educational format)",
    tags: ["deep-dive", "foundational", "hybrid-layer", "MMPs", "chlorhexidine", "bond-degradation", "adhesive-chemistry"],
    mapTo: ["restorative/bonding-agents", "restorative/substrate-protocols"],
    summary: "If Van Meerbeek covers WHY bonds work, Alleman covers WHY bonds fail over time — and what protocols shut down the failure mechanisms. The hybrid layer is the collagen-resin interpenetration zone created when adhesive resin infiltrates demineralized dentin. Alleman dissects the exact mechanisms of bond degradation: endogenous dentin proteases (matrix metalloproteinases — MMPs and cathepsins) that are silently embedded in dentin and become activated when acidic etchants lower the pH.\n\nOnce activated, these enzymes slowly digest unprotected collagen in the hybrid layer over months to years, creating the progressive bond degradation clinicians see as marginal staining, secondary caries, and eventual debonding. Alleman explains the protocol for inhibiting MMPs using 2% chlorhexidine (CHX) scrub for 60 seconds after etching and before adhesive application — a step that is not in most manufacturer IFUs but is strongly supported by peer-reviewed evidence.\n\nAlso covers quaternary ammonium compounds (like the MDPB monomer in Clearfil SE Protect) as an alternative approach — these compounds have antibacterial effects and enzyme inhibition built into the adhesive itself.",
    takeaways: "• The hybrid layer is the key structure that determines long-term bond durability. Its preservation is the single most important factor in restoration longevity.\n• Endogenous dentin MMPs (matrix metalloproteinases) and cathepsins are activated by the low pH of etching acids. Once active, they slowly digest collagen in the hybrid layer.\n• 2% chlorhexidine (CHX) scrub for 60 seconds after etching (before adhesive) inhibits MMPs for years. Simple protocol addition, major longevity benefit.\n• CHX must be applied to dentin specifically — does not need to be rinsed before adhesive application. Gently air-dry to avoid pooling.\n• Quaternary ammonium compounds (MDPB in Clearfil SE Protect) combine antibacterial effect with some MMP inhibition — built into the adhesive rather than applied as a separate step.\n• Self-etch adhesives with higher pH (mild, ultra-mild) cause less MMP activation — another reason they outperform strong etchants long-term (cross-reference Van Meerbeek episode).\n• Biomimetic bond = mechanically strong AND enzyme-resistant = truly durable. Both properties matter.\n• Cross-reference: WTFIFU bonding agent cards for generation-specific MMP activation profiles, substrate protocols for CHX application timing.",
    context: "David Alleman — DDS. Retired private practice clinician who became one of the most influential clinical educators on adhesive dentistry chemistry. Founded the Six Lessons Approach Academy, which teaches a structured protocol for hybrid layer preservation. While Alleman is not a peer-reviewed researcher, his teaching synthesizes and clinically translates the MMP/collagen research of Pashley, Tay, Breschi, and Hashimoto — all major researchers in this domain.\n\nHis CHX protocol is supported by multiple systematic reviews showing reduced nanoleakage, preserved bond strength at 6-month to 2-year follow-up, and reduced marginal degradation.\n\nIndustry disclosure: Alleman teaches through his own academy (Six Lessons Approach). Not affiliated with specific adhesive manufacturers. Independent educator.",
    notes: "Free on YouTube. Six Lessons Approach has multiple episodes; this one focuses specifically on the hybrid layer and MMP mechanisms. Companion listening: Van Meerbeek episode (generational chemistry), Sheikh IDS tutorial (clinical application).",
    refs: ["pashley-mmp-inhibition-chx", "breschi-hybrid-layer-degradation"]
  },

  // ==========================================================
  // [BONDING AGENTS] Entry: Sulaiman bonding chemistry
  // ==========================================================
  {
    id: "dds-sulaiman-adhesion-chemistry",
    name: "Mastering Adhesion & Bonding — Solvents, Stability, and Universal Realities",
    source: "DDS: Disruptive Dental Science (by DENTAL ADVISOR)",
    cat: "Bonding Agents",
    lastReviewed: "2024-03",
    format: "podcast",
    platform: "YouTube / Apple Podcasts / Spotify",
    url: "https://www.youtube.com/results?search_query=disruptive+dental+science+sulaiman+adhesion",
    duration: 45,
    presenter: {
      name: "Dr. Taiseer Sulaiman, DDS, PhD",
      credentials: "Associate Professor and Associate Director of Graduate Prosthodontics, Adams School of Dentistry, University of North Carolina at Chapel Hill. DDS, MS, PhD. Clinical Ambassador for DENTAL ADVISOR. Active researcher with 50+ peer-reviewed publications on adhesive dentistry, cementation, and ceramic materials.",
      affiliation: "UNC Adams School of Dentistry"
    },
    host: "Dr. Ashton Prince (DENTAL ADVISOR clinical team)",
    tags: ["deep-dive", "adhesive-chemistry", "solvents", "universal-adhesives", "silane-stability", "moisture-control"],
    mapTo: ["restorative/bonding-agents", "restorative/substrate-protocols", "restorative/surface-treatments"],
    summary: "Sulaiman complements the Van Meerbeek (generations/pH) and Alleman (hybrid layer/MMPs) episodes by focusing on the often-overlooked material science of adhesive STABILITY in solution. Goes deep into the role of solvents — why acetone-based adhesives (like OptiBond Solo Plus) require strict 'wet bonding' technique to prevent collagen network collapse, whereas water/ethanol-based systems (most modern universals) are more forgiving on moisture but harder to properly evaporate before curing.\n\nMost critically, tackles the shelf-life problem with universal adhesives that contain both silane AND acidic monomers in a single bottle. Explains why silane hydrolyzes in acidic solution, meaning that 'universal adhesive with silane' products lose their ceramic primer effectiveness over time. His recommendation: for ceramic bonding, apply a dedicated silane primer separately rather than relying on silane pre-mixed into universal adhesives.\n\nAlso covers moisture control at the microscopic level, primer penetration dynamics, and the difference between pH-based and functional-monomer-based self-etching systems.",
    takeaways: "• Solvent selection dictates technique: Acetone-based = strict wet bonding required, extremely technique-sensitive. Water/ethanol-based = more forgiving, but requires thorough air evaporation before curing.\n• Over-dry dentin after acetone adhesive application = collagen collapse = failed bond. Blot with wet cotton/foam, don't air-dry.\n• Over-wet dentin with water/ethanol systems = pooling = polymerization problems. Gently air-dry until surface looks dry but dentin remains moist ('frosty dentin' appearance).\n• Silane in acidic universal adhesives has SHELF-LIFE DEGRADATION — silane hydrolyzes in acidic solution. Older bottles of 'universal with silane' may have compromised ceramic priming capability.\n• Sulaiman's recommendation: for ceramic bonding, apply dedicated silane primer (Monobond S, Clearfil Ceramic Primer, etc.) separately rather than relying on universal adhesive's silane content.\n• Universal adhesives work across etch-and-rinse, selective-etch, and self-etch modes — BUT each mode has different optimal indications.\n• For deep dentin: self-etch mode (less pulpal irritation). For enamel margins: selective-etch. For cases with compromised substrate: etch-and-rinse.\n• Primer agitation during application improves monomer penetration — active scrubbing for 15-20 seconds beats passive application.\n• Cross-reference: WTFIFU bonding agent IFU vs evidence data, surface treatment protocols for ceramic substrates.",
    context: "Taiseer Sulaiman — DDS, MS, PhD. UNC Adams School of Dentistry faculty. Associate Director of Graduate Prosthodontics. Published 50+ peer-reviewed papers on adhesive dentistry, cementation of indirect restorations, and ceramic material performance. Clinical Ambassador role with DENTAL ADVISOR involves systematic evaluation of new materials — this gives him unusual visibility across product categories.\n\nDENTAL ADVISOR is an independent evaluation organization (not manufacturer-owned) that tests dental products and publishes ratings. The DDS podcast is their educational arm.\n\nIndustry disclosure: Sulaiman's DENTAL ADVISOR affiliation is disclosed. His content represents independent clinical science positions, not product endorsement.",
    notes: "Free on YouTube (Dental Advisor channel) and podcast platforms. Companion to Van Meerbeek (generational chemistry) and Alleman (hybrid layer preservation). Sulaiman's silane-stability point is rarely discussed elsewhere and has direct implications for universal adhesive shelf-life policies in practices.",
    refs: ["sulaiman-universal-adhesives-review"]
  },

  // ==========================================================
  // [CEMENTS] Entry: Sulaiman Best Practices on evidence
  // ==========================================================
  {
    id: "bps-sulaiman-scientific-evidence",
    name: "The Importance of Scientific Evidence From a Clinical Perspective — Critical Evaluation of Materials & Cements",
    source: "The Best Practices Show with Kirk Behrendt — Episode 894",
    cat: "Cements",
    lastReviewed: "2024-02",
    format: "podcast",
    platform: "YouTube / Apple Podcasts / Spotify",
    url: "https://www.youtube.com/results?search_query=best+practices+show+sulaiman+894",
    duration: 50,
    presenter: {
      name: "Dr. Taiseer Sulaiman, DDS, PhD",
      credentials: "Associate Professor and Associate Director of Graduate Prosthodontics, UNC Adams School of Dentistry. DDS, MS, PhD. 50+ peer-reviewed publications.",
      affiliation: "UNC Adams School of Dentistry"
    },
    host: "Kirk Behrendt (ACT Dental — The Best Practices Show)",
    tags: ["deep-dive", "cements", "evidence-evaluation", "marketing-literacy", "material-selection"],
    mapTo: ["restorative/cements", "restorative/bonding-agents"],
    summary: "Sulaiman tackles the pervasive problem of clinical misinformation around dental cements and adhesive materials. Rather than delivering a protocol episode, this is a framework for HOW to critically evaluate new cement and adhesive claims — essential skill given the frequency of new product launches and the gap between manufacturer marketing and peer-reviewed evidence.\n\nCovers: how to read a clinical study and identify funding bias, the difference between laboratory bond strength claims and in-vivo performance, why short-term clinical studies (≤1 year) should not drive adoption decisions, and how to interpret systematic reviews and meta-analyses when multiple products have competing claims. Uses specific examples from the cement category (resin cements, RMGI, self-adhesive) to illustrate how similar-sounding products can have very different evidence profiles.\n\nA 'skill-building' episode rather than a protocol episode — maps to the Cements subcategory because cement claims are a frequent target of marketing-driven misinformation, but the evaluation framework applies universally across restorative materials.",
    takeaways: "• Manufacturer claims are hypotheses, not evidence — independent peer-reviewed studies are the minimum threshold for adoption.\n• Check funding sources: industry-funded studies are not automatically invalid but deserve extra scrutiny for methodological shortcuts.\n• Lab bond strength numbers ≠ clinical performance. Thermocycling, saliva, occlusal load, and biofilm are not captured in most lab tests.\n• New products typically need 3-5 years of independent clinical follow-up before warranting routine adoption — early adopters take on unnecessary risk.\n• Systematic reviews and meta-analyses are more reliable than single studies — always check if a recent SR exists before accepting individual-study claims.\n• 'Similar-sounding' cement categories (self-adhesive vs adhesive, dual-cure vs self-cure) have meaningfully different evidence profiles. Don't treat them as interchangeable.\n• Ask three questions of every new material claim: (1) Who funded the study? (2) What was the follow-up duration? (3) Are there independent replications?\n• Cross-reference: WTFIFU cementation enrichment data — organized specifically around IFU divergences, which are the frequent target of this kind of marketing gap.",
    context: "Taiseer Sulaiman — see Disruptive Dental Science entry for full credentials.\n\nThe Best Practices Show is hosted by Kirk Behrendt (ACT Dental) — a dental practice management and education platform. Free podcast, no paywall. Episode focuses on evidence literacy rather than specific protocols.\n\nIndustry disclosure: Sulaiman's academic and DENTAL ADVISOR roles are disclosed. Behrendt's ACT Dental is independent (not manufacturer-owned).",
    notes: "Free on YouTube and podcast platforms. Search 'Best Practices Show 894 Sulaiman'. Pairs well with the DDS Sulaiman adhesion chemistry episode — this one is the 'how to think' complement to the 'what to do' protocol content.",
    refs: ["sulaiman-universal-adhesives-review"]
  },

  // ==========================================================
  // [HYBRID CERAMIC/COMPOSITE BLOCKS*] Entry: Renne Digital
  // ==========================================================
  {
    id: "ldd-renne-digital-foundations",
    name: "Foundations in Digital Dentistry — 3D Printing, Milling & Workflow Integration (*)",
    source: "Launch Digital Dentistry Podcast",
    cat: "Hybrid Ceramic/Composite Blocks",
    lastReviewed: "2024-08",
    format: "podcast",
    platform: "Apple Podcasts / Spotify / Buzzsprout",
    url: "https://ldd.buzzsprout.com/2348566/episodes/15516506-foundations-in-digital-dentistry-with-dr-wally-renee",
    duration: 33,
    presenter: {
      name: "Dr. Walter (Wally) Renne, DMD",
      credentials: "Founder, The MOD Institute. Former Professor and Assistant Dean of Innovation and Digital Dentistry at Medical University of South Carolina (MUSC). 50+ peer-reviewed publications on scan and milling accuracy across CAD/CAM systems. Multiple patents. Key opinion leader for Planmeca and Ivoclar Vivadent.",
      affiliation: "The MOD Institute (Charleston, SC) / formerly MUSC"
    },
    host: "Dr. Shea M. Tolbert",
    tags: ["foundational", "digital-workflow", "3D-printing", "CAD-CAM", "milling", "scanning", "cross-specialty"],
    mapTo: ["restorative/hybrid-blocks", "prosth/digital-workflows", "printing/restorative-resins"],
    summary: "(*) NOTE: This entry is placed in Hybrid Ceramic/Composite Blocks as the closest restorative subcategory, but the content spans CAD/CAM and 3D Printing broadly. Cross-referenced to Prosthodontics and 3D Printing specialties.\n\nRenne walks through the foundational principles of modern digital dentistry — intraoral scanning accuracy differences between systems, trade-offs between chairside milling vs laboratory workflows, and the evolving role of 3D printing in restorative practice. His perspective is unusually valuable because he has personally tested 30+ different 3D printers and published research on scan/mill accuracy across systems (Planmeca Emerald S, CEREC Primescan, 3Shape Trios 5).\n\nCovers: when printed restorations are appropriate vs when milled restorations remain superior (particularly for hybrid ceramic/composite blocks like Lava Ultimate, Cerasmart, Enamic), the limits of current 3D printed resin technology for definitive restorations, and how to integrate digital workflows incrementally rather than all-at-once. Good 'entry point' episode for clinicians early in their digital transition.",
    takeaways: "• Milled > printed for bond strength on most substrates as of current research. Printed restorations are appropriate for specific indications (temporaries, surgical guides, certain definitive applications) but not a universal replacement.\n• Hybrid ceramic/composite blocks (Lava Ultimate, Cerasmart, Enamic, Vita Suprinity) require specific surface treatment — sandblasting > HF for resin-matrix blocks. Silane behavior varies by block.\n• 3D printed restorative resins: cementation protocols are NOT fully validated (per 2026 umbrella review — cross-reference WTFIFU cementation data).\n• Scan accuracy varies meaningfully between intraoral scanners — published comparative data exists; don't rely on manufacturer claims.\n• Printed dentures with proper protocols are genuinely viable — Renne teaches a two-visit digital denture workflow.\n• Digital implant planning + printed surgical guides have reached maturity for most cases but still require rigorous scan quality.\n• Renne's framework: choose workflow based on case requirements, not tool enthusiasm.\n• For GPs new to digital: start with intraoral scanning before committing to chairside milling or printing hardware.\n• Cross-reference: WTFIFU 3D Printing specialty (28 entries), cementation enrichment data for hybrid block surface treatments.",
    context: "Wally Renne — DMD. Founder of the MOD Institute (Modern Optimized Dentistry) in Charleston, SC. Former Professor and Assistant Dean of Innovation and Digital Dentistry at MUSC. 50+ peer-reviewed publications. Multiple patents including antimicrobial dental material platform. Co-teaches at MOD alongside Dr. Mike DeFee, Dr. Tony Mennito, Dr. Allan Queiroz, Dr. Casey Bennett.\n\nHost Shea Tolbert — DDS. Launch Digital Dentistry podcast focuses on CAD/CAM and digital workflow topics.\n\nIndustry disclosure: Renne is a paid key opinion leader for Planmeca and Ivoclar Vivadent (disclosed openly). His published research on scan/mill accuracy is independent academic work. The MOD Institute receives sponsor support from multiple digital dentistry manufacturers.",
    notes: "(*) ASTERISK NOTE: Entry placed in Hybrid Ceramic/Composite Blocks as closest restorative subcategory, but content spans digital workflows broadly. Cross-linked to Prosthodontics and 3D Printing specialties.\n\n33-minute format makes this a good introduction. For deeper protocol content, the MOD Institute offers paid courses — this free podcast provides the 'philosophy and principles' overview.",
    refs: ["renne-milling-accuracy-studies"]
  },
  {
    id: "dentalhacks-284-ferracane-composite-godfather",
    name: "The Godfather of Composite — Filler Mechanics, Monomer Evolution, and Bulk-Fill Reality",
    source: "The Dental Hacks Podcast — Episode 284",
    cat: "Composites",
    lastReviewed: "2020-06",
    format: "podcast",
    platform: "Apple Podcasts / Spotify / Dental Hacks archives",
    url: "https://podcasts.apple.com/us/podcast/the-dental-hacks-podcast",
    duration: 55,
    presenter: {
      name: "Prof. John L. Ferracane, PhD",
      credentials: "Professor and Chair, Department of Restorative Dentistry, Oregon Health & Science University (OHSU) School of Dentistry. Director of Biomaterials Research. Author of the foundational 2011 review 'Resin composite — state of the art' in Dental Materials (1500+ citations). 300+ peer-reviewed publications on resin composite chemistry, polymerization, filler technology, and degradation. Past President of the Academy of Dental Materials. Editorial board, Dental Materials journal.",
      affiliation: "Oregon Health & Science University (OHSU) School of Dentistry"
    },
    host: "Dental Hacks (Alan Mead, Jason Lipscomb and team)",
    tags: ["foundational", "composite-chemistry", "filler-mechanics", "bulk-fill", "polymerization-shrinkage"],
    mapTo: ["restorative/composites", "restorative/bonding-agents"],
    summary: "You cannot discuss the evolution of composite resin without Ferracane — he is the researcher most responsible for translating resin composite chemistry into language clinicians can actually use. This episode covers the historical arc of composite development from early macrofills through microfills, microhybrids, nanohybrids, to modern flowables and bulk-fills, and explains the chemistry decisions behind each generation.\n\nGoes deep into the resin matrix itself: why manufacturers blend Bis-GMA (high viscosity, high strength), UDMA (lower viscosity, toughness), and TEGDMA (reactive diluent, but higher shrinkage) to balance handling, conversion rate, and polymerization shrinkage. Explains why no single monomer does everything well and why the blend ratios matter clinically.\n\nMost critically, delivers the definitive research-backed reality on bulk-fill composites — how manufacturers increase filler particle size and strategically tune translucency of the resin matrix to allow light to penetrate 4-5mm without sacrificing long-term flexural strength. Distinguishes between legitimate bulk-fill formulations and products using 'bulk-fill' as marketing language. This is the chemistry foundation every other composite episode builds on.",
    takeaways: "• Composite generations are a marketing shorthand. What actually matters: filler size/distribution, filler loading by weight/volume, monomer blend, and photoinitiator chemistry.\n• Bis-GMA: high viscosity, high strength, low shrinkage. UDMA: lower viscosity, toughness. TEGDMA: reactive diluent (drops viscosity) but highest shrinkage per volume. Every manufacturer balances these.\n• Polymerization shrinkage: typically 2-4% by volume. Bulk-fill composites achieve lower shrinkage stress (not lower shrinkage per se) through modified initiator chemistry and filler architecture.\n• Bulk-fill reality: increasing filler particle size reduces light scattering, allowing 4-5mm depth of cure. Translucency tuning matters more than 'bulk-fill' labeling.\n• Not all 'bulk-fills' are equal. Some are true structural bulk-fills (can be placed as single increment occlusal surface). Others are flowable bases requiring a cap layer.\n• Filler loading: higher = better mechanical properties but worse handling. Typical 70-85% by weight for universal composites.\n• Nanohybrid filler technology allows nanoscale fillers to disperse uniformly while maintaining polishability comparable to microfills — the dominant current architecture.\n• Cross-reference: WTFIFU composite cards for manufacturer-specific filler architectures, bulk-fill product distinctions.",
    context: "John Ferracane — PhD (University of Michigan). Professor and Chair of Restorative Dentistry at OHSU. Director of Biomaterials Research. His 2011 foundational review 'Resin composite — state of the art' in Dental Materials is one of the most-cited papers in dental materials science (1500+ citations). 300+ peer-reviewed publications spanning polymerization kinetics, filler-matrix interactions, bulk-fill validation, and composite degradation. Past President, Academy of Dental Materials. Co-author of multiple ADA acceptance program guidelines for composite resins.\n\nThe Dental Hacks Podcast: hosted by Alan Mead and Jason Lipscomb (both practicing GPs). The show later evolved into Very Dental Podcast Network. Episode 284 is from the original Dental Hacks archive. Free on Apple Podcasts and major platforms — search 'Dental Hacks 284 Ferracane'.\n\nIndustry disclosure: Ferracane consults for multiple composite manufacturers (disclosed). His academic research is independent and published without manufacturer editorial control. Episode is not product-promotional.",
    notes: "Start-Here episode for the Composites subcategory. All subsequent composite content (Price curing, Lawson universal shades, Dietschi stratification) is built on Ferracane's chemistry foundations. Original Dental Hacks feed may be archived; also available via Very Dental Podcast Network archives.",
    refs: ["ferracane-2011-composite-state-of-art", "opdam-posterior-composite-12yr"]
  },
  {
    id: "pdp076-price-light-curing",
    name: "Light Curing Masterclass — Photoinitiators, Polywave Lights, and the '3-Second Cure' Myth",
    source: "Protrusive Dental Podcast — PDP076",
    cat: "Composites",
    lastReviewed: "2021-04",
    format: "podcast",
    platform: "YouTube / Spotify / Apple Podcasts",
    url: "https://protrusive.co.uk/light-curing-masterclass-pdp076",
    duration: 90,
    presenter: {
      name: "Prof. Richard B. T. Price, BDS, DDS, MS, PhD, FDS RCS(Edin)",
      credentials: "Professor, Department of Dental Clinical Sciences, Dalhousie University, Halifax, Canada. Widely considered the world's leading researcher in dental light curing. 200+ peer-reviewed publications specifically on photoinitiators, light emission spectra, radiometers, and polymerization kinetics. Fellow of the Royal College of Surgeons (Edinburgh). Multiple dental materials research awards. His work directly informs ISO standards for dental curing lights.",
      affiliation: "Dalhousie University Faculty of Dentistry"
    },
    host: "Dr. Jaz Gulati — BDS (Hons), MFDS RCPS, PgCert DentEd, PgDip Orth",
    tags: ["deep-dive", "foundational", "photoinitiators", "curing-lights", "polywave", "composite-chemistry"],
    mapTo: ["restorative/composites", "restorative/bonding-agents"],
    summary: "The composite matrix means nothing if you don't convert the carbon-carbon double bonds — and Richard Price is the absolute global authority on how light curing actually works (and frequently doesn't). This 90-minute masterclass breaks down the critical differences between traditional Camphorquinone (CQ) and alternative photoinitiators like Ivocerin and TPO, which are commonly used in bleach shades, translucent enamels, and certain bulk-fill composites.\n\nExplains the physics of light scattering through composite (why deeper increments cure less even with 'high-intensity' lights), why you absolutely need a polywave (multi-peak emission) curing light to properly cure modern resins with alternative photoinitiators, and systematically shreds the marketing hype behind '3-second cures' and similar claims. Covers: distance effects (intensity drops with the square of distance — angulation matters), irradiance vs radiant exposure, what a dental radiometer actually measures (and why many produce misleading readings), and why your curing light probably needs replacement sooner than you think.\n\nPractical content includes: how to test your current curing light, what to look for when buying a new one, and how to structure your curing protocol for different materials and increment thicknesses.",
    takeaways: "• Camphorquinone (CQ) absorbs at ~470nm (visible blue). Ivocerin and TPO absorb at ~398-408nm (violet/UV-A). Single-peak LED lights (violet-only or blue-only) cannot fully cure materials containing mixed photoinitiators.\n• Polywave (multi-peak) LED curing lights emit across both ranges — required for bleach shades, translucent enamels, and bulk-fill composites that use alternative photoinitiators.\n• '3-second cures' and similar high-intensity short-time claims fail basic radiant-exposure math. Total light energy delivered (irradiance × time) determines cure, not peak intensity alone.\n• Distance matters: light intensity drops with the SQUARE of distance. 1mm off the surface vs contact can reduce delivered energy dramatically.\n• Angulation matters: if the light tip is angled >15° from perpendicular, delivered irradiance drops significantly. Direct, perpendicular placement with adequate duration is superior to 'quick' angled exposures.\n• Most dental radiometers give misleading readings — they don't measure the emission spectrum, only aggregate power. A radiometer showing '1500 mW/cm²' tells you nothing about whether the correct wavelengths are present for the photoinitiators in your composite.\n• Routine curing light testing (optical quality, output verification) is under-performed in most practices. Lights degrade silently over time.\n• Cross-reference: WTFIFU composite cards for photoinitiator-specific information, Ferracane chemistry foundations.",
    context: "Richard Price — the most-cited researcher in dental light curing globally. 200+ publications specifically on photoinitiators, light emission, polymerization kinetics, and curing light performance. His research directly informs ISO 10650 (dental curing lights) standards. Founded the Dental Materials Research Network at Dalhousie. Multiple dental education awards including Gordon Christensen Award for Clinical Relevance in Dental Materials Research.\n\nHost Jaz Gulati — Protrusive Dental Podcast.\n\nEpisode notes: 90-minute masterclass format. Price slows the content down and explains each concept with repeated framing so clinicians without chemistry backgrounds can follow. Mandatory listening before making decisions about curing light purchases or adopting new bulk-fill composites.\n\nIndustry disclosure: Price has consulted for curing light manufacturers (disclosed). His academic research is independent and frequently critical of marketing claims. Episode is not product-promotional — Price actively debunks manufacturer claims throughout.",
    notes: "Free on Protrusive website, YouTube, Spotify, Apple Podcasts. Despite being Protrusive, this specific episode is considered one of the definitive clinician-accessible resources on light curing — no other similarly accessible long-form episode with Price exists as of current survey. The content is so central to composite success that its inclusion pushes past the 'don't over-rely on Protrusive' guideline.",
    refs: ["price-light-curing-review-2014", "price-polywave-lights-2014", "ferracane-2011-composite-state-of-art"]
  },
  {
    id: "veryclinical-lawson-universal-composites",
    name: "Universal Composites and Structural Color — Single-Shade Optics, Flowables vs Packables",
    source: "Very Clinical Podcast — Very Dental Podcast Network",
    cat: "Composites",
    lastReviewed: "2023-04",
    format: "podcast",
    platform: "Apple Podcasts / Very Dental Podcast Network",
    url: "https://podcasts.apple.com/us/podcast/very-dental-podcast-network",
    duration: 50,
    presenter: {
      name: "Dr. Nate Lawson, DMD, PhD",
      credentials: "Director, Division of Biomaterials, University of Alabama at Birmingham (UAB) School of Dentistry. DMD (UAB, 2011), PhD Biomedical Engineering (UAB, 2012). 200+ peer-reviewed publications. Editorial board, Journal of Adhesive Dentistry and Compendium.",
      affiliation: "University of Alabama at Birmingham School of Dentistry"
    },
    host: "Very Clinical Podcast (Very Dental Podcast Network)",
    tags: ["deep-dive", "composite-chemistry", "single-shade", "structural-color", "flowables", "material-selection"],
    mapTo: ["restorative/composites"],
    summary: "Lawson tackles the optical physics behind 'universal' single-shade composites (Omnichroma and its competitors). Explains why these materials work — not through traditional pigment mixing but through structural color created by precisely spherical filler particles at specific sizes that scatter light in wavelengths matching surrounding tooth structure. The filler geometry, not a tinted matrix, creates the shade match.\n\nContinues into the broader question of modern highly-filled flowables versus traditional packable composites: wear rates from his UAB biomaterials lab testing, filler loading percentages across product categories, and where each material type actually belongs in the preparation. Addresses whether modern flowables (typically 60-70% filled by weight) have closed the mechanical gap with packable composites (typically 75-85%) — and the answer is 'yes for some, no for others'.\n\nPractical content includes: when to use single-shade vs multi-shade layering, which clinical scenarios fool structural-color materials (high-value teeth, translucent incisal edges, class IV), and Lawson's framework for picking from the crowded universal composite marketplace.",
    takeaways: "• Single-shade composites (Omnichroma, Vittra APS Unique, etc.) work through structural color — spherical filler particles at specific refractive index match the surrounding tooth's light behavior.\n• Structural color vs pigmented shading: structural color adapts to surroundings (takes shade from tooth walls). Pigmented composites have a fixed shade regardless of surroundings.\n• Where structural color works well: class I-II posterior, class III, class V where the surrounding tooth provides the 'shade reference'.\n• Where structural color struggles: large class IV restorations with minimal surrounding tooth to reference, high-value teeth (bleached, young), translucent incisal edges, significant color variations in one tooth.\n• Modern flowables: filler loading has increased significantly (highly-filled flowables reach 65-70% by weight). Mechanical properties approach packables for many applications but not all.\n• Bulk-fill flowables vs bulk-fill packables: handling differs, final cap layer still recommended for most flowable bulk-fills despite manufacturer claims.\n• Lawson's framework: match material to clinical requirement, not to marketing category. Single-shade composites reduce complexity in appropriate indications but are not a universal replacement.\n• Polishability: nanohybrid architectures dominant in current products — gloss retention at 3+ years is now achievable across most categories.\n• Cross-reference: WTFIFU composite product cards for manufacturer-specific filler architecture and structural-color mechanism data.",
    context: "Nate Lawson — DMD/PhD from UAB, mentored under Dr. John Burgess. Director of Division of Biomaterials since 2016. 200+ publications. Serves on ADA Council of Scientific Affairs.\n\nThis is Lawson's 3rd entry in the Restorative Learn catalog (Glass-Ceramics onlays, Zirconia material science, now Composites) — intentionally no 4th entry, presenter cap respected.\n\nThe Very Dental Podcast Network — hosted by Dr. Alan Mead and team. Independent, not industry-owned.\n\nIndustry disclosure: Lawson's UAB biomaterials lab performs industry-funded research disclosed in episode content.",
    notes: "Search Very Clinical feed for 'Nate Lawson universal composites' or 'Lawson structural color'. Free podcast, no paywall. Companion listening: Ferracane (chemistry foundations), Price (curing considerations for alternative photoinitiators in modern universal composites).",
    refs: ["lawson-omnichroma-structural-color", "ferracane-2011-composite-state-of-art"]
  },
  {
    id: "idea-dietschi-direct-anterior-stratification",
    name: "Natural Layering & Interceptive Wear Treatment — Direct Anterior Composite Technique",
    source: "IDEA Academy (YouTube — free lecture/course excerpts)",
    cat: "Composites",
    lastReviewed: "2024-07",
    format: "video",
    platform: "YouTube (IDEA Academy channel)",
    url: "https://www.youtube.com/results?search_query=didier+dietschi+idea+academy+direct+anterior+composite",
    duration: 60,
    presenter: {
      name: "Dr. Didier Dietschi, DMD, PhD",
      credentials: "Adjunct Professor, Case Western Reserve University (USA). Senior Lecturer, Department of Cariology and Endodontics, University of Geneva Faculty of Dentistry (Switzerland). PhD (2003), Academic Centre for Dentistry Amsterdam (ACTA) under Prof. Carel Davidson. 35+ years research and clinical practice in adhesive restorative dentistry. Developer of the Natural Layering Concept. Co-author of the textbook 'Adhesive Metal-Free Restorations' (Quintessence, 1997, translated into 7 languages). Author of 'Interceptive Treatment Approach with Minimally Invasive Protocols' (Quintessence, 2023). Numerous awards for contributions to adhesive restorative dentistry.",
      affiliation: "University of Geneva (Switzerland) / Case Western Reserve University (USA) / IDEA Academy faculty"
    },
    host: "IDEA Academy (free excerpts — lecture and hands-on course format)",
    tags: ["technique-focused", "composite-chemistry", "structural-color", "material-selection", "tooth-wear", "anterior-restoration"],
    mapTo: ["restorative/composites"],
    summary: "Dietschi doesn't do the traditional podcast circuit — which is why free, high-quality content from him is valuable when available. IDEA Academy releases lecture excerpts and masterclass previews on YouTube that contain genuinely substantive technique and conceptual content, particularly on two topics where Dietschi is the acknowledged authority: direct anterior composite stratification using the Natural Layering Concept, and interceptive treatment of tooth wear (attrition, erosion, bruxism) using minimally invasive direct composites.\n\nThe Natural Layering Concept (developed by Dietschi from spectrophotometric analysis of natural tooth optical properties) uses a small number of enamel/dentin shade pairs to reproduce the full range of natural tooth appearances — simplifying shade selection without sacrificing esthetic outcome. This concept underpins several commercial composite systems (Inspiro and related Natural Layering-based products).\n\nThe interceptive wear content demonstrates Dietschi's 'no-prep' or minimal-prep philosophy for rehabilitating worn dentition: freehand bonding driven by a functional wax-up, restoring both function and esthetics while preserving remaining tooth structure. The approach fundamentally differs from conventional crown-based rehabilitation and is supported by decades of Dietschi's clinical follow-up data.",
    takeaways: "• Natural Layering Concept: use 2-3 dentin shades + distinct enamel opacities rather than trying to match every Vita shade. Simpler, more reproducible, matches the optical behavior of natural tooth structure.\n• Natural enamel has different optical values depending on tooth age and maturation — young teeth have more translucent, high-value enamel; older teeth have more opaque, lower-value enamel. Layering must account for this.\n• Interceptive wear treatment: rebuild worn dentition with direct composite freehand bonding BEFORE crown-level destruction is required. Preserves remaining tooth structure and is reversible/repairable.\n• Functional wax-up drives the restoration design — occlusion is built to function and esthetics simultaneously rather than treating them sequentially.\n• Freehand bonding (no preparation, no guide stent for the restoration itself) is the technique. Requires operator skill but preserves all existing tooth structure.\n• Matrix and instrument selection matters: Dietschi designed a composite instrument set (CompoSculp, Hu-Friedy) specifically for these anterior layering and contouring techniques.\n• Composite longevity for these anterior restorations: Dietschi's own cases followed 10-20+ years demonstrate survival competitive with ceramic veneers, particularly valuable for younger patients where definitive ceramic work is inappropriate.\n• Cross-reference: WTFIFU composite cards for material selection (which composites support Natural Layering architecture), Glass-Ceramics content for ceramic veneer comparisons.",
    context: "Didier Dietschi — DMD (Geneva), PhD (ACTA Amsterdam, 2003, under Prof. Carel Davidson). Adjunct Professor at Case Western Reserve University. Senior Lecturer at University of Geneva, Department of Cariology and Endodontics. 35+ years research and clinical practice. Developer of the Natural Layering Concept published in multiple peer-reviewed journals (2000, 2006, 2016 updates with Newton Fahl Jr.). Multiple book authorship including the 850-page 'Interceptive Treatment Approach with Minimally Invasive Protocols' (Quintessence, 2023).\n\nIDEA Academy (Institute for Dental Excellence and Advanced Training) — a private continuing education platform that hosts Dietschi's hands-on masterclasses. Paid courses are extensive; free YouTube excerpts and lecture previews are the accessible public content referenced here.\n\nIndustry disclosure: Dietschi consulted on the development of Inspiro composite (Edelweiss DR) based on the Natural Layering Concept, and designed the CompoSculp instrument set (Hu-Friedy). These relationships are disclosed. His peer-reviewed research predates these commercial relationships and the Natural Layering Concept is generic, not proprietary to any single product.",
    notes: "Content availability varies on IDEA Academy YouTube — specific episodes cycle through. Also check gIDE Dental Institute library (some Dietschi CE lectures available to subscribers) and Quintessence DVD journal archives. Specific search strings: 'Dietschi IDEA direct anterior', 'Dietschi natural layering concept', 'Dietschi interceptive tooth wear'. \n\nDietschi is also worth following on the inspiro® clinical case channel and Style Italiano cross-publication for case documentation. For the foundational textbook understanding, the 2023 'Interceptive Treatment' book with Saratti and Erpen (Quintessence) is the current definitive reference.\n\nThis entry is intentionally the only direct composite TECHNIQUE content in the Restorative catalog — it complements the chemistry (Ferracane), curing (Price), and product-selection (Lawson) lanes with the actual artistry/technique lane.",
    refs: ["dietschi-natural-layering-2006", "dietschi-fahl-2016-layering"]
  }
];

// --- SUBCATEGORY GROUPS (mirrors exact product subcategory names) ---
export const RESTORATIVE_MEDIA_GROUPS = [
  "Hybrid Ceramic/Composite Blocks",
  "Glass-Ceramics",
  "Zirconia",
  "Cements",
  "Composites",
  "Post & Core",
  "Bonding Agents",
  "Surface Treatments",
  "Substrate Protocols",
  "Polishing Systems",
  "Stain / Glaze Systems"
];

// --- CLASSIFIER (exact-match logic aligned with product subcategory names) ---
export function restorativeMediaGetGroup(cat) {
  if (!cat) return "Uncategorized";
  const c = cat.toLowerCase();
  if (c.includes("hybrid") || c.includes("composite block")) return "Hybrid Ceramic/Composite Blocks";
  if (c.includes("glass-ceramic") || c.includes("glass ceramic") || c.includes("lithium disilicate") || c.includes("feldspathic") || c.includes("leucite")) return "Glass-Ceramics";
  if (c.includes("zirconia")) return "Zirconia";
  if (c.includes("cement")) return "Cements";
  if (c.includes("composite")) return "Composites";
  if (c.includes("post") || c.includes("core")) return "Post & Core";
  if (c.includes("bonding agent") || c.includes("adhesive")) return "Bonding Agents";
  if (c.includes("surface treatment")) return "Surface Treatments";
  if (c.includes("substrate protocol")) return "Substrate Protocols";
  if (c.includes("polishing")) return "Polishing Systems";
  if (c.includes("stain") || c.includes("glaze")) return "Stain / Glaze Systems";
  return "Uncategorized";
}
