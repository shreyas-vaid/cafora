/**
 * CAFORA Deterministic Evidence-Derived Trust Engine
 * 
 * Strict architectural rule:
 * CAFORA must NEVER manually assign or hardcode a trust score for an individual cafe.
 * Trust is calculated deterministically from actual provenance and evidence records.
 * 
 * Formula:
 * Raw Trust = (
 *   0.25 * sourceQuality +
 *   0.20 * sourceAgreement +
 *   0.20 * evidenceCoverage +
 *   0.15 * freshness +
 *   0.20 * identityConfidence
 * ) - conflictPenalty
 * 
 * Clamped: Math.round(Math.max(0, Math.min(100, Raw Trust * 100)))
 */

export const SOURCE_QUALITY = {
  official_website: 1.00,
  official_menu: 1.00,
  google_places: 0.95,
  openstreetmap: 0.80,
  reputable_editorial: 0.80,
  independent_directory: 0.65,
  community_source: 0.60,
  internal_unverified: 0.15
};

export const FRESHNESS_HALF_LIFE_DAYS = 180;
const ANCHOR_DATE = new Date('2026-09-08T00:00:00.000Z').getTime();

export const TRUST_TIERS = {
  HIGH: { min: 80, max: 100, label: "Highly Trusted", tier: "HIGH_TRUST", badgeClass: "trust-badge-high" },
  GOOD: { min: 70, max: 79, label: "Verified Record", tier: "GOOD", badgeClass: "trust-badge-good" },
  MIXED: { min: 50, max: 69, label: "Catalog Listing", tier: "MIXED", badgeClass: "trust-badge-mixed" },
  LOW: { min: 0, max: 49, label: "Pending Verification", tier: "LOW", badgeClass: "trust-badge-low" }
};

/**
 * Evaluates whether a cafe has sufficient trustworthy evidence to calculate a meaningful Trust Score.
 * 
 * Rules (Sections 2 & 10):
 * - Must have at least one verified external source (e.g. openstreetmap, official_website, official_menu, reputable_editorial, independent_directory, google_places).
 * - Must not be purely internal_unverified catalog listings.
 * - If sufficient: returns true -> calculate real deterministic trust score (0-100).
 * - If insufficient: returns false -> trustScore = null (hide Trust badge, NO fake number).
 */
export function hasSufficientEvidence(cafe) {
  if (!cafe) return false;
  const sources = [
    ...(cafe.evidence?.sources || []),
    ...(cafe.facts?.provenance || [])
  ];
  if (!sources || sources.length === 0) return false;

  const hasTrustworthySource = sources.some((s) => {
    const type = s.sourceType || s.type;
    return type && type !== 'internal_unverified' && (SOURCE_QUALITY[type] ?? 0) >= 0.60;
  });

  return hasTrustworthySource;
}

/**
 * Validates whether an OSM identifier corresponds to a legitimate OpenStreetMap identity.
 * Valid:
 *   - Real numeric OSM element ID as number: e.g. 4214699191
 *   - Real numeric OSM element ID as string: e.g. "4214699191"
 *   - Genuine Overpass element ID with element type: e.g. "osm-node-4214699191", "osm-way-129774086", "node/4214699191"
 * Invalid:
 *   - Synthetic "osm-..." IDs without element type: e.g. "osm-123", "osm-4214699191"
 *   - Empty string, null, undefined, arbitrary text
 */
export function isValidOsmId(osmId) {
  if (typeof osmId === 'number') {
    return Number.isInteger(osmId) && osmId > 0;
  }
  if (typeof osmId === 'string') {
    const trimmed = osmId.trim();
    if (!trimmed) return false;
    // Pure numeric OSM element ID
    if (/^\d+$/.test(trimmed)) {
      return true;
    }
    // Genuine Overpass element ID with element type or standard OSM entity reference
    if (/^(?:osm-(?:node|way|relation)-|(?:node|way|relation)\/)\d+$/i.test(trimmed)) {
      return true;
    }
  }
  return false;
}

/**
 * Calculates deterministic trust score and component breakdown for a cafe
 * @param {Object} cafe - Cafe entity with facts, evidence, and characteristics
 * @returns {Object} { score, components, explanation, tier, label, badgeClass, confidence, hasSufficientEvidence }
 */
