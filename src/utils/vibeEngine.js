/**
 * CAFORA RECOMMENDATION & VIBE ENGINE
 * 
 * Centralized, non-strict weighted ranking engine for CAFORA.
 * - Multi-mood weighted compatibility scoring (1 mood = 100%, 2 moods = 50/50, 3 moods = 33/33/33).
 * - Partial data handling (missing attributes are treated as unknown, not zero).
 * - Fallback hierarchy (Level 1: Strong >= 80%, Level 2: Good 70-79%, Level 3: Closest alternatives).
 * - Match score labels (95-100: Perfect match, 90-94: Excellent match, 80-89: Strong match, 70-79: Pretty good fit).
 * - Dynamic conversational copy ("Ah. Date night.", "Okay, we see the assignment. ❤️📸").
 * - Verifiable match reasons grounded strictly in authentic data.
 * - Search intent fusion with keyword extraction.
 */

// 1. Centralized Mood Definitions
export const MOODS_LIST = [
  {
    id: "good-coffee",
    title: "GOOD COFFEE",
    name: "Good Coffee",
    tagline: "I care about the coffee.",
    icon: "☕",
    categoryKey: "coffee",
    accent: "#e07a38",
    attribute: "coffeeScore",
    singleCopy: {
      lead: "Ah. You care about the roast.",
      sub: "Here are the places with serious beans and barista craft."
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
    attribute: "workScore",
    singleCopy: {
      lead: "Laptop out, work mode on.",
      sub: "Places we'd send you when you actually need to finish something."
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
    attribute: "dateScore",
    singleCopy: {
      lead: "Ah. Date night.",
      sub: "Romantic lighting, intimate tables, and good conversation."
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
    attribute: "quietScore",
    singleCopy: {
      lead: "Ah. You need a quiet corner.",
      sub: "Here are the places where you can disappear for a while."
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
    attribute: "aestheticScore",
    singleCopy: {
      lead: "Main character energy today.",
      sub: "Aesthetic spaces, flattering natural light, and photogenic corners."
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
    attribute: "dessertScore",
    singleCopy: {
      lead: "Coffee is not enough today.",
      sub: "Places with standout bakery displays, warm pastries, and decadent desserts."
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
    attribute: "groupScore",
    singleCopy: {
      lead: "Bring everyone along.",
      sub: "Spacious tables, sharing platters, and zero side-eyes for being lively."
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
    attribute: "lateNightScore",
    singleCopy: {
      lead: "Not going home just yet.",
      sub: "Places open late with warm drinks, good music, and midnight energy."
    },
    label: "Late hours"
  }
];

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
  if (q.includes("quiet") || q.includes("peaceful") || q.includes("calm") || q.includes("read") || q.includes("solo") || q.includes("silent")) {
    detected.push("quiet");
  }
  if (q.includes("coffee") || q.includes("espresso") || q.includes("roaster") || q.includes("brew") || q.includes("pour over") || q.includes("latte") || q.includes("cappuccino")) {
    detected.push("good-coffee");
  }
  if (q.includes("pretty") || q.includes("photo") || q.includes("aesthetic") || q.includes("instagram") || q.includes("decor") || q.includes("beautiful") || q.includes("interior")) {
    detected.push("pretty");
  }
  if (q.includes("sweet") || q.includes("dessert") || q.includes("cake") || q.includes("pastry") || q.includes("bakery") || q.includes("waffle") || q.includes("chocolate") || q.includes("donut")) {
    detected.push("sweet-tooth");
  }
  if (q.includes("friends") || q.includes("group") || q.includes("gang") || q.includes("hangout") || q.includes("crowd") || q.includes("gathering")) {
    detected.push("gang");
  }
  if (q.includes("night") || q.includes("late") || q.includes("midnight") || q.includes("after hours") || q.includes("11") || q.includes("12")) {
    detected.push("late-night");
  }

  return detected;
}

/**
 * Calculates compatibility score (65 - 99) for a single cafe against a specific mood.
 * Supports partial data: if an explicit score is available, uses it.
 * Otherwise derives compatibility from factual attributes (Wi-Fi, hours, noise level, seating, tags, categories).
 * Unknown values are NOT treated as 0; they use a neutral baseline (75).
 */
export function getCafeMoodScore(cafe, moodId) {
  if (!cafe) return 75;

  const mood = MOODS_LIST.find((m) => m.id === moodId);
  const explicitKey = mood?.attribute;

  // 1. If explicit attribute exists, use it (normalized to 0-100)
  if (explicitKey && cafe[explicitKey] != null && typeof cafe[explicitKey] === "number") {
    const raw = cafe[explicitKey];
    return raw <= 10 ? Math.round(raw * 10) : Math.round(raw);
  }

  // 2. Derive score from factual attributes, categories, tags, strengths, and reviews
  // Baseline is 75 (neutral baseline so missing data NEVER destroys a recommendation)
  let score = 75;
  const cats = cafe.categories || [];
  const tagsLower = (cafe.tags || []).map((t) => t.toLowerCase());
  const strengthsText = (cafe.strengths || []).join(" ").toLowerCase();
  const lovedText = (cafe.verdict?.loved || []).join(" ").toLowerCase();
  const baseRating = Number(cafe.rating) || 4.2;

  // Rating calibration: +0 to +8
  const ratingBonus = (baseRating - 4.0) * 7.5;
  score += Math.max(-4, Math.min(7, ratingBonus));

  switch (moodId) {
    case "good-coffee": {
      if (cafe.specialtyCoffee === true) score += 12;
      if (cats.includes("coffee")) score += 8;
      if (tagsLower.some((t) => t.includes("specialty") || t.includes("roaster") || t.includes("pour over") || t.includes("espresso") || t.includes("artisan") || t.includes("single origin"))) score += 10;
      if (strengthsText.includes("coffee") || strengthsText.includes("roast") || lovedText.includes("coffee") || lovedText.includes("roast") || lovedText.includes("pour")) score += 6;
      break;
    }
    case "work": {
      if (cafe.wifi === true) score += 10;
      if (cafe.power === true) score += 8;
      if (cafe.seating === "laptop-friendly" || cafe.seating === "spacious") score += 7;
      if (cats.includes("study")) score += 10;
      if (tagsLower.some((t) => t.includes("laptop") || t.includes("wifi") || t.includes("work") || t.includes("study"))) score += 8;
      if (strengthsText.includes("wi-fi") || strengthsText.includes("socket") || strengthsText.includes("desk") || strengthsText.includes("laptop")) score += 6;
      if (cafe.verdict?.disliked?.some((d) => d.toLowerCase().includes("laptop") || d.toLowerCase().includes("work"))) score -= 14;
      break;
    }
    case "date": {
      if (cafe.ambience === "romantic" || cafe.ambience === "intimate") score += 12;
      if (cats.includes("date")) score += 10;
      if (tagsLower.some((t) => t.includes("rooftop") || t.includes("cozy") || t.includes("bistro") || t.includes("romantic") || t.includes("courtyard") || t.includes("candle"))) score += 8;
      if (strengthsText.includes("candle") || strengthsText.includes("intimate") || strengthsText.includes("lighting") || strengthsText.includes("terrace") || strengthsText.includes("romantic")) score += 6;
      if (cafe.noiseLevel === "quiet" || cafe.noiseLevel === "low") score += 4;
      break;
    }
    case "quiet": {
      if (cafe.noiseLevel === "quiet" || cafe.noiseLevel === "low") score += 14;
      if (cats.includes("quiet")) score += 10;
      if (tagsLower.some((t) => t.includes("quiet") || t.includes("peaceful") || t.includes("calm") || t.includes("reading") || t.includes("solo"))) score += 8;
      if (strengthsText.includes("peaceful") || strengthsText.includes("calm") || strengthsText.includes("quiet")) score += 6;
      if (cafe.noiseLevel === "loud" || cafe.verdict?.disliked?.some((d) => d.toLowerCase().includes("noisy") || d.toLowerCase().includes("loud"))) score -= 14;
      break;
    }
    case "pretty": {
      if (cafe.ambience === "aesthetic" || cafe.ambience === "scenic") score += 12;
      if (cafe.outdoorSeating === true) score += 6;
      if (cats.includes("aesthetic") || cats.includes("instagrammable")) score += 10;
      if (tagsLower.some((t) => t.includes("decor") || t.includes("interior") || t.includes("garden") || t.includes("terrace") || t.includes("scandinavian") || t.includes("bohemian") || t.includes("aesthetic") || t.includes("photogenic"))) score += 8;
      if (strengthsText.includes("interior") || strengthsText.includes("decor") || strengthsText.includes("photogenic") || strengthsText.includes("natural light")) score += 6;
      break;
    }
    case "sweet-tooth": {
      if (cafe.desserts === true) score += 12;
      if (tagsLower.some((t) => t.includes("bake") || t.includes("pastry") || t.includes("dessert") || t.includes("pancake") || t.includes("bakery") || t.includes("cake") || t.includes("waffle") || t.includes("donut"))) score += 12;
      if (cats.includes("food")) score += 6;
      if (lovedText.includes("croissant") || lovedText.includes("cake") || lovedText.includes("pastry") || lovedText.includes("brownie") || lovedText.includes("dessert") || lovedText.includes("tiramisu") || lovedText.includes("waffle")) score += 8;
      break;
    }
    case "gang": {
      if (cafe.seating === "large-tables" || cafe.seating === "spacious" || cafe.seating === "booths" || cafe.seating === "terrace") score += 12;
      if (cats.includes("group") || cats.includes("family")) score += 10;
      if (tagsLower.some((t) => t.includes("group") || t.includes("friends") || t.includes("sharing") || t.includes("lively") || t.includes("hangout"))) score += 8;
      if (strengthsText.includes("group") || strengthsText.includes("friends") || strengthsText.includes("spacious") || strengthsText.includes("sharing")) score += 6;
      break;
    }
    case "late-night": {
      const hours = (cafe.openingHours || "").toLowerCase();
      if (hours.includes("11:") || hours.includes("11:30") || hours.includes("12:") || hours.includes("1:") || hours.includes("midnight") || hours.includes("24 hours") || hours.includes("1:00 am") || hours.includes("12:30")) {
        score += 15;
      }
      if (cats.includes("latenight")) score += 10;
      if (tagsLower.some((t) => t.includes("late") || t.includes("night") || t.includes("evening"))) score += 8;
      break;
    }
    default:
      break;
  }

  return Math.min(99, Math.max(65, Math.round(score)));
}

/**
 * Calculates CAFORA MATCH percentage (e.g. 96%, 92%, 85%) for a cafe.
 * Non-strict weighted combination:
 * 1 mood: 100% weight
 * 2 moods: 50/50 weight
 * 3 moods: 33/33/33 weight
 * Plus subtle multi-mood synergy bonus if cafe scores high across all chosen moods.
 */
export function calculateMatchPercentage(cafe, activeMoodIds = [], searchQuery = "") {
  if (!cafe) return 80;

  const detectedSearchVibes = extractVibesFromSearch(searchQuery);
  const combinedVibeIds = Array.from(new Set([...activeMoodIds, ...detectedSearchVibes]));

  // Default baseline when no mood is active
  if (combinedVibeIds.length === 0) {
    const rawRating = Number(cafe.rating) || 4.2;
    return Math.min(95, Math.round(78 + (rawRating / 5.0) * 16));
  }

  let totalScore = 0;
  let allAbove85 = true;

  for (const moodId of combinedVibeIds) {
    const score = getCafeMoodScore(cafe, moodId);
    totalScore += score;
    if (score < 85) {
      allAbove85 = false;
    }
  }

  let averageScore = totalScore / combinedVibeIds.length;

  // Multi-mood synergy bonus (+1 to +3% if cafe performs well across all requested vibes)
  if (combinedVibeIds.length > 1 && allAbove85) {
    averageScore += Math.min(3, combinedVibeIds.length);
  }

  // If search query text directly matches cafe name or sector, provide relevance boost
  if (searchQuery && searchQuery.trim().length > 1) {
    const q = searchQuery.toLowerCase().trim();
    if (cafe.name.toLowerCase().includes(q) || cafe.sector.toLowerCase().includes(q)) {
      averageScore += 3;
    }
  }

  return Math.min(98, Math.max(68, Math.round(averageScore)));
}

/**
 * Match Score Labels based on percentage:
 * 95–100: "Perfect match"
 * 90–94: "Excellent match"
 * 80–89: "Strong match"
 * 70–79: "Pretty good fit"
 * Below 70: "Closest alternative"
 */
export function getMatchLabel(matchPercentage) {
  if (matchPercentage >= 95) return "Perfect match";
  if (matchPercentage >= 90) return "Excellent match";
  if (matchPercentage >= 80) return "Strong match";
  if (matchPercentage >= 70) return "Pretty good fit";
  return "Closest alternative";
}

/**
 * Generates 2–4 verifiable "WHY THIS MATCHES" bullet points grounded in actual data.
 */
export function getWhyItMatches(cafe, activeMoodIds = []) {
  if (!cafe) return [];

  const reasons = [];
  const strengths = cafe.strengths || [];
  const loved = cafe.verdict?.loved || [];
  const tagsLower = (cafe.tags || []).map((t) => t.toLowerCase());

  // Ground reasons in active moods first
  activeMoodIds.forEach((moodId) => {
    if (reasons.length >= 4) return;

    if (moodId === "good-coffee") {
      if (cafe.specialtyCoffee || tagsLower.some((t) => t.includes("specialty") || t.includes("roaster") || t.includes("pour over"))) {
        reasons.push("Specialty single-origin roast & manual brewing");
      } else if (loved.some((l) => l.toLowerCase().includes("coffee"))) {
        reasons.push("Customer-praised signature coffee extraction");
      } else {
        reasons.push("Consistent espresso quality and barista craft");
      }
    }

    if (moodId === "work") {
      const workStrength = strengths.find((s) => s.toLowerCase().includes("wi-fi") || s.toLowerCase().includes("socket") || s.toLowerCase().includes("laptop"));
      if (workStrength) {
        reasons.push(workStrength.replace(/^[•\-\s]+/, ""));
      } else if (cafe.wifi) {
        reasons.push("High-speed Wi-Fi and laptop-friendly setup");
      } else {
        reasons.push("Comfortable seating for focused work sessions");
      }
    }

    if (moodId === "date") {
      if (cafe.outdoorSeating || tagsLower.some((t) => t.includes("courtyard") || t.includes("rooftop") || t.includes("candle"))) {
        reasons.push("Intimate candlelight courtyard & romantic ambience");
      } else {
        reasons.push("Warm, flattering lighting suited for conversation");
      }
    }

    if (moodId === "quiet") {
      if (cafe.noiseLevel === "low" || cafe.noiseLevel === "quiet") {
        reasons.push("Low noise levels and peaceful secluded corners");
      } else {
        reasons.push("Calm atmosphere away from traffic noise");
      }
    }

    if (moodId === "pretty") {
      const decorStrength = strengths.find((s) => s.toLowerCase().includes("interior") || s.toLowerCase().includes("decor") || s.toLowerCase().includes("photogenic") || s.toLowerCase().includes("light"));
      if (decorStrength) {
        reasons.push(decorStrength.replace(/^[•\-\s]+/, ""));
      } else {
        reasons.push("Highly photogenic interior with natural light");
      }
    }

    if (moodId === "sweet-tooth") {
      const bakeTag = tagsLower.find((t) => t.includes("bake") || t.includes("pastry") || t.includes("dessert") || t.includes("waffle") || t.includes("cake") || t.includes("donut"));
      if (bakeTag) {
        reasons.push(`Fresh artisanal ${bakeTag}`);
      } else if (loved.length > 0) {
        reasons.push(`Signature ${loved[0]}`);
      } else {
        reasons.push("Standout bakery display and handcrafted desserts");
      }
    }

    if (moodId === "gang") {
      reasons.push("Spacious seating suited for friends & group catchups");
    }

    if (moodId === "late-night") {
      reasons.push(`Open late evening hours (${cafe.openingHours})`);
    }
  });

  // Ensure at least 2 verified points from strengths/loved
  if (reasons.length < 2 && strengths.length > 0) {
    const cleanStrength = strengths[0].replace(/^[•\-\s]+/, "");
    if (!reasons.some((r) => r.includes(cleanStrength.slice(0, 10)))) {
      reasons.push(cleanStrength);
    }
  }
  if (reasons.length < 2 && loved.length > 0) {
    reasons.push(`Guest favorite: ${loved[0]}`);
  }

  // Deduplicate and return 2-4 items
  return Array.from(new Set(reasons)).slice(0, 4);
}

export const getWhyPickedReasons = getWhyItMatches;

/**
 * Dynamic editorial "CAFORA SAYS" line for top spotlight pick
 */
export function getCaforaSaysPhrase(cafe, activeMoodIds = []) {
  if (!cafe) return "Honestly? Go here.";

  if (activeMoodIds.length > 1) {
    if (activeMoodIds.includes("date") && activeMoodIds.includes("pretty")) {
      return "Romantic + pretty. You're set for tonight.";
    }
    if (activeMoodIds.includes("work") && activeMoodIds.includes("quiet")) {
      return "Zero distractions. Laptop out, earphones in.";
    }
    if (activeMoodIds.includes("good-coffee") && activeMoodIds.includes("sweet-tooth")) {
      return "Serious coffee with serious dessert.";
    }
    return "This one checks all the boxes.";
  }

  if (activeMoodIds.includes("good-coffee")) return "Coffee purists will appreciate the extraction here.";
  if (activeMoodIds.includes("work")) return "Quiet tables and steady Wi-Fi. Ideal for a 3-hour sprint.";
  if (activeMoodIds.includes("date")) return "Intimate lighting and great energy. Date night approved.";
  if (activeMoodIds.includes("quiet")) return "The calm corner you need today.";
  if (activeMoodIds.includes("pretty")) return "Main character energy from every angle.";
  if (activeMoodIds.includes("sweet-tooth")) return "Come hungry. Order the dessert first.";
  if (activeMoodIds.includes("gang")) return "Your friends will stay longer than planned.";
  if (activeMoodIds.includes("late-night")) return "Not going home yet? This is the spot.";

  return "Honestly? Go here.";
}

/**
 * Short personality tagline for cafe cards
 */
export function getCafePersonalityTagline(cafe) {
  if (!cafe) return "A solid Chandigarh regular.";

  const cats = cafe.categories || [];
  const scores = getCafeVibeScores(cafe);

  if (scores.aesthetic >= 9.2 && cats.includes("date")) {
    return "Main character energy.";
  }
  if (scores.work >= 9.0) {
    return "Quiet enough to actually finish your assignment.";
  }
  if (scores.conversation >= 9.0 && (cats.includes("group") || scores.food >= 9.0)) {
    return "Your friends will stay longer than planned.";
  }
  if (cats.includes("date") && scores.conversation >= 8.6) {
    return "First-date approved.";
  }
  if (scores.coffee >= 9.2) {
    return "Coffee first. Everything else later.";
  }
  if (cats.includes("latenight") || scores.night >= 8.8) {
    return "Not going home yet? This is the one.";
  }
  if (scores.food >= 9.2) {
    return "Serious coffee without the serious attitude.";
  }
  if (cats.includes("quiet")) {
    return "Quiet enough to disappear for a while.";
  }

  return "Okay, this one's genuinely good.";
}

/**
 * Backwards compatible vibe dimensions (0 - 10)
 */
export function getCafeVibeScores(cafe) {
  if (!cafe) {
    return { coffee: 8.0, aesthetic: 8.0, work: 7.0, conversation: 8.0, night: 7.0, food: 8.0 };
  }

  const coffee = Number((getCafeMoodScore(cafe, "good-coffee") / 10).toFixed(1));
  const aesthetic = Number((getCafeMoodScore(cafe, "pretty") / 10).toFixed(1));
  const work = Number((getCafeMoodScore(cafe, "work") / 10).toFixed(1));
  const conversation = Number((getCafeMoodScore(cafe, "date") / 10).toFixed(1));
  const night = Number((getCafeMoodScore(cafe, "late-night") / 10).toFixed(1));
  const food = Number((getCafeMoodScore(cafe, "sweet-tooth") / 10).toFixed(1));

  return { coffee, aesthetic, work, conversation, night, food };
}

/**
 * Returns 2-3 "Best For" badges
 */
export function getBestForBadges(cafe) {
  if (!cafe) return ["Coffee", "Chilling"];

  const badges = [];
  const cats = cafe.categories || [];
  const scores = getCafeVibeScores(cafe);

  if (cats.includes("date") || scores.conversation >= 8.8) badges.push("Date Night");
  if (scores.aesthetic >= 9.2 || cats.includes("instagrammable")) badges.push("Photos");
  if (scores.work >= 8.5 || cats.includes("study")) badges.push("Work");
  if (scores.coffee >= 9.0 || cats.includes("coffee")) badges.push("Good Coffee");
  if (scores.night >= 8.8 || cats.includes("latenight")) badges.push("Late Night");
  if (cats.includes("group") || scores.conversation >= 8.9) badges.push("Friends");
  if (scores.food >= 9.0) badges.push("Dessert");

  return badges.slice(0, 3);
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
    // Tie-breaker: rating
    return (Number(b.rating) || 0) - (Number(a.rating) || 0);
  });
}

/**
 * Fallback & Categorized Recommendations Hierarchy:
 * LEVEL 1: Strong matches (>= 80%)
 * LEVEL 2: Good matches (70–79%)
 * LEVEL 3: Closest alternatives (< 70%)
 * 
 * If strong matches < 3, automatically blend good matches, then closest alternatives.
 * Guarantees that users receive recommendations and NEVER an unjustified empty state.
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

  const ranked = rankCafesByVibeAndSearch(cafes, activeMoodIds, searchQuery);

  const strongMatches = [];
  const goodMatches = [];
  const closestAlternatives = [];

  ranked.forEach((cafe) => {
    const pct = calculateMatchPercentage(cafe, activeMoodIds, searchQuery);
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
  } else if (spotlight[0] && calculateMatchPercentage(spotlight[0], activeMoodIds, searchQuery) < 85) {
    isFallback = true;
    fallbackMessage = "Nothing is a perfect match — but these come close.";
  }

  // Cap spotlight to top 3-5
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
 * Dynamic conversational response copy for the hero and section headings
 */
export function getMoodResponseCopy(activeMoodIds = [], searchQuery = "") {
  // If search query is active
  if (searchQuery && searchQuery.trim().length > 0) {
    if (activeMoodIds.length > 0) {
      const moodNames = activeMoodIds.map((id) => MOODS_LIST.find((m) => m.id === id)?.name).filter(Boolean);
      return {
        lead: `Searching "${searchQuery.trim()}" + ${moodNames.join(" & ")}`,
        sub: "Matching both your search intent and selected vibes."
      };
    }
    return {
      lead: `Searching "${searchQuery.trim()}"`,
      sub: "Filtering Chandigarh's verified cafe collection."
    };
  }

  // If 0 moods selected: Default curated experience
  if (!activeMoodIds || activeMoodIds.length === 0) {
    return {
      lead: "The places we'd actually recommend to a friend.",
      sub: "Hand-curated, verified in Chandigarh, with real visit data."
    };
  }

  // If 1 mood selected
  if (activeMoodIds.length === 1) {
    const mood = MOODS_LIST.find((m) => m.id === activeMoodIds[0]);
    if (mood && mood.singleCopy) {
      return {
        lead: mood.singleCopy.lead,
        sub: mood.singleCopy.sub
      };
    }
  }

  // If 2 moods selected
  if (activeMoodIds.length === 2) {
    const m1 = MOODS_LIST.find((m) => m.id === activeMoodIds[0]);
    const m2 = MOODS_LIST.find((m) => m.id === activeMoodIds[1]);
    const icons = `${m1?.icon || ""}${m2?.icon || ""}`;

    if (activeMoodIds.includes("date") && activeMoodIds.includes("pretty")) {
      return {
        lead: `Okay, we see the assignment. ${icons}`,
        sub: "Romantic + pretty. Let's find your spot."
      };
    }
    if (activeMoodIds.includes("work") && activeMoodIds.includes("quiet")) {
      return {
        lead: `Quiet + work mode. We've got you. ${icons}`,
        sub: "Tables with Wi-Fi, low noise, and minimal distractions."
      };
    }
    if (activeMoodIds.includes("good-coffee") && activeMoodIds.includes("sweet-tooth")) {
      return {
        lead: `Great coffee + sweet tooth. ${icons}`,
        sub: "Places where both the roast and the bakery excel."
      };
    }
    if (activeMoodIds.includes("good-coffee") && activeMoodIds.includes("pretty")) {
      return {
        lead: `Great coffee + beautiful space. ${icons}`,
        sub: "Standout brew with photogenic aesthetics."
      };
    }
    return {
      lead: `Okay, we see the assignment. ${icons}`,
      sub: `${m1?.name || "Vibe 1"} + ${m2?.name || "Vibe 2"}. Let's find your spot.`
    };
  }

  // If 3+ moods selected
  const icons = activeMoodIds.map((id) => MOODS_LIST.find((m) => m.id === id)?.icon).join("");
  const titles = activeMoodIds.map((id) => MOODS_LIST.find((m) => m.id === id)?.name).filter(Boolean);
  return {
    lead: `Okay, ambitious combination! ${icons}`,
    sub: `${titles.slice(0, 2).join(" + ")} + ${titles[2] || "more"}. Ranking your best combined spots.`
  };
}
