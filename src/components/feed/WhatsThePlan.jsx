import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SCENARIO_PLANS } from "../../utils/vibeEngine";

/**
 * WHAT'S THE PLAN?
 * The core scenario discovery card.
 * Tactile, playful, interactive, supporting multi-selection.
 */
export default function WhatsThePlan({
  selectedPlans = [],
  onTogglePlan,
  onResetPlans
}) {
  const isAnySelected = selectedPlans.length > 0;

  // Selected plan objects
  const activePlanObjects = SCENARIO_PLANS.filter((p) => selectedPlans.includes(p.id));

  return (
    <section
      id="whats-the-plan"
      style={{
        width: "100%",
        margin: "12px 0 28px 0"
      }}
    >
      <div
        style={{
          background: "linear-gradient(180deg, rgba(37, 26, 18, 0.95) 0%, rgba(22, 15, 11, 0.98) 100%)",
          border: "1px solid var(--border-medium)",
          borderRadius: "var(--radius-xl)",
          padding: "28px 24px",
          boxShadow: "var(--shadow-card)",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Subtle decorative glow in top-right */}
        <div
          style={{
            position: "absolute",
            top: "-50px",
            right: "-50px",
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(224, 122, 56, 0.15) 0%, transparent 70%)",
            pointerEvents: "none"
          }}
        />

        {/* Section Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "20px"
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  background: "rgba(224, 122, 56, 0.15)",
                  color: "var(--accent-orange)",
                  padding: "3px 10px",
                  borderRadius: "var(--radius-pill)",
                  fontSize: "11px",
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase"
                }}
              >
                ✦ SCENARIO DISCOVERY
              </span>
              {isAnySelected && (
                <span
                  style={{
                    fontSize: "12px",
                    color: "var(--cream-faint)",
                    fontWeight: 500
                  }}
                >
                  ({selectedPlans.length} active {selectedPlans.length === 1 ? "vibe" : "vibes"})
                </span>
              )}
            </div>

            <h2
              style={{
                fontSize: "clamp(24px, 3.8vw, 34px)",
                fontFamily: "var(--font-serif)",
                color: "var(--cream)",
                marginTop: "6px",
                lineHeight: 1.15
              }}
            >
              What's the plan?
            </h2>

            <p
              style={{
                color: "var(--cream-muted)",
                fontSize: "14.5px",
                marginTop: "4px"
              }}
            >
              Tell us the vibe. We'll find the place.
            </p>
          </div>

          {/* Reset Action */}
          {isAnySelected && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              type="button"
              onClick={onResetPlans}
              style={{
                background: "rgba(252, 248, 242, 0.08)",
                border: "1px solid var(--border-medium)",
                color: "var(--cream)",
                padding: "7px 16px",
                borderRadius: "var(--radius-pill)",
                fontSize: "12px",
                fontWeight: 600,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                transition: "all 0.2s ease"
              }}
              whileHover={{ background: "rgba(224, 122, 56, 0.2)", borderColor: "var(--accent-orange)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span>✕</span>
              <span>Reset vibes</span>
            </motion.button>
          )}
        </div>

        {/* 8 Tactile Vibe Scenario Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(136px, 1fr))",
            gap: "10px"
          }}
        >
          {SCENARIO_PLANS.map((plan) => {
            const isSelected = selectedPlans.includes(plan.id);

            return (
              <motion.button
                key={plan.id}
                type="button"
                onClick={() => onTogglePlan(plan.id)}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  position: "relative",
                  background: isSelected
                    ? `linear-gradient(135deg, ${plan.color}26 0%, rgba(37, 26, 18, 0.9) 100%)`
                    : "rgba(252, 248, 242, 0.04)",
                  border: isSelected
                    ? `1.5px solid ${plan.color}`
                    : "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  padding: "14px 10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  cursor: "pointer",
                  textAlign: "center",
                  outline: "none",
                  boxShadow: isSelected
                    ? `0 8px 20px -4px ${plan.color}33`
                    : "none",
                  transition: "border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease"
                }}
                aria-pressed={isSelected}
              >
                {/* Visual Checkmark indicator if selected */}
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    style={{
                      position: "absolute",
                      top: "6px",
                      right: "6px",
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background: plan.color,
                      color: "#100b08",
                      fontSize: "10px",
                      fontWeight: 900,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    ✓
                  </motion.div>
                )}

                {/* Scenario Icon */}
                <span
                  style={{
                    fontSize: "26px",
                    lineHeight: 1,
                    filter: isSelected ? "drop-shadow(0 2px 8px rgba(0,0,0,0.3))" : "none"
                  }}
                >
                  {plan.icon}
                </span>

                {/* Scenario Label */}
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: isSelected ? 800 : 600,
                    color: isSelected ? "#ffffff" : "var(--cream-muted)",
                    letterSpacing: "-0.01em"
                  }}
                >
                  {plan.label}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Confirmation Banner */}
        <AnimatePresence>
          {isAnySelected && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.25 }}
              style={{
                background: "rgba(224, 122, 56, 0.12)",
                border: "1px solid rgba(224, 122, 56, 0.3)",
                borderRadius: "var(--radius-sm)",
                padding: "10px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "10px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "16px" }}>🎯</span>
                <div>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--accent-orange)" }}>
                    Okay, we know the vibe:
                  </span>
                  <span style={{ fontSize: "13px", color: "var(--cream)", marginLeft: "6px" }}>
                    {activePlanObjects.map((p) => `${p.icon} ${p.label}`).join(" + ")}
                  </span>
                </div>
              </div>

              <span style={{ fontSize: "12px", color: "var(--cream-muted)", fontStyle: "italic" }}>
                Prioritizing top spots matched for you
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
