import { CAFES_DATA } from '../src/data/cafesData.js';
import { calculateTrustScore } from '../src/utils/trustScore.js';

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

  const trustResult = calculateTrustScore(cafe);
  const sources = [
    ...(cafe.evidence?.sources || []),
    ...(cafe.facts?.provenance || [])
  ];
  const verificationStatus = cafe.cafora?.verificationStatus || cafe.verificationStatus || 'unverified';

  return res.status(200).json({
    status: 'success',
    cafeId: id,
    cafeName: cafe.name || cafe.identity?.name,
    trustScore: trustResult.score,
    components: trustResult.components,
    explanation: trustResult.explanation,
    verificationStatus,
    sourcesCount: sources.length,
    sourcesSummary: sources.map(s => ({
      sourceType: s.sourceType || s.type,
      sourceName: s.sourceName || s.name || 'Local Record',
      note: s.note
    })),
    confidence: cafe.evidence?.confidence || (sources.length > 0 ? 'medium' : 'unknown'),
    lastVerified: cafe.cafora?.lastVerified || cafe.lastVerified || null
  });
}
