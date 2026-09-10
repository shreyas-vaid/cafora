import { CAFES_DATA } from '../src/data/cafesData.js';

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

  const { id, sector, search, limit } = req.query || {};

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

  // Filtered List
  let results = [...CAFES_DATA];

  const cleanSector = typeof sector === 'string' ? sector.trim() : sector;
  if (cleanSector && cleanSector !== 'All Chandigarh') {
    results = results.filter(c => {
      const s = (c.sector || c.identity?.sector || '').toLowerCase();
      return s.includes(cleanSector.toLowerCase());
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

  if (limit !== undefined) {
    const limitStr = typeof limit === 'string' ? limit.trim() : String(limit);
    if (!/^\d+$/.test(limitStr) || parseInt(limitStr, 10) <= 0) {
      return res.status(400).json({ error: 'Invalid limit parameter: must be a positive integer' });
    }
    const num = parseInt(limitStr, 10);
    results = results.slice(0, num);
  }

  res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=60');
  return res.status(200).json({
    status: 'success',
    count: results.length,
    total: CAFES_DATA.length,
    cafes: results
  });
}
