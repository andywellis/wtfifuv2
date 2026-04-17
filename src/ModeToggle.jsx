// ============================================================
// ModeToggle.jsx — Products / Learn pill toggle
// ============================================================
// Prominent toggle at the top of the landing page.
// Switches between the Products view (current 16-specialty tile grid)
// and the Learn view (same specialties, routes to curated media).
// ============================================================

import React from "react";

export default function ModeToggle({ mode, onChange }) {
  const modes = [
    { id: "products", label: "Products", icon: "📚" },
    { id: "learn", label: "Learn", icon: "🎓" }
  ];

  return (
    <div style={{
      display: "flex", justifyContent: "center",
      marginBottom: 24, marginTop: 8
    }}>
      <div style={{
        display: "inline-flex",
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 999,
        padding: 4,
        position: "relative"
      }}>
        {modes.map(m => {
          const isActive = mode === m.id;
          return (
            <button
              key={m.id}
              onClick={() => onChange(m.id)}
              style={{
                background: isActive ? "#f59e0b" : "transparent",
                color: isActive ? "#000" : "#d4d4d4",
                border: "none",
                borderRadius: 999,
                padding: "8px 22px",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s ease",
                display: "flex", alignItems: "center", gap: 6,
                minWidth: 110,
                justifyContent: "center"
              }}
              onMouseEnter={e => {
                if (!isActive) {
                  e.currentTarget.style.color = "#f5f5f5";
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                }
              }}
              onMouseLeave={e => {
                if (!isActive) {
                  e.currentTarget.style.color = "#d4d4d4";
                  e.currentTarget.style.background = "transparent";
                }
              }}
            >
              <span style={{ fontSize: 16 }}>{m.icon}</span>
              {m.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
