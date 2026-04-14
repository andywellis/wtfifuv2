import { useState, useMemo, useCallback } from "react";

// ── Modular data imports ──
import {
  EG, CIT, CC, gc, CURE_INFO, ISOLATION, APA_INTRAORAL, SILANE_2B,
  getGroup, GROUPS, CEMENTS, SURFACE_TREATMENTS, POLISHING, STAIN_GLAZE
} from "./data/sharedRestProsthData.js";
import { REST_MATERIALS, COMPOSITES, POST_CORE, BONDING_AGENTS } from "./data/restorativeData.js";
import { PROSTH_MATERIALS, PROVISIONALS, PROSTH_DESIGN } from "./data/prosthData.js";
import { ALL_IMPLANT_PRODUCTS, implantGetGroup, IMPLANT_GROUPS, IMPLANT_CIT } from "./data/implantData.js";
import { ALL_PERIO, perioGetGroup, PERIO_GROUPS, PERIO_CIT } from "./data/perioData.js";
import { ALL_PREVENTIVE_PRODUCTS, prevGetGroup, PREV_GROUPS, PREV_CIT } from "./data/preventiveData.js";
import { ALL_SEDATION_PRODUCTS, sedGetGroup, SED_GROUPS, SED_CIT } from "./data/sedationData.js";
import { ALL_OFP_PRODUCTS, ofpGetGroup, OFP_GROUPS, OFP_CIT } from "./data/ofpData.js";
import { ALL_SLEEP_PRODUCTS, sleepGetGroup, SLEEP_GROUPS, SLEEP_CIT } from "./data/sleepData.js";
import { ALL_LASER_PRODUCTS, laserGetGroup, LASER_GROUPS, LASER_CIT } from "./data/laserData.js";
import { ALL_PRINTING_PRODUCTS, printGetGroup, PRINT_GROUPS, PRINT_CIT } from "./data/printingData.js";
import { ALL_ORTHO_PRODUCTS, orthoGetGroup, ORTHO_GROUPS, ORTHO_CIT } from "./data/orthodonticsData.js";
import { ALL_PEDS_PRODUCTS, pedsGetGroup, PEDS_GROUPS, PEDS_CIT } from "./data/pediatricData.js";
import { ALL_TRAUMA_PRODUCTS, traumaGetGroup, TRAUMA_GROUPS, TRAUMA_CIT } from "./data/traumaData.js";
import { ALL_PHOTO_PRODUCTS, photoGetGroup, PHOTO_GROUPS, PHOTO_CIT } from "./data/photographyData.js";
import { ALL_ORALMED_PRODUCTS, oralmedGetGroup, ORALMED_GROUPS, ORALMED_CIT } from "./data/oralMedData.js";
import { ALL_TP_PRODUCTS, tpGetGroup, TP_GROUPS, TP_CIT } from "./data/treatmentPlanningData.js";
import { ALL_ORALSURG_PRODUCTS, oralSurgGetGroup, ORALSURG_GROUPS, ORALSURG_CIT } from "./data/oralSurgData.js";
import { ALL_PHARM_PRODUCTS, pharmGetGroup, PHARM_GROUPS, PHARM_CIT } from "./data/pharmacologyData.js";
import PubMedSearch from "./components/PubMedSearch.jsx";

// ── Combine materials from both specialties ──
const MATERIALS = [...REST_MATERIALS, ...PROSTH_MATERIALS];

// ═══════════════════════════════════════════════
// UI PRIMITIVES
// ═══════════════════════════════════════════════

