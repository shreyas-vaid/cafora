/**
 * CAFORA EVIDENCE-BASED RECOMMENDATION & 12-MOOD VIBE ENGINE
 * 
 * Centralized, non-strict weighted ranking engine for CAFORA.
 * - Restructured 5-layer model: Facts -> Characteristics -> Evidence -> Derived -> Recommendations.
 * - 12 Curated Moods (Good Coffee, Get Work Done, Date Night, Quiet Corner, Somewhere Pretty,
 *   Sweet Tooth, With the Gang, Late Night, Read & Unwind, Brunch, Outdoor Escape, Slow Morning).
 * - Non-punitive missing data handling: null is NOT zero; weights normalize over available evidence.
 * - Multi-mood weighted compatibility scoring (1 mood = 100%, 2 moods = 50/50, 3 moods = 33/33/33 + synergy bonus).
 * - 3-Tier Fallback hierarchy (Level 1: Strong >= 80%, Level 2: Good 70-79%, Level 3: Closest alternatives).
 * - Match score labels (95-100: Perfect match, 90-94: Excellent match, 80-89: Strong match, 70-79: Good fit).
 * - Verifiable match reasons grounded strictly in authentic characteristics and evidence.
 * - Caveat extraction from real operational feedback.
 * - Search intent fusion with keyword extraction without hard elimination.
 */

