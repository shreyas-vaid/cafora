import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import CafeFinderLogo from "../brand/CafeFinderLogo";
import { getSavedCafes } from "../../utils/storage";
import { getCurrentUser } from "../../utils/auth";

export default function Navbar({ onOpenReviewModal }) {
  const location = useLocation();
  const [savedCount, setSavedCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(getCurrentUser());

  useEffect(() => {
    const updateUserData = () => {
      const saved = getSavedCafes();
      setSavedCount(saved.length);
      setCurrentUser(getCurrentUser());
    };

    updateUserData();
    window.addEventListener("storage", updateUserData);
    window.addEventListener("cafora_auth_change", updateUserData);

    return () => {
      window.removeEventListener("storage", updateUserData);
      window.removeEventListener("cafora_auth_change", updateUserData);
    };
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

          {currentUser ? (
            <Link
              to="/login"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "4px 12px 4px 6px",
                borderRadius: "var(--radius-pill)",
                background: "var(--bg-surface-elevated)",
                border: "1px solid var(--border-medium)",
                textDecoration: "none",
                color: "var(--cream)",
                fontSize: "13px",
                fontWeight: 600,
                transition: "all 0.2s ease"
              }}
              title={`Curator Profile: ${currentUser.name}`}
            >
              <div
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  background: currentUser.avatarColor || "var(--accent-orange)",
                  color: "#ffffff",
                  fontSize: "11px",
                  fontWeight: 800,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {(currentUser.name || "C").slice(0, 1).toUpperCase()}
              </div>
              <span style={{ maxWidth: "80px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {currentUser.name ? currentUser.name.split(" ")[0] : "Profile"}
              </span>
            </Link>
          ) : (
            <Link
              to="/login"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 14px",
                borderRadius: "var(--radius-pill)",
                background: "rgba(245, 237, 224, 0.06)",
                border: "1px solid var(--border-subtle)",
                color: "var(--cream)",
                textDecoration: "none",
                fontSize: "12.5px",
                fontWeight: 600,
                transition: "all 0.2s ease"
              }}
              title="Sign In or Register"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>Sign In</span>
            </Link>
          )}

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
          {currentUser ? (
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 14px",
                borderRadius: "var(--radius-md)",
                background: "rgba(224, 122, 95, 0.12)",
                border: "1px solid rgba(224, 122, 95, 0.3)",
                textDecoration: "none",
                color: "var(--cream)"
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: currentUser.avatarColor || "var(--accent-orange)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "13px"
                }}
              >
                {(currentUser.name || "C").slice(0, 1).toUpperCase()}
              </div>
              <div>
                <div style={{ fontSize: "13.5px", fontWeight: 700 }}>{currentUser.name}</div>
                <div style={{ fontSize: "11px", color: "var(--accent-orange)" }}>
                  @{currentUser.username} • View Profile & Stats
                </div>
              </div>
            </Link>
          ) : (
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                color: "var(--accent-orange)",
                fontSize: "15px",
                fontWeight: 600
              }}
            >
              <span>👤 Sign In / Create Curator Account</span>
            </Link>
          )}

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