function ReadMore({ children, color }) {
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

function Ref({ ids }) {
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

function S({ children, color, refs }) {
  return <h3 style={{ fontFamily: "'Newsreader',Georgia,serif", fontSize: 14, fontWeight: 700, color: color || "#e2e8f0", margin: "18px 0 6px", borderBottom: `1px solid ${color || "#334155"}33`, paddingBottom: 4, display: "flex", alignItems: "center", gap: 4, flexWrap: "wrap" }}>{children}<Ref ids={refs} /></h3>;
}

function R({ l, v, c, w }) {
  return (
    <div style={{ display: "flex", gap: 7, marginBottom: 3, alignItems: "flex-start" }}>
      <span style={{ color: c || "#475569", fontWeight: 700, fontSize: 10, minWidth: 80, textTransform: "uppercase", letterSpacing: 0.4, paddingTop: 2, flexShrink: 0 }}>{l}</span>
      <span style={{ color: "#cbd5e1", fontSize: 12, flex: 1, lineHeight: 1.5 }}>
        {v}{w && <span style={{ display: "inline-block", background: "#7f1d1d", color: "#fca5a5", fontSize: 9, fontWeight: 700, padding: "1px 5px", borderRadius: 3, marginLeft: 5 }}>⚠ {w}</span>}
      </span>
    </div>
  );
}

function OL({ items, c }) {
  return <ol style={{ margin: "4px 0", paddingLeft: 18, lineHeight: 1.6 }}>{items.map((s, i) => <li key={i} style={{ color: c || "#94a3b8", fontSize: 12, marginBottom: 2 }}>{s}</li>)}</ol>;
}

function Card({ bg, a, border, children }) {
  return <div style={{ background: bg || "rgba(255,255,255,0.03)", borderRadius: 7, padding: "8px 12px", marginBottom: 6, borderLeft: `3px solid ${border || a || "#334155"}` }}>{children}</div>;
}

// Curing info callout — compact
function CureInfo({ text }) {
  return <div style={{ background: "#0f172a", borderRadius: 6, padding: "6px 10px", marginTop: 6, border: "1px solid #1e293b" }}>
    <span style={{ color: "#fbbf24", fontSize: 9, fontWeight: 800 }}>💡 CURING: </span>
    <span style={{ color: "#94a3b8", fontSize: 10.5 }}>{text || CURE_INFO.standard}</span>
  </div>;
}

// Isolation callout — compact
function IsolationInfo() {
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

// ── Header component for all detail views ──
function DetailHeader({ item, onBack, extra }) {
  const col = gc(item.cat);
  return <>
    <link href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,600;6..72,700&family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
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

function TabBar({ tabs, active, setActive, color }) {
  return <div style={{ display: "flex", gap: 3, marginBottom: 12, flexWrap: "wrap" }}>
    {tabs.map(t => <button key={t.id} onClick={() => setActive(t.id)} style={{ background: active === t.id ? color : "rgba(255,255,255,0.05)", color: active === t.id ? "#080d19" : "#64748b", border: "none", borderRadius: 7, padding: "6px 12px", fontFamily: "'Outfit'", fontSize: 11.5, fontWeight: 700, cursor: "pointer" }}>{t.label}</button>)}
  </div>;
}

// ═══════════════════════════════════════════════
// MATERIALS DATA — CORRECTED
// Katana ONE/Speed → 4Y-TZP STML (not UTML)
// Gold bonding added
// ═══════════════════════════════════════════════

// ═══════════════════════════════════════════════
// DETAIL VIEWS
// ═══════════════════════════════════════════════

// ── Material Detail ──
function MatDetail({ mat, onBack }) {
  const col = gc(mat.cat);
  const [tab, setTab] = useState("surface");
  const s = mat.surface;
  const hasOutcomes = mat.notes && mat.notes.includes("CLINICAL OUTCOMES");
  const tabs = [
    { id: "surface", label: "Surface Tx" },
    { id: "cement", label: "Cementation" },
    { id: "tooth", label: "Tooth Prep" },
    ...(hasOutcomes ? [{ id: "outcomes", label: "Clinical Outcomes" }] : []),
  ];

  return (
    <div style={{ maxWidth: 820, margin: "0 auto" }}>
      <DetailHeader item={mat} onBack={onBack} />
      <TabBar tabs={tabs} active={tab} setActive={setTab} color={col.a} />
      <div style={{ background: "#080d19", borderRadius: 11, padding: "16px 20px", border: "1px solid #1e293b", minHeight: 280 }}>
        {tab === "surface" && <div>
          <S color={col.a} refs={s.etch.refs}>1 · Etching</S>
          <R l="Method" v={s.etch.m} c={col.a} />
          <R l="Detail" v={s.etch.d} c={col.a} />
          {s.etch.w && <R l="Warning" v="" c="#ef4444" w={s.etch.w} />}

          <S color={col.a} refs={s.abrasion.refs}>2 · Abrasion</S>
          <R l="Protocol" v={s.abrasion.m} c={col.a} />

          <S color={col.a}>3 · Cleaning</S>
          <OL items={s.clean} c={col.a} />

          <S color={col.a} refs={s.primer.refs}>4 · Primer</S>
          <R l="Evidence" v={s.primer.best} c="#10b981" />
          <R l="Mechanism" v={s.primer.mechanism} c={col.a} />
          {s.primer.conflict && <div style={{ background: "#7f1d1d", borderRadius: 6, padding: "6px 10px", marginTop: 6, borderLeft: "3px solid #ef4444" }}>
            <span style={{ color: "#ef4444", fontSize: 9, fontWeight: 800 }}>IFU CONFLICT — EVIDENCE PREVAILS</span>
            <ReadMore color="#fca5a5">{SILANE_2B.rationale}</ReadMore>
          </div>}

          {/* 2-bottle silane protocol (for silane materials) or MDP note */}
          {s.primer.best.includes("Silane") && <Card border="#10b981">
            <div style={{ color: "#10b981", fontSize: 9, fontWeight: 800, letterSpacing: 1, marginBottom: 4 }}>✓ 2-BOTTLE SILANE PROTOCOL</div>
            <div style={{ color: "#6ee7b7", fontSize: 10, marginBottom: 3 }}>{SILANE_2B.products}</div>
            <OL items={SILANE_2B.steps} c="#6ee7b7" />
            <div style={{ background: "#450a0a", borderRadius: 4, padding: "4px 8px", marginTop: 4 }}>
              <span style={{ color: "#ef4444", fontSize: 9, fontWeight: 800 }}>⚠ </span><span style={{ color: "#fca5a5", fontSize: 10 }}>{SILANE_2B.warn}</span>
            </div>
            <ReadMore color="#6ee7b7">{SILANE_2B.heat}</ReadMore>
          </Card>}

          {s.primer.best.includes("MDP") && !s.primer.best.includes("DUAL") && <Card border="#60a5fa">
            <div style={{ color: "#60a5fa", fontSize: 9, fontWeight: 800, marginBottom: 3 }}>MDP PRIMER PROTOCOL</div>
            <div style={{ color: "#93c5fd", fontSize: 10.5, lineHeight: 1.5 }}>Apply MDP primer → 60 sec → air thin (monolayer principle applies). Verify dry, uniform film.</div>
          </Card>}

          {s.primer.best.includes("DUAL") && <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginTop: 6 }}>
            <Card border="#60a5fa"><div style={{ color: "#60a5fa", fontSize: 9, fontWeight: 800 }}>ZIRCONIA (Intaglio)</div><div style={{ color: "#93c5fd", fontSize: 10.5 }}>MDP → 60s → air thin</div></Card>
            <Card border="#fb7185"><div style={{ color: "#fb7185", fontSize: 9, fontWeight: 800 }}>FUSION (Facial/Incisal)</div><div style={{ color: "#fda4af", fontSize: 10.5 }}>2-bottle silane → 60s → air thin + heat</div></Card>
          </div>}

          {s.primer.best.includes("VBATDT") || s.primer.best.includes("Alloy") ? <Card border="#eab308">
            <div style={{ color: "#eab308", fontSize: 9, fontWeight: 800, marginBottom: 3 }}>ALLOY PRIMER PROTOCOL (VBATDT + MDP)</div>
            <div style={{ color: "#fde68a", fontSize: 10.5, lineHeight: 1.5 }}>Apply Alloy Primer (Kuraray) or V-Primer to sandblasted noble metal surface → 60 sec → air thin. VBATDT bonds to noble metals via sulfur-metal interaction. MDP handles base metal oxides.</div>
            <ReadMore color="#fde68a">Alloy Primer contains BOTH VBATDT (for noble) and MDP (for base metals) = universal metal primer. Without it, resin cements have virtually no chemical bond to gold/noble alloys. Essential for adhesive cementation of non-retentive gold/noble preps.</ReadMore>
          </Card> : null}

          {s.laser && <div style={{ marginTop: 8 }}><R l="Laser" v={s.laserNote || "Not recommended"} c={s.laser === true ? "#fbbf24" : "#ef4444"} /></div>}
          <CureInfo />
        </div>}

        {tab === "cement" && <div>
          <S color={col.a} refs={mat.cement.refs}>Recommended</S>
          {mat.cement.pref.map((c, i) => <Card key={i} border={col.a}>
            <div style={{ fontWeight: 700, color: col.a, fontSize: 12, marginBottom: 2 }}>{c.t}</div>
            <div style={{ color: "#64748b", fontSize: 11 }}>{c.ex}</div>
            <div style={{ color: "#94a3b8", fontSize: 11, lineHeight: 1.4 }}>{c.n}</div>
            {c.dc && <div style={{ color: "#fbbf24", fontSize: 10, marginTop: 2, fontWeight: 600 }}>⚡ {c.dc}</div>}
            {c.cure && <div style={{ color: "#22d3ee", fontSize: 10, marginTop: 1 }}>⏱ {c.cure}</div>}
          </Card>)}
          <S color="#ef4444">Avoid</S>
          <ul style={{ margin: 0, paddingLeft: 16 }}>{mat.cement.avoid.map((a, i) => <li key={i} style={{ color: "#fca5a5", fontSize: 11.5, marginBottom: 2 }}>{a}</li>)}</ul>
          {mat.cement.special && <><S color="#fbbf24">Notes</S><p style={{ color: "#fde68a", fontSize: 11.5, lineHeight: 1.5, margin: 0 }}>{mat.cement.special}</p></>}
        </div>}

        {tab === "tooth" && <div>
          <S color={col.a} refs={mat.tooth.refs}>Enamel Etching</S>
          <R l="Protocol" v={mat.tooth.etch} c={col.a} />
          <IsolationInfo />
          <S color={col.a}>Adhesive Systems</S>
          {mat.tooth.adh.map((a, i) => <Card key={i} border={col.a}>
            <div style={{ fontWeight: 700, color: col.a, fontSize: 12, marginBottom: 1 }}>{a.s}</div>
            <div style={{ color: "#c084fc", fontSize: 10.5, marginBottom: 4 }}>{a.ex}</div>
            <OL items={a.steps} c={col.a} />
            {a.dc && <div style={{ color: "#fbbf24", fontSize: 10, marginTop: 2, fontWeight: 600 }}>⚡ {a.dc}</div>}
          </Card>)}
          <S color="#ef4444">Contamination</S>
          <R l="Saliva" v={mat.tooth.contam.saliva} c="#ef4444" />
          <R l="Try-in" v={mat.tooth.contam.tryIn} c="#ef4444" />
          <R l="Blood" v={mat.tooth.contam.blood} c="#ef4444" />
        </div>}
        {tab === "outcomes" && hasOutcomes && <div>
          <SmartText text={mat.notes} color={col.a} />
        </div>}
      </div>
      <div style={{ marginTop: 12 }}>
        <PubMedSearch defaultQuery={mat.name.replace(/[—–()\[\]▸]/g, " ").trim().split(" ").slice(0, 4).join(" ")} accentColor={col.a} />
      </div>
    </div>
  );
}

// ── Cement Detail ──
function CemDetail({ cem, onBack }) {
  const col = gc(cem.cat);
  const [tab, setTab] = useState("protocol");
  const tabs = [{ id: "protocol", label: "Protocol" },{ id: "compat", label: "Compatibility" },{ id: "clinical", label: "Clinical" }];
  return (
    <div style={{ maxWidth: 820, margin: "0 auto" }}>
      <DetailHeader item={cem} onBack={onBack} extra={<span style={{ background: "#1e293b", color: "#fbbf24", fontSize: 9, fontWeight: 700, padding: "2px 8px", borderRadius: 16 }}>{cem.cureType}</span>} />
      <TabBar tabs={tabs} active={tab} setActive={setTab} color={col.a} />
      <div style={{ background: "#080d19", borderRadius: 11, padding: "16px 20px", border: "1px solid #1e293b", minHeight: 280 }}>
        {tab === "protocol" && <div>
          <S color={col.a} refs={cem.refs}>Application</S>
          <OL items={cem.steps} c={col.a} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 12 }}>
            <Card border="#22d3ee"><div style={{ color: "#22d3ee", fontSize: 9, fontWeight: 800 }}>WORKING TIME</div><div style={{ color: "#e2e8f0", fontSize: 12, fontWeight: 700 }}>{cem.workTime}</div></Card>
            <Card border="#f59e0b"><div style={{ color: "#f59e0b", fontSize: 9, fontWeight: 800 }}>SETTING TIME</div><div style={{ color: "#e2e8f0", fontSize: 12, fontWeight: 700 }}>{cem.setTime}</div></Card>
          </div>
          <S color={col.a}>Cleanup</S>
          <p style={{ color: "#cbd5e1", fontSize: 11.5, lineHeight: 1.5, margin: 0 }}>{cem.cleanup}</p>
          <CureInfo />
        </div>}
        {tab === "compat" && <div>
          {cem.compat.excellent.length > 0 && <><S color="#10b981">Excellent</S><ul style={{ margin: 0, paddingLeft: 16 }}>{cem.compat.excellent.map((s, i) => <li key={i} style={{ color: "#a7f3d0", fontSize: 11.5, marginBottom: 3 }}>{s}</li>)}</ul></>}
          {cem.compat.good.length > 0 && <><S color="#fbbf24">Good</S><ul style={{ margin: 0, paddingLeft: 16 }}>{cem.compat.good.map((s, i) => <li key={i} style={{ color: "#fde68a", fontSize: 11.5, marginBottom: 3 }}>{s}</li>)}</ul></>}
          <S color="#ef4444">Avoid</S>
          <ul style={{ margin: 0, paddingLeft: 16 }}>{cem.compat.avoid.map((s, i) => <li key={i} style={{ color: "#fca5a5", fontSize: 11.5, marginBottom: 3 }}>{s}</li>)}</ul>
        </div>}
        {tab === "clinical" && <div>
          <R l="Tooth Adh" v={cem.adhesiveNeeded} c={col.a} />
          <R l="Rest Prep" v={cem.restorationPrep} c={col.a} />
          <S color="#fbbf24">DC Considerations</S>
          <Card border={cem.dcNote.includes("⚠") || cem.dcNote.includes("MANDATORY") ? "#ef4444" : "#fbbf24"}>
            <p style={{ color: cem.dcNote.includes("⚠") ? "#fca5a5" : "#fde68a", fontSize: 11.5, lineHeight: 1.5, margin: 0, fontWeight: 500 }}>{cem.dcNote}</p>
          </Card>
          {cem.special && <><S color="#c084fc">Clinical Pearls</S><SmartText text={cem.special} color="#c084fc" /></>}
        </div>}
      </div>

      <div style={{ marginTop: 12 }}>
        <PubMedSearch defaultQuery={cem.name.replace(/[—–()\[\]▸]/g, " ").trim().split(" ").slice(0, 4).join(" ")} accentColor={col.a} />
      </div>
    </div>
  );
}

