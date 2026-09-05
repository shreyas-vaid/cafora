/**
 * Authentication & User Session Management for Cafora Cafe Finder
 * Client-side user persistence with session management and user-scoped data.
 */

const USERS_STORAGE_KEY = "cafe_finder_registered_users_v1";
const ACTIVE_USER_KEY = "cafe_finder_active_user_v1";

// Default demo curator accounts available out of the box
const DEFAULT_USERS = [
  {
    id: "user_demo_1",
    name: "Arjun Kapoor",
    username: "arjun_curator",
    email: "arjun@cafora.com",
    password: "password123",
    avatarColor: "#e07a5f",
    bio: "Pour-over enthusiast & Sector 8 roastery regular.",
    createdAt: "2026-08-15T10:00:00.000Z"
  }
];

// Initialize users registry if empty
export function getUsers() {
  try {
    const raw = localStorage.getItem(USERS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(DEFAULT_USERS));
      return DEFAULT_USERS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : DEFAULT_USERS;
  } catch (err) {
    return DEFAULT_USERS;
  }
}

// Get currently active logged-in user or null
export function getCurrentUser() {
  try {
    const raw = localStorage.getItem(ACTIVE_USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    return null;
  }
}

// Check if a user is currently logged in
export function isAuthenticated() {
  return getCurrentUser() !== null;
}

// Broadcast auth state change across the app
function notifyAuthChange(user) {
  try {
    window.dispatchEvent(new CustomEvent("cafora_auth_change", { detail: { user } }));
    window.dispatchEvent(new Event("storage"));
  } catch (e) {}
}

/**
 * Register a new user account
 */
export function registerUser({ name, username, email, password }) {
  const cleanName = (name || "").trim();
  const cleanUsername = (username || "").trim().toLowerCase().replace(/[^a-z0-9_]/g, "");
  const cleanEmail = (email || "").trim().toLowerCase();
  const cleanPassword = (password || "").trim();

  if (!cleanName) {
    return { success: false, error: "Please enter your full name." };
  }
  if (!cleanUsername || cleanUsername.length < 3) {
    return { success: false, error: "Username must be at least 3 alphanumeric characters." };
  }
  if (!cleanEmail || !cleanEmail.includes("@")) {
    return { success: false, error: "Please provide a valid email address." };
  }
  if (!cleanPassword || cleanPassword.length < 4) {
    return { success: false, error: "Password must be at least 4 characters." };
  }

  const users = getUsers();

  // Check unique email & username
  const emailExists = users.some((u) => u.email.toLowerCase() === cleanEmail);
  if (emailExists) {
    return { success: false, error: "An account with this email already exists. Please sign in." };
  }

  const usernameExists = users.some((u) => u.username.toLowerCase() === cleanUsername);
  if (usernameExists) {
    return { success: false, error: `Username @${cleanUsername} is already taken. Please choose another.` };
  }

  // Palette of warm curated avatar colors
  const avatarColors = ["#e07a5f", "#3d405b", "#81b29a", "#f2cc8f", "#c96541", "#8b5e3c"];
  const selectedColor = avatarColors[users.length % avatarColors.length];

  const newUser = {
    id: `user_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    name: cleanName,
    username: cleanUsername,
    email: cleanEmail,
    password: cleanPassword,
    avatarColor: selectedColor,
    bio: "Chandigarh coffee explorer & curator.",
    createdAt: new Date().toISOString()
  };

  const updatedUsers = [...users, newUser];
  try {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers));
    localStorage.setItem(ACTIVE_USER_KEY, JSON.stringify(newUser));
  } catch (err) {
    return { success: false, error: "Unable to save account to local storage." };
  }

  notifyAuthChange(newUser);
  return { success: true, user: newUser };
}

/**
 * Log in an existing user
 */
export function loginUser(identifier, password) {
  const cleanId = (identifier || "").trim().toLowerCase();
  const cleanPassword = (password || "").trim();

  if (!cleanId) {
    return { success: false, error: "Please enter your username or email." };
  }
  if (!cleanPassword) {
    return { success: false, error: "Please enter your password." };
  }

  const users = getUsers();
  const foundUser = users.find(
    (u) => u.email.toLowerCase() === cleanId || u.username.toLowerCase() === cleanId
  );

  if (!foundUser) {
    return {
      success: false,
      error: "No curator account found matching that email or username. Please check or create an account."
    };
  }

  if (foundUser.password !== cleanPassword) {
    return { success: false, error: "Incorrect password. Please try again." };
  }

  try {
    localStorage.setItem(ACTIVE_USER_KEY, JSON.stringify(foundUser));
  } catch (err) {
    return { success: false, error: "Unable to start user session." };
  }

  notifyAuthChange(foundUser);
  return { success: true, user: foundUser };
}

/**
 * Log out the current user
 */
export function logoutUser() {
  try {
    localStorage.removeItem(ACTIVE_USER_KEY);
  } catch (err) {}
  notifyAuthChange(null);
}

/**
 * Update current user profile details
 */
export function updateCurrentUser(updatedFields) {
  const currentUser = getCurrentUser();
  if (!currentUser) return null;

  const users = getUsers();
  const updatedUser = { ...currentUser, ...updatedFields };

  const updatedUsers = users.map((u) => (u.id === currentUser.id ? updatedUser : u));

  try {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers));
    localStorage.setItem(ACTIVE_USER_KEY, JSON.stringify(updatedUser));
  } catch (err) {}

  notifyAuthChange(updatedUser);
  return updatedUser;
}
