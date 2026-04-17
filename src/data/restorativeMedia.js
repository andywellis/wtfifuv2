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
  }
};

// --- MEDIA ENTRIES ---
export const RESTORATIVE_MEDIA = [
  {
    id: "pdp221-magne-occlusal-veneers",
    name: "Occlusal Veneers and Material Selection with Pascal Magne",
    source: "Protrusive Dental Podcast — PDP221",
    cat: "Adhesive Protocols — Material Selection",
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
    cat: "Ceramic Materials — Classification & Selection",
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
    cat: "Bonding Science — Technique",
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
    cat: "Bonding Science — Technique",
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

  {
    id: "pdp059-sethi-ceramic-onlay-protocol",
    name: "Ceramic Onlays — Full Protocol from Prep to Bonding",
    source: "Protrusive Dental Podcast — PDP059",
    cat: "Indirect Restorations — Cementation",
    lastReviewed: "2021-01",
    format: "podcast",
    platform: "YouTube / Spotify / Apple Podcasts",
    url: "https://protrusive.co.uk/ceramic-onlays",
    duration: 60,
    presenter: {
      name: "Dr. Nik Sethi",
      credentials: "UK-based restorative dentist and educator. Co-founder of Elevate Dentistry. Developer of the FIPO protocol for indirect restorations.",
      affiliation: "Elevate Dentistry / Private practice (UK)"
    },
    host: "Dr. Jaz Gulati — BDS (Hons), MFDS RCPS, PgCert DentEd, PgDip Orth",
    tags: ["technique-focused", "step-by-step", "ceramic-onlay", "cementation", "temporisation", "IDS"],
    mapTo: ["restorative/indirect-restorations", "restorative/cementation", "restorative/bonding-agents"],
    summary: "Complete workflow for lithium disilicate onlay restorations — the full chairside protocol from case selection through final cementation. Covers: when to start overlaying cusps vs leaving them (with specific thickness guidelines), prep efficiency tips, the painful temporisation stage (and how to make it not painful), IDS integration, isolation for bonding, and the full adhesive cementation protocol using heated composite.\n\nThis is the 'complete cookbook' episode for ceramic onlays — every step in sequence. Pairs with PDP077 (Gerdolle — bonding science) and PDP161 (material choice discussion).",
    takeaways: "• Case selection: circumferential enamel is the critical success factor. If enamel is present, the bond between ceramic and etch-bonded enamel is one of the strongest in dentistry.\n• Cusp overlay decision: if a cusp is undermined or has cracks extending into dentin, overlay it. If structurally sound, preserve it.\n• Temporisation: use a dab of flowable composite spot-bonded to one area (NOT the whole surface) so the temp is retentive enough but removable.\n• Full bonding protocol: rubber dam → try-in → etch ceramic (HF 5% 20s for LS2) → silane → rinse/dry tooth → etch enamel → bond → seat with heated composite → light cure.\n• Heated composite for cementation: improves flow, adaptation, and degree of conversion. Keeps the luting layer thin.\n• Let the tooth tell you when to intervene — don't replace restorations prophylactically.\n• Cross-reference: WTFIFU lithium disilicate cementation data (5% HF 20s for LS2, NOT 10%).",
    context: "Nik Sethi — UK clinician and co-founder of Elevate Dentistry, which runs hands-on adhesive/indirect courses. Recognized educator in the UK dental community. Not primarily a published researcher but a respected clinical educator whose protocols align with current SR/MA evidence.\n\nIndustry disclosure: Sethi is affiliated with Elevate Dentistry courses (mentioned in episode).",
    notes: "Pairs directly with PDP077 (bonding science) and PDP161 (material choice geek discussion). YouTube version has clinical visuals.",
    refs: []
  },

  {
    id: "pdp-ceramics-beginners-ps013",
    name: "Dental Ceramics for Absolute Beginners — LS2 vs Zirconia Decision Making",
    source: "Protrusive Dental Podcast — PS013",
    cat: "Ceramic Materials — Classification & Selection",
    lastReviewed: "2025-01",
    format: "podcast",
    platform: "YouTube / Spotify / Apple Podcasts",
    url: "https://protrusive.co.uk/ceramics-basics",
    duration: 50,
    presenter: {
      name: "Dr. Jaz Gulati (solo episode with Emma Hutchison)",
      credentials: "BDS (Hons), MFDS RCPS, PgCert DentEd, PgDip Orth. Restorative DCT posts at Guy's Hospital and Charles Clifford.",
      affiliation: "Private practice (UK) / Protrusive Dental Podcast"
    },
    host: "Dr. Jaz Gulati",
    tags: ["foundational", "ceramic-classification", "decision-making", "lithium-disilicate", "zirconia"],
    mapTo: ["restorative/cad-cam-ceramics", "prosth/ceramic-materials"],
    summary: "Accessible entry point for clinicians unfamiliar with ceramic material selection. Gulati breaks down his decision algorithm: if posterior with good enamel → lithium disilicate (eMax or LiSi). If posterior with compromised enamel → zirconia full coverage. If severe bruxist → consider PFM with metal occlusal. Covers why he won't use zirconia for partial coverage, the eMax vs LiSi question, monolithic vs layered considerations, and how his approach differs from what dental schools typically teach (strength/aesthetics dichotomy vs his enamel-availability framework).\n\nReferences conversations with Ed McLaren, Chris Orr, and Nasser Barghi on the same topic.",
    takeaways: "• Decision framework: Enamel present → lithium disilicate (bondable). Enamel compromised → zirconia (retention/resistance form).\n• eMax and LiSi are both lithium disilicates — eMax is Ivoclar's brand. Don't confuse brand with material class.\n• Zirconia onlays: controversial. Gulati and multiple cited experts (McLaren, Orr, Barghi) recommend against partial-coverage zirconia.\n• For anterior veneers: lithium disilicate or feldspathic — never zirconia.\n• PFM still has a role: severe bruxism where metal occlusal surface is desirable and aesthetics are not primary concern.\n• Monolithic zirconia: keep porcelain layering to labial surface only (same logic as PFMs — unsupported layering ceramic chips).\n• This is the 'start here' episode for ceramic decision-making.",
    context: "Solo teaching episode from Gulati aimed at newer clinicians or those wanting a simplified framework. Not a research presentation — a clinical decision guide informed by referenced conversations with recognized authorities (McLaren, Orr, Barghi).\n\nAppropriate as a foundational/introductory resource. For deeper material science, see PDP117 (McLaren).",
    notes: "Good 'Start Here' entry for the Ceramic Materials subcategory. Conversational tone with student co-host makes it approachable.",
    refs: []
  }
];

// --- SUBCATEGORY GROUPS (mirrors restorative product subcategories where possible) ---
export const RESTORATIVE_MEDIA_GROUPS = [
  "Adhesive Protocols & Material Selection",
  "Bonding Science & Technique",
  "Ceramic Materials & Classification",
  "Indirect Restorations & Cementation",
  "Direct Composite Technique",
  "Surface Treatments & Fiber Reinforcement"
];

// --- CLASSIFIER ---
export function restorativeMediaGetGroup(cat) {
  if (!cat) return "Uncategorized";
  const c = cat.toLowerCase();
  if (c.includes("adhesive protocol") || (c.includes("material selection") && !c.includes("ceramic"))) return "Adhesive Protocols & Material Selection";
  if (c.includes("bonding science")) return "Bonding Science & Technique";
  if (c.includes("ceramic material")) return "Ceramic Materials & Classification";
  if (c.includes("indirect restoration") || c.includes("cementation")) return "Indirect Restorations & Cementation";
  if (c.includes("direct composite") || c.includes("layering")) return "Direct Composite Technique";
  if (c.includes("surface treatment") || c.includes("fiber")) return "Surface Treatments & Fiber Reinforcement";
  return "Uncategorized";
}
