import React from "react";
import { CATEGORIES } from "../../data/cafesData";

export default function CategoryChips({ activeCategory, onSelectCategory }) {
  return (
    <div
      style={{
        width: "100%",
        overflowX: "auto",
        padding: "8px 0 16px 0",
        display: "flex",
        gap: "10px",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        WebkitOverflowScrolling: "touch"
      }}
    >
      {CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            className={`category-chip ${isActive ? "active" : ""}`}
            onClick={() => onSelectCategory(cat.id)}
            style={{ outline: "none" }}
          >
            <span>{cat.icon}</span>
            <span>{cat.label.replace(/^[^\s]+\s/, "")}</span>
          </button>
        );
      })}
    </div>
  );
}
