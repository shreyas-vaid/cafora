import React, { useState, useEffect, useMemo } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { CAFES_DATA } from "../data/cafesData";
import { getSavedCafes, toggleSaveCafe, getUserReviews } from "../utils/storage";
import {
  getCafeVibeScores,
  getCafePersonalityTagline,
  getWhyPickedReasons,
  getWhyItMatches,
  getBestForBadges,
  calculateMatchPercentage
} from "../utils/vibeEngine";
import Navbar from "../components/common/Navbar";
import TrustBadge from "../components/common/TrustBadge";
import VibeScoreBar from "../components/common/VibeScoreBar";
import WhyThisCafe from "../components/feed/WhyThisCafe";
import VerdictCard from "../components/detail/VerdictCard";
import SourceSnapshot from "../components/detail/SourceSnapshot";
import ReviewList from "../components/detail/ReviewList";
import ReviewModal from "../components/detail/ReviewModal";
import InteractiveMap from "../components/map/InteractiveMap";
import CafeCard from "../components/feed/CafeCard";

export default function CafeDetail() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const matchParam = searchParams.get("match");

  // Find cafe from dataset
  const cafe = useMemo(() => {
    return CAFES_DATA.find((c) => c.id === id) || null;
  }, [id]);

  const [saved, setSaved] = useState(false);
  const [activeImage, setActiveImage] = useState(cafe?.heroImage);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    if (cafe) {
      setActiveImage(cafe.heroImage);
      const savedList = getSavedCafes();
      setSaved(savedList.some((item) => item.id === cafe.id));
      setUserReviews(getUserReviews(cafe.id));
      window.scrollTo(0, 0);
    }
  }, [cafe]);

  const handleToggleSave = () => {
    if (!cafe) return;
    toggleSaveCafe(cafe);
    setSaved(!saved);
  };

  const handleReviewSubmitted = (newReview) => {
    setUserReviews([newReview, ...userReviews]);
  };

  // Similar cafes in the same sector or with overlapping categories
  const similarCafes = useMemo(() => {
    if (!cafe) return [];
    return CAFES_DATA
      .filter((c) => c.id !== cafe.id && (c.sector === cafe.sector || c.categories?.some((cat) => cafe.categories?.includes(cat))))
      .slice(0, 3);
  }, [cafe]);

  if (!cafe) {
    return (
      <div className="app-shell">
        <div className="app-overlay" />
        <Navbar />
        <div className="container" style={{ textAlign: "center", padding: "100px 24px" }}>
          <div style={{ fontSize: "52px", marginBottom: "16px" }}>☕</div>
          <span className="label-editorial" style={{ letterSpacing: "0.2em" }}>
            <span>✦</span> SPOT NOT FOUND
          </span>
          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontFamily: "var(--font-serif)",
              color: "var(--cream)",
              marginTop: "12px",
              marginBottom: "12px"
            }}
          >
            Looks like this café wandered off.
          </h1>
          <p
            style={{
              fontSize: "15px",
              color: "var(--cream-muted)",
              maxWidth: "460px",
              margin: "0 auto 28px auto",
              lineHeight: 1.5
            }}
          >
            We couldn't find a Chandigarh café matching this URL. It might have relocated or the link might be misspelled.
          </p>
          <Link
            to="/"
            className="btn-editorial-primary"
          >
            Back to discovery →
          </Link>
        </div>
      </div>
    );
  }

  const galleryImages = cafe.images && cafe.images.length > 0 ? cafe.images : [cafe.heroImage];
  const vibeScores = getCafeVibeScores(cafe);
  const personalityTagline = getCafePersonalityTagline(cafe);
  const whyPickedReasons = getWhyPickedReasons(cafe);
  const whyItMatches = getWhyItMatches(cafe);
  const bestForBadges = getBestForBadges(cafe);
  const matchScore = matchParam ? Number(matchParam) : calculateMatchPercentage(cafe);

  // Practical facts
  const isWorkFriendly = cafe.categories?.includes("study") || cafe.tags?.some((t) => t.toLowerCase().includes("work") || t.toLowerCase().includes("wifi") || t.toLowerCase().includes("laptop"));
  const isQuiet = cafe.categories?.includes("quiet") || cafe.tags?.some((t) => t.toLowerCase().includes("quiet"));
  const isLateNight = cafe.categories?.includes("latenight") || cafe.openingHours?.toLowerCase().includes("11:") || cafe.openingHours?.toLowerCase().includes("12:") || cafe.openingHours?.toLowerCase().includes("midnight");

  const vibeItems = [
    { label: "Coffee", icon: "☕", score: vibeScores.coffee, color: "#e07a38" },
    { label: "Aesthetic", icon: "📸", score: vibeScores.aesthetic, color: "#c084fc" },
    { label: "Work", icon: "💻", score: vibeScores.work, color: "#38bdf8" },
    { label: "Conversation", icon: "💬", score: vibeScores.conversation, color: "#fb923c" },
    { label: "Night vibe", icon: "🌙", score: vibeScores.night, color: "#818cf8" },
    { label: "Food", icon: "🍔", score: vibeScores.food, color: "#fbbf24" }
  ];

  return (
    <div className="app-shell">
      <div className="app-overlay" />
      <Navbar onOpenReviewModal={() => setIsReviewModalOpen(true)} />

      <main className="app-content" style={{ paddingBottom: "80px" }}>
        <div className="container" style={{ maxWidth: "1080px" }}>
          {/* BREADCRUMB */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              color: "var(--cream-faint)",
              margin: "24px 0 16px"
            }}
          >
            <Link to="/" style={{ color: "var(--accent-orange)", textDecoration: "none", fontWeight: 700 }}>
              ← Back to Discovery
            </Link>
            <span>/</span>
            <span style={{ color: "var(--cream-muted)" }}>{cafe.sector}</span>
            <span>/</span>
            <span style={{ color: "var(--cream)", fontWeight: 600 }}>{cafe.name}</span>
          </div>

          {/* RECOMMENDATION CONTEXT BANNER (If arrived via vibe match) */}
          {matchParam && (
            <div
              style={{
                background: "rgba(224, 122, 56, 0.12)",
                border: "1px solid rgba(224, 122, 56, 0.35)",
                borderRadius: "var(--radius-md)",
                padding: "14px 20px",
                marginBottom: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "12px"
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <span style={{ fontSize: "20px" }}>✦</span>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 800, color: "var(--accent-orange)" }}>
                    {matchScore}% CAFORA MATCH — Why we sent you here
                  </div>
                  <div style={{ fontSize: "12.5px", color: "var(--cream)", marginTop: "3px" }}>
                    {whyItMatches.join(" • ")}
                  </div>
                </div>
              </div>

              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "var(--cream-faint)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em"
                }}
              >
                RECOMMENDED SPOT
              </span>
            </div>
          )}

          {/* 1. CAFE HERO SECTION */}
          <section
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "36px",
              marginBottom: "36px"
            }}
          >
            {/* Gallery / Image Column */}
            <div>
              <div
                style={{
                  width: "100%",
                  height: "390px",
                  borderRadius: "var(--radius-xl)",
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "var(--shadow-card)",
                  border: "1px solid var(--border-medium)",
                  marginBottom: "12px",
                  backgroundColor: "#17100b"
                }}
              >
                <img
                  src={activeImage}
                  alt={cafe.name}
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80";
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "opacity 0.3s ease"
                  }}
                />

                {/* Save Heart Button */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px"
                  }}
                >
                  <button
                    type="button"
                    onClick={handleToggleSave}
                    className="btn-editorial-secondary"
                    style={{
                      background: saved ? "var(--terracotta)" : "rgba(16, 11, 8, 0.8)",
                      backdropFilter: "blur(8px)",
                      color: "#ffffff",
                      fontSize: "12.5px",
                      padding: "8px 16px"
                    }}
                  >
                    <span>{saved ? "❤️" : "🤍"}</span>
                    <span>{saved ? "Saved in your list" : "Save to list"}</span>
                  </button>
                </div>
              </div>

              {/* Thumbnails */}
              {galleryImages.length > 1 && (
                <div style={{ display: "flex", gap: "10px", overflowX: "auto", paddingBottom: "4px" }}>
                  {galleryImages.map((imgUrl, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveImage(imgUrl)}
                      style={{
                        width: "76px",
                        height: "58px",
                        borderRadius: "8px",
                        overflow: "hidden",
                        border: activeImage === imgUrl ? "2px solid var(--accent-orange)" : "1px solid var(--border-subtle)",
                        padding: 0,
                        cursor: "pointer",
                        opacity: activeImage === imgUrl ? 1 : 0.6,
                        transition: "all 0.2s ease",
                        flexShrink: 0
                      }}
                    >
                      <img
                        src={imgUrl}
                        alt={`Thumbnail ${i}`}
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=400&q=80";
                        }}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Profile Info Column */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                {/* Sector & Distance */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <span
                    style={{
                      background: "rgba(224, 122, 56, 0.15)",
                      color: "var(--accent-orange)",
                      padding: "4px 12px",
                      borderRadius: "var(--radius-pill)",
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.04em"
                    }}
                  >
                    📍 {cafe.sector} · CHANDIGARH
                  </span>
                  <span style={{ color: "var(--cream-faint)", fontSize: "12.5px" }}>
                    {cafe.distanceKm} km from Sector 17
                  </span>
                </div>

                {/* Cafe Name */}
                <h1
                  style={{
                    fontSize: "clamp(32px, 4.5vw, 46px)",
                    fontFamily: "var(--font-serif)",
                    color: "var(--cream)",
                    lineHeight: 1.12,
                    marginBottom: "8px"
                  }}
                >
                  {cafe.name}
                </h1>

                {/* Personality Tagline */}
                <div
                  style={{
                    fontSize: "18px",
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    color: "var(--accent-orange)",
                    fontWeight: 500,
                    marginBottom: "14px"
                  }}
                >
                  "{personalityTagline}"
                </div>

                <p style={{ color: "var(--cream-muted)", fontSize: "14px", lineHeight: 1.5, marginBottom: "20px" }}>
                  {cafe.address}
                </p>

                {/* Metrics Pill Bar: Rating + Trust Score + Price */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "18px",
                    flexWrap: "wrap",
                    padding: "16px 20px",
                    background: "var(--bg-surface-elevated)",
                    borderRadius: "var(--radius-lg)",
                    border: "1px solid var(--border-medium)",
                    marginBottom: "20px"
                  }}
                >
                  <TrustBadge cafe={cafe} size="large" />

                  <div style={{ borderLeft: "1px solid var(--border-medium)", paddingLeft: "16px" }}>
                    <div style={{ fontSize: "11px", color: "var(--cream-faint)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Rating
                    </div>
                    <div style={{ fontSize: "17px", fontWeight: 800, color: "var(--gold)" }}>
                      ★ {cafe.rating} {cafe.reviewCount != null && cafe.reviewCount > 0 && (
                        <span style={{ fontSize: "12px", color: "var(--cream-faint)", fontWeight: 400 }}>
                          ({Number(cafe.reviewCount).toLocaleString()} reviews)
                        </span>
                      )}
                    </div>
                  </div>

                  <div style={{ borderLeft: "1px solid var(--border-medium)", paddingLeft: "16px" }}>
                    <div style={{ fontSize: "11px", color: "var(--cream-faint)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Price Range
                    </div>
                    <div style={{ fontSize: "16px", fontWeight: 700, color: "var(--cream)" }}>
                      {cafe.priceRange} (₹{cafe.approxCostForTwo} for 2)
                    </div>
                  </div>
                </div>

                {/* Vibe Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                  {cafe.tags?.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: "rgba(252, 248, 242, 0.06)",
                        color: "var(--cream-muted)",
                        padding: "5px 12px",
                        borderRadius: "var(--radius-pill)",
                        fontSize: "12px",
                        fontWeight: 600,
                        border: "1px solid var(--border-subtle)"
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* PRIMARY CTAS */}
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cafe.name + " " + cafe.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-editorial-primary"
                  style={{
                    flex: 1,
                    textAlign: "center",
                    fontSize: "14px",
                    padding: "13px 24px"
                  }}
                >
                  <span>📍</span>
                  <span>Take me there →</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsReviewModalOpen(true)}
                  className="btn-editorial-secondary"
                  style={{ padding: "12px 22px", fontSize: "13.5px" }}
                >
                  <span>✍️</span>
                  <span>Write Review</span>
                </button>
              </div>
            </div>
          </section>

          {/* 2. BEST FOR SECTION (Requirement 21) */}
          <section
            style={{
              background: "var(--bg-surface-elevated)",
              border: "1px solid var(--border-medium)",
              borderRadius: "var(--radius-xl)",
              padding: "24px 28px",
              marginBottom: "32px",
              boxShadow: "var(--shadow-card)"
            }}
          >
            <span className="label-editorial" style={{ marginBottom: "8px" }}>
              <span>✦</span> BEST FOR
            </span>
            <h3
              style={{
                fontSize: "22px",
                fontFamily: "var(--font-serif)",
                color: "var(--cream)",
                marginBottom: "16px"
              }}
            >
              When to come here
            </h3>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {bestForBadges.map((badge, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "rgba(224, 122, 56, 0.12)",
                    border: "1px solid rgba(224, 122, 56, 0.3)",
                    color: "var(--cream)",
                    fontWeight: 700,
                    fontSize: "13.5px",
                    padding: "7px 16px",
                    borderRadius: "var(--radius-pill)"
                  }}
                >
                  <span style={{ color: "var(--accent-orange)" }}>✓</span>
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 3. CAFORA VIBE SECTION */}
          <section
            style={{
              background: "var(--bg-surface-elevated)",
              border: "1px solid var(--border-medium)",
              borderRadius: "var(--radius-xl)",
              padding: "28px 32px",
              marginBottom: "32px",
              boxShadow: "var(--shadow-card)"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "10px",
                marginBottom: "20px"
              }}
            >
              <div>
                <span className="label-editorial">
                  <span>✦</span> SIGNATURE METRICS
                </span>
                <h2
                  style={{
                    fontSize: "24px",
                    fontFamily: "var(--font-serif)",
                    color: "var(--cream)",
                    marginTop: "6px"
                  }}
                >
                  CAFORA VIBE
                </h2>
              </div>
              <div style={{ fontSize: "12px", color: "var(--cream-faint)" }}>
                Scores rated out of 10
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "18px"
              }}
            >
              {vibeItems.map((vibe, idx) => (
                <VibeScoreBar
                  key={idx}
                  label={vibe.label}
                  icon={vibe.icon}
                  score={vibe.score}
                  color={vibe.color}
                />
              ))}
            </div>
          </section>

          {/* 4. WHY CAFORA LIKES IT */}
          <section style={{ marginBottom: "32px" }}>
            <div
              style={{
                background: "var(--bg-surface-elevated)",
                border: "1px solid var(--border-medium)",
                borderRadius: "var(--radius-xl)",
                padding: "26px 30px",
                boxShadow: "var(--shadow-card)"
              }}
            >
              <span className="label-editorial" style={{ marginBottom: "8px" }}>
                <span>✦</span> WHY CAFORA LIKES IT
              </span>
              <h3
                style={{
                  fontSize: "22px",
                  fontFamily: "var(--font-serif)",
                  color: "var(--cream)",
                  marginBottom: "14px"
                }}
              >
                Curator reasons
              </h3>

              <WhyThisCafe reasons={whyPickedReasons} compact={false} />
            </div>
          </section>

          {/* 5. PRACTICAL INFO */}
          <section
            style={{
              background: "var(--bg-surface-elevated)",
              border: "1px solid var(--border-medium)",
              borderRadius: "var(--radius-xl)",
              padding: "28px 32px",
              marginBottom: "36px",
              boxShadow: "var(--shadow-card)"
            }}
          >
            <span className="label-editorial" style={{ marginBottom: "8px" }}>
              <span>✦</span> ESSENTIALS
            </span>
            <h3
              style={{
                fontSize: "22px",
                fontFamily: "var(--font-serif)",
                color: "var(--cream)",
                marginBottom: "20px"
              }}
            >
              Practical info
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "18px"
              }}
            >
              <div style={{ padding: "14px", background: "rgba(16, 11, 8, 0.45)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ fontSize: "11px", color: "var(--cream-faint)", fontWeight: 700, textTransform: "uppercase" }}>Opening Hours</div>
                <div style={{ fontSize: "14px", color: "var(--cream)", marginTop: "4px", fontWeight: 600 }}>
                  🕒 {cafe.openingHours || "10:00 AM – 11:00 PM"}
                </div>
              </div>

              <div style={{ padding: "14px", background: "rgba(16, 11, 8, 0.45)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ fontSize: "11px", color: "var(--cream-faint)", fontWeight: 700, textTransform: "uppercase" }}>Work Suitability</div>
                <div style={{ fontSize: "14px", color: "var(--cream)", marginTop: "4px", fontWeight: 600 }}>
                  {isWorkFriendly ? "💻 Laptop & Wi-Fi Friendly" : "☕ Casual Hangout / Social"}
                </div>
              </div>

              <div style={{ padding: "14px", background: "rgba(16, 11, 8, 0.45)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ fontSize: "11px", color: "var(--cream-faint)", fontWeight: 700, textTransform: "uppercase" }}>Ambience & Noise</div>
                <div style={{ fontSize: "14px", color: "var(--cream)", marginTop: "4px", fontWeight: 600 }}>
                  {isQuiet ? "🌿 Quiet & Intimate" : "👯 Lively & Social"}
                </div>
              </div>

              <div style={{ padding: "14px", background: "rgba(16, 11, 8, 0.45)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ fontSize: "11px", color: "var(--cream-faint)", fontWeight: 700, textTransform: "uppercase" }}>Late Night</div>
                <div style={{ fontSize: "14px", color: "var(--cream)", marginTop: "4px", fontWeight: 600 }}>
                  {isLateNight ? "🌙 Great for late evenings" : "☀️ Closes by evening"}
                </div>
              </div>
            </div>
          </section>

          {/* VERDICT CARD (Preserved) */}
          <section>
            <VerdictCard cafe={cafe} />
          </section>

          {/* MULTI-SOURCE RATINGS SNAPSHOT (Preserved) */}
          <section>
            <SourceSnapshot sources={cafe.sources} />
          </section>

          {/* VERIFIED REVIEWS & USER REVIEWS LIST (Preserved) */}
          <section>
            <ReviewList
              reviews={cafe.sampleReviews || []}
              userReviews={userReviews}
              onOpenReviewModal={() => setIsReviewModalOpen(true)}
            />
          </section>

          {/* NEIGHBORHOOD MAP GUIDE (Preserved) */}
          <section style={{ marginBottom: "48px" }}>
            <div style={{ marginBottom: "14px" }}>
              <span className="label-editorial">
                <span>📍</span> NEIGHBORHOOD GUIDE
              </span>
              <h3 style={{ fontSize: "22px", fontFamily: "var(--font-serif)", color: "var(--cream)", marginTop: "4px" }}>
                {cafe.sector}, Chandigarh
              </h3>
            </div>
            <div style={{ height: "340px", borderRadius: "var(--radius-xl)", overflow: "hidden", border: "1px solid var(--border-medium)" }}>
              <InteractiveMap
                cafes={[cafe]}
                selectedSector={cafe.sector}
                activeCafeId={cafe.id}
              />
            </div>
          </section>

          {/* SIMILAR CAFES */}
          {similarCafes.length > 0 && (
            <section>
              <div style={{ marginBottom: "18px" }}>
                <span className="label-editorial">
                  <span>✦</span> MORE IN CHANDIGARH
                </span>
                <h3 style={{ fontSize: "22px", fontFamily: "var(--font-serif)", color: "var(--cream)", marginTop: "4px" }}>
                  Cafés with similar vibes
                </h3>
              </div>
              <div className="editorial-grid">
                {similarCafes.map((c) => (
                  <CafeCard key={c.id} cafe={c} onToggleSave={() => {}} layoutStyle="compact" />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Review Submission Modal (Preserved) */}
      <ReviewModal
        cafe={cafe}
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onReviewSubmitted={handleReviewSubmitted}
      />
    </div>
  );
}
