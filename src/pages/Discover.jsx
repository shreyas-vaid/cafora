import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CAFES_DATA, CHANDIGARH_SECTORS } from "../data/cafesData";
import { filterAndSortCafes } from "../utils/searchFilter";
import Navbar from "../components/common/Navbar";
import MoodSelector from "../components/feed/MoodSelector";
import EditorialGrid from "../components/feed/EditorialGrid";
import ChandigarhGraphic from "../components/brand/ChandigarhGraphic";

export default function Discover() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSector, setSelectedSector] = useState("All Chandigarh");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [minTrust, setMinTrust] = useState("all");
  const [sortBy, setSortBy] = useState("recommended");

  // Filter & Sort Cafes with memoization
  const filteredCafes = useMemo(() => {
    return filterAndSortCafes(CAFES_DATA, {
      searchQuery,
      selectedCategory,
      selectedSector,
      selectedPrice,
      minTrust,
      sortBy
    });
  }, [searchQuery, selectedCategory, selectedSector, selectedPrice, minTrust, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedSector("All Chandigarh");
    setSelectedPrice("all");
    setMinTrust("all");
    setSortBy("recommended");
  };

  // Conversational response derived truthfully from user intent and exact match count
  const conversationalResponse = useMemo(() => {
    if (!searchQuery && selectedCategory === "all" && selectedSector === "All Chandigarh" && selectedPrice === "all" && minTrust === "all") {
      return null;
    }

    const q = searchQuery.toLowerCase();
    const count = filteredCafes.length;

    if (q.includes("quiet") || q.includes("study") || q.includes("work") || selectedCategory === "Work Friendly" || selectedCategory === "Quiet / Reading") {
      return {
        lead: "Ah. You need a quiet corner.",
        detail: `${count} ${count === 1 ? "café matches" : "cafés match"} your mood.`
      };
    }
    if (q.includes("date") || q.includes("romantic") || selectedCategory === "Date Spots") {
      return {
        lead: "Okay, we see the assignment. ❤️",
        detail: `Romantic + good ambience + ${count} verified ${count === 1 ? "recommendation" : "recommendations"}.`
      };
    }
    if (q.includes("coffee") || q.includes("specialty") || q.includes("espresso") || selectedCategory === "Specialty Coffee") {
      return {
        lead: "Coffee first. We respect that.",
        detail: `Here are the ${count} strongest specialty roasters in Chandigarh.`
      };
    }
    if (q.includes("pretty") || q.includes("photo") || selectedCategory === "Aesthetic & Photo Spots") {
      return {
        lead: "Yes, you are taking pictures. 📸",
        detail: `${count} photogenic spaces with great aesthetics & natural light.`
      };
    }
    if (q.includes("sweet") || q.includes("dessert") || selectedCategory === "Bakery & Desserts") {
      return {
        lead: "Sugar rush incoming. 🍰",
        detail: `${count} artisanal spots with standout pastries and desserts.`
      };
    }
    if (q.includes("night") || selectedCategory === "Late Night") {
      return {
        lead: "Not going home yet? We got you. 🌙",
        detail: `${count} late-night spots open for after-hours coffee.`
      };
    }
    if (q.includes("under 1000") || q.includes("under 500") || selectedPrice !== "all") {
      return {
        lead: "Great coffee without the wallet burn.",
        detail: `${count} high-value spots matching your budget.`
      };
    }
    if (selectedSector !== "All Chandigarh" || q.includes("sector")) {
      const sec = selectedSector !== "All Chandigarh" ? selectedSector : "your sector";
      return {
        lead: `Scanning ${sec}.`,
        detail: `Found ${count} places worth leaving the house for.`
      };
    }

    return {
      lead: "Here's what we found for you:",
      detail: `${count} ${count === 1 ? "café matches" : "cafés match"} your discovery search.`
    };
  }, [searchQuery, selectedCategory, selectedSector, selectedPrice, minTrust, filteredCafes.length]);

  const suggestionChips = [
    { label: "Quiet corner", query: "quiet" },
    { label: "Date night under 1000", query: "date night under 1000" },
    { label: "Good coffee in Sector 17", query: "coffee Sector 17" },
    { label: "Specialty roasters", query: "specialty coffee" },
    { label: "Work for 3 hours", query: "work" }
  ];

  return (
    <div className="app-shell">
      <div className="app-overlay" />
      <Navbar />

      <main className="app-content">
        {/* HOMEPAGE HERO SECTION */}
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
            <ChandigarhGraphic opacity={0.14} height={200} />
          </div>

          <div className="container" style={{ maxWidth: "860px", position: "relative", zIndex: 1 }}>
            {/* Small Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{ marginBottom: "16px" }}
            >
              <span className="label-editorial" style={{ letterSpacing: "0.22em" }}>
                <span>✦</span> CHANDIGARH • ONE CUP AT A TIME
              </span>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontSize: "clamp(38px, 6vw, 64px)",
                fontFamily: "var(--font-serif)",
                color: "var(--cream)",
                lineHeight: 1.1,
                marginBottom: "16px",
                letterSpacing: "-0.02em"
              }}
            >
              Where are we <br />
              having <span className="serif-italic" style={{ color: "var(--accent-orange)" }}>coffee</span> today?
            </motion.h1>

            {/* Supporting Core Philosophy */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                fontSize: "clamp(15px, 2.2vw, 19px)",
                color: "var(--cream-muted)",
                marginBottom: "32px",
                fontWeight: 400,
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                lineHeight: 1.5
              }}
            >
              "Not just the highest rated. The one you'll actually want to return to."
            </motion.p>

            {/* Conversational Search Input */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "680px",
                margin: "0 auto 16px auto"
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "18px",
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
                  padding: "18px 56px 18px 52px",
                  fontSize: "16px",
                  fontFamily: "var(--font-sans)",
                  borderRadius: "var(--radius-pill)",
                  background: "var(--bg-surface-elevated)",
                  border: "1.5px solid var(--border-medium)",
                  color: "var(--cream)",
                  outline: "none",
                  boxShadow: "var(--shadow-float)",
                  transition: "border-color 0.2s ease, box-shadow 0.2s ease"
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--accent-orange)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border-medium)")}
                aria-label="Search cafés in Chandigarh by name, sector, vibe, or budget"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  style={{
                    position: "absolute",
                    right: "20px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "transparent",
                    border: "none",
                    color: "var(--cream-faint)",
                    cursor: "pointer",
                    fontSize: "16px",
                    padding: "4px"
                  }}
                  title="Clear search"
                  aria-label="Clear search query"
                >
                  ✕
                </button>
              )}
            </motion.div>

            {/* Quick Conversational Suggestions */}
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
                    margin: "24px auto 0 auto",
                    maxWidth: "540px",
                    background: "rgba(224, 122, 56, 0.12)",
                    border: "1px solid rgba(224, 122, 56, 0.35)",
                    borderRadius: "var(--radius-md)",
                    padding: "12px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    textAlign: "left"
                  }}
                >
                  <div style={{ fontSize: "20px" }}>☕</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--accent-orange)" }}>
                      {conversationalResponse.lead}
                    </div>
                    <div style={{ fontSize: "12.5px", color: "var(--cream)", marginTop: "2px" }}>
                      {conversationalResponse.detail}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* "WHAT'S THE MOOD?" INTERACTIVE SECTION */}
        <section>
          <div className="container">
            <MoodSelector
              activeCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
        </section>

        {/* EDITORIAL REFINEMENT BAR (Sector, Budget, Trust, Sort) */}
        <section style={{ margin: "16px 0 28px 0" }}>
          <div className="container">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "14px",
                padding: "14px 20px",
                background: "var(--bg-surface-elevated)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)"
              }}
            >
              {/* Left Filters */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
                {/* Sector Selector */}
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span className="label-editorial-muted">SECTOR:</span>
                  <select
                    value={selectedSector}
                    onChange={(e) => setSelectedSector(e.target.value)}
                    style={filterSelectStyle}
                  >
                    {CHANDIGARH_SECTORS.map((sec) => (
                      <option key={sec} value={sec} style={{ background: "#160f0b", color: "#fcf8f2" }}>
                        {sec}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Filter */}
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span className="label-editorial-muted">PRICE:</span>
                  <select
                    value={selectedPrice}
                    onChange={(e) => setSelectedPrice(e.target.value)}
                    style={filterSelectStyle}
                  >
                    <option value="all" style={{ background: "#160f0b" }}>All Prices</option>
                    <option value="₹" style={{ background: "#160f0b" }}>₹ (Budget &lt; ₹500)</option>
                    <option value="₹₹" style={{ background: "#160f0b" }}>₹₹ (Moderate ₹500–₹1000)</option>
                    <option value="₹₹₹" style={{ background: "#160f0b" }}>₹₹₹ (Premium &gt; ₹1000)</option>
                  </select>
                </div>

                {/* Trust Score Gate */}
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span className="label-editorial-muted">TRUST:</span>
                  <select
                    value={minTrust}
                    onChange={(e) => setMinTrust(e.target.value)}
                    style={filterSelectStyle}
                  >
                    <option value="all" style={{ background: "#160f0b" }}>All Scores</option>
                    <option value="80" style={{ background: "#160f0b" }}>80+ Trusted</option>
                    <option value="90" style={{ background: "#160f0b" }}>90+ Highly Trusted</option>
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
                  >
                    <option value="recommended" style={{ background: "#160f0b" }}>✦ Curated Recommendation</option>
                    <option value="trust" style={{ background: "#160f0b" }}>🛡️ Highest Trust Score</option>
                    <option value="rating" style={{ background: "#160f0b" }}>★ Highest Rated</option>
                    <option value="reviews" style={{ background: "#160f0b" }}>💬 Most Reviewed</option>
                    <option value="distance" style={{ background: "#160f0b" }}>📍 Nearest to Center</option>
                  </select>
                </div>

                {(searchQuery || selectedCategory !== "all" || selectedSector !== "All Chandigarh" || selectedPrice !== "all" || minTrust !== "all") && (
                  <button
                    type="button"
                    onClick={handleResetFilters}
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

        {/* EDITORIAL DISCOVERY CONTENT */}
        <section>
          <div className="container">
            <EditorialGrid
              cafes={filteredCafes}
              onResetFilters={handleResetFilters}
              selectedMood={selectedCategory}
            />
          </div>
        </section>

        {/* EDITORIAL FOOTER */}
        <footer
          style={{
            marginTop: "60px",
            borderTop: "1px solid var(--border-subtle)",
            padding: "48px 0 36px 0",
            background: "rgba(16, 11, 8, 0.95)"
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
              <div className="label-editorial-muted" style={{ marginTop: "8px" }}>
                CHANDIGARH • ONE CUP AT A TIME
              </div>
            </div>

            <div style={{ display: "flex", gap: "24px", fontSize: "13px" }}>
              <Link to="/" style={{ color: "var(--cream-muted)", textDecoration: "none" }}>
                Discover
              </Link>
              <Link to="/map" style={{ color: "var(--cream-muted)", textDecoration: "none" }}>
                Explore Map
              </Link>
              <Link to="/saved" style={{ color: "var(--cream-muted)", textDecoration: "none" }}>
                Your Little Coffee List
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
  padding: "6px 12px",
  borderRadius: "var(--radius-sm)",
  fontSize: "12px",
  fontWeight: 500,
  outline: "none",
  cursor: "pointer"
};
