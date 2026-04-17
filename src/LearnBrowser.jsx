// ============================================================
// LearnBrowser.jsx — WTFIFU Learn Mode (Brand-Aligned v2)
// ============================================================
// Matches the WTFIFU design system:
//   - Fonts: Newsreader (display) + Outfit (UI/body)
//   - Palette: slate backgrounds (#060a14, #0f172a), cyan accent (#22d3ee)
//   - Specialty-color theming from SPECIALTIES array
//   - Tile gradient: linear-gradient(145deg, bg, #060a14)
//   - Chip colors: ${color}15 bg / ${color} text
//
// CHANGES FROM v1:
//   - Filter chips at top now use specialty color scheme
//   - Subcategory section headers rendered INLINE as page scrolls
//   - Typography aligned to brand (Newsreader h1, Outfit UI)
//   - Tile grid matches landing page tile style
//   - Coming Soon label styled to match landing page convention
// ============================================================

import React, { useState, useMemo } from "react";
import { MEDIA_REGISTRY, hasMediaFor, getMediaCount } from "./data/mediaRegistry";

// --- FONT LOADER (loaded once per mount) ---
const FONT_LINK_HREF = "https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,600;6..72,700;6..72,800&family=Outfit:wght@400;500;600;700;800;900&display=swap";

// --- FORMAT DISPLAY ---
const FORMAT_ICONS = {
  podcast: "🎙️",
  video: "🎬",
  lecture: "🎓",
  article: "📄",
  "case-report": "🔬"
};

const FORMAT_COLORS = {
  podcast: "#22d3ee",
  video: "#f472b6",
  lecture: "#60a5fa",
  article: "#34d399",
  "case-report": "#fbbf24"
};

const TAG_LABELS = {
  "deep-dive": "Deep Dive",
  "technique-focused": "Technique",
  "foundational": "Start Here",
  "material-selection": "Material Selection",
  "ceramic-classification": "Ceramics",
  "decision-making": "Decision Making",
  "step-by-step": "Step-by-Step",
  "bonding-protocol": "Bonding Protocol",
  "IDS": "IDS",
  "cementation": "Cementation",
  "indirect-composite": "Indirect Composite",
  "adhesive-protocol": "Adhesive Protocol",
  "adhesive-science": "Adhesive Science",
  "adhesive-chemistry": "Adhesive Chemistry",
  "deep-margin-elevation": "Deep Margin Elevation",
  "onlay-cementation": "Onlay Cementation",
  "ceramic-onlay": "Ceramic Onlay",
  "temporisation": "Temporisation",
  "zirconia": "Zirconia",
  "lithium-disilicate": "Lithium Disilicate",
  "feldspathic": "Feldspathic",
  "APC-concept": "APC Concept",
  "misinformation": "Critical Eval",
  "evidence-evaluation": "Evidence Eval",
  "CAD-CAM": "CAD/CAM",
  "digital-workflow": "Digital",
  "3D-printing": "3D Printing",
  "milling": "Milling",
  "scanning": "Scanning",
  "onlays": "Onlays",
  "partial-coverage": "Partial Coverage",
  "prep-design": "Prep Design",
  "vertipreps": "Vertipreps",
  "DME": "DME",
  "controversy": "Controversy",
  "bonding-generations": "Bond Generations",
  "MDP": "10-MDP",
  "pH-dynamics": "pH Dynamics",
  "self-etch": "Self-Etch",
  "hybrid-layer": "Hybrid Layer",
  "MMPs": "MMPs",
  "chlorhexidine": "CHX Protocol",
  "bond-degradation": "Bond Degradation",
  "solvents": "Solvents",
  "universal-adhesives": "Universal Adhesives",
  "silane-stability": "Silane Stability",
  "moisture-control": "Moisture Control",
  "cements": "Cements",
  "marketing-literacy": "Marketing Literacy",
  "cross-specialty": "Cross-Specialty",
  "composite-chemistry": "Composite Chemistry",
  "filler-mechanics": "Filler Mechanics",
  "bulk-fill": "Bulk Fill",
  "photoinitiators": "Photoinitiators",
  "curing-lights": "Curing Lights",
  "polywave": "Polywave",
  "structural-color": "Structural Color",
  "single-shade": "Single-Shade",
  "flowables": "Flowables",
  "bioactive": "Bioactive",
  "fiber-reinforcement": "Fiber Reinforcement",
  "C-factor": "C-Factor",
  "polymerization-shrinkage": "Polym. Shrinkage",
  "surface-treatment": "Surface Treatment",
  "tribochemical-silica": "Tribochemical Silica",
  "intraoral-repair": "Intraoral Repair",
  "tooth-wear": "Tooth Wear",
  "anterior-restoration": "Anterior Restoration"
};

