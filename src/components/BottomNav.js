import { useNavigate } from "react-router-dom";

export default function BottomNav() {
  const navigate = useNavigate();

  return (
    <div style={nav}>
      <button onClick={() => navigate("/home")}>🏠</button>
      <button onClick={() => navigate("/add")}>➕</button>
    </div>
  );
}

const nav = {
  position: "fixed",
  bottom: 0,
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  padding: "15px",
  background: "rgba(255,255,255,0.1)",
  backdropFilter: "blur(10px)",
  borderTop: "1px solid rgba(255,255,255,0.2)"
};