import fs from 'fs';
import path from 'path';

/**
 * CAFORA OpenStreetMap / Overpass API Discovery & Sync Utility
 * 
 * Sourcing real cafes in Chandigarh and surrounding sectors.
 * Respects public Overpass API usage guidelines:
 * - Caches discovery results in server/data/osm_cache.json
 * - Uses reasonable query boundaries for Chandigarh (30.65, 76.68 to 30.82, 76.88)
 * - Includes proper OpenStreetMap attribution
 */

const CACHE_DIR = path.resolve('server/data');
const CACHE_FILE = path.join(CACHE_DIR, 'osm_cache.json');
const OVERPASS_ENDPOINT = 'https://overpass-api.de/api/interpreter';

// Chandigarh bounding box: [minLat, minLon, maxLat, maxLon]
const CHANDIGARH_BBOX = '30.65,76.68,30.82,76.88';

export async function fetchOSMCafes(options = {}) {
  const { forceRefresh = false, timeout = 25000 } = options;

  // 1. Check local cache first unless forceRefresh is true
  if (!forceRefresh && fs.existsSync(CACHE_FILE)) {
    try {
      const cached = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8'));
      const cacheAgeHours = (Date.now() - new Date(cached.fetchedAt).getTime()) / (1000 * 60 * 60);
      if (cacheAgeHours < 168) { // 7 days cache validity
        console.log(`[OSM] Using cached OpenStreetMap data (${cached.cafes.length} cafes, fetched ${Math.round(cacheAgeHours)}h ago).`);
        return cached;
      }
    } catch (err) {
      console.warn('[OSM] Cache read failed, fetching fresh from Overpass API:', err.message);
    }
  }

  // 2. Query Overpass API
  const query = `
    [out:json][timeout:25];
    (
      node["amenity"="cafe"](${CHANDIGARH_BBOX});
      way["amenity"="cafe"](${CHANDIGARH_BBOX});
    );
    out center tags;
  `;

  console.log('[OSM] Querying Overpass API for Chandigarh cafes...');
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(OVERPASS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'CAFORA-CafeFinder/1.0 (https://caforacafe.vercel.app; info@cafora.local)'
      },
      body: `data=${encodeURIComponent(query)}`,
      signal: controller.signal
    });
    clearTimeout(timer);

    if (!response.ok) {
      throw new Error(`Overpass API responded with HTTP ${response.status}`);
    }

    const data = await response.json();
    const rawElements = data.elements || [];

    // Parse and normalize cafes from OSM elements
    const cafes = rawElements
      .filter(el => el.tags && (el.tags.name || el.tags['name:en']))
      .map(el => {
        const tags = el.tags || {};
        const lat = el.lat ?? el.center?.lat ?? null;
        const lon = el.lon ?? el.center?.lon ?? null;
        const name = tags.name || tags['name:en'];

        // Extract sector if present in address tags or name
        let sector = null;
        const addrStreet = tags['addr:street'] || '';
        const addrSub = tags['addr:suburb'] || '';
        const addrFull = `${addrStreet} ${addrSub} ${tags['addr:full'] || ''}`;
        const sectorMatch = (addrFull + ' ' + name).match(/Sector\s*(\d+[A-Za-z]?)/i);
        if (sectorMatch) {
          sector = `Sector ${sectorMatch[1].toUpperCase()}`;
        }

        return {
          osmId: `osm-${el.type}-${el.id}`,
          name: name.trim(),
          latitude: lat,
          longitude: lon,
          address: tags['addr:full'] || [tags['addr:housenumber'], addrStreet, addrSub, 'Chandigarh'].filter(Boolean).join(', ') || `${sector || 'Chandigarh'}`,
          sector: sector,
          city: 'Chandigarh',
          cuisine: tags.cuisine || null,
          openingHours: tags.opening_hours || null,
          phone: tags.phone || tags['contact:phone'] || null,
          website: tags.website || tags['contact:website'] || null,
          wifi: tags.internet_access === 'wlan' || tags.internet_access === 'yes' ? true : (tags.internet_access === 'no' ? false : null),
          outdoorSeating: tags.outdoor_seating === 'yes' ? true : (tags.outdoor_seating === 'no' ? false : null),
          wheelchair: tags.wheelchair === 'yes' ? true : (tags.wheelchair === 'no' ? false : null),
          source: 'OpenStreetMap',
          attribution: '© OpenStreetMap contributors (ODbL)'
        };
      });

    const result = {
      source: 'OpenStreetMap / Overpass API',
      attribution: '© OpenStreetMap contributors under ODbL license (https://www.openstreetmap.org/copyright)',
      fetchedAt: new Date().toISOString(),
      count: cafes.length,
      cafes
    };

    // Save to cache
    if (!fs.existsSync(CACHE_DIR)) {
      fs.mkdirSync(CACHE_DIR, { recursive: true });
    }
    fs.writeFileSync(CACHE_FILE, JSON.stringify(result, null, 2), 'utf-8');
    console.log(`[OSM] Successfully fetched and cached ${cafes.length} cafes from OpenStreetMap.`);

    return result;
  } catch (err) {
    console.warn(`[OSM] Overpass request failed (${err.message}). Checking existing cache...`);
    if (fs.existsSync(CACHE_FILE)) {
      return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8'));
    }
    return {
      source: 'OpenStreetMap',
      attribution: '© OpenStreetMap contributors',
      fetchedAt: new Date().toISOString(),
      count: 0,
      cafes: []
    };
  }
}

// Run directly if invoked from CLI
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve('scripts/sync-osm.mjs')) {
  const force = process.argv.includes('--force');
  fetchOSMCafes({ forceRefresh: force }).then(res => {
    console.log(`[OSM CLI] Done. Total cafes available: ${res.cafes.length}`);
  });
}
