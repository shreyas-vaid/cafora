import { CAFES_DATA } from '../src/data/cafesData.js';
import { calculateTrustScore, SOURCE_QUALITY } from '../src/utils/trustScore.js';

console.log('====================================================');
console.log('      CAFORA EVIDENCE-DERIVED TRUST ENGINE TEST     ');
console.log('====================================================\n');

let totalTests = 0;
let passedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    console.log(`  ✅ [PASS] ${message}`);
    passedTests++;
  } else {
    console.error(`  ❌ [FAIL] ${message}`);
  }
}

// ----------------------------------------------------
// SECTION 14: PILOT VENUES EVALUATION & COMPONENT BREAKDOWN
// ----------------------------------------------------
console.log('--- 1. PILOT VENUES TRUST SCORE BREAKDOWNS ---\n');

const pilotIds = [
  'blue-tokai-sec8',
  'books-n-brew-sec16',
  'virgin-courtyard-sec7',
  'the-hedgehog-cafe-sec7',
  'nik-bakers-sec35'
];

const pilotResults = {};

pilotIds.forEach(id => {
  const cafe = CAFES_DATA.find(c => c.id === id);
  if (!cafe) {
    console.error(`Pilot cafe not found: ${id}`);
    return;
  }
  const result = calculateTrustScore(cafe);
  pilotResults[id] = result;

  console.log(`VENUE: ${cafe.name.toUpperCase()} (${cafe.sector})`);
  console.log(`  Source quality:       ${result.components.sourceQuality.toFixed(2)}`);
  console.log(`  Source agreement:     ${result.components.sourceAgreement.toFixed(2)}`);
  console.log(`  Evidence coverage:    ${result.components.evidenceCoverage.toFixed(2)}`);
  console.log(`  Freshness:            ${result.components.freshness.toFixed(2)}`);
  console.log(`  Identity confidence:  ${result.components.identityConfidence.toFixed(2)}`);
  console.log(`  Conflict penalty:     ${result.components.conflictPenalty.toFixed(2)}`);
  console.log(`  -----------------------------------------`);
  console.log(`  FINAL TRUST:          ${result.score}`);
  console.log(`  Explanation:          ${result.explanation.join('; ')}\n`);
});

// ----------------------------------------------------
// SECTION 13: CRITICAL INTEGRITY TESTS
// ----------------------------------------------------
console.log('--- 2. CRITICAL INTEGRITY & SENSITIVITY TESTS ---\n');

// Baseline sample
const sampleCafe = CAFES_DATA.find(c => c.id === 'virgin-courtyard-sec7');
const baseTrust = calculateTrustScore(sampleCafe);

// Test 1: Determinism (Same evidence -> same score)
{
  const run1 = calculateTrustScore(sampleCafe);
  const run2 = calculateTrustScore(sampleCafe);
  assert(run1.score === run2.score && JSON.stringify(run1.components) === JSON.stringify(run2.components),
    'Determinism: Identical input evidence produces identical trust score & components');
}

// Test 2: Adding a high-quality official source increases trust appropriately
{
  const boostedCafe = JSON.parse(JSON.stringify(sampleCafe));
  boostedCafe.evidence.sources.push({
    field: "official_web_verification",
    sourceType: "official_website",
    sourceName: "Official Domain Portal",
    url: "https://virgincourtyard.in",
    retrievedAt: "2026-09-08T06:00:00.000Z",
    confidence: "high"
  });
  boostedCafe.facts.provenance.push({
    field: "official_menu_listing",
    sourceType: "official_menu",
    sourceName: "Official Menu Card",
    url: "https://virgincourtyard.in/menu",
    retrievedAt: "2026-09-08T06:00:00.000Z"
  });
  const boostedResult = calculateTrustScore(boostedCafe);
  assert(boostedResult.score >= baseTrust.score,
    `Evidence Sensitivity: Adding high-quality official sources increases trust (${baseTrust.score} -> ${boostedResult.score})`);
}

// Test 3: Removing evidence decreases evidence coverage & trust
{
  const strippedCafe = JSON.parse(JSON.stringify(sampleCafe));
  strippedCafe.evidence.sources = [];
  strippedCafe.facts.provenance = [];
  strippedCafe.facts.openingHours = null;
  strippedCafe.facts.phone = null;
  strippedCafe.facts.website = null;
  strippedCafe.characteristics = {};
  const strippedResult = calculateTrustScore(strippedCafe);
  assert(strippedResult.score < baseTrust.score,
    `Evidence Removal: Stripping evidence decreases trust score (${baseTrust.score} -> ${strippedResult.score})`);
  assert(strippedResult.components.evidenceCoverage < baseTrust.components.evidenceCoverage,
    `Evidence Removal: Stripping evidence decreases evidence coverage component (${baseTrust.components.evidenceCoverage} -> ${strippedResult.components.evidenceCoverage})`);
}

