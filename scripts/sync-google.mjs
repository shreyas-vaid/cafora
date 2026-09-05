import fs from 'fs';
import path from 'path';

/**
 * CAFORA Google Places API (New) Enrichment Module
 * 
 * Provides optional server-side enrichment for verified cafes.
 * Strict Security & Policy Guidelines:
 * - Reads API key strictly server-side from process.env.GOOGLE_PLACES_API_KEY
 * - Never exposes API key to client-side code or public responses
 * - Uses minimum necessary field mask (id, displayName, formattedAddress, rating, userRatingCount, regularOpeningHours, websiteUri, nationalPhoneNumber)
 * - Complies with caching & attribution policies (stores placeId, fetchedAt, and ratingSource)
 * - Graceful fallback: If key is absent, returns verified baseline without error
 */

const CACHE_DIR = path.resolve('server/data');
const GOOGLE_CACHE_FILE = path.join(CACHE_DIR, 'google_places_cache.json');
const PLACES_NEW_ENDPOINT = 'https://places.googleapis.com/v1/places';

export async function enrichWithGooglePlaces(cafeList = [], options = {}) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    console.log('[Google Places] GOOGLE_PLACES_API_KEY not configured. Running with OSM + verified baseline.');
    return {
      status: 'skipped',
      reason: 'No API key provided',
      enrichedCount: 0,
      cafes: cafeList
    };
  }

  console.log(`[Google Places] API key detected. Checking enrichment for ${cafeList.length} cafes...`);

  // Load existing cache to minimize API requests
  let cache = {};
  if (fs.existsSync(GOOGLE_CACHE_FILE)) {
    try {
      cache = JSON.parse(fs.readFileSync(GOOGLE_CACHE_FILE, 'utf-8'));
    } catch (e) {
      cache = {};
    }
  }

  let enrichedCount = 0;
  const enrichedCafes = [];

  for (const cafe of cafeList) {
    const cafeId = cafe.id || cafe.identity?.id;
    const cafeName = cafe.name || cafe.identity?.name;
    const address = cafe.address || cafe.identity?.address || `${cafe.sector}, Chandigarh`;

    // Check if recently fetched (within 30 days)
    const cachedEntry = cache[cafeId];
    if (cachedEntry && (Date.now() - new Date(cachedEntry.fetchedAt).getTime()) < 30 * 24 * 60 * 60 * 1000) {
      enrichedCafes.push(mergeGoogleData(cafe, cachedEntry));
      continue;
    }

    // Otherwise, perform Text Search (New) with minimum field mask
    try {
      const searchRes = await fetch(`${PLACES_NEW_ENDPOINT}:searchText`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress,places.rating,places.userRatingCount,places.regularOpeningHours,places.websiteUri,places.nationalPhoneNumber'
        },
        body: JSON.stringify({
          textQuery: `${cafeName} ${address}`
        })
      });

      if (searchRes.ok) {
        const data = await searchRes.json();
        const place = data.places?.[0];
        if (place) {
          const entry = {
            placeId: place.id,
            googleRating: place.rating || null,
            googleReviewCount: place.userRatingCount || null,
            googleWebsite: place.websiteUri || null,
            googlePhone: place.nationalPhoneNumber || null,
            googleHours: place.regularOpeningHours?.weekdayDescriptions || null,
            fetchedAt: new Date().toISOString(),
            source: 'Google Places API (New)'
          };

          cache[cafeId] = entry;
          enrichedCount++;
          enrichedCafes.push(mergeGoogleData(cafe, entry));
          console.log(`[Google Places] Enriched ${cafeName}: ★ ${entry.googleRating} (${entry.googleReviewCount} reviews)`);
        } else {
          enrichedCafes.push(cafe);
        }
      } else {
        enrichedCafes.push(cafe);
      }
    } catch (err) {
      console.warn(`[Google Places] Failed to enrich ${cafeName}:`, err.message);
      enrichedCafes.push(cafe);
    }
  }

  // Persist cache
  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
  }
  fs.writeFileSync(GOOGLE_CACHE_FILE, JSON.stringify(cache, null, 2), 'utf-8');

  return {
    status: 'success',
    enrichedCount,
    cafes: enrichedCafes
  };
}

function mergeGoogleData(cafe, googleEntry) {
  const merged = { ...cafe };
  
  if (merged.facts) {
    if (googleEntry.googleRating) merged.facts.rating = googleEntry.googleRating;
    if (googleEntry.googleReviewCount) merged.facts.reviewCount = googleEntry.googleReviewCount;
    merged.facts.ratingSource = 'Google Places';
    if (googleEntry.googleWebsite) merged.facts.website = googleEntry.googleWebsite;
    if (googleEntry.googlePhone) merged.facts.phone = googleEntry.googlePhone;
  }

  if (merged.identity) {
    merged.identity.googlePlaceId = googleEntry.placeId;
  }

  merged.rating = merged.facts?.rating ?? merged.rating;
  merged.reviewCount = merged.facts?.reviewCount ?? merged.reviewCount;
  merged.reviews = merged.facts?.reviewCount ?? merged.reviews;
  merged.lastVerified = googleEntry.fetchedAt ? googleEntry.fetchedAt.split('T')[0] : merged.lastVerified;

  return merged;
}

// CLI execution test
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve('scripts/sync-google.mjs')) {
  enrichWithGooglePlaces([]).then(res => {
    console.log('[Google Places CLI] Status:', res.status, 'Enriched count:', res.enrichedCount);
  });
}
