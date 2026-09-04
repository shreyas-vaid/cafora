/**
 * Recommendation Engine & Low-Trust Classification
 * 
 * Core Product Philosophy:
 * "Maps tells you where the cafes are.
 * Cafe Finder tells you which ones are worth your time."
 */

import { calculateTrustScore } from "./trustScore";

export const LOW_TRUST_THRESHOLD = 65;
export const HIGH_TRUST_THRESHOLD = 90;

/**
 * Calculates a composite recommendation score.
 * Combines Trust Score (60%), Review Quality (20%), and Engagement/Recency (20%).
 * Low Trust cafes receive severe penalties in normal discovery feeds.
 */
export function getRecommendationScore(cafe, userPreferences = {}) {
  const trust = calculateTrustScore(cafe);
  
  // If trust is below threshold, penalize severely for discovery
  if (trust.score < LOW_TRUST_THRESHOLD) {
    return trust.score * 0.4;
  }

  let score = trust.score * 0.65;

  // Add rating confidence
  const ratingWeight = ((Number(cafe.rating) || 4.0) / 5.0) * 20;
  score += ratingWeight;

  // Verified review ratio boost
  const verifiedCount = cafe.verifiedVisitsCount || 20;
  const totalReviews = cafe.reviewCount || 100;
  const verifiedRatio = Math.min(1, verifiedCount / totalReviews);
  score += verifiedRatio * 15;

  // Category matching boost if user has active preference
  if (userPreferences.activeVibe && userPreferences.activeVibe !== "all") {
    if (cafe.categories?.includes(userPreferences.activeVibe)) {
      score += 10;
    }
  }

  return Math.round(score);
}

/**
 * Filter out low-trust cafes from standard discovery unless explicit search matches them.
 */
export function isEligibleForDiscovery(cafe) {
  const trust = calculateTrustScore(cafe);
  return trust.score >= LOW_TRUST_THRESHOLD && !cafe.isLowTrust;
}
