/**
 * Local Storage Helper for Saved Cafes, User Submitted Reviews & User Added Cafes
 * Reliable, production-ready client storage with graceful error fallbacks.
 */

const SAVED_CAFES_KEY = "cafe_finder_saved_v1";
const USER_REVIEWS_KEY = "cafe_finder_user_reviews_v1";
const USER_SUBMISSIONS_KEY = "cafe_finder_user_submissions_v1";

export const COLLECTIONS = [
  { id: "all", label: "All Saved", icon: "✨" },
  { id: "coffee", label: "☕ Coffee", icon: "☕" },
  { id: "study", label: "💻 Study", icon: "💻" },
  { id: "date", label: "❤️ Date Ideas", icon: "❤️" },
  { id: "weekend", label: "🌿 Weekend", icon: "🌿" }
];

export function getSavedCafes() {
  try {
    const raw = localStorage.getItem(SAVED_CAFES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    return [];
  }
}

export function isCafeSaved(cafeId) {
  const saved = getSavedCafes();
  return saved.some((item) => item.id === cafeId);
}

export function toggleSaveCafe(cafe, collection = "coffee") {
  const saved = getSavedCafes();
  const index = saved.findIndex((item) => item.id === cafe.id);

  let updated;
  if (index >= 0) {
    // Remove
    updated = saved.filter((item) => item.id !== cafe.id);
  } else {
    // Add
    updated = [
      ...saved,
      {
        id: cafe.id,
        cafeName: cafe.name,
        sector: cafe.sector,
        collection,
        savedAt: new Date().toISOString()
      }
    ];
  }

  try {
    localStorage.setItem(SAVED_CAFES_KEY, JSON.stringify(updated));
  } catch (err) {
    // Gracefully handle storage quota or privacy mode restrictions
  }

  return updated;
}

export function getUserReviews(cafeId) {
  try {
    const raw = localStorage.getItem(USER_REVIEWS_KEY);
    const all = raw ? JSON.parse(raw) : {};
    return cafeId ? all[cafeId] || [] : all;
  } catch (err) {
    return [];
  }
}

export function saveUserReview(cafeId, review) {
  try {
    const raw = localStorage.getItem(USER_REVIEWS_KEY);
    const all = raw ? JSON.parse(raw) : {};
    const cafeReviews = all[cafeId] || [];

    const newReview = {
      id: `user-rev-${Date.now()}`,
      ...review,
      createdAt: new Date().toISOString()
    };

    all[cafeId] = [newReview, ...cafeReviews];
    localStorage.setItem(USER_REVIEWS_KEY, JSON.stringify(all));
    return all[cafeId];
  } catch (err) {
    return [];
  }
}

export function getUserSubmittedCafes() {
  try {
    const raw = localStorage.getItem(USER_SUBMISSIONS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    return [];
  }
}

export function submitUserCafe(cafeData) {
  try {
    const submissions = getUserSubmittedCafes();
    const newEntry = {
      id: `user-cafe-${Date.now()}`,
      ...cafeData,
      submittedAt: new Date().toISOString()
    };
    submissions.push(newEntry);
    localStorage.setItem(USER_SUBMISSIONS_KEY, JSON.stringify(submissions));
    return newEntry;
  } catch (err) {
    return null;
  }
}
