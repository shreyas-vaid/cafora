import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TrustBadge from "../common/TrustBadge";
import { isCafeSaved, toggleSaveCafe } from "../../utils/storage";

export default function FeaturedCafe({ cafe, onToggleSave }) {
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

  const topPositives = cafe.strengths?.slice(0, 3) || cafe.verdict?.loved?.slice(0, 3) || [];
  const topNegative = cafe.weaknesses?.[0] || cafe.verdict?.disliked?.[0] || "Can be busy on weekends";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      style={{
        width: "100%",
        marginBottom: "36px"
      }}
    >
      <div style={{ marginBottom: "12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span className="label-editorial">
          <span>★</span> CAFÉ OF THE MOMENT
        </span>
        <span className="label-editorial-muted">
          EDITOR'S SPOTLIGHT • {cafe.sector}
        </span>
      </div>

      <Link
        to={`/cafe/${cafe.id}`}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "0",
          background: "var(--bg-surface-elevated)",
          borderRadius: "var(--radius-xl)",
          border: "1px solid var(--border-medium)",
          overflow: "hidden",
          textDecoration: "none",
          color: "inherit",
          boxShadow: "var(--shadow-float)",
          transition: "border-color 0.25s ease, transform 0.25s ease"
        }}
      >
        {/* Left / Top: Editorial Large Image */}
        <div
          style={{
            position: "relative",
            minHeight: "360px",
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
              top: "18px",
              left: "18px",
              right: "18px",
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
                padding: "6px 14px",
                borderRadius: "var(--radius-pill)",
                fontSize: "12px",
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
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: saved ? "var(--terracotta)" : "rgba(16, 11, 8, 0.75)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "17px",
                color: saved ? "#ffffff" : "var(--cream)",
                transition: "all 0.2s ease"
              }}
              title={saved ? "Remove from Saved" : "Save to Little Coffee List"}
              aria-label={saved ? "Remove from Saved" : "Save to Little Coffee List"}
            >
              {saved ? "❤️" : "🤍"}
            </motion.button>
          </div>

          {/* Bottom highlight label */}
          <div
            style={{
              position: "absolute",
              bottom: "18px",
              left: "18px",
              color: "var(--cream-muted)",
              fontSize: "12px"
            }}
          >
            <span style={{ background: "rgba(16, 11, 8, 0.8)", padding: "4px 10px", borderRadius: "6px" }}>
              Approx ₹{cafe.approxCostForTwo} for two · {cafe.priceRange}
            </span>
          </div>
        </div>

        {/* Right: Editorial Information & Truth Layer */}
        <div
          style={{
            padding: "36px 32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "linear-gradient(145deg, var(--bg-surface-elevated) 0%, #1a120c 100%)"
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
                marginBottom: "8px",
                flexWrap: "wrap"
              }}
            >
              <span className="label-editorial" style={{ color: "var(--terracotta)" }}>
                {cafe.categories?.[0] || "Specialty Coffee"}
              </span>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <TrustBadge cafe={cafe} size="normal" />
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "var(--gold)",
                    background: "rgba(212, 175, 55, 0.12)",
                    padding: "4px 10px",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid rgba(212, 175, 55, 0.25)"
                  }}
                >
                  ★ {cafe.rating}
                </span>
              </div>
            </div>

            <h2
              style={{
                fontSize: "clamp(26px, 3.5vw, 36px)",
                fontFamily: "var(--font-serif)",
                color: "var(--cream)",
                lineHeight: 1.15,
                marginBottom: "14px"
              }}
            >
              {cafe.name}
            </h2>

            {/* Editorial Quote */}
            <p
              style={{
                fontSize: "15px",
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                lineHeight: 1.6,
                color: "var(--cream-muted)",
                marginBottom: "24px",
                paddingLeft: "14px",
                borderLeft: "2px solid var(--accent-orange)"
              }}
            >
              "{cafe.featuredQuote || cafe.verdict?.headline || 'Great coffee, calm mornings and enough space to actually sit for a while.'}"
            </p>

            {/* Good For & Watch Out Attributes */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
                background: "rgba(16, 11, 8, 0.5)",
                borderRadius: "var(--radius-md)",
                padding: "16px",
                border: "1px solid var(--border-subtle)",
                marginBottom: "24px"
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    color: "var(--trust-high)",
                    marginBottom: "8px",
                    textTransform: "uppercase"
                  }}
                >
                  ✓ GOOD FOR
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  {topPositives.map((pos, idx) => (
                    <span key={idx} style={{ fontSize: "12.5px", color: "var(--cream)" }}>
                      • {pos}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    color: "var(--accent-orange)",
                    marginBottom: "8px",
                    textTransform: "uppercase"
                  }}
                >
                  ⚠️ WATCH OUT
                </div>
                <div style={{ fontSize: "12.5px", color: "var(--cream-muted)", lineHeight: 1.4 }}>
                  {topNegative}
                </div>
              </div>
            </div>
          </div>

          {/* Card Footer Button */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "12px", borderTop: "1px solid var(--border-subtle)" }}>
            <span style={{ fontSize: "12px", color: "var(--cream-faint)" }}>
              Based on {cafe.reviewCount} verified visits & multi-source ratings
            </span>

            <span
              style={{
                color: "var(--accent-orange)",
                fontSize: "13px",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: "6px"
              }}
            >
              Explore Profile <span>→</span>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
