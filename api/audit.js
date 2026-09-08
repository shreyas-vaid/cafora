import { CAFES_DATA } from '../src/data/cafesData.js';
import { calculateTrustScore } from '../src/utils/trustScore.js';

export function calculateAuditReport(cafes = CAFES_DATA) {
  const total = cafes.length;

  let verifiedCount = 0;
  let partiallyVerifiedCount = 0;
  let unverifiedCount = 0;

  let missingAddressCount = 0;
  let missingRatingCount = 0;
  let missingReviewCount = 0;
  let missingHoursCount = 0;
  let missingEvidenceCount = 0;

  let overMoodsCount = 0;
  let underMoodsCount = 0;
  let uniform120Count = 0;
  let badAICopyCount = 0;

  let totalEvidenceSources = 0;
  let lowConfidenceCharacteristicsCount = 0;
  let conflictingSourcesCount = 0;

  const duplicateCheck = new Map();
  const duplicateNames = [];
  const moodFrequencies = {};
  const trustScores = [];

  const buckets = {
    "0-19": 0,
    "20-39": 0,
    "40-59": 0,
    "60-69": 0,
    "70-79": 0,
    "80-89": 0,
    "90-100": 0
  };

  cafes.forEach((cafe) => {
    const id = cafe.id || cafe.identity?.id;
    const name = cafe.name || cafe.identity?.name;
    const address = cafe.address || cafe.identity?.address;
    const rating = cafe.facts?.rating ?? cafe.rating;
    const reviewCount = cafe.facts?.reviewCount ?? cafe.reviews;
    const hours = cafe.facts?.openingHours ?? cafe.openingHours;
    const cafora = cafe.cafora || {};
    const moods = cafora.moods || cafe.moods || [];
    const status = cafora.verificationStatus || cafe.verificationStatus || 'unverified';

    // Calculate deterministic trust score from evidence
    const trustResult = calculateTrustScore(cafe);
    const trust = trustResult.score;
    trustScores.push(trust);

    // Distribution Bucketing
    if (trust < 20) buckets["0-19"]++;
    else if (trust < 40) buckets["20-39"]++;
    else if (trust < 60) buckets["40-59"]++;
    else if (trust < 70) buckets["60-69"]++;
    else if (trust < 80) buckets["70-79"]++;
    else if (trust < 90) buckets["80-89"]++;
    else buckets["90-100"]++;

    if (status === 'verified') verifiedCount++;
    else if (status === 'partially_verified') partiallyVerifiedCount++;
    else unverifiedCount++;

    if (!address || address.length < 5) missingAddressCount++;
    if (rating === null || rating === undefined) missingRatingCount++;
    if (reviewCount === null || reviewCount === undefined) missingReviewCount++;
    if (!hours) missingHoursCount++;

    const sources = [
      ...(cafe.evidence?.sources || []),
      ...(cafe.facts?.provenance || [])
    ];
    if (!sources || sources.length === 0) missingEvidenceCount++;
    totalEvidenceSources += sources.length;

    if (cafe.evidence?.conflict || cafe.facts?.conflict) conflictingSourcesCount++;

    if (moods.length > 4) overMoodsCount++;
    if (moods.length < 2) underMoodsCount++;

    moods.forEach((m) => {
      moodFrequencies[m] = (moodFrequencies[m] || 0) + 1;
    });

    if (reviewCount === 120) uniform120Count++;

    const fullJson = JSON.stringify(cafe);
    if (/especially suited to|generous brunch platters and relaxed mornings|indulgent pastries and dessert cravings|catching up with friends over snacks|focused laptop sessions and reading|400\+ vinyl|extraction precision|architecturally daring|espresso extraction lab|undisputed|legendary|most beautiful|instagrammable/i.test(fullJson)) {
      badAICopyCount++;
    }

    if (name) {
      const normalizedName = name.toLowerCase().trim();
      if (duplicateCheck.has(normalizedName)) {
        duplicateNames.push({ name, duplicateWith: duplicateCheck.get(normalizedName) });
      } else {
        duplicateCheck.set(normalizedName, id);
      }
    }
  });

  // Calculate Trust Statistics
  const sortedScores = [...trustScores].sort((a, b) => a - b);
  const minTrust = sortedScores.length > 0 ? sortedScores[0] : 0;
  const maxTrust = sortedScores.length > 0 ? sortedScores[sortedScores.length - 1] : 0;
  const meanTrust = sortedScores.length > 0 
    ? Math.round((sortedScores.reduce((a, b) => a + b, 0) / sortedScores.length) * 10) / 10 
    : 0;
  
  const mid = Math.floor(sortedScores.length / 2);
  const medianTrust = sortedScores.length % 2 !== 0 
    ? sortedScores[mid] 
    : Math.round(((sortedScores[mid - 1] + sortedScores[mid]) / 2) * 10) / 10;
  
  const variance = sortedScores.length > 0
    ? sortedScores.reduce((acc, val) => acc + Math.pow(val - meanTrust, 2), 0) / sortedScores.length
    : 0;
  const stdDevTrust = Math.round(Math.sqrt(variance) * 10) / 10;

  const avgEvidenceCoverage = total > 0 
    ? Math.round(cafes.reduce((acc, c) => {
        const cov = c.evidenceCoverage || c.cafora?.evidenceCoverage;
        return acc + (cov ? parseInt(cov, 10) || 0 : 0);
      }, 0) / total)
    : 0;

  return {
    dataset: {
      totalCafes: total,
      verified: verifiedCount,
      partiallyVerified: partiallyVerifiedCount,
      unverified: unverifiedCount,
      removed: 0,
      verificationCoverage: total > 0 ? `${Math.round(((verifiedCount + partiallyVerifiedCount) / total) * 100)}%` : '0%',
      averageEvidenceCoverage: `${avgEvidenceCoverage}%`
    },
    provenanceAndIntegrity: {
      missingAddresses: missingAddressCount,
      missingRatings: missingRatingCount,
      missingReviewCounts: missingReviewCount,
      missingOpeningHours: missingHoursCount,
      missingEvidence: missingEvidenceCount,
      cafesWith120SyntheticReviews: uniform120Count,
      cafesWithQuestionableAICopy: badAICopyCount,
      duplicateCafes: duplicateNames,
      sourceConflictsCount: conflictingSourcesCount
    },
    moodIntegrity: {
      cafesWithOver4Moods: overMoodsCount,
      cafesWithUnder2Moods: underMoodsCount,
      moodComplianceRate: total > 0 ? `${Math.round(((total - overMoodsCount - underMoodsCount) / total) * 100)}%` : '0%',
      distribution: moodFrequencies
    },
    trustEngine: {
      model: "Evidence-Derived Weighted Formulation",
      weights: {
        sourceQuality: "25%",
        sourceAgreement: "20%",
        evidenceCoverage: "20%",
        freshness: "15%",
        identityConfidence: "20%"
      },
      distribution: {
        minimum: minTrust,
        maximum: maxTrust,
        mean: meanTrust,
        median: medianTrust,
        standardDeviation: stdDevTrust,
        buckets
      }
    },
    qualityScores: {
      averageTrustScore: meanTrust,
      averageEvidenceSourcesPerCafe: total > 0 ? Math.round((totalEvidenceSources / total) * 10) / 10 : 0,
      averageEvidenceCoverage: `${avgEvidenceCoverage}%`,
      lowConfidenceCharacteristicsTotal: lowConfidenceCharacteristicsCount
    },
    status: (uniform120Count === 0 && overMoodsCount === 0 && badAICopyCount === 0) ? "HEALTHY" : "NEEDS_AUDIT"
  };
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { id } = req.query || {};
  if (id) {
    const cafe = CAFES_DATA.find(c => (c.id === id || c.identity?.id === id));
    if (!cafe) {
      return res.status(404).json({ error: 'Cafe not found', id });
    }
    const trustResult = calculateTrustScore(cafe);
    return res.status(200).json({
      status: 'success',
      cafeId: id,
      cafeName: cafe.name || cafe.identity?.name,
      trustScore: trustResult.score,
      components: trustResult.components,
      explanation: trustResult.explanation
    });
  }

  const report = calculateAuditReport(CAFES_DATA);
  return res.status(200).json({
    status: 'success',
    report
  });
}
