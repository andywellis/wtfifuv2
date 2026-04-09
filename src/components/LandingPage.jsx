import { SPECIALTIES } from "../data/shared.js";

export default function LandingPage({ onSelectSpecialty }) {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px" }}>
      <link href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,600;6..72,700;6..72,800&family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      
      {/* Hero */}
      <div style={{ textAlign: "center", padding: "48px 0 36px" }}>
        <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 5, color: "#475569", textTransform: "uppercase", marginBottom: 10 }}>
          Evidence-Based Clinical Quick Reference
        </div>
        <h1 style={{ fontFamily: "'Newsreader',Georgia,serif", fontSize: 44, fontWeight: 800, color: "#f1f5f9", margin: "0 0 6px", lineHeight: 1.05 }}>
          WTF<span style={{ color: "#22d3ee" }}>IFU</span>
        </h1>
        <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 18, fontWeight: 300, color: "#ffffff", letterSpacing: 1.5, margin: "0 0 10px" }}>
          Where To Find Instructions for Use
        </div>
        <p style={{ color: "#64748b", fontSize: 14, maxWidth: 520, margin: "0 auto", lineHeight: 1.5 }}>
          Dental materials protocols organized by specialty. Surface treatments, cementation, bonding — evidence over IFU where they conflict.
        </p>
        <p style={{ color: "#475569", fontSize: 11, marginTop: 10 }}>
          Evidence current as of April 2026
        </p>
      </div>

      {/* Specialty Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16, marginBottom: 48 }}>
        {SPECIALTIES.map(spec => (
          <div
            key={spec.id}
            onClick={() => spec.ready ? onSelectSpecialty(spec) : null}
            style={{
              background: `linear-gradient(145deg, ${spec.bg}, #060a14)`,
              borderRadius: 16,
              padding: "28px 24px",
              cursor: spec.ready ? "pointer" : "default",
              border: `1px solid ${spec.color}${spec.ready ? "22" : "0a"}`,
              transition: "all 0.2s",
              position: "relative",
              opacity: spec.ready ? 1 : 0.45,
              minHeight: 140,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            onMouseEnter={e => { if (spec.ready) { e.currentTarget.style.borderColor = spec.color + "55"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = `0 12px 40px ${spec.color}15`; }}}
            onMouseLeave={e => { e.currentTarget.style.borderColor = spec.color + (spec.ready ? "22" : "0a"); e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <div>
              <div style={{ fontSize: 36, marginBottom: 12 }}>{spec.icon}</div>
              <h2 style={{ fontFamily: "'Outfit'", fontSize: 22, fontWeight: 800, color: "#f1f5f9", margin: "0 0 6px" }}>{spec.name}</h2>
              <p style={{ color: "#64748b", fontSize: 12, lineHeight: 1.4, margin: 0 }}>{spec.subtitle}</p>
            </div>
            <div style={{ marginTop: 16, display: "flex", gap: 5, flexWrap: "wrap" }}>
              {spec.groups.slice(0, 4).map(g => (
                <span key={g} style={{ background: `${spec.color}15`, color: spec.color, fontSize: 9, fontWeight: 600, padding: "3px 8px", borderRadius: 10 }}>{g}</span>
              ))}
            </div>
            {!spec.ready && (
              <div style={{ position: "absolute", top: 16, right: 16, background: "#1e293b", color: "#475569", fontSize: 9, fontWeight: 700, padding: "3px 10px", borderRadius: 12, letterSpacing: 1 }}>
                COMING SOON
              </div>
            )}
            {spec.ready && (
              <div style={{ position: "absolute", top: 16, right: 16, color: spec.color, fontSize: 18, opacity: 0.4 }}>→</div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", padding: "0 0 32px", color: "#1e293b", fontSize: 10, letterSpacing: 1.5 }}>
        EVIDENCE-BASED · IFU CONFLICTS NOTED · 2-BOTTLE SILANE PREFERRED · AEGD PROGRAM REFERENCE
      </div>
    </div>
  );
}
