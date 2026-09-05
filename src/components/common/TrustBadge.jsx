import React, { useState, useEffect, useRef } from "react";
import { calculateTrustScore } from "../../utils/trustScore";

/**
 * Animated Viewport Trust Badge
 * Features:
 * - Deterministic Trust Score (97 TRUST)
 * - Interactive ⓘ icon with concise tooltip popover
 * - Respects hierarchy: supports rating without dominating cafe name
 */
export default function TrustBadge({ cafe, scoreOverride, size = "normal" }) {
  const trust = scoreOverride !== undefined 
    ? {
        score: scoreOverride,
        badgeClass: scoreOverride >= 90 ? "trust-badge-high" : scoreOverride >= 80 ? "trust-badge-good" : scoreOverride >= 65 ? "trust-badge-mixed" : "trust-badge-low",
        label: scoreOverride >= 90 ? "VERY TRUSTED" : scoreOverride >= 80 ? "TRUSTED" : scoreOverride >= 65 ? "MIXED" : "THINK TWICE",
        confidence: "High"
      }
    : calculateTrustScore(cafe);

  const [displayScore, setDisplayScore] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef(null);

  useEffect(() => {
    let start = 0;
    const end = trust.score;
    if (end === 0) return;
    const duration = 500;
    const stepTime = Math.max(16, Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 3;
      if (start >= end) {
        setDisplayScore(end);
        clearInterval(timer);
      } else {
        setDisplayScore(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [trust.score]);

  // Close tooltip on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (tooltipRef.current && !tooltipRef.current.contains(e.target)) {
        setShowTooltip(false);
      }
    };
    if (showTooltip) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [showTooltip]);

  const isSmall = size === "small";
  const isLarge = size === "large";

  let tierLabel = "TRUSTED";
  if (trust.score >= 90) tierLabel = "VERY TRUSTED";
  else if (trust.score >= 80) tierLabel = "TRUSTED";
  else if (trust.score >= 65) tierLabel = "MIXED";
  else tierLabel = "THINK TWICE";

  return (
    <div
      ref={tooltipRef}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center"
      }}
    >
      <div 
        className={`trust-badge-container ${trust.badgeClass}`}
        style={{
          padding: isSmall ? "3px 8px" : isLarge ? "5px 12px" : "4px 10px",
          fontSize: isSmall ? "11px" : isLarge ? "13px" : "12px",
          borderRadius: "var(--radius-sm)",
          display: "inline-flex",
          alignItems: "center",
          gap: "5px",
          position: "relative"
        }}
      >
        <span style={{ fontSize: isSmall ? "11px" : "12.5px" }}>
          {trust.score >= 80 ? "🛡️" : "⚠️"}
        </span>
        <span style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.02em" }}>
          <strong style={{ fontSize: isLarge ? "14px" : "12px" }}>{displayScore}</strong>
          <span style={{ opacity: 0.85, fontSize: "0.85em", marginLeft: "3px", fontWeight: 700 }}>
            TRUST
          </span>
        </span>

        {/* Subtle Info Icon */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setShowTooltip(!showTooltip);
          }}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          style={{
            background: "transparent",
            border: "none",
            color: "currentColor",
            opacity: 0.7,
            cursor: "pointer",
            fontSize: "11px",
            padding: "0 2px",
            lineHeight: 1,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          aria-label="What does CAFORA Trust mean?"
        >
          ⓘ
        </button>

        {isLarge && (
          <span
            style={{
              fontSize: "10.5px",
              opacity: 0.9,
              marginLeft: "4px",
              borderLeft: "1px solid rgba(255,255,255,0.2)",
              paddingLeft: "7px",
              fontWeight: 700,
              letterSpacing: "0.04em"
            }}
          >
            {tierLabel}
          </span>
        )}
      </div>

      {/* Trust Tooltip Popover */}
      {showTooltip && (
        <div
          style={{
            position: "absolute",
            bottom: "calc(100% + 8px)",
            left: "0",
            zIndex: 100,
            width: "240px",
            background: "rgba(22, 15, 11, 0.98)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid var(--border-prominent)",
            borderRadius: "var(--radius-sm)",
            padding: "10px 12px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
            fontSize: "11px",
            color: "var(--cream)",
            lineHeight: 1.45,
            pointerEvents: "none"
          }}
        >
          <div style={{ fontWeight: 700, color: "var(--accent-orange)", marginBottom: "4px" }}>
            🛡️ CAFORA Trust ({trust.score}/100)
          </div>
          CAFORA Trust measures how confidently we can recommend this place based on review consistency, source agreement, recency and available verification.
        </div>
      )}
    </div>
  );
}