// ── Composite Detail ──
function CompDetail({ comp, onBack }) {
  const col = gc(comp.cat);
  const [tab, setTab] = useState("protocol");
  const tabs = [{ id: "protocol", label: "Application" },{ id: "ids", label: "IDS / DME / Core" },{ id: "clinical", label: "Clinical" }];
  return (
    <div style={{ maxWidth: 820, margin: "0 auto" }}>
      <DetailHeader item={comp} onBack={onBack} />
      <TabBar tabs={tabs} active={tab} setActive={setTab} color={col.a} />
      <div style={{ background: "#080d19", borderRadius: 11, padding: "16px 20px", border: "1px solid #1e293b", minHeight: 280 }}>
        {tab === "protocol" && <div>
          <S color={col.a} refs={comp.refs}>Placement</S>
          <OL items={comp.steps} c={col.a} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 12 }}>
            <Card border="#e879f9"><div style={{ color: "#e879f9", fontSize: 9, fontWeight: 800 }}>LAYERING</div><div style={{ color: "#e2e8f0", fontSize: 11, lineHeight: 1.4 }}>{comp.layering}</div></Card>
            <Card border="#f59e0b"><div style={{ color: "#f59e0b", fontSize: 9, fontWeight: 800 }}>CURE</div><div style={{ color: "#e2e8f0", fontSize: 11, lineHeight: 1.4 }}>{comp.cureTime}</div></Card>
          </div>
          <CureInfo />
        </div>}
        {tab === "ids" && <div>
          <S color="#22d3ee">IDS / Resin Coat</S>
          <p style={{ color: "#cbd5e1", fontSize: 11.5, lineHeight: 1.5, margin: "0 0 10px" }}>{comp.ids}</p>
          <S color="#60a5fa">DME</S>
          <p style={{ color: "#cbd5e1", fontSize: 11.5, lineHeight: 1.5, margin: "0 0 10px" }}>{comp.dme}</p>
          {comp.apa && <><S color="#fbbf24">Intraoral APA</S><p style={{ color: "#fde68a", fontSize: 11.5, lineHeight: 1.5, margin: 0 }}>{comp.apa}</p></>}
        </div>}
        {tab === "clinical" && <div>
          {comp.special && <><S color="#c084fc">Clinical Pearls</S><SmartText text={comp.special} color="#c084fc" /></>}
        </div>}
      </div>

      <div style={{ marginTop: 12 }}>
        <PubMedSearch defaultQuery={comp.name.replace(/[—–()\[\]▸]/g, " ").trim().split(" ").slice(0, 4).join(" ")} accentColor={col.a} />
      </div>
    </div>
  );
}

// ── Bonding Agent Detail ──
function BondDetail({ bond, onBack }) {
  const col = gc(bond.cat);
  const [tab, setTab] = useState("protocol");
  const tabs = [{ id: "protocol", label: "Steps" },{ id: "technique", label: "Technique" },{ id: "clinical", label: "Clinical" }];
  return (
    <div style={{ maxWidth: 820, margin: "0 auto" }}>
      <DetailHeader item={bond} onBack={onBack} extra={<>
        <span style={{ background: "#1e293b", color: "#fbbf24", fontSize: 9, fontWeight: 700, padding: "2px 8px", borderRadius: 16 }}>{bond.gen}</span>
        {bond.antibacterial && <span style={{ background: "#064e3b", color: "#10b981", fontSize: 9, fontWeight: 700, padding: "2px 8px", borderRadius: 16 }}>MDPB Antibacterial</span>}
      </>} />
      <TabBar tabs={tabs} active={tab} setActive={setTab} color={col.a} />
      <div style={{ background: "#080d19", borderRadius: 11, padding: "16px 20px", border: "1px solid #1e293b", minHeight: 280 }}>
        {tab === "protocol" && <div>
          <S color={col.a} refs={bond.refs}>Application</S>
          <OL items={bond.steps} c={col.a} />
          <R l="Strength" v={bond.strength} c={col.a} />
          <R l="Layers" v={bond.layers} c={col.a} />
          <CureInfo text={bond.wavelength} />
        </div>}
        {tab === "technique" && <div>
          <S color="#22d3ee">Etch Protocol</S>
          <p style={{ color: "#cbd5e1", fontSize: 11.5, lineHeight: 1.5, margin: "0 0 10px" }}>{bond.etchProtocol}</p>
          <S color="#60a5fa">Moisture Control</S>
          <p style={{ color: "#cbd5e1", fontSize: 11.5, lineHeight: 1.5, margin: "0 0 10px" }}>{bond.moisture}</p>
          <S color="#2dd4bf">Isolation</S>
          <p style={{ color: "#cbd5e1", fontSize: 11.5, lineHeight: 1.5, margin: "0 0 10px" }}>{bond.isolation}</p>
          <S color="#fbbf24">DC Compatibility</S>
          <Card border={bond.dcCompat.includes("✅") ? "#10b981" : "#ef4444"}>
            <p style={{ color: bond.dcCompat.includes("✅") ? "#a7f3d0" : "#fca5a5", fontSize: 11.5, lineHeight: 1.5, margin: 0, fontWeight: 500 }}>{bond.dcCompat}</p>
          </Card>
        </div>}
        {tab === "clinical" && <div>
          {bond.special && <><S color="#c084fc">Clinical Pearls</S><SmartText text={bond.special} color="#c084fc" /></>}
          {bond.antibacterial && <><S color="#10b981">Antibacterial</S><p style={{ color: "#a7f3d0", fontSize: 11.5, lineHeight: 1.5, margin: 0 }}>MDPB polymerizes INTO adhesive = permanent contact-kill. Not leaching. Lasts life of restoration. Also useful as decontaminant after try-in.</p></>}
        </div>}
      </div>

      <div style={{ marginTop: 12 }}>
        <PubMedSearch defaultQuery={bond.name.replace(/[—–()\[\]▸]/g, " ").trim().split(" ").slice(0, 4).join(" ")} accentColor={col.a} />
      </div>
    </div>
  );
}