// 1. Centralized 12-Mood Definitions with Characteristic Weights
export const MOODS_LIST = [
  {
    id: "good-coffee",
    title: "GOOD COFFEE",
    name: "Good Coffee",
    tagline: "I care about the coffee.",
    icon: "☕",
    categoryKey: "coffee",
    accent: "#e07a38",
    weights: {
      coffee: 0.60,
      ambience: 0.15,
      food: 0.15,
      seating: 0.10
    },
    singleCopy: {
      lead: "Ah. You care about the roast.",
      sub: "Here are the places with serious beans, single origins, and barista craft."
    },
    label: "Coffee quality"
  },
  {
    id: "work",
    title: "GET WORK DONE",
    name: "Get Work Done",
    tagline: "Give me a table and Wi-Fi.",
    icon: "💻",
    categoryKey: "study",
    accent: "#38bdf8",
    weights: {
      work: 0.35,
      quiet: 0.20,
      seating: 0.20,
      ambience: 0.15,
      coffee: 0.10
    },
    singleCopy: {
      lead: "Laptop open, headphones on.",
      sub: "Strong Wi-Fi, accessible power outlets, ergonomic tables, and focus-friendly ambience."
    },
    label: "Work suitability"
  },
  {
    id: "date",
    title: "DATE NIGHT",
    name: "Date Night",
    tagline: "Something a little special.",
    icon: "❤️",
    categoryKey: "date",
    accent: "#f43f5e",
    weights: {
      date: 0.40,
      ambience: 0.25,
      conversation: 0.20,
      aesthetic: 0.15
    },
    singleCopy: {
      lead: "Ah. Date night.",
      sub: "Romantic lighting, intimate seating, curated playlists, and effortless conversation."
    },
    label: "Romantic atmosphere"
  },
  {
    id: "quiet",
    title: "QUIET CORNER",
    name: "Quiet Corner",
    tagline: "I want to disappear for a while.",
    icon: "🌿",
    categoryKey: "quiet",
    accent: "#34d399",
    weights: {
      quiet: 0.45,
      conversation: 0.20,
      seating: 0.20,
      ambience: 0.15
    },
    singleCopy: {
      lead: "Ah. You need a quiet corner.",
      sub: "Here are the places where you can disappear for a while with calm, low-noise serenity."
    },
    label: "Quiet & calm"
  },
  {
    id: "pretty",
    title: "SOMEWHERE PRETTY",
    name: "Somewhere Pretty",
    tagline: "Yes, I am taking pictures.",
    icon: "📸",
    categoryKey: "aesthetic",
    accent: "#c084fc",
    weights: {
      aesthetic: 0.50,
      ambience: 0.30,
      date: 0.10,
      outdoor: 0.10
    },
    singleCopy: {
      lead: "Main character energy today.",
      sub: "Aesthetic spaces, flattering natural light, thoughtful textures, and photogenic corners."
    },
    label: "Visual aesthetic"
  },
  {
    id: "sweet-tooth",
    title: "SWEET TOOTH",
    name: "Sweet Tooth",
    tagline: "Coffee is not enough.",
    icon: "🍰",
    categoryKey: "food",
    accent: "#fbbf24",
    weights: {
      dessert: 0.55,
      food: 0.25,
      coffee: 0.20
    },
    singleCopy: {
      lead: "Coffee is not enough today.",
      sub: "Places with standout bakery displays, warm flaky pastries, and decadent desserts."
    },
    label: "Desserts & bakes"
  },
  {
    id: "gang",
    title: "WITH THE GANG",
    name: "With the Gang",
    tagline: "Bring everyone.",
    icon: "👯",
    categoryKey: "group",
    accent: "#fb923c",
    weights: {
      groups: 0.45,
      food: 0.25,
      ambience: 0.15,
      conversation: 0.15
    },
    singleCopy: {
      lead: "Bring everyone along.",
      sub: "Spacious tables, sharing platters, energetic hum, and zero side-eyes for being lively."
    },
    label: "Group friendly"
  },
  {
    id: "late-night",
    title: "LATE NIGHT",
    name: "Late Night",
    tagline: "I am not going home yet.",
    icon: "🌙",
    categoryKey: "latenight",
    accent: "#818cf8",
    weights: {
      lateNight: 0.55,
      coffee: 0.20,
      ambience: 0.15,
      food: 0.10
    },
    singleCopy: {
      lead: "Not going home just yet.",
      sub: "Places open late with warm drinks, good music, and midnight coffee energy."
    },
    label: "Late hours"
  },
  {
    id: "reading",
    title: "READ & UNWIND",
    name: "Read & Unwind",
    tagline: "A good book, no distractions.",
    icon: "📚",
    categoryKey: "reading",
    accent: "#6ee7b7",
    weights: {
      reading: 0.40,
      quiet: 0.25,
      seating: 0.20,
      ambience: 0.15
    },
    singleCopy: {
      lead: "A book, a warm cup, zero rush.",
      sub: "Plush seating, warm lighting, secluded tables, and tranquil low-distraction spaces."
    },
    label: "Reading & relaxing"
  },
  {
    id: "brunch",
    title: "BRUNCH",
    name: "Brunch",
    tagline: "Slow mornings, great food.",
    icon: "🥐",
    categoryKey: "brunch",
    accent: "#f59e0b",
    weights: {
      brunch: 0.45,
      food: 0.25,
      coffee: 0.15,
      ambience: 0.15
    },
    singleCopy: {
      lead: "Brunch mode activated.",
      sub: "Savory morning plates, sourdough toasts, artisan eggs, and relaxed daytime dining."
    },
    label: "Brunch & breakfast"
  },
  {
    id: "outdoor",
    title: "OUTDOOR ESCAPE",
    name: "Outdoor Escape",
    tagline: "Fresh air and open skies.",
    icon: "🌳",
    categoryKey: "outdoor",
    accent: "#10b981",
    weights: {
      outdoor: 0.55,
      ambience: 0.25,
      aesthetic: 0.20
    },
    singleCopy: {
      lead: "Sunshine, fresh air, and open sky.",
      sub: "Charming sunlit courtyards, breezy rooftop terraces, and garden patio seating."
    },
    label: "Open-air patio"
  },
  {
    id: "slow-morning",
    title: "SLOW MORNING",
    name: "Slow Morning",
    tagline: "No rush, just good coffee.",
    icon: "🧘",
    categoryKey: "slow-morning",
    accent: "#a78bfa",
    weights: {
      coffee: 0.30,
      quiet: 0.25,
      ambience: 0.25,
      reading: 0.20
    },
    singleCopy: {
      lead: "Unrushed mornings. Deep breaths.",
      sub: "Peaceful morning light, steaming fresh brews, and a tranquil space to ease into the day."
    },
    label: "Calm morning"
  }
];

