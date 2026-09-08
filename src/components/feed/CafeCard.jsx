import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TrustBadge from "../common/TrustBadge";
import { calculateTrustScore } from "../../utils/trustScore";
import { isCafeSaved, toggleSaveCafe } from "../../utils/storage";
import {
  getCafePersonalityTagline,
  calculateMatchPercentage,
  getMatchLabel,
  getWhyItMatches,
  getCafeCaveat,
  getCaforaSaysPhrase
} from "../../utils/vibeEngine";

/**
 * STREAMLINED PERSONALITY CAFE CARD (3-5 Second Scannability)
 * Priority Hierarchy:
 * 1. Cafe image with sector pill & save heart
 * 2. Cafe name
 * 3. Short personality tagline (e.g. "Main character energy.")
 * 4. Star rating + 97 TRUST ⓘ + CAFORA MATCH %
 * 5. Top 2 key reasons (WHY IT MATCHES)
 * 6. Compact tags
 * 7. "CAFORA SAYS" editorial badge on top match
 */
export default function CafeCard({
  cafe,
  onToggleSave,
  layoutStyle = "standard",
  activeMoods = [],
  searchQuery = "",
  isTopPick = false
}) {
  const [saved, setSaved] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setSaved(isCafeSaved(cafe.id));
  }, [cafe.id]);

  const handleSaveClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleSaveCafe(cafe);
    setSaved(!saved);
    if (onToggleSave) onToggleSave(cafe);
  };

  const personalityTagline = getCafePersonalityTagline(cafe);
  const matchPercentage = calculateMatchPercentage(cafe, activeMoods, searchQuery);
  const matchLabel = getMatchLabel(matchPercentage);
  const whyReasons = getWhyItMatches(cafe, activeMoods);
  const caveat = getCafeCaveat(cafe, activeMoods);
  const caforaSays = isTopPick ? getCaforaSaysPhrase(cafe, activeMoods) : null;
  const isVibeActive = activeMoods.length > 0 || (searchQuery && searchQuery.trim().length > 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          background: "var(--bg-surface-elevated)",
          borderRadius: "var(--radius-lg)",
          border: isHovered
            ? "1px solid var(--accent-orange)"
            : isTopPick && isVibeActive
            ? "1px solid rgba(224, 122, 56, 0.45)"
            : "1px solid var(--border-medium)",
          overflow: "hidden",
          boxShadow: isHovered
            ? "var(--shadow-float), 0 0 20px rgba(224, 122, 56, 0.16)"
            : "var(--shadow-card)",
          transition: "border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
          position: "relative"
        }}
      >
        {/* 1. CAFE IMAGE HEADER */}
        <Link
          to={`/cafe/${cafe.id}?match=${matchPercentage}`}
          style={{
            position: "relative",
            width: "100%",
            height: layoutStyle === "compact" ? "180px" : "210px",
            backgroundColor: "#1b130e",
            overflow: "hidden",
            display: "block",
            textDecoration: "none"
          }}
        >
          {!imageLoaded && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(90deg, rgba(255,255,255,0.03) 25%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.03) 75%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 1.5s infinite"
              }}
            />
          )}

          <img
            src={cafe.heroImage}
            alt={cafe.name}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80";
              setImageLoaded(true);
            }}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              opacity: imageLoaded ? 1 : 0,
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease"
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(16, 11, 8, 0.85) 0%, rgba(16, 11, 8, 0.08) 50%, rgba(16, 11, 8, 0.45) 100%)",
              pointerEvents: "none"
            }}
          />

          {/* Top Bar: Sector & Save Heart */}
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              right: "12px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              zIndex: 3
            }}
          >
            <span
              style={{
                background: "rgba(16, 11, 8, 0.85)",
                backdropFilter: "blur(8px)",
                color: "var(--cream)",
                padding: "3px 9px",
                borderRadius: "var(--radius-pill)",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.03em",
                border: "1px solid var(--border-subtle)"
              }}
            >
              📍 {cafe.sector}
            </span>

            <motion.button
              type="button"
              onClick={handleSaveClick}
              whileTap={{ scale: 0.8 }}
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: saved ? "var(--terracotta)" : "rgba(16, 11, 8, 0.75)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "13px",
                color: saved ? "#ffffff" : "var(--cream)",
                transition: "background 0.2s ease",
                boxShadow: "0 3px 8px rgba(0,0,0,0.3)"
              }}
              title={saved ? "Remove from coffee list" : "Save to coffee list"}
              aria-label={saved ? "Remove from coffee list" : "Save to coffee list"}
            >
              {saved ? "❤️" : "🤍"}
            </motion.button>
          </div>

          {/* Price & Cost Tag */}
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              left: "12px",
              zIndex: 3
            }}
          >
            <span
              style={{
                background: "rgba(16, 11, 8, 0.82)",
                backdropFilter: "blur(6px)",
                color: "var(--cream-muted)",
                fontSize: "11px",
                fontWeight: 600,
                padding: "3px 8px",
                borderRadius: "var(--radius-xs)",
                border: "1px solid var(--border-subtle)"
              }}
            >
              {cafe.priceRange} · ₹{cafe.approxCostForTwo} for 2
            </span>
          </div>
        </Link>

        {/* 2. CARD BODY */}
        <div
          style={{
            padding: "16px 18px 18px",
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "space-between"
          }}
        >
          <div>
            {/* "CAFORA SAYS" SIGNATURE BADGE (Top recommendation only) */}
            {caforaSays && (
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(224, 122, 56, 0.14)",
                  border: "1px solid rgba(224, 122, 56, 0.35)",
                  padding: "3px 9px",
                  borderRadius: "var(--radius-pill)",
                  marginBottom: "8px"
                }}
              >
                <span
                  style={{
                    fontSize: "9.5px",
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--accent-orange)"
                  }}
                >
                  CAFORA SAYS:
                </span>
                <span style={{ fontSize: "11.5px", fontStyle: "italic", color: "var(--cream)", fontWeight: 600 }}>
                  "{caforaSays}"
                </span>
              </div>
            )}

            {/* Cafe Name */}
            <Link
              to={`/cafe/${cafe.id}?match=${matchPercentage}`}
              style={{
                textDecoration: "none",
                color: "inherit"
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  fontFamily: "var(--font-serif)",
                  color: "var(--cream)",
                  lineHeight: 1.25,
                  marginBottom: "4px"
                }}
              >
                {cafe.name}
              </h3>
            </Link>

            {/* 3. Short Personality Tagline */}
            <div
              style={{
                fontSize: "12.5px",
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                color: "var(--accent-orange)",
                fontWeight: 500,
                marginBottom: "10px",
                lineHeight: 1.3
              }}
            >
              "{personalityTagline}"
            </div>

            {/* 4. Hierarchy Row: Star Rating + 97 TRUST ⓘ + CAFORA MATCH % */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "12px"
              }}
            >
              {/* Star Rating */}
              <div
                style={{
                  fontSize: "11.5px",
                  fontWeight: 800,
                  color: "var(--gold)",
                  display: "flex",
                  alignItems: "center",
                  gap: "2px",
                  background: "rgba(212, 175, 55, 0.12)",
                  padding: "2px 7px",
                  borderRadius: "var(--radius-xs)",
                  border: "1px solid rgba(212, 175, 55, 0.25)"
                }}
              >
                ★ {cafe.rating}
              </div>

              {/* Trust Badge with Info Icon */}
              {calculateTrustScore(cafe).score !== null && (
                <TrustBadge cafe={cafe} size="small" />
              )}

              {/* CAFORA MATCH % (Highlighted when vibe active) */}
              {isVibeActive && (
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 800,
                    letterSpacing: "0.04em",
                    color: matchPercentage >= 90 ? "#34d399" : "var(--accent-orange)",
                    background: matchPercentage >= 90 ? "rgba(52, 211, 153, 0.12)" : "rgba(224, 122, 56, 0.12)",
                    border: matchPercentage >= 90 ? "1px solid rgba(52, 211, 153, 0.3)" : "1px solid rgba(224, 122, 56, 0.3)",
                    padding: "2px 7px",
                    borderRadius: "var(--radius-xs)"
                  }}
                >
                  {matchPercentage}% CAFORA MATCH · {matchLabel}
                </div>
              )}
            </div>

            {/* 5. TOP 2 KEY REASONS (WHY IT MATCHES) */}
            {whyReasons.length > 0 && (
              <div
                style={{
                  background: "rgba(16, 11, 8, 0.45)",
                  borderRadius: "var(--radius-sm)",
                  padding: "8px 10px",
                  marginBottom: "12px",
                  fontSize: "11.5px",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px"
                }}
              >
                {whyReasons.slice(0, 2).map((reason, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "6px",
                      color: "var(--cream)",
                      lineHeight: 1.35
                    }}
                  >
                    <span style={{ color: "var(--trust-high)", fontWeight: 800, flexShrink: 0 }}>✓</span>
                    <span>{reason}</span>
                  </div>
                ))}

                {/* Granular Caveat / Operational Note */}
                {caveat && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "var(--cream-muted)",
                      fontSize: "10.5px",
                      fontStyle: "italic",
                      marginTop: "3px",
                      borderTop: "1px solid rgba(252, 248, 242, 0.08)",
                      paddingTop: "4px"
                    }}
                  >
                    <span style={{ color: "var(--accent-orange)", fontSize: "10px" }}>ⓘ</span>
                    <span>{caveat}</span>
                  </div>
                )}
              </div>
            )}

            {/* 6. Tags (Max 2 for scannability) */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
              {cafe.tags?.slice(0, 2).map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: "10.5px",
                    background: "rgba(252, 248, 242, 0.05)",
                    color: "var(--cream-faint)",
                    padding: "2px 7px",
                    borderRadius: "var(--radius-xs)",
                    fontWeight: 500
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 7. Action Bar: Profile & Get Directions */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "14px",
              paddingTop: "12px",
              borderTop: "1px solid var(--border-subtle)"
            }}
          >
            <Link
              to={`/cafe/${cafe.id}?match=${matchPercentage}`}
              style={{
                flex: 1,
                textDecoration: "none",
                textAlign: "center",
                fontSize: "12px",
                fontWeight: 600,
                color: "var(--cream-muted)",
                background: "rgba(252, 248, 242, 0.05)",
                border: "1px solid var(--border-subtle)",
                padding: "7px 10px",
                borderRadius: "var(--radius-pill)",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--cream)";
                e.currentTarget.style.borderColor = "var(--border-prominent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--cream-muted)";
                e.currentTarget.style.borderColor = "var(--border-subtle)";
              }}
            >
              Explore profile →
            </Link>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cafe.name + " " + cafe.address)}`}
              target="_blank"
              rel="noreferrer"
              style={{
                flex: 1,
                textDecoration: "none",
                textAlign: "center",
                fontSize: "12px",
                fontWeight: 700,
                color: "#100b08",
                background: "var(--accent-orange)",
                padding: "7px 10px",
                borderRadius: "var(--radius-pill)",
                transition: "all 0.2s ease",
                boxShadow: "0 2px 10px rgba(224, 122, 56, 0.28)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--accent-orange-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--accent-orange)";
              }}
            >
              Take me there
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
