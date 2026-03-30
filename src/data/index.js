// ═══════════════════════════════════════════════
// DATA INDEX — Re-export hub for all modular data
// ═══════════════════════════════════════════════

// Shared constants + shared product arrays (cements, surface tx, polishing, stain/glaze)
export {
  EG, CIT, CC, gc, CURE_INFO, ISOLATION, APA_INTRAORAL, SILANE_2B,
  getGroup, GROUPS, CEMENTS, SURFACE_TREATMENTS, POLISHING, STAIN_GLAZE
} from "./sharedRestProsthData.js";

// Restorative-specific products (blocks, composites, post/core, bonding)
export { REST_MATERIALS, COMPOSITES, POST_CORE, BONDING_AGENTS } from "./restorativeData.js";

// Prosthodontics-specific products (zirconia, ti-base, gold, provisionals, impressions, removables)
export { PROSTH_MATERIALS } from "./prosthData.js";

// Implantology
export {
  IMPLANT_CIT, implantGetGroup, IMPLANT_GROUPS, ALL_IMPLANT_PRODUCTS
} from "./implantData.js";

// Periodontics
export {
  PERIO_CIT, perioGetGroup, PERIO_GROUPS, ALL_PERIO
} from "./perioData.js";

// Endodontics
export {
  ENDO_CIT, endoGetGroup, ENDO_GROUPS, ALL_ENDO
} from "./endoData.js";

// Preventive Dentistry
export {
  PREV_CIT, prevGetGroup, PREV_GROUPS, ALL_PREVENTIVE_PRODUCTS
} from "./preventiveData.js";

// Sedation & Anesthesia
export {
  SED_CIT, sedGetGroup, SED_GROUPS, ALL_SEDATION_PRODUCTS
} from "./sedationData.js";

// OFP / TMD
export {
  OFP_CIT, ofpGetGroup, OFP_GROUPS, ALL_OFP_PRODUCTS
} from "./ofpData.js";

// Sleep Dentistry
export {
  SLEEP_CIT, sleepGetGroup, SLEEP_GROUPS, ALL_SLEEP_PRODUCTS
} from "./sleepData.js";

// Lasers
export {
  LASER_CIT, laserGetGroup, LASER_GROUPS, ALL_LASER_PRODUCTS
} from "./laserData.js";

// 3D Printing
export {
  PRINT_CIT, printGetGroup, PRINT_GROUPS, ALL_PRINTING_PRODUCTS
} from "./printingData.js";

// Orthodontics
export {
  ORTHO_CIT, orthoGetGroup, ORTHO_GROUPS, ALL_ORTHO_PRODUCTS
} from "./orthodonticsData.js";

// Pediatric Dentistry
export {
  PEDS_CIT, pedsGetGroup, PEDS_GROUPS, ALL_PEDS_PRODUCTS
} from "./pediatricData.js";

// Dental Trauma
export {
  TRAUMA_CIT, traumaGetGroup, TRAUMA_GROUPS, ALL_TRAUMA_PRODUCTS
} from "./traumaData.js";

// Dental Photography
export {
  PHOTO_CIT, photoGetGroup, PHOTO_GROUPS, ALL_PHOTO_PRODUCTS
} from "./photographyData.js";

// Oral Medicine
export {
  ORALMED_CIT, oralmedGetGroup, ORALMED_GROUPS, ALL_ORALMED_PRODUCTS
} from "./oralMedData.js";
