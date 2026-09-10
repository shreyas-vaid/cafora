const express = require("express");
const cors = require("cors");
const path = require("path");

// Dynamic import for ES modules
let CAFES_DATA = [];
const recommendationService = require("./recommendationService.js");
let auditReport = null;
let calculateTrustScore = null;

async function loadModules() {
  try {
    const cafesMod = await import("../src/data/cafesData.js");
    CAFES_DATA = cafesMod.CAFES_DATA;
    const auditMod = await import("../scripts/audit-report.mjs");
    auditReport = auditMod.generateAuditReport;
    const trustMod = await import("./trustScore.js");
    calculateTrustScore = trustMod.calculateTrustScore;
    console.log(`[CAFORA Server] Successfully loaded ${CAFES_DATA.length} verified cafes and trust engine.`);
  } catch (err) {
    console.error("[CAFORA Server] Failed to load data modules:", err);
  }
}

const app = express();

app.use(cors());
app.use(express.json());

/* 1. HEALTH CHECK */
app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    version: "1.0.0",
    cafesLoaded: CAFES_DATA.length,
    timestamp: new Date().toISOString()
  });
});

/* 2. CANONICAL 12 MOODS */
app.get("/api/moods", (req, res) => {
  if (!recommendationService) return res.status(503).json({ error: "Service initializing" });
  res.json({
    status: "success",
    count: recommendationService.CANONICAL_MOODS.length,
    moods: recommendationService.CANONICAL_MOODS
  });
});

/* 3. RECOMMENDATIONS (Multi-Mood Weighted Ranking + Fallbacks) */
app.get("/api/recommendations", (req, res) => {
  if (!recommendationService) return res.status(503).json({ error: "Service initializing" });
  const { moods, q, sector, sort } = req.query;

  const activeMoods = moods ? (Array.isArray(moods) ? moods : moods.split(",").map(s => s.trim())) : [];
  const results = recommendationService.getRecommendations(CAFES_DATA, {
    moods: activeMoods,
    query: q || "",
    sector: sector || "All Chandigarh",
    sort: sort || "recommended"
  });

  res.json({ status: "success", ...results });
});

/* 4. CAFES LIST & DETAIL */
app.get("/api/cafes", (req, res) => {
  const { id, sector, search, limit } = req.query;

  if (id) {
    const cafe = CAFES_DATA.find(c => c.id === id || c.identity?.id === id);
    if (!cafe) return res.status(404).json({ error: "Cafe not found", id });
    return res.json({ status: "success", cafe });
  }

  let results = [...CAFES_DATA];
  if (sector && sector !== "All Chandigarh") {
    results = results.filter(c => {
      const s = (c.sector || c.identity?.sector || "").toLowerCase();
      return s.includes(sector.toLowerCase());
    });
  }
  if (search && search.trim().length > 0) {
    const q = search.toLowerCase().trim();
    results = results.filter(c => {
      const name = (c.name || c.identity?.name || "").toLowerCase();
      const addr = (c.address || c.identity?.address || "").toLowerCase();
      return name.includes(q) || addr.includes(q);
    });
  }
  if (limit) {
    const num = parseInt(limit, 10);
    if (!isNaN(num)) results = results.slice(0, num);
  }

  res.json({ status: "success", count: results.length, total: CAFES_DATA.length, cafes: results });
});

app.get("/api/cafes/:id", (req, res) => {
  const cafe = CAFES_DATA.find(c => c.id === req.params.id || c.identity?.id === req.params.id);
  if (!cafe) return res.status(404).json({ error: "Cafe not found", id: req.params.id });
  res.json({ status: "success", cafe });
});

/* 5. SEARCH WITH INTENT MAPPING */
app.get("/api/search", (req, res) => {
  if (!recommendationService) return res.status(503).json({ error: "Service initializing" });
  const q = req.query.q || "";
  const detectedIntents = recommendationService.extractIntentFromQuery(q);
  const results = recommendationService.getRecommendations(CAFES_DATA, {
    moods: detectedIntents,
    query: q,
    sector: req.query.sector || "All Chandigarh"
  });

  res.json({ status: "success", query: q, detectedIntents, results });
});

/* 6. EVIDENCE & PROVENANCE */
app.get("/api/cafes/:id/evidence", (req, res) => {
  const cafe = CAFES_DATA.find(c => c.id === req.params.id || c.identity?.id === req.params.id);
  if (!cafe) return res.status(404).json({ error: "Cafe not found" });
  res.json({
    status: "success",
    cafeId: cafe.id,
    cafeName: cafe.name || cafe.identity?.name || null,
    evidence: cafe.evidence || null,
    characteristics: cafe.characteristics || null,
    lastVerified: cafe.cafora?.lastVerified || cafe.evidence?.lastVerified || null
  });
});

/* 7. TRUST SCORE DETAILS */
app.get("/api/cafes/:id/trust", (req, res) => {
  const cafe = CAFES_DATA.find(c => c.id === req.params.id || c.identity?.id === req.params.id);
  if (!cafe) return res.status(404).json({ error: "Cafe not found" });
  const sources = [
    ...(cafe.evidence?.sources || []),
    ...(cafe.facts?.provenance || [])
  ];
  const trustResult = calculateTrustScore ? calculateTrustScore(cafe) : { score: 0, components: {}, explanation: [] };
  res.json({
    status: "success",
    cafeId: cafe.id,
    cafeName: cafe.name,
    trustScore: trustResult.score,
    components: trustResult.components,
    explanation: trustResult.explanation,
    verificationStatus: cafe.cafora?.verificationStatus || cafe.verificationStatus || "unverified",
    sourcesCount: sources.length,
    sources: sources,
    lastVerified: cafe.cafora?.lastVerified || cafe.lastVerified || null
  });
});

/* 8. INTERNAL DATA QUALITY AUDIT REPORT (Section 30) */
app.get("/api/admin/audit-report", (req, res) => {
  if (!auditReport) return res.status(503).json({ error: "Audit report initializing" });
  const report = auditReport(CAFES_DATA);
  res.json({ status: "success", report });
});

/* START SERVER */
const PORT = process.env.PORT || 5000;
loadModules().then(() => {
  app.listen(PORT, () => {
    console.log(`[CAFORA Server] Running on http://localhost:${PORT}`);
  });
});