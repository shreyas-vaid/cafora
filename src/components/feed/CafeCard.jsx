import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TrustBadge from "../common/TrustBadge";
import { isCafeSaved, toggleSaveCafe } from "../../utils/storage";

/**
 * EDITORIAL CAFE POSTCARD
 * Visual hierarchy:
 * 1. Image with sector tag & save button
 * 2. Cafe Name
 * 3. Trust Score + Star Rating (separated)
 * 4. What it's good for (✓)
 * 5. One thing to know (⚠️ watch out)
 * 6. Price & Vibe tags
 */
export default function CafeCard({ cafe, onToggleSave, layoutStyle = "standard" }) {
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

  const topPositive = cafe.strengths?.[0] || cafe.verdict?.loved?.[0] || "Great coffee";
  const topNegative = cafe.weaknesses?.[0] || cafe.verdict?.disliked?.[0] || "Busy during peak hours";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
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
      <Link
        to={`/cafe/${cafe.id}`}
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          textDecoration: "none",
          color: "inherit",
          background: "var(--bg-surface-elevated)",
          borderRadius: "var(--radius-lg)",
          border: isHovered ? "1px solid var(--border-prominent)" : "1px solid var(--border-subtle)",
          overflow: "hidden",
          boxShadow: isHovered ? "var(--shadow-float)" : "var(--shadow-card)",
          transition: "border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease"
        }}
      >
        {/* POSTCARD IMAGE HEADER */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: layoutStyle === "compact" ? "180px" : "220px",
            backgroundColor: "#1b130e",
            overflow: "hidden"
          }}
        >
          {/* Skeleton placeholder */}
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

          {/* Vignette shadow */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(16, 11, 8, 0.8) 0%, rgba(16, 11, 8, 0.1) 40%, rgba(16, 11, 8, 0.4) 100%)",
              pointerEvents: "none"
            }}
          />

          {/* Top Postcard Bar: Sector Badge & Save Button */}
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              right: "12px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              zIndex: 2
            }}
          >
            <span
              style={{
                background: "rgba(16, 11, 8, 0.82)",
                backdropFilter: "blur(8px)",
                color: "var(--cream)",
                padding: "3px 10px",
                borderRadius: "var(--radius-pill)",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.04em",
                border: "1px solid var(--border-subtle)"
              }}
            >
              📍 {cafe.sector}
            </span>

            {/* Save Heart Button with Micro-Animation */}
            <motion.button
              type="button"
              onClick={handleSaveClick}
              whileTap={{ scale: 0.8 }}
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                background: saved ? "var(--terracotta)" : "rgba(16, 11, 8, 0.72)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "15px",
                color: saved ? "#ffffff" : "var(--cream)",
                transition: "background 0.2s ease, transform 0.2s ease",
                boxShadow: "0 4px 10px rgba(0,0,0,0.35)"
              }}
              title={saved ? "Remove from Little Coffee List" : "Save to Little Coffee List"}
              aria-label={saved ? "Remove from Little Coffee List" : "Save to Little Coffee List"}
            >
              {saved ? "❤️" : "🤍"}
            </motion.button>
          </div>

          {/* Bottom Floating Pill: Price & Cost */}
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              left: "12px",
              color: "var(--cream-muted)",
              fontSize: "11.5px",
              fontWeight: 500,
              zIndex: 2
            }}
          >
            <span
              style={{
                background: "rgba(16, 11, 8, 0.75)",
                backdropFilter: "blur(6px)",
                padding: "3px 8px",
                borderRadius: "var(--radius-xs)",
                border: "1px solid var(--border-subtle)"
              }}
            >
              {cafe.priceRange} · ₹{cafe.approxCostForTwo} for 2
            </span>
          </div>
        </div>

        {/* POSTCARD BODY */}
        <div
          style={{
            padding: "16px 16px 18px",
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "space-between"
          }}
        >
          <div>
            {/* Header: Name + Star Rating */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "8px",
                marginBottom: "6px"
              }}
            >
              <h3
                style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  fontFamily: "var(--font-serif)",
                  color: "var(--cream)",
                  lineHeight: 1.25
                }}
              >
                {cafe.name}
              </h3>

              <div
                style={{
                  fontSize: "11.5px",
                  fontWeight: 700,
                  color: "var(--gold)",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: "2px"
                }}
              >
                ★ {cafe.rating}
              </div>
            </div>

            {/* Trust Score Line */}
            <div style={{ marginBottom: "12px" }}>
              <TrustBadge cafe={cafe} size="small" />
            </div>

            {/* Editorial Highlight Quote if available */}
            {cafe.featuredQuote && (
              <p
                style={{
                  fontSize: "12px",
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  color: "var(--cream-muted)",
                  lineHeight: 1.4,
                  marginBottom: "12px",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden"
                }}
              >
                "{cafe.featuredQuote}"
              </p>
            )}

            {/* WHAT IT'S GOOD FOR & ONE THING TO KNOW */}
            <div
              style={{
                background: "rgba(16, 11, 8, 0.45)",
                borderRadius: "var(--radius-sm)",
                padding: "10px 11px",
                marginBottom: "12px",
                fontSize: "11.5px",
                border: "1px solid var(--border-subtle)"
              }}
            >
              {/* Positive */}
              <div
                style={{
                  color: "var(--trust-high)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "6px",
                  marginBottom: "4px",
                  fontWeight: 500
                }}
              >
                <span style={{ fontWeight: 700 }}>✓</span>
                <span style={{ color: "var(--cream)" }}>{topPositive}</span>
              </div>

              {/* Negative / Watch out */}
              <div
                style={{
                  color: "var(--accent-orange)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "6px",
                  fontWeight: 500
                }}
              >
                <span style={{ fontWeight: 700 }}>⚠️</span>
                <span style={{ color: "var(--cream-muted)" }}>{topNegative}</span>
              </div>
            </div>
          </div>

          {/* Vibe Tags Footer */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
              paddingTop: "6px",
              borderTop: "1px solid var(--border-subtle)"
            }}
          >
            {cafe.categories?.slice(0, 1).map((cat, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: "10.5px",
                  background: "rgba(224, 122, 56, 0.12)",
                  color: "var(--accent-orange)",
                  padding: "2px 7px",
                  borderRadius: "var(--radius-xs)",
                  fontWeight: 600,
                  letterSpacing: "0.02em"
                }}
              >
                {cat}
              </span>
            ))}

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
      </Link>
    </motion.div>
  );
}
