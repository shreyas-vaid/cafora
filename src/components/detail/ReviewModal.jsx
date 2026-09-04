import React, { useState } from "react";
import { saveUserReview } from "../../utils/storage";

export default function ReviewModal({ cafe, isOpen, onClose, onReviewSubmitted }) {
  const [rating, setRating] = useState(5);
  const [foodRating, setFoodRating] = useState(5);
  const [ambienceRating, setAmbienceRating] = useState(5);
  const [serviceRating, setServiceRating] = useState(5);
  const [valueRating, setValueRating] = useState(5);
  const [wouldRecommend, setWouldRecommend] = useState("yes");
  
  const [author, setAuthor] = useState("");
  const [authorSector, setAuthorSector] = useState("Sector 8");
  const [order, setOrder] = useState("");
  const [whatWasGood, setWhatWasGood] = useState("");
  const [whatCouldBeBetter, setWhatCouldBeBetter] = useState("");
  const [crowdLevel, setCrowdLevel] = useState("Moderate");
  const [reviewText, setReviewText] = useState("");
  const [verified, setVerified] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen || !cafe) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reviewText.trim()) {
      setErrorMsg("Please write a few words about your visit.");
      return;
    }

    const newReview = {
      author: author.trim() || "Chandigarh Visitor",
      authorSector,
      rating: Number(rating),
      foodRating: Number(foodRating),
      ambienceRating: Number(ambienceRating),
      serviceRating: Number(serviceRating),
      valueRating: Number(valueRating),
      wouldRecommend: wouldRecommend === "yes",
      order: order.trim() || "Coffee & Snacks",
      whatWasGood: whatWasGood.trim(),
      whatCouldBeBetter: whatCouldBeBetter.trim(),
      crowdLevel,
      text: reviewText.trim(),
      verified,
      isUserSubmission: true,
      date: "Just now",
      vibeRating: `${crowdLevel} crowd`
    };

    saveUserReview(cafe.id, newReview);
    if (onReviewSubmitted) onReviewSubmitted(newReview);
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        background: "rgba(0, 0, 0, 0.75)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          maxHeight: "90vh",
          overflowY: "auto",
          background: "rgba(24, 17, 12, 0.96)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          borderRadius: "var(--radius-lg)",
          padding: "28px",
          boxShadow: "var(--shadow-float)",
          color: "#ffffff"
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            paddingBottom: "12px"
          }}
        >
          <div>
            <h3 style={{ fontSize: "20px", color: "#ffffff" }}>Write an Honest Review</h3>
            <p style={{ fontSize: "13px", color: "var(--primary)" }}>{cafe.name} ({cafe.sector})</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            style={{
              background: "transparent",
              border: "none",
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: "24px",
              cursor: "pointer",
              padding: "4px 8px"
            }}
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Identity & Sector */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <div>
              <label style={{ fontSize: "12px", color: "var(--text-secondary)", display: "block", marginBottom: "4px" }}>
                Your Name
              </label>
              <input
                type="text"
                placeholder="e.g. Gurpreet Singh"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={{ fontSize: "12px", color: "var(--text-secondary)", display: "block", marginBottom: "4px" }}>
                Your Sector / Neighborhood
              </label>
              <input
                type="text"
                placeholder="e.g. Sector 10"
                value={authorSector}
                onChange={(e) => setAuthorSector(e.target.value)}
                style={inputStyle}
              />
            </div>
          </div>

          {/* Rating & Recommendation */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <div>
              <label style={{ fontSize: "12px", color: "var(--text-secondary)", display: "block", marginBottom: "4px" }}>
                Overall Rating (★ 1 to 5)
              </label>
              <select
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                style={inputStyle}
              >
                <option value={5}>★ 5 - Exceptional Experience</option>
                <option value={4}>★ 4 - Very Good</option>
                <option value={3}>★ 3 - Average / Mixed</option>
                <option value={2}>★ 2 - Below Expectations</option>
                <option value={1}>★ 1 - Poor / Avoid</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: "12px", color: "var(--text-secondary)", display: "block", marginBottom: "4px" }}>
                Would you recommend?
              </label>
              <select
                value={wouldRecommend}
                onChange={(e) => setWouldRecommend(e.target.value)}
                style={inputStyle}
              >
                <option value="yes">✓ Yes, definitely worth visiting</option>
                <option value="no">✕ No, there are better spots</option>
              </select>
            </div>
          </div>

          {/* Sub-Ratings: Food, Ambience, Service, Value */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
            <div>
              <label style={{ fontSize: "11px", color: "var(--text-secondary)", display: "block", marginBottom: "3px" }}>
                Food (★)
              </label>
              <select
                value={foodRating}
                onChange={(e) => setFoodRating(Number(e.target.value))}
                style={{ ...inputStyle, padding: "8px 6px", fontSize: "12px" }}
              >
                <option value={5}>5 ★</option>
                <option value={4}>4 ★</option>
                <option value={3}>3 ★</option>
                <option value={2}>2 ★</option>
                <option value={1}>1 ★</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: "11px", color: "var(--text-secondary)", display: "block", marginBottom: "3px" }}>
                Ambience (★)
              </label>
              <select
                value={ambienceRating}
                onChange={(e) => setAmbienceRating(Number(e.target.value))}
                style={{ ...inputStyle, padding: "8px 6px", fontSize: "12px" }}
              >
                <option value={5}>5 ★</option>
                <option value={4}>4 ★</option>
                <option value={3}>3 ★</option>
                <option value={2}>2 ★</option>
                <option value={1}>1 ★</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: "11px", color: "var(--text-secondary)", display: "block", marginBottom: "3px" }}>
                Service (★)
              </label>
              <select
                value={serviceRating}
                onChange={(e) => setServiceRating(Number(e.target.value))}
                style={{ ...inputStyle, padding: "8px 6px", fontSize: "12px" }}
              >
                <option value={5}>5 ★</option>
                <option value={4}>4 ★</option>
                <option value={3}>3 ★</option>
                <option value={2}>2 ★</option>
                <option value={1}>1 ★</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: "11px", color: "var(--text-secondary)", display: "block", marginBottom: "3px" }}>
                Value (★)
              </label>
              <select
                value={valueRating}
                onChange={(e) => setValueRating(Number(e.target.value))}
                style={{ ...inputStyle, padding: "8px 6px", fontSize: "12px" }}
              >
                <option value={5}>5 ★</option>
                <option value={4}>4 ★</option>
                <option value={3}>3 ★</option>
                <option value={2}>2 ★</option>
                <option value={1}>1 ★</option>
              </select>
            </div>
          </div>

          {/* What did you order? */}
          <div>
            <label style={{ fontSize: "12px", color: "var(--text-secondary)", display: "block", marginBottom: "4px" }}>
              What did you order? (Dishes & Drinks)
            </label>
            <input
              type="text"
              placeholder="e.g. Pour Over, Truffle Mushroom Pizza, Almond Croissant"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
              style={inputStyle}
            />
          </div>

          {/* Structured Questions: What was good vs What could be better */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <div>
              <label style={{ fontSize: "12px", color: "#34d399", display: "block", marginBottom: "4px", fontWeight: 600 }}>
                ✓ What was good?
              </label>
              <input
                type="text"
                placeholder="e.g. Fast Wi-Fi, great coffee crema, quiet ambience"
                value={whatWasGood}
                onChange={(e) => setWhatWasGood(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={{ fontSize: "12px", color: "#fb923c", display: "block", marginBottom: "4px", fontWeight: 600 }}>
                ⚠️ What could be better?
              </label>
              <input
                type="text"
                placeholder="e.g. Busy parking, slow service at rush hour"
                value={whatCouldBeBetter}
                onChange={(e) => setWhatCouldBeBetter(e.target.value)}
                style={inputStyle}
              />
            </div>
          </div>

          {/* Crowd & Wait Time */}
          <div>
            <label style={{ fontSize: "12px", color: "var(--text-secondary)", display: "block", marginBottom: "4px" }}>
              How crowded was it during your visit?
            </label>
            <select
              value={crowdLevel}
              onChange={(e) => setCrowdLevel(e.target.value)}
              style={inputStyle}
            >
              <option value="Peaceful & Quiet">Peaceful & Quiet (Plenty of open tables)</option>
              <option value="Moderate">Moderate (Comfortable buzz)</option>
              <option value="Bustling">Bustling (Almost full)</option>
              <option value="Packed with Wait Queue">Packed (15+ min wait queue)</option>
            </select>
          </div>

          {/* Detailed Experience */}
          <div>
            <label style={{ fontSize: "12px", color: "var(--text-secondary)", display: "block", marginBottom: "4px" }}>
              Detailed Review (Help fellow visitors make an informed choice)
            </label>
            {errorMsg && (
              <div style={{ color: "#f87171", fontSize: "12px", marginBottom: "6px", fontWeight: 600 }}>
                ⚠️ {errorMsg}
              </div>
            )}
            <textarea
              rows={4}
              placeholder="Describe the coffee roast, seating comfort, noise levels, and whether you'd return..."
              value={reviewText}
              onChange={(e) => {
                setReviewText(e.target.value);
                if (errorMsg) setErrorMsg("");
              }}
              style={{
                ...inputStyle,
                resize: "vertical"
              }}
              required
            />
          </div>

          {/* Verified Visit Checkbox */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(255, 255, 255, 0.05)",
              padding: "10px 14px",
              borderRadius: "var(--radius-sm)",
              border: "1px solid rgba(255, 255, 255, 0.1)"
            }}
          >
            <input
              type="checkbox"
              id="verified-visit"
              checked={verified}
              onChange={(e) => setVerified(e.target.checked)}
              style={{ width: "18px", height: "18px", accentColor: "var(--primary)" }}
            />
            <label htmlFor="verified-visit" style={{ fontSize: "13px", cursor: "pointer" }}>
              <strong>Verified Visit</strong> — I physically visited this cafe in Chandigarh and paid for my order.
            </label>
          </div>

          {/* Submit Action */}
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "8px" }}>
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary"
              style={{ padding: "10px 18px", fontSize: "13px" }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary"
              style={{ padding: "10px 22px", fontSize: "13px" }}
            >
              Submit Honest Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px 14px",
  background: "rgba(255, 255, 255, 0.08)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  borderRadius: "10px",
  color: "#ffffff",
  fontSize: "13px",
  outline: "none",
  fontFamily: "inherit"
};
