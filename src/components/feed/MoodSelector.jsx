import React from "react";
import { motion } from "framer-motion";

export const MOODS = [
  {
    id: "good-coffee",
    title: "GOOD COFFEE",
    tagline: "I care about the coffee.",
    icon: "☕",
    category: "Specialty Coffee",
    accent: "#e07a38",
    rotation: -1.2
  },
  {
    id: "work",
    title: "GET WORK DONE",
    tagline: "Give me a table and Wi-Fi.",
    icon: "💻",
    category: "Work Friendly",
    accent: "#38bdf8",
    rotation: 1.5
  },
  {
    id: "date",
    title: "DATE NIGHT",
    tagline: "Something a little special.",
    icon: "❤️",
    category: "Date Spots",
    accent: "#f43f5e",
    rotation: -0.8
  },
  {
    id: "quiet",
    title: "QUIET CORNER",
    tagline: "I want to disappear for a while.",
    icon: "🌿",
    category: "Quiet / Reading",
    accent: "#34d399",
    rotation: 1.2
  },
  {
    id: "pretty",
    title: "SOMEWHERE PRETTY",
    tagline: "Yes, I am taking pictures.",
    icon: "📸",
    category: "Aesthetic & Photo Spots",
    accent: "#a799b7",
    rotation: -1.5
  },
  {
    id: "sweet-tooth",
    title: "SWEET TOOTH",
    tagline: "Coffee is not enough.",
    icon: "🍰",
    category: "Bakery & Desserts",
    accent: "#fbbf24",
    rotation: 1.0
  },
  {
    id: "gang",
    title: "WITH THE GANG",
    tagline: "Bring everyone.",
    icon: "👯",
    category: "Social & Lively",
    accent: "#fb923c",
    rotation: -1.0
  },
  {
    id: "late-night",
    title: "LATE NIGHT",
    tagline: "I am not going home yet.",
    icon: "🌙",
    category: "Late Night",
    accent: "#818cf8",
    rotation: 1.4
  }
];

export default function MoodSelector({ activeCategory, onSelectCategory }) {
  const handleMoodClick = (mood) => {
    if (activeCategory === mood.category) {
      onSelectCategory("all"); // Toggle off
    } else {
      onSelectCategory(mood.category);
    }
  };

  return (
    <div style={{ width: "100%", margin: "32px 0 20px" }}>
      {/* Editorial Section Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "16px",
          flexWrap: "wrap",
          gap: "8px"
        }}
      >
        <div>
          <span className="label-editorial">
            <span>●</span> WHAT'S THE MOOD?
          </span>
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 26px)",
              color: "var(--cream)",
              marginTop: "4px",
              fontFamily: "var(--font-serif)",
              letterSpacing: "-0.01em"
            }}
          >
            Pick a vibe for right now.
          </h2>
        </div>

        {activeCategory !== "all" && (
          <button
            type="button"
            onClick={() => onSelectCategory("all")}
            style={{
              background: "transparent",
              border: "none",
              color: "var(--accent-orange)",
              fontSize: "12px",
              fontWeight: 600,
              cursor: "pointer",
              textDecoration: "underline",
              padding: "4px 8px"
            }}
          >
            Reset Mood (Show All)
          </button>
        )}
      </div>

      {/* Responsive Mood Card Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "14px"
        }}
      >
        {MOODS.map((mood) => {
          const isSelected = activeCategory === mood.category;

          return (
            <motion.div
              key={mood.id}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleMoodClick(mood)}
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
                  ? `0 10px 24px -6px ${mood.accent}33, var(--shadow-card)`
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
            >
              {/* Selected subtle glowing bar */}
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
                    ? `${mood.accent}22`
                    : "rgba(252, 248, 242, 0.05)",
                  border: isSelected
                    ? `1px solid ${mood.accent}55`
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
                    gap: "6px"
                  }}
                >
                  {mood.title}
                  {isSelected && (
                    <span style={{ color: mood.accent, fontSize: "11px" }}>✓</span>
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
