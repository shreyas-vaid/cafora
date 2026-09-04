import React from "react";

export default function LowTrustWarning({ count }) {
  return (
    <div
      style={{
        margin: "24px 0 16px",
        background: "rgba(239, 68, 68, 0.12)",
        border: "1px solid rgba(239, 68, 68, 0.35)",
        borderRadius: "var(--radius-md)",
        padding: "16px 20px",
        display: "flex",
        alignItems: "center",
        gap: "14px",
        backdropFilter: "blur(12px)"
      }}
    >
      <div style={{ fontSize: "24px" }}>⚠️</div>
      <div>
        <div style={{ fontWeight: 700, color: "#f87171", fontSize: "15px", marginBottom: "2px" }}>
          Notice: {count} {count === 1 ? "cafe matches" : "cafes match"} your search with Low Trust Scores
        </div>
        <div style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.8)", lineHeight: 1.4 }}>
          These places are excluded from standard recommendations due to repeated visitor reports of service delays, inconsistent food quality, or inflated pricing. They are shown here only because you explicitly searched for them.
        </div>
      </div>
    </div>
  );
}
