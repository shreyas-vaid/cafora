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

import { calculateTrustScore } from "./trustScore";
import { getRecommendationScore, LOW_TRUST_THRESHOLD } from "./recommendation";

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

      // Check tokens
      const searchTokens = query.split(/\s+/).filter(Boolean);
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

      const matchesAllTokens = searchTokens.every((token) => searchableText.includes(token));
      if (!matchesAllTokens) {
        return false;
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
