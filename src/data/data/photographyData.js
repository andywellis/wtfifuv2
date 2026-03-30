// ═══════════════════════════════════════════════════════════════════
// DENTAL PHOTOGRAPHY DATA — Settings, Equipment, Mirrors, Protocols
// ═══════════════════════════════════════════════════════════════════

export const PHOTO_CIT = {
  "singh-2024-dental-photo": { pmid: null, title: "Capturing the art and science of dentistry: f/22-32 for intraoral DoF; 1/125-1/200 to kill ambient light; flash = only light source", authors: "Singh et al.", journal: "J Conserv Dent Endod", year: 2024, grade: "MODERATE" },
  "ahmad-2020-essentials": { pmid: null, title: "Essentials of Dental Photography: 100mm on FF vs 60mm on APS-C for equivalent working distance; standardized magnification ratios", authors: "Ahmad I", journal: "John Wiley & Sons (textbook)", year: 2020, grade: "MODERATE" },
  "ong-2016-standardized-views": { pmid: null, title: "Standardized photographic views: lens barrel magnification ratios ensure volumetric consistency across longitudinal records", authors: "Ong CT, et al.", journal: "PMC", year: 2016, grade: "MODERATE" },
};

export const photoGetGroup = c => {
  if (c.includes("Setting") || c.includes("Exposure")) return "Camera Settings";
  if (c.includes("Lens")) return "Lens Selection";
  if (c.includes("Flash") || c.includes("Lighting")) return "Flash & Lighting";
  if (c.includes("Mirror")) return "Photographic Mirrors";
  if (c.includes("Magnification") || c.includes("Protocol") || c.includes("Workflow")) return "Protocols & Workflow";
  return "Other";
};

export const PHOTO_GROUPS = ["Camera Settings", "Lens Selection", "Flash & Lighting", "Photographic Mirrors", "Protocols & Workflow"];

// ═══════════════════════════════════════════════
// 1. CAMERA SETTINGS
// ═══════════════════════════════════════════════
export const CAMERA_SETTINGS = [
  {
    id: "dslr-settings", name: "Core DSLR Settings — Manual Mode Protocol", cat: "Camera Settings — Exposure Triangle",
    notes: "ALWAYS shoot in MANUAL MODE (M). Auto modes adjust exposure based on dark oral background → inconsistent, overexposed images.\n\nINTRAORAL (teeth/arch):\n• Aperture: f/22 to f/32 — maximizes depth of field (critical in macro)\n• Shutter speed: 1/125 to 1/200s — kills ambient light; flash is ONLY light source\n• ISO: 100 or 200 — lowest noise\n• White balance: Flash or Daylight (5500K)\n• Focus: MANUAL FOCUS — set magnification ratio on lens barrel, lean body forward/backward to focus\n\nEXTRAORAL (portraits):\n• Aperture: f/8 to f/11 — shallower DoF acceptable\n• Shutter speed: 1/125 to 1/200s\n• ISO: 100 or 200\n• White balance: Flash or Daylight (5500K)\n• Focus: Auto Focus (AF) acceptable\n\nBRAND-SPECIFIC COLOR PROFILES (accurate shade for lab):\n• Canon: Picture Style → 'Faithful' or 'Neutral'\n• Nikon: Picture Control → 'Neutral' or 'Standard'\n• Sony: Creative Look/Style → 'Neutral' (NT)\n\nWHY f/22+: in macro photography, DoF shrinks drastically with magnification. f/22-32 keeps full arch (centrals to molars) in focus.\nWHY 1/200s: prevents mixed ambient light (LED overheads, fluorescent, window light) from contaminating shade accuracy — only the color-corrected flash (5500K) hits the sensor.",
    refs: ["singh-2024-dental-photo"]
  },
];