function formatDuration(min) {
  if (!min) return "";
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}

// ============================================================
// COMING SOON + SUGGESTION FORM
// ============================================================
function ComingSoonView({ specialty, onBack }) {
  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 16px", fontFamily: "'Outfit',sans-serif" }}>
      <button
        onClick={onBack}
        style={{
          background: "none", border: "none", color: specialty.color || "#22d3ee",
          cursor: "pointer", fontSize: 13, padding: "8px 0",
          marginBottom: 16, fontFamily: "'Outfit',sans-serif", fontWeight: 600
        }}
      >
        ← Back to Learn
      </button>

      <div style={{
        textAlign: "center", padding: "40px 24px",
        background: `linear-gradient(145deg, ${specialty.bg || "#0f172a"}, #060a14)`,
        border: `1px solid ${specialty.color || "#22d3ee"}22`,
        borderRadius: 16, marginBottom: 24
      }}>
        <div style={{ fontSize: 52, marginBottom: 14, opacity: 0.7 }}>
          {specialty.icon}
        </div>
        <h2 style={{
          fontFamily: "'Newsreader',Georgia,serif",
          fontSize: 28, fontWeight: 700, color: "#f1f5f9",
          margin: "0 0 10px 0", lineHeight: 1.1
        }}>
          {specialty.name}
        </h2>
        <div style={{
          display: "inline-block", padding: "4px 12px",
          background: "#1e293b", color: "#475569",
          fontSize: 10, fontWeight: 700, borderRadius: 12,
          letterSpacing: 1.5, textTransform: "uppercase"
        }}>
          Coming Soon
        </div>
        <p style={{
          color: "#64748b", fontSize: 13, lineHeight: 1.6,
          marginTop: 18, maxWidth: 440, marginLeft: "auto", marginRight: "auto"
        }}>
          Curated media for this specialty is still being sourced and vetted.
          If you know an excellent free episode, video, or lecture that belongs
          here, suggest it below.
        </p>
      </div>

      <div style={{
        background: "#0f172a",
        border: "1px solid #1e293b",
        borderRadius: 12, padding: 22, textAlign: "center"
      }}>
        <h3 style={{
          fontFamily: "'Outfit',sans-serif",
          fontSize: 15, color: "#f1f5f9", margin: "0 0 10px 0",
          fontWeight: 700, letterSpacing: 0.3
        }}>
          Suggest Content
        </h3>
        <p style={{
          fontSize: 12.5, color: "#94a3b8", lineHeight: 1.6,
          margin: "0 auto 16px", maxWidth: 420
        }}>
          Know a free, evidence-aligned episode, video, or lecture that belongs
          in {specialty.name}? DM the title, presenter, and link.
        </p>
        <a
          href="https://ig.me/m/wtfifudotcom"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "10px 18px", borderRadius: 6,
            background: "#22d3ee", color: "#060a14",
            fontSize: 13, fontWeight: 700, letterSpacing: 0.3,
            textDecoration: "none", fontFamily: "'Outfit',sans-serif",
            display: "inline-block"
          }}
        >
          📩 Suggest via Instagram DM
        </a>
        <p style={{
          fontSize: 11, color: "#475569", marginTop: 14,
          lineHeight: 1.5
        }}>
          Suggestions reviewed against vetting criteria: peer-reviewed publications,
          faculty appointment, or documented clinical expertise. Free access only.
        </p>
      </div>
    </div>
  );
}

