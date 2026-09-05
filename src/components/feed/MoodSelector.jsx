import React from "react";
import { motion } from "framer-motion";
import { MOODS_LIST } from "../../utils/vibeEngine";

/**
 * "WHAT'S THE MOOD?"
 * Personality-driven multi-vibe selection.
 * Allows 1 or 2-3 compatible vibes, subtly animated, tactile, and clear.
 */
export default function MoodSelector({
  activeMoods = [],
  onToggleMood,
  onResetMoods
}) {
  const isAnySelected = activeMoods.length > 0;

  return (
    <div style={{ width: "100%", margin: "28px 0 20px" }}>
      {/* Section Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "16px",
          flexWrap: "wrap",
          gap: "10px"
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span className="label-editorial">
              <span>●</span> WHAT'S THE MOOD?
            </span>
            {isAnySelected && (
              <span
                style={{
                  fontSize: "12px",
                  color: "var(--accent-orange)",
                  fontWeight: 700
                }}
              >
                • {activeMoods.length} {activeMoods.length === 1 ? "vibe" : "vibes"} active
              </span>
            )}
          </div>
          <h2
            style={{
              fontSize: "clamp(22px, 3.2vw, 28px)",
              color: "var(--cream)",
              marginTop: "4px",
              fontFamily: "var(--font-serif)",
              letterSpacing: "-0.01em"
            }}
          >
            Pick a vibe for right now.
          </h2>
        </div>

        {isAnySelected && (
          <button
            id="reset-mood-btn"
            type="button"
            onClick={onResetMoods}
            style={{
              background: "rgba(252, 248, 242, 0.06)",
              border: "1px solid var(--border-medium)",
              color: "var(--cream)",
              fontSize: "12px",
              fontWeight: 600,
              cursor: "pointer",
              padding: "6px 14px",
              borderRadius: "var(--radius-pill)",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              transition: "all 0.15s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent-orange)";
              e.currentTarget.style.color = "var(--accent-orange)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-medium)";
              e.currentTarget.style.color = "var(--cream)";
            }}
          >
            <span>✕</span>
            <span>Reset Mood (Show All)</span>
          </button>
        )}
      </div>

      {/* Responsive Mood Card Grid (12 Moods) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "12px"
        }}
      >
        {MOODS_LIST.map((mood) => {
          const isSelected = activeMoods.includes(mood.id) || (mood.id === "good-coffee" && activeMoods.includes("coffee"));

          return (
            <motion.div
              key={mood.id}
              id={`mood-card-${mood.id}`}
              whileHover={{ y: -3, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onToggleMood(mood.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onToggleMood(mood.id);
                }
              }}
              style={{
                cursor: "pointer",
                padding: "16px 18px",
                borderRadius: "var(--radius-md)",
                background: isSelected
                  ? "var(--bg-surface-elevated)"
                  : "var(--bg-surface-translucent)",
                border: isSelected
                  ? `1.5px solid ${mood.accent}`
                  : "1px solid var(--border-subtle)",
                boxShadow: isSelected
                  ? `0 8px 24px -6px ${mood.accent}33, var(--shadow-card)`
                  : "0 4px 14px rgba(0,0,0,0.25)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                display: "flex",
                alignItems: "center",
                gap: "14px",
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease"
              }}
              aria-pressed={isSelected}
              aria-label={`Select vibe: ${mood.title}`}
            >
              {/* Selected subtle glowing indicator line */}
              {isSelected && (
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "4px",
                    background: mood.accent
                  }}
                />
              )}

              {/* Mood Icon */}
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: isSelected
                    ? `${mood.accent}25`
                    : "rgba(252, 248, 242, 0.05)",
                  border: isSelected
                    ? `1px solid ${mood.accent}66`
                    : "1px solid var(--border-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  flexShrink: 0
                }}
              >
                {mood.icon}
              </div>

              {/* Mood Text */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    color: isSelected ? "#ffffff" : "var(--cream)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <span>{mood.title}</span>
                  {isSelected && (
                    <span
                      style={{
                        color: mood.accent,
                        fontSize: "12px",
                        fontWeight: 900
                      }}
                    >
                      ✓
                    </span>
                  )}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: isSelected ? "var(--cream-muted)" : "var(--cream-faint)",
                    lineHeight: 1.35,
                    marginTop: "2px",
                    fontStyle: "italic"
                  }}
                >
                  "{mood.tagline}"
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
