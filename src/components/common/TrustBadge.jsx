import React, { useState, useEffect } from "react";
import { calculateTrustScore } from "../../utils/trustScore";

/**
 * Animated Viewport Trust Badge
 * Counts from 0 to actual trust score on mount.
 * 90-100: VERY TRUSTED
 * 80-89: TRUSTED
 * 65-79: MIXED
 * <65: THINK TWICE
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

  useEffect(() => {
    let start = 0;
    const end = trust.score;
    if (end === 0) return;
    const duration = 650;
    const stepTime = Math.max(16, Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 2;
      if (start >= end) {
        setDisplayScore(end);
        clearInterval(timer);
      } else {
        setDisplayScore(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [trust.score]);

  const isSmall = size === "small";
  const isLarge = size === "large";

  // Label formatting
  let tierLabel = "TRUSTED";
  if (trust.score >= 90) tierLabel = "VERY TRUSTED";
  else if (trust.score >= 80) tierLabel = "TRUSTED";
  else if (trust.score >= 65) tierLabel = "MIXED";
  else tierLabel = "THINK TWICE";

  return (
    <div 
      className={`trust-badge-container ${trust.badgeClass}`}
      style={{
        padding: isSmall ? "3px 8px" : isLarge ? "6px 14px" : "4px 10px",
        fontSize: isSmall ? "11px" : isLarge ? "14px" : "12px",
        borderRadius: "var(--radius-sm)",
        display: "inline-flex",
        alignItems: "center",
        gap: "6px"
      }}
      title={`Trust Score: ${trust.score}/100 • ${tierLabel} based on review veracity`}
    >
      <span style={{ fontSize: isSmall ? "11px" : "13px" }}>
        {trust.score >= 80 ? "🛡️" : "⚠️"}
      </span>
      <span style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.02em" }}>
        <strong style={{ fontSize: isLarge ? "16px" : "13px" }}>{displayScore}</strong>
        <span style={{ opacity: 0.8, fontSize: "0.85em", marginLeft: "3px", fontWeight: 700 }}>
          TRUST
        </span>
      </span>

      {isLarge && (
        <span
          style={{
            fontSize: "11px",
            opacity: 0.9,
            marginLeft: "4px",
            borderLeft: "1px solid rgba(255,255,255,0.2)",
            paddingLeft: "8px",
            fontWeight: 700,
            letterSpacing: "0.05em"
          }}
        >
          {tierLabel}
        </span>
      )}
    </div>
  );
}
