/**
 * Search & Filtering Engine
 * 
 * Supports:
 * - Multi-word fuzzy intent (e.g. "quiet cafe sector 35", "under 500", "study")
 * - Sector location filtering
 * - Price filtering (₹, ₹₹, ₹₹₹)
 * - Vibe category filtering
 * - Trust score thresholds (80+, 90+)
 * - Sorting algorithms (Recommended, Highest Trust, Highest Rated, Most Reviewed, Nearest)
 */

import { calculateTrustScore } from "./trustScore.js";
import { getRecommendationScore, LOW_TRUST_THRESHOLD } from "./recommendation.js";
import { extractVibesFromSearch, getCharacteristicScore } from "./vibeEngine.js";

export function filterAndSortCafes(cafes, {
  searchQuery = "",
  selectedCategory = "all",
  selectedSector = "All Chandigarh",
  selectedPrice = "all",
  minTrust = "all",
  sortBy = "recommended"
}) {
  const query = searchQuery.trim().toLowerCase();
  const isExplicitSearch = query.length > 0;

  // 1. Filter Cafes
  let results = cafes.filter((cafe) => {
    const trust = calculateTrustScore(cafe);

    // Rule: Low trust cafes are hidden from normal discovery unless explicitly searched by name/sector/tag
    if (!isExplicitSearch && trust.score < LOW_TRUST_THRESHOLD) {
      return false;
    }

    // Category / Vibe Filter
    if (selectedCategory !== "all") {
      if (!cafe.categories?.includes(selectedCategory)) {
        return false;
      }
    }

    // Sector Filter
    if (selectedSector !== "All Chandigarh") {
      if (!cafe.sector?.toLowerCase().includes(selectedSector.toLowerCase())) {
        return false;
      }
    }

    // Price Filter
    if (selectedPrice !== "all") {
      if (cafe.priceRange !== selectedPrice) {
        return false;
      }
    }

    // Trust Filter
    if (minTrust === "90") {
      if (trust.score < 90) return false;
    } else if (minTrust === "80") {
      if (trust.score < 80) return false;
    }

    // Search Query Matching
    if (isExplicitSearch) {
      // Check budget phrase like "under 500" or "under 1000"
      if (query.includes("under 500") || query.includes("< 500") || query.includes("cheap")) {
        if (cafe.approxCostForTwo > 550) return false;
      } else if (query.includes("under 1000") || query.includes("< 1000")) {
        if (cafe.approxCostForTwo > 1000) return false;
      }

      // Conversational stop words that shouldn't eliminate cafes
      const STOP_WORDS = new Set([
        "a", "an", "the", "in", "at", "for", "to", "and", "or", "of", "with",
        "place", "places", "cafe", "café", "cafes", "spot", "spots", "looking",
        "feels", "feel", "like", "that", "some", "i", "im", "i'm", "me", "want",
        "need", "good", "great", "best", "very", "any", "where", "we", "are"
      ]);

      const searchTokens = query
        .split(/\s+/)
        .map((t) => t.replace(/[^a-z0-9]/g, ""))
        .filter((t) => t && !STOP_WORDS.has(t));

      if (searchTokens.length > 0) {
        const searchableText = [
          cafe.name,
          cafe.sector,
          cafe.address,
          ...(cafe.categories || []),
          ...(cafe.tags || []),
          ...(cafe.strengths || []),
          cafe.featuredQuote || "",
          cafe.verdict?.headline || ""
        ].join(" ").toLowerCase();

        // Must match at least one significant token, or match detected vibe characteristics
        const matchesAnyToken = searchTokens.some((token) => searchableText.includes(token));
        if (!matchesAnyToken) {
          const detectedVibes = extractVibesFromSearch(query);
          const hasVibeSuitability = detectedVibes.some((v) => {
            const charKey = v === "good-coffee" ? "coffee" : v === "late-night" ? "lateNight" : v;
            const score = getCharacteristicScore(cafe, charKey);
            return score !== null && score >= 7.5;
          });
          if (!hasVibeSuitability) {
            return false;
          }
        }
      }
    }

    return true;
  });

  // 2. Sort Cafes
  results.sort((a, b) => {
    const trustA = calculateTrustScore(a);
    const trustB = calculateTrustScore(b);

    switch (sortBy) {
      case "trust":
        return trustB.score - trustA.score;
      case "rating":
        return Number(b.rating) - Number(a.rating);
      case "reviews":
        return (b.reviewCount || 0) - (a.reviewCount || 0);
      case "distance":
        return (a.distanceKm || 99) - (b.distanceKm || 99);
      case "recommended":
      default:
        return (
          getRecommendationScore(b, { activeVibe: selectedCategory }) -
          getRecommendationScore(a, { activeVibe: selectedCategory })
        );
    }
  });

  return results;
}
