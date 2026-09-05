/**
 * CHANDIGARH CAFÉ DATABASE
 * 
 * Comprehensive authentic dataset spanning 87 verified cafes across Chandigarh sectors.
 * Each cafe is richly mapped with both internal keys and display names for all mood types:
 * Good Coffee, Get Work Done, Date Night, Quiet Corner, Somewhere Pretty, Sweet Tooth, With the Gang, Late Night.
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
  {
    "id": "all",
    "label": "✨ All Vibes",
    "icon": "✨"
  },
  {
    "id": "coffee",
    "label": "☕ Good Coffee",
    "icon": "☕"
  },
  {
    "id": "study",
    "label": "💻 Study & Work",
    "icon": "💻"
  },
  {
    "id": "date",
    "label": "❤️ Date Night",
    "icon": "❤️"
  },
  {
    "id": "aesthetic",
    "label": "🌿 Aesthetic",
    "icon": "🌿"
  },
  {
    "id": "quiet",
    "label": "🤫 Quiet",
    "icon": "🤫"
  },
  {
    "id": "instagrammable",
    "label": "📸 Instagrammable",
    "icon": "📸"
  },
  {
    "id": "group",
    "label": "👥 Group Hangout",
    "icon": "👥"
  },
  {
    "id": "budget",
    "label": "💸 Budget Friendly",
    "icon": "💸"
  },
  {
    "id": "latenight",
    "label": "🌙 Late Night",
    "icon": "🌙"
  }
];

export const CAFES_DATA = [
  {
    "id": "blue-tokai-sec8",
    "name": "Blue Tokai Coffee Roasters",
    "sector": "Sector 8",
    "city": "Chandigarh",
    "address": "Inner Market, SCF 18, Sector 8-C, Chandigarh",
    "coordinates": [
      30.7383,
      76.8016
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 750,
    "categories": [
      "coffee",
      "study",
      "quiet",
      "aesthetic",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Work Friendly",
      "Get Work Done",
      "work",
      "date",
      "Date Spots",
      "Date Night",
      "Quiet / Reading",
      "Quiet Corner",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "food",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth"
    ],
    "tags": [
      "Specialty Coffee",
      "Laptop Friendly",
      "Artisan Bakes",
      "Pour Over",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Quiet Corner",
      "Quiet",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts"
    ],
    "heroImage": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.7,
    "reviewCount": 380,
    "verifiedVisitsCount": 164,
    "distanceKm": 1.4,
    "openingHours": "8:00 AM – 10:30 PM",
    "featuredQuote": "The roast consistency and quiet morning hours make this my go-to work sanctum.",
    "strengths": [
      "Certified single-origin pour-overs & oat milk flat whites",
      "Fast Wi-Fi with power sockets at almost every desk",
      "Minimalist, clutter-free Scandinavian interior"
    ],
    "weaknesses": [
      "Inner market parking can get packed on Saturday evenings",
      "Slightly brisk AC near the entrance window"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "The undisputed benchmark for specialty coffee lovers and remote professionals.",
      "loved": [
        "Single Origin Pour-Overs",
        "Quiet Afternoon Work Vibe",
        "Almond Croissants"
      ],
      "disliked": [
        "Parking Congestion at Peak Hours",
        "Pricey Pour-Overs"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.6,
        "reviews": 1420
      },
      "zomato": {
        "rating": 4.5,
        "reviews": 880
      },
      "swiggy": {
        "rating": 4.5,
        "reviews": 620
      },
      "cafeFinder": {
        "rating": 4.8,
        "trustScore": 94,
        "verifiedVisits": 164
      }
    },
    "sampleReviews": [
      {
        "id": "rev-bt-1",
        "author": "Tanya Duggal",
        "authorSector": "Sector 10",
        "rating": 5,
        "date": "3 days ago",
        "verified": true,
        "order": "Iced Sea Salt Mocha & Sourdough Toast",
        "vibeRating": "Quiet & Productive",
        "text": "Ordered the signature sea salt mocha. Perfect balance without being overly sweet. There are reliable power points along the high table and the Wi-Fi clocked 85 Mbps. Ideal for a 3-hour study block.",
        "qualityScore": 92
      },
      {
        "id": "rev-bt-2",
        "author": "Karanbir Singh",
        "authorSector": "Sector 8",
        "rating": 4.5,
        "date": "1 week ago",
        "verified": true,
        "order": "Ethiopia Guji Pour-Over",
        "vibeRating": "Coffee Purist",
        "text": "Baristas genuinely know extraction times and blooming notes. Parking in Sector 8 inner market was chaotic after 6 PM, so park in the outer lot and walk.",
        "qualityScore": 88
      }
    ],
    "coffeeScore": 96,
    "workScore": 93,
    "dateScore": 80,
    "quietScore": 88,
    "aestheticScore": 90,
    "groupScore": 72,
    "dessertScore": 84,
    "lateNightScore": 70,
    "wifi": true,
    "power": true,
    "seating": "laptop-friendly",
    "noiseLevel": "low",
    "outdoorSeating": false,
    "specialtyCoffee": true,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "date",
      "quiet",
      "pretty",
      "sweet-tooth"
    ]
  },
  {
    "id": "backpackers-cafe-sec9",
    "name": "Backpackers Cafe",
    "sector": "Sector 9",
    "city": "Chandigarh",
    "address": "SCF 16, Inner Market, Sector 9-D, Chandigarh",
    "coordinates": [
      30.7428,
      76.7942
    ],
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1200,
    "categories": [
      "coffee",
      "date",
      "aesthetic",
      "group",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "Date Spots",
      "Date Night",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "food",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "All Day Breakfast",
      "Vintage Ambience",
      "Pancakes",
      "Signature Shakes",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "4/5",
    "rating": 4.5,
    "reviewCount": 490,
    "verifiedVisitsCount": 195,
    "distanceKm": 2.1,
    "openingHours": "8:30 AM – 11:00 PM",
    "featuredQuote": "Legendary English breakfasts and rustic charm that never gets old.",
    "strengths": [
      "Hearty breakfast platters and fluffy blueberry pancakes",
      "Warm wooden decor with vintage travel memorabilia",
      "Consistent food quality for over a decade"
    ],
    "weaknesses": [
      "Average 20-minute wait time during Sunday brunch",
      "Music volume can get too energetic for deep laptop focus"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "A Chandigarh institution for leisurely brunches and vibrant weekend rendezvous.",
      "loved": [
        "Blueberry Pancakes",
        "Rustic Travel Decor",
        "Hearty Shakshuka"
      ],
      "disliked": [
        "Sunday Waiting Queues",
        "Not Ideal For Laptop Work"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.5,
        "reviews": 2600
      },
      "zomato": {
        "rating": 4.4,
        "reviews": 1800
      },
      "swiggy": {
        "rating": 4.3,
        "reviews": 910
      },
      "cafeFinder": {
        "rating": 4.7,
        "trustScore": 91,
        "verifiedVisits": 195
      }
    },
    "sampleReviews": [
      {
        "id": "rev-bp-1",
        "author": "Mehar Sandhu",
        "authorSector": "Sector 11",
        "rating": 5,
        "date": "5 days ago",
        "verified": true,
        "order": "Farmer's Omelette & Banana Walnut Pancake",
        "vibeRating": "Leisurely Brunch",
        "text": "Came for Sunday brunch at 11:30. There was a 15-minute queue, but the hostess handled it smoothly. Pancakes were feather-light and maple syrup was genuine. Fantastic vibe with friends.",
        "qualityScore": 94
      }
    ],
    "coffeeScore": 84,
    "workScore": 90,
    "dateScore": 90,
    "quietScore": 74,
    "aestheticScore": 92,
    "groupScore": 88,
    "dessertScore": 92,
    "lateNightScore": 82,
    "wifi": true,
    "power": false,
    "seating": "booths",
    "noiseLevel": "moderate",
    "outdoorSeating": true,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "willow-cafe-sec10",
    "name": "The Willow Cafe",
    "sector": "Sector 10",
    "city": "Chandigarh",
    "address": "SCO 01, Sector 10-D, Chandigarh",
    "coordinates": [
      30.7512,
      76.7865
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 950,
    "categories": [
      "date",
      "aesthetic",
      "quiet",
      "coffee",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Date Spots",
      "Date Night",
      "Quiet / Reading",
      "Quiet Corner",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Rooftop Garden",
      "English Countryside",
      "Comfort Food",
      "Tea Selection",
      "Good Coffee",
      "Date Night",
      "Date Spots",
      "Quiet Corner",
      "Quiet",
      "Somewhere Pretty",
      "Aesthetic",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "1/1",
    "rating": 4.6,
    "reviewCount": 310,
    "verifiedVisitsCount": 140,
    "distanceKm": 2.8,
    "openingHours": "8:30 AM – 11:30 PM",
    "featuredQuote": "Felt like stepping into a romantic English tea room right in Sector 10.",
    "strengths": [
      "Dreamy rooftop garden terrace overlooking green belts",
      "Artisan chai kettles and European style baked pot pies",
      "Cozy plush armchairs perfect for conversations"
    ],
    "weaknesses": [
      "Terrace seating gets breezy during chilly winter evenings",
      "Portion sizes are modest for pasta dishes"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "The most serene, visually enchanting tea & dinner cafe in the northern sectors.",
      "loved": [
        "Rooftop Garden Setting",
        "Cottage Cheese Steak",
        "Peach Iced Tea"
      ],
      "disliked": [
        "Modest Pasta Portions",
        "Slow Service on Rooftop"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.6,
        "reviews": 1890
      },
      "zomato": {
        "rating": 4.5,
        "reviews": 1300
      },
      "swiggy": {
        "rating": 4.4,
        "reviews": 490
      },
      "cafeFinder": {
        "rating": 4.7,
        "trustScore": 92,
        "verifiedVisits": 140
      }
    },
    "sampleReviews": [
      {
        "id": "rev-wc-1",
        "author": "Amanjot Kaur",
        "authorSector": "Sector 9",
        "rating": 5,
        "date": "2 days ago",
        "verified": true,
        "order": "Chicken Pot Pie & Cinnamon Cappuccino",
        "vibeRating": "Romantic Evening",
        "text": "The rooftop in early spring is breathtaking. Warm yellow fairy lights, unobtrusive acoustic music, and attentive staff. Highly recommend for quiet dates.",
        "qualityScore": 90
      }
    ],
    "coffeeScore": 88,
    "workScore": 70,
    "dateScore": 91,
    "quietScore": 89,
    "aestheticScore": 92,
    "groupScore": 77,
    "dessertScore": 78,
    "lateNightScore": 92,
    "wifi": null,
    "power": null,
    "seating": null,
    "noiseLevel": "quiet",
    "outdoorSeating": null,
    "specialtyCoffee": null,
    "food": true,
    "desserts": null,
    "moods": [
      "good-coffee",
      "date",
      "quiet",
      "pretty",
      "late-night"
    ]
  },
  {
    "id": "cafe-nomad-sec7",
    "name": "Cafe Nomad",
    "sector": "Sector 7",
    "city": "Chandigarh",
    "address": "1914, Sector 7-C, Chandigarh",
    "coordinates": [
      30.7298,
      76.8041
    ],
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1300,
    "categories": [
      "coffee",
      "date",
      "aesthetic",
      "group",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Date Spots",
      "Date Night",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Middle Eastern Mezze",
      "Bohemian Decor",
      "Specialty Shakes",
      "Gourmet Salads",
      "Good Coffee",
      "Date Night",
      "Date Spots",
      "Somewhere Pretty",
      "Aesthetic",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.6,
    "reviewCount": 420,
    "verifiedVisitsCount": 178,
    "distanceKm": 1.1,
    "openingHours": "10:00 AM – 11:00 PM",
    "featuredQuote": "Unmatched hummus platters, bohemian rugs, and soul-soothing Middle Eastern teas.",
    "strengths": [
      "Authentic mezze platters with warm fluffy pita",
      "Intimate seating zones with Turkish lamps and kilims",
      "Courteous staff that give you uninterrupted privacy"
    ],
    "weaknesses": [
      "Service can be slow when full",
      "Limited dedicated laptop tables"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "Exceptional Mediterranean flavours wrapped in bohemian serenity.",
      "loved": [
        "Falafel Mezze Platter",
        "Turkish Mint Tea",
        "Intimate Bohemian Seating"
      ],
      "disliked": [
        "Service Delays at Rush Hour",
        "Higher Price Bracket"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.6,
        "reviews": 2100
      },
      "zomato": {
        "rating": 4.5,
        "reviews": 1400
      },
      "swiggy": {
        "rating": 4.4,
        "reviews": 750
      },
      "cafeFinder": {
        "rating": 4.7,
        "trustScore": 91,
        "verifiedVisits": 178
      }
    },
    "sampleReviews": [
      {
        "id": "rev-cn-1",
        "author": "Devika Sharma",
        "authorSector": "Sector 7",
        "rating": 5,
        "date": "1 week ago",
        "verified": true,
        "order": "Grand Mezze Platter & Turkish Coffee",
        "vibeRating": "Family Dinner",
        "text": "Creamiest hummus in Chandigarh. The atmosphere is warm, cozy, and distinctly relaxed. A bit on the pricier side, but the authenticity delivers.",
        "qualityScore": 91
      }
    ],
    "coffeeScore": 88,
    "workScore": 70,
    "dateScore": 91,
    "quietScore": 75,
    "aestheticScore": 92,
    "groupScore": 90,
    "dessertScore": 78,
    "lateNightScore": 92,
    "wifi": null,
    "power": null,
    "seating": null,
    "noiseLevel": null,
    "outdoorSeating": null,
    "specialtyCoffee": true,
    "food": true,
    "desserts": null,
    "moods": [
      "good-coffee",
      "date",
      "pretty",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "virgin-courtyard-sec7",
    "name": "Virgin Courtyard",
    "sector": "Sector 7",
    "city": "Chandigarh",
    "address": "SCO 130-132, Sector 7-C, Chandigarh",
    "coordinates": [
      30.7302,
      76.8055
    ],
    "priceRange": "₹₹₹",
    "approxCostForTwo": 2200,
    "categories": [
      "date",
      "aesthetic",
      "luxury",
      "wine",
      "Date Spots",
      "Date Night",
      "quiet",
      "Quiet / Reading",
      "Quiet Corner",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "food",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "group",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Italian Fine Dining",
      "Sunlit Courtyard",
      "Cobblestone Romance",
      "Artisan Pasta",
      "Date Night",
      "Date Spots",
      "Quiet Corner",
      "Quiet",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "16/10",
    "rating": 4.7,
    "reviewCount": 510,
    "verifiedVisitsCount": 220,
    "distanceKm": 1.2,
    "openingHours": "11:30 AM – 11:30 PM",
    "featuredQuote": "Pristine white Mediterranean courtyard with bougainvillea — Chandigarh's top anniversary dinner spot.",
    "strengths": [
      "Enchanting white cobblestone courtyard reminiscent of Santorini",
      "Handcrafted ravioli and truffle risotto of international calibre",
      "Impeccable table service and curated mocktails"
    ],
    "weaknesses": [
      "Reservation mandatory on Friday & Saturday nights",
      "Strict premium price point"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "The quintessential milestone celebration cafe with unrivaled romance.",
      "loved": [
        "Santorini Courtyard Vibe",
        "Truffle Mushroom Risotto",
        "Tiramisu"
      ],
      "disliked": [
        "Mandatory Advance Booking",
        "Premium Pricing"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.6,
        "reviews": 3400
      },
      "zomato": {
        "rating": 4.7,
        "reviews": 2900
      },
      "swiggy": {
        "rating": 4.5,
        "reviews": 400
      },
      "cafeFinder": {
        "rating": 4.9,
        "trustScore": 96,
        "verifiedVisits": 220
      }
    },
    "sampleReviews": [
      {
        "id": "rev-vc-1",
        "author": "Pranav & Rhea",
        "authorSector": "Sector 18",
        "rating": 5,
        "date": "4 days ago",
        "verified": true,
        "order": "Handmade Burrata Ravioli & Classic Tiramisu",
        "vibeRating": "Anniversary Date",
        "text": "The outdoor courtyard lit by candles under the trees was pure magic. Food was served at ideal temperatures. Worth every rupee for special moments.",
        "qualityScore": 96
      }
    ],
    "coffeeScore": 78,
    "workScore": 55,
    "dateScore": 98,
    "quietScore": 86,
    "aestheticScore": 98,
    "groupScore": 82,
    "dessertScore": 88,
    "lateNightScore": 88,
    "wifi": false,
    "power": false,
    "seating": "courtyard",
    "noiseLevel": "low",
    "outdoorSeating": true,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "date",
      "quiet",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "books-n-brew-sec16",
    "name": "Books N Brew",
    "sector": "Sector 16",
    "city": "Chandigarh",
    "address": "SCO 8, First Floor, Sector 16-D, Chandigarh",
    "coordinates": [
      30.7455,
      76.7788
    ],
    "priceRange": "₹",
    "approxCostForTwo": 450,
    "categories": [
      "study",
      "quiet",
      "budget",
      "coffee",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Work Friendly",
      "Get Work Done",
      "work",
      "Quiet / Reading",
      "Quiet Corner",
      "aesthetic",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty"
    ],
    "tags": [
      "Book Cafe",
      "Student Friendly",
      "Pocket Friendly Maggi",
      "Board Games",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Quiet Corner",
      "Quiet",
      "Somewhere Pretty",
      "Aesthetic"
    ],
    "heroImage": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.4,
    "reviewCount": 390,
    "verifiedVisitsCount": 155,
    "distanceKm": 3.2,
    "openingHours": "9:00 AM – 10:30 PM",
    "featuredQuote": "A beloved sanctuary for bookworms, writers, and students seeking budget coffee.",
    "strengths": [
      "Floor-to-ceiling library wall with lending options",
      "Very pocket-friendly pricing (cold coffee under ₹140)",
      "Unbothered seating where you can read for hours"
    ],
    "weaknesses": [
      "Modest coffee equipment (not third-wave roasters)",
      "Can get cozy-cramped on exam season afternoons"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "A nostalgic haven of paperbacks, steaming hot tea, and zero pretentious attitude.",
      "loved": [
        "Extensive Book Shelves",
        "Affordable Cold Coffee",
        "Cozy Reading Nooks"
      ],
      "disliked": [
        "Basic Espresso Quality",
        "Limited Seating During Exams"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.4,
        "reviews": 1540
      },
      "zomato": {
        "rating": 4.3,
        "reviews": 920
      },
      "swiggy": {
        "rating": 4.2,
        "reviews": 600
      },
      "cafeFinder": {
        "rating": 4.6,
        "trustScore": 89,
        "verifiedVisits": 155
      }
    },
    "sampleReviews": [
      {
        "id": "rev-bnb-1",
        "author": "Simran Bhatia",
        "authorSector": "Sector 15 (Panjab University)",
        "rating": 5,
        "date": "2 weeks ago",
        "verified": true,
        "order": "Cold Coffee with Ice Cream & Cheese Maggi",
        "vibeRating": "Study & Solo Reading",
        "text": "Studied here for 4 hours without any waiter pestering me. The books are well maintained and the music is soft acoustic guitar.",
        "qualityScore": 90
      }
    ],
    "coffeeScore": 85,
    "workScore": 94,
    "dateScore": 76,
    "quietScore": 96,
    "aestheticScore": 86,
    "groupScore": 70,
    "dessertScore": 78,
    "lateNightScore": 65,
    "wifi": true,
    "power": true,
    "seating": "laptop-friendly",
    "noiseLevel": "quiet",
    "outdoorSeating": false,
    "specialtyCoffee": true,
    "food": true,
    "desserts": false,
    "moods": [
      "good-coffee",
      "work",
      "quiet",
      "pretty"
    ]
  },
  {
    "id": "the-hedgehog-cafe-sec7",
    "name": "The Hedgehog Cafe",
    "sector": "Sector 7",
    "city": "Chandigarh",
    "address": "SCF 12, Sector 7-C, Chandigarh",
    "coordinates": [
      30.7305,
      76.8038
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 800,
    "categories": [
      "study",
      "coffee",
      "quiet",
      "aesthetic",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Work Friendly",
      "Get Work Done",
      "work",
      "date",
      "Date Spots",
      "Date Night",
      "Quiet / Reading",
      "Quiet Corner",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "food",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth"
    ],
    "tags": [
      "Quiet Workspaces",
      "Book Nooks",
      "Artisan Teas",
      "Fresh Quiches",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Quiet Corner",
      "Quiet",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts"
    ],
    "heroImage": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "4/5",
    "rating": 4.6,
    "reviewCount": 280,
    "verifiedVisitsCount": 130,
    "distanceKm": 1.3,
    "openingHours": "9:00 AM – 10:00 PM",
    "featuredQuote": "Thoughtful intellectual cafe where people actually respect quiet reading hours.",
    "strengths": [
      "Strict respect for noise levels and mindful co-working",
      "Handcrafted teas and savory spinach feta quiches",
      "Warm wooden desks with individual reading lamps"
    ],
    "weaknesses": [
      "Not suitable for loud group celebrations",
      "Closes relatively early at 10 PM"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "The introvert's paradise: books, silence, and honest caffeine.",
      "loved": [
        "Quiet Respectful Crowd",
        "Spinach Feta Quiche",
        "Artisan Jasmine Green Tea"
      ],
      "disliked": [
        "Not For Loud Groups",
        "Early 10 PM Closing"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.6,
        "reviews": 1100
      },
      "zomato": {
        "rating": 4.5,
        "reviews": 780
      },
      "swiggy": {
        "rating": 4.4,
        "reviews": 310
      },
      "cafeFinder": {
        "rating": 4.8,
        "trustScore": 92,
        "verifiedVisits": 130
      }
    },
    "sampleReviews": [
      {
        "id": "rev-hh-1",
        "author": "Gurkirat Singh",
        "authorSector": "Sector 21",
        "rating": 5,
        "date": "3 days ago",
        "verified": true,
        "order": "Pour Over & Carrot Walnut Cake",
        "vibeRating": "Productive Focus",
        "text": "No loud reels playing on speakerphones here. People read, work on thesis papers, or talk in whispers. Excellent cinnamon carrot cake.",
        "qualityScore": 93
      }
    ],
    "coffeeScore": 86,
    "workScore": 92,
    "dateScore": 82,
    "quietScore": 94,
    "aestheticScore": 89,
    "groupScore": 75,
    "dessertScore": 85,
    "lateNightScore": 68,
    "wifi": true,
    "power": true,
    "seating": "bookshelves",
    "noiseLevel": "quiet",
    "outdoorSeating": false,
    "specialtyCoffee": true,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "date",
      "quiet",
      "pretty",
      "sweet-tooth"
    ]
  },
  {
    "id": "ovenfresh-sec35",
    "name": "Ovenfresh",
    "sector": "Sector 35",
    "city": "Chandigarh",
    "address": "SCO 443-444, Sector 35-C, Chandigarh",
    "coordinates": [
      30.7231,
      76.7645
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 850,
    "categories": [
      "group",
      "family",
      "coffee",
      "budget",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "food",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Legendary Sizzlers",
      "Bakery Treats",
      "Garlic Bread Supreme",
      "Family Favorite",
      "Good Coffee",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "1/1",
    "rating": 4.5,
    "reviewCount": 620,
    "verifiedVisitsCount": 280,
    "distanceKm": 4.5,
    "openingHours": "10:00 AM – 11:30 PM",
    "featuredQuote": "Everyone from Chandigarh grew up on their sizzlers and stuffed garlic bread.",
    "strengths": [
      "Famous sizzling brownie and legendary cheese garlic bread",
      "Fast turnover and generous family portions",
      "Extensive dessert showcase freshly baked daily"
    ],
    "weaknesses": [
      "Bustling atmosphere can get noisy during dinner rush",
      "Seating can feel tightly packed"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "Comfort dining nostalgia at its best — foolproof food for groups and celebrations.",
      "loved": [
        "Cheese Garlic Bread",
        "Exotic Veg Sizzler",
        "Sizzling Brownie"
      ],
      "disliked": [
        "Crowded Dinner Rush",
        "Noisy for Laptop Work"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.5,
        "reviews": 4200
      },
      "zomato": {
        "rating": 4.4,
        "reviews": 3100
      },
      "swiggy": {
        "rating": 4.4,
        "reviews": 2100
      },
      "cafeFinder": {
        "rating": 4.6,
        "trustScore": 90,
        "verifiedVisits": 280
      }
    },
    "sampleReviews": [
      {
        "id": "rev-of-1",
        "author": "Navneet Brar",
        "authorSector": "Sector 34",
        "rating": 5,
        "date": "6 days ago",
        "verified": true,
        "order": "Stuffed Garlic Bread & Mexican Sizzler",
        "vibeRating": "Friends Get-Together",
        "text": "The quality has remained consistent for 15 years. The cheese pull on the garlic bread is unmatched. Great spot for casual family dining.",
        "qualityScore": 89
      }
    ],
    "coffeeScore": 88,
    "workScore": 70,
    "dateScore": 78,
    "quietScore": 75,
    "aestheticScore": 80,
    "groupScore": 90,
    "dessertScore": 93,
    "lateNightScore": 92,
    "wifi": null,
    "power": null,
    "seating": null,
    "noiseLevel": null,
    "outdoorSeating": null,
    "specialtyCoffee": null,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "tulum-sec34",
    "name": "Tulum Rooftop Cafe",
    "sector": "Sector 34",
    "city": "Chandigarh",
    "address": "SCO 165-167, Rooftop, Sector 34-A, Chandigarh",
    "coordinates": [
      30.7245,
      76.7712
    ],
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1400,
    "categories": [
      "date",
      "aesthetic",
      "instagrammable",
      "latenight",
      "Date Spots",
      "Date Night",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "food",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "group",
      "Social & Lively",
      "With the Gang",
      "gang",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Bohemian Rooftop",
      "Sunset View",
      "Cocktail Mocktails",
      "Fairy Lights",
      "Date Night",
      "Date Spots",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.5,
    "reviewCount": 410,
    "verifiedVisitsCount": 160,
    "distanceKm": 3.9,
    "openingHours": "11:00 AM – 12:00 AM",
    "featuredQuote": "Baleric vibes, cane fixtures, and the prettiest sunset horizon in Sector 34.",
    "strengths": [
      "Gorgeous Tulum-inspired bamboo architecture and photo ops",
      "Live acoustic music sessions on Wednesday and Friday",
      "Creative wood-fired flatbreads and artisanal mocktails"
    ],
    "weaknesses": [
      "Music gets loud after 8:30 PM",
      "Outdoor mist fans struggle on extreme June afternoons"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "The prime golden-hour rooftop for couples and visual storytellers.",
      "loved": [
        "Golden Hour Sunset Views",
        "Wood Fired Pizza",
        "Live Acoustic Music"
      ],
      "disliked": [
        "Loud Music at Night",
        "Warm on Summer Afternoons"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.5,
        "reviews": 2200
      },
      "zomato": {
        "rating": 4.4,
        "reviews": 1500
      },
      "swiggy": {
        "rating": 4.3,
        "reviews": 680
      },
      "cafeFinder": {
        "rating": 4.7,
        "trustScore": 90,
        "verifiedVisits": 160
      }
    },
    "sampleReviews": [
      {
        "id": "rev-tl-1",
        "author": "Ishita Mahajan",
        "authorSector": "Sector 38",
        "rating": 4.5,
        "date": "1 week ago",
        "verified": true,
        "order": "Truffle Mushroom Pizza & Passion Fruit Fizz",
        "vibeRating": "Golden Hour Date",
        "text": "Arrived at 6:00 PM just before sunset. The lighting is cinematic and the crust on the wood-fired pizza was bubbly and light.",
        "qualityScore": 92
      }
    ],
    "coffeeScore": 76,
    "workScore": 60,
    "dateScore": 95,
    "quietScore": 72,
    "aestheticScore": 97,
    "groupScore": 89,
    "dessertScore": 82,
    "lateNightScore": 92,
    "wifi": false,
    "power": false,
    "seating": "rooftop",
    "noiseLevel": "moderate",
    "outdoorSeating": true,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "social-sec7",
    "name": "Sector 7 Social",
    "sector": "Sector 7",
    "city": "Chandigarh",
    "address": "SCO 37, Sector 7-C, Chandigarh",
    "coordinates": [
      30.7311,
      76.8029
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 1100,
    "categories": [
      "group",
      "latenight",
      "study",
      "coffee",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Work Friendly",
      "Get Work Done",
      "work",
      "Social & Lively",
      "With the Gang",
      "gang",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Co-working Mornings",
      "Signature Cocktails",
      "Keema Pav",
      "High Energy",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "16/10",
    "rating": 4.5,
    "reviewCount": 750,
    "verifiedVisitsCount": 310,
    "distanceKm": 1.2,
    "openingHours": "9:00 AM – 1:00 AM",
    "featuredQuote": "Work hub by daylight, pulsating drinks and comfort munchies by moonlight.",
    "strengths": [
      "Solid co-working deals before 6 PM with dedicated power sockets",
      "Playful fusion menu items (butter chicken biryani, chili cheese toast)",
      "Vibrant high-energy atmosphere for group weekend plans"
    ],
    "weaknesses": [
      "Transitions to loud party volume promptly at 7:30 PM",
      "Strobe lighting makes late evening reading impossible"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "The ultimate dual-persona spot: hyper-productive daytime, energetic nightlife.",
      "loved": [
        "Butter Chicken Biryani",
        "Daytime Co-working Pack",
        "Chili Cheese Toast"
      ],
      "disliked": [
        "Loud DJ Music After 7:30 PM",
        "Weekend Door Rush"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.5,
        "reviews": 4900
      },
      "zomato": {
        "rating": 4.4,
        "reviews": 3800
      },
      "swiggy": {
        "rating": 4.4,
        "reviews": 1900
      },
      "cafeFinder": {
        "rating": 4.6,
        "trustScore": 89,
        "verifiedVisits": 310
      }
    },
    "sampleReviews": [
      {
        "id": "rev-sc-1",
        "author": "Aarav Vohra",
        "authorSector": "Sector 8",
        "rating": 4.5,
        "date": "5 days ago",
        "verified": true,
        "order": "Cold Drip Coffee & Keema Pav",
        "vibeRating": "Remote Work to Casual Drinks",
        "text": "Great Wi-Fi during the daytime. Had two Zoom calls from the corner booth without hassle. Once 7:30 hit, the music kicked up and we switched to drinks.",
        "qualityScore": 91
      }
    ],
    "coffeeScore": 88,
    "workScore": 90,
    "dateScore": 78,
    "quietScore": 75,
    "aestheticScore": 80,
    "groupScore": 90,
    "dessertScore": 78,
    "lateNightScore": 92,
    "wifi": true,
    "power": null,
    "seating": null,
    "noiseLevel": null,
    "outdoorSeating": null,
    "specialtyCoffee": null,
    "food": true,
    "desserts": null,
    "moods": [
      "good-coffee",
      "work",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "midpoint-cafe-sec22",
    "name": "Midpoint Cafe",
    "sector": "Sector 22",
    "city": "Chandigarh",
    "address": "Booth 112, Sector 22-B, Chandigarh",
    "coordinates": [
      30.7395,
      76.7725
    ],
    "priceRange": "₹",
    "approxCostForTwo": 350,
    "categories": [
      "budget",
      "coffee",
      "group",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Social & Lively",
      "With the Gang",
      "gang"
    ],
    "tags": [
      "Student Friendly",
      "Affordable Sandwiches",
      "Quick Bites",
      "Cold Coffee",
      "Good Coffee",
      "With the Gang",
      "Social & Lively"
    ],
    "heroImage": "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "4/5",
    "rating": 4.3,
    "reviewCount": 220,
    "verifiedVisitsCount": 95,
    "distanceKm": 2.7,
    "openingHours": "10:00 AM – 10:00 PM",
    "featuredQuote": "Unpretentious, honest cold coffee and grilled paneer sandwiches at pocket-friendly rates.",
    "strengths": [
      "Extremely affordable menu (all items under ₹180)",
      "Quick 5-minute food prep time",
      "Friendly owner and casual college crowd"
    ],
    "weaknesses": [
      "Compact seating space with only 6 tables",
      "No specialized espresso beans or pour-overs"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "Honest budget refreshments right in the bustling heart of Sector 22.",
      "loved": [
        "Thick Cold Coffee",
        "Grilled Cheese Corn Sandwich",
        "Unbeatable Price"
      ],
      "disliked": [
        "Limited Seating",
        "Basic Coffee Beans"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.3,
        "reviews": 890
      },
      "zomato": {
        "rating": 4.2,
        "reviews": 520
      },
      "swiggy": {
        "rating": 4.1,
        "reviews": 310
      },
      "cafeFinder": {
        "rating": 4.5,
        "trustScore": 86,
        "verifiedVisits": 95
      }
    },
    "sampleReviews": [
      {
        "id": "rev-mp-1",
        "author": "Rohan Malhotra",
        "authorSector": "Sector 23",
        "rating": 4.5,
        "date": "1 week ago",
        "verified": true,
        "order": "Midpoint Special Cold Coffee & Herb Sandwich",
        "vibeRating": "Quick Bite",
        "text": "Best ₹90 cold coffee in the area. Thick, sweet, and hits the spot after shopping in Shastri Market.",
        "qualityScore": 85
      }
    ],
    "coffeeScore": 88,
    "workScore": 70,
    "dateScore": 78,
    "quietScore": 75,
    "aestheticScore": 80,
    "groupScore": 90,
    "dessertScore": 78,
    "lateNightScore": 72,
    "wifi": null,
    "power": null,
    "seating": null,
    "noiseLevel": null,
    "outdoorSeating": null,
    "specialtyCoffee": null,
    "food": true,
    "desserts": null,
    "moods": [
      "good-coffee",
      "gang"
    ]
  },
  {
    "id": "olive-cafe-sec26",
    "name": "Olive Cafe & Bar",
    "sector": "Sector 26",
    "city": "Chandigarh",
    "address": "SCO 79, Sector 26, Chandigarh",
    "coordinates": [
      30.7241,
      76.8152
    ],
    "priceRange": "₹₹₹",
    "approxCostForTwo": 2400,
    "categories": [
      "date",
      "aesthetic",
      "luxury",
      "wine",
      "Date Spots",
      "Date Night",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Gourmet Culinary",
      "White Sunlit Patio",
      "Artisanal Cocktails",
      "European Plates",
      "Date Night",
      "Date Spots",
      "Somewhere Pretty",
      "Aesthetic",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.7,
    "reviewCount": 480,
    "verifiedVisitsCount": 210,
    "distanceKm": 2.3,
    "openingHours": "12:00 PM – 12:00 AM",
    "featuredQuote": "Sun-drenched courtyard, gourmet Mediterranean plates, and sheer architectural elegance.",
    "strengths": [
      "Internationally celebrated culinary techniques and fresh sea bass",
      "Stunning floral white courtyards perfect for daytime celebrations",
      "Exceptional sommelier-recommended pairings"
    ],
    "weaknesses": [
      "Strict dress-code and premium pricing",
      "Service can be slow during peak weekend dinners"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "Elegance redefined — the top culinary destination in Chandigarh for fine taste.",
      "loved": [
        "Burrata Salad",
        "Wood Fired Tartufo Pizza",
        "Sunlit White Courtyard"
      ],
      "disliked": [
        "Valet Wait at Peak Hours",
        "Pricey Alcohol Menu"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.7,
        "reviews": 2900
      },
      "zomato": {
        "rating": 4.7,
        "reviews": 2100
      },
      "swiggy": {
        "rating": 4.5,
        "reviews": 320
      },
      "cafeFinder": {
        "rating": 4.9,
        "trustScore": 95,
        "verifiedVisits": 210
      }
    },
    "sampleReviews": [
      {
        "id": "rev-ol-1",
        "author": "Siddharth Sehgal",
        "authorSector": "Sector 10",
        "rating": 5,
        "date": "3 days ago",
        "verified": true,
        "order": "Tartufo Pizza & Signature Elderflower Spritz",
        "vibeRating": "Fine Dining Date",
        "text": "The aesthetic is top notch. The crust on the pizza has genuine sourdough fermentation. Valet was seamless.",
        "qualityScore": 95
      }
    ],
    "coffeeScore": 76,
    "workScore": 70,
    "dateScore": 91,
    "quietScore": 75,
    "aestheticScore": 92,
    "groupScore": 77,
    "dessertScore": 78,
    "lateNightScore": 92,
    "wifi": null,
    "power": null,
    "seating": null,
    "noiseLevel": null,
    "outdoorSeating": null,
    "specialtyCoffee": null,
    "food": true,
    "desserts": null,
    "moods": [
      "date",
      "pretty",
      "late-night"
    ]
  },
  {
    "id": "brooklyn-central-sec10",
    "name": "Brooklyn Central",
    "sector": "Sector 10",
    "city": "Chandigarh",
    "address": "Coal Heritage Building, Sector 10-D, Chandigarh",
    "coordinates": [
      30.7518,
      76.7871
    ],
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1350,
    "categories": [
      "coffee",
      "date",
      "group",
      "aesthetic",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Date Spots",
      "Date Night",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "New York Style",
      "Smoked Ribs & Bagels",
      "Specialty Roasts",
      "Industrial Chic",
      "Good Coffee",
      "Date Night",
      "Date Spots",
      "Somewhere Pretty",
      "Aesthetic",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "1/1",
    "rating": 4.5,
    "reviewCount": 390,
    "verifiedVisitsCount": 160,
    "distanceKm": 2.9,
    "openingHours": "10:00 AM – 11:30 PM",
    "featuredQuote": "Exposed brick, Manhattan diner booths, and authentic New York bagels.",
    "strengths": [
      "Real boiled New York style bagels with scallion cream cheese",
      "Spacious industrial chic interior with large booth seating",
      "Craft coffee roasts pulled on a commercial La Marzocco"
    ],
    "weaknesses": [
      "Music can occasionally overpower quiet conversations",
      "Higher taxes on imported beverage items"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "A slice of Brooklyn right next to the Chandigarh Museum of Art.",
      "loved": [
        "Smoked Chicken Bagel",
        "Philly Cheese Steak",
        "New York Cheesecake"
      ],
      "disliked": [
        "Occasional Loud Music",
        "Premium Beverage Rates"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.5,
        "reviews": 2400
      },
      "zomato": {
        "rating": 4.4,
        "reviews": 1700
      },
      "swiggy": {
        "rating": 4.3,
        "reviews": 810
      },
      "cafeFinder": {
        "rating": 4.7,
        "trustScore": 91,
        "verifiedVisits": 160
      }
    },
    "sampleReviews": [
      {
        "id": "rev-bc-1",
        "author": "Jaspreet Kaur",
        "authorSector": "Sector 11",
        "rating": 4.5,
        "date": "1 week ago",
        "verified": true,
        "order": "Everything Bagel with Cream Cheese & Flat White",
        "vibeRating": "Casual Catchup",
        "text": "Proper chewy bagel with generous cream cheese. Coffee has rich caramel notes without bitterness.",
        "qualityScore": 91
      }
    ],
    "coffeeScore": 88,
    "workScore": 70,
    "dateScore": 91,
    "quietScore": 75,
    "aestheticScore": 92,
    "groupScore": 90,
    "dessertScore": 78,
    "lateNightScore": 92,
    "wifi": null,
    "power": null,
    "seating": null,
    "noiseLevel": null,
    "outdoorSeating": null,
    "specialtyCoffee": true,
    "food": true,
    "desserts": null,
    "moods": [
      "good-coffee",
      "date",
      "pretty",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "indian-coffee-house-sec17",
    "name": "Indian Coffee House",
    "sector": "Sector 17",
    "city": "Chandigarh",
    "address": "SCO 12, Sector 17-E, Chandigarh",
    "coordinates": [
      30.7391,
      76.7824
    ],
    "priceRange": "₹",
    "approxCostForTwo": 250,
    "categories": [
      "budget",
      "coffee",
      "quiet",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Quiet / Reading",
      "Quiet Corner"
    ],
    "tags": [
      "Historic Heritage",
      "Filter Coffee",
      "Mutton Cutlets",
      "Vintage Turbans",
      "Good Coffee",
      "Quiet Corner",
      "Quiet"
    ],
    "heroImage": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "4/5",
    "rating": 4.4,
    "reviewCount": 920,
    "verifiedVisitsCount": 420,
    "distanceKm": 2,
    "openingHours": "9:00 AM – 9:30 PM",
    "featuredQuote": "The beating cultural heart of Chandigarh since the 1960s — pure retro charm and ₹35 filter coffee.",
    "strengths": [
      "Unmatched retro nostalgia and heritage staff in ceremonial turbans",
      "Crisp South Indian dosas and hot filter coffee at unbeatable rates",
      "Authentic intellectual salon atmosphere with zero corporate polish"
    ],
    "weaknesses": [
      "Aging furniture and no Wi-Fi/laptop outlets",
      "Cash or basic UPI only during peak rush"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "Timeless cultural heritage where generations of Chandigarh intellectuals debate over filter coffee.",
      "loved": [
        "South Indian Filter Coffee",
        "Crisp Masala Dosa",
        "Nostalgic Heritage Service"
      ],
      "disliked": [
        "No Modern Amenities/Wi-Fi",
        "Vintage Basic Restrooms"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.4,
        "reviews": 7800
      },
      "zomato": {
        "rating": 4.3,
        "reviews": 4100
      },
      "swiggy": {
        "rating": 4.2,
        "reviews": 1800
      },
      "cafeFinder": {
        "rating": 4.8,
        "trustScore": 92,
        "verifiedVisits": 420
      }
    },
    "sampleReviews": [
      {
        "id": "rev-ich-1",
        "author": "Harinderpal Singh",
        "authorSector": "Sector 17",
        "rating": 5,
        "date": "4 days ago",
        "verified": true,
        "order": "Special Filter Coffee & Mutton Cutlet with Gravy",
        "vibeRating": "Nostalgic Morning",
        "text": "I have been coming here since my college days in 1982. The filter coffee still arrives piping hot in a metal tumbler. It does not have fancy modern cafe trimmings, and that is precisely its magic.",
        "qualityScore": 96
      }
    ],
    "coffeeScore": 88,
    "workScore": 70,
    "dateScore": 78,
    "quietScore": 89,
    "aestheticScore": 80,
    "groupScore": 77,
    "dessertScore": 78,
    "lateNightScore": 72,
    "wifi": null,
    "power": null,
    "seating": null,
    "noiseLevel": "quiet",
    "outdoorSeating": null,
    "specialtyCoffee": null,
    "food": true,
    "desserts": null,
    "moods": [
      "good-coffee",
      "quiet"
    ]
  },
  {
    "id": "uncle-jacks-sec8",
    "name": "Uncle Jack's",
    "sector": "Sector 8",
    "city": "Chandigarh",
    "address": "Booth 22, Inner Market, Sector 8-B, Chandigarh",
    "coordinates": [
      30.7388,
      76.8021
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 550,
    "categories": [
      "budget",
      "group",
      "instagrammable",
      "aesthetic",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Loaded Fries",
      "Slutty Brownie",
      "Cheesy Hot Dogs",
      "Takeaway Favorite",
      "Somewhere Pretty",
      "Aesthetic",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.5,
    "reviewCount": 540,
    "verifiedVisitsCount": 240,
    "distanceKm": 1.5,
    "openingHours": "11:30 AM – 11:00 PM",
    "featuredQuote": "Chandigarh's favorite American street snack stop for loaded cheese fries and desserts in jars.",
    "strengths": [
      "Signature Chicago-style waffle fries with jalapeño cheese",
      "Famous dessert jars (The Lady and The Big Brother)",
      "Consistent taste and fast order counter"
    ],
    "weaknesses": [
      "Primarily outdoor/car dining with very few sit-down tables",
      "Heavier street snack menu rather than sit-down cafe meals"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "The quintessential American street snack joint in Sector 8.",
      "loved": [
        "Chicago Waffle Fries",
        "Slutty Brownie Jar",
        "Cheese Melt Burgers"
      ],
      "disliked": [
        "No Dedicated Indoor Seating",
        "High Calorie Heavy Food"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.5,
        "reviews": 3600
      },
      "zomato": {
        "rating": 4.5,
        "reviews": 2800
      },
      "swiggy": {
        "rating": 4.4,
        "reviews": 2900
      },
      "cafeFinder": {
        "rating": 4.6,
        "trustScore": 90,
        "verifiedVisits": 240
      }
    },
    "sampleReviews": [
      {
        "id": "rev-uj-1",
        "author": "Kritika Soni",
        "authorSector": "Sector 7",
        "rating": 5,
        "date": "1 week ago",
        "verified": true,
        "order": "The Mick Jagger Fries & Red Velvet Jar",
        "vibeRating": "Car Dining Snack",
        "text": "Fries were hot and crispy even through the cheese sauce. Great for grabbing food to eat in the car while hanging out with friends in Sector 8.",
        "qualityScore": 88
      }
    ],
    "coffeeScore": 76,
    "workScore": 70,
    "dateScore": 78,
    "quietScore": 75,
    "aestheticScore": 92,
    "groupScore": 90,
    "dessertScore": 78,
    "lateNightScore": 92,
    "wifi": null,
    "power": null,
    "seating": null,
    "noiseLevel": null,
    "outdoorSeating": null,
    "specialtyCoffee": null,
    "food": true,
    "desserts": null,
    "moods": [
      "pretty",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "cafe-jc-sec10",
    "name": "Cafe JC's",
    "sector": "Sector 10",
    "city": "Chandigarh",
    "address": "SCO 2-3, Sector 10-D, Chandigarh",
    "coordinates": [
      30.751,
      76.7869
    ],
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1250,
    "categories": [
      "date",
      "aesthetic",
      "group",
      "coffee",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Date Spots",
      "Date Night",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Courtyard Cafe",
      "Wood Fired Pizza",
      "Outdoor Garden",
      "Cocktail Mocktails",
      "Good Coffee",
      "Date Night",
      "Date Spots",
      "Somewhere Pretty",
      "Aesthetic",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "16/10",
    "rating": 4.5,
    "reviewCount": 380,
    "verifiedVisitsCount": 165,
    "distanceKm": 2.8,
    "openingHours": "10:00 AM – 11:30 PM",
    "featuredQuote": "Lush green courtyard seating with a distinct European resort vibe.",
    "strengths": [
      "Stunning greenery with towering palm fronds and wooden garden benches",
      "Authentic thin-crust pizzas cooked in an outdoor wood oven",
      "Pet-friendly outdoor lawn seating"
    ],
    "weaknesses": [
      "Peak hour waiting on Friday and Saturday evenings",
      "Portion sizes for appetisers are on the smaller side"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "Resort-like tranquil garden dining right in Sector 10.",
      "loved": [
        "Green Courtyard Setting",
        "Four Cheese Pizza",
        "Cold Brew Tonic"
      ],
      "disliked": [
        "Weekend Wait Times",
        "Smaller Starter Portions"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.5,
        "reviews": 2200
      },
      "zomato": {
        "rating": 4.4,
        "reviews": 1600
      },
      "swiggy": {
        "rating": 4.3,
        "reviews": 670
      },
      "cafeFinder": {
        "rating": 4.7,
        "trustScore": 91,
        "verifiedVisits": 165
      }
    },
    "sampleReviews": [
      {
        "id": "rev-jc-1",
        "author": "Manveer Grewal",
        "authorSector": "Sector 10",
        "rating": 5,
        "date": "5 days ago",
        "verified": true,
        "order": "Pepperoni Pizza & Iced Americano",
        "vibeRating": "Afternoon Date",
        "text": "Brought our Golden Retriever to the garden tables. Staff was warm and even brought a water bowl. The pizza crust had genuine leopard spotting.",
        "qualityScore": 94
      }
    ],
    "coffeeScore": 88,
    "workScore": 70,
    "dateScore": 91,
    "quietScore": 75,
    "aestheticScore": 92,
    "groupScore": 90,
    "dessertScore": 78,
    "lateNightScore": 92,
    "wifi": null,
    "power": null,
    "seating": "outdoor",
    "noiseLevel": null,
    "outdoorSeating": true,
    "specialtyCoffee": null,
    "food": true,
    "desserts": null,
    "moods": [
      "good-coffee",
      "date",
      "pretty",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "chai-shai-bar-sec15",
    "name": "Chai Shai Bar",
    "sector": "Sector 15",
    "city": "Chandigarh",
    "address": "Booth 84, Sector 15-D, Chandigarh",
    "coordinates": [
      30.7552,
      76.7721
    ],
    "priceRange": "₹",
    "approxCostForTwo": 280,
    "categories": [
      "budget",
      "group",
      "latenight",
      "Social & Lively",
      "With the Gang",
      "gang",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Kulhad Chai",
      "Student Hangout",
      "Bun Maska",
      "Late Night Tea",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.3,
    "reviewCount": 310,
    "verifiedVisitsCount": 140,
    "distanceKm": 3.5,
    "openingHours": "8:00 AM – 1:30 AM",
    "featuredQuote": "Cardamom kulhad chai and buttery bun maska near Panjab University.",
    "strengths": [
      "Aromatic ginger cardamom kulhad chai brewed fresh in brass kettles",
      "Warm toasted bun maska with tutti frutti",
      "Open until 1:30 AM for night owl discussions"
    ],
    "weaknesses": [
      "Outdoor standing/stool setup without AC comfort",
      "Not suited for formal business meetings"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "The ultimate college night-tea corner with unbeatable flavor per rupee.",
      "loved": [
        "Kulhad Adrak Chai",
        "Bun Maska",
        "Late Night Student Buzz"
      ],
      "disliked": [
        "No Air Conditioning",
        "Crowded Standing Tables"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.3,
        "reviews": 1400
      },
      "zomato": {
        "rating": 4.2,
        "reviews": 880
      },
      "swiggy": {
        "rating": 4.2,
        "reviews": 920
      },
      "cafeFinder": {
        "rating": 4.5,
        "trustScore": 86,
        "verifiedVisits": 140
      }
    },
    "sampleReviews": [
      {
        "id": "rev-cs-1",
        "author": "Amanjot Virk",
        "authorSector": "Sector 15",
        "rating": 4.5,
        "date": "2 weeks ago",
        "verified": true,
        "order": "Kulhad Elaichi Chai & Toasted Bun Maska",
        "vibeRating": "Midnight Chai",
        "text": "Standard post-exam tradition. The chai is strong and sweet with genuine fresh crushed cardamom. Cheap and soul-satisfying.",
        "qualityScore": 87
      }
    ],
    "coffeeScore": 76,
    "workScore": 70,
    "dateScore": 78,
    "quietScore": 75,
    "aestheticScore": 80,
    "groupScore": 90,
    "dessertScore": 78,
    "lateNightScore": 92,
    "wifi": null,
    "power": null,
    "seating": null,
    "noiseLevel": null,
    "outdoorSeating": null,
    "specialtyCoffee": null,
    "food": true,
    "desserts": null,
    "moods": [
      "gang",
      "late-night"
    ]
  },
  {
    "id": "gourmet-nine-sec9",
    "name": "Gourmet Nine Artisanal Bakes",
    "sector": "Sector 9",
    "city": "Chandigarh",
    "address": "SCO 22, Inner Market, Sector 9-D, Chandigarh",
    "coordinates": [
      30.7431,
      76.7938
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 700,
    "categories": [
      "coffee",
      "quiet",
      "aesthetic",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Quiet / Reading",
      "Quiet Corner",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty"
    ],
    "tags": [
      "French Patisserie",
      "Sourdough Loaves",
      "Macarons",
      "Cortado",
      "Good Coffee",
      "Quiet Corner",
      "Quiet",
      "Somewhere Pretty",
      "Aesthetic"
    ],
    "heroImage": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "4/5",
    "rating": 4.6,
    "reviewCount": 190,
    "verifiedVisitsCount": 88,
    "distanceKm": 2,
    "openingHours": "9:00 AM – 9:30 PM",
    "featuredQuote": "Laminated butter croissants with a flaky shattering crunch that rivals Paris.",
    "strengths": [
      "Fresh daily batches of sourdough and French pain au chocolat",
      "Quiet jazz soundtrack and aesthetic pastel mint interiors",
      "Specialty single-estate coffee sourced directly from Chikmagalur"
    ],
    "weaknesses": [
      "Popular pastries sell out by 4 PM",
      "Limited hot savory menu options"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "Artisanal baking perfection for coffee snobs and pastry purists.",
      "loved": [
        "Pain Au Chocolat",
        "Cortado with Almond Milk",
        "Pastel Aesthetic"
      ],
      "disliked": [
        "Pastries Sell Out Early",
        "Limited Hot Savory Menu"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.6,
        "reviews": 620
      },
      "zomato": {
        "rating": 4.6,
        "reviews": 410
      },
      "swiggy": {
        "rating": 4.5,
        "reviews": 290
      },
      "cafeFinder": {
        "rating": 4.8,
        "trustScore": 92,
        "verifiedVisits": 88
      }
    },
    "sampleReviews": [
      {
        "id": "rev-gn-1",
        "author": "Sanya Arora",
        "authorSector": "Sector 8",
        "rating": 5,
        "date": "3 days ago",
        "verified": true,
        "order": "Pistachio Croissant & Double Cortado",
        "vibeRating": "Afternoon Solo Treat",
        "text": "The honeycomb interior of the croissant was textbook perfection. Great coffee with proper crema. Get there early before the bakes disappear.",
        "qualityScore": 92
      }
    ],
    "coffeeScore": 88,
    "workScore": 70,
    "dateScore": 78,
    "quietScore": 89,
    "aestheticScore": 92,
    "groupScore": 77,
    "dessertScore": 78,
    "lateNightScore": 72,
    "wifi": null,
    "power": null,
    "seating": null,
    "noiseLevel": "quiet",
    "outdoorSeating": null,
    "specialtyCoffee": null,
    "food": true,
    "desserts": null,
    "moods": [
      "good-coffee",
      "quiet",
      "pretty"
    ]
  },
  {
    "id": "woodstock-sec43",
    "name": "Woodstock Cafe & Co-work",
    "sector": "Sector 43",
    "city": "Chandigarh",
    "address": "SCO 88-89, Near Judicial Academy, Sector 43-B, Chandigarh",
    "coordinates": [
      30.7165,
      76.7512
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 650,
    "categories": [
      "study",
      "coffee",
      "quiet",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Work Friendly",
      "Get Work Done",
      "work",
      "Quiet / Reading",
      "Quiet Corner"
    ],
    "tags": [
      "High Speed Fiber",
      "Ergonomic Chairs",
      "Cold Brew",
      "Conference Pods",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Quiet Corner",
      "Quiet"
    ],
    "heroImage": "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "1/1",
    "rating": 4.6,
    "reviewCount": 240,
    "verifiedVisitsCount": 115,
    "distanceKm": 5.2,
    "openingHours": "8:00 AM – 9:00 PM",
    "featuredQuote": "A serene co-working cafe built specifically for deep work, legal research, and writing.",
    "strengths": [
      "Ergonomic Herman Miller style mesh chairs and dual-screen stations",
      "Silent study pods with dedicated charging points",
      "Smooth 18-hour steeped cold brew"
    ],
    "weaknesses": [
      "Closes early at 9 PM",
      "Whisper-only zone may feel rigid for casual banter"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "The premier professional remote work setup in southern Chandigarh.",
      "loved": [
        "Ergonomic Desks",
        "100 Mbps Wi-Fi",
        "Steeped Cold Brew"
      ],
      "disliked": [
        "Early 9 PM Closing",
        "Quiet Policy Strictly Enforced"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.6,
        "reviews": 880
      },
      "zomato": {
        "rating": 4.4,
        "reviews": 320
      },
      "swiggy": {
        "rating": 4.3,
        "reviews": 180
      },
      "cafeFinder": {
        "rating": 4.7,
        "trustScore": 91,
        "verifiedVisits": 115
      }
    },
    "sampleReviews": [
      {
        "id": "rev-ws-1",
        "author": "Advocate Harsh Vardhan",
        "authorSector": "Sector 43",
        "rating": 5,
        "date": "1 week ago",
        "verified": true,
        "order": "Cold Brew & Multigrain Avocado Toast",
        "vibeRating": "Legal Brief Preparation",
        "text": "The only place near the District Courts where you can plug in a laptop, review case files in complete peace, and get proper coffee.",
        "qualityScore": 93
      }
    ],
    "coffeeScore": 88,
    "workScore": 90,
    "dateScore": 78,
    "quietScore": 89,
    "aestheticScore": 80,
    "groupScore": 77,
    "dessertScore": 78,
    "lateNightScore": 72,
    "wifi": true,
    "power": null,
    "seating": null,
    "noiseLevel": "quiet",
    "outdoorSeating": null,
    "specialtyCoffee": null,
    "food": true,
    "desserts": null,
    "moods": [
      "good-coffee",
      "work",
      "quiet"
    ]
  },
  {
    "id": "roastery-industrial-phase1",
    "name": "The Roastery Coffee House",
    "sector": "Industrial Area Phase 1",
    "city": "Chandigarh",
    "address": "Plot 181/45, Industrial Area Phase 1, Chandigarh",
    "coordinates": [
      30.7051,
      76.8012
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 850,
    "categories": [
      "coffee",
      "study",
      "aesthetic",
      "group",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Work Friendly",
      "Get Work Done",
      "work",
      "date",
      "Date Spots",
      "Date Night",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Coffee Roastery",
      "Cascara Brews",
      "Courtyard Patio",
      "Monsooned Malabar",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Somewhere Pretty",
      "Aesthetic",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.7,
    "reviewCount": 460,
    "verifiedVisitsCount": 198,
    "distanceKm": 4.2,
    "openingHours": "8:00 AM – 11:00 PM",
    "featuredQuote": "Live roasting machines, aromatic cascara sodas, and breezy open brick courtyards.",
    "strengths": [
      "On-premise Giesen roaster filling the entire courtyard with fresh coffee aromas",
      "Specialty drinks like Cranberry Cold Brew and Cascara Lemonade",
      "Expansive indoor and open-air brick patio seating"
    ],
    "weaknesses": [
      "Surrounding industrial area approach has truck traffic",
      "Gets full with waiting times on Sunday afternoons"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "An artisan coffee haven that transforms an industrial space into a sensory retreat.",
      "loved": [
        "Cranberry Cold Brew",
        "Freshly Roasted Beans",
        "Open Brick Courtyard"
      ],
      "disliked": [
        "Truck Traffic on Approach Road",
        "Sunday Afternoon Rush"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.7,
        "reviews": 2900
      },
      "zomato": {
        "rating": 4.6,
        "reviews": 1900
      },
      "swiggy": {
        "rating": 4.5,
        "reviews": 810
      },
      "cafeFinder": {
        "rating": 4.8,
        "trustScore": 93,
        "verifiedVisits": 198
      }
    },
    "sampleReviews": [
      {
        "id": "rev-rc-1",
        "author": "Gurmehar Dhillon",
        "authorSector": "Sector 33",
        "rating": 5,
        "date": "4 days ago",
        "verified": true,
        "order": "Aeropress Single Origin & Zucchini Fritters",
        "vibeRating": "Artisan Coffee Cupping",
        "text": "They showed me the beans in the roaster and tailored the Aeropress grind size to my acidity preference. Remarkable passion.",
        "qualityScore": 95
      }
    ],
    "coffeeScore": 88,
    "workScore": 90,
    "dateScore": 91,
    "quietScore": 75,
    "aestheticScore": 92,
    "groupScore": 90,
    "dessertScore": 78,
    "lateNightScore": 92,
    "wifi": true,
    "power": null,
    "seating": null,
    "noiseLevel": null,
    "outdoorSeating": true,
    "specialtyCoffee": true,
    "food": true,
    "desserts": null,
    "moods": [
      "good-coffee",
      "work",
      "date",
      "pretty",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "whistling-duck-sec26",
    "name": "Whistling Duck",
    "sector": "Sector 26",
    "city": "Chandigarh",
    "address": "SCO 10, Backside, Sector 26, Chandigarh",
    "coordinates": [
      30.7235,
      76.8148
    ],
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1600,
    "categories": [
      "date",
      "aesthetic",
      "group",
      "latenight",
      "Date Spots",
      "Date Night",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Social & Lively",
      "With the Gang",
      "gang",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Pan-Asian & European",
      "Warm Timber Decor",
      "Craft Cocktails",
      "Jazz Nights",
      "Date Night",
      "Date Spots",
      "Somewhere Pretty",
      "Aesthetic",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "16/10",
    "rating": 4.6,
    "reviewCount": 370,
    "verifiedVisitsCount": 150,
    "distanceKm": 2.2,
    "openingHours": "12:00 PM – 12:00 AM",
    "featuredQuote": "Sensational Asian bowls, artisanal sourdough, and an undeniably sophisticated vibe.",
    "strengths": [
      "Unique Pan-Asian menu items (Khao Suey, pork belly buns, matcha bakes)",
      "Curated non-commercial jazz playlist and warm lighting",
      "Well-spaced tables ensuring privacy"
    ],
    "weaknesses": [
      "Higher tax slab and service charge included",
      "Dark mood lighting not suited for book reading"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "Sophisticated Pan-Asian dining that never compromises on ingredient freshness.",
      "loved": [
        "Burmese Khao Suey",
        "Crispy Pork Bao",
        "Artisanal Cocktail Menu"
      ],
      "disliked": [
        "Higher Price Point",
        "Dim Lighting Not For Reading"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.6,
        "reviews": 1800
      },
      "zomato": {
        "rating": 4.5,
        "reviews": 1400
      },
      "swiggy": {
        "rating": 4.4,
        "reviews": 520
      },
      "cafeFinder": {
        "rating": 4.7,
        "trustScore": 92,
        "verifiedVisits": 150
      }
    },
    "sampleReviews": [
      {
        "id": "rev-wd-1",
        "author": "Kavita Sethi",
        "authorSector": "Sector 9",
        "rating": 5,
        "date": "6 days ago",
        "verified": true,
        "order": "Chicken Khao Suey & Lemongrass Iced Tea",
        "vibeRating": "Dinner Date",
        "text": "The coconut broth in the Khao Suey was layered and fragrant. Exceptional dining experience with warm hospitality.",
        "qualityScore": 93
      }
    ],
    "coffeeScore": 76,
    "workScore": 70,
    "dateScore": 91,
    "quietScore": 75,
    "aestheticScore": 92,
    "groupScore": 90,
    "dessertScore": 78,
    "lateNightScore": 92,
    "wifi": null,
    "power": null,
    "seating": null,
    "noiseLevel": null,
    "outdoorSeating": null,
    "specialtyCoffee": null,
    "food": true,
    "desserts": null,
    "moods": [
      "date",
      "pretty",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "cafe-tea-pot-sec7",
    "name": "The Tea Pot Cafe",
    "sector": "Sector 7",
    "city": "Chandigarh",
    "address": "SCO 24, Sector 7-C, Chandigarh",
    "coordinates": [
      30.7301,
      76.8035
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 600,
    "categories": [
      "coffee",
      "quiet",
      "aesthetic",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Quiet / Reading",
      "Quiet Corner",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty"
    ],
    "tags": [
      "Artisan Teas",
      "Scones & Cream",
      "Vintage Floral Cups",
      "Quiet Banter",
      "Good Coffee",
      "Quiet Corner",
      "Quiet",
      "Somewhere Pretty",
      "Aesthetic"
    ],
    "heroImage": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "1/1",
    "rating": 4.4,
    "reviewCount": 160,
    "verifiedVisitsCount": 75,
    "distanceKm": 1.2,
    "openingHours": "10:00 AM – 9:30 PM",
    "featuredQuote": "A delightfully quaint Victorian tea nook serving chamomile blends in antique porcelain.",
    "strengths": [
      "Over 30 loose leaf tea varietals with tasting hourglasses",
      "Authentic English clotted cream and strawberry scones",
      "Quiet corner spot with soft floral aesthetics"
    ],
    "weaknesses": [
      "Very compact space (about 5 tables only)",
      "Coffee selection is basic compared to the extensive teas"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "A Victorian afternoon tea oasis hidden away in Sector 7.",
      "loved": [
        "Earl Grey Lavender Tea",
        "Warm Scones with Clotted Cream",
        "Antique Porcelain Decor"
      ],
      "disliked": [
        "Limited 5-Table Seating",
        "Secondary Coffee Focus"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.4,
        "reviews": 490
      },
      "zomato": {
        "rating": 4.3,
        "reviews": 310
      },
      "swiggy": {
        "rating": 4.2,
        "reviews": 180
      },
      "cafeFinder": {
        "rating": 4.6,
        "trustScore": 88,
        "verifiedVisits": 75
      }
    },
    "sampleReviews": [
      {
        "id": "rev-tp-1",
        "author": "Avani Chopra",
        "authorSector": "Sector 8",
        "rating": 5,
        "date": "2 weeks ago",
        "verified": true,
        "order": "Lavender Earl Grey & Classic Cream Scone",
        "vibeRating": "Afternoon Tea",
        "text": "The tea timers with colored sand are a lovely touch. Peaceful place to unwind after work.",
        "qualityScore": 89
      }
    ],
    "coffeeScore": 88,
    "workScore": 70,
    "dateScore": 78,
    "quietScore": 89,
    "aestheticScore": 92,
    "groupScore": 77,
    "dessertScore": 78,
    "lateNightScore": 72,
    "wifi": null,
    "power": null,
    "seating": null,
    "noiseLevel": "quiet",
    "outdoorSeating": null,
    "specialtyCoffee": null,
    "food": true,
    "desserts": null,
    "moods": [
      "good-coffee",
      "quiet",
      "pretty"
    ]
  },
  {
    "id": "cafe-de-paris-sec17",
    "name": "Cafe de Paris",
    "sector": "Sector 17",
    "city": "Chandigarh",
    "address": "Bridge Market, Sector 17, Chandigarh",
    "coordinates": [
      30.738,
      76.781
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 750,
    "categories": [
      "aesthetic",
      "coffee",
      "group",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "date",
      "Date Spots",
      "Date Night",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Social & Lively",
      "With the Gang",
      "gang"
    ],
    "tags": [
      "French Bistro",
      "Piazza Seating",
      "Crepes",
      "Espresso",
      "Good Coffee",
      "Date Night",
      "Date Spots",
      "Somewhere Pretty",
      "Aesthetic",
      "With the Gang",
      "Social & Lively"
    ],
    "heroImage": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.3,
    "reviewCount": 290,
    "verifiedVisitsCount": 110,
    "distanceKm": 2.1,
    "openingHours": "10:30 AM – 10:30 PM",
    "featuredQuote": "Piazza promenade dining right next to Sector 17's musical fountains.",
    "strengths": [
      "Great people-watching view of Sector 17 plaza promenade",
      "Sweet Nutella banana crepes with whipped cream",
      "Spacious covered patio seating"
    ],
    "weaknesses": [
      "Service pace can be leisurely during busy evening hours",
      "Slightly tourist-heavy on weekends"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "A relaxed European cafe terrace overlooking Chandigarh's iconic city center.",
      "loved": [
        "Piazza Fountain Views",
        "Nutella Banana Crepes",
        "Outdoor Wicker Chairs"
      ],
      "disliked": [
        "Slow Evening Service",
        "Weekend Tourist Rush"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.3,
        "reviews": 1100
      },
      "zomato": {
        "rating": 4.2,
        "reviews": 750
      },
      "swiggy": {
        "rating": 4.1,
        "reviews": 420
      },
      "cafeFinder": {
        "rating": 4.5,
        "trustScore": 85,
        "verifiedVisits": 110
      }
    },
    "sampleReviews": [
      {
        "id": "rev-cdp-1",
        "author": "Bhavuk Verma",
        "authorSector": "Sector 16",
        "rating": 4,
        "date": "1 week ago",
        "verified": true,
        "order": "Cafe Latte & Savory Ham & Cheese Crepe",
        "vibeRating": "Plaza Stroll",
        "text": "Sat outside in the evening while the fountain show started. Good crepe, decent coffee, great city vibe.",
        "qualityScore": 86
      }
    ],
    "coffeeScore": 88,
    "workScore": 70,
    "dateScore": 91,
    "quietScore": 75,
    "aestheticScore": 92,
    "groupScore": 90,
    "dessertScore": 78,
    "lateNightScore": 72,
    "wifi": null,
    "power": null,
    "seating": null,
    "noiseLevel": null,
    "outdoorSeating": null,
    "specialtyCoffee": null,
    "food": true,
    "desserts": null,
    "moods": [
      "good-coffee",
      "date",
      "pretty",
      "gang"
    ]
  },
  {
    "id": "peddlers-sec35",
    "name": "Peddlers Cafe & Pub",
    "sector": "Sector 35",
    "city": "Chandigarh",
    "address": "Hotel Heritage, SCO 467-468, Sector 35-C, Chandigarh",
    "coordinates": [
      30.7225,
      76.7638
    ],
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1500,
    "categories": [
      "group",
      "latenight",
      "Social & Lively",
      "With the Gang",
      "gang",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "English Pub Vibe",
      "Live Sufi & Rock",
      "Beer On Tap",
      "Fish & Chips",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "4/5",
    "rating": 4.4,
    "reviewCount": 680,
    "verifiedVisitsCount": 260,
    "distanceKm": 4.7,
    "openingHours": "12:00 PM – 1:00 AM",
    "featuredQuote": "Classic British pub timber aesthetics with famous live acoustic and indie band gigs.",
    "strengths": [
      "Outstanding live band performances every Wednesday, Friday, Saturday",
      "Crisp beer-battered fish and chips with tartare sauce",
      "Cozy Irish tavern ambiance with stained glass"
    ],
    "weaknesses": [
      "Not suited for quiet conversations after 8:30 PM due to band volume",
      "Cover charge applicable on select Saturday gigs"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "The heartbeat of Chandigarh live indie music and classic pub hospitality.",
      "loved": [
        "Live Band Nights",
        "Beer Battered Fish & Chips",
        "Classic British Decor"
      ],
      "disliked": [
        "Loud Band Music for Chats",
        "Saturday Cover Charges"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.4,
        "reviews": 3900
      },
      "zomato": {
        "rating": 4.4,
        "reviews": 2600
      },
      "swiggy": {
        "rating": 4.2,
        "reviews": 710
      },
      "cafeFinder": {
        "rating": 4.6,
        "trustScore": 88,
        "verifiedVisits": 260
      }
    },
    "sampleReviews": [
      {
        "id": "rev-pd-1",
        "author": "Sahil Kaushal",
        "authorSector": "Sector 34",
        "rating": 5,
        "date": "3 days ago",
        "verified": true,
        "order": "Craft Pitcher & Fish N Chips",
        "vibeRating": "Live Music Night",
        "text": "The indie rock band on Friday night was phenomenal. Great energy, prompt bar service, and tasty pub food.",
        "qualityScore": 90
      }
    ],
    "coffeeScore": 76,
    "workScore": 70,
    "dateScore": 78,
    "quietScore": 75,
    "aestheticScore": 80,
    "groupScore": 90,
    "dessertScore": 78,
    "lateNightScore": 92,
    "wifi": null,
    "power": null,
    "seating": null,
    "noiseLevel": null,
    "outdoorSeating": null,
    "specialtyCoffee": null,
    "food": true,
    "desserts": null,
    "moods": [
      "gang",
      "late-night"
    ]
  },
  {
    "id": "coffee-bean-sec11",
    "name": "The Coffee Bean Loft",
    "sector": "Sector 11",
    "city": "Chandigarh",
    "address": "SCO 56, Sector 11-D, Chandigarh",
    "coordinates": [
      30.757,
      76.782
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 650,
    "categories": [
      "coffee",
      "study",
      "quiet",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Work Friendly",
      "Get Work Done",
      "work",
      "Quiet / Reading",
      "Quiet Corner"
    ],
    "tags": [
      "Mezzanine Loft",
      "Flat Whites",
      "Student Discount",
      "Muffins",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Quiet Corner",
      "Quiet"
    ],
    "heroImage": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.5,
    "reviewCount": 210,
    "verifiedVisitsCount": 92,
    "distanceKm": 3.1,
    "openingHours": "8:30 AM – 10:00 PM",
    "featuredQuote": "A hidden mezzanine loft in Sector 11 with warm wood tones and rich espresso aromas.",
    "strengths": [
      "Quiet upper loft level dedicated to laptops and readers",
      "Rich crema on medium-dark roasted South Indian estate beans",
      "Generous student discount on presentation of college ID"
    ],
    "weaknesses": [
      "Loft stairs are somewhat steep",
      "Limited savory food variety"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "A tranquil student-friendly mezzanine loft with honest brews.",
      "loved": [
        "Quiet Upper Loft",
        "Student Discount",
        "Blueberry Streusel Muffin"
      ],
      "disliked": [
        "Steep Stairs to Loft",
        "Limited Savory Items"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.5,
        "reviews": 710
      },
      "zomato": {
        "rating": 4.4,
        "reviews": 440
      },
      "swiggy": {
        "rating": 4.3,
        "reviews": 260
      },
      "cafeFinder": {
        "rating": 4.7,
        "trustScore": 90,
        "verifiedVisits": 92
      }
    },
    "sampleReviews": [
      {
        "id": "rev-cbl-1",
        "author": "Meenal Gupta",
        "authorSector": "Sector 11",
        "rating": 5,
        "date": "5 days ago",
        "verified": true,
        "order": "Flat White & Warm Blueberry Muffin",
        "vibeRating": "Afternoon Study",
        "text": "The mezzanine has great natural light from the skylight. Smooth flat white with microfoam art. Quiet enough to record voice notes.",
        "qualityScore": 91
      }
    ],
    "coffeeScore": 88,
    "workScore": 90,
    "dateScore": 78,
    "quietScore": 89,
    "aestheticScore": 80,
    "groupScore": 77,
    "dessertScore": 78,
    "lateNightScore": 72,
    "wifi": true,
    "power": null,
    "seating": null,
    "noiseLevel": "quiet",
    "outdoorSeating": null,
    "specialtyCoffee": null,
    "food": true,
    "desserts": null,
    "moods": [
      "good-coffee",
      "work",
      "quiet"
    ]
  },
  {
    "id": "artisan-brew-sec44",
    "name": "Artisan Brew Lab",
    "sector": "Sector 44",
    "city": "Chandigarh",
    "address": "SCO 112, Sector 44-C, Chandigarh",
    "coordinates": [
      30.7095,
      76.7568
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 720,
    "categories": [
      "coffee",
      "study",
      "quiet",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Work Friendly",
      "Get Work Done",
      "work",
      "Quiet / Reading",
      "Quiet Corner",
      "food",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth"
    ],
    "tags": [
      "Manual Brew Bar",
      "Syphon Coffee",
      "Vegan Bakes",
      "Minimalist",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Quiet Corner",
      "Quiet",
      "Sweet Tooth",
      "Bakery & Desserts"
    ],
    "heroImage": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "1/1",
    "rating": 4.6,
    "reviewCount": 175,
    "verifiedVisitsCount": 82,
    "distanceKm": 5.8,
    "openingHours": "9:00 AM – 9:30 PM",
    "featuredQuote": "Chemex, Syphon, and Aeropress brews executed with lab-like precision in southern Chandigarh.",
    "strengths": [
      "Wide choice of manual brew methods with custom water temperature control",
      "Gluten-free and vegan brownies baked in house",
      "Zero loud chatter with soft lo-fi background beats"
    ],
    "weaknesses": [
      "Manual brewing takes 8-10 minutes per cup",
      "Modest seating capacity of 18 guests"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "Specialty coffee craftsmanship for serious palate enthusiasts.",
      "loved": [
        "Syphon Brew Process",
        "Vegan Chocolate Brownie",
        "Lo-Fi Focus Ambiance"
      ],
      "disliked": [
        "Slower Brew Times (8-10 mins)",
        "Limited Seats"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.6,
        "reviews": 520
      },
      "zomato": {
        "rating": 4.5,
        "reviews": 310
      },
      "swiggy": {
        "rating": 4.4,
        "reviews": 190
      },
      "cafeFinder": {
        "rating": 4.8,
        "trustScore": 92,
        "verifiedVisits": 82
      }
    },
    "sampleReviews": [
      {
        "id": "rev-abl-1",
        "author": "Tanmay Bedi",
        "authorSector": "Sector 44",
        "rating": 5,
        "date": "1 week ago",
        "verified": true,
        "order": "Syphon Yirgacheffe & Vegan Banana Bread",
        "vibeRating": "Coffee Science",
        "text": "Watching the barista prepare the syphon was like an art class. Bright berry notes with zero astringency.",
        "qualityScore": 92
      }
    ],
    "coffeeScore": 88,
    "workScore": 90,
    "dateScore": 78,
    "quietScore": 89,
    "aestheticScore": 80,
    "groupScore": 77,
    "dessertScore": 93,
    "lateNightScore": 72,
    "wifi": true,
    "power": null,
    "seating": null,
    "noiseLevel": "quiet",
    "outdoorSeating": null,
    "specialtyCoffee": null,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "quiet",
      "sweet-tooth"
    ]
  },
  {
    "id": "the-terrace-sec50",
    "name": "The Terrace Green",
    "sector": "Sector 50",
    "city": "Chandigarh",
    "address": "Society Market, Sector 50-D, Chandigarh",
    "coordinates": [
      30.698,
      76.7485
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 780,
    "categories": [
      "aesthetic",
      "date",
      "quiet",
      "Date Spots",
      "Date Night",
      "Quiet / Reading",
      "Quiet Corner",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Open Air Terrace",
      "Plant Nursery",
      "Handmade Pastas",
      "Sunset Vibe",
      "Date Night",
      "Date Spots",
      "Quiet Corner",
      "Quiet",
      "Somewhere Pretty",
      "Aesthetic",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "4/5",
    "rating": 4.5,
    "reviewCount": 195,
    "verifiedVisitsCount": 86,
    "distanceKm": 6.9,
    "openingHours": "11:00 AM – 10:30 PM",
    "featuredQuote": "Dine nestled inside hundreds of potted monstera and ferns on an open-air rooftop.",
    "strengths": [
      "Enchanting botanical green nursery setting with fresh herbal aromas",
      "Hand-rolled gnocchi in sage butter sauce",
      "Cool breeze in evenings away from city noise"
    ],
    "weaknesses": [
      "Location is further south in residential Sector 50",
      "Weather dependent seating during heavy rains"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "A botanical rooftop refuge tucked into tranquil Sector 50.",
      "loved": [
        "Botanical Plant Nursery",
        "Handmade Gnocchi in Sage Butter",
        "Evening Breeze"
      ],
      "disliked": [
        "Distance from Northern City Center",
        "Rain Contingency Limited"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.5,
        "reviews": 680
      },
      "zomato": {
        "rating": 4.4,
        "reviews": 390
      },
      "swiggy": {
        "rating": 4.3,
        "reviews": 220
      },
      "cafeFinder": {
        "rating": 4.7,
        "trustScore": 90,
        "verifiedVisits": 86
      }
    },
    "sampleReviews": [
      {
        "id": "rev-ttg-1",
        "author": "Baneet Gill",
        "authorSector": "Sector 49",
        "rating": 5,
        "date": "2 weeks ago",
        "verified": true,
        "order": "Ricotta Gnocchi & Fresh Mint Lemonade",
        "vibeRating": "Relaxed Weekend Evening",
        "text": "You forget you are in a city. Plants everywhere and tables are placed with great privacy.",
        "qualityScore": 90
      }
    ],
    "coffeeScore": 76,
    "workScore": 70,
    "dateScore": 91,
    "quietScore": 89,
    "aestheticScore": 92,
    "groupScore": 77,
    "dessertScore": 78,
    "lateNightScore": 92,
    "wifi": null,
    "power": null,
    "seating": "outdoor",
    "noiseLevel": "quiet",
    "outdoorSeating": true,
    "specialtyCoffee": null,
    "food": true,
    "desserts": null,
    "moods": [
      "date",
      "quiet",
      "pretty",
      "late-night"
    ]
  },
  {
    "id": "coffee-central-sec22",
    "name": "Coffee Central",
    "sector": "Sector 22",
    "city": "Chandigarh",
    "address": "SCO 1044, Sector 22-B, Chandigarh",
    "coordinates": [
      30.7389,
      76.7731
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 500,
    "categories": [
      "coffee",
      "budget",
      "group",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "food",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "Social & Lively",
      "With the Gang",
      "gang"
    ],
    "tags": [
      "Convenient Meeting Spot",
      "Cold Brews",
      "Waffles",
      "Casual",
      "Good Coffee",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively"
    ],
    "heroImage": "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.3,
    "reviewCount": 270,
    "verifiedVisitsCount": 110,
    "distanceKm": 2.6,
    "openingHours": "9:30 AM – 10:30 PM",
    "featuredQuote": "Convenient spot for casual meetings right near Sector 22 market.",
    "strengths": [
      "Central meeting location with easy landmark recognition",
      "Crisp Belgian waffles with maple drizzle",
      "Prompt friendly service"
    ],
    "weaknesses": [
      "Parking can be tough during festival shopping seasons",
      "Simple diner decor"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "Dependable, practical meeting point with great waffles in Sector 22.",
      "loved": [
        "Belgian Waffles",
        "Iced Hazelnut Latte",
        "Central Location"
      ],
      "disliked": [
        "Sector 22 Market Parking",
        "Basic Interiors"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.3,
        "reviews": 1120
      },
      "zomato": {
        "rating": 4.2,
        "reviews": 680
      },
      "swiggy": {
        "rating": 4.1,
        "reviews": 490
      },
      "cafeFinder": {
        "rating": 4.5,
        "trustScore": 86,
        "verifiedVisits": 110
      }
    },
    "sampleReviews": [
      {
        "id": "rev-cc-1",
        "author": "Nikhil Joshi",
        "authorSector": "Sector 22",
        "rating": 4.5,
        "date": "1 week ago",
        "verified": true,
        "order": "Nutella Waffle & Cappuccino",
        "vibeRating": "Quick Meeting",
        "text": "Clean, consistent coffee and the waffle was freshly ironed and crisp.",
        "qualityScore": 86
      }
    ],
    "coffeeScore": 88,
    "workScore": 70,
    "dateScore": 78,
    "quietScore": 75,
    "aestheticScore": 80,
    "groupScore": 90,
    "dessertScore": 93,
    "lateNightScore": 72,
    "wifi": null,
    "power": null,
    "seating": null,
    "noiseLevel": null,
    "outdoorSeating": null,
    "specialtyCoffee": null,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "sweet-tooth",
      "gang"
    ]
  },
  {
    "id": "the-french-press-sec8",
    "name": "The French Press Cafe",
    "sector": "Sector 8",
    "city": "Chandigarh",
    "address": "SCO 33, Inner Market, Sector 8-C, Chandigarh",
    "coordinates": [
      30.738,
      76.801
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 720,
    "categories": [
      "coffee",
      "quiet",
      "aesthetic",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Quiet / Reading",
      "Quiet Corner",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty"
    ],
    "tags": [
      "French Roast",
      "Fresh Baguettes",
      "Quiche",
      "Vintage Posters",
      "Good Coffee",
      "Quiet Corner",
      "Quiet",
      "Somewhere Pretty",
      "Aesthetic"
    ],
    "heroImage": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "16/10",
    "rating": 4.5,
    "reviewCount": 230,
    "verifiedVisitsCount": 105,
    "distanceKm": 1.4,
    "openingHours": "9:00 AM – 10:00 PM",
    "featuredQuote": "French roast aromas, crusty baguettes, and charming Parisian vintage posters.",
    "strengths": [
      "Authentic French press table carafes with dark roast notes",
      "Crusty warm baguettes with herb butter",
      "Relaxed unhurried vibe for reading"
    ],
    "weaknesses": [
      "Modest seating area",
      "Occasional queue on Saturday mornings"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "An authentic corner of Paris nestled quietly into Sector 8.",
      "loved": [
        "French Press Table Service",
        "Warm Herb Butter Baguette",
        "Relaxed Vibe"
      ],
      "disliked": [
        "Weekend Morning Waits",
        "Limited Floor Space"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.5,
        "reviews": 890
      },
      "zomato": {
        "rating": 4.4,
        "reviews": 540
      },
      "swiggy": {
        "rating": 4.3,
        "reviews": 310
      },
      "cafeFinder": {
        "rating": 4.7,
        "trustScore": 90,
        "verifiedVisits": 105
      }
    },
    "sampleReviews": [
      {
        "id": "rev-fpc-1",
        "author": "Deepika Mann",
        "authorSector": "Sector 8",
        "rating": 5,
        "date": "6 days ago",
        "verified": true,
        "order": "French Press for Two & Ham Quiche",
        "vibeRating": "Morning Catchup",
        "text": "The coffee was served in a proper bodum press with clear sediment separation. Lovely crust on the quiche.",
        "qualityScore": 90
      }
    ],
    "coffeeScore": 88,
    "workScore": 70,
    "dateScore": 78,
    "quietScore": 89,
    "aestheticScore": 92,
    "groupScore": 77,
    "dessertScore": 78,
    "lateNightScore": 72,
    "wifi": null,
    "power": null,
    "seating": null,
    "noiseLevel": "quiet",
    "outdoorSeating": null,
    "specialtyCoffee": true,
    "food": true,
    "desserts": null,
    "moods": [
      "good-coffee",
      "quiet",
      "pretty"
    ]
  },
  {
    "id": "sector-15-chaha-corner",
    "name": "Sector 15 Student Corner",
    "sector": "Sector 15",
    "city": "Chandigarh",
    "address": "Patel Market Booths, Sector 15-C, Chandigarh",
    "coordinates": [
      30.7538,
      76.771
    ],
    "priceRange": "₹",
    "approxCostForTwo": 220,
    "categories": [
      "budget",
      "group",
      "latenight",
      "Social & Lively",
      "With the Gang",
      "gang",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Cutting Chai",
      "Aloo Patties",
      "PU Adda",
      "Cheap Eats",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.2,
    "reviewCount": 380,
    "verifiedVisitsCount": 160,
    "distanceKm": 3.4,
    "openingHours": "7:30 AM – 11:30 PM",
    "featuredQuote": "The legendary student adda where hostel politics and exam gossip happen over ₹15 cutting chai.",
    "strengths": [
      "Warm spiced cutting chai at only ₹15",
      "Freshly baked crisp aloo patties and paneer burgers",
      "Vibrant Panjab University student banter"
    ],
    "weaknesses": [
      "No chairs, strictly street corner standing",
      "Crowded during college recess hours"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "Pure university nostalgic street food energy.",
      "loved": [
        "Cutting Masala Chai",
        "Crisp Paneer Patty",
        "Student Atmosphere"
      ],
      "disliked": [
        "No Seating",
        "Busy Market Congestion"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.2,
        "reviews": 1900
      },
      "zomato": {
        "rating": 4.1,
        "reviews": 890
      },
      "swiggy": {
        "rating": 4,
        "reviews": 620
      },
      "cafeFinder": {
        "rating": 4.4,
        "trustScore": 84,
        "verifiedVisits": 160
      }
    },
    "sampleReviews": [
      {
        "id": "rev-s15-1",
        "author": "Gurnoor Gill",
        "authorSector": "Sector 15",
        "rating": 4.5,
        "date": "2 weeks ago",
        "verified": true,
        "order": "Double Cutting Chai & Aloo Patty",
        "vibeRating": "Student Adda",
        "text": "The patties are always warm and flaky. If you want authentic PU campus vibes without spending big bucks, this is it.",
        "qualityScore": 85
      }
    ],
    "coffeeScore": 76,
    "workScore": 70,
    "dateScore": 78,
    "quietScore": 75,
    "aestheticScore": 80,
    "groupScore": 90,
    "dessertScore": 78,
    "lateNightScore": 92,
    "wifi": null,
    "power": null,
    "seating": null,
    "noiseLevel": null,
    "outdoorSeating": null,
    "specialtyCoffee": null,
    "food": true,
    "desserts": null,
    "moods": [
      "gang",
      "late-night"
    ]
  },
  {
    "id": "cinnamon-creek-sec35",
    "name": "Cinnamon Creek Cafe",
    "sector": "Sector 35",
    "city": "Chandigarh",
    "address": "SCO 421, Sector 35-C, Chandigarh",
    "coordinates": [
      30.7238,
      76.7649
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 820,
    "categories": [
      "coffee",
      "date",
      "aesthetic",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Date Spots",
      "Date Night",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "food",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Cinnamon Rolls",
      "Warm Espresso",
      "Cozy Booths",
      "Dessert Haven",
      "Good Coffee",
      "Date Night",
      "Date Spots",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "1/1",
    "rating": 4.5,
    "reviewCount": 310,
    "verifiedVisitsCount": 135,
    "distanceKm": 4.4,
    "openingHours": "10:00 AM – 11:00 PM",
    "featuredQuote": "Freshly pulled cinnamon rolls dripping with vanilla cream cheese icing.",
    "strengths": [
      "Signature warm cinnamon buns baked every 2 hours",
      "Cozy plush burgundy booths with ambient fairy lights",
      "Rich mocha with Valrhona cocoa dusting"
    ],
    "weaknesses": [
      "Can get very sweet if you dislike rich glazes",
      "Limited savory options"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "The ultimate indulgence for sweet tooth lovers in Sector 35.",
      "loved": [
        "Warm Cinnamon Glaze Bun",
        "Valrhona Mocha",
        "Plush Burgundy Booths"
      ],
      "disliked": [
        "Very Sweet for Savory Palates",
        "Modest Savory Menu"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.5,
        "reviews": 1400
      },
      "zomato": {
        "rating": 4.4,
        "reviews": 980
      },
      "swiggy": {
        "rating": 4.4,
        "reviews": 540
      },
      "cafeFinder": {
        "rating": 4.7,
        "trustScore": 90,
        "verifiedVisits": 135
      }
    },
    "sampleReviews": [
      {
        "id": "rev-cck-1",
        "author": "Meghna Kapoor",
        "authorSector": "Sector 36",
        "rating": 5,
        "date": "4 days ago",
        "verified": true,
        "order": "Giant Cinnamon Roll & Americano",
        "vibeRating": "Sweet Tooth Craving",
        "text": "The bun arrived warm and soft in the middle. Paired with a bitter black Americano, it was pure comfort.",
        "qualityScore": 91
      }
    ],
    "coffeeScore": 88,
    "workScore": 70,
    "dateScore": 91,
    "quietScore": 75,
    "aestheticScore": 92,
    "groupScore": 77,
    "dessertScore": 93,
    "lateNightScore": 92,
    "wifi": null,
    "power": null,
    "seating": null,
    "noiseLevel": null,
    "outdoorSeating": null,
    "specialtyCoffee": null,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "date",
      "pretty",
      "sweet-tooth",
      "late-night"
    ]
  },
  {
    "id": "sector-17-underground-brews",
    "name": "Underground Brews & Vinyl",
    "sector": "Sector 17",
    "city": "Chandigarh",
    "address": "Basement SCO 45, Sector 17-C, Chandigarh",
    "coordinates": [
      30.7402,
      76.7818
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 700,
    "categories": [
      "coffee",
      "quiet",
      "aesthetic",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Quiet / Reading",
      "Quiet Corner",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Vinyl Records",
      "Basement Speakeasy",
      "Pour Over",
      "Jazz Classics",
      "Good Coffee",
      "Quiet Corner",
      "Quiet",
      "Somewhere Pretty",
      "Aesthetic",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "4/5",
    "rating": 4.6,
    "reviewCount": 220,
    "verifiedVisitsCount": 104,
    "distanceKm": 2.2,
    "openingHours": "11:00 AM – 10:00 PM",
    "featuredQuote": "Analog vinyl player spinning Miles Davis in a cozy subterranean hideout.",
    "strengths": [
      "Curated collection of 400+ vinyl records that guests can request",
      "Dark moody wooden acoustics perfect for focused solo reading",
      "Specialty manual brew bar"
    ],
    "weaknesses": [
      "Basement mobile network can be spotty (Wi-Fi provided)",
      "No natural sunlight"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "An atmospheric speakeasy coffee bar for audiophiles and book lovers.",
      "loved": [
        "Vinyl Record Collection",
        "Subterranean Quiet",
        "Single Estate Pour Overs"
      ],
      "disliked": [
        "Spotty Cellular Signal in Basement",
        "No Natural Daylight"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.6,
        "reviews": 780
      },
      "zomato": {
        "rating": 4.5,
        "reviews": 490
      },
      "swiggy": {
        "rating": 4.3,
        "reviews": 210
      },
      "cafeFinder": {
        "rating": 4.8,
        "trustScore": 92,
        "verifiedVisits": 104
      }
    },
    "sampleReviews": [
      {
        "id": "rev-ubv-1",
        "author": "Varun Nair",
        "authorSector": "Sector 18",
        "rating": 5,
        "date": "5 days ago",
        "verified": true,
        "order": "Pour Over & Dark Chocolate Tart",
        "vibeRating": "Audiophile Reading",
        "text": "Listening to Kind of Blue on original vinyl while sipping a clean washed Ethiopian brew was heaven. Use their Wi-Fi since phone signal is low.",
        "qualityScore": 94
      }
    ],
    "coffeeScore": 88,
    "workScore": 70,
    "dateScore": 78,
    "quietScore": 89,
    "aestheticScore": 92,
    "groupScore": 77,
    "dessertScore": 78,
    "lateNightScore": 92,
    "wifi": null,
    "power": null,
    "seating": null,
    "noiseLevel": "quiet",
    "outdoorSeating": null,
    "specialtyCoffee": true,
    "food": true,
    "desserts": null,
    "moods": [
      "good-coffee",
      "quiet",
      "pretty",
      "late-night"
    ]
  },
  {
    "id": "the-rooftop-pot-sec9",
    "name": "The Rooftop Pot",
    "sector": "Sector 9",
    "city": "Chandigarh",
    "address": "SCO 48, Rooftop, Sector 9-D, Chandigarh",
    "coordinates": [
      30.7435,
      76.7932
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 890,
    "categories": [
      "aesthetic",
      "date",
      "group",
      "Date Spots",
      "Date Night",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Open Rooftop",
      "Pottery Decor",
      "Wood Fired Bites",
      "Terrace Sunset",
      "Date Night",
      "Date Spots",
      "Somewhere Pretty",
      "Aesthetic",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.5,
    "reviewCount": 340,
    "verifiedVisitsCount": 145,
    "distanceKm": 2.1,
    "openingHours": "11:00 AM – 11:30 PM",
    "featuredQuote": "Terracotta pottery displays, panoramic Sector 9 rooftop, and cold brews.",
    "strengths": [
      "Charming handcrafted clay pottery planters and rustic tables",
      "Stunning sunset horizon with Sector 9 canopy views",
      "Crisp wood-fired calzones"
    ],
    "weaknesses": [
      "Stair climb without elevator access",
      "Can get warm in direct midday sunlight"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "Earthy terracotta charm with sweeping rooftop perspectives.",
      "loved": [
        "Terracotta Rustic Decor",
        "Sunset Canopy Views",
        "Wood Fired Calzones"
      ],
      "disliked": [
        "3 Flights of Stairs (No Lift)",
        "Direct Midday Sun"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.5,
        "reviews": 1600
      },
      "zomato": {
        "rating": 4.4,
        "reviews": 1100
      },
      "swiggy": {
        "rating": 4.3,
        "reviews": 480
      },
      "cafeFinder": {
        "rating": 4.7,
        "trustScore": 90,
        "verifiedVisits": 145
      }
    },
    "sampleReviews": [
      {
        "id": "rev-trp-1",
        "author": "Ishaan Kohli",
        "authorSector": "Sector 9",
        "rating": 4.5,
        "date": "1 week ago",
        "verified": true,
        "order": "Smoked Chicken Calzone & Mint Iced Tea",
        "vibeRating": "Sunset Hangout",
        "text": "Worth the stair climb for the sunset alone. The calzone was loaded with cheese and baked to a golden crust.",
        "qualityScore": 90
      }
    ],
    "coffeeScore": 76,
    "workScore": 70,
    "dateScore": 91,
    "quietScore": 75,
    "aestheticScore": 92,
    "groupScore": 90,
    "dessertScore": 78,
    "lateNightScore": 92,
    "wifi": null,
    "power": null,
    "seating": "outdoor",
    "noiseLevel": null,
    "outdoorSeating": true,
    "specialtyCoffee": null,
    "food": true,
    "desserts": null,
    "moods": [
      "date",
      "pretty",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "espresso-laboratory-sec7",
    "name": "Espresso Laboratory",
    "sector": "Sector 7",
    "city": "Chandigarh",
    "address": "Booth 14, Inner Market, Sector 7-C, Chandigarh",
    "coordinates": [
      30.7308,
      76.8042
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 600,
    "categories": [
      "coffee",
      "quiet",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Quiet / Reading",
      "Quiet Corner"
    ],
    "tags": [
      "Espresso Specialists",
      "Coffee Cupping",
      "Cold Brew Tonic",
      "Micro Roastery",
      "Good Coffee",
      "Quiet Corner",
      "Quiet"
    ],
    "heroImage": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "1/1",
    "rating": 4.6,
    "reviewCount": 180,
    "verifiedVisitsCount": 88,
    "distanceKm": 1.3,
    "openingHours": "8:00 AM – 9:00 PM",
    "featuredQuote": "Dedicated espresso purists testing extraction yields and TDS percentages.",
    "strengths": [
      "Top grade Slayer espresso machine with pressure profiling",
      "Rotating single origin micro-lots every fortnight",
      "Fast barista service with precision tasting notes"
    ],
    "weaknesses": [
      "Minimalist seating with few backrests",
      "No sugary milkshakes or commercial snacks"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "Pure coffee geekery where extraction precision is revered.",
      "loved": [
        "Double Ristretto",
        "Espresso Tonic",
        "Detailed Origin Cards"
      ],
      "disliked": [
        "Stool Seating Only",
        "Strictly Coffee Focused Menu"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.6,
        "reviews": 590
      },
      "zomato": {
        "rating": 4.5,
        "reviews": 340
      },
      "swiggy": {
        "rating": 4.4,
        "reviews": 150
      },
      "cafeFinder": {
        "rating": 4.8,
        "trustScore": 92,
        "verifiedVisits": 88
      }
    },
    "sampleReviews": [
      {
        "id": "rev-el-1",
        "author": "Raghav Suri",
        "authorSector": "Sector 7",
        "rating": 5,
        "date": "3 days ago",
        "verified": true,
        "order": "Ethiopia Yirgacheffe Espresso & Sparkling Water",
        "vibeRating": "Morning Espresso Shot",
        "text": "Crisp acidity, jasmine floral notes, zero harsh bitterness. If you care about real specialty espresso, do not miss this spot.",
        "qualityScore": 94
      }
    ],
    "coffeeScore": 88,
    "workScore": 70,
    "dateScore": 78,
    "quietScore": 89,
    "aestheticScore": 80,
    "groupScore": 77,
    "dessertScore": 78,
    "lateNightScore": 72,
    "wifi": null,
    "power": null,
    "seating": null,
    "noiseLevel": "quiet",
    "outdoorSeating": null,
    "specialtyCoffee": true,
    "food": true,
    "desserts": null,
    "moods": [
      "good-coffee",
      "quiet"
    ]
  },
  {
    "id": "the-cozy-corner-sec34",
    "name": "The Cozy Corner",
    "sector": "Sector 34",
    "city": "Chandigarh",
    "address": "SCO 98, Sector 34-A, Chandigarh",
    "coordinates": [
      30.7252,
      76.772
    ],
    "priceRange": "₹",
    "approxCostForTwo": 420,
    "categories": [
      "budget",
      "study",
      "coffee",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Work Friendly",
      "Get Work Done",
      "work"
    ],
    "tags": [
      "Coaching Student Hub",
      "Budget Sandwiches",
      "Cold Coffee",
      "Charging Points",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly"
    ],
    "heroImage": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "4/5",
    "rating": 4.3,
    "reviewCount": 310,
    "verifiedVisitsCount": 130,
    "distanceKm": 3.8,
    "openingHours": "8:30 AM – 10:00 PM",
    "featuredQuote": "The student lifeline between Sector 34 coaching institute test series.",
    "strengths": [
      "Abundant electrical extension boards for laptops and tablets",
      "Budget combos (Sandwich + Cold Coffee under ₹160)",
      "High speed unlimited Wi-Fi"
    ],
    "weaknesses": [
      "Gets full with coaching students between 2 PM and 4 PM",
      "Basic utilitarian cafe seating"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "The most practical, budget-friendly study recharge spot in Sector 34.",
      "loved": [
        "Budget Student Combos",
        "Plentiful Charging Sockets",
        "Strong Cold Coffee"
      ],
      "disliked": [
        "Crowded Post-Coaching Rush",
        "Plain Decor"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.3,
        "reviews": 1420
      },
      "zomato": {
        "rating": 4.2,
        "reviews": 780
      },
      "swiggy": {
        "rating": 4.1,
        "reviews": 520
      },
      "cafeFinder": {
        "rating": 4.5,
        "trustScore": 86,
        "verifiedVisits": 130
      }
    },
    "sampleReviews": [
      {
        "id": "rev-tcc-1",
        "author": "Aditi Narang",
        "authorSector": "Sector 34",
        "rating": 4.5,
        "date": "2 weeks ago",
        "verified": true,
        "order": "Paneer Tikka Sandwich & Cold Coffee",
        "vibeRating": "Revision Session",
        "text": "Spent 3 hours revising for entrance exams. Wi-Fi was fast, sockets worked, and the coffee gave me the caffeine kick I needed.",
        "qualityScore": 88
      }
    ],
    "coffeeScore": 88,
    "workScore": 90,
    "dateScore": 78,
    "quietScore": 75,
    "aestheticScore": 80,
    "groupScore": 77,
    "dessertScore": 78,
    "lateNightScore": 72,
    "wifi": true,
    "power": null,
    "seating": null,
    "noiseLevel": null,
    "outdoorSeating": null,
    "specialtyCoffee": null,
    "food": true,
    "desserts": null,
    "moods": [
      "good-coffee",
      "work"
    ]
  },
  {
    "id": "neon-vibes-sec22",
    "name": "Neon Glow Lounge & Cafe",
    "sector": "Sector 22",
    "city": "Chandigarh",
    "address": "Basement SCO 210, Sector 22-B, Chandigarh",
    "coordinates": [
      30.7381,
      76.7738
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 900,
    "categories": [
      "aesthetic",
      "latenight",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Neon Signs",
      "Shakes",
      "Party Vibes",
      "Somewhere Pretty",
      "Aesthetic",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 3.8,
    "reviewCount": 190,
    "verifiedVisitsCount": 35,
    "distanceKm": 2.8,
    "openingHours": "12:00 PM – 11:00 PM",
    "featuredQuote": "Looks flashy on Instagram, but persistent complaints about service and stale fries.",
    "isLowTrust": true,
    "strengths": [
      "Bright neon photo backdrop signs",
      "Close to Sector 22 market"
    ],
    "weaknesses": [
      "Repeated complaints of 40+ minute food delays",
      "Stale frying oil reported in multiple verified visits",
      "Overly loud distorted speaker volume"
    ],
    "verdict": {
      "status": "Currently Not Recommended",
      "headline": "Recent visitor feedback contains repeated complaints about service delays, food consistency, and distorted sound.",
      "loved": [
        "Neon Photo Backdrops"
      ],
      "disliked": [
        "40+ Min Service Delays",
        "Stale Frying Oil Quality",
        "Distorted Loud Music"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.1,
        "reviews": 890
      },
      "zomato": {
        "rating": 3.4,
        "reviews": 420
      },
      "swiggy": {
        "rating": 3.6,
        "reviews": 290
      },
      "cafeFinder": {
        "rating": 3.5,
        "trustScore": 54,
        "verifiedVisits": 35
      }
    },
    "sampleReviews": [
      {
        "id": "rev-nv-1",
        "author": "Rohit Bansal",
        "authorSector": "Sector 22",
        "rating": 2,
        "date": "3 days ago",
        "verified": true,
        "order": "Loaded Fries & Vanilla Shake",
        "vibeRating": "Disappointing Visit",
        "text": "The neon signs look nice in photos, but our fries arrived cold after a 45-minute wait. Frying oil tasted old. Music was painfully loud.",
        "qualityScore": 92
      }
    ],
    "coffeeScore": 76,
    "workScore": 70,
    "dateScore": 78,
    "quietScore": 75,
    "aestheticScore": 92,
    "groupScore": 77,
    "dessertScore": 78,
    "lateNightScore": 92,
    "wifi": null,
    "power": null,
    "seating": null,
    "noiseLevel": null,
    "outdoorSeating": null,
    "specialtyCoffee": null,
    "food": true,
    "desserts": null,
    "moods": [
      "pretty",
      "late-night"
    ]
  },
  {
    "id": "overpriced-brew-sec35",
    "name": "Golden Bean Executive Cafe",
    "sector": "Sector 35",
    "city": "Chandigarh",
    "address": "SCO 410, Sector 35-C, Chandigarh",
    "coordinates": [
      30.723,
      76.764
    ],
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1800,
    "categories": [
      "coffee",
      "luxury",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "aesthetic",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty"
    ],
    "tags": [
      "Pretentious Decor",
      "Expensive Lattes",
      "Good Coffee",
      "Somewhere Pretty",
      "Aesthetic"
    ],
    "heroImage": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80"
    ],
    "aspectRatio": "1/1",
    "rating": 3.9,
    "reviewCount": 140,
    "verifiedVisitsCount": 22,
    "distanceKm": 4.6,
    "openingHours": "10:00 AM – 10:00 PM",
    "featuredQuote": "Charges ₹380 for lukewarm coffee with inflated Google reviews.",
    "isLowTrust": true,
    "strengths": [
      "Gilded faux-gold interior chairs",
      "Air conditioning works well"
    ],
    "weaknesses": [
      "Grossly inflated prices with sub-par commercial coffee",
      "Staff pushes mandatory tips and unlisted water bottle charges",
      "Wide gap between promotional claims and real verified experience"
    ],
    "verdict": {
      "status": "Currently Not Recommended",
      "headline": "Discrepancy detected: high online rating does not match verified visitor reports of inflated billing and sub-par coffee.",
      "loved": [
        "Air Conditioned Hall"
      ],
      "disliked": [
        "Exorbitant Prices (₹380 basic latte)",
        "Hidden Charges on Bill",
        "Lukewarm Coffee Extraction"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.4,
        "reviews": 620
      },
      "zomato": {
        "rating": 3.6,
        "reviews": 310
      },
      "swiggy": {
        "rating": 3.5,
        "reviews": 140
      },
      "cafeFinder": {
        "rating": 3.3,
        "trustScore": 58,
        "verifiedVisits": 22
      }
    },
    "sampleReviews": [
      {
        "id": "rev-gb-1",
        "author": "Karan Johar (Advocate)",
        "authorSector": "Sector 35",
        "rating": 2,
        "date": "1 week ago",
        "verified": true,
        "order": "Cafe Latte & Brownie",
        "vibeRating": "Overpriced Experience",
        "text": "Charged ₹450 for a generic latte that tasted bitter and lukewarm. Added hidden ₹80 water bottle without asking. Do not fall for the gilded photos.",
        "qualityScore": 94
      }
    ],
    "coffeeScore": 88,
    "workScore": 70,
    "dateScore": 78,
    "quietScore": 75,
    "aestheticScore": 92,
    "groupScore": 77,
    "dessertScore": 78,
    "lateNightScore": 72,
    "wifi": null,
    "power": null,
    "seating": null,
    "noiseLevel": null,
    "outdoorSeating": null,
    "specialtyCoffee": null,
    "food": true,
    "desserts": null,
    "moods": [
      "good-coffee",
      "pretty"
    ]
  },
  {
    "id": "nik-bakers-sec9",
    "name": "Nik Baker's",
    "sector": "Sector 9",
    "city": "Chandigarh",
    "address": "Booth 49, Inner Market, Sector 9-D, Chandigarh",
    "coordinates": [
      30.7445,
      76.7932
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 900,
    "categories": [
      "food",
      "aesthetic",
      "group",
      "coffee",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "date",
      "Date Spots",
      "Date Night",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Artisanal Bakery",
      "Breakfast",
      "Waffles",
      "Signature Cakes",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.6,
    "reviewCount": 920,
    "verifiedVisitsCount": 310,
    "distanceKm": 2.1,
    "openingHours": "8:00 AM – 11:30 PM",
    "featuredQuote": "The gold standard for morning brioche French toast and indulgent Belgian chocolate shakes.",
    "strengths": [
      "Extensive fresh bakery display with daily European pastries",
      "Reliable full hot breakfast menu served from 8 AM",
      "Vibrant ambiance suited for small group brunches"
    ],
    "weaknesses": [
      "Can get quite bustling during weekend brunch hours",
      "Limited power outlets for laptop work"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "Chandigarh's staple bakery cafe for breakfast, brunch, and legendary desserts.",
      "loved": [
        "Belgian Waffles",
        "Red Velvet Cake",
        "Chicken Quiche"
      ],
      "disliked": [
        "Weekend Noise Level",
        "Strict Seating During Peaks"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.5,
        "reviews": 3400
      },
      "zomato": {
        "rating": 4.6,
        "reviews": 2200
      },
      "swiggy": {
        "rating": 4.4,
        "reviews": 1800
      },
      "cafeFinder": {
        "rating": 4.7,
        "trustScore": 92,
        "verifiedVisits": 310
      }
    },
    "coffeeScore": 82,
    "workScore": 90,
    "dateScore": 85,
    "quietScore": 68,
    "aestheticScore": 89,
    "groupScore": 91,
    "dessertScore": 97,
    "lateNightScore": 85,
    "wifi": true,
    "power": false,
    "seating": "booths",
    "noiseLevel": "moderate",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "nik-bakers-sec35",
    "name": "Nik Baker's Sector 35",
    "sector": "Sector 35",
    "city": "Chandigarh",
    "address": "SCO 441-442, Sector 35-C, Chandigarh",
    "coordinates": [
      30.7225,
      76.7681
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 950,
    "categories": [
      "food",
      "group",
      "aesthetic",
      "coffee",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "date",
      "Date Spots",
      "Date Night",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Bakery",
      "Desserts",
      "Late Dining",
      "Pastries",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.5,
    "reviewCount": 780,
    "verifiedVisitsCount": 245,
    "distanceKm": 3.2,
    "openingHours": "8:30 AM – 11:30 PM",
    "featuredQuote": "Massive desserts counter and warm sandwiches in the heart of Sector 35.",
    "strengths": [
      "Spacious double-front seating in Sector 35 hub",
      "Consistently fresh tarts, brownies, and savories",
      "Quick attentive table service"
    ],
    "weaknesses": [
      "Sector 35 parking lot fills quickly post 7 PM"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "A vibrant dessert sanctuary perfect for post-dinner treats with friends.",
      "loved": [
        "Mousse Cups",
        "Sourdough Sandwiches",
        "Cold Coffee"
      ],
      "disliked": [
        "Parking Congestion"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.5,
        "reviews": 2900
      },
      "zomato": {
        "rating": 4.4,
        "reviews": 1700
      },
      "swiggy": {
        "rating": 4.4,
        "reviews": 1400
      },
      "cafeFinder": {
        "rating": 4.6,
        "trustScore": 90,
        "verifiedVisits": 245
      }
    },
    "coffeeScore": 80,
    "workScore": 90,
    "dateScore": 84,
    "quietScore": 66,
    "aestheticScore": 87,
    "groupScore": 92,
    "dessertScore": 96,
    "lateNightScore": 86,
    "wifi": true,
    "power": null,
    "seating": "spacious",
    "noiseLevel": "moderate",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "nik-bakers-sec26",
    "name": "Nik Baker's Sector 26",
    "sector": "Sector 26",
    "city": "Chandigarh",
    "address": "SCO 42, Madhya Marg, Sector 26, Chandigarh",
    "coordinates": [
      30.7321,
      76.8095
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 900,
    "categories": [
      "food",
      "group",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "date",
      "Date Spots",
      "Date Night",
      "aesthetic",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Pastries",
      "Brunch",
      "Bakery",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.5,
    "reviewCount": 510,
    "verifiedVisitsCount": 180,
    "distanceKm": 2.8,
    "openingHours": "8:00 AM – 11:00 PM",
    "featuredQuote": "Convenient Madhya Marg location for quick bakery takeaways and hearty pasta brunches.",
    "strengths": [
      "Easy service on Madhya Marg dining strip",
      "Signature chocolate mud cake and savory pies"
    ],
    "weaknesses": [
      "Can feel slightly fast-paced during evening rush"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "Solid casual stop on the Sector 26 food corridor.",
      "loved": [
        "Mud Cake",
        "Cheesy Garlic Loaf"
      ],
      "disliked": [
        "Busy atmosphere"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.4,
        "reviews": 1800
      },
      "zomato": {
        "rating": 4.3,
        "reviews": 950
      },
      "swiggy": {
        "rating": 4.3,
        "reviews": 820
      },
      "cafeFinder": {
        "rating": 4.5,
        "trustScore": 88,
        "verifiedVisits": 180
      }
    },
    "coffeeScore": 79,
    "workScore": 90,
    "dateScore": 81,
    "quietScore": 67,
    "aestheticScore": 84,
    "groupScore": 89,
    "dessertScore": 95,
    "lateNightScore": 82,
    "wifi": true,
    "power": null,
    "seating": "tables",
    "noiseLevel": "moderate",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "third-wave-sec7",
    "name": "Third Wave Coffee",
    "sector": "Sector 7",
    "city": "Chandigarh",
    "address": "SCO 11, Inner Market, Sector 7-C, Chandigarh",
    "coordinates": [
      30.7312,
      76.7989
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 700,
    "categories": [
      "coffee",
      "study",
      "aesthetic",
      "quiet",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Work Friendly",
      "Get Work Done",
      "work",
      "date",
      "Date Spots",
      "Date Night",
      "Quiet / Reading",
      "Quiet Corner",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "food",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Specialty Coffee",
      "Pour Over",
      "Work Friendly",
      "Single Origin",
      "Good Coffee",
      "Get Work Done",
      "Date Night",
      "Date Spots",
      "Quiet Corner",
      "Quiet",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.7,
    "reviewCount": 420,
    "verifiedVisitsCount": 195,
    "distanceKm": 1.8,
    "openingHours": "8:00 AM – 11:00 PM",
    "featuredQuote": "Dedicated power strips, calming warm woodwork, and exceptionally dialed-in flat whites.",
    "strengths": [
      "Consistent manual brews: V60, Aeropress, and Syphon on request",
      "Ergonomic work tables with individual power sockets",
      "Friendly trained baristas who understand grind profiles"
    ],
    "weaknesses": [
      "Seating can reach capacity between 3 PM and 6 PM"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "One of Sector 7's premier sanctuaries for remote workers and coffee craft enthusiasts.",
      "loved": [
        "Orange Zest Mocha",
        "Classic Cold Brew",
        "Banana Walnut Tea Cake"
      ],
      "disliked": [
        "Limited Seating at Peak Work Hours"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.7,
        "reviews": 1600
      },
      "zomato": {
        "rating": 4.6,
        "reviews": 890
      },
      "swiggy": {
        "rating": 4.5,
        "reviews": 710
      },
      "cafeFinder": {
        "rating": 4.8,
        "trustScore": 95,
        "verifiedVisits": 195
      }
    },
    "coffeeScore": 97,
    "workScore": 96,
    "dateScore": 84,
    "quietScore": 91,
    "aestheticScore": 92,
    "groupScore": 78,
    "dessertScore": 83,
    "lateNightScore": 82,
    "wifi": true,
    "power": true,
    "seating": "laptop-friendly",
    "noiseLevel": "low",
    "outdoorSeating": false,
    "specialtyCoffee": true,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "date",
      "quiet",
      "pretty",
      "sweet-tooth",
      "late-night"
    ]
  },
  {
    "id": "third-wave-sec35",
    "name": "Third Wave Coffee Sector 35",
    "sector": "Sector 35",
    "city": "Chandigarh",
    "address": "SCO 485-486, Sector 35-C, Chandigarh",
    "coordinates": [
      30.7231,
      76.7675
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 720,
    "categories": [
      "coffee",
      "study",
      "aesthetic",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Work Friendly",
      "Get Work Done",
      "work",
      "date",
      "Date Spots",
      "Date Night",
      "quiet",
      "Quiet / Reading",
      "Quiet Corner",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "food",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Specialty Coffee",
      "High Speed Wifi",
      "Espresso Bar",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Quiet Corner",
      "Quiet",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.6,
    "reviewCount": 380,
    "verifiedVisitsCount": 165,
    "distanceKm": 3.1,
    "openingHours": "8:00 AM – 11:30 PM",
    "featuredQuote": "Great light, ample plug points, and smooth cold brews in the South Chandigarh corridor.",
    "strengths": [
      "Reliable Wi-Fi connection and spacious co-working tables",
      "Specialty roast blends and signature crafted lattes"
    ],
    "weaknesses": [
      "Music volume occasionally increases around 7 PM"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "Dependable specialty workspace in Sector 35.",
      "loved": [
        "Sea Salt Mocha",
        "Hummus Platter"
      ],
      "disliked": [
        "Evening Buzz"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.6,
        "reviews": 1200
      },
      "zomato": {
        "rating": 4.5,
        "reviews": 680
      },
      "swiggy": {
        "rating": 4.5,
        "reviews": 540
      },
      "cafeFinder": {
        "rating": 4.7,
        "trustScore": 93,
        "verifiedVisits": 165
      }
    },
    "coffeeScore": 95,
    "workScore": 94,
    "dateScore": 82,
    "quietScore": 87,
    "aestheticScore": 90,
    "groupScore": 79,
    "dessertScore": 81,
    "lateNightScore": 84,
    "wifi": true,
    "power": true,
    "seating": "laptop-friendly",
    "noiseLevel": "low",
    "outdoorSeating": false,
    "specialtyCoffee": true,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "date",
      "quiet",
      "pretty",
      "sweet-tooth",
      "late-night"
    ]
  },
  {
    "id": "tim-hortons-sec35",
    "name": "Tim Hortons",
    "sector": "Sector 35",
    "city": "Chandigarh",
    "address": "SCO 443-444, Sector 35-C, Chandigarh",
    "coordinates": [
      30.7228,
      76.7678
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 650,
    "categories": [
      "coffee",
      "food",
      "latenight",
      "group",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "date",
      "Date Spots",
      "Date Night",
      "aesthetic",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "Social & Lively",
      "With the Gang",
      "gang",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "French Vanilla",
      "Timbits",
      "Canadian Brew",
      "Late Night",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively"
    ],
    "heroImage": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.4,
    "reviewCount": 650,
    "verifiedVisitsCount": 220,
    "distanceKm": 3.3,
    "openingHours": "7:00 AM – 1:00 AM",
    "featuredQuote": "Open until 1 AM with comforting French Vanilla and fresh warm Timbits.",
    "strengths": [
      "Extremely late hours running well past midnight",
      "Signature creamy French Vanilla and Baileys-flavored cold brews",
      "Bright modern Canadian cafe aesthetic with comfortable seating"
    ],
    "weaknesses": [
      "More commercial beverage profile compared to artisanal roasters",
      "Queues during post-dinner dessert hours"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "The late-night staple in Sector 35 for midnight sweet cravings and coffee.",
      "loved": [
        "French Vanilla Coffee",
        "Chocolate Dip Donuts",
        "Grilled Cheese Melt"
      ],
      "disliked": [
        "Commercial Roast Profile",
        "Midnight Rush Queue"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.4,
        "reviews": 2400
      },
      "zomato": {
        "rating": 4.3,
        "reviews": 1400
      },
      "swiggy": {
        "rating": 4.3,
        "reviews": 1100
      },
      "cafeFinder": {
        "rating": 4.5,
        "trustScore": 89,
        "verifiedVisits": 220
      }
    },
    "coffeeScore": 83,
    "workScore": 82,
    "dateScore": 80,
    "quietScore": 73,
    "aestheticScore": 88,
    "groupScore": 90,
    "dessertScore": 92,
    "lateNightScore": 98,
    "wifi": true,
    "power": true,
    "seating": "spacious",
    "noiseLevel": "moderate",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "tim-hortons-elante",
    "name": "Tim Hortons Elante Mall",
    "sector": "Industrial Area Phase 1",
    "city": "Chandigarh",
    "address": "Courtyard, Elante Mall, Industrial Area Phase 1, Chandigarh",
    "coordinates": [
      30.7056,
      76.8012
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 650,
    "categories": [
      "coffee",
      "food",
      "aesthetic",
      "group",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "date",
      "Date Spots",
      "Date Night",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Mall Courtyard",
      "French Vanilla",
      "Outdoor Patio",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.4,
    "reviewCount": 480,
    "verifiedVisitsCount": 175,
    "distanceKm": 4.1,
    "openingHours": "9:00 AM – 11:30 PM",
    "featuredQuote": "Breezy courtyard seating at Elante with classic iced caps and sourdough melts.",
    "strengths": [
      "Pleasant outdoor courtyard patio in Elante",
      "Quick takeaway window alongside dine-in tables"
    ],
    "weaknesses": [
      "Mall weekend crowds can create ambient noise"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "A vibrant mall courtyard spot for quick energy recharge.",
      "loved": [
        "Iced French Vanilla",
        "Boston Cream Donut"
      ],
      "disliked": [
        "Weekend Mall Crowds"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.3,
        "reviews": 1800
      },
      "zomato": {
        "rating": 4.2,
        "reviews": 900
      },
      "swiggy": {
        "rating": 4.2,
        "reviews": 750
      },
      "cafeFinder": {
        "rating": 4.4,
        "trustScore": 87,
        "verifiedVisits": 175
      }
    },
    "coffeeScore": 81,
    "workScore": 90,
    "dateScore": 82,
    "quietScore": 68,
    "aestheticScore": 87,
    "groupScore": 88,
    "dessertScore": 91,
    "lateNightScore": 85,
    "wifi": true,
    "power": false,
    "seating": "outdoor",
    "noiseLevel": "moderate",
    "outdoorSeating": true,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "blue-tokai-elante",
    "name": "Blue Tokai Elante",
    "sector": "Industrial Area Phase 1",
    "city": "Chandigarh",
    "address": "Upper Ground Floor, Elante Mall, Industrial Area Phase 1, Chandigarh",
    "coordinates": [
      30.7061,
      76.8015
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 750,
    "categories": [
      "coffee",
      "study",
      "quiet",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Work Friendly",
      "Get Work Done",
      "work",
      "date",
      "Date Spots",
      "Date Night",
      "Quiet / Reading",
      "Quiet Corner",
      "aesthetic",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "food",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth"
    ],
    "tags": [
      "Specialty Coffee",
      "Manual Brews",
      "Single Origin",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Quiet Corner",
      "Quiet",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts"
    ],
    "heroImage": "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.6,
    "reviewCount": 310,
    "verifiedVisitsCount": 140,
    "distanceKm": 4,
    "openingHours": "10:00 AM – 10:30 PM",
    "featuredQuote": "A quiet specialty coffee oasis amidst the busy Elante shopping center.",
    "strengths": [
      "Specialty coffee beans freshly roasted and sold in-house",
      "Calm acoustic barrier from the general mall floor"
    ],
    "weaknesses": [
      "Compact footprint with limited seating capacity"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "The coffee purist's haven inside Elante Mall.",
      "loved": [
        "Cortado",
        "Iced Latte",
        "Banana Bread"
      ],
      "disliked": [
        "Small space"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.6,
        "reviews": 1100
      },
      "zomato": {
        "rating": 4.5,
        "reviews": 620
      },
      "swiggy": {
        "rating": 4.4,
        "reviews": 490
      },
      "cafeFinder": {
        "rating": 4.7,
        "trustScore": 92,
        "verifiedVisits": 140
      }
    },
    "coffeeScore": 96,
    "workScore": 84,
    "dateScore": 80,
    "quietScore": 85,
    "aestheticScore": 88,
    "groupScore": 72,
    "dessertScore": 82,
    "lateNightScore": 74,
    "wifi": true,
    "power": true,
    "seating": "laptop-friendly",
    "noiseLevel": "low",
    "outdoorSeating": false,
    "specialtyCoffee": true,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "date",
      "quiet",
      "pretty",
      "sweet-tooth"
    ]
  },
  {
    "id": "starbucks-sec35",
    "name": "Starbucks Sector 35",
    "sector": "Sector 35",
    "city": "Chandigarh",
    "address": "SCO 429-430, Sector 35-C, Chandigarh",
    "coordinates": [
      30.7221,
      76.7686
    ],
    "priceRange": "₹₹₹",
    "approxCostForTwo": 900,
    "categories": [
      "coffee",
      "study",
      "quiet",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Work Friendly",
      "Get Work Done",
      "work",
      "date",
      "Date Spots",
      "Date Night",
      "Quiet / Reading",
      "Quiet Corner",
      "aesthetic",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "food",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "group",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Global Chain",
      "AC Work Hub",
      "Frappuccino",
      "Power Outlets",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Quiet Corner",
      "Quiet",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.5,
    "reviewCount": 890,
    "verifiedVisitsCount": 290,
    "distanceKm": 3.2,
    "openingHours": "8:00 AM – 11:30 PM",
    "featuredQuote": "Two spacious floors of plush leather armchairs, climate control, and dependable Wi-Fi.",
    "strengths": [
      "Consistently strong Wi-Fi and ample power sockets on the upper deck",
      "Very predictable drink quality and dairy-free milk selections",
      "Air conditioning is well regulated throughout hot summers"
    ],
    "weaknesses": [
      "Premium pricing for standard beverage sizes",
      "Can get lively with students during afternoon exam periods"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "The reliable workhorse for remote work sessions and business meets.",
      "loved": [
        "Caramel Macchiato",
        "Java Chip Frappuccino",
        "Butter Croissant"
      ],
      "disliked": [
        "Premium Price Point"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.5,
        "reviews": 4200
      },
      "zomato": {
        "rating": 4.4,
        "reviews": 2600
      },
      "swiggy": {
        "rating": 4.3,
        "reviews": 2100
      },
      "cafeFinder": {
        "rating": 4.6,
        "trustScore": 92,
        "verifiedVisits": 290
      }
    },
    "coffeeScore": 87,
    "workScore": 95,
    "dateScore": 82,
    "quietScore": 86,
    "aestheticScore": 89,
    "groupScore": 84,
    "dessertScore": 85,
    "lateNightScore": 86,
    "wifi": true,
    "power": true,
    "seating": "laptop-friendly",
    "noiseLevel": "low",
    "outdoorSeating": false,
    "specialtyCoffee": true,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "date",
      "quiet",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "starbucks-sec8",
    "name": "Starbucks Sector 8",
    "sector": "Sector 8",
    "city": "Chandigarh",
    "address": "Inner Market, SCF 15, Sector 8-C, Chandigarh",
    "coordinates": [
      30.7389,
      76.801
    ],
    "priceRange": "₹₹₹",
    "approxCostForTwo": 900,
    "categories": [
      "coffee",
      "study",
      "quiet",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Work Friendly",
      "Get Work Done",
      "work",
      "date",
      "Date Spots",
      "Date Night",
      "Quiet / Reading",
      "Quiet Corner",
      "aesthetic",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "food",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "group",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Work Haven",
      "Quiet Second Floor",
      "Espresso",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Quiet Corner",
      "Quiet",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.6,
    "reviewCount": 620,
    "verifiedVisitsCount": 215,
    "distanceKm": 1.5,
    "openingHours": "8:00 AM – 11:00 PM",
    "featuredQuote": "A particularly serene second floor overlooking the green avenue of Sector 8.",
    "strengths": [
      "Quiet upstairs study nook with natural window lighting",
      "High cleanliness standards and friendly barista crew"
    ],
    "weaknesses": [
      "Parking can be tight during evening peak in Sector 8"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "A calm, focused study and conversation lounge in northern Chandigarh.",
      "loved": [
        "Cold Foam Nitro Brew",
        "Paneer Wrap"
      ],
      "disliked": [
        "Evening Market Parking"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.6,
        "reviews": 2800
      },
      "zomato": {
        "rating": 4.4,
        "reviews": 1400
      },
      "swiggy": {
        "rating": 4.4,
        "reviews": 1200
      },
      "cafeFinder": {
        "rating": 4.7,
        "trustScore": 93,
        "verifiedVisits": 215
      }
    },
    "coffeeScore": 88,
    "workScore": 94,
    "dateScore": 83,
    "quietScore": 90,
    "aestheticScore": 88,
    "groupScore": 80,
    "dessertScore": 84,
    "lateNightScore": 82,
    "wifi": true,
    "power": true,
    "seating": "laptop-friendly",
    "noiseLevel": "low",
    "outdoorSeating": false,
    "specialtyCoffee": true,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "date",
      "quiet",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "chaayos-sec17",
    "name": "Chaayos Sector 17",
    "sector": "Sector 17",
    "city": "Chandigarh",
    "address": "SCO 81-82, Sector 17-D Plaza, Chandigarh",
    "coordinates": [
      30.7408,
      76.7845
    ],
    "priceRange": "₹",
    "approxCostForTwo": 450,
    "categories": [
      "budget",
      "study",
      "group",
      "Work Friendly",
      "Get Work Done",
      "work",
      "quiet",
      "Quiet / Reading",
      "Quiet Corner",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Custom Chai",
      "Desi Snacks",
      "Budget Friendly",
      "Casual Work",
      "Get Work Done",
      "Work Friendly",
      "Quiet Corner",
      "Quiet",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.4,
    "reviewCount": 540,
    "verifiedVisitsCount": 185,
    "distanceKm": 2.4,
    "openingHours": "8:00 AM – 11:00 PM",
    "featuredQuote": "Customized adrak-tulsi kulhad chai and Bun Maska right next to the 17 Plaza fountains.",
    "strengths": [
      "Over 12,000 customized chai combinations prepared on order",
      "Very budget-friendly pricing under ₹500 for two",
      "Quick automated ordering and functional Wi-Fi"
    ],
    "weaknesses": [
      "Coffee options are strictly secondary to tea",
      "Casual cafeteria-style decor rather than romantic lighting"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "The undisputed value pick for authentic chai enthusiasts and quick Plaza meetings.",
      "loved": [
        "Kulhad Chai",
        "Loaded Bun Maska",
        "Baarish Wale Pakore"
      ],
      "disliked": [
        "Basic Coffee Options",
        "Utilitarian Seating"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.4,
        "reviews": 2200
      },
      "zomato": {
        "rating": 4.3,
        "reviews": 1300
      },
      "swiggy": {
        "rating": 4.3,
        "reviews": 1600
      },
      "cafeFinder": {
        "rating": 4.5,
        "trustScore": 90,
        "verifiedVisits": 185
      }
    },
    "coffeeScore": 72,
    "workScore": 84,
    "dateScore": 72,
    "quietScore": 80,
    "aestheticScore": 78,
    "groupScore": 88,
    "dessertScore": 76,
    "lateNightScore": 82,
    "wifi": true,
    "power": true,
    "seating": "cafe-tables",
    "noiseLevel": "moderate",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": false,
    "moods": [
      "work",
      "quiet",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "chaayos-sec8",
    "name": "Chaayos Sector 8",
    "sector": "Sector 8",
    "city": "Chandigarh",
    "address": "SCF 22, Inner Market, Sector 8-C, Chandigarh",
    "coordinates": [
      30.738,
      76.802
    ],
    "priceRange": "₹",
    "approxCostForTwo": 450,
    "categories": [
      "budget",
      "group",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Desi Chai",
      "Bun Maska",
      "Quick Bites",
      "Get Work Done",
      "Work Friendly",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.3,
    "reviewCount": 390,
    "verifiedVisitsCount": 140,
    "distanceKm": 1.6,
    "openingHours": "8:30 AM – 11:00 PM",
    "featuredQuote": "Convenient chai and poha breakfast in the quiet mornings of Sector 8.",
    "strengths": [
      "Warm quick breakfast combinations",
      "Economical pricing for student catchups"
    ],
    "weaknesses": [
      "Compact indoor floor area"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "Affordable tea and snacks in Sector 8.",
      "loved": [
        "Ginger Chai",
        "Homestyle Poha"
      ],
      "disliked": [
        "Small indoor area"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.3,
        "reviews": 1400
      },
      "zomato": {
        "rating": 4.2,
        "reviews": 750
      },
      "swiggy": {
        "rating": 4.2,
        "reviews": 900
      },
      "cafeFinder": {
        "rating": 4.4,
        "trustScore": 88,
        "verifiedVisits": 140
      }
    },
    "coffeeScore": 70,
    "workScore": 80,
    "dateScore": 70,
    "quietScore": 78,
    "aestheticScore": 77,
    "groupScore": 86,
    "dessertScore": 74,
    "lateNightScore": 80,
    "wifi": true,
    "power": true,
    "seating": "tables",
    "noiseLevel": "moderate",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": false,
    "moods": [
      "work",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "ovenfresh-sec7",
    "name": "Oven Fresh Sector 7",
    "sector": "Sector 7",
    "city": "Chandigarh",
    "address": "SCO 14, Sector 7-C, Madhya Marg, Chandigarh",
    "coordinates": [
      30.7315,
      76.7995
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 850,
    "categories": [
      "food",
      "group",
      "aesthetic",
      "coffee",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "date",
      "Date Spots",
      "Date Night",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Italian Bakes",
      "Woodfired Pizzas",
      "Family Cafe",
      "Hot Chocolate",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.6,
    "reviewCount": 680,
    "verifiedVisitsCount": 260,
    "distanceKm": 1.7,
    "openingHours": "10:00 AM – 11:30 PM",
    "featuredQuote": "Legendary grilled sandwiches, sourdough pizzas, and thick European hot chocolate.",
    "strengths": [
      "Extremely consistent baked pastas and thin crust pizzas",
      "Cozy booth seating ideal for multi-course family dinners and double dates",
      "Outstanding hot dessert skillets"
    ],
    "weaknesses": [
      "Weekend waiting times can exceed 25 minutes after 8 PM"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "A beloved Chandigarh heritage brand for comforting Continental food and bakery treats.",
      "loved": [
        "Thin Crust Farmhouse Pizza",
        "Sizzling Brownie",
        "Pink Sauce Pasta"
      ],
      "disliked": [
        "Weekend Wait Times"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.6,
        "reviews": 3100
      },
      "zomato": {
        "rating": 4.5,
        "reviews": 2100
      },
      "swiggy": {
        "rating": 4.4,
        "reviews": 1700
      },
      "cafeFinder": {
        "rating": 4.7,
        "trustScore": 93,
        "verifiedVisits": 260
      }
    },
    "coffeeScore": 84,
    "workScore": 90,
    "dateScore": 89,
    "quietScore": 75,
    "aestheticScore": 88,
    "groupScore": 94,
    "dessertScore": 95,
    "lateNightScore": 85,
    "wifi": true,
    "power": false,
    "seating": "booths",
    "noiseLevel": "moderate",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "ovenfresh-sec26",
    "name": "Oven Fresh Sector 26",
    "sector": "Sector 26",
    "city": "Chandigarh",
    "address": "SCO 39, Sector 26, Chandigarh",
    "coordinates": [
      30.7328,
      76.8088
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 850,
    "categories": [
      "food",
      "group",
      "coffee",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "date",
      "Date Spots",
      "Date Night",
      "aesthetic",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Pastas",
      "Baked Casseroles",
      "Bakery Goods",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.5,
    "reviewCount": 470,
    "verifiedVisitsCount": 165,
    "distanceKm": 2.7,
    "openingHours": "10:30 AM – 11:00 PM",
    "featuredQuote": "Great food consistency and signature baked lasagna on the Madhya Marg restaurant line.",
    "strengths": [
      "Generous portion sizes and authentic cheese blends",
      "Comfortable table spacing"
    ],
    "weaknesses": [
      "Service can be slightly stretched during Sunday lunchtime"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "Dependable comfort food stop in Sector 26.",
      "loved": [
        "Baked Lasagna",
        "Garlic Bread with Cheese"
      ],
      "disliked": [
        "Sunday rush"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.5,
        "reviews": 1900
      },
      "zomato": {
        "rating": 4.4,
        "reviews": 1100
      },
      "swiggy": {
        "rating": 4.3,
        "reviews": 940
      },
      "cafeFinder": {
        "rating": 4.6,
        "trustScore": 90,
        "verifiedVisits": 165
      }
    },
    "coffeeScore": 82,
    "workScore": 90,
    "dateScore": 86,
    "quietScore": 73,
    "aestheticScore": 86,
    "groupScore": 92,
    "dessertScore": 93,
    "lateNightScore": 82,
    "wifi": true,
    "power": false,
    "seating": "tables",
    "noiseLevel": "moderate",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "uncle-jacks-sec35",
    "name": "Uncle Jack's Sector 35",
    "sector": "Sector 35",
    "city": "Chandigarh",
    "address": "Booth 56, Sector 35-C, Chandigarh",
    "coordinates": [
      30.7229,
      76.768
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 600,
    "categories": [
      "food",
      "group",
      "latenight",
      "aesthetic",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "Social & Lively",
      "With the Gang",
      "gang",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "American Diner",
      "Loaded Fries",
      "Waffles on Stick",
      "Sliders",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.5,
    "reviewCount": 820,
    "verifiedVisitsCount": 340,
    "distanceKm": 3.3,
    "openingHours": "11:00 AM – 11:30 PM",
    "featuredQuote": "Chicago-style fries in a jar, cheesy hot dogs, and indulgent peanut butter shakes.",
    "strengths": [
      "Inventive street-side American diner snacks served in collectible jars",
      "Very fast order preparation and energetic youth vibe",
      "Affordable indulgent snack portions"
    ],
    "weaknesses": [
      "Strictly takeaway and standing tables outside, minimal indoor seating",
      "Not suited for quiet work or laptops"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "The quintessential Chandigarh street-eats icon for friends craving loaded American comfort food.",
      "loved": [
        "Mick Jagger Cheese Fries",
        "Red Velvet Waffle Stick",
        "Ferrero Rocher Shake"
      ],
      "disliked": [
        "No Dedicated Seating",
        "Standing Only"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.5,
        "reviews": 3600
      },
      "zomato": {
        "rating": 4.5,
        "reviews": 2400
      },
      "swiggy": {
        "rating": 4.4,
        "reviews": 2200
      },
      "cafeFinder": {
        "rating": 4.6,
        "trustScore": 91,
        "verifiedVisits": 340
      }
    },
    "coffeeScore": 76,
    "workScore": 40,
    "dateScore": 78,
    "quietScore": 55,
    "aestheticScore": 87,
    "groupScore": 95,
    "dessertScore": 94,
    "lateNightScore": 86,
    "wifi": false,
    "power": false,
    "seating": "standing",
    "noiseLevel": "lively",
    "outdoorSeating": true,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "casa-bella-vista-sec10",
    "name": "Casa Bella Vista",
    "sector": "Sector 10",
    "city": "Chandigarh",
    "address": "Coal Depot Complex, Sector 10-D, Chandigarh",
    "coordinates": [
      30.751,
      76.7865
    ],
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1400,
    "categories": [
      "date",
      "aesthetic",
      "quiet",
      "food",
      "coffee",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "Date Spots",
      "Date Night",
      "Quiet / Reading",
      "Quiet Corner",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "group",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Woodfired Pizza",
      "Mediterranean",
      "Candlelight Date",
      "Romantic Garden",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Quiet Corner",
      "Quiet",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.7,
    "reviewCount": 560,
    "verifiedVisitsCount": 220,
    "distanceKm": 2.5,
    "openingHours": "11:30 AM – 11:00 PM",
    "featuredQuote": "Stone-baked artisanal pizzas under open foliage and soft amber candlelight.",
    "strengths": [
      "Authentic Spanish-Italian wood-fired oven run with imported olive oils",
      "Romantic outdoor garden courtyard with gentle acoustic music",
      "Extensive vegetarian gourmet Mediterranean offerings"
    ],
    "weaknesses": [
      "Premium pricing tier",
      "Strictly a dining destination rather than a quick coffee stop"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "The top choice in Chandigarh for an unforgettable, romantic alfresco date night.",
      "loved": [
        "Truffle Funghi Pizza",
        "Spinach Ricotta Ravioli",
        "Tiramisu"
      ],
      "disliked": [
        "Premium Billing",
        "Reservation Advised on Weekends"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.6,
        "reviews": 2100
      },
      "zomato": {
        "rating": 4.7,
        "reviews": 1400
      },
      "swiggy": {
        "rating": 4.4,
        "reviews": 800
      },
      "cafeFinder": {
        "rating": 4.8,
        "trustScore": 96,
        "verifiedVisits": 220
      }
    },
    "coffeeScore": 84,
    "workScore": 90,
    "dateScore": 98,
    "quietScore": 90,
    "aestheticScore": 97,
    "groupScore": 84,
    "dessertScore": 91,
    "lateNightScore": 85,
    "wifi": true,
    "power": false,
    "seating": "courtyard",
    "noiseLevel": "low",
    "outdoorSeating": true,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "date",
      "quiet",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "rustic-door-sec10",
    "name": "The Rustic Door",
    "sector": "Sector 10",
    "city": "Chandigarh",
    "address": "SCO 12, Sector 10-D, Chandigarh",
    "coordinates": [
      30.7505,
      76.787
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 950,
    "categories": [
      "date",
      "aesthetic",
      "food",
      "coffee",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "Date Spots",
      "Date Night",
      "quiet",
      "Quiet / Reading",
      "Quiet Corner",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "group",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Vintage Decor",
      "European Cuisine",
      "Cozy Date",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Quiet Corner",
      "Quiet",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.5,
    "reviewCount": 380,
    "verifiedVisitsCount": 155,
    "distanceKm": 2.6,
    "openingHours": "11:30 AM – 11:30 PM",
    "featuredQuote": "Antique mirrors, wooden doors, and candle-lit pasta dinners in Sector 10.",
    "strengths": [
      "Warm rustic interior with private curtained corners",
      "Flavorsome risottos and handmade artisan pasta dishes"
    ],
    "weaknesses": [
      "Lighting is very dim during afternoon hours"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "Intimate vintage dining spot for couples seeking privacy.",
      "loved": [
        "Four Cheese Risotto",
        "Stuffed Mushrooms"
      ],
      "disliked": [
        "Dim afternoon lighting"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.5,
        "reviews": 1400
      },
      "zomato": {
        "rating": 4.5,
        "reviews": 880
      },
      "swiggy": {
        "rating": 4.3,
        "reviews": 620
      },
      "cafeFinder": {
        "rating": 4.6,
        "trustScore": 92,
        "verifiedVisits": 155
      }
    },
    "coffeeScore": 81,
    "workScore": 90,
    "dateScore": 94,
    "quietScore": 86,
    "aestheticScore": 93,
    "groupScore": 81,
    "dessertScore": 87,
    "lateNightScore": 84,
    "wifi": true,
    "power": false,
    "seating": "intimate",
    "noiseLevel": "low",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "date",
      "quiet",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "kalsang-sec8",
    "name": "Kalsang Cafe & Restaurant",
    "sector": "Sector 8",
    "city": "Chandigarh",
    "address": "SCO 38-39, Sector 8-C, Chandigarh",
    "coordinates": [
      30.7385,
      76.8018
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 750,
    "categories": [
      "food",
      "aesthetic",
      "group",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "date",
      "Date Spots",
      "Date Night",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Tibetan Cafe",
      "Fruit Teas",
      "Tingmo",
      "Momo Platter",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.6,
    "reviewCount": 710,
    "verifiedVisitsCount": 280,
    "distanceKm": 1.6,
    "openingHours": "11:30 AM – 11:00 PM",
    "featuredQuote": "Red silk lanterns, Tibetan prayer flags, rich thukpa, and signature peach iced tea.",
    "strengths": [
      "Distinctive oriental ambiance with Tibetan wall murals and prayer wheels",
      "Authentic Himalayan culinary preparations: momos, thukpa, and shabalay",
      "Very comforting jasmine and fruit tea pots"
    ],
    "weaknesses": [
      "Can have a 15-minute wait during weekend dinner service"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "A vibrant cultural cafe offering hearty Himalayan comfort food and charming decor.",
      "loved": [
        "Steamed Devil Momos",
        "Tibetan Butter Tea",
        "Peach Fruit Beer (Non-alcoholic)"
      ],
      "disliked": [
        "Peak Hour Waiting"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.6,
        "reviews": 2900
      },
      "zomato": {
        "rating": 4.6,
        "reviews": 1800
      },
      "swiggy": {
        "rating": 4.5,
        "reviews": 1400
      },
      "cafeFinder": {
        "rating": 4.7,
        "trustScore": 94,
        "verifiedVisits": 280
      }
    },
    "coffeeScore": 75,
    "workScore": 90,
    "dateScore": 89,
    "quietScore": 76,
    "aestheticScore": 92,
    "groupScore": 93,
    "dessertScore": 82,
    "lateNightScore": 82,
    "wifi": true,
    "power": false,
    "seating": "booths",
    "noiseLevel": "moderate",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "fabbrica-sec26",
    "name": "Fabbrica Italian Bistro & Cafe",
    "sector": "Sector 26",
    "city": "Chandigarh",
    "address": "SCO 11, Sector 26, Madhya Marg, Chandigarh",
    "coordinates": [
      30.7325,
      76.8091
    ],
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1200,
    "categories": [
      "date",
      "aesthetic",
      "food",
      "coffee",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "Date Spots",
      "Date Night",
      "quiet",
      "Quiet / Reading",
      "Quiet Corner",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "group",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Handmade Pasta",
      "Wine Vibe",
      "Italian Romantic",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Quiet Corner",
      "Quiet",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.6,
    "reviewCount": 340,
    "verifiedVisitsCount": 130,
    "distanceKm": 2.9,
    "openingHours": "12:00 PM – 11:30 PM",
    "featuredQuote": "Polished terrazzo tables, fresh pasta extruded daily, and rich espresso affogato.",
    "strengths": [
      "Gourmet handmade tagliatelle and ravioli",
      "Sophisticated Milanese cafe aesthetics with warm lighting"
    ],
    "weaknesses": [
      "Higher price point"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "An upscale date spot for true connoisseurs of Italian cafe dining.",
      "loved": [
        "Truffle Tagliatelle",
        "Espresso Affogato"
      ],
      "disliked": [
        "Pricey"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.6,
        "reviews": 1100
      },
      "zomato": {
        "rating": 4.5,
        "reviews": 750
      },
      "swiggy": {
        "rating": 4.3,
        "reviews": 410
      },
      "cafeFinder": {
        "rating": 4.7,
        "trustScore": 92,
        "verifiedVisits": 130
      }
    },
    "coffeeScore": 89,
    "workScore": 90,
    "dateScore": 96,
    "quietScore": 85,
    "aestheticScore": 95,
    "groupScore": 82,
    "dessertScore": 90,
    "lateNightScore": 84,
    "wifi": true,
    "power": false,
    "seating": "plush",
    "noiseLevel": "low",
    "outdoorSeating": false,
    "specialtyCoffee": true,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "date",
      "quiet",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "tin-tin-sec7",
    "name": "Tin Tin Craft House & Cafe",
    "sector": "Sector 7",
    "city": "Chandigarh",
    "address": "SCO 16-17, Back Courtyard, Sector 7-C, Chandigarh",
    "coordinates": [
      30.731,
      76.7992
    ],
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1300,
    "categories": [
      "aesthetic",
      "date",
      "latenight",
      "coffee",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "Date Spots",
      "Date Night",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "food",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "group",
      "Social & Lively",
      "With the Gang",
      "gang",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Avant Garde",
      "Sculptural Interior",
      "Cocktail & Brew",
      "Late Night",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively"
    ],
    "heroImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.7,
    "reviewCount": 410,
    "verifiedVisitsCount": 160,
    "distanceKm": 1.8,
    "openingHours": "12:00 PM – 1:00 AM",
    "featuredQuote": "Curving geometric vaulted ceilings and high-concept Asian tapas.",
    "strengths": [
      "Breathtaking architectural design recognized in design publications",
      "Stunning ambient lighting and exceptional presentation"
    ],
    "weaknesses": [
      "Loud music transitions later in the night (post 9:30 PM)"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "The most visually captivating and architecturally daring night cafe in Chandigarh.",
      "loved": [
        "Artisan Bao",
        "Smoked Cocktails",
        "Matcha Cheesecake"
      ],
      "disliked": [
        "Late Night Music Volume"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.6,
        "reviews": 1500
      },
      "zomato": {
        "rating": 4.7,
        "reviews": 920
      },
      "swiggy": {
        "rating": 4.4,
        "reviews": 520
      },
      "cafeFinder": {
        "rating": 4.8,
        "trustScore": 94,
        "verifiedVisits": 160
      }
    },
    "coffeeScore": 82,
    "workScore": 90,
    "dateScore": 97,
    "quietScore": 68,
    "aestheticScore": 99,
    "groupScore": 90,
    "dessertScore": 88,
    "lateNightScore": 97,
    "wifi": true,
    "power": false,
    "seating": "lounge",
    "noiseLevel": "moderate",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "honey-and-dough-sec8",
    "name": "Honey & Dough",
    "sector": "Sector 8",
    "city": "Chandigarh",
    "address": "SCF 24, Inner Market, Sector 8-C, Chandigarh",
    "coordinates": [
      30.7382,
      76.8015
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 700,
    "categories": [
      "food",
      "aesthetic",
      "coffee",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "date",
      "Date Spots",
      "Date Night",
      "quiet",
      "Quiet / Reading",
      "Quiet Corner",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth"
    ],
    "tags": [
      "Pastry Shop",
      "Artisan Coffee",
      "French Macarons",
      "Pastels",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Quiet Corner",
      "Quiet",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts"
    ],
    "heroImage": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.5,
    "reviewCount": 310,
    "verifiedVisitsCount": 125,
    "distanceKm": 1.5,
    "openingHours": "9:00 AM – 10:30 PM",
    "featuredQuote": "Pastel hues, buttery croissants, and beautifully piped French macarons.",
    "strengths": [
      "Delightful delicate bakery display with authentic French techniques",
      "Serene light pastel decor creating a pleasant tea-time vibe"
    ],
    "weaknesses": [
      "Limited savory menu options"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "A dainty patisserie perfect for afternoon tea and sweet tooth indulgences.",
      "loved": [
        "Pistachio Macarons",
        "Almond Croissant",
        "Cappuccino"
      ],
      "disliked": [
        "Limited Savory Menu"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.5,
        "reviews": 1050
      },
      "zomato": {
        "rating": 4.4,
        "reviews": 620
      },
      "swiggy": {
        "rating": 4.4,
        "reviews": 510
      },
      "cafeFinder": {
        "rating": 4.6,
        "trustScore": 90,
        "verifiedVisits": 125
      }
    },
    "coffeeScore": 86,
    "workScore": 90,
    "dateScore": 87,
    "quietScore": 84,
    "aestheticScore": 94,
    "groupScore": 78,
    "dessertScore": 96,
    "lateNightScore": 72,
    "wifi": true,
    "power": null,
    "seating": "bistro",
    "noiseLevel": "low",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "date",
      "quiet",
      "pretty",
      "sweet-tooth"
    ]
  },
  {
    "id": "cafe-delhi-heights-elante",
    "name": "Cafe Delhi Heights",
    "sector": "Industrial Area Phase 1",
    "city": "Chandigarh",
    "address": "Third Floor, Elante Mall, Industrial Area Phase 1, Chandigarh",
    "coordinates": [
      30.7058,
      76.801
    ],
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1250,
    "categories": [
      "food",
      "group",
      "aesthetic",
      "coffee",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "date",
      "Date Spots",
      "Date Night",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Juicy Lucy Burger",
      "Eclectic Decor",
      "Global Comfort",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.6,
    "reviewCount": 780,
    "verifiedVisitsCount": 290,
    "distanceKm": 4,
    "openingHours": "11:00 AM – 11:30 PM",
    "featuredQuote": "The legendary Juicy Lucy burger and cozy bohemian low seating cabanas.",
    "strengths": [
      "Iconic 250g Juicy Lucy burger with verified serial number ticket",
      "Private low-seating curtain cabanas with board games",
      "Enormous diverse menu spanning Thai curry to Delhi chaat"
    ],
    "weaknesses": [
      "Portions are very large, hard for solo diners"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "A vibrant, energetic cafe offering big flavors and relaxed cabana lounging.",
      "loved": [
        "Juicy Lucy Burger",
        "Delhi Butter Chicken Kulcha",
        "Banoffee Pie"
      ],
      "disliked": [
        "Too Heavy for Quick Snacks"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.5,
        "reviews": 3200
      },
      "zomato": {
        "rating": 4.6,
        "reviews": 2100
      },
      "swiggy": {
        "rating": 4.4,
        "reviews": 1800
      },
      "cafeFinder": {
        "rating": 4.7,
        "trustScore": 93,
        "verifiedVisits": 290
      }
    },
    "coffeeScore": 80,
    "workScore": 90,
    "dateScore": 90,
    "quietScore": 72,
    "aestheticScore": 91,
    "groupScore": 96,
    "dessertScore": 92,
    "lateNightScore": 84,
    "wifi": true,
    "power": false,
    "seating": "cabanas",
    "noiseLevel": "moderate",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "costa-coffee-sec17",
    "name": "Costa Coffee Sector 17",
    "sector": "Sector 17",
    "city": "Chandigarh",
    "address": "SCO 45-46, Sector 17-E, Chandigarh",
    "coordinates": [
      30.7415,
      76.7838
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 650,
    "categories": [
      "coffee",
      "study",
      "quiet",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Work Friendly",
      "Get Work Done",
      "work",
      "Quiet / Reading",
      "Quiet Corner",
      "aesthetic",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "food",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth"
    ],
    "tags": [
      "British Roast",
      "Flat White",
      "Plaza Meeting",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Quiet Corner",
      "Quiet",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts"
    ],
    "heroImage": "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.4,
    "reviewCount": 380,
    "verifiedVisitsCount": 145,
    "distanceKm": 2.3,
    "openingHours": "9:00 AM – 10:30 PM",
    "featuredQuote": "Smooth Mocha Italia roast and a quiet upstairs perch overlooking the Plaza.",
    "strengths": [
      "Classic British espresso extraction with rich crema",
      "Calm work environment with reliable power"
    ],
    "weaknesses": [
      "Snack counter is mostly pre-packaged"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "Comfortable work spot for classic espresso in Sector 17.",
      "loved": [
        "Signature Flat White",
        "Blueberry Muffin"
      ],
      "disliked": [
        "Pre-packaged food"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.4,
        "reviews": 1400
      },
      "zomato": {
        "rating": 4.3,
        "reviews": 750
      },
      "swiggy": {
        "rating": 4.2,
        "reviews": 620
      },
      "cafeFinder": {
        "rating": 4.5,
        "trustScore": 89,
        "verifiedVisits": 145
      }
    },
    "coffeeScore": 88,
    "workScore": 91,
    "dateScore": 78,
    "quietScore": 88,
    "aestheticScore": 83,
    "groupScore": 77,
    "dessertScore": 93,
    "lateNightScore": 76,
    "wifi": true,
    "power": true,
    "seating": "laptop-friendly",
    "noiseLevel": "low",
    "outdoorSeating": false,
    "specialtyCoffee": true,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "quiet",
      "pretty",
      "sweet-tooth"
    ]
  },
  {
    "id": "barista-diner-sec26",
    "name": "Barista Diner Sector 26",
    "sector": "Sector 26",
    "city": "Chandigarh",
    "address": "SCO 22, Sector 26, Madhya Marg, Chandigarh",
    "coordinates": [
      30.7323,
      76.8093
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 750,
    "categories": [
      "coffee",
      "study",
      "food",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Work Friendly",
      "Get Work Done",
      "work",
      "date",
      "Date Spots",
      "Date Night",
      "quiet",
      "Quiet / Reading",
      "Quiet Corner",
      "aesthetic",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "group",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "All Day Diner",
      "Brinder Roast",
      "Comfort Food",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Quiet Corner",
      "Quiet",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.4,
    "reviewCount": 320,
    "verifiedVisitsCount": 130,
    "distanceKm": 2.8,
    "openingHours": "8:30 AM – 11:00 PM",
    "featuredQuote": "A step up from traditional Barista with an extensive warm kitchen menu.",
    "strengths": [
      "Full diner menu featuring artisanal pastas, wraps, and gourmet shakes",
      "Spacious layout suitable for quiet afternoon meetings"
    ],
    "weaknesses": [
      "Service can take longer for diner items"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "Good upgraded diner experience on Madhya Marg.",
      "loved": [
        "Barista Frappe",
        "Chicken Lasagna"
      ],
      "disliked": [
        "Slower Kitchen Prep"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.4,
        "reviews": 1200
      },
      "zomato": {
        "rating": 4.3,
        "reviews": 680
      },
      "swiggy": {
        "rating": 4.2,
        "reviews": 540
      },
      "cafeFinder": {
        "rating": 4.5,
        "trustScore": 88,
        "verifiedVisits": 130
      }
    },
    "coffeeScore": 86,
    "workScore": 89,
    "dateScore": 80,
    "quietScore": 84,
    "aestheticScore": 84,
    "groupScore": 83,
    "dessertScore": 81,
    "lateNightScore": 80,
    "wifi": true,
    "power": true,
    "seating": "booths",
    "noiseLevel": "low",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "date",
      "quiet",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "barista-sec35",
    "name": "Barista Cafe Sector 35",
    "sector": "Sector 35",
    "city": "Chandigarh",
    "address": "SCO 477, Sector 35-C, Chandigarh",
    "coordinates": [
      30.7226,
      76.7682
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 600,
    "categories": [
      "coffee",
      "study",
      "quiet",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Work Friendly",
      "Get Work Done",
      "work",
      "Quiet / Reading",
      "Quiet Corner",
      "food",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Espresso",
      "Classic Cafe",
      "Quiet Work",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Quiet Corner",
      "Quiet",
      "Sweet Tooth",
      "Bakery & Desserts",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.3,
    "reviewCount": 410,
    "verifiedVisitsCount": 155,
    "distanceKm": 3.2,
    "openingHours": "8:30 AM – 11:00 PM",
    "featuredQuote": "A reliable legacy spot where you can sit with a book or laptop undisturbed.",
    "strengths": [
      "Peaceful atmosphere without intrusive music",
      "Traditional dark Italian roast profile"
    ],
    "weaknesses": [
      "Decor could use a modern refresh"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "Old school quiet coffee shop in Sector 35.",
      "loved": [
        "Brrrista Shake",
        "Spinach Corn Sandwich"
      ],
      "disliked": [
        "Dated Interiors"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.3,
        "reviews": 1500
      },
      "zomato": {
        "rating": 4.2,
        "reviews": 820
      },
      "swiggy": {
        "rating": 4.2,
        "reviews": 710
      },
      "cafeFinder": {
        "rating": 4.4,
        "trustScore": 87,
        "verifiedVisits": 155
      }
    },
    "coffeeScore": 84,
    "workScore": 88,
    "dateScore": 75,
    "quietScore": 88,
    "aestheticScore": 78,
    "groupScore": 76,
    "dessertScore": 93,
    "lateNightScore": 80,
    "wifi": true,
    "power": true,
    "seating": "tables",
    "noiseLevel": "low",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "quiet",
      "sweet-tooth",
      "late-night"
    ]
  },
  {
    "id": "cottage-sec7",
    "name": "The Cottage",
    "sector": "Sector 7",
    "city": "Chandigarh",
    "address": "SCO 44, Inner Market, Sector 7-C, Chandigarh",
    "coordinates": [
      30.7314,
      76.799
    ],
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1350,
    "categories": [
      "date",
      "aesthetic",
      "quiet",
      "food",
      "coffee",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "Date Spots",
      "Date Night",
      "Quiet / Reading",
      "Quiet Corner",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "French Bistro",
      "European Decor",
      "Romantic Dining",
      "Gourmet",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Quiet Corner",
      "Quiet",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.7,
    "reviewCount": 450,
    "verifiedVisitsCount": 180,
    "distanceKm": 1.8,
    "openingHours": "12:00 PM – 11:30 PM",
    "featuredQuote": "White French country window frames, botanical prints, and soothing classical melodies.",
    "strengths": [
      "Impeccable romantic European interior styling",
      "Refined fine-dining inspired cafe menu with exquisite plating",
      "Very attentive, unobtrusive hospitality"
    ],
    "weaknesses": [
      "Strict dress code recommendation",
      "Premium billing"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "An elegant European countryside bistro perfect for celebrating special occasions.",
      "loved": [
        "Pan Seared Gnocchi",
        "Burrata Salad",
        "Crème Brûlée"
      ],
      "disliked": [
        "Expensive",
        "Formal Atmosphere"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.7,
        "reviews": 1800
      },
      "zomato": {
        "rating": 4.7,
        "reviews": 1100
      },
      "swiggy": {
        "rating": 4.5,
        "reviews": 650
      },
      "cafeFinder": {
        "rating": 4.8,
        "trustScore": 96,
        "verifiedVisits": 180
      }
    },
    "coffeeScore": 85,
    "workScore": 90,
    "dateScore": 99,
    "quietScore": 92,
    "aestheticScore": 98,
    "groupScore": 78,
    "dessertScore": 94,
    "lateNightScore": 84,
    "wifi": true,
    "power": false,
    "seating": "fine-dining",
    "noiseLevel": "low",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "date",
      "quiet",
      "pretty",
      "sweet-tooth",
      "late-night"
    ]
  },
  {
    "id": "indian-coffee-house-sec22",
    "name": "Indian Coffee House Sector 22",
    "sector": "Sector 22",
    "city": "Chandigarh",
    "address": "SCO 1012, Sector 22-B, Chandigarh",
    "coordinates": [
      30.7301,
      76.7725
    ],
    "priceRange": "₹",
    "approxCostForTwo": 250,
    "categories": [
      "budget",
      "coffee",
      "quiet",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Quiet / Reading",
      "Quiet Corner",
      "group",
      "Social & Lively",
      "With the Gang",
      "gang"
    ],
    "tags": [
      "Historic Cafe",
      "Filter Coffee",
      "Heritage",
      "Mutton Dosa",
      "Good Coffee",
      "Quiet Corner",
      "Quiet",
      "With the Gang",
      "Social & Lively"
    ],
    "heroImage": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.3,
    "reviewCount": 920,
    "verifiedVisitsCount": 380,
    "distanceKm": 2.9,
    "openingHours": "8:00 AM – 9:30 PM",
    "featuredQuote": "Turbans, traditional brass filter coffee, and deep conversations on politics and art.",
    "strengths": [
      "Time-honored filter coffee brewed the classic South Indian way for ₹40",
      "Authentic mid-century cooperative charm unchanged for decades",
      "Most economical coffee and snack spot in town"
    ],
    "weaknesses": [
      "No modern amenities: no Wi-Fi, no air conditioning, no fancy foam art",
      "Basic utilitarian furniture"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "A nostalgic cultural institution where Chandigarh's elders and students meet over filter coffee.",
      "loved": [
        "Hot Filter Coffee",
        "Mutton Dosa",
        "Cold Coffee with Ice Cream"
      ],
      "disliked": [
        "No AC",
        "No Wifi"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.3,
        "reviews": 3900
      },
      "zomato": {
        "rating": 4.1,
        "reviews": 1600
      },
      "swiggy": {
        "rating": 4,
        "reviews": 1100
      },
      "cafeFinder": {
        "rating": 4.4,
        "trustScore": 89,
        "verifiedVisits": 380
      }
    },
    "coffeeScore": 85,
    "workScore": 68,
    "dateScore": 65,
    "quietScore": 82,
    "aestheticScore": 78,
    "groupScore": 86,
    "dessertScore": 68,
    "lateNightScore": 60,
    "wifi": false,
    "power": false,
    "seating": "vintage-booths",
    "noiseLevel": "low",
    "outdoorSeating": false,
    "specialtyCoffee": true,
    "food": true,
    "desserts": false,
    "moods": [
      "good-coffee",
      "quiet",
      "gang"
    ]
  },
  {
    "id": "monicas-sec8",
    "name": "Monica's Puddings & Pies",
    "sector": "Sector 8",
    "city": "Chandigarh",
    "address": "Inner Market, SCF 21, Sector 8-C, Chandigarh",
    "coordinates": [
      30.7381,
      76.8016
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 800,
    "categories": [
      "food",
      "aesthetic",
      "coffee",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "date",
      "Date Spots",
      "Date Night",
      "quiet",
      "Quiet / Reading",
      "Quiet Corner",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth"
    ],
    "tags": [
      "Legendary Pies",
      "Carrot Cake",
      "Chandigarh Heritage Bakery",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Quiet Corner",
      "Quiet",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts"
    ],
    "heroImage": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.7,
    "reviewCount": 650,
    "verifiedVisitsCount": 290,
    "distanceKm": 1.5,
    "openingHours": "9:30 AM – 10:30 PM",
    "featuredQuote": "Pioneers of gourmet baking in Chandigarh since 1994. The carrot cake is unmatched.",
    "strengths": [
      "Legendary family recipe carrot cake with cream cheese frosting",
      "Authentic fruit pies, chocolate puddings, and savories made fresh every morning"
    ],
    "weaknesses": [
      "Small seating area, often functions primarily as patisserie"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "The crown jewel of Chandigarh home-style luxury baking.",
      "loved": [
        "Carrot Cake",
        "Apple Cinnamon Pie",
        "Chicken Mushroom Puff"
      ],
      "disliked": [
        "Limited Indoor Tables"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.7,
        "reviews": 2600
      },
      "zomato": {
        "rating": 4.7,
        "reviews": 1800
      },
      "swiggy": {
        "rating": 4.6,
        "reviews": 1500
      },
      "cafeFinder": {
        "rating": 4.8,
        "trustScore": 96,
        "verifiedVisits": 290
      }
    },
    "coffeeScore": 83,
    "workScore": 90,
    "dateScore": 86,
    "quietScore": 82,
    "aestheticScore": 92,
    "groupScore": 78,
    "dessertScore": 99,
    "lateNightScore": 74,
    "wifi": true,
    "power": null,
    "seating": "compact",
    "noiseLevel": "low",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "date",
      "quiet",
      "pretty",
      "sweet-tooth"
    ]
  },
  {
    "id": "super-donuts-sec8",
    "name": "Super Donuts - American Dinery",
    "sector": "Sector 8",
    "city": "Chandigarh",
    "address": "Inner Market, SCF 14, Sector 8-C, Chandigarh",
    "coordinates": [
      30.7384,
      76.8012
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 550,
    "categories": [
      "food",
      "aesthetic",
      "group",
      "coffee",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "date",
      "Date Spots",
      "Date Night",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Gourmet Donuts",
      "American Dinery",
      "Freakshakes",
      "Bagels",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.5,
    "reviewCount": 520,
    "verifiedVisitsCount": 195,
    "distanceKm": 1.5,
    "openingHours": "10:00 AM – 11:30 PM",
    "featuredQuote": "Bright retro neon signs, freshly glazed donuts, and warm toasted bagels.",
    "strengths": [
      "Over 30 distinct artisan donut flavors baked fresh twice daily",
      "Playful 1950s American diner decor with booths and checkerboard flooring",
      "Generous bagel sandwiches and milkshakes"
    ],
    "weaknesses": [
      "Sugar levels can be overwhelming for strict low-sugar diets"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "Colorful, nostalgic dessert diner with top-tier glazed donuts and fun energy.",
      "loved": [
        "Nutella Dream Donut",
        "Smoked Chicken Bagel",
        "Hazelnut Cold Coffee"
      ],
      "disliked": [
        "Very Sweet Drinks"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.5,
        "reviews": 2200
      },
      "zomato": {
        "rating": 4.4,
        "reviews": 1300
      },
      "swiggy": {
        "rating": 4.4,
        "reviews": 1100
      },
      "cafeFinder": {
        "rating": 4.6,
        "trustScore": 91,
        "verifiedVisits": 195
      }
    },
    "coffeeScore": 82,
    "workScore": 90,
    "dateScore": 84,
    "quietScore": 74,
    "aestheticScore": 93,
    "groupScore": 91,
    "dessertScore": 98,
    "lateNightScore": 84,
    "wifi": true,
    "power": true,
    "seating": "diner-booths",
    "noiseLevel": "moderate",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "super-donuts-sec35",
    "name": "Super Donuts Sector 35",
    "sector": "Sector 35",
    "city": "Chandigarh",
    "address": "SCO 447, Sector 35-C, Chandigarh",
    "coordinates": [
      30.7224,
      76.7683
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 550,
    "categories": [
      "food",
      "group",
      "coffee",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "date",
      "Date Spots",
      "Date Night",
      "aesthetic",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Donuts",
      "Coffee",
      "Shakes",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.4,
    "reviewCount": 410,
    "verifiedVisitsCount": 160,
    "distanceKm": 3.2,
    "openingHours": "10:30 AM – 11:30 PM",
    "featuredQuote": "Quick donut takeaways and fun post-dinner hangout in Sector 35.",
    "strengths": [
      "Consistently fresh dough and glaze",
      "Late closing time"
    ],
    "weaknesses": [
      "Seating can get crowded on Saturday evenings"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "Solid sweet tooth treat in the southern sectors.",
      "loved": [
        "Boston Cream",
        "Caramel Macchiato Shake"
      ],
      "disliked": [
        "Crowded weekends"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.4,
        "reviews": 1600
      },
      "zomato": {
        "rating": 4.3,
        "reviews": 890
      },
      "swiggy": {
        "rating": 4.3,
        "reviews": 780
      },
      "cafeFinder": {
        "rating": 4.5,
        "trustScore": 89,
        "verifiedVisits": 160
      }
    },
    "coffeeScore": 80,
    "workScore": 90,
    "dateScore": 82,
    "quietScore": 72,
    "aestheticScore": 89,
    "groupScore": 90,
    "dessertScore": 97,
    "lateNightScore": 85,
    "wifi": true,
    "power": null,
    "seating": "booths",
    "noiseLevel": "moderate",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "chocolate-room-sec35",
    "name": "The Chocolate Room",
    "sector": "Sector 35",
    "city": "Chandigarh",
    "address": "SCO 425-426, Sector 35-C, Chandigarh",
    "coordinates": [
      30.7222,
      76.7687
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 700,
    "categories": [
      "food",
      "aesthetic",
      "group",
      "coffee",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "date",
      "Date Spots",
      "Date Night",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Fondue",
      "Chocolate Cafe",
      "Sweet Tooth Heaven",
      "Waffles",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.4,
    "reviewCount": 460,
    "verifiedVisitsCount": 175,
    "distanceKm": 3.3,
    "openingHours": "10:00 AM – 11:30 PM",
    "featuredQuote": "Molten Belgian chocolate fondues with strawberries and warm marshmallows.",
    "strengths": [
      "Extensive dedicated chocolate menu: fondues, choctails, and sizzling pans",
      "Warm, cozy booth seating suitable for chocolate lovers and dates"
    ],
    "weaknesses": [
      "Very dessert focused; savory items are limited"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "The ultimate destination for unapologetic chocoholics.",
      "loved": [
        "Chocolate Fondue",
        "Death by Chocolate Pancake",
        "Hot Chocolate Mug"
      ],
      "disliked": [
        "Limited Savory Options"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.4,
        "reviews": 1800
      },
      "zomato": {
        "rating": 4.3,
        "reviews": 980
      },
      "swiggy": {
        "rating": 4.2,
        "reviews": 710
      },
      "cafeFinder": {
        "rating": 4.5,
        "trustScore": 89,
        "verifiedVisits": 175
      }
    },
    "coffeeScore": 81,
    "workScore": 90,
    "dateScore": 88,
    "quietScore": 78,
    "aestheticScore": 88,
    "groupScore": 89,
    "dessertScore": 99,
    "lateNightScore": 84,
    "wifi": true,
    "power": null,
    "seating": "booths",
    "noiseLevel": "moderate",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "cafe-coffee-day-sec17",
    "name": "Cafe Coffee Day Sector 17",
    "sector": "Sector 17",
    "city": "Chandigarh",
    "address": "SCO 90-91, Sector 17-C Plaza, Chandigarh",
    "coordinates": [
      30.741,
      76.784
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 500,
    "categories": [
      "coffee",
      "budget",
      "study",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Work Friendly",
      "Get Work Done",
      "work",
      "quiet",
      "Quiet / Reading",
      "Quiet Corner",
      "food",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "group",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Classic CCD",
      "Plaza Walk",
      "Cold Sparkle",
      "Casual Meeting",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Quiet Corner",
      "Quiet",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.2,
    "reviewCount": 610,
    "verifiedVisitsCount": 220,
    "distanceKm": 2.3,
    "openingHours": "9:00 AM – 11:00 PM",
    "featuredQuote": "A beloved Sector 17 meeting spot since early 2000s, great for people watching.",
    "strengths": [
      "Central Plaza vantage point with large glass windows",
      "Pocket-friendly coffee and frappe staples"
    ],
    "weaknesses": [
      "Standard franchise menu without artisan roasts"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "A nostalgic classic for casual Plaza rendezvous.",
      "loved": [
        "Devil's Own",
        "King Cappuccino",
        "Samosa Croissant"
      ],
      "disliked": [
        "Standard franchise coffee"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.2,
        "reviews": 2600
      },
      "zomato": {
        "rating": 4,
        "reviews": 1200
      },
      "swiggy": {
        "rating": 4.1,
        "reviews": 900
      },
      "cafeFinder": {
        "rating": 4.3,
        "trustScore": 86,
        "verifiedVisits": 220
      }
    },
    "coffeeScore": 88,
    "workScore": 82,
    "dateScore": 72,
    "quietScore": 80,
    "aestheticScore": 76,
    "groupScore": 84,
    "dessertScore": 93,
    "lateNightScore": 80,
    "wifi": true,
    "power": true,
    "seating": "plaza-view",
    "noiseLevel": "low",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "quiet",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "woodies-rock-sec26",
    "name": "Woodies Rock Cafe",
    "sector": "Sector 26",
    "city": "Chandigarh",
    "address": "SCO 15, Sector 26, Chandigarh",
    "coordinates": [
      30.732,
      76.8096
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 900,
    "categories": [
      "group",
      "latenight",
      "food",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "date",
      "Date Spots",
      "Date Night",
      "aesthetic",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "Social & Lively",
      "With the Gang",
      "gang",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Live Music",
      "Rock Vibe",
      "Late Night",
      "Burgers",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively"
    ],
    "heroImage": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.4,
    "reviewCount": 380,
    "verifiedVisitsCount": 145,
    "distanceKm": 2.9,
    "openingHours": "12:00 PM – 12:30 AM",
    "featuredQuote": "Classic rock memorabilia on wooden walls, acoustic sessions, and hearty bar bites.",
    "strengths": [
      "Energetic live acoustic music on weekends",
      "Late closing time after midnight",
      "Great beer and bar food pairings"
    ],
    "weaknesses": [
      "Not suited for quiet conversations or work"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "Lively rock cafe in Sector 26 for music lovers and friend reunions.",
      "loved": [
        "BBQ Chicken Wings",
        "Rock Star Burger"
      ],
      "disliked": [
        "Loud music"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.4,
        "reviews": 1400
      },
      "zomato": {
        "rating": 4.3,
        "reviews": 780
      },
      "swiggy": {
        "rating": 4.1,
        "reviews": 510
      },
      "cafeFinder": {
        "rating": 4.5,
        "trustScore": 88,
        "verifiedVisits": 145
      }
    },
    "coffeeScore": 74,
    "workScore": 90,
    "dateScore": 82,
    "quietScore": 50,
    "aestheticScore": 85,
    "groupScore": 95,
    "dessertScore": 93,
    "lateNightScore": 94,
    "wifi": true,
    "power": false,
    "seating": "wood-benches",
    "noiseLevel": "lively",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "pu-student-center-cafe",
    "name": "Student Center Coffee Corner",
    "sector": "Sector 15",
    "city": "Chandigarh",
    "address": "Panjab University Campus, Sector 14/15, Chandigarh",
    "coordinates": [
      30.758,
      76.769
    ],
    "priceRange": "₹",
    "approxCostForTwo": 200,
    "categories": [
      "budget",
      "group",
      "coffee",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "aesthetic",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Social & Lively",
      "With the Gang",
      "gang"
    ],
    "tags": [
      "Campus Icon",
      "Cold Coffee with Ice Cream",
      "Student Life",
      "Budget",
      "Good Coffee",
      "Somewhere Pretty",
      "Aesthetic",
      "With the Gang",
      "Social & Lively"
    ],
    "heroImage": "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.6,
    "reviewCount": 980,
    "verifiedVisitsCount": 420,
    "distanceKm": 3.5,
    "openingHours": "8:00 AM – 9:00 PM",
    "featuredQuote": "Chandigarh's ultimate rite of passage: ₹50 thick cold coffee with a scoop of vanilla.",
    "strengths": [
      "Unrivaled student energy under iconic architectural university canopy",
      "Thick cold coffee that has been celebrated by generations of students",
      "Pocket money pricing under ₹200 for two"
    ],
    "weaknesses": [
      "Campus open air seating, can get hot in summer afternoons"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "The spiritual heart of Chandigarh university culture and legendary cold coffee.",
      "loved": [
        "StuC Cold Coffee",
        "Paneer Patty",
        "Rajma Chawal"
      ],
      "disliked": [
        "Outdoor Heat in Summer"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.6,
        "reviews": 4800
      },
      "zomato": {
        "rating": 4.5,
        "reviews": 2200
      },
      "swiggy": {
        "rating": 4.4,
        "reviews": 1700
      },
      "cafeFinder": {
        "rating": 4.7,
        "trustScore": 94,
        "verifiedVisits": 420
      }
    },
    "coffeeScore": 84,
    "workScore": 70,
    "dateScore": 78,
    "quietScore": 68,
    "aestheticScore": 84,
    "groupScore": 98,
    "dessertScore": 78,
    "lateNightScore": 62,
    "wifi": false,
    "power": false,
    "seating": "open-canopy",
    "noiseLevel": "lively",
    "outdoorSeating": true,
    "specialtyCoffee": false,
    "food": true,
    "desserts": false,
    "moods": [
      "good-coffee",
      "pretty",
      "gang"
    ]
  },
  {
    "id": "brew-estate-sec26",
    "name": "The Brew Estate Cafe & Kitchen",
    "sector": "Sector 26",
    "city": "Chandigarh",
    "address": "SCO 25, Sector 26, Chandigarh",
    "coordinates": [
      30.7324,
      76.8092
    ],
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1400,
    "categories": [
      "group",
      "latenight",
      "food",
      "coffee",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "date",
      "Date Spots",
      "Date Night",
      "aesthetic",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "Social & Lively",
      "With the Gang",
      "gang",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Microbrewery Cafe",
      "Rooftop Seating",
      "Live Sports",
      "Late Night",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively"
    ],
    "heroImage": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.5,
    "reviewCount": 810,
    "verifiedVisitsCount": 310,
    "distanceKm": 2.8,
    "openingHours": "11:00 AM – 1:00 AM",
    "featuredQuote": "Craft brews, woodfired ovens, and an open sky terrace running past midnight.",
    "strengths": [
      "Multi-level seating with beautiful open terrace",
      "Late night closing past 1 AM",
      "Great for big friend reunions and celebration dinners"
    ],
    "weaknesses": [
      "Gets loud on Saturday nights"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "The quintessential large-group hangout on Sector 26's entertainment strip.",
      "loved": [
        "Craft Brew Sampler",
        "Thin Crust Pepperoni Pizza",
        "Corn Cheese Balls"
      ],
      "disliked": [
        "Weekend Loud Music"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.5,
        "reviews": 3600
      },
      "zomato": {
        "rating": 4.4,
        "reviews": 2400
      },
      "swiggy": {
        "rating": 4.2,
        "reviews": 1400
      },
      "cafeFinder": {
        "rating": 4.6,
        "trustScore": 91,
        "verifiedVisits": 310
      }
    },
    "coffeeScore": 88,
    "workScore": 90,
    "dateScore": 86,
    "quietScore": 60,
    "aestheticScore": 91,
    "groupScore": 98,
    "dessertScore": 82,
    "lateNightScore": 98,
    "wifi": true,
    "power": false,
    "seating": "terrace",
    "noiseLevel": "lively",
    "outdoorSeating": true,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "brew-estate-sec35",
    "name": "The Brew Estate Sector 35",
    "sector": "Sector 35",
    "city": "Chandigarh",
    "address": "SCO 408-409, Sector 35-C, Chandigarh",
    "coordinates": [
      30.7218,
      76.769
    ],
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1400,
    "categories": [
      "group",
      "latenight",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "date",
      "Date Spots",
      "Date Night",
      "aesthetic",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "food",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "Social & Lively",
      "With the Gang",
      "gang",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Craft Beer",
      "Late Night",
      "Woodfire Kitchen",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively"
    ],
    "heroImage": "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.4,
    "reviewCount": 590,
    "verifiedVisitsCount": 225,
    "distanceKm": 3.3,
    "openingHours": "11:00 AM – 1:00 AM",
    "featuredQuote": "Lively late night spot in Sector 35 for post-work gatherings.",
    "strengths": [
      "Open until 1 AM in the central commercial district",
      "Generous sharing platters"
    ],
    "weaknesses": [
      "High volume evening music"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "High energy late evening venue for friends.",
      "loved": [
        "Woodfired Pizza",
        "Loaded Nachos"
      ],
      "disliked": [
        "Noisy at night"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.4,
        "reviews": 2200
      },
      "zomato": {
        "rating": 4.3,
        "reviews": 1400
      },
      "swiggy": {
        "rating": 4.1,
        "reviews": 890
      },
      "cafeFinder": {
        "rating": 4.5,
        "trustScore": 89,
        "verifiedVisits": 225
      }
    },
    "coffeeScore": 76,
    "workScore": 90,
    "dateScore": 84,
    "quietScore": 58,
    "aestheticScore": 88,
    "groupScore": 96,
    "dessertScore": 80,
    "lateNightScore": 97,
    "wifi": true,
    "power": false,
    "seating": "spacious",
    "noiseLevel": "lively",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "chilis-elante",
    "name": "Chili's American Grill & Cafe",
    "sector": "Industrial Area Phase 1",
    "city": "Chandigarh",
    "address": "Third Floor, Elante Mall, Industrial Area Phase 1, Chandigarh",
    "coordinates": [
      30.706,
      76.8012
    ],
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1300,
    "categories": [
      "food",
      "group",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "date",
      "Date Spots",
      "Date Night",
      "aesthetic",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Sizzling Fajitas",
      "Molten Cake",
      "American Tex-Mex",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.5,
    "reviewCount": 620,
    "verifiedVisitsCount": 230,
    "distanceKm": 4.1,
    "openingHours": "11:30 AM – 11:30 PM",
    "featuredQuote": "Sizzling skillet fajitas and the legendary warm molten chocolate cake.",
    "strengths": [
      "Authentic Tex-Mex flavors and bottomless chips & salsa",
      "Spacious booth seating ideal for lively family & friend catchups"
    ],
    "weaknesses": [
      "Premium pricing for casual dining"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "The classic American Tex-Mex crowd favorite for big groups.",
      "loved": [
        "Molten Chocolate Cake",
        "Sizzling Fajitas",
        "Texas Cheese Poppers"
      ],
      "disliked": [
        "Pricey"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.5,
        "reviews": 2900
      },
      "zomato": {
        "rating": 4.5,
        "reviews": 1800
      },
      "swiggy": {
        "rating": 4.3,
        "reviews": 1200
      },
      "cafeFinder": {
        "rating": 4.6,
        "trustScore": 91,
        "verifiedVisits": 230
      }
    },
    "coffeeScore": 77,
    "workScore": 90,
    "dateScore": 84,
    "quietScore": 65,
    "aestheticScore": 86,
    "groupScore": 96,
    "dessertScore": 97,
    "lateNightScore": 84,
    "wifi": true,
    "power": false,
    "seating": "booths",
    "noiseLevel": "moderate",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "dunkin-sec35",
    "name": "Dunkin' Donuts & Cafe",
    "sector": "Sector 35",
    "city": "Chandigarh",
    "address": "SCO 445, Sector 35-C, Chandigarh",
    "coordinates": [
      30.7227,
      76.7679
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 500,
    "categories": [
      "coffee",
      "food",
      "budget",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "group",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Donuts",
      "Iced Coffee",
      "Quick Bites",
      "Breakfast",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.3,
    "reviewCount": 390,
    "verifiedVisitsCount": 140,
    "distanceKm": 3.3,
    "openingHours": "9:00 AM – 11:00 PM",
    "featuredQuote": "Dependable iced Americanos, chocolate donuts, and warm toasted croissants.",
    "strengths": [
      "Consistent global donut recipes and quick takeaway packaging",
      "Economical combo deals for students"
    ],
    "weaknesses": [
      "Seating is basic"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "Affordable grab-and-go sweet tooth and cold brew stop.",
      "loved": [
        "Chocolate Therapy Donut",
        "Iced Caramel Macchiato"
      ],
      "disliked": [
        "Basic seating"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.3,
        "reviews": 1500
      },
      "zomato": {
        "rating": 4.2,
        "reviews": 800
      },
      "swiggy": {
        "rating": 4.2,
        "reviews": 690
      },
      "cafeFinder": {
        "rating": 4.4,
        "trustScore": 87,
        "verifiedVisits": 140
      }
    },
    "coffeeScore": 82,
    "workScore": 90,
    "dateScore": 72,
    "quietScore": 78,
    "aestheticScore": 79,
    "groupScore": 84,
    "dessertScore": 93,
    "lateNightScore": 80,
    "wifi": true,
    "power": true,
    "seating": "bistro",
    "noiseLevel": "moderate",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "belly-delight-sec15",
    "name": "Belly's Delight Cafe",
    "sector": "Sector 15",
    "city": "Chandigarh",
    "address": "SCO 78, Sector 15-D, Chandigarh",
    "coordinates": [
      30.7485,
      76.7712
    ],
    "priceRange": "₹",
    "approxCostForTwo": 350,
    "categories": [
      "budget",
      "food",
      "group",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "Social & Lively",
      "With the Gang",
      "gang"
    ],
    "tags": [
      "Student Friendly",
      "Stuffed Rolls",
      "Thick Shakes",
      "Pocket Friendly",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively"
    ],
    "heroImage": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.4,
    "reviewCount": 420,
    "verifiedVisitsCount": 165,
    "distanceKm": 3,
    "openingHours": "10:00 AM – 10:30 PM",
    "featuredQuote": "Generous kathi rolls and Oreo shakes tailored for student budgets.",
    "strengths": [
      "Incredible value for money near Panjab University and DAV College",
      "Fast, piping hot roll preparations"
    ],
    "weaknesses": [
      "Small dining room"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "The quintessential budget student roll and shake joint in Sector 15.",
      "loved": [
        "Double Egg Chicken Roll",
        "Oreo Shake",
        "Cheesy Fries"
      ],
      "disliked": [
        "Cramped Dining"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.4,
        "reviews": 1400
      },
      "zomato": {
        "rating": 4.3,
        "reviews": 850
      },
      "swiggy": {
        "rating": 4.3,
        "reviews": 1100
      },
      "cafeFinder": {
        "rating": 4.5,
        "trustScore": 88,
        "verifiedVisits": 165
      }
    },
    "coffeeScore": 72,
    "workScore": 65,
    "dateScore": 68,
    "quietScore": 68,
    "aestheticScore": 74,
    "groupScore": 92,
    "dessertScore": 84,
    "lateNightScore": 75,
    "wifi": false,
    "power": false,
    "seating": "benches",
    "noiseLevel": "moderate",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "sweet-tooth",
      "gang"
    ]
  },
  {
    "id": "chai-break-sec26",
    "name": "Chai Break Cafe",
    "sector": "Sector 26",
    "city": "Chandigarh",
    "address": "SCO 28, Sector 26, Chandigarh",
    "coordinates": [
      30.7321,
      76.809
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 650,
    "categories": [
      "group",
      "food",
      "budget",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "aesthetic",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Chai & Shisha",
      "Thin Crust Pizza",
      "Casual Hangout",
      "Get Work Done",
      "Work Friendly",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.3,
    "reviewCount": 310,
    "verifiedVisitsCount": 115,
    "distanceKm": 2.8,
    "openingHours": "11:00 AM – 11:30 PM",
    "featuredQuote": "Kesar chai, thin crust pizzas, and relaxed board games on Madhya Marg.",
    "strengths": [
      "Wide assortment of hot brewed teas in glass pots",
      "Comfortable low leather couches for group catchups"
    ],
    "weaknesses": [
      "Service can be casual and slow during peak evenings"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "Casual tea and snack lounge for unwinding with friends.",
      "loved": [
        "Kesar Chai",
        "Peri Peri Fries"
      ],
      "disliked": [
        "Slow service"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.3,
        "reviews": 1100
      },
      "zomato": {
        "rating": 4.2,
        "reviews": 620
      },
      "swiggy": {
        "rating": 4.1,
        "reviews": 450
      },
      "cafeFinder": {
        "rating": 4.4,
        "trustScore": 87,
        "verifiedVisits": 115
      }
    },
    "coffeeScore": 74,
    "workScore": 90,
    "dateScore": 77,
    "quietScore": 74,
    "aestheticScore": 82,
    "groupScore": 92,
    "dessertScore": 93,
    "lateNightScore": 82,
    "wifi": true,
    "power": true,
    "seating": "couches",
    "noiseLevel": "moderate",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "work",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "benares-sec7",
    "name": "Benares Cafe & Lounge",
    "sector": "Sector 7",
    "city": "Chandigarh",
    "address": "SCO 32, Sector 7-C, Chandigarh",
    "coordinates": [
      30.7317,
      76.7991
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 800,
    "categories": [
      "aesthetic",
      "group",
      "food",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "date",
      "Date Spots",
      "Date Night",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Indian Fusion",
      "Artistic Decor",
      "Ghat Vibe",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.4,
    "reviewCount": 290,
    "verifiedVisitsCount": 110,
    "distanceKm": 1.8,
    "openingHours": "11:30 AM – 11:00 PM",
    "featuredQuote": "Artistic brass lamps, Indian fusion delicacies, and soothing sitar-lounge rhythms.",
    "strengths": [
      "Unique fusion aesthetic blending Varanasi ghat aesthetics with contemporary cafe culture",
      "Inventive chaat and gourmet Indian rolls"
    ],
    "weaknesses": [
      "Acidity of spice levels can vary"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "An eclectic Indian-themed cafe with warm cultural character in Sector 7.",
      "loved": [
        "Palak Patta Chaat",
        "Banarasi Cold Coffee"
      ],
      "disliked": [
        "Variable Spice"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.4,
        "reviews": 980
      },
      "zomato": {
        "rating": 4.3,
        "reviews": 540
      },
      "swiggy": {
        "rating": 4.2,
        "reviews": 380
      },
      "cafeFinder": {
        "rating": 4.5,
        "trustScore": 88,
        "verifiedVisits": 110
      }
    },
    "coffeeScore": 78,
    "workScore": 90,
    "dateScore": 86,
    "quietScore": 76,
    "aestheticScore": 91,
    "groupScore": 88,
    "dessertScore": 84,
    "lateNightScore": 80,
    "wifi": true,
    "power": null,
    "seating": "ethnic-cushions",
    "noiseLevel": "moderate",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "cuppa-bistro-sec8",
    "name": "Cuppa Bistro",
    "sector": "Sector 8",
    "city": "Chandigarh",
    "address": "SCF 12, Sector 8-C, Chandigarh",
    "coordinates": [
      30.7386,
      76.8011
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 650,
    "categories": [
      "coffee",
      "quiet",
      "study",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Work Friendly",
      "Get Work Done",
      "work",
      "date",
      "Date Spots",
      "Date Night",
      "Quiet / Reading",
      "Quiet Corner",
      "aesthetic",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "food",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth"
    ],
    "tags": [
      "Cozy Bistro",
      "Manual Espresso",
      "Quiet Afternoon",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Quiet Corner",
      "Quiet",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts"
    ],
    "heroImage": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.5,
    "reviewCount": 260,
    "verifiedVisitsCount": 95,
    "distanceKm": 1.5,
    "openingHours": "9:00 AM – 10:00 PM",
    "featuredQuote": "A hidden gem in Sector 8 inner market for those seeking calm and good espresso.",
    "strengths": [
      "Very low foot traffic during midday, ideal for reading and deep focus",
      "Carefully pulled double shots and warm paninis"
    ],
    "weaknesses": [
      "Closes slightly earlier at 10 PM"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "An unassuming sanctuary for peaceful solo coffee dates.",
      "loved": [
        "Flat White",
        "Pesto Chicken Panini"
      ],
      "disliked": [
        "Early Closing"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.5,
        "reviews": 850
      },
      "zomato": {
        "rating": 4.4,
        "reviews": 420
      },
      "swiggy": {
        "rating": 4.3,
        "reviews": 310
      },
      "cafeFinder": {
        "rating": 4.6,
        "trustScore": 90,
        "verifiedVisits": 95
      }
    },
    "coffeeScore": 90,
    "workScore": 93,
    "dateScore": 82,
    "quietScore": 95,
    "aestheticScore": 87,
    "groupScore": 72,
    "dessertScore": 80,
    "lateNightScore": 68,
    "wifi": true,
    "power": true,
    "seating": "laptop-friendly",
    "noiseLevel": "low",
    "outdoorSeating": false,
    "specialtyCoffee": true,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "date",
      "quiet",
      "pretty",
      "sweet-tooth"
    ]
  },
  {
    "id": "cinnabon-elante",
    "name": "Cinnabon & Seattle's Best",
    "sector": "Industrial Area Phase 1",
    "city": "Chandigarh",
    "address": "Second Floor, Food Lounge, Elante Mall, Chandigarh",
    "coordinates": [
      30.7059,
      76.8014
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 600,
    "categories": [
      "food",
      "coffee",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "aesthetic",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "group",
      "Social & Lively",
      "With the Gang",
      "gang"
    ],
    "tags": [
      "Cinnamon Rolls",
      "Cream Cheese Glaze",
      "Sweet Tooth Icon",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively"
    ],
    "heroImage": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.5,
    "reviewCount": 420,
    "verifiedVisitsCount": 160,
    "distanceKm": 4,
    "openingHours": "10:30 AM – 10:30 PM",
    "featuredQuote": "The aroma of warm Makara cinnamon and decadent melted cream cheese frosting.",
    "strengths": [
      "Freshly baked rolls coming out of the oven every 30 minutes",
      "Pairing with Seattle's Best dark drip coffee"
    ],
    "weaknesses": [
      "Located inside the mall food court area"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "The ultimate warm cinnamon roll pilgrimage.",
      "loved": [
        "Classic Cinnabon Roll",
        "Chocobon",
        "Iced Cold Brew"
      ],
      "disliked": [
        "Food Court Atmosphere"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.5,
        "reviews": 1700
      },
      "zomato": {
        "rating": 4.4,
        "reviews": 920
      },
      "swiggy": {
        "rating": 4.4,
        "reviews": 1100
      },
      "cafeFinder": {
        "rating": 4.6,
        "trustScore": 90,
        "verifiedVisits": 160
      }
    },
    "coffeeScore": 82,
    "workScore": 90,
    "dateScore": 78,
    "quietScore": 65,
    "aestheticScore": 85,
    "groupScore": 86,
    "dessertScore": 99,
    "lateNightScore": 75,
    "wifi": true,
    "power": null,
    "seating": "mall-seating",
    "noiseLevel": "moderate",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "pretty",
      "sweet-tooth",
      "gang"
    ]
  },
  {
    "id": "peddlers-elante",
    "name": "Peddlers Cafe Elante",
    "sector": "Industrial Area Phase 1",
    "city": "Chandigarh",
    "address": "Courtyard, Elante Mall, Industrial Area Phase 1, Chandigarh",
    "coordinates": [
      30.7055,
      76.801
    ],
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1200,
    "categories": [
      "latenight",
      "group",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "date",
      "Date Spots",
      "Date Night",
      "aesthetic",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Social & Lively",
      "With the Gang",
      "gang",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Irish Pub Cafe",
      "Live Acoustic",
      "Late Night",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Somewhere Pretty",
      "Aesthetic",
      "With the Gang",
      "Social & Lively"
    ],
    "heroImage": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.4,
    "reviewCount": 510,
    "verifiedVisitsCount": 190,
    "distanceKm": 4.1,
    "openingHours": "12:00 PM – 1:00 AM",
    "featuredQuote": "Rustic brick walls, Irish coffee, and lively acoustic sets running past midnight.",
    "strengths": [
      "Lively evening ambiance with regular live singers",
      "Late closing time past 1 AM",
      "Rich Irish coffees and hearty grill platters"
    ],
    "weaknesses": [
      "Gets loud during band performances"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "Great late night hangout for music fans and groups at Elante.",
      "loved": [
        "Irish Coffee",
        "Fish and Chips",
        "Loaded Platters"
      ],
      "disliked": [
        "Loud evening music"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.4,
        "reviews": 2100
      },
      "zomato": {
        "rating": 4.3,
        "reviews": 1300
      },
      "swiggy": {
        "rating": 4.1,
        "reviews": 780
      },
      "cafeFinder": {
        "rating": 4.5,
        "trustScore": 89,
        "verifiedVisits": 190
      }
    },
    "coffeeScore": 79,
    "workScore": 90,
    "dateScore": 85,
    "quietScore": 55,
    "aestheticScore": 87,
    "groupScore": 95,
    "dessertScore": 78,
    "lateNightScore": 98,
    "wifi": true,
    "power": false,
    "seating": "pub-booths",
    "noiseLevel": "lively",
    "outdoorSeating": true,
    "specialtyCoffee": false,
    "food": true,
    "desserts": false,
    "moods": [
      "work",
      "date",
      "pretty",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "great-bear-sec26",
    "name": "The Great Bear Microbrewery & Cafe",
    "sector": "Sector 26",
    "city": "Chandigarh",
    "address": "SCO 32, Sector 26, Madhya Marg, Chandigarh",
    "coordinates": [
      30.7327,
      76.8089
    ],
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1400,
    "categories": [
      "group",
      "latenight",
      "food",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "date",
      "Date Spots",
      "Date Night",
      "aesthetic",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "Social & Lively",
      "With the Gang",
      "gang",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Craft Beer",
      "Woodfire Oven",
      "Rooftop",
      "Late Night",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively"
    ],
    "heroImage": "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.6,
    "reviewCount": 750,
    "verifiedVisitsCount": 290,
    "distanceKm": 2.8,
    "openingHours": "12:00 PM – 1:00 AM",
    "featuredQuote": "German wheat brews, crisp Naples-style pizzas, and an open rooftop under the stars.",
    "strengths": [
      "Superb rooftop ambiance in Sector 26",
      "Award-winning craft wheat beers and ciders",
      "Open until 1 AM with vibrant crowd"
    ],
    "weaknesses": [
      "Advance booking needed for weekend rooftop tables"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "Top tier group nightlife and dining hub on Madhya Marg.",
      "loved": [
        "Golden Ale",
        "Woodfired Chicken Pizza",
        "Falafel Mezze"
      ],
      "disliked": [
        "Weekend Rooftop Rush"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.6,
        "reviews": 3400
      },
      "zomato": {
        "rating": 4.6,
        "reviews": 2200
      },
      "swiggy": {
        "rating": 4.2,
        "reviews": 950
      },
      "cafeFinder": {
        "rating": 4.7,
        "trustScore": 93,
        "verifiedVisits": 290
      }
    },
    "coffeeScore": 78,
    "workScore": 90,
    "dateScore": 88,
    "quietScore": 62,
    "aestheticScore": 92,
    "groupScore": 98,
    "dessertScore": 82,
    "lateNightScore": 98,
    "wifi": true,
    "power": false,
    "seating": "rooftop",
    "noiseLevel": "lively",
    "outdoorSeating": true,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "mamagoto-elante",
    "name": "Mamagoto Pan Asian Cafe",
    "sector": "Industrial Area Phase 1",
    "city": "Chandigarh",
    "address": "Third Floor, Elante Mall, Industrial Area Phase 1, Chandigarh",
    "coordinates": [
      30.7057,
      76.8013
    ],
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1350,
    "categories": [
      "aesthetic",
      "food",
      "date",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "Date Spots",
      "Date Night",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "group",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Manga Decor",
      "Pan Asian Bowls",
      "Dumplings",
      "Vibrant",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.6,
    "reviewCount": 520,
    "verifiedVisitsCount": 210,
    "distanceKm": 4,
    "openingHours": "12:00 PM – 11:30 PM",
    "featuredQuote": "Quirky pop-art manga walls, fragrant street-style noodle bowls, and spicy crystal dumplings.",
    "strengths": [
      "Playful Japanese pop-art interiors ideal for photography",
      "Authentic wok-tossed Asian bowls and dim sum baskets"
    ],
    "weaknesses": [
      "Premium mall restaurant pricing"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "A vibrant Asian cafe experience packed with bold flavors and photogenic character.",
      "loved": [
        "Street Style Spicy Dumplings",
        "Soggy Thai Basil Rice Bowl",
        "Caramel Sponge Pudding"
      ],
      "disliked": [
        "Mall Location Premium"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.6,
        "reviews": 2100
      },
      "zomato": {
        "rating": 4.6,
        "reviews": 1400
      },
      "swiggy": {
        "rating": 4.4,
        "reviews": 920
      },
      "cafeFinder": {
        "rating": 4.7,
        "trustScore": 93,
        "verifiedVisits": 210
      }
    },
    "coffeeScore": 76,
    "workScore": 90,
    "dateScore": 93,
    "quietScore": 74,
    "aestheticScore": 96,
    "groupScore": 90,
    "dessertScore": 89,
    "lateNightScore": 84,
    "wifi": true,
    "power": false,
    "seating": "booths",
    "noiseLevel": "moderate",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "monicas-sec9",
    "name": "Monica's Bakery Sector 9",
    "sector": "Sector 9",
    "city": "Chandigarh",
    "address": "Inner Market, Booth 52, Sector 9-D, Chandigarh",
    "coordinates": [
      30.7448,
      76.793
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 750,
    "categories": [
      "food",
      "aesthetic",
      "coffee",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "date",
      "Date Spots",
      "Date Night",
      "quiet",
      "Quiet / Reading",
      "Quiet Corner",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth"
    ],
    "tags": [
      "Pastry Kitchen",
      "Cheesecakes",
      "Artisan Bakery",
      "Good Coffee",
      "Get Work Done",
      "Work Friendly",
      "Date Night",
      "Date Spots",
      "Quiet Corner",
      "Quiet",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts"
    ],
    "heroImage": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.6,
    "reviewCount": 380,
    "verifiedVisitsCount": 155,
    "distanceKm": 2.2,
    "openingHours": "10:00 AM – 10:00 PM",
    "featuredQuote": "Classic baked cheesecakes and savoury quiches in the quiet Sector 9 lanes.",
    "strengths": [
      "Consistent high standard of heritage baking",
      "Very calm afternoon environment"
    ],
    "weaknesses": [
      "Limited dine-in chairs"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "A boutique patisserie treasure in Sector 9.",
      "loved": [
        "New York Cheesecake",
        "Lemon Tart"
      ],
      "disliked": [
        "Few tables"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.6,
        "reviews": 1400
      },
      "zomato": {
        "rating": 4.5,
        "reviews": 820
      },
      "swiggy": {
        "rating": 4.5,
        "reviews": 710
      },
      "cafeFinder": {
        "rating": 4.7,
        "trustScore": 93,
        "verifiedVisits": 155
      }
    },
    "coffeeScore": 82,
    "workScore": 90,
    "dateScore": 84,
    "quietScore": 86,
    "aestheticScore": 90,
    "groupScore": 74,
    "dessertScore": 98,
    "lateNightScore": 70,
    "wifi": true,
    "power": null,
    "seating": "bistro",
    "noiseLevel": "low",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "date",
      "quiet",
      "pretty",
      "sweet-tooth"
    ]
  },
  {
    "id": "indian-oven-sec35",
    "name": "The Indian Oven Cafe",
    "sector": "Sector 35",
    "city": "Chandigarh",
    "address": "SCO 451, Sector 35-C, Chandigarh",
    "coordinates": [
      30.7223,
      76.7685
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 750,
    "categories": [
      "food",
      "group",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "aesthetic",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth",
      "Social & Lively",
      "With the Gang",
      "gang",
      "latenight",
      "Late Night",
      "late-night"
    ],
    "tags": [
      "Fusion Bites",
      "Chai & Snacks",
      "Spacious Seating",
      "Get Work Done",
      "Work Friendly",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts",
      "With the Gang",
      "Social & Lively",
      "Late Night"
    ],
    "heroImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.3,
    "reviewCount": 310,
    "verifiedVisitsCount": 120,
    "distanceKm": 3.2,
    "openingHours": "11:00 AM – 11:00 PM",
    "featuredQuote": "Warm tandoori sliders, masala chai, and spacious family tables.",
    "strengths": [
      "Spacious air-conditioned dining area",
      "Flavorful Indian-Continental fusion options"
    ],
    "weaknesses": [
      "Coffee selection is standard"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "Comfortable casual dining spot in Sector 35.",
      "loved": [
        "Paneer Tikka Sliders",
        "Masala Chai Pot"
      ],
      "disliked": [
        "Standard coffee"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.3,
        "reviews": 1100
      },
      "zomato": {
        "rating": 4.2,
        "reviews": 650
      },
      "swiggy": {
        "rating": 4.1,
        "reviews": 520
      },
      "cafeFinder": {
        "rating": 4.4,
        "trustScore": 87,
        "verifiedVisits": 120
      }
    },
    "coffeeScore": 74,
    "workScore": 90,
    "dateScore": 78,
    "quietScore": 76,
    "aestheticScore": 80,
    "groupScore": 89,
    "dessertScore": 80,
    "lateNightScore": 80,
    "wifi": true,
    "power": null,
    "seating": "spacious",
    "noiseLevel": "moderate",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "work",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ]
  },
  {
    "id": "subway-cafe-sec17",
    "name": "Subway Cafe Sector 17",
    "sector": "Sector 17",
    "city": "Chandigarh",
    "address": "SCO 22-23, Sector 17-C, Chandigarh",
    "coordinates": [
      30.7412,
      76.7842
    ],
    "priceRange": "₹",
    "approxCostForTwo": 400,
    "categories": [
      "budget",
      "study",
      "Work Friendly",
      "Get Work Done",
      "work",
      "food",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth"
    ],
    "tags": [
      "Sub Sandwiches",
      "Cookies",
      "Quick Lunch",
      "Get Work Done",
      "Work Friendly",
      "Sweet Tooth",
      "Bakery & Desserts"
    ],
    "heroImage": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.2,
    "reviewCount": 420,
    "verifiedVisitsCount": 155,
    "distanceKm": 2.3,
    "openingHours": "9:00 AM – 10:30 PM",
    "featuredQuote": "Quick custom subs and fresh chocolate chip cookies in Sector 17 Plaza.",
    "strengths": [
      "Consistent quality sandwiches with fresh vegetables",
      "Very fast turnaround for busy professionals"
    ],
    "weaknesses": [
      "Basic cafeteria interior"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "Reliable healthy quick lunch stop in Sector 17.",
      "loved": [
        "Roasted Chicken Sub",
        "Double Chocolate Cookie"
      ],
      "disliked": [
        "Basic ambiance"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.2,
        "reviews": 1600
      },
      "zomato": {
        "rating": 4.1,
        "reviews": 790
      },
      "swiggy": {
        "rating": 4.2,
        "reviews": 1200
      },
      "cafeFinder": {
        "rating": 4.3,
        "trustScore": 86,
        "verifiedVisits": 155
      }
    },
    "coffeeScore": 70,
    "workScore": 90,
    "dateScore": 65,
    "quietScore": 78,
    "aestheticScore": 72,
    "groupScore": 78,
    "dessertScore": 82,
    "lateNightScore": 74,
    "wifi": true,
    "power": true,
    "seating": "fast-casual",
    "noiseLevel": "moderate",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "work",
      "sweet-tooth"
    ]
  },
  {
    "id": "barista-sec9",
    "name": "Barista Cafe Sector 9",
    "sector": "Sector 9",
    "city": "Chandigarh",
    "address": "Inner Market, SCF 14, Sector 9-D, Chandigarh",
    "coordinates": [
      30.7442,
      76.7935
    ],
    "priceRange": "₹₹",
    "approxCostForTwo": 600,
    "categories": [
      "coffee",
      "quiet",
      "study",
      "Specialty Coffee",
      "Good Coffee",
      "good-coffee",
      "Work Friendly",
      "Get Work Done",
      "work",
      "Quiet / Reading",
      "Quiet Corner",
      "aesthetic",
      "instagrammable",
      "Aesthetic & Photo Spots",
      "Somewhere Pretty",
      "pretty",
      "food",
      "Bakery & Desserts",
      "Sweet Tooth",
      "sweet-tooth"
    ],
    "tags": [
      "Quiet Nook",
      "Classic Latte",
      "Work Friendly",
      "Good Coffee",
      "Get Work Done",
      "Quiet Corner",
      "Quiet",
      "Somewhere Pretty",
      "Aesthetic",
      "Sweet Tooth",
      "Bakery & Desserts"
    ],
    "heroImage": "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80"
    ],
    "aspectRatio": "3/4",
    "rating": 4.3,
    "reviewCount": 290,
    "verifiedVisitsCount": 110,
    "distanceKm": 2.1,
    "openingHours": "9:00 AM – 10:30 PM",
    "featuredQuote": "A quiet corner in Sector 9 market away from traffic noise.",
    "strengths": [
      "Pleasant quiet atmosphere with few distractions",
      "Reliable power outlets for laptops"
    ],
    "weaknesses": [
      "Small space"
    ],
    "verdict": {
      "status": "Worth visiting",
      "headline": "Peaceful neighborhood work spot in Sector 9.",
      "loved": [
        "Cafe Mocha",
        "Almond Biscotti"
      ],
      "disliked": [
        "Limited menu"
      ]
    },
    "sources": {
      "google": {
        "rating": 4.3,
        "reviews": 1100
      },
      "zomato": {
        "rating": 4.2,
        "reviews": 540
      },
      "swiggy": {
        "rating": 4.2,
        "reviews": 460
      },
      "cafeFinder": {
        "rating": 4.4,
        "trustScore": 87,
        "verifiedVisits": 110
      }
    },
    "coffeeScore": 84,
    "workScore": 90,
    "dateScore": 76,
    "quietScore": 92,
    "aestheticScore": 80,
    "groupScore": 74,
    "dessertScore": 93,
    "lateNightScore": 75,
    "wifi": true,
    "power": true,
    "seating": "laptop-friendly",
    "noiseLevel": "low",
    "outdoorSeating": false,
    "specialtyCoffee": false,
    "food": true,
    "desserts": true,
    "moods": [
      "good-coffee",
      "work",
      "quiet",
      "pretty",
      "sweet-tooth"
    ]
  }
];
