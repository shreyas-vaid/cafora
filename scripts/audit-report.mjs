import fs from 'fs';
import path from 'path';
import { CAFES_DATA } from '../src/data/cafesData.js';
import { calculateTrustScore } from '../src/utils/trustScore.js';

/**
 * CAFORA Data Quality Audit & Reporting Engine (Section 30)
 * 
 * Computes comprehensive diagnostic metrics on dataset health:
 * - Real vs. missing values
 * - Provenance and evidence depth
 * - Strict mood counts (2-3, max 4)
 * - Conflict detection & suspicious entry tracking
 * - Trust score distribution
 */

export function generateAuditReport(cafes = CAFES_DATA) {
  const total = cafes.length;

  let verifiedCount = 0;
  let partiallyVerifiedCount = 0;
  let unverifiedCount = 0;

  let missingAddressCount = 0;
  let missingRatingCount = 0;
  let missingReviewCount = 0;
  let missingHoursCount = 0;
  let missingEvidenceCount = 0;

  let overMoodsCount = 0; // >4 moods
  let underMoodsCount = 0; // <2 moods
  let uniform120Count = 0;
  let badAICopyCount = 0;

  let totalTrustScore = 0;
  let totalEvidenceSources = 0;
  let lowConfidenceCharacteristicsCount = 0;
  let conflictingSourcesCount = 0;

  const duplicateCheck = new Map();
  const duplicateNames = [];

  const charKeys = [
    "coffee", "work", "quiet", "date", "aesthetic", "groups", "dessert", "lateNight",
    "reading", "brunch", "outdoor", "slowMorning", "ambience", "food", "seating", "conversation"
  ];

  const moodFrequencies = {};

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
    
    // Dynamic evidence-derived trust calculation
    const trustResult = calculateTrustScore(cafe);
    const trust = trustResult.score;

    // Duplicates check
    const normalizedName = (name || '').toLowerCase().trim();
    if (duplicateCheck.has(normalizedName)) {
      duplicateNames.push(name);
    } else {
      duplicateCheck.set(normalizedName, id);
    }

    // Verification Status
    if (status === 'verified') verifiedCount++;
    else if (status === 'partially_verified') partiallyVerifiedCount++;
    else unverifiedCount++;

    // Missing Attributes
    if (!address || address.trim().length === 0) missingAddressCount++;
    if (rating === null || rating === undefined) missingRatingCount++;
    if (reviewCount === null || reviewCount === undefined) missingReviewCount++;
    if (!hours || hours.trim().length === 0) missingHoursCount++;

    // Evidence Sources & Conflicts
    const sources = cafe.evidence?.sources || [];
    if (!sources || sources.length === 0) missingEvidenceCount++;
    totalEvidenceSources += sources.length;
    if (cafe.evidence?.conflict) conflictingSourcesCount++;

    // Characteristics confidence
    const chars = cafe.characteristics || {};
    charKeys.forEach(k => {
      const charObj = chars[k];
      if (charObj && (charObj.confidence === 'low' || charObj.confidence === 'unknown')) {
        lowConfidenceCharacteristicsCount++;
      }
    });

    // Moods Rule Check (2-3 genuine moods, max 4)
    if (moods.length > 4) overMoodsCount++;
    if (moods.length < 2) underMoodsCount++;
    moods.forEach(m => {
      moodFrequencies[m] = (moodFrequencies[m] || 0) + 1;
    });

    // Fabricated data checks
    if (reviewCount === 120 && cafe.facts?.reviewCount === 120) uniform120Count++;
    const fullJson = JSON.stringify(cafe);
    if (/especially suited to|generous brunch platters and relaxed mornings|indulgent pastries and dessert cravings|catching up with friends over snacks|focused laptop sessions and reading|400\+ vinyl|extraction precision|architecturally daring|espresso extraction lab|undisputed|legendary|most beautiful|instagrammable/i.test(fullJson)) {
      badAICopyCount++;
    }

    totalTrustScore += trust;
  });

  const avgEvidenceCoverage = total > 0 
    ? Math.round(cafes.reduce((acc, c) => {
        const cov = c.evidenceCoverage || c.cafora?.evidenceCoverage;
        return acc + (cov ? parseInt(cov, 10) || 0 : 0);
      }, 0) / total)
    : 0;

  return {
    generatedAt: new Date().toISOString(),
    dataset: {
      totalCafes: total,
      verified: verifiedCount,
      partiallyVerified: partiallyVerifiedCount,
      unverified: unverifiedCount,
      removed: 0,
      verificationRate: `${Math.round(((verifiedCount + partiallyVerifiedCount) / total) * 100)}%`,
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
      moodComplianceRate: `${Math.round(((total - overMoodsCount - underMoodsCount) / total) * 100)}%`,
      distribution: moodFrequencies
    },
    qualityScores: {
      averageTrustScore: Math.round((totalTrustScore / total) * 10) / 10,
      averageEvidenceSourcesPerCafe: Math.round((totalEvidenceSources / total) * 10) / 10,
      averageEvidenceCoverage: `${avgEvidenceCoverage}%`,
      lowConfidenceCharacteristicsTotal: lowConfidenceCharacteristicsCount
    },
    status: (uniform120Count === 0 && overMoodsCount === 0 && badAICopyCount === 0) ? "HEALTHY" : "NEEDS_AUDIT"
  };
}

// CLI execution
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve('scripts/audit-report.mjs')) {
  const report = generateAuditReport();
  console.log('====================================================');
  console.log('         CAFORA DATA QUALITY AUDIT REPORT           ');
  console.log('====================================================');
  console.log(`Total Cafés:                  ${report.dataset.totalCafes}`);
  console.log(`Verified:                     ${report.dataset.verified}`);
  console.log(`Partially Verified:           ${report.dataset.partiallyVerified}`);
  console.log(`Unverified:                   ${report.dataset.unverified}`);
  console.log(`Removed / Excluded:           ${report.dataset.removed} (Purged fictional placeholders)`);
  console.log(`Duplicates:                   ${report.provenanceAndIntegrity.duplicateCafes.length}`);
  console.log(`Missing Ratings:              ${report.provenanceAndIntegrity.missingRatings}`);
  console.log(`Missing Review Counts:        ${report.provenanceAndIntegrity.missingReviewCounts} (Audited as null)`);
  console.log(`Missing Hours:                ${report.provenanceAndIntegrity.missingOpeningHours}`);
  console.log(`Missing Addresses:            ${report.provenanceAndIntegrity.missingAddresses}`);
  console.log(`Missing Evidence:             ${report.provenanceAndIntegrity.missingEvidence}`);
  console.log(`Low-Confidence Chars:         ${report.qualityScores.lowConfidenceCharacteristicsTotal}`);
  console.log(`Unsupported Descriptions:     ${report.provenanceAndIntegrity.cafesWithQuestionableAICopy} (Expected: 0)`);
  console.log(`Cafes with >4 Moods:          ${report.moodIntegrity.cafesWithOver4Moods} (Expected: 0)`);
  console.log(`Average Trust Score:          ${report.qualityScores.averageTrustScore}/100`);
  console.log(`Average Evidence Coverage:    ${report.dataset.averageEvidenceCoverage}`);
  console.log('----------------------------------------------------');
  console.log('Mood Distribution:           ', report.moodIntegrity.distribution);
  console.log('====================================================');
}