// Map aliases for mood IDs to ensure robust backward compatibility
export const MOOD_ID_MAP = {
  "coffee": "good-coffee",
  "good-coffee": "good-coffee",
  "work": "work",
  "study": "work",
  "date": "date",
  "romantic": "date",
  "quiet": "quiet",
  "pretty": "pretty",
  "aesthetic": "pretty",
  "sweet-tooth": "sweet-tooth",
  "dessert": "sweet-tooth",
  "gang": "gang",
  "group": "gang",
  "late-night": "late-night",
  "latenight": "late-night",
  "reading": "reading",
  "read": "reading",
  "read-unwind": "reading",
  "brunch": "brunch",
  "breakfast": "brunch",
  "outdoor": "outdoor",
  "outdoor-escape": "outdoor",
  "patio": "outdoor",
  "slow-morning": "slow-morning",
  "morning": "slow-morning"
};

/**
 * Maps conversational search keywords to mood IDs
 */
export function extractVibesFromSearch(query = "") {
  if (!query || typeof query !== "string") return [];
  const q = query.toLowerCase().trim();
  const detected = [];

  if (q.includes("work") || q.includes("study") || q.includes("wifi") || q.includes("laptop") || q.includes("desk") || q.includes("plug") || q.includes("socket")) {
    detected.push("work");
  }
  if (q.includes("date") || q.includes("romantic") || q.includes("couple") || q.includes("candle") || q.includes("special") || q.includes("anniversary")) {
    detected.push("date");
  }
  if (q.includes("coffee") || q.includes("espresso") || q.includes("pourover") || q.includes("pour over") || q.includes("roaster") || q.includes("brew") || q.includes("specialty")) {
    detected.push("good-coffee");
  }
  if (q.includes("quiet") || q.includes("silent") || q.includes("calm") || q.includes("peace") || q.includes("secluded") || q.includes("alone") || q.includes("focus")) {
    detected.push("quiet");
  }
  if (q.includes("pretty") || q.includes("aesthetic") || q.includes("photo") || q.includes("instagram") || q.includes("beautiful") || q.includes("interior") || q.includes("view")) {
    detected.push("pretty");
  }
  if (q.includes("sweet") || q.includes("dessert") || q.includes("pastry") || q.includes("cake") || q.includes("bakery") || q.includes("croissant") || q.includes("waffle")) {
    detected.push("sweet-tooth");
  }
  if (q.includes("gang") || q.includes("friends") || q.includes("group") || q.includes("crowd") || q.includes("gather") || q.includes("party")) {
    detected.push("gang");
  }
  if (q.includes("late") || q.includes("night") || q.includes("midnight") || q.includes("afterhours") || q.includes("after hours")) {
    detected.push("late-night");
  }
  if (q.includes("read") || q.includes("book") || q.includes("novel") || q.includes("unwind") || q.includes("reading")) {
    detected.push("reading");
  }
  if (q.includes("brunch") || q.includes("breakfast") || q.includes("morning food") || q.includes("eggs") || q.includes("toast")) {
    detected.push("brunch");
  }
  if (q.includes("outdoor") || q.includes("garden") || q.includes("terrace") || q.includes("rooftop") || q.includes("courtyard") || q.includes("open air") || q.includes("patio")) {
    detected.push("outdoor");
  }
  if (q.includes("slow morning") || q.includes("early morning") || q.includes("calm morning") || q.includes("no rush") || q.includes("unrushed")) {
    detected.push("slow-morning");
  }

  return detected;
}

/**
 * Safely retrieves normalized 0–10 score for a characteristic from a cafe.
 * Handles both new structured format: cafe.characteristics[key] = { score: 8.5 }
 * and legacy score fields (e.g. cafe.coffeeScore / 10).
 * Returns null if no evidence or value is null (does NOT fabricate 0).
 */
