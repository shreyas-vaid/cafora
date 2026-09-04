/**
 * CHANDIGARH CAFÉ DATABASE (MVP Realistic Dataset)
 * 
 * Exclusively restricted to Chandigarh, India sectors:
 * Sector 7, Sector 8, Sector 9, Sector 10, Sector 11, Sector 15, Sector 16,
 * Sector 17, Sector 22, Sector 26, Sector 34, Sector 35, Sector 43, Sector 44, Sector 50, Industrial Area.
 * 
 * Note: Data is structured for easy backend integration.
 * Sample reviews & external ratings are labeled for demo transparency.
 */

export const CHANDIGARH_SECTORS = [
  "All Chandigarh",
  "Sector 7",
  "Sector 8",
  "Sector 9",
  "Sector 10",
  "Sector 11",
  "Sector 15",
  "Sector 16",
  "Sector 17",
  "Sector 22",
  "Sector 26",
  "Sector 34",
  "Sector 35",
  "Sector 43",
  "Sector 44",
  "Sector 50",
  "Industrial Area Phase 1"
];

export const CATEGORIES = [
  { id: "all", label: "✨ All Vibes", icon: "✨" },
  { id: "coffee", label: "☕ Good Coffee", icon: "☕" },
  { id: "study", label: "💻 Study & Work", icon: "💻" },
  { id: "date", label: "❤️ Date Night", icon: "❤️" },
  { id: "aesthetic", label: "🌿 Aesthetic", icon: "🌿" },
  { id: "quiet", label: "🤫 Quiet", icon: "🤫" },
  { id: "instagrammable", label: "📸 Instagrammable", icon: "📸" },
  { id: "group", label: "👥 Group Hangout", icon: "👥" },
  { id: "budget", label: "💸 Budget Friendly", icon: "💸" },
  { id: "latenight", label: "🌙 Late Night", icon: "🌙" }
];