// ═══════════════════════════════════════════════
// 2. LENS SELECTION
// ═══════════════════════════════════════════════
export const LENSES = [
  {
    id: "macro-lens-guide", name: "Macro Lens Selection by Camera Brand & Sensor", cat: "Lens — Brand Recommendations",
    notes: "LENS CHOICE DEPENDS ON SENSOR SIZE.\n\nFull-frame sensors: 90–105mm macro lens → comfortable working distance (12–15 inches from patient).\nAPS-C (crop) sensors: crop factor 1.5–1.6× makes 100mm behave like 150mm → too far from patient. Use 60mm lens instead.\n\nCANON:\n• Full-frame: Canon EF 100mm f/2.8L Macro IS USM — industry gold standard; razor-sharp optics\n• APS-C: Canon EF-S 60mm f/2.8 Macro USM — ideal working distance for Rebel series\n\nNIKON:\n• Full-frame: AF-S VR Micro-Nikkor 105mm f/2.8G IF-ED — exceptional clarity, accurate color\n• APS-C: AF-S Micro-Nikkor 60mm f/2.8G ED — workhorse for D7000 series\n\nSONY:\n• Full-frame & APS-C: Sony FE 90mm f/2.8 Macro G OSS — definitive Sony choice; exceptionally sharp. On crop sensor, working distance slightly longer than ideal.\n\nKEY: all dental macro lenses must achieve 1:1 reproduction ratio. Third-party options (Sigma 105mm, Tamron 90mm) are also excellent and more budget-friendly.",
    refs: ["ahmad-2020-essentials"]
  },
];

// ═══════════════════════════════════════════════
// 3. FLASH & LIGHTING
// ═══════════════════════════════════════════════
export const FLASH = [
  {
    id: "flash-selection", name: "Flash Selection — Ring vs Twin vs Studio", cat: "Flash & Lighting — Clinical Scenarios",
    notes: "FLASH TYPES AND WHEN TO USE EACH:\n\n❌ BUILT-IN POP-UP FLASH: NEVER use. Macro lens barrel blocks light → massive dark crescent shadow over lower half of image.\n\nRING FLASH (daily workhorse):\n• Light wraps 360° around lens → eliminates shadows → deep oral cavity illumination\n• BEST FOR: routine documentation, posterior quadrants, occlusal mirror shots, orthodontics\n• LIMITATION: perfectly flat light washes out surface texture and translucency on anterior teeth. Cannot show lobes, developmental grooves, perikymata.\n\nTWIN FLASH (esthetic standard):\n• Two off-axis flash heads on brackets → directional shadows → reveals 3D contour\n• BEST FOR: anterior esthetic cases, custom shade communication to lab, veneers, capturing micro-anatomy (translucency, line angles, surface texture)\n• LIMITATION: bulkier, requires practice to maneuver around retractors\n\nSTUDIO DIFFUSERS / SOFTBOXES:\n• Soft, wrapping light → flatters skin, eliminates harsh specular reflections\n• BEST FOR: extraoral portraits, full-face smile design, practice marketing\n• CANNOT illuminate intraoral cavity — strictly extraoral use\n\nCLINICAL RULE: ring flash for documentation speed; twin flash when shade accuracy or esthetics matter. If you buy ONE flash, ring flash is more versatile for GP use.",
    refs: ["singh-2024-dental-photo"]
  },
];

// ═══════════════════════════════════════════════
// 4. PHOTOGRAPHIC MIRRORS
// ═══════════════════════════════════════════════
export const MIRRORS = [
  {
    id: "photo-mirrors", name: "Dental Photographic Mirrors — Coatings, Types & Care", cat: "Photographic Mirror — Selection & Care",
    notes: "MUST USE FRONT-SURFACE MIRRORS. Rear-surface (bathroom-style) mirrors cause ghosting/double-image from refraction through glass.\n\nMIRROR COATINGS (reflectivity):\n• Chromium: ~65% reflectivity — dark, muddy images. AVOID.\n• Rhodium / Titanium: 75–80% — INDUSTRY STANDARD. Durable, scratch-resistant. Rhodium = slight warm/red tint. Titanium = slight cool/blue tint.\n• Dielectric / Ultrabright: 99–100% — PREMIUM. 100+ nanolayers of metallic oxides → absolute color fidelity (CIELAB), no tinting. Best for shade communication.\n\nCORE MIRROR SET (3 mirrors cover all views):\n• Adult Occlusal: widest (paddle shape) — full upper/lower arch shots\n• Child Occlusal: narrower — pedo patients, restricted opening, strong gag reflexes\n• Buccal: long, narrow — lateral/side views of posterior teeth\n\nBRAND RECOMMENDATIONS:\n• doctorseyes Ultrabright: 99.9% dielectric coating — GOLD STANDARD. Smooth float glass, removable autoclavable silicone handles.\n• PhotoMed: rhodium/titanium front-surface — excellent, slightly more budget-friendly\n• Clinician's Choice / Hu-Friedy: durable rhodium metal + glass — standard in many practices\n\nCARE PROTOCOL:\n⚠ NEVER put in ultrasonic cleaner with metal instruments → scratches instantly\n• Hand wash with non-abrasive sponge + mild detergent\n• THOROUGHLY DRY before sterilization pouch (wet autoclaving = permanent hard-water stains)\n• Autoclavable to 200°C (390°F)\n• Anti-fog: warm mirror under hot water or use anti-fog spray before insertion",
    refs: ["singh-2024-dental-photo"]
  },
];

