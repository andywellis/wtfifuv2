// ============================================================
// LearnBrowser.jsx — WTFIFU Learn Mode
// ============================================================
// Renders specialty tile grid in Learn mode, routes into media
// list/detail views for specialties with curated content, shows
// "Coming soon" state with suggestion form for specialties
// without content yet.
//
// This component receives the same SPECIALTIES array that App.jsx
// passes to the Products tile grid, so the taxonomy is identical
// on both sides.
// ============================================================

import React, { useState, useMemo } from "react";
import { MEDIA_REGISTRY, hasMediaFor, getMediaCount } from "./data/mediaRegistry";

// --- FORMAT DISPLAY ---
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
  "feldspathic": "Feldspathic"
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
  const [submitted, setSubmitted] = useState(false);
  const [suggestion, setSuggestion] = useState("");
  const [presenter, setPresenter] = useState("");
  const [url, setUrl] = useState("");

  function handleSubmit() {
    // For now, just acknowledge submission locally.
    // In a future version this can POST to a form endpoint (Google Form,
    // Netlify Forms, or similar) — the UI is wired up for that upgrade.
    console.log("Suggestion submitted:", {
      specialty: specialty.id,
      suggestion,
      presenter,
      url
    });
    setSubmitted(true);
  }

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 16px" }}>
      <button
        onClick={onBack}
        style={{
          background: "none", border: "none", color: "#f59e0b",
          cursor: "pointer", fontSize: 14, padding: "8px 0",
          marginBottom: 16
        }}
      >
        ← Back to Learn
      </button>

      <div style={{
        textAlign: "center", padding: "32px 20px",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16, marginBottom: 24
      }}>
        <div style={{ fontSize: 48, marginBottom: 12, opacity: 0.6 }}>
          {specialty.icon}
        </div>
        <h2 style={{ fontSize: 22, color: "#f5f5f5", margin: "0 0 8px 0" }}>
          {specialty.name}
        </h2>
        <div style={{
          display: "inline-block", padding: "4px 12px",
          background: "rgba(245,158,11,0.15)", color: "#fbbf24",
          fontSize: 12, fontWeight: 600, borderRadius: 4,
          letterSpacing: "0.05em", textTransform: "uppercase"
        }}>
          Coming Soon
        </div>
        <p style={{
          color: "#9ca3af", fontSize: 14, lineHeight: 1.6,
          marginTop: 16, maxWidth: 440, marginLeft: "auto", marginRight: "auto"
        }}>
          Curated media for this specialty is still being sourced and vetted.
          In the meantime, if you know an excellent free episode, video, or
          lecture that should be included, please suggest it below.
        </p>
      </div>

      {!submitted ? (
        <div style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 12, padding: 20
        }}>
          <h3 style={{
            fontSize: 16, color: "#f5f5f5", margin: "0 0 14px 0",
            fontWeight: 600
          }}>
            Suggest Content
          </h3>

          <label style={{ display: "block", marginBottom: 12 }}>
            <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 4 }}>
              Title of episode / video / lecture
            </div>
            <input
              type="text"
              value={suggestion}
              onChange={e => setSuggestion(e.target.value)}
              placeholder="e.g. Revascularization Protocols with Dr. Smith"
              style={{
                width: "100%", padding: "9px 12px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 6, color: "#f5f5f5",
                fontSize: 14, outline: "none",
                boxSizing: "border-box"
              }}
            />
          </label>

          <label style={{ display: "block", marginBottom: 12 }}>
            <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 4 }}>
              Presenter / Author (credentials if known)
            </div>
            <input
              type="text"
              value={presenter}
              onChange={e => setPresenter(e.target.value)}
              placeholder="e.g. Dr. Jane Smith, DDS, PhD — NYU College of Dentistry"
              style={{
                width: "100%", padding: "9px 12px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 6, color: "#f5f5f5",
                fontSize: 14, outline: "none",
                boxSizing: "border-box"
              }}
            />
          </label>

          <label style={{ display: "block", marginBottom: 16 }}>
            <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 4 }}>
              Direct URL (must be free, no paywall)
            </div>
            <input
              type="url"
              value={url}
              onChange={e => setUrl(e.target.value)}
              placeholder="https://..."
              style={{
                width: "100%", padding: "9px 12px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 6, color: "#f5f5f5",
                fontSize: 14, outline: "none",
                boxSizing: "border-box"
              }}
            />
          </label>

          <button
            onClick={handleSubmit}
            disabled={!suggestion || !url}
            style={{
              padding: "10px 18px", borderRadius: 6,
              background: (!suggestion || !url) ? "rgba(245,158,11,0.3)" : "#f59e0b",
              color: (!suggestion || !url) ? "#7a5810" : "#000",
              fontSize: 13, fontWeight: 600,
              border: "none",
              cursor: (!suggestion || !url) ? "not-allowed" : "pointer",
              transition: "all 0.15s"
            }}
          >
            Submit Suggestion
          </button>

          <p style={{
            fontSize: 11, color: "#6b7280", marginTop: 12,
            lineHeight: 1.5
          }}>
            Suggestions are reviewed against vetting criteria: presenter must have
            peer-reviewed publications, faculty appointment, or documented clinical
            expertise in the topic. Content must be freely accessible and not
            contradict current systematic review evidence without acknowledging the
            controversy.
          </p>
        </div>
      ) : (
        <div style={{
          background: "rgba(34,197,94,0.08)",
          border: "1px solid rgba(34,197,94,0.2)",
          borderRadius: 12, padding: 20, textAlign: "center"
        }}>
          <div style={{ fontSize: 28, marginBottom: 8 }}>✓</div>
          <div style={{ fontSize: 15, color: "#4ade80", fontWeight: 600, marginBottom: 4 }}>
            Thanks for the suggestion
          </div>
          <div style={{ fontSize: 13, color: "#9ca3af" }}>
            It will be reviewed against vetting criteria.
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================
// MEDIA CARD
// ============================================================
function MediaCard({ entry, onClick }) {
  const formatIcon = FORMAT_ICONS[entry.format] || "📺";
  const isStartHere = entry.tags?.includes("foundational");

  return (
    <div
      onClick={onClick}
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 12, padding: "16px 18px",
        cursor: "pointer", transition: "all 0.2s ease",
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

      <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
        <span style={{ fontSize: 20, lineHeight: 1, minWidth: 28, textAlign: "center" }}>
          {formatIcon}
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontWeight: 600, fontSize: 15, color: "#f5f5f5",
            lineHeight: 1.3, marginBottom: 4
          }}>
            {entry.name}
          </div>
          <div style={{ fontSize: 12, color: "#9ca3af", lineHeight: 1.4 }}>
            {entry.source} · {formatDuration(entry.duration)}
          </div>
        </div>
      </div>

      <div style={{
        fontSize: 12, color: "#d4d4d4", marginTop: 8, paddingLeft: 38
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
              fontSize: 10, padding: "2px 6px", borderRadius: 3,
              fontWeight: 500, background: "rgba(245,158,11,0.12)",
              color: "#fbbf24", letterSpacing: "0.02em"
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
// MEDIA DETAIL
// ============================================================
function MediaDetail({ entry, citations, onBack }) {
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
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 16px" }}>
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

      <div style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 12, padding: 20, marginBottom: 16
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <span style={{
            fontSize: 10, fontWeight: 700, padding: "3px 8px",
            borderRadius: 4, color: "#000", background: formatColor,
            textTransform: "uppercase", letterSpacing: "0.06em"
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

        {entry.tags && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 10 }}>
            {entry.tags.map(tag => (
              <span key={tag} style={{
                fontSize: 10, padding: "2px 6px", borderRadius: 3,
                fontWeight: 500, background: "rgba(245,158,11,0.12)",
                color: "#fbbf24"
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
              display: "inline-block", marginTop: 12,
              padding: "8px 16px", borderRadius: 6,
              background: "#f59e0b", color: "#000",
              fontSize: 13, fontWeight: 600,
              textDecoration: "none", transition: "opacity 0.2s"
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

      <div style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderTop: "none", borderRadius: "0 0 12px 12px",
        padding: "16px 18px",
        fontSize: 14, color: "#d4d4d4",
        lineHeight: 1.7, whiteSpace: "pre-wrap"
      }}>
        {tabContent[activeTab] || "No content available."}
      </div>

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

      {entry.refs && entry.refs.length > 0 && citations && (
        <div style={{ marginTop: 12, fontSize: 12, color: "#6b7280" }}>
          <strong style={{ color: "#9ca3af" }}>Referenced:</strong>
          {entry.refs.map(key => {
            const cit = citations[key];
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

      {entry.mapTo && entry.mapTo.length > 0 && (
        <div style={{ marginTop: 12, fontSize: 12, color: "#6b7280" }}>
          <strong style={{ color: "#9ca3af" }}>Cross-references WTFIFU cards:</strong>{" "}
          {entry.mapTo.join(", ")}
        </div>
      )}
    </div>
  );
}

// ============================================================
// SPECIALTY MEDIA LIST (with subcategory grouping)
// ============================================================
function SpecialtyMediaList({ specialty, config, onBack, onSelectEntry }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [formatFilter, setFormatFilter] = useState(null);
  const [activeGroup, setActiveGroup] = useState(null);

  const grouped = useMemo(() => {
    const groups = {};
    config.entries.forEach(entry => {
      const group = config.getGroup(entry.cat);
      if (!groups[group]) groups[group] = [];
      groups[group].push(entry);
    });
    return groups;
  }, [config]);

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

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 16px" }}>
      <button
        onClick={onBack}
        style={{
          background: "none", border: "none", color: "#f59e0b",
          cursor: "pointer", fontSize: 14, padding: "8px 0",
          marginBottom: 4
        }}
      >
        ← Back to Learn
      </button>

      <div style={{ marginBottom: 16 }}>
        <h1 style={{
          fontSize: 22, fontWeight: 700, color: "#f5f5f5",
          marginBottom: 4, display: "flex", alignItems: "center", gap: 10
        }}>
          <span style={{ fontSize: 26 }}>{specialty.icon}</span>
          {specialty.name} — Learn
        </h1>
        <p style={{ fontSize: 13, color: "#9ca3af", margin: 0 }}>
          {config.entries.length} curated episodes · Free, no paywall
        </p>
      </div>

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
          marginBottom: 12, boxSizing: "border-box"
        }}
      />

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
        {["podcast", "video", "lecture", "article", "case-report"].map(fmt => {
          const count = config.entries.filter(e => e.format === fmt).length;
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

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
        {config.groups.map(group => {
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
            onClick={() => onSelectEntry(entry)}
          />
        ))}
      </div>
    </div>
  );
}

// ============================================================
// MAIN — LEARN TILE GRID
// ============================================================
export default function LearnBrowser({ specialties, onBack }) {
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [selectedEntry, setSelectedEntry] = useState(null);

  // Detail view (media entry)
  if (selectedEntry && selectedSpecialty) {
    const config = MEDIA_REGISTRY[selectedSpecialty.id];
    return (
      <MediaDetail
        entry={selectedEntry}
        citations={config?.citations}
        onBack={() => setSelectedEntry(null)}
      />
    );
  }

  // Specialty view — has content OR coming soon
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

  // Default: specialty tile grid (in Learn mode)
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px" }}>
      <div style={{ marginBottom: 20, textAlign: "center" }}>
        <h1 style={{
          fontSize: 26, fontWeight: 700, color: "#f5f5f5",
          marginBottom: 6
        }}>
          Learn — Curated Education
        </h1>
        <p style={{
          fontSize: 14, color: "#9ca3af",
          margin: 0, maxWidth: 520, marginLeft: "auto", marginRight: "auto"
        }}>
          Vetted podcasts, videos, and lectures from credentialed educators. Free, no paywall. Choose a specialty to explore.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
        gap: 12
      }}>
        {specialties.map(specialty => {
          const count = getMediaCount(specialty.id);
          const hasContent = count > 0;

          return (
            <div
              key={specialty.id}
              onClick={() => setSelectedSpecialty(specialty)}
              style={{
                background: hasContent ? (specialty.bg || "rgba(255,255,255,0.04)") : "rgba(255,255,255,0.02)",
                border: `1px solid ${hasContent ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.05)"}`,
                borderRadius: 12, padding: 16,
                cursor: "pointer",
                transition: "all 0.2s ease",
                opacity: hasContent ? 1 : 0.55,
                position: "relative",
                minHeight: 120,
                display: "flex", flexDirection: "column",
                justifyContent: "space-between"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.borderColor = hasContent
                  ? (specialty.color || "#f59e0b")
                  : "rgba(245,158,11,0.3)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = hasContent
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(255,255,255,0.05)";
              }}
            >
              <div>
                <div style={{ fontSize: 28, marginBottom: 8 }}>
                  {specialty.icon}
                </div>
                <div style={{
                  fontWeight: 600, fontSize: 15, color: "#f5f5f5",
                  lineHeight: 1.3
                }}>
                  {specialty.name}
                </div>
              </div>

              <div style={{ marginTop: 10 }}>
                {hasContent ? (
                  <div style={{
                    fontSize: 11, color: specialty.color || "#f59e0b",
                    fontWeight: 600
                  }}>
                    {count} {count === 1 ? "episode" : "episodes"} →
                  </div>
                ) : (
                  <div style={{
                    display: "inline-block", padding: "2px 8px",
                    background: "rgba(245,158,11,0.1)",
                    color: "#fbbf24", fontSize: 10,
                    fontWeight: 700, borderRadius: 3,
                    letterSpacing: "0.06em", textTransform: "uppercase"
                  }}>
                    Coming Soon
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
