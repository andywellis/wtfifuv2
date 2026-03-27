import { useState } from "react";
import ProductBrowser from "./ProductBrowser.jsx";
import EndoBrowser from "./EndoBrowser.jsx";

const SPECIALTIES = [
  { id: "restorative", name: "Restorative", subtitle: "CAD/CAM blocks, composites, bonding agents, cements, staining, polishing", icon: "🦷", color: "#22d3ee", bg: "#0c2d3e", filterGroups: ["Restorative Blocks", "Glass-Ceramics", "Composites", "Bonding Agents", "Cements", "Stain / Glaze Systems", "Polishing Systems"], ready: true },
  { id: "prostho", name: "Prosthodontics", subtitle: "Crown & bridge, provisionals, RPDs, dentures, staining, polishing, impressions", icon: "👑", color: "#60a5fa", bg: "#0a1a2e", filterGroups: ["Zirconia", "Gold / Metal", "Ti-Base", "Cements", "Provisional Materials", "Stain / Glaze Systems", "Polishing Systems", "Impression & Scanning", "Removable Aids & Instruments", "RPDs & Flexible Partials", "Dentures & Overdentures"], ready: true },
  { id: "endo", name: "Endodontics", subtitle: "File systems, irrigants, bioceramics, sealers, VPT, obturation", icon: "🔬", color: "#fb7185", bg: "#2d0f1e", filterGroups: ["Access Burs", "Hand Files", "Glide Path & Orifice Openers", "Rotary & Reciprocating Systems", "Irrigants & Solvents", "Bioceramics & VPT", "Obturation Materials", "Sealers"], ready: true },
  { id: "perio", name: "Periodontics & Surgery", subtitle: "Membranes, biologics, bone grafts, sutures, hemostatics", icon: "🩹", color: "#f472b6", bg: "#831843", filterGroups: [], ready: false },
  { id: "implants", name: "Implantology", subtitle: "Systems, surfaces, connections, platform switching, All-on-X, provisionals", icon: "🔩", color: "#a8a29e", bg: "#1a1a14", filterGroups: [], ready: false },
  { id: "preventive", name: "Preventive", subtitle: "Fluorides, sealants, remineralizing agents, caries protocols", icon: "🛡️", color: "#10b981", bg: "#064e3b", filterGroups: [], ready: false },
  { id: "lasers", name: "Lasers", subtitle: "Diode, Er:YAG, Nd:YAG, CO₂ — wavelengths, indications, settings", icon: "⚡", color: "#f59e0b", bg: "#78350f", filterGroups: [], ready: false },
  { id: "bioactive", name: "Bioactive Materials", subtitle: "Bioceramics, MTA, Biodentine, bioactive composites, liners", icon: "🧬", color: "#c084fc", bg: "#3b1f6e", filterGroups: [], ready: false },
  { id: "ofp", name: "Orofacial Pain", subtitle: "Injectables, splints, physical medicine, acupuncture, pharmacology", icon: "💉", color: "#f43f5e", bg: "#4c0519", filterGroups: [], ready: false },
  { id: "sleep", name: "Sleep Dentistry", subtitle: "MADs, myofunctional therapy, ancillary OSA treatments, screening", icon: "😴", color: "#818cf8", bg: "#1e1b4b", filterGroups: [], ready: false },
  { id: "sedation", name: "Sedation & Anesthesia", subtitle: "N₂O, anxiolysis, moderate sedation, deep sedation, emergency protocols", icon: "🫧", color: "#06b6d4", bg: "#083344", filterGroups: [], ready: false },
  { id: "printing", name: "3D Printing", subtitle: "Printer tech, resins (temp/perm/guides/dentures), post-processing protocols", icon: "🖨️", color: "#f97316", bg: "#431407", filterGroups: [], ready: false },
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
          Dental materials protocols organized by specialty.<br />Surface treatments, cementation, bonding — evidence over IFU.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16, marginBottom: 48 }}>
        {SPECIALTIES.map(s => (
          <div key={s.id} onClick={() => s.ready && onSelect(s)} style={{
            background: `linear-gradient(145deg, ${s.bg}, #060a14)`, borderRadius: 16, padding: "28px 24px",
            cursor: s.ready ? "pointer" : "default", border: `1px solid ${s.color}${s.ready ? "22" : "08"}`,
            transition: "all 0.2s", position: "relative", opacity: s.ready ? 1 : 0.4, minHeight: 140,
            display: "flex", flexDirection: "column", justifyContent: "space-between",
          }}
          onMouseEnter={e => { if (s.ready) { e.currentTarget.style.borderColor = s.color + "55"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = `0 12px 40px ${s.color}15`; }}}
          onMouseLeave={e => { e.currentTarget.style.borderColor = s.color + (s.ready ? "22" : "08"); e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
            <div>
              <div style={{ fontSize: 36, marginBottom: 12 }}>{s.icon}</div>
              <h2 style={{ fontFamily: "'Outfit'", fontSize: 22, fontWeight: 800, color: "#f1f5f9", margin: "0 0 6px" }}>{s.name}</h2>
              <p style={{ color: "#64748b", fontSize: 12, lineHeight: 1.4, margin: 0 }}>{s.subtitle}</p>
            </div>
            <div style={{ marginTop: 16, display: "flex", gap: 5, flexWrap: "wrap" }}>
              {s.filterGroups.slice(0, 4).map(g => (
                <span key={g} style={{ background: `${s.color}15`, color: s.color, fontSize: 9, fontWeight: 600, padding: "3px 8px", borderRadius: 10 }}>{g}</span>
              ))}
            </div>
            {!s.ready && <div style={{ position: "absolute", top: 16, right: 16, background: "#1e293b", color: "#475569", fontSize: 9, fontWeight: 700, padding: "3px 10px", borderRadius: 12, letterSpacing: 1 }}>COMING SOON</div>}
            {s.ready && <div style={{ position: "absolute", top: 16, right: 16, color: s.color, fontSize: 18, opacity: 0.4 }}>→</div>}
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", padding: "0 0 32px", color: "#1e293b", fontSize: 10, letterSpacing: 1.5 }}>
        EVIDENCE-BASED · IFU CONFLICTS NOTED · 2-BOTTLE SILANE PREFERRED · AEGD PROGRAM REFERENCE
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
}
