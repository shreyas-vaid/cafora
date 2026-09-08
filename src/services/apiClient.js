/**
 * CAFORA API CLIENT
 * 
 * Provides typed, resilient async client methods connecting the CAFORA frontend
 * to the backend API layer (/api/cafes, /api/recommendations, /api/moods, /api/search, /api/evidence, /api/trust).
 * 
 * Includes seamless fallback to local verified dataset if the serverless API
 * is unreachable (e.g. offline, local mock, or static build test).
 */

import { CAFES_DATA } from '../data/cafesData';
import { MOODS_LIST, rankCafesByVibeAndSearch } from '../utils/vibeEngine';
import { calculateTrustScore } from '../utils/trustScore';

const API_BASE = process.env.REACT_APP_API_BASE || '/api';

/**
 * Fetch all verified cafes with optional sector, search, or pagination limit
 */
export async function fetchCafes({ sector, search, limit } = {}) {
  try {
    const params = new URLSearchParams();
    if (sector && sector !== 'All Chandigarh') params.set('sector', sector);
    if (search && search.trim()) params.set('search', search.trim());
    if (limit) params.set('limit', limit);

    const res = await fetch(`${API_BASE}/cafes?${params.toString()}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return data.cafes || [];
  } catch (err) {
    // Graceful client fallback
    let list = [...CAFES_DATA];
    if (sector && sector !== 'All Chandigarh') {
      list = list.filter(c => (c.sector || c.identity?.sector || '').toLowerCase().includes(sector.toLowerCase()));
    }
    if (search && search.trim()) {
      const q = search.toLowerCase().trim();
      list = list.filter(c => 
        (c.name || '').toLowerCase().includes(q) || 
        (c.address || '').toLowerCase().includes(q)
      );
    }
    if (limit) list = list.slice(0, limit);
    return list;
  }
}

/**
 * Fetch single verified cafe by ID
 */
export async function fetchCafeById(id) {
  try {
    const res = await fetch(`${API_BASE}/cafes?id=${encodeURIComponent(id)}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return data.cafe || null;
  } catch (err) {
    return CAFES_DATA.find(c => c.id === id || c.identity?.id === id) || null;
  }
}

/**
 * Fetch 12 canonical moods
 */
export async function fetchMoods() {
  try {
    const res = await fetch(`${API_BASE}/moods`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return data.moods || MOODS_LIST;
  } catch (err) {
    return MOODS_LIST;
  }
}

/**
 * Fetch recommendations from the evidence-based recommendation engine
 */
export async function fetchRecommendations({ moods = [], query = '', sector = 'All Chandigarh', sort = 'recommended' } = {}) {
  try {
    const params = new URLSearchParams();
    if (moods && moods.length > 0) {
      params.set('moods', Array.isArray(moods) ? moods.join(',') : moods);
    }
    if (query && query.trim()) params.set('q', query.trim());
    if (sector && sector !== 'All Chandigarh') params.set('sector', sector);
    if (sort) params.set('sort', sort);

    const res = await fetch(`${API_BASE}/recommendations?${params.toString()}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return data;
  } catch (err) {
    // Graceful client-side recommendation calculation fallback
    let list = [...CAFES_DATA];
    if (sector && sector !== 'All Chandigarh') {
      list = list.filter(c => (c.sector || c.identity?.sector || '').toLowerCase().includes(sector.toLowerCase()));
    }
    const ranked = rankCafesByVibeAndSearch(list, moods, query);
    return {
      status: 'fallback',
      totalConsidered: list.length,
      count: ranked.length,
      levels: {
        strong: ranked.filter(c => (c.matchScore || 0) >= 80),
        good: ranked.filter(c => (c.matchScore || 0) >= 70 && (c.matchScore || 0) < 80),
        alternatives: ranked.filter(c => (c.matchScore || 0) < 70)
      },
      cafes: ranked
    };
  }
}

/**
 * Fetch search recommendations with intent detection
 */
export async function fetchSearch({ q = '', sector = 'All Chandigarh' } = {}) {
  try {
    const params = new URLSearchParams();
    if (q) params.set('q', q);
    if (sector && sector !== 'All Chandigarh') params.set('sector', sector);

    const res = await fetch(`${API_BASE}/search?${params.toString()}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    return fetchRecommendations({ query: q, sector });
  }
}

/**
 * Fetch evidence trail and source verification for a cafe
 */
export async function fetchEvidence(id) {
  try {
    const res = await fetch(`${API_BASE}/evidence?id=${encodeURIComponent(id)}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    const cafe = CAFES_DATA.find(c => c.id === id || c.identity?.id === id);
    return {
      status: 'fallback',
      cafeId: id,
      cafeName: cafe?.name,
      evidence: cafe?.evidence || { sources: [], confidence: 'unknown' },
      characteristics: cafe?.characteristics || {},
      lastVerified: cafe?.cafora?.lastVerified || '2026-08-20'
    };
  }
}

/**
 * Fetch trust score and provenance breakdown
 */
export async function fetchTrust(id) {
  try {
    const res = await fetch(`${API_BASE}/trust?id=${encodeURIComponent(id)}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    const cafe = CAFES_DATA.find(c => c.id === id || c.identity?.id === id);
    const trustResult = calculateTrustScore(cafe);
    return {
      status: 'offline_derived',
      cafeId: id,
      cafeName: cafe?.name,
      trustScore: trustResult.score,
      components: trustResult.components,
      explanation: trustResult.explanation,
      confidence: cafe?.evidence?.confidence || 'medium'
    };
  }
}