export function calculateTrustScore(cafe) {
  if (!cafe || !hasSufficientEvidence(cafe)) {
    return {
      score: null,
      hasSufficientEvidence: false,
      components: {
        sourceQuality: null,
        sourceAgreement: null,
        evidenceCoverage: null,
        freshness: null,
        identityConfidence: null,
        conflictPenalty: 0
      },
      explanation: ["Insufficient verifiable evidence to calculate a reliable trust score"],
      tier: null,
      label: null,
      badgeClass: null,
      confidence: "Unknown"
    };
  }

  const explanations = [];

  // 1. SOURCE QUALITY (25%)
  const sources = [
    ...(cafe.evidence?.sources || []),
    ...(cafe.facts?.provenance || [])
  ];

  let sourceQuality = 0;
  if (sources.length > 0) {
    const qualitySum = sources.reduce((acc, s) => {
      const type = s.sourceType || s.type || 'internal_unverified';
      const weight = SOURCE_QUALITY[type] ?? 0.15;
      return acc + weight;
    }, 0);
    sourceQuality = Number((qualitySum / sources.length).toFixed(3));
  }

  if (sourceQuality >= 0.85) {
    explanations.push("High-tier verification from primary official sources and municipal mappings");
  } else if (sourceQuality >= 0.60) {
    explanations.push("Corroborated by independent local directories and community listings");
  } else if (sourceQuality > 0) {
    explanations.push("Awaiting external corroboration; based on internal catalog records");
  } else {
    explanations.push("No verified source records available");
  }

  // 2. SOURCE AGREEMENT (20%)
  let sourceAgreement = 0.50;
  let conflictPenalty = 0;

  const distinctTypes = new Set(sources.map(s => s.sourceType || s.type).filter(Boolean));
  const hasOsm = sources.some(s => (s.sourceType || s.type) === 'openstreetmap');
  const hasOfficial = sources.some(s => (s.sourceType || s.type) === 'official_website' || (s.sourceType || s.type) === 'official_menu');

  if (cafe.evidence?.conflict || cafe.facts?.conflict) {
    conflictPenalty = 0.25;
    sourceAgreement = 0.20;
    explanations.push("Discrepancies identified across recorded sources");
  } else if (distinctTypes.size >= 2) {
    if (hasOsm && hasOfficial) {
      sourceAgreement = 1.00;
      explanations.push("Strong multi-source consensus across OpenStreetMap and official venue portal");
    } else if (hasOsm || hasOfficial) {
      sourceAgreement = 0.85;
      explanations.push("Consistent alignment between primary records and local catalog");
    } else {
      sourceAgreement = 0.75;
      explanations.push("Multiple secondary records agree on venue details");
    }
  } else if (distinctTypes.size === 1) {
    if (hasOfficial || hasOsm) {
      sourceAgreement = 0.70;
      explanations.push("Single authoritative source record with verified consistency");
    } else {
      sourceAgreement = 0.40;
      explanations.push("Single unconfirmed source; cross-platform validation pending");
    }
  } else {
    sourceAgreement = 0.10;
  }

  // 3. EVIDENCE COVERAGE (20%)
  const fieldsEvaluated = [
    Boolean(cafe.name || cafe.identity?.name),
    Boolean(cafe.address || cafe.identity?.address),
    Boolean((cafe.coordinates && cafe.coordinates.length === 2) || (cafe.identity?.latitude && cafe.identity?.longitude)),
    Boolean(cafe.facts?.openingHours || cafe.openingHours),
    Boolean(cafe.facts?.rating !== null && cafe.facts?.rating !== undefined),
    Boolean(cafe.facts?.reviewCount !== null && cafe.facts?.reviewCount !== undefined),
    Boolean(cafe.facts?.website || cafe.website),
    Boolean(cafe.facts?.phone || cafe.phone),
    Boolean(cafe.facts?.amenities && Object.values(cafe.facts.amenities).some(v => v !== null)),
    Boolean(cafe.characteristics && Object.values(cafe.characteristics).some(c => c && c.score !== null))
  ];

  const presentFieldsCount = fieldsEvaluated.filter(Boolean).length;
  const evidenceCoverage = Number((presentFieldsCount / fieldsEvaluated.length).toFixed(3));

  if (evidenceCoverage >= 0.70) {
    explanations.push("Comprehensive evidence coverage across hours, coordinates, contact, and amenities");
  } else if (evidenceCoverage >= 0.40) {
    explanations.push("Essential location and identity fields verified; secondary attributes remain unverified");
  } else {
    explanations.push("Limited factual coverage; several key operational attributes are unknown");
  }

  // 4. FRESHNESS (15%)
  let freshness = 0.40;
  const timestamps = sources
    .map(s => s.retrievedAt || s.lastVerified)
    .filter(Boolean)
    .map(t => new Date(t).getTime())
    .filter(t => !isNaN(t));

  if (timestamps.length > 0) {
    const mostRecentTime = Math.max(...timestamps);
    const ageDays = Math.max(0, (ANCHOR_DATE - mostRecentTime) / (1000 * 60 * 60 * 24));
    freshness = Number(Math.exp(-ageDays / FRESHNESS_HALF_LIFE_DAYS).toFixed(3));
    if (ageDays <= 30) {
      explanations.push("Evidence verified recently within the last 30 days");
    } else if (ageDays <= 90) {
      explanations.push("Evidence verified within the last quarter");
    } else {
      explanations.push("Evidence age is maturing; routine re-verification recommended");
    }
  } else {
    explanations.push("No explicit verification timestamp recorded");
  }

  // 5. IDENTITY CONFIDENCE (20%)
  let identityConfidence = 0.20;
  const osmId = cafe.identity?.osmId || cafe.osmId;
  const website = cafe.facts?.website || cafe.website;
  const name = cafe.name || cafe.identity?.name;
  const sector = cafe.sector || cafe.identity?.sector;

  if (isValidOsmId(osmId)) {
    identityConfidence += 0.45;
  }
  if (website && typeof website === 'string' && website.startsWith('http')) {
    identityConfidence += 0.25;
  }
  if (name && name.length >= 3 && sector) {
    identityConfidence += 0.10;
  }
  identityConfidence = Number(Math.min(1.0, identityConfidence).toFixed(3));

  if (identityConfidence >= 0.80) {
    explanations.push("Strong identity corroboration via unique municipal entity mapping");
  } else if (identityConfidence >= 0.50) {
    explanations.push("Standard venue identity confirmed by name and sector");
  } else {
    explanations.push("Identity matching requires municipal registry corroboration");
  }

  // 6. WEIGHTED FORMULA
  const rawTrust = (
    0.25 * sourceQuality +
    0.20 * sourceAgreement +
    0.20 * evidenceCoverage +
    0.15 * freshness +
    0.20 * identityConfidence
  ) - conflictPenalty;

  const score = Math.round(Math.max(0, Math.min(100, rawTrust * 100)));

  // UI Tier and labels
  let tierInfo = TRUST_TIERS.LOW;
  if (score >= TRUST_TIERS.HIGH.min) tierInfo = TRUST_TIERS.HIGH;
  else if (score >= TRUST_TIERS.GOOD.min) tierInfo = TRUST_TIERS.GOOD;
  else if (score >= TRUST_TIERS.MIXED.min) tierInfo = TRUST_TIERS.MIXED;

  let confidence = "Low";
  if (score >= 75) confidence = "High";
  else if (score >= 50) confidence = "Medium";

  return {
    score,
    components: {
      sourceQuality,
      sourceAgreement,
      evidenceCoverage,
      freshness,
      identityConfidence,
      conflictPenalty
    },
    explanation: explanations,
    tier: tierInfo.tier,
    label: tierInfo.label,
    badgeClass: tierInfo.badgeClass,
    confidence,
    hasSufficientEvidence: true
  };
}

const trustScoreEngine = {
  calculateTrustScore,
  hasSufficientEvidence,
  isValidOsmId,
  SOURCE_QUALITY,
  FRESHNESS_HALF_LIFE_DAYS,
  TRUST_TIERS
};

export default trustScoreEngine;
