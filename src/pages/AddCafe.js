import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import { CHANDIGARH_SECTORS } from "../data/cafesData";
import { submitUserCafe } from "../utils/storage";

export default function AddCafe() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [sector, setSector] = useState("Sector 8");
  const [address, setAddress] = useState("");
  const [rating, setRating] = useState("4.5");
  const [vibe, setVibe] = useState("Specialty Coffee");
  const [priceRange, setPriceRange] = useState("₹₹");
  const [heroImage, setHeroImage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null); // { type: 'success' | 'error', text: '' }

  const addCafe = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setStatusMessage({ type: "error", text: "Please provide the café name." });
      return;
    }

    setSubmitting(true);

    const newSpot = {
      name: name.trim(),
      sector,
      address: address.trim() || `${sector}, Chandigarh`,
      rating: Number(rating) || 4.5,
      vibe,
      priceRange,
      heroImage: heroImage.trim() || "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
    };

    submitUserCafe(newSpot);

    setStatusMessage({
      type: "success",
      text: `"${newSpot.name}" has been submitted to the Chandigarh city index! Returning to discovery...`
    });

    setTimeout(() => {
      navigate("/");
    }, 1800);
  };

  return (
    <div className="app-shell">
      <div className="app-overlay" />
      <Navbar />

      <main className="app-content" style={{ padding: "48px 20px 80px" }}>
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            background: "var(--bg-surface-elevated)",
            border: "1px solid var(--border-medium)",
            borderRadius: "var(--radius-xl)",
            padding: "40px 36px",
            boxShadow: "var(--shadow-float)"
          }}
        >
          {/* Editorial Form Header */}
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <span className="label-editorial">
              <span>✦</span> KNOW A GOOD SPOT?
            </span>
            <h1
              style={{
                fontSize: "clamp(26px, 4vw, 36px)",
                fontFamily: "var(--font-serif)",
                color: "var(--cream)",
                lineHeight: 1.15,
                marginTop: "6px"
              }}
            >
              Help Chandigarh discover it.
            </h1>
            <p
              style={{
                color: "var(--cream-muted)",
                fontSize: "14.5px",
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                marginTop: "6px"
              }}
            >
              "Know a coffee roaster, quiet work corner, or hidden bakehouse we haven't mapped yet?"
            </p>
          </div>

          {/* Status Message Banner (Replaces primitive alert) */}
          {statusMessage && (
            <div
              style={{
                padding: "12px 18px",
                borderRadius: "var(--radius-sm)",
                marginBottom: "20px",
                fontSize: "13px",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: statusMessage.type === "success" ? "rgba(45, 164, 115, 0.15)" : "rgba(201, 59, 59, 0.15)",
                border: statusMessage.type === "success" ? "1px solid rgba(45, 164, 115, 0.4)" : "1px solid rgba(201, 59, 59, 0.4)",
                color: statusMessage.type === "success" ? "var(--trust-high)" : "#f87171"
              }}
            >
              <span>{statusMessage.type === "success" ? "☕" : "⚠️"}</span>
              <span>{statusMessage.text}</span>
            </div>
          )}

          <form onSubmit={addCafe} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div>
              <label htmlFor="cafe-name-input" style={labelStyle}>Café Name *</label>
              <input
                id="cafe-name-input"
                type="text"
                placeholder="e.g. Back Lane Coffee Bar"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (statusMessage) setStatusMessage(null);
                }}
                style={inputStyle}
                required
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px" }}>
              <div>
                <label htmlFor="cafe-sector-select" style={labelStyle}>Chandigarh Sector *</label>
                <select
                  id="cafe-sector-select"
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  style={inputStyle}
                >
                  {CHANDIGARH_SECTORS.filter((s) => s !== "All Chandigarh").map((sec) => (
                    <option key={sec} value={sec} style={{ background: "#160f0b" }}>
                      {sec}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="cafe-price-select" style={labelStyle}>Price Category</label>
                <select
                  id="cafe-price-select"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  style={inputStyle}
                >
                  <option value="₹" style={{ background: "#160f0b" }}>₹ (Under ₹500 for 2)</option>
                  <option value="₹₹" style={{ background: "#160f0b" }}>₹₹ (₹500 - ₹1000)</option>
                  <option value="₹₹₹" style={{ background: "#160f0b" }}>₹₹₹ (Premium &gt; ₹1000)</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="cafe-address-input" style={labelStyle}>Street Address / Landmark</label>
              <input
                id="cafe-address-input"
                type="text"
                placeholder="e.g. Inner Market, SCO 14, Sector 8-C"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px" }}>
              <div>
                <label htmlFor="cafe-vibe-select" style={labelStyle}>Primary Vibe / Category</label>
                <select
                  id="cafe-vibe-select"
                  value={vibe}
                  onChange={(e) => setVibe(e.target.value)}
                  style={inputStyle}
                >
                  <option value="Specialty Coffee" style={{ background: "#160f0b" }}>☕ Specialty Coffee</option>
                  <option value="Work Friendly" style={{ background: "#160f0b" }}>💻 Work / Laptop Friendly</option>
                  <option value="Date Spots" style={{ background: "#160f0b" }}>❤️ Date Night</option>
                  <option value="Quiet / Reading" style={{ background: "#160f0b" }}>🌿 Quiet / Reading Corner</option>
                  <option value="Bakery & Desserts" style={{ background: "#160f0b" }}>🍰 Bakery & Pastries</option>
                  <option value="Aesthetic & Photo Spots" style={{ background: "#160f0b" }}>📸 Photogenic / Aesthetic</option>
                  <option value="Late Night" style={{ background: "#160f0b" }}>🌙 Late Night</option>
                </select>
              </div>

              <div>
                <label htmlFor="cafe-rating-select" style={labelStyle}>Your Rating Estimate</label>
                <select
                  id="cafe-rating-select"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  style={inputStyle}
                >
                  <option value="5.0" style={{ background: "#160f0b" }}>★★★★★ (5.0 - Exceptional)</option>
                  <option value="4.5" style={{ background: "#160f0b" }}>★★★★½ (4.5 - Excellent)</option>
                  <option value="4.0" style={{ background: "#160f0b" }}>★★★★☆ (4.0 - Good)</option>
                  <option value="3.5" style={{ background: "#160f0b" }}>★★★½☆ (3.5 - Decent)</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="cafe-photo-input" style={labelStyle}>Photo URL (Optional)</label>
              <input
                id="cafe-photo-input"
                type="url"
                placeholder="https://images.unsplash.com/..."
                value={heroImage}
                onChange={(e) => setHeroImage(e.target.value)}
                style={inputStyle}
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn-editorial-primary"
              style={{
                marginTop: "10px",
                padding: "14px",
                fontSize: "14px",
                width: "100%",
                opacity: submitting ? 0.7 : 1
              }}
            >
              {submitting ? "Submitting Spot..." : "Submit to City Guide →"}
            </button>

            <div style={{ textAlign: "center", marginTop: "12px" }}>
              <Link to="/" style={{ color: "var(--cream-faint)", fontSize: "13px", textDecoration: "none" }}>
                ← Cancel & Return to Discovery
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

const labelStyle = {
  display: "block",
  fontSize: "11.5px",
  fontWeight: 700,
  letterSpacing: "0.06em",
  color: "var(--cream-muted)",
  marginBottom: "6px",
  textTransform: "uppercase"
};

const inputStyle = {
  width: "100%",
  padding: "11px 14px",
  background: "rgba(16, 11, 8, 0.6)",
  border: "1px solid var(--border-medium)",
  borderRadius: "var(--radius-sm)",
  color: "var(--cream)",
  fontSize: "13.5px",
  outline: "none",
  fontFamily: "var(--font-sans)"
};