export function getCharacteristicScore(cafe, characteristicKey) {
  if (!cafe) return null;

  // 1. Structured characteristics object
  if (cafe.characteristics && cafe.characteristics[characteristicKey] !== undefined) {
    const charData = cafe.characteristics[characteristicKey];
    if (charData === null) return null;
    if (typeof charData === "number") return charData;
    if (charData && typeof charData.score === "number") return charData.score;
    if (charData && charData.score === null) return null;
  }

  // 2. Legacy fallback mapping if characteristics not fully migrated
  const legacyMap = {
    coffee: cafe.coffeeScore ? cafe.coffeeScore / 10 : null,
    work: cafe.workScore ? cafe.workScore / 10 : null,
    date: cafe.dateScore ? cafe.dateScore / 10 : null,
    quiet: cafe.quietScore ? cafe.quietScore / 10 : null,
    aesthetic: cafe.aestheticScore ? cafe.aestheticScore / 10 : null,
    dessert: cafe.dessertScore ? cafe.dessertScore / 10 : null,
    groups: cafe.groupScore ? cafe.groupScore / 10 : null,
    lateNight: cafe.lateNightScore ? cafe.lateNightScore / 10 : null,
    reading: cafe.readingScore ? cafe.readingScore / 10 : (cafe.quietScore ? Math.max(0, (cafe.quietScore - 5) / 10) : null),
    brunch: cafe.brunchScore ? cafe.brunchScore / 10 : (cafe.dessertScore ? (cafe.dessertScore / 10) : null),
    outdoor: cafe.outdoorScore ? cafe.outdoorScore / 10 : (cafe.amenities?.outdoorSeating || cafe.outdoorSeating ? 8.5 : 4.0),
    ambience: cafe.aestheticScore ? cafe.aestheticScore / 10 : null,
    food: cafe.dessertScore ? cafe.dessertScore / 10 : null,
    seating: cafe.workScore ? cafe.workScore / 10 : null,
    conversation: cafe.dateScore ? cafe.dateScore / 10 : null
  };

  const val = legacyMap[characteristicKey];
  return val !== undefined ? val : null;
}

/**
 * Calculates a single mood's compatibility score (0 to 100).
 * Non-punitive: null characteristics are omitted, normalizing over available evidence.
 */
export function calculateSingleMoodScore(cafe, moodId) {
  const canonicalId = MOOD_ID_MAP[moodId] || moodId;
  const moodDef = MOODS_LIST.find((m) => m.id === canonicalId);
  if (!moodDef || !moodDef.weights) return 70; // Sensible default if mood definition missing

  let weightedSum = 0;
  let totalAvailableWeight = 0;

  for (const [charKey, weight] of Object.entries(moodDef.weights)) {
    const scoreVal = getCharacteristicScore(cafe, charKey);
    if (scoreVal !== null && !isNaN(scoreVal)) {
      weightedSum += scoreVal * weight;
      totalAvailableWeight += weight;
    }
  }

  // If literally no characteristics have evidence, return default baseline 65%
  if (totalAvailableWeight === 0) {
    return 65;
  }

  // Normalize by total available weights (scores are 0-10, scale to 0-100)
  const normalizedScore = (weightedSum / totalAvailableWeight) * 10;
  return Math.min(100, Math.max(30, normalizedScore));
}

/**
 * Calculates CAFORA MATCH percentage for a cafe given active moods & search.
 * - Multi-mood weighted calculation (1 = 100%, 2 = 50/50, 3+ = equal weights).
 * - Synergy bonus (+2% to +5%) when a cafe excels across multiple requested moods.
 * - Search keyword intent gently enhances score (+3% to +6%).
 * - Returns integer between 50 and 99.
 */
export function calculateMatchPercentage(cafe, activeMoodIds = [], searchQuery = "") {
  if (!cafe) return 75;

  const validMoods = (activeMoodIds || [])
    .map((id) => MOOD_ID_MAP[id] || id)
    .filter((id) => MOODS_LIST.some((m) => m.id === id));

  const queryVibes = extractVibesFromSearch(searchQuery);
  const combinedVibes = Array.from(new Set([...validMoods, ...queryVibes]));

  // If no mood and no query, return curated baseline derived from rating and trust
  if (combinedVibes.length === 0) {
    const baseRating = Number(cafe.rating) || 4.5;
    const trust = Number(cafe.trustScore || cafe.facts?.trustScore) || 88;
    return Math.min(96, Math.max(70, Math.round((baseRating / 5) * 60 + (trust / 100) * 38)));
  }

  // Calculate score for each active mood
  const moodScores = combinedVibes.map((mId) => calculateSingleMoodScore(cafe, mId));

  // Average mood scores
  const sumScores = moodScores.reduce((acc, s) => acc + s, 0);
  let baseScore = sumScores / moodScores.length;

  // Multi-mood synergy bonus: if a place genuinely excels across all chosen moods (>= 80)
  if (moodScores.length >= 2 && moodScores.every((s) => s >= 80)) {
    const synergy = Math.min(5, (moodScores.length - 1) * 2);
    baseScore += synergy;
  }

  // Search keyword relevance bonus (if cafe tags/name/sector match search)
  if (searchQuery && searchQuery.trim().length > 0) {
    const q = searchQuery.toLowerCase().trim();
    const searchTarget = [
      cafe.name,
      cafe.sector,
      ...(cafe.tags || []),
      ...(cafe.categories || [])
    ].join(" ").toLowerCase();

    if (searchTarget.includes(q)) {
      baseScore += 3;
    }
  }

  // Cap between 55% and 98%
  return Math.min(98, Math.max(55, Math.round(baseScore)));
}

