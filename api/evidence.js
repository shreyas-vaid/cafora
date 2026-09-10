import { CAFES_DATA } from '../src/data/cafesData.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { id } = req.query || {};

  if (!id) {
    return res.status(400).json({ error: 'Missing cafe id query parameter' });
  }

  const cafe = CAFES_DATA.find(c => (c.id === id || c.identity?.id === id));
  if (!cafe) {
    return res.status(404).json({ error: 'Cafe not found', id });
  }

  return res.status(200).json({
    status: 'success',
    cafeId: id,
    cafeName: cafe.name || cafe.identity?.name || null,
    evidence: cafe.evidence || null,
    characteristics: cafe.characteristics || null,
    lastVerified: cafe.cafora?.lastVerified || cafe.evidence?.lastVerified || null
  });
}
