import React from "react";

/**
 * WhyThisCafe Component
 * Explains clearly WHY CAFORA recommends this cafe.
 * Intelligent, truthful, concise, and personality-driven.
 */
export default function WhyThisCafe({ reasons = [], compact = false }) {
  if (!reasons || reasons.length === 0) return null;

  return (
    <div
      style={{
        background: "rgba(224, 122, 56, 0.07)",
        border: "1px solid rgba(224, 122, 56, 0.22)",
        borderRadius: "var(--radius-sm)",
        padding: compact ? "10px 12px" : "14px 18px",
        margin: compact ? "10px 0" : "18px 0"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "8px"
        }}
      >
        <span style={{ fontSize: "12px", color: "var(--accent-orange)" }}>✦</span>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: compact ? "10.5px" : "11.5px",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            color: "var(--accent-orange)"
          }}
        >
          WHY CAFORA PICKED THIS
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {reasons.map((reason, idx) => (
          <div
            key={idx}
            style={{
              fontSize: compact ? "12px" : "13px",
              color: "var(--cream-muted)",
              lineHeight: 1.4,
              display: "flex",
              alignItems: "flex-start",
              gap: "6px"
            }}
          >
            <span style={{ color: "var(--accent-orange)", fontWeight: 700, flexShrink: 0 }}>•</span>
            <span style={{ color: "var(--cream)" }}>{reason}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
