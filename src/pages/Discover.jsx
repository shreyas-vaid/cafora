import React, { useState, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CAFES_DATA, CHANDIGARH_SECTORS } from "../data/cafesData";
import { filterAndSortCafes } from "../utils/searchFilter";
import { rankCafesByVibeAndSearch, getMoodResponseCopy } from "../utils/vibeEngine";
import Navbar from "../components/common/Navbar";
import MoodSelector from "../components/feed/MoodSelector";
import EditorialGrid from "../components/feed/EditorialGrid";
import ChandigarhGraphic from "../components/brand/ChandigarhGraphic";

export default function Discover() {
  const [activeMoods, setActiveMoods] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState("All Chandigarh");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [minTrust, setMinTrust] = useState("all");
  const [sortBy, setSortBy] = useState("recommended");
  const [isThinking, setIsThinking] = useState(false);

  const moodSelectorRef = useRef(null);

  // Toggle multi-vibe selection (unrestricted multi-mood selection)
  const handleToggleMood = (moodId) => {
    setIsThinking(true);
    setActiveMoods((prev) => {
      if (prev.includes(moodId)) {
        return prev.filter((id) => id !== moodId);
      } else {
        return [...prev, moodId];
      }
    });

    // Brief subtle thinking transition (280ms)
    setTimeout(() => {
      setIsThinking(false);
    }, 280);
  };

  const handleResetMoods = () => {
    setIsThinking(true);
    setActiveMoods([]);
    setTimeout(() => {
      setIsThinking(false);
    }, 200);
  };

  const handleResetAllFilters = () => {
    setActiveMoods([]);
    setSearchQuery("");
    setSelectedSector("All Chandigarh");
    setSelectedPrice("all");
    setMinTrust("all");
    setSortBy("recommended");
  };

  const scrollToMood = () => {
    const el = document.getElementById("whats-the-mood");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Filter & rank cafes based on multi-vibe selection and search intent
  const filteredCafes = useMemo(() => {
    const baseList = filterAndSortCafes(CAFES_DATA, {
      searchQuery,
      selectedCategory: "all",
      selectedSector,
      selectedPrice,
      minTrust,
      sortBy
    });

    // When vibes or search intent are active, rank by CAFORA MATCH score
    if ((activeMoods.length > 0 || (searchQuery && searchQuery.trim())) && sortBy === "recommended") {
      return rankCafesByVibeAndSearch(baseList, activeMoods, searchQuery);
    }

    return baseList;
  }, [searchQuery, selectedSector, selectedPrice, minTrust, sortBy, activeMoods]);

  // Conversational response bar derived from active intent
  const conversationalResponse = useMemo(() => {
    if (activeMoods.length > 0 || (searchQuery && searchQuery.trim().length > 0)) {
      const copy = getMoodResponseCopy(activeMoods, searchQuery);
      return {
        lead: copy.lead,
        detail: copy.sub
      };
    }
    if (selectedSector !== "All Chandigarh") {
      return {
        lead: `Scanning ${selectedSector}`,
        detail: `${filteredCafes.length} spots verified in this sector.`
      };
    }
    return null;
  }, [activeMoods, searchQuery, selectedSector, filteredCafes.length]);

  const suggestionChips = [
    { label: "Quiet corner", query: "quiet" },
    { label: "Date night under 1000", query: "date night under 1000" },
    { label: "Specialty roasters", query: "specialty coffee" },
    { label: "Work for 3 hours", query: "work" }
  ];

  return (
    <div className="app-shell">
      <div className="app-overlay" />
      <Navbar />

      <main className="app-content">
        {/* HOMEPAGE HERO */}
        <section
          style={{
            position: "relative",
            padding: "54px 0 32px 0",
            textAlign: "center",
            overflow: "hidden"
          }}
        >
          {/* Subtle background Chandigarh grid lines */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "100%",
              maxWidth: "1000px",
              pointerEvents: "none",
              zIndex: 0
            }}
          >
            <ChandigarhGraphic opacity={0.12} height={210} />
          </div>

          <div className="container" style={{ maxWidth: "860px", position: "relative", zIndex: 1 }}>
            {/* Small Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{ marginBottom: "16px" }}
            >
              <span className="label-editorial" style={{ letterSpacing: "0.2em" }}>
                <span>✦</span> CHANDIGARH • {CAFES_DATA.length} AUDITED & CURATED SPOTS
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontSize: "clamp(38px, 6vw, 66px)",
                fontFamily: "var(--font-serif)",
                color: "var(--cream)",
                lineHeight: 1.1,
                marginBottom: "16px",
                letterSpacing: "-0.02em"
              }}
            >
              WHERE ARE WE <br />
              HAVING <span className="serif-italic" style={{ color: "var(--accent-orange)" }}>coffee</span> TODAY?
            </motion.h1>

            {/* Supporting Core Philosophy */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                fontSize: "clamp(15px, 2.2vw, 19px)",
                color: "var(--cream-muted)",
                marginBottom: "24px",
                fontWeight: 400,
                fontFamily: "var(--font-serif)",
                lineHeight: 1.5,
                maxWidth: "600px",
                margin: "0 auto 24px auto"
              }}
            >
              Chandigarh has way too many cafes. <br />
              <span style={{ color: "var(--cream)", fontWeight: 600 }}>We narrowed it down.</span>
            </motion.p>

            {/* Quick Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              style={{ marginBottom: "28px" }}
            >
              <button
                type="button"
                onClick={scrollToMood}
                className="btn-editorial-primary"
                style={{ padding: "12px 28px", fontSize: "14px" }}
              >
                Find my cafe →
              </button>
            </motion.div>

            {/* Conversational Search Input */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "640px",
                margin: "0 auto 14px auto"
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "16px",
                  color: "var(--accent-orange)",
                  pointerEvents: "none"
                }}
              >
                ✦
              </div>

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="I'm looking for a café that feels like..."
                style={{
                  width: "100%",
                  padding: "16px 52px 16px 48px",
                  fontSize: "15px",
                  fontFamily: "var(--font-sans)",
                  borderRadius: "var(--radius-pill)",
                  background: "var(--bg-surface-elevated)",
                  border: "1.5px solid var(--border-medium)",
                  color: "var(--cream)",
                  outline: "none",
                  boxShadow: "var(--shadow-card)",
                  transition: "border-color 0.2s ease, box-shadow 0.2s ease"
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--accent-orange)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border-medium)")}
                aria-label="Search cafes in Chandigarh"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  style={{
                    position: "absolute",
                    right: "18px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "transparent",
                    border: "none",
                    color: "var(--cream-faint)",
                    cursor: "pointer",
                    fontSize: "15px",
                    padding: "4px"
                  }}
                  title="Clear search"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </motion.div>

            {/* Suggestion Chips */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "8px",
                fontSize: "12px",
                color: "var(--cream-faint)"
              }}
            >
              <span>Try asking:</span>
              {suggestionChips.map((chip, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSearchQuery(chip.query)}
                  style={{
                    background: "rgba(252, 248, 242, 0.05)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--cream-muted)",
                    padding: "4px 12px",
                    borderRadius: "var(--radius-pill)",
                    cursor: "pointer",
                    fontSize: "12px",
                    transition: "all 0.15s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent-orange)";
                    e.currentTarget.style.color = "var(--cream)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                    e.currentTarget.style.color = "var(--cream-muted)";
                  }}
                >
                  {chip.label}
                </button>
              ))}
            </div>

            {/* Conversational Intelligent Response Bar */}
            <AnimatePresence>
              {conversationalResponse && (
                <motion.div
                  initial={{ opacity: 0, y: -8, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -8, height: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    margin: "20px auto 0 auto",
                    maxWidth: "520px",
                    background: "rgba(224, 122, 56, 0.12)",
                    border: "1px solid rgba(224, 122, 56, 0.35)",
                    borderRadius: "var(--radius-md)",
                    padding: "11px 18px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    textAlign: "left"
                  }}
                >
                  <div style={{ fontSize: "18px" }}>☕</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--accent-orange)" }}>
                      {conversationalResponse.lead}
                    </div>
                    <div style={{ fontSize: "12px", color: "var(--cream)", marginTop: "2px" }}>
                      {conversationalResponse.detail}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* "WHAT'S THE MOOD?" SECTION */}
        <section id="whats-the-mood" ref={moodSelectorRef}>
          <div className="container">
            <MoodSelector
              activeMoods={activeMoods}
              onToggleMood={handleToggleMood}
              onResetMoods={handleResetMoods}
            />
          </div>
        </section>

        {/* EDITORIAL REFINEMENT BAR (Sector, Budget, Trust, Sort) */}
        <section style={{ margin: "14px 0 24px 0" }}>
          <div className="container">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "14px",
                padding: "12px 18px",
                background: "var(--bg-surface-elevated)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)"
              }}
            >
              {/* Left Filters */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span className="label-editorial-muted">SECTOR:</span>
                  <select
                    value={selectedSector}
                    onChange={(e) => setSelectedSector(e.target.value)}
                    style={filterSelectStyle}
                    aria-label="Filter by Sector"
                  >
                    {CHANDIGARH_SECTORS.map((sec) => (
                      <option key={sec} value={sec} style={{ background: "#160f0b", color: "#fcf8f2" }}>
                        {sec}
                      </option>
                    ))}
                  </select>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span className="label-editorial-muted">PRICE:</span>
                  <select
                    value={selectedPrice}
                    onChange={(e) => setSelectedPrice(e.target.value)}
                    style={filterSelectStyle}
                    aria-label="Filter by Price"
                  >
                    <option value="all" style={{ background: "#160f0b" }}>All Prices</option>
                    <option value="₹" style={{ background: "#160f0b" }}>₹ (&lt; ₹500)</option>
                    <option value="₹₹" style={{ background: "#160f0b" }}>₹₹ (₹500–₹1000)</option>
                    <option value="₹₹₹" style={{ background: "#160f0b" }}>₹₹₹ (&gt; ₹1000)</option>
                  </select>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span className="label-editorial-muted">TRUST:</span>
                  <select
                    value={minTrust}
                    onChange={(e) => setMinTrust(e.target.value)}
                    style={filterSelectStyle}
                    aria-label="Filter by Trust"
                  >
                    <option value="all" style={{ background: "#160f0b" }}>All Scores</option>
                    <option value="80" style={{ background: "#160f0b" }}>80+ Trusted</option>
                    <option value="90" style={{ background: "#160f0b" }}>90+ Benchmark</option>
                  </select>
                </div>
              </div>

              {/* Right Sort & Reset */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span className="label-editorial-muted">SORT:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    style={filterSelectStyle}
                    aria-label="Sort cafes"
                  >
                    <option value="recommended" style={{ background: "#160f0b" }}>✦ CAFORA Match</option>
                    <option value="trust" style={{ background: "#160f0b" }}>🛡️ Highest Trust</option>
                    <option value="rating" style={{ background: "#160f0b" }}>★ Highest Rated</option>
                    <option value="reviews" style={{ background: "#160f0b" }}>💬 Most Reviewed</option>
                  </select>
                </div>

                {(searchQuery || selectedSector !== "All Chandigarh" || selectedPrice !== "all" || minTrust !== "all" || activeMoods.length > 0) && (
                  <button
                    type="button"
                    onClick={handleResetAllFilters}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "var(--accent-orange)",
                      fontSize: "12px",
                      fontWeight: 600,
                      cursor: "pointer",
                      textDecoration: "underline",
                      padding: "4px"
                    }}
                  >
                    Clear All
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* EDITORIAL RECOMMENDATION GRID */}
        <section>
          <div className="container">
            <EditorialGrid
              cafes={filteredCafes}
              onResetFilters={handleResetAllFilters}
              activeMoods={activeMoods}
              searchQuery={searchQuery}
              isThinking={isThinking}
            />
          </div>
        </section>

        {/* FOOTER */}
        <footer
          style={{
            marginTop: "60px",
            borderTop: "1px solid var(--border-subtle)",
            padding: "48px 0 36px 0",
            background: "rgba(16, 11, 8, 0.96)"
          }}
        >
          <div
            className="container"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "24px"
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "22px",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  color: "var(--cream)"
                }}
              >
                CAFORA
              </div>
              <p style={{ fontSize: "13px", color: "var(--cream-muted)", fontStyle: "italic", marginTop: "4px" }}>
                "Good cafes. Better reasons to leave the house."
              </p>
              <div className="label-editorial-muted" style={{ marginTop: "6px" }}>
                CHANDIGARH • ONE CUP AT A TIME
              </div>
            </div>

            <div style={{ display: "flex", gap: "22px", fontSize: "13px", flexWrap: "wrap" }}>
              <Link to="/" style={{ color: "var(--cream-muted)", textDecoration: "none" }}>
                Discover
              </Link>
              <Link to="/map" style={{ color: "var(--cream-muted)", textDecoration: "none" }}>
                Explore Map
              </Link>
              <Link to="/saved" style={{ color: "var(--cream-muted)", textDecoration: "none" }}>
                Your Coffee List
              </Link>
              <Link to="/add" style={{ color: "var(--accent-orange)", textDecoration: "none", fontWeight: 600 }}>
                + Add a Café
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

const filterSelectStyle = {
  background: "rgba(252, 248, 242, 0.06)",
  border: "1px solid var(--border-subtle)",
  color: "var(--cream)",
  padding: "5px 10px",
  borderRadius: "var(--radius-sm)",
  fontSize: "12px",
  fontWeight: 500,
  outline: "none",
  cursor: "pointer"
};
