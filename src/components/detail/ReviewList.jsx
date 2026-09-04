import React from "react";

/**
 * CITY JOURNAL / REVIEW NOTEBOOK
 * Visual style: Editorial notebook format with verified badges, dish callouts, and genuine observations.
 */
export default function ReviewList({ reviews, userReviews, onOpenReviewModal }) {
  const combined = [...(userReviews || []), ...(reviews || [])];

  return (
    <div style={{ marginBottom: "48px" }}>
      {/* Editorial Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "14px",
          marginBottom: "24px",
          paddingBottom: "14px",
          borderBottom: "1px solid var(--border-subtle)"
        }}
      >
        <div>
          <span className="label-editorial">
            <span>📖</span> CITY JOURNAL • FIELD OBSERVATIONS
          </span>
          <h3
            style={{
              fontSize: "clamp(22px, 3vw, 28px)",
              fontFamily: "var(--font-serif)",
              color: "var(--cream)",
              marginTop: "4px"
            }}
          >
            What people actually say.
          </h3>
          <p style={{ fontSize: "13px", color: "var(--cream-muted)", marginTop: "2px" }}>
            Unfiltered notes on coffee quality, seating, Wi-Fi speeds, and genuine visit vibes.
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenReviewModal}
          className="btn-editorial-secondary"
          style={{ padding: "9px 18px", fontSize: "13px" }}
        >
          <span>✍️</span> Write an Honest Review
        </button>
      </div>

      {/* Review Notebook Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        {combined.map((rev) => (
          <div
            key={rev.id}
            style={{
              background: "var(--bg-surface-elevated)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-lg)",
              padding: "24px",
              boxShadow: "var(--shadow-card)",
              position: "relative",
              overflow: "hidden"
            }}
          >
            {/* Top Row: Author, Verified Visit & Rating */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "14px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                <span
                  style={{
                    fontWeight: 700,
                    color: "var(--cream)",
                    fontSize: "15px",
                    fontFamily: "var(--font-sans)"
                  }}
                >
                  {rev.author || "Chandigarh Resident"}
                </span>

                {rev.verified && (
                  <span
                    style={{
                      background: "rgba(45, 164, 115, 0.15)",
                      color: "var(--trust-high)",
                      border: "1px solid rgba(45, 164, 115, 0.35)",
                      fontSize: "11px",
                      padding: "2px 9px",
                      borderRadius: "var(--radius-pill)",
                      fontWeight: 700,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px"
                    }}
                  >
                    <span>✓</span> Verified Visit
                  </span>
                )}

                {rev.isUserSubmission && (
                  <span
                    style={{
                      background: "rgba(224, 122, 56, 0.18)",
                      color: "var(--accent-orange)",
                      fontSize: "11px",
                      padding: "2px 8px",
                      borderRadius: "var(--radius-pill)",
                      fontWeight: 700
                    }}
                  >
                    Your Submission
                  </span>
                )}

                {rev.authorSector && (
                  <span style={{ fontSize: "12px", color: "var(--cream-faint)" }}>
                    • from {rev.authorSector}
                  </span>
                )}
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ color: "var(--gold)", fontSize: "13px", fontWeight: 700 }}>
                  ★ {rev.rating}
                </span>
                <span style={{ color: "var(--cream-faint)", fontSize: "12px" }}>
                  {rev.date || "Recent visit"}
                </span>
              </div>
            </div>

            {/* Notebook Review Body in Editorial Serif */}
            <p
              style={{
                fontSize: "15px",
                fontFamily: "var(--font-serif)",
                lineHeight: 1.6,
                color: "var(--cream)",
                fontStyle: "italic",
                marginBottom: "16px",
                paddingLeft: "14px",
                borderLeft: "2px solid var(--border-medium)"
              }}
            >
              "{rev.text}"
            </p>

            {/* Visit Details Chips */}
            {(rev.orderedItems || rev.visitType || rev.vibeSummary) && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  fontSize: "12px",
                  paddingTop: "12px",
                  borderTop: "1px solid var(--border-subtle)",
                  color: "var(--cream-muted)"
                }}
              >
                {rev.visitType && (
                  <span
                    style={{
                      background: "rgba(252, 248, 242, 0.05)",
                      padding: "3px 10px",
                      borderRadius: "var(--radius-xs)"
                    }}
                  >
                    <strong>Visit:</strong> {rev.visitType}
                  </span>
                )}
                {rev.orderedItems && (
                  <span
                    style={{
                      background: "rgba(224, 122, 56, 0.1)",
                      color: "var(--accent-orange)",
                      padding: "3px 10px",
                      borderRadius: "var(--radius-xs)"
                    }}
                  >
                    <strong>Tried:</strong> {rev.orderedItems}
                  </span>
                )}
                {rev.vibeSummary && (
                  <span
                    style={{
                      background: "rgba(252, 248, 242, 0.05)",
                      padding: "3px 10px",
                      borderRadius: "var(--radius-xs)"
                    }}
                  >
                    <strong>Observed:</strong> {rev.vibeSummary}
                  </span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
