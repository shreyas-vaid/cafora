import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Discover from "./pages/Discover";
import CafeDetail from "./pages/CafeDetail";
import MapPage from "./pages/MapPage";
import SavedPage from "./pages/SavedPage";
import AddCafe from "./pages/AddCafe";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        {/* Discovery Homepage (Pinterest-style Masonry) */}
        <Route path="/" element={<Discover />} />
        <Route path="/home" element={<Navigate to="/" replace />} />

        {/* Editorial Cafe Detail Page */}
        <Route path="/cafe/:id" element={<CafeDetail />} />

        {/* Dedicated Map Page */}
        <Route path="/map" element={<MapPage />} />

        {/* Saved Collections */}
        <Route path="/saved" element={<SavedPage />} />

        {/* Add Cafe */}
        <Route path="/add" element={<AddCafe />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />

        {/* Fallback to Discover */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;