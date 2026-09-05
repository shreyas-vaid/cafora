import React from "react";
import { motion } from "framer-motion";

/**
 * VibeScoreBar Component
 * Renders individual or grouped CAFORA VIBE metrics with visual score indicators.
 */
export default function VibeScoreBar({ label, icon, score, max = 10, color = "#e07a38", animate = true }) {
  const percentage = Math.min(100, Math.max(0, (score / max) * 100));

  return (
    <div style={{ marginBottom: "10px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "5px",
          fontSize: "12.5px"
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--cream)", fontWeight: 600 }}>
          <span>{icon}</span>
          <span>{label}</span>
        </span>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 800,
            fontSize: "13px",
            color: color
          }}
        >
          {score.toFixed(1)}
        </span>
      </div>

      {/* Track */}
      <div
        style={{
          width: "100%",
          height: "6px",
          background: "rgba(252, 248, 242, 0.08)",
          borderRadius: "999px",
          overflow: "hidden"
        }}
      >
        <motion.div
          initial={animate ? { width: 0 } : { width: `${percentage}%` }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            height: "100%",
            background: `linear-gradient(90deg, ${color}aa 0%, ${color} 100%)`,
            borderRadius: "999px"
          }}
        />
      </div>
    </div>
  );
}

/**
 * Compact preview of the top 3-4 Vibe Scores for Cafe Cards
 */
export function VibeScoresCompact({ scores }) {
  if (!scores) return null;

  const items = [
    { label: "Coffee", icon: "☕", score: scores.coffee, color: "#e07a38" },
    { label: "Aesthetic", icon: "📸", score: scores.aesthetic, color: "#c084fc" },
    { label: "Work", icon: "💻", score: scores.work, color: "#38bdf8" },
    { label: "Vibe", icon: "💬", score: scores.conversation, color: "#fb923c" }
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "6px",
        background: "rgba(16, 11, 8, 0.55)",
        padding: "8px 10px",
        borderRadius: "var(--radius-sm)",
        border: "1px solid var(--border-subtle)"
      }}
    >
      {items.map((item, idx) => (
        <div key={idx} style={{ textAlign: "center" }}>
          <div style={{ fontSize: "11px", color: "var(--cream-faint)", display: "flex", alignItems: "center", justifyContent: "center", gap: "2px" }}>
            <span>{item.icon}</span>
            <span style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.02em" }}>{item.label}</span>
          </div>
          <div style={{ fontSize: "13px", fontWeight: 800, color: item.color, marginTop: "2px" }}>
            {item.score.toFixed(1)}
          </div>
        </div>
      ))}
    </div>
  );
}
