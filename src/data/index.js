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

// Prosthodontics-specific products (zirconia, ti-base, gold, provisionals)
export { PROSTH_MATERIALS, PROVISIONALS } from "./prosthData.js";

// Endodontics products (files, irrigants, bioceramics, obturation, sealers)
export {
  ENDO_CIT, endoGetGroup, ENDO_GROUPS, ALL_ENDO,
  ACCESS_BURS, HAND_FILES, GLIDE_PATH, ROTARY_RECIP,
  IRRIGANTS, BIOCERAMICS, OBTURATION, SEALERS
} from "./endoData.js";