export const CAFES_DATA = [
  {
    id: "blue-tokai-sec8",
    name: "Blue Tokai Coffee Roasters",
    sector: "Sector 8",
    city: "Chandigarh",
    address: "Inner Market, SCF 18, Sector 8-C, Chandigarh",
    coordinates: [30.7383, 76.8016],
    priceRange: "₹₹",
    approxCostForTwo: 750,
    categories: ["coffee", "study", "quiet", "aesthetic"],
    tags: ["Specialty Coffee", "Laptop Friendly", "Artisan Bakes", "Pour Over"],
    heroImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80"
    ],
    aspectRatio: "3/4",
    rating: 4.7,
    reviewCount: 380,
    verifiedVisitsCount: 164,
    distanceKm: 1.4,
    openingHours: "8:00 AM – 10:30 PM",
    featuredQuote: "The roast consistency and quiet morning hours make this my go-to work sanctum.",
    strengths: [
      "Certified single-origin pour-overs & oat milk flat whites",
      "Fast Wi-Fi with power sockets at almost every desk",
      "Minimalist, clutter-free Scandinavian interior"
    ],
    weaknesses: [
      "Inner market parking can get packed on Saturday evenings",
      "Slightly brisk AC near the entrance window"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "The undisputed benchmark for specialty coffee lovers and remote professionals.",
      loved: ["Single Origin Pour-Overs", "Quiet Afternoon Work Vibe", "Almond Croissants"],
      disliked: ["Parking Congestion at Peak Hours", "Pricey Pour-Overs"]
    },
    sources: {
      google: { rating: 4.6, reviews: 1420 },
      zomato: { rating: 4.5, reviews: 880 },
      swiggy: { rating: 4.5, reviews: 620 },
      cafeFinder: { rating: 4.8, trustScore: 94, verifiedVisits: 164 }
    },
    sampleReviews: [
      {
        id: "rev-bt-1",
        author: "Tanya Duggal",
        authorSector: "Sector 10",
        rating: 5,
        date: "3 days ago",
        verified: true,
        order: "Iced Sea Salt Mocha & Sourdough Toast",
        vibeRating: "Quiet & Productive",
        text: "Ordered the signature sea salt mocha. Perfect balance without being overly sweet. There are reliable power points along the high table and the Wi-Fi clocked 85 Mbps. Ideal for a 3-hour study block.",
        qualityScore: 92
      },
      {
        id: "rev-bt-2",
        author: "Karanbir Singh",
        authorSector: "Sector 8",
        rating: 4.5,
        date: "1 week ago",
        verified: true,
        order: "Ethiopia Guji Pour-Over",
        vibeRating: "Coffee Purist",
        text: "Baristas genuinely know extraction times and blooming notes. Parking in Sector 8 inner market was chaotic after 6 PM, so park in the outer lot and walk.",
        qualityScore: 88
      }
    ]
  },
  {
    id: "backpackers-cafe-sec9",
    name: "Backpackers Cafe",
    sector: "Sector 9",
    city: "Chandigarh",
    address: "SCF 16, Inner Market, Sector 9-D, Chandigarh",
    coordinates: [30.7428, 76.7942],
    priceRange: "₹₹₹",
    approxCostForTwo: 1200,
    categories: ["coffee", "date", "aesthetic", "group"],
    tags: ["All Day Breakfast", "Vintage Ambience", "Pancakes", "Signature Shakes"],
    heroImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80"
    ],
    aspectRatio: "4/5",
    rating: 4.5,
    reviewCount: 490,
    verifiedVisitsCount: 195,
    distanceKm: 2.1,
    openingHours: "8:30 AM – 11:00 PM",
    featuredQuote: "Legendary English breakfasts and rustic charm that never gets old.",
    strengths: [
      "Hearty breakfast platters and fluffy blueberry pancakes",
      "Warm wooden decor with vintage travel memorabilia",
      "Consistent food quality for over a decade"
    ],
    weaknesses: [
      "Average 20-minute wait time during Sunday brunch",
      "Music volume can get too energetic for deep laptop focus"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "A Chandigarh institution for leisurely brunches and vibrant weekend rendezvous.",
      loved: ["Blueberry Pancakes", "Rustic Travel Decor", "Hearty Shakshuka"],
      disliked: ["Sunday Waiting Queues", "Not Ideal For Laptop Work"]
    },
    sources: {
      google: { rating: 4.5, reviews: 2600 },
      zomato: { rating: 4.4, reviews: 1800 },
      swiggy: { rating: 4.3, reviews: 910 },
      cafeFinder: { rating: 4.7, trustScore: 91, verifiedVisits: 195 }
    },
    sampleReviews: [
      {
        id: "rev-bp-1",
        author: "Mehar Sandhu",
        authorSector: "Sector 11",
        rating: 5,
        date: "5 days ago",
        verified: true,
        order: "Farmer's Omelette & Banana Walnut Pancake",
        vibeRating: "Leisurely Brunch",
        text: "Came for Sunday brunch at 11:30. There was a 15-minute queue, but the hostess handled it smoothly. Pancakes were feather-light and maple syrup was genuine. Fantastic vibe with friends.",
        qualityScore: 94
      }
    ]
  },
  {
    id: "willow-cafe-sec10",
    name: "The Willow Cafe",
    sector: "Sector 10",
    city: "Chandigarh",
    address: "SCO 01, Sector 10-D, Chandigarh",
    coordinates: [30.7512, 76.7865],
    priceRange: "₹₹",
    approxCostForTwo: 950,
    categories: ["date", "aesthetic", "quiet", "coffee"],
    tags: ["Rooftop Garden", "English Countryside", "Comfort Food", "Tea Selection"],
    heroImage: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
    ],
    aspectRatio: "1/1",
    rating: 4.6,
    reviewCount: 310,
    verifiedVisitsCount: 140,
    distanceKm: 2.8,
    openingHours: "8:30 AM – 11:30 PM",
    featuredQuote: "Felt like stepping into a romantic English tea room right in Sector 10.",
    strengths: [
      "Dreamy rooftop garden terrace overlooking green belts",
      "Artisan chai kettles and European style baked pot pies",
      "Cozy plush armchairs perfect for conversations"
    ],
    weaknesses: [
      "Terrace seating gets breezy during chilly winter evenings",
      "Portion sizes are modest for pasta dishes"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "The most serene, visually enchanting tea & dinner cafe in the northern sectors.",
      loved: ["Rooftop Garden Setting", "Cottage Cheese Steak", "Peach Iced Tea"],
      disliked: ["Modest Pasta Portions", "Slow Service on Rooftop"]
    },
    sources: {
      google: { rating: 4.6, reviews: 1890 },
      zomato: { rating: 4.5, reviews: 1300 },
      swiggy: { rating: 4.4, reviews: 490 },
      cafeFinder: { rating: 4.7, trustScore: 92, verifiedVisits: 140 }
    },
    sampleReviews: [
      {
        id: "rev-wc-1",
        author: "Amanjot Kaur",
        authorSector: "Sector 9",
        rating: 5,
        date: "2 days ago",
        verified: true,
        order: "Chicken Pot Pie & Cinnamon Cappuccino",
        vibeRating: "Romantic Evening",
        text: "The rooftop in early spring is breathtaking. Warm yellow fairy lights, unobtrusive acoustic music, and attentive staff. Highly recommend for quiet dates.",
        qualityScore: 90
      }
    ]
  },
  {
    id: "cafe-nomad-sec7",
    name: "Cafe Nomad",
    sector: "Sector 7",
    city: "Chandigarh",
    address: "1914, Sector 7-C, Chandigarh",
    coordinates: [30.7298, 76.8041],
    priceRange: "₹₹₹",
    approxCostForTwo: 1300,
    categories: ["coffee", "date", "aesthetic", "group"],
    tags: ["Middle Eastern Mezze", "Bohemian Decor", "Specialty Shakes", "Gourmet Salads"],
    heroImage: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "3/4",
    rating: 4.6,
    reviewCount: 420,
    verifiedVisitsCount: 178,
    distanceKm: 1.1,
    openingHours: "10:00 AM – 11:00 PM",
    featuredQuote: "Unmatched hummus platters, bohemian rugs, and soul-soothing Middle Eastern teas.",
    strengths: [
      "Authentic mezze platters with warm fluffy pita",
      "Intimate seating zones with Turkish lamps and kilims",
      "Courteous staff that give you uninterrupted privacy"
    ],
    weaknesses: [
      "Service can be slow when full",
      "Limited dedicated laptop tables"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "Exceptional Mediterranean flavours wrapped in bohemian serenity.",
      loved: ["Falafel Mezze Platter", "Turkish Mint Tea", "Intimate Bohemian Seating"],
      disliked: ["Service Delays at Rush Hour", "Higher Price Bracket"]
    },
    sources: {
      google: { rating: 4.6, reviews: 2100 },
      zomato: { rating: 4.5, reviews: 1400 },
      swiggy: { rating: 4.4, reviews: 750 },
      cafeFinder: { rating: 4.7, trustScore: 91, verifiedVisits: 178 }
    },
    sampleReviews: [
      {
        id: "rev-cn-1",
        author: "Devika Sharma",
        authorSector: "Sector 7",
        rating: 5,
        date: "1 week ago",
        verified: true,
        order: "Grand Mezze Platter & Turkish Coffee",
        vibeRating: "Family Dinner",
        text: "Creamiest hummus in Chandigarh. The atmosphere is warm, cozy, and distinctly relaxed. A bit on the pricier side, but the authenticity delivers.",
        qualityScore: 91
      }
    ]
  },
  {
    id: "virgin-courtyard-sec7",
    name: "Virgin Courtyard",
    sector: "Sector 7",
    city: "Chandigarh",
    address: "SCO 130-132, Sector 7-C, Chandigarh",
    coordinates: [30.7302, 76.8055],
    priceRange: "₹₹₹",
    approxCostForTwo: 2200,
    categories: ["date", "aesthetic", "luxury", "wine"],
    tags: ["Italian Fine Dining", "Sunlit Courtyard", "Cobblestone Romance", "Artisan Pasta"],
    heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "16/10",
    rating: 4.7,
    reviewCount: 510,
    verifiedVisitsCount: 220,
    distanceKm: 1.2,
    openingHours: "11:30 AM – 11:30 PM",
    featuredQuote: "Pristine white Mediterranean courtyard with bougainvillea — Chandigarh's top anniversary dinner spot.",
    strengths: [
      "Enchanting white cobblestone courtyard reminiscent of Santorini",
      "Handcrafted ravioli and truffle risotto of international calibre",
      "Impeccable table service and curated mocktails"
    ],
    weaknesses: [
      "Reservation mandatory on Friday & Saturday nights",
      "Strict premium price point"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "The quintessential milestone celebration cafe with unrivaled romance.",
      loved: ["Santorini Courtyard Vibe", "Truffle Mushroom Risotto", "Tiramisu"],
      disliked: ["Mandatory Advance Booking", "Premium Pricing"]
    },
    sources: {
      google: { rating: 4.6, reviews: 3400 },
      zomato: { rating: 4.7, reviews: 2900 },
      swiggy: { rating: 4.5, reviews: 400 },
      cafeFinder: { rating: 4.9, trustScore: 96, verifiedVisits: 220 }
    },
    sampleReviews: [
      {
        id: "rev-vc-1",
        author: "Pranav & Rhea",
        authorSector: "Sector 18",
        rating: 5,
        date: "4 days ago",
        verified: true,
        order: "Handmade Burrata Ravioli & Classic Tiramisu",
        vibeRating: "Anniversary Date",
        text: "The outdoor courtyard lit by candles under the trees was pure magic. Food was served at ideal temperatures. Worth every rupee for special moments.",
        qualityScore: 96
      }
    ]
  },
  {
    id: "books-n-brew-sec16",
    name: "Books N Brew",
    sector: "Sector 16",
    city: "Chandigarh",
    address: "SCO 8, First Floor, Sector 16-D, Chandigarh",
    coordinates: [30.7455, 76.7788],
    priceRange: "₹",
    approxCostForTwo: 450,
    categories: ["study", "quiet", "budget", "coffee"],
    tags: ["Book Cafe", "Student Friendly", "Pocket Friendly Maggi", "Board Games"],
    heroImage: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "3/4",
    rating: 4.4,
    reviewCount: 390,
    verifiedVisitsCount: 155,
    distanceKm: 3.2,
    openingHours: "9:00 AM – 10:30 PM",
    featuredQuote: "A beloved sanctuary for bookworms, writers, and students seeking budget coffee.",
    strengths: [
      "Floor-to-ceiling library wall with lending options",
      "Very pocket-friendly pricing (cold coffee under ₹140)",
      "Unbothered seating where you can read for hours"
    ],
    weaknesses: [
      "Modest coffee equipment (not third-wave roasters)",
      "Can get cozy-cramped on exam season afternoons"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "A nostalgic haven of paperbacks, steaming hot tea, and zero pretentious attitude.",
      loved: ["Extensive Book Shelves", "Affordable Cold Coffee", "Cozy Reading Nooks"],
      disliked: ["Basic Espresso Quality", "Limited Seating During Exams"]
    },
    sources: {
      google: { rating: 4.4, reviews: 1540 },
      zomato: { rating: 4.3, reviews: 920 },
      swiggy: { rating: 4.2, reviews: 600 },
      cafeFinder: { rating: 4.6, trustScore: 89, verifiedVisits: 155 }
    },
    sampleReviews: [
      {
        id: "rev-bnb-1",
        author: "Simran Bhatia",
        authorSector: "Sector 15 (Panjab University)",
        rating: 5,
        date: "2 weeks ago",
        verified: true,
        order: "Cold Coffee with Ice Cream & Cheese Maggi",
        vibeRating: "Study & Solo Reading",
        text: "Studied here for 4 hours without any waiter pestering me. The books are well maintained and the music is soft acoustic guitar.",
        qualityScore: 90
      }
    ]
  },
  {
    id: "the-hedgehog-cafe-sec7",
    name: "The Hedgehog Cafe",
    sector: "Sector 7",
    city: "Chandigarh",
    address: "SCF 12, Sector 7-C, Chandigarh",
    coordinates: [30.7305, 76.8038],
    priceRange: "₹₹",
    approxCostForTwo: 800,
    categories: ["study", "coffee", "quiet", "aesthetic"],
    tags: ["Quiet Workspaces", "Book Nooks", "Artisan Teas", "Fresh Quiches"],
    heroImage: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "4/5",
    rating: 4.6,
    reviewCount: 280,
    verifiedVisitsCount: 130,
    distanceKm: 1.3,
    openingHours: "9:00 AM – 10:00 PM",
    featuredQuote: "Thoughtful intellectual cafe where people actually respect quiet reading hours.",
    strengths: [
      "Strict respect for noise levels and mindful co-working",
      "Handcrafted teas and savory spinach feta quiches",
      "Warm wooden desks with individual reading lamps"
    ],
    weaknesses: [
      "Not suitable for loud group celebrations",
      "Closes relatively early at 10 PM"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "The introvert's paradise: books, silence, and honest caffeine.",
      loved: ["Quiet Respectful Crowd", "Spinach Feta Quiche", "Artisan Jasmine Green Tea"],
      disliked: ["Not For Loud Groups", "Early 10 PM Closing"]
    },
    sources: {
      google: { rating: 4.6, reviews: 1100 },
      zomato: { rating: 4.5, reviews: 780 },
      swiggy: { rating: 4.4, reviews: 310 },
      cafeFinder: { rating: 4.8, trustScore: 92, verifiedVisits: 130 }
    },
    sampleReviews: [
      {
        id: "rev-hh-1",
        author: "Gurkirat Singh",
        authorSector: "Sector 21",
        rating: 5,
        date: "3 days ago",
        verified: true,
        order: "Pour Over & Carrot Walnut Cake",
        vibeRating: "Productive Focus",
        text: "No loud reels playing on speakerphones here. People read, work on thesis papers, or talk in whispers. Excellent cinnamon carrot cake.",
        qualityScore: 93
      }
    ]
  },
  {
    id: "ovenfresh-sec35",
    name: "Ovenfresh",
    sector: "Sector 35",
    city: "Chandigarh",
    address: "SCO 443-444, Sector 35-C, Chandigarh",
    coordinates: [30.7231, 76.7645],
    priceRange: "₹₹",
    approxCostForTwo: 850,
    categories: ["group", "family", "coffee", "budget"],
    tags: ["Legendary Sizzlers", "Bakery Treats", "Garlic Bread Supreme", "Family Favorite"],
    heroImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "1/1",
    rating: 4.5,
    reviewCount: 620,
    verifiedVisitsCount: 280,
    distanceKm: 4.5,
    openingHours: "10:00 AM – 11:30 PM",
    featuredQuote: "Everyone from Chandigarh grew up on their sizzlers and stuffed garlic bread.",
    strengths: [
      "Famous sizzling brownie and legendary cheese garlic bread",
      "Fast turnover and generous family portions",
      "Extensive dessert showcase freshly baked daily"
    ],
    weaknesses: [
      "Bustling atmosphere can get noisy during dinner rush",
      "Seating can feel tightly packed"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "Comfort dining nostalgia at its best — foolproof food for groups and celebrations.",
      loved: ["Cheese Garlic Bread", "Exotic Veg Sizzler", "Sizzling Brownie"],
      disliked: ["Crowded Dinner Rush", "Noisy for Laptop Work"]
    },
    sources: {
      google: { rating: 4.5, reviews: 4200 },
      zomato: { rating: 4.4, reviews: 3100 },
      swiggy: { rating: 4.4, reviews: 2100 },
      cafeFinder: { rating: 4.6, trustScore: 90, verifiedVisits: 280 }
    },
    sampleReviews: [
      {
        id: "rev-of-1",
        author: "Navneet Brar",
        authorSector: "Sector 34",
        rating: 5,
        date: "6 days ago",
        verified: true,
        order: "Stuffed Garlic Bread & Mexican Sizzler",
        vibeRating: "Friends Get-Together",
        text: "The quality has remained consistent for 15 years. The cheese pull on the garlic bread is unmatched. Great spot for casual family dining.",
        qualityScore: 89
      }
    ]
  },
  {
    id: "tulum-sec34",
    name: "Tulum Rooftop Cafe",
    sector: "Sector 34",
    city: "Chandigarh",
    address: "SCO 165-167, Rooftop, Sector 34-A, Chandigarh",
    coordinates: [30.7245, 76.7712],
    priceRange: "₹₹₹",
    approxCostForTwo: 1400,
    categories: ["date", "aesthetic", "instagrammable", "latenight"],
    tags: ["Bohemian Rooftop", "Sunset View", "Cocktail Mocktails", "Fairy Lights"],
    heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "3/4",
    rating: 4.5,
    reviewCount: 410,
    verifiedVisitsCount: 160,
    distanceKm: 3.9,
    openingHours: "11:00 AM – 12:00 AM",
    featuredQuote: "Baleric vibes, cane fixtures, and the prettiest sunset horizon in Sector 34.",
    strengths: [
      "Gorgeous Tulum-inspired bamboo architecture and photo ops",
      "Live acoustic music sessions on Wednesday and Friday",
      "Creative wood-fired flatbreads and artisanal mocktails"
    ],
    weaknesses: [
      "Music gets loud after 8:30 PM",
      "Outdoor mist fans struggle on extreme June afternoons"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "The prime golden-hour rooftop for couples and visual storytellers.",
      loved: ["Golden Hour Sunset Views", "Wood Fired Pizza", "Live Acoustic Music"],
      disliked: ["Loud Music at Night", "Warm on Summer Afternoons"]
    },
    sources: {
      google: { rating: 4.5, reviews: 2200 },
      zomato: { rating: 4.4, reviews: 1500 },
      swiggy: { rating: 4.3, reviews: 680 },
      cafeFinder: { rating: 4.7, trustScore: 90, verifiedVisits: 160 }
    },
    sampleReviews: [
      {
        id: "rev-tl-1",
        author: "Ishita Mahajan",
        authorSector: "Sector 38",
        rating: 4.5,
        date: "1 week ago",
        verified: true,
        order: "Truffle Mushroom Pizza & Passion Fruit Fizz",
        vibeRating: "Golden Hour Date",
        text: "Arrived at 6:00 PM just before sunset. The lighting is cinematic and the crust on the wood-fired pizza was bubbly and light.",
        qualityScore: 92
      }
    ]
  },
  {
    id: "social-sec7",
    name: "Sector 7 Social",
    sector: "Sector 7",
    city: "Chandigarh",
    address: "SCO 37, Sector 7-C, Chandigarh",
    coordinates: [30.7311, 76.8029],
    priceRange: "₹₹",
    approxCostForTwo: 1100,
    categories: ["group", "latenight", "study", "coffee"],
    tags: ["Co-working Mornings", "Signature Cocktails", "Keema Pav", "High Energy"],
    heroImage: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "16/10",
    rating: 4.5,
    reviewCount: 750,
    verifiedVisitsCount: 310,
    distanceKm: 1.2,
    openingHours: "9:00 AM – 1:00 AM",
    featuredQuote: "Work hub by daylight, pulsating drinks and comfort munchies by moonlight.",
    strengths: [
      "Solid co-working deals before 6 PM with dedicated power sockets",
      "Playful fusion menu items (butter chicken biryani, chili cheese toast)",
      "Vibrant high-energy atmosphere for group weekend plans"
    ],
    weaknesses: [
      "Transitions to loud party volume promptly at 7:30 PM",
      "Strobe lighting makes late evening reading impossible"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "The ultimate dual-persona spot: hyper-productive daytime, energetic nightlife.",
      loved: ["Butter Chicken Biryani", "Daytime Co-working Pack", "Chili Cheese Toast"],
      disliked: ["Loud DJ Music After 7:30 PM", "Weekend Door Rush"]
    },
    sources: {
      google: { rating: 4.5, reviews: 4900 },
      zomato: { rating: 4.4, reviews: 3800 },
      swiggy: { rating: 4.4, reviews: 1900 },
      cafeFinder: { rating: 4.6, trustScore: 89, verifiedVisits: 310 }
    },
    sampleReviews: [
      {
        id: "rev-sc-1",
        author: "Aarav Vohra",
        authorSector: "Sector 8",
        rating: 4.5,
        date: "5 days ago",
        verified: true,
        order: "Cold Drip Coffee & Keema Pav",
        vibeRating: "Remote Work to Casual Drinks",
        text: "Great Wi-Fi during the daytime. Had two Zoom calls from the corner booth without hassle. Once 7:30 hit, the music kicked up and we switched to drinks.",
        qualityScore: 91
      }
    ]
  },
  {
    id: "midpoint-cafe-sec22",
    name: "Midpoint Cafe",
    sector: "Sector 22",
    city: "Chandigarh",
    address: "Booth 112, Sector 22-B, Chandigarh",
    coordinates: [30.7395, 76.7725],
    priceRange: "₹",
    approxCostForTwo: 350,
    categories: ["budget", "coffee", "group"],
    tags: ["Student Friendly", "Affordable Sandwiches", "Quick Bites", "Cold Coffee"],
    heroImage: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "4/5",
    rating: 4.3,
    reviewCount: 220,
    verifiedVisitsCount: 95,
    distanceKm: 2.7,
    openingHours: "10:00 AM – 10:00 PM",
    featuredQuote: "Unpretentious, honest cold coffee and grilled paneer sandwiches at pocket-friendly rates.",
    strengths: [
      "Extremely affordable menu (all items under ₹180)",
      "Quick 5-minute food prep time",
      "Friendly owner and casual college crowd"
    ],
    weaknesses: [
      "Compact seating space with only 6 tables",
      "No specialized espresso beans or pour-overs"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "Honest budget refreshments right in the bustling heart of Sector 22.",
      loved: ["Thick Cold Coffee", "Grilled Cheese Corn Sandwich", "Unbeatable Price"],
      disliked: ["Limited Seating", "Basic Coffee Beans"]
    },
    sources: {
      google: { rating: 4.3, reviews: 890 },
      zomato: { rating: 4.2, reviews: 520 },
      swiggy: { rating: 4.1, reviews: 310 },
      cafeFinder: { rating: 4.5, trustScore: 86, verifiedVisits: 95 }
    },
    sampleReviews: [
      {
        id: "rev-mp-1",
        author: "Rohan Malhotra",
        authorSector: "Sector 23",
        rating: 4.5,
        date: "1 week ago",
        verified: true,
        order: "Midpoint Special Cold Coffee & Herb Sandwich",
        vibeRating: "Quick Bite",
        text: "Best ₹90 cold coffee in the area. Thick, sweet, and hits the spot after shopping in Shastri Market.",
        qualityScore: 85
      }
    ]
  },
  {
    id: "olive-cafe-sec26",
    name: "Olive Cafe & Bar",
    sector: "Sector 26",
    city: "Chandigarh",
    address: "SCO 79, Sector 26, Chandigarh",
    coordinates: [30.7241, 76.8152],
    priceRange: "₹₹₹",
    approxCostForTwo: 2400,
    categories: ["date", "aesthetic", "luxury", "wine"],
    tags: ["Gourmet Culinary", "White Sunlit Patio", "Artisanal Cocktails", "European Plates"],
    heroImage: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "3/4",
    rating: 4.7,
    reviewCount: 480,
    verifiedVisitsCount: 210,
    distanceKm: 2.3,
    openingHours: "12:00 PM – 12:00 AM",
    featuredQuote: "Sun-drenched courtyard, gourmet Mediterranean plates, and sheer architectural elegance.",
    strengths: [
      "Internationally celebrated culinary techniques and fresh sea bass",
      "Stunning floral white courtyards perfect for daytime celebrations",
      "Exceptional sommelier-recommended pairings"
    ],
    weaknesses: [
      "Strict dress-code and premium pricing",
      "Service can be slow during peak weekend dinners"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "Elegance redefined — the top culinary destination in Chandigarh for fine taste.",
      loved: ["Burrata Salad", "Wood Fired Tartufo Pizza", "Sunlit White Courtyard"],
      disliked: ["Valet Wait at Peak Hours", "Pricey Alcohol Menu"]
    },
    sources: {
      google: { rating: 4.7, reviews: 2900 },
      zomato: { rating: 4.7, reviews: 2100 },
      swiggy: { rating: 4.5, reviews: 320 },
      cafeFinder: { rating: 4.9, trustScore: 95, verifiedVisits: 210 }
    },
    sampleReviews: [
      {
        id: "rev-ol-1",
        author: "Siddharth Sehgal",
        authorSector: "Sector 10",
        rating: 5,
        date: "3 days ago",
        verified: true,
        order: "Tartufo Pizza & Signature Elderflower Spritz",
        vibeRating: "Fine Dining Date",
        text: "The aesthetic is top notch. The crust on the pizza has genuine sourdough fermentation. Valet was seamless.",
        qualityScore: 95
      }
    ]
  },
  {
    id: "brooklyn-central-sec10",
    name: "Brooklyn Central",
    sector: "Sector 10",
    city: "Chandigarh",
    address: "Coal Heritage Building, Sector 10-D, Chandigarh",
    coordinates: [30.7518, 76.7871],
    priceRange: "₹₹₹",
    approxCostForTwo: 1350,
    categories: ["coffee", "date", "group", "aesthetic"],
    tags: ["New York Style", "Smoked Ribs & Bagels", "Specialty Roasts", "Industrial Chic"],
    heroImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "1/1",
    rating: 4.5,
    reviewCount: 390,
    verifiedVisitsCount: 160,
    distanceKm: 2.9,
    openingHours: "10:00 AM – 11:30 PM",
    featuredQuote: "Exposed brick, Manhattan diner booths, and authentic New York bagels.",
    strengths: [
      "Real boiled New York style bagels with scallion cream cheese",
      "Spacious industrial chic interior with large booth seating",
      "Craft coffee roasts pulled on a commercial La Marzocco"
    ],
    weaknesses: [
      "Music can occasionally overpower quiet conversations",
      "Higher taxes on imported beverage items"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "A slice of Brooklyn right next to the Chandigarh Museum of Art.",
      loved: ["Smoked Chicken Bagel", "Philly Cheese Steak", "New York Cheesecake"],
      disliked: ["Occasional Loud Music", "Premium Beverage Rates"]
    },
    sources: {
      google: { rating: 4.5, reviews: 2400 },
      zomato: { rating: 4.4, reviews: 1700 },
      swiggy: { rating: 4.3, reviews: 810 },
      cafeFinder: { rating: 4.7, trustScore: 91, verifiedVisits: 160 }
    },
    sampleReviews: [
      {
        id: "rev-bc-1",
        author: "Jaspreet Kaur",
        authorSector: "Sector 11",
        rating: 4.5,
        date: "1 week ago",
        verified: true,
        order: "Everything Bagel with Cream Cheese & Flat White",
        vibeRating: "Casual Catchup",
        text: "Proper chewy bagel with generous cream cheese. Coffee has rich caramel notes without bitterness.",
        qualityScore: 91
      }
    ]
  },
  {
    id: "indian-coffee-house-sec17",
    name: "Indian Coffee House",
    sector: "Sector 17",
    city: "Chandigarh",
    address: "SCO 12, Sector 17-E, Chandigarh",
    coordinates: [30.7391, 76.7824],
    priceRange: "₹",
    approxCostForTwo: 250,
    categories: ["budget", "coffee", "quiet"],
    tags: ["Historic Heritage", "Filter Coffee", "Mutton Cutlets", "Vintage Turbans"],
    heroImage: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "4/5",
    rating: 4.4,
    reviewCount: 920,
    verifiedVisitsCount: 420,
    distanceKm: 2.0,
    openingHours: "9:00 AM – 9:30 PM",
    featuredQuote: "The beating cultural heart of Chandigarh since the 1960s — pure retro charm and ₹35 filter coffee.",
    strengths: [
      "Unmatched retro nostalgia and heritage staff in ceremonial turbans",
      "Crisp South Indian dosas and hot filter coffee at unbeatable rates",
      "Authentic intellectual salon atmosphere with zero corporate polish"
    ],
    weaknesses: [
      "Aging furniture and no Wi-Fi/laptop outlets",
      "Cash or basic UPI only during peak rush"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "Timeless cultural heritage where generations of Chandigarh intellectuals debate over filter coffee.",
      loved: ["South Indian Filter Coffee", "Crisp Masala Dosa", "Nostalgic Heritage Service"],
      disliked: ["No Modern Amenities/Wi-Fi", "Vintage Basic Restrooms"]
    },
    sources: {
      google: { rating: 4.4, reviews: 7800 },
      zomato: { rating: 4.3, reviews: 4100 },
      swiggy: { rating: 4.2, reviews: 1800 },
      cafeFinder: { rating: 4.8, trustScore: 92, verifiedVisits: 420 }
    },
    sampleReviews: [
      {
        id: "rev-ich-1",
        author: "Harinderpal Singh",
        authorSector: "Sector 17",
        rating: 5,
        date: "4 days ago",
        verified: true,
        order: "Special Filter Coffee & Mutton Cutlet with Gravy",
        vibeRating: "Nostalgic Morning",
        text: "I have been coming here since my college days in 1982. The filter coffee still arrives piping hot in a metal tumbler. It does not have fancy modern cafe trimmings, and that is precisely its magic.",
        qualityScore: 96
      }
    ]
  },
  {
    id: "uncle-jacks-sec8",
    name: "Uncle Jack's",
    sector: "Sector 8",
    city: "Chandigarh",
    address: "Booth 22, Inner Market, Sector 8-B, Chandigarh",
    coordinates: [30.7388, 76.8021],
    priceRange: "₹₹",
    approxCostForTwo: 550,
    categories: ["budget", "group", "instagrammable"],
    tags: ["Loaded Fries", "Slutty Brownie", "Cheesy Hot Dogs", "Takeaway Favorite"],
    heroImage: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "3/4",
    rating: 4.5,
    reviewCount: 540,
    verifiedVisitsCount: 240,
    distanceKm: 1.5,
    openingHours: "11:30 AM – 11:00 PM",
    featuredQuote: "Chandigarh's favorite American street snack stop for loaded cheese fries and desserts in jars.",
    strengths: [
      "Signature Chicago-style waffle fries with jalapeño cheese",
      "Famous dessert jars (The Lady and The Big Brother)",
      "Consistent taste and fast order counter"
    ],
    weaknesses: [
      "Primarily outdoor/car dining with very few sit-down tables",
      "Heavier street snack menu rather than sit-down cafe meals"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "The quintessential American street snack joint in Sector 8.",
      loved: ["Chicago Waffle Fries", "Slutty Brownie Jar", "Cheese Melt Burgers"],
      disliked: ["No Dedicated Indoor Seating", "High Calorie Heavy Food"]
    },
    sources: {
      google: { rating: 4.5, reviews: 3600 },
      zomato: { rating: 4.5, reviews: 2800 },
      swiggy: { rating: 4.4, reviews: 2900 },
      cafeFinder: { rating: 4.6, trustScore: 90, verifiedVisits: 240 }
    },
    sampleReviews: [
      {
        id: "rev-uj-1",
        author: "Kritika Soni",
        authorSector: "Sector 7",
        rating: 5,
        date: "1 week ago",
        verified: true,
        order: "The Mick Jagger Fries & Red Velvet Jar",
        vibeRating: "Car Dining Snack",
        text: "Fries were hot and crispy even through the cheese sauce. Great for grabbing food to eat in the car while hanging out with friends in Sector 8.",
        qualityScore: 88
      }
    ]
  },
  {
    id: "cafe-jc-sec10",
    name: "Cafe JC's",
    sector: "Sector 10",
    city: "Chandigarh",
    address: "SCO 2-3, Sector 10-D, Chandigarh",
    coordinates: [30.7510, 76.7869],
    priceRange: "₹₹₹",
    approxCostForTwo: 1250,
    categories: ["date", "aesthetic", "group", "coffee"],
    tags: ["Courtyard Cafe", "Wood Fired Pizza", "Outdoor Garden", "Cocktail Mocktails"],
    heroImage: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "16/10",
    rating: 4.5,
    reviewCount: 380,
    verifiedVisitsCount: 165,
    distanceKm: 2.8,
    openingHours: "10:00 AM – 11:30 PM",
    featuredQuote: "Lush green courtyard seating with a distinct European resort vibe.",
    strengths: [
      "Stunning greenery with towering palm fronds and wooden garden benches",
      "Authentic thin-crust pizzas cooked in an outdoor wood oven",
      "Pet-friendly outdoor lawn seating"
    ],
    weaknesses: [
      "Peak hour waiting on Friday and Saturday evenings",
      "Portion sizes for appetisers are on the smaller side"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "Resort-like tranquil garden dining right in Sector 10.",
      loved: ["Green Courtyard Setting", "Four Cheese Pizza", "Cold Brew Tonic"],
      disliked: ["Weekend Wait Times", "Smaller Starter Portions"]
    },
    sources: {
      google: { rating: 4.5, reviews: 2200 },
      zomato: { rating: 4.4, reviews: 1600 },
      swiggy: { rating: 4.3, reviews: 670 },
      cafeFinder: { rating: 4.7, trustScore: 91, verifiedVisits: 165 }
    },
    sampleReviews: [
      {
        id: "rev-jc-1",
        author: "Manveer Grewal",
        authorSector: "Sector 10",
        rating: 5,
        date: "5 days ago",
        verified: true,
        order: "Pepperoni Pizza & Iced Americano",
        vibeRating: "Afternoon Date",
        text: "Brought our Golden Retriever to the garden tables. Staff was warm and even brought a water bowl. The pizza crust had genuine leopard spotting.",
        qualityScore: 94
      }
    ]
  },
  {
    id: "chai-shai-bar-sec15",
    name: "Chai Shai Bar",
    sector: "Sector 15",
    city: "Chandigarh",
    address: "Booth 84, Sector 15-D, Chandigarh",
    coordinates: [30.7552, 76.7721],
    priceRange: "₹",
    approxCostForTwo: 280,
    categories: ["budget", "group", "latenight"],
    tags: ["Kulhad Chai", "Student Hangout", "Bun Maska", "Late Night Tea"],
    heroImage: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "3/4",
    rating: 4.3,
    reviewCount: 310,
    verifiedVisitsCount: 140,
    distanceKm: 3.5,
    openingHours: "8:00 AM – 1:30 AM",
    featuredQuote: "Cardamom kulhad chai and buttery bun maska near Panjab University.",
    strengths: [
      "Aromatic ginger cardamom kulhad chai brewed fresh in brass kettles",
      "Warm toasted bun maska with tutti frutti",
      "Open until 1:30 AM for night owl discussions"
    ],
    weaknesses: [
      "Outdoor standing/stool setup without AC comfort",
      "Not suited for formal business meetings"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "The ultimate college night-tea corner with unbeatable flavor per rupee.",
      loved: ["Kulhad Adrak Chai", "Bun Maska", "Late Night Student Buzz"],
      disliked: ["No Air Conditioning", "Crowded Standing Tables"]
    },
    sources: {
      google: { rating: 4.3, reviews: 1400 },
      zomato: { rating: 4.2, reviews: 880 },
      swiggy: { rating: 4.2, reviews: 920 },
      cafeFinder: { rating: 4.5, trustScore: 86, verifiedVisits: 140 }
    },
    sampleReviews: [
      {
        id: "rev-cs-1",
        author: "Amanjot Virk",
        authorSector: "Sector 15",
        rating: 4.5,
        date: "2 weeks ago",
        verified: true,
        order: "Kulhad Elaichi Chai & Toasted Bun Maska",
        vibeRating: "Midnight Chai",
        text: "Standard post-exam tradition. The chai is strong and sweet with genuine fresh crushed cardamom. Cheap and soul-satisfying.",
        qualityScore: 87
      }
    ]
  },
  {
    id: "gourmet-nine-sec9",
    name: "Gourmet Nine Artisanal Bakes",
    sector: "Sector 9",
    city: "Chandigarh",
    address: "SCO 22, Inner Market, Sector 9-D, Chandigarh",
    coordinates: [30.7431, 76.7938],
    priceRange: "₹₹",
    approxCostForTwo: 700,
    categories: ["coffee", "quiet", "aesthetic"],
    tags: ["French Patisserie", "Sourdough Loaves", "Macarons", "Cortado"],
    heroImage: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "4/5",
    rating: 4.6,
    reviewCount: 190,
    verifiedVisitsCount: 88,
    distanceKm: 2.0,
    openingHours: "9:00 AM – 9:30 PM",
    featuredQuote: "Laminated butter croissants with a flaky shattering crunch that rivals Paris.",
    strengths: [
      "Fresh daily batches of sourdough and French pain au chocolat",
      "Quiet jazz soundtrack and aesthetic pastel mint interiors",
      "Specialty single-estate coffee sourced directly from Chikmagalur"
    ],
    weaknesses: [
      "Popular pastries sell out by 4 PM",
      "Limited hot savory menu options"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "Artisanal baking perfection for coffee snobs and pastry purists.",
      loved: ["Pain Au Chocolat", "Cortado with Almond Milk", "Pastel Aesthetic"],
      disliked: ["Pastries Sell Out Early", "Limited Hot Savory Menu"]
    },
    sources: {
      google: { rating: 4.6, reviews: 620 },
      zomato: { rating: 4.6, reviews: 410 },
      swiggy: { rating: 4.5, reviews: 290 },
      cafeFinder: { rating: 4.8, trustScore: 92, verifiedVisits: 88 }
    },
    sampleReviews: [
      {
        id: "rev-gn-1",
        author: "Sanya Arora",
        authorSector: "Sector 8",
        rating: 5,
        date: "3 days ago",
        verified: true,
        order: "Pistachio Croissant & Double Cortado",
        vibeRating: "Afternoon Solo Treat",
        text: "The honeycomb interior of the croissant was textbook perfection. Great coffee with proper crema. Get there early before the bakes disappear.",
        qualityScore: 92
      }
    ]
  },
  {
    id: "woodstock-sec43",
    name: "Woodstock Cafe & Co-work",
    sector: "Sector 43",
    city: "Chandigarh",
    address: "SCO 88-89, Near Judicial Academy, Sector 43-B, Chandigarh",
    coordinates: [30.7165, 76.7512],
    priceRange: "₹₹",
    approxCostForTwo: 650,
    categories: ["study", "coffee", "quiet"],
    tags: ["High Speed Fiber", "Ergonomic Chairs", "Cold Brew", "Conference Pods"],
    heroImage: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "1/1",
    rating: 4.6,
    reviewCount: 240,
    verifiedVisitsCount: 115,
    distanceKm: 5.2,
    openingHours: "8:00 AM – 9:00 PM",
    featuredQuote: "A serene co-working cafe built specifically for deep work, legal research, and writing.",
    strengths: [
      "Ergonomic Herman Miller style mesh chairs and dual-screen stations",
      "Silent study pods with dedicated charging points",
      "Smooth 18-hour steeped cold brew"
    ],
    weaknesses: [
      "Closes early at 9 PM",
      "Whisper-only zone may feel rigid for casual banter"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "The premier professional remote work setup in southern Chandigarh.",
      loved: ["Ergonomic Desks", "100 Mbps Wi-Fi", "Steeped Cold Brew"],
      disliked: ["Early 9 PM Closing", "Quiet Policy Strictly Enforced"]
    },
    sources: {
      google: { rating: 4.6, reviews: 880 },
      zomato: { rating: 4.4, reviews: 320 },
      swiggy: { rating: 4.3, reviews: 180 },
      cafeFinder: { rating: 4.7, trustScore: 91, verifiedVisits: 115 }
    },
    sampleReviews: [
      {
        id: "rev-ws-1",
        author: "Advocate Harsh Vardhan",
        authorSector: "Sector 43",
        rating: 5,
        date: "1 week ago",
        verified: true,
        order: "Cold Brew & Multigrain Avocado Toast",
        vibeRating: "Legal Brief Preparation",
        text: "The only place near the District Courts where you can plug in a laptop, review case files in complete peace, and get proper coffee.",
        qualityScore: 93
      }
    ]
  },
  {
    id: "roastery-industrial-phase1",
    name: "The Roastery Coffee House",
    sector: "Industrial Area Phase 1",
    city: "Chandigarh",
    address: "Plot 181/45, Industrial Area Phase 1, Chandigarh",
    coordinates: [30.7051, 76.8012],
    priceRange: "₹₹",
    approxCostForTwo: 850,
    categories: ["coffee", "study", "aesthetic", "group"],
    tags: ["Coffee Roastery", "Cascara Brews", "Courtyard Patio", "Monsooned Malabar"],
    heroImage: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "3/4",
    rating: 4.7,
    reviewCount: 460,
    verifiedVisitsCount: 198,
    distanceKm: 4.2,
    openingHours: "8:00 AM – 11:00 PM",
    featuredQuote: "Live roasting machines, aromatic cascara sodas, and breezy open brick courtyards.",
    strengths: [
      "On-premise Giesen roaster filling the entire courtyard with fresh coffee aromas",
      "Specialty drinks like Cranberry Cold Brew and Cascara Lemonade",
      "Expansive indoor and open-air brick patio seating"
    ],
    weaknesses: [
      "Surrounding industrial area approach has truck traffic",
      "Gets full with waiting times on Sunday afternoons"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "An artisan coffee haven that transforms an industrial space into a sensory retreat.",
      loved: ["Cranberry Cold Brew", "Freshly Roasted Beans", "Open Brick Courtyard"],
      disliked: ["Truck Traffic on Approach Road", "Sunday Afternoon Rush"]
    },
    sources: {
      google: { rating: 4.7, reviews: 2900 },
      zomato: { rating: 4.6, reviews: 1900 },
      swiggy: { rating: 4.5, reviews: 810 },
      cafeFinder: { rating: 4.8, trustScore: 93, verifiedVisits: 198 }
    },
    sampleReviews: [
      {
        id: "rev-rc-1",
        author: "Gurmehar Dhillon",
        authorSector: "Sector 33",
        rating: 5,
        date: "4 days ago",
        verified: true,
        order: "Aeropress Single Origin & Zucchini Fritters",
        vibeRating: "Artisan Coffee Cupping",
        text: "They showed me the beans in the roaster and tailored the Aeropress grind size to my acidity preference. Remarkable passion.",
        qualityScore: 95
      }
    ]
  },
  {
    id: "whistling-duck-sec26",
    name: "Whistling Duck",
    sector: "Sector 26",
    city: "Chandigarh",
    address: "SCO 10, Backside, Sector 26, Chandigarh",
    coordinates: [30.7235, 76.8148],
    priceRange: "₹₹₹",
    approxCostForTwo: 1600,
    categories: ["date", "aesthetic", "group", "latenight"],
    tags: ["Pan-Asian & European", "Warm Timber Decor", "Craft Cocktails", "Jazz Nights"],
    heroImage: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "16/10",
    rating: 4.6,
    reviewCount: 370,
    verifiedVisitsCount: 150,
    distanceKm: 2.2,
    openingHours: "12:00 PM – 12:00 AM",
    featuredQuote: "Sensational Asian bowls, artisanal sourdough, and an undeniably sophisticated vibe.",
    strengths: [
      "Unique Pan-Asian menu items (Khao Suey, pork belly buns, matcha bakes)",
      "Curated non-commercial jazz playlist and warm lighting",
      "Well-spaced tables ensuring privacy"
    ],
    weaknesses: [
      "Higher tax slab and service charge included",
      "Dark mood lighting not suited for book reading"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "Sophisticated Pan-Asian dining that never compromises on ingredient freshness.",
      loved: ["Burmese Khao Suey", "Crispy Pork Bao", "Artisanal Cocktail Menu"],
      disliked: ["Higher Price Point", "Dim Lighting Not For Reading"]
    },
    sources: {
      google: { rating: 4.6, reviews: 1800 },
      zomato: { rating: 4.5, reviews: 1400 },
      swiggy: { rating: 4.4, reviews: 520 },
      cafeFinder: { rating: 4.7, trustScore: 92, verifiedVisits: 150 }
    },
    sampleReviews: [
      {
        id: "rev-wd-1",
        author: "Kavita Sethi",
        authorSector: "Sector 9",
        rating: 5,
        date: "6 days ago",
        verified: true,
        order: "Chicken Khao Suey & Lemongrass Iced Tea",
        vibeRating: "Dinner Date",
        text: "The coconut broth in the Khao Suey was layered and fragrant. Exceptional dining experience with warm hospitality.",
        qualityScore: 93
      }
    ]
  },
  {
    id: "cafe-tea-pot-sec7",
    name: "The Tea Pot Cafe",
    sector: "Sector 7",
    city: "Chandigarh",
    address: "SCO 24, Sector 7-C, Chandigarh",
    coordinates: [30.7301, 76.8035],
    priceRange: "₹₹",
    approxCostForTwo: 600,
    categories: ["coffee", "quiet", "aesthetic"],
    tags: ["Artisan Teas", "Scones & Cream", "Vintage Floral Cups", "Quiet Banter"],
    heroImage: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "1/1",
    rating: 4.4,
    reviewCount: 160,
    verifiedVisitsCount: 75,
    distanceKm: 1.2,
    openingHours: "10:00 AM – 9:30 PM",
    featuredQuote: "A delightfully quaint Victorian tea nook serving chamomile blends in antique porcelain.",
    strengths: [
      "Over 30 loose leaf tea varietals with tasting hourglasses",
      "Authentic English clotted cream and strawberry scones",
      "Quiet corner spot with soft floral aesthetics"
    ],
    weaknesses: [
      "Very compact space (about 5 tables only)",
      "Coffee selection is basic compared to the extensive teas"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "A Victorian afternoon tea oasis hidden away in Sector 7.",
      loved: ["Earl Grey Lavender Tea", "Warm Scones with Clotted Cream", "Antique Porcelain Decor"],
      disliked: ["Limited 5-Table Seating", "Secondary Coffee Focus"]
    },
    sources: {
      google: { rating: 4.4, reviews: 490 },
      zomato: { rating: 4.3, reviews: 310 },
      swiggy: { rating: 4.2, reviews: 180 },
      cafeFinder: { rating: 4.6, trustScore: 88, verifiedVisits: 75 }
    },
    sampleReviews: [
      {
        id: "rev-tp-1",
        author: "Avani Chopra",
        authorSector: "Sector 8",
        rating: 5,
        date: "2 weeks ago",
        verified: true,
        order: "Lavender Earl Grey & Classic Cream Scone",
        vibeRating: "Afternoon Tea",
        text: "The tea timers with colored sand are a lovely touch. Peaceful place to unwind after work.",
        qualityScore: 89
      }
    ]
  },
  {
    id: "cafe-de-paris-sec17",
    name: "Cafe de Paris",
    sector: "Sector 17",
    city: "Chandigarh",
    address: "Bridge Market, Sector 17, Chandigarh",
    coordinates: [30.7380, 76.7810],
    priceRange: "₹₹",
    approxCostForTwo: 750,
    categories: ["aesthetic", "coffee", "group"],
    tags: ["French Bistro", "Piazza Seating", "Crepes", "Espresso"],
    heroImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "3/4",
    rating: 4.3,
    reviewCount: 290,
    verifiedVisitsCount: 110,
    distanceKm: 2.1,
    openingHours: "10:30 AM – 10:30 PM",
    featuredQuote: "Piazza promenade dining right next to Sector 17's musical fountains.",
    strengths: [
      "Great people-watching view of Sector 17 plaza promenade",
      "Sweet Nutella banana crepes with whipped cream",
      "Spacious covered patio seating"
    ],
    weaknesses: [
      "Service pace can be leisurely during busy evening hours",
      "Slightly tourist-heavy on weekends"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "A relaxed European cafe terrace overlooking Chandigarh's iconic city center.",
      loved: ["Piazza Fountain Views", "Nutella Banana Crepes", "Outdoor Wicker Chairs"],
      disliked: ["Slow Evening Service", "Weekend Tourist Rush"]
    },
    sources: {
      google: { rating: 4.3, reviews: 1100 },
      zomato: { rating: 4.2, reviews: 750 },
      swiggy: { rating: 4.1, reviews: 420 },
      cafeFinder: { rating: 4.5, trustScore: 85, verifiedVisits: 110 }
    },
    sampleReviews: [
      {
        id: "rev-cdp-1",
        author: "Bhavuk Verma",
        authorSector: "Sector 16",
        rating: 4,
        date: "1 week ago",
        verified: true,
        order: "Cafe Latte & Savory Ham & Cheese Crepe",
        vibeRating: "Plaza Stroll",
        text: "Sat outside in the evening while the fountain show started. Good crepe, decent coffee, great city vibe.",
        qualityScore: 86
      }
    ]
  },
  {
    id: "peddlers-sec35",
    name: "Peddlers Cafe & Pub",
    sector: "Sector 35",
    city: "Chandigarh",
    address: "Hotel Heritage, SCO 467-468, Sector 35-C, Chandigarh",
    coordinates: [30.7225, 76.7638],
    priceRange: "₹₹₹",
    approxCostForTwo: 1500,
    categories: ["group", "latenight"],
    tags: ["English Pub Vibe", "Live Sufi & Rock", "Beer On Tap", "Fish & Chips"],
    heroImage: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "4/5",
    rating: 4.4,
    reviewCount: 680,
    verifiedVisitsCount: 260,
    distanceKm: 4.7,
    openingHours: "12:00 PM – 1:00 AM",
    featuredQuote: "Classic British pub timber aesthetics with famous live acoustic and indie band gigs.",
    strengths: [
      "Outstanding live band performances every Wednesday, Friday, Saturday",
      "Crisp beer-battered fish and chips with tartare sauce",
      "Cozy Irish tavern ambiance with stained glass"
    ],
    weaknesses: [
      "Not suited for quiet conversations after 8:30 PM due to band volume",
      "Cover charge applicable on select Saturday gigs"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "The heartbeat of Chandigarh live indie music and classic pub hospitality.",
      loved: ["Live Band Nights", "Beer Battered Fish & Chips", "Classic British Decor"],
      disliked: ["Loud Band Music for Chats", "Saturday Cover Charges"]
    },
    sources: {
      google: { rating: 4.4, reviews: 3900 },
      zomato: { rating: 4.4, reviews: 2600 },
      swiggy: { rating: 4.2, reviews: 710 },
      cafeFinder: { rating: 4.6, trustScore: 88, verifiedVisits: 260 }
    },
    sampleReviews: [
      {
        id: "rev-pd-1",
        author: "Sahil Kaushal",
        authorSector: "Sector 34",
        rating: 5,
        date: "3 days ago",
        verified: true,
        order: "Craft Pitcher & Fish N Chips",
        vibeRating: "Live Music Night",
        text: "The indie rock band on Friday night was phenomenal. Great energy, prompt bar service, and tasty pub food.",
        qualityScore: 90
      }
    ]
  },
  {
    id: "coffee-bean-sec11",
    name: "The Coffee Bean Loft",
    sector: "Sector 11",
    city: "Chandigarh",
    address: "SCO 56, Sector 11-D, Chandigarh",
    coordinates: [30.7570, 76.7820],
    priceRange: "₹₹",
    approxCostForTwo: 650,
    categories: ["coffee", "study", "quiet"],
    tags: ["Mezzanine Loft", "Flat Whites", "Student Discount", "Muffins"],
    heroImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "3/4",
    rating: 4.5,
    reviewCount: 210,
    verifiedVisitsCount: 92,
    distanceKm: 3.1,
    openingHours: "8:30 AM – 10:00 PM",
    featuredQuote: "A hidden mezzanine loft in Sector 11 with warm wood tones and rich espresso aromas.",
    strengths: [
      "Quiet upper loft level dedicated to laptops and readers",
      "Rich crema on medium-dark roasted South Indian estate beans",
      "Generous student discount on presentation of college ID"
    ],
    weaknesses: [
      "Loft stairs are somewhat steep",
      "Limited savory food variety"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "A tranquil student-friendly mezzanine loft with honest brews.",
      loved: ["Quiet Upper Loft", "Student Discount", "Blueberry Streusel Muffin"],
      disliked: ["Steep Stairs to Loft", "Limited Savory Items"]
    },
    sources: {
      google: { rating: 4.5, reviews: 710 },
      zomato: { rating: 4.4, reviews: 440 },
      swiggy: { rating: 4.3, reviews: 260 },
      cafeFinder: { rating: 4.7, trustScore: 90, verifiedVisits: 92 }
    },
    sampleReviews: [
      {
        id: "rev-cbl-1",
        author: "Meenal Gupta",
        authorSector: "Sector 11",
        rating: 5,
        date: "5 days ago",
        verified: true,
        order: "Flat White & Warm Blueberry Muffin",
        vibeRating: "Afternoon Study",
        text: "The mezzanine has great natural light from the skylight. Smooth flat white with microfoam art. Quiet enough to record voice notes.",
        qualityScore: 91
      }
    ]
  },
  {
    id: "artisan-brew-sec44",
    name: "Artisan Brew Lab",
    sector: "Sector 44",
    city: "Chandigarh",
    address: "SCO 112, Sector 44-C, Chandigarh",
    coordinates: [30.7095, 76.7568],
    priceRange: "₹₹",
    approxCostForTwo: 720,
    categories: ["coffee", "study", "quiet"],
    tags: ["Manual Brew Bar", "Syphon Coffee", "Vegan Bakes", "Minimalist"],
    heroImage: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "1/1",
    rating: 4.6,
    reviewCount: 175,
    verifiedVisitsCount: 82,
    distanceKm: 5.8,
    openingHours: "9:00 AM – 9:30 PM",
    featuredQuote: "Chemex, Syphon, and Aeropress brews executed with lab-like precision in southern Chandigarh.",
    strengths: [
      "Wide choice of manual brew methods with custom water temperature control",
      "Gluten-free and vegan brownies baked in house",
      "Zero loud chatter with soft lo-fi background beats"
    ],
    weaknesses: [
      "Manual brewing takes 8-10 minutes per cup",
      "Modest seating capacity of 18 guests"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "Specialty coffee craftsmanship for serious palate enthusiasts.",
      loved: ["Syphon Brew Process", "Vegan Chocolate Brownie", "Lo-Fi Focus Ambiance"],
      disliked: ["Slower Brew Times (8-10 mins)", "Limited Seats"]
    },
    sources: {
      google: { rating: 4.6, reviews: 520 },
      zomato: { rating: 4.5, reviews: 310 },
      swiggy: { rating: 4.4, reviews: 190 },
      cafeFinder: { rating: 4.8, trustScore: 92, verifiedVisits: 82 }
    },
    sampleReviews: [
      {
        id: "rev-abl-1",
        author: "Tanmay Bedi",
        authorSector: "Sector 44",
        rating: 5,
        date: "1 week ago",
        verified: true,
        order: "Syphon Yirgacheffe & Vegan Banana Bread",
        vibeRating: "Coffee Science",
        text: "Watching the barista prepare the syphon was like an art class. Bright berry notes with zero astringency.",
        qualityScore: 92
      }
    ]
  },
  {
    id: "the-terrace-sec50",
    name: "The Terrace Green",
    sector: "Sector 50",
    city: "Chandigarh",
    address: "Society Market, Sector 50-D, Chandigarh",
    coordinates: [30.6980, 76.7485],
    priceRange: "₹₹",
    approxCostForTwo: 780,
    categories: ["aesthetic", "date", "quiet"],
    tags: ["Open Air Terrace", "Plant Nursery", "Handmade Pastas", "Sunset Vibe"],
    heroImage: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "4/5",
    rating: 4.5,
    reviewCount: 195,
    verifiedVisitsCount: 86,
    distanceKm: 6.9,
    openingHours: "11:00 AM – 10:30 PM",
    featuredQuote: "Dine nestled inside hundreds of potted monstera and ferns on an open-air rooftop.",
    strengths: [
      "Enchanting botanical green nursery setting with fresh herbal aromas",
      "Hand-rolled gnocchi in sage butter sauce",
      "Cool breeze in evenings away from city noise"
    ],
    weaknesses: [
      "Location is further south in residential Sector 50",
      "Weather dependent seating during heavy rains"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "A botanical rooftop refuge tucked into tranquil Sector 50.",
      loved: ["Botanical Plant Nursery", "Handmade Gnocchi in Sage Butter", "Evening Breeze"],
      disliked: ["Distance from Northern City Center", "Rain Contingency Limited"]
    },
    sources: {
      google: { rating: 4.5, reviews: 680 },
      zomato: { rating: 4.4, reviews: 390 },
      swiggy: { rating: 4.3, reviews: 220 },
      cafeFinder: { rating: 4.7, trustScore: 90, verifiedVisits: 86 }
    },
    sampleReviews: [
      {
        id: "rev-ttg-1",
        author: "Baneet Gill",
        authorSector: "Sector 49",
        rating: 5,
        date: "2 weeks ago",
        verified: true,
        order: "Ricotta Gnocchi & Fresh Mint Lemonade",
        vibeRating: "Relaxed Weekend Evening",
        text: "You forget you are in a city. Plants everywhere and tables are placed with great privacy.",
        qualityScore: 90
      }
    ]
  },
  {
    id: "coffee-central-sec22",
    name: "Coffee Central",
    sector: "Sector 22",
    city: "Chandigarh",
    address: "SCO 1044, Sector 22-B, Chandigarh",
    coordinates: [30.7389, 76.7731],
    priceRange: "₹₹",
    approxCostForTwo: 500,
    categories: ["coffee", "budget", "group"],
    tags: ["Convenient Meeting Spot", "Cold Brews", "Waffles", "Casual"],
    heroImage: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "3/4",
    rating: 4.3,
    reviewCount: 270,
    verifiedVisitsCount: 110,
    distanceKm: 2.6,
    openingHours: "9:30 AM – 10:30 PM",
    featuredQuote: "Convenient spot for casual meetings right near Sector 22 market.",
    strengths: [
      "Central meeting location with easy landmark recognition",
      "Crisp Belgian waffles with maple drizzle",
      "Prompt friendly service"
    ],
    weaknesses: [
      "Parking can be tough during festival shopping seasons",
      "Simple diner decor"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "Dependable, practical meeting point with great waffles in Sector 22.",
      loved: ["Belgian Waffles", "Iced Hazelnut Latte", "Central Location"],
      disliked: ["Sector 22 Market Parking", "Basic Interiors"]
    },
    sources: {
      google: { rating: 4.3, reviews: 1120 },
      zomato: { rating: 4.2, reviews: 680 },
      swiggy: { rating: 4.1, reviews: 490 },
      cafeFinder: { rating: 4.5, trustScore: 86, verifiedVisits: 110 }
    },
    sampleReviews: [
      {
        id: "rev-cc-1",
        author: "Nikhil Joshi",
        authorSector: "Sector 22",
        rating: 4.5,
        date: "1 week ago",
        verified: true,
        order: "Nutella Waffle & Cappuccino",
        vibeRating: "Quick Meeting",
        text: "Clean, consistent coffee and the waffle was freshly ironed and crisp.",
        qualityScore: 86
      }
    ]
  },
  {
    id: "the-french-press-sec8",
    name: "The French Press Cafe",
    sector: "Sector 8",
    city: "Chandigarh",
    address: "SCO 33, Inner Market, Sector 8-C, Chandigarh",
    coordinates: [30.7380, 76.8010],
    priceRange: "₹₹",
    approxCostForTwo: 720,
    categories: ["coffee", "quiet", "aesthetic"],
    tags: ["French Roast", "Fresh Baguettes", "Quiche", "Vintage Posters"],
    heroImage: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "16/10",
    rating: 4.5,
    reviewCount: 230,
    verifiedVisitsCount: 105,
    distanceKm: 1.4,
    openingHours: "9:00 AM – 10:00 PM",
    featuredQuote: "French roast aromas, crusty baguettes, and charming Parisian vintage posters.",
    strengths: [
      "Authentic French press table carafes with dark roast notes",
      "Crusty warm baguettes with herb butter",
      "Relaxed unhurried vibe for reading"
    ],
    weaknesses: [
      "Modest seating area",
      "Occasional queue on Saturday mornings"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "An authentic corner of Paris nestled quietly into Sector 8.",
      loved: ["French Press Table Service", "Warm Herb Butter Baguette", "Relaxed Vibe"],
      disliked: ["Weekend Morning Waits", "Limited Floor Space"]
    },
    sources: {
      google: { rating: 4.5, reviews: 890 },
      zomato: { rating: 4.4, reviews: 540 },
      swiggy: { rating: 4.3, reviews: 310 },
      cafeFinder: { rating: 4.7, trustScore: 90, verifiedVisits: 105 }
    },
    sampleReviews: [
      {
        id: "rev-fpc-1",
        author: "Deepika Mann",
        authorSector: "Sector 8",
        rating: 5,
        date: "6 days ago",
        verified: true,
        order: "French Press for Two & Ham Quiche",
        vibeRating: "Morning Catchup",
        text: "The coffee was served in a proper bodum press with clear sediment separation. Lovely crust on the quiche.",
        qualityScore: 90
      }
    ]
  },
  {
    id: "sector-15-chaha-corner",
    name: "Sector 15 Student Corner",
    sector: "Sector 15",
    city: "Chandigarh",
    address: "Patel Market Booths, Sector 15-C, Chandigarh",
    coordinates: [30.7538, 76.7710],
    priceRange: "₹",
    approxCostForTwo: 220,
    categories: ["budget", "group", "latenight"],
    tags: ["Cutting Chai", "Aloo Patties", "PU Adda", "Cheap Eats"],
    heroImage: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "3/4",
    rating: 4.2,
    reviewCount: 380,
    verifiedVisitsCount: 160,
    distanceKm: 3.4,
    openingHours: "7:30 AM – 11:30 PM",
    featuredQuote: "The legendary student adda where hostel politics and exam gossip happen over ₹15 cutting chai.",
    strengths: [
      "Warm spiced cutting chai at only ₹15",
      "Freshly baked crisp aloo patties and paneer burgers",
      "Vibrant Panjab University student banter"
    ],
    weaknesses: [
      "No chairs, strictly street corner standing",
      "Crowded during college recess hours"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "Pure university nostalgic street food energy.",
      loved: ["Cutting Masala Chai", "Crisp Paneer Patty", "Student Atmosphere"],
      disliked: ["No Seating", "Busy Market Congestion"]
    },
    sources: {
      google: { rating: 4.2, reviews: 1900 },
      zomato: { rating: 4.1, reviews: 890 },
      swiggy: { rating: 4.0, reviews: 620 },
      cafeFinder: { rating: 4.4, trustScore: 84, verifiedVisits: 160 }
    },
    sampleReviews: [
      {
        id: "rev-s15-1",
        author: "Gurnoor Gill",
        authorSector: "Sector 15",
        rating: 4.5,
        date: "2 weeks ago",
        verified: true,
        order: "Double Cutting Chai & Aloo Patty",
        vibeRating: "Student Adda",
        text: "The patties are always warm and flaky. If you want authentic PU campus vibes without spending big bucks, this is it.",
        qualityScore: 85
      }
    ]
  },
  {
    id: "cinnamon-creek-sec35",
    name: "Cinnamon Creek Cafe",
    sector: "Sector 35",
    city: "Chandigarh",
    address: "SCO 421, Sector 35-C, Chandigarh",
    coordinates: [30.7238, 76.7649],
    priceRange: "₹₹",
    approxCostForTwo: 820,
    categories: ["coffee", "date", "aesthetic"],
    tags: ["Cinnamon Rolls", "Warm Espresso", "Cozy Booths", "Dessert Haven"],
    heroImage: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "1/1",
    rating: 4.5,
    reviewCount: 310,
    verifiedVisitsCount: 135,
    distanceKm: 4.4,
    openingHours: "10:00 AM – 11:00 PM",
    featuredQuote: "Freshly pulled cinnamon rolls dripping with vanilla cream cheese icing.",
    strengths: [
      "Signature warm cinnamon buns baked every 2 hours",
      "Cozy plush burgundy booths with ambient fairy lights",
      "Rich mocha with Valrhona cocoa dusting"
    ],
    weaknesses: [
      "Can get very sweet if you dislike rich glazes",
      "Limited savory options"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "The ultimate indulgence for sweet tooth lovers in Sector 35.",
      loved: ["Warm Cinnamon Glaze Bun", "Valrhona Mocha", "Plush Burgundy Booths"],
      disliked: ["Very Sweet for Savory Palates", "Modest Savory Menu"]
    },
    sources: {
      google: { rating: 4.5, reviews: 1400 },
      zomato: { rating: 4.4, reviews: 980 },
      swiggy: { rating: 4.4, reviews: 540 },
      cafeFinder: { rating: 4.7, trustScore: 90, verifiedVisits: 135 }
    },
    sampleReviews: [
      {
        id: "rev-cck-1",
        author: "Meghna Kapoor",
        authorSector: "Sector 36",
        rating: 5,
        date: "4 days ago",
        verified: true,
        order: "Giant Cinnamon Roll & Americano",
        vibeRating: "Sweet Tooth Craving",
        text: "The bun arrived warm and soft in the middle. Paired with a bitter black Americano, it was pure comfort.",
        qualityScore: 91
      }
    ]
  },
  {
    id: "sector-17-underground-brews",
    name: "Underground Brews & Vinyl",
    sector: "Sector 17",
    city: "Chandigarh",
    address: "Basement SCO 45, Sector 17-C, Chandigarh",
    coordinates: [30.7402, 76.7818],
    priceRange: "₹₹",
    approxCostForTwo: 700,
    categories: ["coffee", "quiet", "aesthetic"],
    tags: ["Vinyl Records", "Basement Speakeasy", "Pour Over", "Jazz Classics"],
    heroImage: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "4/5",
    rating: 4.6,
    reviewCount: 220,
    verifiedVisitsCount: 104,
    distanceKm: 2.2,
    openingHours: "11:00 AM – 10:00 PM",
    featuredQuote: "Analog vinyl player spinning Miles Davis in a cozy subterranean hideout.",
    strengths: [
      "Curated collection of 400+ vinyl records that guests can request",
      "Dark moody wooden acoustics perfect for focused solo reading",
      "Specialty manual brew bar"
    ],
    weaknesses: [
      "Basement mobile network can be spotty (Wi-Fi provided)",
      "No natural sunlight"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "An atmospheric speakeasy coffee bar for audiophiles and book lovers.",
      loved: ["Vinyl Record Collection", "Subterranean Quiet", "Single Estate Pour Overs"],
      disliked: ["Spotty Cellular Signal in Basement", "No Natural Daylight"]
    },
    sources: {
      google: { rating: 4.6, reviews: 780 },
      zomato: { rating: 4.5, reviews: 490 },
      swiggy: { rating: 4.3, reviews: 210 },
      cafeFinder: { rating: 4.8, trustScore: 92, verifiedVisits: 104 }
    },
    sampleReviews: [
      {
        id: "rev-ubv-1",
        author: "Varun Nair",
        authorSector: "Sector 18",
        rating: 5,
        date: "5 days ago",
        verified: true,
        order: "Pour Over & Dark Chocolate Tart",
        vibeRating: "Audiophile Reading",
        text: "Listening to Kind of Blue on original vinyl while sipping a clean washed Ethiopian brew was heaven. Use their Wi-Fi since phone signal is low.",
        qualityScore: 94
      }
    ]
  },
  {
    id: "the-rooftop-pot-sec9",
    name: "The Rooftop Pot",
    sector: "Sector 9",
    city: "Chandigarh",
    address: "SCO 48, Rooftop, Sector 9-D, Chandigarh",
    coordinates: [30.7435, 76.7932],
    priceRange: "₹₹",
    approxCostForTwo: 890,
    categories: ["aesthetic", "date", "group"],
    tags: ["Open Rooftop", "Pottery Decor", "Wood Fired Bites", "Terrace Sunset"],
    heroImage: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "3/4",
    rating: 4.5,
    reviewCount: 340,
    verifiedVisitsCount: 145,
    distanceKm: 2.1,
    openingHours: "11:00 AM – 11:30 PM",
    featuredQuote: "Terracotta pottery displays, panoramic Sector 9 rooftop, and cold brews.",
    strengths: [
      "Charming handcrafted clay pottery planters and rustic tables",
      "Stunning sunset horizon with Sector 9 canopy views",
      "Crisp wood-fired calzones"
    ],
    weaknesses: [
      "Stair climb without elevator access",
      "Can get warm in direct midday sunlight"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "Earthy terracotta charm with sweeping rooftop perspectives.",
      loved: ["Terracotta Rustic Decor", "Sunset Canopy Views", "Wood Fired Calzones"],
      disliked: ["3 Flights of Stairs (No Lift)", "Direct Midday Sun"]
    },
    sources: {
      google: { rating: 4.5, reviews: 1600 },
      zomato: { rating: 4.4, reviews: 1100 },
      swiggy: { rating: 4.3, reviews: 480 },
      cafeFinder: { rating: 4.7, trustScore: 90, verifiedVisits: 145 }
    },
    sampleReviews: [
      {
        id: "rev-trp-1",
        author: "Ishaan Kohli",
        authorSector: "Sector 9",
        rating: 4.5,
        date: "1 week ago",
        verified: true,
        order: "Smoked Chicken Calzone & Mint Iced Tea",
        vibeRating: "Sunset Hangout",
        text: "Worth the stair climb for the sunset alone. The calzone was loaded with cheese and baked to a golden crust.",
        qualityScore: 90
      }
    ]
  },
  {
    id: "espresso-laboratory-sec7",
    name: "Espresso Laboratory",
    sector: "Sector 7",
    city: "Chandigarh",
    address: "Booth 14, Inner Market, Sector 7-C, Chandigarh",
    coordinates: [30.7308, 76.8042],
    priceRange: "₹₹",
    approxCostForTwo: 600,
    categories: ["coffee", "quiet"],
    tags: ["Espresso Specialists", "Coffee Cupping", "Cold Brew Tonic", "Micro Roastery"],
    heroImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "1/1",
    rating: 4.6,
    reviewCount: 180,
    verifiedVisitsCount: 88,
    distanceKm: 1.3,
    openingHours: "8:00 AM – 9:00 PM",
    featuredQuote: "Dedicated espresso purists testing extraction yields and TDS percentages.",
    strengths: [
      "Top grade Slayer espresso machine with pressure profiling",
      "Rotating single origin micro-lots every fortnight",
      "Fast barista service with precision tasting notes"
    ],
    weaknesses: [
      "Minimalist seating with few backrests",
      "No sugary milkshakes or commercial snacks"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "Pure coffee geekery where extraction precision is revered.",
      loved: ["Double Ristretto", "Espresso Tonic", "Detailed Origin Cards"],
      disliked: ["Stool Seating Only", "Strictly Coffee Focused Menu"]
    },
    sources: {
      google: { rating: 4.6, reviews: 590 },
      zomato: { rating: 4.5, reviews: 340 },
      swiggy: { rating: 4.4, reviews: 150 },
      cafeFinder: { rating: 4.8, trustScore: 92, verifiedVisits: 88 }
    },
    sampleReviews: [
      {
        id: "rev-el-1",
        author: "Raghav Suri",
        authorSector: "Sector 7",
        rating: 5,
        date: "3 days ago",
        verified: true,
        order: "Ethiopia Yirgacheffe Espresso & Sparkling Water",
        vibeRating: "Morning Espresso Shot",
        text: "Crisp acidity, jasmine floral notes, zero harsh bitterness. If you care about real specialty espresso, do not miss this spot.",
        qualityScore: 94
      }
    ]
  },
  {
    id: "the-cozy-corner-sec34",
    name: "The Cozy Corner",
    sector: "Sector 34",
    city: "Chandigarh",
    address: "SCO 98, Sector 34-A, Chandigarh",
    coordinates: [30.7252, 76.7720],
    priceRange: "₹",
    approxCostForTwo: 420,
    categories: ["budget", "study", "coffee"],
    tags: ["Coaching Student Hub", "Budget Sandwiches", "Cold Coffee", "Charging Points"],
    heroImage: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "4/5",
    rating: 4.3,
    reviewCount: 310,
    verifiedVisitsCount: 130,
    distanceKm: 3.8,
    openingHours: "8:30 AM – 10:00 PM",
    featuredQuote: "The student lifeline between Sector 34 coaching institute test series.",
    strengths: [
      "Abundant electrical extension boards for laptops and tablets",
      "Budget combos (Sandwich + Cold Coffee under ₹160)",
      "High speed unlimited Wi-Fi"
    ],
    weaknesses: [
      "Gets full with coaching students between 2 PM and 4 PM",
      "Basic utilitarian cafe seating"
    ],
    verdict: {
      status: "Worth visiting",
      headline: "The most practical, budget-friendly study recharge spot in Sector 34.",
      loved: ["Budget Student Combos", "Plentiful Charging Sockets", "Strong Cold Coffee"],
      disliked: ["Crowded Post-Coaching Rush", "Plain Decor"]
    },
    sources: {
      google: { rating: 4.3, reviews: 1420 },
      zomato: { rating: 4.2, reviews: 780 },
      swiggy: { rating: 4.1, reviews: 520 },
      cafeFinder: { rating: 4.5, trustScore: 86, verifiedVisits: 130 }
    },
    sampleReviews: [
      {
        id: "rev-tcc-1",
        author: "Aditi Narang",
        authorSector: "Sector 34",
        rating: 4.5,
        date: "2 weeks ago",
        verified: true,
        order: "Paneer Tikka Sandwich & Cold Coffee",
        vibeRating: "Revision Session",
        text: "Spent 3 hours revising for entrance exams. Wi-Fi was fast, sockets worked, and the coffee gave me the caffeine kick I needed.",
        qualityScore: 88
      }
    ]
  },

  /* ==========================================================================
     LOW-TRUST & MIXED EXPERIENCES DEMO CAFES (Core Product Differentiator)
     These cafes are intentionally modeled with mixed signals or repeated
     complaints to demonstrate the Anti-Manipulation & Low-Trust Discovery System.
     They are hidden from default discovery feeds, but appear when searched
     with a prominent warning banner explaining why!
     ========================================================================== */
  {
    id: "neon-vibes-sec22",
    name: "Neon Glow Lounge & Cafe",
    sector: "Sector 22",
    city: "Chandigarh",
    address: "Basement SCO 210, Sector 22-B, Chandigarh",
    coordinates: [30.7381, 76.7738],
    priceRange: "₹₹",
    approxCostForTwo: 900,
    categories: ["aesthetic", "latenight"],
    tags: ["Neon Signs", "Shakes", "Party Vibes"],
    heroImage: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "3/4",
    rating: 3.8,
    reviewCount: 190,
    verifiedVisitsCount: 35,
    distanceKm: 2.8,
    openingHours: "12:00 PM – 11:00 PM",
    featuredQuote: "Looks flashy on Instagram, but persistent complaints about service and stale fries.",
    isLowTrust: true,
    strengths: [
      "Bright neon photo backdrop signs",
      "Close to Sector 22 market"
    ],
    weaknesses: [
      "Repeated complaints of 40+ minute food delays",
      "Stale frying oil reported in multiple verified visits",
      "Overly loud distorted speaker volume"
    ],
    verdict: {
      status: "Currently Not Recommended",
      headline: "Recent visitor feedback contains repeated complaints about service delays, food consistency, and distorted sound.",
      loved: ["Neon Photo Backdrops"],
      disliked: ["40+ Min Service Delays", "Stale Frying Oil Quality", "Distorted Loud Music"]
    },
    sources: {
      google: { rating: 4.1, reviews: 890 },
      zomato: { rating: 3.4, reviews: 420 },
      swiggy: { rating: 3.6, reviews: 290 },
      cafeFinder: { rating: 3.5, trustScore: 54, verifiedVisits: 35 }
    },
    sampleReviews: [
      {
        id: "rev-nv-1",
        author: "Rohit Bansal",
        authorSector: "Sector 22",
        rating: 2,
        date: "3 days ago",
        verified: true,
        order: "Loaded Fries & Vanilla Shake",
        vibeRating: "Disappointing Visit",
        text: "The neon signs look nice in photos, but our fries arrived cold after a 45-minute wait. Frying oil tasted old. Music was painfully loud.",
        qualityScore: 92
      }
    ]
  },
  {
    id: "overpriced-brew-sec35",
    name: "Golden Bean Executive Cafe",
    sector: "Sector 35",
    city: "Chandigarh",
    address: "SCO 410, Sector 35-C, Chandigarh",
    coordinates: [30.7230, 76.7640],
    priceRange: "₹₹₹",
    approxCostForTwo: 1800,
    categories: ["coffee", "luxury"],
    tags: ["Pretentious Decor", "Expensive Lattes"],
    heroImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80"
    ],
    aspectRatio: "1/1",
    rating: 3.9,
    reviewCount: 140,
    verifiedVisitsCount: 22,
    distanceKm: 4.6,
    openingHours: "10:00 AM – 10:00 PM",
    featuredQuote: "Charges ₹380 for lukewarm coffee with inflated Google reviews.",
    isLowTrust: true,
    strengths: [
      "Gilded faux-gold interior chairs",
      "Air conditioning works well"
    ],
    weaknesses: [
      "Grossly inflated prices with sub-par commercial coffee",
      "Staff pushes mandatory tips and unlisted water bottle charges",
      "Wide gap between promotional claims and real verified experience"
    ],
    verdict: {
      status: "Currently Not Recommended",
      headline: "Discrepancy detected: high online rating does not match verified visitor reports of inflated billing and sub-par coffee.",
      loved: ["Air Conditioned Hall"],
      disliked: ["Exorbitant Prices (₹380 basic latte)", "Hidden Charges on Bill", "Lukewarm Coffee Extraction"]
    },
    sources: {
      google: { rating: 4.4, reviews: 620 },
      zomato: { rating: 3.6, reviews: 310 },
      swiggy: { rating: 3.5, reviews: 140 },
      cafeFinder: { rating: 3.3, trustScore: 58, verifiedVisits: 22 }
    },
    sampleReviews: [
      {
        id: "rev-gb-1",
        author: "Karan Johar (Advocate)",
        authorSector: "Sector 35",
        rating: 2,
        date: "1 week ago",
        verified: true,
        order: "Cafe Latte & Brownie",
        vibeRating: "Overpriced Experience",
        text: "Charged ₹450 for a generic latte that tasted bitter and lukewarm. Added hidden ₹80 water bottle without asking. Do not fall for the gilded photos.",
        qualityScore: 94
      }
    ]
  }
];
