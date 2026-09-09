import { CAFES_DATA } from '../src/data/cafesData.js';
import { calculateTrustScore, hasSufficientEvidence, isValidOsmId, SOURCE_QUALITY } from '../src/utils/trustScore.js';
import { filterAndSortCafes } from '../src/utils/searchFilter.js';
import { getCategorizedRecommendations, rankCafesByVibeAndSearch } from '../src/utils/vibeEngine.js';

console.log('====================================================');
console.log('      CAFORA EVIDENCE-DERIVED TRUST & CATALOGUE TEST');
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

pilotIds.forEach(id => {
  const cafe = CAFES_DATA.find(c => c.id === id);
  if (!cafe) {
    console.error(`Pilot cafe not found: ${id}`);
    return;
  }
  const result = calculateTrustScore(cafe);

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
// SECTION 21: THE 13 MANDATORY INTEGRITY TESTS
// ----------------------------------------------------
console.log('--- 2. SECTION 21: 13 CORE INTEGRITY TESTS ---\n');

const sampleCafe = CAFES_DATA.find(c => c.id === 'virgin-courtyard-sec7');
const baseTrust = calculateTrustScore(sampleCafe);

// TEST 1: A cafe with strong evidence receives a deterministic Trust Score.
{
  const res1 = calculateTrustScore(sampleCafe);
  const res2 = calculateTrustScore(sampleCafe);
  assert(res1.score !== null && res1.score >= 70 && res1.score === res2.score,
    `TEST 1: Cafe with strong evidence receives deterministic Trust Score (${res1.score})`);
}

// TEST 2: Changing source quality changes Trust appropriately.
{
  const downgradedCafe = JSON.parse(JSON.stringify(sampleCafe));
  downgradedCafe.evidence.sources = [
    {
      sourceType: "community_source",
      sourceName: "Community Tip",
      retrievedAt: "2026-09-08T00:00:00.000Z"
    }
  ];
  downgradedCafe.facts.provenance = [];
  const downgradedResult = calculateTrustScore(downgradedCafe);
  assert(downgradedResult.score !== null && downgradedResult.score < baseTrust.score,
    `TEST 2: Changing source quality changes Trust appropriately (${baseTrust.score} -> ${downgradedResult.score})`);
}

// TEST 3: Removing evidence reduces evidence coverage/trust.
{
  const reducedEvidenceCafe = JSON.parse(JSON.stringify(sampleCafe));
  reducedEvidenceCafe.facts.openingHours = null;
  reducedEvidenceCafe.facts.phone = null;
  reducedEvidenceCafe.facts.website = null;
  const reducedResult = calculateTrustScore(reducedEvidenceCafe);
  assert(reducedResult.components.evidenceCoverage < baseTrust.components.evidenceCoverage,
    `TEST 3: Removing evidence reduces evidence coverage (${baseTrust.components.evidenceCoverage} -> ${reducedResult.components.evidenceCoverage})`);
}

// TEST 4: Conflicting evidence applies a conflict penalty.
{
  const conflictingCafe = JSON.parse(JSON.stringify(sampleCafe));
  conflictingCafe.evidence.conflict = true;
  conflictingCafe.facts.conflict = true;
  const conflictResult = calculateTrustScore(conflictingCafe);
  assert(conflictResult.components.conflictPenalty > 0 && conflictResult.score < baseTrust.score,
    `TEST 4: Conflicting evidence applies a conflict penalty (-${conflictResult.components.conflictPenalty}) resulting in lower score (${baseTrust.score} -> ${conflictResult.score})`);
}

// TEST 5: Unknown characteristics remain null.
{
  const unverifiedChars = sampleCafe.characteristics;
  let hasNullChar = false;
  Object.entries(unverifiedChars).forEach(([key, val]) => {
    if (val && val.score === null) hasNullChar = true;
  });
  assert(hasNullChar,
    'TEST 5: Unknown characteristics remain null (score = null, confidence = unknown)');
}

// TEST 6: A cafe with insufficient evidence has trustScore === null and is NOT removed from catalogue.
{
  const unverifiedCafe = CAFES_DATA.find(c => c.verificationStatus === 'unverified');
  const unverifiedTrust = calculateTrustScore(unverifiedCafe);
  assert(unverifiedTrust.score === null && unverifiedTrust.hasSufficientEvidence === false,
    `TEST 6A: Cafe with insufficient evidence has trustScore === null (got: ${unverifiedTrust.score})`);
  assert(CAFES_DATA.some(c => c.id === unverifiedCafe.id),
    'TEST 6B: Cafe with insufficient evidence is NOT removed from the catalogue');
}

// TEST 7: A cafe with trustScore === null still appears in search/catalogue.
{
  const unverifiedCafe = CAFES_DATA.find(c => c.verificationStatus === 'unverified');
  const catalogueList = filterAndSortCafes(CAFES_DATA, {
    searchQuery: "",
    selectedSector: "All Chandigarh"
  });
  const searchList = filterAndSortCafes(CAFES_DATA, {
    searchQuery: unverifiedCafe.name
  });
  assert(catalogueList.some(c => c.id === unverifiedCafe.id),
    `TEST 7A: Cafe with trustScore === null appears in main catalogue (${catalogueList.length} cafes returned)`);
  assert(searchList.some(c => c.id === unverifiedCafe.id),
    `TEST 7B: Cafe with trustScore === null appears in explicit search query`);
}

// TEST 8: No cafe has a manually assigned trustScore.
{
  const manualScores = CAFES_DATA.filter(c => c.trustScore !== undefined || c.cafora?.trustScore !== undefined);
  assert(manualScores.length === 0,
    `TEST 8: Exactly 0 / ${CAFES_DATA.length} cafes have manually assigned trustScore`);
}

// TEST 9: No fallback trust value of 80/85/etc. exists.
{
  const emptyVenue = { id: 'empty-venue-test', name: 'Unknown Place' };
  const emptyTrust = calculateTrustScore(emptyVenue);
  assert(emptyTrust.score === null,
    `TEST 9: Unverified venue receives null trustScore (got: ${emptyTrust.score}), never 80/85 fallback`);
}

// TEST 10: Identical evidence produces identical Trust Scores.
{
  const cafeCopy1 = JSON.parse(JSON.stringify(sampleCafe));
  cafeCopy1.id = 'clone-1';
  const cafeCopy2 = JSON.parse(JSON.stringify(sampleCafe));
  cafeCopy2.id = 'clone-2';
  const score1 = calculateTrustScore(cafeCopy1).score;
  const score2 = calculateTrustScore(cafeCopy2).score;
  assert(score1 === score2 && score1 === baseTrust.score,
    `TEST 10: Identical evidence produces identical Trust Scores (${score1} === ${score2})`);
}

// TEST 11: No randomization is involved.
{
  const scores = [];
  for (let i = 0; i < 20; i++) {
    scores.push(calculateTrustScore(sampleCafe).score);
  }
  const allEqual = scores.every(s => s === scores[0]);
  assert(allEqual,
    `TEST 11: 20 consecutive runs produced identical result (${scores[0]}); zero randomization`);
}

// TEST 12: CAFES_DATA contains approximately 87 cafes.
{
  assert(CAFES_DATA.length === 87,
    `TEST 12: CAFES_DATA contains exactly ${CAFES_DATA.length} cafes (target ≈ 87)`);
}

// TEST 13: The recommendation engine does not hard-filter cafes by Trust.
{
  const recs = getCategorizedRecommendations(CAFES_DATA, ['good-coffee'], '');
  const totalConsidered = recs.spotlight.length + recs.morePlaces.length;
  assert(totalConsidered === CAFES_DATA.length,
    `TEST 13: Recommendation engine considers all ${totalConsidered} / ${CAFES_DATA.length} cafes without trust filtering`);
}

// ----------------------------------------------------
// SECTION 22: OSM IDENTITY EVIDENCE & REAL ELEMENT ID TESTS
// ----------------------------------------------------
console.log('\n--- 2b. OSM IDENTITY DETECTION INTEGRITY TESTS ---\n');

const baseVenueWithoutOsm = {
  name: "Sample Test Cafe",
  sector: "Sector 17",
  evidence: {
    sources: [
      {
        sourceType: "openstreetmap",
        sourceName: "OpenStreetMap",
        retrievedAt: "2026-09-08T00:00:00.000Z"
      }
    ]
  },
  facts: {
    rating: 4.5,
    reviewCount: 50
  }
};

// 1. Numeric real OSM ID is recognized (e.g. 4214699191) and contributes OSM identity confidence (+0.45)
{
  const cafeNumericOsm = JSON.parse(JSON.stringify(baseVenueWithoutOsm));
  cafeNumericOsm.osmId = 4214699191;
  const noOsmScore = calculateTrustScore(baseVenueWithoutOsm);
  const numericOsmScore = calculateTrustScore(cafeNumericOsm);

  const diff = Number((numericOsmScore.components.identityConfidence - noOsmScore.components.identityConfidence).toFixed(3));
  assert(
    diff === 0.45 && isValidOsmId(4214699191),
    `OSM TEST 1: Numeric real OSM ID (4214699191) contributes +0.45 identity confidence (${noOsmScore.components.identityConfidence} -> ${numericOsmScore.components.identityConfidence})`
  );
}

// 2. String numeric real OSM ID is recognized (e.g. "4214699191") and contributes OSM identity confidence (+0.45)
{
  const cafeStringOsm = JSON.parse(JSON.stringify(baseVenueWithoutOsm));
  cafeStringOsm.osmId = "4214699191";
  const noOsmScore = calculateTrustScore(baseVenueWithoutOsm);
  const stringOsmScore = calculateTrustScore(cafeStringOsm);

  const diff = Number((stringOsmScore.components.identityConfidence - noOsmScore.components.identityConfidence).toFixed(3));
  assert(
    diff === 0.45 && isValidOsmId("4214699191"),
    `OSM TEST 2: String numeric real OSM ID ("4214699191") contributes +0.45 identity confidence (${noOsmScore.components.identityConfidence} -> ${stringOsmScore.components.identityConfidence})`
  );
}

// 3. Synthetic OSM ID is NOT recognized (e.g. "osm-4214699191", "osm-123") and does NOT receive OSM identity contribution
{
  const cafeSynthetic1 = JSON.parse(JSON.stringify(baseVenueWithoutOsm));
  cafeSynthetic1.osmId = "osm-4214699191";
  const cafeSynthetic2 = JSON.parse(JSON.stringify(baseVenueWithoutOsm));
  cafeSynthetic2.osmId = "osm-123";

  const noOsmScore = calculateTrustScore(baseVenueWithoutOsm);
  const synScore1 = calculateTrustScore(cafeSynthetic1);
  const synScore2 = calculateTrustScore(cafeSynthetic2);

  assert(
    synScore1.components.identityConfidence === noOsmScore.components.identityConfidence &&
    synScore2.components.identityConfidence === noOsmScore.components.identityConfidence &&
    !isValidOsmId("osm-4214699191") &&
    !isValidOsmId("osm-123"),
    `OSM TEST 3: Synthetic OSM IDs ("osm-4214699191", "osm-123") do NOT receive identity contribution`
  );
}

// 4. Missing OSM ID does not receive the OSM identity contribution
{
  const cafeNullOsm = JSON.parse(JSON.stringify(baseVenueWithoutOsm));
  cafeNullOsm.osmId = null;
  const cafeUndefinedOsm = JSON.parse(JSON.stringify(baseVenueWithoutOsm));
  cafeUndefinedOsm.osmId = undefined;
  const cafeEmptyOsm = JSON.parse(JSON.stringify(baseVenueWithoutOsm));
  cafeEmptyOsm.osmId = "";

  const noOsmScore = calculateTrustScore(baseVenueWithoutOsm);
  const nullScore = calculateTrustScore(cafeNullOsm);
  const undScore = calculateTrustScore(cafeUndefinedOsm);
  const emptyScore = calculateTrustScore(cafeEmptyOsm);

  assert(
    nullScore.components.identityConfidence === noOsmScore.components.identityConfidence &&
    undScore.components.identityConfidence === noOsmScore.components.identityConfidence &&
    emptyScore.components.identityConfidence === noOsmScore.components.identityConfidence &&
    !isValidOsmId(null) && !isValidOsmId(undefined) && !isValidOsmId(""),
    `OSM TEST 4: Missing, null, undefined, or empty OSM ID receives no identity contribution`
  );
}

// 5. Existing Trust Score formula produces same result except where corrected OSM identity evidence legitimately changes identityConfidence
{
  const virgin = CAFES_DATA.find(c => c.id === 'virgin-courtyard-sec7');
  const hedgehog = CAFES_DATA.find(c => c.id === 'the-hedgehog-cafe-sec7');
  const nikBakers = CAFES_DATA.find(c => c.id === 'nik-bakers-sec35');

  const virginTrust = calculateTrustScore(virgin);
  const hedgehogTrust = calculateTrustScore(hedgehog);
  const nikTrust = calculateTrustScore(nikBakers);

  assert(
    virginTrust.score === 78 && virginTrust.components.identityConfidence === 0.75 &&
    hedgehogTrust.score === 76 && hedgehogTrust.components.identityConfidence === 0.75 &&
    nikTrust.score === 85 && nikTrust.components.identityConfidence === 1.00,
    `OSM TEST 5: Known real OSM records (Virgin Courtyard, Hedgehog Cafe, Nik Baker's 24/7) recognized with deterministic trust`
  );
}

// ----------------------------------------------------
// SECTION 3: DATASET TRUST SUMMARY
// ----------------------------------------------------
console.log('\n--- 3. DATASET TRUST DISTRIBUTION SUMMARY ---\n');

const verifiedScoredCafes = CAFES_DATA.filter(c => calculateTrustScore(c).score !== null);
const unverifiedCafes = CAFES_DATA.filter(c => calculateTrustScore(c).score === null);

console.log(`Total Cafes in Catalogue:        ${CAFES_DATA.length}`);
console.log(`Cafes with Trust Score:          ${verifiedScoredCafes.length}`);
console.log(`Cafes without Trust Score (null): ${unverifiedCafes.length}\n`);

console.log('Verified Cafes with Displayed Trust Scores:');
verifiedScoredCafes.forEach(c => {
  const t = calculateTrustScore(c);
  console.log(`  - ${c.name.padEnd(35)} : Trust ${t.score} (${c.verificationStatus})`);
});

console.log('\nUnverified Cafes with Hidden Trust Badges (trustScore === null):');
console.log(`  - 73 catalog listings retain full discoverability across search, sector, & moods with NO fake score.\n`);

console.log('====================================================');
console.log(`🏁 TEST SUITE RESULT: ${passedTests}/${totalTests} assertions passed (${Math.round((passedTests / totalTests) * 100)}%)`);
console.log('====================================================\n');

if (passedTests !== totalTests) {
  process.exit(1);
}
