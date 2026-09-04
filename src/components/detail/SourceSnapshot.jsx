import React from "react";

export default function SourceSnapshot({ sources }) {
  if (!sources) return null;

  const platforms = [
    { key: "google", name: "Google Maps", icon: "🗺️", color: "#4285F4" },
    { key: "zomato", name: "Zomato", icon: "🍽️", color: "#CB202D" },
    { key: "swiggy", name: "Swiggy Dineout", icon: "🛵", color: "#FC8019" },
    { key: "cafeFinder", name: "Cafora (Verified)", icon: "☕", color: "#e07a38" }
  ];

  return (
    <div
      style={{
        background: "var(--bg-surface-elevated)",
        border: "1px solid var(--border-medium)",
        borderRadius: "var(--radius-xl)",
        padding: "26px",
        marginBottom: "36px",
        boxShadow: "var(--shadow-card)"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "16px"
        }}
      >
        <h3 style={{ fontSize: "18px", color: "var(--cream)", fontFamily: "var(--font-serif)" }}>
          📊 Multi-Platform Cross Check
        </h3>
        <span
          style={{
            fontSize: "11px",
            background: "rgba(252, 248, 242, 0.08)",
            padding: "3px 8px",
            borderRadius: "4px",
            color: "var(--cream-faint)",
            letterSpacing: "0.04em"
          }}
        >
          Curated Source Snapshot
        </span>
      </div>

      <p style={{ fontSize: "13.5px", color: "var(--cream-muted)", marginBottom: "20px", lineHeight: 1.5 }}>
        Cafora cross-analyzes ratings and verified visitor reviews across major platforms to detect rating inflation and consistency.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "14px"
        }}
      >
        {platforms.map((plat) => {
          const data = sources[plat.key];
          if (!data) return null;

          return (
            <div
              key={plat.key}
              style={{
                background: "rgba(0, 0, 0, 0.25)",
                borderRadius: "var(--radius-md)",
                padding: "16px",
                border: plat.key === "cafeFinder" ? "1px solid rgba(245, 158, 11, 0.4)" : "1px solid rgba(255, 255, 255, 0.08)",
                position: "relative"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px", fontSize: "12px", color: "var(--text-muted)" }}>
                <span>{plat.icon}</span>
                <span style={{ fontWeight: 600 }}>{plat.name}</span>
              </div>

              <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                <span style={{ fontSize: "24px", fontWeight: 800, color: "#ffffff" }}>
                  ★ {data.rating || "N/A"}
                </span>
                <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>
                  / 5.0
                </span>
              </div>

              <div style={{ fontSize: "11px", color: "var(--text-secondary)", marginTop: "4px" }}>
                {plat.key === "cafeFinder" 
                  ? `${data.verifiedVisits || 0} verified visits`
                  : `${(data.reviews || 0).toLocaleString()} reviews`}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
