import React, { useState, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { CAFES_DATA } from "../data/cafesData";
import { getSavedCafes, toggleSaveCafe, getUserReviews } from "../utils/storage";
import Navbar from "../components/common/Navbar";
import TrustBadge from "../components/common/TrustBadge";
import VerdictCard from "../components/detail/VerdictCard";
import SourceSnapshot from "../components/detail/SourceSnapshot";
import ReviewList from "../components/detail/ReviewList";
import ReviewModal from "../components/detail/ReviewModal";
import InteractiveMap from "../components/map/InteractiveMap";
import CafeCard from "../components/feed/CafeCard";

export default function CafeDetail() {
  const { id } = useParams();

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
            <span>✦</span> 404 • SPOT NOT FOUND
          </span>
          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontFamily: "var(--font-serif)",
              color: "var(--cream)",
              marginTop: "8px",
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
          <Link to="/" className="btn-editorial-primary">
            Back to discovery →
          </Link>
        </div>
      </div>
    );
  }

  const galleryImages = cafe.gallery && cafe.gallery.length > 0 ? cafe.gallery : [cafe.heroImage];

  // Derive "What to know before you go" practical facts strictly from existing cafe data
  const isWorkFriendly = cafe.categories?.includes("Work Friendly") || cafe.tags?.some((t) => t.toLowerCase().includes("work") || t.toLowerCase().includes("wifi"));
  const isQuiet = cafe.categories?.includes("Quiet / Reading") || cafe.tags?.some((t) => t.toLowerCase().includes("quiet"));
  const isLateNight = cafe.categories?.includes("Late Night") || cafe.tags?.some((t) => t.toLowerCase().includes("late"));

  return (
    <div className="app-shell">
      <div className="app-overlay" />
      <Navbar onOpenReviewModal={() => setIsReviewModalOpen(true)} />

      <main className="app-content" style={{ paddingBottom: "80px" }}>
        <div className="container" style={{ maxWidth: "1080px" }}>
          {/* BACK TO DISCOVERY / BREADCRUMB */}
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
            <Link to="/" style={{ color: "var(--accent-orange)", textDecoration: "none", fontWeight: 600 }}>
              ← Back to Discovery
            </Link>
            <span>/</span>
            <span style={{ color: "var(--cream-muted)" }}>{cafe.sector}</span>
            <span>/</span>
            <span style={{ color: "var(--cream)", fontWeight: 600 }}>{cafe.name}</span>
          </div>

          {/* EDITORIAL PROFILE HERO */}
          <section
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "36px",
              marginBottom: "40px"
            }}
          >
            {/* Gallery Column */}
            <div>
              <div
                style={{
                  width: "100%",
                  height: "380px",
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
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    right: "14px"
                  }}
                >
                  <button
                    type="button"
                    onClick={handleToggleSave}
                    className="btn-editorial-secondary"
                    style={{
                      background: saved ? "var(--terracotta)" : "rgba(16, 11, 8, 0.8)",
                      color: "#ffffff",
                      fontSize: "12.5px",
                      padding: "8px 16px"
                    }}
                  >
                    {saved ? "❤️ Saved to List" : "🤍 Save to Coffee List"}
                  </button>
                </div>
              </div>

              {/* Gallery Thumbnails */}
              <div style={{ display: "flex", gap: "10px", overflowX: "auto" }}>
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
            </div>

            {/* Profile Info Column */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <span
                    style={{
                      background: "rgba(224, 122, 56, 0.15)",
                      color: "var(--accent-orange)",
                      padding: "3px 10px",
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

                <h1
                  style={{
                    fontSize: "clamp(32px, 4.5vw, 44px)",
                    fontFamily: "var(--font-serif)",
                    color: "var(--cream)",
                    lineHeight: 1.15,
                    marginBottom: "12px"
                  }}
                >
                  {cafe.name}
                </h1>

                <p style={{ color: "var(--cream-muted)", fontSize: "14px", lineHeight: 1.5, marginBottom: "20px" }}>
                  {cafe.address}
                </p>

                {/* Score & Rating Bar */}
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
                      Visitor Rating
                    </div>
                    <div style={{ fontSize: "17px", fontWeight: 700, color: "var(--gold)" }}>
                      ★ {cafe.rating} <span style={{ fontSize: "12px", color: "var(--cream-faint)", fontWeight: 400 }}>({cafe.reviewCount} reviews)</span>
                    </div>
                  </div>

                  <div style={{ borderLeft: "1px solid var(--border-medium)", paddingLeft: "16px" }}>
                    <div style={{ fontSize: "11px", color: "var(--cream-faint)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Approx Cost
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
                        fontWeight: 500,
                        border: "1px solid var(--border-subtle)"
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cafe.name + " " + cafe.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-editorial-primary"
                  style={{ flex: 1, textAlign: "center" }}
                >
                  📍 Get Directions
                </a>

                <button
                  type="button"
                  onClick={() => setIsReviewModalOpen(true)}
                  className="btn-editorial-secondary"
                  style={{ padding: "11px 22px" }}
                >
                  ✍️ Write Review
                </button>
              </div>
            </div>
          </section>

          {/* THE VERDICT (Core Product Differentiator) */}
          <section>
            <VerdictCard cafe={cafe} />
          </section>

          {/* WHAT TO KNOW BEFORE YOU GO (Practical Editorial Summary) */}
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
            <span className="label-editorial" style={{ marginBottom: "12px" }}>
              <span>✦</span> WHAT TO KNOW BEFORE YOU GO
            </span>
            <h3
              style={{
                fontSize: "22px",
                fontFamily: "var(--font-serif)",
                color: "var(--cream)",
                marginBottom: "20px"
              }}
            >
              Practical tips for your visit.
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "18px"
              }}
            >
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
                <div style={{ fontSize: "11px", color: "var(--cream-faint)", fontWeight: 700, textTransform: "uppercase" }}>Crowd Timing</div>
                <div style={{ fontSize: "14px", color: "var(--cream)", marginTop: "4px", fontWeight: 600 }}>
                  {isLateNight ? "🌙 Great for late evenings" : "☀️ Calmer before 5 PM"}
                </div>
              </div>

              <div style={{ padding: "14px", background: "rgba(16, 11, 8, 0.45)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ fontSize: "11px", color: "var(--cream-faint)", fontWeight: 700, textTransform: "uppercase" }}>Budget Indicator</div>
                <div style={{ fontSize: "14px", color: "var(--cream)", marginTop: "4px", fontWeight: 600 }}>
                  {cafe.priceRange} (₹{cafe.approxCostForTwo} for 2 people)
                </div>
              </div>
            </div>
          </section>

          {/* MULTI-SOURCE SNAPSHOT (Transparent Data Integrity) */}
          <section>
            <SourceSnapshot sources={cafe.sources} />
          </section>

          {/* WHAT PEOPLE ACTUALLY SAY (Notebook Reviews) */}
          <section>
            <ReviewList
              reviews={cafe.reviews}
              userReviews={userReviews}
              onOpenReviewModal={() => setIsReviewModalOpen(true)}
            />
          </section>

          {/* LOCATION & NEIGHBORHOOD MAP */}
          <section style={{ marginBottom: "48px" }}>
            <div style={{ marginBottom: "14px" }}>
              <span className="label-editorial">
                <span>📍</span> NEIGHBORHOOD GUIDE
              </span>
              <h3 style={{ fontSize: "22px", fontFamily: "var(--font-serif)", color: "var(--cream)", marginTop: "4px" }}>
                Location: {cafe.sector}
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

          {/* SIMILAR RECOMMENDED CAFES */}
          {similarCafes.length > 0 && (
            <section>
              <div style={{ marginBottom: "18px" }}>
                <span className="label-editorial">
                  <span>✦</span> MORE IN THE NEIGHBORHOOD
                </span>
                <h3 style={{ fontSize: "22px", fontFamily: "var(--font-serif)", color: "var(--cream)", marginTop: "4px" }}>
                  Cafés in Chandigarh you might also like.
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

      {/* Review Submission Modal */}
      <ReviewModal
        cafe={cafe}
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onReviewSubmitted={handleReviewSubmitted}
      />
    </div>
  );
}
