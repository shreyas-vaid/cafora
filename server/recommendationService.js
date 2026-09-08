/**
 * CAFORA Server-Side Recommendation & Search Intent Service
 * 
 * Provides evidence-grounded recommendation calculation:
 * - 12 Canonical Moods with characteristic weights
 * - Conversational Search Intent extraction
 * - Multi-mood weighted ranking (1, 2, or 3 moods + synergy)
 * - Non-punitive missing data normalization (null is not zero)
 * - 3-Tier Fallback Hierarchy (Level 1: Strong, Level 2: Good, Level 3: Closest)
 * - Separation of Match Score (0-100%) vs. Trust Score (0-100)
 * - Evidence-based reason extraction and operational caveats
 */
const { calculateTrustScore } = require('./trustScore.js');

const CANONICAL_MOODS = [
  {
    id: "good-coffee",
    title: "GOOD COFFEE",
    name: "Good Coffee",
    tagline: "I care about the coffee.",
    icon: "☕",
    categoryKey: "coffee",
    accent: "#e07a38",
    weights: { coffee: 0.60, ambience: 0.15, food: 0.15, seating: 0.10 },
    copy: { lead: "Ah. You care about the roast.", sub: "Here are the places with serious beans, single origins, and barista craft." }
  },
  {
    id: "work",
    title: "GET WORK DONE",
    name: "Get Work Done",
    tagline: "Give me a table and Wi-Fi.",
    icon: "💻",
    categoryKey: "study",
    accent: "#38bdf8",
    weights: { work: 0.35, quiet: 0.20, seating: 0.20, ambience: 0.15, coffee: 0.10 },
    copy: { lead: "Laptop open, headphones on.", sub: "Strong Wi-Fi, accessible power outlets, ergonomic tables, and focus-friendly ambience." }
  },
  {
    id: "date",
    title: "DATE NIGHT",
    name: "Date Night",
    tagline: "Something a little special.",
    icon: "❤️",
    categoryKey: "date",
    accent: "#f43f5e",
    weights: { date: 0.40, ambience: 0.25, conversation: 0.20, aesthetic: 0.15 },
    copy: { lead: "Ah. Date night.", sub: "Romantic lighting, intimate seating, curated playlists, and effortless conversation." }
  },
  {
    id: "quiet",
    title: "QUIET CORNER",
    name: "Quiet Corner",
    tagline: "I want to disappear for a while.",
    icon: "🌿",
    categoryKey: "quiet",
    accent: "#34d399",
    weights: { quiet: 0.45, conversation: 0.20, seating: 0.20, ambience: 0.15 },
    copy: { lead: "Ah. You need a quiet corner.", sub: "Here are the places where you can disappear for a while with calm, low-noise serenity." }
  },
  {
    id: "pretty",
    title: "SOMEWHERE PRETTY",
    name: "Somewhere Pretty",
    tagline: "Yes, I am taking pictures.",
    icon: "📸",
    categoryKey: "aesthetic",
    accent: "#c084fc",
    weights: { aesthetic: 0.50, ambience: 0.30, date: 0.10, outdoor: 0.10 },
    copy: { lead: "Main character energy today.", sub: "Aesthetic spaces, flattering natural light, thoughtful textures, and photogenic corners." }
  },
  {
    id: "sweet-tooth",
    title: "SWEET TOOTH",
    name: "Sweet Tooth",
    tagline: "Coffee is not enough.",
    icon: "🍰",
    categoryKey: "food",
    accent: "#fbbf24",
    weights: { dessert: 0.55, food: 0.25, coffee: 0.20 },
    copy: { lead: "Coffee is not enough today.", sub: "Places with standout bakery displays, warm flaky pastries, and decadent desserts." }
  },
  {
    id: "gang",
    title: "WITH THE GANG",
    name: "With the Gang",
    tagline: "Bring everyone.",
    icon: "👯",
    categoryKey: "group",
    accent: "#fb923c",
    weights: { groups: 0.45, food: 0.25, ambience: 0.15, conversation: 0.15 },
    copy: { lead: "Bring everyone along.", sub: "Spacious tables, sharing platters, energetic hum, and zero side-eyes for being lively." }
  },
  {
    id: "late-night",
    title: "LATE NIGHT",
    name: "Late Night",
    tagline: "I am not going home yet.",
    icon: "🌙",
    categoryKey: "latenight",
    accent: "#818cf8",
    weights: { lateNight: 0.55, coffee: 0.20, ambience: 0.15, food: 0.10 },
    copy: { lead: "Not going home just yet.", sub: "Places open late with warm drinks, good music, and midnight coffee energy." }
  },
  {
    id: "reading",
    title: "READ & UNWIND",
    name: "Read & Unwind",
    tagline: "A good book, no distractions.",
    icon: "📚",
    categoryKey: "reading",
    accent: "#6ee7b7",
    weights: { reading: 0.40, quiet: 0.25, seating: 0.20, ambience: 0.15 },
    copy: { lead: "A book, a warm cup, zero rush.", sub: "Plush seating, warm lighting, secluded tables, and tranquil low-distraction spaces." }
  },
  {
    id: "brunch",
    title: "BRUNCH",
    name: "Brunch",
    tagline: "Slow mornings, great food.",
    icon: "🥐",
    categoryKey: "brunch",
    accent: "#f59e0b",
    weights: { brunch: 0.45, food: 0.25, coffee: 0.15, ambience: 0.15 },
    copy: { lead: "Brunch mode activated.", sub: "Savory morning plates, sourdough toasts, artisan eggs, and relaxed daytime dining." }
  },
  {
    id: "outdoor",
    title: "OUTDOOR ESCAPE",
    name: "Outdoor Escape",
    tagline: "Fresh air and open skies.",
    icon: "🌳",
    categoryKey: "outdoor",
    accent: "#10b981",
    weights: { outdoor: 0.55, ambience: 0.25, aesthetic: 0.20 },
    copy: { lead: "Sunshine, fresh air, and open sky.", sub: "Charming sunlit courtyards, breezy rooftop terraces, and garden patio seating." }
  },
  {
    id: "slow-morning",
    title: "SLOW MORNING",
    name: "Slow Morning",
    tagline: "No rush, just good coffee.",
    icon: "🧘",
    categoryKey: "slow-morning",
    accent: "#a78bfa",
    weights: { coffee: 0.30, quiet: 0.25, ambience: 0.25, reading: 0.20 },
    copy: { lead: "Unrushed mornings. Deep breaths.", sub: "Peaceful morning light, steaming fresh brews, and a tranquil space to ease into the day." }
  }
];