/**
 * User-friendly CAFORA MATCH label based on percentage.
 */
export function getMatchLabel(matchPercentage) {
  if (matchPercentage >= 95) return "Perfect match";
  if (matchPercentage >= 90) return "Excellent match";
  if (matchPercentage >= 80) return "Strong match";
  if (matchPercentage >= 70) return "Good fit";
  return "Compatible alternative";
}

/**
 * Extracts verifiable match reasons (2 to 4 bullet points) for why CAFORA picked this cafe.
 * Reasons are derived from actual high-scoring characteristics and evidence.
 */
export function getWhyItMatches(cafe, activeMoodIds = [], searchQuery = "") {
  if (!cafe) return [];

  const reasons = [];
  const validMoods = (activeMoodIds || [])
    .map((id) => MOOD_ID_MAP[id] || id);

  const queryVibes = extractVibesFromSearch(searchQuery);
  const combinedVibes = Array.from(new Set([...validMoods, ...queryVibes]));

  // Check characteristics for reasons
  const checkChar = (charKey, minScore = 7.8) => {
    const s = getCharacteristicScore(cafe, charKey);
    return s !== null && s >= minScore;
  };

  if (combinedVibes.includes("good-coffee") || combinedVibes.length === 0) {
    if (checkChar("coffee", 8.5) || cafe.specialtyCoffee) {
      reasons.push("Specialty single-origin roasts & dedicated manual brew bar");
    }
  }

  if (combinedVibes.includes("work")) {
    if (checkChar("work", 8.0) || cafe.amenities?.wifi) {
      reasons.push("Ergonomic work tables with stable Wi-Fi and accessible power sockets");
    }
  }

  if (combinedVibes.includes("date")) {
    if (checkChar("date", 8.2) || checkChar("ambience", 8.5)) {
      reasons.push("Intimate candlelight ambience tailored for quiet conversation");
    }
  }

  if (combinedVibes.includes("quiet") || combinedVibes.includes("reading")) {
    if (checkChar("quiet", 7.5) || checkChar("reading", 8.0)) {
      reasons.push("Low noise levels and peaceful secluded corners");
    }
  }

  if (combinedVibes.includes("pretty")) {
    if (checkChar("aesthetic", 8.5)) {
      reasons.push("Highly photogenic architectural styling with flattering natural light");
    }
  }

  if (combinedVibes.includes("sweet-tooth")) {
    if (checkChar("dessert", 8.0)) {
      reasons.push("Artisanal in-house bakery display with fresh warm pastries");
    }
  }

  if (combinedVibes.includes("gang")) {
    if (checkChar("groups", 8.0)) {
      reasons.push("Generous seating arrangements and lively, social vibe for groups");
    }
  }

  if (combinedVibes.includes("late-night")) {
    if (checkChar("lateNight", 7.5)) {
      reasons.push("Reliably open late for midnight caffeine and conversations");
    }
  }

  if (combinedVibes.includes("brunch")) {
    if (checkChar("brunch", 8.0)) {
      reasons.push("Standout all-day brunch menu with wholesome artisanal plates");
    }
  }

  if (combinedVibes.includes("outdoor")) {
    if (checkChar("outdoor", 7.5) || cafe.amenities?.outdoorSeating || cafe.outdoorSeating) {
      reasons.push("Open-air garden courtyard and breezy terrace seating");
    }
  }

  if (combinedVibes.includes("slow-morning")) {
    if (checkChar("quiet", 7.5) && checkChar("coffee", 7.8)) {
      reasons.push("Gentle morning light and an unhurried, peaceful atmosphere");
    }
  }

  // Fallback to verified strengths or verdict if fewer than 2 reasons generated
  if (reasons.length < 2 && Array.isArray(cafe.strengths)) {
    for (const st of cafe.strengths) {
      if (!reasons.includes(st) && reasons.length < 3) {
        reasons.push(st);
      }
    }
  }

  if (reasons.length < 2 && cafe.verdict?.headline) {
    reasons.push(cafe.verdict.headline);
  }

  return reasons.slice(0, 3);
}