// ============================================================
// MEDIA CARD
// ============================================================
function MediaCard({ entry, specialty, onClick }) {
  const formatIcon = FORMAT_ICONS[entry.format] || "📺";
  const isStartHere = entry.tags?.includes("foundational");
  const accentColor = specialty?.color || "#22d3ee";

  return (
    <div
      onClick={onClick}
      style={{
        background: "#0f172a",
        border: "1px solid #1e293b",
        borderRadius: 12, padding: "16px 18px",
        cursor: "pointer", transition: "all 0.2s ease",
        position: "relative",
        fontFamily: "'Outfit',sans-serif"
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = "#111c31";
        e.currentTarget.style.borderColor = `${accentColor}55`;
        e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "#0f172a";
        e.currentTarget.style.borderColor = "#1e293b";
        e.currentTarget.style.transform = "none";
      }}
    >
      {isStartHere && (
        <div style={{
          position: "absolute", top: -8, right: 12,
          background: accentColor, color: "#060a14", fontSize: 10,
          fontWeight: 800, padding: "3px 9px", borderRadius: 4,
          letterSpacing: 1
        }}>
          START HERE
        </div>
      )}

      <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
        <span style={{ fontSize: 20, lineHeight: 1, minWidth: 28, textAlign: "center" }}>
          {formatIcon}
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontWeight: 700, fontSize: 14.5, color: "#f1f5f9",
            lineHeight: 1.3, marginBottom: 4
          }}>
            {entry.name}
          </div>
          <div style={{ fontSize: 11, color: "#64748b", lineHeight: 1.4, fontWeight: 500 }}>
            {entry.source} · {formatDuration(entry.duration)}
          </div>
        </div>
      </div>

      <div style={{
        fontSize: 12, color: "#cbd5e1", marginTop: 8, paddingLeft: 38, fontWeight: 500
      }}>
        {entry.presenter?.name}
      </div>

      {entry.tags && entry.tags.length > 0 && (
        <div style={{
          display: "flex", flexWrap: "wrap", gap: 4,
          marginTop: 8, paddingLeft: 38
        }}>
          {entry.tags.slice(0, 4).map(tag => (
            <span key={tag} style={{
              fontSize: 9.5, padding: "2px 7px", borderRadius: 10,
              fontWeight: 600, background: `${accentColor}15`,
              color: accentColor, letterSpacing: 0.2
            }}>
              {TAG_LABELS[tag] || tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================================
// SECTION HEADER (inline subcategory header as page scrolls)
// ============================================================
function SubcategoryHeader({ name, count, color }) {
  return (
    <div style={{
      display: "flex", alignItems: "baseline",
      gap: 12, margin: "28px 0 12px 0",
      paddingBottom: 8,
      borderBottom: `1px solid ${color}22`
    }}>
      <h3 style={{
        fontFamily: "'Outfit',sans-serif",
        fontSize: 11, fontWeight: 800,
        color: color, margin: 0,
        letterSpacing: 2.5,
        textTransform: "uppercase"
      }}>
        {name}
      </h3>
      <span style={{
        fontFamily: "'Outfit',sans-serif",
        fontSize: 10, fontWeight: 700, letterSpacing: 1.5,
        color: "#475569", textTransform: "uppercase"
      }}>
        {count} {count === 1 ? "episode" : "episodes"}
      </span>
    </div>
  );
}

// ============================================================
// MEDIA DETAIL
// ============================================================
function MediaDetail({ entry, citations, specialty, onBack }) {
  const [activeTab, setActiveTab] = useState("summary");
  const accentColor = specialty?.color || "#22d3ee";

  const TABS = [
    { id: "summary", label: "Summary" },
    { id: "takeaways", label: "Key Takeaways" },
    { id: "context", label: "Context & Credentials" }
  ];

  const tabContent = {
    summary: entry.summary,
    takeaways: entry.takeaways,
    context: entry.context
  };

  const formatColor = FORMAT_COLORS[entry.format] || "#22d3ee";

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 16px", fontFamily: "'Outfit',sans-serif" }}>
      <button
        onClick={onBack}
        style={{
          background: "none", border: "none", color: accentColor,
          cursor: "pointer", fontSize: 13, padding: "8px 0",
          marginBottom: 8, display: "flex", alignItems: "center", gap: 6,
          fontFamily: "'Outfit',sans-serif", fontWeight: 600
        }}
      >
        ← Back to list
      </button>

      <div style={{
        background: `linear-gradient(145deg, ${specialty?.bg || "#0f172a"}, #060a14)`,
        border: `1px solid ${accentColor}22`,
        borderRadius: 14, padding: 22, marginBottom: 16
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
          <span style={{
            fontSize: 10, fontWeight: 800, padding: "3px 9px",
            borderRadius: 4, color: "#060a14", background: formatColor,
            textTransform: "uppercase", letterSpacing: 1
          }}>
            {entry.format}
          </span>
          <span style={{ fontSize: 12, color: "#64748b", fontWeight: 500 }}>
            {formatDuration(entry.duration)}
          </span>
          {entry.lastReviewed && (
            <span style={{ fontSize: 11, color: "#475569" }}>
              · Reviewed {entry.lastReviewed}
            </span>
          )}
        </div>

        <h2 style={{
          fontFamily: "'Newsreader',Georgia,serif",
          fontSize: 24, fontWeight: 700, color: "#f1f5f9",
          lineHeight: 1.2, margin: "8px 0", letterSpacing: -0.3
        }}>
          {entry.name}
        </h2>

        <div style={{ fontSize: 12.5, color: "#cbd5e1", marginBottom: 6, fontWeight: 500 }}>
          {entry.source}
        </div>

        <div style={{ fontSize: 12.5, color: "#94a3b8", lineHeight: 1.5 }}>
          <strong style={{ color: "#cbd5e1", fontWeight: 600 }}>Presenter:</strong>{" "}
          {entry.presenter?.name}
          {entry.presenter?.credentials && (
            <span style={{ fontSize: 11.5 }}> — {entry.presenter.credentials}</span>
          )}
        </div>

        {entry.host && (
          <div style={{ fontSize: 11.5, color: "#475569", marginTop: 4 }}>
            <strong>Host:</strong> {entry.host}
          </div>
        )}

        {entry.tags && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 10 }}>
            {entry.tags.map(tag => (
              <span key={tag} style={{
                fontSize: 9.5, padding: "2px 7px", borderRadius: 10,
                fontWeight: 600, background: `${accentColor}15`,
                color: accentColor, letterSpacing: 0.2
              }}>
                {TAG_LABELS[tag] || tag}
              </span>
            ))}
          </div>
        )}

        {entry.url && (
          <a
            href={entry.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block", marginTop: 14,
              padding: "9px 18px", borderRadius: 6,
              background: accentColor, color: "#060a14",
              fontSize: 13, fontWeight: 700, letterSpacing: 0.3,
              textDecoration: "none", transition: "opacity 0.2s",
              fontFamily: "'Outfit',sans-serif"
            }}
            onMouseEnter={e => e.target.style.opacity = 0.85}
            onMouseLeave={e => e.target.style.opacity = 1}
          >
            {FORMAT_ICONS[entry.format] || "▶"} Watch / Listen Free →
          </a>
        )}
      </div>

      <div style={{
        display: "flex", gap: 0, marginBottom: 0,
        borderBottom: "1px solid #1e293b"
      }}>
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              background: "none", border: "none",
              borderBottom: activeTab === tab.id ? `2px solid ${accentColor}` : "2px solid transparent",
              color: activeTab === tab.id ? accentColor : "#64748b",
              fontSize: 12.5, fontWeight: 700, letterSpacing: 0.3,
              padding: "10px 16px", cursor: "pointer",
              transition: "all 0.15s",
              fontFamily: "'Outfit',sans-serif"
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div style={{
        background: "#0f172a",
        border: "1px solid #1e293b",
        borderTop: "none",
        borderRadius: "0 0 12px 12px",
        padding: "18px 20px",
        fontSize: 13.5, color: "#cbd5e1",
        lineHeight: 1.7, whiteSpace: "pre-wrap"
      }}>
        {tabContent[activeTab] || "No content available."}
      </div>

      {entry.notes && (
        <div style={{
          marginTop: 12, padding: "12px 16px",
          background: `${accentColor}08`,
          border: `1px solid ${accentColor}22`,
          borderRadius: 8, fontSize: 12, color: accentColor,
          lineHeight: 1.5
        }}>
          <strong>Notes:</strong> {entry.notes}
        </div>
      )}

      {entry.refs && entry.refs.length > 0 && citations && (
        <div style={{ marginTop: 14, fontSize: 11.5, color: "#475569" }}>
          <strong style={{ color: "#94a3b8" }}>Referenced:</strong>
          {entry.refs.map(key => {
            const cit = citations[key];
            if (!cit) return null;
            return (
              <div key={key} style={{ marginTop: 4 }}>
                {cit.authors} ({cit.year}). <em>{cit.title}</em>. {cit.journal}.
                {cit.grade && (
                  <span style={{
                    marginLeft: 6, fontSize: 9.5, padding: "1px 6px",
                    borderRadius: 3, fontWeight: 700, letterSpacing: 0.5,
                    background: cit.grade === "STRONG" ? "#064e3b" : "#78350f",
                    color: cit.grade === "STRONG" ? "#6ee7b7" : "#fbbf24"
                  }}>
                    {cit.grade}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}

      {entry.mapTo && entry.mapTo.length > 0 && (
        <div style={{ marginTop: 12, fontSize: 11.5, color: "#475569" }}>
          <strong style={{ color: "#94a3b8" }}>Cross-references WTFIFU cards:</strong>{" "}
          {entry.mapTo.join(", ")}
        </div>
      )}
    </div>
  );
}

// ============================================================
// SPECIALTY MEDIA LIST — with sticky filters AND inline headers
// ============================================================
function SpecialtyMediaList({ specialty, config, onBack, onSelectEntry }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [formatFilter, setFormatFilter] = useState(null);
  const [activeGroup, setActiveGroup] = useState(null);
  const accentColor = specialty?.color || "#22d3ee";

  const filtered = useMemo(() => {
    let entries = config.entries;
    if (searchTerm) {
      const s = searchTerm.toLowerCase();
      entries = entries.filter(e =>
        e.name.toLowerCase().includes(s) ||
        e.presenter?.name?.toLowerCase().includes(s) ||
        e.summary?.toLowerCase().includes(s) ||
        e.tags?.some(t => t.toLowerCase().includes(s))
      );
    }
    if (formatFilter) entries = entries.filter(e => e.format === formatFilter);
    if (activeGroup) entries = entries.filter(e => config.getGroup(e.cat) === activeGroup);
    return entries;
  }, [config, searchTerm, formatFilter, activeGroup]);

  // Group filtered entries by subcategory for inline section rendering
  const groupedFiltered = useMemo(() => {
    const groups = {};
    filtered.forEach(entry => {
      const group = config.getGroup(entry.cat);
      if (!groups[group]) groups[group] = [];
      groups[group].push(entry);
    });
    // Preserve group order from config.groups
    const ordered = {};
    config.groups.forEach(g => {
      if (groups[g]) ordered[g] = groups[g];
    });
    // Catch any uncategorized that fell through
    Object.keys(groups).forEach(g => {
      if (!ordered[g]) ordered[g] = groups[g];
    });
    return ordered;
  }, [filtered, config]);

  // Total counts per group (regardless of current filters) — for top chip counts
  const totalGrouped = useMemo(() => {
    const groups = {};
    config.entries.forEach(entry => {
      const group = config.getGroup(entry.cat);
      if (!groups[group]) groups[group] = 0;
      groups[group]++;
    });
    return groups;
  }, [config]);

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 16px", fontFamily: "'Outfit',sans-serif" }}>
      <link href={FONT_LINK_HREF} rel="stylesheet" />

      <button
        onClick={onBack}
        style={{
          background: "none", border: "none", color: accentColor,
          cursor: "pointer", fontSize: 13, padding: "8px 0",
          marginBottom: 4, fontFamily: "'Outfit',sans-serif", fontWeight: 600
        }}
      >
        ← Back to Learn
      </button>

      <div style={{ marginBottom: 18 }}>
        <h1 style={{
          fontFamily: "'Newsreader',Georgia,serif",
          fontSize: 32, fontWeight: 700, color: "#f1f5f9",
          marginBottom: 4, display: "flex", alignItems: "center", gap: 12,
          letterSpacing: -0.5, lineHeight: 1.1
        }}>
          <span style={{ fontSize: 30 }}>{specialty.icon}</span>
          {specialty.name}
          <span style={{
            color: accentColor, fontSize: 15, fontWeight: 700,
            fontFamily: "'Outfit',sans-serif", letterSpacing: 1,
            marginLeft: 4
          }}>
            LEARN
          </span>
        </h1>
        <p style={{ fontSize: 12.5, color: "#64748b", margin: 0, fontWeight: 500 }}>
          {config.entries.length} curated episodes · Free, no paywall · Vetted educators only
        </p>
      </div>

      <input
        type="text"
        placeholder={`Search ${specialty.name.toLowerCase()} media...`}
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{
          width: "100%", padding: "10px 14px",
          background: "#0f172a",
          border: "1px solid #1e293b",
          borderRadius: 8, color: "#f1f5f9",
          fontSize: 13, outline: "none",
          marginBottom: 12, boxSizing: "border-box",
          fontFamily: "'Outfit',sans-serif"
        }}
      />

      {/* Format filter chips */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
        {["podcast", "video", "lecture", "article", "case-report"].map(fmt => {
          const count = config.entries.filter(e => e.format === fmt).length;
          if (count === 0) return null;
          const isActive = formatFilter === fmt;
          return (
            <button
              key={fmt}
              onClick={() => setFormatFilter(isActive ? null : fmt)}
              style={{
                background: isActive ? FORMAT_COLORS[fmt] : "#0f172a",
                color: isActive ? "#060a14" : "#94a3b8",
                border: `1px solid ${isActive ? FORMAT_COLORS[fmt] : "#1e293b"}`,
                borderRadius: 14, padding: "4px 11px",
                fontSize: 11, fontWeight: 700,
                cursor: "pointer", transition: "all 0.15s",
                letterSpacing: 0.3,
                fontFamily: "'Outfit',sans-serif",
                textTransform: "capitalize"
              }}
            >
              {FORMAT_ICONS[fmt]} {fmt} ({count})
            </button>
          );
        })}
      </div>

      {/* Subcategory filter chips — use specialty color */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
        {config.groups.map(group => {
          const count = totalGrouped[group] || 0;
          if (count === 0) return null;
          const isActive = activeGroup === group;
          return (
            <button
              key={group}
              onClick={() => setActiveGroup(isActive ? null : group)}
              style={{
                background: isActive ? accentColor : `${accentColor}10`,
                color: isActive ? "#060a14" : accentColor,
                border: `1px solid ${isActive ? accentColor : `${accentColor}33`}`,
                borderRadius: 14, padding: "4px 11px",
                fontSize: 11, fontWeight: 700,
                cursor: "pointer", transition: "all 0.15s",
                letterSpacing: 0.3,
                fontFamily: "'Outfit',sans-serif"
              }}
            >
              {group} ({count})
            </button>
          );
        })}
      </div>

      {/* Inline subcategory sections */}
      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: 40, color: "#475569", fontSize: 14 }}>
          No episodes match your search.
        </div>
      )}

      {Object.entries(groupedFiltered).map(([groupName, entries]) => (
        <div key={groupName}>
          <SubcategoryHeader
            name={groupName}
            count={entries.length}
            color={accentColor}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 8 }}>
            {entries.map(entry => (
              <MediaCard
                key={entry.id}
                entry={entry}
                specialty={specialty}
                onClick={() => onSelectEntry(entry)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ============================================================
// MAIN — LEARN TILE GRID (matches landing page style)
// ============================================================
export default function LearnBrowser({ specialties, onBack }) {
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [selectedEntry, setSelectedEntry] = useState(null);

  // Detail view
  if (selectedEntry && selectedSpecialty) {
    const config = MEDIA_REGISTRY[selectedSpecialty.id];
    return (
      <div style={{ fontFamily: "'Outfit',sans-serif" }}>
        <link href={FONT_LINK_HREF} rel="stylesheet" />
        <MediaDetail
          entry={selectedEntry}
          citations={config?.citations}
          specialty={selectedSpecialty}
          onBack={() => setSelectedEntry(null)}
        />
      </div>
    );
  }

  // Specialty view
  if (selectedSpecialty) {
    const hasContent = hasMediaFor(selectedSpecialty.id);
    if (hasContent) {
      const config = MEDIA_REGISTRY[selectedSpecialty.id];
      return (
        <SpecialtyMediaList
          specialty={selectedSpecialty}
          config={config}
          onBack={() => setSelectedSpecialty(null)}
          onSelectEntry={setSelectedEntry}
        />
      );
    } else {
      return (
        <ComingSoonView
          specialty={selectedSpecialty}
          onBack={() => setSelectedSpecialty(null)}
        />
      );
    }
  }

  // Tile grid
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px", fontFamily: "'Outfit',sans-serif" }}>
      <link href={FONT_LINK_HREF} rel="stylesheet" />

      <div style={{ textAlign: "center", padding: "16px 0 32px" }}>
        <div style={{
          fontSize: 11, fontWeight: 800, letterSpacing: 5,
          color: "#475569", textTransform: "uppercase", marginBottom: 10
        }}>
          Curated Education from Vetted Educators
        </div>
        <h1 style={{
          fontFamily: "'Newsreader',Georgia,serif",
          fontSize: 42, fontWeight: 800, color: "#f1f5f9",
          margin: "0 0 10px", lineHeight: 1.05, letterSpacing: -1
        }}>
          Learn<span style={{ color: "#22d3ee" }}>.</span>
        </h1>
        <p style={{
          color: "#64748b", fontSize: 13.5, maxWidth: 520,
          margin: "0 auto", lineHeight: 1.5
        }}>
          Podcasts, videos, and lectures vetted for credentials and evidence alignment.
          Free, no paywall. Choose a specialty.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: 16, marginBottom: 48
      }}>
        {specialties.map(specialty => {
          const count = getMediaCount(specialty.id);
          const hasContent = count > 0;

          return (
            <div
              key={specialty.id}
              onClick={() => setSelectedSpecialty(specialty)}
              style={{
                background: `linear-gradient(145deg, ${specialty.bg || "#0f172a"}, #060a14)`,
                borderRadius: 16, padding: "24px 22px",
                cursor: "pointer",
                border: `1px solid ${specialty.color || "#22d3ee"}${hasContent ? "22" : "10"}`,
                transition: "all 0.2s",
                position: "relative",
                opacity: hasContent ? 1 : 0.55,
                minHeight: 140,
                display: "flex", flexDirection: "column",
                justifyContent: "space-between"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${specialty.color || "#22d3ee"}55`;
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = hasContent
                  ? `0 12px 40px ${specialty.color || "#22d3ee"}15`
                  : "none";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = `${specialty.color || "#22d3ee"}${hasContent ? "22" : "10"}`;
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div>
                <div style={{ fontSize: 32, marginBottom: 10 }}>
                  {specialty.icon}
                </div>
                <h2 style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: 20, fontWeight: 800, color: "#f1f5f9",
                  margin: "0 0 4px", letterSpacing: -0.3
                }}>
                  {specialty.name}
                </h2>
              </div>

              <div style={{ marginTop: 12 }}>
                {hasContent ? (
                  <div style={{
                    fontSize: 11, color: specialty.color || "#22d3ee",
                    fontWeight: 700, letterSpacing: 1, textTransform: "uppercase"
                  }}>
                    {count} {count === 1 ? "episode" : "episodes"} →
                  </div>
                ) : (
                  <div style={{
                    display: "inline-block",
                    background: "#1e293b", color: "#475569",
                    fontSize: 9.5, fontWeight: 700, padding: "3px 10px",
                    borderRadius: 12, letterSpacing: 1.3
                  }}>
                    COMING SOON
                  </div>
                )}
              </div>

              {hasContent && (
                <div style={{
                  position: "absolute", top: 16, right: 16,
                  color: specialty.color || "#22d3ee",
                  fontSize: 18, opacity: 0.4
                }}>
                  →
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div style={{
        textAlign: "center", padding: "0 0 32px",
        color: "#1e293b", fontSize: 10, letterSpacing: 1.5,
        fontWeight: 700
      }}>
        VETTED SOURCES · NO PAYWALL · EVIDENCE-ALIGNED CURATION
      </div>
    </div>
  );
}
