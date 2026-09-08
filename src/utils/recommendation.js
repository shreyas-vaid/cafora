/**
 * Recommendation Engine & Low-Trust Classification
 * 
 * Core Product Philosophy:
 * "Maps tells you where the cafes are.
 * Cafe Finder tells you which ones are worth your time."
 */

import { calculateTrustScore } from "./trustScore.js";

export const HIGH_TRUST_THRESHOLD = 90;

/**
 * Calculates a composite recommendation score.
 * Combines Trust Score (where available as a confidence boost),
 * Review Quality, and Engagement/Recency.
 * 
 * Rule: Trust is an optional confidence signal, NOT an eligibility filter.
 * Cafes with uncalculated trust remain discoverable without being penalized to zero.
 */
export function getRecommendationScore(cafe, userPreferences = {}) {
  const trust = calculateTrustScore(cafe);
  
  // Base confidence contribution: verified trust score if available, or neutral baseline if uncalculated
  let score = trust.score !== null ? (trust.score * 0.60) : 35;

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
 * All legitimate cafes in CAFORA remain eligible for discovery.
 * Trust is a confidence signal, NOT an eligibility filter.
 */
export function isEligibleForDiscovery(cafe) {
  return true;
}
