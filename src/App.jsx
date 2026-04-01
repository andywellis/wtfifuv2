import { useState } from "react";
import ProductBrowser from "./ProductBrowser.jsx";
import EndoBrowser from "./EndoBrowser.jsx";

// ═══════════════════════════════════════════════
// SPECIALTY REGISTRY — all tiles, all wired
// ═══════════════════════════════════════════════
const SPECIALTIES = [
  // ── Core Specialties ──
  {
    id: "restorative", name: "Restorative", icon: "🦷", color: "#22d3ee", bg: "#0c2d3e",
    subtitle: "CAD/CAM blocks, composites, bonding agents, cements, surface treatments, staining, polishing",
    filterGroups: ["Restorative Blocks", "Glass-Ceramics", "Zirconia", "Composites", "Post & Core", "Bonding Agents", "Cements", "Surface Treatments", "Stain / Glaze Systems", "Polishing Systems"],
    dataKey: "restprosth", ready: true,
  },
  {
    id: "prostho", name: "Prosthodontics", icon: "👑", color: "#60a5fa", bg: "#0a1a2e",
    subtitle: "Crown & bridge, provisionals, impressions, removables, tissue management, shade matching, full-arch design",
    filterGroups: ["Zirconia", "Gold / Metal", "Ti-Base", "Cements", "Provisional Materials", "Surface Treatments", "Stain / Glaze Systems", "Polishing Systems", "Prosthesis Design", "Impression Materials", "Tissue Management", "Removable Prosthetics", "Shade Matching"],
    dataKey: "restprosth", ready: true,
  },
  {
    id: "endo", name: "Endodontics", icon: "🔬", color: "#fb7185", bg: "#2d0f1e",
    subtitle: "File systems, irrigants, bioceramics, sealers, VPT, obturation",
    dataKey: "endo", ready: true,
  },
  {
    id: "perio", name: "Periodontics", icon: "🩹", color: "#f472b6", bg: "#831843",
    subtitle: "Membranes, biologics, bone grafts, sutures, hemostatics, surgical protocols",
    dataKey: "perio", ready: true,
  },
  {
    id: "implants", name: "Implantology", icon: "🔩", color: "#a8a29e", bg: "#1a1a14",
    subtitle: "Systems, abutments, overdenture attachments, guided surgery, All-on-X protocols",
    dataKey: "implants", ready: true,
  },
  // ── Preventive & Pediatric ──
  {
    id: "preventive", name: "Preventive", icon: "🛡️", color: "#10b981", bg: "#064e3b",
    subtitle: "Fluorides, SDF, sealants, remineralization, xerostomia, CAMBRA protocols",
    dataKey: "preventive", ready: true,
  },
  {
    id: "pediatric", name: "Pediatric Dentistry", icon: "👶", color: "#a3e635", bg: "#1a2e05",
    subtitle: "Hall Technique, zirconia crowns, pulp therapy, behavior management, space maintenance",
    dataKey: "pediatric", ready: true,
  },
  // ── Pain, Sedation, Sleep ──
  {
    id: "sedation", name: "Sedation & Anesthesia", icon: "🫧", color: "#06b6d4", bg: "#083344",
    subtitle: "Local anesthetics, N₂O, oral anxiolysis, IV sedation, emergency drugs, injection techniques",
    dataKey: "sedation", ready: true,
  },
  {
    id: "ofp", name: "Orofacial Pain / TMD", icon: "💉", color: "#f43f5e", bg: "#4c0519",
    subtitle: "Splints, pharmacology, injection techniques, acupuncture, physical modalities",
    dataKey: "ofp", ready: true,
  },
  {
    id: "sleep", name: "Sleep Dentistry", icon: "😴", color: "#818cf8", bg: "#1e1b4b",
    subtitle: "MADs, myofunctional therapy, positional therapy, screening tools, titration protocols",
    dataKey: "sleep", ready: true,
  },
  // ── Orthodontics & Trauma ──
  {
    id: "ortho", name: "Orthodontics", icon: "🔗", color: "#fbbf24", bg: "#422006",
    subtitle: "Brackets, wires, bonding, aligners, IPR, retention, TADs, surgical adjuncts",
    dataKey: "ortho", ready: true,
  },
  {
    id: "trauma", name: "Dental Trauma", icon: "🚨", color: "#ef4444", bg: "#450a0a",
    subtitle: "IADT 2020 — avulsion, luxation, crown/root fractures, splinting, follow-up",
    dataKey: "trauma", ready: true,
  },
  // ── Technology ──
  {
    id: "lasers", name: "Lasers", icon: "⚡", color: "#f59e0b", bg: "#78350f",
    subtitle: "Diode, Er:YAG, Nd:YAG, CO₂ — wavelengths, PBM, aPDT, safety protocols",
    dataKey: "lasers", ready: true,
  },
  {
    id: "printing", name: "3D Printing", icon: "🖨️", color: "#f97316", bg: "#431407",
    subtitle: "Printers, resins by application, FDA status, post-curing, no-prep veneers",
    dataKey: "printing", ready: true,
  },
  {
    id: "oralmed", name: "Oral Medicine", icon: "🏥", color: "#e879f9", bg: "#4a044e",
    subtitle: "OLP, leukoplakia, OSCC recognition, pemphigus/pemphigoid, MRONJ, medical clearance, IE prophylaxis",
    dataKey: "oralmed", ready: true,
  },
  {
    id: "photo", name: "Clinical Photography", icon: "📸", color: "#c084fc", bg: "#3b1f6e",
    subtitle: "DSLR settings, lens selection, flash, mirrors, magnification ratios, shot checklist",
    dataKey: "photo", ready: true,
  },
  {
    id: "tx-planning", name: "Treatment Planning", icon: "📋", color: "#e879f9", bg: "#1a0f2e",
    subtitle: "Philosophies (Kois, Spear, Dawson, DSD), classifications, sequencing, CMOREPOOOPE",
    filterGroups: ["Treatment Planning Philosophies", "Classification Systems", "Treatment Sequencing & Decisions", "Risk Assessment"],
    dataKey: "tx-planning", ready: true,
  },
  {
    id: "oral-surgery", name: "Oral Surgery", icon: "🔪", color: "#f97316", bg: "#1a0f0a",
    subtitle: "Forceps, surgical extraction, coronectomy, piezosurgery, socket preservation, complications",
    dataKey: "oral-surgery", ready: true,
  },
];

