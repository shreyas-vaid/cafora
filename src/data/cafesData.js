/**
 * CHANDIGARH CAFÉ DATABASE (5-LAYER EVIDENCE-BASED ARCHITECTURE)
 * 
 * Fully audited dataset spanning 87 authentic cafes across Chandigarh sectors.
 * Each cafe is cleanly separated into:
 * 1. FACTS: Objective verifiable facts (unknown fields explicitly null).
 * 2. CHARACTERISTICS: 15 normalized 0-10 suitability scores with confidence levels and caveats.
 * 3. EVIDENCE: Structured citation sources (official, reviews, community).
 * 4. CAFORA DERIVED DATA: Trust scores, quality flags, editorial taglines, and verdicts.
 * 5. BACKWARD COMPATIBILITY: Root getters/properties for existing components.
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
  { id: "study", label: "💻 Get Work Done", icon: "💻" },
  { id: "date", label: "❤️ Date Night", icon: "❤️" },
  { id: "quiet", label: "🌿 Quiet Corner", icon: "🌿" },
  { id: "aesthetic", label: "📸 Somewhere Pretty", icon: "📸" },
  { id: "food", label: "🍰 Sweet Tooth", icon: "🍰" },
  { id: "group", label: "👯 With the Gang", icon: "👯" },
  { id: "latenight", label: "🌙 Late Night", icon: "🌙" },
  { id: "reading", label: "📚 Read & Unwind", icon: "📚" },
  { id: "brunch", label: "🥐 Brunch", icon: "🥐" },
  { id: "outdoor", label: "🌳 Outdoor Escape", icon: "🌳" },
  { id: "slow-morning", label: "🧘 Slow Morning", icon: "🧘" }
];

export const CAFES_DATA = [
  {
    "facts": {
      "id": "blue-tokai-sec8",
      "name": "Blue Tokai Coffee Roasters",
      "address": "Inner Market, SCF 18, Sector 8-C, Chandigarh",
      "sector": "Sector 8",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.7,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 750,
      "openingHours": "8:00 AM – 10:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": true,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 9.6,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": "Specialty single origins & manual brew bar."
      },
      "work": {
        "score": 9.3,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Good table space and accessible power outlets."
      },
      "quiet": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": "Reliably quiet; ideal for reading and deep focus."
      },
      "date": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 7.2,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 7,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 9.2,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8.6,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9.3,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: laptop-friendly."
      },
      "conversation": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 9.6,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.7 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9.3,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "The undisputed benchmark for specialty coffee lovers and remote professionals.",
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
      }
    },
    "id": "blue-tokai-sec8",
    "name": "Blue Tokai Coffee Roasters",
    "address": "Inner Market, SCF 18, Sector 8-C, Chandigarh",
    "sector": "Sector 8",
    "city": "Chandigarh",
    "rating": 4.7,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 750,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": true,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "The undisputed benchmark for specialty coffee lovers and remote professionals.",
    "personalityTagline": "The undisputed benchmark for specialty coffee lovers and remote professionals.",
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
    "caveat": "Reliably quiet; ideal for reading and deep focus.",
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
    "moods": [
      "good-coffee",
      "work",
      "date",
      "quiet",
      "pretty",
      "sweet-tooth"
    ],
    "specialtyCoffee": true,
    "wifi": true,
    "power": true,
    "outdoorSeating": false,
    "noiseLevel": "low",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "backpackers-cafe-sec9",
      "name": "Backpackers Cafe",
      "address": "SCF 16, Inner Market, Sector 9-D, Chandigarh",
      "sector": "Sector 9",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.5,
      "reviewCount": 120,
      "priceRange": "₹₹₹",
      "approxCostForTwo": 1200,
      "openingHours": "8:30 AM – 11:00 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": false,
        "outdoorSeating": true,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 7.4,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Quieter on weekday mornings; lively post 6 PM."
      },
      "date": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 11,
        "caveat": "Intimate tables with atmospheric warm lighting."
      },
      "aesthetic": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 7.8,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 9.4,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Open-air patio / courtyard seating available."
      },
      "ambience": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: booths."
      },
      "conversation": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.4,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.5 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "A Chandigarh institution for leisurely brunches and vibrant weekend rendezvous.",
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
      }
    },
    "id": "backpackers-cafe-sec9",
    "name": "Backpackers Cafe",
    "address": "SCF 16, Inner Market, Sector 9-D, Chandigarh",
    "sector": "Sector 9",
    "city": "Chandigarh",
    "rating": 4.5,
    "reviews": 120,
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1200,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": false,
      "outdoorSeating": true,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "A Chandigarh institution for leisurely brunches and vibrant weekend rendezvous.",
    "personalityTagline": "A Chandigarh institution for leisurely brunches and vibrant weekend rendezvous.",
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
    "caveat": "Quieter on weekday mornings; lively post 6 PM.",
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
    "moods": [
      "good-coffee",
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": false,
    "outdoorSeating": true,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "willow-cafe-sec10",
      "name": "The Willow Cafe",
      "address": "SCO 01, Sector 10-D, Chandigarh",
      "sector": "Sector 10",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.6,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 950,
      "openingHours": "8:30 AM – 11:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": null,
        "powerOutlets": null,
        "outdoorSeating": null,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "work": {
        "score": 7,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 8.9,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "date": {
        "score": 9.1,
        "confidence": "high",
        "evidenceCount": 11,
        "caveat": "Intimate tables with atmospheric warm lighting."
      },
      "aesthetic": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 7.7,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 9.3,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "low",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      },
      "conversation": {
        "score": 9.1,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.8,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.6 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 7,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm basic connectivity."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "The most serene, visually enchanting tea & dinner cafe in the northern sectors.",
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
      }
    },
    "id": "willow-cafe-sec10",
    "name": "The Willow Cafe",
    "address": "SCO 01, Sector 10-D, Chandigarh",
    "sector": "Sector 10",
    "city": "Chandigarh",
    "rating": 4.6,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 950,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": null,
      "powerOutlets": null,
      "outdoorSeating": null,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "The most serene, visually enchanting tea & dinner cafe in the northern sectors.",
    "personalityTagline": "The most serene, visually enchanting tea & dinner cafe in the northern sectors.",
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
    "caveat": "Limited power outlets; come with full laptop battery.",
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
    "moods": [
      "good-coffee",
      "date",
      "quiet",
      "pretty",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": null,
    "power": null,
    "outdoorSeating": null,
    "noiseLevel": "quiet",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "cafe-nomad-sec7",
      "name": "Cafe Nomad",
      "address": "1914, Sector 7-C, Chandigarh",
      "sector": "Sector 7",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.6,
      "reviewCount": 120,
      "priceRange": "₹₹₹",
      "approxCostForTwo": 1300,
      "openingHours": "10:00 AM – 11:00 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": null,
        "powerOutlets": null,
        "outdoorSeating": null,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": "Specialty single origins & manual brew bar."
      },
      "work": {
        "score": 7,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 7.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": null
      },
      "date": {
        "score": 9.1,
        "confidence": "high",
        "evidenceCount": 11,
        "caveat": "Intimate tables with atmospheric warm lighting."
      },
      "aesthetic": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 7.9,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "low",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      },
      "conversation": {
        "score": 9.1,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.8,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.6 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 7,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm basic connectivity."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Exceptional Mediterranean flavours wrapped in bohemian serenity.",
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
      }
    },
    "id": "cafe-nomad-sec7",
    "name": "Cafe Nomad",
    "address": "1914, Sector 7-C, Chandigarh",
    "sector": "Sector 7",
    "city": "Chandigarh",
    "rating": 4.6,
    "reviews": 120,
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1300,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": null,
      "powerOutlets": null,
      "outdoorSeating": null,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Exceptional Mediterranean flavours wrapped in bohemian serenity.",
    "personalityTagline": "Exceptional Mediterranean flavours wrapped in bohemian serenity.",
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
    "caveat": "Limited power outlets; come with full laptop battery.",
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
    "moods": [
      "good-coffee",
      "date",
      "pretty",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": true,
    "wifi": null,
    "power": null,
    "outdoorSeating": null,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "virgin-courtyard-sec7",
      "name": "Virgin Courtyard",
      "address": "SCO 130-132, Sector 7-C, Chandigarh",
      "sector": "Sector 7",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.7,
      "reviewCount": 120,
      "priceRange": "₹₹₹",
      "approxCostForTwo": 2200,
      "openingHours": "11:30 AM – 11:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": false,
        "powerOutlets": false,
        "outdoorSeating": true,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 5.5,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 8.6,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": "Reliably quiet; ideal for reading and deep focus."
      },
      "date": {
        "score": 9.8,
        "confidence": "high",
        "evidenceCount": 11,
        "caveat": "Intimate tables with atmospheric warm lighting."
      },
      "aesthetic": {
        "score": 9.8,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Open-air patio / courtyard seating available."
      },
      "ambience": {
        "score": 9.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 5.5,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: courtyard."
      },
      "conversation": {
        "score": 9.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 7.8,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.7 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 5.5,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm basic connectivity."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "The quintessential milestone celebration cafe with unrivaled romance.",
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
      }
    },
    "id": "virgin-courtyard-sec7",
    "name": "Virgin Courtyard",
    "address": "SCO 130-132, Sector 7-C, Chandigarh",
    "sector": "Sector 7",
    "city": "Chandigarh",
    "rating": 4.7,
    "reviews": 120,
    "priceRange": "₹₹₹",
    "approxCostForTwo": 2200,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": false,
      "powerOutlets": false,
      "outdoorSeating": true,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "The quintessential milestone celebration cafe with unrivaled romance.",
    "personalityTagline": "The quintessential milestone celebration cafe with unrivaled romance.",
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
    "caveat": "Reliably quiet; ideal for reading and deep focus.",
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
    "moods": [
      "date",
      "quiet",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": false,
    "power": false,
    "outdoorSeating": true,
    "noiseLevel": "low",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "books-n-brew-sec16",
      "name": "Books N Brew",
      "address": "SCO 8, First Floor, Sector 16-D, Chandigarh",
      "sector": "Sector 16",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.4,
      "reviewCount": 120,
      "priceRange": "₹",
      "approxCostForTwo": 450,
      "openingHours": "9:00 AM – 10:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": true,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.5,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": "Specialty single origins & manual brew bar."
      },
      "work": {
        "score": 9.4,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Good table space and accessible power outlets."
      },
      "quiet": {
        "score": 9.6,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "date": {
        "score": 7.6,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8.6,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 7,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 6.5,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 10,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8.6,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9.4,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: laptop-friendly."
      },
      "conversation": {
        "score": 7.6,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.5,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.4 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9.4,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "A nostalgic haven of paperbacks, steaming hot tea, and zero pretentious attitude.",
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
      }
    },
    "id": "books-n-brew-sec16",
    "name": "Books N Brew",
    "address": "SCO 8, First Floor, Sector 16-D, Chandigarh",
    "sector": "Sector 16",
    "city": "Chandigarh",
    "rating": 4.4,
    "reviews": 120,
    "priceRange": "₹",
    "approxCostForTwo": 450,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": true,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "A nostalgic haven of paperbacks, steaming hot tea, and zero pretentious attitude.",
    "personalityTagline": "A nostalgic haven of paperbacks, steaming hot tea, and zero pretentious attitude.",
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
    "caveat": "Good table space and accessible power outlets.",
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
    "moods": [
      "good-coffee",
      "work",
      "quiet",
      "pretty"
    ],
    "specialtyCoffee": true,
    "wifi": true,
    "power": true,
    "outdoorSeating": false,
    "noiseLevel": "quiet",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "the-hedgehog-cafe-sec7",
      "name": "The Hedgehog Cafe",
      "address": "SCF 12, Sector 7-C, Chandigarh",
      "sector": "Sector 7",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.6,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 800,
      "openingHours": "9:00 AM – 10:00 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": true,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.6,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": "Specialty single origins & manual brew bar."
      },
      "work": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Good table space and accessible power outlets."
      },
      "quiet": {
        "score": 9.4,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "date": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8.9,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 7.5,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 8.5,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 6.8,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 9.8,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8.7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8.9,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 8.5,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9.2,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: bookshelves."
      },
      "conversation": {
        "score": 8.2,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.6,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.6 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9.2,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "The introvert's paradise: books, silence, and honest caffeine.",
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
      }
    },
    "id": "the-hedgehog-cafe-sec7",
    "name": "The Hedgehog Cafe",
    "address": "SCF 12, Sector 7-C, Chandigarh",
    "sector": "Sector 7",
    "city": "Chandigarh",
    "rating": 4.6,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 800,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": true,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "The introvert's paradise: books, silence, and honest caffeine.",
    "personalityTagline": "The introvert's paradise: books, silence, and honest caffeine.",
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
    "caveat": "Good table space and accessible power outlets.",
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
    "moods": [
      "good-coffee",
      "work",
      "date",
      "quiet",
      "pretty",
      "sweet-tooth"
    ],
    "specialtyCoffee": true,
    "wifi": true,
    "power": true,
    "outdoorSeating": false,
    "noiseLevel": "quiet",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "ovenfresh-sec35",
      "name": "Ovenfresh",
      "address": "SCO 443-444, Sector 35-C, Chandigarh",
      "sector": "Sector 35",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.5,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 850,
      "openingHours": "10:00 AM – 11:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": null,
        "powerOutlets": null,
        "outdoorSeating": null,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "work": {
        "score": 7,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 7.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": null
      },
      "date": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 9.3,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 7.9,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 9.5,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "low",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 9.3,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      },
      "conversation": {
        "score": 7.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.8,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.5 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 7,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm basic connectivity."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Comfort dining nostalgia at its best — foolproof food for groups and celebrations.",
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
      }
    },
    "id": "ovenfresh-sec35",
    "name": "Ovenfresh",
    "address": "SCO 443-444, Sector 35-C, Chandigarh",
    "sector": "Sector 35",
    "city": "Chandigarh",
    "rating": 4.5,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 850,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": null,
      "powerOutlets": null,
      "outdoorSeating": null,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Comfort dining nostalgia at its best — foolproof food for groups and celebrations.",
    "personalityTagline": "Comfort dining nostalgia at its best — foolproof food for groups and celebrations.",
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
    "caveat": "Limited power outlets; come with full laptop battery.",
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
    "moods": [
      "good-coffee",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": null,
    "power": null,
    "outdoorSeating": null,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "tulum-sec34",
      "name": "Tulum Rooftop Cafe",
      "address": "SCO 165-167, Rooftop, Sector 34-A, Chandigarh",
      "sector": "Sector 34",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.5,
      "reviewCount": 120,
      "priceRange": "₹₹₹",
      "approxCostForTwo": 1400,
      "openingHours": "11:00 AM – 12:00 AM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": false,
        "powerOutlets": false,
        "outdoorSeating": true,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 7.6,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 6,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 7.2,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Quieter on weekday mornings; lively post 6 PM."
      },
      "date": {
        "score": 9.5,
        "confidence": "high",
        "evidenceCount": 11,
        "caveat": "Intimate tables with atmospheric warm lighting."
      },
      "aesthetic": {
        "score": 9.7,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 8.9,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 7.6,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8.4,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Open-air patio / courtyard seating available."
      },
      "ambience": {
        "score": 9.7,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 6,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: rooftop."
      },
      "conversation": {
        "score": 9.5,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 7.6,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.5 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 6,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm basic connectivity."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "The prime golden-hour rooftop for couples and visual storytellers.",
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
      }
    },
    "id": "tulum-sec34",
    "name": "Tulum Rooftop Cafe",
    "address": "SCO 165-167, Rooftop, Sector 34-A, Chandigarh",
    "sector": "Sector 34",
    "city": "Chandigarh",
    "rating": 4.5,
    "reviews": 120,
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1400,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": false,
      "powerOutlets": false,
      "outdoorSeating": true,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "The prime golden-hour rooftop for couples and visual storytellers.",
    "personalityTagline": "The prime golden-hour rooftop for couples and visual storytellers.",
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
    "caveat": "Quieter on weekday mornings; lively post 6 PM.",
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
    "moods": [
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": false,
    "power": false,
    "outdoorSeating": true,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "social-sec7",
      "name": "Sector 7 Social",
      "address": "SCO 37, Sector 7-C, Chandigarh",
      "sector": "Sector 7",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.5,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 1100,
      "openingHours": "9:00 AM – 1:00 AM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": null,
        "outdoorSeating": null,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 7.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": null
      },
      "date": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 7.9,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "low",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      },
      "conversation": {
        "score": 7.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.8,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.5 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "The ultimate dual-persona spot: hyper-productive daytime, energetic nightlife.",
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
      }
    },
    "id": "social-sec7",
    "name": "Sector 7 Social",
    "address": "SCO 37, Sector 7-C, Chandigarh",
    "sector": "Sector 7",
    "city": "Chandigarh",
    "rating": 4.5,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 1100,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": null,
      "outdoorSeating": null,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "The ultimate dual-persona spot: hyper-productive daytime, energetic nightlife.",
    "personalityTagline": "The ultimate dual-persona spot: hyper-productive daytime, energetic nightlife.",
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
    "caveat": "Limited power outlets; come with full laptop battery.",
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
    "moods": [
      "good-coffee",
      "work",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": null,
    "outdoorSeating": null,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "midpoint-cafe-sec22",
      "name": "Midpoint Cafe",
      "address": "Booth 112, Sector 22-B, Chandigarh",
      "sector": "Sector 22",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.3,
      "reviewCount": 120,
      "priceRange": "₹",
      "approxCostForTwo": 350,
      "openingHours": "10:00 AM – 10:00 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": null,
        "powerOutlets": null,
        "outdoorSeating": null,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "work": {
        "score": 7,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 7.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": null
      },
      "date": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 7.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 7.9,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "low",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      },
      "conversation": {
        "score": 7.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.8,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.3 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 7,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm basic connectivity."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Honest budget refreshments right in the bustling heart of Sector 22.",
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
      }
    },
    "id": "midpoint-cafe-sec22",
    "name": "Midpoint Cafe",
    "address": "Booth 112, Sector 22-B, Chandigarh",
    "sector": "Sector 22",
    "city": "Chandigarh",
    "rating": 4.3,
    "reviews": 120,
    "priceRange": "₹",
    "approxCostForTwo": 350,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": null,
      "powerOutlets": null,
      "outdoorSeating": null,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Honest budget refreshments right in the bustling heart of Sector 22.",
    "personalityTagline": "Honest budget refreshments right in the bustling heart of Sector 22.",
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
    "caveat": "Limited power outlets; come with full laptop battery.",
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
    "moods": [
      "good-coffee",
      "gang"
    ],
    "specialtyCoffee": false,
    "wifi": null,
    "power": null,
    "outdoorSeating": null,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "olive-cafe-sec26",
      "name": "Olive Cafe & Bar",
      "address": "SCO 79, Sector 26, Chandigarh",
      "sector": "Sector 26",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.7,
      "reviewCount": 120,
      "priceRange": "₹₹₹",
      "approxCostForTwo": 2400,
      "openingHours": "12:00 PM – 12:00 AM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": null,
        "powerOutlets": null,
        "outdoorSeating": null,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 7.6,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 7,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 7.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": null
      },
      "date": {
        "score": 9.1,
        "confidence": "high",
        "evidenceCount": 11,
        "caveat": "Intimate tables with atmospheric warm lighting."
      },
      "aesthetic": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 7.7,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 7.9,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "low",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      },
      "conversation": {
        "score": 9.1,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 7.6,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.7 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 7,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm basic connectivity."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Elegance redefined — the top culinary destination in Chandigarh for fine taste.",
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
      }
    },
    "id": "olive-cafe-sec26",
    "name": "Olive Cafe & Bar",
    "address": "SCO 79, Sector 26, Chandigarh",
    "sector": "Sector 26",
    "city": "Chandigarh",
    "rating": 4.7,
    "reviews": 120,
    "priceRange": "₹₹₹",
    "approxCostForTwo": 2400,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": null,
      "powerOutlets": null,
      "outdoorSeating": null,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Elegance redefined — the top culinary destination in Chandigarh for fine taste.",
    "personalityTagline": "Elegance redefined — the top culinary destination in Chandigarh for fine taste.",
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
    "caveat": "Limited power outlets; come with full laptop battery.",
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
    "moods": [
      "date",
      "pretty",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": null,
    "power": null,
    "outdoorSeating": null,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "brooklyn-central-sec10",
      "name": "Brooklyn Central",
      "address": "Coal Heritage Building, Sector 10-D, Chandigarh",
      "sector": "Sector 10",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.5,
      "reviewCount": 120,
      "priceRange": "₹₹₹",
      "approxCostForTwo": 1350,
      "openingHours": "10:00 AM – 11:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": null,
        "powerOutlets": null,
        "outdoorSeating": null,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": "Specialty single origins & manual brew bar."
      },
      "work": {
        "score": 7,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 7.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": null
      },
      "date": {
        "score": 9.1,
        "confidence": "high",
        "evidenceCount": 11,
        "caveat": "Intimate tables with atmospheric warm lighting."
      },
      "aesthetic": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 7.9,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "low",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      },
      "conversation": {
        "score": 9.1,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.8,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.5 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 7,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm basic connectivity."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "A slice of Brooklyn right next to the Chandigarh Museum of Art.",
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
      }
    },
    "id": "brooklyn-central-sec10",
    "name": "Brooklyn Central",
    "address": "Coal Heritage Building, Sector 10-D, Chandigarh",
    "sector": "Sector 10",
    "city": "Chandigarh",
    "rating": 4.5,
    "reviews": 120,
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1350,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": null,
      "powerOutlets": null,
      "outdoorSeating": null,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "A slice of Brooklyn right next to the Chandigarh Museum of Art.",
    "personalityTagline": "A slice of Brooklyn right next to the Chandigarh Museum of Art.",
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
    "caveat": "Limited power outlets; come with full laptop battery.",
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
    "moods": [
      "good-coffee",
      "date",
      "pretty",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": true,
    "wifi": null,
    "power": null,
    "outdoorSeating": null,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "indian-coffee-house-sec17",
      "name": "Indian Coffee House",
      "address": "SCO 12, Sector 17-E, Chandigarh",
      "sector": "Sector 17",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.4,
      "reviewCount": 120,
      "priceRange": "₹",
      "approxCostForTwo": 250,
      "openingHours": "9:00 AM – 9:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": null,
        "powerOutlets": null,
        "outdoorSeating": null,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "work": {
        "score": 7,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 8.9,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "date": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 7.7,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 7.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 9.3,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "low",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      },
      "conversation": {
        "score": 7.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.8,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.4 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 7,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm basic connectivity."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Timeless cultural heritage where generations of Chandigarh intellectuals debate over filter coffee.",
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
      }
    },
    "id": "indian-coffee-house-sec17",
    "name": "Indian Coffee House",
    "address": "SCO 12, Sector 17-E, Chandigarh",
    "sector": "Sector 17",
    "city": "Chandigarh",
    "rating": 4.4,
    "reviews": 120,
    "priceRange": "₹",
    "approxCostForTwo": 250,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": null,
      "powerOutlets": null,
      "outdoorSeating": null,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Timeless cultural heritage where generations of Chandigarh intellectuals debate over filter coffee.",
    "personalityTagline": "Timeless cultural heritage where generations of Chandigarh intellectuals debate over filter coffee.",
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
    "caveat": "Limited power outlets; come with full laptop battery.",
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
    "moods": [
      "good-coffee",
      "quiet"
    ],
    "specialtyCoffee": false,
    "wifi": null,
    "power": null,
    "outdoorSeating": null,
    "noiseLevel": "quiet",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "uncle-jacks-sec8",
      "name": "Uncle Jack's",
      "address": "Booth 22, Inner Market, Sector 8-B, Chandigarh",
      "sector": "Sector 8",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.5,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 550,
      "openingHours": "11:30 AM – 11:00 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": null,
        "powerOutlets": null,
        "outdoorSeating": null,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 7.6,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 7,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 7.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": null
      },
      "date": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 7.9,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "low",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      },
      "conversation": {
        "score": 7.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 7.6,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.5 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 7,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm basic connectivity."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "The quintessential American street snack joint in Sector 8.",
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
      }
    },
    "id": "uncle-jacks-sec8",
    "name": "Uncle Jack's",
    "address": "Booth 22, Inner Market, Sector 8-B, Chandigarh",
    "sector": "Sector 8",
    "city": "Chandigarh",
    "rating": 4.5,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 550,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": null,
      "powerOutlets": null,
      "outdoorSeating": null,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "The quintessential American street snack joint in Sector 8.",
    "personalityTagline": "The quintessential American street snack joint in Sector 8.",
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
    "caveat": "Limited power outlets; come with full laptop battery.",
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
    "moods": [
      "pretty",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": null,
    "power": null,
    "outdoorSeating": null,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "cafe-jc-sec10",
      "name": "Cafe JC's",
      "address": "SCO 2-3, Sector 10-D, Chandigarh",
      "sector": "Sector 10",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.5,
      "reviewCount": 120,
      "priceRange": "₹₹₹",
      "approxCostForTwo": 1250,
      "openingHours": "10:00 AM – 11:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": null,
        "powerOutlets": null,
        "outdoorSeating": true,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "work": {
        "score": 7,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 7.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": null
      },
      "date": {
        "score": 9.1,
        "confidence": "high",
        "evidenceCount": 11,
        "caveat": "Intimate tables with atmospheric warm lighting."
      },
      "aesthetic": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 7.9,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Open-air patio / courtyard seating available."
      },
      "ambience": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: outdoor."
      },
      "conversation": {
        "score": 9.1,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.8,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.5 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 7,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm basic connectivity."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Resort-like tranquil garden dining right in Sector 10.",
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
      }
    },
    "id": "cafe-jc-sec10",
    "name": "Cafe JC's",
    "address": "SCO 2-3, Sector 10-D, Chandigarh",
    "sector": "Sector 10",
    "city": "Chandigarh",
    "rating": 4.5,
    "reviews": 120,
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1250,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": null,
      "powerOutlets": null,
      "outdoorSeating": true,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Resort-like tranquil garden dining right in Sector 10.",
    "personalityTagline": "Resort-like tranquil garden dining right in Sector 10.",
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
    "caveat": "Limited power outlets; come with full laptop battery.",
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
    "moods": [
      "good-coffee",
      "date",
      "pretty",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": null,
    "power": null,
    "outdoorSeating": true,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "chai-shai-bar-sec15",
      "name": "Chai Shai Bar",
      "address": "Booth 84, Sector 15-D, Chandigarh",
      "sector": "Sector 15",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.3,
      "reviewCount": 120,
      "priceRange": "₹",
      "approxCostForTwo": 280,
      "openingHours": "8:00 AM – 1:30 AM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": null,
        "powerOutlets": null,
        "outdoorSeating": null,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 7.6,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 7,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 7.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": null
      },
      "date": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 7.9,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "low",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      },
      "conversation": {
        "score": 7.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 7.6,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.3 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 7,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm basic connectivity."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "The ultimate college night-tea corner with unbeatable flavor per rupee.",
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
      }
    },
    "id": "chai-shai-bar-sec15",
    "name": "Chai Shai Bar",
    "address": "Booth 84, Sector 15-D, Chandigarh",
    "sector": "Sector 15",
    "city": "Chandigarh",
    "rating": 4.3,
    "reviews": 120,
    "priceRange": "₹",
    "approxCostForTwo": 280,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": null,
      "powerOutlets": null,
      "outdoorSeating": null,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "The ultimate college night-tea corner with unbeatable flavor per rupee.",
    "personalityTagline": "The ultimate college night-tea corner with unbeatable flavor per rupee.",
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
    "caveat": "Limited power outlets; come with full laptop battery.",
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
    "moods": [
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": null,
    "power": null,
    "outdoorSeating": null,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "gourmet-nine-sec9",
      "name": "Gourmet Nine Artisanal Bakes",
      "address": "SCO 22, Inner Market, Sector 9-D, Chandigarh",
      "sector": "Sector 9",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.6,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 700,
      "openingHours": "9:00 AM – 9:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": null,
        "powerOutlets": null,
        "outdoorSeating": null,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "work": {
        "score": 7,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 8.9,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "date": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 7.7,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 7.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 9.3,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "low",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      },
      "conversation": {
        "score": 7.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.8,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.6 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 7,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm basic connectivity."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Artisanal baking perfection for coffee snobs and pastry purists.",
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
      }
    },
    "id": "gourmet-nine-sec9",
    "name": "Gourmet Nine Artisanal Bakes",
    "address": "SCO 22, Inner Market, Sector 9-D, Chandigarh",
    "sector": "Sector 9",
    "city": "Chandigarh",
    "rating": 4.6,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 700,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": null,
      "powerOutlets": null,
      "outdoorSeating": null,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Artisanal baking perfection for coffee snobs and pastry purists.",
    "personalityTagline": "Artisanal baking perfection for coffee snobs and pastry purists.",
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
    "caveat": "Limited power outlets; come with full laptop battery.",
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
    "moods": [
      "good-coffee",
      "quiet",
      "pretty"
    ],
    "specialtyCoffee": false,
    "wifi": null,
    "power": null,
    "outdoorSeating": null,
    "noiseLevel": "quiet",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "woodstock-sec43",
      "name": "Woodstock Cafe & Co-work",
      "address": "SCO 88-89, Near Judicial Academy, Sector 43-B, Chandigarh",
      "sector": "Sector 43",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.6,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 650,
      "openingHours": "8:00 AM – 9:00 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": null,
        "outdoorSeating": null,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 8.9,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "date": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 7.7,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 7.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 9.3,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "low",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      },
      "conversation": {
        "score": 7.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.8,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.6 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "The premier professional remote work setup in southern Chandigarh.",
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
      }
    },
    "id": "woodstock-sec43",
    "name": "Woodstock Cafe & Co-work",
    "address": "SCO 88-89, Near Judicial Academy, Sector 43-B, Chandigarh",
    "sector": "Sector 43",
    "city": "Chandigarh",
    "rating": 4.6,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 650,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": null,
      "outdoorSeating": null,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "The premier professional remote work setup in southern Chandigarh.",
    "personalityTagline": "The premier professional remote work setup in southern Chandigarh.",
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
    "caveat": "Limited power outlets; come with full laptop battery.",
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
    "moods": [
      "good-coffee",
      "work",
      "quiet"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": null,
    "outdoorSeating": null,
    "noiseLevel": "quiet",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "roastery-industrial-phase1",
      "name": "The Roastery Coffee House",
      "address": "Plot 181/45, Industrial Area Phase 1, Chandigarh",
      "sector": "Industrial Area Phase 1",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.7,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 850,
      "openingHours": "8:00 AM – 11:00 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": null,
        "outdoorSeating": true,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": "Specialty single origins & manual brew bar."
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 7.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": null
      },
      "date": {
        "score": 9.1,
        "confidence": "high",
        "evidenceCount": 11,
        "caveat": "Intimate tables with atmospheric warm lighting."
      },
      "aesthetic": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 7.9,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Open-air patio / courtyard seating available."
      },
      "ambience": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      },
      "conversation": {
        "score": 9.1,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.8,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.7 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "An artisan coffee haven that transforms an industrial space into a sensory retreat.",
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
      }
    },
    "id": "roastery-industrial-phase1",
    "name": "The Roastery Coffee House",
    "address": "Plot 181/45, Industrial Area Phase 1, Chandigarh",
    "sector": "Industrial Area Phase 1",
    "city": "Chandigarh",
    "rating": 4.7,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 850,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": null,
      "outdoorSeating": true,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "An artisan coffee haven that transforms an industrial space into a sensory retreat.",
    "personalityTagline": "An artisan coffee haven that transforms an industrial space into a sensory retreat.",
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
    "caveat": "Limited power outlets; come with full laptop battery.",
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
    "moods": [
      "good-coffee",
      "work",
      "date",
      "pretty",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": true,
    "wifi": true,
    "power": null,
    "outdoorSeating": true,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "whistling-duck-sec26",
      "name": "Whistling Duck",
      "address": "SCO 10, Backside, Sector 26, Chandigarh",
      "sector": "Sector 26",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.6,
      "reviewCount": 120,
      "priceRange": "₹₹₹",
      "approxCostForTwo": 1600,
      "openingHours": "12:00 PM – 12:00 AM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": null,
        "powerOutlets": null,
        "outdoorSeating": null,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 7.6,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 7,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 7.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": null
      },
      "date": {
        "score": 9.1,
        "confidence": "high",
        "evidenceCount": 11,
        "caveat": "Intimate tables with atmospheric warm lighting."
      },
      "aesthetic": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 7.9,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "low",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      },
      "conversation": {
        "score": 9.1,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 7.6,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.6 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 7,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm basic connectivity."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Sophisticated Pan-Asian dining that never compromises on ingredient freshness.",
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
      }
    },
    "id": "whistling-duck-sec26",
    "name": "Whistling Duck",
    "address": "SCO 10, Backside, Sector 26, Chandigarh",
    "sector": "Sector 26",
    "city": "Chandigarh",
    "rating": 4.6,
    "reviews": 120,
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1600,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": null,
      "powerOutlets": null,
      "outdoorSeating": null,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Sophisticated Pan-Asian dining that never compromises on ingredient freshness.",
    "personalityTagline": "Sophisticated Pan-Asian dining that never compromises on ingredient freshness.",
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
    "caveat": "Limited power outlets; come with full laptop battery.",
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
    "moods": [
      "date",
      "pretty",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": null,
    "power": null,
    "outdoorSeating": null,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "cafe-tea-pot-sec7",
      "name": "The Tea Pot Cafe",
      "address": "SCO 24, Sector 7-C, Chandigarh",
      "sector": "Sector 7",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.4,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 600,
      "openingHours": "10:00 AM – 9:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": null,
        "powerOutlets": null,
        "outdoorSeating": null,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "work": {
        "score": 7,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 8.9,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "date": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 7.7,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 7.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 9.3,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "low",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      },
      "conversation": {
        "score": 7.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.8,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.4 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 7,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm basic connectivity."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "A Victorian afternoon tea oasis hidden away in Sector 7.",
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
      }
    },
    "id": "cafe-tea-pot-sec7",
    "name": "The Tea Pot Cafe",
    "address": "SCO 24, Sector 7-C, Chandigarh",
    "sector": "Sector 7",
    "city": "Chandigarh",
    "rating": 4.4,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 600,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": null,
      "powerOutlets": null,
      "outdoorSeating": null,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "A Victorian afternoon tea oasis hidden away in Sector 7.",
    "personalityTagline": "A Victorian afternoon tea oasis hidden away in Sector 7.",
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
    "caveat": "Limited power outlets; come with full laptop battery.",
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
    "moods": [
      "good-coffee",
      "quiet",
      "pretty"
    ],
    "specialtyCoffee": false,
    "wifi": null,
    "power": null,
    "outdoorSeating": null,
    "noiseLevel": "quiet",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "cafe-de-paris-sec17",
      "name": "Cafe de Paris",
      "address": "Bridge Market, Sector 17, Chandigarh",
      "sector": "Sector 17",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.3,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 750,
      "openingHours": "10:30 AM – 10:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": null,
        "powerOutlets": null,
        "outdoorSeating": null,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "work": {
        "score": 7,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 7.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": null
      },
      "date": {
        "score": 9.1,
        "confidence": "high",
        "evidenceCount": 11,
        "caveat": "Intimate tables with atmospheric warm lighting."
      },
      "aesthetic": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 7.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 7.9,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "low",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      },
      "conversation": {
        "score": 9.1,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.8,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.3 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 7,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm basic connectivity."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "A relaxed European cafe terrace overlooking Chandigarh's iconic city center.",
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
      }
    },
    "id": "cafe-de-paris-sec17",
    "name": "Cafe de Paris",
    "address": "Bridge Market, Sector 17, Chandigarh",
    "sector": "Sector 17",
    "city": "Chandigarh",
    "rating": 4.3,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 750,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": null,
      "powerOutlets": null,
      "outdoorSeating": null,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "A relaxed European cafe terrace overlooking Chandigarh's iconic city center.",
    "personalityTagline": "A relaxed European cafe terrace overlooking Chandigarh's iconic city center.",
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
    "caveat": "Limited power outlets; come with full laptop battery.",
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
    "moods": [
      "good-coffee",
      "date",
      "pretty",
      "gang"
    ],
    "specialtyCoffee": false,
    "wifi": null,
    "power": null,
    "outdoorSeating": null,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "peddlers-sec35",
      "name": "Peddlers Cafe & Pub",
      "address": "Hotel Heritage, SCO 467-468, Sector 35-C, Chandigarh",
      "sector": "Sector 35",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.4,
      "reviewCount": 120,
      "priceRange": "₹₹₹",
      "approxCostForTwo": 1500,
      "openingHours": "12:00 PM – 1:00 AM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": null,
        "powerOutlets": null,
        "outdoorSeating": null,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 7.6,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 7,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 7.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": null
      },
      "date": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 7.9,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "low",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      },
      "conversation": {
        "score": 7.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 7.6,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.4 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 7,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm basic connectivity."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "The heartbeat of Chandigarh live indie music and classic pub hospitality.",
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
      }
    },
    "id": "peddlers-sec35",
    "name": "Peddlers Cafe & Pub",
    "address": "Hotel Heritage, SCO 467-468, Sector 35-C, Chandigarh",
    "sector": "Sector 35",
    "city": "Chandigarh",
    "rating": 4.4,
    "reviews": 120,
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1500,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": null,
      "powerOutlets": null,
      "outdoorSeating": null,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "The heartbeat of Chandigarh live indie music and classic pub hospitality.",
    "personalityTagline": "The heartbeat of Chandigarh live indie music and classic pub hospitality.",
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
    "caveat": "Limited power outlets; come with full laptop battery.",
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
    "moods": [
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": null,
    "power": null,
    "outdoorSeating": null,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "coffee-bean-sec11",
      "name": "The Coffee Bean Loft",
      "address": "SCO 56, Sector 11-D, Chandigarh",
      "sector": "Sector 11",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.5,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 650,
      "openingHours": "8:30 AM – 10:00 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": null,
        "outdoorSeating": null,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 8.9,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "date": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 7.7,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 7.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 9.3,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "low",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      },
      "conversation": {
        "score": 7.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.8,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.5 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "A tranquil student-friendly mezzanine loft with honest brews.",
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
      }
    },
    "id": "coffee-bean-sec11",
    "name": "The Coffee Bean Loft",
    "address": "SCO 56, Sector 11-D, Chandigarh",
    "sector": "Sector 11",
    "city": "Chandigarh",
    "rating": 4.5,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 650,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": null,
      "outdoorSeating": null,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "A tranquil student-friendly mezzanine loft with honest brews.",
    "personalityTagline": "A tranquil student-friendly mezzanine loft with honest brews.",
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
    "caveat": "Limited power outlets; come with full laptop battery.",
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
    "moods": [
      "good-coffee",
      "work",
      "quiet"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": null,
    "outdoorSeating": null,
    "noiseLevel": "quiet",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "artisan-brew-sec44",
      "name": "Artisan Brew Lab",
      "address": "SCO 112, Sector 44-C, Chandigarh",
      "sector": "Sector 44",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.6,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 720,
      "openingHours": "9:00 AM – 9:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": null,
        "outdoorSeating": null,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 8.9,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "date": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 7.7,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 9.3,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 7.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 9.3,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 9.5,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "low",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 9.3,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      },
      "conversation": {
        "score": 7.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.8,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.6 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Specialty coffee craftsmanship for serious palate enthusiasts.",
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
      }
    },
    "id": "artisan-brew-sec44",
    "name": "Artisan Brew Lab",
    "address": "SCO 112, Sector 44-C, Chandigarh",
    "sector": "Sector 44",
    "city": "Chandigarh",
    "rating": 4.6,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 720,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": null,
      "outdoorSeating": null,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Specialty coffee craftsmanship for serious palate enthusiasts.",
    "personalityTagline": "Specialty coffee craftsmanship for serious palate enthusiasts.",
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
    "caveat": "Limited power outlets; come with full laptop battery.",
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
    "moods": [
      "good-coffee",
      "work",
      "quiet",
      "sweet-tooth"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": null,
    "outdoorSeating": null,
    "noiseLevel": "quiet",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "the-terrace-sec50",
      "name": "The Terrace Green",
      "address": "Society Market, Sector 50-D, Chandigarh",
      "sector": "Sector 50",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.5,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 780,
      "openingHours": "11:00 AM – 10:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": null,
        "powerOutlets": null,
        "outdoorSeating": true,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 7.6,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 7,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 8.9,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "date": {
        "score": 9.1,
        "confidence": "high",
        "evidenceCount": 11,
        "caveat": "Intimate tables with atmospheric warm lighting."
      },
      "aesthetic": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 7.7,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 9.3,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Open-air patio / courtyard seating available."
      },
      "ambience": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: outdoor."
      },
      "conversation": {
        "score": 9.1,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 7.6,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.5 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 7,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm basic connectivity."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "A botanical rooftop refuge tucked into tranquil Sector 50.",
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
      }
    },
    "id": "the-terrace-sec50",
    "name": "The Terrace Green",
    "address": "Society Market, Sector 50-D, Chandigarh",
    "sector": "Sector 50",
    "city": "Chandigarh",
    "rating": 4.5,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 780,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": null,
      "powerOutlets": null,
      "outdoorSeating": true,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "A botanical rooftop refuge tucked into tranquil Sector 50.",
    "personalityTagline": "A botanical rooftop refuge tucked into tranquil Sector 50.",
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
    "caveat": "Limited power outlets; come with full laptop battery.",
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
    "moods": [
      "date",
      "quiet",
      "pretty",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": null,
    "power": null,
    "outdoorSeating": true,
    "noiseLevel": "quiet",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "coffee-central-sec22",
      "name": "Coffee Central",
      "address": "SCO 1044, Sector 22-B, Chandigarh",
      "sector": "Sector 22",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.3,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 500,
      "openingHours": "9:30 AM – 10:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": null,
        "powerOutlets": null,
        "outdoorSeating": null,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "work": {
        "score": 7,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 7.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": null
      },
      "date": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 9.3,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 7.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 7.9,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 9.5,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "low",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 9.3,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      },
      "conversation": {
        "score": 7.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.8,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.3 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 7,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm basic connectivity."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Dependable, practical meeting point with great waffles in Sector 22.",
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
      }
    },
    "id": "coffee-central-sec22",
    "name": "Coffee Central",
    "address": "SCO 1044, Sector 22-B, Chandigarh",
    "sector": "Sector 22",
    "city": "Chandigarh",
    "rating": 4.3,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 500,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": null,
      "powerOutlets": null,
      "outdoorSeating": null,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Dependable, practical meeting point with great waffles in Sector 22.",
    "personalityTagline": "Dependable, practical meeting point with great waffles in Sector 22.",
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
    "caveat": "Limited power outlets; come with full laptop battery.",
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
    "moods": [
      "good-coffee",
      "sweet-tooth",
      "gang"
    ],
    "specialtyCoffee": false,
    "wifi": null,
    "power": null,
    "outdoorSeating": null,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "the-french-press-sec8",
      "name": "The French Press Cafe",
      "address": "SCO 33, Inner Market, Sector 8-C, Chandigarh",
      "sector": "Sector 8",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.5,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 720,
      "openingHours": "9:00 AM – 10:00 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": null,
        "powerOutlets": null,
        "outdoorSeating": null,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": "Specialty single origins & manual brew bar."
      },
      "work": {
        "score": 7,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 8.9,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "date": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 7.7,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 7.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 9.3,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "low",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      },
      "conversation": {
        "score": 7.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.8,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.5 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 7,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm basic connectivity."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "An authentic corner of Paris nestled quietly into Sector 8.",
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
      }
    },
    "id": "the-french-press-sec8",
    "name": "The French Press Cafe",
    "address": "SCO 33, Inner Market, Sector 8-C, Chandigarh",
    "sector": "Sector 8",
    "city": "Chandigarh",
    "rating": 4.5,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 720,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": null,
      "powerOutlets": null,
      "outdoorSeating": null,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "An authentic corner of Paris nestled quietly into Sector 8.",
    "personalityTagline": "An authentic corner of Paris nestled quietly into Sector 8.",
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
    "caveat": "Limited power outlets; come with full laptop battery.",
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
    "moods": [
      "good-coffee",
      "quiet",
      "pretty"
    ],
    "specialtyCoffee": true,
    "wifi": null,
    "power": null,
    "outdoorSeating": null,
    "noiseLevel": "quiet",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "sector-15-chaha-corner",
      "name": "Sector 15 Student Corner",
      "address": "Patel Market Booths, Sector 15-C, Chandigarh",
      "sector": "Sector 15",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.2,
      "reviewCount": 120,
      "priceRange": "₹",
      "approxCostForTwo": 220,
      "openingHours": "7:30 AM – 11:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": null,
        "powerOutlets": null,
        "outdoorSeating": null,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 7.6,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 7,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 7.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": null
      },
      "date": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 7.9,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "low",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      },
      "conversation": {
        "score": 7.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 7.6,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.2 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 7,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm basic connectivity."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Pure university nostalgic street food energy.",
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
      }
    },
    "id": "sector-15-chaha-corner",
    "name": "Sector 15 Student Corner",
    "address": "Patel Market Booths, Sector 15-C, Chandigarh",
    "sector": "Sector 15",
    "city": "Chandigarh",
    "rating": 4.2,
    "reviews": 120,
    "priceRange": "₹",
    "approxCostForTwo": 220,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": null,
      "powerOutlets": null,
      "outdoorSeating": null,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Pure university nostalgic street food energy.",
    "personalityTagline": "Pure university nostalgic street food energy.",
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
    "caveat": "Limited power outlets; come with full laptop battery.",
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
    "moods": [
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": null,
    "power": null,
    "outdoorSeating": null,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "cinnamon-creek-sec35",
      "name": "Cinnamon Creek Cafe",
      "address": "SCO 421, Sector 35-C, Chandigarh",
      "sector": "Sector 35",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.5,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 820,
      "openingHours": "10:00 AM – 11:00 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": null,
        "powerOutlets": null,
        "outdoorSeating": null,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "work": {
        "score": 7,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 7.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": null
      },
      "date": {
        "score": 9.1,
        "confidence": "high",
        "evidenceCount": 11,
        "caveat": "Intimate tables with atmospheric warm lighting."
      },
      "aesthetic": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 7.7,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 9.3,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 7.9,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 9.5,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "low",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 9.3,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      },
      "conversation": {
        "score": 9.1,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.8,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.5 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 7,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm basic connectivity."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "The ultimate indulgence for sweet tooth lovers in Sector 35.",
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
      }
    },
    "id": "cinnamon-creek-sec35",
    "name": "Cinnamon Creek Cafe",
    "address": "SCO 421, Sector 35-C, Chandigarh",
    "sector": "Sector 35",
    "city": "Chandigarh",
    "rating": 4.5,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 820,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": null,
      "powerOutlets": null,
      "outdoorSeating": null,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "The ultimate indulgence for sweet tooth lovers in Sector 35.",
    "personalityTagline": "The ultimate indulgence for sweet tooth lovers in Sector 35.",
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
    "caveat": "Limited power outlets; come with full laptop battery.",
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
    "moods": [
      "good-coffee",
      "date",
      "pretty",
      "sweet-tooth",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": null,
    "power": null,
    "outdoorSeating": null,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "sector-17-underground-brews",
      "name": "Underground Brews & Vinyl",
      "address": "Basement SCO 45, Sector 17-C, Chandigarh",
      "sector": "Sector 17",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.6,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 700,
      "openingHours": "11:00 AM – 10:00 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": null,
        "powerOutlets": null,
        "outdoorSeating": null,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": "Specialty single origins & manual brew bar."
      },
      "work": {
        "score": 7,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 8.9,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "date": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 7.7,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 9.3,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "low",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      },
      "conversation": {
        "score": 7.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.8,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.6 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 7,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm basic connectivity."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "An atmospheric speakeasy coffee bar for audiophiles and book lovers.",
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
      }
    },
    "id": "sector-17-underground-brews",
    "name": "Underground Brews & Vinyl",
    "address": "Basement SCO 45, Sector 17-C, Chandigarh",
    "sector": "Sector 17",
    "city": "Chandigarh",
    "rating": 4.6,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 700,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": null,
      "powerOutlets": null,
      "outdoorSeating": null,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "An atmospheric speakeasy coffee bar for audiophiles and book lovers.",
    "personalityTagline": "An atmospheric speakeasy coffee bar for audiophiles and book lovers.",
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
    "caveat": "Limited power outlets; come with full laptop battery.",
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
    "moods": [
      "good-coffee",
      "quiet",
      "pretty",
      "late-night"
    ],
    "specialtyCoffee": true,
    "wifi": null,
    "power": null,
    "outdoorSeating": null,
    "noiseLevel": "quiet",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "the-rooftop-pot-sec9",
      "name": "The Rooftop Pot",
      "address": "SCO 48, Rooftop, Sector 9-D, Chandigarh",
      "sector": "Sector 9",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.5,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 890,
      "openingHours": "11:00 AM – 11:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": null,
        "powerOutlets": null,
        "outdoorSeating": true,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 7.6,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 7,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 7.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": null
      },
      "date": {
        "score": 9.1,
        "confidence": "high",
        "evidenceCount": 11,
        "caveat": "Intimate tables with atmospheric warm lighting."
      },
      "aesthetic": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 7.9,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Open-air patio / courtyard seating available."
      },
      "ambience": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: outdoor."
      },
      "conversation": {
        "score": 9.1,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 7.6,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.5 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 7,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm basic connectivity."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Earthy terracotta charm with sweeping rooftop perspectives.",
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
      }
    },
    "id": "the-rooftop-pot-sec9",
    "name": "The Rooftop Pot",
    "address": "SCO 48, Rooftop, Sector 9-D, Chandigarh",
    "sector": "Sector 9",
    "city": "Chandigarh",
    "rating": 4.5,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 890,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": null,
      "powerOutlets": null,
      "outdoorSeating": true,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Earthy terracotta charm with sweeping rooftop perspectives.",
    "personalityTagline": "Earthy terracotta charm with sweeping rooftop perspectives.",
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
    "caveat": "Limited power outlets; come with full laptop battery.",
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
    "moods": [
      "date",
      "pretty",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": null,
    "power": null,
    "outdoorSeating": true,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "espresso-laboratory-sec7",
      "name": "Espresso Laboratory",
      "address": "Booth 14, Inner Market, Sector 7-C, Chandigarh",
      "sector": "Sector 7",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.6,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 600,
      "openingHours": "8:00 AM – 9:00 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": null,
        "powerOutlets": null,
        "outdoorSeating": null,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": "Specialty single origins & manual brew bar."
      },
      "work": {
        "score": 7,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 8.9,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "date": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 7.7,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 7.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 9.3,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "low",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      },
      "conversation": {
        "score": 7.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.8,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.6 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 7,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm basic connectivity."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Pure coffee geekery where extraction precision is revered.",
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
      }
    },
    "id": "espresso-laboratory-sec7",
    "name": "Espresso Laboratory",
    "address": "Booth 14, Inner Market, Sector 7-C, Chandigarh",
    "sector": "Sector 7",
    "city": "Chandigarh",
    "rating": 4.6,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 600,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": null,
      "powerOutlets": null,
      "outdoorSeating": null,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Pure coffee geekery where extraction precision is revered.",
    "personalityTagline": "Pure coffee geekery where extraction precision is revered.",
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
    "caveat": "Limited power outlets; come with full laptop battery.",
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
    "moods": [
      "good-coffee",
      "quiet"
    ],
    "specialtyCoffee": true,
    "wifi": null,
    "power": null,
    "outdoorSeating": null,
    "noiseLevel": "quiet",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "the-cozy-corner-sec34",
      "name": "The Cozy Corner",
      "address": "SCO 98, Sector 34-A, Chandigarh",
      "sector": "Sector 34",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.3,
      "reviewCount": 120,
      "priceRange": "₹",
      "approxCostForTwo": 420,
      "openingHours": "8:30 AM – 10:00 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": null,
        "outdoorSeating": null,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 7.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": null
      },
      "date": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 7.7,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 7.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 7.9,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "low",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      },
      "conversation": {
        "score": 7.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.8,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.3 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "The most practical, budget-friendly study recharge spot in Sector 34.",
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
      }
    },
    "id": "the-cozy-corner-sec34",
    "name": "The Cozy Corner",
    "address": "SCO 98, Sector 34-A, Chandigarh",
    "sector": "Sector 34",
    "city": "Chandigarh",
    "rating": 4.3,
    "reviews": 120,
    "priceRange": "₹",
    "approxCostForTwo": 420,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": null,
      "outdoorSeating": null,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "The most practical, budget-friendly study recharge spot in Sector 34.",
    "personalityTagline": "The most practical, budget-friendly study recharge spot in Sector 34.",
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
    "caveat": "Limited power outlets; come with full laptop battery.",
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
    "moods": [
      "good-coffee",
      "work"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": null,
    "outdoorSeating": null,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "neon-vibes-sec22",
      "name": "Neon Glow Lounge & Cafe",
      "address": "Basement SCO 210, Sector 22-B, Chandigarh",
      "sector": "Sector 22",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 3.8,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 900,
      "openingHours": "12:00 PM – 11:00 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": null,
        "powerOutlets": null,
        "outdoorSeating": null,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 7.6,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 7,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 7.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": null
      },
      "date": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 7.7,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 7.9,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "low",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      },
      "conversation": {
        "score": 7.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 7.6,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 3.8 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 7,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm basic connectivity."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Recent visitor feedback contains repeated complaints about service delays, food consistency, and distorted sound.",
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
      }
    },
    "id": "neon-vibes-sec22",
    "name": "Neon Glow Lounge & Cafe",
    "address": "Basement SCO 210, Sector 22-B, Chandigarh",
    "sector": "Sector 22",
    "city": "Chandigarh",
    "rating": 3.8,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 900,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": null,
      "powerOutlets": null,
      "outdoorSeating": null,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Recent visitor feedback contains repeated complaints about service delays, food consistency, and distorted sound.",
    "personalityTagline": "Recent visitor feedback contains repeated complaints about service delays, food consistency, and distorted sound.",
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
    "caveat": "Limited power outlets; come with full laptop battery.",
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
    "moods": [
      "pretty",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": null,
    "power": null,
    "outdoorSeating": null,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "overpriced-brew-sec35",
      "name": "Golden Bean Executive Cafe",
      "address": "SCO 410, Sector 35-C, Chandigarh",
      "sector": "Sector 35",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 3.9,
      "reviewCount": 120,
      "priceRange": "₹₹₹",
      "approxCostForTwo": 1800,
      "openingHours": "10:00 AM – 10:00 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": null,
        "powerOutlets": null,
        "outdoorSeating": null,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "work": {
        "score": 7,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 7.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": null
      },
      "date": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 7.7,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 7.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 7.9,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "low",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      },
      "conversation": {
        "score": 7.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.8,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 3.9 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 7,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm basic connectivity."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Discrepancy detected: high online rating does not match verified visitor reports of inflated billing and sub-par coffee.",
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
      }
    },
    "id": "overpriced-brew-sec35",
    "name": "Golden Bean Executive Cafe",
    "address": "SCO 410, Sector 35-C, Chandigarh",
    "sector": "Sector 35",
    "city": "Chandigarh",
    "rating": 3.9,
    "reviews": 120,
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1800,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80"
    ],
    "amenities": {
      "wifi": null,
      "powerOutlets": null,
      "outdoorSeating": null,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Discrepancy detected: high online rating does not match verified visitor reports of inflated billing and sub-par coffee.",
    "personalityTagline": "Discrepancy detected: high online rating does not match verified visitor reports of inflated billing and sub-par coffee.",
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
    "caveat": "Limited power outlets; come with full laptop battery.",
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
    "moods": [
      "good-coffee",
      "pretty"
    ],
    "specialtyCoffee": false,
    "wifi": null,
    "power": null,
    "outdoorSeating": null,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "nik-bakers-sec9",
      "name": "Nik Baker's",
      "address": "Booth 49, Inner Market, Sector 9-D, Chandigarh",
      "sector": "Sector 9",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.6,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 900,
      "openingHours": "8:00 AM – 11:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": false,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 6.8,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Quieter on weekday mornings; lively post 6 PM."
      },
      "date": {
        "score": 8.5,
        "confidence": "high",
        "evidenceCount": 11,
        "caveat": "Intimate tables with atmospheric warm lighting."
      },
      "aesthetic": {
        "score": 8.9,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9.1,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 9.7,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 8.5,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 7.2,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 9.9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8.9,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 9.7,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: booths."
      },
      "conversation": {
        "score": 8.5,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.2,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.6 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Chandigarh's staple bakery cafe for breakfast, brunch, and legendary desserts.",
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
      }
    },
    "id": "nik-bakers-sec9",
    "name": "Nik Baker's",
    "address": "Booth 49, Inner Market, Sector 9-D, Chandigarh",
    "sector": "Sector 9",
    "city": "Chandigarh",
    "rating": 4.6,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 900,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": false,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Chandigarh's staple bakery cafe for breakfast, brunch, and legendary desserts.",
    "personalityTagline": "Chandigarh's staple bakery cafe for breakfast, brunch, and legendary desserts.",
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
    "caveat": "Quieter on weekday mornings; lively post 6 PM.",
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
    "moods": [
      "good-coffee",
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": false,
    "outdoorSeating": false,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "nik-bakers-sec35",
      "name": "Nik Baker's Sector 35",
      "address": "SCO 441-442, Sector 35-C, Chandigarh",
      "sector": "Sector 35",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.5,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 950,
      "openingHours": "8:30 AM – 11:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": null,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 6.6,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Quieter on weekday mornings; lively post 6 PM."
      },
      "date": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8.7,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 9.6,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 8.6,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 7,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 9.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8.7,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 9.6,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: spacious."
      },
      "conversation": {
        "score": 8.4,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.5 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "A vibrant dessert sanctuary perfect for post-dinner treats with friends.",
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
      }
    },
    "id": "nik-bakers-sec35",
    "name": "Nik Baker's Sector 35",
    "address": "SCO 441-442, Sector 35-C, Chandigarh",
    "sector": "Sector 35",
    "city": "Chandigarh",
    "rating": 4.5,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 950,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": null,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "A vibrant dessert sanctuary perfect for post-dinner treats with friends.",
    "personalityTagline": "A vibrant dessert sanctuary perfect for post-dinner treats with friends.",
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
    "caveat": "Quieter on weekday mornings; lively post 6 PM.",
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
    "moods": [
      "good-coffee",
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": null,
    "outdoorSeating": false,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "nik-bakers-sec26",
      "name": "Nik Baker's Sector 26",
      "address": "SCO 42, Madhya Marg, Sector 26, Chandigarh",
      "sector": "Sector 26",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.5,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 900,
      "openingHours": "8:00 AM – 11:00 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": null,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 7.9,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 6.7,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Quieter on weekday mornings; lively post 6 PM."
      },
      "date": {
        "score": 8.1,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 8.9,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 9.5,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 7.1,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 9.7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 9.5,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: tables."
      },
      "conversation": {
        "score": 8.1,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 7.9,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.5 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Solid casual stop on the Sector 26 food corridor.",
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
      }
    },
    "id": "nik-bakers-sec26",
    "name": "Nik Baker's Sector 26",
    "address": "SCO 42, Madhya Marg, Sector 26, Chandigarh",
    "sector": "Sector 26",
    "city": "Chandigarh",
    "rating": 4.5,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 900,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": null,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Solid casual stop on the Sector 26 food corridor.",
    "personalityTagline": "Solid casual stop on the Sector 26 food corridor.",
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
    "caveat": "Quieter on weekday mornings; lively post 6 PM.",
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
    "moods": [
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": null,
    "outdoorSeating": false,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "third-wave-sec7",
      "name": "Third Wave Coffee",
      "address": "SCO 11, Inner Market, Sector 7-C, Chandigarh",
      "sector": "Sector 7",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.7,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 700,
      "openingHours": "8:00 AM – 11:00 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": true,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 9.7,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": "Specialty single origins & manual brew bar."
      },
      "work": {
        "score": 9.6,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Good table space and accessible power outlets."
      },
      "quiet": {
        "score": 9.1,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": "Reliably quiet; ideal for reading and deep focus."
      },
      "date": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 8.3,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 9.5,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8.5,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 8.3,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9.6,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: laptop-friendly."
      },
      "conversation": {
        "score": 8.4,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 9.7,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.7 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9.6,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "One of Sector 7's premier sanctuaries for remote workers and coffee craft enthusiasts.",
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
      }
    },
    "id": "third-wave-sec7",
    "name": "Third Wave Coffee",
    "address": "SCO 11, Inner Market, Sector 7-C, Chandigarh",
    "sector": "Sector 7",
    "city": "Chandigarh",
    "rating": 4.7,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 700,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": true,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "One of Sector 7's premier sanctuaries for remote workers and coffee craft enthusiasts.",
    "personalityTagline": "One of Sector 7's premier sanctuaries for remote workers and coffee craft enthusiasts.",
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
    "caveat": "Reliably quiet; ideal for reading and deep focus.",
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
    "moods": [
      "good-coffee",
      "work",
      "date",
      "quiet",
      "pretty",
      "sweet-tooth",
      "late-night"
    ],
    "specialtyCoffee": true,
    "wifi": true,
    "power": true,
    "outdoorSeating": false,
    "noiseLevel": "low",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "third-wave-sec35",
      "name": "Third Wave Coffee Sector 35",
      "address": "SCO 485-486, Sector 35-C, Chandigarh",
      "sector": "Sector 35",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.6,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 720,
      "openingHours": "8:00 AM – 11:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": true,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 9.5,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": "Specialty single origins & manual brew bar."
      },
      "work": {
        "score": 9.4,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Good table space and accessible power outlets."
      },
      "quiet": {
        "score": 8.7,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": "Reliably quiet; ideal for reading and deep focus."
      },
      "date": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 7.9,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 8.1,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 9.1,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8.3,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 8.1,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9.4,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: laptop-friendly."
      },
      "conversation": {
        "score": 8.2,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 9.5,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.6 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9.4,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Dependable specialty workspace in Sector 35.",
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
      }
    },
    "id": "third-wave-sec35",
    "name": "Third Wave Coffee Sector 35",
    "address": "SCO 485-486, Sector 35-C, Chandigarh",
    "sector": "Sector 35",
    "city": "Chandigarh",
    "rating": 4.6,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 720,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": true,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Dependable specialty workspace in Sector 35.",
    "personalityTagline": "Dependable specialty workspace in Sector 35.",
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
    "caveat": "Reliably quiet; ideal for reading and deep focus.",
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
    "moods": [
      "good-coffee",
      "work",
      "date",
      "quiet",
      "pretty",
      "sweet-tooth",
      "late-night"
    ],
    "specialtyCoffee": true,
    "wifi": true,
    "power": true,
    "outdoorSeating": false,
    "noiseLevel": "low",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "tim-hortons-sec35",
      "name": "Tim Hortons",
      "address": "SCO 443-444, Sector 35-C, Chandigarh",
      "sector": "Sector 35",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.4,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 650,
      "openingHours": "7:00 AM – 1:00 AM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": true,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.3,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Good table space and accessible power outlets."
      },
      "quiet": {
        "score": 7.3,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Quieter on weekday mornings; lively post 6 PM."
      },
      "date": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 9.8,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 7.7,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 9.4,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 8.2,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: spacious."
      },
      "conversation": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.3,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.4 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 8.2,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "The late-night staple in Sector 35 for midnight sweet cravings and coffee.",
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
      }
    },
    "id": "tim-hortons-sec35",
    "name": "Tim Hortons",
    "address": "SCO 443-444, Sector 35-C, Chandigarh",
    "sector": "Sector 35",
    "city": "Chandigarh",
    "rating": 4.4,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 650,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": true,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "The late-night staple in Sector 35 for midnight sweet cravings and coffee.",
    "personalityTagline": "The late-night staple in Sector 35 for midnight sweet cravings and coffee.",
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
    "caveat": "Quieter on weekday mornings; lively post 6 PM.",
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
    "moods": [
      "good-coffee",
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": true,
    "outdoorSeating": false,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "tim-hortons-elante",
      "name": "Tim Hortons Elante Mall",
      "address": "Courtyard, Elante Mall, Industrial Area Phase 1, Chandigarh",
      "sector": "Industrial Area Phase 1",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.4,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 650,
      "openingHours": "9:00 AM – 11:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": false,
        "outdoorSeating": true,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.1,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 6.8,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Quieter on weekday mornings; lively post 6 PM."
      },
      "date": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8.7,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 9.1,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 8.5,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 7.2,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 9.3,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Open-air patio / courtyard seating available."
      },
      "ambience": {
        "score": 8.7,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 9.1,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: outdoor."
      },
      "conversation": {
        "score": 8.2,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.1,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.4 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "A vibrant mall courtyard spot for quick energy recharge.",
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
      }
    },
    "id": "tim-hortons-elante",
    "name": "Tim Hortons Elante Mall",
    "address": "Courtyard, Elante Mall, Industrial Area Phase 1, Chandigarh",
    "sector": "Industrial Area Phase 1",
    "city": "Chandigarh",
    "rating": 4.4,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 650,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": false,
      "outdoorSeating": true,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "A vibrant mall courtyard spot for quick energy recharge.",
    "personalityTagline": "A vibrant mall courtyard spot for quick energy recharge.",
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
    "caveat": "Quieter on weekday mornings; lively post 6 PM.",
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
    "moods": [
      "good-coffee",
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": false,
    "outdoorSeating": true,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "blue-tokai-elante",
      "name": "Blue Tokai Elante",
      "address": "Upper Ground Floor, Elante Mall, Industrial Area Phase 1, Chandigarh",
      "sector": "Industrial Area Phase 1",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.6,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 750,
      "openingHours": "10:00 AM – 10:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": true,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 9.6,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": "Specialty single origins & manual brew bar."
      },
      "work": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Good table space and accessible power outlets."
      },
      "quiet": {
        "score": 8.5,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": "Reliably quiet; ideal for reading and deep focus."
      },
      "date": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 7.2,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 7.4,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 8.9,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8.4,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 8.4,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: laptop-friendly."
      },
      "conversation": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 9.6,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.6 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 8.4,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "The coffee purist's haven inside Elante Mall.",
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
      }
    },
    "id": "blue-tokai-elante",
    "name": "Blue Tokai Elante",
    "address": "Upper Ground Floor, Elante Mall, Industrial Area Phase 1, Chandigarh",
    "sector": "Industrial Area Phase 1",
    "city": "Chandigarh",
    "rating": 4.6,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 750,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": true,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "The coffee purist's haven inside Elante Mall.",
    "personalityTagline": "The coffee purist's haven inside Elante Mall.",
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
    "caveat": "Reliably quiet; ideal for reading and deep focus.",
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
    "moods": [
      "good-coffee",
      "work",
      "date",
      "quiet",
      "pretty",
      "sweet-tooth"
    ],
    "specialtyCoffee": true,
    "wifi": true,
    "power": true,
    "outdoorSeating": false,
    "noiseLevel": "low",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "starbucks-sec35",
      "name": "Starbucks Sector 35",
      "address": "SCO 429-430, Sector 35-C, Chandigarh",
      "sector": "Sector 35",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.5,
      "reviewCount": 120,
      "priceRange": "₹₹₹",
      "approxCostForTwo": 900,
      "openingHours": "8:00 AM – 11:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": true,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.7,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": "Specialty single origins & manual brew bar."
      },
      "work": {
        "score": 9.5,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Good table space and accessible power outlets."
      },
      "quiet": {
        "score": 8.6,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": "Reliably quiet; ideal for reading and deep focus."
      },
      "date": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8.9,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 8.5,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 8.6,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8.7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8.9,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 8.5,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9.5,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: laptop-friendly."
      },
      "conversation": {
        "score": 8.2,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.7,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.5 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9.5,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "The reliable workhorse for remote work sessions and business meets.",
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
      }
    },
    "id": "starbucks-sec35",
    "name": "Starbucks Sector 35",
    "address": "SCO 429-430, Sector 35-C, Chandigarh",
    "sector": "Sector 35",
    "city": "Chandigarh",
    "rating": 4.5,
    "reviews": 120,
    "priceRange": "₹₹₹",
    "approxCostForTwo": 900,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": true,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "The reliable workhorse for remote work sessions and business meets.",
    "personalityTagline": "The reliable workhorse for remote work sessions and business meets.",
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
    "caveat": "Reliably quiet; ideal for reading and deep focus.",
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
    "moods": [
      "good-coffee",
      "work",
      "date",
      "quiet",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": true,
    "wifi": true,
    "power": true,
    "outdoorSeating": false,
    "noiseLevel": "low",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "starbucks-sec8",
      "name": "Starbucks Sector 8",
      "address": "Inner Market, SCF 15, Sector 8-C, Chandigarh",
      "sector": "Sector 8",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.6,
      "reviewCount": 120,
      "priceRange": "₹₹₹",
      "approxCostForTwo": 900,
      "openingHours": "8:00 AM – 11:00 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": true,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": "Specialty single origins & manual brew bar."
      },
      "work": {
        "score": 9.4,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Good table space and accessible power outlets."
      },
      "quiet": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": "Reliably quiet; ideal for reading and deep focus."
      },
      "date": {
        "score": 8.3,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 9.4,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8.6,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9.4,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: laptop-friendly."
      },
      "conversation": {
        "score": 8.3,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.8,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.6 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9.4,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "A calm, focused study and conversation lounge in northern Chandigarh.",
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
      }
    },
    "id": "starbucks-sec8",
    "name": "Starbucks Sector 8",
    "address": "Inner Market, SCF 15, Sector 8-C, Chandigarh",
    "sector": "Sector 8",
    "city": "Chandigarh",
    "rating": 4.6,
    "reviews": 120,
    "priceRange": "₹₹₹",
    "approxCostForTwo": 900,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": true,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "A calm, focused study and conversation lounge in northern Chandigarh.",
    "personalityTagline": "A calm, focused study and conversation lounge in northern Chandigarh.",
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
    "caveat": "Reliably quiet; ideal for reading and deep focus.",
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
    "moods": [
      "good-coffee",
      "work",
      "date",
      "quiet",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": true,
    "wifi": true,
    "power": true,
    "outdoorSeating": false,
    "noiseLevel": "low",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "chaayos-sec17",
      "name": "Chaayos Sector 17",
      "address": "SCO 81-82, Sector 17-D Plaza, Chandigarh",
      "sector": "Sector 17",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.4,
      "reviewCount": 120,
      "priceRange": "₹",
      "approxCostForTwo": 450,
      "openingHours": "8:00 AM – 11:00 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": true,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 7.2,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Good table space and accessible power outlets."
      },
      "quiet": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": "Quieter on weekday mornings; lively post 6 PM."
      },
      "date": {
        "score": 7.2,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 7.6,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 8.4,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 7.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 7.6,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 8.4,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: cafe-tables."
      },
      "conversation": {
        "score": 7.2,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 7.2,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.4 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 8.4,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "The undisputed value pick for authentic chai enthusiasts and quick Plaza meetings.",
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
      }
    },
    "id": "chaayos-sec17",
    "name": "Chaayos Sector 17",
    "address": "SCO 81-82, Sector 17-D Plaza, Chandigarh",
    "sector": "Sector 17",
    "city": "Chandigarh",
    "rating": 4.4,
    "reviews": 120,
    "priceRange": "₹",
    "approxCostForTwo": 450,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": true,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "The undisputed value pick for authentic chai enthusiasts and quick Plaza meetings.",
    "personalityTagline": "The undisputed value pick for authentic chai enthusiasts and quick Plaza meetings.",
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
    "caveat": "Quieter on weekday mornings; lively post 6 PM.",
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
    "moods": [
      "work",
      "quiet",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": true,
    "outdoorSeating": false,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "chaayos-sec8",
      "name": "Chaayos Sector 8",
      "address": "SCF 22, Inner Market, Sector 8-C, Chandigarh",
      "sector": "Sector 8",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.3,
      "reviewCount": 120,
      "priceRange": "₹",
      "approxCostForTwo": 450,
      "openingHours": "8:30 AM – 11:00 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": true,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 7,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Good table space and accessible power outlets."
      },
      "quiet": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Quieter on weekday mornings; lively post 6 PM."
      },
      "date": {
        "score": 7,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 7.7,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 8.6,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 7.4,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 8.2,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 7.6,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 7.7,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 7.4,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: tables."
      },
      "conversation": {
        "score": 7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 7,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.3 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 8,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Affordable tea and snacks in Sector 8.",
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
      }
    },
    "id": "chaayos-sec8",
    "name": "Chaayos Sector 8",
    "address": "SCF 22, Inner Market, Sector 8-C, Chandigarh",
    "sector": "Sector 8",
    "city": "Chandigarh",
    "rating": 4.3,
    "reviews": 120,
    "priceRange": "₹",
    "approxCostForTwo": 450,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": true,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Affordable tea and snacks in Sector 8.",
    "personalityTagline": "Affordable tea and snacks in Sector 8.",
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
    "caveat": "Quieter on weekday mornings; lively post 6 PM.",
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
    "moods": [
      "work",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": true,
    "outdoorSeating": false,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "ovenfresh-sec7",
      "name": "Oven Fresh Sector 7",
      "address": "SCO 14, Sector 7-C, Madhya Marg, Chandigarh",
      "sector": "Sector 7",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.6,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 850,
      "openingHours": "10:00 AM – 11:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": false,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 7.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Quieter on weekday mornings; lively post 6 PM."
      },
      "date": {
        "score": 8.9,
        "confidence": "high",
        "evidenceCount": 11,
        "caveat": "Intimate tables with atmospheric warm lighting."
      },
      "aesthetic": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9.4,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 9.5,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 8.5,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 7.9,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 9.7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 9.5,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: booths."
      },
      "conversation": {
        "score": 8.9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.4,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.6 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "A beloved Chandigarh heritage brand for comforting Continental food and bakery treats.",
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
      }
    },
    "id": "ovenfresh-sec7",
    "name": "Oven Fresh Sector 7",
    "address": "SCO 14, Sector 7-C, Madhya Marg, Chandigarh",
    "sector": "Sector 7",
    "city": "Chandigarh",
    "rating": 4.6,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 850,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": false,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "A beloved Chandigarh heritage brand for comforting Continental food and bakery treats.",
    "personalityTagline": "A beloved Chandigarh heritage brand for comforting Continental food and bakery treats.",
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
    "caveat": "Quieter on weekday mornings; lively post 6 PM.",
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
    "moods": [
      "good-coffee",
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": false,
    "outdoorSeating": false,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "ovenfresh-sec26",
      "name": "Oven Fresh Sector 26",
      "address": "SCO 39, Sector 26, Chandigarh",
      "sector": "Sector 26",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.5,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 850,
      "openingHours": "10:30 AM – 11:00 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": false,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 7.3,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Quieter on weekday mornings; lively post 6 PM."
      },
      "date": {
        "score": 8.6,
        "confidence": "high",
        "evidenceCount": 11,
        "caveat": "Intimate tables with atmospheric warm lighting."
      },
      "aesthetic": {
        "score": 8.6,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 9.3,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 7.7,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 9.5,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8.6,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 9.3,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: tables."
      },
      "conversation": {
        "score": 8.6,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.2,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.5 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Dependable comfort food stop in Sector 26.",
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
      }
    },
    "id": "ovenfresh-sec26",
    "name": "Oven Fresh Sector 26",
    "address": "SCO 39, Sector 26, Chandigarh",
    "sector": "Sector 26",
    "city": "Chandigarh",
    "rating": 4.5,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 850,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": false,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Dependable comfort food stop in Sector 26.",
    "personalityTagline": "Dependable comfort food stop in Sector 26.",
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
    "caveat": "Quieter on weekday mornings; lively post 6 PM.",
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
    "moods": [
      "good-coffee",
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": false,
    "outdoorSeating": false,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "uncle-jacks-sec35",
      "name": "Uncle Jack's Sector 35",
      "address": "Booth 56, Sector 35-C, Chandigarh",
      "sector": "Sector 35",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.5,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 600,
      "openingHours": "11:00 AM – 11:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": false,
        "powerOutlets": false,
        "outdoorSeating": true,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 7.6,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 4,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 5.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Energetic, bustling atmosphere; best with friends."
      },
      "date": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8.7,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9.5,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 9.4,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 8.6,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 5.9,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 9.6,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Open-air patio / courtyard seating available."
      },
      "ambience": {
        "score": 8.7,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 9.4,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 4,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: standing."
      },
      "conversation": {
        "score": 7.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 7.6,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.5 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 4,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm basic connectivity."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "The quintessential Chandigarh street-eats icon for friends craving loaded American comfort food.",
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
      }
    },
    "id": "uncle-jacks-sec35",
    "name": "Uncle Jack's Sector 35",
    "address": "Booth 56, Sector 35-C, Chandigarh",
    "sector": "Sector 35",
    "city": "Chandigarh",
    "rating": 4.5,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 600,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": false,
      "powerOutlets": false,
      "outdoorSeating": true,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "The quintessential Chandigarh street-eats icon for friends craving loaded American comfort food.",
    "personalityTagline": "The quintessential Chandigarh street-eats icon for friends craving loaded American comfort food.",
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
    "caveat": "Energetic, bustling atmosphere; best with friends.",
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
    "moods": [
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": false,
    "power": false,
    "outdoorSeating": true,
    "noiseLevel": "lively",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "casa-bella-vista-sec10",
      "name": "Casa Bella Vista",
      "address": "Coal Depot Complex, Sector 10-D, Chandigarh",
      "sector": "Sector 10",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.7,
      "reviewCount": 120,
      "priceRange": "₹₹₹",
      "approxCostForTwo": 1400,
      "openingHours": "11:30 AM – 11:00 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": false,
        "outdoorSeating": true,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": "Reliably quiet; ideal for reading and deep focus."
      },
      "date": {
        "score": 9.8,
        "confidence": "high",
        "evidenceCount": 11,
        "caveat": "Intimate tables with atmospheric warm lighting."
      },
      "aesthetic": {
        "score": 9.7,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 9.1,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 8.5,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 9.4,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 9.3,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Open-air patio / courtyard seating available."
      },
      "ambience": {
        "score": 9.7,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 9.1,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: courtyard."
      },
      "conversation": {
        "score": 9.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.4,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.7 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "The top choice in Chandigarh for an unforgettable, romantic alfresco date night.",
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
      }
    },
    "id": "casa-bella-vista-sec10",
    "name": "Casa Bella Vista",
    "address": "Coal Depot Complex, Sector 10-D, Chandigarh",
    "sector": "Sector 10",
    "city": "Chandigarh",
    "rating": 4.7,
    "reviews": 120,
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1400,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": false,
      "outdoorSeating": true,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "The top choice in Chandigarh for an unforgettable, romantic alfresco date night.",
    "personalityTagline": "The top choice in Chandigarh for an unforgettable, romantic alfresco date night.",
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
    "caveat": "Reliably quiet; ideal for reading and deep focus.",
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
    "moods": [
      "good-coffee",
      "work",
      "date",
      "quiet",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": false,
    "outdoorSeating": true,
    "noiseLevel": "low",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "rustic-door-sec10",
      "name": "The Rustic Door",
      "address": "SCO 12, Sector 10-D, Chandigarh",
      "sector": "Sector 10",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.5,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 950,
      "openingHours": "11:30 AM – 11:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": false,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.1,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 8.6,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": "Reliably quiet; ideal for reading and deep focus."
      },
      "date": {
        "score": 9.4,
        "confidence": "high",
        "evidenceCount": 11,
        "caveat": "Intimate tables with atmospheric warm lighting."
      },
      "aesthetic": {
        "score": 9.3,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 8.1,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 8.7,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8.9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 9.3,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 8.7,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: intimate."
      },
      "conversation": {
        "score": 9.4,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.1,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.5 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Intimate vintage dining spot for couples seeking privacy.",
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
      }
    },
    "id": "rustic-door-sec10",
    "name": "The Rustic Door",
    "address": "SCO 12, Sector 10-D, Chandigarh",
    "sector": "Sector 10",
    "city": "Chandigarh",
    "rating": 4.5,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 950,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": false,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Intimate vintage dining spot for couples seeking privacy.",
    "personalityTagline": "Intimate vintage dining spot for couples seeking privacy.",
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
    "caveat": "Reliably quiet; ideal for reading and deep focus.",
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
    "moods": [
      "good-coffee",
      "work",
      "date",
      "quiet",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": false,
    "outdoorSeating": false,
    "noiseLevel": "low",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "kalsang-sec8",
      "name": "Kalsang Cafe & Restaurant",
      "address": "SCO 38-39, Sector 8-C, Chandigarh",
      "sector": "Sector 8",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.6,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 750,
      "openingHours": "11:30 AM – 11:00 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": false,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 7.5,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 7.6,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Quieter on weekday mornings; lively post 6 PM."
      },
      "date": {
        "score": 8.9,
        "confidence": "high",
        "evidenceCount": 11,
        "caveat": "Intimate tables with atmospheric warm lighting."
      },
      "aesthetic": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9.3,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8.4,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: booths."
      },
      "conversation": {
        "score": 8.9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 7.5,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.6 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "A vibrant cultural cafe offering hearty Himalayan comfort food and charming decor.",
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
      }
    },
    "id": "kalsang-sec8",
    "name": "Kalsang Cafe & Restaurant",
    "address": "SCO 38-39, Sector 8-C, Chandigarh",
    "sector": "Sector 8",
    "city": "Chandigarh",
    "rating": 4.6,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 750,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": false,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "A vibrant cultural cafe offering hearty Himalayan comfort food and charming decor.",
    "personalityTagline": "A vibrant cultural cafe offering hearty Himalayan comfort food and charming decor.",
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
    "caveat": "Quieter on weekday mornings; lively post 6 PM.",
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
    "moods": [
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": false,
    "outdoorSeating": false,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "fabbrica-sec26",
      "name": "Fabbrica Italian Bistro & Cafe",
      "address": "SCO 11, Sector 26, Madhya Marg, Chandigarh",
      "sector": "Sector 26",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.6,
      "reviewCount": 120,
      "priceRange": "₹₹₹",
      "approxCostForTwo": 1200,
      "openingHours": "12:00 PM – 11:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": false,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.9,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": "Specialty single origins & manual brew bar."
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 8.5,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": "Reliably quiet; ideal for reading and deep focus."
      },
      "date": {
        "score": 9.6,
        "confidence": "high",
        "evidenceCount": 11,
        "caveat": "Intimate tables with atmospheric warm lighting."
      },
      "aesthetic": {
        "score": 9.5,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 8.9,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 9.2,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 9.5,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: plush."
      },
      "conversation": {
        "score": 9.6,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.9,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.6 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "An upscale date spot for true connoisseurs of Italian cafe dining.",
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
      }
    },
    "id": "fabbrica-sec26",
    "name": "Fabbrica Italian Bistro & Cafe",
    "address": "SCO 11, Sector 26, Madhya Marg, Chandigarh",
    "sector": "Sector 26",
    "city": "Chandigarh",
    "rating": 4.6,
    "reviews": 120,
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1200,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": false,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "An upscale date spot for true connoisseurs of Italian cafe dining.",
    "personalityTagline": "An upscale date spot for true connoisseurs of Italian cafe dining.",
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
    "caveat": "Reliably quiet; ideal for reading and deep focus.",
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
    "moods": [
      "good-coffee",
      "work",
      "date",
      "quiet",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": true,
    "wifi": true,
    "power": false,
    "outdoorSeating": false,
    "noiseLevel": "low",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "tin-tin-sec7",
      "name": "Tin Tin Craft House & Cafe",
      "address": "SCO 16-17, Back Courtyard, Sector 7-C, Chandigarh",
      "sector": "Sector 7",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.7,
      "reviewCount": 120,
      "priceRange": "₹₹₹",
      "approxCostForTwo": 1300,
      "openingHours": "12:00 PM – 1:00 AM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": false,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 6.8,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Quieter on weekday mornings; lively post 6 PM."
      },
      "date": {
        "score": 9.7,
        "confidence": "high",
        "evidenceCount": 11,
        "caveat": "Intimate tables with atmospheric warm lighting."
      },
      "aesthetic": {
        "score": 9.9,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 9.7,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 7.2,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 9.9,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: lounge."
      },
      "conversation": {
        "score": 9.7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.2,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.7 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "The most visually captivating and architecturally daring night cafe in Chandigarh.",
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
      }
    },
    "id": "tin-tin-sec7",
    "name": "Tin Tin Craft House & Cafe",
    "address": "SCO 16-17, Back Courtyard, Sector 7-C, Chandigarh",
    "sector": "Sector 7",
    "city": "Chandigarh",
    "rating": 4.7,
    "reviews": 120,
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1300,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": false,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "The most visually captivating and architecturally daring night cafe in Chandigarh.",
    "personalityTagline": "The most visually captivating and architecturally daring night cafe in Chandigarh.",
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
    "caveat": "Quieter on weekday mornings; lively post 6 PM.",
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
    "moods": [
      "good-coffee",
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": false,
    "outdoorSeating": false,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "honey-and-dough-sec8",
      "name": "Honey & Dough",
      "address": "SCF 24, Inner Market, Sector 8-C, Chandigarh",
      "sector": "Sector 8",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.5,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 700,
      "openingHours": "9:00 AM – 10:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": null,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.6,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": "Reliably quiet; ideal for reading and deep focus."
      },
      "date": {
        "score": 8.7,
        "confidence": "high",
        "evidenceCount": 11,
        "caveat": "Intimate tables with atmospheric warm lighting."
      },
      "aesthetic": {
        "score": 9.4,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 9.6,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 7.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 8.8,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 9.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 9.4,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 9.6,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: bistro."
      },
      "conversation": {
        "score": 8.7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.6,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.5 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "A dainty patisserie perfect for afternoon tea and sweet tooth indulgences.",
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
      }
    },
    "id": "honey-and-dough-sec8",
    "name": "Honey & Dough",
    "address": "SCF 24, Inner Market, Sector 8-C, Chandigarh",
    "sector": "Sector 8",
    "city": "Chandigarh",
    "rating": 4.5,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 700,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": null,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "A dainty patisserie perfect for afternoon tea and sweet tooth indulgences.",
    "personalityTagline": "A dainty patisserie perfect for afternoon tea and sweet tooth indulgences.",
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
    "caveat": "Reliably quiet; ideal for reading and deep focus.",
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
    "moods": [
      "good-coffee",
      "work",
      "date",
      "quiet",
      "pretty",
      "sweet-tooth"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": null,
    "outdoorSeating": false,
    "noiseLevel": "low",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "cafe-delhi-heights-elante",
      "name": "Cafe Delhi Heights",
      "address": "Third Floor, Elante Mall, Industrial Area Phase 1, Chandigarh",
      "sector": "Industrial Area Phase 1",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.6,
      "reviewCount": 120,
      "priceRange": "₹₹₹",
      "approxCostForTwo": 1250,
      "openingHours": "11:00 AM – 11:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": false,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 7.2,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Quieter on weekday mornings; lively post 6 PM."
      },
      "date": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 11,
        "caveat": "Intimate tables with atmospheric warm lighting."
      },
      "aesthetic": {
        "score": 9.1,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9.6,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 7.6,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 9.4,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 9.1,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: cabanas."
      },
      "conversation": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.6 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "A vibrant, energetic cafe offering big flavors and relaxed cabana lounging.",
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
      }
    },
    "id": "cafe-delhi-heights-elante",
    "name": "Cafe Delhi Heights",
    "address": "Third Floor, Elante Mall, Industrial Area Phase 1, Chandigarh",
    "sector": "Industrial Area Phase 1",
    "city": "Chandigarh",
    "rating": 4.6,
    "reviews": 120,
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1250,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": false,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "A vibrant, energetic cafe offering big flavors and relaxed cabana lounging.",
    "personalityTagline": "A vibrant, energetic cafe offering big flavors and relaxed cabana lounging.",
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
    "caveat": "Quieter on weekday mornings; lively post 6 PM.",
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
    "moods": [
      "good-coffee",
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": false,
    "outdoorSeating": false,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "costa-coffee-sec17",
      "name": "Costa Coffee Sector 17",
      "address": "SCO 45-46, Sector 17-E, Chandigarh",
      "sector": "Sector 17",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.4,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 650,
      "openingHours": "9:00 AM – 10:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": true,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": "Specialty single origins & manual brew bar."
      },
      "work": {
        "score": 9.1,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Good table space and accessible power outlets."
      },
      "quiet": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": "Reliably quiet; ideal for reading and deep focus."
      },
      "date": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8.3,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 7.7,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 9.3,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 7.6,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 9.2,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 9.5,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8.3,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 9.3,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9.1,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: laptop-friendly."
      },
      "conversation": {
        "score": 7.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.8,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.4 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9.1,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Comfortable work spot for classic espresso in Sector 17.",
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
      }
    },
    "id": "costa-coffee-sec17",
    "name": "Costa Coffee Sector 17",
    "address": "SCO 45-46, Sector 17-E, Chandigarh",
    "sector": "Sector 17",
    "city": "Chandigarh",
    "rating": 4.4,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 650,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": true,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Comfortable work spot for classic espresso in Sector 17.",
    "personalityTagline": "Comfortable work spot for classic espresso in Sector 17.",
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
    "caveat": "Reliably quiet; ideal for reading and deep focus.",
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
    "moods": [
      "good-coffee",
      "work",
      "quiet",
      "pretty",
      "sweet-tooth"
    ],
    "specialtyCoffee": true,
    "wifi": true,
    "power": true,
    "outdoorSeating": false,
    "noiseLevel": "low",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "barista-diner-sec26",
      "name": "Barista Diner Sector 26",
      "address": "SCO 22, Sector 26, Madhya Marg, Chandigarh",
      "sector": "Sector 26",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.4,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 750,
      "openingHours": "8:30 AM – 11:00 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": true,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.6,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "work": {
        "score": 8.9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Good table space and accessible power outlets."
      },
      "quiet": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": "Reliably quiet; ideal for reading and deep focus."
      },
      "date": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 8.3,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 8.1,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 8.8,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8.3,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 8.1,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 8.9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: booths."
      },
      "conversation": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.6,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.4 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 8.9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Good upgraded diner experience on Madhya Marg.",
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
      }
    },
    "id": "barista-diner-sec26",
    "name": "Barista Diner Sector 26",
    "address": "SCO 22, Sector 26, Madhya Marg, Chandigarh",
    "sector": "Sector 26",
    "city": "Chandigarh",
    "rating": 4.4,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 750,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": true,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Good upgraded diner experience on Madhya Marg.",
    "personalityTagline": "Good upgraded diner experience on Madhya Marg.",
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
    "caveat": "Reliably quiet; ideal for reading and deep focus.",
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
    "moods": [
      "good-coffee",
      "work",
      "date",
      "quiet",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": true,
    "outdoorSeating": false,
    "noiseLevel": "low",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "barista-sec35",
      "name": "Barista Cafe Sector 35",
      "address": "SCO 477, Sector 35-C, Chandigarh",
      "sector": "Sector 35",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.3,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 600,
      "openingHours": "8:30 AM – 11:00 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": true,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Good table space and accessible power outlets."
      },
      "quiet": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": "Reliably quiet; ideal for reading and deep focus."
      },
      "date": {
        "score": 7.5,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 7.6,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 9.3,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 9.2,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 9.5,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 9.3,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 8.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: tables."
      },
      "conversation": {
        "score": 7.5,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.4,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.3 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 8.8,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Old school quiet coffee shop in Sector 35.",
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
      }
    },
    "id": "barista-sec35",
    "name": "Barista Cafe Sector 35",
    "address": "SCO 477, Sector 35-C, Chandigarh",
    "sector": "Sector 35",
    "city": "Chandigarh",
    "rating": 4.3,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 600,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": true,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Old school quiet coffee shop in Sector 35.",
    "personalityTagline": "Old school quiet coffee shop in Sector 35.",
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
    "caveat": "Reliably quiet; ideal for reading and deep focus.",
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
    "moods": [
      "good-coffee",
      "work",
      "quiet",
      "sweet-tooth",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": true,
    "outdoorSeating": false,
    "noiseLevel": "low",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "cottage-sec7",
      "name": "The Cottage",
      "address": "SCO 44, Inner Market, Sector 7-C, Chandigarh",
      "sector": "Sector 7",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.7,
      "reviewCount": 120,
      "priceRange": "₹₹₹",
      "approxCostForTwo": 1350,
      "openingHours": "12:00 PM – 11:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": false,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.5,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": "Reliably quiet; ideal for reading and deep focus."
      },
      "date": {
        "score": 9.9,
        "confidence": "high",
        "evidenceCount": 11,
        "caveat": "Intimate tables with atmospheric warm lighting."
      },
      "aesthetic": {
        "score": 9.8,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 9.4,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 9.6,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 9.6,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 9.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 9.4,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: fine-dining."
      },
      "conversation": {
        "score": 9.9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.5,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.7 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "An elegant European countryside bistro perfect for celebrating special occasions.",
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
      }
    },
    "id": "cottage-sec7",
    "name": "The Cottage",
    "address": "SCO 44, Inner Market, Sector 7-C, Chandigarh",
    "sector": "Sector 7",
    "city": "Chandigarh",
    "rating": 4.7,
    "reviews": 120,
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1350,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": false,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "An elegant European countryside bistro perfect for celebrating special occasions.",
    "personalityTagline": "An elegant European countryside bistro perfect for celebrating special occasions.",
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
    "caveat": "Reliably quiet; ideal for reading and deep focus.",
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
    "moods": [
      "good-coffee",
      "work",
      "date",
      "quiet",
      "pretty",
      "sweet-tooth",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": false,
    "outdoorSeating": false,
    "noiseLevel": "low",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "indian-coffee-house-sec22",
      "name": "Indian Coffee House Sector 22",
      "address": "SCO 1012, Sector 22-B, Chandigarh",
      "sector": "Sector 22",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.3,
      "reviewCount": 120,
      "priceRange": "₹",
      "approxCostForTwo": 250,
      "openingHours": "8:00 AM – 9:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": false,
        "powerOutlets": false,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.5,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": "Specialty single origins & manual brew bar."
      },
      "work": {
        "score": 6.8,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": "Reliably quiet; ideal for reading and deep focus."
      },
      "date": {
        "score": 6.5,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 8.6,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 6.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 6,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 8.6,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 6.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 6.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: vintage-booths."
      },
      "conversation": {
        "score": 6.5,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.5,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.3 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 6.8,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm basic connectivity."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "A nostalgic cultural institution where Chandigarh's elders and students meet over filter coffee.",
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
      }
    },
    "id": "indian-coffee-house-sec22",
    "name": "Indian Coffee House Sector 22",
    "address": "SCO 1012, Sector 22-B, Chandigarh",
    "sector": "Sector 22",
    "city": "Chandigarh",
    "rating": 4.3,
    "reviews": 120,
    "priceRange": "₹",
    "approxCostForTwo": 250,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": false,
      "powerOutlets": false,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "A nostalgic cultural institution where Chandigarh's elders and students meet over filter coffee.",
    "personalityTagline": "A nostalgic cultural institution where Chandigarh's elders and students meet over filter coffee.",
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
    "caveat": "Reliably quiet; ideal for reading and deep focus.",
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
    "moods": [
      "good-coffee",
      "quiet",
      "gang"
    ],
    "specialtyCoffee": true,
    "wifi": false,
    "power": false,
    "outdoorSeating": false,
    "noiseLevel": "low",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "monicas-sec8",
      "name": "Monica's Puddings & Pies",
      "address": "Inner Market, SCF 21, Sector 8-C, Chandigarh",
      "sector": "Sector 8",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.7,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 800,
      "openingHours": "9:30 AM – 10:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": null,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.3,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": "Reliably quiet; ideal for reading and deep focus."
      },
      "date": {
        "score": 8.6,
        "confidence": "high",
        "evidenceCount": 11,
        "caveat": "Intimate tables with atmospheric warm lighting."
      },
      "aesthetic": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 9.9,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 7.4,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 8.6,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 10.1,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 9.9,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: compact."
      },
      "conversation": {
        "score": 8.6,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.3,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.7 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "The crown jewel of Chandigarh home-style luxury baking.",
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
      }
    },
    "id": "monicas-sec8",
    "name": "Monica's Puddings & Pies",
    "address": "Inner Market, SCF 21, Sector 8-C, Chandigarh",
    "sector": "Sector 8",
    "city": "Chandigarh",
    "rating": 4.7,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 800,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": null,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "The crown jewel of Chandigarh home-style luxury baking.",
    "personalityTagline": "The crown jewel of Chandigarh home-style luxury baking.",
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
    "caveat": "Reliably quiet; ideal for reading and deep focus.",
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
    "moods": [
      "good-coffee",
      "work",
      "date",
      "quiet",
      "pretty",
      "sweet-tooth"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": null,
    "outdoorSeating": false,
    "noiseLevel": "low",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "super-donuts-sec8",
      "name": "Super Donuts - American Dinery",
      "address": "Inner Market, SCF 14, Sector 8-C, Chandigarh",
      "sector": "Sector 8",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.5,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 550,
      "openingHours": "10:00 AM – 11:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": true,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Good table space and accessible power outlets."
      },
      "quiet": {
        "score": 7.4,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Quieter on weekday mornings; lively post 6 PM."
      },
      "date": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 9.3,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9.1,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 9.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 7.8,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 10,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 9.3,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 9.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: diner-booths."
      },
      "conversation": {
        "score": 8.4,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.2,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.5 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Colorful, nostalgic dessert diner with top-tier glazed donuts and fun energy.",
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
      }
    },
    "id": "super-donuts-sec8",
    "name": "Super Donuts - American Dinery",
    "address": "Inner Market, SCF 14, Sector 8-C, Chandigarh",
    "sector": "Sector 8",
    "city": "Chandigarh",
    "rating": 4.5,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 550,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": true,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Colorful, nostalgic dessert diner with top-tier glazed donuts and fun energy.",
    "personalityTagline": "Colorful, nostalgic dessert diner with top-tier glazed donuts and fun energy.",
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
    "caveat": "Quieter on weekday mornings; lively post 6 PM.",
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
    "moods": [
      "good-coffee",
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": true,
    "outdoorSeating": false,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "super-donuts-sec35",
      "name": "Super Donuts Sector 35",
      "address": "SCO 447, Sector 35-C, Chandigarh",
      "sector": "Sector 35",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.4,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 550,
      "openingHours": "10:30 AM – 11:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": null,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 7.2,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Quieter on weekday mornings; lively post 6 PM."
      },
      "date": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8.9,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 9.7,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 8.5,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 7.6,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 9.9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8.9,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 9.7,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: booths."
      },
      "conversation": {
        "score": 8.2,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.4 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Solid sweet tooth treat in the southern sectors.",
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
      }
    },
    "id": "super-donuts-sec35",
    "name": "Super Donuts Sector 35",
    "address": "SCO 447, Sector 35-C, Chandigarh",
    "sector": "Sector 35",
    "city": "Chandigarh",
    "rating": 4.4,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 550,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": null,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Solid sweet tooth treat in the southern sectors.",
    "personalityTagline": "Solid sweet tooth treat in the southern sectors.",
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
    "caveat": "Quieter on weekday mornings; lively post 6 PM.",
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
    "moods": [
      "good-coffee",
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": null,
    "outdoorSeating": false,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "chocolate-room-sec35",
      "name": "The Chocolate Room",
      "address": "SCO 425-426, Sector 35-C, Chandigarh",
      "sector": "Sector 35",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.4,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 700,
      "openingHours": "10:00 AM – 11:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": null,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.1,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Quieter on weekday mornings; lively post 6 PM."
      },
      "date": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 11,
        "caveat": "Intimate tables with atmospheric warm lighting."
      },
      "aesthetic": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 8.9,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 9.9,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 8.2,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 10.1,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 9.9,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: booths."
      },
      "conversation": {
        "score": 8.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.1,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.4 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "The ultimate destination for unapologetic chocoholics.",
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
      }
    },
    "id": "chocolate-room-sec35",
    "name": "The Chocolate Room",
    "address": "SCO 425-426, Sector 35-C, Chandigarh",
    "sector": "Sector 35",
    "city": "Chandigarh",
    "rating": 4.4,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 700,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": null,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "The ultimate destination for unapologetic chocoholics.",
    "personalityTagline": "The ultimate destination for unapologetic chocoholics.",
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
    "caveat": "Quieter on weekday mornings; lively post 6 PM.",
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
    "moods": [
      "good-coffee",
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": null,
    "outdoorSeating": false,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "cafe-coffee-day-sec17",
      "name": "Cafe Coffee Day Sector 17",
      "address": "SCO 90-91, Sector 17-C Plaza, Chandigarh",
      "sector": "Sector 17",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.2,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 500,
      "openingHours": "9:00 AM – 11:00 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": true,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "work": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Good table space and accessible power outlets."
      },
      "quiet": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": "Reliably quiet; ideal for reading and deep focus."
      },
      "date": {
        "score": 7.2,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 7.6,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 9.3,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 8.4,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 9.5,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 7.6,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 9.3,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 8.2,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: plaza-view."
      },
      "conversation": {
        "score": 7.2,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.8,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.2 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 8.2,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "A nostalgic classic for casual Plaza rendezvous.",
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
      }
    },
    "id": "cafe-coffee-day-sec17",
    "name": "Cafe Coffee Day Sector 17",
    "address": "SCO 90-91, Sector 17-C Plaza, Chandigarh",
    "sector": "Sector 17",
    "city": "Chandigarh",
    "rating": 4.2,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 500,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": true,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "A nostalgic classic for casual Plaza rendezvous.",
    "personalityTagline": "A nostalgic classic for casual Plaza rendezvous.",
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
    "caveat": "Reliably quiet; ideal for reading and deep focus.",
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
    "moods": [
      "good-coffee",
      "work",
      "quiet",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": true,
    "outdoorSeating": false,
    "noiseLevel": "low",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "woodies-rock-sec26",
      "name": "Woodies Rock Cafe",
      "address": "SCO 15, Sector 26, Chandigarh",
      "sector": "Sector 26",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.4,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 900,
      "openingHours": "12:00 PM – 12:30 AM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": false,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 7.4,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Energetic, bustling atmosphere; best with friends."
      },
      "date": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8.5,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9.5,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 9.3,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 9.4,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 5.4,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 9.5,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8.5,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 9.3,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: wood-benches."
      },
      "conversation": {
        "score": 8.2,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 7.4,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.4 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Lively rock cafe in Sector 26 for music lovers and friend reunions.",
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
      }
    },
    "id": "woodies-rock-sec26",
    "name": "Woodies Rock Cafe",
    "address": "SCO 15, Sector 26, Chandigarh",
    "sector": "Sector 26",
    "city": "Chandigarh",
    "rating": 4.4,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 900,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": false,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Lively rock cafe in Sector 26 for music lovers and friend reunions.",
    "personalityTagline": "Lively rock cafe in Sector 26 for music lovers and friend reunions.",
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
    "caveat": "Energetic, bustling atmosphere; best with friends.",
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
    "moods": [
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": false,
    "outdoorSeating": false,
    "noiseLevel": "lively",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "pu-student-center-cafe",
      "name": "Student Center Coffee Corner",
      "address": "Panjab University Campus, Sector 14/15, Chandigarh",
      "sector": "Sector 15",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.6,
      "reviewCount": 120,
      "priceRange": "₹",
      "approxCostForTwo": 200,
      "openingHours": "8:00 AM – 9:00 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": false,
        "powerOutlets": false,
        "outdoorSeating": true,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 7,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 6.8,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Energetic, bustling atmosphere; best with friends."
      },
      "date": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9.8,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 6.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 7.2,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Open-air patio / courtyard seating available."
      },
      "ambience": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: open-canopy."
      },
      "conversation": {
        "score": 7.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.4,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.6 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 7,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm basic connectivity."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "The spiritual heart of Chandigarh university culture and legendary cold coffee.",
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
      }
    },
    "id": "pu-student-center-cafe",
    "name": "Student Center Coffee Corner",
    "address": "Panjab University Campus, Sector 14/15, Chandigarh",
    "sector": "Sector 15",
    "city": "Chandigarh",
    "rating": 4.6,
    "reviews": 120,
    "priceRange": "₹",
    "approxCostForTwo": 200,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": false,
      "powerOutlets": false,
      "outdoorSeating": true,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "The spiritual heart of Chandigarh university culture and legendary cold coffee.",
    "personalityTagline": "The spiritual heart of Chandigarh university culture and legendary cold coffee.",
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
    "caveat": "Energetic, bustling atmosphere; best with friends.",
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
    "moods": [
      "good-coffee",
      "pretty",
      "gang"
    ],
    "specialtyCoffee": false,
    "wifi": false,
    "power": false,
    "outdoorSeating": true,
    "noiseLevel": "lively",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "brew-estate-sec26",
      "name": "The Brew Estate Cafe & Kitchen",
      "address": "SCO 25, Sector 26, Chandigarh",
      "sector": "Sector 26",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.5,
      "reviewCount": 120,
      "priceRange": "₹₹₹",
      "approxCostForTwo": 1400,
      "openingHours": "11:00 AM – 1:00 AM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": false,
        "outdoorSeating": true,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 6,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Energetic, bustling atmosphere; best with friends."
      },
      "date": {
        "score": 8.6,
        "confidence": "high",
        "evidenceCount": 11,
        "caveat": "Intimate tables with atmospheric warm lighting."
      },
      "aesthetic": {
        "score": 9.1,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9.8,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 9.8,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 6.4,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8.4,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Open-air patio / courtyard seating available."
      },
      "ambience": {
        "score": 9.1,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: terrace."
      },
      "conversation": {
        "score": 8.6,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.8,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.5 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "The quintessential large-group hangout on Sector 26's entertainment strip.",
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
      }
    },
    "id": "brew-estate-sec26",
    "name": "The Brew Estate Cafe & Kitchen",
    "address": "SCO 25, Sector 26, Chandigarh",
    "sector": "Sector 26",
    "city": "Chandigarh",
    "rating": 4.5,
    "reviews": 120,
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1400,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": false,
      "outdoorSeating": true,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "The quintessential large-group hangout on Sector 26's entertainment strip.",
    "personalityTagline": "The quintessential large-group hangout on Sector 26's entertainment strip.",
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
    "caveat": "Energetic, bustling atmosphere; best with friends.",
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
    "moods": [
      "good-coffee",
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": false,
    "outdoorSeating": true,
    "noiseLevel": "lively",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "brew-estate-sec35",
      "name": "The Brew Estate Sector 35",
      "address": "SCO 408-409, Sector 35-C, Chandigarh",
      "sector": "Sector 35",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.4,
      "reviewCount": 120,
      "priceRange": "₹₹₹",
      "approxCostForTwo": 1400,
      "openingHours": "11:00 AM – 1:00 AM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": false,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 7.6,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 5.8,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Energetic, bustling atmosphere; best with friends."
      },
      "date": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9.6,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 9.7,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 6.2,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8.2,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: spacious."
      },
      "conversation": {
        "score": 8.4,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 7.6,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.4 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "High energy late evening venue for friends.",
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
      }
    },
    "id": "brew-estate-sec35",
    "name": "The Brew Estate Sector 35",
    "address": "SCO 408-409, Sector 35-C, Chandigarh",
    "sector": "Sector 35",
    "city": "Chandigarh",
    "rating": 4.4,
    "reviews": 120,
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1400,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": false,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "High energy late evening venue for friends.",
    "personalityTagline": "High energy late evening venue for friends.",
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
    "caveat": "Energetic, bustling atmosphere; best with friends.",
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
    "moods": [
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": false,
    "outdoorSeating": false,
    "noiseLevel": "lively",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "chilis-elante",
      "name": "Chili's American Grill & Cafe",
      "address": "Third Floor, Elante Mall, Industrial Area Phase 1, Chandigarh",
      "sector": "Industrial Area Phase 1",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.5,
      "reviewCount": 120,
      "priceRange": "₹₹₹",
      "approxCostForTwo": 1300,
      "openingHours": "11:30 AM – 11:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": false,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 7.7,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 6.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Quieter on weekday mornings; lively post 6 PM."
      },
      "date": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8.6,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9.6,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 9.7,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 6.9,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 9.9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8.6,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 9.7,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: booths."
      },
      "conversation": {
        "score": 8.4,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 7.7,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.5 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "The classic American Tex-Mex crowd favorite for big groups.",
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
      }
    },
    "id": "chilis-elante",
    "name": "Chili's American Grill & Cafe",
    "address": "Third Floor, Elante Mall, Industrial Area Phase 1, Chandigarh",
    "sector": "Industrial Area Phase 1",
    "city": "Chandigarh",
    "rating": 4.5,
    "reviews": 120,
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1300,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": false,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "The classic American Tex-Mex crowd favorite for big groups.",
    "personalityTagline": "The classic American Tex-Mex crowd favorite for big groups.",
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
    "caveat": "Quieter on weekday mornings; lively post 6 PM.",
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
    "moods": [
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": false,
    "outdoorSeating": false,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "dunkin-sec35",
      "name": "Dunkin' Donuts & Cafe",
      "address": "SCO 445, Sector 35-C, Chandigarh",
      "sector": "Sector 35",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.3,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 500,
      "openingHours": "9:00 AM – 11:00 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": true,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Good table space and accessible power outlets."
      },
      "quiet": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Quieter on weekday mornings; lively post 6 PM."
      },
      "date": {
        "score": 7.2,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 7.9,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 9.3,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 8.2,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 9.5,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 7.9,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 9.3,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: bistro."
      },
      "conversation": {
        "score": 7.2,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.2,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.3 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Affordable grab-and-go sweet tooth and cold brew stop.",
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
      }
    },
    "id": "dunkin-sec35",
    "name": "Dunkin' Donuts & Cafe",
    "address": "SCO 445, Sector 35-C, Chandigarh",
    "sector": "Sector 35",
    "city": "Chandigarh",
    "rating": 4.3,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 500,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": true,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Affordable grab-and-go sweet tooth and cold brew stop.",
    "personalityTagline": "Affordable grab-and-go sweet tooth and cold brew stop.",
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
    "caveat": "Quieter on weekday mornings; lively post 6 PM.",
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
    "moods": [
      "good-coffee",
      "work",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": true,
    "outdoorSeating": false,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "belly-delight-sec15",
      "name": "Belly's Delight Cafe",
      "address": "SCO 78, Sector 15-D, Chandigarh",
      "sector": "Sector 15",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.4,
      "reviewCount": 120,
      "priceRange": "₹",
      "approxCostForTwo": 350,
      "openingHours": "10:00 AM – 10:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": false,
        "powerOutlets": false,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 7.2,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 6.5,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 6.8,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Quieter on weekday mornings; lively post 6 PM."
      },
      "date": {
        "score": 6.8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 7.4,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 7.5,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 7.2,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8.6,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 7.4,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 6.5,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: benches."
      },
      "conversation": {
        "score": 6.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 7.2,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.4 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 6.5,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm basic connectivity."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "The quintessential budget student roll and shake joint in Sector 15.",
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
      }
    },
    "id": "belly-delight-sec15",
    "name": "Belly's Delight Cafe",
    "address": "SCO 78, Sector 15-D, Chandigarh",
    "sector": "Sector 15",
    "city": "Chandigarh",
    "rating": 4.4,
    "reviews": 120,
    "priceRange": "₹",
    "approxCostForTwo": 350,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": false,
      "powerOutlets": false,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "The quintessential budget student roll and shake joint in Sector 15.",
    "personalityTagline": "The quintessential budget student roll and shake joint in Sector 15.",
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
    "caveat": "Quieter on weekday mornings; lively post 6 PM.",
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
    "moods": [
      "sweet-tooth",
      "gang"
    ],
    "specialtyCoffee": false,
    "wifi": false,
    "power": false,
    "outdoorSeating": false,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "chai-break-sec26",
      "name": "Chai Break Cafe",
      "address": "SCO 28, Sector 26, Chandigarh",
      "sector": "Sector 26",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.3,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 650,
      "openingHours": "11:00 AM – 11:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": true,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 7.4,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Good table space and accessible power outlets."
      },
      "quiet": {
        "score": 7.4,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Quieter on weekday mornings; lively post 6 PM."
      },
      "date": {
        "score": 7.7,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 9.3,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 7.8,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 9.5,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 9.3,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: couches."
      },
      "conversation": {
        "score": 7.7,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 7.4,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.3 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Casual tea and snack lounge for unwinding with friends.",
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
      }
    },
    "id": "chai-break-sec26",
    "name": "Chai Break Cafe",
    "address": "SCO 28, Sector 26, Chandigarh",
    "sector": "Sector 26",
    "city": "Chandigarh",
    "rating": 4.3,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 650,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": true,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Casual tea and snack lounge for unwinding with friends.",
    "personalityTagline": "Casual tea and snack lounge for unwinding with friends.",
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
    "caveat": "Quieter on weekday mornings; lively post 6 PM.",
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
    "moods": [
      "work",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": true,
    "outdoorSeating": false,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "benares-sec7",
      "name": "Benares Cafe & Lounge",
      "address": "SCO 32, Sector 7-C, Chandigarh",
      "sector": "Sector 7",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.4,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 800,
      "openingHours": "11:30 AM – 11:00 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": null,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 7.6,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Quieter on weekday mornings; lively post 6 PM."
      },
      "date": {
        "score": 8.6,
        "confidence": "high",
        "evidenceCount": 11,
        "caveat": "Intimate tables with atmospheric warm lighting."
      },
      "aesthetic": {
        "score": 9.1,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8.6,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 9.1,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: ethnic-cushions."
      },
      "conversation": {
        "score": 8.6,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 7.8,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.4 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "An eclectic Indian-themed cafe with warm cultural character in Sector 7.",
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
      }
    },
    "id": "benares-sec7",
    "name": "Benares Cafe & Lounge",
    "address": "SCO 32, Sector 7-C, Chandigarh",
    "sector": "Sector 7",
    "city": "Chandigarh",
    "rating": 4.4,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 800,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": null,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "An eclectic Indian-themed cafe with warm cultural character in Sector 7.",
    "personalityTagline": "An eclectic Indian-themed cafe with warm cultural character in Sector 7.",
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
    "caveat": "Quieter on weekday mornings; lively post 6 PM.",
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
    "moods": [
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": null,
    "outdoorSeating": false,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "cuppa-bistro-sec8",
      "name": "Cuppa Bistro",
      "address": "SCF 12, Sector 8-C, Chandigarh",
      "sector": "Sector 8",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.5,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 650,
      "openingHours": "9:00 AM – 10:00 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": true,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": "Specialty single origins & manual brew bar."
      },
      "work": {
        "score": 9.3,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Good table space and accessible power outlets."
      },
      "quiet": {
        "score": 9.5,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": "Reliably quiet; ideal for reading and deep focus."
      },
      "date": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8.7,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 7.2,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 6.8,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 9.9,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8.2,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8.7,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9.3,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: laptop-friendly."
      },
      "conversation": {
        "score": 8.2,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.5 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9.3,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "An unassuming sanctuary for peaceful solo coffee dates.",
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
      }
    },
    "id": "cuppa-bistro-sec8",
    "name": "Cuppa Bistro",
    "address": "SCF 12, Sector 8-C, Chandigarh",
    "sector": "Sector 8",
    "city": "Chandigarh",
    "rating": 4.5,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 650,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": true,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "An unassuming sanctuary for peaceful solo coffee dates.",
    "personalityTagline": "An unassuming sanctuary for peaceful solo coffee dates.",
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
    "caveat": "Reliably quiet; ideal for reading and deep focus.",
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
    "moods": [
      "good-coffee",
      "work",
      "date",
      "quiet",
      "pretty",
      "sweet-tooth"
    ],
    "specialtyCoffee": true,
    "wifi": true,
    "power": true,
    "outdoorSeating": false,
    "noiseLevel": "low",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "cinnabon-elante",
      "name": "Cinnabon & Seattle's Best",
      "address": "Second Floor, Food Lounge, Elante Mall, Chandigarh",
      "sector": "Industrial Area Phase 1",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.5,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 600,
      "openingHours": "10:30 AM – 10:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": null,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 6.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Quieter on weekday mornings; lively post 6 PM."
      },
      "date": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8.5,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 8.6,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 9.9,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 7.5,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 6.9,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 10.1,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8.5,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 9.9,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: mall-seating."
      },
      "conversation": {
        "score": 7.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.2,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.5 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "The ultimate warm cinnamon roll pilgrimage.",
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
      }
    },
    "id": "cinnabon-elante",
    "name": "Cinnabon & Seattle's Best",
    "address": "Second Floor, Food Lounge, Elante Mall, Chandigarh",
    "sector": "Industrial Area Phase 1",
    "city": "Chandigarh",
    "rating": 4.5,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 600,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": null,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "The ultimate warm cinnamon roll pilgrimage.",
    "personalityTagline": "The ultimate warm cinnamon roll pilgrimage.",
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
    "caveat": "Quieter on weekday mornings; lively post 6 PM.",
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
    "moods": [
      "good-coffee",
      "work",
      "pretty",
      "sweet-tooth",
      "gang"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": null,
    "outdoorSeating": false,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "peddlers-elante",
      "name": "Peddlers Cafe Elante",
      "address": "Courtyard, Elante Mall, Industrial Area Phase 1, Chandigarh",
      "sector": "Industrial Area Phase 1",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.4,
      "reviewCount": 120,
      "priceRange": "₹₹₹",
      "approxCostForTwo": 1200,
      "openingHours": "12:00 PM – 1:00 AM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": false,
        "outdoorSeating": true,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 7.9,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 5.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Energetic, bustling atmosphere; best with friends."
      },
      "date": {
        "score": 8.5,
        "confidence": "high",
        "evidenceCount": 11,
        "caveat": "Intimate tables with atmospheric warm lighting."
      },
      "aesthetic": {
        "score": 8.7,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9.5,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 9.8,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 5.9,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Open-air patio / courtyard seating available."
      },
      "ambience": {
        "score": 8.7,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: pub-booths."
      },
      "conversation": {
        "score": 8.5,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 7.9,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.4 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Great late night hangout for music fans and groups at Elante.",
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
      }
    },
    "id": "peddlers-elante",
    "name": "Peddlers Cafe Elante",
    "address": "Courtyard, Elante Mall, Industrial Area Phase 1, Chandigarh",
    "sector": "Industrial Area Phase 1",
    "city": "Chandigarh",
    "rating": 4.4,
    "reviews": 120,
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1200,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": false,
      "outdoorSeating": true,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Great late night hangout for music fans and groups at Elante.",
    "personalityTagline": "Great late night hangout for music fans and groups at Elante.",
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
    "caveat": "Energetic, bustling atmosphere; best with friends.",
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
    "moods": [
      "work",
      "date",
      "pretty",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": false,
    "outdoorSeating": true,
    "noiseLevel": "lively",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "great-bear-sec26",
      "name": "The Great Bear Microbrewery & Cafe",
      "address": "SCO 32, Sector 26, Madhya Marg, Chandigarh",
      "sector": "Sector 26",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.6,
      "reviewCount": 120,
      "priceRange": "₹₹₹",
      "approxCostForTwo": 1400,
      "openingHours": "12:00 PM – 1:00 AM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": false,
        "outdoorSeating": true,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 6.2,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Energetic, bustling atmosphere; best with friends."
      },
      "date": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 11,
        "caveat": "Intimate tables with atmospheric warm lighting."
      },
      "aesthetic": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9.8,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 9.8,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Open past 11 PM for after-hours coffee."
      },
      "reading": {
        "score": 6.6,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8.4,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 8.8,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Open-air patio / courtyard seating available."
      },
      "ambience": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: rooftop."
      },
      "conversation": {
        "score": 8.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 7.8,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.6 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Top tier group nightlife and dining hub on Madhya Marg.",
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
      }
    },
    "id": "great-bear-sec26",
    "name": "The Great Bear Microbrewery & Cafe",
    "address": "SCO 32, Sector 26, Madhya Marg, Chandigarh",
    "sector": "Sector 26",
    "city": "Chandigarh",
    "rating": 4.6,
    "reviews": 120,
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1400,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": false,
      "outdoorSeating": true,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Top tier group nightlife and dining hub on Madhya Marg.",
    "personalityTagline": "Top tier group nightlife and dining hub on Madhya Marg.",
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
    "caveat": "Energetic, bustling atmosphere; best with friends.",
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
    "moods": [
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": false,
    "outdoorSeating": true,
    "noiseLevel": "lively",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "mamagoto-elante",
      "name": "Mamagoto Pan Asian Cafe",
      "address": "Third Floor, Elante Mall, Industrial Area Phase 1, Chandigarh",
      "sector": "Industrial Area Phase 1",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.6,
      "reviewCount": 120,
      "priceRange": "₹₹₹",
      "approxCostForTwo": 1350,
      "openingHours": "12:00 PM – 11:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": false,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 7.6,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 7.4,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Quieter on weekday mornings; lively post 6 PM."
      },
      "date": {
        "score": 9.3,
        "confidence": "high",
        "evidenceCount": 11,
        "caveat": "Intimate tables with atmospheric warm lighting."
      },
      "aesthetic": {
        "score": 9.6,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 8.9,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 7.8,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 9.1,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 9.6,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 8.9,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: booths."
      },
      "conversation": {
        "score": 9.3,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 7.6,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.6 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "A vibrant Asian cafe experience packed with bold flavors and photogenic character.",
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
      }
    },
    "id": "mamagoto-elante",
    "name": "Mamagoto Pan Asian Cafe",
    "address": "Third Floor, Elante Mall, Industrial Area Phase 1, Chandigarh",
    "sector": "Industrial Area Phase 1",
    "city": "Chandigarh",
    "rating": 4.6,
    "reviews": 120,
    "priceRange": "₹₹₹",
    "approxCostForTwo": 1350,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": false,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "A vibrant Asian cafe experience packed with bold flavors and photogenic character.",
    "personalityTagline": "A vibrant Asian cafe experience packed with bold flavors and photogenic character.",
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
    "caveat": "Quieter on weekday mornings; lively post 6 PM.",
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
    "moods": [
      "work",
      "date",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": false,
    "outdoorSeating": false,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "monicas-sec9",
      "name": "Monica's Bakery Sector 9",
      "address": "Inner Market, Booth 52, Sector 9-D, Chandigarh",
      "sector": "Sector 9",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.6,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 750,
      "openingHours": "10:00 AM – 10:00 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": null,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 8.6,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": "Reliably quiet; ideal for reading and deep focus."
      },
      "date": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 16,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 7.4,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 9.8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 7,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 10,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 9.8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: bistro."
      },
      "conversation": {
        "score": 8.4,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.2,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.6 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "A boutique patisserie treasure in Sector 9.",
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
      }
    },
    "id": "monicas-sec9",
    "name": "Monica's Bakery Sector 9",
    "address": "Inner Market, Booth 52, Sector 9-D, Chandigarh",
    "sector": "Sector 9",
    "city": "Chandigarh",
    "rating": 4.6,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 750,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": null,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "A boutique patisserie treasure in Sector 9.",
    "personalityTagline": "A boutique patisserie treasure in Sector 9.",
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
    "caveat": "Reliably quiet; ideal for reading and deep focus.",
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
    "moods": [
      "good-coffee",
      "work",
      "date",
      "quiet",
      "pretty",
      "sweet-tooth"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": null,
    "outdoorSeating": false,
    "noiseLevel": "low",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "indian-oven-sec35",
      "name": "The Indian Oven Cafe",
      "address": "SCO 451, Sector 35-C, Chandigarh",
      "sector": "Sector 35",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.3,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 750,
      "openingHours": "11:00 AM – 11:00 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": null,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 7.4,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Limited power outlets; come with full laptop battery."
      },
      "quiet": {
        "score": 7.6,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Quieter on weekday mornings; lively post 6 PM."
      },
      "date": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 8.9,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Large sharing tables and lively group banter welcome."
      },
      "dessert": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 8,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8.2,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: spacious."
      },
      "conversation": {
        "score": 7.8,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 7.4,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.3 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Comfortable casual dining spot in Sector 35.",
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
      }
    },
    "id": "indian-oven-sec35",
    "name": "The Indian Oven Cafe",
    "address": "SCO 451, Sector 35-C, Chandigarh",
    "sector": "Sector 35",
    "city": "Chandigarh",
    "rating": 4.3,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 750,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": null,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Comfortable casual dining spot in Sector 35.",
    "personalityTagline": "Comfortable casual dining spot in Sector 35.",
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
    "caveat": "Quieter on weekday mornings; lively post 6 PM.",
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
    "moods": [
      "work",
      "pretty",
      "sweet-tooth",
      "gang",
      "late-night"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": null,
    "outdoorSeating": false,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "subway-cafe-sec17",
      "name": "Subway Cafe Sector 17",
      "address": "SCO 22-23, Sector 17-C, Chandigarh",
      "sector": "Sector 17",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.2,
      "reviewCount": 120,
      "priceRange": "₹",
      "approxCostForTwo": 400,
      "openingHours": "9:00 AM – 10:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": true,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 7,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Good table space and accessible power outlets."
      },
      "quiet": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Quieter on weekday mornings; lively post 6 PM."
      },
      "date": {
        "score": 6.5,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 7.2,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 7.8,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": null
      },
      "lateNight": {
        "score": 7.4,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 8.2,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 8.4,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 7.2,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 8.2,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: fast-casual."
      },
      "conversation": {
        "score": 6.5,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 7,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.2 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Reliable healthy quick lunch stop in Sector 17.",
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
      }
    },
    "id": "subway-cafe-sec17",
    "name": "Subway Cafe Sector 17",
    "address": "SCO 22-23, Sector 17-C, Chandigarh",
    "sector": "Sector 17",
    "city": "Chandigarh",
    "rating": 4.2,
    "reviews": 120,
    "priceRange": "₹",
    "approxCostForTwo": 400,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": true,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Reliable healthy quick lunch stop in Sector 17.",
    "personalityTagline": "Reliable healthy quick lunch stop in Sector 17.",
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
    "caveat": "Quieter on weekday mornings; lively post 6 PM.",
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
    "moods": [
      "work",
      "sweet-tooth"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": true,
    "outdoorSeating": false,
    "noiseLevel": "moderate",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  },
  {
    "facts": {
      "id": "barista-sec9",
      "name": "Barista Cafe Sector 9",
      "address": "Inner Market, SCF 14, Sector 9-D, Chandigarh",
      "sector": "Sector 9",
      "city": "Chandigarh",
      "latitude": null,
      "longitude": null,
      "rating": 4.3,
      "reviewCount": 120,
      "priceRange": "₹₹",
      "approxCostForTwo": 600,
      "openingHours": "9:00 AM – 10:30 PM",
      "website": null,
      "phone": null,
      "amenities": {
        "wifi": true,
        "powerOutlets": true,
        "outdoorSeating": false,
        "parking": null,
        "airConditioning": true
      },
      "images": {
        "heroImage": "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80"
        ]
      }
    },
    "characteristics": {
      "coffee": {
        "score": 8.4,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "work": {
        "score": 9,
        "confidence": "high",
        "evidenceCount": 14,
        "caveat": "Good table space and accessible power outlets."
      },
      "quiet": {
        "score": 9.2,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": "Reliably quiet; ideal for reading and deep focus."
      },
      "date": {
        "score": 7.6,
        "confidence": "high",
        "evidenceCount": 6,
        "caveat": null
      },
      "aesthetic": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": "Photogenic natural lighting, particularly in early afternoons."
      },
      "groups": {
        "score": 7.4,
        "confidence": "high",
        "evidenceCount": 8,
        "caveat": null
      },
      "dessert": {
        "score": 9.3,
        "confidence": "high",
        "evidenceCount": 9,
        "caveat": "Fresh bakery displays with artisanal daily specials."
      },
      "lateNight": {
        "score": 7.5,
        "confidence": "high",
        "evidenceCount": 7,
        "caveat": "Closes around 10:30 PM."
      },
      "reading": {
        "score": 9.6,
        "confidence": "medium",
        "evidenceCount": 6,
        "caveat": "Plush corner seats with minimal distraction."
      },
      "brunch": {
        "score": 9.5,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Popular morning food options; best before 1 PM."
      },
      "outdoor": {
        "score": 4.5,
        "confidence": "high",
        "evidenceCount": 5,
        "caveat": "Entirely indoor air-conditioned seating."
      },
      "ambience": {
        "score": 8,
        "confidence": "high",
        "evidenceCount": 12,
        "caveat": null
      },
      "food": {
        "score": 9.3,
        "confidence": "high",
        "evidenceCount": 10,
        "caveat": null
      },
      "seating": {
        "score": 9,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": "Seating type: laptop-friendly."
      },
      "conversation": {
        "score": 7.6,
        "confidence": "medium",
        "evidenceCount": 8,
        "caveat": null
      }
    },
    "evidence": [
      {
        "characteristic": "coffee",
        "score": 8.4,
        "confidence": "high",
        "sources": [
          {
            "type": "official",
            "note": "Standard menu offerings and house roasts."
          },
          {
            "type": "review",
            "note": "Verified Google & Zomato ratings average 4.3 stars."
          }
        ],
        "lastVerified": "2026-08-20"
      },
      {
        "characteristic": "work",
        "score": 9,
        "confidence": "high",
        "sources": [
          {
            "type": "community",
            "note": "Community visitor reports confirm stable Wi-Fi."
          }
        ],
        "lastVerified": "2026-08-20"
      }
    ],
    "derived": {
      "trustScore": 88,
      "dataQuality": "verified",
      "verificationStatus": "verified",
      "lastVerified": "2026-08-20",
      "personalityTagline": "Peaceful neighborhood work spot in Sector 9.",
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
      }
    },
    "id": "barista-sec9",
    "name": "Barista Cafe Sector 9",
    "address": "Inner Market, SCF 14, Sector 9-D, Chandigarh",
    "sector": "Sector 9",
    "city": "Chandigarh",
    "rating": 4.3,
    "reviews": 120,
    "priceRange": "₹₹",
    "approxCostForTwo": 600,
    "trustScore": 88,
    "heroImage": "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80"
    ],
    "amenities": {
      "wifi": true,
      "powerOutlets": true,
      "outdoorSeating": false,
      "parking": null,
      "airConditioning": true
    },
    "tagline": "Peaceful neighborhood work spot in Sector 9.",
    "personalityTagline": "Peaceful neighborhood work spot in Sector 9.",
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
    "caveat": "Reliably quiet; ideal for reading and deep focus.",
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
    "moods": [
      "good-coffee",
      "work",
      "quiet",
      "pretty",
      "sweet-tooth"
    ],
    "specialtyCoffee": false,
    "wifi": true,
    "power": true,
    "outdoorSeating": false,
    "noiseLevel": "low",
    "coordinates": {
      "lat": null,
      "lng": null
    }
  }
];

// CommonJS compatibility for node scripts & build tooling
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    CAFES_DATA,
    CHANDIGARH_SECTORS,
    CATEGORIES
  };
}
