import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TrustBadge from "../common/TrustBadge";
import { isCafeSaved, toggleSaveCafe } from "../../utils/storage";
import {
  calculateMatchPercentage,
  getWhyItMatches,
  getCafePersonalityTagline,
  MOODS_LIST
} from "../../utils/vibeEngine";

export default function FeaturedCafe({
  cafe,
  onToggleSave,
  activeMoods = [],
  searchQuery = ""
}) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (cafe) {
      setSaved(isCafeSaved(cafe.id));
    }
  }, [cafe]);

  if (!cafe) return null;

  const handleSaveClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleSaveCafe(cafe);
    setSaved(!saved);
    if (onToggleSave) onToggleSave(cafe);
  };

  const isVibeActive = activeMoods.length > 0 || (searchQuery && searchQuery.trim().length > 0);
  const matchPercentage = calculateMatchPercentage(cafe, activeMoods, searchQuery);
  const whyReasons = getWhyItMatches(cafe, activeMoods);
  const personalityTagline = getCafePersonalityTagline(cafe);

  // Dynamic editorial headline
  let spotlightEyebrow = "★ CAFÉ OF THE MOMENT";
  let spotlightSub = `EDITOR'S SPOTLIGHT • ${cafe.sector}`;

  if (activeMoods.length > 0) {
    const matchedMood = MOODS_LIST.find((m) => m.id === activeMoods[0]);
    if (matchedMood) {
      spotlightEyebrow = `★ CAFORA'S PICK FOR ${matchedMood.title}`;
      spotlightSub = `${matchPercentage}% VIBE MATCH • ${cafe.sector}`;
    } else {
      spotlightEyebrow = `★ YOUR BEST MATCH (${matchPercentage}%)`;
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{
        width: "100%",
        marginBottom: "32px"
      }}
    >
      <div style={{ marginBottom: "12px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
        <span className="label-editorial" style={{ color: isVibeActive ? "var(--accent-orange)" : "var(--accent-orange)" }}>
          <span>★</span> {spotlightEyebrow}
        </span>
        <span className="label-editorial-muted">
          {spotlightSub}
        </span>
      </div>

      <Link
        to={`/cafe/${cafe.id}?match=${matchPercentage}`}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "0",
          background: "var(--bg-surface-elevated)",
          borderRadius: "var(--radius-xl)",
          border: isVibeActive ? "1.5px solid rgba(224, 122, 56, 0.4)" : "1px solid var(--border-medium)",
          overflow: "hidden",
          textDecoration: "none",
          color: "inherit",
          boxShadow: isVibeActive ? "var(--shadow-float), 0 0 30px rgba(224, 122, 56, 0.16)" : "var(--shadow-float)",
          transition: "border-color 0.25s ease, transform 0.25s ease"
        }}
      >
        {/* Left: Editorial Large Image */}
        <div
          style={{
            position: "relative",
            minHeight: "340px",
            height: "100%",
            backgroundColor: "#17100b",
            overflow: "hidden"
          }}
        >
          <img
            src={cafe.heroImage}
            alt={cafe.name}
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80";
            }}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
          />

          {/* Atmospheric gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(16, 11, 8, 0.85) 0%, rgba(16, 11, 8, 0.1) 60%)"
            }}
          />

          {/* Floating Sector Pill & Save Button */}
          <div
            style={{
              position: "absolute",
              top: "16px",
              left: "16px",
              right: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              zIndex: 3
            }}
          >
            <span
              style={{
                background: "rgba(16, 11, 8, 0.85)",
                backdropFilter: "blur(10px)",
                color: "var(--cream)",
                padding: "5px 12px",
                borderRadius: "var(--radius-pill)",
                fontSize: "11.5px",
                fontWeight: 700,
                letterSpacing: "0.04em",
                border: "1px solid var(--border-medium)"
              }}
            >
              📍 {cafe.sector} · CHANDIGARH
            </span>

            <motion.button
              type="button"
              onClick={handleSaveClick}
              whileTap={{ scale: 0.85 }}
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: saved ? "var(--terracotta)" : "rgba(16, 11, 8, 0.75)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
                color: saved ? "#ffffff" : "var(--cream)",
                transition: "background 0.2s ease",
                boxShadow: "0 4px 12px rgba(0,0,0,0.35)"
              }}
              title={saved ? "Remove from coffee list" : "Save to coffee list"}
              aria-label={saved ? "Remove from coffee list" : "Save to coffee list"}
            >
              {saved ? "❤️" : "🤍"}
            </motion.button>
          </div>

          {/* Match badge on bottom left of hero if active */}
          {isVibeActive && (
            <div
              style={{
                position: "absolute",
                bottom: "14px",
                left: "16px",
                background: "rgba(16, 11, 8, 0.9)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(52, 211, 153, 0.4)",
                padding: "4px 12px",
                borderRadius: "var(--radius-pill)",
                color: "#34d399",
                fontSize: "12px",
                fontWeight: 800,
                zIndex: 3,
                display: "flex",
                alignItems: "center",
                gap: "5px"
              }}
            >
              <span>✦</span>
              <span>{matchPercentage}% CAFORA MATCH</span>
            </div>
          )}
        </div>

        {/* Right: Editorial Profile Details */}
        <div
          style={{
            padding: "28px 32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <div>
            {/* Hierarchy: Name + Rating + Trust */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "12px",
                marginBottom: "6px"
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "clamp(22px, 3.2vw, 30px)",
                    fontFamily: "var(--font-serif)",
                    color: "var(--cream)",
                    lineHeight: 1.15
                  }}
                >
                  {cafe.name}
                </h3>
                <div
                  style={{
                    fontSize: "13.5px",
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    color: "var(--accent-orange)",
                    fontWeight: 500,
                    marginTop: "3px"
                  }}
                >
                  "{personalityTagline}"
                </div>
              </div>
            </div>

            {/* Score line: Stars + Trust */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "12px 0 16px"
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 800,
                  color: "var(--gold)",
                  background: "rgba(212, 175, 55, 0.12)",
                  padding: "3px 8px",
                  borderRadius: "var(--radius-xs)",
                  border: "1px solid rgba(212, 175, 55, 0.25)"
                }}
              >
                ★ {cafe.rating}
              </div>
              <TrustBadge cafe={cafe} size="normal" />
              <span style={{ fontSize: "12px", color: "var(--cream-faint)" }}>
                {cafe.priceRange} · ₹{cafe.approxCostForTwo} for 2
              </span>
            </div>

            {/* WHY IT MATCHES */}
            <div
              style={{
                background: "rgba(16, 11, 8, 0.5)",
                borderRadius: "var(--radius-md)",
                padding: "12px 14px",
                marginBottom: "16px",
                border: "1px solid var(--border-subtle)"
              }}
            >
              <div
                style={{
                  fontSize: "10.5px",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--accent-orange)",
                  marginBottom: "6px"
                }}
              >
                {isVibeActive ? "WHY IT MATCHES" : "WHY WE LOVE IT"}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                {whyReasons.slice(0, 3).map((reason, idx) => (
                  <div
                    key={idx}
                    style={{
                      fontSize: "12.5px",
                      color: "var(--cream)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "6px",
                      lineHeight: 1.35
                    }}
                  >
                    <span style={{ color: "var(--trust-high)", fontWeight: 800 }}>✓</span>
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "14px",
              borderTop: "1px solid var(--border-subtle)"
            }}
          >
            <span style={{ fontSize: "12px", color: "var(--cream-muted)" }}>
              {cafe.openingHours}
            </span>

            <span
              style={{
                color: "var(--accent-orange)",
                fontWeight: 700,
                fontSize: "13px",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px"
              }}
            >
              View full profile →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