// ── Surface Treatment Detail ──
function SurfaceDetail({ item, onBack }) {
  const col = gc(item.cat);
  const isSubstrate = (item.cat || "").includes("Substrate Protocol");
  const [tab, setTab] = useState(isSubstrate ? "overview" : "protocol");
  const tabs = isSubstrate
    ? [{ id: "overview", label: "Overview" },{ id: "protocol", label: "Protocol" },{ id: "evidence", label: "Evidence" }]
    : [{ id: "protocol", label: "Protocol" },{ id: "clinical", label: "Clinical" }];
  return (
    <div style={{ maxWidth: 820, margin: "0 auto" }}>
      <DetailHeader item={item} onBack={onBack} />
      <TabBar tabs={tabs} active={tab} setActive={setTab} color={col.a} />
      <div style={{ background: "#080d19", borderRadius: 11, padding: "16px 20px", border: "1px solid #1e293b", minHeight: 280 }}>
        {tab === "overview" && <div>
          <S color={col.a}>Mechanism & Key Principles</S>
          <SmartText text={item.notes} color={col.a} />
        </div>}
        {tab === "protocol" && <div>
          <S color={col.a} refs={item.refs}>Step-by-Step</S>
          <OL items={item.steps} c={col.a} />
        </div>}
        {tab === "evidence" && <div>
          {item.special && <><S color={col.a}>Evidence & IFU Divergences</S><SmartText text={item.special} color={col.a} /></>}
        </div>}
        {tab === "clinical" && <div>
          {item.special && <><S color="#c084fc">Clinical Pearls / Evidence</S><SmartText text={item.special} color="#c084fc" /></>}
          <ReadMore color={col.a}>{item.notes}</ReadMore>
        </div>}
      </div>

      <div style={{ marginTop: 12 }}>
        <PubMedSearch defaultQuery={item.name.replace(/[—–()\[\]▸]/g, " ").trim().split(" ").slice(0, 4).join(" ")} accentColor={col.a} />
      </div>
    </div>
  );
}

// ── Post & Core Detail ──
function PostCoreDetail({ item, onBack }) {
  const col = gc(item.cat);
  const [tab, setTab] = useState("protocol");
  const tabs = [{ id: "protocol", label: "Protocol" },{ id: "clinical", label: "Clinical" }];
  return (
    <div style={{ maxWidth: 820, margin: "0 auto" }}>
      <DetailHeader item={item} onBack={onBack} />
      <TabBar tabs={tabs} active={tab} setActive={setTab} color={col.a} />
      <div style={{ background: "#080d19", borderRadius: 11, padding: "16px 20px", border: "1px solid #1e293b", minHeight: 280 }}>
        {tab === "protocol" && <div>
          <S color={col.a} refs={item.refs}>Steps</S>
          <OL items={item.steps} c={col.a} />
        </div>}
        {tab === "clinical" && <div>
          {item.special && <><S color="#c084fc">Clinical Pearls / Evidence</S><SmartText text={item.special} color="#c084fc" /></>}
        </div>}
      </div>

      <div style={{ marginTop: 12 }}>
        <PubMedSearch defaultQuery={item.name.replace(/[—–()\[\]▸]/g, " ").trim().split(" ").slice(0, 4).join(" ")} accentColor={col.a} />
      </div>
    </div>
  );
}

// ── Finishing Detail (Polishing + Stain/Glaze) ──
function FinishDetail({ item, onBack }) {
  const col = gc(item.cat);
  const [tab, setTab] = useState("protocol");
  const isPolish = item.cat.includes("Polishing");
  const tabs = isPolish
    ? [{ id: "protocol", label: "Technique" },{ id: "substrates", label: "Substrates" },{ id: "clinical", label: "Clinical" }]
    : [{ id: "protocol", label: "Application" },{ id: "substrates", label: "Substrates" },{ id: "clinical", label: "Clinical" }];
  return (
    <div style={{ maxWidth: 820, margin: "0 auto" }}>
      <DetailHeader item={item} onBack={onBack} extra={
        item.rpm ? <span style={{ background: "#1e293b", color: "#f59e0b", fontSize: 9, fontWeight: 700, padding: "2px 8px", borderRadius: 16 }}>{item.rpm}</span> : null
      } />
      <TabBar tabs={tabs} active={tab} setActive={setTab} color={col.a} />
      <div style={{ background: "#080d19", borderRadius: 11, padding: "16px 20px", border: "1px solid #1e293b", minHeight: 280 }}>
        {tab === "protocol" && <div>
          <S color={col.a} refs={item.refs}>Step-by-Step</S>
          <OL items={item.steps} c={col.a} />
          {isPolish && <>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 12 }}>
              <Card border="#f59e0b"><div style={{ color: "#f59e0b", fontSize: 9, fontWeight: 800 }}>RPM</div><div style={{ color: "#e2e8f0", fontSize: 11 }}>{item.rpm}</div></Card>
              <Card border="#22d3ee"><div style={{ color: "#22d3ee", fontSize: 9, fontWeight: 800 }}>PRESSURE</div><div style={{ color: "#e2e8f0", fontSize: 11 }}>{item.pressure}</div></Card>
              <Card border="#60a5fa"><div style={{ color: "#60a5fa", fontSize: 9, fontWeight: 800 }}>WET/DRY</div><div style={{ color: "#e2e8f0", fontSize: 11 }}>{item.wet}</div></Card>
            </div>
          </>}
          {!isPolish && item.cureMethod && <Card border={col.a}>
            <div style={{ color: col.a, fontSize: 9, fontWeight: 800, marginBottom: 3 }}>CURE METHOD</div>
            <div style={{ color: "#e2e8f0", fontSize: 11 }}>{item.cureMethod}</div>
          </Card>}
        </div>}
        {tab === "substrates" && <div>
          <S color={col.a}>Substrate Compatibility</S>
          {item.substrates && <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginTop: 8 }}>
            {Object.entries(item.substrates).map(([k, v]) => {
              const labels = { composite: "Composite", glassCeramic: "Glass-Ceramic", zirconia: "Zirconia", pmma: "PMMA/Acrylic", metal: "Metal/Gold", printedResin: "Printed Resin" };
              return <div key={k} style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 8px", background: v ? "#052e1f" : "#1c1917", borderRadius: 6, border: `1px solid ${v ? "#10b981" : "#292524"}33` }}>
                <span style={{ color: v ? "#10b981" : "#78716c", fontSize: 14 }}>{v ? "✓" : "✗"}</span>
                <span style={{ color: v ? "#a7f3d0" : "#78716c", fontSize: 11.5, fontWeight: 600 }}>{labels[k] || k}</span>
              </div>;
            })}
          </div>}
        </div>}
        {tab === "clinical" && <div>
          {item.special && <><S color="#c084fc">Clinical Pearls</S><SmartText text={item.special} color="#c084fc" /></>}
        </div>}
      </div>

      <div style={{ marginTop: 12 }}>
        <PubMedSearch defaultQuery={item.name.replace(/[—–()\[\]▸]/g, " ").trim().split(" ").slice(0, 4).join(" ")} accentColor={col.a} />
      </div>
    </div>
  );
}

