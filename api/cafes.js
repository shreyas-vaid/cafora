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

  const { id, sector, search, limit } = req.query || {};

  // Single Cafe by ID
  if (id) {
    const cafe = CAFES_DATA.find(c => (c.id === id || c.identity?.id === id));
    if (!cafe) {
      return res.status(404).json({ error: 'Cafe not found', id });
    }
    return res.status(200).json({ status: 'success', cafe });
  }

  // Filtered List
  let results = [...CAFES_DATA];

  if (sector && sector !== 'All Chandigarh') {
    results = results.filter(c => {
      const s = (c.sector || c.identity?.sector || '').toLowerCase();
      return s.includes(sector.toLowerCase());
    });
  }

  if (search && search.trim().length > 0) {
    const q = search.toLowerCase().trim();
    results = results.filter(c => {
      const name = (c.name || c.identity?.name || '').toLowerCase();
      const addr = (c.address || c.identity?.address || '').toLowerCase();
      const tagline = (c.cafora?.tagline || c.tagline || '').toLowerCase();
      return name.includes(q) || addr.includes(q) || tagline.includes(q);
    });
  }

  if (limit) {
    const num = parseInt(limit, 10);
    if (!isNaN(num) && num > 0) {
      results = results.slice(0, num);
    }
  }

  return res.status(200).json({
    status: 'success',
    count: results.length,
    total: CAFES_DATA.length,
    cafes: results
  });
}
