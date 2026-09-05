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

  const detectedIntents = extractIntentFromQuery(q);
  const recommendations = getRecommendations(CAFES_DATA, {
    moods: detectedIntents,
    query: q,
    sector: sector || 'All Chandigarh'
  });

  return res.status(200).json({
    status: 'success',
    query: q,
    detectedIntents,
    results: recommendations
  });
}
