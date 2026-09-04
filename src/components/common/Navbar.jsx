import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import CafeFinderLogo from "../brand/CafeFinderLogo";
import { getSavedCafes } from "../../utils/storage";

export default function Navbar({ onOpenReviewModal }) {
  const location = useLocation();
  const [savedCount, setSavedCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateCount = () => {
      const saved = getSavedCafes();
      setSavedCount(saved.length);
    };
    updateCount();
    window.addEventListener("storage", updateCount);
    return () => window.removeEventListener("storage", updateCount);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === "/" && (location.pathname === "/" || location.pathname === "/home")) return true;
    return location.pathname === path;
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        height: "var(--header-height)",
        background: scrolled ? "rgba(16, 11, 8, 0.94)" : "rgba(16, 11, 8, 0.75)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border-subtle)",
        transition: "background 0.3s ease, border-color 0.3s ease"
      }}
    >
      <div
        className="container"
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        {/* LEFT: Brand Mark + Tracked Chandigarh */}
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <CafeFinderLogo size={36} showText={true} showSubtitle={true} animate={true} />
        </Link>

        {/* CENTER: Editorial Navigation Links (Desktop) */}
        <nav
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px"
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.02em",
              color: isActive("/") ? "var(--cream)" : "var(--cream-muted)",
              position: "relative",
              padding: "6px 0",
              transition: "color 0.2s ease"
            }}
          >
            Discover
            {isActive("/") && (
              <span
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "var(--accent-orange)",
                  borderRadius: "2px"
                }}
              />
            )}
          </Link>

          <Link
            to="/map"
            style={{
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.02em",
              color: isActive("/map") ? "var(--cream)" : "var(--cream-muted)",
              position: "relative",
              padding: "6px 0",
              transition: "color 0.2s ease",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            Explore Map
            {isActive("/map") && (
              <span
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "var(--accent-orange)",
                  borderRadius: "2px"
                }}
              />
            )}
          </Link>

          <Link
            to="/saved"
            style={{
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.02em",
              color: isActive("/saved") ? "var(--cream)" : "var(--cream-muted)",
              position: "relative",
              padding: "6px 0",
              transition: "color 0.2s ease",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            <span>Saved</span>
            {savedCount > 0 && (
              <span
                style={{
                  background: "var(--terracotta)",
                  color: "#ffffff",
                  fontSize: "10.5px",
                  fontWeight: 700,
                  padding: "1px 7px",
                  borderRadius: "10px",
                  lineHeight: "1.3"
                }}
              >
                {savedCount}
              </span>
            )}
            {isActive("/saved") && (
              <span
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "var(--accent-orange)",
                  borderRadius: "2px"
                }}
              />
            )}
          </Link>
        </nav>

        {/* RIGHT: + Add a Café & Profile */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <Link
            to="/add"
            className="btn-editorial-secondary"
            style={{
              padding: "8px 18px",
              fontSize: "12.5px"
            }}
          >
            <span style={{ color: "var(--accent-orange)", fontWeight: 800 }}>+</span> Add a Café
          </Link>

          <Link
            to="/login"
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              background: "var(--bg-surface-elevated)",
              border: "1px solid var(--border-medium)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--cream-muted)",
              textDecoration: "none",
              fontSize: "15px",
              transition: "all 0.2s ease"
            }}
            title="Profile & Preferences"
            aria-label="Profile & Preferences"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </Link>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: "none",
              background: "transparent",
              border: "none",
              color: "var(--cream)",
              fontSize: "22px",
              cursor: "pointer",
              padding: "4px"
            }}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "var(--bg-surface-elevated)",
            borderBottom: "1px solid var(--border-medium)",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            boxShadow: "var(--shadow-card)"
          }}
        >
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              textDecoration: "none",
              color: "var(--cream)",
              fontSize: "16px",
              fontWeight: 600
            }}
          >
            Discover
          </Link>
          <Link
            to="/map"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              textDecoration: "none",
              color: "var(--cream)",
              fontSize: "16px",
              fontWeight: 600
            }}
          >
            Explore Map
          </Link>
          <Link
            to="/saved"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              textDecoration: "none",
              color: "var(--cream)",
              fontSize: "16px",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            Saved Cafes {savedCount > 0 && `(${savedCount})`}
          </Link>
          <Link
            to="/add"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              textDecoration: "none",
              color: "var(--accent-orange)",
              fontSize: "16px",
              fontWeight: 600
            }}
          >
            + Add a Café
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
