import { useState } from "react";
import { EG, CIT, CURE_INFO, ISOLATION, SILANE_2B, APA_INTRAORAL, gc } from "../data/shared.js";

// ── ReadMore (expandable rationale) ──
export function ReadMore({ children, color }) {
  const [open, setOpen] = useState(false);
  if (!children) return null;
  return (
    <div style={{ marginTop: 4 }}>
      <span onClick={() => setOpen(!open)} style={{ color: color || "#475569", fontSize: 10.5, cursor: "pointer", fontWeight: 600, textDecoration: "underline", textDecorationStyle: "dotted" }}>
        {open ? "▾ hide rationale" : "▸ read more"}
      </span>
      {open && <div style={{ color: "#64748b", fontSize: 11.5, lineHeight: 1.5, marginTop: 4, paddingLeft: 8, borderLeft: "2px solid #1e293b" }}>{children}</div>}
    </div>
  );
}

// ── Reference badge ──
export function Ref({ ids }) {
  const [show, setShow] = useState(false);
  if (!ids?.length) return null;
  const valid = ids.filter(id => CIT[id]);
  if (!valid.length) return null;
  return (
    <span style={{ position: "relative", display: "inline" }}>
      <span onClick={e => { e.stopPropagation(); setShow(!show); }} style={{ cursor: "pointer" }}>
        {valid.slice(0, 4).map((id, i) => {
          const g = EG[CIT[id]?.grade];
          return <sup key={id} style={{ fontSize: 8, fontWeight: 800, color: g?.color, background: g?.bg, padding: "1px 3px", borderRadius: 2, marginLeft: i ? 1 : 3 }}>{i + 1}</sup>;
        })}
        {valid.length > 4 && <sup style={{ fontSize: 8, color: "#475569" }}>+{valid.length - 4}</sup>}
      </span>
      {show && (
        <div onClick={e => e.stopPropagation()} style={{ position: "absolute", left: 0, top: "100%", zIndex: 50, width: 340, background: "#0c1222", border: "1px solid #1e293b", borderRadius: 10, padding: "10px 12px", marginTop: 4, boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ color: "#64748b", fontSize: 9, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase" }}>References</span>
            <span onClick={() => setShow(false)} style={{ color: "#475569", cursor: "pointer", fontSize: 14 }}>×</span>
          </div>
          {valid.map((id, i) => {
            const c = CIT[id], g = EG[c.grade];
            const url = c.pmid ? `https://pubmed.ncbi.nlm.nih.gov/${c.pmid}/` : c.url || null;
            return (
              <div key={id} style={{ marginBottom: 6, paddingBottom: 4, borderBottom: i < valid.length - 1 ? "1px solid #1e293b22" : "none" }}>
                <div style={{ display: "flex", gap: 5, alignItems: "flex-start" }}>
                  <span style={{ background: g?.bg, color: g?.color, fontSize: 7, fontWeight: 800, padding: "2px 4px", borderRadius: 2, flexShrink: 0, marginTop: 1 }}>{g?.label}</span>
                  <div>
                    <div style={{ color: "#cbd5e1", fontSize: 10.5, fontWeight: 600, lineHeight: 1.3 }}>{c.title}</div>
                    <div style={{ color: "#475569", fontSize: 9.5 }}>{c.authors} · <em>{c.journal}</em> {c.year}</div>
                    {url && <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: "#3b82f6", fontSize: 8.5, textDecoration: "none", fontWeight: 600 }}>{c.pmid ? `PMID:${c.pmid}` : "View"} ↗</a>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </span>
  );
}

// ── Section heading ──
export function S({ children, color, refs }) {
  return <h3 style={{ fontFamily: "'Newsreader',Georgia,serif", fontSize: 14, fontWeight: 700, color: color || "#e2e8f0", margin: "18px 0 6px", borderBottom: `1px solid ${color || "#334155"}33`, paddingBottom: 4, display: "flex", alignItems: "center", gap: 4, flexWrap: "wrap" }}>{children}<Ref ids={refs} /></h3>;
}

// ── Row (label: value) ──
export function R({ l, v, c, w }) {
  return (
    <div style={{ display: "flex", gap: 7, marginBottom: 3, alignItems: "flex-start" }}>
      <span style={{ color: c || "#475569", fontWeight: 700, fontSize: 10, minWidth: 80, textTransform: "uppercase", letterSpacing: 0.4, paddingTop: 2, flexShrink: 0 }}>{l}</span>
      <span style={{ color: "#cbd5e1", fontSize: 12, flex: 1, lineHeight: 1.5 }}>
        {v}{w && <span style={{ display: "inline-block", background: "#7f1d1d", color: "#fca5a5", fontSize: 9, fontWeight: 700, padding: "1px 5px", borderRadius: 3, marginLeft: 5 }}>⚠ {w}</span>}
      </span>
    </div>
  );
}

// ── Ordered list ──
export function OL({ items, c }) {
  return <ol style={{ margin: "4px 0", paddingLeft: 18, lineHeight: 1.6 }}>{items.map((s, i) => <li key={i} style={{ color: c || "#94a3b8", fontSize: 12, marginBottom: 2 }}>{s}</li>)}</ol>;
}

// ── Card container ──
export function Card({ bg, a, border, children }) {
  return <div style={{ background: bg || "rgba(255,255,255,0.03)", borderRadius: 7, padding: "8px 12px", marginBottom: 6, borderLeft: `3px solid ${border || a || "#334155"}` }}>{children}</div>;
}

// ── Curing info ──
export function CureInfo({ text }) {
  return <div style={{ background: "#0f172a", borderRadius: 6, padding: "6px 10px", marginTop: 6, border: "1px solid #1e293b" }}>
    <span style={{ color: "#fbbf24", fontSize: 9, fontWeight: 800 }}>💡 CURING: </span>
    <span style={{ color: "#94a3b8", fontSize: 10.5 }}>{text || CURE_INFO.standard}</span>
  </div>;
}

// ── Isolation info ──
export function IsolationInfo() {
  const [open, setOpen] = useState(false);
  return <div style={{ marginTop: 6 }}>
    <span onClick={() => setOpen(!open)} style={{ color: "#2dd4bf", fontSize: 10, cursor: "pointer", fontWeight: 700, textDecoration: "underline", textDecorationStyle: "dotted" }}>
      {open ? "▾ hide isolation" : "▸ isolation protocols"}
    </span>
    {open && <div style={{ background: "#0a1a1a", borderRadius: 6, padding: "8px 10px", marginTop: 4, border: "1px solid #1e293b" }}>
      <R l="Rubber Dam" v={ISOLATION.rubberDam} c="#2dd4bf" />
      <R l="Isolite" v={ISOLATION.isolite} c="#2dd4bf" />
      <R l="Cotton" v={ISOLATION.cottonRoll} c="#2dd4bf" />
      <ReadMore color="#2dd4bf">{ISOLATION.evidence}</ReadMore>
    </div>}
  </div>;
}

// ── Detail header ──
export function DetailHeader({ item, onBack, extra }) {
  const col = gc(item.cat);
  return <>
    <button onClick={onBack} style={{ background: "none", border: "none", color: col.a, cursor: "pointer", fontFamily: "'Outfit'", fontSize: 12, fontWeight: 700, padding: "8px 0", marginBottom: 8 }}>← Back</button>
    <div style={{ background: `linear-gradient(135deg, ${col.bg}, #080d19)`, borderRadius: 12, padding: "18px 22px", marginBottom: 12, border: `1px solid ${col.a}22` }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
        <div>
          <div style={{ color: col.a, fontSize: 9, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", marginBottom: 2 }}>{item.mfr}</div>
          <h1 style={{ fontFamily: "'Newsreader',Georgia,serif", fontSize: 24, color: "#f1f5f9", margin: "0 0 5px", fontWeight: 700 }}>{item.name}</h1>
          <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
            <span style={{ background: col.t, color: col.a, fontSize: 9, fontWeight: 700, padding: "2px 8px", borderRadius: 16 }}>{item.cat}</span>
            {extra}
          </div>
        </div>
        {item.strength && <div style={{ textAlign: "right" }}>
          <div style={{ color: "#475569", fontSize: 9, textTransform: "uppercase", letterSpacing: 1 }}>Strength</div>
          <div style={{ color: "#f1f5f9", fontSize: 17, fontWeight: 900, fontFamily: "'Outfit'" }}>{item.strength}</div>
        </div>}
      </div>
      {item.composition && <p style={{ color: "#64748b", fontSize: 11, marginTop: 6, lineHeight: 1.4 }}>{item.composition}</p>}
      {item.notes && <p style={{ color: "#fbbf24", fontSize: 11, marginTop: 4, lineHeight: 1.4, fontWeight: 500 }}>{item.notes}</p>}
      {item.indications && <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginTop: 8 }}>
        {item.indications.map(ind => <span key={ind} style={{ background: "rgba(255,255,255,0.06)", color: "#94a3b8", fontSize: 9, padding: "2px 7px", borderRadius: 10 }}>{ind}</span>)}
      </div>}
    </div>
  </>;
}

// ── Tab bar ──
export function TabBar({ tabs, active, setActive, color }) {
  return <div style={{ display: "flex", gap: 3, marginBottom: 12, flexWrap: "wrap" }}>
    {tabs.map(t => <button key={t.id} onClick={() => setActive(t.id)} style={{ background: active === t.id ? color : "rgba(255,255,255,0.05)", color: active === t.id ? "#080d19" : "#64748b", border: "none", borderRadius: 7, padding: "6px 12px", fontFamily: "'Outfit'", fontSize: 11.5, fontWeight: 700, cursor: "pointer" }}>{t.label}</button>)}
  </div>;
}

// ── Silane protocol card (reusable) ──
export function SilaneCard() {
  return <Card border="#10b981">
    <div style={{ color: "#10b981", fontSize: 9, fontWeight: 800, letterSpacing: 1, marginBottom: 4 }}>✓ 2-BOTTLE SILANE PROTOCOL</div>
    <div style={{ color: "#6ee7b7", fontSize: 10, marginBottom: 3 }}>{SILANE_2B.products}</div>
    <OL items={SILANE_2B.steps} c="#6ee7b7" />
    <div style={{ background: "#450a0a", borderRadius: 4, padding: "4px 8px", marginTop: 4 }}>
      <span style={{ color: "#ef4444", fontSize: 9, fontWeight: 800 }}>⚠ </span>
      <span style={{ color: "#fca5a5", fontSize: 10 }}>{SILANE_2B.warn}</span>
    </div>
    <ReadMore color="#6ee7b7">{SILANE_2B.heat}</ReadMore>
  </Card>;
}