function LandingPage({ onSelect }) {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px" }}>
      <div style={{ textAlign: "center", padding: "48px 0 40px" }}>
        <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 5, color: "#475569", textTransform: "uppercase", marginBottom: 10 }}>Evidence-Based Clinical Quick Reference</div>
        <h1 style={{ fontFamily: "'Newsreader',Georgia,serif", fontSize: 48, fontWeight: 800, color: "#f1f5f9", margin: "0 0 12px", lineHeight: 1.05 }}>
          WTF<span style={{ color: "#22d3ee" }}>IFU</span>
        </h1>
        <p style={{ color: "#64748b", fontSize: 14, maxWidth: 540, margin: "0 auto", lineHeight: 1.6 }}>
          Dental materials &amp; clinical protocols organized by specialty.<br />
          {SPECIALTIES.filter(s => s.ready).length} specialties · 590+ products · 750+ citations
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16, marginBottom: 48 }}>
        {SPECIALTIES.map(s => (
          <div key={s.id} onClick={() => s.ready && onSelect(s)} style={{
            background: `linear-gradient(145deg, ${s.bg}, #060a14)`, borderRadius: 16, padding: "28px 24px",
            cursor: s.ready ? "pointer" : "default", border: `1px solid ${s.color}${s.ready ? "22" : "08"}`,
            transition: "all 0.2s", position: "relative", opacity: s.ready ? 1 : 0.4, minHeight: 120,
            display: "flex", flexDirection: "column", justifyContent: "space-between",
          }}
          onMouseEnter={e => { if (s.ready) { e.currentTarget.style.borderColor = s.color + "55"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = `0 12px 40px ${s.color}15`; }}}
          onMouseLeave={e => { e.currentTarget.style.borderColor = s.color + (s.ready ? "22" : "08"); e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
            <div>
              <div style={{ fontSize: 32, marginBottom: 10 }}>{s.icon}</div>
              <h2 style={{ fontFamily: "'Outfit'", fontSize: 20, fontWeight: 800, color: "#f1f5f9", margin: "0 0 6px" }}>{s.name}</h2>
              <p style={{ color: "#64748b", fontSize: 11, lineHeight: 1.4, margin: 0 }}>{s.subtitle}</p>
            </div>
            {!s.ready && <div style={{ position: "absolute", top: 16, right: 16, background: "#1e293b", color: "#475569", fontSize: 9, fontWeight: 700, padding: "3px 10px", borderRadius: 12, letterSpacing: 1 }}>COMING SOON</div>}
            {s.ready && <div style={{ position: "absolute", top: 16, right: 16, color: s.color, fontSize: 18, opacity: 0.4 }}>→</div>}
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", padding: "0 0 32px", color: "#1e293b", fontSize: 10, letterSpacing: 1.5 }}>
        EVIDENCE-BASED · SCOPE DECISIONS LEFT TO PRACTITIONER · UPDATED 2026
      </div>
    </div>
  );
}

export default function App() {
  const [specialty, setSpecialty] = useState(null);
  const fl = <link href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,600;6..72,700;6..72,800&family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />;

  if (!specialty) return (
    <div style={{ fontFamily: "'Outfit',system-ui", background: "#060a14", minHeight: "100vh", color: "#e2e8f0" }}>
      {fl}<LandingPage onSelect={setSpecialty} />
    </div>
  );

  return (
    <div style={{ fontFamily: "'Outfit',system-ui", background: "#060a14", minHeight: "100vh", color: "#e2e8f0" }}>
      {fl}
      {specialty.id === "endo"
        ? <EndoBrowser specialty={specialty} onGoHome={() => setSpecialty(null)} />
        : <ProductBrowser specialty={specialty} onGoHome={() => setSpecialty(null)} />
      }
    </div>
  );
  {
    id: "pharmacology", name: "Pharmacology", icon: "💊", color: "#f472b6", bg: "#2e0f1a",
    subtitle: "Perioperative meds, anticoagulation, MRONJ, GLP-1/SGLT2, drug interactions, epi limits",
    filterGroups: ["Anticoagulants & Antiplatelets", "Antihypertensives", "Diabetes Medications", "Bisphosphonates & MRONJ", "Psychiatric Medications", "Corticosteroids", "Supplements & Cannabinoids", "Other Medication Classes", "Quick Reference"],
    dataKey: "pharmacology", ready: true,
  },