// ── Provisional Detail ──
function ProvDetail({ item, onBack }) {
  const col = gc(item.cat);
  const [tab, setTab] = useState("protocol");
  const isTempCement = item.cat.includes("Temporary Cement");
  const tabs = isTempCement
    ? [{ id: "protocol", label: "Protocol" },{ id: "clinical", label: "Clinical" }]
    : [{ id: "protocol", label: "Fabrication" },{ id: "comparison", label: "Pros / Cons" },{ id: "clinical", label: "Clinical" }];
  return (
    <div style={{ maxWidth: 820, margin: "0 auto" }}>
      <DetailHeader item={item} onBack={onBack} extra={
        item.duration ? <span style={{ background: "#1e293b", color: "#86efac", fontSize: 9, fontWeight: 700, padding: "2px 8px", borderRadius: 16 }}>Max: {item.duration}</span> : null
      } />
      <TabBar tabs={tabs} active={tab} setActive={setTab} color={col.a} />
      <div style={{ background: "#080d19", borderRadius: 11, padding: "16px 20px", border: "1px solid #1e293b", minHeight: 280 }}>
        {tab === "protocol" && <div>
          <S color={col.a} refs={item.refs}>{isTempCement ? "Application" : "Fabrication Steps"}</S>
          <OL items={item.steps} c={col.a} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 12 }}>
            <Card border="#22d3ee"><div style={{ color: "#22d3ee", fontSize: 9, fontWeight: 800 }}>WORKING TIME</div><div style={{ color: "#e2e8f0", fontSize: 12, fontWeight: 700 }}>{item.workTime}</div></Card>
            <Card border="#f59e0b"><div style={{ color: "#f59e0b", fontSize: 9, fontWeight: 800 }}>SET TIME</div><div style={{ color: "#e2e8f0", fontSize: 12, fontWeight: 700 }}>{item.setTime}</div></Card>
          </div>
          {item.implantNote && <div style={{ background: "#0f172a", borderRadius: 6, padding: "6px 10px", marginTop: 8, border: "1px solid #1e293b" }}>
            <span style={{ color: "#60a5fa", fontSize: 10, fontWeight: 600 }}>{item.implantNote}</span>
          </div>}
        </div>}
        {tab === "comparison" && <div>
          {item.advantages && <><S color="#10b981">Advantages</S><p style={{ color: "#a7f3d0", fontSize: 11.5, lineHeight: 1.6, margin: "0 0 10px" }}>{item.advantages}</p></>}
          {item.disadvantages && <><S color="#ef4444">Disadvantages</S><p style={{ color: "#fca5a5", fontSize: 11.5, lineHeight: 1.6, margin: "0 0 10px" }}>{item.disadvantages}</p></>}
          {item.duration && <><S color="#fbbf24">Recommended Duration</S><p style={{ color: "#fde68a", fontSize: 11.5, lineHeight: 1.6, margin: 0 }}>{item.duration}</p></>}
        </div>}
        {tab === "clinical" && <div>
          {item.special && <><S color="#c084fc">Clinical Pearls</S><SmartText text={item.special} color="#c084fc" /></>}
          {isTempCement && item.advantages && <><S color="#10b981">Advantages</S><p style={{ color: "#a7f3d0", fontSize: 11.5, lineHeight: 1.6, margin: "0 0 10px" }}>{item.advantages}</p></>}
          {isTempCement && item.disadvantages && <><S color="#ef4444">Disadvantages</S><p style={{ color: "#fca5a5", fontSize: 11.5, lineHeight: 1.6, margin: 0 }}>{item.disadvantages}</p></>}
        </div>}
      </div>

      <div style={{ marginTop: 12 }}>
        <PubMedSearch defaultQuery={item.name.replace(/[—–()\[\]▸]/g, " ").trim().split(" ").slice(0, 4).join(" ")} accentColor={col.a} />
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════
// UNIVERSAL TABBED DETAIL VIEW — all specialties

// Smart text renderer with syntax highlighting
function SmartText({ text, color }) {
  if (!text) return null;
  return (
    <div style={{ color: "#cbd5e1", fontSize: 12, lineHeight: 1.7, fontFamily: "'Outfit',system-ui" }}>
      {text.split("\n").map((line, i) => {
        const t = line.trim();
        if (!t) return <div key={i} style={{ height: 8 }} />;
        if (t.startsWith("⚠") || t.startsWith("❌")) return <div key={i} style={{ color: "#fca5a5", fontWeight: 600, marginTop: 6, padding: "4px 8px", background: "rgba(239,68,68,0.08)", borderRadius: 4, borderLeft: "3px solid #ef4444" }}>{t}</div>;
        if (t.startsWith("✅")) return <div key={i} style={{ color: "#86efac", fontWeight: 600, marginTop: 4, padding: "4px 8px", background: "rgba(16,185,129,0.08)", borderRadius: 4, borderLeft: "3px solid #10b981" }}>{t}</div>;
        if (t.match(/^Per /i)) return <div key={i} style={{ color: "#93c5fd", marginTop: 4, paddingLeft: 8, borderLeft: "2px solid #3b82f6", fontSize: 11.5 }}>{t}</div>;
        if (t.match(/^[A-Z][A-Z\s/&]{3,}[A-Z:]/) || t.match(/^\d+\)\s/) || t.match(/^\d+(ST|ND|RD|TH) LINE/i)) return <div key={i} style={{ color: "#fbbf24", fontWeight: 700, marginTop: 10, fontSize: 12.5, borderBottom: `1px solid ${color || "#fbbf24"}20`, paddingBottom: 3 }}>{t}</div>;
        if (t.startsWith("•") || t.startsWith("-")) return <div key={i} style={{ color: "#94a3b8", paddingLeft: 14, marginTop: 2, position: "relative" }}><span style={{ position: "absolute", left: 2, color: color || "#94a3b8" }}>•</span>{t.replace(/^[•\-]\s*/, "")}</div>;
        return <div key={i} style={{ marginTop: 3 }}>{t}</div>;
      })}
    </div>
  );
}

// Tab content panel
function TabPanel({ title, content, color }) {
  if (!content) return null;
  return (
    <div style={{ background: "rgba(255,255,255,0.02)", borderRadius: 10, padding: "16px 20px", border: "1px solid #1e293b" }}>
      {title && <div style={{ color: color || "#475569", fontSize: 9, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 8 }}>{title}</div>}
      <SmartText text={content} color={color} />
    </div>
  );
}

// Tab configuration by specialty — defines which fields map to which tabs
const TAB_CONFIG = {
  // Sedation & Anesthesia
  sedation: [
    { id: "pharmacology", label: "Pharmacology", field: "pharmacology" },
    { id: "dosing", label: "Dosing & Protocol", field: "dosing" },
    { id: "evidence", label: "Evidence & Safety", field: "evidence" },
  ],
  // OFP / TMD
  ofp: [
    { id: "description", label: "Description", field: "description_detail" },
    { id: "protocol", label: "Protocol & Dosing", field: "protocol" },
    { id: "evidence", label: "Evidence", field: "evidence" },
  ],
  // Sleep
  sleep: [
    { id: "design", label: "Design & Mechanism", field: "design" },
    { id: "protocol", label: "Protocol", field: "protocol" },
    { id: "evidence", label: "Evidence & Outcomes", field: "evidence" },
  ],
  // Periodontics — uses ORIGINAL fields: composition→material, steps→technique, notes+special→evidence
  perio: [
    { id: "material", label: "Material & Composition", field: "composition" },
    { id: "technique", label: "Technique", field: "steps" },
    { id: "evidence", label: "Evidence & Outcomes", field: "special" },
  ],
  // Implantology
  implants: [
    { id: "design", label: "Design & Specs", field: "design" },
    { id: "protocol", label: "Protocol", field: "protocol" },
    { id: "evidence", label: "Evidence & Outcomes", field: "evidence" },
    { id: "guided", label: "Guided Surgery", field: "guided_surgery" },
  ],
  // Preventive
  preventive: [
    { id: "product", label: "Product & Composition", field: "product_detail" },
    { id: "protocol", label: "Protocol & Application", field: "protocol" },
    { id: "evidence", label: "Evidence", field: "evidence" },
  ],
  // Lasers
  lasers: [
    { id: "physics", label: "Physics & Wavelength", field: "physics" },
    { id: "settings", label: "Settings & Indications", field: "settings" },
    { id: "evidence", label: "Evidence & Outcomes", field: "evidence" },
  ],
  // 3D Printing
  printing: [
    { id: "composition", label: "Composition & Specs", field: "composition_detail" },
    { id: "technique", label: "Technique & Post-Processing", field: "technique" },
    { id: "evidence", label: "Evidence & FDA Status", field: "evidence" },
  ],
  // Orthodontics
  ortho: [
    { id: "design", label: "Design & Material", field: "design" },
    { id: "technique", label: "Technique & Protocol", field: "technique" },
    { id: "evidence", label: "Evidence & Outcomes", field: "evidence" },
  ],
  // Pediatric
  pediatric: [
    { id: "material", label: "Material & Selection", field: "material" },
    { id: "technique", label: "Technique", field: "technique" },
    { id: "evidence", label: "Evidence & Guidelines", field: "evidence" },
  ],
  // Oral Medicine
  oralmed: [
    { id: "diagnosis", label: "Diagnosis & Features", field: "diagnosis" },
    { id: "management", label: "Management & Protocol", field: "management" },
    { id: "evidence", label: "Evidence & Guidelines", field: "evidence" },
  ],
  // Dental Trauma — 2 tabs only
  trauma: [
    { id: "protocol", label: "Immediate Protocol", field: "protocol" },
    { id: "followup", label: "Follow-Up & Outcomes", field: "followup" },
  ],
  // Endodontics (for entries routed through TabbedDetail)
  endo: [
    { id: "design", label: "Design & Composition", field: "design" },
    { id: "protocol", label: "Protocol & Technique", field: "protocol" },
    { id: "evidence", label: "Evidence & Outcomes", field: "evidence" },
  ],
  // Treatment Planning
  "tx-planning": [
    { id: "framework", label: "Framework & Classification", field: "framework" },
    { id: "application", label: "Clinical Application", field: "application" },
    { id: "evidence", label: "Evidence & Comparison", field: "evidence" },
  ],
  // Oral Surgery
  "oral-surgery": [
    { id: "framework", label: "Description & Indications", field: "framework" },
    { id: "application", label: "Technique & Protocol", field: "application" },
    { id: "evidence", label: "Evidence & Outcomes", field: "evidence" },
  ],
  // Pharmacology
  pharmacology: [
    { id: "framework", label: "Drug & Mechanism", field: "framework" },
    { id: "application", label: "Dental Protocol", field: "application" },
    { id: "evidence", label: "Evidence & Guidelines", field: "evidence" },
  ],
  // Photography — single view, no tabs
  photo: null,
};

