import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import CafeFinderLogo from "../components/brand/CafeFinderLogo";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [statusMessage, setStatusMessage] = useState(null);

  const handleLogin = (e) => {
    if (e) e.preventDefault();
    if (!username.trim()) {
      setStatusMessage({ type: "error", text: "Please enter your curator username or email." });
      return;
    }

    try {
      localStorage.setItem("cafe_finder_user", JSON.stringify({ username: username.trim(), loggedInAt: new Date().toISOString() }));
    } catch (err) {}

    setStatusMessage({
      type: "success",
      text: `Welcome back, ${username.trim()}! Accessing your personal coffee journal...`
    });

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  const handleRegister = (e) => {
    if (e) e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setStatusMessage({ type: "error", text: "Please enter a username and password to register." });
      return;
    }

    try {
      localStorage.setItem("cafe_finder_user", JSON.stringify({ username: username.trim(), registeredAt: new Date().toISOString() }));
    } catch (err) {}

    setStatusMessage({
      type: "success",
      text: `Account created for ${username.trim()}! Welcome to Cafora Chandigarh.`
    });

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="app-shell">
      <div className="app-overlay" />
      <Navbar />

      <main className="app-content" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "calc(100vh - var(--header-height))", padding: "24px 20px" }}>
        <div
          style={{
            width: "100%",
            maxWidth: "420px",
            padding: "40px 32px",
            borderRadius: "var(--radius-xl)",
            background: "var(--bg-surface-elevated)",
            border: "1px solid var(--border-medium)",
            boxShadow: "var(--shadow-float)",
            textAlign: "center",
            color: "var(--cream)"
          }}
        >
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
            <CafeFinderLogo size={52} showText={false} animate={true} />
          </div>

          <span className="label-editorial" style={{ letterSpacing: "0.18em" }}>
            <span>✦</span> CHANDIGARH CITY GUIDE
          </span>

          <h1
            style={{
              fontSize: "26px",
              fontFamily: "var(--font-serif)",
              color: "var(--cream)",
              marginTop: "6px",
              marginBottom: "6px"
            }}
          >
            Welcome to Cafora
          </h1>
          <p style={{ color: "var(--cream-muted)", fontSize: "13.5px", marginBottom: "20px" }}>
            Bookmark personal roasters and contribute honest field notes.
          </p>

          {/* Inline Status Message */}
          {statusMessage && (
            <div
              style={{
                padding: "10px 14px",
                borderRadius: "var(--radius-sm)",
                marginBottom: "18px",
                fontSize: "12.5px",
                fontWeight: 600,
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: statusMessage.type === "success" ? "rgba(45, 164, 115, 0.15)" : "rgba(201, 59, 59, 0.15)",
                border: statusMessage.type === "success" ? "1px solid rgba(45, 164, 115, 0.4)" : "1px solid rgba(201, 59, 59, 0.4)",
                color: statusMessage.type === "success" ? "var(--trust-high)" : "#f87171"
              }}
            >
              <span>{statusMessage.type === "success" ? "✓" : "⚠️"}</span>
              <span>{statusMessage.text}</span>
            </div>
          )}

          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div>
              <label htmlFor="username-input" style={{ display: "none" }}>Username or Email</label>
              <input
                id="username-input"
                type="text"
                placeholder="Username or Email"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  if (statusMessage) setStatusMessage(null);
                }}
                style={inputStyle}
                required
              />
            </div>

            <div>
              <label htmlFor="password-input" style={{ display: "none" }}>Password</label>
              <input
                id="password-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (statusMessage) setStatusMessage(null);
                }}
                style={inputStyle}
                required
              />
            </div>

            <button
              type="submit"
              className="btn-editorial-primary"
              style={{ width: "100%", justifyContent: "center", padding: "12px", marginTop: "4px" }}
            >
              Log In to City Guide →
            </button>
          </form>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              margin: "20px 0",
              color: "var(--cream-faint)",
              fontSize: "12px"
            }}
          >
            <div style={{ flex: 1, height: "1px", background: "var(--border-subtle)" }} />
            <span>or join the community</span>
            <div style={{ flex: 1, height: "1px", background: "var(--border-subtle)" }} />
          </div>

          <button
            type="button"
            onClick={handleRegister}
            className="btn-editorial-secondary"
            style={{ width: "100%", justifyContent: "center", padding: "11px" }}
          >
            Create Curator Account
          </button>

          <div style={{ marginTop: "24px", fontSize: "12px", color: "var(--cream-faint)" }}>
            <Link to="/" style={{ color: "var(--cream-muted)", textDecoration: "none" }}>
              ← Return to Discovery Feed
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  background: "rgba(16, 11, 8, 0.6)",
  border: "1px solid var(--border-subtle)",
  borderRadius: "var(--radius-sm)",
  color: "var(--cream)",
  fontSize: "13.5px",
  outline: "none",
  fontFamily: "var(--font-sans)"
};