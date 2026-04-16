// ============================================================
// MediaBrowser.jsx — WTFIFU Learn Section
// ============================================================
// Renders curated educational media entries with tabbed detail.
// Follows the same UI patterns as ProductBrowser.jsx but adapted
// for media content (episodes, videos, articles).
//
// INTEGRATION STEPS:
// 1. Add this file to src/
// 2. Add import in App.jsx
// 3. Add tile to SPECIALTIES array in App.jsx:
//      { id: "learn", name: "Learn", icon: "🎓", color: "#f59e0b", bg: "#1a1708",
//        description: "Curated podcasts, videos & lectures from vetted educators" }
// 4. Add to the specialty rendering logic in App.jsx (where it checks specialty.id)
// 5. Add to src/data/index.js exports
// 6. No TAB_CONFIG needed — this component handles its own tabs
// ============================================================

import React, { useState, useMemo } from "react";
import { ALL_MEDIA, MEDIA_GROUPS, MEDIA_CIT, mediaGetGroup } from "./data/mediaData";

// --- FORMAT BADGES ---
const FORMAT_ICONS = {
  podcast: "🎙️",
  video: "🎬",
  lecture: "🎓",
  article: "📄",
  "case-report": "🔬"
};

const FORMAT_COLORS = {
  podcast: "#a78bfa",
  video: "#f472b6",
  lecture: "#60a5fa",
  article: "#34d399",
  "case-report": "#fbbf24"
};

// --- TAG DISPLAY ---
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
  "deep-margin-elevation": "Deep Margin Elevation",
  "onlay-cementation": "Onlay Cementation",
  "ceramic-onlay": "Ceramic Onlay",
  "temporisation": "Temporisation",
  "zirconia": "Zirconia",
  "lithium-disilicate": "Lithium Disilicate",
  "feldspathic": "Feldspathic",
  "controversy": "Controversy"
};

// --- DURATION DISPLAY ---
function formatDuration(min) {
  if (!min) return "";
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}