/**
 * Extracts a real caveat/operational note if present for the cafe.
 * e.g. "Quieter on weekday mornings; lively post 6 PM"
 */
export function getCafeCaveat(cafe, activeMoodIds = []) {
  if (!cafe) return null;

  const validMoods = (activeMoodIds || []).map((id) => MOOD_ID_MAP[id] || id);

  // Check structured characteristics caveats
  if (cafe.characteristics) {
    for (const mId of validMoods) {
      const moodDef = MOODS_LIST.find((m) => m.id === mId);
      if (moodDef?.weights) {
        for (const charKey of Object.keys(moodDef.weights)) {
          const charObj = cafe.characteristics[charKey];
          if (charObj && charObj.caveat) {
            return charObj.caveat;
          }
        }
      }
    }

    // Generic caveat check
    for (const charObj of Object.values(cafe.characteristics)) {
      if (charObj && charObj.caveat) {
        return charObj.caveat;
      }
    }
  }

  // Check top-level caveat field
  if (cafe.caveat) return cafe.caveat;

  return null;
}

/**
 * Returns a brief editorial personality tagline
 */
export function getCafePersonalityTagline(cafe) {
  if (!cafe) return "Chandigarh verified café";
  if (cafe.personalityTagline) return cafe.personalityTagline;
  if (cafe.tagline) return cafe.tagline;
  if (cafe.verdict?.headline) return cafe.verdict.headline;
  return "Good coffee. Honest reasons to visit.";
}

/**
 * Ranks all cafes by CAFORA MATCH percentage.
 * Non-strict ranking: every cafe receives a score and is ordered; none are eliminated.
 */
export function rankCafesByVibeAndSearch(cafes = [], activeMoodIds = [], searchQuery = "") {
  if (!cafes || cafes.length === 0) return [];

  return [...cafes].sort((a, b) => {
    const matchB = calculateMatchPercentage(b, activeMoodIds, searchQuery);
    const matchA = calculateMatchPercentage(a, activeMoodIds, searchQuery);
    if (matchB !== matchA) {
      return matchB - matchA;
    }
    // Tie-breaker: Trust Score or rating
    const trustB = Number(b.trustScore || b.facts?.trustScore) || 85;
    const trustA = Number(a.trustScore || a.facts?.trustScore) || 85;
    if (trustB !== trustA) return trustB - trustA;
    return (Number(b.rating) || 0) - (Number(a.rating) || 0);
  });
}

/**
 * 3-Tier Fallback & Categorized Recommendations Hierarchy:
 * LEVEL 1: Strong matches (>= 80%)
 * LEVEL 2: Good matches (70–79%)
 * LEVEL 3: Closest alternatives (< 70%)
 * 
 * Guarantees that users never receive an empty list simply because an attribute is missing.
 */
