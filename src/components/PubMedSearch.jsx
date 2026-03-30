// ═══════════════════════════════════════════════════════════════════
// PubMedSearch.jsx — Embedded PubMed E-utilities search engine
// Available on every specialty page via import
// Uses NCBI E-utilities: esearch → esummary pipeline
// No API key required for <3 req/sec; add key for higher volume
// ═══════════════════════════════════════════════════════════════════

import { useState, useCallback, useRef } from "react";

const BASE = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils";
const MAX_RESULTS = 8;

// ── Grade-like badge colors for article types ──
const TYPE_COLORS = {
  "Meta-Analysis": { color: "#10b981", bg: "#064e3b" },
  "Systematic Review": { color: "#10b981", bg: "#064e3b" },
  "Randomized Controlled Trial": { color: "#22d3ee", bg: "#0c2d3e" },
  "Clinical Trial": { color: "#22d3ee", bg: "#0c2d3e" },
  "Review": { color: "#a78bfa", bg: "#3b1f6e" },
  "Practice Guideline": { color: "#f59e0b", bg: "#78350f" },
  "Case Reports": { color: "#f472b6", bg: "#831843" },
};
const getTypeBadge = (types) => {
  if (!types?.length) return null;
  for (const t of ["Meta-Analysis", "Systematic Review", "Randomized Controlled Trial", "Clinical Trial", "Review", "Practice Guideline", "Case Reports"]) {
    if (types.includes(t)) return { label: t, ...TYPE_COLORS[t] };
  }
  return null;
};