// --- MEDIA CARD (list view) ---
function MediaCard({ entry, onClick }) {
  const formatIcon = FORMAT_ICONS[entry.format] || "📺";
  const formatColor = FORMAT_COLORS[entry.format] || "#9ca3af";
  const isStartHere = entry.tags?.includes("foundational");

  return (
    <div
      onClick={onClick}
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 12,
        padding: "16px 18px",
        cursor: "pointer",
        transition: "all 0.2s ease",
        position: "relative"
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = "rgba(255,255,255,0.08)";
        e.currentTarget.style.borderColor = "rgba(245,158,11,0.3)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "rgba(255,255,255,0.04)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
      }}
    >
      {/* Start Here badge */}
      {isStartHere && (
        <div style={{
          position: "absolute", top: -8, right: 12,
          background: "#f59e0b", color: "#000", fontSize: 11,
          fontWeight: 700, padding: "2px 8px", borderRadius: 4,
          letterSpacing: "0.05em"
        }}>
          START HERE
        </div>
      )}

      {/* Top row: format badge + title */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
        <span style={{
          fontSize: 20, lineHeight: 1,
          minWidth: 28, textAlign: "center"
        }}>
          {formatIcon}
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontWeight: 600, fontSize: 15, color: "#f5f5f5",
            lineHeight: 1.3, marginBottom: 4
          }}>
            {entry.name}
          </div>
          <div style={{
            fontSize: 12, color: "#9ca3af", lineHeight: 1.4
          }}>
            {entry.source} · {formatDuration(entry.duration)}
          </div>
        </div>
      </div>

      {/* Presenter */}
      <div style={{
        fontSize: 12, color: "#d4d4d4", marginTop: 8,
        paddingLeft: 38
      }}>
        {entry.presenter?.name}
      </div>

      {/* Tags */}
      {entry.tags && entry.tags.length > 0 && (
        <div style={{
          display: "flex", flexWrap: "wrap", gap: 4,
          marginTop: 8, paddingLeft: 38
        }}>
          {entry.tags.slice(0, 4).map(tag => (
            <span key={tag} style={{
              fontSize: 10, padding: "2px 6px",
              borderRadius: 3, fontWeight: 500,
              background: "rgba(245,158,11,0.12)",
              color: "#fbbf24",
              letterSpacing: "0.02em"
            }}>
              {TAG_LABELS[tag] || tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// --- MEDIA DETAIL VIEW (tabbed) ---
function MediaDetail({ entry, onBack }) {
  const [activeTab, setActiveTab] = useState("summary");

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

  const formatColor = FORMAT_COLORS[entry.format] || "#9ca3af";

  return (
    <div>
      {/* Back button */}
      <button
        onClick={onBack}
        style={{
          background: "none", border: "none", color: "#f59e0b",
          cursor: "pointer", fontSize: 14, padding: "8px 0",
          marginBottom: 8, display: "flex", alignItems: "center", gap: 6
        }}
      >
        ← Back to list
      </button>

      {/* Header */}
      <div style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 12, padding: 20, marginBottom: 16
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <span style={{
            fontSize: 10, fontWeight: 700, padding: "3px 8px",
            borderRadius: 4, color: "#000",
            background: formatColor, textTransform: "uppercase",
            letterSpacing: "0.06em"
          }}>
            {entry.format}
          </span>
          <span style={{ fontSize: 12, color: "#9ca3af" }}>
            {formatDuration(entry.duration)}
          </span>
          {entry.lastReviewed && (
            <span style={{ fontSize: 11, color: "#6b7280" }}>
              · Reviewed {entry.lastReviewed}
            </span>
          )}
        </div>

        <h2 style={{
          fontSize: 20, fontWeight: 700, color: "#f5f5f5",
          lineHeight: 1.3, margin: "8px 0"
        }}>
          {entry.name}
        </h2>

        <div style={{ fontSize: 13, color: "#d4d4d4", marginBottom: 4 }}>
          {entry.source}
        </div>

        <div style={{ fontSize: 13, color: "#9ca3af", lineHeight: 1.5 }}>
          <strong style={{ color: "#d4d4d4" }}>Presenter:</strong>{" "}
          {entry.presenter?.name}
          {entry.presenter?.credentials && (
            <span style={{ fontSize: 12 }}> — {entry.presenter.credentials}</span>
          )}
        </div>

        {entry.host && (
          <div style={{ fontSize: 12, color: "#6b7280", marginTop: 4 }}>
            <strong>Host:</strong> {entry.host}
          </div>
        )}

        {/* Tags */}
        {entry.tags && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 10 }}>
            {entry.tags.map(tag => (
              <span key={tag} style={{
                fontSize: 10, padding: "2px 6px",
                borderRadius: 3, fontWeight: 500,
                background: "rgba(245,158,11,0.12)",
                color: "#fbbf24"
              }}>
                {TAG_LABELS[tag] || tag}
              </span>
            ))}
          </div>
        )}

        {/* External link */}
        {entry.url && (
          <a
            href={entry.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block", marginTop: 12,
              padding: "8px 16px", borderRadius: 6,
              background: "#f59e0b", color: "#000",
              fontSize: 13, fontWeight: 600,
              textDecoration: "none",
              transition: "opacity 0.2s"
            }}
            onMouseEnter={e => e.target.style.opacity = 0.85}
            onMouseLeave={e => e.target.style.opacity = 1}
          >
            {FORMAT_ICONS[entry.format] || "▶"} Watch / Listen Free →
          </a>
        )}
      </div>

      {/* Tabs */}
      <div style={{
        display: "flex", gap: 0, marginBottom: 0,
        borderBottom: "1px solid rgba(255,255,255,0.08)"
      }}>
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              background: "none", border: "none",
              borderBottom: activeTab === tab.id ? "2px solid #f59e0b" : "2px solid transparent",
              color: activeTab === tab.id ? "#f59e0b" : "#9ca3af",
              fontSize: 13, fontWeight: 600,
              padding: "10px 16px", cursor: "pointer",
              transition: "all 0.15s"
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderTop: "none",
        borderRadius: "0 0 12px 12px",
        padding: "16px 18px",
        fontSize: 14, color: "#d4d4d4",
        lineHeight: 1.7,
        whiteSpace: "pre-wrap"
      }}>
        {tabContent[activeTab] || "No content available."}
      </div>

      {/* Notes */}
      {entry.notes && (
        <div style={{
          marginTop: 12, padding: "12px 16px",
          background: "rgba(245,158,11,0.06)",
          border: "1px solid rgba(245,158,11,0.15)",
          borderRadius: 8, fontSize: 12, color: "#fbbf24",
          lineHeight: 1.5
        }}>
          <strong>Notes:</strong> {entry.notes}
        </div>
      )}

      {/* Citations */}
      {entry.refs && entry.refs.length > 0 && (
        <div style={{ marginTop: 12, fontSize: 12, color: "#6b7280" }}>
          <strong style={{ color: "#9ca3af" }}>Referenced:</strong>
          {entry.refs.map(key => {
            const cit = MEDIA_CIT[key];
            if (!cit) return null;
            return (
              <div key={key} style={{ marginTop: 4 }}>
                {cit.authors} ({cit.year}). <em>{cit.title}</em>. {cit.journal}.
                {cit.grade && (
                  <span style={{
                    marginLeft: 6, fontSize: 10, padding: "1px 5px",
                    borderRadius: 3, fontWeight: 600,
                    background: cit.grade === "STRONG" ? "rgba(34,197,94,0.15)" : "rgba(250,204,21,0.15)",
                    color: cit.grade === "STRONG" ? "#4ade80" : "#fbbf24"
                  }}>
                    {cit.grade}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* mapTo cross-references */}
      {entry.mapTo && entry.mapTo.length > 0 && (
        <div style={{
          marginTop: 12, fontSize: 12, color: "#6b7280"
        }}>
          <strong style={{ color: "#9ca3af" }}>Cross-references WTFIFU cards:</strong>{" "}
          {entry.mapTo.join(", ")}
        </div>
      )}
    </div>
  );
}

// --- MAIN BROWSER ---
export default function MediaBrowser({ onBack }) {
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [activeGroup, setActiveGroup] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [formatFilter, setFormatFilter] = useState(null);

  // Group entries
  const grouped = useMemo(() => {
    const groups = {};
    ALL_MEDIA.forEach(entry => {
      const group = mediaGetGroup(entry.cat);
      if (!groups[group]) groups[group] = [];
      groups[group].push(entry);
    });
    return groups;
  }, []);

  // Filter
  const filtered = useMemo(() => {
    let entries = ALL_MEDIA;
    if (searchTerm) {
      const s = searchTerm.toLowerCase();
      entries = entries.filter(e =>
        e.name.toLowerCase().includes(s) ||
        e.presenter?.name?.toLowerCase().includes(s) ||
        e.summary?.toLowerCase().includes(s) ||
        e.tags?.some(t => t.toLowerCase().includes(s))
      );
    }
    if (formatFilter) {
      entries = entries.filter(e => e.format === formatFilter);
    }
    if (activeGroup) {
      entries = entries.filter(e => mediaGetGroup(e.cat) === activeGroup);
    }
    return entries;
  }, [searchTerm, formatFilter, activeGroup]);

  // Detail view
  if (selectedEntry) {
    return (
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 16px" }}>
        <MediaDetail
          entry={selectedEntry}
          onBack={() => setSelectedEntry(null)}
        />
      </div>
    );
  }

  // List view
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 16px" }}>
      {/* Header */}
      <div style={{ marginBottom: 16 }}>
        {onBack && (
          <button
            onClick={onBack}
            style={{
              background: "none", border: "none", color: "#f59e0b",
              cursor: "pointer", fontSize: 14, padding: "8px 0",
              marginBottom: 4
            }}
          >
            ← Back
          </button>
        )}
        <h1 style={{
          fontSize: 22, fontWeight: 700, color: "#f5f5f5",
          marginBottom: 4
        }}>
          Learn — Curated Education
        </h1>
        <p style={{ fontSize: 13, color: "#9ca3af", margin: 0 }}>
          {ALL_MEDIA.length} curated episodes from vetted educators · Free, no paywall
        </p>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search episodes, presenters, topics..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{
          width: "100%", padding: "10px 14px",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 8, color: "#f5f5f5",
          fontSize: 14, outline: "none",
          marginBottom: 12,
          boxSizing: "border-box"
        }}
      />

      {/* Format filter chips */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
        {["podcast", "video", "lecture", "article", "case-report"].map(fmt => {
          const count = ALL_MEDIA.filter(e => e.format === fmt).length;
          if (count === 0) return null;
          const isActive = formatFilter === fmt;
          return (
            <button
              key={fmt}
              onClick={() => setFormatFilter(isActive ? null : fmt)}
              style={{
                background: isActive ? FORMAT_COLORS[fmt] : "rgba(255,255,255,0.06)",
                color: isActive ? "#000" : "#d4d4d4",
                border: "none", borderRadius: 6,
                padding: "5px 10px", fontSize: 12,
                fontWeight: 600, cursor: "pointer",
                transition: "all 0.15s"
              }}
            >
              {FORMAT_ICONS[fmt]} {fmt} ({count})
            </button>
          );
        })}
      </div>

      {/* Group filter chips */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
        {MEDIA_GROUPS.map(group => {
          const count = (grouped[group] || []).length;
          if (count === 0) return null;
          const isActive = activeGroup === group;
          return (
            <button
              key={group}
              onClick={() => setActiveGroup(isActive ? null : group)}
              style={{
                background: isActive ? "rgba(245,158,11,0.2)" : "rgba(255,255,255,0.04)",
                color: isActive ? "#f59e0b" : "#9ca3af",
                border: `1px solid ${isActive ? "rgba(245,158,11,0.3)" : "rgba(255,255,255,0.06)"}`,
                borderRadius: 6, padding: "5px 10px",
                fontSize: 11, fontWeight: 500,
                cursor: "pointer", transition: "all 0.15s"
              }}
            >
              {group} ({count})
            </button>
          );
        })}
      </div>

      {/* Results */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: 40, color: "#6b7280", fontSize: 14 }}>
            No episodes match your search.
          </div>
        )}
        {filtered.map(entry => (
          <MediaCard
            key={entry.id}
            entry={entry}
            onClick={() => setSelectedEntry(entry)}
          />
        ))}
      </div>
    </div>
  );
}