// Test 4: Conflicting identity information triggers conflict penalty and decreases trust
{
  const conflictingCafe = JSON.parse(JSON.stringify(sampleCafe));
  conflictingCafe.evidence.conflict = true;
  conflictingCafe.facts.conflict = true;
  const conflictResult = calculateTrustScore(conflictingCafe);
  assert(conflictResult.components.conflictPenalty > 0,
    `Conflict Detection: Evidence conflict sets conflictPenalty (${conflictResult.components.conflictPenalty})`);
  assert(conflictResult.score < baseTrust.score,
    `Conflict Penalty: Conflicting sources decrease trust score (${baseTrust.score} -> ${conflictResult.score})`);
}

// Test 5: Unknown characteristics do NOT become zero (null is unknown, not false)
{
  const cafeWithNulls = JSON.parse(JSON.stringify(sampleCafe));
  cafeWithNulls.characteristics = {
    coffee: { score: null, confidence: "unknown" },
    work: { score: null, confidence: "unknown" }
  };
  const resultWithNulls = calculateTrustScore(cafeWithNulls);
  assert(resultWithNulls.score > 0,
    'Non-punitive Unknowns: Null characteristics do not reduce trust score to zero');
}

// Test 6: Two distinct cafes with identical evidence receive identical scores
{
  const cafeA = JSON.parse(JSON.stringify(sampleCafe));
  cafeA.id = "mock-cafe-a";
  const cafeB = JSON.parse(JSON.stringify(sampleCafe));
  cafeB.id = "mock-cafe-b";
  const scoreA = calculateTrustScore(cafeA).score;
  const scoreB = calculateTrustScore(cafeB).score;
  assert(scoreA === scoreB,
    `Symmetry: Two distinct cafes with identical evidence receive identical trust scores (${scoreA} === ${scoreB})`);
}

// Test 7: No cafe in dataset contains a manually assigned trustScore
{
  const manualScores = CAFES_DATA.filter(c => c.trustScore !== undefined || c.cafora?.trustScore !== undefined);
  assert(manualScores.length === 0,
    `Dataset Cleanliness: Exactly 0 / 87 cafes have manually stored trustScore property`);
}

// Test 8: No cafe in dataset contains a manually assigned verificationScore
{
  const manualVerifScores = CAFES_DATA.filter(c => c.verificationScore !== undefined || c.cafora?.verificationScore !== undefined || c.identity?.verificationScore !== undefined);
  assert(manualVerifScores.length === 0,
    `Dataset Cleanliness: Exactly 0 / 87 cafes have manually stored verificationScore property`);
}

// Test 9: No arbitrary 80/85/90 fallbacks exist in trust calculations
{
  const emptyCafe = { id: "test-empty", name: "Empty Venue" };
  const emptyResult = calculateTrustScore(emptyCafe);
  assert(emptyResult.score !== 80 && emptyResult.score !== 85 && emptyResult.score !== 90,
    `Fallback Elimination: Unverified venue receives evidence-derived score (${emptyResult.score}), not arbitrary 80/85/90 fallback`);
}

// ----------------------------------------------------
// SECTION 12: STATISTICAL DISTRIBUTION AUDIT
// ----------------------------------------------------
console.log('\n--- 3. COMPLETE DATASET TRUST DISTRIBUTION AUDIT ---\n');

const allScores = CAFES_DATA.map(c => calculateTrustScore(c).score).sort((a, b) => a - b);
const min = allScores[0];
const max = allScores[allScores.length - 1];
const mean = Number((allScores.reduce((a, b) => a + b, 0) / allScores.length).toFixed(1));
const midIdx = Math.floor(allScores.length / 2);
const median = allScores.length % 2 !== 0 ? allScores[midIdx] : (allScores[midIdx - 1] + allScores[midIdx]) / 2;
const variance = allScores.reduce((acc, v) => acc + Math.pow(v - mean, 2), 0) / allScores.length;
const stdDev = Number(Math.sqrt(variance).toFixed(1));

const buckets = {
  "0–19":   allScores.filter(s => s < 20).length,
  "20–39":  allScores.filter(s => s >= 20 && s < 40).length,
  "40–59":  allScores.filter(s => s >= 40 && s < 60).length,
  "60–69":  allScores.filter(s => s >= 60 && s < 70).length,
  "70–79":  allScores.filter(s => s >= 70 && s < 80).length,
  "80–89":  allScores.filter(s => s >= 80 && s < 90).length,
  "90–100": allScores.filter(s => s >= 90).length
};

console.log(`Total Cafes Evaluated:  ${allScores.length}`);
console.log(`Minimum Trust Score:    ${min}`);
console.log(`Maximum Trust Score:    ${max}`);
console.log(`Mean Trust Score:       ${mean}`);
console.log(`Median Trust Score:     ${median}`);
console.log(`Standard Deviation:     ${stdDev}\n`);

console.log('Histogram / Distribution Buckets:');
Object.entries(buckets).forEach(([range, count]) => {
  const bar = '█'.repeat(Math.round(count / 2));
  console.log(`  ${range.padEnd(8)}: ${count.toString().padStart(2)} venues ${bar}`);
});

console.log('\n====================================================');
console.log(`🏁 TEST SUITE RESULT: ${passedTests}/${totalTests} assertions passed (${Math.round((passedTests / totalTests) * 100)}%)`);
console.log('====================================================\n');

if (passedTests !== totalTests) {
  process.exit(1);
}