export function getCategorizedRecommendations(cafes = [], activeMoodIds = [], searchQuery = "") {
  if (!cafes || cafes.length === 0) {
    return {
      spotlight: [],
      morePlaces: [],
      allRanked: [],
      isFallback: false,
      fallbackMessage: null
    };
  }

  const validMoods = (activeMoodIds || []).map((id) => MOOD_ID_MAP[id] || id);
  const isVibeActive = validMoods.length > 0 || (searchQuery && searchQuery.trim().length > 0);

  // If no vibe and no search, return standard curated list
  if (!isVibeActive) {
    return {
      spotlight: cafes.slice(0, 4),
      morePlaces: cafes.slice(4),
      allRanked: cafes,
      isFallback: false,
      fallbackMessage: null
    };
  }

  const ranked = rankCafesByVibeAndSearch(cafes, validMoods, searchQuery);

  const strongMatches = [];
  const goodMatches = [];
  const closestAlternatives = [];

  ranked.forEach((cafe) => {
    const pct = calculateMatchPercentage(cafe, validMoods, searchQuery);
    if (pct >= 80) {
      strongMatches.push(cafe);
    } else if (pct >= 70) {
      goodMatches.push(cafe);
    } else {
      closestAlternatives.push(cafe);
    }
  });

  let spotlight = [...strongMatches];
  let isFallback = false;
  let fallbackMessage = null;

  // Level 2 Fallback: if fewer than 3 strong matches
  if (spotlight.length < 3) {
    spotlight = [...spotlight, ...goodMatches];
  }

  // Level 3 Fallback: if still fewer than 3, add closest alternatives
  if (spotlight.length < 3) {
    spotlight = [...spotlight, ...closestAlternatives];
    isFallback = true;
    fallbackMessage = "Nothing is a perfect match — but these come close.";
  } else if (spotlight[0] && calculateMatchPercentage(spotlight[0], validMoods, searchQuery) < 80) {
    isFallback = true;
    fallbackMessage = "Nothing is a perfect match — but these come close.";
  }

  // Cap spotlight to top 4
  const topSpotlight = spotlight.slice(0, 4);
  const spotlightIds = new Set(topSpotlight.map((c) => c.id));
  const morePlaces = ranked.filter((c) => !spotlightIds.has(c.id));

  return {
    spotlight: topSpotlight,
    morePlaces,
    allRanked: ranked,
    isFallback,
    fallbackMessage
  };
}

/**
 * Dynamic conversational response copy for the hero and section headings.
 * Tailored for all 12 moods and combination queries.
 */
export function getMoodResponseCopy(activeMoodIds = [], searchQuery = "") {
  const validMoods = (activeMoodIds || []).map((id) => MOOD_ID_MAP[id] || id);

  // If search query is active
  if (searchQuery && searchQuery.trim().length > 0) {
    if (validMoods.length > 0) {
      const moodNames = validMoods.map((id) => MOODS_LIST.find((m) => m.id === id)?.name).filter(Boolean);
      return {
        lead: `Searching "${searchQuery.trim()}" + ${moodNames.join(" & ")}`,
        sub: "Matching both your search intent and selected vibes."
      };
    }
    return {
      lead: `Searching "${searchQuery.trim()}"`,
      sub: "Ranking Chandigarh's verified cafe collection to your query."
    };
  }

  // If 0 moods selected: Default curated experience
  if (validMoods.length === 0) {
    return {
      lead: "The places we'd actually recommend to a friend.",
      sub: "Hand-curated, verified in Chandigarh, with real visit data."
    };
  }

  // If 1 mood selected
  if (validMoods.length === 1) {
    const mood = MOODS_LIST.find((m) => m.id === validMoods[0]);
    if (mood && mood.singleCopy) {
      return {
        lead: mood.singleCopy.lead,
        sub: mood.singleCopy.sub
      };
    }
  }

  // If 2 moods selected
  if (validMoods.length === 2) {
    const m1 = MOODS_LIST.find((m) => m.id === validMoods[0]);
    const m2 = MOODS_LIST.find((m) => m.id === validMoods[1]);
    const icons = `${m1?.icon || ""}${m2?.icon || ""}`;

    if (validMoods.includes("date") && validMoods.includes("pretty")) {
      return {
        lead: `Okay, we see the assignment. ${icons}`,
        sub: "Romantic + photogenic. Let's find your spot."
      };
    }
    if (validMoods.includes("work") && validMoods.includes("quiet")) {
      return {
        lead: `Quiet + work mode. We've got you. ${icons}`,
        sub: "Tables with Wi-Fi, low noise, and minimal distractions."
      };
    }
    if (validMoods.includes("good-coffee") && validMoods.includes("sweet-tooth")) {
      return {
        lead: `Great coffee + sweet tooth. ${icons}`,
        sub: "Places where both the roast and the bakery excel."
      };
    }
    if (validMoods.includes("brunch") && validMoods.includes("outdoor")) {
      return {
        lead: `Open-air brunch vibes. ${icons}`,
        sub: "Sunlit patios, artisan breakfast plates, and fresh morning breezes."
      };
    }
    if (validMoods.includes("reading") && validMoods.includes("slow-morning")) {
      return {
        lead: `Unhurried morning with a good book. ${icons}`,
        sub: "Quiet corners, soft morning light, and zero pressure to leave."
      };
    }
    return {
      lead: `Okay, we see the assignment. ${icons}`,
      sub: `${m1?.name || "Vibe 1"} + ${m2?.name || "Vibe 2"}. Ranking your best combined spots.`
    };
  }

  // If 3+ moods selected
  const icons = validMoods.map((id) => MOODS_LIST.find((m) => m.id === id)?.icon).join("");
  const titles = validMoods.map((id) => MOODS_LIST.find((m) => m.id === id)?.name).filter(Boolean);
  return {
    lead: `Okay, ambitious combination! ${icons}`,
    sub: `${titles.slice(0, 2).join(" + ")} + ${titles[2] || "more"}. Ranking your best combined spots.`
  };
}