// ═══════════════════════════════════════════════
// 5. PROTOCOLS & WORKFLOW
// ═══════════════════════════════════════════════
export const PHOTO_PROTOCOLS = [
  {
    id: "magnification-ratios", name: "Magnification Ratios — Standardized Views", cat: "Protocol — Magnification Ratios",
    notes: "SET MAGNIFICATION ON LENS BARREL — never use autofocus for intraoral. If 'before' is shot at 1:2 and 'after' at 1:3, teeth appear completely different sizes → ruins case presentation.\n\nFULL FACE & PORTRAIT:\n• Full-frame: 1:10\n• APS-C: 1:15\n• Use: natural repose, full face smile, lateral profile\n\nSTANDARD CLINICAL VIEW ('workhorse' ratio):\n• Full-frame: 1:2\n• APS-C: 1:3\n• Use: full natural smile, retracted frontal (teeth together + slightly parted), retracted lateral, maxillary/mandibular occlusal arch shots\n\nMACRO / SINGLE TOOTH:\n• Full-frame: 1:1\n• APS-C: 1:1.5\n• Use: 1–3 anterior teeth, custom shade matching, surface texture, translucency, margin close-ups\n\nWHY DIFFERENT FOR APS-C: crop sensors artificially magnify the image (1.5–1.6× crop factor). Different barrel settings produce equivalent framing.\n\nTECHNIQUE: set ratio on lens barrel → switch to manual focus → lean body forward/backward until teeth are sharp in viewfinder. This guarantees volumetric consistency across ALL patient records over years of documentation.",
    refs: ["ahmad-2020-essentials","ong-2016-standardized-views"]
  },
  {
    id: "photo-checklist", name: "Standard Photo Series — Clinical Documentation Checklist", cat: "Protocol — Shot Checklist",
    notes: "MINIMUM CLINICAL PHOTO SERIES (12 views):\n\nEXTRAORAL (3 views):\n1) Full face — natural repose (lips relaxed, no smile)\n2) Full face — natural smile\n3) Profile — right side (or both sides)\n\nINTRAORAL — RETRACTED (5 views):\n4) Frontal — teeth in MIP (maximum intercuspation)\n5) Frontal — teeth slightly apart (shows incisal edges)\n6) Right lateral — teeth in MIP\n7) Left lateral — teeth in MIP\n8) Frontal — overjet/overbite view\n\nINTRAORAL — MIRROR/OCCLUSAL (2 views):\n9) Maxillary occlusal (upper arch mirror shot)\n10) Mandibular occlusal (lower arch mirror shot)\n\nSUPPLEMENTAL (as needed):\n11) Close-up of chief complaint area\n12) Shade tab next to prepared tooth\n\nTIPS:\n• Retractors: have patient hold or use assistant. Metal retractors give best retraction; plastic is more comfortable.\n• Mirror fogging: warm mirror under hot water or use anti-fog before insertion. Have assistant blow air across mirror surface during shot.\n• Lip/cheek moisture: dry with gauze before shooting.\n• Background: black contrasters (buccal shields) clean up lateral and occlusal shots dramatically.",
    refs: ["singh-2024-dental-photo"]
  },
];

// ═══════════════════════════════════════════════
export const ALL_PHOTO_PRODUCTS = [
  ...CAMERA_SETTINGS,
  ...LENSES,
  ...FLASH,
  ...MIRRORS,
  ...PHOTO_PROTOCOLS,
];
