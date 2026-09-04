import React from "react";
import { motion } from "framer-motion";

/**
 * CAFÉ FINDER BRAND SYMBOL
 * Distinctive brand mark: Stylized Coffee Bean with an integrated 8-point Discovery Star & Compass
 * Works at navbar size (34px), card size (24px), loading size (64px), and hero/empty-state size (80px+).
 */
export default function CafeFinderLogo({
  size = 36,
  showText = false,
  showSubtitle = true,
  animate = true,
  className = ""
}) {
  return (
    <div
      className={`brand-symbol-container ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        textDecoration: "none"
      }}
    >
      {/* Brand Icon SVG */}
      <motion.div
        className="brand-symbol-icon"
        style={{
          width: size,
          height: size,
          flexShrink: 0,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        whileHover={animate ? { rotate: 8, scale: 1.08 } : undefined}
        transition={{ type: "spring", stiffness: 350, damping: 20 }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Bean Gradient: Deep Terracotta to Warm Amber Orange */}
            <linearGradient id="beanGradient" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#e07a38" />
              <stop offset="60%" stopColor="#c86142" />
              <stop offset="100%" stopColor="#873922" />
            </linearGradient>

            {/* Discovery Star Glow Gradient */}
            <linearGradient id="starGradient" x1="16" y1="16" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fff8ee" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>

            {/* Ambient Shadow Filter */}
            <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#c86142" floodOpacity="0.35" />
            </filter>
          </defs>

          {/* Outer Rounded Shield / Compass Backplate */}
          <rect
            x="3"
            y="3"
            width="42"
            height="42"
            rx="12"
            fill="#1e150f"
            stroke="rgba(252, 248, 242, 0.15)"
            strokeWidth="1.5"
            filter="url(#subtleGlow)"
          />

          {/* Stylized Coffee Bean Outer Silhouette */}
          <path
            d="M 14 18 C 11 25, 14 34, 24 37 C 34 40, 39 31, 36 24 C 33 17, 28 11, 20 12 C 16 12.5, 14.5 15, 14 18 Z"
            fill="url(#beanGradient)"
            opacity="0.95"
          />

          {/* Stylized S-curve Crease of the Coffee Bean */}
          <path
            d="M 21 13 C 24 18, 19 23, 23 29 C 25 32, 27 35, 27 36"
            stroke="#100b08"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Discovery Compass Star in the core of the bean */}
          <path
            d="M 25 19 L 26.2 22.8 L 30 24 L 26.2 25.2 L 25 29 L 23.8 25.2 L 20 24 L 23.8 22.8 Z"
            fill="url(#starGradient)"
          />

          {/* Subtle tiny navigational coordinates mark */}
          <circle cx="37" cy="11" r="1.5" fill="#d4af37" opacity="0.8" />
        </svg>
      </motion.div>

      {/* Typography if requested */}
      {showText && (
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "21px",
              fontWeight: 700,
              letterSpacing: "0.04em",
              color: "var(--cream)"
            }}
          >
            CAFORA
          </div>
          {showSubtitle && (
            <div
              style={{
                fontSize: "9.5px",
                fontFamily: "var(--font-sans)",
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                color: "var(--accent-orange)",
                fontWeight: 700,
                marginTop: "3px"
              }}
            >
              CHANDIGARH
            </div>
          )}
        </div>
      )}
    </div>
  );
}