const MOOD_ID_MAP = {
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
 * Maps search query intent into recognized moods
 */
function extractIntentFromQuery(query = "") {
  if (!query || typeof query !== "string") return [];
  const q = query.toLowerCase().trim();
  const detected = new Set();

  if (/(work|study|laptop|wifi|desk|plug|socket|focus|productive)/i.test(q)) detected.add("work");
  if (/(quiet|peaceful|silent|calm|secluded|alone|serene)/i.test(q)) detected.add("quiet");
  if (/(date|romantic|couple|candle|anniversary|intimate|girlfriend|boyfriend)/i.test(q)) detected.add("date");
  if (/(pretty|aesthetic|photo|instagram|beautiful|interior|decor|picturesque|ambience|ambiance)/i.test(q)) detected.add("pretty");
  if (/(coffee|espresso|pourover|pour over|roast|specialty|flat white|cappuccino)/i.test(q)) detected.add("good-coffee");
  if (/(sweet|dessert|cake|pastry|bakery|croissant|waffle|cheesecake|donut)/i.test(q)) detected.add("sweet-tooth");
  if (/(gang|friends|group|crowd|gather|party|reunion|everyone)/i.test(q)) detected.add("gang");
  if (/(late|night|midnight|afterhours|after 10|after 11|1am)/i.test(q)) detected.add("late-night");
  if (/(read|book|novel|unwind|literature|magazine)/i.test(q)) detected.add("reading");
  if (/(brunch|breakfast|morning food|eggs|pancake|toast|bacon)/i.test(q)) detected.add("brunch");
  if (/(outdoor|garden|terrace|rooftop|courtyard|open air|patio|alfresco)/i.test(q)) detected.add("outdoor");
  if (/(slow morning|early morning|calm morning|unrushed|sunrise|easy morning)/i.test(q)) detected.add("slow-morning");

  return Array.from(detected);
}

/**
 * Safely extracts normalized characteristic score (0-10 or null)
 */
function getCharacteristicScore(cafe, key) {
  if (!cafe) return null;
  const chars = cafe.characteristics;
  if (chars && chars[key] !== undefined) {
    const val = chars[key];
    if (val === null) return null;
    if (typeof val === 'number') return val;
    if (typeof val === 'object' && typeof val.score === 'number') return val.score;
  }
  return null;
}

/**
 * Calculates match percentage for a cafe against active moods
 */
function calculateMatchScore(cafe, activeMoodIds = [], searchQuery = "") {
  if (!activeMoodIds || activeMoodIds.length === 0) {
    // Return baseline if no mood selected
    const trust = calculateTrustScore(cafe).score;
    const rating = cafe.facts?.rating ?? cafe.rating;
    const ratingFactor = (typeof rating === 'number') ? (rating / 5) * 45 : 36;
    return Math.min(96, Math.max(50, Math.round(ratingFactor + (trust / 100) * 50)));
  }

  const normalizedMoodIds = activeMoodIds.map(m => MOOD_ID_MAP[m] || m);
  const moodScores = [];

  for (const moodId of normalizedMoodIds) {
    const moodDef = CANONICAL_MOODS.find(m => m.id === moodId);
    if (!moodDef || !moodDef.weights) {
      moodScores.push(72);
      continue;
    }

    let weightedSum = 0;
    let availableWeight = 0;

    for (const [charKey, weight] of Object.entries(moodDef.weights)) {
      const score = getCharacteristicScore(cafe, charKey);
      if (score !== null && !isNaN(score)) {
        weightedSum += score * weight;
        availableWeight += weight;
      }
    }

    if (availableWeight > 0) {
      const normalized10 = weightedSum / availableWeight;
      // Convert 0-10 to 60-100 percentage range
      const pct = Math.round(55 + (normalized10 / 10) * 43);
      moodScores.push(Math.min(99, Math.max(55, pct)));
    } else {
      moodScores.push(68); // Baseline when characteristics unverified
    }
  }

  let finalScore = 0;
  if (moodScores.length === 1) {
    finalScore = moodScores[0];
  } else if (moodScores.length === 2) {
    const avg = (moodScores[0] + moodScores[1]) / 2;
    // Synergy bonus if both moods fit strongly
    const bonus = (moodScores[0] >= 82 && moodScores[1] >= 82) ? 4 : 0;
    finalScore = Math.min(99, Math.round(avg + bonus));
  } else {
    const avg = moodScores.reduce((a, b) => a + b, 0) / moodScores.length;
    const allStrong = moodScores.every(s => s >= 80);
    const bonus = allStrong ? 5 : 0;
    finalScore = Math.min(99, Math.round(avg + bonus));
  }

  // Tag match boost
  const cafeMoods = cafe.cafora?.moods || cafe.moods || [];
  const directTagMatch = normalizedMoodIds.some(m => cafeMoods.includes(m));
  if (directTagMatch && finalScore < 95) {
    finalScore = Math.min(98, finalScore + 3);
  }

  return finalScore;
}

/**
 * Returns 2-4 verified reasons why CAFORA picked this cafe
 */
function getMatchReasons(cafe, activeMoodIds = []) {
  const reasons = [];
  const chars = cafe.characteristics || {};
  const caforaBestFor = cafe.cafora?.bestFor || [];

  if (activeMoodIds.length === 0) {
    if (caforaBestFor.length > 0) {
      caforaBestFor.slice(0, 3).forEach(b => reasons.push(b));
    } else {
      reasons.push("Authentic local establishment", "Curated atmosphere");
    }
    return reasons;
  }

  const norm = activeMoodIds.map(m => MOOD_ID_MAP[m] || m);

  if (norm.includes("good-coffee") && (chars.coffee?.score || 0) >= 7.8) {
    reasons.push("Standout specialty coffee roasts and manual brews");
  }
  if (norm.includes("work") && (chars.work?.score || 0) >= 7.5) {
    reasons.push("Work-friendly tables with dependable Wi-Fi access");
  }
  if (norm.includes("date") && (chars.date?.score || 0) >= 7.8) {
    reasons.push("Romantic lighting and intimate seating atmosphere");
  }
  if (norm.includes("quiet") && (chars.quiet?.score || 0) >= 7.5) {
    reasons.push("Low-distraction environment suitable for calm focus");
  }
  if (norm.includes("pretty") && (chars.aesthetic?.score || 0) >= 7.8) {
    reasons.push("Photogenic aesthetic decor and flattering natural daylight");
  }
  if (norm.includes("sweet-tooth") && (chars.dessert?.score || 0) >= 7.8) {
    reasons.push("Artisan dessert counter with fresh pastries and cakes");
  }
  if (norm.includes("gang") && (chars.groups?.score || 0) >= 7.5) {
    reasons.push("Spacious seating designed for lively group catchups");
  }
  if (norm.includes("late-night") && (chars.lateNight?.score || 0) >= 7.5) {
    reasons.push(`Late night dining hours (${cafe.facts?.openingHours || 'open late'})`);
  }
  if (norm.includes("reading") && (chars.reading?.score || 0) >= 7.5) {
    reasons.push("Quiet comfortable reading corners with minimal rush");
  }
  if (norm.includes("brunch") && (chars.brunch?.score || 0) >= 7.8) {
    reasons.push("Generous morning brunch plates and artisan toasts");
  }
  if (norm.includes("outdoor") && (chars.outdoor?.score || 0) >= 7.5) {
    reasons.push("Breezy open-air courtyard or garden terrace seating");
  }
  if (norm.includes("slow-morning") && (chars.slowMorning?.score || 0) >= 7.8) {
    reasons.push("Peaceful early morning ambiance to ease into the day");
  }

  // Backfill with bestFor if needed
  if (reasons.length < 2 && caforaBestFor.length > 0) {
    caforaBestFor.forEach(b => {
      if (!reasons.includes(b) && reasons.length < 3) reasons.push(b);
    });
  }

  if (reasons.length === 0) {
    reasons.push("Consistently positive diner consensus", "Verified neighborhood favorite");
  }

  return reasons;
}

/**
 * Returns operational caveats supported by evidence
 */
function getCafeCaveats(cafe) {
  if (cafe.cafora?.caveats && cafe.cafora.caveats.length > 0) {
    return cafe.cafora.caveats;
  }
  if (cafe.caveat) return [cafe.caveat];
  return [];
}

/**
 * Ranks and categorizes cafes using 3-Tier Fallback Hierarchy
 */
function getRecommendations(allCafes, options = {}) {
  const {
    moods = [],
    query = "",
    sector = "All Chandigarh",
    sort = "recommended"
  } = options;

  let activeMoods = Array.isArray(moods) ? [...moods] : (moods ? moods.split(',').map(s => s.trim()) : []);

  // Search intent fusion
  if (query && query.trim().length > 0) {
    const detected = extractIntentFromQuery(query);
    detected.forEach(m => {
      if (!activeMoods.includes(m)) activeMoods.push(m);
    });
  }

  // 1. Sector filtering
  let pool = allCafes;
  if (sector && sector !== "All Chandigarh") {
    pool = pool.filter(c => {
      const s = (c.sector || c.identity?.sector || "").toLowerCase();
      return s.includes(sector.toLowerCase());
    });
  }

  // 2. Score every cafe
  const scoredCafes = pool.map(cafe => {
    const matchPercentage = calculateMatchScore(cafe, activeMoods, query);
    const trustResult = calculateTrustScore(cafe);
    const trustScore = trustResult.score;
    const reasons = getMatchReasons(cafe, activeMoods);
    const caveats = getCafeCaveats(cafe);

    return {
      ...cafe,
      matchPercentage,
      matchScore: matchPercentage,
      trustScore,
      trustComponents: trustResult.components,
      trustExplanation: trustResult.explanation,
      matchReasons: reasons,
      caveats,
      matchLabel: matchPercentage >= 95 ? "Perfect match" : (matchPercentage >= 90 ? "Excellent match" : (matchPercentage >= 80 ? "Strong match" : "Good fit"))
    };
  });

  // 3. Sorting
  scoredCafes.sort((a, b) => {
    if (sort === "trust") {
      return (b.trustScore - a.trustScore) || (b.matchPercentage - a.matchPercentage);
    }
    if (sort === "rating") {
      const rA = a.facts?.rating || a.rating || 0;
      const rB = b.facts?.rating || b.rating || 0;
      return (rB - rA) || (b.matchPercentage - a.matchPercentage);
    }
    if (sort === "reviews") {
      const cA = a.facts?.reviewCount || a.reviews || 0;
      const cB = b.facts?.reviewCount || b.reviews || 0;
      return (cB - cA);
    }
    // Default: recommended (match score primary, trust score secondary)
    return (b.matchPercentage - a.matchPercentage) || (b.trustScore - a.trustScore);
  });

  // 4. 3-Tier Fallback Hierarchy (Never 0 cafes)
  const level1 = scoredCafes.filter(c => c.matchPercentage >= 80);
  const level2 = scoredCafes.filter(c => c.matchPercentage >= 70 && c.matchPercentage < 80);
  const level3 = scoredCafes.filter(c => c.matchPercentage < 70);

  let spotlight = [];
  let morePlaces = [];

  if (level1.length >= 3) {
    spotlight = level1.slice(0, 4);
    morePlaces = [...level1.slice(4), ...level2, ...level3];
  } else if (level1.length + level2.length >= 3) {
    spotlight = [...level1, ...level2].slice(0, 4);
    morePlaces = [...level1, ...level2].slice(4).concat(level3);
  } else {
    // Level 3 closest alternatives fallback
    spotlight = scoredCafes.slice(0, Math.min(4, scoredCafes.length));
    morePlaces = scoredCafes.slice(Math.min(4, scoredCafes.length));
  }

  // Conversational response copy
  let leadCopy = "The places we'd actually recommend to a friend.";
  let subCopy = "Curated across Chandigarh sectors by evidence and verified diner consensus.";

  if (activeMoods.length === 1) {
    const single = CANONICAL_MOODS.find(m => m.id === (MOOD_ID_MAP[activeMoods[0]] || activeMoods[0]));
    if (single?.copy) {
      leadCopy = single.copy.lead;
      subCopy = single.copy.sub;
    }
  } else if (activeMoods.length === 2) {
    leadCopy = `Tailored for ${activeMoods.map(m => m.replace(/-/g, ' ')).join(' + ')}.`;
    subCopy = "Ranked by combined compatibility and verified evidence depth.";
  } else if (activeMoods.length >= 3) {
    leadCopy = `A multi-mood curation for your day.`;
    subCopy = "Filtering across your chosen vibes without eliminating great alternatives.";
  }

  return {
    totalConsidered: allCafes.length,
    activeMoods,
    searchQuery: query,
    sector,
    copy: { lead: leadCopy, sub: subCopy },
    stats: {
      totalFound: scoredCafes.length,
      level1Strong: level1.length,
      level2Good: level2.length,
      level3Closest: level3.length
    },
    levels: {
      strong: level1,
      good: level2,
      closest: level3
    },
    spotlight,
    morePlaces,
    cafes: scoredCafes
  };
}

module.exports = {
  CANONICAL_MOODS,
  MOOD_ID_MAP,
  extractIntentFromQuery,
  calculateMatchScore,
  getMatchReasons,
  getCafeCaveats,
  getRecommendations
};
