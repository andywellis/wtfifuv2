// ============================================================
// WTFIFU — Media Registry
// ============================================================
// Central registry mapping specialty IDs to their media data.
// When you add a new specialty's media file, register it here.
// Specialties without entries here will show "Coming soon" in Learn mode.
// ============================================================

import {
  RESTORATIVE_MEDIA,
  RESTORATIVE_MEDIA_GROUPS,
  RESTORATIVE_MEDIA_CIT,
  restorativeMediaGetGroup
} from "./restorativeMedia";

// Registry: specialty ID → media config
// As you build out more specialties, add their entry here.
// Structure matches the SPECIALTY_REGISTRY pattern in ProductBrowser.jsx.
export const MEDIA_REGISTRY = {
  restorative: {
    entries: RESTORATIVE_MEDIA,
    groups: RESTORATIVE_MEDIA_GROUPS,
    citations: RESTORATIVE_MEDIA_CIT,
    getGroup: restorativeMediaGetGroup
  }
  // endo:       { entries: ENDO_MEDIA, ... }        ← add when built
  // implants:   { entries: IMPLANT_MEDIA, ... }     ← add when built
  // perio:      { entries: PERIO_MEDIA, ... }       ← add when built
  // prosth:     { entries: PROSTH_MEDIA, ... }      ← add when built
  // etc.
};

// Helper: is there curated media for this specialty yet?
export function hasMediaFor(specialtyId) {
  const config = MEDIA_REGISTRY[specialtyId];
  return config && config.entries && config.entries.length > 0;
}

// Helper: get entry count for a specialty (for tile badges)
export function getMediaCount(specialtyId) {
  const config = MEDIA_REGISTRY[specialtyId];
  if (!config || !config.entries) return 0;
  return config.entries.length;
}

// Helper: get full config for a specialty
export function getMediaConfig(specialtyId) {
  return MEDIA_REGISTRY[specialtyId] || null;
}

// Helper: combined count across all specialties (for landing page display)
export function getTotalMediaCount() {
  return Object.values(MEDIA_REGISTRY).reduce(
    (sum, config) => sum + (config.entries?.length || 0),
    0
  );
}
