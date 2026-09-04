import React from "react";
import FeaturedCafe from "./FeaturedCafe";
import CafeCard from "./CafeCard";
import { calculateTrustScore } from "../../utils/trustScore";
import { LOW_TRUST_THRESHOLD } from "../../utils/recommendation";

/**
 * EDITORIAL DISCOVERY GRID
 * Structure:
 * 1. "CAFÉS WE'D SEND YOU TO" Header
 * 2. Feature Cafe ("CAFÉ OF THE MOMENT")
 * 3. "RIGHT NOW" Curated Spotlight Strip (2-3 cafes)
 * 4. Editorial Postcard Grid
 * 5. Transparent "THINK TWICE" Section for low-trust direct search matches
 */
export default function EditorialGrid({ cafes, onResetFilters, onToggleSave, selectedMood }) {
  if (!cafes || cafes.length === 0) {
    return (
      <div
        style={{
          background: "var(--bg-surface-elevated)",
          borderRadius: "var(--radius-xl)",
          padding: "48px 24px",
          textAlign: "center",
          border: "1px solid var(--border-subtle)",
          margin: "24px 0"
        }}
      >
        <div style={{ fontSize: "40px", marginBottom: "16px" }}>☕</div>
        <h3
          style={{
            fontSize: "24px",
            fontFamily: "var(--font-serif)",
            color: "var(--cream)",
            marginBottom: "10px"
          }}
        >
          Hmm. Even we couldn't find that one.
        </h3>
        <p
          style={{
            fontSize: "14px",
            color: "var(--cream-muted)",
            maxWidth: "460px",
            margin: "0 auto 24px auto",
            lineHeight: 1.5
          }}
        >
          Try changing your mood, sector or budget to uncover more of Chandigarh's coffee scene.
        </p>
        <button
          type="button"
          onClick={onResetFilters}
          className="btn-editorial-primary"
        >
          Reset Discovery Filters
        </button>
      </div>
    );
  }

  // Separate high/good/mixed trust cafes from low-trust search results
  const recommendedCafes = cafes.filter((c) => {
    const t = calculateTrustScore(c);
    return t.score >= LOW_TRUST_THRESHOLD && !c.isLowTrust;
  });

  const lowTrustCafes = cafes.filter((c) => {
    const t = calculateTrustScore(c);
    return t.score < LOW_TRUST_THRESHOLD || c.isLowTrust;
  });

  // Pick top cafe for Featured Hero
  const featureCafe = recommendedCafes[0];
  const rightNowCafes = recommendedCafes.slice(1, 3);
  const remainingCafes = recommendedCafes.slice(3);

  return (
    <div style={{ width: "100%", margin: "28px 0" }}>
      {/* Editorial Section Intro */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "24px",
          paddingBottom: "16px",
          borderBottom: "1px solid var(--border-subtle)"
        }}
      >
        <div>
          <span className="label-editorial">
            <span>☕</span> CAFÉS WE'D SEND YOU TO
          </span>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 32px)",
              fontFamily: "var(--font-serif)",
              color: "var(--cream)",
              marginTop: "4px"
            }}
          >
            The places we'd actually recommend to a friend.
          </h2>
        </div>

        <div style={{ fontSize: "13px", color: "var(--cream-faint)" }}>
          Showing <strong>{recommendedCafes.length}</strong> curated spots
        </div>
      </div>

      {/* 1. FEATURED HERO CAFE */}
      {featureCafe && (
        <FeaturedCafe cafe={featureCafe} onToggleSave={onToggleSave} />
      )}

      {/* 2. "RIGHT NOW" CURATED STRIP */}
      {rightNowCafes.length > 0 && (
        <div style={{ marginBottom: "36px" }}>
          <div style={{ marginBottom: "14px" }}>
            <span className="label-editorial" style={{ color: "var(--gold)" }}>
              <span>⚡</span> RIGHT NOW
            </span>
            <div style={{ fontSize: "13.5px", color: "var(--cream-muted)", fontStyle: "italic", marginTop: "2px" }}>
              "Where we'd go if we were leaving the house right this minute."
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px"
            }}
          >
            {rightNowCafes.map((cafe) => (
              <CafeCard
                key={cafe.id}
                cafe={cafe}
                onToggleSave={onToggleSave}
                layoutStyle="compact"
              />
            ))}
          </div>
        </div>
      )}

      {/* 3. EDITORIAL POSTCARD GRID */}
      {remainingCafes.length > 0 && (
        <div style={{ marginBottom: "40px" }}>
          <div style={{ marginBottom: "14px" }}>
            <span className="label-editorial-muted">
              MORE PLACES WORTH VISITING
            </span>
          </div>

          <div className="editorial-grid">
            {remainingCafes.map((cafe) => (
              <CafeCard
                key={cafe.id}
                cafe={cafe}
                onToggleSave={onToggleSave}
                layoutStyle="standard"
              />
            ))}
          </div>
        </div>
      )}

      {/* 4. LOW TRUST SEARCH MATCHES (THINK TWICE) */}
      {lowTrustCafes.length > 0 && (
        <div
          style={{
            marginTop: "48px",
            padding: "24px",
            background: "rgba(201, 59, 59, 0.08)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid rgba(201, 59, 59, 0.25)"
          }}
        >
          <div style={{ marginBottom: "16px" }}>
            <span className="label-editorial" style={{ color: "#f87171" }}>
              <span>⚠️</span> THINK TWICE • LOWER REVIEW TRUST
            </span>
            <p style={{ fontSize: "13px", color: "var(--cream-muted)", marginTop: "4px" }}>
              These cafes matched your search, but multiple independent platforms reported recurring issues
              with service, inflated ratings, or inconsistent quality.
            </p>
          </div>

          <div className="editorial-grid" style={{ opacity: 0.9 }}>
            {lowTrustCafes.map((cafe) => (
              <CafeCard
                key={cafe.id}
                cafe={cafe}
                onToggleSave={onToggleSave}
                layoutStyle="compact"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
