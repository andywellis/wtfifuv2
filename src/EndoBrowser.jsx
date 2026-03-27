import { useState, useMemo } from "react";
import { ALL_ENDO, ENDO_GROUPS, ENDO_CIT, endoGetGroup } from "./data/endoData.js";

// ── Evidence Grading (shared) ──
const EG = {
  IFU: { label: "IFU", color: "#3b82f6", bg: "#1e3a5f" },
  STRONG: { label: "Strong", color: "#10b981", bg: "#064e3b" },
  MODERATE: { label: "Mod", color: "#f59e0b", bg: "#78350f" },
  CONSENSUS: { label: "Cons", color: "#a78bfa", bg: "#3b1f6e" },
  EMERGING: { label: "New", color: "#f472b6", bg: "#831843" },
  CONFLICT: { label: "IFU≠Ev", color: "#ef4444", bg: "#7f1d1d" },
};

// ── ReadMore toggle ──
function ReadMore({ children, color }) {
  const [open, setOpen] = useState(false);
  if (!children) return null;
  return (
    <div style={{ marginTop: 4 }}>
      <span onClick={() => setOpen(!open)} style={{ color: color || "#475569", fontSize: 10.5, cursor: "pointer", fontWeight: 600, textDecoration: "underline", textDecorationStyle: "dotted" }}>
        {open ? "▾ less" : "▸ read more"}
      </span>
      {open && <div style={{ marginTop: 6, color: "#94a3b8", fontSize: 11.5, lineHeight: 1.55, whiteSpace: "pre-wrap" }}>{children}</div>}
    </div>
  );
}

// ── Citation chip ──
function CiteChip({ id }) {
  const c = ENDO_CIT[id];
  if (!c) return <span style={{ fontSize: 9, color: "#475569" }}>[{id}]</span>;
  const g = EG[c.grade] || EG.CONSENSUS;
  return (
    <span title={`${c.title} — ${c.authors} (${c.year})`} style={{ display: "inline-block", fontSize: 9, fontWeight: 600, color: g.color, background: g.bg, padding: "1px 6px", borderRadius: 8, marginRight: 3, marginBottom: 2, cursor: "help" }}>
      {c.grade === "IFU" ? `📋 ${c.authors}` : `${c.authors?.split(",")[0]} ${c.year}`}
    </span>
  );
}

