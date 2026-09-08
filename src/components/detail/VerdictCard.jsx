import React from "react";
import TrustBadge from "../common/TrustBadge";
import { calculateTrustScore } from "../../utils/trustScore";

export default function VerdictCard({ cafe }) {
  const verdict = cafe.verdict || {
    status: "Worth visiting",
    headline: "Well-regarded cafe with balanced offerings.",
    loved: cafe.strengths || [],
    disliked: cafe.weaknesses || []
  };

  const isLow = cafe.isLowTrust || verdict.status?.toLowerCase().includes("not recommended") || verdict.status?.toLowerCase().includes("think twice");

  return (
    <div
      style={{
        background: isLow 
          ? "linear-gradient(145deg, rgba(45, 18, 18, 0.9) 0%, rgba(26, 12, 12, 0.95) 100%)"
          : "linear-gradient(145deg, var(--bg-surface-elevated) 0%, #1a120c 100%)",
        border: isLow 
          ? "1px solid rgba(201, 59, 59, 0.45)" 
          : "1px solid var(--border-medium)",
        borderRadius: "var(--radius-xl)",
        padding: "32px",
        boxShadow: "var(--shadow-card)",
        marginBottom: "36px"
      }}
    >
      {/* Header Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "14px",
          marginBottom: "18px",
          borderBottom: "1px solid var(--border-subtle)",
          paddingBottom: "18px"
        }}
      >
        <div>
          <span className="label-editorial" style={{ color: isLow ? "#f87171" : "var(--accent-orange)" }}>
            <span>●</span> THE VERDICT
          </span>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 32px)",
              fontFamily: "var(--font-serif)",
              color: "var(--cream)",
              marginTop: "4px",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}
          >
            <span>☕</span>
            <span style={{ color: isLow ? "#f87171" : "var(--cream)" }}>
              {verdict.status.toUpperCase()}
            </span>
          </h2>
        </div>

        {calculateTrustScore(cafe).score !== null && (
          <TrustBadge cafe={cafe} size="large" />
        )}
      </div>

      {/* Editorial Headline Quote */}
      <p
        style={{
          fontSize: "17px",
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          lineHeight: 1.6,
          color: "var(--cream)",
          marginBottom: "28px",
          paddingLeft: "16px",
          borderLeft: isLow ? "3px solid #f87171" : "3px solid var(--accent-orange)"
        }}
      >
        "{verdict.headline}"
      </p>

      {/* Two Column Grid: Loved vs Disliked */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px"
        }}
      >
        {/* PEOPLE LOVED */}
        <div
          style={{
            background: "rgba(45, 164, 115, 0.08)",
            border: "1px solid rgba(45, 164, 115, 0.25)",
            borderRadius: "var(--radius-md)",
            padding: "20px"
          }}
        >
          <div
            style={{
              color: "var(--trust-high)",
              fontSize: "12px",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "14px",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            <span>✓</span> PEOPLE LOVED
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {verdict.loved?.map((item, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  fontSize: "13.5px",
                  color: "var(--cream)",
                  marginBottom: "8px",
                  lineHeight: 1.45
                }}
              >
                <span style={{ color: "var(--trust-high)", fontWeight: 700 }}>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* PEOPLE DISLIKED */}
        <div
          style={{
            background: "rgba(224, 122, 56, 0.08)",
            border: "1px solid rgba(224, 122, 56, 0.25)",
            borderRadius: "var(--radius-md)",
            padding: "20px"
          }}
        >
          <div
            style={{
              color: "var(--accent-orange)",
              fontSize: "12px",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "14px",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            <span>⚠️</span> PEOPLE DISLIKED / WATCH OUT
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {verdict.disliked?.map((item, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  fontSize: "13.5px",
                  color: "var(--cream-muted)",
                  marginBottom: "8px",
                  lineHeight: 1.45
                }}
              >
                <span style={{ color: "var(--accent-orange)", fontWeight: 700 }}>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
