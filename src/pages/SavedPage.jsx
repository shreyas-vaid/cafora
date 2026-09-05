import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { CAFES_DATA } from "../data/cafesData";
import { getSavedCafes, toggleSaveCafe, COLLECTIONS } from "../utils/storage";
import Navbar from "../components/common/Navbar";
import CafeCard from "../components/feed/CafeCard";

export default function SavedPage() {
  const [savedItems, setSavedItems] = useState([]);
  const [activeCollection, setActiveCollection] = useState("all");

  const loadSaved = () => {
    setSavedItems(getSavedCafes());
  };

  useEffect(() => {
    loadSaved();
    window.addEventListener("storage", loadSaved);
    window.addEventListener("cafora_auth_change", loadSaved);
    return () => {
      window.removeEventListener("storage", loadSaved);
      window.removeEventListener("cafora_auth_change", loadSaved);
    };
  }, []);

  // Map saved items to full cafe objects
  const savedCafes = useMemo(() => {
    return savedItems
      .map((item) => {
        const cafe = CAFES_DATA.find((c) => c.id === item.id);
        return cafe ? { ...cafe, savedCollection: item.collection } : null;
      })
      .filter(Boolean);
  }, [savedItems]);

  const filteredSaved = useMemo(() => {
    if (activeCollection === "all") return savedCafes;
    return savedCafes.filter((c) => c.savedCollection === activeCollection);
  }, [savedCafes, activeCollection]);

  const handleToggleSave = (cafe) => {
    toggleSaveCafe(cafe);
    loadSaved();
  };

  return (
    <div className="app-shell">
      <div className="app-overlay" />
      <Navbar />

      <main className="app-content" style={{ padding: "44px 0 70px 0" }}>
        <div className="container" style={{ maxWidth: "1160px" }}>
          {/* Header */}
          <div style={{ marginBottom: "32px" }}>
            <span
              style={{
                background: "rgba(224, 122, 56, 0.15)",
                color: "var(--accent-orange)",
                padding: "3px 10px",
                borderRadius: "var(--radius-pill)",
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase"
              }}
            >
              ✦ PERSONAL CURATION
            </span>
            <h1
              style={{
                fontSize: "clamp(32px, 4.5vw, 44px)",
                fontFamily: "var(--font-serif)",
                color: "var(--cream)",
                lineHeight: 1.15,
                marginTop: "8px"
              }}
            >
              Your Coffee List
            </h1>
            <p
              style={{
                color: "var(--cream-muted)",
                fontSize: "16px",
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                marginTop: "6px"
              }}
            >
              "Places you've got to try."
            </p>

          </div>

          {/* Collection Filter Tabs */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              overflowX: "auto",
              paddingBottom: "16px",
              marginBottom: "32px",
              borderBottom: "1px solid var(--border-subtle)"
            }}
          >
            {COLLECTIONS.map((col) => {
              const count =
                col.id === "all"
                  ? savedCafes.length
                  : savedCafes.filter((c) => c.savedCollection === col.id).length;

              const isActive = activeCollection === col.id;

              return (
                <button
                  key={col.id}
                  type="button"
                  onClick={() => setActiveCollection(col.id)}
                  style={{
                    padding: "8px 18px",
                    borderRadius: "var(--radius-pill)",
                    background: isActive ? "var(--accent-orange)" : "var(--bg-surface-elevated)",
                    border: isActive ? "none" : "1px solid var(--border-subtle)",
                    color: isActive ? "#100b08" : "var(--cream)",
                    fontWeight: 700,
                    fontSize: "12.5px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "all 0.2s ease",
                    boxShadow: isActive ? "0 4px 14px rgba(224, 122, 56, 0.3)" : "none"
                  }}
                >
                  <span>{col.icon}</span>
                  <span>{col.label}</span>
                  <span
                    style={{
                      background: isActive ? "rgba(16, 11, 8, 0.2)" : "rgba(252, 248, 242, 0.12)",
                      color: isActive ? "#100b08" : "var(--cream)",
                      fontSize: "11px",
                      padding: "1px 7px",
                      borderRadius: "10px",
                      fontWeight: 800
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Saved Items Grid */}
          {filteredSaved.length > 0 ? (
            <div className="editorial-grid">
              {filteredSaved.map((cafe) => (
                <CafeCard
                  key={cafe.id}
                  cafe={cafe}
                  onToggleSave={handleToggleSave}
                  layoutStyle="standard"
                />
              ))}
            </div>
          ) : (
            <div
              style={{
                background: "var(--bg-surface-elevated)",
                borderRadius: "var(--radius-xl)",
                padding: "60px 24px",
                textAlign: "center",
                border: "1px solid var(--border-subtle)",
                maxWidth: "540px",
                margin: "40px auto"
              }}
            >
              <div style={{ fontSize: "44px", marginBottom: "16px" }}>☕</div>
              <h3
                style={{
                  fontSize: "24px",
                  fontFamily: "var(--font-serif)",
                  color: "var(--cream)",
                  marginBottom: "8px"
                }}
              >
                Your cafe list is looking lonely.
              </h3>
              <p style={{ fontSize: "14.5px", color: "var(--cream-muted)", marginBottom: "24px", lineHeight: 1.5 }}>
                Go find somewhere worth saving. Tell CAFORA your vibe and bookmark your next coffee run.
              </p>
              <Link
                to="/"
                style={{
                  background: "var(--accent-orange)",
                  color: "#100b08",
                  fontWeight: 700,
                  fontSize: "13.5px",
                  padding: "11px 26px",
                  borderRadius: "var(--radius-pill)",
                  textDecoration: "none",
                  display: "inline-block"
                }}
              >
                Find my vibe →
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
