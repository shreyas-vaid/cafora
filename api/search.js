import { CAFES_DATA } from '../src/data/cafesData.js';
import recPkg from '../server/recommendationService.js';
const { extractIntentFromQuery, getRecommendations } = recPkg;

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { q = '', sector } = req.query || {};

  const cleanQuery = typeof q === 'string' ? q.trim() : '';
  const cleanSector = typeof sector === 'string' ? sector.trim() : '';

  const detectedIntents = extractIntentFromQuery(cleanQuery);
  const recommendations = getRecommendations(CAFES_DATA, {
    moods: detectedIntents,
    query: cleanQuery,
    sector: cleanSector || 'All Chandigarh'
  });

  return res.status(200).json({
    status: 'success',
    query: cleanQuery,
    detectedIntents,
    results: recommendations
  });
}
