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

  const { moods, q, sector, sort } = req.query || {};

  const activeMoods = moods ? (Array.isArray(moods) ? moods : moods.split(',').map(s => s.trim())) : [];
  
  const recommendations = getRecommendations(CAFES_DATA, {
    moods: activeMoods,
    query: q || '',
    sector: sector || 'All Chandigarh',
    sort: sort || 'recommended'
  });

  return res.status(200).json({
    status: 'success',
    ...recommendations
  });
}
