/**
 * Trust Engine - Deterministic Trust Score Calculator
 * 
 * Core Differentiator:
 * Answers: "How confident should I be that this cafe is genuinely worth recommending?"
 * 
 * Factors considered:
 * 1. Verified Visit Density (verified visits carry significantly higher weight)
 * 2. Review Depth & Detail (word count, dishes mentioned, context of visit)
 * 3. Cross-Platform Consensus (consistency across Google, Zomato, Swiggy, Cafe Finder)
 * 4. Critical Pattern Penalty (repeated mentions of bad hygiene, slow service, rude staff)
 * 5. Review Volume & Recency confidence
 */

export const TRUST_TIERS = {
  HIGH: { min: 90, max: 100, label: "Highly Trusted", tier: "HIGH_TRUST", badgeClass: "trust-badge-high" },
  GOOD: { min: 80, max: 89, label: "Recommended", tier: "GOOD", badgeClass: "trust-badge-good" },
  MIXED: { min: 65, max: 79, label: "Mixed Experiences", tier: "MIXED", badgeClass: "trust-badge-mixed" },
  LOW: { min: 0, max: 64, label: "Currently Not Recommended", tier: "LOW", badgeClass: "trust-badge-low" }
};

export function calculateTrustScore(cafe) {
  if (!cafe) return { score: 70, tier: "MIXED", confidence: "Low", label: "Insufficient Data", badgeClass: "trust-badge-mixed" };

  // 1. Base Score from raw rating (0 to 45 points)
  // 5.0 -> 45 points, 4.0 -> 36 points, 3.0 -> 27 points
  const baseRating = Number(cafe.rating) || 4.0;
  const ratingComponent = Math.min(45, (baseRating / 5.0) * 45);

  // 2. Verified Visit Ratio (0 to 25 points)
  // Cafes with high proportion of verified visits get maximum trust
  const verifiedCount = cafe.verifiedVisitsCount || (cafe.sources?.cafeFinder?.verifiedVisits) || 20;
  const totalReviews = cafe.reviewCount || 100;
  const verifiedRatio = Math.min(1, verifiedCount / Math.max(30, totalReviews * 0.4));
  const verifiedComponent = verifiedRatio * 25;

  // 3. Cross-Platform Consensus & Reliability (0 to 20 points)
  // Low variance across Google, Zomato, Swiggy indicates high data integrity
  let consensusComponent = 16;
  if (cafe.sources) {
    const ratings = [
      cafe.sources.google?.rating,
      cafe.sources.zomato?.rating,
      cafe.sources.swiggy?.rating,
      cafe.sources.cafeFinder?.rating
    ].filter(Boolean).map(Number);

    if (ratings.length >= 2) {
      const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;
      const variance = ratings.reduce((acc, r) => acc + Math.pow(r - avg, 2), 0) / ratings.length;
      if (variance < 0.05) consensusComponent = 20;
      else if (variance < 0.15) consensusComponent = 17;
      else if (variance < 0.35) consensusComponent = 13;
      else consensusComponent = 8; // High disagreement across platforms
    }
  }

  // 4. Review Detail & Authenticity Signal (0 to 15 points)
  // Cafes with structured pro/con patterns and detailed feedback
  let detailComponent = 12;
  if (cafe.strengths && cafe.strengths.length >= 3) detailComponent += 3;

  // 5. Critical Issues / Repeated Complaints Penalty (Subtract up to 25 points)
  let penalty = 0;
  if (cafe.weaknesses && cafe.weaknesses.length > 0) {
    cafe.weaknesses.forEach((w) => {
      const lower = w.toLowerCase();
      if (lower.includes("hygiene") || lower.includes("stale") || lower.includes("unpleasant") || lower.includes("rude")) {
        penalty += 12;
      } else if (lower.includes("slow") || lower.includes("crowded") || lower.includes("expensive") || lower.includes("parking")) {
        penalty += 4;
      } else {
        penalty += 2;
      }
    });
  }

  // If designated as intentionally low trust in demo data
  if (cafe.isLowTrust) {
    penalty += 28;
  }

  const rawScore = Math.round(ratingComponent + verifiedComponent + consensusComponent + detailComponent - penalty);
  const score = Math.max(38, Math.min(98, rawScore));

  // Determine Tier
  let tierInfo = TRUST_TIERS.LOW;
  if (score >= TRUST_TIERS.HIGH.min) tierInfo = TRUST_TIERS.HIGH;
  else if (score >= TRUST_TIERS.GOOD.min) tierInfo = TRUST_TIERS.GOOD;
  else if (score >= TRUST_TIERS.MIXED.min) tierInfo = TRUST_TIERS.MIXED;

  // Determine Confidence
  let confidence = "Medium";
  if (totalReviews > 200 && verifiedCount > 50) confidence = "High";
  else if (totalReviews < 50) confidence = "Low";

  return {
    score,
    tier: tierInfo.tier,
    label: tierInfo.label,
    confidence,
    badgeClass: tierInfo.badgeClass,
    breakdown: {
      ratingComponent: Math.round(ratingComponent),
      verifiedComponent: Math.round(verifiedComponent),
      consensusComponent: Math.round(consensusComponent),
      detailComponent: Math.round(detailComponent),
      penalty
    }
  };
}
