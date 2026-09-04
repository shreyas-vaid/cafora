import React, { useState, useMemo } from "react";
import { CAFES_DATA, CHANDIGARH_SECTORS, CATEGORIES } from "../data/cafesData";
import { filterAndSortCafes } from "../utils/searchFilter";
import Navbar from "../components/common/Navbar";
import InteractiveMap from "../components/map/InteractiveMap";
import CafeCard from "../components/feed/CafeCard";

export default function MapPage() {
  const [selectedSector, setSelectedSector] = useState("All Chandigarh");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("map"); // "map" or "list"
  const [activeCafeId, setActiveCafeId] = useState(null);

  const filteredCafes = useMemo(() => {
    return filterAndSortCafes(CAFES_DATA, {
      selectedSector,
      selectedCategory,
      sortBy: "trust"
    });
  }, [selectedSector, selectedCategory]);

  return (
    <div className="app-shell" style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div className="app-overlay" />
      <Navbar />

      {/* Editorial Sub-Header & Controls Bar */}
      <div
        style={{
          background: "var(--bg-surface-elevated)",
          borderBottom: "1px solid var(--border-subtle)",
          padding: "12px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "14px",
          zIndex: 10
        }}
      >
        {/* Left: WHERE ARE THEY? Title & View Switcher */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px", flexWrap: "wrap" }}>
          <div>
            <span className="label-editorial" style={{ fontSize: "10.5px" }}>
              <span>📍</span> WHERE ARE THEY?
            </span>
            <div style={{ fontSize: "14px", fontFamily: "var(--font-serif)", color: "var(--cream)", fontWeight: 700 }}>
              Chandigarh City Guide Map
            </div>
          </div>

          {/* LIST / MAP TOGGLE */}
          <div
            style={{
              display: "inline-flex",
              background: "rgba(16, 11, 8, 0.6)",
              padding: "3px",
              borderRadius: "var(--radius-pill)",
              border: "1px solid var(--border-subtle)"
            }}
          >
            <button
              type="button"
              onClick={() => setViewMode("map")}
              style={{
                background: viewMode === "map" ? "var(--accent-orange)" : "transparent",
                color: viewMode === "map" ? "#100b08" : "var(--cream-muted)",
                fontWeight: 700,
                fontSize: "12px",
                padding: "5px 14px",
                borderRadius: "var(--radius-pill)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            >
              🗺️ Map View
            </button>

            <button
              type="button"
              onClick={() => setViewMode("list")}
              style={{
                background: viewMode === "list" ? "var(--accent-orange)" : "transparent",
                color: viewMode === "list" ? "#100b08" : "var(--cream-muted)",
                fontWeight: 700,
                fontSize: "12px",
                padding: "5px 14px",
                borderRadius: "var(--radius-pill)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            >
              📋 List View
            </button>
          </div>

          {/* Sector Selector */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span className="label-editorial-muted">SECTOR:</span>
            <select
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              style={selectStyle}
            >
              {CHANDIGARH_SECTORS.map((sec) => (
                <option key={sec} value={sec} style={{ background: "#160f0b" }}>
                  {sec}
                </option>
              ))}
            </select>
          </div>

          {/* Vibe Selector */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span className="label-editorial-muted">VIBE:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={selectStyle}
            >
              {CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id} style={{ background: "#160f0b" }}>
                  {cat.icon} {cat.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Right Info */}
        <div style={{ fontSize: "12.5px", color: "var(--cream-faint)" }}>
          Showing <strong>{filteredCafes.length}</strong> verified locations
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden", display: "flex" }}>
        {/* MAP VIEW */}
        {viewMode === "map" ? (
          <>
            <div style={{ flex: 1, height: "100%" }}>
              <InteractiveMap
                cafes={filteredCafes}
                selectedSector={selectedSector}
                activeCafeId={activeCafeId}
              />
            </div>

            {/* Desktop Slide-over Drawer for quick browsing */}
            <div
              className="desktop-map-drawer"
              style={{
                width: "380px",
                height: "100%",
                overflowY: "auto",
                background: "var(--bg-surface-elevated)",
                borderLeft: "1px solid var(--border-subtle)",
                padding: "20px",
                boxShadow: "var(--shadow-card)"
              }}
            >
              <div style={{ marginBottom: "16px" }}>
                <span className="label-editorial">
                  <span>●</span> CHANDIGARH ROASTERS
                </span>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--cream)", marginTop: "2px" }}>
                  Click a pin or browse cards
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {filteredCafes.map((c) => (
                  <div
                    key={c.id}
                    onClick={() => setActiveCafeId(c.id)}
                    style={{
                      cursor: "pointer",
                      border: activeCafeId === c.id ? "1.5px solid var(--accent-orange)" : "none",
                      borderRadius: "var(--radius-lg)"
                    }}
                  >
                    <CafeCard cafe={c} onToggleSave={() => {}} layoutStyle="compact" />
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          /* LIST VIEW */
          <div style={{ flex: 1, overflowY: "auto", padding: "32px 0" }}>
            <div className="container">
              <div style={{ marginBottom: "20px" }}>
                <span className="label-editorial">
                  <span>📋</span> CITY ROASTERS DIRECTORY
                </span>
                <h2 style={{ fontSize: "28px", fontFamily: "var(--font-serif)", color: "var(--cream)", marginTop: "4px" }}>
                  All verified cafés in {selectedSector}
                </h2>
              </div>

              <div className="editorial-grid">
                {filteredCafes.map((c) => (
                  <CafeCard key={c.id} cafe={c} onToggleSave={() => {}} layoutStyle="standard" />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-map-drawer { display: none !important; }
        }
      `}</style>
    </div>
  );
}

const selectStyle = {
  background: "rgba(16, 11, 8, 0.6)",
  border: "1px solid var(--border-subtle)",
  color: "var(--cream)",
  padding: "5px 12px",
  borderRadius: "var(--radius-sm)",
  fontSize: "12px",
  outline: "none",
  cursor: "pointer"
};
