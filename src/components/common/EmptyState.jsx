import React from "react";

export default function EmptyState({ title = "No cafes found", message = "Try searching for a different vibe, sector, or budget.", onReset }) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "60px 20px",
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: "var(--radius-lg)",
        border: "1px dashed rgba(255, 255, 255, 0.18)",
        backdropFilter: "blur(14px)",
        margin: "40px auto",
        maxWidth: "540px"
      }}
    >
      <div style={{ fontSize: "44px", marginBottom: "16px" }}>☕✨</div>
      <h3 style={{ fontSize: "22px", color: "#ffffff", marginBottom: "8px" }}>{title}</h3>
      <p style={{ color: "var(--text-secondary)", fontSize: "14px", marginBottom: "24px", lineHeight: 1.5 }}>
        {message}
      </p>
      {onReset && (
        <button
          type="button"
          onClick={onReset}
          className="btn-primary"
          style={{ margin: "0 auto" }}
        >
          Reset All Filters
        </button>
      )}
    </div>
  );
}
