/**
 * Local Storage Helper for Saved Cafes, User Reviews & Submissions
 * Scoped by active user account with guest fallback and seamless migration.
 */

import { getCurrentUser } from "./auth";

const LEGACY_SAVED_KEY = "cafe_finder_saved_v1";
const GUEST_SAVED_KEY = "cafe_finder_saved_guest_v1";
const USER_REVIEWS_KEY = "cafe_finder_user_reviews_v1";
const USER_SUBMISSIONS_KEY = "cafe_finder_user_submissions_v1";

export const COLLECTIONS = [
  { id: "all", label: "All Saved", icon: "✨" },
  { id: "coffee", label: "☕ Coffee", icon: "☕" },
  { id: "study", label: "💻 Study", icon: "💻" },
  { id: "date", label: "❤️ Date Ideas", icon: "❤️" },
  { id: "weekend", label: "🌿 Weekend", icon: "🌿" }
];

/**
 * Returns the storage key for saved cafes scoped to the active user or guest
 */
function getSavedStorageKey() {
  const user = getCurrentUser();
  if (user && user.id) {
    return `cafe_finder_saved_user_${user.id}`;
  }
  return GUEST_SAVED_KEY;
}

/**
 * Migrate legacy or guest saved cafes into the user's storage if needed
 */
function migrateSavedIfNeeded(targetKey) {
  try {
    const rawTarget = localStorage.getItem(targetKey);
    const existing = rawTarget ? JSON.parse(rawTarget) : [];

    // Check legacy storage
    const rawLegacy = localStorage.getItem(LEGACY_SAVED_KEY);
    if (rawLegacy) {
      const legacyItems = JSON.parse(rawLegacy);
      if (Array.isArray(legacyItems) && legacyItems.length > 0) {
        // Merge without duplicates
        const existingIds = new Set(existing.map((item) => item.id));
        const merged = [...existing];
        for (const item of legacyItems) {
          if (!existingIds.has(item.id)) {
            merged.push(item);
            existingIds.add(item.id);
          }
        }
        localStorage.setItem(targetKey, JSON.stringify(merged));
        localStorage.removeItem(LEGACY_SAVED_KEY);
        return merged;
      }
    }

    // If target is a logged-in user and guest has items, import guest items
    const user = getCurrentUser();
    if (user && targetKey.startsWith("cafe_finder_saved_user_")) {
      const rawGuest = localStorage.getItem(GUEST_SAVED_KEY);
      if (rawGuest) {
        const guestItems = JSON.parse(rawGuest);
        if (Array.isArray(guestItems) && guestItems.length > 0) {
          const existingIds = new Set(existing.map((item) => item.id));
          const merged = [...existing];
          for (const item of guestItems) {
            if (!existingIds.has(item.id)) {
              merged.push(item);
              existingIds.add(item.id);
            }
          }
          localStorage.setItem(targetKey, JSON.stringify(merged));
          localStorage.removeItem(GUEST_SAVED_KEY);
          return merged;
        }
      }
    }

    return existing;
  } catch (err) {
    return [];
  }
}

/**
 * Get all saved cafes for the current active user / guest session
 */
export function getSavedCafes() {
  const key = getSavedStorageKey();
  try {
    const items = migrateSavedIfNeeded(key);
    return Array.isArray(items) ? items : [];
  } catch (err) {
    return [];
  }
}

/**
 * Check if a specific cafe is saved by current user
 */
export function isCafeSaved(cafeId) {
  const saved = getSavedCafes();
  return saved.some((item) => item.id === cafeId);
}

/**
 * Toggle bookmark state for a cafe under current user's profile
 */
export function toggleSaveCafe(cafe, collection = "coffee") {
  const key = getSavedStorageKey();
  const saved = getSavedCafes();
  const index = saved.findIndex((item) => item.id === cafe.id);

  let updated;
  if (index >= 0) {
    // Remove from saved list
    updated = saved.filter((item) => item.id !== cafe.id);
  } else {
    // Add to saved list
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
    localStorage.setItem(key, JSON.stringify(updated));
    window.dispatchEvent(new Event("storage"));
  } catch (err) {
    // Graceful error fallback
  }

  return updated;
}

/**
 * Get reviews (optionally filtered by cafeId or by userId)
 */
export function getUserReviews(cafeId = null) {
  try {
    const raw = localStorage.getItem(USER_REVIEWS_KEY);
    const all = raw ? JSON.parse(raw) : {};
    return cafeId ? all[cafeId] || [] : all;
  } catch (err) {
    return cafeId ? [] : {};
  }
}

/**
 * Save a review for a cafe, tagging the author with current user details
 */
export function saveUserReview(cafeId, review) {
  try {
    const raw = localStorage.getItem(USER_REVIEWS_KEY);
    const all = raw ? JSON.parse(raw) : {};
    const cafeReviews = all[cafeId] || [];

    const user = getCurrentUser();

    const newReview = {
      id: `user-rev-${Date.now()}`,
      userId: user ? user.id : "guest",
      userName: user ? user.name : (review.authorName || "Anonymous Explorer"),
      userHandle: user ? `@${user.username}` : "@explorer",
      ...review,
      createdAt: new Date().toISOString()
    };

    all[cafeId] = [newReview, ...cafeReviews];
    localStorage.setItem(USER_REVIEWS_KEY, JSON.stringify(all));
    window.dispatchEvent(new Event("storage"));
    return all[cafeId];
  } catch (err) {
    return [];
  }
}

/**
 * Get all user submitted cafes
 */
export function getUserSubmittedCafes() {
  try {
    const raw = localStorage.getItem(USER_SUBMISSIONS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    return [];
  }
}

/**
 * Submit a cafe to community directory with user authorship
 */
export function submitUserCafe(cafeData) {
  try {
    const submissions = getUserSubmittedCafes();
    const user = getCurrentUser();

    const newEntry = {
      id: `user-cafe-${Date.now()}`,
      userId: user ? user.id : "guest",
      submittedBy: user ? user.name : "Community Curator",
      ...cafeData,
      submittedAt: new Date().toISOString()
    };

    submissions.push(newEntry);
    localStorage.setItem(USER_SUBMISSIONS_KEY, JSON.stringify(submissions));
    window.dispatchEvent(new Event("storage"));
    return newEntry;
  } catch (err) {
    return null;
  }
}

/**
 * Compute curation summary stats for a user
 */
export function getUserCurationStats(userId) {
  if (!userId) {
    return { savedCount: 0, reviewsCount: 0, submissionsCount: 0 };
  }

  // Count saved
  let savedCount = 0;
  try {
    const rawSaved = localStorage.getItem(`cafe_finder_saved_user_${userId}`);
    savedCount = rawSaved ? JSON.parse(rawSaved).length : 0;
  } catch (e) {}

  // Count reviews
  let reviewsCount = 0;
  try {
    const rawRev = localStorage.getItem(USER_REVIEWS_KEY);
    if (rawRev) {
      const allRev = JSON.parse(rawRev);
      Object.values(allRev).forEach((list) => {
        if (Array.isArray(list)) {
          reviewsCount += list.filter((r) => r.userId === userId).length;
        }
      });
    }
  } catch (e) {}

  // Count submissions
  let submissionsCount = 0;
  try {
    const rawSub = localStorage.getItem(USER_SUBMISSIONS_KEY);
    if (rawSub) {
      const allSub = JSON.parse(rawSub);
      submissionsCount = allSub.filter((s) => s.userId === userId).length;
    }
  } catch (e) {}

  return { savedCount, reviewsCount, submissionsCount };
}
