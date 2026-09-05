import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import CafeFinderLogo from "../components/brand/CafeFinderLogo";
import { getCurrentUser, loginUser, registerUser, logoutUser } from "../utils/auth";
import { getUserCurationStats } from "../utils/storage";

export default function Login() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(getCurrentUser());
  const [activeTab, setActiveTab] = useState("login"); // 'login' | 'register'

  // Login form state
  const [loginIdentifier, setLoginIdentifier] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // Register form state
  const [registerName, setRegisterName] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);

  // Feedback states
  const [statusMessage, setStatusMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stats, setStats] = useState({ savedCount: 0, reviewsCount: 0, submissionsCount: 0 });

  useEffect(() => {
    const user = getCurrentUser();
    setCurrentUser(user);
    if (user) {
      setStats(getUserCurationStats(user.id));
    }
  }, []);

  const handleLoginSubmit = (e) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    const result = loginUser(loginIdentifier, loginPassword);

    if (!result.success) {
      setIsSubmitting(false);
      setStatusMessage({ type: "error", text: result.error });
      return;
    }

    setStatusMessage({
      type: "success",
      text: `Welcome back, ${result.user.name}! Syncing your personal coffee journal...`
    });

    setCurrentUser(result.user);
    setStats(getUserCurationStats(result.user.id));
    setIsSubmitting(false);

    setTimeout(() => {
      navigate("/saved");
    }, 1200);
  };

  const handleRegisterSubmit = (e) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    const result = registerUser({
      name: registerName,
      username: registerUsername,
      email: registerEmail,
      password: registerPassword
    });

    if (!result.success) {
      setIsSubmitting(false);
      setStatusMessage({ type: "error", text: result.error });
      return;
    }

    setStatusMessage({
      type: "success",
      text: `Account created for ${result.user.name}! Welcome to Cafora Chandigarh.`
    });

    setCurrentUser(result.user);
    setStats(getUserCurationStats(result.user.id));
    setIsSubmitting(false);

    setTimeout(() => {
      navigate("/");
    }, 1300);
  };

  const handleDemoLogin = () => {
    setLoginIdentifier("arjun@cafora.com");
    setLoginPassword("password123");
    const result = loginUser("arjun@cafora.com", "password123");
    if (result.success) {
      setStatusMessage({
        type: "success",
        text: "Logged in as Demo Curator: Arjun Kapoor! Syncing saved collections..."
      });
      setCurrentUser(result.user);
      setStats(getUserCurationStats(result.user.id));
      setTimeout(() => {
        navigate("/");
      }, 1100);
    }
  };

  const handleLogout = () => {
    logoutUser();
    setCurrentUser(null);
    setStatusMessage({
      type: "success",
      text: "You have been logged out of your session."
    });
  };

  const getInitials = (name) => {
    if (!name) return "CF";
    const parts = name.trim().split(" ");
    if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <div className="app-shell">
      <div className="app-overlay" />
      <Navbar />

      <main
        className="app-content"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "calc(100vh - var(--header-height))",
          padding: "36px 20px"
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "460px",
            padding: "36px 32px",
            borderRadius: "var(--radius-xl)",
            background: "var(--bg-surface-elevated)",
            border: "1px solid var(--border-medium)",
            boxShadow: "0 20px 48px rgba(0,0,0,0.55), 0 0 0 1px rgba(245, 237, 224, 0.05)",
            textAlign: "center",
            color: "var(--cream)",
            position: "relative"
          }}
        >
          {/* Top Logo */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "14px" }}>
            <CafeFinderLogo size={50} showText={false} animate={true} />
          </div>

          <span className="label-editorial" style={{ letterSpacing: "0.18em", fontSize: "11px" }}>
            <span>✦</span> CAFORA CITY CURATOR NETWORK
          </span>

          {/* If Logged In: Rich Profile View */}
          {currentUser ? (
            <div style={{ marginTop: "18px" }}>
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  background: currentUser.avatarColor || "var(--accent-orange)",
                  color: "#ffffff",
                  fontSize: "26px",
                  fontWeight: 800,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 14px auto",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
                  border: "3px solid rgba(255,255,255,0.15)"
                }}
              >
                {getInitials(currentUser.name)}
              </div>

              <h1
                style={{
                  fontSize: "24px",
                  fontFamily: "var(--font-serif)",
                  color: "var(--cream)",
                  marginBottom: "4px"
                }}
              >
                {currentUser.name}
              </h1>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(224, 122, 95, 0.15)",
                  border: "1px solid rgba(224, 122, 95, 0.35)",
                  color: "var(--accent-orange)",
                  borderRadius: "var(--radius-pill)",
                  padding: "3px 12px",
                  fontSize: "12px",
                  fontWeight: 700,
                  marginBottom: "12px"
                }}
              >
                <span>✦ Verified Curator</span>
                <span>•</span>
                <span>@{currentUser.username}</span>
              </div>

              <p style={{ color: "var(--cream-muted)", fontSize: "13px", marginBottom: "22px" }}>
                {currentUser.email}
              </p>

              {/* Status Message */}
              {statusMessage && (
                <div
                  style={{
                    padding: "10px 14px",
                    borderRadius: "var(--radius-sm)",
                    marginBottom: "18px",
                    fontSize: "12.5px",
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

              {/* User Activity Stats */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "10px",
                  padding: "16px 12px",
                  background: "rgba(16, 11, 8, 0.55)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-subtle)",
                  marginBottom: "24px"
                }}
              >
                <Link
                  to="/saved"
                  style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
                >
                  <div style={{ fontSize: "20px", fontWeight: 800, color: "var(--accent-orange)" }}>
                    {stats.savedCount}
                  </div>
                  <div style={{ fontSize: "11px", color: "var(--cream-muted)", marginTop: "2px" }}>
                    Saved Cafés
                  </div>
                </Link>

                <div>
                  <div style={{ fontSize: "20px", fontWeight: 800, color: "var(--cream)" }}>
                    {stats.reviewsCount}
                  </div>
                  <div style={{ fontSize: "11px", color: "var(--cream-muted)", marginTop: "2px" }}>
                    Reviews
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: "20px", fontWeight: 800, color: "var(--cream)" }}>
                    {stats.submissionsCount}
                  </div>
                  <div style={{ fontSize: "11px", color: "var(--cream-muted)", marginTop: "2px" }}>
                    Contributed
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Link
                  to="/saved"
                  className="btn-editorial-primary"
                  style={{ width: "100%", justifyContent: "center", padding: "12px", textDecoration: "none" }}
                >
                  ❤️ View My Saved Cafés ({stats.savedCount})
                </Link>

                <Link
                  to="/add"
                  className="btn-editorial-secondary"
                  style={{ width: "100%", justifyContent: "center", padding: "11px", textDecoration: "none" }}
                >
                  + Add a New Roastery
                </Link>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "6px"
                  }}
                >
                  <Link
                    to="/"
                    style={{
                      flex: 1,
                      padding: "10px",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--border-subtle)",
                      background: "transparent",
                      color: "var(--cream-muted)",
                      textDecoration: "none",
                      fontSize: "12.5px",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    ← Discover Feed
                  </Link>

                  <button
                    type="button"
                    onClick={handleLogout}
                    style={{
                      flex: 1,
                      padding: "10px",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid rgba(201, 59, 59, 0.4)",
                      background: "rgba(201, 59, 59, 0.1)",
                      color: "#f87171",
                      fontSize: "12.5px",
                      fontWeight: 600,
                      cursor: "pointer"
                    }}
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Guest / Login & Registration Mode */
            <div>
              <h1
                style={{
                  fontSize: "26px",
                  fontFamily: "var(--font-serif)",
                  color: "var(--cream)",
                  marginTop: "6px",
                  marginBottom: "6px"
                }}
              >
                {activeTab === "login" ? "Curator Sign In" : "Join the Community"}
              </h1>
              <p style={{ color: "var(--cream-muted)", fontSize: "13px", marginBottom: "20px" }}>
                {activeTab === "login"
                  ? "Access your personalized coffee journal and saved roasteries."
                  : "Create an account to save favorite roasters and publish reviews."}
              </p>

              {/* Tab Selector */}
              <div
                style={{
                  display: "flex",
                  background: "rgba(16, 11, 8, 0.6)",
                  padding: "4px",
                  borderRadius: "var(--radius-pill)",
                  border: "1px solid var(--border-subtle)",
                  marginBottom: "20px"
                }}
              >
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("login");
                    setStatusMessage(null);
                  }}
                  style={{
                    flex: 1,
                    padding: "8px 12px",
                    borderRadius: "var(--radius-pill)",
                    background: activeTab === "login" ? "var(--accent-orange)" : "transparent",
                    color: activeTab === "login" ? "#100b08" : "var(--cream-muted)",
                    fontWeight: 700,
                    fontSize: "12.5px",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("register");
                    setStatusMessage(null);
                  }}
                  style={{
                    flex: 1,
                    padding: "8px 12px",
                    borderRadius: "var(--radius-pill)",
                    background: activeTab === "register" ? "var(--accent-orange)" : "transparent",
                    color: activeTab === "register" ? "#100b08" : "var(--cream-muted)",
                    fontWeight: 700,
                    fontSize: "12.5px",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                >
                  Create Account
                </button>
              </div>

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

              {activeTab === "login" ? (
                /* LOGIN FORM */
                <form onSubmit={handleLoginSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div>
                    <label
                      htmlFor="login-ident"
                      style={{ display: "block", textAlign: "left", fontSize: "11px", fontWeight: 700, color: "var(--cream-muted)", marginBottom: "5px", textTransform: "uppercase", letterSpacing: "0.05em" }}
                    >
                      Email or Curator Username
                    </label>
                    <input
                      id="login-ident"
                      type="text"
                      placeholder="e.g. arjun@cafora.com or arjun_curator"
                      value={loginIdentifier}
                      onChange={(e) => setLoginIdentifier(e.target.value)}
                      style={inputStyle}
                      required
                    />
                  </div>

                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                      <label
                        htmlFor="login-pass"
                        style={{ fontSize: "11px", fontWeight: 700, color: "var(--cream-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}
                      >
                        Password
                      </label>
                      <button
                        type="button"
                        onClick={() => setShowLoginPassword(!showLoginPassword)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "var(--accent-orange)",
                          fontSize: "11.5px",
                          fontWeight: 600,
                          cursor: "pointer",
                          padding: 0
                        }}
                      >
                        {showLoginPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                    <input
                      id="login-pass"
                      type={showLoginPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      style={inputStyle}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-editorial-primary"
                    style={{ width: "100%", justifyContent: "center", padding: "12px", marginTop: "4px" }}
                  >
                    {isSubmitting ? "Authenticating..." : "Log In to City Guide →"}
                  </button>

                  {/* 1-Click Demo Login */}
                  <div
                    style={{
                      marginTop: "14px",
                      padding: "12px",
                      background: "rgba(224, 122, 95, 0.08)",
                      borderRadius: "var(--radius-sm)",
                      border: "1px dashed rgba(224, 122, 95, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: "11.5px", fontWeight: 700, color: "var(--cream)" }}>
                        Need quick preview?
                      </div>
                      <div style={{ fontSize: "11px", color: "var(--cream-muted)" }}>
                        One-click test as Arjun Kapoor
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleDemoLogin}
                      style={{
                        padding: "6px 12px",
                        background: "var(--accent-orange)",
                        border: "none",
                        borderRadius: "var(--radius-sm)",
                        color: "#100b08",
                        fontWeight: 700,
                        fontSize: "11.5px",
                        cursor: "pointer"
                      }}
                    >
                      ⚡ Quick Login
                    </button>
                  </div>
                </form>
              ) : (
                /* REGISTER FORM */
                <form onSubmit={handleRegisterSubmit} style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
                  <div>
                    <label
                      htmlFor="reg-name"
                      style={{ display: "block", textAlign: "left", fontSize: "11px", fontWeight: 700, color: "var(--cream-muted)", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.05em" }}
                    >
                      Full Name
                    </label>
                    <input
                      id="reg-name"
                      type="text"
                      placeholder="e.g. Manasvi Dhamija"
                      value={registerName}
                      onChange={(e) => setRegisterName(e.target.value)}
                      style={inputStyle}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="reg-user"
                      style={{ display: "block", textAlign: "left", fontSize: "11px", fontWeight: 700, color: "var(--cream-muted)", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.05em" }}
                    >
                      Curator Handle (Username)
                    </label>
                    <input
                      id="reg-user"
                      type="text"
                      placeholder="e.g. manasvi_brews"
                      value={registerUsername}
                      onChange={(e) => setRegisterUsername(e.target.value)}
                      style={inputStyle}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="reg-email"
                      style={{ display: "block", textAlign: "left", fontSize: "11px", fontWeight: 700, color: "var(--cream-muted)", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.05em" }}
                    >
                      Email Address
                    </label>
                    <input
                      id="reg-email"
                      type="email"
                      placeholder="e.g. manasvidhamija88@gmail.com"
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      style={inputStyle}
                      required
                    />
                  </div>

                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                      <label
                        htmlFor="reg-pass"
                        style={{ fontSize: "11px", fontWeight: 700, color: "var(--cream-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}
                      >
                        Create Password
                      </label>
                      <button
                        type="button"
                        onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "var(--accent-orange)",
                          fontSize: "11.5px",
                          fontWeight: 600,
                          cursor: "pointer",
                          padding: 0
                        }}
                      >
                        {showRegisterPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                    <input
                      id="reg-pass"
                      type={showRegisterPassword ? "text" : "password"}
                      placeholder="Minimum 4 characters"
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      style={inputStyle}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-editorial-primary"
                    style={{ width: "100%", justifyContent: "center", padding: "12px", marginTop: "6px" }}
                  >
                    {isSubmitting ? "Creating Profile..." : "Create Curator Account →"}
                  </button>
                </form>
              )}

              <div style={{ marginTop: "24px", fontSize: "12px", color: "var(--cream-faint)" }}>
                <Link to="/" style={{ color: "var(--cream-muted)", textDecoration: "none" }}>
                  ← Return to Discovery Feed
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "11px 14px",
  background: "rgba(16, 11, 8, 0.6)",
  border: "1px solid var(--border-subtle)",
  borderRadius: "var(--radius-sm)",
  color: "var(--cream)",
  fontSize: "13.5px",
  outline: "none",
  fontFamily: "var(--font-sans)",
  transition: "border-color 0.2s ease"
};