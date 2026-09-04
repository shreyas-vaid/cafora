import React from "react";

/**
 * DECORATIVE CHANDIGARH GEOGRAPHIC MOTIF
 * Subtle grid & sector coordinates reflecting Le Corbusier's famous city layout.
 * Used as a background watermark / subtle accent on the homepage.
 */
export default function ChandigarhGraphic({ opacity = 0.12, width = "100%", height = 180 }) {
  return (
    <div
      style={{
        position: "relative",
        width: width,
        height: height,
        overflow: "hidden",
        pointerEvents: "none",
        userSelect: "none"
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity }}
      >
        {/* Subtle grid lines */}
        <line x1="50" y1="20" x2="750" y2="20" stroke="#fcf8f2" strokeWidth="1" strokeDasharray="4 6" />
        <line x1="50" y1="80" x2="750" y2="80" stroke="#fcf8f2" strokeWidth="1" />
        <line x1="50" y1="140" x2="750" y2="140" stroke="#fcf8f2" strokeWidth="1" strokeDasharray="4 6" />
        
        {/* Vertical arterial sector roads */}
        <line x1="120" y1="10" x2="120" y2="190" stroke="#fcf8f2" strokeWidth="1" />
        <line x1="280" y1="10" x2="280" y2="190" stroke="#fcf8f2" strokeWidth="1.5" />
        <line x1="440" y1="10" x2="440" y2="190" stroke="#fcf8f2" strokeWidth="1" />
        <line x1="600" y1="10" x2="600" y2="190" stroke="#fcf8f2" strokeWidth="1.5" />

        {/* Diagonal Le Corbusier V3 boulevard line */}
        <path d="M 60 180 L 260 40 L 520 160 L 740 30" stroke="#e07a38" strokeWidth="1.5" strokeDasharray="3 4" />

        {/* Sector labels */}
        <text x="135" y="65" fill="#fcf8f2" fontSize="10" fontFamily="sans-serif" letterSpacing="2">SEC 17</text>
        <circle cx="120" cy="80" r="3.5" fill="#e07a38" />

        <text x="295" y="65" fill="#fcf8f2" fontSize="10" fontFamily="sans-serif" letterSpacing="2">SEC 8</text>
        <circle cx="280" cy="80" r="3.5" fill="#d4af37" />

        <text x="455" y="65" fill="#fcf8f2" fontSize="10" fontFamily="sans-serif" letterSpacing="2">SEC 35</text>
        <circle cx="440" cy="80" r="3.5" fill="#c86142" />

        <text x="615" y="65" fill="#fcf8f2" fontSize="10" fontFamily="sans-serif" letterSpacing="2">IND. AREA</text>
        <circle cx="600" cy="80" r="3.5" fill="#a799b7" />

        {/* Geographic Coordinates Stamp */}
        <text x="50" y="180" fill="#e07a38" fontSize="9" fontFamily="monospace" letterSpacing="1.5">
          CHANDIGARH • 30.7333° N, 76.7794° E
        </text>
      </svg>
    </div>
  );
}
