import { CAFES_DATA } from '../src/data/cafesData.js';
import recPkg from '../server/recommendationService.js';
const { normalizeSector } = recPkg;

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET, OPTIONS');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { id, sector, search, limit, page } = req.query || {};

  // Single Cafe by ID
  if (id !== undefined) {
    const cleanId = typeof id === 'string' ? id.trim() : id;
    if (!cleanId) {
      return res.status(400).json({ error: 'Invalid cafe id query parameter' });
    }
    const cafe = CAFES_DATA.find(c => (c.id === cleanId || c.identity?.id === cleanId));
    if (!cafe) {
      return res.status(404).json({ error: 'Cafe not found', id: cleanId });
    }
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=60');
    return res.status(200).json({ status: 'success', cafe });
  }

  // Parameter validation
  let parsedPage = null;
  if (page !== undefined) {
    const pageStr = typeof page === 'string' ? page.trim() : String(page);
    if (!/^\d+$/.test(pageStr) || parseInt(pageStr, 10) <= 0) {
      return res.status(400).json({ error: 'Invalid page parameter: must be a positive integer' });
    }
    parsedPage = parseInt(pageStr, 10);
  }

  let parsedLimit = null;
  if (limit !== undefined) {
    const limitStr = typeof limit === 'string' ? limit.trim() : String(limit);
    if (!/^\d+$/.test(limitStr) || parseInt(limitStr, 10) <= 0) {
      return res.status(400).json({ error: 'Invalid limit parameter: must be a positive integer' });
    }
    parsedLimit = parseInt(limitStr, 10);
  }

  // Filtered List
  let results = [...CAFES_DATA];

  const normSector = normalizeSector(sector);
  if (normSector && normSector !== normalizeSector('All Chandigarh')) {
    results = results.filter(c => {
      return normalizeSector(c.sector || c.identity?.sector) === normSector;
    });
  }

  const cleanSearch = typeof search === 'string' ? search.trim() : '';
  if (cleanSearch.length > 0) {
    const q = cleanSearch.toLowerCase();
    results = results.filter(c => {
      const name = (c.name || c.identity?.name || '').toLowerCase();
      const addr = (c.address || c.identity?.address || '').toLowerCase();
      const tagline = (c.cafora?.tagline || c.tagline || '').toLowerCase();
      return name.includes(q) || addr.includes(q) || tagline.includes(q);
    });
  }

  // Pagination & Limit handling
  const isPaginated = parsedPage !== null;
  let paginationMeta = null;

  if (isPaginated) {
    const activeLimit = parsedLimit !== null ? parsedLimit : 20;
    const totalItems = results.length;
    const totalPages = Math.ceil(totalItems / activeLimit);
    const hasNextPage = parsedPage < totalPages;
    const hasPreviousPage = parsedPage > 1 && totalPages > 0;

    const startIndex = (parsedPage - 1) * activeLimit;
    results = (startIndex >= totalItems) ? [] : results.slice(startIndex, startIndex + activeLimit);

    paginationMeta = {
      page: parsedPage,
      limit: activeLimit,
      totalItems,
      totalPages,
      hasNextPage,
      hasPreviousPage
    };
  } else if (parsedLimit !== null) {
    // Backward-compatible limit-only behavior without pagination metadata
    results = results.slice(0, parsedLimit);
  }

  res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=60');
  const responseData = {
    status: 'success',
    count: results.length,
    total: CAFES_DATA.length,
    cafes: results
  };

  if (paginationMeta) {
    responseData.pagination = paginationMeta;
  }

  return res.status(200).json(responseData);
}