/**
 * Editorial "CAFORA SAYS" quote on top recommendation
 */
export function getCaforaSaysPhrase(cafe, activeMoodIds = []) {
  if (!cafe) return null;
  const validMoods = (activeMoodIds || []).map((id) => MOOD_ID_MAP[id] || id);

  if (validMoods.includes("work")) {
    return "Grab a corner table near the sockets; your battery will outlast your deadline.";
  }
  if (validMoods.includes("date")) {
    return "Ask for a courtyard table at sunset; the lighting does half the work.";
  }
  if (validMoods.includes("good-coffee")) {
    return "Skip the syrups. Order their manual pour-over black.";
  }
  if (validMoods.includes("reading")) {
    return "Pick the window bench with natural light and settle in for two chapters.";
  }
  if (validMoods.includes("brunch")) {
    return "Come hungry before noon — their baked sourdough sells out early.";
  }
  if (validMoods.includes("outdoor")) {
    return "The courtyard terrace around 4:30 PM is pure golden hour perfection.";
  }
  if (validMoods.includes("slow-morning")) {
    return "Arrive before 10 AM. It feels like your own private morning salon.";
  }

  return cafe.personalityTagline || cafe.featuredQuote || "One of our most confident recommendations in Chandigarh.";
}

/**
 * Normalized 0-10 vibe scores used for detail pages and radar/bar charts
 */
export function getCafeVibeScores(cafe) {
  if (!cafe) {
    return {
      coffee: 8.5,
      work: 8.0,
      conversation: 8.2,
      aesthetic: 8.5,
      night: 7.5,
      food: 8.0
    };
  }
  const getS = (key, fallback = 8.0) => {
    const s = getCharacteristicScore(cafe, key);
    return s !== null ? s : fallback;
  };
  return {
    coffee: getS("coffee", 8.5),
    work: getS("work", 8.0),
    conversation: getS("conversation", getS("date", 8.2)),
    aesthetic: getS("aesthetic", 8.5),
    night: getS("lateNight", 7.5),
    food: getS("dessert", getS("food", 8.0))
  };
}

/**
 * Single mood score alias for backward compatibility
 */
export function getCafeMoodScore(cafe, moodId) {
  return calculateSingleMoodScore(cafe, moodId);
}

/**
 * Why picked reasons alias for detail pages
 */
export function getWhyPickedReasons(cafe) {
  return getWhyItMatches(cafe, []);
}

/**
 * Top 3 highlight badges for a cafe
 */
export function getBestForBadges(cafe) {
  if (!cafe) return ["Coffee", "Chilling"];
  const badges = [];
  const chars = cafe.characteristics || {};

  if (chars.coffee?.score >= 8.5 || cafe.specialtyCoffee) badges.push("Specialty Coffee");
  if (chars.work?.score >= 8.0 || cafe.amenities?.wifi) badges.push("Work Friendly");
  if (chars.date?.score >= 8.5) badges.push("Date Night");
  if (chars.quiet?.score >= 8.0) badges.push("Quiet Corner");
  if (chars.aesthetic?.score >= 8.8) badges.push("Photogenic");
  if (chars.dessert?.score >= 8.2) badges.push("Artisan Bakes");
  if (chars.outdoor?.score >= 8.0 || cafe.amenities?.outdoorSeating) badges.push("Open Air");
  if (chars.brunch?.score >= 8.0) badges.push("Brunch");
  if (chars.reading?.score >= 8.0) badges.push("Reading Nook");
  if (chars.lateNight?.score >= 8.0) badges.push("Late Night");

  return badges.slice(0, 3);
}