export default function PubMedSearch({ defaultQuery = "", accentColor = "#3b82f6" }) {
  const [query, setQuery] = useState(defaultQuery);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const abortRef = useRef(null);

  const search = useCallback(async (q) => {
    const term = (q || query).trim();
    if (!term) return;
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    setLoading(true);
    setError(null);
    setResults([]);
    setSearched(true);

    try {
      // Step 1: esearch — get PMIDs
      const searchUrl = `${BASE}/esearch.fcgi?db=pubmed&term=${encodeURIComponent(term)}&retmax=${MAX_RESULTS}&sort=relevance&retmode=json`;
      const searchRes = await fetch(searchUrl, { signal: controller.signal });
      if (!searchRes.ok) throw new Error(`PubMed search failed (${searchRes.status})`);
      const searchData = await searchRes.json();
      const ids = searchData?.esearchresult?.idlist || [];
      const count = parseInt(searchData?.esearchresult?.count || "0", 10);
      setTotalCount(count);

      if (!ids.length) {
        setResults([]);
        setLoading(false);
        return;
      }

      // Step 2: esummary — get article metadata
      const summaryUrl = `${BASE}/esummary.fcgi?db=pubmed&id=${ids.join(",")}&retmode=json`;
      const summaryRes = await fetch(summaryUrl, { signal: controller.signal });
      if (!summaryRes.ok) throw new Error(`PubMed summary failed (${summaryRes.status})`);
      const summaryData = await summaryRes.json();

      const articles = ids.map(id => {
        const r = summaryData?.result?.[id];
        if (!r) return null;
        return {
          pmid: id,
          title: r.title || "",
          authors: r.authors?.slice(0, 3).map(a => a.name).join(", ") + (r.authors?.length > 3 ? ", et al." : ""),
          journal: r.fulljournalname || r.source || "",
          journalShort: r.source || "",
          year: r.pubdate?.split(" ")?.[0] || "",
          volume: r.volume || "",
          issue: r.issue || "",
          pages: r.pages || "",
          doi: r.elocationid || "",
          pubTypes: r.pubtype || [],
        };
      }).filter(Boolean);

      setResults(articles);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError("Search failed — check connection and try again.");
      }
    } finally {
      setLoading(false);
    }
  }, [query]);

  const handleKey = (e) => { if (e.key === "Enter") search(); };

  // ── Quick-search presets ──
  const presets = [
    { label: "Bioceramic sealers", q: "bioceramic endodontic sealer clinical outcome" },
    { label: "GBR membranes", q: "guided bone regeneration membrane collagen PTFE" },
    { label: "MDP zirconia bonding", q: "MDP zirconia bond strength resin cement" },
    { label: "PRF periodontal", q: "platelet rich fibrin periodontal regeneration" },
    { label: "NiTi cyclic fatigue", q: "nickel titanium rotary file cyclic fatigue" },
    { label: "IDS cementation", q: "immediate dentin sealing indirect restoration" },
  ];

  return (
    <div style={{ background: "#0a0f1a", border: "1px solid #1e293b", borderRadius: 16, padding: "20px 20px 16px", marginBottom: 20 }}>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <div style={{ width: 28, height: 28, borderRadius: 8, background: `${accentColor}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>🔬</div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 800, color: "#e2e8f0", letterSpacing: 0.5 }}>PubMed Search</div>
          <div style={{ fontSize: 9.5, color: "#475569", letterSpacing: 0.3 }}>NCBI E-utilities · {totalCount > 0 ? `${totalCount.toLocaleString()} results` : "Search biomedical literature"}</div>
        </div>
      </div>

      {/* Search bar */}
      <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Search PubMed (e.g., bioceramic sealer clinical outcome)..."
          style={{
            flex: 1, background: "#111827", border: "1px solid #1e293b", borderRadius: 10, padding: "10px 14px",
            color: "#e2e8f0", fontSize: 12.5, outline: "none", fontFamily: "'Outfit',system-ui",
            transition: "border-color 0.2s",
          }}
          onFocus={e => e.target.style.borderColor = accentColor + "66"}
          onBlur={e => e.target.style.borderColor = "#1e293b"}
        />
        <button
          onClick={() => search()}
          disabled={loading || !query.trim()}
          style={{
            background: loading ? "#1e293b" : accentColor, color: loading ? "#475569" : "#fff",
            border: "none", borderRadius: 10, padding: "10px 18px", fontSize: 12, fontWeight: 700,
            cursor: loading ? "wait" : "pointer", fontFamily: "'Outfit',system-ui",
            opacity: !query.trim() ? 0.4 : 1, transition: "all 0.2s", letterSpacing: 0.5,
          }}
        >
          {loading ? "..." : "Search"}
        </button>
      </div>

      {/* Quick presets */}
      {!searched && (
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 6 }}>
          {presets.map(p => (
            <span
              key={p.label}
              onClick={() => { setQuery(p.q); search(p.q); }}
              style={{
                background: "#111827", border: "1px solid #1e293b", borderRadius: 8,
                padding: "4px 10px", fontSize: 10, color: "#64748b", cursor: "pointer",
                fontWeight: 600, transition: "all 0.15s", letterSpacing: 0.2,
              }}
              onMouseEnter={e => { e.target.style.borderColor = accentColor + "44"; e.target.style.color = accentColor; }}
              onMouseLeave={e => { e.target.style.borderColor = "#1e293b"; e.target.style.color = "#64748b"; }}
            >
              {p.label}
            </span>
          ))}
        </div>
      )}

      {/* Error */}
      {error && <div style={{ color: "#f87171", fontSize: 11, padding: "8px 0" }}>{error}</div>}

      {/* No results */}
      {searched && !loading && results.length === 0 && !error && (
        <div style={{ color: "#475569", fontSize: 11, padding: "12px 0", textAlign: "center" }}>No results found. Try broader terms.</div>
      )}

      {/* Results */}
      {results.length > 0 && (
        <div style={{ marginTop: 6 }}>
          {results.map((r, i) => {
            const badge = getTypeBadge(r.pubTypes);
            return (
              <div key={r.pmid} style={{
                padding: "10px 0", borderBottom: i < results.length - 1 ? "1px solid #1e293b33" : "none",
              }}>
                <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                  {/* Number */}
                  <span style={{ color: "#334155", fontSize: 10, fontWeight: 800, flexShrink: 0, marginTop: 2, width: 16, textAlign: "right" }}>{i + 1}</span>
                  <div style={{ flex: 1 }}>
                    {/* Title */}
                    <a
                      href={`https://pubmed.ncbi.nlm.nih.gov/${r.pmid}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#cbd5e1", fontSize: 11.5, fontWeight: 600, lineHeight: 1.35, textDecoration: "none", display: "block" }}
                      onMouseEnter={e => e.target.style.color = accentColor}
                      onMouseLeave={e => e.target.style.color = "#cbd5e1"}
                    >
                      {r.title}
                    </a>
                    {/* Meta row */}
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 3, flexWrap: "wrap" }}>
                      {badge && (
                        <span style={{ background: badge.bg, color: badge.color, fontSize: 8, fontWeight: 800, padding: "2px 6px", borderRadius: 3, letterSpacing: 0.3, textTransform: "uppercase" }}>
                          {badge.label}
                        </span>
                      )}
                      <span style={{ color: "#475569", fontSize: 10 }}>
                        {r.authors}
                      </span>
                    </div>
                    <div style={{ color: "#334155", fontSize: 9.5, marginTop: 2 }}>
                      <em>{r.journalShort}</em> {r.year}{r.volume ? `;${r.volume}` : ""}{r.issue ? `(${r.issue})` : ""}{r.pages ? `:${r.pages}` : ""}
                      <span style={{ marginLeft: 8 }}>
                        <a href={`https://pubmed.ncbi.nlm.nih.gov/${r.pmid}/`} target="_blank" rel="noopener noreferrer" style={{ color: accentColor, fontSize: 9, fontWeight: 700, textDecoration: "none" }}>
                          PMID:{r.pmid} ↗
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* Result count footer */}
          {totalCount > MAX_RESULTS && (
            <div style={{ textAlign: "center", paddingTop: 8, borderTop: "1px solid #1e293b33" }}>
              <a
                href={`https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(query)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: accentColor, fontSize: 10, fontWeight: 700, textDecoration: "none", letterSpacing: 0.3 }}
              >
                View all {totalCount.toLocaleString()} results on PubMed ↗
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
