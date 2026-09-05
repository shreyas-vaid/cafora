import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CafeCard from "./CafeCard";
import FeaturedCafe from "./FeaturedCafe";
import { calculateTrustScore } from "../../utils/trustScore";
import { LOW_TRUST_THRESHOLD } from "../../utils/recommendation";
import {
  getCategorizedRecommendations,
  getMoodResponseCopy
} from "../../utils/vibeEngine";

/**
 * EDITORIAL RECOMMENDATION GRID
 * Prioritizes 3-5 strong matches first, responds dynamically to mood selections,
 * supports "CAFORA is thinking..." transitions, fallback level badges,
 * and features "PERSONALIZED CAFORA MATCHES" above "MORE PLACES WORTH VISITING".
 */
export default function EditorialGrid({
  cafes = [],
  onResetFilters,
  onToggleSave,
  activeMoods = [],
  searchQuery = "",
  isThinking = false
}) {
  const [showMore, setShowMore] = useState(false);

  // Reset showMore when selected vibes change
  useEffect(() => {
    setShowMore(false);
  }, [activeMoods, searchQuery]);

  // 1. "CAFORA is thinking..." Branded Transition
  if (isThinking) {
    return (
      <div
        style={{
          background: "var(--bg-surface-elevated)",
          borderRadius: "var(--radius-xl)",
          padding: "48px 24px",
          textAlign: "center",
          border: "1px solid var(--border-medium)",
          margin: "24px 0"
        }}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          style={{ fontSize: "38px", marginBottom: "12px" }}
        >
          ☕
        </motion.div>
        <h3
          style={{
            fontSize: "22px",
            fontFamily: "var(--font-serif)",
            color: "var(--cream)",
            marginBottom: "6px"
          }}
        >
          CAFORA is thinking...
        </h3>
        <p style={{ fontSize: "14px", color: "var(--accent-orange)", fontStyle: "italic" }}>
          Matching the mood...
        </p>
      </div>
    );
  }

  // 2. Personality-driven Empty State (Only if entire dataset has 0 results)
  if (!cafes || cafes.length === 0) {
    return (
      <div
        style={{
          background: "var(--bg-surface-elevated)",
          borderRadius: "var(--radius-xl)",
          padding: "54px 24px",
          textAlign: "center",
          border: "1px solid var(--border-subtle)",
          margin: "24px 0",
          maxWidth: "540px",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        <div style={{ fontSize: "40px", marginBottom: "14px" }}>☕</div>
        <span className="label-editorial" style={{ letterSpacing: "0.14em" }}>
          <span>●</span> NO DIRECT MATCH
        </span>
        <h3
          style={{
            fontSize: "24px",
            fontFamily: "var(--font-serif)",
            color: "var(--cream)",
            marginTop: "10px",
            marginBottom: "8px"
          }}
        >
          Nothing quite fits that exact combination.
        </h3>
        <p
          style={{
            fontSize: "14px",
            color: "var(--cream-muted)",
            maxWidth: "380px",
            margin: "0 auto 22px auto",
            lineHeight: 1.5
          }}
        >
          Try resetting your mood or clearing search filters to explore other standout Chandigarh spots.
        </p>
        <button
          type="button"
          onClick={onResetFilters}
          className="btn-editorial-primary"
        >
          Reset Mood (Show All) →
        </button>
      </div>
    );
  }

  // Filter low-trust unless direct search
  const eligibleCafes = cafes.filter((c) => {
    const t = calculateTrustScore(c);
    return t.score >= LOW_TRUST_THRESHOLD && !c.isLowTrust;
  });

  const isVibeActive = activeMoods.length > 0 || (searchQuery && searchQuery.trim().length > 0);

  // Use robust categorized recommendations with fallback logic
  const {
    spotlight,
    morePlaces,
    isFallback,
    fallbackMessage
  } = getCategorizedRecommendations(eligibleCafes, activeMoods, searchQuery);

  const moodCopy = getMoodResponseCopy(activeMoods, searchQuery);

  // Dynamic headings
  const sectionEyebrow = isVibeActive ? "✦ PERSONALIZED CAFORA MATCHES" : "✦ CURATED PICKS";
  const sectionHeading = isVibeActive ? moodCopy.lead : "The places we'd actually recommend to a friend.";
  const sectionSubheading = isVibeActive ? moodCopy.sub : `${eligibleCafes.length} places verified in Chandigarh`;

  // Top recommendation for hero spotlight
  const featureCafe = spotlight[0] || eligibleCafes[0];
  const gridSpotlightCafes = spotlight.slice(1);

  return (
    <div style={{ width: "100%", margin: "20px 0" }}>
      {/* 1. DYNAMIC FEATURED CAFE OF THE MOMENT / BEST MATCH */}
      {featureCafe && (
        <FeaturedCafe
          cafe={featureCafe}
          onToggleSave={onToggleSave}
          activeMoods={activeMoods}
          searchQuery={searchQuery}
        />
      )}

      {/* 2. SECTION 1 HEADER: PERSONALIZED CAFORA MATCHES */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "20px",
          paddingBottom: "14px",
          borderBottom: "1px solid var(--border-subtle)"
        }}
      >
        <div>
          <span className="label-editorial">
            <span>●</span> {sectionEyebrow}
          </span>
          <h2
            style={{
              fontSize: "clamp(22px, 3.2vw, 30px)",
              fontFamily: "var(--font-serif)",
              color: "var(--cream)",
              marginTop: "4px"
            }}
          >
            {sectionHeading}
          </h2>
          <p
            style={{
              fontSize: "13.5px",
              color: "var(--cream-muted)",
              marginTop: "4px"
            }}
          >
            {sectionSubheading}
          </p>
        </div>

        <div style={{ fontSize: "12.5px", color: "var(--cream-faint)" }}>
          {isVibeActive ? `${spotlight.length} top recommendations` : `${eligibleCafes.length} places verified`}
        </div>
      </div>

      {/* 3. CLOSEST MATCH FALLBACK NOTIFICATION (if no perfect match >= 85%) */}
      {isVibeActive && isFallback && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: "rgba(224, 122, 56, 0.08)",
            border: "1px solid rgba(224, 122, 56, 0.28)",
            borderRadius: "var(--radius-md)",
            padding: "14px 18px",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "10px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "18px" }}>✨</span>
            <div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--cream)" }}>
                {fallbackMessage || "Nothing is a perfect match — but these come close."}
              </div>
              <div style={{ fontSize: "12px", color: "var(--cream-muted)" }}>
                Here are the closest vibes instead, ranked by compatibility →
              </div>
            </div>
          </div>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 800,
              color: "var(--accent-orange)",
              letterSpacing: "0.08em",
              textTransform: "uppercase"
            }}
          >
            CLOSEST MATCHES
          </span>
        </motion.div>
      )}

      {/* 4. TOP SPOTLIGHT RECOMMENDATIONS */}
      {gridSpotlightCafes.length > 0 && (
        <div className="editorial-grid">
          {gridSpotlightCafes.map((cafe, index) => (
            <CafeCard
              key={cafe.id}
              cafe={cafe}
              onToggleSave={onToggleSave}
              layoutStyle="standard"
              activeMoods={activeMoods}
              searchQuery={searchQuery}
              isTopPick={index === 0 && isVibeActive}
            />
          ))}
        </div>
      )}

      {/* 5. SECTION 2: MORE PLACES WORTH VISITING */}
      {morePlaces.length > 0 && (
        <div style={{ marginTop: "44px" }}>
          {/* Section Divider & Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "12px",
              marginBottom: "20px",
              paddingBottom: "14px",
              borderBottom: "1px solid var(--border-subtle)"
            }}
          >
            <div>
              <span className="label-editorial-muted">
                <span>●</span> MORE PLACES WORTH VISITING
              </span>
              <h3
                style={{
                  fontSize: "clamp(19px, 2.8vw, 24px)",
                  fontFamily: "var(--font-serif)",
                  color: "var(--cream)",
                  marginTop: "4px"
                }}
              >
                {isVibeActive ? "More places from our collection" : "Explore all Chandigarh cafes"}
              </h3>
            </div>

            <div style={{ fontSize: "12.5px", color: "var(--cream-faint)" }}>
              {morePlaces.length} additional spots
            </div>
          </div>

          {!showMore ? (
            <div style={{ textAlign: "center", padding: "12px 0 20px" }}>
              <motion.button
                type="button"
                onClick={() => setShowMore(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-editorial-secondary"
                style={{
                  padding: "12px 28px",
                  fontSize: "13.5px",
                  fontWeight: 700
                }}
              >
                <span>Explore more places</span>
                <span style={{ color: "var(--accent-orange)" }}>({morePlaces.length} more spots) →</span>
              </motion.button>
            </div>
          ) : (
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  marginBottom: "16px"
                }}
              >
                <button
                  type="button"
                  onClick={() => setShowMore(false)}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "var(--accent-orange)",
                    fontSize: "12px",
                    fontWeight: 600,
                    cursor: "pointer"
                  }}
                >
                  Collapse ↑
                </button>
              </div>

              <div className="editorial-grid">
                {morePlaces.map((cafe) => (
                  <CafeCard
                    key={cafe.id}
                    cafe={cafe}
                    onToggleSave={onToggleSave}
                    layoutStyle="compact"
                    activeMoods={activeMoods}
                    searchQuery={searchQuery}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