function TabbedDetail({ item, onBack, color, citMap, specialtyId }) {
  const col = { a: color || "#94a3b8", bg: "#0f172a", t: `${color || "#94a3b8"}15` };
  const pubmedQuery = (item.name || "").replace(/[—–()\[\]]/g, " ").replace(/\s+/g, " ").trim().split(" ").slice(0, 5).join(" ");

  // Determine available tabs
  const tabConfig = TAB_CONFIG[specialtyId];
  const hasTabs = tabConfig && tabConfig.some(t => item[t.field]);
  const availTabs = hasTabs ? tabConfig.filter(t => item[t.field]) : null;
  const [activeTab, setActiveTab] = useState(availTabs ? availTabs[0]?.id : null);

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "20px 16px" }}>
      <link href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,600;6..72,700&family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <button onClick={onBack} style={{ background: "none", border: "none", color: col.a, cursor: "pointer", fontFamily: "'Outfit'", fontSize: 12, fontWeight: 700, padding: "8px 0", marginBottom: 8 }}>← Back to list</button>

      {/* ── Header ── */}
      <div style={{ background: `linear-gradient(135deg, ${col.bg}, #080d19)`, borderRadius: 12, padding: "18px 22px", marginBottom: 12, border: `1px solid ${col.a}22` }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <div>
            {item.mfr && <div style={{ color: col.a, fontSize: 9, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", marginBottom: 2 }}>{item.mfr}</div>}
            <h1 style={{ fontFamily: "'Newsreader',Georgia,serif", fontSize: 22, color: "#f1f5f9", margin: "0 0 5px", fontWeight: 700 }}>{item.name}</h1>
            <span style={{ background: col.t, color: col.a, fontSize: 9, fontWeight: 700, padding: "2px 8px", borderRadius: 16 }}>{item.cat}</span>
          </div>
          {item.strength && <div style={{ textAlign: "right" }}>
            <div style={{ color: "#475569", fontSize: 9, textTransform: "uppercase", letterSpacing: 1 }}>Strength</div>
            <div style={{ color: "#f1f5f9", fontSize: 15, fontWeight: 900, fontFamily: "'Outfit'" }}>{item.strength}</div>
          </div>}
        </div>
        {item.composition && <p style={{ color: "#94a3b8", fontSize: 11.5, marginTop: 8, lineHeight: 1.5, borderTop: "1px solid #1e293b", paddingTop: 8 }}>{item.composition}</p>}
        {item.indications && <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginTop: 8 }}>
          {item.indications.map(ind => <span key={ind} style={{ background: "rgba(255,255,255,0.06)", color: "#94a3b8", fontSize: 9, padding: "2px 7px", borderRadius: 10 }}>{ind}</span>)}
        </div>}
      </div>

      {/* ── Tabs (if structured fields exist) ── */}
      {availTabs && availTabs.length > 1 && (
        <div style={{ display: "flex", gap: 3, marginBottom: 12, flexWrap: "wrap" }}>
          {availTabs.map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
              background: activeTab === t.id ? col.a : "rgba(255,255,255,0.05)",
              color: activeTab === t.id ? "#080d19" : "#64748b",
              border: "none", borderRadius: 7, padding: "6px 14px",
              fontFamily: "'Outfit'", fontSize: 11.5, fontWeight: 700, cursor: "pointer",
            }}>{t.label}</button>
          ))}
        </div>
      )}

      {/* ── Tab Content ── */}
      {availTabs ? (() => {
        const activeField = availTabs.find(t => t.id === activeTab)?.field;
        const rawContent = item[activeField];
        const textContent = Array.isArray(rawContent) ? rawContent.join("\n• ") : rawContent;
        return <TabPanel content={textContent} color={col.a} />;
      })() : (
        /* Fallback: render notes as single view */
        item.notes && <TabPanel title="Clinical Notes" content={item.notes} color={col.a} />
      )}

      {/* ── References ── */}
      {item.refs?.length > 0 && citMap && (
        <div style={{ marginTop: 12, marginBottom: 12, padding: "12px 14px", background: "#0c1222", borderRadius: 8, border: "1px solid #1e293b" }}>
          <div style={{ color: "#475569", fontSize: 9, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 8 }}>References ({item.refs.filter(r => citMap[r]).length})</div>
          {item.refs.filter(r => citMap[r]).map((r, i) => {
            const c = citMap[r];
            const g = EG[c.grade];
            const url = c.pmid ? `https://pubmed.ncbi.nlm.nih.gov/${c.pmid}/` : null;
            return (
              <div key={r} style={{ marginBottom: 6, paddingBottom: 5, borderBottom: i < item.refs.length - 1 ? "1px solid #1e293b22" : "none", display: "flex", gap: 6, alignItems: "flex-start" }}>
                <span style={{ background: g?.bg, color: g?.color, fontSize: 7, fontWeight: 800, padding: "2px 5px", borderRadius: 2, flexShrink: 0, marginTop: 2 }}>{g?.label}</span>
                <div>
                  <div style={{ color: "#cbd5e1", fontSize: 10.5, fontWeight: 600, lineHeight: 1.3 }}>{c.title}</div>
                  <div style={{ color: "#475569", fontSize: 9.5 }}>{c.authors} · <em>{c.journal}</em> {c.year}</div>
                  {url && <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: "#3b82f6", fontSize: 8.5, textDecoration: "none", fontWeight: 600 }}>PMID:{c.pmid} ↗</a>}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── PubMed Search ── */}
      <div style={{ marginTop: 4 }}>
        <PubMedSearch defaultQuery={pubmedQuery} accentColor={col.a} />
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════
// PERIO SUBCATEGORY COLORS
// ═══════════════════════════════════════════════
const PERIO_SUBCATEGORY_COLORS = {
  "Membranes": { a: "#38bdf8", b: "#0c2d3e" },
  "Bone Grafts": { a: "#a78bfa", b: "#1a0f2e" },
  "Biologics & Growth Factors": { a: "#34d399", b: "#0a2e1a" },
  "Sutures": { a: "#fb923c", b: "#2e1a0a" },
  "Hemostatic Agents": { a: "#f87171", b: "#2e0a0a" },
  "Surgical Instruments & Aids": { a: "#94a3b8", b: "#1a1a2e" },
  "Soft Tissue Substitutes": { a: "#c084fc", b: "#1a0f2e" },
  "Post-Operative Products": { a: "#2dd4bf", b: "#0a2e2a" },
};

// ═══════════════════════════════════════════════
// RESTORATIVE SUBCATEGORY COLORS
// ═══════════════════════════════════════════════
const RESTORATIVE_SUBCATEGORY_COLORS = {
  "Hybrid Ceramic/Composite Blocks": { a: "#22d3ee", b: "#0c2d3e" },
  "Glass-Ceramics": { a: "#fb7185", b: "#2d0f1e" },
  "Zirconia": { a: "#60a5fa", b: "#0a1a2e" },
  "Cements": { a: "#84cc16", b: "#1a2210" },
  "Composites": { a: "#e879f9", b: "#1a1022" },
  "Post & Core": { a: "#d4a574", b: "#1a150e" },
  "Bonding Agents": { a: "#2dd4bf", b: "#0a1a1a" },
  "Surface Treatments": { a: "#5eead4", b: "#0e1a1e" },
  "Substrate Protocols": { a: "#a78bfa", b: "#1a1520" },
  "Polishing Systems": { a: "#f59e0b", b: "#1a150e" },
  "Stain / Glaze Systems": { a: "#c4b5fd", b: "#1e1028" },
};

// ═══════════════════════════════════════════════
// SPECIALTY DATA REGISTRY — maps dataKey → products, groupFn, groups, citations
// ═══════════════════════════════════════════════
const SPECIALTY_REGISTRY = {
  implants:   { products: ALL_IMPLANT_PRODUCTS, groupFn: implantGetGroup, groups: IMPLANT_GROUPS, cit: IMPLANT_CIT },
  perio:      { products: ALL_PERIO, groupFn: perioGetGroup, groups: PERIO_GROUPS, cit: PERIO_CIT },
  preventive: { products: ALL_PREVENTIVE_PRODUCTS, groupFn: prevGetGroup, groups: PREV_GROUPS, cit: PREV_CIT },
  sedation:   { products: ALL_SEDATION_PRODUCTS, groupFn: sedGetGroup, groups: SED_GROUPS, cit: SED_CIT },
  ofp:        { products: ALL_OFP_PRODUCTS, groupFn: ofpGetGroup, groups: OFP_GROUPS, cit: OFP_CIT },
  sleep:      { products: ALL_SLEEP_PRODUCTS, groupFn: sleepGetGroup, groups: SLEEP_GROUPS, cit: SLEEP_CIT },
  lasers:     { products: ALL_LASER_PRODUCTS, groupFn: laserGetGroup, groups: LASER_GROUPS, cit: LASER_CIT },
  printing:   { products: ALL_PRINTING_PRODUCTS, groupFn: printGetGroup, groups: PRINT_GROUPS, cit: PRINT_CIT },
  ortho:      { products: ALL_ORTHO_PRODUCTS, groupFn: orthoGetGroup, groups: ORTHO_GROUPS, cit: ORTHO_CIT },
  pediatric:  { products: ALL_PEDS_PRODUCTS, groupFn: pedsGetGroup, groups: PEDS_GROUPS, cit: PEDS_CIT },
  trauma:     { products: ALL_TRAUMA_PRODUCTS, groupFn: traumaGetGroup, groups: TRAUMA_GROUPS, cit: TRAUMA_CIT },
  photo:      { products: ALL_PHOTO_PRODUCTS, groupFn: photoGetGroup, groups: PHOTO_GROUPS, cit: PHOTO_CIT },
  oralmed:    { products: ALL_ORALMED_PRODUCTS, groupFn: oralmedGetGroup, groups: ORALMED_GROUPS, cit: ORALMED_CIT },
  "tx-planning": { products: ALL_TP_PRODUCTS, groupFn: tpGetGroup, groups: TP_GROUPS, cit: TP_CIT },
  "oral-surgery": { products: ALL_ORALSURG_PRODUCTS, groupFn: oralSurgGetGroup, groups: ORALSURG_GROUPS, cit: ORALSURG_CIT },
  pharmacology: { products: ALL_PHARM_PRODUCTS, groupFn: pharmGetGroup, groups: PHARM_GROUPS, cit: PHARM_CIT },
};

// ═══════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════

export default function ProductBrowser({ specialty, onGoHome }) {
  const [sel, setSel] = useState(null);
  const [selType, setSelType] = useState(null);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  // Determine if this is a "new" specialty (notes-based) or legacy (restprosth/implants)
  const isNewSpecialty = !!SPECIALTY_REGISTRY[specialty?.id];
  const reg = SPECIALTY_REGISTRY[specialty?.id];

  // All products, filtered to this specialty's relevant groups
  const allItems = useMemo(() => {
    if (isNewSpecialty) {
      return reg.products.map(p => ({ ...p, _type: "notes" }));
    }
    // Legacy: restorative/prostho/implants
    const all = [
      ...MATERIALS.map(m => ({ ...m, _type: "material" })),
      ...CEMENTS.map(c => ({ ...c, _type: "cement" })),
      ...COMPOSITES.map(c => ({ ...c, _type: "composite" })),
      ...POST_CORE.map(p => ({ ...p, _type: "postcore" })),
      ...BONDING_AGENTS.map(b => ({ ...b, _type: "bonding" })),
      ...SURFACE_TREATMENTS.map(s => ({ ...s, _type: "surface" })),
      ...POLISHING.map(p => ({ ...p, _type: "finishing" })),
      ...STAIN_GLAZE.map(s => ({ ...s, _type: "finishing" })),
      ...PROVISIONALS.map(p => ({ ...p, _type: "provisional" })),
      ...PROSTH_DESIGN.map(p => ({ ...p, _type: "prosth_design" })),
      ...ALL_IMPLANT_PRODUCTS.map(p => ({ ...p, _type: "implant" })),
    ];
    const specGroups = specialty?.filterGroups || GROUPS;
    const groupFn = specialty?.id === "implants" ? implantGetGroup : getGroup;
    return all.filter(x => specGroups.includes(groupFn(x.cat)));
  }, [specialty, isNewSpecialty, reg]);

  // Group function for this specialty
  const groupFn = useMemo(() => {
    if (isNewSpecialty) return reg.groupFn;
    return specialty?.id === "implants" ? implantGetGroup : getGroup;
  }, [specialty, isNewSpecialty, reg]);

  // Available groups within this specialty (for filter tabs)
  const availableGroups = useMemo(() => {
    const groupList = isNewSpecialty ? reg.groups : (specialty?.id === "implants" ? IMPLANT_GROUPS : GROUPS);
    const gs = new Set();
    allItems.forEach(x => gs.add(groupFn(x.cat)));
    return groupList.filter(g => gs.has(g));
  }, [allItems, groupFn, specialty, isNewSpecialty, reg]);

  const filtered = useMemo(() => {
    let items = allItems;
    if (filter !== "All") items = items.filter(x => groupFn(x.cat) === filter);
    if (search.trim()) {
      const s = search.toLowerCase();
      items = items.filter(x =>
        x.name.toLowerCase().includes(s) ||
        (x.mfr || "").toLowerCase().includes(s) ||
        x.cat.toLowerCase().includes(s) ||
        (x.composition || "").toLowerCase().includes(s) ||
        (x.notes || "").toLowerCase().includes(s) ||
        (x.cureType || "").toLowerCase().includes(s) ||
        (x.gen || "").toLowerCase().includes(s)
      );
    }
    return items;
  }, [filter, search, allItems, groupFn]);

  const groups = useMemo(() => {
    const g = {};
    filtered.forEach(m => { const grp = groupFn(m.cat); if (!g[grp]) g[grp] = []; g[grp].push(m); });
    return g;
  }, [filtered, groupFn]);

  const goBack = () => { setSel(null); setSelType(null); };

  // ── Detail view routing ──
  // Perio subcategory color override
  const detailColor = specialty?.id === "perio" && sel
    ? (PERIO_SUBCATEGORY_COLORS[reg?.groupFn?.(sel.cat)]?.a || specialty?.color)
    : specialty?.color;
  // New specialties → TabbedDetail (handles both tabbed + notes-only fallback)
  if (sel && selType === "notes") return <TabbedDetail item={sel} onBack={goBack} color={detailColor} citMap={reg?.cit} specialtyId={specialty?.id} />;
  // Legacy prosth items that are notes-only (impressions, removables, etc.)
  if (sel && selType === "material" && !sel.surface) return <TabbedDetail item={sel} onBack={goBack} color={specialty?.color} citMap={null} specialtyId={specialty?.id} />;
  if (sel && selType === "prosth_design") return <TabbedDetail item={sel} onBack={goBack} color={specialty?.color} citMap={null} specialtyId={specialty?.id} />;
  if (sel && selType === "implant" && !sel.connection) return <TabbedDetail item={sel} onBack={goBack} color={specialty?.color} citMap={reg?.cit} specialtyId={specialty?.id} />;
  // Rich detail views for legacy materials
  if (sel && selType === "material") return <MatDetail mat={sel} onBack={goBack} />;
  if (sel && selType === "cement") return <CemDetail cem={sel} onBack={goBack} />;
  if (sel && selType === "composite") return <CompDetail comp={sel} onBack={goBack} />;
  if (sel && selType === "bonding") return <BondDetail bond={sel} onBack={goBack} />;
  if (sel && selType === "finishing") return <FinishDetail item={sel} onBack={goBack} />;
  if (sel && selType === "surface") return <SurfaceDetail item={sel} onBack={goBack} />;
  if (sel && selType === "postcore") return <PostCoreDetail item={sel} onBack={goBack} />;
  if (sel && selType === "provisional") return <ProvDetail item={sel} onBack={goBack} />;

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "20px 16px" }}>
      {/* Specialty header with back to home */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
        <button onClick={onGoHome} style={{ background: "none", border: "none", color: specialty?.color || "#64748b", cursor: "pointer", fontFamily: "'Outfit'", fontSize: 13, fontWeight: 700, padding: 0 }}>← Home</button>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
        <span style={{ fontSize: 32 }}>{specialty?.icon}</span>
        <h1 style={{ fontFamily: "'Newsreader',Georgia,serif", fontSize: 28, fontWeight: 700, color: "#f1f5f9", margin: 0 }}>{specialty?.name}</h1>
      </div>
      <p style={{ color: "#475569", fontSize: 11, margin: "0 0 16px", lineHeight: 1.4 }}>
        {allItems.length} products · {specialty?.subtitle} · Evidence over IFU
      </p>

      <div style={{ display: "flex", gap: 5, marginBottom: 12, flexWrap: "wrap" }}>
        {["All", ...availableGroups].map(g => (
          <button key={g} onClick={() => setFilter(g)} style={{
            background: filter === g ? "#e2e8f0" : "rgba(255,255,255,0.04)",
            color: filter === g ? "#060a14" : "#64748b",
            border: "none", borderRadius: 16, padding: "5px 12px",
            fontSize: 10.5, fontWeight: 700, cursor: "pointer",
          }}>{g}</button>
        ))}
      </div>

      <input type="text" placeholder={`Search ${specialty?.name?.toLowerCase() || "products"}...`} value={search} onChange={e => setSearch(e.target.value)} style={{
        width: "100%", boxSizing: "border-box", background: "#0f172a",
        border: "1px solid #1e293b", borderRadius: 8, padding: "8px 12px",
        color: "#e2e8f0", fontSize: 12, fontFamily: "'Outfit'", outline: "none", marginBottom: 16,
      }} />

      {availableGroups.filter(g => groups[g]).map(gn => (
          <div key={gn} style={{ marginBottom: 20 }}>
            <h2 style={{ fontFamily: "'Outfit'", fontSize: 10, fontWeight: 900, color: (specialty?.id === "perio" && PERIO_SUBCATEGORY_COLORS[gn]?.a) || RESTORATIVE_SUBCATEGORY_COLORS[gn]?.a || specialty?.color || "#94a3b8", letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 8, paddingLeft: 4 }}>{gn}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: 8 }}>
              {groups[gn].map(item => {
                const perioCol = specialty?.id === "perio" && PERIO_SUBCATEGORY_COLORS[gn];
                const c = item._type === "notes"
                  ? perioCol
                    ? { a: perioCol.a, bg: perioCol.b, t: `${perioCol.a}15` }
                    : { a: specialty?.color || "#94a3b8", bg: "#0f172a", t: `${specialty?.color || "#94a3b8"}15` }
                  : gc(item.cat);
                const isMat = item._type === "material";
                const isCem = item._type === "cement";
                const isComp = item._type === "composite";
                const isBond = item._type === "bonding";
                const isFin = item._type === "finishing";
                const isProv = item._type === "provisional";
                const hasConflict = isMat && item.surface?.primer?.conflict;

                let badge;
                if (item._type === "notes") badge = item.cat.split(" — ")[1] || item.cat.split(" — ")[0] || "Protocol";
                else if (isCem) badge = item.cureType;
                else if (isComp) badge = item.cat.includes("Bulk") ? "Bulk Fill" : item.cat.includes("Flow") || item.cat.includes("Fiber") ? "Flowable" : item.cat.includes("Core") ? "DC Core" : "Packable";
                else if (isBond) badge = item.gen?.split("(")[0]?.trim();
                else if (isFin) badge = item.cat.includes("Polishing") ? item.cat.replace("Polishing — ","") : item.cat.includes("Stain") ? item.cat.replace("Stain/Glaze — ","") : item.cat.split(" — ")[1] || "Finish";
                else if (isProv) badge = item.cat.includes("Temporary") ? "Temp Cement" : item.cat.replace("Provisional — ","");
                else if (isMat) {
                  const isHf = item.surface?.etch?.m?.includes("HF") && !item.surface?.etch?.m?.includes("No");
                  badge = isHf ? "HF Etch" : item.surface?.primer?.best?.includes("MDP") ? "MDP" : item.surface?.primer?.best?.includes("Alloy") ? "VBATDT" : "Sandblast";
                }

                return (
                  <div key={item.id} onClick={() => { setSel(item); setSelType(item._type); }} style={{
                    background: `linear-gradient(145deg, ${c.bg}, #060a14)`,
                    borderRadius: 8, padding: "12px 14px", cursor: "pointer",
                    border: `1px solid ${c.a}12`, transition: "all 0.15s", position: "relative",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = c.a + "44"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = c.a + "12"; e.currentTarget.style.transform = "none"; }}>
                    <div style={{ fontSize: 8, fontWeight: 800, color: c.a, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 2 }}>{item.mfr}</div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: "#f1f5f9", marginBottom: 4 }}>{item.name}</div>
                    <div style={{ display: "flex", gap: 3, flexWrap: "wrap", marginBottom: 4 }}>
                      <span style={{ background: c.t, color: c.a, fontSize: 8, padding: "2px 6px", borderRadius: 6, fontWeight: 700 }}>{badge}</span>
                      {item.strength && <span style={{ background: "rgba(255,255,255,0.04)", color: "#475569", fontSize: 8, padding: "2px 6px", borderRadius: 6 }}>{item.strength}</span>}
                      {hasConflict && <span style={{ background: "#7f1d1d", color: "#fca5a5", fontSize: 7, padding: "2px 5px", borderRadius: 6, fontWeight: 800 }}>IFU≠Ev</span>}
                      {isBond && item.antibacterial && <span style={{ background: "#064e3b", color: "#10b981", fontSize: 7, padding: "2px 5px", borderRadius: 6, fontWeight: 700 }}>MDPB</span>}
                    </div>
                    <div style={{ color: "#3d4555", fontSize: 9, lineHeight: 1.2 }}>
                      {item._type === "notes"
                        ? (item.notes || "").split("\n").filter(l => l.trim()).slice(0, 2).join(" ").substring(0, 100) + "…"
                        : <>{item.indications?.slice(0, 3).join(" · ")}{(item.indications?.length || 0) > 3 && ` +${item.indications.length - 3}`}</>
                      }
                    </div>
                    <div style={{ position: "absolute", top: 10, right: 10, color: c.a, fontSize: 12, opacity: 0.25 }}>→</div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div style={{ textAlign: "center", padding: "24px 0 10px", color: "#1e293b", fontSize: 9, letterSpacing: 1.5 }}>
          EVIDENCE-BASED · SCOPE DECISIONS LEFT TO PRACTITIONER · UPDATED 2026
        </div>
    </div>
  );
}
