import { CAFES_DATA } from '../src/data/cafesData.js';
import recPkg from '../server/recommendationService.js';
const { getRecommendations } = recPkg;

export default async function handler(req, res) {
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

  const { moods, q, sector, sort } = req.query || {};

  const rawMoods = moods ? (Array.isArray(moods) ? moods : String(moods).split(',')) : [];
  const activeMoods = rawMoods
    .map(s => (typeof s === 'string' ? s.trim() : String(s).trim()))
    .filter(Boolean);

  const cleanQuery = typeof q === 'string' ? q.trim() : '';
  const cleanSector = typeof sector === 'string' ? sector.trim() : '';
  const cleanSort = typeof sort === 'string' ? sort.trim() : '';
  
  const recommendations = getRecommendations(CAFES_DATA, {
    moods: activeMoods,
    query: cleanQuery,
    sector: cleanSector || 'All Chandigarh',
    sort: cleanSort || 'recommended'
  });

  return res.status(200).json({
    status: 'success',
    ...recommendations
  });
}