// ── Motor Settings Badge ──
function MotorBadge({ motor }) {
  if (!motor) return null;
  return (
    <div style={{ background: "#0f172a", border: "1px solid #1e293b", borderRadius: 10, padding: "8px 12px", marginTop: 8 }}>
      <div style={{ fontSize: 9, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>⚙ Motor Settings</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        <div style={{ background: "#1e293b", borderRadius: 8, padding: "4px 10px" }}>
          <span style={{ fontSize: 9, color: "#64748b" }}>RPM </span>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#22d3ee" }}>{motor.rpm}</span>
        </div>
        <div style={{ background: "#1e293b", borderRadius: 8, padding: "4px 10px" }}>
          <span style={{ fontSize: 9, color: "#64748b" }}>Torque </span>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#fb923c" }}>{typeof motor.torque === "number" ? `${motor.torque} Ncm` : motor.torque}</span>
        </div>
        <div style={{ background: "#1e293b", borderRadius: 8, padding: "4px 10px" }}>
          <span style={{ fontSize: 9, color: "#64748b" }}>Motion </span>
          <span style={{ fontSize: 11, fontWeight: 600, color: "#e2e8f0" }}>{motor.motion}</span>
        </div>
      </div>
      {motor.program && <div style={{ fontSize: 10, color: "#475569", marginTop: 4 }}>Program: {motor.program}</div>}
    </div>
  );
}

// ── File Table (for rotary/recip systems) ──
function FileTable({ files }) {
  if (!files || !files.length) return null;
  const hasTorque = files.some(f => f.torque);
  return (
    <div style={{ overflowX: "auto", marginTop: 8 }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
        <thead>
          <tr style={{ borderBottom: "1px solid #1e293b" }}>
            <th style={{ textAlign: "left", padding: "4px 8px", color: "#64748b", fontWeight: 600, fontSize: 10 }}>File</th>
            <th style={{ textAlign: "left", padding: "4px 8px", color: "#64748b", fontWeight: 600, fontSize: 10 }}>Tip/Taper</th>
            {hasTorque && <th style={{ textAlign: "left", padding: "4px 8px", color: "#64748b", fontWeight: 600, fontSize: 10 }}>RPM/Torque</th>}
            <th style={{ textAlign: "left", padding: "4px 8px", color: "#64748b", fontWeight: 600, fontSize: 10 }}>Use</th>
          </tr>
        </thead>
        <tbody>
          {files.map((f, i) => (
            <tr key={i} style={{ borderBottom: "1px solid #0f172a" }}>
              <td style={{ padding: "4px 8px", color: "#e2e8f0", fontWeight: 600 }}>
                {f.color && <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: f.color === "Yellow" ? "#eab308" : f.color === "Red" ? "#ef4444" : f.color === "Blue" ? "#3b82f6" : f.color === "Green" ? "#22c55e" : f.color === "Black" ? "#475569" : f.color === "White" ? "#e2e8f0" : f.color === "Purple" ? "#a78bfa" : f.color === "Orange" ? "#fb923c" : "#64748b", marginRight: 6, border: "1px solid #334155" }} />}
                {f.name}
              </td>
              <td style={{ padding: "4px 8px", color: "#94a3b8" }}>
                {f.tip !== "N/A" ? `#${f.tip}` : "—"}{f.taper ? ` / ${f.taper}` : ""}
              </td>
              {hasTorque && <td style={{ padding: "4px 8px", color: "#22d3ee", fontSize: 10, fontWeight: 600 }}>{f.rpm || "—"} / {f.torque ? `${f.torque} Ncm` : "—"}</td>}
              <td style={{ padding: "4px 8px", color: "#64748b", fontSize: 10 }}>{f.use}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ═══════════════════════════════════════════════
// DETAIL VIEW — renders any endo product
// ═══════════════════════════════════════════════
function EndoDetail({ item, onBack }) {
  const group = endoGetGroup(item.cat);
  const accentColor = group.includes("Rotary") ? "#22d3ee" : group.includes("Irrigant") ? "#38bdf8" : group.includes("Bioceramic") ? "#c084fc" : group.includes("Sealer") ? "#10b981" : group.includes("Obturation") ? "#fb923c" : "#fb7185";

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "20px 16px" }}>
      <button onClick={onBack} style={{ background: "none", border: "none", color: "#64748b", cursor: "pointer", fontFamily: "'Outfit'", fontSize: 12, fontWeight: 700, padding: 0, marginBottom: 12 }}>← Back</button>

      <div style={{ background: "#0c1220", borderRadius: 16, border: `1px solid ${accentColor}22`, padding: 24 }}>
        {/* Header */}
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: accentColor, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{item.cat}</div>
          <h2 style={{ fontFamily: "'Newsreader',Georgia,serif", fontSize: 26, fontWeight: 700, color: "#f1f5f9", margin: "0 0 4px" }}>{item.name}</h2>
          <div style={{ fontSize: 12, color: "#64748b" }}>{item.mfr}</div>
        </div>

        {/* Composition */}
        {item.composition && (
          <div style={{ background: "#0f172a", borderRadius: 10, padding: "10px 14px", marginBottom: 10 }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: 1, marginBottom: 3 }}>Composition</div>
            <div style={{ fontSize: 11.5, color: "#cbd5e1", lineHeight: 1.5 }}>{item.composition}</div>
          </div>
        )}

        {/* Motor Settings */}
        <MotorBadge motor={item.motor} />

        {/* File Table */}
        <FileTable files={item.files} />

        {/* Setting Time / pH for bioceramics */}
        {(item.settingTime || item.ph) && (
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
            {item.settingTime && (
              <div style={{ background: "#1e293b", borderRadius: 8, padding: "6px 12px" }}>
                <span style={{ fontSize: 9, color: "#64748b" }}>Set Time </span>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#e2e8f0" }}>{item.settingTime}</span>
              </div>
            )}
            {item.ph && (
              <div style={{ background: "#1e293b", borderRadius: 8, padding: "6px 12px" }}>
                <span style={{ fontSize: 9, color: "#64748b" }}>pH </span>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#c084fc" }}>{item.ph}</span>
              </div>
            )}
          </div>
        )}

        {/* Mixing */}
        {item.mixing && (
          <div style={{ background: "#0f172a", borderRadius: 10, padding: "10px 14px", marginTop: 10 }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: 1, marginBottom: 3 }}>Mixing</div>
            <div style={{ fontSize: 11.5, color: "#cbd5e1", lineHeight: 1.5 }}>{item.mixing}</div>
          </div>
        )}

        {/* Indications */}
        {item.indications && (
          <div style={{ marginTop: 10 }}>
            <span style={{ fontSize: 9, fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: 1 }}>Indications: </span>
            <span style={{ fontSize: 11, color: "#94a3b8" }}>{item.indications.join(" · ")}</span>
          </div>
        )}

        {/* Concentrations */}
        {item.concentrations && (
          <div style={{ marginTop: 10 }}>
            <span style={{ fontSize: 9, fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: 1 }}>Concentrations: </span>
            <span style={{ fontSize: 11, color: "#94a3b8" }}>{item.concentrations}</span>
          </div>
        )}

        {/* Notes (main content) */}
        {item.notes && (
          <div style={{ marginTop: 12, color: "#94a3b8", fontSize: 12, lineHeight: 1.6, whiteSpace: "pre-wrap" }}>{item.notes}</div>
        )}

        {/* Technique */}
        {item.technique && (
          <div style={{ background: "#0f172a", borderRadius: 10, padding: "10px 14px", marginTop: 12 }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: "#22d3ee", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Technique</div>
            <div style={{ fontSize: 11.5, color: "#cbd5e1", lineHeight: 1.6, whiteSpace: "pre-wrap" }}>{item.technique}</div>
          </div>
        )}

        {/* Substrate compatibility (access burs) */}
        {item.substrate && (
          <div style={{ background: "#0f172a", borderRadius: 10, padding: "10px 14px", marginTop: 10 }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: "#fb923c", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Substrate Access Notes</div>
            <div style={{ fontSize: 11.5, color: "#cbd5e1", lineHeight: 1.6, whiteSpace: "pre-wrap" }}>{item.substrate}</div>
          </div>
        )}

        {/* VPT Role */}
        {item.vptRole && (
          <div style={{ background: "#1a0f2e", borderRadius: 10, padding: "10px 14px", marginTop: 10, border: "1px solid #c084fc22" }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: "#c084fc", textTransform: "uppercase", letterSpacing: 1, marginBottom: 3 }}>VPT Role</div>
            <div style={{ fontSize: 11.5, color: "#d8b4fe", lineHeight: 1.5 }}>{item.vptRole}</div>
          </div>
        )}

        {/* Perforation Repair */}
        {item.perforationRepair && (
          <div style={{ background: "#1a0f0f", borderRadius: 10, padding: "10px 14px", marginTop: 10, border: "1px solid #ef444422" }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: "#ef4444", textTransform: "uppercase", letterSpacing: 1, marginBottom: 3 }}>Perforation Repair by Size</div>
            <div style={{ fontSize: 11.5, color: "#fca5a5", lineHeight: 1.6, whiteSpace: "pre-wrap" }}>{item.perforationRepair}</div>
          </div>
        )}

        {/* EdgeEndo Analog */}
        {item.edgeAnalog && (
          <div style={{ background: "#0f1a2e", borderRadius: 10, padding: "8px 12px", marginTop: 10, border: "1px solid #3b82f622" }}>
            <span style={{ fontSize: 9, fontWeight: 700, color: "#3b82f6" }}>EdgeEndo Analog: </span>
            <span style={{ fontSize: 11, color: "#93c5fd" }}>{item.edgeAnalog}</span>
          </div>
        )}

        {/* Warm compatibility (sealers) */}
        {item.warmCompat !== undefined && (
          <div style={{ marginTop: 8 }}>
            <span style={{ display: "inline-block", fontSize: 10, fontWeight: 700, color: item.warmCompat ? "#10b981" : "#ef4444", background: item.warmCompat ? "#064e3b" : "#7f1d1d", padding: "3px 10px", borderRadius: 10 }}>
              {item.warmCompat ? "✓ Warm obturation compatible" : "✗ Cold obturation only"}
            </span>
          </div>
        )}

        {/* Sizes / Color coding (hand files) */}
        {item.sizes && (
          <div style={{ marginTop: 10 }}>
            <span style={{ fontSize: 9, fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: 1 }}>Sizes: </span>
            <span style={{ fontSize: 11, color: "#94a3b8" }}>{item.sizes}</span>
          </div>
        )}
        {item.colorCode && <ReadMore color="#64748b">{item.colorCode}</ReadMore>}
        {item.motion && (
          <div style={{ marginTop: 8 }}>
            <span style={{ fontSize: 9, fontWeight: 700, color: "#ef4444", textTransform: "uppercase", letterSpacing: 1 }}>Motion: </span>
            <span style={{ fontSize: 11, color: "#fca5a5", whiteSpace: "pre-wrap" }}>{item.motion}</span>
          </div>
        )}

        {/* Citations */}
        {item.refs && item.refs.length > 0 && (
          <div style={{ marginTop: 12, paddingTop: 8, borderTop: "1px solid #1e293b" }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>References</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              {item.refs.map(r => <CiteChip key={r} id={r} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════
// MAIN BROWSER — grid + filter + search
// ═══════════════════════════════════════════════
export default function EndoBrowser({ specialty, onGoHome }) {
  const [sel, setSel] = useState(null);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let items = ALL_ENDO;
    if (filter !== "All") items = items.filter(x => endoGetGroup(x.cat) === filter);
    if (search.trim()) {
      const s = search.toLowerCase();
      items = items.filter(x =>
        x.name.toLowerCase().includes(s) ||
        x.mfr.toLowerCase().includes(s) ||
        x.cat.toLowerCase().includes(s) ||
        (x.composition || "").toLowerCase().includes(s) ||
        (x.notes || "").toLowerCase().includes(s)
      );
    }
    return items;
  }, [filter, search]);

  const groups = useMemo(() => {
    const g = {};
    filtered.forEach(m => { const grp = endoGetGroup(m.cat); if (!g[grp]) g[grp] = []; g[grp].push(m); });
    return g;
  }, [filtered]);

  if (sel) return <EndoDetail item={sel} onBack={() => setSel(null)} />;

  const accent = specialty?.color || "#fb7185";

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "20px 16px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
        <button onClick={onGoHome} style={{ background: "none", border: "none", color: accent, cursor: "pointer", fontFamily: "'Outfit'", fontSize: 13, fontWeight: 700, padding: 0 }}>← Home</button>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
        <span style={{ fontSize: 32 }}>{specialty?.icon || "🔬"}</span>
        <h1 style={{ fontFamily: "'Newsreader',Georgia,serif", fontSize: 28, fontWeight: 700, color: "#f1f5f9", margin: 0 }}>Endodontics</h1>
      </div>
      <p style={{ color: "#475569", fontSize: 11, margin: "0 0 16px", lineHeight: 1.4 }}>
        {ALL_ENDO.length} products · File systems, irrigants, bioceramics, sealers · All motor settings from IFUs
      </p>

      {/* Search */}
      <input
        type="text" placeholder="Search files, irrigants, sealers..."
        value={search} onChange={e => setSearch(e.target.value)}
        style={{ width: "100%", background: "#0f172a", border: "1px solid #1e293b", borderRadius: 10, padding: "10px 14px", color: "#e2e8f0", fontSize: 13, fontFamily: "'Outfit'", marginBottom: 12, outline: "none", boxSizing: "border-box" }}
      />

      {/* Filter tabs */}
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
        {["All", ...ENDO_GROUPS].map(g => (
          <button key={g} onClick={() => setFilter(g)} style={{
            background: filter === g ? `${accent}22` : "#0f172a",
            border: `1px solid ${filter === g ? accent + "44" : "#1e293b"}`,
            color: filter === g ? accent : "#64748b",
            borderRadius: 10, padding: "5px 12px", fontSize: 11, fontWeight: 600,
            cursor: "pointer", fontFamily: "'Outfit'", transition: "all 0.15s"
          }}>
            {g === "All" ? `All (${ALL_ENDO.length})` : g}
          </button>
        ))}
      </div>

      {/* Product grid */}
      {ENDO_GROUPS.filter(g => groups[g]).map(g => (
        <div key={g} style={{ marginBottom: 20 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#64748b", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>{g}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 10 }}>
            {groups[g].map(item => {
              const isRotary = item.motor;
              const isBioceramic = item.cat.includes("Bioceramic");
              const isSealer = item.cat.includes("Sealer");
              const borderColor = isRotary ? "#22d3ee" : isBioceramic ? "#c084fc" : isSealer ? "#10b981" : "#334155";
              return (
                <div key={item.id} onClick={() => setSel(item)} style={{
                  background: "#0c1220", borderRadius: 12, padding: "14px 16px",
                  border: `1px solid ${borderColor}22`, cursor: "pointer",
                  transition: "all 0.15s",
                }} onMouseEnter={e => { e.currentTarget.style.borderColor = borderColor + "55"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                   onMouseLeave={e => { e.currentTarget.style.borderColor = borderColor + "22"; e.currentTarget.style.transform = "none"; }}>
                  <div style={{ fontSize: 10, color: borderColor, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 3 }}>
                    {item.cat.split("—")[0].trim()}
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#f1f5f9", marginBottom: 2 }}>{item.name}</div>
                  <div style={{ fontSize: 11, color: "#64748b", marginBottom: 6 }}>{item.mfr}</div>

                  {/* Motor settings preview */}
                  {item.motor && (
                    <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 9, fontWeight: 700, background: "#164e63", color: "#22d3ee", padding: "2px 6px", borderRadius: 6 }}>
                        {item.motor.rpm === "Pre-set (firmware)" ? "Pre-set" : `${item.motor.rpm} RPM`}
                      </span>
                      <span style={{ fontSize: 9, fontWeight: 700, background: "#431407", color: "#fb923c", padding: "2px 6px", borderRadius: 6 }}>
                        {typeof item.motor.torque === "number" ? `${item.motor.torque} Ncm` : item.motor.torque}
                      </span>
                      <span style={{ fontSize: 9, fontWeight: 600, background: "#1e293b", color: "#94a3b8", padding: "2px 6px", borderRadius: 6 }}>
                        {item.motor.motion.includes("Recip") ? "Recip" : "Rotation"}
                      </span>
                    </div>
                  )}

                  {/* Setting time preview for bioceramics/sealers */}
                  {item.settingTime && !item.motor && (
                    <span style={{ fontSize: 9, fontWeight: 700, background: "#1e293b", color: "#94a3b8", padding: "2px 6px", borderRadius: 6 }}>
                      Set: {item.settingTime}
                    </span>
                  )}

                  {/* EdgeEndo flag */}
                  {item.edgeAnalog && (
                    <div style={{ marginTop: 4 }}>
                      <span style={{ fontSize: 8, fontWeight: 700, background: "#172554", color: "#60a5fa", padding: "2px 6px", borderRadius: 6 }}>
                        EdgeEndo analog available
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
